/**
 * 从词光（Word Atlas）上游仓库同步内置词库：
 *   public/atlas/index.json      -> data/index.json
 *   public/atlas/entries/*.json  -> data/entries/*.json
 *
 * 用法：
 *   node scripts/sync-data.mjs [词光仓库路径]
 *
 * 未传路径时依次尝试：$WORD_ATLAS_CONTENT_DIR、<本仓库>/../repo、<本仓库>/content。
 * 词库内容以 CC BY 4.0 授权（见 THIRD_PARTY_NOTICES.md）。
 */
import { cp, mkdir, readdir, readFile, rm } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')

function findSource() {
  const candidates = []
  if (process.argv[2]) candidates.push(resolve(process.argv[2]))
  if (process.env.WORD_ATLAS_CONTENT_DIR) candidates.push(resolve(process.env.WORD_ATLAS_CONTENT_DIR))
  candidates.push(resolve(root, '..', 'repo'), resolve(root, 'content'))
  for (const candidate of candidates) {
    if (existsSync(join(candidate, 'public', 'atlas', 'index.json'))) return candidate
  }
  return undefined
}

const source = findSource()
if (!source) {
  console.error('找不到词光仓库：请传入路径，或设置 WORD_ATLAS_CONTENT_DIR，或把仓库克隆到 ../repo')
  process.exit(1)
}

const atlas = join(source, 'public', 'atlas')
const raw = JSON.parse(await readFile(join(atlas, 'index.json'), 'utf8'))

await mkdir(join(root, 'data', 'entries'), { recursive: true })
await rm(join(root, 'data', 'entries'), { recursive: true, force: true })
await mkdir(join(root, 'data', 'entries'), { recursive: true })

await cp(join(atlas, 'index.json'), join(root, 'data', 'index.json'))
const entries = (await readdir(join(atlas, 'entries'))).filter((name) => name.endsWith('.json'))
for (const name of entries) {
  await cp(join(atlas, 'entries', name), join(root, 'data', 'entries', name))
}

console.log(`已从 ${atlas} 同步 ${raw.count} 个词条、${entries.length} 个词条分块到 data/`)
