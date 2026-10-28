import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { audioUrl, hasMedia, loadEntry, MEDIA } from './data.js'
import { GRADE_LABELS, GRADE_ORDER, Rating, formatInterval, isMastered, preview, review, isDue } from './fsrs.js'
import { bumpDay, update } from './store.js'
import { AudioButton, CefrBadge, EmptyState, Icon, Spinner, WordImage } from './ui.jsx'
import { LookupText } from './LookupText.jsx'

const DUE_LIMIT = 100

function shuffle(list) {
  const copy = [...list]
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(Math.random() * (index + 1))
    ;[copy[index], copy[swap]] = [copy[swap], copy[index]]
  }
  return copy
}

function buildQueue(atlas, progress) {
  const now = Date.now()
  const cards = progress.cards
  const due = []
  for (const word of atlas.words) {
    const card = cards[word.id]
    if (card && card.due <= now) due.push({ id: word.id, word, card, due: card.due })
  }
  due.sort((a, b) => a.due - b.due)
  const dueItems = due.slice(0, DUE_LIMIT)
  const taken = new Set(dueItems.map((item) => item.id))
  const fresh = shuffle(atlas.words.filter((word) => !cards[word.id] && !taken.has(word.id)))
  const newItems = fresh.slice(0, Math.max(0, progress.settings.dailyNew)).map((word) => ({ id: word.id, word, card: undefined }))
  return [...dueItems, ...newItems]
}

function countsOf(atlas, progress) {
  const now = Date.now()
  let due = 0
  let learned = 0
  let mastered = 0
  for (const word of atlas.words) {
    const card = progress.cards[word.id]
    if (!card) continue
    learned += 1
    if (card.due <= now) due += 1
    if (isMastered(card)) mastered += 1
  }
  const fresh = atlas.count - learned
  return { due, learned, mastered, fresh }
}

