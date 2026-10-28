import { useEffect } from 'react'

/**
 * Detect the macOS Desktop window chrome overlay: when the DSH sidebar is
 * collapsed, the plugin page starts at the window origin and must leave room
 * for the traffic lights (and keep a draggable strip). Pattern reused from
 * qiaomu-rss-dsh.
 */
export function detectTitlebar({ protocol, platform, left, top, fullscreen = false }) {
  return (
    protocol === 'dsh-app:' &&
    /Mac/.test(String(platform || '')) &&
    Number(left) < 110 &&
    Number(top) < 45 &&
    !fullscreen
  )
}

/** Apply data-titlebar on the plugin root and follow sidebar/window changes. */
export function useTitlebarInset(ref, dep) {
  useEffect(() => {
    const root = ref.current
    if (!root) return undefined
    const update = () => {
      const rect = root.getBoundingClientRect()
      const active = detectTitlebar({
        protocol: window.location.protocol,
        platform: navigator.platform,
        left: rect.left,
        top: rect.top,
        fullscreen: Boolean(document.fullscreenElement),
      })
      root.dataset.titlebar = active ? 'true' : 'false'
    }
    update()
    const observer = typeof ResizeObserver === 'function' ? new ResizeObserver(update) : null
    observer?.observe(root)
    window.addEventListener('resize', update)
    document.addEventListener('fullscreenchange', update)
    return () => {
      observer?.disconnect()
      window.removeEventListener('resize', update)
      document.removeEventListener('fullscreenchange', update)
      delete root.dataset.titlebar
    }
  }, [ref, dep])
}
