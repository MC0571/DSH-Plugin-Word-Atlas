/** 生成单词分享卡（Canvas → PNG 下载）。 */
import { imgUrl } from './data.js'

const W = 1080
const H = 1350

function loadImage(src) {
  return new Promise((resolve) => {
    const image = new Image()
    image.crossOrigin = 'anonymous'
    image.onload = () => resolve(image)
    image.onerror = () => resolve(null)
    image.src = src
  })
}

function roundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath()
  if (typeof ctx.roundRect === 'function') ctx.roundRect(x, y, width, height, radius)
  else {
    const r = Array.isArray(radius) ? radius[0] : radius
    ctx.moveTo(x + r, y)
    ctx.arcTo(x + width, y, x + width, y + height, r)
    ctx.arcTo(x + width, y + height, x, y + height, r)
    ctx.arcTo(x, y + height, x, y, r)
    ctx.arcTo(x, y, x + width, y, r)
    ctx.closePath()
  }
}

function wrap(ctx, text, maxWidth, maxLines = 3) {
  const chars = Array.from(String(text || ''))
  const lines = []
  let line = ''
  for (const char of chars) {
    const next = line + char
    if (ctx.measureText(next).width > maxWidth && line) {
      lines.push(line)
      line = char
      if (lines.length >= maxLines) break
    } else {
      line = next
    }
  }
  if (lines.length < maxLines && line) lines.push(line)
  return lines
}

export async function shareWordCard({ entry, word, accent = 'uk' }) {
  const canvas = document.createElement('canvas')
  canvas.width = W
  canvas.height = H
  const ctx = canvas.getContext('2d')
  if (!ctx) return false

  const image = entry?.m & 1 ? await loadImage(imgUrl(word.id)) : null
  const background = ctx.createLinearGradient(0, 0, W, H)
  background.addColorStop(0, '#0d1424')
  background.addColorStop(1, '#1b2238')
  ctx.fillStyle = background
  ctx.fillRect(0, 0, W, H)

  // subtle stardust
  let seed = 7
  const random = () => {
    seed = (seed * 16807) % 2147483647
    return seed / 2147483647
  }
  for (let index = 0; index < 90; index += 1) {
    ctx.fillStyle = `rgba(190, 205, 255, ${0.08 + random() * 0.18})`
    ctx.beginPath()
    ctx.arc(random() * W, random() * H, random() * 2.2 + 0.4, 0, Math.PI * 2)
    ctx.fill()
  }

  // card
  ctx.fillStyle = '#f7f4ec'
  roundRect(ctx, 90, 90, W - 180, H - 180, 44)
  ctx.fill()

  // illustration
  const artX = 190
  const artY = 190
  const artSize = 700
  ctx.save()
  roundRect(ctx, artX, artY, artSize, artSize, 26)
  ctx.clip()
  if (image) {
    ctx.drawImage(image, artX, artY, artSize, artSize)
  } else {
    ctx.fillStyle = '#e7e0d2'
    ctx.fillRect(artX, artY, artSize, artSize)
    ctx.fillStyle = '#a88c54'
    ctx.font = '700 220px system-ui, sans-serif'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText((word.word || '?')[0].toUpperCase(), artX + artSize / 2, artY + artSize / 2)
  }
  ctx.restore()

  const left = 190
  let y = 970
  ctx.textAlign = 'left'
  ctx.textBaseline = 'alphabetic'
  ctx.fillStyle = '#1a1a1a'
  ctx.font = '700 84px Georgia, "Songti SC", serif'
  const headword = entry?.w || word.word
  ctx.fillText(headword.length > 16 ? `${headword.slice(0, 15)}…` : headword, left, y)

  const ipa = accent === 'us' ? entry?.us || entry?.uk : entry?.uk || entry?.us
  if (ipa) {
    ctx.fillStyle = '#8a8377'
    ctx.font = '400 28px ui-monospace, Menlo, monospace'
    ctx.fillText(ipa, left, y + 46)
  }

  y += 112
  const senses = (entry?.senses || []).slice(0, 2)
  ctx.font = '500 34px system-ui, "PingFang SC", sans-serif'
  for (const sense of senses) {
    const text = `${sense.pos || ''} ${sense.zh || ''}`.trim()
    const lines = wrap(ctx, text, W - 380, 2)
    ctx.fillStyle = '#2d2a26'
    for (const line of lines) {
      ctx.fillText(line, left, y)
      y += 46
    }
    y += 6
  }

  if (entry?.ex?.[0]?.en) {
    y += 8
    ctx.fillStyle = '#55504a'
    ctx.font = 'italic 28px Georgia, serif'
    const lines = wrap(ctx, entry.ex[0].en, W - 380, 2)
    for (const line of lines) {
      ctx.fillText(line, left, y)
      y += 40
    }
    if (entry.ex[0].zh) {
      ctx.fillStyle = '#8a8377'
      ctx.font = '400 24px system-ui, "PingFang SC", sans-serif'
      const zhLines = wrap(ctx, entry.ex[0].zh, W - 380, 1)
      for (const line of zhLines) ctx.fillText(line, left, y + 8)
    }
  }

  ctx.fillStyle = '#a39a8b'
  ctx.font = '400 22px system-ui, sans-serif'
  ctx.textAlign = 'right'
  ctx.fillText('词光 · Word Atlas · CC BY 4.0', W - 150, H - 150)

  return new Promise((resolve) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        resolve(false)
        return
      }
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.download = `word-atlas-${word.id}.png`
      link.href = url
      link.click()
      setTimeout(() => URL.revokeObjectURL(url), 2000)
      resolve(true)
    }, 'image/png')
  })
}
