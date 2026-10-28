import React, { useEffect, useMemo, useState } from 'react'
import { chapterKey, positionKey } from './bookReader.js'
import { BookReader } from './BookReader.jsx'
import { loadBooksIndex, readAsset } from './readings.js'
import { EmptyState, Icon, Spinner } from './ui.jsx'

export function BooksShelf({ atlas, progress, onOpenWord, onReaderFocus }) {
  const [books, setBooks] = useState(null)
  const [error, setError] = useState('')
  const [reading, setReading] = useState(null)

  useEffect(() => {
    let alive = true
    loadBooksIndex()
      .then((data) => alive && setBooks(Array.isArray(data.books) ? data.books : []))
      .catch((reason) => alive && setError(reason.message || '书架加载失败。'))
    return () => {
      alive = false
    }
  }, [])

  if (error) {
    return (
      <EmptyState icon="library" title="书架暂时打不开">
        <p>{error}</p>
      </EmptyState>
    )
  }
  if (!books) return <Spinner label="正在搬书上架…" />

  if (reading) {
    return (
      <BookReader
        key={`${reading.book.id}:${reading.meta.n}`}
        atlas={atlas}
        progress={progress}
        book={reading.book}
        meta={reading.meta}
        restorePid={reading.restorePid}
        onBack={() => setReading(null)}
        onOpenChapter={(meta) => setReading({ book: reading.book, meta, restorePid: null })}
        onOpenWord={onOpenWord}
        onReaderFocus={onReaderFocus}
      />
    )
  }

  return (
    <section className="wa-books">
      {books.map((book) => (
        <BookShelfBook
          key={book.id}
          book={book}
          atlas={atlas}
          progress={progress}
          onOpenChapter={(meta, restorePid) => setReading({ book, meta, restorePid })}
        />
      ))}
      <p className="wa-books-colophon">
        书源与翻译来自词光线上站点；阅读进度会按章节保存，朗读音频按需加载。
      </p>
    </section>
  )
}

function BookShelfBook({ book, atlas, progress, onOpenChapter }) {
  const latest = progress.readings?.[positionKey(book.id)]
  const readChapters = useMemo(
    () => new Set(book.chapters.filter((chapter) => progress.readings?.[chapterKey(book.id, chapter.n)]?.done).map((chapter) => chapter.n)),
    [book, progress.readings],
  )
  const firstUnread = book.chapters.find((chapter) => chapter.ready && !readChapters.has(chapter.n))
  const continueChapter =
    (latest?.chapter ? book.chapters.find((chapter) => chapter.n === latest.chapter) : null) ||
    firstUnread ||
    book.chapters.find((chapter) => chapter.ready) ||
    book.chapters[0]
  const resumePid = latest && continueChapter && latest.chapter === continueChapter.n ? latest.pid : null
  const readyCount = book.chapters.filter((chapter) => chapter.ready).length
  const pct = continueChapter ? Math.round((readChapters.size / Math.max(1, readyCount)) * 100) : 0
  const cover = book.cover || book.coverSmall

  return (
    <article className="wa-book-shelf">
      <div className="wa-book-hero">
        <button type="button" className="wa-book-cover-link" disabled={!continueChapter} onClick={() => continueChapter && onOpenChapter(continueChapter, resumePid)} aria-label={`继续阅读《${book.titleZh}》`}>
          <span className="wa-book-cover-frame">
            <img src={readAsset(cover)} alt={`${book.titleZh}封面`} onError={(event) => { event.currentTarget.style.visibility = 'hidden' }} />
          </span>
        </button>
        <div className="wa-book-copy">
          <p className="wa-eyebrow">{book.level} · {book.year}</p>
          <h2>{book.titleZh}</h2>
          <p className="wa-book-en-title" lang="en">{book.title}</p>
          <p className="wa-book-byline">{book.authorZh} · {book.author}</p>
          <p className="wa-book-blurb">{book.blurbZh}</p>
          <p className="wa-book-firstline" lang="en">“{book.firstLine}”</p>
          {book.firstLineZh ? <p className="wa-book-firstline-zh">“{book.firstLineZh}”</p> : null}

          <div className="wa-book-progress">
            <div className="wa-book-progress-copy">
              <span>已读 {readChapters.size} / {readyCount} 章</span>
              <small>{pct}%</small>
            </div>
            <div className="wa-book-progress-track">
              <i style={{ width: `${pct}%` }} />
            </div>
          </div>

          <div className="wa-book-actions">
            <button
              type="button"
              className="wa-btn wa-btn-primary wa-btn-lg"
              disabled={!continueChapter}
              onClick={() => continueChapter && onOpenChapter(continueChapter, resumePid)}
            >
              {readChapters.size ? '继续阅读' : '开始阅读'} · {continueChapter?.labelZh || '第一章'} <Icon name="chevronRight" size={17} />
            </button>
            <span className="wa-book-actions-note">
              {latest ? `上次读到第 ${latest.chapter} 章 · ${Math.round((latest.pct || 0) * 100)}%` : `共 ${book.chapterCount} 章 · 约 ${book.chapters.reduce((sum, chapter) => sum + (chapter.minutes || 0), 0)} 分钟`}
            </span>
          </div>
        </div>
      </div>

      <section className="wa-book-journey" aria-label="章节星路">
        <div className="wa-book-journey-head">
          <h3>章节星路</h3>
          <span>点亮读过的章节</span>
        </div>
        <ol className="wa-starpath">
          {book.chapters.map((chapter) => {
            const isRead = readChapters.has(chapter.n)
            const isCurrent = chapter.n === continueChapter?.n
            return (
              <li key={chapter.n} className={`${isRead ? 'is-read' : ''} ${isCurrent ? 'is-current' : ''}`}>
                <button
                  type="button"
                  disabled={!chapter.ready}
                  onClick={() => onOpenChapter(chapter, latest?.chapter === chapter.n ? latest.pid : null)}
                  aria-label={`${chapter.labelZh} ${chapter.titleZh}${isRead ? '，已读' : ''}`}
                >
                  <span className="wa-star-number">{String(chapter.n).padStart(2, '0')}</span>
                  <span className="wa-star-node">
                    <Icon name="star" size={9} />
                  </span>
                  <span className="wa-star-copy">
                    <strong>{chapter.labelZh} · {chapter.titleZh}</strong>
                    <small>{chapter.minutes} 分钟 · {chapter.words} 词{isRead ? ' · 已读' : ''}</small>
                  </span>
                </button>
              </li>
            )
          })}
        </ol>
      </section>
    </article>
  )
}
