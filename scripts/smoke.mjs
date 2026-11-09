/**
 * Development smoke test (not shipped to the plugin runtime):
 * 1. load client.js through a fake __ModuleLoader__, render every view once with
 *    react-dom/server, and assert slot registrations;
 * 2. start the Host route handler on a throwaway HTTP server and exercise every
 *    route, including byte ranges and progress save/read.
 *
 * Run: node scripts/smoke.mjs
 */
import assert from 'node:assert/strict'
import { createServer } from 'node:http'
import { readFileSync, rmSync } from 'node:fs'
import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import * as dataApi from '../src/client/data.js'
import { hashSeed } from '../src/client/lookup.js'

const require = createRequire(import.meta.url)
const here = dirname(fileURLToPath(import.meta.url))
const root = join(here, '..')

/* ---------------------------------------------------------------- client */

const React = require('react')
const { renderToStaticMarkup } = require('react-dom/server')

let definition
globalThis.window = {
  __ModuleLoader__: {
    load(value) {
      definition = value
    },
  },
}
new Function('window', readFileSync(join(root, 'client.js'), 'utf8'))(globalThis.window)

assert.ok(definition, 'client.js must call __ModuleLoader__.load')
assert.equal(definition.id, 'word-atlas-dsh')
const clientRuntime = definition.factory((name) => {
  if (name === 'react') return React
  throw new Error(`unexpected client require: ${name}`)
})
assert.ok(Array.isArray(clientRuntime.inject) && clientRuntime.inject.includes('slots'))

const registrations = []
const fakeCtx = {
  logger: { info() {}, warn() {} },
  effect(callback) {
    const disposer = callback()
    return typeof disposer === 'function' ? disposer : () => {}
  },
  slots: {
    inject(_owner, callback) {
      return callback()
    },
    register(options, component) {
      registrations.push({ options, component })
      return () => {}
    },
  },
}
clientRuntime.apply(fakeCtx)
assert.equal(registrations.length, 2)
const main = registrations.find((entry) => entry.options.name === 'main')
const sidebar = registrations.find((entry) => entry.options.name === 'sidebar.panellist')
assert.ok(main && main.options.key === 'word-atlas')
assert.ok(sidebar && sidebar.options.id === 'word-atlas')
assert.equal(sidebar.options.label(), '词光 · Word Atlas')

function render(element, label) {
  const html = renderToStaticMarkup(element)
  assert.ok(html.length > 0, `${label} must render markup`)
  return html
}

const App = main.component
const Icon = sidebar.component
render(React.createElement(App), 'App')
render(React.createElement(Icon, { size: 18, active: true }), 'panel icon')
render(React.createElement(Icon, { size: 18, active: false }), 'panel icon (inactive)')

/* view-level renders with a small fixture atlas */
const fixtureWord = {
  id: 'library',
  word: 'library',
  zh: 'n. 图书馆；藏书室',
  ipa: '/ˈlaɪbrəri/',
  cefr: 'A1',
  topic: 'education',
  topicZh: '教育',
  media: 31,
  order: 0,
}
const fixtureWords = [
  fixtureWord,
  { id: 'abandon', word: 'abandon', zh: 'v. 放弃；抛弃', ipa: '/əˈbændən/', cefr: 'B2', topic: 'society', topicZh: '社会', media: 31, order: 1 },
  { id: 'study', word: 'study', zh: 'v. 学习；研究', ipa: '/ˈstʌdi/', cefr: 'A1', topic: 'education', topicZh: '教育', media: 31, order: 2 },
  { id: 'principle', word: 'principle', zh: 'n. 原则；准则', ipa: '/ˈprɪnsəpəl/', cefr: 'B2', topic: 'thinking', topicZh: '思维', media: 31, order: 3 },
  { id: 'environment', word: 'environment', zh: 'n. 环境；自然环境', ipa: '/ɪnˈvaɪrənmənt/', cefr: 'A2', topic: 'environment', topicZh: '环境', media: 31, order: 4 },
  { id: 'benefit', word: 'benefit', zh: 'n. 好处；益处', ipa: '/ˈbenɪfɪt/', cefr: 'B1', topic: 'economy', topicZh: '经济', media: 31, order: 5 },
]
const fixtureAtlas = {
  count: fixtureWords.length,
  chunk: 100,
  topics: [
    { slug: 'education', zh: '教育' },
    { slug: 'society', zh: '社会' },
    { slug: 'thinking', zh: '思维' },
    { slug: 'environment', zh: '环境' },
    { slug: 'economy', zh: '经济' },
  ],
  cefr: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
  words: fixtureWords,
  byId: new Map(fixtureWords.map((word) => [word.id, word])),
}
const fixtureProgress = {
  v: 1,
  cards: {},
  bookmarks: [],
  days: {},
  mistakes: [],
  typing: [],
  session: null,
  settings: { accent: 'uk', dailyNew: 10, retention: 0.9, startLevel: 0, spell: true, autoplay: true },
}
const testSurface = clientRuntime.__test
assert.ok(testSurface, 'entry must expose the __test surface')

