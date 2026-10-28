/**
 * 词光 Agent 工具：让模型查词、按 CEFR/话题搜词。
 * 数据与页面共用同一份词库（优先本机仓库，其次插件内置 data/）。
 */
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

const CEFR_FALLBACK = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']

/**
 * Build a registry-ready ToolDefinition without importing @deepseek-ai/dsh-tools.
 * A linked bundle lives outside the profile, where the Host cannot resolve
 * Harness packages, so this returns the same normalized object `defineTool`
 * would: raw JSON-Schema parameters plus an output schema/render pair.
 */
function defineLocalTool({ name, description, parameters, output, execute }) {
  const properties = {}
  const required = []
  for (const [key, spec] of Object.entries(parameters)) {
    const node = { type: spec.type }
    if (spec.description) node.description = spec.description
    if (Array.isArray(spec.enum)) node.enum = spec.enum
    properties[key] = node
    if (spec.required === true) required.push(key)
  }
  const parameterSchema = { type: 'object', properties }
  if (required.length > 0) parameterSchema.required = required
  return {
    name,
    description,
    parameters: parameterSchema,
    output: {
      schema: { type: 'string' },
      render: (_args, value) => output(value),
    },
    async execute(args) {
      return execute(args || {})
    },
  }
}

export function createAtlasTools({ dataDir, contentDir, mediaBase }) {
  const indexPath = () => (contentDir ? join(contentDir, 'public', 'atlas', 'index.json') : join(dataDir, 'index.json'))
  const entriesDir = () => (contentDir ? join(contentDir, 'public', 'atlas', 'entries') : join(dataDir, 'entries'))

  let indexPromise
  const entryCache = new Map()
  const chunkPending = new Map()

  function loadIndex() {
    if (!indexPromise) {
      indexPromise = readFile(indexPath(), 'utf8')
        .then((raw) => JSON.parse(raw))
        .catch((error) => {
          indexPromise = undefined
          throw error
        })
    }
    return indexPromise
  }

  async function loadEntry(id) {
    if (entryCache.has(id)) return entryCache.get(id)
    const index = await loadIndex()
    const order = index.words.findIndex((row) => row[0] === id)
    if (order < 0) return undefined
    const chunk = Math.floor(order / (index.chunk || 100))
    let pending = chunkPending.get(chunk)
    if (!pending) {
      pending = readFile(join(entriesDir(), `${chunk}.json`), 'utf8')
        .then((raw) => {
          for (const entry of JSON.parse(raw)) entryCache.set(entry.id, entry)
          chunkPending.delete(chunk)
        })
        .catch((error) => {
          chunkPending.delete(chunk)
          throw error
        })
      chunkPending.set(chunk, pending)
    }
    await pending
    return entryCache.get(id)
  }

  const mediaUrl = (id) => `${mediaBase}/atlas/img/${id}.webp`

  const ipaText = (value) => {
    const raw = String(value || '').trim()
    if (!raw) return ''
    return raw.startsWith('/') ? raw : `/${raw}/`
  }

  function topicLabel(index, topicIndex) {
    return index.topics?.[topicIndex]?.[1] || index.topics?.[topicIndex]?.[0] || ''
  }

  function topicMatches(index, topicIndex, wanted) {
    const topic = index.topics?.[topicIndex]
    if (!topic) return false
    const slug = topic[0] || ''
    const zh = topic[1] || ''
    return slug.toLowerCase() === wanted || zh.includes(wanted) || wanted.includes(slug)
  }

  async function formatEntry(word) {
    const index = await loadIndex()
    const needle = word.trim().toLowerCase()
    let row = index.words.find((candidate) => candidate[0] === needle)
    if (!row) row = index.words.find((candidate) => String(candidate[1]).toLowerCase() === needle)
    if (!row) {
      const fuzzy = index.words
        .filter((candidate) => String(candidate[1]).toLowerCase().startsWith(needle) || String(candidate[1]).toLowerCase().includes(needle))
        .slice(0, 8)
      if (fuzzy.length === 0) {
        throw new Error(`没有找到 "${word}"。可以先用 word_atlas_search 搜索中文释义或词根，例如 query="原则"。`)
      }
      const lines = fuzzy.map((candidate) => `- ${candidate[1]} /${candidate[3]}/ ${CEFR_FALLBACK[candidate[4]] || ''} ${candidate[2]}`)
      return `没有完全匹配 "${word}"，相近词条：\n${lines.join('\n')}\n再次调用 word_atlas_lookup 时使用上面的英文单词。`
    }
    const [id, headword, zhSummary, ipa, cefrIndex, topicIndex] = row
    const entry = await loadEntry(id)
    const cefr = CEFR_FALLBACK[cefrIndex] || ''
    const topic = topicLabel(index, topicIndex)
    const lines = [`# ${headword} ${ipaText(ipa)}`.trim(), `${cefr}${topic ? ` · ${topic}` : ''}${zhSummary ? ` · ${zhSummary}` : ''}`, '']

    if (entry?.uk || entry?.us) {
      lines.push(`发音：英 ${entry.uk || '-'} · 美 ${entry.us || '-'}`)
    }
    if (entry?.senses?.length) {
      lines.push('释义：')
      for (const sense of entry.senses) {
        lines.push(`- ${sense.pos ? `${sense.pos} ` : ''}${sense.zh}${sense.en ? ` — ${sense.en}` : ''}`)
      }
    }
    if (entry?.ex?.length) {
      lines.push('例句：')
      entry.ex.forEach((example, i) => lines.push(`${i + 1}. ${example.en}${example.zh ? ` — ${example.zh}` : ''}`))
    }
    if (entry?.col?.length) lines.push(`搭配：${entry.col.join('；')}`)
    if (entry?.fam?.length) lines.push(`词族：${entry.fam.join('；')}`)
    if (entry?.syn?.length) lines.push(`近义：${entry.syn.join('；')}`)
    if (entry?.ant?.length) lines.push(`反义：${entry.ant.join('；')}`)
    if (entry?.tip) lines.push(`提示：${entry.tip}`)
    if (entry?.note) lines.push(`用法提醒：${entry.note}`)
    if (entry?.m !== undefined && (entry.m & 1)) lines.push(`插画：${mediaUrl(id)}`)
    lines.push('')
    lines.push('数据来自词光 · Word Atlas（CC BY 4.0）。')
    return lines.join('\n')
  }

  async function searchWords({ query, cefr, topic, limit } = {}) {
    const index = await loadIndex()
    const wanted = typeof query === 'string' ? query.trim().toLowerCase() : ''
    const level = typeof cefr === 'string' ? cefr.trim().toUpperCase() : ''
    const wantedTopic = typeof topic === 'string' ? topic.trim() : ''
    const cap = Math.max(1, Math.min(Number(limit) || 10, 20))
    const matches = []
    index.words.forEach((row, order) => {
      const [id, headword, zh, ipa, cefrIndex, topicIndex] = row
      if (level && CEFR_FALLBACK[cefrIndex] !== level) return
      if (wantedTopic && !topicMatches(index, topicIndex, wantedTopic)) return
      if (wanted) {
        const haystack = `${headword} ${zh} ${ipa}`.toLowerCase()
        if (!haystack.includes(wanted)) return
      }
      matches.push({ id, headword, zh, ipa, cefr: CEFR_FALLBACK[cefrIndex] || '', topic: topicLabel(index, topicIndex), order })
    })
    if (matches.length === 0) {
      throw new Error('没有匹配的词条。可以换一个中文关键词、去掉 CEFR/话题限制，或先不传 query 浏览某个话题。')
    }
    const shown = matches.slice(0, cap)
    const lines = shown.map((item, i) => `${i + 1}. ${item.headword} ${ipaText(item.ipa)} · ${item.cefr}${item.topic ? ` · ${item.topic}` : ''} · ${item.zh}`)
    return [
      `找到 ${matches.length} 个词条${matches.length > shown.length ? `，显示前 ${shown.length} 个` : ''}：`,
      ...lines,
      '',
      '用 word_atlas_lookup 查看某个词的完整词条。',
    ].join('\n')
  }

  return [
    defineLocalTool({
      name: 'word_atlas_lookup',
      description:
        'Look up one IELTS vocabulary entry in the open Word Atlas (词光) dataset: UK/US IPA, CEFR level, topic, Chinese and English senses, examples, collocations, word family, synonyms/antonyms, usage tip and illustration URL. Data: Word Atlas contributors, CC BY 4.0.',
      parameters: {
        word: { type: 'string', required: true, description: 'English headword or Word Atlas entry id, e.g. "abandon" or "principle".' },
      },
      output: (value) => [{ type: 'text', text: value }],
      execute: async (args) => formatEntry(String(args.word || '')),
    }),
    defineLocalTool({
      name: 'word_atlas_search',
      description:
        'Search the Word Atlas IELTS vocabulary index (7,298 words, 19 topics, CEFR A1–C2) by English word, Chinese meaning or IPA. Optionally filter by CEFR level or topic. Returns matching headwords with level, topic and a short sense summary.',
      parameters: {
        query: { type: 'string', description: 'Case-insensitive match against headword, Chinese meaning or IPA. Omit to browse a level/topic.' },
        cefr: { type: 'string', description: 'Optional CEFR level: A1, A2, B1, B2, C1 or C2.' },
        topic: { type: 'string', description: 'Optional topic slug or Chinese label, e.g. environment, work, 教育, 科技.' },
        limit: { type: 'number', description: 'Max entries to return (default 10, cap 20).' },
      },
      output: (value) => [{ type: 'text', text: value }],
      execute: async (args) => searchWords(args || {}),
    }),
  ]
}
