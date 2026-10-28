import React, { useEffect, useMemo, useState } from 'react'
import { getLookupIndex } from './lookup.js'
import { WordLookupCard } from './WordLookupCard.jsx'

const TOKEN_RE = /[A-Za-z]+(?:['’][A-Za-z]+)*/g
const GLUE_RE = /^[,.;:!?…’”»)\]]+/
const OPEN_EVENT = 'word-atlas:lookup-open'

function isHeadwordForm(token, headword) {
  if (!headword) return false
  const clean = token.toLowerCase()
  const base = headword.toLowerCase()
  return clean === base || clean.startsWith(base)
}

/**
 * 可点词例句：渲染英文 token 为按钮，点击弹出统一查词卡片。
 * 浮窗只依赖 index.json（词/音标/释义/媒体位），不加载词条分块。
 */
export function LookupText({ atlas, progress, text, headword, onOpenWord, className = '' }) {
  const lookup = getLookupIndex(atlas)
  const [open, setOpen] = useState(null)

  useEffect(() => {
    if (!open) return undefined
    const close = () => setOpen(null)
    window.addEventListener(OPEN_EVENT, close)
    return () => window.removeEventListener(OPEN_EVENT, close)
  }, [open])

  const nodes = useMemo(() => {
    const out = []
    let cursor = 0
    for (const match of text.matchAll(TOKEN_RE)) {
      const start = match.index ?? 0
      if (start > cursor) out.push(text.slice(cursor, start))
      const token = match[0]
      const hit = lookup.resolve(token)
      const marked = isHeadwordForm(token, headword)
      const button = (
        <button
          type="button"
          className="wa-lookup-token"
          data-wa-lookup-token=""
          aria-label={`查词：${token}`}
          aria-haspopup="dialog"
          onClick={(event) => {
            event.stopPropagation()
            window.dispatchEvent(new Event(OPEN_EVENT))
            const rect = event.currentTarget.getBoundingClientRect()
            setOpen({
              token,
              refId: hit,
              anchor: { left: rect.left, top: rect.top, width: rect.width, height: rect.height, bottom: rect.bottom },
            })
          }}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') event.stopPropagation()
          }}
        >
          {token}
        </button>
      )
      out.push(marked ? <mark key={`mark-${start}`}>{button}</mark> : <React.Fragment key={start}>{button}</React.Fragment>)
      cursor = start + token.length
      const glue = text.slice(cursor).match(GLUE_RE)?.[0] ?? ''
      if (glue) {
        out.push(<span key={`glue-${start}`}>{glue}</span>)
        cursor += glue.length
      }
    }
    if (cursor < text.length) out.push(text.slice(cursor))
    return out
  }, [text, headword, lookup])

  return (
    <span className={`wa-lookup-text ${className}`}>
      {nodes}
      {open ? (
        <WordLookupCard
          atlas={atlas}
          progress={progress}
          refId={open.refId}
          surface={open.token}
          anchor={open.anchor}
          onClose={() => setOpen(null)}
          onOpenWord={(id) => {
            setOpen(null)
            onOpenWord(id)
          }}
        />
      ) : null}
    </span>
  )
}