let html = render(
  React.createElement(testSurface.WordGrid, {
    atlas: fixtureAtlas,
    words: fixtureAtlas.words,
    progress: fixtureProgress,
    onOpen() {},
    onToggleBookmark() {},
  }),
  'WordGrid',
)
assert.ok(html.includes('library'))

html = render(React.createElement(testSurface.ReviewView, { atlas: fixtureAtlas, progress: fixtureProgress, onExit() {} }), 'ReviewView')
assert.ok(html.includes('今日复习'))

const futureCard = { due: Date.now() + 86400000, s: 3, d: 5, reps: 2, lapses: 0, st: 2, last: Date.now() - 86400000 }
const learnedProgress = {
  ...fixtureProgress,
  cards: Object.fromEntries(fixtureAtlas.words.map((word) => [word.id, futureCard])),
}
html = render(React.createElement(testSurface.ReviewView, { atlas: fixtureAtlas, progress: learnedProgress, onStart() {} }), 'ReviewView free')
assert.ok(html.includes('自由复习已学词'))

const activeTodayProgress = {
  ...fixtureProgress,
  session: {
    id: 'active-today',
    started: Date.now(),
    steps: [{ id: 'library', kind: 'intro' }],
    index: 0,
    graded: {},
    newIds: ['library'],
    reviewIds: [],
    mode: 'today',
  },
}
html = render(React.createElement(testSurface.ReviewView, { atlas: fixtureAtlas, progress: activeTodayProgress, onStart() {} }), 'ReviewView active')
assert.ok(html.includes('继续当前学习'))
assert.ok(html.includes('返回今日'))

const dueNow = Date.now() - 1000
const reviewProgress = {
  ...fixtureProgress,
  cards: Object.fromEntries(
    fixtureAtlas.words.map((word, index) => [
      word.id,
      { due: dueNow + index, s: 3, d: 5, reps: 2, lapses: 0, st: 2, last: dueNow - 86400000 },
    ]),
  ),
}
const reviewSession = testSurface.session.buildSession(fixtureAtlas, reviewProgress, reviewProgress.settings, { reviewOnly: true })
assert.ok(reviewSession.steps.length > 0)
assert.ok(reviewSession.steps.every((step) => step.kind !== 'intro'), 'review session must not contain intro cards')
assert.ok(
  reviewSession.steps.every((step) => step.kind === 'spell' || (Array.isArray(step.options) && step.options.length > 0)),
  'every review step must be a test (spell or options quiz)',
)

html = render(
  React.createElement(testSurface.DetailModal, {
    atlas: fixtureAtlas,
    word: fixtureWord,
    progress: fixtureProgress,
    onClose() {},
    onPrev() {},
    onNext() {},
    hasPrev: false,
    hasNext: false,
    onOpenWord() {},
    onToggleBookmark() {},
    onMarkLearned() {},
  }),
  'DetailModal',
)
assert.ok(html.includes('library'))

html = render(React.createElement(testSurface.Settings, { atlas: fixtureAtlas, progress: fixtureProgress, onOpenWord() {} }), 'Settings')
assert.ok(html.includes('离线素材'))
assert.ok(html.includes('导出备份'))
assert.ok(html.includes('过去 20 周'))

