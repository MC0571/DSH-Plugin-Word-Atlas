#!/usr/bin/env node
/**
 * 从词光官方站点同步书房索引（短文 / 书目）。
 * 正文、章节和封面不打包，由 Host 在运行时按需代理/缓存。
 */
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const HERE = dirname(fileURLToPath(import.meta.url))
const ROOT = join(HERE, '..')
const BASE = process.env.WORD_ATLAS_SITE || 'https://0xlei.tech/words'
const headers = { 'User-Agent': 'word-atlas-dsh/0.5.0', Accept: 'application/json' }

async function download(path) {
  const response = await fetch(`${BASE}${path}`, { headers })
  if (!response.ok) throw new Error(`${path} → HTTP ${response.status}`)
  return response.json()
}

const readings = await download('/atlas/extras/readings/index.json')
if (!Array.isArray(readings.items) || readings.items.length === 0) throw new Error('readings/index.json 结构不符')
const books = await download('/books/index.json')
if (!Array.isArray(books.books)) throw new Error('books/index.json 结构不符')

await mkdir(join(ROOT, 'data'), { recursive: true })
await writeFile(join(ROOT, 'data', 'readings-index.json'), JSON.stringify(readings))
await writeFile(join(ROOT, 'data', 'books-index.json'), JSON.stringify(books))
console.log(`readings: ${readings.items.length} 篇 · books: ${books.books.length} 本`)
