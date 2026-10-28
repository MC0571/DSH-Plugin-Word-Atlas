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
}

export function emptyProgress() {
  return { v: 1, cards: {}, bookmarks: [], days: {}, settings: { ...defaultSettings } }
}

function normalize(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return null
  if (value.v !== 1) return null
  return {
    v: 1,
    cards: value.cards && typeof value.cards === 'object' && !Array.isArray(value.cards) ? value.cards : {},
    bookmarks: Array.isArray(value.bookmarks) ? value.bookmarks.filter((id) => typeof id === 'string') : [],
    days: value.days && typeof value.days === 'object' && !Array.isArray(value.days) ? value.days : {},
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