html = render(
  React.createElement(testSurface.Today, {
    atlas: fixtureAtlas,
    progress: fixtureProgress,
    onStart() {},
    onOpenWord() {},
    onOpenLevel() {},
    onOpenTopic() {},
  }),
  'Today',
)
assert.ok(html.includes('brand/hero.webp'))
assert.ok(html.includes('按雅思话题探索'))
assert.ok(html.includes('学习路线'))

const sessionApi = testSurface.session
const builtSession = sessionApi.buildSession(fixtureAtlas, fixtureProgress, fixtureProgress.settings, {})
assert.ok(builtSession.steps.length > 0)
assert.equal(builtSession.steps[0].kind, 'intro')
const quizStep = builtSession.steps.find((step) => step.kind !== 'intro')
assert.ok(quizStep && Array.isArray(quizStep.options))
let sessionProgress = { ...fixtureProgress, session: builtSession }
sessionProgress = sessionApi.answerSession(sessionProgress, fixtureAtlas, quizStep, true, 3, quizStep.options[0], fixtureProgress.settings)
assert.equal(sessionProgress.session.pending.correct, true)
assert.ok(sessionProgress.cards[quizStep.id])
const advanced = sessionApi.advanceSession(sessionProgress, 3)
assert.equal(advanced.session.index, 1)
assert.equal(sessionApi.sessionStats({ ...builtSession, graded: { library: 3, study: 1 } }).accuracy, 50)
assert.ok(sessionApi.todayPlan(fixtureAtlas, fixtureProgress, fixtureProgress.settings).fresh.length > 0)

/* startLevel 必须真的跳过更简单的级别（0=A1 … 5=C2） */
const b2Settings = { ...fixtureProgress.settings, startLevel: 3, dailyNew: 2 }
const b2Plan = sessionApi.todayPlan(fixtureAtlas, { ...fixtureProgress, settings: b2Settings }, b2Settings)
assert.equal(b2Plan.fresh.length, 2)
assert.ok(
  b2Plan.fresh.every((id) => fixtureAtlas.cefr.indexOf(fixtureAtlas.byId.get(id).cefr) >= 3),
  `startLevel=3 must skip easier levels, got ${b2Plan.fresh.join(',')}`,
)
const b1Settings = { ...fixtureProgress.settings, startLevel: 2, dailyNew: 1 }
const b1Plan = sessionApi.todayPlan(fixtureAtlas, { ...fixtureProgress, settings: b1Settings }, b1Settings)
assert.ok(
  fixtureAtlas.cefr.indexOf(fixtureAtlas.byId.get(b1Plan.fresh[0]).cefr) >= 2,
  `startLevel=2 must skip A1/A2, got ${b1Plan.fresh.join(',')}`,
)

/* cefrRankOf：标准词库位次、旧 fixture 的字符串回退与异常输入必须一致（0=A1 … 5=C2，未知=-1） */
const rankFixture = { cefr: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] }
assert.equal(dataApi.cefrRankOf(rankFixture, { cefr: 'A1' }), 0)
assert.equal(dataApi.cefrRankOf(rankFixture, { cefr: 'B2' }), 3)
assert.equal(dataApi.cefrRankOf(rankFixture, { cefr: 'B2', cefrRank: 3 }), 3)
assert.equal(dataApi.cefrRankOf(rankFixture, { cefr: 'Z9' }), -1)
assert.equal(dataApi.cefrRankOf(rankFixture, null), -1)
assert.equal(dataApi.cefrRankOf(undefined, { cefr: 'B1' }), -1)

/* normalizeIndex 写入的 cefrRank 必须与 atlas.cefr 的字符串位次一致（真实数据 7298 行均为整数索引） */
const rankIndexPayload = {
  cefr: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
  topics: [['education', '教育']],
  words: [
    ['rank-a1', 'rank-a1', 'n. A1', '/reɪŋk/', 0, 0, 31],
    ['rank-b2', 'rank-b2', 'n. B2', '/reɪŋk/', 3, 0, 31],
    ['rank-c2', 'rank-c2', 'n. C2', '/reɪŋk/', 5, 0, 31],
  ],
}
const realFetch = globalThis.fetch
try {
  globalThis.fetch = async () => ({ ok: true, json: async () => rankIndexPayload })
  const rankAtlas = await dataApi.loadAtlas()
  for (const id of ['rank-a1', 'rank-b2', 'rank-c2']) {
    const word = rankAtlas.byId.get(id)
    assert.equal(word.cefrRank, rankAtlas.cefr.indexOf(word.cefr), `${id} cefrRank must match its CEFR string`)
    assert.equal(dataApi.cefrRankOf(rankAtlas, word), word.cefrRank)
  }
} finally {
  globalThis.fetch = realFetch
}

