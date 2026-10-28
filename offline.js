/**
 * 离线素材管理：分档下载（缩略图 / 完整插画 / 发音）、本机仓库导入、
 * 进度 / 取消 / 清理，以及可选的按需缓存（浏览时落盘 + LRU 上限）。
 *
 * 目录约定：
 *   <offlineDir>/public/atlas/{thumb,img,audio}/...   手动离线包（结构同上游 public/atlas）
 *   <cacheDir>/atlas/...                              按需缓存（可被 LRU 清理）
 *   <stateFile>                                       最近一次下载状态（重启后可见）
 */
import { existsSync, readFileSync } from 'node:fs'
import { copyFile, mkdir, readFile, readdir, rename, rm, stat, statfs, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'

const TIERS = ['thumb', 'img', 'audio']
const TIER_BYTES = { thumb: 84 * 1024 * 1024, img: 199 * 1024 * 1024, audio: 418 * 1024 * 1024 }
const AUDIO_KINDS = [
  ['uk', 2],
  ['us', 4],
  ['ex', 8],
  ['ex2', 16],
]
const MIME = { '.webp': 'image/webp', '.mp3': 'audio/mpeg' }

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

async function fileSize(file) {
  try {
    const info = await stat(file)
    return info.isFile() ? info.size : 0
  } catch {
    return 0
  }
}

async function walkFiles(dir) {
  const out = []
  let entries
  try {
    entries = await readdir(dir, { withFileTypes: true })
  } catch {
    return out
  }
  for (const entry of entries) {
    const file = join(dir, entry.name)
    if (entry.isDirectory()) out.push(...(await walkFiles(file)))
    else if (entry.isFile()) out.push(file)
  }
  return out
}

export async function buildMediaList(dataDir, tiers) {
  const index = JSON.parse(await readFile(join(dataDir, 'index.json'), 'utf8'))
  const wanted = new Set(tiers.filter((tier) => TIERS.includes(tier)))
  const files = []
  for (const row of index.words) {
    const id = row[0]
    const media = Number(row[6]) || 0
    if (wanted.has('thumb') && media & 1) files.push(`thumb/${id}.webp`)
    if (wanted.has('img') && media & 1) files.push(`img/${id}.webp`)
    if (wanted.has('audio')) {
      for (const [kind, bit] of AUDIO_KINDS) if (media & bit) files.push(`audio/${kind}/${id}.mp3`)
    }
  }
  return files
}

export function createOfflineManager(options) {
  const {
    dataDir,
    contentDir,
    mediaBase,
    offlineDir,
    cacheDir,
    stateFile,
    autoCache = false,
    cacheMaxBytes = 1024 * 1024 * 1024,
    concurrency = 6,
    logger,
  } = options

  const offlineAtlas = join(offlineDir, 'public', 'atlas')
  const cacheAtlas = join(cacheDir, 'atlas')

  let state = {
    state: 'idle',
    tiers: [],
    source: 'remote',
    total: 0,
    done: 0,
    failed: 0,
    failures: [],
    bytes: 0,
    approxBytes: 0,
    startedAt: null,
    finishedAt: null,
    error: null,
  }
  let controller = null
  let task = null
  let cacheBytes = 0
  let cacheFiles = 0
  let cachePruning = false
  const cacheInflight = new Map()

  // Restore the last visible state; a download cannot survive a process restart.
  try {
    const saved = JSON.parse(readFileSyncSafe(stateFile) || '{}')
    if (saved && typeof saved === 'object') {
      state = { ...state, ...saved, failures: Array.isArray(saved.failures) ? saved.failures : [] }
      if (state.state === 'downloading') state = { ...state, state: 'interrupted' }
    }
  } catch {
    /* ignore malformed state */
  }

  function readFileSyncSafe(file) {
    try {
      return existsSync(file) ? readFileSync(file, 'utf8') : null
    } catch {
      return null
    }
  }

  function snapshot() {
    const elapsed = state.startedAt ? (Date.now() - state.startedAt) / 1000 : 0
    const speed = state.state === 'downloading' && elapsed > 0 ? Math.round(state.bytes / elapsed) : 0
    const remaining = Math.max(0, state.approxBytes - state.bytes)
    const etaMs = speed > 0 ? Math.round((remaining / speed) * 1000) : null
    return {
      ...state,
      dir: offlineDir,
      cacheDir,
      autoCache,
      cacheMaxBytes,
      contentDirReady: Boolean(contentDir),
      contentDir: contentDir || null,
      speed,
      etaMs,
      tiersAvailable: TIERS,
    }
  }

  let persistTimer = null
  function persist(immediate = false) {
    const write = () => {
      persistTimer = null
      try {
        writeFile(stateFile, JSON.stringify(state), 'utf8').catch(() => {})
      } catch {
        /* ignore */
      }
    }
    if (immediate) {
      if (persistTimer) clearTimeout(persistTimer)
      write()
    } else if (!persistTimer) {
      persistTimer = setTimeout(write, 500)
    }
  }

  async function checkDisk(selectedTiers) {
    try {
      const info = await statfs(offlineDir)
      const free = info.bavail * info.bsize
      const existing = await walkFiles(offlineAtlas)
      let existingBytes = 0
      for (const file of existing) existingBytes += await fileSize(file)
      const need = selectedTiers.reduce((sum, tier) => sum + (TIER_BYTES[tier] || 0), 0)
      if (free < Math.max(0, need - existingBytes) + 64 * 1024 * 1024) {
        return { ok: false, free, need }
      }
      return { ok: true, free, need }
    } catch {
      return { ok: true, free: null, need: null }
    }
  }

  async function start({ tiers, source } = {}) {
    if (state.state === 'downloading') return { ok: false, error: 'already-downloading', status: snapshot() }
    const selected = Array.isArray(tiers) ? tiers.filter((tier) => TIERS.includes(tier)) : []
    if (selected.length === 0) return { ok: false, error: 'no-tiers' }
    if (source === 'repo' ? !contentDir : source !== 'remote') {
      return { ok: false, error: source === 'repo' ? 'no-content-dir' : 'invalid-source' }
    }
    if (task) await task.catch(() => {})
    const disk = await checkDisk(selected)
    if (!disk.ok) return { ok: false, error: 'insufficient-disk', disk }

    const files = await buildMediaList(dataDir, selected)
    state = {
      state: 'downloading',
      tiers: selected,
      source,
      total: files.length,
      done: 0,
      failed: 0,
      failures: [],
      bytes: 0,
      approxBytes: selected.reduce((sum, tier) => sum + (TIER_BYTES[tier] || 0), 0),
      startedAt: Date.now(),
      finishedAt: null,
      error: null,
    }
    controller = new AbortController()
    persist(true)

    task = (async () => {
      let cursor = 0
      const fetchOne = async (rel) => {
        const destination = join(offlineAtlas, rel)
        if ((await fileSize(destination)) > 0) return
        if (source === 'repo') {
          const sourceFile = join(contentDir, 'public', 'atlas', rel)
          await mkdir(dirname(destination), { recursive: true })
          await copyFile(sourceFile, destination)
          return
        }
        for (let attempt = 0; attempt < 3; attempt += 1) {
          const res = await fetch(`${mediaBase}/atlas/${rel}`, { signal: controller.signal })
          if (!res.ok) throw new Error(`HTTP ${res.status}`)
          const buffer = Buffer.from(await res.arrayBuffer())
          if (buffer.length === 0) throw new Error('empty-response')
          await mkdir(dirname(destination), { recursive: true })
          const temp = `${destination}.${process.pid}.tmp`
          await writeFile(temp, buffer)
          await rename(temp, destination)
          return
        }
      }
      const worker = async () => {
        for (;;) {
          if (controller.signal.aborted) return
          const index = cursor++
          if (index >= files.length) return
          const rel = files[index]
          try {
            const existed = await fileSize(join(offlineAtlas, rel))
            if (existed > 0) {
              state.done += 1
              state.bytes += existed
            } else {
              await fetchOne(rel)
              const size = await fileSize(join(offlineAtlas, rel))
              state.done += 1
              state.bytes += size
            }
          } catch (error) {
            if (controller.signal.aborted) return
            state.failed += 1
            if (state.failures.length < 50) state.failures.push(rel)
            if (state.failed <= 3) logger?.warn?.('word-atlas: offline file failed %s (%s)', rel, error?.message || error)
          }
          if ((state.done + state.failed) % 20 === 0) persist()
        }
      }
      await Promise.all(Array.from({ length: Math.max(1, Math.min(concurrency, 12)) }, worker))
      state.finishedAt = Date.now()
      state.state = controller.signal.aborted ? 'cancelled' : state.failed > 0 ? 'done-with-errors' : 'done'
      persist(true)
      logger?.info?.('word-atlas: offline download %s (%d/%d, %d failed)', state.state, state.done, state.total, state.failed)
    })().catch((error) => {
      state.state = 'error'
      state.error = String(error?.message || error)
      state.finishedAt = Date.now()
      persist(true)
      logger?.warn?.('word-atlas: offline download failed: %s', state.error)
    })

    return { ok: true, status: snapshot() }
  }

  function cancel() {
    if (state.state !== 'downloading' || !controller) return { ok: false, error: 'not-downloading' }
    controller.abort()
    state.state = 'cancelled'
    state.finishedAt = Date.now()
    persist(true)
    return { ok: true, status: snapshot() }
  }

  async function clear() {
    if (controller) {
      controller.abort()
      if (task) await task.catch(() => {})
    }
    await rm(offlineAtlas, { recursive: true, force: true })
    await rm(stateFile, { force: true })
    state = { state: 'idle', tiers: [], source: 'remote', total: 0, done: 0, failed: 0, failures: [], bytes: 0, approxBytes: 0, startedAt: null, finishedAt: null, error: null }
    controller = null
    task = null
    return { ok: true, status: snapshot() }
  }

  function localFileFor(rel) {
    for (const file of [join(offlineAtlas, rel), join(cacheAtlas, rel)]) {
      if (existsSync(file)) return file
    }
    return null
  }

  function contentTypeFor(rel) {
    return MIME[rel.slice(rel.lastIndexOf('.'))] || 'application/octet-stream'
  }

  async function fetchAndCache(rel) {
    const cacheFile = join(cacheAtlas, rel)
    if (existsSync(cacheFile)) return { file: cacheFile }
    if (cacheInflight.has(rel)) return cacheInflight.get(rel)
    const promise = (async () => {
      if (!autoCache) return null
      const res = await fetch(`${mediaBase}/atlas/${rel}`, { signal: AbortSignal.timeout(20000) })
      if (!res.ok) return null
      const type = res.headers.get('content-type') || contentTypeFor(rel)
      const buffer = Buffer.from(await res.arrayBuffer())
      if (buffer.length === 0) return null
      await mkdir(dirname(cacheFile), { recursive: true })
      const temp = `${cacheFile}.${process.pid}.tmp`
      await writeFile(temp, buffer)
      await rename(temp, cacheFile)
      cacheBytes += buffer.length
      cacheFiles += 1
      if (cacheBytes > cacheMaxBytes) void pruneCache()
      return { buffer, type }
    })().finally(() => cacheInflight.delete(rel))
    cacheInflight.set(rel, promise)
    return promise
  }

  async function pruneCache() {
    if (cachePruning) return
    cachePruning = true
    try {
      const files = await walkFiles(cacheAtlas)
      const entries = []
      let total = 0
      for (const file of files) {
        try {
          const info = await stat(file)
          entries.push({ file, size: info.size, mtimeMs: info.mtimeMs })
          total += info.size
        } catch {
          /* ignore */
        }
      }
      cacheBytes = total
      cacheFiles = entries.length
      if (total <= cacheMaxBytes) return
      entries.sort((a, b) => a.mtimeMs - b.mtimeMs)
      const target = cacheMaxBytes * 0.8
      for (const entry of entries) {
        if (total <= target) break
        try {
          await rm(entry.file, { force: true })
          total -= entry.size
          cacheFiles -= 1
        } catch {
          /* ignore */
        }
      }
      cacheBytes = total
    } finally {
      cachePruning = false
    }
  }

  return {
    snapshot,
    start,
    cancel,
    clear,
    localFileFor,
    fetchAndCache,
    contentTypeFor,
    buildMediaList: (tiers) => buildMediaList(dataDir, tiers),
    TIERS,
  }
}
