import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Icon } from './ui.jsx'

const VIEWS = [
  { id: 'today', label: '今日学习', icon: 'star' },
  { id: 'atlas', label: '图鉴', icon: 'book' },
  { id: 'galaxy', label: '词汇星图', icon: 'orbit' },
  { id: 'review', label: '快速复习', icon: 'refresh' },
  { id: 'practice', label: '打字练习', icon: 'keyboard' },
  { id: 'bookmarks', label: '生词本', icon: 'heart' },
  { id: 'settings', label: '我的 / 设置', icon: 'user' },
]

export function Palette({ atlas, progress, onClose, onNavigate, onOpenWord }) {
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)
  const input = useRef(null)

  useEffect(() => {
    input.current?.focus()
  }, [])

  const words = useMemo(() => {
    if (!atlas) return []
    const text = query.trim().toLowerCase()
    if (!text) return []
    return atlas.words
      .filter((word) => word.word.toLowerCase().includes(text) || word.zh.toLowerCase().includes(text))
      .slice(0, 8)
  }, [atlas, query])

  const rows = useMemo(() => {
    if (query.trim()) return words.map((word) => ({ type: 'word', ...word }))
    return VIEWS.map((view) => ({ type: 'action', ...view }))
  }, [query, words])

  useEffect(() => {
    setActive(0)
  }, [query])

  const run = (row) => {
    if (!row) return
    if (row.type === 'word') onOpenWord(row.id)
    else onNavigate(row.id)
    onClose()
  }

  return (
    <div
      className="wa-palette-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div
        className="wa-palette"
        role="dialog"
        aria-modal="true"
        aria-label="命令面板"
        onKeyDown={(event) => {
          if (event.key === 'Escape') {
            event.preventDefault()
            onClose()
          } else if (event.key === 'ArrowDown') {
            event.preventDefault()
            setActive((current) => Math.min(rows.length - 1, current + 1))
          } else if (event.key === 'ArrowUp') {
            event.preventDefault()
            setActive((current) => Math.max(0, current - 1))
          } else if (event.key === 'Enter') {
            event.preventDefault()
            run(rows[active])
          }
        }}
      >
        <div className="wa-palette-search">
          <Icon name="search" size={17} />
          <input
            ref={input}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="搜索单词或跳转页面…"
            aria-label="搜索单词或跳转页面"
            spellCheck={false}
          />
          <kbd>Esc</kbd>
        </div>
        <ul className="wa-palette-list">
          {query.trim() ? <li className="wa-palette-label">词条 · {words.length ? `匹配 ${words.length} 个` : '没有结果'}</li> : <li className="wa-palette-label">前往</li>}
          {rows.map((row, index) => (
            <li key={row.type === 'word' ? `word-${row.id}` : `view-${row.id}`}>
              <button
                type="button"
                className={index === active ? 'is-active' : ''}
                onMouseEnter={() => setActive(index)}
                onClick={() => run(row)}
              >
                {row.type === 'word' ? (
                  <>
                    <span className="wa-palette-word" lang="en">{row.word}</span>
                    <span className="wa-palette-zh">{row.zh}</span>
                    <span className="wa-palette-tag">{row.cefr}</span>
                  </>
                ) : (
                  <>
                    <Icon name={row.icon} size={16} />
                    <span>{row.label}</span>
                  </>
                )}
              </button>
            </li>
          ))}
        </ul>
        <p className="wa-palette-footer">↑↓ 选择 · Enter 打开 · Esc 关闭</p>
      </div>
    </div>
  )
}
