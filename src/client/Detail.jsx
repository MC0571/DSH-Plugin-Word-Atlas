import React, { useEffect, useState } from 'react'
import { loadEntry, hasMedia, audioUrl, MEDIA } from './data.js'
import { LookupText } from './LookupText.jsx'
import { formatInterval, isDue } from './fsrs.js'
import {
  AudioButton,
  CefrBadge,
  Icon,
  Overlay,
  Spinner,
  WordImage,
  splitPair,
  stopAllAudio,
} from './ui.jsx'

export function DetailModal({
  atlas,
  word,
  progress,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
  onOpenWord,
  onToggleBookmark,
  onMarkLearned,
  onBack,
  backLabel,
}) {
  const [entry, setEntry] = useState(null)
  const [error, setError] = useState('')
  const accent = progress.settings.accent
  const card = progress.cards[word.id]
  const saved = progress.bookmarks.includes(word.id)

  useEffect(() => {
    let alive = true
    setEntry(null)
    setError('')
    loadEntry(atlas, word.id)
      .then((value) => {
        if (alive) setEntry(value)
      })
      .catch((err) => {
        if (alive) setError(err.message || '词条加载失败')
      })
    return () => {
      alive = false
      stopAllAudio()
    }
  }, [atlas, word.id])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'ArrowLeft' && hasPrev) {
        event.preventDefault()
        onPrev()
      } else if (event.key === 'ArrowRight' && hasNext) {
        event.preventDefault()
        onNext()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [hasPrev, hasNext, onPrev, onNext])

  const topicLabel = atlas.topics.find((topic) => topic.slug === word.topic)?.zh || word.topicZh

  return (
    <Overlay onClose={onClose} labelledBy="wa-detail-title">
      <div className="wa-detail" role="document">
        <div className="wa-detail-art">
          <WordImage id={word.id} word={word.word} full className="wa-detail-img" alt={`${word.word} 插画`} />
          <div className="wa-detail-art-meta">
            <span className="wa-specimen">
              № {String(word.order + 1).padStart(4, '0')} <i /> Word Atlas
            </span>
            {card ? (
              <span className="wa-memory-inline">
                {isDue(card) ? '待复习' : `下次复习 ${formatInterval(card.due - Date.now())}后`}
              </span>
            ) : null}
          </div>
        </div>

        <div className="wa-detail-body">
          <button type="button" className="wa-icon-btn wa-detail-close" onClick={onClose} aria-label="关闭词条">
            <Icon name="close" size={18} />
          </button>

          <header className="wa-detail-head">
            {onBack ? (
              <button type="button" className="wa-icon-btn wa-back-btn" onClick={onBack} aria-label={backLabel ? `返回 ${backLabel}` : '返回上一个词'} title={backLabel ? `返回 ${backLabel}` : '返回上一个词'}>
                <Icon name="chevronLeft" size={18} />
              </button>
            ) : null}
            <div className="wa-tags">
              <CefrBadge level={word.cefr} />
              {topicLabel ? <span className="wa-chip">{topicLabel}</span> : null}
              {card ? <span className={`wa-chip wa-chip-status ${card.st === 2 ? 'is-done' : ''}`}>{card.st === 2 ? '复习中' : '学习中'}</span> : null}
            </div>
            <button
              type="button"
              className={`wa-icon-btn ${saved ? 'is-on' : ''}`}
              onClick={() => onToggleBookmark(word.id)}
              aria-pressed={saved}
              aria-label={saved ? '取消收藏' : '收藏'}
              title={saved ? '取消收藏' : '收藏'}
            >
              <Icon name="heart" size={19} filled={saved} />
            </button>
          </header>

          <h2 id="wa-detail-title" className="wa-headword" lang="en">
            {word.word}
          </h2>

          {!entry && !error ? <Spinner label="加载词条…" /> : null}
          {error ? <p className="wa-error">{error}</p> : null}

          {entry ? (
            <>
              <div className="wa-pron">
                {entry.uk ? (
                  <div className="wa-pron-row">
                    <span className="wa-pron-label">英</span>
                    <span className="wa-ipa">{entry.uk}</span>
                    {hasMedia(entry, MEDIA.uk) ? (
                      <AudioButton audioKey={`uk:${word.id}`} url={audioUrl('uk', word.id)} label="发音" />
                    ) : null}
                  </div>
                ) : null}
                {entry.us ? (
                  <div className="wa-pron-row">
                    <span className="wa-pron-label">美</span>
                    <span className="wa-ipa">{entry.us}</span>
                    {hasMedia(entry, MEDIA.us) ? (
                      <AudioButton audioKey={`us:${word.id}`} url={audioUrl('us', word.id)} label="发音" />
                    ) : null}
                  </div>
                ) : null}
                {!entry.uk && !entry.us ? <span className="wa-ipa">{word.ipa}</span> : null}
                {accent === 'us' && entry.us ? (
                  <span className="wa-hint">默认美音</span>
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

              {(entry.ex || []).length > 0 ? (
                <section className="wa-block">
                  <h3 className="wa-eyebrow">例句</h3>
                  <ul className="wa-examples">
                    {entry.ex.map((example, index) => {
                      const kind = index === 0 ? 'ex' : 'ex2'
                      const playable = hasMedia(entry, MEDIA[kind])
                      return (
                        <li key={index}>
                          {entry.ex.length > 1 ? (
                            <span className={`wa-ex-tag ${index ? 'is-ielts' : ''}`}>{index ? '雅思语境' : '日常'}</span>
                          ) : null}
                          <p className="wa-ex-en" lang="en">
                            <LookupText atlas={atlas} progress={progress} text={example.en} headword={word.word} onOpenWord={onOpenWord} />
                            {playable ? (
                              <AudioButton
                                audioKey={`${kind}:${word.id}`}
                                url={audioUrl(kind, word.id)}
                                size={14}
                                className="wa-ex-speak"
                                title="播放例句朗读"
                              />
                            ) : null}
                          </p>
                          <p className="wa-ex-zh">{example.zh}</p>
                        </li>
                      )
                    })}
                  </ul>
                </section>
              ) : null}

              {(entry.col || []).length > 0 ? (
                <section className="wa-block">
                  <h3 className="wa-eyebrow">常用搭配</h3>
                  <ul className="wa-collocations">
                    {entry.col.map((item) => {
                      const pair = splitPair(item)
                      return (
                        <li key={item}>
                          <span lang="en">{pair.en}</span>
                          {pair.zh ? <small>{pair.zh}</small> : null}
                        </li>
                      )
                    })}
                  </ul>
                </section>
              ) : null}

              {(entry.fam || []).length > 0 || (entry.syn || []).length > 0 || (entry.ant || []).length > 0 ? (
                <section className="wa-block wa-relations">
                  {(entry.fam || []).length > 0 ? (
                    <div>
                      <h3 className="wa-eyebrow">词族</h3>
                      <p>
                        {entry.fam.map((item) => {
                          const base = item.replace(/\s*\(.*\)\s*$/, '').trim().toLowerCase()
                          const hit = atlas.words.find((candidate) => candidate.word.toLowerCase() === base)
                          return hit ? (
                            <button key={item} type="button" className="wa-link" onClick={() => onOpenWord(hit.id)}>
                              {item}
                            </button>
                          ) : (
                            <span key={item}>{item}</span>
                          )
                        })}
                      </p>
                    </div>
                  ) : null}
                  {(entry.syn || []).length > 0 ? (
                    <div>
                      <h3 className="wa-eyebrow">近义</h3>
                      <p>{entry.syn.map((item) => <span key={item}>{item}</span>)}</p>
                    </div>
                  ) : null}
                  {(entry.ant || []).length > 0 ? (
                    <div>
                      <h3 className="wa-eyebrow">反义</h3>
                      <p>{entry.ant.map((item) => <span key={item}>{item}</span>)}</p>
                    </div>
                  ) : null}
                </section>
              ) : null}

              {entry.tip ? (
                <aside className="wa-tip">
                  <Icon name="sparkle" size={17} />
                  <p>{entry.tip}</p>
                </aside>
              ) : null}

              {entry.note ? <p className="wa-usage-note">用法提醒：{entry.note}</p> : null}

              <div className="wa-detail-footer">
                <div className="wa-detail-memory">
                  {card ? (
                    <>
                      <span>记忆稳定度 {card.s < 1 ? '<1' : Math.round(card.s)} 天</span>
                      <span>已复习 {card.reps} 次</span>
                    </>
                  ) : (
                    <span>还没学过这个词</span>
                  )}
                </div>
                <div className="wa-detail-actions">
                  <button
                    type="button"
                    className="wa-btn wa-btn-ghost"
                    onClick={() => onMarkLearned(word.id)}
                    disabled={Boolean(card)}
                  >
                    <Icon name="check" size={15} /> {card ? '已在复习中' : '标记为已学'}
                  </button>
                  <div className="wa-detail-nav">
                    <button type="button" className="wa-icon-btn" onClick={onPrev} disabled={!hasPrev} aria-label="上一个词">
                      <Icon name="chevronLeft" size={18} />
                    </button>
                    <button type="button" className="wa-icon-btn" onClick={onNext} disabled={!hasNext} aria-label="下一个词">
                      <Icon name="chevronRight" size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </Overlay>
  )
}
