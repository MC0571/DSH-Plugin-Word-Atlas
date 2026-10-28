/**
 * 词光 · Word Atlas — Host 半。
 *
 * 提供浏览器侧页面所需的只读数据/媒体路由，并把 FSRS 复习进度保存到用户目录：
 *   GET  /word-atlas/health            运行状态（词库与素材来源）
 *   GET  /word-atlas/api/progress      读取复习进度
 *   POST /word-atlas/api/progress      保存复习进度
 *   GET  /word-atlas/atlas/index.json  词库浏览索引
 *   GET  /word-atlas/atlas/entries/N.json  词条分块（每块 100 条）
 *   GET  /word-atlas/atlas/(img|thumb)/<id>.webp
 *   GET  /word-atlas/atlas/audio/(uk|us|ex|ex2)/<id>.mp3
 *
 * 词库与素材优先来自本机词光仓库（Config.contentDir 或自动发现的 ../repo），
 * 其次使用插件内置词库；插画/发音缺失时 302 到官方站点。
 */
import { createReadStream, existsSync, readFileSync, statSync } from 'node:fs'
import { mkdir, readFile, rename, writeFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { homedir } from 'node:os'
import { createAtlasTools } from './tools.js'
import { createOfflineManager } from './offline.js'

const HERE = dirname(fileURLToPath(import.meta.url))
const DATA_DIR = join(HERE, 'data')
const BUILD = '0.3.0'
const ROUTE = '/word-atlas'
const MAX_PROGRESS_BYTES = 4 * 1024 * 1024
const DEFAULT_MEDIA_BASE = 'https://0xlei.tech/words/'

const MIME = {
  '.json': 'application/json; charset=utf-8',
  '.webp': 'image/webp',
  '.mp3': 'audio/mpeg',
}

const ID_RE = /^[a-z0-9][a-z0-9-]{0,63}$/

function hasAtlas(dir) {
  return typeof dir === 'string' && dir !== '' && existsSync(join(dir, 'public', 'atlas', 'index.json'))
}

function resolveContentDir(config) {
  const candidates = []
  const configured = typeof config?.contentDir === 'string' ? config.contentDir.trim() : ''
  if (configured) candidates.push(resolve(HERE, configured))
  if (process.env.WORD_ATLAS_CONTENT_DIR) candidates.push(resolve(process.env.WORD_ATLAS_CONTENT_DIR))
  candidates.push(resolve(HERE, '..', 'repo'), resolve(HERE, 'content'))
  for (const candidate of candidates) {
    if (hasAtlas(candidate)) return candidate
  }
  return null
}

function resolveMediaBase(config) {
  const raw = typeof config?.mediaBase === 'string' && config.mediaBase.trim()
    ? config.mediaBase.trim()
    : DEFAULT_MEDIA_BASE
  return raw.replace(/\/+$/, '')
}

function resolveHome() {
  return process.env.DSH_HOME || process.env.DSH_PROFILE_DIR || join(homedir(), '.dsh')
}

function resolveStateFile(config) {
  const configured = typeof config?.stateFile === 'string' ? config.stateFile.trim() : ''
  if (configured) return resolve(HERE, configured)
  return join(resolveHome(), 'word-atlas-dsh', 'progress.json')
}

function json(res, value, status = 200) {
  const body = JSON.stringify(value)
  res.writeHead(status, {
    'Content-Type': MIME['.json'],
    'Content-Length': Buffer.byteLength(body),
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff',
  })
  res.end(body)
}

function redirect(res, location) {
  res.writeHead(302, { Location: location, 'Cache-Control': 'no-store' })
  res.end()
}

function notFound(res) {
  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' })
  res.end('not found')
}

/** Serve one file with optional byte-range support (audio seeking). */
function serveFile(req, res, file, extraHeaders = {}) {
  let info
  try {
    info = statSync(file)
  } catch {
    notFound(res)
    return
  }
  if (!info.isFile()) {
    notFound(res)
    return
  }
  const type = MIME[file.slice(file.lastIndexOf('.'))] || 'application/octet-stream'
  const headers = {
    'Content-Type': type,
    'Accept-Ranges': 'bytes',
    'X-Content-Type-Options': 'nosniff',
    ...extraHeaders,
  }
  const range = req.headers.range
  if (typeof range === 'string') {
    const match = /^bytes=(\d*)-(\d*)$/.exec(range.trim())
    if (match) {
      const size = info.size
      let start = match[1] === '' ? NaN : Number(match[1])
      let end = match[2] === '' ? size - 1 : Number(match[2])
      if (match[1] === '' && Number.isFinite(end)) {
        // suffix range: last N bytes
        start = Math.max(0, size - end)
        end = size - 1
      }
      if (!Number.isFinite(start) || start < 0 || start >= size || end < start) {
        res.writeHead(416, { 'Content-Range': `bytes */${size}` })
        res.end()
        return
      }
      end = Math.min(end, size - 1)
      res.writeHead(206, {
        ...headers,
        'Content-Range': `bytes ${start}-${end}/${size}`,
        'Content-Length': end - start + 1,
      })
      if (req.method === 'HEAD') {
        res.end()
        return
      }
      createReadStream(file, { start, end }).pipe(res)
      return
    }
  }
  res.writeHead(200, { ...headers, 'Content-Length': info.size })
  if (req.method === 'HEAD') {
    res.end()
    return
  }
  createReadStream(file).pipe(res)
}

async function readBody(req) {
  const chunks = []
  let total = 0
  for await (const chunk of req) {
    total += chunk.length
    if (total > MAX_PROGRESS_BYTES) throw new Error('progress payload too large')
    chunks.push(chunk)
  }
  return Buffer.concat(chunks).toString('utf8')
}

function normalizeProgress(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return null
  const cards = value.cards && typeof value.cards === 'object' && !Array.isArray(value.cards) ? value.cards : {}
  const bookmarks = Array.isArray(value.bookmarks) ? value.bookmarks.filter((id) => typeof id === 'string').slice(0, 20000) : []
  const days = value.days && typeof value.days === 'object' && !Array.isArray(value.days) ? value.days : {}
  const mistakes = Array.isArray(value.mistakes) ? value.mistakes.filter((id) => typeof id === 'string').slice(0, 300) : []
  const typing = Array.isArray(value.typing) ? value.typing.slice(-500) : []
  const settings = value.settings && typeof value.settings === 'object' && !Array.isArray(value.settings) ? value.settings : {}
  const session =
    value.session &&
    typeof value.session === 'object' &&
    !Array.isArray(value.session) &&
    typeof value.session.id === 'string' &&
    Array.isArray(value.session.steps) &&
    Number.isFinite(value.session.index) &&
    value.session.graded &&
    typeof value.session.graded === 'object'
      ? value.session
      : null
  return { v: 1, cards, bookmarks, days, mistakes, typing, session, settings, savedAt: Date.now() }
}

async function loadProgress(file) {
  try {
    const raw = await readFile(file, 'utf8')
    const parsed = JSON.parse(raw)
    return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : {}
  } catch (error) {
    if (error?.code === 'ENOENT') return {}
    throw error
  }
}

async function saveProgress(file, data) {
  await mkdir(dirname(file), { recursive: true })
  const tmp = `${file}.${process.pid}.tmp`
  await writeFile(tmp, JSON.stringify(data), 'utf8')
  await rename(tmp, file)
}

function createHandler({ ctx, contentDir, mediaBase, stateFile, diagnostics, offline }) {
  let cachedCount
  const count = () => {
    if (cachedCount !== undefined) return cachedCount
    try {
      const raw = readFileSyncSafe(join(contentDir || DATA_DIR, contentDir ? 'public/atlas/index.json' : 'index.json'))
      cachedCount = raw ? (JSON.parse(raw).count ?? 7298) : 7298
    } catch {
      cachedCount = 7298
    }
    return cachedCount
  }

  const atlasIndexFile = () => {
    if (contentDir) {
      const local = join(contentDir, 'public', 'atlas', 'index.json')
      if (existsSync(local)) return local
    }
    return join(DATA_DIR, 'index.json')
  }

  const entryFile = (chunk) => {
    if (contentDir) {
      const local = join(contentDir, 'public', 'atlas', 'entries', `${chunk}.json`)
      if (existsSync(local)) return local
    }
    return join(DATA_DIR, 'entries', `${chunk}.json`)
  }

  const MEDIA_HEADERS = { 'Cache-Control': 'public, max-age=604800' }

  const contentMediaFile = (rel) => {
    if (!contentDir) return null
    const file = join(contentDir, 'public', 'atlas', rel)
    return existsSync(file) ? file : null
  }

  /** contentDir → 手动离线包 → 按需缓存 → 官方站点回退。 */
  async function serveMedia(req, res, rel) {
    const local = contentMediaFile(rel)
    if (local) {
      serveFile(req, res, local, MEDIA_HEADERS)
      return
    }
    const offlineFile = offline.localFileFor(rel)
    if (offlineFile) {
      serveFile(req, res, offlineFile, MEDIA_HEADERS)
      return
    }
    const cached = await offline.fetchAndCache(rel)
    if (cached?.file) {
      serveFile(req, res, cached.file, MEDIA_HEADERS)
      return
    }
    if (cached?.buffer) {
      res.writeHead(200, {
        'Content-Type': cached.type || offline.contentTypeFor(rel),
        'Content-Length': cached.buffer.length,
        'Cache-Control': 'public, max-age=604800',
        'X-Content-Type-Options': 'nosniff',
      })
      res.end(cached.buffer)
      return
    }
    redirect(res, `${mediaBase}/atlas/${rel}`)
  }

  return async function handler(req, res) {
    try {
      if (req.method !== 'GET' && req.method !== 'HEAD' && req.method !== 'POST' && req.method !== 'DELETE') {
        json(res, { error: 'method not allowed' }, 405)
        return
      }
      const url = new URL(req.url || '/', 'http://127.0.0.1')
      if (!url.pathname.startsWith(ROUTE)) {
        notFound(res)
        return
      }
      const path = url.pathname.slice(ROUTE.length) || '/'

      if (path === '/' || path === '') {
        json(res, {
          ok: true,
          plugin: 'word-atlas-dsh',
          count: count(),
          content: contentDir ? 'local' : 'packaged',
          media: contentDir ? 'local' : 'remote',
          mediaBase,
        })
        return
      }

      if (path === '/health' || path === '/api/health') {
        json(res, {
          ok: true,
          plugin: 'word-atlas-dsh',
          count: count(),
          content: contentDir ? 'local' : 'packaged',
          media: contentDir ? 'local' : 'remote',
          mediaBase,
          stateFile,
          build: diagnostics.build,
          tools: diagnostics.tools,
          offline: (() => {
            const status = offline.snapshot()
            return {
              state: status.state,
              done: status.done,
              total: status.total,
              failed: status.failed,
              autoCache: status.autoCache,
              dir: status.dir,
            }
          })(),
        })
        return
      }

      if (path === '/api/progress') {
        if (req.method === 'GET' || req.method === 'HEAD') {
          json(res, await loadProgress(stateFile))
          return
        }
        let body
        try {
          body = JSON.parse(await readBody(req))
        } catch {
          json(res, { ok: false, error: 'invalid-progress-payload' }, 400)
          return
        }
        const normalized = normalizeProgress(body)
        if (!normalized) {
          json(res, { ok: false, error: 'invalid-progress-payload' }, 400)
          return
        }
        await saveProgress(stateFile, normalized)
        json(res, { ok: true, savedAt: normalized.savedAt })
        return
      }

      if (path === '/api/offline') {
        if (req.method === 'DELETE') {
          json(res, await offline.clear())
          return
        }
        json(res, offline.snapshot())
        return
      }

      if (path === '/api/offline/start' && req.method === 'POST') {
        let payload
        try {
          payload = JSON.parse(await readBody(req))
        } catch {
          json(res, { ok: false, error: 'invalid-payload' }, 400)
          return
        }
        const result = await offline.start({ tiers: payload?.tiers, source: payload?.source })
        json(res, result, result.ok ? 200 : 400)
        return
      }

      if (path === '/api/offline/cancel' && req.method === 'POST') {
        json(res, offline.cancel())
        return
      }

      if (path === '/atlas/index.json') {
        serveFile(req, res, atlasIndexFile(), { 'Cache-Control': 'public, max-age=3600' })
        return
      }

      let match = /^\/atlas\/entries\/(\d{1,3})\.json$/.exec(path)
      if (match) {
        serveFile(req, res, entryFile(Number(match[1])), { 'Cache-Control': 'public, max-age=3600' })
        return
      }

      match = /^\/atlas\/(img|thumb)\/([a-z0-9][a-z0-9-]*)\.webp$/.exec(path)
      if (match) {
        await serveMedia(req, res, `${match[1]}/${match[2]}.webp`)
        return
      }

      match = /^\/atlas\/audio\/(uk|us|ex|ex2)\/([a-z0-9][a-z0-9-]*)\.mp3$/.exec(path)
      if (match) {
        await serveMedia(req, res, `audio/${match[1]}/${match[2]}.mp3`)
        return
      }

      notFound(res)
    } catch (error) {
      ctx?.logger?.warn?.('word-atlas: request failed: %o', error)
      if (!res.headersSent) {
        json(res, { ok: false, error: 'internal-error' }, 500)
      } else {
        res.destroy()
      }
    }
  }
}

function readFileSyncSafe(file) {
  try {
    return existsSync(file) && statSync(file).isFile() ? readFileSync(file, 'utf8') : null
  } catch {
    return null
  }
}

export async function apply(ctx, config = {}) {
  const contentDir = resolveContentDir(config)
  const mediaBase = resolveMediaBase(config)
  const stateFile = resolveStateFile(config)
  const home = resolveHome()
  const offlineDir = typeof config.offlineDir === 'string' && config.offlineDir.trim()
    ? resolve(HERE, config.offlineDir.trim())
    : join(home, 'word-atlas-dsh', 'content')
  const cacheDir = typeof config.cacheDir === 'string' && config.cacheDir.trim()
    ? resolve(HERE, config.cacheDir.trim())
    : join(home, 'word-atlas-dsh', 'cache')
  const diagnostics = { build: BUILD, tools: { registered: [], error: null } }
  const offlineStateFile = typeof config.offlineStateFile === 'string' && config.offlineStateFile.trim()
    ? resolve(HERE, config.offlineStateFile.trim())
    : join(home, 'word-atlas-dsh', 'offline-state.json')
  const offline = createOfflineManager({
    dataDir: DATA_DIR,
    contentDir,
    mediaBase,
    offlineDir,
    cacheDir,
    stateFile: offlineStateFile,
    autoCache: config.autoCache === true,
    cacheMaxBytes: Number(config.cacheMaxBytes) > 0 ? Number(config.cacheMaxBytes) : 1024 * 1024 * 1024,
    concurrency: Number(config.offlineConcurrency) > 0 ? Number(config.offlineConcurrency) : 6,
    logger: ctx.logger,
  })
  const handler = createHandler({ ctx, contentDir, mediaBase, stateFile, diagnostics, offline })

  ctx.logger?.info?.(
    'word-atlas: content=%s media=%s offline=%s cache=%s progress=%s',
    contentDir ? contentDir : 'packaged',
    contentDir ? 'local files' : mediaBase,
    offlineDir,
    config.autoCache === true ? cacheDir : 'off',
    stateFile,
  )

  ctx.inject(['webServer'], (child) => {
    child.effect(() => child.webServer.register({ kind: 'prefix', path: ROUTE, handler }))
  })

  if (config.tools === false) return

  // Tools are optional: the page keeps working when this profile has no tool registry.
  try {
    const tools = createAtlasTools({ dataDir: DATA_DIR, contentDir, mediaBase })
    ctx.inject(['tools'], (child) => {
      for (const tool of tools) {
        try {
          child.effect(() => child.tools.register(tool))
          diagnostics.tools.registered.push(tool.name)
        } catch (error) {
          diagnostics.tools.error = String(error?.stack || error)
        }
      }
    })
    ctx.logger?.info?.('word-atlas: registered agent tools %s', diagnostics.tools.registered.join(', '))
  } catch (error) {
    diagnostics.tools.error = String(error?.stack || error)
    ctx.logger?.warn?.('word-atlas: agent tools failed (%s)', error?.message || error)
  }
}
