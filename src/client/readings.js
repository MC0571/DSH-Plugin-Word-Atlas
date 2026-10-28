/** 书房：短文与书籍数据访问（索引打包；正文 Host 代理官方站点）。 */
import { bookChapterUrl, booksIndexUrl, readAssetUrl, readingUrl, readingsIndexUrl } from './data.js'
import { hashSeed } from './lookup.js'
import { dayKey } from './session.js'

let indexPromise = null
const readingCache = new Map()
let booksPromise = null
const chapterCache = new Map()

async function getJson(url) {
  const response = await fetch(url, { headers: { Accept: 'application/json' } })
  if (!response.ok) {
    const payload = await response.json().catch(() => null)
    throw new Error(payload?.error === 'upstream-unavailable'
      ? '暂时连不上书房内容，请检查网络后重试。'
      : `书房内容加载失败（${response.status}）。`)
  }
  return response.json()
}

export function loadReadingIndex(force = false) {
  if (!indexPromise || force) {
    indexPromise = getJson(readingsIndexUrl).catch((error) => {
      indexPromise = null
      throw error
    })
  }
  return indexPromise
}

export function loadReading(id) {
  if (!/^[a-z0-9][a-z0-9-]*$/.test(String(id || ''))) return Promise.reject(new Error('短文编号无效。'))
  if (!readingCache.has(id)) {
    const promise = getJson(readingUrl(id)).catch((error) => {
      readingCache.delete(id)
      throw error
    })
    readingCache.set(id, promise)
  }
  return readingCache.get(id)
}

export function loadBooksIndex() {
  if (!booksPromise) {
    booksPromise = getJson(booksIndexUrl).catch((error) => {
      booksPromise = null
      throw error
    })
  }
  return booksPromise
}

export function loadBookChapter(bookId, n) {
  const key = `${bookId}:${n}`
  if (!chapterCache.has(key)) {
    const promise = getJson(bookChapterUrl(bookId, n)).catch((error) => {
      chapterCache.delete(key)
      throw error
    })
    chapterCache.set(key, promise)
  }
  return chapterCache.get(key)
}

export const readAsset = (relative) => readAssetUrl(relative)

export function readingLevelLabel(item, atlas) {
  return atlas.cefr[item.cefr] || 'A1'
}

export function readingTopicLabel(item, atlas) {
  return atlas.topics.find((topic) => topic.slug === item.topic)?.zh || item.topic
}

export function unlearnedCount(ids, cards) {
  return (ids || []).filter((id) => !cards[id]).length
}

export function readRecord(progress, key) {
  return progress.readings?.[key] || null
}

export function isRead(progress, key) {
  return Boolean(progress.readings?.[key]?.done)
}

/** Deterministic daily recommendation near the learner's current level. */
export function selectDailyReading(items, progress, atlas) {
  if (!Array.isArray(items) || items.length === 0) return null
  const level = progress.settings.startLevel
  const nearLevel = items.filter((item) => item.cefr <= level + 1 && item.cefr >= Math.max(0, level - 1))
  const pool = nearLevel.length ? nearLevel : items
  const unread = pool.filter((item) => !isRead(progress, item.id))
  const candidates = unread.length ? unread : pool
  return candidates[hashSeed(dayKey()) % candidates.length]
}
