import React, { useEffect, useRef, useState } from 'react'
import { CefrBadge, Icon, WordImage } from './ui.jsx'

const PAGE_SIZE = 96

function WordCard({ atlas, word, progress, onOpen, onToggleBookmark }) {
  const card = progress.cards[word.id]
  const saved = progress.bookmarks.includes(word.id)
  const topicLabel = atlas.topics.find((topic) => topic.slug === word.topic)?.zh || word.topicZh
  return (
    <article className={`wa-card ${card ? 'is-learned' : ''}`}>
      <div
        className="wa-card-hit"
        role="button"
        tabIndex={0}
        onClick={() => onOpen(word.id)}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            onOpen(word.id)
          }
        }}
        aria-label={`查看 ${word.word}`}
      >
        <div className="wa-card-art">
          <WordImage id={word.id} word={word.word} />
          {card ? <span className="wa-card-dot" title="已在复习中" /> : null}
        </div>
        <div className="wa-card-body">
          <div className="wa-card-title">
            <h3 lang="en">{word.word}</h3>
            <CefrBadge level={word.cefr} />
          </div>
          <p className="wa-card-ipa">{word.ipa}</p>
          <p className="wa-card-zh">{word.zh}</p>
          <p className="wa-card-topic">{topicLabel}</p>
        </div>
      </div>
      <button
        type="button"
        className={`wa-card-heart ${saved ? 'is-on' : ''}`}
        onClick={(event) => {
          event.stopPropagation()
          onToggleBookmark(word.id)
        }}
        aria-pressed={saved}
        aria-label={saved ? '取消收藏' : '收藏'}
        title={saved ? '取消收藏' : '收藏'}
      >
        <Icon name="heart" size={16} filled={saved} />
      </button>
    </article>
  )
}

export function WordGrid({ atlas, words, progress, onOpen, onToggleBookmark }) {
  const [limit, setLimit] = useState(PAGE_SIZE)
  const sentinel = useRef(null)

  useEffect(() => {
    setLimit(PAGE_SIZE)
  }, [words])

  useEffect(() => {
    const node = sentinel.current
    if (!node || limit >= words.length) return undefined
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setLimit((current) => Math.min(current + PAGE_SIZE, words.length))
        }
      },
      { rootMargin: '600px 0px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [limit, words.length])

  const visible = words.slice(0, limit)

  return (
    <div className="wa-grid-wrap">
      <p className="wa-grid-count">
        共 {words.length.toLocaleString('en-US')} 个词
        {limit < words.length ? ` · 已显示 ${limit}` : ''}
      </p>
      <div className="wa-grid">
        {visible.map((word) => (
          <WordCard
            key={word.id}
            atlas={atlas}
            word={word}
            progress={progress}
            onOpen={onOpen}
            onToggleBookmark={onToggleBookmark}
          />
        ))}
      </div>
      {limit < words.length ? (
        <div ref={sentinel} className="wa-more">
          <button type="button" className="wa-btn wa-btn-ghost" onClick={() => setLimit((current) => current + PAGE_SIZE)}>
            加载更多（剩余 {(words.length - limit).toLocaleString('en-US')}）
          </button>
        </div>
      ) : null}
    </div>
  )
}
