import React, { useEffect, useMemo, useState } from 'react'
import { audioUrl, brandUrl, hasMedia, loadEntry, MEDIA } from './data.js'
import { isMastered } from './fsrs.js'
import { hashSeed } from './lookup.js'
import { dayKey, newToday, todayPlan } from './session.js'
import { loadReadingIndex, readingLevelLabel, readingTopicLabel, selectDailyReading, unlearnedCount } from './readings.js'
import { streak } from './store.js'
import { AudioButton, Icon, WordImage } from './ui.jsx'

function greeting(hour) {
  if (hour < 5) return '夜深了'
  if (hour < 11) return '早上好'
  if (hour < 14) return '中午好'
  if (hour < 18) return '下午好'
  return '晚上好'
}

const WEEKDAY = '日一二三四五六'
const LEVEL_NAMES = ['入门', '基础', '进阶', '中高', '高级', '精通']

function Ring({ value, size = 88, stroke = 7, children }) {
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference * (1 - Math.min(1, Math.max(0, value || 0)))
  return (
    <div className="wa-ring" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
        <circle className="wa-ring-track" cx={size / 2} cy={size / 2} r={radius} fill="none" strokeWidth={stroke} />
        <circle
          className="wa-ring-fill"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <div className="wa-ring-label">{children}</div>
    </div>
  )
}

