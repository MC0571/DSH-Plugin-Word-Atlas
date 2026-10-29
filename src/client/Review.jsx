import React, { useMemo } from 'react'
import { isMastered } from './fsrs.js'
import { dayKey, dueIds } from './session.js'
import { update } from './store.js'
import { Icon } from './ui.jsx'

const DUE_LIMIT = 120

/**
 * 复习入口：只复习到期词。
 * 真正的复习会话复用 Learn 的主动回忆测验（看词选义/看图选词/听音选词/拼写），
 * 由 buildSession(..., { reviewOnly: true }) 生成，不再让用户自评 FSRS 分数。
 */
export function ReviewView({ atlas, progress, onStart = () => {} }) {
  const counts = useMemo(() => {
    const due = dueIds(progress).filter((id) => atlas.byId.has(id)).length
    const learned = Object.keys(progress.cards).length
    const mastered = Object.values(progress.cards).filter(isMastered).length
    const reviewedToday = progress.days?.[dayKey()]?.r ?? 0
    return { due, learned, mastered, reviewedToday }
  }, [atlas, progress])
  const total = Math.min(counts.due, DUE_LIMIT)
  const activeSession = progress.session && !progress.session.finished ? progress.session : null
  const activeReview = Boolean(activeSession && activeSession.mode === 'review')
  const activeToday = Boolean(activeSession && activeSession.mode !== 'review')

  const setRetention = (value) => {
    update((state) => ({ ...state, settings: { ...state.settings, retention: value } }))
  }

  return (
    <div className="wa-review-intro">
      <div className="wa-review-hero">
        <h2>今日复习</h2>
        <p>先回忆，再揭晓答案。到期词会按 FSRS 的记忆稳定度重新安排。</p>
      </div>

      <div className="wa-review-stats">
        <div className="wa-stat">
          <strong>{counts.due}</strong>
          <span>到期复习</span>
        </div>
        <div className="wa-stat">
          <strong>{counts.reviewedToday}</strong>
          <span>今日已复习</span>
        </div>
        <div className="wa-stat">
          <strong>{counts.learned.toLocaleString('en-US')}</strong>
          <span>已学词</span>
        </div>
        <div className="wa-stat">
          <strong>{counts.mastered.toLocaleString('en-US')}</strong>
          <span>已掌握</span>
        </div>
      </div>

      <div className="wa-review-settings">
        <label>
          目标记忆率
          <select value={progress.settings.retention} onChange={(event) => setRetention(Number(event.target.value))}>
            {[0.8, 0.85, 0.9, 0.95].map((value) => (
              <option key={value} value={value}>
                {Math.round(value * 100)}%
              </option>
            ))}
          </select>
        </label>
      </div>

      <p className="wa-review-note">
        只复习到期词；新词请从「今日」开始学习。复习会先出题，答完自动记录 FSRS 评分。
      </p>

      <button
        type="button"
        className="wa-btn wa-btn-primary wa-start-btn"
        onClick={() => {
          if (!activeToday) onStart()
        }}
        disabled={activeToday || (!activeReview && total === 0)}
      >
        {activeReview
          ? '继续复习'
          : activeToday
            ? '请先完成当前学习'
            : total > 0
              ? `开始复习（${total} 个到期词）`
              : '今天没有到期词'}
      </button>
      {activeToday ? (
        <p className="wa-review-done-hint">
          当前有进行中的学习会话（含新词介绍），请先在「今日」完成后再复习。
        </p>
      ) : null}
      {!activeSession && total === 0 ? (
        <p className="wa-review-done-hint">
          <Icon name="check" size={15} /> 到期词都复习完了，去今日学几个新词吧。
        </p>
      ) : null}
    </div>
  )
}
