import React, { useCallback, useEffect, useMemo, useState } from 'react'
import {
  isRead,
  loadBookChapter,
  loadBooksIndex,
  loadReading,
  loadReadingIndex,
  readAsset,
  readingLevelLabel,
  readingTopicLabel,
  unlearnedCount,
} from './readings.js'
import { update } from './store.js'
import { BooksShelf } from './BookShelf.jsx'
import { LookupText } from './LookupText.jsx'
import { EmptyState, Icon, Spinner, playAudio, stopAllAudio } from './ui.jsx'

export function ReadingPage({ atlas, progress, initialId, onOpenWord, onReaderFocus }) {
  const [tab, setTab] = useState('short')
  const [readerFocus, setReaderFocus] = useState(false)
  const handleReaderFocus = useCallback(
    (value) => {
      setReaderFocus(value)
      onReaderFocus?.(value)
    },
    [onReaderFocus],
  )

  useEffect(() => () => onReaderFocus?.(false), [onReaderFocus])
  const [selectedId, setSelectedId] = useState(initialId || null)
  const [state, setState] = useState({ status: 'idle', data: null, error: '' })
  const [attempt, setAttempt] = useState(0)

  useEffect(() => {
    setTab('short')
    setSelectedId(initialId || null)
  }, [initialId])

  useEffect(() => {
    if (!selectedId) {
      setState({ status: 'idle', data: null, error: '' })
      return undefined
    }
    let alive = true
    setState({ status: 'loading', data: null, error: '' })
    loadReading(selectedId)
      .then((data) => alive && setState({ status: 'ready', data, error: '' }))
      .catch((error) => alive && setState({ status: 'error', data: null, error: error.message || '短文加载失败。' }))
    return () => {
      alive = false
    }
  }, [selectedId, attempt])

  const finishReading = (id) => {
    update((current) => ({
      ...current,
      readings: {
        ...current.readings,
        [id]: { done: true, last: Date.now(), times: (current.readings?.[id]?.times || 0) + 1 },
      },
    }))
    setSelectedId(null)
  }

  if (selectedId) {
    if (state.status === 'loading') {
      return (
        <div className="wa-read-page">
          <Spinner label="正在打开短文…" />
        </div>
      )
    }
    if (state.status !== 'ready' || !state.data) {
      return (
        <div className="wa-read-page">
          <button type="button" className="wa-btn wa-btn-ghost" onClick={() => setSelectedId(null)}>
            <Icon name="chevronLeft" size={16} /> 返回书房
          </button>
          <EmptyState icon="book" title="打开失败">
            <p>{state.error || '短文内容暂时不可用。'}</p>
            <button type="button" className="wa-btn wa-btn-primary" onClick={() => setAttempt((value) => value + 1)}>
              重试
            </button>
          </EmptyState>
        </div>
      )
    }
    return (
      <ShortReader
        atlas={atlas}
        item={state.data}
        progress={progress}
        onOpenWord={onOpenWord}
        onBack={() => setSelectedId(null)}
        onDone={() => finishReading(state.data.id)}
      />
    )
  }

  return (
    <div className={`wa-read-page ${readerFocus ? 'is-reader-focus' : ''}`}>
      <header className="wa-read-head">
        <p className="wa-eyebrow">书房 · Reading</p>
        <h1>在故事里，慢慢读。</h1>
        <p>双语对照，轻点生词查词。阅读不会改变 FSRS 复习进度。</p>
      </header>
      <div className="wa-read-tabs" role="tablist">
        <button type="button" role="tab" aria-selected={tab === 'short'} className={tab === 'short' ? 'is-on' : ''} onClick={() => setTab('short')}>
          短文
        </button>
        <button type="button" role="tab" aria-selected={tab === 'books'} className={tab === 'books' ? 'is-on' : ''} onClick={() => setTab('books')}>
          书架
        </button>
      </div>
      {tab === 'short' ? (
        <ShortLibrary atlas={atlas} progress={progress} onOpen={setSelectedId} />
      ) : (
        <BooksShelf atlas={atlas} progress={progress} onOpenWord={onOpenWord} onReaderFocus={handleReaderFocus} />
      )}
    </div>
  )
}