export function Today({ atlas, progress, onStart, onOpenWord, onOpenLevel, onOpenTopic, onOpenReading }) {
  const plan = useMemo(() => todayPlan(atlas, progress, progress.settings), [atlas, progress])
  const active = progress.session && !progress.session.finished ? progress.session : null
  const today = progress.days[dayKey()]
  const streakDays = streak(progress.days)
  const learned = Object.keys(progress.cards).length
  const mastered = Object.values(progress.cards).filter(isMastered).length
  const total = plan.due.length + plan.fresh.length
  const doneToday = today?.r ?? 0
  const goal = progress.settings.dailyNew + Math.min(plan.due.length, 60)
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
    const indexOf = new Map(atlas.cefr.map((name, index) => [name, index]))
    for (const word of atlas.words) {
      const row = rows[indexOf.get(word.cefr)]
      if (!row) continue
      row.total += 1
      const card = progress.cards[word.id]
      if (card) {
        row.seen += 1
        if (isMastered(card)) row.mastered += 1
      }
    }
    return rows
  }, [atlas, progress.cards])

  const topicCounts = useMemo(() => {
    const counts = new Map(atlas.topics.map((topic) => [topic.slug, 0]))
    for (const word of atlas.words) counts.set(word.topic, (counts.get(word.topic) || 0) + 1)
    return counts
  }, [atlas])

  const teaser = (active ? active.newIds : plan.fresh).slice(0, 5).map((id) => atlas.byId.get(id)).filter(Boolean)
  const wotd = useMemo(() => {
    const pool = atlas.words.filter((word) => (word.media & 1) && word.cefr >= 2)
    const list = pool.length ? pool : atlas.words
    return list[hashSeed(dayKey()) % list.length]
  }, [atlas])
  const [wotdEntry, setWotdEntry] = useState(null)
  const [dailyReading, setDailyReading] = useState(null)
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

  useEffect(() => {
    let alive = true
    loadReadingIndex()
      .then((data) => {
        if (!alive) return
        const item = selectDailyReading(Array.isArray(data.items) ? data.items : [], progress, atlas)
        setDailyReading(item || null)
      })
      .catch(() => {})
    return () => {
      alive = false
    }
  }, [atlas, progress.settings.startLevel, progress.cards, progress.readings])

  const accent = progress.settings.accent
  const wotdAudio = hasMedia(wotd || {}, MEDIA[accent])

  return (
    <div className="wa-today">
      <header className="wa-today-head">
        <p className="wa-eyebrow">
          {now.getMonth() + 1} 月 {now.getDate()} 日 · 星期{WEEKDAY[now.getDay()]}
        </p>
        <h1>{greeting(now.getHours())}，探索者。</h1>
        <p>今天先温故，再知新。</p>
      </header>

      <section className="wa-today-hero">
        <img className="wa-today-hero-art" src={brandUrl('hero.webp')} alt="" loading="eager" onError={(event) => { event.currentTarget.style.visibility = 'hidden' }} />
        <div className="wa-today-hero-shade" aria-hidden="true" />
        <div className="wa-today-hero-body">
          <p className="wa-eyebrow">今日学习</p>
          {active ? (
            <h2>
              还剩 <b>{Math.max(0, active.steps.length - active.index)}</b> 步
            </h2>
          ) : total > 0 ? (
            <h2>
              复习 <b>{plan.due.length}</b> · 新词 <b>{plan.fresh.length}</b>
            </h2>
          ) : (
            <h2>今天的词都练完了</h2>
          )}
          <p className="wa-today-hero-lede">
            {active ? '进度已保存，随时接着走。' : total > 0 ? `预计 ${plan.minutes} 分钟 · 先温故，再知新。` : '想多走一段，也可以。'}
          </p>
          <div className="wa-today-hero-actions">
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
          {teaser.length > 0 ? (
            <div className="wa-today-teaser" aria-label="今日将遇见的新词">
              {teaser.map((word) => (
                <WordImage key={word.id} id={word.id} word={word.word} className="wa-today-teaser-img" />
              ))}
              <span>今天会遇见它们</span>
            </div>
          ) : null}
        </div>
      </section>

      <section className="wa-today-strip">
        <div className="wa-today-goal">
          <Ring value={goal ? doneToday / goal : 0}>
            <b>{doneToday}</b>
            <small>/ {goal} 题</small>
          </Ring>
          <div>
            <strong>今日目标</strong>
            <span>已答 {doneToday} · 目标 {goal}</span>
          </div>
        </div>
        <div className="wa-today-stat">
          <strong>{streakDays}</strong>
          <span>连续学习 · 天</span>
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
              <li key={day.key} className={`${day.value ? 'is-on' : 'is-zero'} ${day.today ? 'is-today' : ''}`} title={`${day.key}：${day.value} 题`}>
                <b>{day.value || ''}</b>
                <span style={{ height: `${day.value ? Math.max(10, Math.round((day.value / maxWeek) * 100)) : 5}%` }} />
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
            <div className="wa-pron-row">
              <span className="wa-ipa">{wotd.ipa}</span>
              {wotdAudio ? <AudioButton audioKey={`${accent}:${wotd.id}`} url={audioUrl(accent, wotd.id)} label="发音" /> : null}
              {wotdEntry?.ex?.[0] && hasMedia(wotdEntry, MEDIA.ex) ? (
                <AudioButton audioKey={`ex:${wotd.id}`} url={audioUrl('ex', wotd.id)} label="例句" />
              ) : null}
            </div>
            <p className="wa-wotd-zh">{wotd.zh}</p>
            {wotdEntry?.ex?.[0] ? (
              <p className="wa-wotd-ex" lang="en">
                {wotdEntry.ex[0].en}
              </p>
            ) : null}
          </div>
        </section>
      </div>

      {dailyReading ? (
        <section className="wa-today-reading">
          <div className="wa-today-reading-mark" aria-hidden="true">“</div>
          <div className="wa-today-reading-copy">
            <p className="wa-eyebrow">今日阅读</p>
            <h3>{dailyReading.titleZh}</h3>
            <p className="wa-today-reading-en" lang="en">{dailyReading.title}</p>
            <p className="wa-today-reading-meta">
              {readingLevelLabel(dailyReading, atlas)} · {readingTopicLabel(dailyReading, atlas)} · {unlearnedCount(dailyReading.ids, progress.cards)} 个未学重点词
              {progress.readings?.[dailyReading.id]?.done ? ' · 已读' : ''}
            </p>
            <button type="button" className="wa-btn wa-btn-primary" onClick={() => onOpenReading(dailyReading.id)}>
              开始阅读 <Icon name="chevronRight" size={16} />
            </button>
          </div>
        </section>
      ) : null}

      <section className="wa-panel">
        <div className="wa-panel-head">
          <h3 className="wa-eyebrow">学习路线 · 从 A1 到 C2</h3>
          <span className="wa-muted">起点：{atlas.cefr[progress.settings.startLevel] || 'A1'}</span>
        </div>
        <ol className="wa-route">
          <span className="wa-route-line" aria-hidden="true" />
          {levels.map((level, index) => (
            <li key={level.name}>
              <button
                type="button"
                className={`${index === progress.settings.startLevel ? 'is-start' : ''} ${level.seen ? 'is-on' : ''}`}
                onClick={() => onOpenLevel(level.name)}
                aria-label={`${level.name} ${LEVEL_NAMES[index]}，已学 ${level.seen} / ${level.total}，长期记住 ${level.mastered}`}
              >
                <span className="wa-route-node">
                  <b>{level.name}</b>
                  {index === progress.settings.startLevel ? <em>起点</em> : null}
                </span>
                <span className="wa-route-name">{LEVEL_NAMES[index]}</span>
                <span className="wa-route-count">
                  {level.seen}
                  <small>/{level.total}</small>
                </span>
                <span className="wa-route-bar">
                  <i style={{ width: `${Math.round((level.seen / Math.max(1, level.total)) * 100)}%` }} />
                  <b style={{ width: `${Math.round((level.mastered / Math.max(1, level.total)) * 100)}%` }} />
                </span>
              </button>
            </li>
          ))}
        </ol>
      </section>

      <section className="wa-panel">
        <div className="wa-panel-head">
          <h3 className="wa-eyebrow">按雅思话题探索</h3>
          <button type="button" className="wa-link" onClick={() => onOpenTopic('all')}>
            打开图鉴
          </button>
        </div>
        <ul className="wa-topics-grid">
          {atlas.topics.map((topic) => (
            <li key={topic.slug}>
              <button type="button" onClick={() => onOpenTopic(topic.slug)}>
                <img
                  src={brandUrl(`topic-${topic.slug}.webp`)}
                  alt=""
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.style.display = 'none'
                  }}
                />
                <span>
                  <b>{topic.zh}</b>
                  <small>{(topicCounts.get(topic.slug) || 0).toLocaleString('en-US')} 个词</small>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
