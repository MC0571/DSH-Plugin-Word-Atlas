import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { audioUrl, hasMedia, loadEntry, MEDIA, readAssetUrl } from './data.js'
import { loadBookChapter } from './readings.js'
import { update } from './store.js'
import {
  buildSentenceQueue,
  chapterKey,
  chapterWordIds,
  loadReaderPrefs,
  normalizeReaderPrefs,
  positionKey,
  queueIndexAtTime,
  romanNumeral,
  saveReaderPrefs,
  sentenceDomId,
  splitSentenceParts,
} from './bookReader.js'
import { EmptyState, Icon, Spinner, playAudio, stopAllAudio } from './ui.jsx'

const SPEEDS = [0.8, 1, 1.2]
const MODE_LABELS = [['en', '英文'], ['bi', '中英对照'], ['zh', '中文']]
const LEADING = [1.5, 1.68, 1.9]

function WordButton({ word, onWord }) {
  return (
    <button
      type="button"
      className={`wa-book-word ${word.freq >= 2 ? 'is-marked' : ''}`}
      onClick={(event) => {
        event.stopPropagation()
        onWord(word.id, event)
      }}
      aria-label={`查看 ${word.text} 的释义`}
    >
      {word.text}
    </button>
  )
}

function Sentence({ paragraph, index, text, lang, activeId, audioLang, onWord, onPlay }) {
  const ranges = (lang === 'en' ? paragraph.sents : paragraph.zhSents) || []
  const sentence = ranges[index]
  if (!sentence) return null
  const parts = lang === 'en' ? splitSentenceParts(text, sentence, paragraph.words || []) : [{ text: text.slice(sentence.a, sentence.b) }]
  const domId = sentenceDomId(paragraph.id, lang, index)
  const playable = audioLang === lang
  return (
    <span
      className={`wa-book-sent ${activeId === domId ? 'is-speaking' : ''} ${playable ? 'is-playable' : ''}`}
      data-sentence={domId}
      onClick={playable ? () => onPlay(paragraph.id, index, lang) : undefined}
    >
      {parts.map((part, partIndex) =>
        part.id ? <WordButton key={partIndex} word={part} onWord={onWord} /> : <React.Fragment key={partIndex}>{part.text}</React.Fragment>,
      )}
    </span>
  )
}

function Paragraph({ paragraph, mode, activeId, audioLang, onWord, onPlay }) {
  const enSents = paragraph.sents || []
  const zhSents = paragraph.zhSents || []
  return (
    <section className={`wa-book-para wa-book-kind-${paragraph.kind || 'p'}`} data-paragraph={paragraph.id}>
      {mode !== 'zh' ? (
        <p className="wa-book-para-en" lang="en">
          {enSents.length
            ? enSents.map((_, index) => (
                <React.Fragment key={index}>
                  <Sentence
                    paragraph={paragraph}
                    index={index}
                    text={paragraph.en}
                    lang="en"
                    activeId={activeId}
                    audioLang={audioLang}
                    onWord={onWord}
                    onPlay={onPlay}
                  />
                  {index < enSents.length - 1 ? ' ' : null}
                </React.Fragment>
              ))
            : paragraph.en}
        </p>
      ) : null}
      {mode !== 'en' && paragraph.zh ? (
        <p className="wa-book-para-zh" lang="zh">
          {zhSents.length
            ? zhSents.map((_, index) => (
                <React.Fragment key={index}>
                  <Sentence
                    paragraph={paragraph}
                    index={index}
                    text={paragraph.zh}
                    lang="zh"
                    activeId={activeId}
                    audioLang={audioLang}
                    onWord={onWord}
                    onPlay={onPlay}
                  />
                </React.Fragment>
              ))
            : paragraph.zh}
        </p>
      ) : null}
    </section>
  )
}

