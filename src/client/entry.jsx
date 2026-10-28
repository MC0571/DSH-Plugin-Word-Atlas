import React from 'react'
import css from './styles.css'
import { App } from './App.jsx'
import { DetailModal } from './Detail.jsx'
import { ReviewView } from './Review.jsx'
import { WordGrid } from './Browse.jsx'

const PLUGIN_ID = 'word-atlas-dsh'
const PANEL_ID = 'word-atlas'

function PanelIcon({ size = 18, active = false }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={active ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3.2l2.25 4.8 5.2.72-3.78 3.65.93 5.19L12 15.1l-4.6 2.46.93-5.19-3.78-3.65 5.2-.72z" />
    </svg>
  )
}

export const inject = ['slots']

/** Internal surface for the development smoke test; not part of the client API. */
export const __test = { App, DetailModal, ReviewView, WordGrid }

export function apply(ctx) {
  if (typeof document !== 'undefined') {
    const style = document.createElement('style')
    style.setAttribute('data-plugin', PLUGIN_ID)
    style.textContent = css
    document.head.appendChild(style)
    ctx.effect(() => () => style.remove())
  }

  ctx.effect(() =>
    ctx.slots.inject('main', () =>
      ctx.slots.register({ name: 'main', key: PANEL_ID }, App),
    ),
  )

  ctx.effect(() =>
    ctx.slots.inject('sidebar.panellist', () =>
      ctx.slots.register(
        {
          name: 'sidebar.panellist',
          id: PANEL_ID,
          order: 22,
          label: () => '词光 · Word Atlas',
        },
        PanelIcon,
      ),
    ),
  )
}
