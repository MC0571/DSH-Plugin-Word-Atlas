/**
 * 复习进度：优先保存在 Host（$DSH_HOME/word-atlas-dsh/progress.json），
 * 并以 localStorage 作为即时镜像与离线兜底。
 */
import { useSyncExternalStore } from 'react'

const API = '/word-atlas/api/progress'
const LOCAL_KEY = 'word-atlas-dsh:progress:v1'

export const defaultSettings = {
  accent: 'uk',
  dailyNew: 10,
  retention: 0.9,
  startLevel: 0,
  spell: true,
  autoplay: true,
}

export function emptyProgress() {
  return { v: 1, cards: {}, bookmarks: [], days: {}, mistakes: [], typing: [], session: null, settings: { ...defaultSettings } }
}

function sanitizeSession(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return null
  if (typeof value.id !== 'string' || !Array.isArray(value.steps) || !Array.isArray(value.newIds) || !Array.isArray(value.reviewIds)) return null
  if (!Number.isFinite(value.index) || value.index < 0) return null
  if (!value.graded || typeof value.graded !== 'object' || Array.isArray(value.graded)) return null
  return value
}

function normalize(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return null
  if (value.v !== 1) return null
  return {
    v: 1,
    cards: value.cards && typeof value.cards === 'object' && !Array.isArray(value.cards) ? value.cards : {},
    bookmarks: Array.isArray(value.bookmarks) ? value.bookmarks.filter((id) => typeof id === 'string') : [],
    days: value.days && typeof value.days === 'object' && !Array.isArray(value.days) ? value.days : {},
    mistakes: Array.isArray(value.mistakes) ? value.mistakes.filter((id) => typeof id === 'string').slice(0, 300) : [],
    typing: Array.isArray(value.typing) ? value.typing.slice(-500) : [],
    session: sanitizeSession(value.session),
    settings: { ...defaultSettings, ...(value.settings && typeof value.settings === 'object' ? value.settings : {}) },
    ...(typeof value.savedAt === 'number' ? { savedAt: value.savedAt } : {}),
  }
}

function readLocal() {
  try {
    const raw = localStorage.getItem(LOCAL_KEY)
    if (!raw) return null
    return normalize(JSON.parse(raw))
  } catch {
    return null
  }
}

function writeLocal() {
  try {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(state))
  } catch {
    /* quota / private mode: Host storage remains the source of truth */
  }
}

let state = readLocal() || emptyProgress()
const listeners = new Set()
let saveTimer = null
let hydrated = false

function emit() {
  for (const listener of listeners) listener()
}

function scheduleSave() {
  clearTimeout(saveTimer)
  saveTimer = setTimeout(flush, 800)
}

export function getState() {
  return state
}

export function subscribe(listener) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function useProgress() {
  return useSyncExternalStore(subscribe, getState, getState)
}

export function update(mutate) {
  const next = mutate(state)
  if (!next || next === state) return
  state = { ...next, v: 1, savedAt: Date.now() }
  writeLocal()
  emit()
  scheduleSave()
}

export function flush() {
  clearTimeout(saveTimer)
  if (!state.savedAt) return
  const body = JSON.stringify(state)
  fetch(API, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body }).catch(() => {})
}

export async function hydrate() {
  if (hydrated) return
  hydrated = true
  try {
    const res = await fetch(API, { cache: 'no-store' })
    if (!res.ok) return
    const remote = normalize(await res.json())
    if (!remote) return
    const remoteAt = remote.savedAt || 0
    const localAt = state.savedAt || 0
    if (remoteAt > localAt) {
      state = remote
      writeLocal()
      emit()
    } else if (localAt > remoteAt) {
      scheduleSave()
    }
  } catch {
    /* keep the local mirror */
  }
}

export function dayKey(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
}

export function bumpDay(days, { newWords = 0, reviewed = 0, correct = 0 } = {}) {
  const key = dayKey()
  const current = days[key] || { n: 0, r: 0, c: 0 }
  return { ...days, [key]: { n: current.n + newWords, r: current.r + reviewed, c: current.c + correct } }
}

