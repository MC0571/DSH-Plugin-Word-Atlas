/**
 * Build src/client/*.jsx into the single browser bundle client.js.
 *
 * The DSH Web client loads a plugin bundle through window.__ModuleLoader__.load:
 * the factory receives `require`, through which React comes from the host module
 * table. Everything else (ts-fsrs, our UI) is bundled, so the plugin has no
 * runtime npm dependency.
 */
import { build } from 'esbuild'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const root = join(here, '..')
const outDir = join(root, 'build')

await mkdir(outDir, { recursive: true })
const innerPath = join(outDir, 'client.inner.cjs')

await build({
  entryPoints: [join(root, 'src', 'client', 'entry.jsx')],
  outfile: innerPath,
  bundle: true,
  format: 'cjs',
  platform: 'browser',
  target: ['chrome110', 'safari16'],
  external: ['react'],
  loader: { '.css': 'text' },
  jsx: 'transform',
  legalComments: 'none',
  minify: true,
  logLevel: 'warning',
})

const inner = await readFile(innerPath, 'utf8')
const wrapped = `/* 词光 · Word Atlas — generated client bundle (build from src/client). */
window.__ModuleLoader__.load({
  id: "word-atlas-dsh",
  factory: (require) => {
    const module = { exports: {} };
    const exports = module.exports;
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    (function (module, exports, require) {
${inner}
    })(module, exports, require);
    return module.exports;
  },
});
`
await writeFile(join(root, 'client.js'), wrapped, 'utf8')
console.log(`client.js written (${(wrapped.length / 1024).toFixed(1)} KiB)`)