/* Practice 学习路线：默认 startLevel=0 与 B1 起点都必须有词；高起点无词时为空 */
const practiceWords = [
  { id: 'practice-a1', word: 'practice-a1', zh: 'n. A1', ipa: '/a/', cefr: 'A1', topic: 'education', topicZh: '教育', media: 31, order: 0 },
  { id: 'practice-b1', word: 'practice-b1', zh: 'n. B1', ipa: '/b/', cefr: 'B1', topic: 'education', topicZh: '教育', media: 31, order: 1 },
  { id: 'practice-b2', word: 'practice-b2', zh: 'n. B2', ipa: '/c/', cefr: 'B2', topic: 'education', topicZh: '教育', media: 31, order: 2 },
]
const practiceAtlas = {
  ...fixtureAtlas,
  words: practiceWords,
  byId: new Map(practiceWords.map((word) => [word.id, word])),
  count: practiceWords.length,
}
for (const startLevel of [0, 2]) {
  const practiceHtml = render(
    React.createElement(testSurface.Practice, {
      atlas: practiceAtlas,
      progress: { ...fixtureProgress, settings: { ...fixtureProgress.settings, startLevel } },
    }),
    `Practice path startLevel=${startLevel}`,
  )
  assert.ok(
    practiceHtml.includes('从学习路线的前 400 个词里随机抽 10 个。'),
    `Practice path must keep words for startLevel=${startLevel}`,
  )
  assert.ok(!/wa-practice-start"[^>]*disabled/.test(practiceHtml), `Practice start must be enabled for startLevel=${startLevel}`)
}
const practiceEmptyHtml = render(
  React.createElement(testSurface.Practice, {
    atlas: practiceAtlas,
    progress: { ...fixtureProgress, settings: { ...fixtureProgress.settings, startLevel: 5 } },
  }),
  'Practice path startLevel=5',
)
assert.ok(
  practiceEmptyHtml.includes('这里还没有词，先去学几个，或换个来源。'),
  'Practice path must be empty when no word reaches startLevel=5',
)
assert.ok(/wa-practice-start"[^>]*disabled/.test(practiceEmptyHtml), 'Practice start must be disabled for startLevel=5')

/* Today「今日一词」：只从 media&1 且 B1+ 的池中选取，旧实现会退回完整词库 */
const wotdDayKey = (() => {
  const date = new Date()
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
})()
const wotdFillers = Array.from({ length: 5 }, (_, index) => ({
  id: `wotd-filler-${index}`,
  word: `wotd-filler-${index}`,
  zh: `n. filler ${index}`,
  ipa: '/f/',
  cefr: 'A1',
  topic: 'education',
  topicZh: '教育',
  media: 0,
  order: index + 1,
}))
const wotdTarget = {
  id: 'wotd-target',
  word: 'wotd-target',
  zh: 'n. target',
  ipa: '/t/',
  cefr: 'B1',
  topic: 'education',
  topicZh: '教育',
  media: 1,
  order: 0,
}
const wotdWords = [...wotdFillers]
wotdWords.splice(hashSeed(wotdDayKey) % (wotdFillers.length + 1) === 0 ? 1 : 0, 0, wotdTarget)
const wotdAtlas = {
  ...fixtureAtlas,
  words: wotdWords,
  byId: new Map(wotdWords.map((word) => [word.id, word])),
  count: wotdWords.length,
}
const todayHtml = render(
  React.createElement(testSurface.Today, {
    atlas: wotdAtlas,
    progress: fixtureProgress,
    onStart() {},
    onOpenWord() {},
    onOpenLevel() {},
    onOpenTopic() {},
  }),
  'Today word of the day',
)
const wotdMatch = todayHtml.match(/<p class="wa-wotd-word" lang="en">([^<]+)<\/p>/)
assert.ok(wotdMatch, 'Today must render a word of the day')
assert.equal(wotdMatch[1], wotdTarget.word, 'word of the day must come from the B1+ pool')

/* 既有产品策略：高起点可选词不足时 nextNew 仍回落到 pass(0) 补满 dailyNew，PR 不应改变 */
const fallbackWords = [
  { id: 'fallback-a1', word: 'fallback-a1', zh: 'n. A1', ipa: '/a/', cefr: 'A1', topic: 'education', topicZh: '教育', media: 31, order: 0 },
  { id: 'fallback-b2', word: 'fallback-b2', zh: 'n. B2', ipa: '/b/', cefr: 'B2', topic: 'education', topicZh: '教育', media: 31, order: 1 },
]
const fallbackAtlas = {
  ...fixtureAtlas,
  words: fallbackWords,
  byId: new Map(fallbackWords.map((word) => [word.id, word])),
  count: fallbackWords.length,
}
const fallbackSettings = { ...fixtureProgress.settings, startLevel: 3, dailyNew: 2 }
const fallbackPlan = sessionApi.todayPlan(fallbackAtlas, { ...fixtureProgress, settings: fallbackSettings }, fallbackSettings)
assert.deepEqual(fallbackPlan.fresh, ['fallback-b2', 'fallback-a1'], 'nextNew must keep the existing pass(0) fallback policy')

html = render(
  React.createElement(testSurface.Learn, {
    atlas: fixtureAtlas,
    progress: { ...fixtureProgress, session: builtSession },
    onExit() {},
    onRestart() {},
    onOpenWord() {},
  }),
  'Learn',
)
assert.ok(html.includes('wa-learn'))
assert.ok(html.includes('wa-learn-bar'))
assert.ok(html.includes('退出'))

html = render(
  React.createElement(testSurface.Practice, { atlas: fixtureAtlas, progress: fixtureProgress }),
  'Practice',
)
assert.ok(html.includes('Typing Studio'))
assert.ok(html.includes('开始一轮'))

html = render(
  React.createElement(testSurface.GalaxyView, { atlas: fixtureAtlas, progress: fixtureProgress, onOpenWord() {} }),
  'GalaxyView',
)
assert.ok(html.includes('wa-galaxy'))

html = render(
  React.createElement(testSurface.Palette, {
    atlas: fixtureAtlas,
    progress: fixtureProgress,
    onClose() {},
    onNavigate() {},
    onOpenWord() {},
  }),
  'Palette',
)
assert.ok(html.includes('aria-label="命令面板"'))
assert.ok(html.includes('今日学习'))

html = render(
  React.createElement(testSurface.ReadingPage, {
    atlas: fixtureAtlas,
    progress: fixtureProgress,
    initialId: null,
    onOpenWord() {},
  }),
  'ReadingPage',
)
assert.ok(html.includes('书房'))
assert.ok(html.includes('短文'))
assert.ok(html.includes('书架'))

const readerChapter = {
  paras: [
    {
      id: 'p1',
      kind: 'p',
      en: 'Hello world. Second sentence.',
      zh: '你好，世界。第二句。',
      sents: [{ a: 0, b: 12, t0: 0, t1: 1 }, { a: 13, b: 29, t0: 1.2, t1: 2.4 }],
      zhSents: [{ a: 0, b: 6, t0: 0, t1: 1 }, { a: 6, b: 10, t0: 1.2, t1: 2.4 }],
      words: [[0, 5, 'hello', 3], [6, 11, 'world', 2]],
      audio: 'books/test/audio/1/p1.mp3',
      audioZh: 'books/test/audio-zh/1/p1.mp3',
    },
  ],
}
const readerQueue = testSurface.buildSentenceQueue(readerChapter, 'en')
assert.equal(readerQueue.length, 2)
assert.equal(readerQueue[0].text, 'Hello world.')
assert.equal(readerQueue[0].translation, '你好，世界。')
assert.equal(testSurface.queueIndexAtTime(readerQueue, 0, 1.3), 1)
assert.equal(testSurface.romanNumeral(27), 'XXVII')
assert.equal(testSurface.chapterKey('the-little-prince', 1), 'book:the-little-prince:1')
assert.equal(testSurface.positionKey('the-little-prince'), 'book:the-little-prince:pos')
const parts = testSurface.splitSentenceParts('Hello world.', { a: 0, b: 12 }, [[0, 5, 'hello', 3], [6, 11, 'world', 2]])
assert.equal(parts.length, 4)
assert.equal(parts[0].id, 'hello')

html = render(
  React.createElement(testSurface.BookReader, {
    atlas: fixtureAtlas,
    progress: fixtureProgress,
    book: { id: 'the-little-prince', titleZh: '小王子', title: 'The Little Prince', chapters: [{ n: 1, labelZh: '第一章', titleZh: '蟒蛇与帽子', ready: true }] },
    meta: { n: 1, labelZh: '第一章', titleZh: '蟒蛇与帽子', minutes: 3, words: 500, plate: null },
    restorePid: null,
    onBack() {},
    onOpenChapter() {},
    onOpenWord() {},
    onReaderFocus() {},
  }),
  'BookReader',
)
assert.ok(html.includes('wa-book-reader'))
assert.ok(html.includes('正在打开书页'))

html = render(
  React.createElement(testSurface.LookupText, {
    atlas: fixtureAtlas,
    progress: fixtureProgress,
    text: 'Public libraries support lifelong learning.',
    headword: 'library',
    onOpenWord() {},
  }),
  'LookupText',
)
assert.ok(html.includes('wa-lookup-token'))

const lookup = testSurface.createLookupIndex([
  { id: 'library', word: 'library' },
  { id: 'abandon', word: 'abandon' },
  { id: 'go', word: 'go' },
  { id: 'study', word: 'study' },
  { id: 'child', word: 'child' },
])
assert.equal(lookup.resolve('libraries'), 'library')
assert.equal(lookup.resolve('abandoned'), 'abandon')
assert.equal(lookup.resolve('went'), 'go')
assert.equal(lookup.resolve('studied'), 'study')
assert.equal(lookup.resolve('children'), 'child')
assert.equal(lookup.resolve('zzzzzz'), null)
assert.deepEqual(testSurface.candidateBases('running').includes('run'), true)
assert.equal(testSurface.detectTitlebar({ protocol: 'dsh-app:', platform: 'MacIntel', left: 0, top: 0 }), true)
assert.equal(testSurface.detectTitlebar({ protocol: 'http:', platform: 'MacIntel', left: 0, top: 0 }), false)
assert.equal(testSurface.detectTitlebar({ protocol: 'dsh-app:', platform: 'MacIntel', left: 280, top: 0 }), false)
assert.equal(testSurface.detectTitlebar({ protocol: 'dsh-app:', platform: 'MacIntel', left: 0, top: 0, fullscreen: true }), false)
assert.equal(testSurface.compact('My grandmother has an excellent memory.'), testSurface.compact('Mygrandmother has an excellentmemory.'))
assert.equal(testSurface.compact('My grandmother'), testSurface.compact('My  grandmother'))
const clientSource = readFileSync(join(root, 'client.js'), 'utf8')
assert.ok(clientSource.includes('.wa-root .wa-btn-primary'), 'primary button text must not be overridden by the base button rule')
assert.ok(clientSource.includes('var(--dsw-alias-bg-base)'), 'primary button text must follow the host base color')
assert.ok(clientSource.includes('wa-detail-scroll'), 'detail body must have an inner scroll region with a fixed footer')
assert.ok(clientSource.includes('corner-shape: round'), 'plugin must restore round corners against the host squircle design language')
console.log('client: module shape, slot registrations, lookup and view renders OK')

/* ------------------------------------------------------------------ host */

const stateFile = join(root, 'build', 'smoke-progress.json')
rmSync(stateFile, { force: true })

const routes = []
const registeredTools = []
const hostCtx = {
  logger: { info() {}, warn() {} },
  inject(deps, callback) {
    if (deps.includes('tools')) {
      callback({
        effect(fn) {
          return fn()
        },
        tools: {
          register(tool) {
            registeredTools.push(tool)
            return () => {}
          },
        },
      })
      return
    }
    callback({
      effect(fn) {
        return fn()
      },
      webServer: {
        register(route) {
          routes.push(route)
          return () => {}
        },
      },
    })
  },
}
const host = await import(join(root, 'index.js'))
const { buildMediaList } = await import(join(root, 'offline.js'))
const thumbFiles = await buildMediaList(join(root, 'data'), ['thumb'])
assert.equal(thumbFiles.length, 7298)
assert.equal((await buildMediaList(join(root, 'data'), ['img'])).length, 7298)
assert.equal((await buildMediaList(join(root, 'data'), ['audio'])).length, 22905)
assert.equal((await buildMediaList(join(root, 'data'), ['thumb', 'img', 'audio'])).length, 37501)
console.log('host: offline media list', thumbFiles.length, 'thumbs, 37501 total files')

const offlineDir = join(root, 'build', 'smoke-offline')
const cacheDir = join(root, 'build', 'smoke-cache')
const offlineStateFile = join(root, 'build', 'smoke-offline-state.json')
rmSync(offlineDir, { recursive: true, force: true })
rmSync(cacheDir, { recursive: true, force: true })
rmSync(offlineStateFile, { force: true })
await host.apply(hostCtx, { stateFile, offlineDir: 'build/smoke-offline', cacheDir: 'build/smoke-cache', offlineStateFile: 'build/smoke-offline-state.json' })
assert.equal(routes.length, 1)
assert.equal(routes[0].kind, 'prefix')
assert.equal(routes[0].path, '/word-atlas')
assert.deepEqual(registeredTools.map((tool) => tool.name), ['word_atlas_lookup', 'word_atlas_search'])
assert.equal(registeredTools[0].parameters.required[0], 'word')
assert.equal(registeredTools[0].parameters.properties.word.type, 'string')
assert.ok(registeredTools[1].execute)
const sampleLookup = await registeredTools[0].execute({ word: 'library' })
assert.match(sampleLookup, /图书馆/)
const sampleSearch = await registeredTools[1].execute({ query: '原则', limit: 2 })
assert.match(sampleSearch, /principle|policy|guideline/)
console.log('host: agent tools registered and executable')

const server = createServer((req, res) => routes[0].handler(req, res))
await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve))
const origin = `http://127.0.0.1:${server.address().port}`