function ReviewIntro({ atlas, progress, onStart }) {
  const counts = useMemo(() => countsOf(atlas, progress), [atlas, progress])
  const newTarget = Math.min(progress.settings.dailyNew, counts.fresh)
  const total = Math.min(counts.due, DUE_LIMIT) + newTarget

  const setSetting = (key, value) => {
    update((state) => ({ ...state, settings: { ...state.settings, [key]: value } }))
  }

  return (
    <div className="wa-review-intro">
      <div className="wa-review-hero">
        <span className="wa-review-orbit" aria-hidden="true">
          <Icon name="sparkle" size={30} />
        </span>
        <h2>今日复习</h2>
        <p>
          FSRS 会按记忆稳定度安排复习。到期就复习，记得牢的词会越隔越久。
        </p>
      </div>

      <div className="wa-review-stats">
        <div className="wa-stat">
          <strong>{counts.due}</strong>
          <span>到期复习</span>
        </div>
        <div className="wa-stat">
          <strong>{newTarget}</strong>
          <span>今日新词</span>
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
          每日新词
          <select value={progress.settings.dailyNew} onChange={(event) => setSetting('dailyNew', Number(event.target.value))}>
            {[5, 10, 15, 20, 30, 50].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
        <label>
          目标记忆率
          <select value={progress.settings.retention} onChange={(event) => setSetting('retention', Number(event.target.value))}>
            {[0.8, 0.85, 0.9, 0.95].map((value) => (
              <option key={value} value={value}>
                {Math.round(value * 100)}%
              </option>
            ))}
          </select>
        </label>
      </div>

      <button type="button" className="wa-btn wa-btn-primary wa-start-btn" onClick={onStart} disabled={total === 0}>
        {total > 0 ? `开始复习（${total} 个词）` : '今天没有要复习的词'}
      </button>
      {total === 0 ? (
        <p className="wa-review-done-hint">
          <Icon name="check" size={15} /> 都复习完了，去图鉴里认识几个新词吧。
        </p>
      ) : null}
      <p className="wa-review-tip">复习进度会自动保存到本机 `$DSH_HOME/word-atlas-dsh/progress.json`。</p>
    </div>
  )
}

function ReviewSummary({ session, atlas, progress, onAgain, onExit }) {
  const counts = useMemo(() => countsOf(atlas, progress), [atlas, progress])
  const { reviewed, correct, newWords } = session.stats
  const accuracy = reviewed ? Math.round((correct / reviewed) * 100) : 0
  return (
    <div className="wa-review-summary">
      <span className="wa-review-orbit is-done" aria-hidden="true">
        <Icon name="check" size={28} />
      </span>
      <h2>本组完成</h2>
      <div className="wa-review-stats">
        <div className="wa-stat">
          <strong>{reviewed}</strong>
          <span>复习词数</span>
        </div>
        <div className="wa-stat">
          <strong>{newWords}</strong>
          <span>新学词</span>
        </div>
        <div className="wa-stat">
          <strong>{accuracy}%</strong>
          <span>首次答对率</span>
        </div>
        <div className="wa-stat">
          <strong>{counts.due}</strong>
          <span>剩余到期</span>
        </div>
      </div>
      <div className="wa-review-summary-actions">
        <button type="button" className="wa-btn wa-btn-primary" onClick={onAgain}>
          再练一组
        </button>
        <button type="button" className="wa-btn wa-btn-ghost" onClick={onExit}>
          返回图鉴
        </button>
      </div>
    </div>
  )
}

function ReviewCard({ atlas, progress, item, entry, stats, onReveal, onGrade, onOpenWord }) {
  const now = Date.now()
  const intervals = preview(item.card, now, progress.settings.retention)
  const newWord = !item.card
  const correct = (grade) => grade >= Rating.Good

  return (
    <div className="wa-review-card">
      <div className="wa-review-art">
        <WordImage id={item.word.id} word={item.word.word} full alt={`${item.word.word} 插画`} />
      </div>
      <div className="wa-review-body">
        <div className="wa-review-tags">
          <CefrBadge level={item.word.cefr} />
          {newWord ? <span className="wa-chip wa-chip-new">新词</span> : <span className="wa-chip">到期复习</span>}
        </div>
        <h2 className="wa-review-word" lang="en">
          {item.word.word}
        </h2>
        <div className="wa-pron-row">
          <span className="wa-ipa">{entry?.uk || item.word.ipa}</span>
          {hasMedia(item.word, MEDIA.uk) ? (
            <AudioButton audioKey={`uk:${item.word.id}`} url={audioUrl('uk', item.word.id)} label="英音" />
          ) : null}
          {hasMedia(item.word, MEDIA.us) && entry?.us ? (
            <AudioButton audioKey={`us:${item.word.id}`} url={audioUrl('us', item.word.id)} label="美音" />
          ) : null}
        </div>

        {!stats.revealed ? (
          <button type="button" className="wa-btn wa-btn-primary wa-reveal-btn" onClick={onReveal}>
            显示答案
          </button>
        ) : (
          <div className="wa-answer">
            <ol className="wa-senses">
              {(entry?.senses || []).map((sense, index) => (
                <li key={index}>
                  {sense.pos ? <span className="wa-pos">{sense.pos}</span> : null}
                  <span className="wa-zh">{sense.zh}</span>
                  {sense.en ? (
                    <span className="wa-en" lang="en">
                      {sense.en}
                    </span>
                  ) : null}
                </li>
              ))}
            </ol>
            {entry?.ex?.[0] ? (
              <p className="wa-review-example" lang="en">
                <LookupText
                  atlas={atlas}
                  progress={progress}
                  text={entry.ex[0].en}
                  headword={item.word.word}
                  onOpenWord={onOpenWord}
                />
              </p>
            ) : null}
            {entry?.ex?.[0]?.zh ? <p className="wa-review-example-zh">{entry.ex[0].zh}</p> : null}
            {entry?.tip ? <p className="wa-review-tip-line">{entry.tip}</p> : null}

            <div className="wa-grades">
              {GRADE_ORDER.map((grade) => (
                <button
                  type="button"
                  key={grade}
                  className={`wa-grade wa-grade-${grade}`}
                  onClick={() => onGrade(grade)}
                >
                  <span className="wa-grade-label">{GRADE_LABELS[grade]}</span>
                  <span className="wa-grade-interval">{formatInterval(intervals[grade])}</span>
                </button>
              ))}
            </div>
            <p className="wa-grade-hint">只有首次作答计入正确率；键盘 1–4 也可以评分。</p>
          </div>
        )}
      </div>
    </div>
  )
}

export function ReviewView({ atlas, progress, onExit, onOpenWord }) {
  const [session, setSession] = useState(null)
  const [entry, setEntry] = useState(null)
  const [entryFailed, setEntryFailed] = useState(false)

  const current = session && !session.finished ? session.queue[session.index] : null

  useEffect(() => {
    if (!current) {
      setEntry(null)
      return undefined
    }
    let alive = true
    setEntry(null)
    setEntryFailed(false)
    loadEntry(atlas, current.id)
      .then((value) => {
        if (alive) setEntry(value)
      })
      .catch(() => {
        if (alive) setEntryFailed(true)
      })
    return () => {
      alive = false
    }
  }, [atlas, current?.id])

  const start = useCallback(() => {
    const queue = buildQueue(atlas, progress)
    setSession({ queue, index: 0, revealed: false, finished: false, stats: { reviewed: 0, correct: 0, newWords: 0 }, startedAt: Date.now() })
  }, [atlas, progress])

  const reveal = useCallback(() => {
    setSession((state) => (state && !state.revealed ? { ...state, revealed: true } : state))
  }, [])

  const grade = useCallback(
    (gradeValue) => {
      const item = session?.queue[session.index]
      if (!item) return
      const nextCard = review(item.card, gradeValue, Date.now(), progress.settings.retention)
      const isCorrect = gradeValue >= Rating.Good
      update((state) => ({
        ...state,
        cards: { ...state.cards, [item.id]: nextCard },
        days: bumpDay(state.days, { newWords: item.card ? 0 : 1, reviewed: 1, correct: isCorrect ? 1 : 0 }),
      }))
      setSession((state) => {
        if (!state || state.finished) return state
        const stats = {
          reviewed: state.stats.reviewed + 1,
          correct: state.stats.correct + (isCorrect ? 1 : 0),
          newWords: state.stats.newWords + (item.card ? 0 : 1),
        }
        const index = state.index + 1
        if (index >= state.queue.length) return { ...state, index, revealed: false, finished: true, stats }
        return { ...state, index, revealed: false, stats }
      })
    },
    [session, progress.settings.retention],
  )

  useEffect(() => {
    if (!current) return undefined
    const onKeyDown = (event) => {
      if (event.target instanceof HTMLElement && /^(INPUT|SELECT|TEXTAREA)$/.test(event.target.tagName)) return
      if (!session.revealed) {
        if (event.code === 'Space' || event.key === 'Enter') {
          event.preventDefault()
          reveal()
        }
        return
      }
      const map = { 1: Rating.Again, 2: Rating.Hard, 3: Rating.Good, 4: Rating.Easy }
      if (map[event.key]) {
        event.preventDefault()
        grade(map[event.key])
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [current, session?.revealed, reveal, grade])

  if (!atlas) return null

  if (!session) return <ReviewIntro atlas={atlas} progress={progress} onStart={start} />

  if (session.finished) {
    return (
      <ReviewSummary
        session={session}
        atlas={atlas}
        progress={progress}
        onAgain={() => setSession(null)}
        onExit={onExit}
      />
    )
  }

  if (!current) {
    return <EmptyState title="这一组复习完成了" icon="check" />
  }

  const index = session.index
  const total = session.queue.length
  const item = current

  return (
    <div className="wa-review-shell">
      <div className="wa-review-top">
        <div className="wa-review-progress">
          <div className="wa-review-bar" aria-hidden="true">
            <span style={{ width: `${Math.round((index / total) * 100)}%` }} />
          </div>
          <span className="wa-review-counter">
            {index + 1} / {total}
          </span>
        </div>
        <button type="button" className="wa-btn wa-btn-ghost" onClick={() => setSession(null)}>
          <Icon name="close" size={15} /> 结束
        </button>
      </div>

      {entryFailed ? <p className="wa-error">词条加载失败，请检查词光插件路由是否正常。</p> : null}
      {!entry && !entryFailed ? (
        <div className="wa-review-loading">
          <Spinner label="加载词条…" />
        </div>
      ) : null}

      <ReviewCard
        atlas={atlas}
        progress={progress}
        item={item}
        entry={entry}
        stats={{ revealed: session.revealed }}
        onReveal={reveal}
        onGrade={grade}
        onOpenWord={onOpenWord}
      />
    </div>
  )
}
