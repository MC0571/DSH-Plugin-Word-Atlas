import React, { useEffect, useMemo, useState } from 'react'
import { loadAtlas } from './data.js'
import { bumpDay, hydrate, streak, toggleBookmark as toggleBookmarkState, update, useProgress } from './store.js'
import { Rating, review } from './fsrs.js'
import { DetailModal } from './Detail.jsx'
import { WordGrid } from './Browse.jsx'
import { ReviewView } from './Review.jsx'
import { Icon, Overlay, Spinner, EmptyState } from './ui.jsx'

const RATING_GOOD = Rating.Good

function AboutModal({ progress, onClose }) {
  const setAccent = (accent) => update((state) => ({ ...state, settings: { ...state.settings, accent } }))
  return (
    <Overlay onClose={onClose} labelledBy="wa-about-title">
      <div className="wa-about">
        <button type="button" className="wa-icon-btn wa-about-close" onClick={onClose} aria-label="关闭">
          <Icon name="close" size={18} />
        </button>
        <h2 id="wa-about-title">词光 · Word Atlas</h2>
        <p>
          把开源项目 <strong>词光 · Word Atlas</strong> 做成 DeepSeek Harness 插件：
          7,298 个雅思词条、19 个话题，每词一幅插画、英美发音与例句朗读，配 FSRS 间隔复习。
        </p>
        <div className="wa-about-section">
          <h3 className="wa-eyebrow">发音偏好</h3>
          <div className="wa-segmented">
            <button type="button" className={progress.settings.accent === 'uk' ? 'is-on' : ''} onClick={() => setAccent('uk')}>
              英音
            </button>
            <button type="button" className={progress.settings.accent === 'us' ? 'is-on' : ''} onClick={() => setAccent('us')}>
              美音
            </button>
          </div>
          <p className="wa-about-note">词条详情里两个发音始终都可以播放，这里只是偏好标记。</p>
        </div>
        <div className="wa-about-section">
          <h3 className="wa-eyebrow">数据与授权</h3>
          <p className="wa-about-note">
            词库文本、插画与录音来自{' '}
            <a href="https://github.com/designfuchen/word-atlas" target="_blank" rel="noreferrer">
              designfuchen/word-atlas
            </a>
            ，由 Word Atlas contributors（词光）创作，以{' '}
            <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noreferrer">
              CC BY 4.0
            </a>{' '}
            授权；插件代码 MIT。内容由生成式 AI 辅助制作，未逐条人工审校。
          </p>
        </div>
        <div className="wa-about-section">
          <h3 className="wa-eyebrow">复习进度</h3>
          <p className="wa-about-note">
            保存在本机 <code>$DSH_HOME/word-atlas-dsh/progress.json</code>，同时镜像到浏览器 localStorage。
            复习调度使用 ts-fsrs 的 FSRS 算法。
          </p>
        </div>
      </div>
    </Overlay>
  )
}

function BrandMark() {
  return (
    <svg viewBox="0 0 64 64" width="34" height="34" aria-hidden="true">
      <defs>
        <linearGradient id="wa-brand-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFE9A8" />
          <stop offset="0.55" stopColor="#F5C052" />
          <stop offset="1" stopColor="#D98E2B" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="15" fill="var(--dsw-alias-bg-layer-2)" />
      <circle cx="14" cy="18" r="1.4" fill="var(--dsw-alias-label-secondary)" opacity="0.6" />
      <circle cx="50" cy="16" r="1.7" fill="var(--dsw-alias-label-secondary)" opacity="0.6" />
      <circle cx="50" cy="48" r="1.3" fill="var(--dsw-alias-label-secondary)" opacity="0.5" />
      <circle cx="14" cy="46" r="1.5" fill="var(--dsw-alias-label-secondary)" opacity="0.5" />
      <path d="M32 15 L36.6 27.4 L49 32 L36.6 36.6 L32 49 L27.4 36.6 L15 32 L27.4 27.4 Z" fill="url(#wa-brand-gold)" />
      <circle cx="32" cy="32" r="3.4" fill="#FFF6D8" />
    </svg>
  )
}