async function request(path, options) {
  return fetch(`${origin}${path}`, options)
}

let response = await request('/word-atlas/health')
assert.equal(response.status, 200)
const health = await response.json()
assert.equal(health.ok, true)
assert.ok(health.count > 7000)
console.log('host: health', health.content, health.media, `${health.count} words`)

response = await request('/word-atlas/atlas/index.json')
assert.equal(response.status, 200)
const index = await response.json()
assert.equal(index.count, 7298)
assert.equal(index.words.length, 7298)
console.log('host: atlas index OK')

response = await request('/word-atlas/atlas/entries/0.json')
assert.equal(response.status, 200)
const chunk = await response.json()
assert.equal(chunk.length, 100)
assert.ok(chunk[0].id)

const mediaLocal = health.content === 'local'
const mediaOptions = mediaLocal ? {} : { redirect: 'manual' }

response = await request('/word-atlas/atlas/thumb/library.webp', mediaOptions)
if (mediaLocal) {
  assert.equal(response.status, 200)
  assert.equal(response.headers.get('content-type'), 'image/webp')
  assert.ok((await response.arrayBuffer()).byteLength > 1000)
} else {
  assert.equal(response.status, 302)
  assert.match(response.headers.get('location') || '', /\/atlas\/thumb\/library\.webp$/)
}

