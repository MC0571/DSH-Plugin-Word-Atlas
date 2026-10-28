/**
 * 词光词库访问：加载浏览索引（510 KB）与按需加载词条分块（每块 100 条）。
 * 数据由同源 Host 路由 /word-atlas/atlas/... 提供。
 */
const BASE = '/word-atlas/atlas'

export const MEDIA = { img: 1, uk: 2, us: 4, ex: 8, ex2: 16 }

async function fetchJson(url) {
  const res = await fetch(url, { cache: 'no-store' })
  if (!res.ok) throw new Error(`词库加载失败（HTTP ${res.status}）`)
  return res.json()
}

function normalizeIndex(raw) {
  const topics = (raw.topics || []).map(([slug, zh]) => ({ slug, zh }))
  const cefr = raw.cefr || ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']
  const words = (raw.words || []).map((row, order) => {
    const [id, word, zh, ipa, cefrIndex, topicIndex, media] = row
    return {
      id,
      word,
      zh,
      ipa,
      cefr: cefr[cefrIndex] || '',
      topic: topics[topicIndex]?.slug || '',
      topicZh: topics[topicIndex]?.zh || '',
      media,
      order,
    }
  })
  return {
    id: raw.id,
    name: raw.name,
    count: raw.count ?? words.length,
    examples: raw.examples ?? 0,
    chunk: raw.chunk ?? 100,
    topics,
    cefr,
    words,
    byId: new Map(words.map((word) => [word.id, word])),
  }
}

let indexPromise = null
export function loadAtlas() {
  if (!indexPromise) {
    indexPromise = fetchJson(`${BASE}/index.json`)
      .then(normalizeIndex)
      .catch((error) => {
        indexPromise = null
        throw error
      })
  }
  return indexPromise
}

const entryCache = new Map()
const chunkPending = new Map()

export function loadEntry(atlas, id) {
  const cached = entryCache.get(id)
  if (cached) return Promise.resolve(cached)
  const ref = atlas.byId.get(id)
  if (!ref) return Promise.reject(new Error(`找不到词条 ${id}`))
  const chunk = Math.floor(ref.order / atlas.chunk)
  let pending = chunkPending.get(chunk)
  if (!pending) {
    pending = fetchJson(`${BASE}/entries/${chunk}.json`)
      .then((list) => {
        for (const entry of list) entryCache.set(entry.id, entry)
        chunkPending.delete(chunk)
      })
      .catch((error) => {
        chunkPending.delete(chunk)
        throw error
      })
    chunkPending.set(chunk, pending)
  }
  return pending.then(() => {
    const entry = entryCache.get(id)
    if (!entry) throw new Error(`找不到词条 ${id}`)
    return entry
  })
}

export const thumbUrl = (id) => `${BASE}/thumb/${id}.webp`
export const imgUrl = (id) => `${BASE}/img/${id}.webp`
export const audioUrl = (kind, id) => `${BASE}/audio/${kind}/${id}.mp3`

export function mediaOf(ref) {
  return (ref && (typeof ref.media === 'number' ? ref.media : ref.m)) || 0
}

export function hasMedia(ref, bit) {
  return (mediaOf(ref) & bit) !== 0
}
