/** 书籍阅读器纯工具：prefs、章节编号、逐句队列、分句/查词切分。 */

export const READER_PREFS_KEY = 'word-atlas-dsh:reader-prefs'
export const READER_MODES = ['en', 'bi', 'zh']
export const DEFAULT_READER_PREFS = { mode: 'bi', size: 1, leading: 1, speed: 1, language: 'en' }

const clampInt = (value, min, max, fallback) => {
  const number = Number(value)
  return Number.isFinite(number) ? Math.max(min, Math.min(max, Math.round(number))) : fallback
}

export function normalizeReaderPrefs(raw) {
  const value = raw && typeof raw === 'object' && !Array.isArray(raw) ? raw : {}
  return {
    mode: READER_MODES.includes(value.mode) ? value.mode : DEFAULT_READER_PREFS.mode,
    size: clampInt(value.size, 0, 4, DEFAULT_READER_PREFS.size),
    leading: clampInt(value.leading, 0, 2, DEFAULT_READER_PREFS.leading),
    speed: [0.8, 1, 1.2].includes(Number(value.speed)) ? Number(value.speed) : DEFAULT_READER_PREFS.speed,
    language: value.language === 'zh' ? 'zh' : 'en',
  }
}

export function loadReaderPrefs() {
  try {
    return normalizeReaderPrefs(JSON.parse(localStorage.getItem(READER_PREFS_KEY) || 'null'))
  } catch {
    return { ...DEFAULT_READER_PREFS }
  }
}

export function saveReaderPrefs(prefs) {
  try {
    localStorage.setItem(READER_PREFS_KEY, JSON.stringify(normalizeReaderPrefs(prefs)))
  } catch {
    /* private mode: prefs stay in memory */
  }
}

export function romanNumeral(number) {
  const value = Math.max(0, Math.floor(Number(number) || 0))
  if (!value) return '0'
  const table = [
    [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'],
    [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I'],
  ]
  let rest = value
  let result = ''
  for (const [unit, glyph] of table) {
    while (rest >= unit) {
      result += glyph
      rest -= unit
    }
  }
  return result
}

export const chapterKey = (bookId, n) => `book:${bookId}:${n}`
export const positionKey = (bookId) => `book:${bookId}:pos`
export const sentenceDomId = (pid, language, index) => `wa-sent-${pid}-${language}-${index}`

/** Split one sentence range into text and clickable word parts. */
export function splitSentenceParts(text, sentence, words = []) {
  if (typeof text !== 'string') return []
  const start = Number.isFinite(sentence?.a) ? sentence.a : 0
  const end = Number.isFinite(sentence?.b) ? Math.min(sentence.b, text.length) : text.length
  const parts = []
  let cursor = start
  for (const word of words) {
    if (!Array.isArray(word) || word.length < 3) continue
    const [wordStart, wordEnd, id, frequency] = word
    if (!Number.isFinite(wordStart) || !Number.isFinite(wordEnd) || wordEnd <= wordStart) continue
    if (wordEnd <= start || wordStart >= end) continue
    const from = Math.max(wordStart, start)
    const to = Math.min(wordEnd, end)
    if (from > cursor) parts.push({ text: text.slice(cursor, from) })
    parts.push({ text: text.slice(from, to), id, freq: Number(frequency) || 0 })
    cursor = to
  }
  if (cursor < end) parts.push({ text: text.slice(cursor, end) })
  return parts
}

/**
 * Flatten chapter paragraphs into a sentence queue for read-aloud.
 * Each item points at a paragraph audio clip and a sentence time range.
 */
export function buildSentenceQueue(chapter, language = 'en') {
  const lang = language === 'zh' ? 'zh' : 'en'
  const queue = []
  for (const paragraph of chapter?.paras || []) {
    const audio = lang === 'zh' ? paragraph.audioZh : paragraph.audio
    const sents = (lang === 'zh' ? paragraph.zhSents : paragraph.sents) || []
    const text = lang === 'zh' ? paragraph.zh : paragraph.en
    const otherSents = (lang === 'zh' ? paragraph.sents : paragraph.zhSents) || []
    const otherText = lang === 'zh' ? paragraph.en : paragraph.zh
    if (!audio || typeof text !== 'string' || !Array.isArray(sents) || sents.length === 0) continue
    sents.forEach((sentence, index) => {
      if (!Number.isFinite(sentence?.a) || !Number.isFinite(sentence?.b)) return
      const other = otherSents[index]
      queue.push({
        pid: paragraph.id,
        audio,
        lang,
        sentenceIndex: index,
        t0: Number(sentence.t0) || 0,
        t1: Number(sentence.t1) || 0,
        text: text.slice(sentence.a, sentence.b),
        translation: other && typeof otherText === 'string' ? otherText.slice(other.a, other.b) : '',
        domId: sentenceDomId(paragraph.id, lang, index),
      })
    })
  }
  return queue
}

/** Current queue index for a timeupdate inside one paragraph clip. */
export function queueIndexAtTime(queue, startIndex, time) {
  if (!queue?.length) return -1
  const start = Math.max(0, Math.min(queue.length - 1, Number(startIndex) || 0))
  const audio = queue[start].audio
  let found = start
  for (let index = start; index < queue.length; index += 1) {
    const item = queue[index]
    if (item.audio !== audio) break
    if (item.t0 <= (Number(time) || 0) + 0.03) found = index
    else break
  }
  return found
}

/** Unique vocabulary ids appearing in this chapter. */
export function chapterWordIds(chapter) {
  const ids = []
  const seen = new Set()
  for (const paragraph of chapter?.paras || []) {
    for (const word of paragraph.words || []) {
      const id = Array.isArray(word) ? word[2] : null
      if (id && !seen.has(id)) {
        seen.add(id)
        ids.push(id)
      }
    }
  }
  return ids
}
