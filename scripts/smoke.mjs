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
const fixtureAtlas = {
  count: 1,
  chunk: 100,
  topics: [{ slug: 'education', zh: '教育' }],
  cefr: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
  words: [fixtureWord],
  byId: new Map([[fixtureWord.id, fixtureWord]]),
}
const fixtureProgress = {
  v: 1,
  cards: {},
  bookmarks: [],
  days: {},
  misses: [],
  typing: [],
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

html = render(React.createElement(testSurface.Settings, { atlas: fixtureAtlas, progress: fixtureProgress }), 'Settings')
assert.ok(html.includes('离线素材'))
assert.ok(html.includes('导出备份'))

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
const clientSource = readFileSync(join(root, 'client.js'), 'utf8')
assert.ok(clientSource.includes('.wa-root .wa-btn-primary'), 'primary button text must not be overridden by the base button rule')
assert.ok(clientSource.includes('var(--dsw-alias-bg-base)'), 'primary button text must follow the host base color')
assert.ok(clientSource.includes('wa-detail-scroll'), 'detail body must have an inner scroll region with a fixed footer')
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

response = await request('/word-atlas/api/progress')
assert.equal(response.status, 200)
assert.deepEqual(await response.json(), {})

const progressPayload = { v: 1, cards: { library: { due: 1 } }, bookmarks: ['library'], days: {}, settings: { dailyNew: 20 } }
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