export function App() {
  const [atlas, setAtlas] = useState(null)
  const [error, setError] = useState('')
  const [view, setView] = useState('atlas')
  const [search, setSearch] = useState('')
  const [cefr, setCefr] = useState('all')
  const [topic, setTopic] = useState('all')
  const [detailId, setDetailId] = useState(null)
  const [aboutOpen, setAboutOpen] = useState(false)
  const progress = useProgress()

  useEffect(() => {
    hydrate()
    let alive = true
    loadAtlas()
      .then((value) => {
        if (alive) setAtlas(value)
      })
      .catch((err) => {
        if (alive) setError(err.message || '词库加载失败')
      })
    return () => {
      alive = false
    }
  }, [])

  const filtered = useMemo(() => {
    if (!atlas) return []
    const query = search.trim().toLowerCase()
    return atlas.words.filter((word) => {
      if (cefr !== 'all' && word.cefr !== cefr) return false
      if (topic !== 'all' && word.topic !== topic) return false
      if (!query) return true
      return (
        word.word.toLowerCase().includes(query) ||
        word.zh.toLowerCase().includes(query) ||
        word.ipa.toLowerCase().includes(query)
      )
    })
  }, [atlas, search, cefr, topic])

  const bookmarks = useMemo(() => {
    if (!atlas) return []
    return progress.bookmarks.map((id) => atlas.byId.get(id)).filter(Boolean)
  }, [atlas, progress.bookmarks])

  const dueCount = useMemo(() => {
    if (!atlas) return 0
    const now = Date.now()
    let count = 0
    for (const word of atlas.words) {
      const card = progress.cards[word.id]
      if (card && card.due <= now) count += 1
    }
    return count
  }, [atlas, progress.cards])

  const learnedCount = useMemo(() => Object.keys(progress.cards).length, [progress.cards])
  const streakDays = useMemo(() => streak(progress.days), [progress.days])

  const activeList = view === 'bookmarks' ? bookmarks : filtered
  const detailWord = detailId && atlas ? atlas.byId.get(detailId) : null
  const detailIndex = detailWord ? activeList.findIndex((word) => word.id === detailWord.id) : -1

  const openWord = (id) => setDetailId(id)
  const toggleBookmark = (id) => update((state) => toggleBookmarkState(state, id))
  const markLearned = (id) =>
    update((state) => {
      if (state.cards[id]) return state
      return {
        ...state,
        cards: { ...state.cards, [id]: review(undefined, RATING_GOOD) },
        days: bumpDay(state.days, { newWords: 1 }),
      }
    })

  const changeAccent = () =>
    update((state) => ({
      ...state,
      settings: { ...state.settings, accent: state.settings.accent === 'uk' ? 'us' : 'uk' },
    }))

  const goAtlas = () => {
    setView('atlas')
    setDetailId(null)
  }

  return (
    <div className="wa-root">
      <header className="wa-header">
        <div className="wa-brand">
          <BrandMark />
          <div className="wa-brand-text">
            <h1>
              词光 <span>Word Atlas</span>
            </h1>
            <p>7,298 雅思词 · 一词一画 · FSRS 间隔复习</p>
          </div>
        </div>
        <div className="wa-toolbar">
          <div className="wa-search">
            <Icon name="search" size={16} />
            <input
              value={search}
              onChange={(event) => {
                setSearch(event.target.value)
                if (view !== 'atlas') setView('atlas')
              }}
              placeholder="搜索单词 / 中文释义"
              aria-label="搜索单词或释义"
              spellCheck={false}
            />
            {search ? (
              <button type="button" className="wa-search-clear" onClick={() => setSearch('')} aria-label="清空搜索">
                <Icon name="close" size={14} />
              </button>
            ) : null}
          </div>
          <button type="button" className="wa-btn wa-btn-ghost wa-accent-btn" onClick={changeAccent} title="切换发音偏好">
            <Icon name="globe" size={15} /> {progress.settings.accent === 'uk' ? '英音' : '美音'}
          </button>
          <button type="button" className="wa-icon-btn" onClick={() => setAboutOpen(true)} aria-label="关于词光">
            <Icon name="info" size={18} />
          </button>
        </div>
      </header>

      <nav className="wa-tabs" role="tablist" aria-label="词光视图">
        <button type="button" role="tab" aria-selected={view === 'atlas'} className={view === 'atlas' ? 'is-on' : ''} onClick={() => setView('atlas')}>
          <Icon name="book" size={16} /> 图鉴
          {atlas ? <span className="wa-tab-count">{atlas.count.toLocaleString('en-US')}</span> : null}
        </button>
        <button type="button" role="tab" aria-selected={view === 'review'} className={view === 'review' ? 'is-on' : ''} onClick={() => setView('review')}>
          <Icon name="refresh" size={16} /> 复习
          {dueCount > 0 ? <span className="wa-tab-badge">{dueCount > 999 ? '999+' : dueCount}</span> : null}
        </button>
        <button type="button" role="tab" aria-selected={view === 'bookmarks'} className={view === 'bookmarks' ? 'is-on' : ''} onClick={() => setView('bookmarks')}>
          <Icon name="heart" size={16} /> 生词本
          {bookmarks.length > 0 ? <span className="wa-tab-count">{bookmarks.length}</span> : null}
        </button>
        <div className="wa-tabs-meta">
          <span>已学 {learnedCount.toLocaleString('en-US')}</span>
          <i />
          <span>连续 {streakDays} 天</span>
        </div>
      </nav>

      <main className="wa-main">
        {error ? (
          <EmptyState icon="info" title="词库还没准备好">
            <p>{error}</p>
            <p className="wa-about-note">
              请确认 word-atlas 插件已启用、Host 路由 `/word-atlas/health` 可访问；如果插件刚安装，刷新页面再试。
            </p>
          </EmptyState>
        ) : !atlas ? (
          <div className="wa-boot">
            <Spinner label="正在加载词光词库…" />
          </div>
        ) : view === 'review' ? (
          <ReviewView atlas={atlas} progress={progress} onExit={goAtlas} />
        ) : view === 'bookmarks' ? (
          bookmarks.length === 0 ? (
            <EmptyState icon="heart" title="生词本还是空的">
              <p>在词条卡片或详情里点 ♥，把想反复看的词收进来。</p>
              <button type="button" className="wa-btn wa-btn-primary" onClick={goAtlas}>
                去图鉴
              </button>
            </EmptyState>
          ) : (
            <WordGrid
              atlas={atlas}
              words={bookmarks}
              progress={progress}
              onOpen={openWord}
              onToggleBookmark={toggleBookmark}
            />
          )
        ) : (
          <>
            <div className="wa-filters">
              <div className="wa-chips" role="group" aria-label="CEFR 级别">
                <button type="button" className={cefr === 'all' ? 'is-on' : ''} onClick={() => setCefr('all')}>
                  全部级别
                </button>
                {atlas.cefr.map((level) => (
                  <button type="button" key={level} className={cefr === level ? 'is-on' : ''} onClick={() => setCefr(level)}>
                    {level}
                  </button>
                ))}
              </div>
              <div className="wa-topics" role="group" aria-label="话题">
                <button type="button" className={topic === 'all' ? 'is-on' : ''} onClick={() => setTopic('all')}>
                  全部话题
                </button>
                {atlas.topics.map((item) => (
                  <button
                    type="button"
                    key={item.slug}
                    className={topic === item.slug ? 'is-on' : ''}
                    onClick={() => setTopic(item.slug)}
                  >
                    {item.zh}
                  </button>
                ))}
              </div>
            </div>
            <WordGrid
              atlas={atlas}
              words={filtered}
              progress={progress}
              onOpen={openWord}
              onToggleBookmark={toggleBookmark}
            />
            <footer className="wa-footer">
              词库 · 插画 · 发音来自{' '}
              <a href="https://github.com/designfuchen/word-atlas" target="_blank" rel="noreferrer">
                词光 · Word Atlas
              </a>{' '}
              · CC BY 4.0
            </footer>
          </>
        )}
      </main>

      {detailWord && atlas ? (
        <DetailModal
          atlas={atlas}
          word={detailWord}
          progress={progress}
          onClose={() => setDetailId(null)}
          onOpenWord={openWord}
          onPrev={() => {
            if (detailIndex > 0) setDetailId(activeList[detailIndex - 1].id)
          }}
          onNext={() => {
            if (detailIndex >= 0 && detailIndex < activeList.length - 1) setDetailId(activeList[detailIndex + 1].id)
          }}
          hasPrev={detailIndex > 0}
          hasNext={detailIndex >= 0 && detailIndex < activeList.length - 1}
          onToggleBookmark={toggleBookmark}
          onMarkLearned={markLearned}
        />
      ) : null}

      {aboutOpen ? <AboutModal progress={progress} onClose={() => setAboutOpen(false)} /> : null}
    </div>
  )
}
