/** 打字练习工具：移植自上游词光 src/lib/typing.ts（MIT，Word Atlas contributors）。 */
export const clean = (text) =>
  String(text || '')
    .normalize('NFKC')
    .replace(/[’‘]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[‐‑–—]/g, '-')
    .replace(/\s/g, ' ')

export const same = (a, b) => clean(a).toLowerCase() === clean(b).toLowerCase()

/** 句子练习忽略空白：中文/日文输入法可能吞掉空格，不应因此判错。 */
export const compact = (text) => clean(text).replace(/\s+/g, '')

export function correctCharacterCount(value, target) {
  const expected = Array.from(clean(target))
  return Array.from(clean(value)).filter((character, index) => same(character, expected[index] || '')).length
}

export function typingDelta(previous, next, target) {
  const before = Array.from(clean(previous))
  const after = Array.from(clean(next))
  const expected = Array.from(clean(target))
  let prefix = 0
  while (prefix < before.length && prefix < after.length && before[prefix] === after[prefix]) prefix += 1
  let suffix = 0
  while (
    suffix < before.length - prefix &&
    suffix < after.length - prefix &&
    before[before.length - 1 - suffix] === after[after.length - 1 - suffix]
  ) {
    suffix += 1
  }
  const added = after.slice(prefix, after.length - suffix)
  let correct = 0
  for (let index = 0; index < added.length; index += 1) {
    if (same(added[index], expected[prefix + index] || '')) correct += 1
  }
  return { total: added.length, correct }
}

/** Standard WPM uses 5 characters per word; only correctly typed characters count. */
export function typingMetrics(correctCharacters, attemptedCharacters, acceptedCharacters, elapsedMs) {
  const finiteNonnegative = (value) => (Number.isFinite(value) ? Math.max(0, value) : 0)
  const attempted = finiteNonnegative(attemptedCharacters)
  const correct = Math.min(finiteNonnegative(correctCharacters), attempted)
  const accepted = finiteNonnegative(acceptedCharacters)
  const duration = finiteNonnegative(elapsedMs)
  return {
    accuracy: attempted ? Math.round((correct / attempted) * 100) : 100,
    wpm: duration >= 1000 ? Math.round(accepted / 5 / (duration / 60000)) : 0,
  }
}