function WordPopover({ atlas, id, x, y, accent, onClose, onOpenWord }) {
  const [state, setState] = useState({ status: 'loading', entry: null, error: '' })
  useEffect(() => {
    let alive = true
    loadEntry(atlas, id)
      .then((entry) => alive && setState({ status: 'ready', entry, error: '' }))
      .catch((error) => alive && setState({ status: 'error', entry: null, error: error.message || '查不到这个词。' }))
    return () => {
      alive = false
    }
  }, [atlas, id])
  useEffect(() => () => stopAllAudio(), [])
  const entry = state.entry
  return (
    <div className="wa-book-pop-backdrop" onMouseDown={onClose}>
      <div
        className="wa-book-word-pop"
        role="dialog"
        aria-label="词义"
        style={{ left: Math.max(12, x), top: Math.max(12, y) }}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button type="button" className="wa-book-pop-close" onClick={onClose} aria-label="关闭">
          <Icon name="close" size={16} />
        </button>
        {state.status === 'loading' ? <Spinner label="正在查词…" /> : null}
        {state.status === 'error' ? <p className="wa-panel-note">{state.error}</p> : null}
        {entry ? (
          <>
            <h2 lang="en">{entry.w}</h2>
            <div className="wa-book-pop-pron">
              <span>{entry.uk || entry.us || ''}</span>
              {hasMedia(entry, MEDIA.uk) ? (
                <button type="button" onClick={() => playAudio(`book:uk:${entry.id}`, audioUrl('uk', entry.id))} aria-label="英式发音">
                  <Icon name="volume" size={15} /> 英
                </button>
              ) : null}
              {hasMedia(entry, MEDIA.us) ? (
                <button type="button" onClick={() => playAudio(`book:us:${entry.id}`, audioUrl('us', entry.id))} aria-label="美式发音">
                  <Icon name="volume" size={15} /> 美
                </button>
              ) : null}
            </div>
            <div className="wa-book-pop-senses">
              {(entry.senses || []).slice(0, 2).map((sense, index) => (
                <p key={index}>
                  {sense.pos ? <span className="wa-pos">{sense.pos}</span> : null}
                  {sense.zh}
                </p>
              ))}
            </div>
            <div className="wa-book-pop-actions">
              <button type="button" className="wa-btn wa-btn-primary" onClick={() => { onClose(); onOpenWord(id) }}>
                查看词卡 <Icon name="chevronRight" size={15} />
              </button>
            </div>
          </>
        ) : null}
      </div>
    </div>
  )
}