response = await request('/word-atlas/atlas/img/library.webp', mediaOptions)
if (mediaLocal) {
  assert.equal(response.status, 200)
  assert.equal(response.headers.get('content-type'), 'image/webp')
} else {
  assert.equal(response.status, 302)
}

response = await request('/word-atlas/atlas/audio/uk/library.mp3', {
  headers: { Range: 'bytes=0-99' },
  ...(mediaLocal ? {} : { redirect: 'manual' }),
})
if (mediaLocal) {
  assert.equal(response.status, 206)
  assert.equal(response.headers.get('content-type'), 'audio/mpeg')
  assert.equal(response.headers.get('content-range'), 'bytes 0-99/8193')
  assert.equal((await response.arrayBuffer()).byteLength, 100)
} else {
  assert.equal(response.status, 302)
}

response = await request('/word-atlas/atlas/audio/uk/library.mp3', mediaLocal ? {} : { redirect: 'manual' })
if (mediaLocal) {
  assert.equal(response.status, 200)
  assert.equal(response.headers.get('accept-ranges'), 'bytes')
} else {
  assert.equal(response.status, 302)
}
console.log(`host: index / entries / media (${mediaLocal ? 'local files' : 'redirect fallback'}) OK`)

response = await request('/word-atlas/brand/hero.webp', mediaLocal ? {} : { redirect: 'manual' })
if (mediaLocal) {
  assert.equal(response.status, 200)
  assert.equal(response.headers.get('content-type'), 'image/webp')
  assert.ok((await response.arrayBuffer()).byteLength > 10000)
} else {
  assert.equal(response.status, 302)
  assert.match(response.headers.get('location') || '', /\/brand\/hero\.webp$/)
}

