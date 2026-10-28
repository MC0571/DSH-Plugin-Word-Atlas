import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { audioUrl, hasMedia, loadEntry, MEDIA } from './data.js'
import { update } from './store.js'
import { AudioButton, Icon, Spinner } from './ui.jsx'

/**
 * 统一查词卡片：短文/例句/书籍阅读器共用。
 * 样式对齐设计稿：大号单词、音标、英美发音、释义列表、收藏 + 查看词卡。
 */
export function WordLookupCard({ atlas, progress, refId, surface, anchor, onClose, onOpenWord }) {
  const card = useRef(null)
  const [state, setState] = useState({ status: refId ? 'loading' : 'missing', entry: null, error: '' })
  const [position, setPosition] = useState({ left: 16, top: 16 })
  const tokenSurface = surface || refId || ''
  const bookmarks = Array.isArray(progress?.bookmarks) ? progress.bookmarks : []
  const saved = Boolean(refId && bookmarks.includes(refId))

  useEffect(() => {
    if (!refId) {
      setState({ status: 'missing', entry: null, error: '' })
      return undefined
    }
    let alive = true
    setState({ status: 'loading', entry: null, error: '' })
    loadEntry(atlas, refId)
      .then((entry) => alive && setState({ status: 'ready', entry, error: '' }))
      .catch((error) => alive && setState({ status: 'error', entry: null, error: error.message || '查不到这个词。' }))
    return () => {
      alive = false
    }
  }, [atlas, refId])

  useLayoutEffect(() => {
    const place = () => {
      const panel = card.current
      if (!panel || !anchor) return
      const width = panel.offsetWidth || 380
      const height = panel.offsetHeight || 280
      const spaceBelow = window.innerHeight - anchor.bottom
      const top = spaceBelow >= height + 16 || anchor.top < height + 16
        ? anchor.bottom + 8
        : Math.max(16, anchor.top - height - 8)
      const left = Math.max(12, Math.min(window.innerWidth - width - 12, anchor.left + anchor.width / 2 - width / 2))
      setPosition({ left, top: Math.min(top, window.innerHeight - height - 12) })
    }
    place()
    const observer = typeof ResizeObserver === 'function' ? new ResizeObserver(place) : null
    if (card.current) observer?.observe(card.current)
    window.addEventListener('resize', place)
    return () => {
      observer?.disconnect()
      window.removeEventListener('resize', place)
    }
  }, [anchor, tokenSurface, refId, state.status])

  useEffect(() => {
    const onPointerDown = (event) => {
      if (card.current?.contains(event.target)) return
      if (event.target instanceof Element && event.target.closest('[data-wa-lookup-token]')) return
      onClose()
    }
    const onKeyDown = (event) => {
      if (event.key !== 'Escape') return
      event.stopImmediatePropagation()
      onClose()
    }
    document.addEventListener('pointerdown', onPointerDown, true)
    window.addEventListener('keydown', onKeyDown, true)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown, true)
      window.removeEventListener('keydown', onKeyDown, true)
    }
  }, [onClose])

  const toggleBookmark = () => {
    if (!refId) return
    update((current) => {
      const list = Array.isArray(current.bookmarks) ? current.bookmarks : []
      const exists = list.includes(refId)
      return {
        ...current,
        bookmarks: exists ? list.filter((item) => item !== refId) : [...list, refId],
      }
    })
  }

  const entry = state.entry
  return (
    <div
      ref={card}
      className="wa-wlc"
      style={{ left: position.left, top: position.top }}
      role="dialog"
      aria-modal="false"
      aria-label={`查词：${entry?.w || tokenSurface}`}
    >
      <button type="button" className="wa-icon-btn wa-wlc-close" onClick={onClose} aria-label="关闭查词">
        <Icon name="close" size={17} />
      </button>

      {state.status === 'missing' || state.status === 'error' ? (
        <>
          <h2 className="wa-wlc-word" lang="en">{tokenSurface}</h2>
          <p className="wa-wlc-empty">{state.status === 'error' ? state.error : '词库暂未收录这个词。'}</p>
        </>
      ) : null}

      {state.status === 'loading' ? <Spinner label="正在查词…" /> : null}

      {entry ? (
        <>
          <h2 className="wa-wlc-word" lang="en">{entry.w}</h2>
          <div className="wa-wlc-pron">
            {entry.uk || entry.us ? <span className="wa-wlc-ipa">{entry.uk || entry.us}</span> : null}
            {hasMedia(entry, MEDIA.uk) ? (
              <AudioButton audioKey={`wlc:uk:${entry.id}`} url={audioUrl('uk', entry.id)} label="英" size={14} />
            ) : null}
            {hasMedia(entry, MEDIA.us) ? (
              <AudioButton audioKey={`wlc:us:${entry.id}`} url={audioUrl('us', entry.id)} label="美" size={14} />
            ) : null}
          </div>
          <div className="wa-wlc-senses">
            {(entry.senses || []).slice(0, 3).map((sense, index) => (
              <p key={index} className="wa-wlc-sense">
                {sense.pos ? <span className="wa-wlc-pos">{sense.pos}</span> : null}
                <span>{sense.zh}</span>
              </p>
            ))}
          </div>
          <div className="wa-wlc-actions">
            <button type="button" className={`wa-btn wa-btn-ghost wa-wlc-fav ${saved ? 'is-on' : ''}`} onClick={toggleBookmark}>
              <Icon name="heart" size={16} filled={saved} /> {saved ? '已收藏' : '收藏'}
            </button>
            <button type="button" className="wa-btn wa-btn-primary" onClick={() => { onClose(); onOpenWord(entry.id) }}>
              查看词卡 <Icon name="chevronRight" size={16} />
            </button>
          </div>
        </>
      ) : null}
    </div>
  )
}