export function streak(days, now = new Date()) {
  let count = 0
  const cursor = new Date(now)
  for (;;) {
    const stat = days[dayKey(cursor)]
    if (!stat || (stat.n || 0) + (stat.r || 0) === 0) {
      if (count === 0 && dayKey(cursor) === dayKey(now)) {
        cursor.setDate(cursor.getDate() - 1)
        continue
      }
      break
    }
    count += 1
    cursor.setDate(cursor.getDate() - 1)
  }
  return count
}

export function toggleBookmark(progress, id) {
  const has = progress.bookmarks.includes(id)
  return {
    ...progress,
    bookmarks: has ? progress.bookmarks.filter((item) => item !== id) : [id, ...progress.bookmarks],
  }
}

/* ------------------------------------------------------------- backup */

const DATASET_ID = 'word-atlas-open'

function isObject(value) {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value)
}

function isFiniteNumber(value, min = 0, max = Infinity) {
  return typeof value === 'number' && Number.isFinite(value) && value >= min && value <= max
}

function validCard(value) {
  return (
    isObject(value) &&
    isFiniteNumber(value.due) &&
    isFiniteNumber(value.s) &&
    isFiniteNumber(value.d, 0, 11) &&
    isFiniteNumber(value.el) &&
    isFiniteNumber(value.sd) &&
    isFiniteNumber(value.ls) &&
    isFiniteNumber(value.reps) &&
    isFiniteNumber(value.lapses) &&
    [0, 1, 2, 3].includes(value.st) &&
    (value.last === undefined || isFiniteNumber(value.last)) &&
    isFiniteNumber(value.seen)
  )
}

/** 导出为与上游词光兼容的备份格式（app/version/progress/settings）。 */
export function exportBackup() {
  flush()
  return JSON.stringify(
    {
      app: 'word-atlas',
      version: 2,
      exported: new Date().toISOString(),
      progress: {
        version: 2,
        datasetId: DATASET_ID,
        cards: state.cards,
        bookmarks: state.bookmarks,
        days: state.days,
        typing: state.typing,
        session: null,
        mistakes: state.mistakes,
      },
      settings: state.settings,
    },
    null,
    1,
  )
}

/** 导入上游导出的备份（也接受本插件导出的同一格式）。 */
export function importBackup(text) {
  let data
  try {
    data = JSON.parse(text)
  } catch {
    return { ok: false, error: '文件不是有效的 JSON。' }
  }
  if (!isObject(data) || data.app !== 'word-atlas' || data.version !== 2 || !isObject(data.progress)) {
    return { ok: false, error: '这不是词光的学习备份。' }
  }
  const raw = data.progress
  if (typeof raw.datasetId === 'string' && raw.datasetId !== DATASET_ID) {
    return { ok: false, error: '备份来自另一个词库，请使用词光开放词库的备份。' }
  }
  const cards = {}
  if (isObject(raw.cards)) {
    for (const [id, card] of Object.entries(raw.cards)) if (validCard(card)) cards[id] = card
  }
  const bookmarks = Array.isArray(raw.bookmarks) ? raw.bookmarks.filter((id) => typeof id === 'string').slice(0, 20000) : []
  const days = {}
  if (isObject(raw.days)) {
    for (const [key, day] of Object.entries(raw.days)) {
      if (!/^\d{4}-\d{2}-\d{2}$/.test(key) || !isObject(day)) continue
      const n = Number(day.n) || 0
      const r = Number(day.r) || 0
      const c = Number(day.c) || 0
      days[key] = { n, r, c }
    }
  }
  const mistakes = Array.isArray(raw.mistakes) ? raw.mistakes.filter((id) => typeof id === 'string').slice(0, 300) : []
  const typing = Array.isArray(raw.typing) ? raw.typing.slice(-500) : []
  const settings = { ...defaultSettings, ...(isObject(data.settings) ? data.settings : {}) }
  state = {
    v: 1,
    cards,
    bookmarks,
    days,
    mistakes,
    typing,
    settings,
    savedAt: Date.now(),
  }
  writeLocal()
  emit()
  flush()
  return { ok: true, cards: Object.keys(cards).length }
}

export function resetProgress() {
  state = { ...emptyProgress(), savedAt: Date.now() }
  writeLocal()
  emit()
  flush()
}