response = await request('/word-atlas/brand/..%2Fpackage.json')
assert.equal(response.status, 404)
console.log('host: brand assets OK')

response = await request('/word-atlas/readings/index.json')
assert.equal(response.status, 200)
const readingIndex = await response.json()
assert.ok(Array.isArray(readingIndex.items))
assert.ok(readingIndex.items.length >= 700)

response = await request('/word-atlas/books/index.json')
assert.equal(response.status, 200)
const booksIndex = await response.json()
assert.ok(Array.isArray(booksIndex.books))
assert.ok(booksIndex.books.length >= 1)
console.log('host: reading indexes OK')

response = await request('/word-atlas/api/progress')
assert.equal(response.status, 200)
assert.deepEqual(await response.json(), {})

const progressPayload = {
  v: 1,
  cards: { library: { due: 1 } },
  bookmarks: ['library'],
  days: {},
  mistakes: ['library'],
  typing: [],
  session: { id: 's1', steps: [{ id: 'library', kind: 'meaning', options: ['library', 'study'] }], index: 0, graded: {}, newIds: ['library'], reviewIds: [] },
  settings: { dailyNew: 20 },
}
response = await request('/word-atlas/api/progress', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(progressPayload),
})
assert.equal(response.status, 200)
assert.equal((await response.json()).ok, true)

