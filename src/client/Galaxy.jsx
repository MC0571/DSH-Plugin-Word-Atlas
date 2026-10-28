import React, { useEffect, useMemo, useRef, useState } from 'react'
import { isMastered } from './fsrs.js'
import { Icon, WordImage } from './ui.jsx'
import { GalaxyEngine, detectQuality } from './galaxy/engine.ts'
import { layoutGalaxy, TOPIC_COLORS } from './galaxy/layout.js'

const layouts = new WeakMap()

function useGalaxyLayout(atlas) {
  return useMemo(() => {
    let layout = layouts.get(atlas)
    if (!layout) {
      layout = layoutGalaxy(atlas)
      layouts.set(atlas, layout)
    }
    return layout
  }, [atlas])
}

const reducedMotion = () => typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches

function starStates(layout, cards) {
  const states = new Float32Array(layout.n)
  layout.ids.forEach((id, index) => {
    const card = cards[id]
    states[index] = card ? (isMastered(card) ? 2 : 1) : 0
  })
  return states
}

const clampDist = (distance) => Math.max(0.35, Math.min(4.2, distance))

export function GalaxyView({ atlas, progress, onOpenWord }) {
  const layout = useGalaxyLayout(atlas)
  const cards = progress.cards
  const canvas = useRef(null)
  const engine = useRef(null)
  const labels = useRef(null)
  const [hover, setHover] = useState(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const element = canvas.current
    if (!element) return undefined
    const instance = new GalaxyEngine(element, layout, {
      quality: detectQuality(),
      reducedMotion: reducedMotion(),
      preserve: true,
      autoRotate: 0.025,
    })
    engine.current = instance
    instance.resize()
    const observer = new ResizeObserver(() => instance.resize())
    observer.observe(element)
    const intersection = new IntersectionObserver(([entry]) => (entry.isIntersecting && !document.hidden ? instance.start() : instance.stop()))
    intersection.observe(element)
    const visibility = () => (document.hidden ? instance.stop() : instance.start())
    document.addEventListener('visibilitychange', visibility)
    instance.onFrame = () => {
      const box = labels.current
      if (!box) return
      const children = box.children
      layout.topicCenters.forEach(([x, y, z], topic) => {
        const node = children[topic]
        const point = instance.toScreen(x, y, z)
        if (!node) return
        if (!point) {
          node.style.opacity = '0'
          return
        }
        node.style.transform = `translate(${point.x}px, ${point.y}px) translate(-50%, -50%)`
        node.style.opacity = String(Math.max(0, Math.min(0.9, 3.4 - point.depth)))
      })
    }
    setReady(true)
    return () => {
      observer.disconnect()
      intersection.disconnect()
      document.removeEventListener('visibilitychange', visibility)
      instance.destroy()
      engine.current = null
    }
  }, [layout])

  useEffect(() => {
    engine.current?.setStates(starStates(layout, cards))
  }, [layout, cards])

  const drag = useRef(null)
  const pointers = useRef(new Map())
  const hoverTimer = useRef(0)

  useEffect(() => () => window.clearTimeout(hoverTimer.current), [])

  const local = (event) => {
    const rect = canvas.current.getBoundingClientRect()
    return { x: event.clientX - rect.left, y: event.clientY - rect.top }
  }

  const onMove = (event) => {
    const instance = engine.current
    if (!instance) return
    const point = local(event)
    const map = pointers.current
    if (map.has(event.pointerId)) {
      const previous = map.get(event.pointerId)
      map.set(event.pointerId, point)
      if (map.size === 2) {
        const [a, b] = [...map.values()]
        const distance = Math.hypot(a.x - b.x, a.y - b.y)
        if (drag.current?.pinch) instance.cam.dist = clampDist(instance.cam.dist * (drag.current.pinch / distance))
        if (drag.current) drag.current.pinch = distance
        return
      }
      if (drag.current) {
        const dx = point.x - previous.x
        const dy = point.y - previous.y
        drag.current.moved += Math.abs(dx) + Math.abs(dy)
        instance.cam.yaw -= dx * 0.006
        instance.cam.pitch = Math.max(0.12, Math.min(1.45, instance.cam.pitch + dy * 0.005))
      }
      return
    }
    if (event.pointerType !== 'mouse') return
    const index = instance.pick(point.x, point.y)
    instance.hover = index
    window.clearTimeout(hoverTimer.current)
    if (index < 0) {
      hoverTimer.current = window.setTimeout(() => setHover(null), 260)
      return
    }
    const word = atlas.words[index]
    hoverTimer.current = window.setTimeout(() => setHover({ word, x: point.x, y: point.y }), 120)
  }

  const onDown = (event) => {
    event.currentTarget.setPointerCapture(event.pointerId)
    pointers.current.set(event.pointerId, local(event))
    drag.current = { ...local(event), moved: 0 }
  }

  const onUp = (event) => {
    const instance = engine.current
    const state = drag.current
    pointers.current.delete(event.pointerId)
    if (pointers.current.size > 0) return
    drag.current = null
    if (!instance || !state || state.moved > 8) return
    const point = local(event)
    const index = instance.pick(point.x, point.y, event.pointerType === 'mouse' ? 16 : 26)
    if (index < 0) return
    const word = atlas.words[index]
    if (event.pointerType !== 'mouse' && hover?.word.id !== word.id) {
      instance.hover = index
      setHover({ word, x: point.x, y: point.y })
      return
    }
    instance.flyTo(index)
    window.setTimeout(() => onOpenWord(word.id), 350)
  }

  const onWheel = (event) => {
    const instance = engine.current
    if (!instance) return
    instance.cam.dist = clampDist(instance.cam.dist * Math.exp(event.deltaY * 0.0012))
  }

  useEffect(() => {
    const element = canvas.current
    if (!element) return undefined
    const stop = (event) => event.preventDefault()
    element.addEventListener('wheel', stop, { passive: false })
    return () => element.removeEventListener('wheel', stop)
  }, [])

  const lit = useMemo(() => layout.ids.reduce((sum, id) => sum + (cards[id] ? 1 : 0), 0), [layout, cards])

  const download = () => {
    const element = canvas.current
    if (!element) return
    const link = document.createElement('a')
    link.download = 'word-atlas-galaxy.png'
    link.href = element.toDataURL('image/png')
    link.click()
  }

  return (
    <div className="wa-galaxy-page">
      <header className="wa-galaxy-head">
        <div>
          <p className="wa-eyebrow">词汇星图 · Galaxy</p>
          <h1>学过的词，汇成你的星图。</h1>
        </div>
        <div className="wa-galaxy-legend" aria-hidden="true">
          <span><i className="is-dust" />未学</span>
          <span><i className="is-learning" />学习中</span>
          <span><i className="is-mastered" />已掌握</span>
        </div>
      </header>

      <div className={`wa-galaxy ${ready ? 'is-ready' : ''}`}>
        <canvas
          ref={canvas}
          onPointerMove={onMove}
          onPointerDown={onDown}
          onPointerUp={onUp}
          onPointerCancel={onUp}
          onPointerLeave={() => {
            if (engine.current) engine.current.hover = -1
            setHover(null)
          }}
          onWheel={onWheel}
          role="img"
          aria-label={`词汇星图：${layout.n} 颗星，已点亮 ${lit} 颗。可拖动旋转、滚动缩放、点击星星打开词条。`}
          tabIndex={0}
          onKeyDown={(event) => {
            const instance = engine.current
            if (!instance) return
            if (event.key === 'ArrowLeft') instance.cam.yaw -= 0.12
            if (event.key === 'ArrowRight') instance.cam.yaw += 0.12
            if (event.key === 'ArrowUp') instance.cam.pitch = Math.min(1.45, instance.cam.pitch + 0.08)
            if (event.key === 'ArrowDown') instance.cam.pitch = Math.max(0.12, instance.cam.pitch - 0.08)
            if (event.key === '+' || event.key === '=') instance.cam.dist = clampDist(instance.cam.dist * 0.85)
            if (event.key === '-') instance.cam.dist = clampDist(instance.cam.dist * 1.18)
          }}
        />
        <div className="wa-galaxy-labels" ref={labels} aria-hidden="true">
          {atlas.topics.map((topic, index) => (
            <span key={topic.slug} style={{ '--c': TOPIC_COLORS[index % TOPIC_COLORS.length] }}>{topic.zh}</span>
          ))}
        </div>

        {hover ? (
          <button
            type="button"
            className="wa-galaxy-tip"
            style={{ transform: `translate(${Math.min(hover.x + 18, (canvas.current?.clientWidth ?? 0) - 260)}px, ${Math.max(8, hover.y - 46)}px)` }}
            onClick={() => onOpenWord(hover.word.id)}
          >
            <WordImage id={hover.word.id} word={hover.word.word} className="wa-galaxy-tip-img" />
            <span>
              <b lang="en">{hover.word.word}</b>
              <small>{hover.word.zh}</small>
            </span>
          </button>
        ) : null}

        <div className="wa-galaxy-hud">
          <p><b>{lit.toLocaleString('en-US')}</b> / {layout.n.toLocaleString('en-US')} 颗星已点亮</p>
        </div>
        <div className="wa-galaxy-controls">
          <button type="button" className="wa-icon-btn" onClick={() => engine.current && (engine.current.cam.dist = clampDist(engine.current.cam.dist * 0.8))} aria-label="放大">
            <Icon name="plus" size={18} />
          </button>
          <button type="button" className="wa-icon-btn" onClick={() => engine.current && (engine.current.cam.dist = clampDist(engine.current.cam.dist * 1.25))} aria-label="缩小">
            <Icon name="minus" size={18} />
          </button>
          <button type="button" className="wa-icon-btn" onClick={() => { engine.current?.reset(); engine.current?.replayIntro() }} aria-label="回到全景">
            <Icon name="rotateCcw" size={17} />
          </button>
          <button
            type="button"
            className="wa-icon-btn"
            onClick={() => {
              const ids = Object.keys(cards)
              const pick = ids[Math.floor(Math.random() * ids.length)] ?? atlas.words[0]?.id
              const index = pick ? layout.index.get(pick) : undefined
              if (index !== undefined) engine.current?.flyTo(index)
            }}
            aria-label="飞到一颗已点亮的星"
          >
            <Icon name="crosshair" size={17} />
          </button>
          <button type="button" className="wa-icon-btn" onClick={download} aria-label="保存星图图片">
            <Icon name="share" size={17} />
          </button>
        </div>
        <p className="wa-galaxy-hint">拖动旋转 · 滚动缩放 · 点击星星打开词条</p>
      </div>
    </div>
  )
}
