/**
 * 学习会话：队列、题型、干扰项、判分与 FSRS 评分。
 *
 * 逻辑移植自上游词光开源仓库 src/store/session.ts（MIT，Word Atlas contributors），
 * 改为纯函数以便宿主 store / 测试直接调用。
 */
import { MEDIA } from './data.js'
import { Rating, isMastered, review } from './fsrs.js'
import { hashSeed, normalize, shuffle } from './lookup.js'

export const dayKey = (date = new Date()) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`

function bumpDays(days, { newWords = 0, reviewed = 0, correct = 0, seconds = 0 } = {}) {
  const key = dayKey()
  const current = days[key] || { n: 0, r: 0, c: 0 }
  return {
    ...days,
    [key]: {
      n: current.n + newWords,
      r: current.r + reviewed,
      c: current.c + correct,
      ...(seconds ? { t: (current.t || 0) + seconds } : current.t ? { t: current.t } : {}),
    },
  }
}

export function dueIds(progress, now = Date.now()) {
  return Object.entries(progress.cards)
    .filter(([, card]) => card.due <= now)
    .sort((a, b) => a[1].due - b[1].due)
    .map(([id]) => id)
}

export function newToday(progress) {
  return progress.days[dayKey()]?.n ?? 0
}

/** Next unseen words along the learning path, starting at the learner's level. */
export function nextNew(atlas, progress, settings, count) {
  const out = []
  const pass = (from) => {
    for (const word of atlas.words) {
      if (out.length >= count) return
      if (word.cefr < from || progress.cards[word.id] || out.includes(word.id)) continue
      out.push(word.id)
    }
  }
  pass(settings.startLevel || 0)
  if (out.length < count) pass(0)
  return out
}

export function todayPlan(atlas, progress, settings) {
  const due = dueIds(progress).filter((id) => atlas.byId.has(id))
  const fresh = nextNew(atlas, progress, settings, Math.max(0, (settings.dailyNew || 10) - newToday(progress)))
  return { due, fresh, minutes: Math.max(1, Math.round(due.length * 0.25 + fresh.length * 0.9)) }
}

function quizKind(ref, progress, settings, salt) {
  const card = progress.cards[ref.id]
  const hasImage = Boolean(ref.media & MEDIA.img)
  const roll = hashSeed(ref.id + salt) % 100
  if (!card || card.s < 2) {
    if (hasImage && roll < 45) return 'picture'
    return roll < 80 ? 'meaning' : 'listen'
  }
  if (settings.spell && (card.s >= 4 || roll < 35)) return roll < 75 ? 'spell' : hasImage ? 'picture' : 'listen'
  return roll < 50 ? 'listen' : hasImage ? 'picture' : 'meaning'
}

/** Distractors that look plausible: same level, similar spelling or length, different meaning. */
export function distractors(atlas, ref, kind, seed) {
  const target = normalize(ref.word)
  const zhCore = ref.zh.replace(/^[a-z.]+\s*/, '').split(/[；;，,]/)[0]
  const scored = []
  const start = Math.max(0, ref.order - 400)
  for (let index = start; index < Math.min(atlas.words.length, ref.order + 400); index += 1) {
    const word = atlas.words[index]
    if (word.id === ref.id || normalize(word.word) === target) continue
    if (zhCore && word.zh.includes(zhCore)) continue
    let score = hashSeed(word.id + seed) % 100
    if (kind === 'listen' || kind === 'picture') {
      if (word.word[0]?.toLowerCase() === target[0]) score += 120
      score += Math.max(0, 60 - Math.abs(word.word.length - target.length) * 20)
    } else {
      if (word.cefr === ref.cefr) score += 40
      if (word.zh.split(' ')[0] === ref.zh.split(' ')[0]) score += 60
    }
    scored.push([score, word])
  }
  scored.sort((a, b) => b[0] - a[0])
  const seen = new Set()
  const picks = []
  for (const [, word] of scored) {
    const key = kind === 'meaning' ? word.zh : normalize(word.word)
    if (seen.has(key)) continue
    seen.add(key)
    picks.push(word.id)
    if (picks.length === 3) break
  }
  return shuffle([ref.id, ...picks], seed)
}

export function buildSession(atlas, progress, settings, options = {}) {
  const seed = Date.now()
  const plan = todayPlan(atlas, progress, settings)
  const reviewIds = options.ids
    ? options.ids.filter((id) => progress.cards[id])
    : plan.due.slice(0, 120)
  const newIds = options.ids
    ? options.ids.filter((id) => !progress.cards[id])
    : options.reviewOnly
      ? []
      : plan.fresh
  const steps = []
  const quiz = (id, salt) => {
    const ref = atlas.byId.get(id)
    const kind = quizKind(ref, progress, settings, seed + salt)
    return { id, kind, options: kind === 'spell' ? undefined : distractors(atlas, ref, kind, seed + salt) }
  }
  reviewIds.forEach((id, index) => steps.push(quiz(id, index)))
  for (let group = 0; group < newIds.length; group += 5) {
    const chunk = newIds.slice(group, group + 5)
    chunk.forEach((id) => steps.push({ id, kind: 'intro' }))
    shuffle(chunk, seed + group).forEach((id, index) => steps.push(quiz(id, 1000 + group + index)))
  }
  return { id: `s${seed}`, started: seed, steps, index: 0, graded: {}, newIds, reviewIds }
}

export function gradeFor(kind, correct, ms, hinted) {
  if (!correct) return Rating.Again
  if (hinted) return Rating.Hard
  const slow = kind === 'spell' ? 20000 : 9000
  const fast = kind === 'spell' ? 6000 : 2500
  if (ms > slow) return Rating.Hard
  if (ms < fast && kind === 'spell') return Rating.Easy
  return Rating.Good
}

/** Apply one answer to a progress snapshot; only the first attempt for a word updates memory/stats. */
export function answer(progress, atlas, step, correct, grade, value, settings) {
  const session = progress.session
  if (!session) return progress
  let next = { ...progress, session: { ...session, pending: { correct, value } } }
  const first = !(step.id in session.graded) && !step.retry
  if (first) {
    next = {
      ...next,
      cards: { ...next.cards, [step.id]: review(progress.cards[step.id], grade, Date.now(), settings.retention) },
      session: { ...next.session, graded: { ...session.graded, [step.id]: grade } },
      mistakes: correct ? next.mistakes : [step.id, ...next.mistakes.filter((id) => id !== step.id)].slice(0, 300),
    }
    next = {
      ...next,
      days: bumpDays(next.days, { reviewed: 1, correct: correct ? 1 : 0, newWords: session.newIds.includes(step.id) ? 1 : 0 }),
    }
  }
  if (!correct) {
    const steps = [...next.session.steps]
    const retries = steps.filter((item) => item.id === step.id && item.retry).length
    if (retries < 2) {
      const ref = atlas.byId.get(step.id)
      const kind = step.kind === 'meaning' ? (ref.media & MEDIA.img ? 'picture' : 'listen') : 'meaning'
      const at = Math.min(steps.length, session.index + 4)
      steps.splice(at, 0, { id: step.id, kind, retry: true, options: distractors(atlas, ref, kind, Date.now()) })
      next = { ...next, session: { ...next.session, steps } }
    }
  }
  return next
}

export function advance(progress, seconds) {
  const session = progress.session
  if (!session) return progress
  const index = session.index + 1
  const finished = index >= session.steps.length ? Date.now() : undefined
  return {
    ...progress,
    days: bumpDays(progress.days, { seconds: Math.max(0, Math.min(90, Math.round(seconds))) }),
    session: { ...session, index, pending: undefined, finished },
  }
}

export function sessionStats(session) {
  const graded = Object.values(session.graded)
  const correct = graded.filter((grade) => grade !== Rating.Again).length
  return { total: graded.length, correct, accuracy: graded.length ? Math.round((correct / graded.length) * 100) : 0 }
}

export const masteredCount = (progress) => Object.values(progress.cards).filter(isMastered).length
