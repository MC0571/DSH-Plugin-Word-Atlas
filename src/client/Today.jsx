import React, { useEffect, useMemo, useState } from 'react'
import { loadEntry } from './data.js'
import { hashSeed } from './lookup.js'
import { dayKey, masteredCount, newToday, todayPlan } from './session.js'
import { streak } from './store.js'
import { Icon, WordImage } from './ui.jsx'

function greeting(hour) {
  if (hour < 5) return '夜深了'
  if (hour < 11) return '早上好'
  if (hour < 14) return '中午好'
  if (hour < 18) return '下午好'
  return '晚上好'
}

const WEEKDAY = '日一二三四五六'
const LEVEL_NAMES = ['入门', '基础', '进阶', '中高', '高级', '精通']

export function Today({ atlas, progress, onStart, onOpenWord, onOpenLevel }) {
  const plan = useMemo(() => todayPlan(atlas, progress, progress.settings), [atlas, progress])
  const active = progress.session && !progress.session.finished ? progress.session : null
  const today = progress.days[dayKey()]
  const streakDays = streak(progress.days)
  const learned = Object.keys(progress.cards).length
  const mastered = masteredCount(progress)
  const total = plan.due.length + plan.fresh.length
  const now = new Date()

  const week = Array.from({ length: 7 }, (_, index) => {
    const date = new Date()
    date.setDate(date.getDate() - (6 - index))
    const key = dayKey(date)
    return { key, label: WEEKDAY[date.getDay()], value: progress.days[key]?.r ?? 0, today: index === 6 }
  })
  const maxWeek = Math.max(1, ...week.map((day) => day.value))

  const levels = useMemo(() => {
    const rows = atlas.cefr.map((name) => ({ name, total: 0, seen: 0, mastered: 0 }))
    for (const word of atlas.words) {
      const row = rows[atlas.cefr.indexOf(word.cefr)]
      if (!row) continue
      row.total += 1
      const card = progress.cards[word.id]
      if (card) {
        row.seen += 1
        if (masteredCount({ cards: { [word.id]: card } })) row.mastered += 1
      }
    }
    return rows
  }, [atlas, progress.cards])

  const teaser = (active ? active.newIds : plan.fresh).slice(0, 5).map((id) => atlas.byId.get(id)).filter(Boolean)
  const wotd = useMemo(() => {
    const pool = atlas.words.filter((word) => (word.media & 1) && word.cefr >= 2)
    const list = pool.length ? pool : atlas.words
    return list[hashSeed(dayKey()) % list.length]
  }, [atlas])
  const [wotdEntry, setWotdEntry] = useState(null)
  useEffect(() => {
    let alive = true
    if (!wotd) return undefined
    loadEntry(atlas, wotd.id)
      .then((entry) => alive && setWotdEntry(entry))
      .catch(() => {})
    return () => {
      alive = false
    }
  }, [atlas, wotd?.id])

  return (
    <div className="wa-today">
      <header className="wa-today-head">
        <p className="wa-eyebrow">
          {now.getMonth() + 1} 月 {now.getDate()} 日 · 星期{WEEKDAY[now.getDay()]}
        </p>
        <h1>{greeting(now.getHours())}，探索者。</h1>
        <p>今天先温故，再知新。</p>
      </header>

      <section className="wa-journey">
        <div className="wa-journey-copy">
          <p className="wa-eyebrow">{active ? '旅程进行中' : total > 0 ? '今日旅程' : '今日已完成'}</p>
          {active ? (
            <>
              <h2>
                还剩 <b>{Math.max(0, active.steps.length - active.index)}</b> 步
              </h2>
              <p className="wa-journey-lede">进度已保存，随时接着走。</p>
            </>
          ) : total > 0 ? (
            <>
              <h2>
                复习 <b>{plan.due.length}</b>
                {plan.due.length > 0 && plan.fresh.length > 0 ? ' · ' : null}
                {plan.fresh.length > 0 ? (
                  <>
                    新词 <b>{plan.fresh.length}</b>
                  </>
                ) : null}
              </h2>
              <p className="wa-journey-lede">约 {plan.minutes} 分钟。先温故，再知新。</p>
            </>
          ) : (
            <>
              <h2>今天的词都练完了</h2>
              <p className="wa-journey-lede">想多走一段，也可以。</p>
            </>
          )}

          <div className="wa-journey-actions">
            {active || total > 0 ? (
              <button type="button" className="wa-btn wa-btn-primary wa-btn-lg" onClick={() => onStart({})}>
                {active ? '继续旅程' : '开始今天的旅程'} <Icon name="chevronRight" size={18} />
              </button>
            ) : (
              <button type="button" className="wa-btn wa-btn-primary wa-btn-lg" onClick={() => onStart({ extra: 5 })}>
                再认识 5 个新词 <Icon name="sparkle" size={17} />
              </button>
            )}
            {!active && plan.due.length > 0 && plan.fresh.length > 0 ? (
              <button type="button" className="wa-btn wa-btn-ghost" onClick={() => onStart({ reviewOnly: true })}>
                只复习
              </button>
            ) : null}
          </div>
        </div>
        <div className="wa-journey-art">
          {teaser.length > 0 ? (
            <div className="wa-teaser" aria-hidden="true">
              {teaser.map((word, index) => (
                <WordImage key={word.id} id={word.id} word={word.word} className={`wa-teaser-${index}`} />
              ))}
            </div>
          ) : (
            <div className="wa-journey-orbit">
              <Icon name="sparkle" size={34} />
            </div>
          )}
          {teaser.length > 0 ? <p>今天会遇见它们</p> : null}
        </div>
      </section>

      <section className="wa-today-strip">
        <div className="wa-today-stat">
          <strong>{streakDays}</strong>
          <span>连续学习 · 天</span>
        </div>
        <div className="wa-today-stat">
          <strong>{today?.r ?? 0}</strong>
          <span>今日答题</span>
        </div>
        <div className="wa-today-stat">
          <strong>{learned.toLocaleString('en-US')}</strong>
          <span>已点亮</span>
        </div>
        <div className="wa-today-stat">
          <strong>{mastered.toLocaleString('en-US')}</strong>
          <span>长期记住</span>
        </div>
      </section>

      <div className="wa-today-grid">
        <section className="wa-panel">
          <div className="wa-panel-head">
            <h3 className="wa-eyebrow">这一周</h3>
            <span className="wa-muted">{newToday(progress)} 个新词</span>
          </div>
          <ol className="wa-week">
            {week.map((day) => (
              <li key={day.key} className={`${day.value ? 'is-on' : ''} ${day.today ? 'is-today' : ''}`} title={`${day.key}：${day.value} 题`}>
                <span style={{ height: `${Math.max(8, Math.round((day.value / maxWeek) * 100))}%` }} />
                <small>{day.label}</small>
              </li>
            ))}
          </ol>
        </section>

        <section
          className="wa-panel wa-wotd"
          role="button"
          tabIndex={0}
          onClick={() => wotd && onOpenWord(wotd.id)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault()
              if (wotd) onOpenWord(wotd.id)
            }
          }}
        >
          <WordImage id={wotd.id} word={wotd.word} className="wa-wotd-img" />
          <div className="wa-wotd-body">
            <h3 className="wa-eyebrow">今日一词</h3>
            <p className="wa-wotd-word" lang="en">
              {wotd.word}
            </p>
            <p className="wa-wotd-ipa">{wotd.ipa}</p>
            <p className="wa-wotd-zh">{wotd.zh}</p>
            {wotdEntry?.ex?.[0] ? (
              <p className="wa-wotd-ex" lang="en">
                {wotdEntry.ex[0].en}
              </p>
            ) : null}
          </div>
        </section>

        <section className="wa-panel">
          <h3 className="wa-eyebrow">学习路线 · 从 A1 到 C2</h3>
          <ol className="wa-levels">
            {levels.map((level, index) => (
              <li key={level.name}>
                <button type="button" onClick={() => onOpenLevel(level.name)} aria-label={`${level.name} ${LEVEL_NAMES[index]}，已学 ${level.seen} / ${level.total}`}>
                  <span className="wa-level-name">{level.name}</span>
                  <span className="wa-level-bar">
                    <i style={{ width: `${Math.round((level.seen / Math.max(1, level.total)) * 100)}%` }} />
                    <b style={{ width: `${Math.round((level.mastered / Math.max(1, level.total)) * 100)}%` }} />
                  </span>
                  <span className="wa-level-count">
                    {level.seen}
                    <small>/{level.total}</small>
                  </span>
                  <span className="wa-level-label">{LEVEL_NAMES[index]}</span>
                </button>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  )
}
