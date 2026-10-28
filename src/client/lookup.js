/**
 * 点词查询的词形还原。
 *
 * IRREGULAR 表移植自上游词光开源仓库 src/lib/text.ts（MIT，Word Atlas contributors），
 * 其余后缀规则参考线上版查词行为重写。
 */
const IRREGULAR_RAW =
  "arise arose arisen|awake awoke awoken|bear bore borne born|beat beat beaten|become became|begin began begun beginn|bend bent|bet bet|bind bound|bite bit bitten|bleed bled|blow blew blown|break broke broken|breed bred|bring brought|broadcast broadcast|build built|burn burnt burned|burst burst|buy bought|catch caught|choose chose chosen|cling clung|come came|cost cost|creep crept|cut cut cutt|deal dealt|dig dug|do did done does|draw drew drawn|dream dreamt dreamed|drink drank drunk|drive drove driven|eat ate eaten|fall fell fallen|feed fed|feel felt|fight fought|find found|flee fled|fling flung|fly flew flown flies|forbid forbade forbidden|forget forgot forgotten|forgive forgave forgiven|freeze froze frozen|get got gotten gett|give gave given|go went gone goes|grind ground|grow grew grown|hang hung|have had has|hear heard|hide hid hidden|hit hit hitt|hold held|hurt hurt|keep kept|kneel knelt|know knew known|lay laid|lead led|lean leant leaned|leap leapt leaped|learn learnt learned|leave left|lend lent|let let|lie lay lain|light lit|lose lost|make made|mean meant|meet met|pay paid|prove proved proven|put put putt|quit quit|read read|ride rode ridden|ring rang rung|rise rose risen|run ran runn|say said|see saw seen|seek sought|sell sold|send sent|set set|sew sewed sewn|shake shook shaken|shed shed|shine shone|shoot shot|show showed shown|shrink shrank shrunk|shut shut|sing sang sung|sink sank sunk|sit sat sitt|sleep slept|slide slid|sling slung|speak spoke spoken|speed sped|spend spent|spill spilt spilled|spin spun spinn|spy spied spies|mislead misled|spit spat|split split|spread spread|spring sprang sprung|stand stood|steal stole stolen|stick stuck|sting stung|stink stank stunk|stride strode|strike struck|string strung|strive strove striven|swear swore sworn|sweep swept|swell swelled swollen|swim swam swum swimm|swing swung|take took taken|teach taught|tear tore torn|tell told|think thought|throw threw thrown|tread trod trodden|understand understood|undertake undertook undertaken|upset upset|wake woke woken|wear wore worn|weave wove woven|weep wept|win won winn|wind wound|withdraw withdrew withdrawn|write wrote written|be was were been is are am|child children|man men|woman women|foot feet|tooth teeth|mouse mice|person people|good better best|bad worse worst|far further farther furthest"

const IRREGULAR = new Map(
  IRREGULAR_RAW.split("|")
    .map((row) => row.split(" "))
    .map(([base, ...forms]) => [base, forms]),
)

const REVERSE = new Map()
for (const [base, forms] of IRREGULAR) {
  for (const form of forms) if (!REVERSE.has(form)) REVERSE.set(form, base)
  if (!REVERSE.has(base)) REVERSE.set(base, base)
}

export function normalizeToken(value) {
  return String(value || "")
    .normalize("NFKC")
    .replace(/[’‘]/g, "'")
    .replace(/[‐‑–—]/g, "-")
    .trim()
    .toLowerCase()
    .replace(/^[^a-z']+|[^a-z']+$/g, "")
}

/** Candidate base forms for an inflected English token. */
export function candidateBases(token) {
  const word = normalizeToken(token)
  if (!word) return []
  const out = []
  const push = (candidate) => {
    if (candidate && candidate.length > 0 && !out.includes(candidate)) out.push(candidate)
  }

  if (word.endsWith("'s")) push(word.slice(0, -2))
  if (/(ies|ied)$/.test(word)) push(word.slice(0, -3) + "y")
  if (/ying$/.test(word)) push(word.slice(0, -4) + "ie")

  for (const suffix of ["ing", "ed", "est", "er", "es", "s"]) {
    if (!word.endsWith(suffix) || word.length <= suffix.length + 1) continue
    const stem = word.slice(0, -suffix.length)
    if (/([bdgmnprt])\1$/.test(stem)) push(stem), push(stem.slice(0, -1))
    if (/i$/.test(stem) && (suffix === "er" || suffix === "est" || suffix === "ed")) push(stem.slice(0, -1) + "y")
    if ((suffix === "ing" || suffix === "ed") && !/ng$/.test(stem)) {
      push(stem + "e")
      push(stem)
    } else {
      push(stem)
      push(stem + "e")
    }
  }

  const irregular = REVERSE.get(word)
  if (irregular) push(irregular)

  return out
}

export function createLookupIndex(words) {
  const exact = new Map()
  for (const word of words) exact.set(word.word.toLowerCase(), word.id)
  const cache = new Map()

  function resolve(token) {
    const word = normalizeToken(token)
    if (!word) return null
    if (cache.has(word)) return cache.get(word)
    let hit = exact.get(word)
    if (!hit) {
      const irregular = REVERSE.get(word)
      if (irregular) hit = exact.get(irregular)
    }
    if (!hit) {
      for (const candidate of candidateBases(word)) {
        hit = exact.get(candidate)
        if (hit) break
      }
    }
    cache.set(word, hit ?? null)
    return hit ?? null
  }

  return { resolve, exact }
}

const indexes = new WeakMap()

export function getLookupIndex(atlas) {
  let index = indexes.get(atlas)
  if (!index) {
    index = createLookupIndex(atlas.words)
    indexes.set(atlas, index)
  }
  return index
}
