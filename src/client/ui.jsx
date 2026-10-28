import React, { useEffect, useRef, useState } from 'react'
import { thumbUrl, imgUrl } from './data.js'

/* ------------------------------------------------------------------ icons */

const ICON_PATHS = {
  search: [<circle key="c" cx="11" cy="11" r="6.5" />, <path key="l" d="M16 16l4.5 4.5" />],
  star: [<path key="s" d="M12 3.6l2.5 5.1 5.6.8-4 3.9.9 5.6-5-2.6-5 2.6.9-5.6-4-3.9 5.6-.8z" />],
  sparkle: [
    <path key="a" d="M12 3l1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7z" />,
    <path key="b" d="M18.5 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z" />,
  ],
  heart: [<path key="h" d="M12 19.5s-7-4.3-7-9A4 4 0 0 1 12 7a4 4 0 0 1 7 3.5c0 4.7-7 9-7 9z" />],
  volume: [<path key="v" d="M4 9.5h3.2L12 6v12L7.2 14.5H4z" />, <path key="w" d="M15.5 8.5a5 5 0 0 1 0 7" />, <path key="x" d="M18 6a8.5 8.5 0 0 1 0 12" />],
  close: [<path key="a" d="M6 6l12 12" />, <path key="b" d="M18 6L6 18" />],
  chevronLeft: [<path key="c" d="M14.5 5.5L8 12l6.5 6.5" />],
  chevronRight: [<path key="c" d="M9.5 5.5L16 12l-6.5 6.5" />],
  book: [
    <path key="a" d="M4 5.5A2.5 2.5 0 0 1 6.5 3H19v15H6.5A2.5 2.5 0 0 0 4 20.5z" />,
    <path key="b" d="M4 20.5A2.5 2.5 0 0 1 6.5 18H19v3H6.5" />,
  ],
  layers: [<path key="a" d="M12 3l8 4.5-8 4.5-8-4.5z" />, <path key="b" d="M4 12l8 4.5 8-4.5" />, <path key="c" d="M4 16.5L12 21l8-4.5" />],
  refresh: [<path key="a" d="M19 12a7 7 0 1 1-2.1-5" />, <path key="b" d="M19.5 4v4.5H15" />],
  check: [<path key="c" d="M5 12.5l4.2 4.2L19 7" />],
  info: [<circle key="a" cx="12" cy="12" r="8.5" />, <path key="b" d="M12 11v5.5" />, <path key="c" d="M12 7.8v.4" />],
  play: [<path key="p" d="M8 5.5l10 6.5-10 6.5z" />],
  pause: [<path key="a" d="M9 6v12" />, <path key="b" d="M15 6v12" />],
  globe: [<circle key="a" cx="12" cy="12" r="8.5" />, <path key="b" d="M3.5 12h17" />, <path key="c" d="M12 3.5c2.5 2.4 3.8 5.3 3.8 8.5S14.5 18.1 12 20.5c-2.5-2.4-3.8-5.3-3.8-8.5S9.5 5.9 12 3.5z" />],
}

export function Icon({ name, size = 18, filled = false, className = '', ...rest }) {
  const paths = ICON_PATHS[name]
  if (!paths) return null
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth={filled ? 0 : 1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...rest}
    >
      {paths}
    </svg>
  )
}

/* ------------------------------------------------------------------ images */

export function WordImage({ id, word, full = false, className = '', alt }) {
  const [failed, setFailed] = useState(false)
  const src = full ? imgUrl(id) : thumbUrl(id)
  if (failed) {
    return (
      <div className={`wa-img-fallback ${className}`} role="img" aria-label={alt || word}>
        <span>{(word || '?').slice(0, 1).toUpperCase()}</span>
      </div>
    )
  }
  return (
    <img
      className={className}
      src={src}
      alt={alt || `${word} 插画`}
      loading="lazy"
      decoding="async"
      draggable={false}
      onError={() => setFailed(true)}
    />
  )
}

/* ------------------------------------------------------------------ audio */

let audioElement = null
let playingKey = null
const audioListeners = new Set()

function notifyAudio() {
  for (const listener of audioListeners) listener()
}

function stopAudio() {
  if (audioElement) {
    audioElement.pause()
    audioElement = null
  }
  playingKey = null
  notifyAudio()
}

export function playAudio(key, url) {
  if (playingKey === key) {
    stopAudio()
    return
  }
  stopAudio()
  const element = new Audio(url)
  audioElement = element
  playingKey = key
  notifyAudio()
  element.onended = () => {
    if (audioElement === element) stopAudio()
  }
  element.onerror = () => {
    if (audioElement === element) stopAudio()
  }
  element.play().catch(() => {
    if (audioElement === element) stopAudio()
  })
}

export function stopAllAudio() {
  stopAudio()
}

export function usePlayingKey() {
  const [key, setKey] = useState(playingKey)
  useEffect(() => {
    const listener = () => setKey(playingKey)
    audioListeners.add(listener)
    return () => audioListeners.delete(listener)
  }, [])
  return key
}

export function AudioButton({ audioKey, url, label, size = 16, className = '', title }) {
  const playing = usePlayingKey() === audioKey
  return (
    <button
      type="button"
      className={`wa-audio-btn ${playing ? 'is-playing' : ''} ${className}`}
      onClick={() => playAudio(audioKey, url)}
      aria-label={title || (playing ? '停止播放' : `播放${label || ''}`)}
      title={title || label || '播放发音'}
    >
      <Icon name={playing ? 'pause' : 'volume'} size={size} />
      {label ? <span>{label}</span> : null}
    </button>
  )
}

/* ------------------------------------------------------------------ shell */

export function Overlay({ onClose, children, labelledBy }) {
  const backdrop = useRef(null)
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.stopPropagation()
        onClose()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose])
  return (
    <div
      className="wa-overlay"
      ref={backdrop}
      role="dialog"
      aria-modal="true"
      aria-labelledby={labelledBy}
      onMouseDown={(event) => {
        if (event.target === backdrop.current) onClose()
      }}
    >
      {children}
    </div>
  )
}

export function Spinner({ label = '加载中…' }) {
  return (
    <div className="wa-loading" role="status">
      <span className="wa-spinner" aria-hidden="true" />
      <span>{label}</span>
    </div>
  )
}

export function EmptyState({ icon = 'sparkle', title, children }) {
  return (
    <div className="wa-empty">
      <span className="wa-empty-icon">
        <Icon name={icon} size={26} />
      </span>
      <h3>{title}</h3>
      {children ? <div className="wa-empty-body">{children}</div> : null}
    </div>
  )
}

export function CefrBadge({ level }) {
  return <span className={`wa-cefr wa-cefr-${level}`}>{level}</span>
}

export function splitPair(value) {
  const separator = value.includes('｜') ? '｜' : value.includes('|') ? '|' : ''
  if (!separator) return { en: value, zh: '' }
  const index = value.indexOf(separator)
  return { en: value.slice(0, index).trim(), zh: value.slice(index + 1).trim() }
}

export function splitHighlight(text, word) {
  if (!word || word.length < 2) return null
  const lower = text.toLowerCase()
  const needle = word.toLowerCase()
  const index = lower.indexOf(needle)
  if (index < 0) return null
  return [text.slice(0, index), text.slice(index, index + word.length), text.slice(index + word.length)]
}
