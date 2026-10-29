import React, { useMemo } from 'react'
import { isMastered } from './fsrs.js'
import { dayKey, dueIds } from './session.js'
import { update } from './store.js'
import { Icon } from './ui.jsx'

const DUE_LIMIT = 120
const FREE_LIMIT = 20

/**
 * 复习入口：优先复习到期词；没有到期词时也可自由复习已学词。
 * 实际会话复用 Learn 的主动回忆测验，不再让用户自评 FSRS 分数。
 */
export function ReviewView({
  atlas,
  progress,
  onStart = () => {},
  onFreeReview = () => {},
  onResume = () => {},
  onGoToday = () => {},
}) {
  const data = useMemo(() => {
    const due = dueIds(progress).filter((id) => atlas.byId.has(id))
    const dueSet = new Set(due)
    const learnedIds = Object.keys(progress.cards).filter((id) => atlas.byId.has(id))
    const freeIds = learnedIds.filter((id) => !dueSet.has(id))
    return {
      due: due.length,
      learned: learnedIds.length,
      mastered: Object.values(progress.cards).filter(isMastered).length,
      reviewedToday: progress.days?.[dayKey()]?.r ?? 0,
      freeCount: Math.min(freeIds.length, FREE_LIMIT),
    }
  }, [atlas, progress])

  const total = Math.min(data.due, DUE_LIMIT)
  const minutes = Math.max(1, Math.round(total * 0.25))
  const activeSession = progress.session && !progress.session.finished ? progress.session : null
  const activeReview = Boolean(activeSession && activeSession.mode === 'review')
  const activeToday = Boolean(activeSession && activeSession.mode !== 'review')
  const sessionStep = activeSession ? Math.min(activeSession.index + 1, activeSession.steps.length) : 0
  const sessionTotal = activeSession?.steps.length ?? 0

  const setRetention = (value) => {
    update((state) => ({ ...state, settings: { ...state.settings, retention: value } }))
  }

  return (
    <div className="wa-review-intro">
      <div className="wa-review-hero">
        <h2>今日复习</h2>
        <p>到期词会先出题，答完自动安排下次复习。</p>
      </div>

      <div className="wa-review-stats">
        <div className="wa-stat">
          <strong>{data.due}</strong>
          <span>到期复习</span>
        </div>
        <div className="wa-stat">
          <strong>{data.reviewedToday}</strong>
          <span>今日已复习</span>
        </div>
        <div className="wa-stat">
          <strong>{data.learned.toLocaleString('en-US')}</strong>
          <span>已学词</span>
        </div>
        <div className="wa-stat">
          <strong>{data.mastered.toLocaleString('en-US')}</strong>
          <span>已掌握</span>
        </div>
      </div>

      <div className="wa-review-action">
        {activeReview ? (
          <>
            <p className="wa-review-action-title">复习进行中 · {sessionStep} / {sessionTotal}</p>
            <p className="wa-review-action-note">上次复习还没结束，继续完成它。</p>
            <div className="wa-review-actions">
              <button type="button" className="wa-btn wa-btn-primary wa-btn-lg" onClick={onResume}>
                继续复习 <Icon name="chevronRight" size={17} />
              </button>
            </div>
          </>
        ) : activeToday ? (
          <>
            <p className="wa-review-action-title">当前学习进行中 · {sessionStep} / {sessionTotal}</p>
            <p className="wa-review-action-note">完成当前学习后，再回来复习这 {total} 个到期词。</p>
            <div className="wa-review-actions">
              <button type="button" className="wa-btn wa-btn-primary wa-btn-lg" onClick={onResume}>
                继续当前学习 <Icon name="chevronRight" size={17} />
              </button>
              <button type="button" className="wa-btn wa-btn-ghost" onClick={onGoToday}>
                返回今日
              </button>
            </div>
          </>
        ) : total > 0 ? (
          <>
            <p className="wa-review-action-title">{total} 个到期词 · 预计 {minutes} 分钟</p>
            <p className="wa-review-action-note">先回忆，再揭晓答案；答完自动记录 FSRS 评分。</p>
            <div className="wa-review-actions">
              <button type="button" className="wa-btn wa-btn-primary wa-btn-lg" onClick={onStart}>
                开始复习 <Icon name="chevronRight" size={17} />
              </button>
              {data.freeCount > 0 ? (
                <button type="button" className="wa-btn wa-btn-ghost" onClick={onFreeReview}>
                  自由复习已学词（{data.freeCount}）
                </button>
              ) : null}
            </div>
            {data.freeCount > 0 ? (
              <p className="wa-review-action-note">自由复习会提前复习未到期词，并按答题结果更新 FSRS 排期。</p>
            ) : null}
          </>
        ) : data.freeCount > 0 ? (
          <>
            <p className="wa-review-action-title">今天没有到期词</p>
            <p className="wa-review-action-note">可以自由复习学过的词，或去今日认识几个新词。</p>
            <div className="wa-review-actions">
              <button type="button" className="wa-btn wa-btn-primary wa-btn-lg" onClick={onFreeReview}>
                自由复习已学词（{data.freeCount}） <Icon name="chevronRight" size={17} />
              </button>
              <button type="button" className="wa-btn wa-btn-ghost" onClick={onGoToday}>
                去今日学新词
              </button>
            </div>
            <p className="wa-review-action-note">自由复习会按答题结果更新 FSRS 排期。</p>
          </>
        ) : (
          <>
            <p className="wa-review-action-title">今天没有到期词</p>
            <p className="wa-review-action-note">还没有学过的词，先去今日开始学习吧。</p>
            <div className="wa-review-actions">
              <button type="button" className="wa-btn wa-btn-primary wa-btn-lg" onClick={onGoToday}>
                去今日学习 <Icon name="chevronRight" size={17} />
              </button>
            </div>
          </>
        )}
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
    </div>
  )
}