function ShortLibrary({ atlas, progress, onOpen }) {
  const [items, setItems] = useState(null)
  const [error, setError] = useState('')
  const [level, setLevel] = useState('all')
  const [limit, setLimit] = useState(24)

  useEffect(() => {
    let alive = true
    loadReadingIndex()
      .then((data) => alive && setItems(Array.isArray(data.items) ? data.items : []))
      .catch((reason) => alive && setError(reason.message || '短文列表加载失败。'))
    return () => {
      alive = false
    }
  }, [])

  const filtered = useMemo(() => {
    if (!items) return []
    return level === 'all' ? items : items.filter((item) => item.cefr === level)
  }, [items, level])

  if (error) {
    return (
      <EmptyState icon="book" title="书房暂时打不开">
        <p>{error}</p>
      </EmptyState>
    )
  }
  if (!items) {
    return <Spinner label="正在整理书架…" />
  }

  return (
    <section className="wa-short-library">
      <div className="wa-read-filters">
        <button type="button" className={level === 'all' ? 'is-on' : ''} onClick={() => { setLevel('all'); setLimit(24) }}>
          全部
        </button>
        {atlas.cefr.map((name, index) => (
          <button key={name} type="button" className={level === index ? 'is-on' : ''} onClick={() => { setLevel(index); setLimit(24) }}>
            {name}
          </button>
        ))}
      </div>
      <div className="wa-short-grid">
        {filtered.slice(0, limit).map((item) => {
          const read = isRead(progress, item.id)
          return (
            <button key={item.id} type="button" className={`wa-short-card ${read ? 'is-read' : ''}`} onClick={() => onOpen(item.id)}>
              <div className="wa-short-card-top">
                <span className="wa-short-level">{readingLevelLabel(item, atlas)}</span>
                <span className="wa-short-topic">{readingTopicLabel(item, atlas)}</span>
                {read ? <span className="wa-short-done"><Icon name="check" size={12} /> 已读</span> : null}
              </div>
              <b className="wa-short-zh">{item.titleZh}</b>
              <span className="wa-short-en" lang="en">{item.title}</span>
              <span className="wa-short-words">{unlearnedCount(item.ids, progress.cards)} 个未学重点词</span>
            </button>
          )
        })}
      </div>
      {filtered.length > limit ? (
        <button type="button" className="wa-btn wa-btn-ghost wa-read-more" onClick={() => setLimit((current) => current + 24)}>
          再看 24 篇
        </button>
      ) : null}
      {filtered.length === 0 ? <p className="wa-panel-note">这一级暂时没有短文，换个级别看看。</p> : null}
    </section>
  )
}

function ShortReader({ atlas, item, progress, onOpenWord, onBack, onDone }) {
  const [bilingual, setBilingual] = useState(true)
  const [answers, setAnswers] = useState({})
  const [checked, setChecked] = useState(false)
  const questions = item.q || []
  const correctCount = questions.reduce((sum, question, index) => sum + (answers[index] === question.a ? 1 : 0), 0)

  return (
    <div className="wa-reader">
      <header className="wa-reader-bar">
        <button type="button" className="wa-btn wa-btn-ghost" onClick={onBack}>
          <Icon name="chevronLeft" size={16} /> 书房
        </button>
        <span className="wa-reader-meta">
          {readingLevelLabel(item, atlas)} · {readingTopicLabel(item, atlas)} · {unlearnedCount(item.ids, progress.cards)} 个未学重点词
        </span>
        <button type="button" className={`wa-btn wa-btn-ghost ${bilingual ? 'is-on' : ''}`} onClick={() => setBilingual((value) => !value)}>
          <Icon name="languages" size={15} /> {bilingual ? '双语' : '英文'}
        </button>
      </header>

      <article className="wa-reader-body">
        <h1>{item.titleZh}</h1>
        <p className="wa-reader-subtitle" lang="en">{item.title}</p>
        {item.paras.map((paragraph, index) => (
          <section key={index} className="wa-reader-para">
            <p lang="en">
              <LookupText
                atlas={atlas}
                progress={progress}
                text={paragraph.replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, '$2')}
                onOpenWord={onOpenWord}
              />
            </p>
            {bilingual ? <p className="wa-reader-zh" lang="zh">{item.zh?.[index]}</p> : null}
          </section>
        ))}

        {questions.length ? (
          <section className="wa-reader-quiz">
            <h2>理解一下</h2>
            {questions.map((question, index) => (
              <div key={index} className="wa-reader-question">
                <p lang="en">{question.s}</p>
                <div className="wa-reader-q-options">
                  {[['T', 'True'], ['F', 'False'], ['NG', 'Not Given']].map(([value, label]) => (
                    <button
                      key={value}
                      type="button"
                      className={`${answers[index] === value ? 'is-chosen' : ''} ${checked && question.a === value ? 'is-answer' : ''}`}
                      onClick={() => !checked && setAnswers((current) => ({ ...current, [index]: value }))}
                    >
                      {label}
                    </button>
                  ))}
                </div>
                {checked ? (
                  <p className={`wa-reader-why ${answers[index] === question.a ? 'is-ok' : 'is-bad'}`}>
                    {answers[index] === question.a ? '答对了。' : `正确答案：${question.a === 'T' ? 'True' : question.a === 'F' ? 'False' : 'Not Given'}。`} {question.why}
                  </p>
                ) : null}
              </div>
            ))}
            {!checked ? (
              <button type="button" className="wa-btn wa-btn-ghost" onClick={() => setChecked(true)} disabled={Object.keys(answers).length < questions.length}>
                检查答案
              </button>
            ) : (
              <p className="wa-panel-note">答对 {correctCount} / {questions.length} 题</p>
            )}
          </section>
        ) : null}

        <div className="wa-reader-actions">
          <button type="button" className="wa-btn wa-btn-primary wa-btn-lg" onClick={onDone}>
            完成阅读 <Icon name="check" size={17} />
          </button>
          <span className="wa-panel-note">完成后会记录在书房，不影响 FSRS 复习进度。</span>
        </div>
      </article>
    </div>
  )
}