response = await request('/word-atlas/api/progress')
const saved = await response.json()
assert.equal(saved.cards.library.due, 1)
assert.deepEqual(saved.bookmarks, ['library'])
assert.equal(saved.settings.dailyNew, 20)
assert.equal(saved.session.id, 's1')
assert.deepEqual(saved.mistakes, ['library'])
assert.equal(typeof saved.savedAt, 'number')

response = await request('/word-atlas/api/progress', { method: 'POST', body: 'not json' })
assert.equal(response.status, 400)

response = await request('/word-atlas/atlas/unknown')
assert.equal(response.status, 404)

response = await request('/word-atlas/atlas/../package.json')
assert.equal(response.status, 404)
console.log('host: progress read/save, 404s OK')

response = await request('/word-atlas/api/offline')
assert.equal(response.status, 200)
const offlineStatus = await response.json()
assert.equal(offlineStatus.state, 'idle')
assert.equal(typeof offlineStatus.contentDirReady, 'boolean')
assert.deepEqual(offlineStatus.tiersAvailable, ['thumb', 'img', 'audio'])
assert.equal(typeof offlineStatus.dir, 'string')

response = await request('/word-atlas/api/offline/start', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ tiers: ['nope'], source: 'remote' }),
})
assert.equal(response.status, 400)
assert.equal((await response.json()).ok, false)

response = await request('/word-atlas/api/offline/start', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ tiers: ['thumb'], source: 'bogus' }),
})
assert.equal(response.status, 400)

response = await request('/word-atlas/api/offline', { method: 'DELETE' })
assert.equal(response.status, 200)
assert.equal((await response.json()).ok, true)
console.log('host: offline status / validation / clear OK')

server.close()
rmSync(stateFile, { force: true })
rmSync(offlineDir, { recursive: true, force: true })
rmSync(cacheDir, { recursive: true, force: true })
rmSync(offlineStateFile, { force: true })
console.log('smoke: all checks passed')
