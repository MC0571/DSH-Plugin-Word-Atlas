import React, { useEffect, useRef, useState } from 'react'
import { thumbUrl, imgUrl } from './data.js'
import { ICON_HTML } from './icons.js'

/* ------------------------------------------------------------------ icons */


export function Icon({ name, size = 18, filled = false, className = '', ...rest }) {
  const inner = ICON_HTML[name]
  if (!inner) return null
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
      dangerouslySetInnerHTML={{ __html: inner }}
      {...rest}
    />
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
