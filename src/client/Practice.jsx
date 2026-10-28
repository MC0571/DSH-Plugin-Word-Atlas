import React, { useState, useEffect, useMemo, useRef } from 'react'
import { audioUrl, brandUrl, hasMedia, loadEntry, MEDIA } from './data.js'
import { hashSeed, shuffle } from './lookup.js'
import { update } from './store.js'
import { clean, compact, correctCharacterCount, same, typingDelta, typingMetrics } from './typing.js'
import { Icon, WordImage, playAudio, stopAllAudio } from './ui.jsx'

const MODES = [
  { id: 'word', name: '单词', desc: '看图写出单词', icon: 'type' },
  { id: 'sentence', name: '例句', desc: '照着抄写，练出手感', icon: 'keyboard' },
  { id: 'dictation', name: '听写', desc: '只听声音，写下整句', icon: 'headphones' },
]
const SOURCES = [
  { id: 'recent', label: '最近学过' },
  { id: 'mistakes', label: '错词本' },
  { id: 'saved', label: '收藏' },
  { id: 'path', label: '学习路线' },
]

export function Practice({ atlas, progress }) {
  const [mode, setMode] = useState('word')
  const [source, setSource] = useState(() => (Object.keys(progress.cards).length > 0 ? 'recent' : 'path'))
  const [round, setRound] = useState(null)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')

  const pool = useMemo(() => {
    const learned = Object.entries(progress.cards)
      .sort((a, b) => (b[1].last ?? 0) - (a[1].last ?? 0))
      .map(([id]) => id)
    const ids =
      source === 'recent'
        ? learned
        : source === 'mistakes'
          ? progress.mistakes
          : source === 'saved'
            ? progress.bookmarks
            : atlas.words.filter((word) => word.cefr >= progress.settings.startLevel).slice(0, 400).map((word) => word.id)
    return ids.filter((id) => atlas.byId.has(id))
  }, [atlas, progress.cards, progress.mistakes, progress.bookmarks, progress.settings.startLevel, source])

  const best = progress.typing.filter((round) => round.mode === mode).reduce((max, round) => Math.max(max, round.wpm || 0), 0)
  const rounds = progress.typing.length

  const start = async () => {
    if (busy) return
    setBusy(true)
    setError('')
    try {
      const ids = shuffle(pool.slice(0, 60), hashSeed(String(Date.now()))).slice(0, 10)
      const loaded = []
      for (const id of ids) {
        try {
          loaded.push(await loadEntry(atlas, id))
        } catch {
          /* skip a broken chunk */
        }
      }
      const entries = loaded.filter((entry) => entry && (mode === 'word' || entry.ex?.length > 0))
      if (entries.length === 0) {
        setError('这个来源暂时没有可练习的词，先去学几个或换个来源。')
        return
      }
      setRound({ entries, key: Date.now(), mode })
    } finally {
      setBusy(false)
    }
  }

  if (round) {
    return (
      <TypingRound
        key={round.key}
        atlas={atlas}
        progress={progress}
        mode={round.mode}
        entries={round.entries}
        onExit={() => setRound(null)}
        onAgain={start}
      />
    )
  }

  const currentMode = MODES.find((item) => item.id === mode) || MODES[0]
  const brandImage = brandUrl(mode === 'dictation' ? 'listen.webp' : 'hero.webp')

  return (
    <div className="wa-practice">
      <header className="wa-practice-head">
        <p className="wa-eyebrow">练习 · Typing Studio</p>
        <h1>让手，也记住它们。</h1>
        <p>打字只练拼写和手感，不会改动记忆进度。</p>
      </header>

      <div className="wa-practice-grid">
        <section className="wa-panel">
          <h3 className="wa-eyebrow">模式</h3>
          <div className="wa-mode-cards">
            {MODES.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`wa-mode-card ${mode === item.id ? 'is-on' : ''}`}
                aria-pressed={mode === item.id}
                onClick={() => setMode(item.id)}
              >
                <Icon name={item.icon} size={22} />
                <b>{item.name}</b>
                <small>{item.desc}</small>
              </button>
            ))}
          </div>

          <h3 className="wa-eyebrow wa-mt">词来自</h3>
          <div className="wa-seg wa-seg-wide">
            {SOURCES.map((item) => (
              <button
                key={item.id}
                type="button"
                className={source === item.id ? 'is-on' : ''}
                aria-pressed={source === item.id}
                onClick={() => setSource(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <p className="wa-panel-hint">
            {pool.length
              ? source === 'path'
                ? '从学习路线的前 400 个词里随机抽 10 个。'
                : `可练 ${pool.length} 个词，每轮随机 10 个。`
              : '这里还没有词，先去学几个，或换个来源。'}
          </p>
          <button type="button" className="wa-btn wa-btn-primary wa-btn-lg wa-practice-start" onClick={start} disabled={!pool.length || busy}>
            {busy ? '准备中…' : '开始一轮'}
          </button>
          {error ? <p className="wa-error-text">{error}</p> : null}
        </section>

        <section className="wa-panel wa-practice-side">
          <img src={brandImage} alt="" onError={(event) => { event.currentTarget.style.visibility = 'hidden' }} />
          <div className="wa-practice-stats">
            <div>
              <strong>{best}</strong>
              <span>最佳速度 · WPM</span>
            </div>
            <div>
              <strong>{rounds}</strong>
              <span>完成轮次</span>
            </div>
          </div>
          <p className="wa-panel-note">WPM 按标准每 5 个字符计 1 词，只统计正确输入。</p>
          <p className="wa-panel-note">当前模式：{currentMode.name} · {currentMode.desc}</p>
        </section>
      </div>
    </div>
  )
}

function TypingRound({ atlas, progress, mode, entries, onExit, onAgain }) {
  const [index, setIndex] = useState(0)
  const [value, setValue] = useState('')
  const totals = useRef({ typed: 0, correct: 0, accepted: 0, ms: 0 })
  const [metrics, setMetrics] = useState(() => typingMetrics(0, 0, 0, 0))
  const [done, setDone] = useState(false)
  const started = useRef(null)
  const input = useRef(null)
  const accent = progress.settings.accent
  const entry = entries[index]
  const target = mode === 'word' ? entry.w : entry.ex[0]?.en || entry.w
  const audioKind = mode === 'dictation' ? 'ex' : accent

  const playPrompt = () => {
    if (!hasMedia(entry, MEDIA[audioKind])) return
    playAudio(`practice:${audioKind}:${entry.id}:${index}`, audioUrl(audioKind, entry.id))
  }

  useEffect(() => {
    setValue('')
    started.current = null
    input.current?.focus()
    if (mode === 'dictation') playPrompt()
    else if (mode === 'word' && progress.settings.autoplay) playPrompt()
  }, [index]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => () => stopAllAudio(), [])

  const compareTarget = mode === 'word' ? clean(target) : compact(target)

  const finish = (final) => {
    const elapsed = started.current ? performance.now() - started.current : 0
    const accepted = correctCharacterCount(mode === 'word' ? clean(final) : compact(final), compareTarget)
    const nextTotals = {
      ...totals.current,
      accepted: totals.current.accepted + accepted,
      ms: totals.current.ms + elapsed,
    }
    totals.current = nextTotals
    const nextMetrics = typingMetrics(nextTotals.correct, nextTotals.typed, nextTotals.accepted, nextTotals.ms)
    setMetrics(nextMetrics)
    if (index + 1 >= entries.length) {
      setDone(true)
      update((state) => ({
        ...state,
        typing: [...state.typing, { at: Date.now(), mode, items: entries.length, wpm: nextMetrics.wpm, accuracy: nextMetrics.accuracy }].slice(-500),
      }))
      return
    }
    window.setTimeout(() => setIndex((current) => current + 1), 260)
  }

  const onChange = (next) => {
    if (done) return
    if (started.current === null && next) started.current = performance.now()
    const previous = mode === 'word' ? clean(value) : compact(value)
    const current = mode === 'word' ? clean(next) : compact(next)
    const delta = typingDelta(previous, current, compareTarget)
    const nextTotals = {
      ...totals.current,
      typed: totals.current.typed + delta.total,
      correct: totals.current.correct + delta.correct,
    }
    totals.current = nextTotals
    setMetrics(typingMetrics(nextTotals.correct, nextTotals.typed, nextTotals.accepted, nextTotals.ms))
    setValue(next)
    if (current.length >= compareTarget.length && same(current, compareTarget)) finish(next)
  }

  if (done) {
    return (
      <div className="wa-practice wa-typing-done">
        <section className="wa-panel">
          <p className="wa-eyebrow">本轮完成</p>
          <h1>
            {metrics.wpm} <small>WPM</small>
          </h1>
          <p className="wa-panel-hint">
            准确率 {metrics.accuracy}% · {entries.length} 项
          </p>
          <div className="wa-summary-actions">
            <button type="button" className="wa-btn wa-btn-ghost" onClick={onExit}>
              返回
            </button>
            <button type="button" className="wa-btn wa-btn-primary wa-btn-lg" onClick={onAgain} autoFocus>
              <Icon name="rotateCcw" size={17} /> 再来一轮
            </button>
          </div>
        </section>
      </div>
    )
  }

  const chars = Array.from(target)
  const typedChars = Array.from(clean(value)).filter((character) => !/\s/.test(character))
  let typedIndex = -1
  const progressPercent = entries.length ? Math.round((index / entries.length) * 100) : 0

  return (
    <div className="wa-practice wa-typing">
      <header className="wa-typing-top">
        <button type="button" className="wa-btn wa-btn-ghost" onClick={onExit}>
          结束
        </button>
        <div className="wa-typing-progress">
          <span style={{ width: `${progressPercent}%` }} />
        </div>
        <span className="wa-typing-meter">
          <b>{metrics.wpm}</b> WPM · <b>{metrics.accuracy}%</b>
        </span>
      </header>

      <section className="wa-typing-stage" onClick={() => input.current?.focus()}>
        {mode === 'word' ? (
          <div className="wa-typing-cue">
            <WordImage id={entry.id} word={entry.w} full className="wa-typing-art" alt={`${entry.w} 插画`} />
            <p>
              {entry.senses[0]?.pos ? <span className="wa-pos">{entry.senses[0].pos}</span> : null} {entry.senses[0]?.zh}
            </p>
          </div>
        ) : (
          <p className="wa-typing-zh">
            {mode === 'dictation' ? (
              <button type="button" className="wa-link" onClick={playPrompt}>
                再听一遍
              </button>
            ) : null}
            {entry.ex[0]?.zh}
          </p>
        )}

        <p className={`wa-typing-text ${mode === 'word' ? 'is-word' : ''} ${mode === 'dictation' ? 'is-hidden' : ''}`} lang="en" aria-hidden="true">
          {chars.map((character, position) => {
            if (/\s/.test(character)) {
              return (
                <span key={position} className="is-space" aria-hidden="true">
                  {'\u00a0'}
                </span>
              )
            }
            typedIndex += 1
            const typedCharacter = typedChars[typedIndex]
            const state = typedCharacter === undefined ? (typedIndex === typedChars.length ? 'is-caret' : '') : same(typedCharacter, character) ? 'is-ok' : 'is-bad'
            const shown = mode === 'dictation' && typedCharacter === undefined ? (/[A-Za-z]/.test(character) ? '·' : character) : character
            return (
              <span key={position} className={state}>
                {shown}
              </span>
            )
          })}
        </p>

        <input
          ref={input}
          className="wa-typing-input"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          autoFocus
          autoCapitalize="off"
          autoCorrect="off"
          autoComplete="off"
          spellCheck={false}
          aria-label="在这里输入"
        />
        <p className="wa-panel-note wa-typing-help">
          {mode === 'dictation' ? '听不清可以点「再听一遍」。' : '直接开始输入，全部正确后自动进入下一项。'}
          {mode === 'word' ? null : ' 空格不参与判分（输入法吞掉空格也没关系），句中虚线下划线表示空格。'}
          {' '}第 {index + 1}/{entries.length} 项
        </p>
      </section>
    </div>
  )
}