export function BookReader({ atlas, progress, book, meta, restorePid, onBack, onOpenChapter, onOpenWord, onReaderFocus }) {
  const [chapterState, setChapterState] = useState({ status: 'loading', data: null, error: '' })
  const [prefs, setPrefs] = useState(loadReaderPrefs)
  const prefsRef = useRef(prefs)
  prefsRef.current = prefs
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [word, setWord] = useState(null)
  const [listening, setListening] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [loadingAudio, setLoadingAudio] = useState(false)
  const [active, setActive] = useState(-1)
  const [follow, setFollow] = useState(true)
  const [notice, setNotice] = useState('')
  const [plateLoaded, setPlateLoaded] = useState(false)
  const audioRef = useRef(null)
  const scrollRef = useRef(null)
  const activeRef = useRef(-1)
  const savedRef = useRef({ at: 0, pid: '', pct: 0 })

  const chapter = chapterState.status === 'ready' ? chapterState.data : null
  const queue = useMemo(() => (chapter ? buildSentenceQueue(chapter, prefs.language) : []), [chapter, prefs.language])
  const activeItem = active >= 0 ? queue[active] : null
  const activeSentenceId = activeItem?.domId || ''
  const wordIds = useMemo(() => (chapter ? chapterWordIds(chapter) : []), [chapter])
  const wordChips = useMemo(
    () => wordIds.slice(0, 30).map((id) => atlas.byId.get(id)).filter(Boolean),
    [wordIds, atlas],
  )
  const nextChapter = book.chapters.find((item) => item.n === meta.n + 1 && item.ready)
  const zhAudio = useMemo(() => (chapter?.paras || []).some((paragraph) => paragraph.audioZh), [chapter])
  const isDone = Boolean(progress.readings?.[chapterKey(book.id, meta.n)]?.done)

  useEffect(() => {
    saveReaderPrefs(prefs)
  }, [prefs])

  useEffect(() => {
    if (audioRef.current) audioRef.current.playbackRate = prefs.speed
  }, [prefs.speed])

  useEffect(() => {
    onReaderFocus?.(true)
    return () => onReaderFocus?.(false)
  }, [onReaderFocus])

  useEffect(() => {
    let alive = true
    setChapterState({ status: 'loading', data: null, error: '' })
    loadBookChapter(book.id, meta.n)
      .then((data) => alive && setChapterState({ status: 'ready', data, error: '' }))
      .catch((error) => alive && setChapterState({ status: 'error', data: null, error: error.message || '章节加载失败。' }))
    return () => {
      alive = false
    }
  }, [book.id, meta.n])

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      audio.pause()
      audio.removeAttribute('src')
      delete audio.dataset.src
      audio.load()
    }
    activeRef.current = -1
    setActive(-1)
    setPlaying(false)
    setNotice('')
  }, [book.id, meta.n, prefs.language])

  useEffect(
    () => () => {
      audioRef.current?.pause()
      stopAllAudio()
    },
    [],
  )

  useEffect(() => {
    if (chapterState.status !== 'ready') return undefined
    const saved = progress.readings?.[positionKey(book.id)]
    const pid = restorePid || (saved?.chapter === meta.n ? saved.pid : null)
    if (!pid) return undefined
    const timer = window.setTimeout(() => {
      const root = scrollRef.current
      const element = root?.querySelector(`[data-paragraph="${pid}"]`)
      if (root && element) {
        const top = element.getBoundingClientRect().top - root.getBoundingClientRect().top + root.scrollTop
        root.scrollTop = Math.max(0, top - 80)
      }
    }, 120)
    return () => window.clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chapterState.status])

  const savePosition = useCallback(
    (force = false) => {
      const root = scrollRef.current
      if (!root) return
      const paragraphs = [...root.querySelectorAll('[data-paragraph]')]
      if (!paragraphs.length) return
      const scrollTop = root.scrollTop
      const rootTop = root.getBoundingClientRect().top
      let current = paragraphs[0]
      for (const element of paragraphs) {
        const top = element.getBoundingClientRect().top - rootTop + scrollTop
        if (top - 110 <= scrollTop) current = element
        else break
      }
      const pid = current.getAttribute('data-paragraph') || ''
      const pct = Math.max(0, Math.min(1, scrollTop / Math.max(1, root.scrollHeight - root.clientHeight)))
      const now = Date.now()
      const last = savedRef.current
      if (!force && now - last.at < 1200) return
      if (!force && last.pid === pid && Math.abs(last.pct - pct) < 0.015) return
      savedRef.current = { at: now, pid, pct }
      update((state) => ({
        ...state,
        readings: {
          ...state.readings,
          [positionKey(book.id)]: { chapter: meta.n, pid, pct, last: now },
        },
      }))
    },
    [book.id, meta.n],
  )

  const finishChapter = () => {
    savePosition(true)
    update((state) => ({
      ...state,
      readings: {
        ...state.readings,
        [chapterKey(book.id, meta.n)]: {
          done: true,
          last: Date.now(),
          times: (state.readings?.[chapterKey(book.id, meta.n)]?.times || 0) + 1,
        },
        [positionKey(book.id)]: { chapter: meta.n, pid: savedRef.current.pid, pct: 1, last: Date.now() },
      },
    }))
    onBack()
  }

  const closeReader = () => {
    savePosition(true)
    audioRef.current?.pause()
    onBack()
  }

  const playAt = useCallback(
    (index) => {
      const item = queue[index]
      if (!item) {
        setNotice('本章暂无朗读音频，先读文字吧。')
        return
      }
      const audio = audioRef.current
      if (!audio) return
      if (activeRef.current !== index) {
        activeRef.current = index
        setActive(index)
      }
      setSettingsOpen(false)
      setWord(null)
      setNotice('')
      const src = readAssetUrl(item.audio)
      const begin = () => {
        setLoadingAudio(false)
        try {
          audio.currentTime = item.t0
        } catch {
          /* seeking can fail before metadata */
        }
        audio.playbackRate = prefsRef.current.speed
        audio.play().catch(() => {
          setPlaying(false)
          setNotice('朗读暂时无法播放，请检查网络。')
        })
      }
      if (audio.dataset.src !== src) {
        audio.dataset.src = src
        audio.src = src
        setLoadingAudio(true)
        audio.addEventListener('canplay', begin, { once: true })
        audio.load()
      } else if (audio.readyState >= 2) {
        begin()
      } else {
        setLoadingAudio(true)
        audio.addEventListener('canplay', begin, { once: true })
      }
    },
    [queue],
  )

  const togglePlay = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    if (!audio.paused) {
      audio.pause()
      return
    }
    if (activeRef.current < 0) {
      playAt(0)
      return
    }
    audio.play().catch(() => setNotice('朗读暂时无法播放，请检查网络。'))
  }, [playAt])

  const stepSentence = useCallback(
    (delta) => {
      if (!queue.length) return
      const base = activeRef.current < 0 ? 0 : activeRef.current
      const next = Math.max(0, Math.min(queue.length - 1, base + (activeRef.current < 0 ? 0 : delta)))
      playAt(next)
    },
    [queue, playAt],
  )

  useEffect(() => {
    if (active < 0 || !follow || !activeItem) return
    const root = scrollRef.current
    const element = root?.querySelector(`[data-sentence="${activeItem.domId}"]`)
    if (!root || !element) return
    const reduce = typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches
    const top = element.getBoundingClientRect().top - root.getBoundingClientRect().top + root.scrollTop
    root.scrollTo({
      top: Math.max(0, top - root.clientHeight * 0.38),
      behavior: reduce ? 'auto' : 'smooth',
    })
  }, [active, activeItem?.domId, follow])

  useEffect(() => {
    const handler = (event) => {
      const tag = event.target?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || event.target?.isContentEditable) return
      if (event.key === ' ') {
        event.preventDefault()
        togglePlay()
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault()
        stepSentence(-1)
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        stepSentence(1)
      } else if (event.key === 'Escape') {
        if (listening) setListening(false)
        else if (settingsOpen) setSettingsOpen(false)
        else if (word) setWord(null)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [listening, settingsOpen, word, togglePlay, stepSentence])

  const updatePrefs = (patch) => setPrefs((current) => normalizeReaderPrefs({ ...current, ...patch }))

  const openWord = (id, event) => {
    if (audioRef.current && !audioRef.current.paused) audioRef.current.pause()
    const rect = event?.currentTarget?.getBoundingClientRect?.()
    setWord({
      id,
      x: rect ? Math.min(rect.left, (window.innerWidth || 0) - 340) : 40,
      y: rect ? Math.min(rect.bottom + 8, (window.innerHeight || 0) - 300) : 80,
    })
  }

  const playSentence = (pid, index, lang) => {
    if (lang !== prefs.language) return
    const target = queue.findIndex((item) => item.pid === pid && item.sentenceIndex === index)
    if (target >= 0) playAt(target)
  }

  const onTimeUpdate = (event) => {
    if (!queue.length) return
    const base = activeRef.current < 0 ? 0 : activeRef.current
    const index = queueIndexAtTime(queue, base, event.currentTarget.currentTime)
    if (index >= 0 && index !== activeRef.current) {
      activeRef.current = index
      setActive(index)
    }
  }

  const onEnded = () => {
    const current = activeRef.current
    if (current < 0) {
      setPlaying(false)
      return
    }
    let next = current + 1
    while (next < queue.length && queue[next].audio === queue[current].audio) next += 1
    if (next < queue.length) playAt(next)
    else {
      setPlaying(false)
      setNotice('本章朗读结束。')
    }
  }

  const cycleSpeed = () => {
    const index = SPEEDS.indexOf(prefs.speed)
    updatePrefs({ speed: SPEEDS[(index + 1) % SPEEDS.length] })
  }

  if (chapterState.status === 'loading') {
    return (
      <div className="wa-book-reader wa-book-reader-loading">
        <header className="wa-book-bar">
          <button type="button" className="wa-btn wa-btn-ghost" onClick={closeReader}>
            <Icon name="chevronLeft" size={16} /> 书架
          </button>
        </header>
        <Spinner label="正在打开书页…" />
      </div>
    )
  }
  if (chapterState.status !== 'ready' || !chapterState.data) {
    return (
      <div className="wa-book-reader">
        <header className="wa-book-bar">
          <button type="button" className="wa-btn wa-btn-ghost" onClick={closeReader}>
            <Icon name="chevronLeft" size={16} /> 书架
          </button>
        </header>
        <EmptyState icon="book" title="这一章暂时打不开">
          <p>{chapterState.error || '章节内容加载失败。'}</p>
        </EmptyState>
      </div>
    )
  }

  const style = {
    '--wa-book-size': `${17 + prefs.size * 2}px`,
    '--wa-book-leading': LEADING[prefs.leading],
  }
  const total = queue.length

  return (
    <div className="wa-book-reader" data-mode={prefs.mode} style={style}>
      <header className="wa-book-bar">
        <button type="button" className="wa-book-back" onClick={closeReader}>
          <Icon name="chevronLeft" size={17} /> 书架
        </button>
        <div className="wa-book-bar-title">
          <span>{book.titleZh}</span>
          <strong>{meta.labelZh}</strong>
        </div>
        <div className="wa-book-tools">
          <button
            type="button"
            className="wa-icon-btn"
            aria-label="阅读设置"
            aria-expanded={settingsOpen}
            onClick={() => setSettingsOpen((value) => !value)}
          >
            <Icon name="settings" size={19} />
          </button>
        </div>
      </header>

      {settingsOpen ? (
        <>
          <div className="wa-book-backdrop" onMouseDown={() => setSettingsOpen(false)} />
          <div className="wa-book-settings" role="dialog" aria-label="阅读设置">
            <h2>阅读设置</h2>
            <div className="wa-book-setting">
              <span>阅读方式</span>
              <div className="wa-book-seg">
                {MODE_LABELS.map(([value, label]) => (
                  <button key={value} type="button" aria-pressed={prefs.mode === value} onClick={() => updatePrefs({ mode: value })}>
                    {label}
                  </button>
                ))}
              </div>
            </div>
            <div className="wa-book-setting">
              <span>文字大小</span>
              <div className="wa-book-seg">
                {[0, 1, 2, 3, 4].map((value) => (
                  <button key={value} type="button" aria-label={`字号 ${value + 1}`} aria-pressed={prefs.size === value} onClick={() => updatePrefs({ size: value })}>
                    <span style={{ fontSize: 13 + value * 2 }}>字</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="wa-book-setting">
              <span>行距</span>
              <div className="wa-book-seg">
                {[0, 1, 2].map((value) => (
                  <button key={value} type="button" aria-pressed={prefs.leading === value} onClick={() => updatePrefs({ leading: value })}>
                    {value === 0 ? '紧' : value === 1 ? '中' : '松'}
                  </button>
                ))}
              </div>
            </div>
            <div className="wa-book-setting">
              <span>朗读语言</span>
              <div className="wa-book-seg">
                <button type="button" aria-pressed={prefs.language === 'en'} onClick={() => updatePrefs({ language: 'en' })}>英文</button>
                <button type="button" aria-pressed={prefs.language === 'zh'} disabled={!zhAudio} onClick={() => updatePrefs({ language: 'zh' })}>中文</button>
              </div>
            </div>
            <p className="wa-book-settings-hint">阅读模式与字号会记住；空格播放/暂停，左右方向键切换句子。</p>
          </div>
        </>
      ) : null}

      <div className="wa-book-scroll" ref={scrollRef} onScroll={() => savePosition(false)}>
        <article className="wa-book-page">
          <header className="wa-book-chapter-head">
            <div className={`wa-book-plate ${plateLoaded ? 'is-loaded' : ''}`}>
              {meta.plate ? (
                <img
                  src={readAssetUrl(meta.plate)}
                  alt="章节题图"
                  loading="lazy"
                  onLoad={() => setPlateLoaded(true)}
                  onError={() => setPlateLoaded(false)}
                />
              ) : null}
              {!meta.plate || !plateLoaded ? <div className="wa-book-plate-empty" aria-hidden="true" /> : null}
            </div>
            <p className="wa-book-kicker">{book.titleZh} · {meta.labelZh}</p>
            <p className="wa-book-roman" aria-hidden="true">{romanNumeral(meta.n)}</p>
            <h1>{meta.titleZh || meta.labelZh}</h1>
            <p className="wa-book-caption">约 {meta.minutes} 分钟 · {meta.words} 词</p>
            {total ? (
              <button
                type="button"
                className="wa-book-listen-link"
                onClick={() => {
                  setListening(true)
                  if (!playing) playAt(active >= 0 ? active : 0)
                }}
              >
                <Icon name="headphones" size={15} /> 听这一章
              </button>
            ) : (
              <p className="wa-book-no-audio">本章暂无朗读音频，先读文字吧。</p>
            )}
          </header>

          <div className="wa-book-text" id="wa-book-text" tabIndex={-1}>
            {(chapter.paras || []).map((paragraph, index) => (
              <Paragraph
                key={paragraph.id}
                paragraph={paragraph}
                mode={prefs.mode}
                activeId={activeSentenceId}
                audioLang={prefs.language}
                onWord={openWord}
                onPlay={playSentence}
              />
            ))}
          </div>

          <footer className="wa-book-end">
            <span className={`wa-book-end-mark ${isDone ? 'is-lit' : ''}`} aria-hidden="true" />
            <p className="wa-book-end-caption">{isDone ? '这一章，已经读完了。' : '读到这里，收下本章的词吧。'}</p>
            {wordChips.length ? (
              <section className="wa-book-end-words">
                <h2>本章出现的雅思词</h2>
                <div>
                  {wordChips.map((word) => (
                    <button key={word.id} type="button" onClick={() => onOpenWord(word.id)}>
                      <span lang="en">{word.word}</span>
                      <small>{word.zh}</small>
                    </button>
                  ))}
                </div>
              </section>
            ) : null}
            <div className="wa-book-end-actions">
              <button type="button" className="wa-btn wa-btn-primary wa-btn-lg" onClick={finishChapter}>
                读完本章 <Icon name="check" size={17} />
              </button>
              {nextChapter ? (
                <button type="button" className="wa-btn wa-btn-ghost" onClick={() => onOpenChapter(nextChapter)}>
                  下一章 · {nextChapter.labelZh} <Icon name="chevronRight" size={16} />
                </button>
              ) : null}
            </div>
            {notice ? <p className="wa-book-notice" role="status">{notice}</p> : null}
          </footer>
        </article>
      </div>

      {total ? (
        <div className="wa-book-player" role="region" aria-label="章节朗读">
          <div className="wa-book-progress" role="progressbar" aria-valuemin={0} aria-valuemax={total} aria-valuenow={active + 1}>
            <i style={{ transform: `scaleX(${(active + 1) / Math.max(1, total)})` }} />
          </div>
          <div className="wa-book-player-inner">
            <button type="button" className="wa-icon-btn" onClick={() => stepSentence(-1)} disabled={active <= 0} aria-label="上一句">
              <Icon name="chevronLeft" size={21} />
            </button>
            <button
              type="button"
              className="wa-book-play"
              onClick={togglePlay}
              aria-label={playing || loadingAudio ? '暂停朗读' : '播放朗读'}
            >
              <Icon name={playing || loadingAudio ? 'pause' : 'play'} size={23} />
            </button>
            <button type="button" className="wa-icon-btn" onClick={() => stepSentence(1)} disabled={active >= total - 1} aria-label="下一句">
              <Icon name="chevronRight" size={21} />
            </button>
            <div className="wa-book-player-count">
              <span>{active + 1} / {total}</span>
              <small>{loadingAudio ? '正在准备声音' : playing ? `${prefs.language === 'zh' ? '中文' : '英文'}朗读` : '从本句继续'}</small>
            </div>
            <button type="button" className={`wa-book-follow ${follow ? 'is-on' : ''}`} onClick={() => setFollow((value) => !value)}>
              {follow ? '跟随' : '已暂停滚动'}
            </button>
            <button type="button" className="wa-book-speed" onClick={cycleSpeed} aria-label={`朗读速度 ${prefs.speed} 倍`}>{prefs.speed}×</button>
            <button type="button" className="wa-book-listen-btn" onClick={() => { setListening(true); if (!playing) playAt(active >= 0 ? active : 0) }}>
              聆听
            </button>
          </div>
          <audio
            ref={audioRef}
            preload="metadata"
            onPlaying={() => { setPlaying(true); setLoadingAudio(false) }}
            onPause={() => setPlaying(false)}
            onTimeUpdate={onTimeUpdate}
            onEnded={onEnded}
            onError={() => { setLoadingAudio(false); setNotice('朗读文件暂时不可用，可以先读文字。') }}
          />
        </div>
      ) : null}

      {word ? (
        <WordPopover
          atlas={atlas}
          id={word.id}
          x={word.x}
          y={word.y}
          accent={progress.settings.accent}
          onClose={() => setWord(null)}
          onOpenWord={onOpenWord}
        />
      ) : null}

      {listening ? (
        <div className="wa-book-listen" role="dialog" aria-modal="true" aria-label="聆听模式">
          {meta.plate ? <div className="wa-book-listen-bg" style={{ backgroundImage: `url(${readAssetUrl(meta.plate)})` }} aria-hidden="true" /> : null}
          <div className="wa-book-listen-veil" aria-hidden="true" />
          <header className="wa-book-listen-top">
            <p>{book.titleZh} · {meta.labelZh}{meta.titleZh ? ` · ${meta.titleZh}` : ''}</p>
            <div>
              <button type="button" className="wa-icon-btn" onClick={() => setListening(false)} aria-label="关闭聆听模式">
                <Icon name="close" size={18} />
              </button>
            </div>
          </header>
          <div className="wa-book-listen-body">
            <p className="wa-book-listen-text" lang={prefs.language === 'zh' ? 'zh' : 'en'}>
              {activeItem?.text || chapter.paras?.[0]?.en || ''}
            </p>
            {activeItem?.translation ? <p className="wa-book-listen-zh">{activeItem.translation}</p> : null}
          </div>
          <footer className="wa-book-listen-controls">
            <button type="button" className="wa-icon-btn" onClick={() => stepSentence(-1)} disabled={active <= 0} aria-label="上一句">
              <Icon name="chevronLeft" size={22} />
            </button>
            <button type="button" className="wa-book-listen-play" onClick={togglePlay} aria-label={playing ? '暂停朗读' : '播放朗读'}>
              <Icon name={playing || loadingAudio ? 'pause' : 'play'} size={26} />
            </button>
            <button type="button" className="wa-icon-btn" onClick={() => stepSentence(1)} disabled={active >= total - 1} aria-label="下一句">
              <Icon name="chevronRight" size={22} />
            </button>
            <span className="wa-book-listen-count">{active + 1} / {total}</span>
            <button type="button" className="wa-book-speed" onClick={cycleSpeed}>{prefs.speed}×</button>
          </footer>
        </div>
      ) : null}
    </div>
  )
}
