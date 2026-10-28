/**
 * 星图布局：移植自上游词光 src/galaxy/layout.ts（MIT，Word Atlas contributors）。
 * 每个 IELTS 话题一条旋臂，CEFR 越高的词越靠外。
 */
import { hashSeed } from '../lookup.js'

export const TOPIC_COLORS = [
  '#f2c46d', '#ef8f6b', '#8fd0c8', '#9fb8ff', '#9be38f', '#ff9fa8', '#f7d9a8', '#c6a7ff', '#ffd36b', '#7fc4ff',
  '#ffb38a', '#86e0b5', '#d8c3a5', '#b5e48c', '#ffe6b0', '#ff8fc3', '#a8d8ff', '#ffcf7a', '#e0b0ff',
]

const rgb = (hex) => [1, 3, 5].map((index) => parseInt(hex.slice(index, index + 2), 16) / 255)

function rand(seed) {
  let state = seed >>> 0 || 1
  return () => {
    state = (state + 0x6d2b79f5) >>> 0
    let value = state
    value = Math.imul(value ^ (value >>> 15), value | 1)
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61)
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296
  }
}

export function layoutGalaxy(atlas) {
  const words = atlas.words
  const n = words.length
  const positions = new Float32Array(n * 3)
  const colors = new Float32Array(n * 3)
  const seeds = new Float32Array(n)
  const topicIndex = new Map(atlas.topics.map((topic, index) => [topic.slug, index]))
  const cefrIndex = new Map(atlas.cefr.map((level, index) => [level, index]))
  const arms = atlas.topics.length
  const counts = new Array(arms).fill(0)
  words.forEach((word) => {
    const index = topicIndex.get(word.topic) ?? 0
    counts[index] += 1
  })
  const average = n / arms
  words.forEach((word, index) => {
    const random = rand(hashSeed(word.id))
    const gauss = () => (random() + random() + random() - 1.5) / 1.5
    const level = cefrIndex.get(word.cefr) ?? 2
    const radius = 0.1 + (level / 5) * 0.72 + random() * 0.16
    const topic = topicIndex.get(word.topic) ?? 0
    const arm = (topic / arms) * Math.PI * 2
    const spread = Math.sqrt(Math.max(0.6, counts[topic] / average))
    const angle = arm + radius * 3.4 + gauss() * (0.05 + 0.03 / radius) * spread
    const thick = 0.05 * (1 - radius * 0.6) * spread
    positions[index * 3] = Math.cos(angle) * radius
    positions[index * 3 + 1] = gauss() * thick
    positions[index * 3 + 2] = Math.sin(angle) * radius
    const [cr, cg, cb] = rgb(TOPIC_COLORS[topic % TOPIC_COLORS.length])
    colors.set([cr, cg, cb], index * 3)
    seeds[index] = random()
  })
  const mid = 0.62
  return {
    n,
    positions,
    colors,
    seeds,
    ids: words.map((word) => word.id),
    index: new Map(words.map((word, index) => [word.id, index])),
    topicCenters: atlas.topics.map((_, topic) => {
      const angle = (topic / arms) * Math.PI * 2 + mid * 3.4
      return [Math.cos(angle) * mid, 0, Math.sin(angle) * mid]
    }),
  }
}
