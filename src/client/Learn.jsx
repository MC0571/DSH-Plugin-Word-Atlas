import React, { useCallback, useEffect, useRef, useState } from 'react'
import { audioUrl, hasMedia, loadEntry, MEDIA } from './data.js'
import { Rating } from './fsrs.js'
import { gap } from './lookup.js'
import { answer as applyAnswer, advance, gradeFor, sessionStats } from './session.js'
import { update } from './store.js'
import { AudioButton, CefrBadge, EmptyState, Icon, Spinner, WordImage, playAudio, stopAllAudio } from './ui.jsx'
import { LookupText } from './LookupText.jsx'

const KIND_LABEL = {
  meaning: '它是什么意思？',
  picture: '看图，补全这句话',
  listen: '听，是哪个词？',
  spell: '拼出这个词',
}

function useEntry(atlas, id) {
  const [entry, setEntry] = useState(null)
  useEffect(() => {
    let alive = true
    setEntry(null)
    if (!id) return undefined
    loadEntry(atlas, id)
      .then((value) => alive && setEntry(value))
      .catch(() => {})
    return () => {
      alive = false
    }
  }, [atlas, id])
  return entry
}

function useStepTimer(key) {
  const start = useRef(Date.now())
  useEffect(() => {
    start.current = Date.now()
  }, [key])
  return () => Date.now() - start.current
}

function useKeys(map) {
  const ref = useRef(map)
  ref.current = map
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.metaKey || event.ctrlKey || event.altKey || event.repeat) return
      const target = event.target
      const tag = target instanceof HTMLElement ? target.tagName : ''
      if ((tag === 'INPUT' || tag === 'TEXTAREA') && !(event.key === 'Enter' && target instanceof HTMLInputElement && target.readOnly)) return
      if (tag === 'BUTTON' && (event.key === 'Enter' || event.key === ' ')) return
      const handler = ref.current[event.key]
      if (handler) {
        event.preventDefault()
        handler()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])
}

function LearnBar({ progress, value, total, count, onExit, label = '今日学习' }) {
  const percent = Math.round(Math.min(1, Math.max(0, progress)) * 100)
  return (
    <header className="wa-learn-bar">
      <div className="wa-learn-bar-inner">
        <button type="button" className="wa-btn wa-btn-ghost wa-learn-exit" onClick={onExit} aria-label="退出学习">
          <Icon name="close" size={16} /> 退出
        </button>
        <div className="wa-learn-bar-center">
          <span className="wa-learn-bar-title">{label}</span>
          <div className="wa-learn-progress" role="progressbar" aria-valuemin={0} aria-valuemax={total || 1} aria-valuenow={value}>
            <span style={{ width: `${percent}%` }} />
          </div>
        </div>
        {count ? <span className="wa-learn-count">{count}</span> : null}
      </div>
    </header>
  )
}

function LearnShell({ bar, children, centered = false }) {
  return (
    <div className="wa-learn">
      {bar}
      <main className={`wa-learn-stage ${centered ? 'is-centered' : ''}`}>{children}</main>
    </div>
  )
}

