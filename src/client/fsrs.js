/**
 * FSRS 调度：与词光开源版一致的 card 状态与参数
 * （ts-fsrs 5.x，request_retention 可调，enable_short_term + 1m/10m 学习步）。
 * 卡片以 epoch 毫秒序列化，便于直接存 JSON。
 */
import { createEmptyCard, fsrs, Rating, State } from 'ts-fsrs'

const schedulers = new Map()

function scheduler(retention) {
  const key = Math.round(retention * 1000) / 1000
  let instance = schedulers.get(key)
  if (!instance) {
    instance = fsrs({
      request_retention: key,
      enable_fuzz: true,
      enable_short_term: true,
      learning_steps: ['1m', '10m'],
      relearning_steps: ['10m'],
    })
    schedulers.set(key, instance)
  }
  return instance
}

function toCard(state) {
  return {
    due: new Date(state.due),
    stability: state.s,
    difficulty: state.d,
    elapsed_days: state.el,
    scheduled_days: state.sd,
    learning_steps: state.ls,
    reps: state.reps,
    lapses: state.lapses,
    state: state.st,
    last_review: state.last ? new Date(state.last) : undefined,
  }
}

function fromCard(card, seen) {
  return {
    due: card.due.getTime(),
    s: card.stability,
    d: card.difficulty,
    el: card.elapsed_days,
    sd: card.scheduled_days,
    ls: card.learning_steps,
    reps: card.reps,
    lapses: card.lapses,
    st: card.state,
    last: card.last_review ? card.last_review.getTime() : undefined,
    seen,
  }
}

export { Rating, State }

export const GRADE_ORDER = [Rating.Again, Rating.Hard, Rating.Good, Rating.Easy]

export const GRADE_LABELS = {
  [Rating.Again]: '重来',
  [Rating.Hard]: '困难',
  [Rating.Good]: '良好',
  [Rating.Easy]: '简单',
}

/** Grade a card (or start a new one) and return the next serialized state. */
export function review(prev, grade, now = Date.now(), retention = 0.9) {
  const card = prev ? toCard(prev) : createEmptyCard(new Date(now))
  const next = scheduler(retention).next(card, new Date(now), grade).card
  return fromCard(next, prev?.seen ?? now)
}

/** Interval in ms for each grade, used by the review buttons. */
export function preview(prev, now = Date.now(), retention = 0.9) {
  const card = prev ? toCard(prev) : createEmptyCard(new Date(now))
  const record = scheduler(retention).repeat(card, new Date(now))
  const out = {}
  for (const grade of GRADE_ORDER) out[grade] = record[grade].card.due.getTime() - now
  return out
}

export function retrievability(state, now = Date.now(), retention = 0.9) {
  try {
    return scheduler(retention).get_retrievability(toCard(state), new Date(now), false)
  } catch {
    return undefined
  }
}

export const MASTERED_STABILITY = 21
export const isMastered = (card) => Boolean(card && card.st === State.Review && card.s >= MASTERED_STABILITY)
export const isLearning = (card) => Boolean(card && !isMastered(card))
export const isDue = (card, now = Date.now()) => Boolean(card && card.due <= now)

export function formatInterval(ms) {
  if (!Number.isFinite(ms)) return ''
  const minutes = Math.round(ms / 60000)
  if (minutes < 1) return '<1分'
  if (minutes < 60) return `${minutes}分`
  const hours = Math.round(minutes / 60)
  if (hours < 24) return `${hours}小时`
  const days = Math.round(hours / 24)
  if (days < 31) return `${days}天`
  const months = Math.round(days / 30)
  if (months < 12) return `${months}个月`
  return `${(days / 365).toFixed(1)}年`
}