function Intro({ atlas, progress, step, onOpenWord }) {
  const entry = useEntry(atlas, step.id)
  const elapsed = useStepTimer(step.id)
  const accent = progress.settings.accent
  const ready = useRef(false)

  useEffect(() => {
    ready.current = false
  }, [step.id])

  useEffect(() => {
    if (!entry || ready.current) return
    ready.current = true
    if (progress.settings.autoplay && hasMedia(entry, MEDIA[accent])) playAudio(`${accent}:${step.id}`, audioUrl(accent, step.id))
  }, [entry, accent, step.id, progress.settings.autoplay])

  const next = useCallback(() => {
    stopAllAudio()
    update((state) => advance(state, elapsed() / 1000))
  }, [elapsed])

  useKeys({ Enter: next, ' ': next })

  if (!entry) {
    return (
      <div className="wa-learn-loading">
        <Spinner label="准备词卡…" />
      </div>
    )
  }

  const word = atlas.byId.get(step.id)
  return (
    <div className="wa-learn-intro">
      <p className="wa-learn-label">
        <span className="wa-dot is-on" /> 初次见面
      </p>
      <div className="wa-learn-card">
        <WordImage id={word.id} word={word.word} full className="wa-learn-art" alt={`${word.word} 插画`} />
        <div className="wa-learn-body">
          <div className="wa-tags">
            <CefrBadge level={word.cefr} />
            {word.topicZh ? <span className="wa-chip">{word.topicZh}</span> : null}
          </div>
          <h2 className="wa-learn-word" lang="en">
            {word.word}
          </h2>
          <div className="wa-pron">
            {entry.uk ? (
              <div className="wa-pron-row">
                <span className="wa-pron-label">英</span>
                <span className="wa-ipa">{entry.uk}</span>
                {hasMedia(entry, MEDIA.uk) ? <AudioButton audioKey={`uk:${word.id}`} url={audioUrl('uk', word.id)} label="发音" /> : null}
              </div>
            ) : null}
            {entry.us ? (
              <div className="wa-pron-row">
                <span className="wa-pron-label">美</span>
                <span className="wa-ipa">{entry.us}</span>
                {hasMedia(entry, MEDIA.us) ? <AudioButton audioKey={`us:${word.id}`} url={audioUrl('us', word.id)} label="发音" /> : null}
              </div>
            ) : null}
          </div>
          <ol className="wa-senses">
            {(entry.senses || []).map((sense, index) => (
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
          {(entry.ex || []).slice(0, 1).map((example, index) => (
            <div className="wa-learn-example" key={index}>
              <p className="wa-ex-en" lang="en">
                <LookupText atlas={atlas} progress={progress} text={example.en} headword={word.word} onOpenWord={onOpenWord} />
              </p>
              <p className="wa-ex-zh">{example.zh}</p>
            </div>
          ))}
          {entry.tip ? (
            <aside className="wa-tip">
              <Icon name="sparkle" size={17} />
              <p>{entry.tip}</p>
            </aside>
          ) : null}
        </div>
      </div>
      <div className="wa-learn-actions">
        <button type="button" className="wa-btn wa-btn-primary wa-btn-lg" onClick={next} autoFocus>
          认识了 <Icon name="chevronRight" size={18} />
        </button>
        <span className="wa-hint">Enter 继续</span>
      </div>
    </div>
  )
}

function SpellInput({ entry, pending, hints, onHint, onSubmit }) {
  const [value, setValue] = useState('')
  const input = useRef(null)
  const target = entry.w
  const prefix = target.slice(0, hints)

  useEffect(() => {
    if (hints && !value.toLowerCase().startsWith(prefix.toLowerCase())) setValue(prefix)
    input.current?.focus()
  }, [hints]) // eslint-disable-line react-hooks/exhaustive-deps

  const shown = pending ? pending.value : value
  return (
    <form
      className="wa-spell"
      onSubmit={(event) => {
        event.preventDefault()
        if (!pending && value.trim()) onSubmit(value)
      }}
    >
      <div className="wa-slots" aria-hidden="true" onClick={() => input.current?.focus()}>
        {Array.from(target).map((character, index) => {
          const typed = shown[index]
          const ok = typed !== undefined && typed.toLowerCase() === character.toLowerCase()
          return (
            <span
              key={index}
              className={`wa-slot ${character === ' ' ? 'is-space' : ''} ${typed !== undefined ? (pending ? (ok ? 'is-ok' : 'is-bad') : 'is-filled') : ''} ${!pending && index === shown.length ? 'is-caret' : ''}`}
            >
              {pending && !pending.correct ? character : typed ?? ''}
            </span>
          )
        })}
      </div>
      <input
        ref={input}
        className="wa-spell-input"
        value={shown}
        onChange={(event) => !pending && setValue(event.target.value.slice(0, target.length + 6))}
        autoFocus
        autoCapitalize="off"
        autoCorrect="off"
        autoComplete="off"
        spellCheck={false}
        enterKeyHint="done"
        aria-label={`拼写，${target.length} 个字符`}
        readOnly={Boolean(pending)}
      />
      {!pending ? (
        <div className="wa-spell-actions">
          <button type="button" className="wa-btn wa-btn-ghost" onClick={onHint} disabled={hints >= target.length - 1}>
            <Icon name="sparkle" size={15} /> 提示字母
          </button>
          <button type="submit" className="wa-btn wa-btn-primary" disabled={!value.trim()}>
            确认 <kbd>Enter</kbd>
          </button>
        </div>
      ) : null}
    </form>
  )
}

function Feedback({ atlas, progress, entry, word, correct, onNext, onOpenWord }) {
  const button = useRef(null)
  useEffect(() => button.current?.focus({ preventScroll: true }), [])
  return (
    <div className={`wa-feedback ${correct ? 'is-right' : 'is-wrong'}`} role="status">
      <div className="wa-feedback-main">
        <WordImage id={word.id} word={word.word} className="wa-feedback-thumb" />
        <div className="wa-feedback-text">
          <p className="wa-feedback-verdict">{correct ? '答对了' : `没关系，记住它 · 正确答案是 ${entry.w}`}</p>
          <p className="wa-feedback-word">
            <b lang="en">{entry.w}</b>
            <span className="wa-ipa">{entry.uk || entry.us}</span>
          </p>
          <p className="wa-feedback-zh">{(entry.senses || []).slice(0, 2).map((sense) => `${sense.pos} ${sense.zh}`).join('　')}</p>
          {entry.ex?.[0] ? (
            <p className="wa-feedback-ex" lang="en">
              <LookupText atlas={atlas} progress={progress} text={entry.ex[0].en} headword={word.word} onOpenWord={onOpenWord} />
            </p>
          ) : null}
        </div>
        <button ref={button} type="button" className={`wa-btn wa-btn-lg ${correct ? 'wa-btn-primary' : 'wa-btn-ghost'}`} onClick={onNext}>
          继续 <Icon name="chevronRight" size={18} />
        </button>
      </div>
    </div>
  )
}

function Quiz({ atlas, progress, session, step, onOpenWord }) {
  const entry = useEntry(atlas, step.id)
  const word = atlas.byId.get(step.id)
  const settings = progress.settings
  const accent = settings.accent
  const pending = session.pending
  const elapsed = useStepTimer(`${step.id}-${step.kind}-${session.index}`)
  const [hints, setHints] = useState(0)
  const options = (step.options || []).map((id) => atlas.byId.get(id)).filter(Boolean)
  const sentence = entry?.ex?.[0] ? gap(entry.ex[0].en, entry.w) : null

  const submit = useCallback(
    (value, correct) => {
      if (pending) return
      const grade = gradeFor(step.kind, correct, elapsed(), hints > 0)
      update((state) => applyAnswer(state, atlas, step, correct, grade, value, settings))
      if (settings.autoplay && entry && hasMedia(entry, MEDIA[accent])) playAudio(`${accent}:${step.id}`, audioUrl(accent, step.id))
    },
    [pending, elapsed, hints, step, atlas, settings, entry, accent],
  )

  const next = useCallback(() => {
    stopAllAudio()
    update((state) => advance(state, elapsed() / 1000))
  }, [elapsed])

  useEffect(() => {
    if (step.kind !== 'listen' || pending || !entry) return
    if (hasMedia(entry, MEDIA[accent])) playAudio(`listen:${step.id}:${session.index}`, audioUrl(accent, step.id))
  }, [step.kind, step.id, pending, entry, accent, session.index])

  const keys = {}
  if (pending) {
    keys.Enter = next
    keys[' '] = next
  } else if (step.kind !== 'spell') {
    options.forEach((option, index) => {
      keys[String(index + 1)] = () => submit(option.id, option.id === word.id)
    })
  }
  useKeys(keys)

  if (!entry) {
    return (
      <div className="wa-learn-loading">
        <Spinner label="加载题目…" />
      </div>
    )
  }

  return (
    <div className={`wa-quiz wa-quiz-${step.kind} ${pending ? (pending.correct ? 'is-right' : 'is-wrong') : ''}`}>
      <p className="wa-learn-label">
        <span className={`wa-dot ${step.retry ? 'is-warn' : 'is-on'}`} />
        {step.retry ? '再见一面 · ' : ''}
        {KIND_LABEL[step.kind]}
      </p>

      {step.kind === 'meaning' ? (
        <div className="wa-quiz-meaning">
          <h2 className="wa-learn-word" lang="en">
            {entry.w}
          </h2>
          <div className="wa-pron-row">
            <span className="wa-ipa">{accent === 'us' ? entry.us || entry.uk : entry.uk || entry.us}</span>
            {hasMedia(entry, MEDIA[accent]) ? <AudioButton audioKey={`${accent}:${word.id}`} url={audioUrl(accent, word.id)} label="发音" /> : null}
          </div>
        </div>
      ) : null}

      {step.kind === 'picture' ? (
        <div className="wa-quiz-picture">
          <WordImage id={word.id} word={word.word} full className="wa-quiz-art" alt={`${word.word} 插画`} />
          <p className="wa-cloze" lang="en">
            {sentence ? (
              <>
                {sentence.before}
                <span className="wa-blank">{pending ? sentence.hidden : '　　　'}</span>
                {sentence.after}
              </>
            ) : (
              entry.senses[0]?.zh
            )}
          </p>
          {sentence && pending ? <p className="wa-cloze-zh">{entry.ex[0].zh}</p> : null}
        </div>
      ) : null}

      {step.kind === 'listen' ? (
        <div className="wa-quiz-listen">
          <button
            type="button"
            className="wa-listen-orb"
            onClick={() => hasMedia(entry, MEDIA[accent]) && playAudio(`listen:${step.id}:replay:${Date.now()}`, audioUrl(accent, word.id))}
            aria-label="再听一遍"
          >
            <Icon name="volume" size={44} />
          </button>
          <span className="wa-hint">再听一遍</span>
        </div>
      ) : null}

      {step.kind === 'spell' ? (
        <div className="wa-quiz-spell">
          <WordImage id={word.id} word={word.word} className="wa-spell-art" alt={`${word.word} 插画`} />
          <div>
            <p className="wa-spell-zh">
              {entry.senses[0]?.pos ? <span className="wa-pos">{entry.senses[0].pos}</span> : null} {entry.senses[0]?.zh}
            </p>
            {sentence ? (
              <p className="wa-cloze wa-cloze-sm" lang="en">
                {sentence.before}
                <span className="wa-blank">　　　</span>
                {sentence.after}
              </p>
            ) : null}
            {hasMedia(entry, MEDIA[accent]) ? <AudioButton audioKey={`${accent}:${word.id}`} url={audioUrl(accent, word.id)} label="听发音" /> : null}
          </div>
        </div>
      ) : null}

      {step.kind === 'spell' ? (
        <SpellInput
          entry={entry}
          pending={pending}
          hints={hints}
          onHint={() => setHints((value) => Math.min(entry.w.length - 1, value + 1))}
          onSubmit={(value) => submit(value, value.trim().toLowerCase() === entry.w.toLowerCase())}
        />
      ) : (
        <ul className={`wa-options ${step.kind === 'meaning' ? 'is-zh' : ''}`}>
          {options.map((option, index) => {
            const isAnswer = option.id === word.id
            const chosen = pending?.value === option.id
            const className = pending ? (isAnswer ? 'is-answer' : chosen ? 'is-chosen' : 'is-dim') : ''
            return (
              <li key={option.id}>
                <button
                  type="button"
                  className={`wa-option ${className}`}
                  data-option={option.id}
                  onClick={() => submit(option.id, isAnswer)}
                  disabled={Boolean(pending)}
                  aria-label={
                    pending
                      ? `${isAnswer ? '正确答案' : chosen ? '你的选择，错误' : '未选择'}：${step.kind === 'meaning' ? option.zh : option.word}`
                      : undefined
                  }
                >
                  <kbd>{index + 1}</kbd>
                  <span lang={step.kind === 'meaning' ? 'zh' : 'en'}>{step.kind === 'meaning' ? option.zh : option.word}</span>
                  {pending && isAnswer ? <Icon name="check" size={18} /> : null}
                  {pending && chosen && !isAnswer ? <Icon name="close" size={18} /> : null}
                </button>
              </li>
            )
          })}
        </ul>
      )}

      {pending ? <Feedback atlas={atlas} progress={progress} entry={entry} word={word} correct={pending.correct} onNext={next} onOpenWord={onOpenWord} /> : null}
    </div>
  )
}

function Summary({ atlas, progress, session, onExit, onRestart, onOpenWord }) {
  const stats = sessionStats(session)
  const words = [...new Set(session.steps.map((step) => step.id))].map((id) => atlas.byId.get(id)).filter(Boolean)
  const wrong = words.filter((word) => session.graded[word.id] === Rating.Again)
  const minutes = Math.max(1, Math.round(((session.finished || Date.now()) - session.started) / 60000))
  const done = () => {
    update((state) => ({ ...state, session: null }))
    onExit()
  }
  return (
    <div className="wa-learn-summary">
      <span className="wa-summary-orbit" aria-hidden="true">
        <Icon name="sparkle" size={30} />
      </span>
      <p className="wa-eyebrow">这一程结束了</p>
      <h1>{stats.accuracy >= 90 ? '漂亮的一程。' : stats.accuracy >= 60 ? '稳稳向前。' : '错过的，会再相遇。'}</h1>
      <div className="wa-summary-stats">
        <div className="wa-summary-stat is-hero">
          <strong>{stats.accuracy}%</strong>
          <span>首次正确率</span>
        </div>
        <div className="wa-summary-stat">
          <strong>{session.newIds.length}</strong>
          <span>新词</span>
        </div>
        <div className="wa-summary-stat">
          <strong>{session.reviewIds.length}</strong>
          <span>复习</span>
        </div>
        <div className="wa-summary-stat">
          <strong>{minutes}</strong>
          <span>分钟</span>
        </div>
      </div>
      <ul className="wa-summary-words">
        {words.map((word) => (
          <li
            key={word.id}
            className={session.graded[word.id] === Rating.Again ? 'is-wrong' : ''}
            role="button"
            tabIndex={0}
            title={`${word.word} ${word.zh}`}
            onClick={() => onOpenWord(word.id)}
            onKeyDown={(event) => event.key === 'Enter' && onOpenWord(word.id)}
          >
            <WordImage id={word.id} word={word.word} className="wa-summary-thumb" />
            <span lang="en">{word.word}</span>
            <small>{word.zh}</small>
          </li>
        ))}
      </ul>
      <p className="wa-summary-note">FSRS 已为每个词排好下次相遇的时间。答错的词，会更早回来。</p>
      <div className="wa-summary-actions">
        {wrong.length > 0 ? (
          <button type="button" className="wa-btn wa-btn-ghost" onClick={() => onRestart({ ids: wrong.map((word) => word.id) })}>
            <Icon name="refresh" size={16} /> 再练 {wrong.length} 个错词
          </button>
        ) : null}
        <button type="button" className="wa-btn wa-btn-primary wa-btn-lg" onClick={done} autoFocus>
          完成 <Icon name="check" size={17} />
        </button>
      </div>
      <p className="wa-hint">进度已自动保存</p>
    </div>
  )
}

export function Learn({ atlas, progress, onExit, onRestart, onOpenWord, label = '今日学习' }) {
  useEffect(() => () => stopAllAudio(), [])
  const session = progress.session
  if (!session) {
    return (
      <LearnShell bar={<LearnBar progress={0} value={0} total={1} count="" onExit={onExit} label={label} />} centered>
        <EmptyState icon="sparkle" title="今天没有待学的词">
          <p>可以先回顾图鉴，或者明天再来。</p>
          <button type="button" className="wa-btn wa-btn-primary" onClick={onExit}>
            返回今日
          </button>
        </EmptyState>
      </LearnShell>
    )
  }
  if (session.finished || session.index >= session.steps.length) {
    return (
      <LearnShell bar={<LearnBar progress={1} value={1} total={1} count="完成" onExit={onExit} label={label} />} centered>
        <Summary atlas={atlas} progress={progress} session={session} onExit={onExit} onRestart={onRestart} onOpenWord={onOpenWord} />
      </LearnShell>
    )
  }
  const step = session.steps[session.index]
  const total = session.steps.length
  return (
    <LearnShell
      key={`${session.id}-${session.index}`}
      bar={
        <LearnBar
          progress={session.index / total}
          value={session.index}
          total={total}
          count={`${session.index + 1} / ${total}`}
          onExit={onExit}
          label={label}
        />
      }
    >
      {step.kind === 'intro' ? (
        <Intro atlas={atlas} progress={progress} step={step} onOpenWord={onOpenWord} />
      ) : (
        <Quiz atlas={atlas} progress={progress} session={session} step={step} onOpenWord={onOpenWord} />
      )}
    </LearnShell>
  )
}

export const __learnTest = { useKeys }
