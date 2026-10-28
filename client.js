/* 词光 · Word Atlas — generated client bundle (build from src/client). */
window.__ModuleLoader__.load({
  id: "word-atlas-dsh",
  factory: (require) => {
    const module = { exports: {} };
    const exports = module.exports;
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    (function (module, exports, require) {
var Ht=Object.create;var je=Object.defineProperty;var Wt=Object.getOwnPropertyDescriptor;var Ut=Object.getOwnPropertyNames;var Pt=Object.getPrototypeOf,Gt=Object.prototype.hasOwnProperty;var qt=(a,e)=>{for(var t in e)je(a,t,{get:e[t],enumerable:!0})},Oa=(a,e,t,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of Ut(e))!Gt.call(a,n)&&n!==t&&je(a,n,{get:()=>e[n],enumerable:!(r=Wt(e,n))||r.enumerable});return a};var te=(a,e,t)=>(t=a!=null?Ht(Pt(a)):{},Oa(e||!a||!a.__esModule?je(t,"default",{value:a,enumerable:!0}):t,a)),Kt=a=>Oa(je({},"__esModule",{value:!0}),a);var rn={};qt(rn,{__test:()=>an,apply:()=>tn,inject:()=>en});module.exports=Kt(rn);var Ia=te(require("react"),1);var Ba=`/* \u8BCD\u5149 \xB7 Word Atlas \u2014 plugin page styles.
   Only host theme tokens (--dsw-alias-*) carry UI color; artwork may use its own. */

.wa-root {
  --wa-radius: 14px;
  --wa-round: 999px;
  --wa-gap: 14px;
  --wa-muted: var(--dsw-alias-label-secondary);
  --wa-line: var(--dsw-alias-border-l1);
  --wa-line-strong: var(--dsw-alias-border-l2);
  --wa-surface: var(--dsw-alias-bg-layer-1);
  --wa-surface-2: var(--dsw-alias-bg-layer-2);
  --wa-hover: color-mix(in srgb, var(--dsw-alias-label-primary) 7%, transparent);
  height: 100%;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background:
    radial-gradient(1100px 420px at 12% -10%, color-mix(in srgb, var(--dsw-alias-brand-primary) 10%, transparent), transparent 70%),
    var(--dsw-alias-bg-base);
  color: var(--dsw-alias-label-primary);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
  font-size: 14px;
  line-height: 1.5;
}

.wa-root *,
.wa-root *::before,
.wa-root *::after {
  box-sizing: border-box;
}

.wa-root button,
.wa-root input,
.wa-root select {
  font-family: inherit;
  font-size: inherit;
}

.wa-root img {
  display: block;
  max-width: 100%;
}

.wa-root a {
  color: var(--dsw-alias-brand-primary);
  text-decoration: none;
}

.wa-root a:hover {
  text-decoration: underline;
}

.wa-root code {
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 0.92em;
  padding: 1px 5px;
  border-radius: 5px;
  background: var(--wa-surface-2);
}

/* ---------------------------------------------------------------- header */

.wa-header {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 14px 24px 12px;
  border-bottom: 1px solid var(--wa-line);
}

.wa-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
}

.wa-brand-text {
  min-width: 0;
}

.wa-brand-text h1 {
  margin: 0;
  font-size: 17px;
  font-weight: 650;
  letter-spacing: 0.01em;
  display: flex;
  align-items: baseline;
  gap: 8px;
  white-space: nowrap;
}

.wa-brand-text h1 span {
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--wa-muted);
}

.wa-brand-text p {
  margin: 1px 0 0;
  font-size: 12px;
  color: var(--wa-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.wa-toolbar {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 0 1 auto;
  min-width: 0;
}

.wa-search {
  display: flex;
  align-items: center;
  gap: 7px;
  width: 250px;
  max-width: 30vw;
  padding: 7px 10px;
  border-radius: var(--wa-round);
  border: 1px solid var(--wa-line);
  background: var(--wa-surface);
  color: var(--wa-muted);
  transition: border-color 0.15s ease, background 0.15s ease;
}

.wa-search:focus-within {
  border-color: var(--dsw-alias-brand-primary);
  background: var(--wa-surface-2);
}

.wa-search input {
  flex: 1 1 auto;
  min-width: 0;
  border: 0;
  outline: 0;
  background: transparent;
  color: var(--dsw-alias-label-primary);
}

.wa-search input::placeholder {
  color: var(--wa-muted);
}

.wa-search-clear {
  display: grid;
  place-items: center;
  width: 20px;
  height: 20px;
  padding: 0;
  border: 0;
  border-radius: var(--wa-round);
  background: transparent;
  color: var(--wa-muted);
  cursor: pointer;
}

.wa-search-clear:hover {
  background: var(--wa-hover);
  color: var(--dsw-alias-label-primary);
}

/* ---------------------------------------------------------------- buttons */

.wa-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 7px 14px;
  border-radius: var(--wa-round);
  border: 1px solid var(--wa-line);
  background: var(--wa-surface);
  color: var(--dsw-alias-label-primary);
  font-size: 13px;
  font-weight: 550;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.15s ease, border-color 0.15s ease, opacity 0.15s ease;
}

.wa-btn:hover:not(:disabled) {
  background: var(--wa-surface-2);
  border-color: var(--wa-line-strong);
}

.wa-btn:disabled {
  opacity: 0.5;
  cursor: default;
}

.wa-btn-ghost {
  background: transparent;
}

.wa-btn-ghost:hover:not(:disabled) {
  background: var(--wa-hover);
}

.wa-btn-primary {
  border-color: transparent;
  background: var(--dsw-alias-brand-primary);
  color: var(--dsw-alias-bg-base);
}

.wa-root .wa-btn-primary {
  color: var(--dsw-alias-bg-base);
}

.wa-btn-primary:hover:not(:disabled) {
  background: var(--dsw-alias-brand-primary);
  filter: brightness(1.08);
}

.wa-accent-btn {
  color: var(--wa-muted);
}

.wa-icon-btn {
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  padding: 0;
  border: 1px solid transparent;
  border-radius: var(--wa-round);
  background: transparent;
  color: var(--wa-muted);
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;
}

.wa-icon-btn:hover:not(:disabled) {
  background: var(--wa-hover);
  color: var(--dsw-alias-label-primary);
}

.wa-icon-btn:disabled {
  opacity: 0.35;
  cursor: default;
}

.wa-icon-btn.is-on {
  color: var(--dsw-alias-brand-primary);
}

/* ------------------------------------------------------------------ tabs */

.wa-tabs {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 20px;
  border-bottom: 1px solid var(--wa-line);
}

.wa-tabs > button {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 11px 12px;
  border: 0;
  background: transparent;
  color: var(--wa-muted);
  font-size: 13px;
  font-weight: 550;
  cursor: pointer;
  border-radius: 8px 8px 0 0;
}

.wa-tabs > button:hover {
  color: var(--dsw-alias-label-primary);
  background: var(--wa-hover);
}

.wa-tabs > button.is-on {
  color: var(--dsw-alias-label-primary);
}

.wa-tabs > button.is-on::after {
  content: '';
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: -1px;
  height: 2px;
  border-radius: 2px;
  background: var(--dsw-alias-brand-primary);
}

.wa-tab-count {
  padding: 0 6px;
  height: 17px;
  display: inline-flex;
  align-items: center;
  border-radius: var(--wa-round);
  background: var(--wa-surface-2);
  color: var(--wa-muted);
  font-size: 11px;
  font-weight: 600;
}

.wa-tab-badge {
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--wa-round);
  background: var(--dsw-alias-brand-primary);
  color: var(--dsw-alias-bg-base);
  font-size: 11px;
  font-weight: 700;
}

.wa-tabs-meta {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--wa-muted);
  font-size: 12px;
}

.wa-tabs-meta i {
  width: 1px;
  height: 12px;
  background: var(--wa-line-strong);
}

/* ------------------------------------------------------------------ main */

.wa-main {
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 16px 24px 36px;
  scrollbar-gutter: stable;
}

.wa-boot {
  height: 100%;
  display: grid;
  place-items: center;
}

.wa-loading {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--wa-muted);
  font-size: 13px;
}

.wa-spinner {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid var(--wa-line-strong);
  border-top-color: var(--dsw-alias-brand-primary);
  animation: wa-spin 0.8s linear infinite;
}

@keyframes wa-spin {
  to {
    transform: rotate(360deg);
  }
}

/* --------------------------------------------------------------- filters */

.wa-filters {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 14px;
}

.wa-chips,
.wa-topics {
  display: flex;
  align-items: center;
  gap: 7px;
}

.wa-topics {
  overflow-x: auto;
  padding-bottom: 2px;
  scrollbar-width: thin;
}

.wa-chips > button,
.wa-topics > button {
  flex: 0 0 auto;
  padding: 5px 12px;
  border: 1px solid var(--wa-line);
  border-radius: var(--wa-round);
  background: transparent;
  color: var(--wa-muted);
  font-size: 12.5px;
  font-weight: 550;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
}

.wa-chips > button:hover,
.wa-topics > button:hover {
  border-color: var(--wa-line-strong);
  color: var(--dsw-alias-label-primary);
}

.wa-chips > button.is-on,
.wa-topics > button.is-on {
  border-color: color-mix(in srgb, var(--dsw-alias-brand-primary) 55%, transparent);
  background: color-mix(in srgb, var(--dsw-alias-brand-primary) 13%, transparent);
  color: var(--dsw-alias-brand-primary);
}

/* ------------------------------------------------------------------ grid */

.wa-grid-wrap {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.wa-grid-count {
  margin: 0;
  color: var(--wa-muted);
  font-size: 12px;
}

.wa-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(178px, 1fr));
  gap: var(--wa-gap);
}

.wa-card {
  position: relative;
  border: 1px solid var(--wa-line);
  border-radius: var(--wa-radius);
  background: var(--wa-surface);
  overflow: hidden;
  transition: transform 0.16s ease, border-color 0.16s ease, box-shadow 0.16s ease;
}

.wa-card:hover {
  transform: translateY(-2px);
  border-color: var(--wa-line-strong);
  box-shadow: 0 10px 26px color-mix(in srgb, #000 12%, transparent);
}

.wa-card.is-learned {
  border-color: color-mix(in srgb, var(--dsw-alias-brand-primary) 30%, var(--wa-line));
}

.wa-card-hit {
  display: block;
  cursor: pointer;
  outline: none;
}

.wa-card-hit:focus-visible {
  box-shadow: inset 0 0 0 2px var(--dsw-alias-brand-primary);
}

.wa-card-art {
  position: relative;
  aspect-ratio: 1 / 1;
  background: var(--wa-surface-2);
  overflow: hidden;
}

.wa-card-art img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.wa-card:hover .wa-card-art img {
  transform: scale(1.035);
}

.wa-card-dot {
  position: absolute;
  top: 9px;
  left: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--dsw-alias-brand-primary);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--dsw-alias-bg-base) 70%, transparent);
}

.wa-card-body {
  padding: 10px 12px 12px;
}

.wa-card-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.wa-card-title h3 {
  margin: 0;
  font-size: 15.5px;
  font-weight: 650;
  letter-spacing: 0.005em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.wa-card-ipa {
  margin: 2px 0 4px;
  font-size: 11.5px;
  color: var(--wa-muted);
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.wa-card-zh {
  margin: 0;
  font-size: 12.5px;
  color: var(--dsw-alias-label-primary);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.wa-card-topic {
  margin: 6px 0 0;
  font-size: 11px;
  color: var(--wa-muted);
}

.wa-card-heart {
  position: absolute;
  top: 8px;
  right: 8px;
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  padding: 0;
  border: 0;
  border-radius: var(--wa-round);
  background: color-mix(in srgb, var(--dsw-alias-bg-base) 62%, transparent);
  backdrop-filter: blur(4px);
  color: var(--wa-muted);
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.15s ease, color 0.15s ease;
}

.wa-card:hover .wa-card-heart,
.wa-card-heart.is-on {
  opacity: 1;
}

.wa-card-heart:hover {
  color: var(--dsw-alias-label-primary);
}

.wa-card-heart.is-on {
  color: var(--dsw-alias-brand-primary);
}

.wa-img-fallback {
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  background:
    radial-gradient(circle at 30% 20%, color-mix(in srgb, var(--dsw-alias-brand-primary) 24%, transparent), transparent 62%),
    var(--wa-surface-2);
  color: var(--dsw-alias-brand-primary);
}

.wa-img-fallback span {
  font-size: 34px;
  font-weight: 700;
  opacity: 0.85;
}

.wa-more {
  display: flex;
  justify-content: center;
  padding: 16px 0 6px;
}

.wa-footer {
  margin-top: 26px;
  padding-top: 14px;
  border-top: 1px solid var(--wa-line);
  color: var(--wa-muted);
  font-size: 11.5px;
  text-align: center;
}

/* ----------------------------------------------------------------- chips */

.wa-cefr {
  flex: 0 0 auto;
  padding: 0 6px;
  height: 18px;
  display: inline-flex;
  align-items: center;
  border-radius: 5px;
  background: var(--wa-surface-2);
  color: var(--wa-muted);
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.wa-cefr-A1,
.wa-cefr-A2 {
  color: var(--dsw-alias-state-success-primary);
}

.wa-cefr-B1,
.wa-cefr-B2 {
  color: var(--dsw-alias-brand-primary);
}

.wa-cefr-C1,
.wa-cefr-C2 {
  color: var(--dsw-alias-state-warn-primary);
}

.wa-chip {
  display: inline-flex;
  align-items: center;
  padding: 1px 8px;
  border-radius: var(--wa-round);
  border: 1px solid var(--wa-line);
  color: var(--wa-muted);
  font-size: 11px;
  white-space: nowrap;
}

.wa-chip-status.is-done {
  color: var(--dsw-alias-state-success-primary);
  border-color: color-mix(in srgb, var(--dsw-alias-state-success-primary) 40%, transparent);
}

.wa-chip-new {
  color: var(--dsw-alias-brand-primary);
  border-color: color-mix(in srgb, var(--dsw-alias-brand-primary) 45%, transparent);
}

/* ---------------------------------------------------------------- detail */

.wa-overlay {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 26px;
  background: rgba(6, 10, 18, 0.55);
  backdrop-filter: blur(3px);
  animation: wa-fade 0.14s ease;
}

@keyframes wa-fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.wa-detail {
  display: grid;
  grid-template-columns: minmax(0, 340px) minmax(0, 1fr);
  grid-template-rows: minmax(0, 1fr);
  width: min(920px, 100%);
  height: min(88vh, 880px);
  border: 1px solid var(--wa-line);
  border-radius: 20px;
  background: var(--dsw-alias-bg-layer-1);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.35);
  overflow: hidden;
}

.wa-detail-art {
  position: relative;
  min-height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 20px;
  background:
    radial-gradient(120% 80% at 50% 0%, color-mix(in srgb, var(--dsw-alias-brand-primary) 8%, transparent), transparent 70%),
    var(--wa-surface-2);
  overflow: hidden;
}

/* 1:1 \u63D2\u753B\u5B8C\u6574\u663E\u793A\uFF0C\u4E0D\u518D\u7528 cover \u62C9\u6EE1\u7AD6\u957F\u533A\u57DF */
.wa-detail-img {
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 14px;
  box-shadow: 0 12px 30px color-mix(in srgb, #000 18%, transparent);
}

.wa-detail-art .wa-img-fallback {
  width: 100%;
  aspect-ratio: 1 / 1;
  height: auto;
  min-height: 0;
  border-radius: 14px;
}

.wa-detail-art-meta {
  position: static;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 0 2px;
  background: none;
  color: var(--wa-muted);
  font-size: 11px;
  letter-spacing: 0.04em;
}

.wa-specimen {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 10.5px;
  opacity: 0.92;
}

.wa-specimen i {
  width: 16px;
  height: 1px;
  background: currentColor;
  opacity: 0.5;
}

.wa-memory-inline {
  opacity: 0.92;
}

.wa-detail-body {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 22px 26px 0;
  overflow: hidden;
  min-width: 0;
  min-height: 0;
}

/* \u56FA\u5B9A\u9875\u5934/\u6807\u9898\uFF0C\u4EC5\u6B63\u6587\u6EDA\u52A8\uFF0C\u9875\u811A\u5438\u5E95 */
.wa-detail-scroll {
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  overscroll-behavior: contain;
  padding: 0 6px 10px 0;
  margin-right: -6px;
  scrollbar-gutter: stable;
}

.wa-detail-close {
  position: absolute;
  top: 12px;
  right: 12px;
}

.wa-detail-head {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-right: 36px;
  min-height: 28px;
}

.wa-tags {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
}

.wa-detail-head > .wa-icon-btn {
  margin-left: auto;
}

.wa-headword {
  margin: 10px 0 2px;
  font-size: 34px;
  line-height: 1.15;
  font-weight: 700;
  letter-spacing: -0.015em;
  overflow-wrap: anywhere;
}

.wa-pron {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px 16px;
  margin: 6px 0 4px;
}

.wa-pron-row {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  flex-wrap: wrap;
}

.wa-pron-label {
  display: inline-grid;
  place-items: center;
  width: 18px;
  height: 18px;
  border-radius: 5px;
  background: var(--wa-surface-2);
  color: var(--wa-muted);
  font-size: 10.5px;
  font-weight: 700;
}

.wa-ipa {
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 12.5px;
  color: var(--wa-muted);
}

.wa-hint {
  font-size: 11px;
  color: var(--wa-muted);
}

.wa-audio-btn {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 7px;
  border: 1px solid var(--wa-line);
  border-radius: var(--wa-round);
  background: transparent;
  color: var(--wa-muted);
  font-size: 11px;
  cursor: pointer;
  transition: color 0.15s ease, border-color 0.15s ease, background 0.15s ease;
}

.wa-audio-btn:hover {
  color: var(--dsw-alias-label-primary);
  border-color: var(--wa-line-strong);
  background: var(--wa-hover);
}

.wa-audio-btn.is-playing {
  color: var(--dsw-alias-brand-primary);
  border-color: color-mix(in srgb, var(--dsw-alias-brand-primary) 50%, transparent);
}

.wa-detail-body .wa-audio-btn {
  padding: 3px 8px;
}

.wa-senses {
  list-style: none;
  margin: 14px 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 9px;
}

.wa-senses li {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 4px 8px;
  padding-left: 11px;
  border-left: 2px solid color-mix(in srgb, var(--dsw-alias-brand-primary) 35%, transparent);
}

.wa-pos {
  color: var(--wa-muted);
  font-size: 12.5px;
  font-style: italic;
}

.wa-zh {
  font-size: 15px;
  font-weight: 550;
}

.wa-en {
  display: block;
  width: 100%;
  color: var(--wa-muted);
  font-size: 13px;
}

.wa-block {
  margin-top: 20px;
}

.wa-eyebrow {
  margin: 0 0 8px;
  font-size: 11px;
  font-weight: 650;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--wa-muted);
}

.wa-examples {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.wa-examples li {
  position: relative;
  padding: 10px 12px;
  border-radius: 10px;
  background: var(--wa-surface);
}

.wa-ex-tag {
  position: absolute;
  top: -7px;
  left: 10px;
  padding: 0 6px;
  border-radius: var(--wa-round);
  background: var(--wa-surface);
  color: var(--wa-muted);
  font-size: 10px;
  letter-spacing: 0.05em;
}

.wa-ex-tag.is-ielts {
  color: var(--dsw-alias-brand-primary);
}

.wa-ex-en {
  margin: 0;
  font-size: 14px;
  line-height: 1.65;
}

.wa-ex-en mark {
  background: color-mix(in srgb, var(--dsw-alias-brand-primary) 22%, transparent);
  color: inherit;
  border-radius: 3px;
  padding: 0 1px;
}

.wa-ex-speak {
  margin-left: 7px;
  vertical-align: 1px;
}

.wa-ex-zh {
  margin: 5px 0 0;
  color: var(--wa-muted);
  font-size: 12.5px;
}

.wa-collocations {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.wa-collocations li {
  display: inline-flex;
  align-items: baseline;
  gap: 6px;
  padding: 4px 9px;
  border-radius: 8px;
  background: var(--wa-surface);
  font-size: 12.5px;
}

.wa-collocations small {
  color: var(--wa-muted);
  font-size: 11.5px;
}

.wa-relations {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.wa-relations p {
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 4px 12px;
  color: var(--dsw-alias-label-primary);
  font-size: 13px;
}

.wa-link {
  padding: 0;
  border: 0;
  background: none;
  color: var(--dsw-alias-brand-primary);
  font-size: inherit;
  cursor: pointer;
}

.wa-link:hover {
  text-decoration: underline;
}

.wa-tip {
  display: flex;
  gap: 9px;
  align-items: flex-start;
  margin-top: 18px;
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid color-mix(in srgb, var(--dsw-alias-brand-primary) 26%, transparent);
  background: color-mix(in srgb, var(--dsw-alias-brand-primary) 6%, transparent);
  color: var(--dsw-alias-label-primary);
  font-size: 12.5px;
}

.wa-tip svg {
  flex: 0 0 auto;
  margin-top: 2px;
  color: var(--dsw-alias-brand-primary);
}

.wa-tip p {
  margin: 0;
}

.wa-usage-note {
  margin: 14px 0 0;
  color: var(--wa-muted);
  font-size: 12.5px;
}

.wa-detail-footer {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 0;
  padding: 12px 0 16px;
  border-top: 1px solid var(--wa-line);
  background: var(--dsw-alias-bg-layer-1);
}

.wa-detail-memory {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 14px;
  color: var(--wa-muted);
  font-size: 11.5px;
}

.wa-detail-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.wa-detail-nav {
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 2px;
  border: 1px solid var(--wa-line);
  border-radius: var(--wa-round);
}

.wa-error {
  color: var(--dsw-alias-state-error-primary);
  font-size: 13px;
}

/* ------------------------------------------------------- empty / loading */

.wa-empty {
  max-width: 460px;
  margin: 8vh auto 0;
  text-align: center;
  color: var(--wa-muted);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.wa-empty-icon {
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  border-radius: var(--wa-round);
  background: var(--wa-surface);
  border: 1px solid var(--wa-line);
  color: var(--dsw-alias-brand-primary);
}

.wa-empty h3 {
  margin: 4px 0 0;
  color: var(--dsw-alias-label-primary);
  font-size: 16px;
}

.wa-empty-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  font-size: 13px;
}

/* ---------------------------------------------------------------- review */

.wa-review-intro,
.wa-review-summary {
  max-width: 560px;
  margin: 4vh auto 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.wa-review-orbit {
  display: grid;
  place-items: center;
  width: 62px;
  height: 62px;
  border-radius: var(--wa-round);
  border: 1px solid color-mix(in srgb, var(--dsw-alias-brand-primary) 40%, transparent);
  background: color-mix(in srgb, var(--dsw-alias-brand-primary) 9%, transparent);
  color: var(--dsw-alias-brand-primary);
}

.wa-review-orbit.is-done {
  color: var(--dsw-alias-state-success-primary);
  border-color: color-mix(in srgb, var(--dsw-alias-state-success-primary) 45%, transparent);
  background: color-mix(in srgb, var(--dsw-alias-state-success-primary) 10%, transparent);
}

.wa-review-intro h2,
.wa-review-summary h2 {
  margin: 14px 0 4px;
  font-size: 22px;
  font-weight: 680;
}

.wa-review-intro > p {
  margin: 0;
  color: var(--wa-muted);
  font-size: 13px;
  max-width: 420px;
}

.wa-review-stats {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
  width: 100%;
  margin: 22px 0 0;
}

.wa-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1px;
  padding: 12px 8px;
  border-radius: 12px;
  border: 1px solid var(--wa-line);
  background: var(--wa-surface);
}

.wa-stat strong {
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.wa-stat span {
  color: var(--wa-muted);
  font-size: 11.5px;
}

.wa-review-settings {
  display: flex;
  gap: 18px;
  margin: 18px 0 0;
  flex-wrap: wrap;
  justify-content: center;
}

.wa-review-settings label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--wa-muted);
  font-size: 12.5px;
}

.wa-review-settings select {
  padding: 5px 9px;
  border-radius: 8px;
  border: 1px solid var(--wa-line);
  background: var(--wa-surface);
  color: var(--dsw-alias-label-primary);
  cursor: pointer;
}

.wa-start-btn {
  margin-top: 22px;
  padding: 10px 26px;
  font-size: 14px;
}

.wa-review-done-hint {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin: 12px 0 0;
  color: var(--dsw-alias-state-success-primary);
  font-size: 12.5px;
}

.wa-review-tip {
  margin: 18px 0 0;
  color: var(--wa-muted);
  font-size: 11.5px;
}

.wa-review-shell {
  max-width: 760px;
  margin: 0 auto;
}

.wa-review-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 14px;
}

.wa-review-progress {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1 1 auto;
}

.wa-review-bar {
  flex: 1 1 auto;
  height: 5px;
  border-radius: var(--wa-round);
  background: var(--wa-surface-2);
  overflow: hidden;
}

.wa-review-bar span {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: var(--dsw-alias-brand-primary);
  transition: width 0.3s ease;
}

.wa-review-counter {
  color: var(--wa-muted);
  font-size: 12px;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}

.wa-review-card {
  display: grid;
  grid-template-columns: minmax(0, 300px) minmax(0, 1fr);
  gap: 0;
  border: 1px solid var(--wa-line);
  border-radius: 18px;
  background: var(--dsw-alias-bg-layer-1);
  overflow: hidden;
}

.wa-review-art {
  position: relative;
  min-height: 280px;
  background: var(--wa-surface-2);
}

.wa-review-art img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.wa-review-art .wa-img-fallback {
  position: absolute;
  inset: 0;
}

.wa-review-body {
  padding: 20px 22px 22px;
  min-width: 0;
}

.wa-review-tags {
  display: flex;
  align-items: center;
  gap: 6px;
}

.wa-review-word {
  margin: 8px 0 2px;
  font-size: 32px;
  line-height: 1.15;
  font-weight: 700;
  letter-spacing: -0.015em;
  overflow-wrap: anywhere;
}

.wa-reveal-btn {
  display: inline-flex;
  margin-top: 20px;
  padding: 10px 30px;
}

/* \u53D1\u97F3\u884C\u662F inline-flex\uFF0C\u4F1A\u8BA9\u540E\u9762\u7684\u300C\u663E\u793A\u7B54\u6848\u300D\u6324\u5230\u540C\u4E00\u884C\uFF1B\u590D\u4E60\u5361\u7247\u5185\u6539\u4E3A\u5757\u7EA7\u884C */
.wa-review-body .wa-pron-row {
  display: flex;
  flex-wrap: wrap;
  row-gap: 6px;
}

.wa-answer {
  margin-top: 16px;
}

.wa-review-example {
  margin: 14px 0 0;
  font-size: 13.5px;
  line-height: 1.6;
}

.wa-review-example mark {
  background: color-mix(in srgb, var(--dsw-alias-brand-primary) 22%, transparent);
  color: inherit;
  border-radius: 3px;
  padding: 0 1px;
}

.wa-review-example-zh {
  margin: 4px 0 0;
  color: var(--wa-muted);
  font-size: 12.5px;
}

.wa-review-tip-line {
  margin: 12px 0 0;
  padding: 8px 10px;
  border-radius: 9px;
  border: 1px solid color-mix(in srgb, var(--dsw-alias-brand-primary) 26%, transparent);
  background: color-mix(in srgb, var(--dsw-alias-brand-primary) 6%, transparent);
  font-size: 12px;
}

.wa-review-loading {
  display: grid;
  place-items: center;
  padding: 60px 0;
}

.wa-grades {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 8px;
  margin-top: 18px;
}

.wa-grade {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  padding: 9px 6px;
  border: 1px solid var(--wa-line);
  border-radius: 11px;
  background: var(--wa-surface);
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease, transform 0.1s ease;
}

.wa-grade:hover {
  border-color: var(--wa-line-strong);
  background: var(--wa-surface-2);
}

.wa-grade:active {
  transform: scale(0.98);
}

.wa-grade-label {
  font-size: 13px;
  font-weight: 650;
}

.wa-grade-interval {
  color: var(--wa-muted);
  font-size: 11px;
  font-variant-numeric: tabular-nums;
}

.wa-grade-1 .wa-grade-label {
  color: var(--dsw-alias-state-error-primary);
}

.wa-grade-2 .wa-grade-label {
  color: var(--dsw-alias-state-warn-primary);
}

.wa-grade-3 .wa-grade-label {
  color: var(--dsw-alias-brand-primary);
}

.wa-grade-4 .wa-grade-label {
  color: var(--dsw-alias-state-success-primary);
}

.wa-grade-hint {
  margin: 10px 0 0;
  color: var(--wa-muted);
  font-size: 11px;
  text-align: center;
}

.wa-review-summary-actions {
  display: flex;
  gap: 10px;
  margin-top: 22px;
}

/* ----------------------------------------------------------------- about */

.wa-about {
  position: relative;
  width: min(560px, 100%);
  max-height: min(84vh, 760px);
  overflow-y: auto;
  padding: 26px 28px;
  border-radius: 20px;
  border: 1px solid var(--wa-line);
  background: var(--dsw-alias-bg-layer-1);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.35);
}

.wa-about-close {
  position: absolute;
  top: 14px;
  right: 14px;
}

.wa-about h2 {
  margin: 0 0 8px;
  font-size: 20px;
}

.wa-about > p {
  margin: 0;
  color: var(--wa-muted);
  font-size: 13px;
}

.wa-about-section {
  margin-top: 20px;
}

.wa-about-note {
  margin: 6px 0 0;
  color: var(--wa-muted);
  font-size: 12.5px;
  line-height: 1.65;
}

.wa-segmented {
  display: inline-flex;
  padding: 3px;
  border-radius: var(--wa-round);
  border: 1px solid var(--wa-line);
  background: var(--wa-surface);
  gap: 2px;
}

.wa-segmented button {
  padding: 5px 16px;
  border: 0;
  border-radius: var(--wa-round);
  background: transparent;
  color: var(--wa-muted);
  font-size: 12.5px;
  font-weight: 550;
  cursor: pointer;
}

.wa-segmented button.is-on {
  background: color-mix(in srgb, var(--dsw-alias-brand-primary) 14%, transparent);
  color: var(--dsw-alias-brand-primary);
}

/* ------------------------------------------------------------ responsive */

@media (max-width: 860px) {
  .wa-header {
    flex-wrap: wrap;
    padding: 12px 16px 10px;
    gap: 10px;
  }

  .wa-toolbar {
    width: 100%;
  }

  .wa-search {
    flex: 1 1 auto;
    width: auto;
    max-width: none;
  }

  .wa-tabs {
    padding: 0 12px;
  }

  .wa-tabs-meta {
    display: none;
  }

  .wa-main {
    padding: 14px 16px 28px;
  }

  .wa-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 10px;
  }

  .wa-detail {
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: auto minmax(0, 1fr);
    height: 92vh;
  }

  .wa-detail-body {
    padding: 18px 18px 0;
  }

  .wa-detail-art {
    min-height: 0;
    height: auto;
    padding: 14px;
    gap: 8px;
  }

  .wa-detail-img {
    width: auto;
    max-width: 100%;
    max-height: 30vh;
    aspect-ratio: 1 / 1;
    object-fit: contain;
    border-radius: 12px;
  }

  .wa-detail-art .wa-img-fallback {
    width: auto;
    height: 180px;
    aspect-ratio: 1 / 1;
  }

  .wa-review-card {
    grid-template-columns: minmax(0, 1fr);
  }

  .wa-review-art {
    min-height: 0;
    height: 220px;
  }

  .wa-overlay {
    padding: 12px;
  }

  .wa-review-stats {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 560px) {
  .wa-brand-text p {
    display: none;
  }

  .wa-grades {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .wa-headword {
    font-size: 28px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .wa-root *,
  .wa-root *::before,
  .wa-root *::after {
    animation-duration: 0.001ms !important;
    transition-duration: 0.001ms !important;
  }
}

/* ---------------------------------------------------------- lookup text */

.wa-lookup-text {
  display: inline;
}

.wa-lookup-token {
  display: inline;
  padding: 0;
  margin: 0;
  border: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: inherit;
  cursor: pointer;
  border-radius: 3px;
  text-decoration: underline;
  text-decoration-style: dotted;
  text-decoration-color: color-mix(in srgb, var(--dsw-alias-label-primary) 30%, transparent);
  text-underline-offset: 3px;
}

.wa-lookup-token:hover {
  background: color-mix(in srgb, var(--dsw-alias-brand-primary) 14%, transparent);
  text-decoration-color: var(--dsw-alias-brand-primary);
}

.wa-lookup-text mark {
  background: color-mix(in srgb, var(--dsw-alias-brand-primary) 22%, transparent);
  color: inherit;
  border-radius: 3px;
  padding: 0 1px;
}

.wa-lookup {
  position: fixed;
  z-index: 1200;
  width: min(320px, calc(100vw - 32px));
  padding: 16px 18px 14px;
  border-radius: 14px;
  border: 1px solid var(--dsw-alias-border-l2);
  background: var(--dsw-alias-bg-overlay);
  color: var(--dsw-alias-label-primary);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.32);
  animation: wa-fade 0.12s ease;
}

.wa-lookup-close {
  position: absolute;
  top: 8px;
  right: 8px;
}

.wa-lookup-head {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-right: 24px;
}

.wa-lookup-thumb {
  width: 54px;
  height: 54px;
  border-radius: 10px;
  object-fit: cover;
  flex: 0 0 auto;
  background: var(--dsw-alias-bg-layer-2);
}

.wa-lookup-title h3 {
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.01em;
  overflow-wrap: anywhere;
}

.wa-lookup-title p {
  margin: 2px 0 0;
  color: var(--wa-muted);
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 12px;
}

.wa-lookup-meaning {
  margin: 10px 0 0;
  font-size: 13.5px;
  line-height: 1.6;
}

.wa-lookup-missing {
  margin: 0;
  font-size: 18px;
  font-weight: 650;
}

.wa-lookup-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 14px;
}

/* -------------------------------------------------------------- settings */

.wa-settings {
  display: flex;
  flex-direction: column;
  gap: 14px;
  max-width: 880px;
  margin: 0 auto;
}

.wa-panel {
  padding: 16px 18px;
  border-radius: 14px;
  border: 1px solid var(--wa-line);
  background: var(--wa-surface);
}

.wa-panel-hint,
.wa-panel-note {
  margin: 6px 0 0;
  color: var(--wa-muted);
  font-size: 12.5px;
  line-height: 1.65;
}

.wa-panel-path {
  margin: 6px 0 0;
  color: var(--wa-muted);
  font-size: 11.5px;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  word-break: break-all;
}

.wa-field {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  padding: 10px 0;
  border-bottom: 1px solid var(--wa-line);
}

.wa-field:last-of-type {
  border-bottom: 0;
}

.wa-field > div:first-child {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.wa-field b,
.wa-switch-row b {
  font-size: 13.5px;
  font-weight: 600;
}

.wa-field small,
.wa-switch-row small {
  color: var(--wa-muted);
  font-size: 11.5px;
}

.wa-seg {
  display: inline-flex;
  gap: 2px;
  padding: 3px;
  border-radius: var(--wa-round);
  border: 1px solid var(--wa-line);
  background: var(--wa-surface-2);
  flex-wrap: wrap;
}

.wa-seg button {
  min-width: 34px;
  padding: 4px 10px;
  border: 0;
  border-radius: var(--wa-round);
  background: transparent;
  color: var(--wa-muted);
  font-size: 12.5px;
  font-weight: 550;
  cursor: pointer;
}

.wa-seg button.is-on {
  background: color-mix(in srgb, var(--dsw-alias-brand-primary) 16%, transparent);
  color: var(--dsw-alias-brand-primary);
}

.wa-switch-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 10px 0;
  border-bottom: 1px solid var(--wa-line);
  cursor: pointer;
}

.wa-switch-row:last-of-type {
  border-bottom: 0;
}

.wa-switch-row > span {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.wa-switch {
  position: relative;
  width: 38px;
  height: 22px;
  padding: 0;
  border-radius: var(--wa-round);
  border: 1px solid var(--wa-line-strong);
  background: var(--wa-surface-2);
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease;
  flex: 0 0 auto;
}

.wa-switch span {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--dsw-alias-label-secondary);
  transition: transform 0.15s ease, background 0.15s ease;
}

.wa-switch.is-on {
  background: color-mix(in srgb, var(--dsw-alias-brand-primary) 30%, transparent);
  border-color: var(--dsw-alias-brand-primary);
}

.wa-switch.is-on span {
  transform: translateX(16px);
  background: var(--dsw-alias-brand-primary);
}

.wa-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: 7px;
  border-radius: 50%;
  background: var(--dsw-alias-state-idle-primary);
}

.wa-dot.is-on {
  background: var(--dsw-alias-state-success-primary);
}

.wa-offline-source {
  display: flex;
  align-items: center;
  gap: 4px;
  flex-wrap: wrap;
  margin: 12px 0 4px;
  font-size: 13px;
}

.wa-tier-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 12px 0;
}

.wa-tier {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 10px;
  border: 1px solid var(--wa-line);
  background: var(--wa-surface-2);
  cursor: pointer;
}

.wa-tier input {
  accent-color: var(--dsw-alias-brand-primary);
}

.wa-tier > span {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.wa-tier b {
  font-size: 12.5px;
}

.wa-tier small {
  color: var(--wa-muted);
  font-size: 11px;
}

.wa-offline-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 6px;
}

.wa-offline-actions select {
  padding: 7px 10px;
  border-radius: var(--wa-round);
  border: 1px solid var(--wa-line);
  background: var(--wa-surface-2);
  color: var(--dsw-alias-label-primary);
  font-size: 12.5px;
}

.wa-progress {
  margin-top: 14px;
}

.wa-progress-bar {
  height: 6px;
  border-radius: var(--wa-round);
  background: var(--wa-surface-2);
  overflow: hidden;
}

.wa-progress-bar span {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: var(--dsw-alias-brand-primary);
  transition: width 0.3s ease;
}

.wa-progress-meta {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 6px;
  color: var(--wa-muted);
  font-size: 11.5px;
  font-variant-numeric: tabular-nums;
}

.wa-backup-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
}

.wa-danger {
  color: var(--dsw-alias-state-error-primary);
}

.wa-error-text {
  margin: 8px 0 0;
  color: var(--dsw-alias-state-error-primary);
  font-size: 12.5px;
}

.wa-back-btn {
  border: 1px solid var(--wa-line);
  border-radius: var(--wa-round);
}

/* ------------------------------------------------------------ today page */

.wa-today {
  max-width: 980px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.wa-today-head h1 {
  margin: 2px 0 4px;
  font-size: 28px;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.wa-today-head > p:last-child {
  margin: 0;
  color: var(--wa-muted);
  font-size: 13px;
}

.wa-journey {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 220px;
  gap: 16px;
  padding: 20px 22px;
  border-radius: 18px;
  border: 1px solid var(--wa-line);
  background:
    radial-gradient(120% 140% at 0% 0%, color-mix(in srgb, var(--dsw-alias-brand-primary) 13%, transparent), transparent 62%),
    var(--wa-surface);
  overflow: hidden;
}

.wa-journey-copy h2 {
  margin: 6px 0 6px;
  font-size: 24px;
  line-height: 1.25;
  letter-spacing: -0.015em;
}

.wa-journey-copy h2 b {
  color: var(--dsw-alias-brand-primary);
}

.wa-journey-lede {
  margin: 0;
  color: var(--wa-muted);
  font-size: 13px;
}

.wa-journey-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
}

.wa-journey-art {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: var(--wa-muted);
  font-size: 11.5px;
}

.wa-journey-art p {
  margin: 0;
}

.wa-journey-orbit {
  display: grid;
  place-items: center;
  width: 86px;
  height: 86px;
  border-radius: var(--wa-round);
  border: 1px solid color-mix(in srgb, var(--dsw-alias-brand-primary) 35%, transparent);
  background: color-mix(in srgb, var(--dsw-alias-brand-primary) 8%, transparent);
  color: var(--dsw-alias-brand-primary);
}

.wa-teaser {
  position: relative;
  width: 100%;
  height: 110px;
}

.wa-teaser img {
  position: absolute;
  width: 52px;
  height: 52px;
  border-radius: 12px;
  object-fit: cover;
  border: 2px solid var(--dsw-alias-bg-base);
  box-shadow: 0 6px 16px color-mix(in srgb, #000 16%, transparent);
}

.wa-teaser-0 {
  left: 0;
  top: 24px;
  transform: rotate(-6deg);
}

.wa-teaser-1 {
  left: 40px;
  top: 6px;
  transform: rotate(4deg);
}

.wa-teaser-2 {
  left: 80px;
  top: 28px;
  transform: rotate(-3deg);
}

.wa-teaser-3 {
  left: 120px;
  top: 4px;
  transform: rotate(6deg);
}

.wa-teaser-4 {
  left: 160px;
  top: 30px;
  transform: rotate(-5deg);
}

.wa-today-strip {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
}

.wa-today-stat,
.wa-me-stat {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px solid var(--wa-line);
  background: var(--wa-surface);
}

.wa-today-stat strong,
.wa-me-stat strong {
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.wa-today-stat span,
.wa-me-stat span {
  color: var(--wa-muted);
  font-size: 11.5px;
}

.wa-today-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.wa-panel-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 6px;
}

.wa-panel-head .wa-eyebrow {
  margin-bottom: 0;
}

.wa-muted {
  color: var(--wa-muted);
  font-size: 11.5px;
}

.wa-week {
  display: flex;
  align-items: flex-end;
  gap: 8px;
  height: 120px;
  margin: 10px 0 0;
  padding: 0;
  list-style: none;
}

.wa-week li {
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 6px;
  height: 100%;
  min-width: 0;
}

.wa-week li > span {
  width: 100%;
  max-width: 34px;
  border-radius: 6px 6px 3px 3px;
  background: var(--wa-surface-2);
  transition: height 0.2s ease;
}

.wa-week li.is-on > span {
  background: color-mix(in srgb, var(--dsw-alias-brand-primary) 55%, transparent);
}

.wa-week li.is-today > span {
  background: var(--dsw-alias-brand-primary);
}

.wa-week small {
  color: var(--wa-muted);
  font-size: 10.5px;
}

.wa-week li.is-today small {
  color: var(--dsw-alias-brand-primary);
  font-weight: 600;
}

.wa-wotd {
  display: flex;
  align-items: center;
  gap: 14px;
  cursor: pointer;
}

.wa-wotd:hover {
  border-color: var(--wa-line-strong);
}

.wa-wotd-img {
  width: 96px;
  height: 96px;
  border-radius: 12px;
  object-fit: cover;
  flex: 0 0 auto;
}

.wa-wotd-body {
  min-width: 0;
}

.wa-wotd-word {
  margin: 2px 0 0;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.wa-wotd-ipa {
  margin: 0;
  color: var(--wa-muted);
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 11.5px;
}

.wa-wotd-zh {
  margin: 4px 0 0;
  font-size: 12.5px;
}

.wa-wotd-ex {
  margin: 6px 0 0;
  color: var(--wa-muted);
  font-size: 11.5px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.wa-levels {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 10px 0 0;
  padding: 0;
  list-style: none;
}

.wa-levels li button {
  display: grid;
  grid-template-columns: 44px minmax(0, 1fr) 70px 34px;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 6px 8px;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: inherit;
  cursor: pointer;
  text-align: left;
}

.wa-levels li button:hover {
  background: var(--wa-hover);
}

.wa-level-name {
  font-weight: 700;
  font-size: 12.5px;
  color: var(--wa-muted);
}

.wa-level-bar {
  position: relative;
  height: 6px;
  border-radius: 3px;
  background: var(--wa-surface-2);
  overflow: hidden;
}

.wa-level-bar i,
.wa-level-bar b {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  border-radius: 3px;
}

.wa-level-bar i {
  background: color-mix(in srgb, var(--dsw-alias-brand-primary) 45%, transparent);
}

.wa-level-bar b {
  background: var(--dsw-alias-brand-primary);
}

.wa-level-count {
  font-size: 11.5px;
  color: var(--wa-muted);
  text-align: right;
  font-variant-numeric: tabular-nums;
}

.wa-level-count small {
  opacity: 0.7;
}

.wa-level-label {
  font-size: 10.5px;
  color: var(--wa-muted);
}

.wa-btn-lg {
  padding: 10px 22px;
  font-size: 14px;
}

/* ------------------------------------------------------------ learn flow */

.wa-root-focus {
  background: var(--dsw-alias-bg-base);
}

.wa-learn {
  height: 100%;
  min-height: 0;
  display: flex;
  flex-direction: column;
  max-width: 680px;
  margin: 0 auto;
  width: 100%;
  padding: 16px 20px 22px;
}

.wa-learn-top {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  gap: 12px;
}

.wa-learn-progress {
  flex: 1 1 auto;
  height: 6px;
  border-radius: var(--wa-round);
  background: color-mix(in srgb, var(--dsw-alias-label-primary) 16%, transparent);
  overflow: hidden;
}

.wa-learn-progress span {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: var(--dsw-alias-brand-primary);
  transition: width 0.3s ease;
}

.wa-learn-count {
  color: var(--wa-muted);
  font-size: 12px;
  font-variant-numeric: tabular-nums;
}

.wa-learn-count small {
  opacity: 0.7;
}

.wa-learn-stage {
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  padding: 20px 0 8px;
}

.wa-learn-loading,
.wa-learn-empty {
  height: 100%;
  display: grid;
  place-items: center;
}

.wa-learn-label {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 12px;
  color: var(--wa-muted);
  font-size: 12.5px;
}

.wa-quiz .wa-learn-label {
  justify-content: center;
}

.wa-dot.is-warn {
  background: var(--dsw-alias-state-warn-primary);
}

.wa-learn-intro,
.wa-quiz {
  max-width: 640px;
  margin: 0 auto;
}

.wa-learn-card {
  display: grid;
  grid-template-columns: minmax(0, 300px) minmax(0, 1fr);
  border-radius: 16px;
  border: 1px solid var(--wa-line);
  background: var(--wa-surface);
  overflow: hidden;
}

.wa-learn-art {
  width: 100%;
  height: 100%;
  min-height: 280px;
  object-fit: cover;
  background: var(--wa-surface-2);
}

.wa-learn-body {
  padding: 18px 20px;
  min-width: 0;
}

.wa-learn-word {
  margin: 10px 0 0;
  font-size: 32px;
  line-height: 1.15;
  font-weight: 700;
  letter-spacing: -0.015em;
  overflow-wrap: anywhere;
}

.wa-learn-example {
  margin-top: 14px;
  padding: 10px 12px;
  border-radius: 10px;
  background: var(--wa-surface-2);
}

.wa-learn-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 18px;
}

.wa-hint {
  color: var(--wa-muted);
  font-size: 11.5px;
}

.wa-quiz-meaning {
  text-align: center;
  padding: 18px 0 6px;
}

.wa-quiz-meaning .wa-pron-row {
  justify-content: center;
  margin-top: 6px;
}

.wa-quiz-spell {
  display: grid;
  grid-template-columns: minmax(0, 220px) minmax(0, 1fr);
  gap: 16px;
  align-items: center;
}

.wa-quiz-picture {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.wa-quiz-picture .wa-quiz-art {
  width: min(300px, 100%);
}

.wa-quiz-art,
.wa-spell-art {
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 14px;
  object-fit: cover;
  background: var(--wa-surface-2);
}

.wa-cloze {
  margin: 0;
  font-size: 16px;
  line-height: 1.9;
}

.wa-cloze-sm {
  font-size: 14px;
}

.wa-cloze-zh {
  margin: 8px 0 0;
  color: var(--wa-muted);
  font-size: 12.5px;
}

.wa-blank {
  display: inline-block;
  min-width: 3em;
  border-bottom: 2px solid var(--dsw-alias-brand-primary);
  text-align: center;
  color: var(--dsw-alias-brand-primary);
  font-weight: 600;
}

.wa-quiz-listen {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px 0 0;
}

.wa-listen-orb {
  position: relative;
  display: grid;
  place-items: center;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  border: 1px solid color-mix(in srgb, var(--dsw-alias-brand-primary) 40%, transparent);
  background: color-mix(in srgb, var(--dsw-alias-brand-primary) 9%, transparent);
  color: var(--dsw-alias-brand-primary);
  cursor: pointer;
}

.wa-listen-orb:hover {
  background: color-mix(in srgb, var(--dsw-alias-brand-primary) 16%, transparent);
}

.wa-options {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
  max-width: 600px;
  margin: 18px auto 0;
  padding: 0;
  list-style: none;
}

.wa-option {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  min-height: 52px;
  padding: 10px 14px;
  border: 1px solid var(--wa-line);
  border-radius: 11px;
  background: var(--wa-surface);
  color: var(--dsw-alias-label-primary);
  font-size: 13.5px;
  text-align: left;
  cursor: pointer;
  transition: border-color 0.15s ease, background 0.15s ease;
}

.wa-option:hover:not(:disabled) {
  border-color: var(--wa-line-strong);
  background: var(--wa-surface-2);
}

.wa-option kbd {
  flex: 0 0 auto;
  min-width: 18px;
  padding: 0 4px;
  border-radius: 4px;
  background: var(--wa-surface-2);
  color: var(--wa-muted);
  font-size: 10.5px;
  text-align: center;
}

.wa-option.is-answer {
  border-color: color-mix(in srgb, var(--dsw-alias-state-success-primary) 65%, transparent);
  background: color-mix(in srgb, var(--dsw-alias-state-success-primary) 16%, transparent);
  font-weight: 600;
}

.wa-option.is-chosen {
  border-color: color-mix(in srgb, var(--dsw-alias-state-error-primary) 65%, transparent);
  background: color-mix(in srgb, var(--dsw-alias-state-error-primary) 14%, transparent);
}

.wa-option.is-dim {
  opacity: 0.45;
}

.wa-spell {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.wa-slots {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: center;
}

.wa-slot {
  display: grid;
  place-items: center;
  width: 30px;
  height: 38px;
  border-radius: 7px;
  border: 1px solid var(--wa-line);
  background: var(--wa-surface);
  font-size: 17px;
  font-weight: 600;
  text-transform: lowercase;
}

.wa-slot.is-space {
  width: 12px;
  border: 0;
  background: transparent;
}

.wa-slot.is-filled {
  border-color: var(--wa-line-strong);
}

.wa-slot.is-caret {
  border-color: var(--dsw-alias-brand-primary);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--dsw-alias-brand-primary) 20%, transparent);
}

.wa-slot.is-ok {
  border-color: color-mix(in srgb, var(--dsw-alias-state-success-primary) 60%, transparent);
  color: var(--dsw-alias-state-success-primary);
}

.wa-slot.is-bad {
  border-color: color-mix(in srgb, var(--dsw-alias-state-error-primary) 60%, transparent);
  color: var(--dsw-alias-state-error-primary);
}

.wa-spell-input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  width: 1px;
  height: 1px;
}

.wa-spell-actions {
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
}

.wa-spell-zh {
  margin: 0 0 8px;
  font-size: 14px;
}

.wa-feedback {
  max-width: 600px;
  margin: 16px auto 0;
  padding: 14px 16px;
  border-radius: 14px;
  border: 1px solid var(--wa-line);
  background: var(--wa-surface);
}

.wa-feedback.is-right {
  border-color: color-mix(in srgb, var(--dsw-alias-state-success-primary) 40%, transparent);
  background: color-mix(in srgb, var(--dsw-alias-state-success-primary) 6%, transparent);
}

.wa-feedback.is-wrong {
  border-color: color-mix(in srgb, var(--dsw-alias-state-error-primary) 35%, transparent);
  background: color-mix(in srgb, var(--dsw-alias-state-error-primary) 5%, transparent);
}

.wa-feedback-main {
  display: grid;
  grid-template-columns: 64px minmax(0, 1fr) auto;
  align-items: center;
  gap: 14px;
}

.wa-feedback-main > .wa-btn {
  justify-self: end;
  white-space: nowrap;
}

.wa-feedback-thumb {
  width: 64px;
  height: 64px;
  border-radius: 10px;
  object-fit: cover;
  flex: 0 0 auto;
}

.wa-feedback-text {
  flex: 1 1 220px;
  min-width: 0;
}

.wa-feedback-verdict {
  margin: 0;
  font-size: 12px;
  font-weight: 650;
  color: var(--dsw-alias-state-success-primary);
}

.wa-feedback.is-wrong .wa-feedback-verdict {
  color: var(--dsw-alias-state-error-primary);
}

.wa-feedback-word {
  margin: 2px 0 0;
  font-size: 18px;
  font-weight: 700;
}

.wa-feedback-word .wa-ipa {
  margin-left: 8px;
  font-weight: 400;
}

.wa-feedback-zh {
  margin: 2px 0 0;
  color: var(--wa-muted);
  font-size: 12px;
}

.wa-feedback-ex {
  margin: 6px 0 0;
  color: var(--wa-muted);
  font-size: 12px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.wa-learn-summary {
  max-width: 680px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.wa-summary-orbit {
  display: grid;
  place-items: center;
  width: 62px;
  height: 62px;
  border-radius: var(--wa-round);
  border: 1px solid color-mix(in srgb, var(--dsw-alias-brand-primary) 40%, transparent);
  background: color-mix(in srgb, var(--dsw-alias-brand-primary) 9%, transparent);
  color: var(--dsw-alias-brand-primary);
}

.wa-learn-summary h1 {
  margin: 10px 0 4px;
  font-size: 26px;
  letter-spacing: -0.02em;
}

.wa-summary-stats {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 8px;
  width: 100%;
  margin: 18px 0 0;
}

.wa-summary-stat {
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding: 10px;
  border-radius: 12px;
  border: 1px solid var(--wa-line);
  background: var(--wa-surface);
}

.wa-summary-stat strong {
  font-size: 20px;
}

.wa-summary-stat span {
  color: var(--wa-muted);
  font-size: 11px;
}

.wa-summary-stat.is-hero {
  border-color: color-mix(in srgb, var(--dsw-alias-brand-primary) 40%, transparent);
}

.wa-summary-stat.is-hero strong {
  color: var(--dsw-alias-brand-primary);
}

.wa-summary-words {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin: 16px 0 0;
  padding: 0;
  list-style: none;
}

.wa-summary-words li {
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 44px;
  padding: 6px 10px 6px 6px;
  border-radius: 10px;
  border: 1px solid var(--wa-line);
  background: var(--wa-surface);
  cursor: pointer;
}

.wa-summary-words li.is-wrong {
  border-color: color-mix(in srgb, var(--dsw-alias-state-error-primary) 45%, transparent);
}

.wa-summary-thumb {
  width: 32px;
  height: 32px;
  border-radius: 7px;
  object-fit: cover;
}

.wa-summary-words b {
  font-size: 12.5px;
}

.wa-summary-words small {
  color: var(--wa-muted);
  font-size: 11px;
  max-width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.wa-summary-note {
  margin: 14px 0 0;
  color: var(--wa-muted);
  font-size: 12px;
}

.wa-summary-actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 18px;
}

/* -------------------------------------------------------------- me page */

.wa-me-strip {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 8px;
}

.wa-me-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.wa-heatmap {
  display: grid;
  grid-template-columns: repeat(21, 1fr);
  gap: 3px;
  margin: 12px 0 0;
}

.wa-heatmap span {
  aspect-ratio: 1 / 1;
  border-radius: 2px;
  background: color-mix(in srgb, var(--dsw-alias-label-primary) 10%, var(--wa-surface-2));
  border: 1px solid color-mix(in srgb, var(--dsw-alias-label-primary) 6%, transparent);
}

.wa-heat-1 {
  background: color-mix(in srgb, var(--dsw-alias-brand-primary) 25%, var(--wa-surface-2));
}

.wa-heat-2 {
  background: color-mix(in srgb, var(--dsw-alias-brand-primary) 45%, var(--wa-surface-2));
}

.wa-heat-3 {
  background: color-mix(in srgb, var(--dsw-alias-brand-primary) 70%, var(--wa-surface-2));
}

.wa-heat-4 {
  background: var(--dsw-alias-brand-primary);
}

.wa-heat-x {
  opacity: 0.35;
}

.wa-forecast {
  display: flex;
  align-items: flex-end;
  gap: 8px;
  height: 110px;
  margin: 12px 0 0;
  padding: 0;
  list-style: none;
}

.wa-forecast li {
  flex: 1 1 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
}

.wa-forecast li > span {
  width: 100%;
  max-width: 26px;
  border-radius: 5px 5px 2px 2px;
  background: color-mix(in srgb, var(--dsw-alias-brand-primary) 45%, transparent);
}

.wa-forecast b {
  font-size: 11px;
}

.wa-forecast small {
  color: var(--wa-muted);
  font-size: 10px;
}

.wa-mistakes {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 8px;
  margin: 10px 0 0;
  padding: 0;
  list-style: none;
}

.wa-mistakes li button {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 6px 10px 6px 6px;
  border: 1px solid var(--wa-line);
  border-radius: 10px;
  background: var(--wa-surface);
  color: inherit;
  text-align: left;
  cursor: pointer;
}

.wa-mistakes li button:hover {
  border-color: var(--wa-line-strong);
  background: var(--wa-surface-2);
}

.wa-mistake-thumb {
  width: 34px;
  height: 34px;
  border-radius: 8px;
  object-fit: cover;
}

.wa-mistakes li button > span {
  display: flex;
  flex-direction: column;
  gap: 1px;
  min-width: 0;
  flex: 1 1 auto;
}

.wa-mistakes b {
  font-size: 12.5px;
}

.wa-mistakes small {
  color: var(--wa-muted);
  font-size: 11px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.wa-mistakes em {
  color: var(--wa-muted);
  font-size: 10.5px;
  font-style: normal;
}

@media (max-width: 640px) {
  .wa-feedback-main {
    grid-template-columns: 56px minmax(0, 1fr);
  }

  .wa-feedback-main > .wa-btn {
    grid-column: 1 / -1;
    justify-self: end;
  }

  .wa-feedback-thumb {
    width: 56px;
    height: 56px;
  }
}

@media (max-width: 860px) {
  .wa-tabs {
    overflow-x: auto;
    scrollbar-width: none;
  }

  .wa-tabs::-webkit-scrollbar {
    display: none;
  }

  .wa-tabs > button {
    flex: 0 0 auto;
  }

  .wa-today {
    gap: 12px;
  }

  .wa-journey {
    grid-template-columns: minmax(0, 1fr);
  }

  .wa-journey-art {
    display: none;
  }

  .wa-today-strip {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .wa-today-grid,
  .wa-me-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .wa-me-strip {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .wa-learn {
    padding: 12px 14px 18px;
  }

  .wa-learn-card {
    grid-template-columns: minmax(0, 1fr);
  }

  .wa-learn-art {
    min-height: 0;
    max-height: 240px;
  }

  .wa-quiz-spell {
    grid-template-columns: minmax(0, 1fr);
  }

  .wa-quiz-art,
  .wa-spell-art {
    max-height: 220px;
    object-fit: contain;
    background: transparent;
  }

  .wa-options {
    grid-template-columns: minmax(0, 1fr);
  }

  .wa-summary-stats {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

/* ---------------------------------------------------- today (v0.3.2) */

.wa-today {
  max-width: 1020px;
}

.wa-today-hero {
  position: relative;
  min-height: 236px;
  border-radius: 20px;
  border: 1px solid var(--wa-line);
  overflow: hidden;
  background:
    radial-gradient(130% 100% at 0% 0%, color-mix(in srgb, var(--dsw-alias-brand-primary) 22%, transparent), transparent 65%),
    var(--wa-surface);
}

.wa-today-hero-art {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 42%;
}

.wa-today-hero-shade {
  position: absolute;
  inset: 0;
  background: linear-gradient(96deg, rgba(9, 14, 24, 0.9) 8%, rgba(9, 14, 24, 0.62) 44%, rgba(9, 14, 24, 0.12) 100%);
}

.wa-today-hero-body {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  max-width: 560px;
  padding: 26px 30px;
  color: #f5f7fb;
}

.wa-today-hero-body .wa-eyebrow {
  margin: 0;
  color: rgba(245, 247, 251, 0.72);
}

.wa-today-hero-body h2 {
  margin: 4px 0 0;
  font-size: 28px;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.wa-today-hero-body h2 b {
  color: #ffd889;
}

.wa-today-hero-lede {
  margin: 2px 0 0;
  color: rgba(245, 247, 251, 0.78);
  font-size: 13px;
}

.wa-today-hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 14px;
}

.wa-today-hero-actions .wa-btn-ghost {
  color: #f5f7fb;
  border-color: rgba(245, 247, 251, 0.32);
}

.wa-today-hero-actions .wa-btn-ghost:hover {
  background: rgba(245, 247, 251, 0.12);
}

.wa-today-teaser {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 14px;
}

.wa-today-teaser-img {
  width: 38px;
  height: 38px;
  border-radius: 9px;
  object-fit: cover;
  border: 2px solid rgba(255, 255, 255, 0.65);
}

.wa-today-teaser span {
  margin-left: 4px;
  color: rgba(245, 247, 251, 0.7);
  font-size: 11px;
}

.wa-today-strip {
  grid-template-columns: 1.3fr repeat(3, minmax(0, 1fr));
}

.wa-today-goal {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px solid var(--wa-line);
  background: var(--wa-surface);
}

.wa-today-goal > div:last-child {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.wa-today-goal strong {
  font-size: 13px;
  font-weight: 650;
}

.wa-today-goal span {
  color: var(--wa-muted);
  font-size: 11.5px;
}

.wa-ring {
  position: relative;
  flex: 0 0 auto;
}

.wa-ring-track {
  stroke: color-mix(in srgb, var(--dsw-alias-label-primary) 12%, transparent);
}

.wa-ring-fill {
  stroke: var(--dsw-alias-brand-primary);
  transition: stroke-dashoffset 0.3s ease;
}

.wa-ring-label {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0;
  text-align: center;
}

.wa-ring-label b {
  font-size: 21px;
  line-height: 1.1;
  font-weight: 700;
}

.wa-ring-label small {
  color: var(--wa-muted);
  font-size: 10px;
}

.wa-week li b {
  color: var(--wa-muted);
  font-size: 10px;
  font-weight: 600;
  min-height: 12px;
  font-variant-numeric: tabular-nums;
}

.wa-week li.is-zero > span {
  background: color-mix(in srgb, var(--dsw-alias-label-primary) 12%, transparent);
}

.wa-week li.is-today b {
  color: var(--dsw-alias-brand-primary);
}

.wa-wotd {
  display: grid;
  grid-template-columns: 128px minmax(0, 1fr);
  align-items: start;
  gap: 14px;
}

.wa-wotd-img {
  width: 128px;
  height: 128px;
  border-radius: 14px;
  object-fit: cover;
}

.wa-wotd-body {
  min-width: 0;
}

.wa-wotd-word {
  margin: 4px 0 0;
  font-size: 26px;
}

.wa-wotd-ipa {
  margin: 0;
}

.wa-wotd-zh {
  margin: 6px 0 0;
  font-size: 13px;
}

.wa-wotd-ex {
  margin: 8px 0 0;
  font-size: 12px;
  -webkit-line-clamp: 2;
}

.wa-wotd .wa-pron-row {
  margin-top: 2px;
  gap: 6px;
}

.wa-route {
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 4px;
  margin: 18px 0 0;
  padding: 6px 4px 0;
  list-style: none;
}

.wa-route-line {
  position: absolute;
  left: 4%;
  right: 4%;
  top: 22px;
  height: 2px;
  background: color-mix(in srgb, var(--dsw-alias-label-primary) 12%, transparent);
  border-radius: 2px;
}

.wa-route li {
  position: relative;
  z-index: 1;
  flex: 1 1 0;
  min-width: 0;
}

.wa-route button {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  width: 100%;
  padding: 0 4px;
  border: 0;
  background: transparent;
  color: inherit;
  cursor: pointer;
  text-align: center;
}

.wa-route button:hover .wa-route-node {
  border-color: var(--dsw-alias-brand-primary);
}

.wa-route-node {
  position: relative;
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid var(--wa-line-strong);
  background: var(--dsw-alias-bg-base);
  color: var(--wa-muted);
  font-size: 12px;
  font-weight: 700;
  transition: border-color 0.15s ease, color 0.15s ease;
}

.wa-route button.is-on .wa-route-node {
  border-color: color-mix(in srgb, var(--dsw-alias-brand-primary) 55%, transparent);
  color: var(--dsw-alias-brand-primary);
  background: color-mix(in srgb, var(--dsw-alias-brand-primary) 8%, var(--dsw-alias-bg-base));
}

.wa-route button.is-start .wa-route-node {
  border-color: var(--dsw-alias-brand-primary);
  color: var(--dsw-alias-bg-base);
  background: var(--dsw-alias-brand-primary);
}

.wa-route-node em {
  position: absolute;
  top: -16px;
  left: 50%;
  transform: translateX(-50%);
  padding: 0 6px;
  border-radius: var(--wa-round);
  background: var(--dsw-alias-brand-primary);
  color: var(--dsw-alias-bg-base);
  font-size: 9.5px;
  font-style: normal;
  font-weight: 600;
  white-space: nowrap;
}

.wa-route-name {
  font-size: 11px;
  color: var(--wa-muted);
}

.wa-route-count {
  font-size: 10.5px;
  color: var(--wa-muted);
  font-variant-numeric: tabular-nums;
}

.wa-route-count small {
  opacity: 0.7;
}

.wa-route-bar {
  display: block;
  width: 72%;
  height: 3px;
  margin-top: 2px;
  border-radius: 2px;
  background: color-mix(in srgb, var(--dsw-alias-label-primary) 10%, transparent);
  overflow: hidden;
}

.wa-route-bar i,
.wa-route-bar b {
  display: block;
  height: 100%;
  border-radius: 2px;
}

.wa-route-bar i {
  background: color-mix(in srgb, var(--dsw-alias-brand-primary) 42%, transparent);
}

.wa-route-bar b {
  margin-top: -3px;
  background: var(--dsw-alias-brand-primary);
}

.wa-topics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(148px, 1fr));
  gap: 8px;
  margin: 12px 0 0;
  padding: 0;
  list-style: none;
}

.wa-topics-grid li button {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
  border: 1px solid var(--wa-line);
  border-radius: 12px;
  background: var(--wa-surface);
  color: inherit;
  cursor: pointer;
  overflow: hidden;
  text-align: left;
}

.wa-topics-grid li button:hover {
  border-color: var(--wa-line-strong);
}

.wa-topics-grid img {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  background: var(--wa-surface-2);
}

.wa-topics-grid li span {
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding: 7px 10px 9px;
}

.wa-topics-grid b {
  font-size: 12.5px;
  font-weight: 600;
}

.wa-topics-grid small {
  color: var(--wa-muted);
  font-size: 10.5px;
}

@media (max-width: 860px) {
  .wa-today-strip {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .wa-today-goal {
    grid-column: 1 / -1;
  }

  .wa-today-hero-body {
    padding: 22px 20px;
  }

  .wa-today-hero-body h2 {
    font-size: 23px;
  }

  .wa-wotd {
    grid-template-columns: 100px minmax(0, 1fr);
  }

  .wa-wotd-img {
    width: 100px;
    height: 100px;
  }

  .wa-route {
    overflow-x: auto;
    justify-content: flex-start;
    gap: 14px;
    padding-bottom: 8px;
  }

  .wa-route-line {
    display: none;
  }

  .wa-route li {
    flex: 0 0 82px;
  }

  .wa-topics-grid {
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  }
}

/* ------------------------------------------- desktop titlebar safe area */

.wa-root {
  position: relative;
}

.wa-root[data-titlebar="true"] {
  padding-top: 40px;
}

.wa-root[data-titlebar="true"]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 38px;
  z-index: 0;
  -webkit-app-region: drag;
}

.wa-root button,
.wa-root input,
.wa-root select,
.wa-root textarea,
.wa-root a,
.wa-root [role="button"],
.wa-root [role="tab"] {
  -webkit-app-region: no-drag;
}

/* ------------------------------------------------- learn shell + bar */

.wa-learn {
  max-width: none;
  margin: 0;
  padding: 0;
  width: 100%;
}

.wa-learn-bar {
  flex: 0 0 auto;
  position: relative;
  z-index: 2;
  border-bottom: 1px solid var(--wa-line);
  background: var(--dsw-alias-bg-base);
}

.wa-learn-bar-inner {
  max-width: 680px;
  margin: 0 auto;
  min-height: 56px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.wa-learn-exit {
  flex: 0 0 auto;
  padding: 6px 10px;
  color: var(--wa-muted);
  font-size: 12.5px;
}

.wa-learn-bar-center {
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
}

.wa-learn-bar-title {
  flex: 0 0 auto;
  color: var(--wa-muted);
  font-size: 12.5px;
  font-weight: 600;
  white-space: nowrap;
}

.wa-learn-bar-center .wa-learn-progress {
  flex: 1 1 auto;
  min-width: 60px;
}

.wa-learn-stage {
  padding: 22px 20px 12px;
}

.wa-learn-stage.is-centered {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.wa-learn-empty {
  min-height: min(420px, 100%);
}

@media (max-width: 640px) {
  .wa-learn-bar-inner {
    padding: 0 14px;
    gap: 8px;
  }

  .wa-learn-bar-title {
    display: none;
  }

  .wa-learn-stage {
    padding: 18px 14px 12px;
  }
}

/* DSH \u5BBF\u4E3B\u4F1A\u901A\u8FC7 Chrome 139+ \u7684 corner-shape \u7ED9\u6309\u94AE\u4F7F\u7528 squircle\uFF1B
   \u63D2\u4EF6\u5185\u6062\u590D\u6211\u4EEC\u81EA\u5DF1\u7684\u5706\u89D2\u8BED\u4E49\uFF08\u6B63\u5706/\u666E\u901A\u5706\u89D2\uFF09\u3002 */
.wa-root,
.wa-root *,
.wa-root *::before,
.wa-root *::after {
  corner-shape: round;
}
`;var y=te(require("react"),1);var ze="/word-atlas/atlas",F={img:1,uk:2,us:4,ex:8,ex2:16};async function Fa(a){let e=await fetch(a,{cache:"no-store"});if(!e.ok)throw new Error(`\u8BCD\u5E93\u52A0\u8F7D\u5931\u8D25\uFF08HTTP ${e.status}\uFF09`);return e.json()}function Yt(a){let e=(a.topics||[]).map(([n,i])=>({slug:n,zh:i})),t=a.cefr||["A1","A2","B1","B2","C1","C2"],r=(a.words||[]).map((n,i)=>{let[s,o,d,u,c,m,x]=n;return{id:s,word:o,zh:d,ipa:u,cefr:t[c]||"",topic:e[m]?.slug||"",topicZh:e[m]?.zh||"",media:x,order:i}});return{id:a.id,name:a.name,count:a.count??r.length,examples:a.examples??0,chunk:a.chunk??100,topics:e,cefr:t,words:r,byId:new Map(r.map(n=>[n.id,n]))}}var Te=null;function Ha(){return Te||(Te=Fa(`${ze}/index.json`).then(Yt).catch(a=>{throw Te=null,a})),Te}var pa=new Map,Oe=new Map;function oe(a,e){let t=pa.get(e);if(t)return Promise.resolve(t);let r=a.byId.get(e);if(!r)return Promise.reject(new Error(`\u627E\u4E0D\u5230\u8BCD\u6761 ${e}`));let n=Math.floor(r.order/a.chunk),i=Oe.get(n);return i||(i=Fa(`${ze}/entries/${n}.json`).then(s=>{for(let o of s)pa.set(o.id,o);Oe.delete(n)}).catch(s=>{throw Oe.delete(n),s}),Oe.set(n,i)),i.then(()=>{let s=pa.get(e);if(!s)throw new Error(`\u627E\u4E0D\u5230\u8BCD\u6761 ${e}`);return s})}var ca=a=>`/word-atlas/brand/${a}`,Wa=a=>`${ze}/thumb/${a}.webp`,Ua=a=>`${ze}/img/${a}.webp`,G=(a,e)=>`${ze}/audio/${a}/${e}.mp3`;function Vt(a){return a&&(typeof a.media=="number"?a.media:a.m)||0}function P(a,e){return(Vt(a)&e)!==0}var qa=require("react"),Ka="/word-atlas/api/progress",Za="word-atlas-dsh:progress:v1",ma={accent:"uk",dailyNew:10,retention:.9,startLevel:0,spell:!0,autoplay:!0};function Ya(){return{v:1,cards:{},bookmarks:[],days:{},mistakes:[],typing:[],session:null,settings:{...ma}}}function Jt(a){return!a||typeof a!="object"||Array.isArray(a)||typeof a.id!="string"||!Array.isArray(a.steps)||!Array.isArray(a.newIds)||!Array.isArray(a.reviewIds)||!Number.isFinite(a.index)||a.index<0||!a.graded||typeof a.graded!="object"||Array.isArray(a.graded)?null:a}function Va(a){return!a||typeof a!="object"||Array.isArray(a)||a.v!==1?null:{v:1,cards:a.cards&&typeof a.cards=="object"&&!Array.isArray(a.cards)?a.cards:{},bookmarks:Array.isArray(a.bookmarks)?a.bookmarks.filter(e=>typeof e=="string"):[],days:a.days&&typeof a.days=="object"&&!Array.isArray(a.days)?a.days:{},mistakes:Array.isArray(a.mistakes)?a.mistakes.filter(e=>typeof e=="string").slice(0,300):[],typing:Array.isArray(a.typing)?a.typing.slice(-500):[],session:Jt(a.session),settings:{...ma,...a.settings&&typeof a.settings=="object"?a.settings:{}},...typeof a.savedAt=="number"?{savedAt:a.savedAt}:{}}}function Xt(){try{let a=localStorage.getItem(Za);return a?Va(JSON.parse(a)):null}catch{return null}}function Be(){try{localStorage.setItem(Za,JSON.stringify(Y))}catch{}}var Y=Xt()||Ya(),ua=new Set,wa=null,Pa=!1;function Fe(){for(let a of ua)a()}function Ja(){clearTimeout(wa),wa=setTimeout(He,800)}function Ga(){return Y}function Qt(a){return ua.add(a),()=>ua.delete(a)}function Xa(){return(0,qa.useSyncExternalStore)(Qt,Ga,Ga)}function J(a){let e=a(Y);!e||e===Y||(Y={...e,v:1,savedAt:Date.now()},Be(),Fe(),Ja())}function He(){if(clearTimeout(wa),!Y.savedAt)return;let a=JSON.stringify(Y);fetch(Ka,{method:"POST",headers:{"Content-Type":"application/json"},body:a}).catch(()=>{})}async function Qa(){if(!Pa){Pa=!0;try{let a=await fetch(Ka,{cache:"no-store"});if(!a.ok)return;let e=Va(await a.json());if(!e)return;let t=e.savedAt||0,r=Y.savedAt||0;t>r?(Y=e,Be(),Fe()):r>t&&Ja()}catch{}}}function we(a=new Date){return`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,"0")}-${String(a.getDate()).padStart(2,"0")}`}function We(a,{newWords:e=0,reviewed:t=0,correct:r=0}={}){let n=we(),i=a[n]||{n:0,r:0,c:0};return{...a,[n]:{n:i.n+e,r:i.r+t,c:i.c+r}}}function me(a,e=new Date){let t=0,r=new Date(e);for(;;){let n=a[we(r)];if(!n||(n.n||0)+(n.r||0)===0){if(t===0&&we(r)===we(e)){r.setDate(r.getDate()-1);continue}break}t+=1,r.setDate(r.getDate()-1)}return t}function Ra(a,e){let t=a.bookmarks.includes(e);return{...a,bookmarks:t?a.bookmarks.filter(r=>r!==e):[e,...a.bookmarks]}}var et="word-atlas-open";function pe(a){return!!a&&typeof a=="object"&&!Array.isArray(a)}function re(a,e=0,t=1/0){return typeof a=="number"&&Number.isFinite(a)&&a>=e&&a<=t}function Rt(a){return pe(a)&&re(a.due)&&re(a.s)&&re(a.d,0,11)&&re(a.el)&&re(a.sd)&&re(a.ls)&&re(a.reps)&&re(a.lapses)&&[0,1,2,3].includes(a.st)&&(a.last===void 0||re(a.last))&&re(a.seen)}function at(){return He(),JSON.stringify({app:"word-atlas",version:2,exported:new Date().toISOString(),progress:{version:2,datasetId:et,cards:Y.cards,bookmarks:Y.bookmarks,days:Y.days,typing:Y.typing,session:null,mistakes:Y.mistakes},settings:Y.settings},null,1)}function tt(a){let e;try{e=JSON.parse(a)}catch{return{ok:!1,error:"\u6587\u4EF6\u4E0D\u662F\u6709\u6548\u7684 JSON\u3002"}}if(!pe(e)||e.app!=="word-atlas"||e.version!==2||!pe(e.progress))return{ok:!1,error:"\u8FD9\u4E0D\u662F\u8BCD\u5149\u7684\u5B66\u4E60\u5907\u4EFD\u3002"};let t=e.progress;if(typeof t.datasetId=="string"&&t.datasetId!==et)return{ok:!1,error:"\u5907\u4EFD\u6765\u81EA\u53E6\u4E00\u4E2A\u8BCD\u5E93\uFF0C\u8BF7\u4F7F\u7528\u8BCD\u5149\u5F00\u653E\u8BCD\u5E93\u7684\u5907\u4EFD\u3002"};let r={};if(pe(t.cards))for(let[u,c]of Object.entries(t.cards))Rt(c)&&(r[u]=c);let n=Array.isArray(t.bookmarks)?t.bookmarks.filter(u=>typeof u=="string").slice(0,2e4):[],i={};if(pe(t.days))for(let[u,c]of Object.entries(t.days)){if(!/^\d{4}-\d{2}-\d{2}$/.test(u)||!pe(c))continue;let m=Number(c.n)||0,x=Number(c.r)||0,h=Number(c.c)||0;i[u]={n:m,r:x,c:h}}let s=Array.isArray(t.mistakes)?t.mistakes.filter(u=>typeof u=="string").slice(0,300):[],o=Array.isArray(t.typing)?t.typing.slice(-500):[],d={...ma,...pe(e.settings)?e.settings:{}};return Y={v:1,cards:r,bookmarks:n,days:i,mistakes:s,typing:o,settings:d,savedAt:Date.now()},Be(),Fe(),He(),{ok:!0,cards:Object.keys(r).length}}function rt(){Y={...Ya(),savedAt:Date.now()},Be(),Fe(),He()}var ha=class a extends Error{constructor(e="FSRS Error"){super(e),this.name="FSRSError",Error.captureStackTrace?.(this,a)}},K=class a extends ha{constructor(e){super(e),this.name="FSRSValidationError",Error.captureStackTrace?.(this,a)}},D=(a=>(a[a.New=0]="New",a[a.Learning=1]="Learning",a[a.Review=2]="Review",a[a.Relearning=3]="Relearning",a))(D||{}),v=(a=>(a[a.Manual=0]="Manual",a[a.Again=1]="Again",a[a.Hard=2]="Hard",a[a.Good=3]="Good",a[a.Easy=4]="Easy",a))(v||{}),T=class a{static card(e){return{...e,state:a.state(e.state),due:a.time(e.due),last_review:e.last_review?a.time(e.last_review):void 0}}static rating(e){if(typeof e=="string"){let t=e.charAt(0).toUpperCase(),r=e.slice(1).toLowerCase(),n=v[`${t}${r}`];if(n===void 0)throw new K(`Invalid rating:[${e}]`);return n}else if(typeof e=="number")return e;throw new K(`Invalid rating:[${e}]`)}static state(e){if(typeof e=="string"){let t=e.charAt(0).toUpperCase(),r=e.slice(1).toLowerCase(),n=D[`${t}${r}`];if(n===void 0)throw new K(`Invalid state:[${e}]`);return n}else if(typeof e=="number")return e;throw new K(`Invalid state:[${e}]`)}static time(e){if(e instanceof Date)return e;let t=new Date(e);if(typeof e=="object"&&e!==null&&!Number.isNaN(Date.parse(e)||+t))return t;if(typeof e=="string"){let r=Date.parse(e);if(Number.isNaN(r))throw new K(`Invalid date:[${e}]`);return new Date(r)}else if(typeof e=="number")return new Date(e);throw new K(`Invalid date:[${e}]`)}static review_log(e){return{...e,due:a.time(e.due),rating:a.rating(e.rating),state:a.state(e.state),review:a.time(e.review)}}};Date.prototype.scheduler=function(a,e){return ee(this,a,e)};Date.prototype.diff=function(a,e){return ge(this,a,e)};Date.prototype.format=function(){return er(this)};Date.prototype.dueFormat=function(a,e,t){return ar(this,a,e,t)};function ee(a,e,t){return new Date(t?T.time(a).getTime()+e*24*60*60*1e3:T.time(a).getTime()+e*60*1e3)}function ge(a,e,t){if(!a||!e)throw new K("Invalid date");let r=T.time(a).getTime()-T.time(e).getTime(),n=0;switch(t){case"days":n=Math.floor(r/(1440*60*1e3));break;case"minutes":n=Math.floor(r/(60*1e3));break}return n}function er(a){let e=T.time(a),t=e.getFullYear(),r=e.getMonth()+1,n=e.getDate(),i=e.getHours(),s=e.getMinutes(),o=e.getSeconds();return`${t}-${Me(r)}-${Me(n)} ${Me(i)}:${Me(s)}:${Me(o)}`}function Me(a){return a<10?`0${a}`:`${a}`}var ga=[60,60,24,31,12],fa=["second","min","hour","day","month","year"];function ar(a,e,t,r=fa){a=T.time(a),e=T.time(e),r.length!==fa.length&&(r=fa);let n=a.getTime()-e.getTime(),i=0;for(n/=1e3,i=0;i<ga.length&&!(n<ga[i]);i++)n/=ga[i];return`${Math.floor(n)}${t?r[i]:""}`}var tr=Object.freeze([v.Again,v.Hard,v.Good,v.Easy]),rr=[{start:2.5,end:7,factor:.15},{start:7,end:20,factor:.1},{start:20,end:1/0,factor:.05}];function nr(a,e,t){let r=1;for(let s of rr)r+=s.factor*Math.max(Math.min(a,s.end)-s.start,0);a=Math.min(a,t);let n=Math.max(2,Math.round(a-r)),i=Math.min(Math.round(a+r),t);return a>e&&(n=Math.max(n,e+1)),n=Math.min(n,i),{min_ivl:n,max_ivl:i}}function ae(a,e,t){return Math.min(Math.max(a,e),t)}function R(a,e){let t=10**e;return Math.round(a*t)/t}function ir(a,e){let t=Date.UTC(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate()),r=Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate());return Math.floor((r-t)/864e5)}var sr=a=>{let e=a.slice(-1),t=parseInt(a.slice(0,-1),10);if(Number.isNaN(t)||!Number.isFinite(t)||t<0)throw new K(`Invalid step value: ${a}`);switch(e){case"m":return t;case"h":return t*60;case"d":return t*1440;default:throw new K(`Invalid step unit: ${a}, expected m/h/d`)}},or=(a,e,t)=>{let r=e===D.Relearning||e===D.Review?a.relearning_steps:a.learning_steps,n=r.length;if(n===0||t>=n)return{};let i=r[0],s=sr,o=()=>s(i),d=()=>{if(n===1)return Math.round(s(i)*1.5);let h=r[1];return Math.round((s(i)+s(h))/2)},u=h=>h<0||h>=n?null:r[h],c=h=>s(h),m={},x=u(Math.max(0,t));if(e===D.Review)return m[v.Again]={scheduled_minutes:s(x),next_step:0},m;{m[v.Again]={scheduled_minutes:o(),next_step:0},m[v.Hard]={scheduled_minutes:d(),next_step:t};let h=u(t+1);if(h){let N=c(h);N&&(m[v.Good]={scheduled_minutes:Math.round(N),next_step:t+1})}}return m};function lr(){let a=this.review_time.getTime(),e=this.current.reps,t=this.current.difficulty*this.current.stability;return`${a}_${e}_${t}`}var Ke=(a=>(a.SCHEDULER="Scheduler",a.LEARNING_STEPS="LearningSteps",a.SEED="Seed",a))(Ke||{}),Pe=class{last;current;review_time;next=new Map;algorithm;strategies;elapsed_days=0;constructor(e,t,r,n){this.algorithm=r,this.last=T.card(e),this.current=T.card(e),this.review_time=T.time(t),this.strategies=n,this.init()}checkGrade(e){if(!Number.isFinite(e)||e<1||e>4)throw new K(`Invalid grade "${e}",expected 1-4`)}init(){let{state:e,last_review:t}=this.current,r=0;e!==D.New&&t&&(r=ir(t,this.review_time)),this.current.last_review=this.review_time,this.elapsed_days=r,this.current.elapsed_days=r,this.current.reps+=1;let n=lr;if(this.strategies){let i=this.strategies.get(Ke.SEED);i&&(n=i)}this.algorithm.seed=n.call(this)}preview(){return{[v.Again]:this.review(v.Again),[v.Hard]:this.review(v.Hard),[v.Good]:this.review(v.Good),[v.Easy]:this.review(v.Easy),[Symbol.iterator]:this.previewIterator.bind(this)}}*previewIterator(){for(let e of tr)yield this.review(e)}review(e){let{state:t}=this.last,r;switch(this.checkGrade(e),t){case D.New:r=this.newState(e);break;case D.Learning:case D.Relearning:r=this.learningState(e);break;case D.Review:r=this.reviewState(e);break}return r}buildLog(e){let{last_review:t,due:r,elapsed_days:n}=this.last;return{rating:e,state:this.current.state,due:t||r,stability:this.current.stability,difficulty:this.current.difficulty,elapsed_days:this.elapsed_days,last_elapsed_days:n,scheduled_days:this.current.scheduled_days,learning_steps:this.current.learning_steps,review:this.review_time}}},ba=class{c;s0;s1;s2;constructor(e){let t=dr();this.c=1,this.s0=t(" "),this.s1=t(" "),this.s2=t(" "),e==null&&(e=Date.now()),this.s0-=t(e),this.s0<0&&(this.s0+=1),this.s1-=t(e),this.s1<0&&(this.s1+=1),this.s2-=t(e),this.s2<0&&(this.s2+=1)}next(){let e=2091639*this.s0+this.c*23283064365386963e-26;return this.s0=this.s1,this.s1=this.s2,this.c=e|0,this.s2=e-this.c,this.s2}set state(e){this.c=e.c,this.s0=e.s0,this.s1=e.s1,this.s2=e.s2}get state(){return{c:this.c,s0:this.s0,s1:this.s1,s2:this.s2}}};function dr(){let a=4022871197;return function(t){t=String(t);for(let r=0;r<t.length;r++){a+=t.charCodeAt(r);let n=.02519603282416938*a;a=n>>>0,n-=a,n*=a,a=n>>>0,n-=a,a+=n*4294967296}return(a>>>0)*23283064365386963e-26}}function pr(a){let e=new ba(a),t=()=>e.next();return t.int32=()=>e.next()*4294967296|0,t.double=()=>t()+(t()*2097152|0)*11102230246251565e-32,t.state=()=>e.state,t.importState=r=>(e.state=r,t),t}var cr="5.4.2",ur=.9,wr=36500,mr=!1,Ze=!0,gr=Object.freeze(["1m","10m"]),fr=Object.freeze(["10m"]),dn=`v${cr} using FSRS-6.0`,ne=.001;var Ue=100,nt=.5,hr=.1542,it=Object.freeze([.212,1.2931,2.3065,8.2956,6.4133,.8334,3.0194,.001,1.8722,.1666,.796,1.4835,.0614,.2629,1.6483,.6014,1.8729,.5425,.0912,.0658,hr]),st=2,br=(a,e=Ze)=>[[ne,Ue],[ne,Ue],[ne,Ue],[ne,Ue],[1,10],[.001,4],[.001,4],[.001,.75],[0,4.5],[0,.8],[.001,3.5],[.001,5],[.001,.25],[.001,.9],[0,4],[0,1],[1,6],[0,a],[0,a],[e?.01:0,.8],[.1,.8]],fe=(a,e,t=Ze)=>{let r=br(st,t).slice(0,a.length);if(Math.max(0,e)>1){let n=ae(a[11]||0,r[11][0],r[11][1]),i=ae(a[13]||0,r[13][0],r[13][1]),s=ae(a[14]||0,r[14][0],r[14][1]),o=-(Math.log(n)+Math.log(Math.pow(2,i)-1)+s*.3)/e,d=ae(R(Math.sqrt(Math.max(o,0)),8),.01,st);r[17]&&(r[17]=[r[17][0],d]),r[18]&&(r[18]=[r[18][0],d])}return r.map(([n,i],s)=>ae(a[s]||0,n,i))};var Na=(a,e=0,t=Ze)=>{if(a===void 0)return[...it];switch(a.length){case 21:return fe(Array.from(a),e,t);case 19:return console.debug("[FSRS-6]auto fill w from 19 to 21 length"),fe(Array.from(a),e,t).concat([0,nt]);case 17:{let r=fe(Array.from(a),e,t);return r[4]=+(r[5]*2+r[4]).toFixed(8),r[5]=+(Math.log(r[5]*3+1)/3).toFixed(8),r[6]=+(r[6]+.5).toFixed(8),console.debug("[FSRS-6]auto fill w from 17 to 21 length"),r.concat([0,0,0,nt])}default:return console.warn("[FSRS]Invalid parameters length, using default parameters"),[...it]}},xr=a=>{let e=Array.isArray(a?.learning_steps)?a.learning_steps:gr,t=Array.isArray(a?.relearning_steps)?a.relearning_steps:fr,r=a?.enable_short_term??Ze,n=Na(a?.w,t.length,r);return{request_retention:a?.request_retention||ur,maximum_interval:a?.maximum_interval||wr,w:n,enable_fuzz:a?.enable_fuzz??mr,enable_short_term:r,learning_steps:e,relearning_steps:t}};function he(a,e){let t={due:a?T.time(a):new Date,stability:0,difficulty:0,elapsed_days:0,scheduled_days:0,reps:0,lapses:0,learning_steps:0,state:D.New,last_review:void 0};return e&&typeof e=="function"?e(t):t}var ot=a=>{let e=typeof a=="number"?-a:-a[20],t=Math.exp(Math.pow(e,-1)*Math.log(.9))-1;return{decay:e,factor:R(t,8)}};function xa(a,e,t){let{decay:r,factor:n}=ot(a);return R(Math.pow(1+n*e/t,r),8)}var ya=class{param;intervalModifier;_seed;constructor(e){this.param=new Proxy(this.prepare_parameters(e),this.params_handler_proxy()),this.intervalModifier=this.calculate_interval_modifier(this.param.request_retention),this.forgetting_curve=xa.bind(this,this.param.w)}get interval_modifier(){return this.intervalModifier}set seed(e){this._seed=e}calculate_interval_modifier(e){if(e<=0||e>1)throw new K("Requested retention rate should be in the range (0,1]");let{decay:t,factor:r}=ot(this.param.w);return R((Math.pow(e,1/t)-1)/r,8)}get parameters(){return this.param}set parameters(e){this.update_parameters(e)}params_handler_proxy(){let e=this;return{set:function(t,r,n){return r==="request_retention"&&Number.isFinite(n)?e.intervalModifier=e.calculate_interval_modifier(Number(n)):r==="w"&&(n=Na(n,t.relearning_steps.length,t.enable_short_term),n=fe(Array.from(n),t.relearning_steps.length,t.enable_short_term),e.forgetting_curve=xa.bind(this,n),e.intervalModifier=e.calculate_interval_modifier(Number(t.request_retention))),Reflect.set(t,r,n),!0}}}update_parameters(e){let t=this.prepare_parameters(e);for(let r in t){let n=r;this.param[n]=t[n]}}prepare_parameters=e=>{let t=xr(e);return t.w=fe(Array.from(t.w),t.relearning_steps.length,t.enable_short_term),t};init_stability(e){return Math.max(this.param.w[e-1],.1)}init_difficulty(e){let t=this.param.w,r=t[4]-Math.exp((e-1)*t[5])+1;return R(r,8)}apply_fuzz(e,t){if(!this.param.enable_fuzz||e<2.5)return Math.round(e);let n=pr(this._seed)(),{min_ivl:i,max_ivl:s}=nr(e,t,this.param.maximum_interval);return Math.floor(n*(s-i+1)+i)}next_interval(e,t){let r=Math.min(Math.max(1,Math.round(e*this.intervalModifier)),this.param.maximum_interval);return this.apply_fuzz(r,t)}linear_damping(e,t){return R(e*(10-t)/9,8)}next_difficulty(e,t){let r=-this.param.w[6]*(t-3),n=e+this.linear_damping(r,e);return ae(this.mean_reversion(this.init_difficulty(v.Easy),n),1,10)}mean_reversion(e,t){let r=this.param.w;return R(r[7]*e+(1-r[7])*t,8)}next_recall_stability(e,t,r,n){let i=this.param.w,s=v.Hard===n?i[15]:1,o=v.Easy===n?i[16]:1;return R(ae(t*(1+Math.exp(i[8])*(11-e)*Math.pow(t,-i[9])*(Math.exp((1-r)*i[10])-1)*s*o),ne,36500),8)}next_forget_stability(e,t,r){let n=this.param.w;return R(ae(n[11]*Math.pow(e,-n[12])*(Math.pow(t+1,n[13])-1)*Math.exp((1-r)*n[14]),ne,36500),8)}next_short_term_stability(e,t){let r=this.param.w,n=Math.pow(e,-r[19])*Math.exp(r[17]*(t-3+r[18])),i=t>=v.Hard?Math.max(n,1):n;return R(ae(e*i,ne,36500),8)}forgetting_curve;next_state(e,t,r,n){let{difficulty:i,stability:s}=e??{difficulty:0,stability:0};if(t<0)throw new K(`Invalid delta_t "${t}"`);if(r<0||r>4)throw new K(`Invalid grade "${r}"`);if(i===0&&s===0)return{difficulty:ae(this.init_difficulty(r),1,10),stability:this.init_stability(r)};if(r===0)return{difficulty:i,stability:s};if(i<1||s<ne)throw new K(`Invalid memory state { difficulty: ${i}, stability: ${s} }`);let o=this.param.w;n=typeof n=="number"?n:this.forgetting_curve(t,s);let d;if(t===0&&this.param.enable_short_term)d=this.next_short_term_stability(s,r);else if(r===1){let c=this.next_forget_stability(i,s,n),[m,x]=[0,0];this.param.enable_short_term&&(m=o[17],x=o[18]);let h=s/Math.exp(m*x);d=ae(R(h,8),ne,c)}else d=this.next_recall_stability(i,s,n,r);return{difficulty:this.next_difficulty(i,r),stability:d}}},Ge=class extends Pe{learningStepsStrategy;constructor(e,t,r,n){super(e,t,r,n);let i=or;if(this.strategies){let s=this.strategies.get(Ke.LEARNING_STEPS);s&&(i=s)}this.learningStepsStrategy=i}getLearningInfo(e,t){let r=this.algorithm.parameters;e.learning_steps=e.learning_steps||0;let n=this.learningStepsStrategy(r,e.state,e.learning_steps),i=Math.max(0,n[t]?.scheduled_minutes??0),s=Math.max(0,n[t]?.next_step??0);return{scheduled_minutes:i,next_steps:s}}applyLearningSteps(e,t,r){let{scheduled_minutes:n,next_steps:i}=this.getLearningInfo(this.current,t);if(n>0&&n<1440)e.learning_steps=i,e.scheduled_days=0,e.state=r,e.due=ee(this.review_time,Math.round(n),!1);else if(e.state=D.Review,n>=1440)e.learning_steps=i,e.due=ee(this.review_time,Math.round(n),!1),e.scheduled_days=Math.floor(n/1440);else{e.learning_steps=0;let s=this.algorithm.next_interval(e.stability,this.elapsed_days);e.scheduled_days=s,e.due=ee(this.review_time,s,!0)}}newState(e){let t=this.next.get(e);if(t)return t;let r=this.next_ds(this.elapsed_days,e);this.applyLearningSteps(r,e,D.Learning);let n={card:r,log:this.buildLog(e)};return this.next.set(e,n),n}learningState(e){let t=this.next.get(e);if(t)return t;let r=this.next_ds(this.elapsed_days,e);this.applyLearningSteps(r,e,this.last.state);let n={card:r,log:this.buildLog(e)};return this.next.set(e,n),n}reviewState(e){let t=this.next.get(e);if(t)return t;let r=this.elapsed_days,n=this.algorithm.forgetting_curve(r,this.current.stability),i=this.next_ds(r,v.Again,n),s=this.next_ds(r,v.Hard,n),o=this.next_ds(r,v.Good,n),d=this.next_ds(r,v.Easy,n);this.next_interval(s,o,d,r),this.next_state(s,o,d),this.applyLearningSteps(i,v.Again,D.Relearning),i.lapses+=1;let u={card:i,log:this.buildLog(v.Again)},c={card:s,log:super.buildLog(v.Hard)},m={card:o,log:super.buildLog(v.Good)},x={card:d,log:super.buildLog(v.Easy)};return this.next.set(v.Again,u),this.next.set(v.Hard,c),this.next.set(v.Good,m),this.next.set(v.Easy,x),this.next.get(e)}next_ds(e,t,r){let n=this.algorithm.next_state({difficulty:this.current.difficulty,stability:this.current.stability},e,t,r),i=T.card(this.current);return i.difficulty=n.difficulty,i.stability=n.stability,i}next_interval(e,t,r,n){let i,s;i=this.algorithm.next_interval(e.stability,n),s=this.algorithm.next_interval(t.stability,n),i=Math.min(i,s),s=Math.max(s,i+1);let o=Math.max(this.algorithm.next_interval(r.stability,n),s+1);e.scheduled_days=i,e.due=ee(this.review_time,i,!0),t.scheduled_days=s,t.due=ee(this.review_time,s,!0),r.scheduled_days=o,r.due=ee(this.review_time,o,!0)}next_state(e,t,r){e.state=D.Review,e.learning_steps=0,t.state=D.Review,t.learning_steps=0,r.state=D.Review,r.learning_steps=0}},qe=class extends Pe{newState(e){let t=this.next.get(e);if(t)return t;this.current.scheduled_days=0,this.current.elapsed_days=0;let r=0,n=this.next_ds(r,v.Again),i=this.next_ds(r,v.Hard),s=this.next_ds(r,v.Good),o=this.next_ds(r,v.Easy);return this.next_interval(n,i,s,o,r),this.next_state(n,i,s,o),this.update_next(n,i,s,o),this.next.get(e)}next_ds(e,t,r){let n=this.algorithm.next_state({difficulty:this.current.difficulty,stability:this.current.stability},e,t,r),i=T.card(this.current);return i.difficulty=n.difficulty,i.stability=n.stability,i}learningState(e){return this.reviewState(e)}reviewState(e){let t=this.next.get(e);if(t)return t;let r=this.elapsed_days,n=this.algorithm.forgetting_curve(r,this.current.stability),i=this.next_ds(r,v.Again,n),s=this.next_ds(r,v.Hard,n),o=this.next_ds(r,v.Good,n),d=this.next_ds(r,v.Easy,n);return this.next_interval(i,s,o,d,r),this.next_state(i,s,o,d),i.lapses+=1,this.update_next(i,s,o,d),this.next.get(e)}next_interval(e,t,r,n,i){let s,o,d,u;s=this.algorithm.next_interval(e.stability,i),o=this.algorithm.next_interval(t.stability,i),d=this.algorithm.next_interval(r.stability,i),u=this.algorithm.next_interval(n.stability,i),s=Math.min(s,o),o=Math.max(o,s+1),d=Math.max(d,o+1),u=Math.max(u,d+1),e.scheduled_days=s,e.due=ee(this.review_time,s,!0),t.scheduled_days=o,t.due=ee(this.review_time,o,!0),r.scheduled_days=d,r.due=ee(this.review_time,d,!0),n.scheduled_days=u,n.due=ee(this.review_time,u,!0)}next_state(e,t,r,n){e.state=D.Review,e.learning_steps=0,t.state=D.Review,t.learning_steps=0,r.state=D.Review,r.learning_steps=0,n.state=D.Review,n.learning_steps=0}update_next(e,t,r,n){let i={card:e,log:this.buildLog(v.Again)},s={card:t,log:super.buildLog(v.Hard)},o={card:r,log:super.buildLog(v.Good)},d={card:n,log:super.buildLog(v.Easy)};this.next.set(v.Again,i),this.next.set(v.Hard,s),this.next.set(v.Good,o),this.next.set(v.Easy,d)}},va=class{fsrs;constructor(e){this.fsrs=e}replay(e,t,r){return this.fsrs.next(e,t,r)}handleManualRating(e,t,r,n,i,s,o){if(typeof t>"u")throw new K("reschedule: state is required for manual rating");let d,u;if(t===D.New)d={rating:v.Manual,state:t,due:o??r,stability:e.stability,difficulty:e.difficulty,elapsed_days:n,last_elapsed_days:e.elapsed_days,scheduled_days:e.scheduled_days,learning_steps:e.learning_steps,review:r},u=he(r),u.last_review=r;else{if(typeof o>"u")throw new K("reschedule: due is required for manual rating");let c=ge(o,r,"days");d={rating:v.Manual,state:e.state,due:e.last_review||e.due,stability:e.stability,difficulty:e.difficulty,elapsed_days:n,last_elapsed_days:e.elapsed_days,scheduled_days:e.scheduled_days,learning_steps:e.learning_steps,review:r},u={...e,state:t,due:o,last_review:r,stability:i||e.stability,difficulty:s||e.difficulty,elapsed_days:n,scheduled_days:c,reps:e.reps+1}}return{card:u,log:d}}reschedule(e,t){let r=[],n=he(e.due);for(let i of t){let s;if(i.review=T.time(i.review),i.rating===v.Manual){let o=0;n.state!==D.New&&n.last_review&&(o=ge(i.review,n.last_review,"days")),s=this.handleManualRating(n,i.state,i.review,o,i.stability,i.difficulty,i.due?T.time(i.due):void 0)}else s=this.replay(n,i.review,i.rating);r.push(s),n=s.card}return r}calculateManualRecord(e,t,r,n){if(!r)return null;let{card:i,log:s}=r,o=T.card(e);return o.due.getTime()===i.due.getTime()?null:(o.scheduled_days=ge(i.due,o.due,"days"),this.handleManualRating(o,i.state,T.time(t),s.elapsed_days,n?i.stability:void 0,n?i.difficulty:void 0,i.due))}};function Se(a,e){return typeof e=="function"?e(a):a}var ka=class extends ya{strategyHandler=new Map;Scheduler;constructor(e){super(e);let{enable_short_term:t}=this.parameters;this.Scheduler=t?Ge:qe}params_handler_proxy(){let e=this;return{set:function(t,r,n){return r==="request_retention"&&Number.isFinite(n)?e.intervalModifier=e.calculate_interval_modifier(Number(n)):r==="enable_short_term"?e.Scheduler=n===!0?Ge:qe:r==="w"&&(n=Na(n,t.relearning_steps.length,t.enable_short_term),n=fe(Array.from(n),t.relearning_steps.length,t.enable_short_term),e.forgetting_curve=xa.bind(this,n),e.intervalModifier=e.calculate_interval_modifier(Number(t.request_retention))),Reflect.set(t,r,n),!0}}}useStrategy(e,t){return this.strategyHandler.set(e,t),this}clearStrategy(e){return e?this.strategyHandler.delete(e):this.strategyHandler.clear(),this}getScheduler(e,t){let n=this.strategyHandler.get(Ke.SCHEDULER)||this.Scheduler;return new n(e,t,this,this.strategyHandler)}repeat(e,t,r){let i=this.getScheduler(e,t).preview();return Se(i,r)}next(e,t,r,n){let i=this.getScheduler(e,t),s=T.rating(r);if(s===v.Manual)throw new K("Cannot review a manual rating");let o=i.review(s);return Se(o,n)}get_retrievability(e,t,r=!0){let n=T.card(e);t=t?T.time(t):new Date;let i=n.state!==D.New?Math.max(ge(t,n.last_review,"days"),0):0,s=n.state!==D.New?this.forgetting_curve(i,+n.stability.toFixed(8)):0;return r?`${(s*100).toFixed(2)}%`:s}rollback(e,t,r){let n=T.card(e),i=T.review_log(t);if(i.rating===v.Manual)throw new K("Cannot rollback a manual rating");let s,o,d;switch(i.state){case D.New:s=i.due,o=void 0,d=0;break;case D.Learning:case D.Relearning:case D.Review:s=i.review,o=i.due,d=n.lapses-(i.rating===v.Again&&i.state===D.Review?1:0);break}let u={...n,due:s,stability:i.stability,difficulty:i.difficulty,elapsed_days:i.last_elapsed_days,scheduled_days:i.scheduled_days,reps:Math.max(0,n.reps-1),lapses:Math.max(0,d),learning_steps:i.learning_steps,state:i.state,last_review:o};return Se(u,r)}forget(e,t,r=!1,n){let i=T.card(e);t=T.time(t);let s=i.state===D.New?0:ge(t,i.due,"days"),o={rating:v.Manual,state:i.state,due:i.due,stability:i.stability,difficulty:i.difficulty,elapsed_days:0,last_elapsed_days:i.elapsed_days,scheduled_days:s,learning_steps:i.learning_steps,review:t},u={card:{...i,due:t,stability:0,difficulty:0,elapsed_days:0,scheduled_days:0,reps:r?0:i.reps,lapses:r?0:i.lapses,learning_steps:0,state:D.New,last_review:i.last_review},log:o};return Se(u,n)}reschedule(e,t=[],r={}){let{recordLogHandler:n,reviewsOrderBy:i,skipManual:s=!0,now:o=new Date,update_memory_state:d=!1}=r;i&&typeof i=="function"&&t.sort(i),s&&(t=t.filter(N=>N.rating!==v.Manual));let u=new va(this),c=u.reschedule(r.first_card||he(),t),m=c.length,x=T.card(e),h=u.calculateManualRecord(x,o,m?c[m-1]:void 0,d);return{collections:typeof n=="function"?c.map(n):c,reschedule_item:h?Se(h,n):null}}},lt=a=>new ka(a||{});var dt=new Map;function pt(a){let e=Math.round(a*1e3)/1e3,t=dt.get(e);return t||(t=lt({request_retention:e,enable_fuzz:!0,enable_short_term:!0,learning_steps:["1m","10m"],relearning_steps:["10m"]}),dt.set(e,t)),t}function ct(a){return{due:new Date(a.due),stability:a.s,difficulty:a.d,elapsed_days:a.el,scheduled_days:a.sd,learning_steps:a.ls,reps:a.reps,lapses:a.lapses,state:a.st,last_review:a.last?new Date(a.last):void 0}}function yr(a,e){return{due:a.due.getTime(),s:a.stability,d:a.difficulty,el:a.elapsed_days,sd:a.scheduled_days,ls:a.learning_steps,reps:a.reps,lapses:a.lapses,st:a.state,last:a.last_review?a.last_review.getTime():void 0,seen:e}}var _a=[v.Again,v.Hard,v.Good,v.Easy],ut={[v.Again]:"\u91CD\u6765",[v.Hard]:"\u56F0\u96BE",[v.Good]:"\u826F\u597D",[v.Easy]:"\u7B80\u5355"};function be(a,e,t=Date.now(),r=.9){let n=a?ct(a):he(new Date(t)),i=pt(r).next(n,new Date(t),e).card;return yr(i,a?.seen??t)}function wt(a,e=Date.now(),t=.9){let r=a?ct(a):he(new Date(e)),n=pt(t).repeat(r,new Date(e)),i={};for(let s of _a)i[s]=n[s].card.due.getTime()-e;return i}var vr=21,le=a=>!!(a&&a.st===D.Review&&a.s>=vr);var mt=(a,e=Date.now())=>!!(a&&a.due<=e);function Ye(a){if(!Number.isFinite(a))return"";let e=Math.round(a/6e4);if(e<1)return"<1\u5206";if(e<60)return`${e}\u5206`;let t=Math.round(e/60);if(t<24)return`${t}\u5C0F\u65F6`;let r=Math.round(t/24);if(r<31)return`${r}\u5929`;let n=Math.round(r/30);return n<12?`${n}\u4E2A\u6708`:`${(r/365).toFixed(1)}\u5E74`}var kr="arise arose arisen|awake awoke awoken|bear bore borne born|beat beat beaten|become became|begin began begun beginn|bend bent|bet bet|bind bound|bite bit bitten|bleed bled|blow blew blown|break broke broken|breed bred|bring brought|broadcast broadcast|build built|burn burnt burned|burst burst|buy bought|catch caught|choose chose chosen|cling clung|come came|cost cost|creep crept|cut cut cutt|deal dealt|dig dug|do did done does|draw drew drawn|dream dreamt dreamed|drink drank drunk|drive drove driven|eat ate eaten|fall fell fallen|feed fed|feel felt|fight fought|find found|flee fled|fling flung|fly flew flown flies|forbid forbade forbidden|forget forgot forgotten|forgive forgave forgiven|freeze froze frozen|get got gotten gett|give gave given|go went gone goes|grind ground|grow grew grown|hang hung|have had has|hear heard|hide hid hidden|hit hit hitt|hold held|hurt hurt|keep kept|kneel knelt|know knew known|lay laid|lead led|lean leant leaned|leap leapt leaped|learn learnt learned|leave left|lend lent|let let|lie lay lain|light lit|lose lost|make made|mean meant|meet met|pay paid|prove proved proven|put put putt|quit quit|read read|ride rode ridden|ring rang rung|rise rose risen|run ran runn|say said|see saw seen|seek sought|sell sold|send sent|set set|sew sewed sewn|shake shook shaken|shed shed|shine shone|shoot shot|show showed shown|shrink shrank shrunk|shut shut|sing sang sung|sink sank sunk|sit sat sitt|sleep slept|slide slid|sling slung|speak spoke spoken|speed sped|spend spent|spill spilt spilled|spin spun spinn|spy spied spies|mislead misled|spit spat|split split|spread spread|spring sprang sprung|stand stood|steal stole stolen|stick stuck|sting stung|stink stank stunk|stride strode|strike struck|string strung|strive strove striven|swear swore sworn|sweep swept|swell swelled swollen|swim swam swum swimm|swing swung|take took taken|teach taught|tear tore torn|tell told|think thought|throw threw thrown|tread trod trodden|understand understood|undertake undertook undertaken|upset upset|wake woke woken|wear wore worn|weave wove woven|weep wept|win won winn|wind wound|withdraw withdrew withdrawn|write wrote written|be was were been is are am|child children|man men|woman women|foot feet|tooth teeth|mouse mice|person people|good better best|bad worse worst|far further farther furthest",ft=new Map(kr.split("|").map(a=>a.split(" ")).map(([a,...e])=>[a,e])),xe=new Map;for(let[a,e]of ft){for(let t of e)xe.has(t)||xe.set(t,a);xe.has(a)||xe.set(a,a)}function ht(a){return String(a||"").normalize("NFKC").replace(/[’‘]/g,"'").replace(/[‐‑–—]/g,"-").trim().toLowerCase().replace(/^[^a-z']+|[^a-z']+$/g,"")}function za(a){let e=ht(a);if(!e)return[];let t=[],r=i=>{i&&i.length>0&&!t.includes(i)&&t.push(i)};e.endsWith("'s")&&r(e.slice(0,-2)),/(ies|ied)$/.test(e)&&r(e.slice(0,-3)+"y"),/ying$/.test(e)&&r(e.slice(0,-4)+"ie");for(let i of["ing","ed","est","er","es","s"]){if(!e.endsWith(i)||e.length<=i.length+1)continue;let s=e.slice(0,-i.length);/([bdgmnprt])\1$/.test(s)&&(r(s),r(s.slice(0,-1))),/i$/.test(s)&&(i==="er"||i==="est"||i==="ed")&&r(s.slice(0,-1)+"y"),(i==="ing"||i==="ed")&&!/ng$/.test(s)?(r(s+"e"),r(s)):(r(s),r(s+"e"))}let n=xe.get(e);return n&&r(n),t}function Ma(a){let e=new Map;for(let n of a)e.set(n.word.toLowerCase(),n.id);let t=new Map;function r(n){let i=ht(n);if(!i)return null;if(t.has(i))return t.get(i);let s=e.get(i);if(!s){let o=xe.get(i);o&&(s=e.get(o))}if(!s){for(let o of za(i))if(s=e.get(o),s)break}return t.set(i,s??null),s??null}return{resolve:r,exact:e}}var gt=new WeakMap;function bt(a){let e=gt.get(a);return e||(e=Ma(a.words),gt.set(a,e)),e}var Ve=a=>String(a||"").normalize("NFKC").replace(/[’‘]/g,"'").replace(/[‐‑–—]/g,"-").replace(/\s+/g," ").trim().toLowerCase();function $e(a){let e=2166136261;for(let t=0;t<a.length;t+=1)e=Math.imul(e^a.charCodeAt(t),16777619);return e>>>0}function Sa(a,e=Math.random()*2**31){let t=[...a],r=Math.floor(e)||1;for(let n=t.length-1;n>0;n-=1){r=Math.imul(1664525,r)+1013904223>>>0;let i=r%(n+1);[t[n],t[i]]=[t[i],t[n]]}return t}function Nr(a){let e=a.trim().toLowerCase(),t=s=>s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");if(/\s/.test(e))return new RegExp(`(?<![A-Za-z])(${e.split(/\s+/).map(t).join("\\s+")})(?![A-Za-z])`,"i");let r=ft.get(e);if(r)return new RegExp(`(?<![A-Za-z])((?:${[e,...r].map(t).join("|")})[a-z]{0,3})(?![A-Za-z])`,"i");let n=e;e.length>3&&/[^aeiou]y$|e$/.test(e)&&(n=e.slice(0,-1));let i=/[^aeiou][aeiou][bdgmnprt]$/.test(e)?`${t(e.slice(-1))}?`:"";return new RegExp(`(?<![A-Za-z])(${t(n)}${i}[a-z]{0,4})(?![A-Za-z])`,"i")}function xt(a,e){let t=Nr(e).exec(a);return t?{before:a.slice(0,t.index),hidden:t[0],after:a.slice(t.index+t[0].length)}:null}var ye=(a=new Date)=>`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,"0")}-${String(a.getDate()).padStart(2,"0")}`;function yt(a,{newWords:e=0,reviewed:t=0,correct:r=0,seconds:n=0}={}){let i=ye(),s=a[i]||{n:0,r:0,c:0};return{...a,[i]:{n:s.n+e,r:s.r+t,c:s.c+r,...n?{t:(s.t||0)+n}:s.t?{t:s.t}:{}}}}function _r(a,e=Date.now()){return Object.entries(a.cards).filter(([,t])=>t.due<=e).sort((t,r)=>t[1].due-r[1].due).map(([t])=>t)}function Ee(a){return a.days[ye()]?.n??0}function zr(a,e,t,r){let n=[],i=s=>{for(let o of a.words){if(n.length>=r)return;o.cefr<s||e.cards[o.id]||n.includes(o.id)||n.push(o.id)}};return i(t.startLevel||0),n.length<r&&i(0),n}function Ae(a,e,t){let r=_r(e).filter(i=>a.byId.has(i)),n=zr(a,e,t,Math.max(0,(t.dailyNew||10)-Ee(e)));return{due:r,fresh:n,minutes:Math.max(1,Math.round(r.length*.25+n.length*.9))}}function Mr(a,e,t,r){let n=e.cards[a.id],i=!!(a.media&F.img),s=$e(a.id+r)%100;return!n||n.s<2?i&&s<45?"picture":s<80?"meaning":"listen":t.spell&&(n.s>=4||s<35)?s<75?"spell":i?"picture":"listen":s<50?"listen":i?"picture":"meaning"}function Je(a,e,t,r){let n=Ve(e.word),i=e.zh.replace(/^[a-z.]+\s*/,"").split(/[；;，,]/)[0],s=[],o=Math.max(0,e.order-400);for(let c=o;c<Math.min(a.words.length,e.order+400);c+=1){let m=a.words[c];if(m.id===e.id||Ve(m.word)===n||i&&m.zh.includes(i))continue;let x=$e(m.id+r)%100;t==="listen"||t==="picture"?(m.word[0]?.toLowerCase()===n[0]&&(x+=120),x+=Math.max(0,60-Math.abs(m.word.length-n.length)*20)):(m.cefr===e.cefr&&(x+=40),m.zh.split(" ")[0]===e.zh.split(" ")[0]&&(x+=60)),s.push([x,m])}s.sort((c,m)=>m[0]-c[0]);let d=new Set,u=[];for(let[,c]of s){let m=t==="meaning"?c.zh:Ve(c.word);if(!d.has(m)&&(d.add(m),u.push(c.id),u.length===3))break}return Sa([e.id,...u],r)}function Xe(a,e,t,r={}){let n=Date.now(),i=Ae(a,e,t),s=r.ids?r.ids.filter(c=>e.cards[c]):i.due.slice(0,120),o=r.ids?r.ids.filter(c=>!e.cards[c]):r.reviewOnly?[]:i.fresh,d=[],u=(c,m)=>{let x=a.byId.get(c),h=Mr(x,e,t,n+m);return{id:c,kind:h,options:h==="spell"?void 0:Je(a,x,h,n+m)}};s.forEach((c,m)=>d.push(u(c,m)));for(let c=0;c<o.length;c+=5){let m=o.slice(c,c+5);m.forEach(x=>d.push({id:x,kind:"intro"})),Sa(m,n+c).forEach((x,h)=>d.push(u(x,1e3+c+h)))}return{id:`s${n}`,started:n,steps:d,index:0,graded:{},newIds:o,reviewIds:s}}function Qe(a,e,t,r){if(!e)return v.Again;if(r)return v.Hard;let n=a==="spell"?2e4:9e3,i=a==="spell"?6e3:2500;return t>n?v.Hard:t<i&&a==="spell"?v.Easy:v.Good}function Re(a,e,t,r,n,i,s){let o=a.session;if(!o)return a;let d={...a,session:{...o,pending:{correct:r,value:i}}};if(!(t.id in o.graded)&&!t.retry&&(d={...d,cards:{...d.cards,[t.id]:be(a.cards[t.id],n,Date.now(),s.retention)},session:{...d.session,graded:{...o.graded,[t.id]:n}},mistakes:r?d.mistakes:[t.id,...d.mistakes.filter(c=>c!==t.id)].slice(0,300)},d={...d,days:yt(d.days,{reviewed:1,correct:r?1:0,newWords:o.newIds.includes(t.id)?1:0})}),!r){let c=[...d.session.steps];if(c.filter(x=>x.id===t.id&&x.retry).length<2){let x=e.byId.get(t.id),h=t.kind==="meaning"?x.media&F.img?"picture":"listen":"meaning",N=Math.min(c.length,o.index+4);c.splice(N,0,{id:t.id,kind:h,retry:!0,options:Je(e,x,h,Date.now())}),d={...d,session:{...d.session,steps:c}}}}return d}function Le(a,e){let t=a.session;if(!t)return a;let r=t.index+1,n=r>=t.steps.length?Date.now():void 0;return{...a,days:yt(a.days,{seconds:Math.max(0,Math.min(90,Math.round(e)))}),session:{...t,index:r,pending:void 0,finished:n}}}function ea(a){let e=Object.values(a.graded),t=e.filter(r=>r!==v.Again).length;return{total:e.length,correct:t,accuracy:e.length?Math.round(t/e.length*100):0}}var b=te(require("react"),1);var C=te(require("react"),1);var B=te(require("react"),1);var vt={search:'<path d="m21 21-4.34-4.34" /> <circle cx="11" cy="11" r="8" />',star:'<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />',sparkle:'<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" /> <path d="M20 2v4" /> <path d="M22 4h-4" /> <circle cx="4" cy="20" r="2" />',heart:'<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />',volume:'<path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" /> <path d="M16 9a5 5 0 0 1 0 6" /> <path d="M19.364 18.364a9 9 0 0 0 0-12.728" />',close:'<path d="M18 6 6 18" /> <path d="m6 6 12 12" />',chevronLeft:'<path d="m15 18-6-6 6-6" />',chevronRight:'<path d="m9 18 6-6-6-6" />',book:'<path d="M12 5v16" /> <path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z" />',layers:'<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" /> <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" /> <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" />',refresh:'<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /> <path d="M21 3v5h-5" /> <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" /> <path d="M8 16H3v5" />',check:'<path d="M20 6 9 17l-5-5" />',info:'<circle cx="12" cy="12" r="10" /> <path d="M12 16v-4" /> <path d="M12 8h.01" />',play:'<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />',pause:'<rect x="14" y="3" width="5" height="18" rx="1" /> <rect x="5" y="3" width="5" height="18" rx="1" />',user:'<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /> <circle cx="12" cy="7" r="4" />',globe:'<circle cx="12" cy="12" r="10" /> <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /> <path d="M2 12h20" />'};function E({name:a,size:e=18,filled:t=!1,className:r="",...n}){let i=vt[a];return i?B.default.createElement("svg",{viewBox:"0 0 24 24",width:e,height:e,fill:t?"currentColor":"none",stroke:"currentColor",strokeWidth:t?0:1.7,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",className:r,dangerouslySetInnerHTML:{__html:i},...n}):null}function Z({id:a,word:e,full:t=!1,className:r="",alt:n}){let[i,s]=(0,B.useState)(!1),o=t?Ua(a):Wa(a);return i?B.default.createElement("div",{className:`wa-img-fallback ${r}`,role:"img","aria-label":n||e},B.default.createElement("span",null,(e||"?").slice(0,1).toUpperCase())):B.default.createElement("img",{className:r,src:o,alt:n||`${e} \u63D2\u753B`,loading:"lazy",decoding:"async",draggable:!1,onError:()=>s(!0)})}var ce=null,Ce=null,$a=new Set;function kt(){for(let a of $a)a()}function ve(){ce&&(ce.pause(),ce=null),Ce=null,kt()}function ke(a,e){if(Ce===a){ve();return}ve();let t=new Audio(e);ce=t,Ce=a,kt(),t.onended=()=>{ce===t&&ve()},t.onerror=()=>{ce===t&&ve()},t.play().catch(()=>{ce===t&&ve()})}function Ne(){ve()}function Sr(){let[a,e]=(0,B.useState)(Ce);return(0,B.useEffect)(()=>{let t=()=>e(Ce);return $a.add(t),()=>$a.delete(t)},[]),a}function V({audioKey:a,url:e,label:t,size:r=16,className:n="",title:i}){let s=Sr()===a;return B.default.createElement("button",{type:"button",className:`wa-audio-btn ${s?"is-playing":""} ${n}`,onClick:()=>ke(a,e),"aria-label":i||(s?"\u505C\u6B62\u64AD\u653E":`\u64AD\u653E${t||""}`),title:i||t||"\u64AD\u653E\u53D1\u97F3"},B.default.createElement(E,{name:s?"pause":"volume",size:r}),t?B.default.createElement("span",null,t):null)}function Nt({onClose:a,children:e,labelledBy:t}){let r=(0,B.useRef)(null);return(0,B.useEffect)(()=>{let n=i=>{i.key==="Escape"&&(i.stopPropagation(),a())};return window.addEventListener("keydown",n),()=>window.removeEventListener("keydown",n)},[a]),B.default.createElement("div",{className:"wa-overlay",ref:r,role:"dialog","aria-modal":"true","aria-labelledby":t,onMouseDown:n=>{n.target===r.current&&a()}},e)}function ie({label:a="\u52A0\u8F7D\u4E2D\u2026"}){return B.default.createElement("div",{className:"wa-loading",role:"status"},B.default.createElement("span",{className:"wa-spinner","aria-hidden":"true"}),B.default.createElement("span",null,a))}function ue({icon:a="sparkle",title:e,children:t}){return B.default.createElement("div",{className:"wa-empty"},B.default.createElement("span",{className:"wa-empty-icon"},B.default.createElement(E,{name:a,size:26})),B.default.createElement("h3",null,e),t?B.default.createElement("div",{className:"wa-empty-body"},t):null)}function de({level:a}){return B.default.createElement("span",{className:`wa-cefr wa-cefr-${a}`},a)}function _t(a){let e=a.includes("\uFF5C")?"\uFF5C":a.includes("|")?"|":"";if(!e)return{en:a,zh:""};let t=a.indexOf(e);return{en:a.slice(0,t).trim(),zh:a.slice(t+1).trim()}}var $r=/[A-Za-z]+(?:['’][A-Za-z]+)*/g,Er=/^[,.;:!?…’”»)\]]+/,Ea="word-atlas:lookup-open";function Ar(a,e){if(!e)return!1;let t=a.toLowerCase(),r=e.toLowerCase();return t===r||t.startsWith(r)}function Lr({atlas:a,progress:e,token:t,refId:r,anchor:n,onClose:i,onOpenWord:s}){let o=(0,C.useRef)(null),[d,u]=(0,C.useState)({left:16,top:16}),c=r?a.byId.get(r):null,m=e.settings.accent;return(0,C.useLayoutEffect)(()=>{let x=()=>{let N=o.current?.offsetWidth??300,L=o.current?.offsetHeight??190,A=window.innerHeight-n.bottom>=L+16||n.top<L+16?n.bottom+8:Math.max(16,n.top-L-8),w=Math.max(16,Math.min(window.innerWidth-N-16,n.left+n.width/2-N/2));u({left:w,top:Math.min(A,window.innerHeight-L-16)})};x();let h=new ResizeObserver(x);return o.current&&h.observe(o.current),window.addEventListener("resize",x),()=>{h.disconnect(),window.removeEventListener("resize",x)}},[n,t,r]),(0,C.useEffect)(()=>{let x=N=>{o.current?.contains(N.target)||N.target instanceof Element&&N.target.closest("[data-wa-lookup-token]")||i()},h=N=>{N.key==="Escape"&&(N.stopImmediatePropagation(),i())};return document.addEventListener("pointerdown",x,!0),window.addEventListener("keydown",h,!0),()=>{document.removeEventListener("pointerdown",x,!0),window.removeEventListener("keydown",h,!0)}},[i]),C.default.createElement("div",{className:"wa-lookup",ref:o,style:{left:d.left,top:d.top},role:"dialog","aria-modal":"false","aria-label":`\u67E5\u8BCD\uFF1A${t}`},C.default.createElement("button",{type:"button",className:"wa-icon-btn wa-lookup-close",onClick:i,"aria-label":"\u5173\u95ED\u67E5\u8BCD"},C.default.createElement(E,{name:"close",size:16})),c?C.default.createElement(C.default.Fragment,null,C.default.createElement("div",{className:"wa-lookup-head"},P(c,F.img)?C.default.createElement(Z,{id:c.id,word:c.word,className:"wa-lookup-thumb"}):null,C.default.createElement("div",{className:"wa-lookup-title"},C.default.createElement("h3",{lang:"en"},c.word),C.default.createElement("p",null,c.ipa))),C.default.createElement("p",{className:"wa-lookup-meaning"},c.zh),C.default.createElement("div",{className:"wa-lookup-actions"},P(c,F[m])?C.default.createElement(V,{audioKey:`${m}:${c.id}`,url:G(m,c.id),label:"\u64AD\u653E\u53D1\u97F3"}):null,C.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary",onClick:()=>s(c.id)},"\u67E5\u770B\u8BCD\u5361"))):C.default.createElement(C.default.Fragment,null,C.default.createElement("h3",{className:"wa-lookup-missing",lang:"en"},t),C.default.createElement("p",{className:"wa-lookup-meaning"},"\u8FD9\u4E2A\u8BCD\u4E0D\u5728\u8BCD\u5149\u8BCD\u5E93\u91CC")))}function se({atlas:a,progress:e,text:t,headword:r,onOpenWord:n,className:i=""}){let s=bt(a),[o,d]=(0,C.useState)(null);(0,C.useEffect)(()=>{if(!o)return;let c=()=>d(null);return window.addEventListener(Ea,c),()=>window.removeEventListener(Ea,c)},[o]);let u=(0,C.useMemo)(()=>{let c=[],m=0;for(let x of t.matchAll($r)){let h=x.index??0;h>m&&c.push(t.slice(m,h));let N=x[0],L=s.resolve(N),U=Ar(N,r),A=C.default.createElement("button",{type:"button",className:"wa-lookup-token","data-wa-lookup-token":"","aria-label":`\u67E5\u8BCD\uFF1A${N}`,"aria-haspopup":"dialog",onClick:_=>{_.stopPropagation(),window.dispatchEvent(new Event(Ea));let S=_.currentTarget.getBoundingClientRect();d({token:N,refId:L,anchor:{left:S.left,top:S.top,width:S.width,height:S.height,bottom:S.bottom}})},onKeyDown:_=>{(_.key==="Enter"||_.key===" ")&&_.stopPropagation()}},N);c.push(U?C.default.createElement("mark",{key:`mark-${h}`},A):C.default.createElement(C.default.Fragment,{key:h},A)),m=h+N.length;let w=t.slice(m).match(Er)?.[0]??"";w&&(c.push(C.default.createElement("span",{key:`glue-${h}`},w)),m+=w.length)}return m<t.length&&c.push(t.slice(m)),c},[t,r,s]);return C.default.createElement("span",{className:`wa-lookup-text ${i}`},u,o?C.default.createElement(Lr,{atlas:a,progress:e,token:o.token,refId:o.refId,anchor:o.anchor,onClose:()=>d(null),onOpenWord:c=>{d(null),n(c)}}):null)}function aa({atlas:a,word:e,progress:t,onClose:r,onPrev:n,onNext:i,hasPrev:s,hasNext:o,onOpenWord:d,onToggleBookmark:u,onMarkLearned:c,onBack:m,backLabel:x}){let[h,N]=(0,b.useState)(null),[L,U]=(0,b.useState)(""),A=t.settings.accent,w=t.cards[e.id],_=t.bookmarks.includes(e.id);(0,b.useEffect)(()=>{let k=!0;return N(null),U(""),oe(a,e.id).then($=>{k&&N($)}).catch($=>{k&&U($.message||"\u8BCD\u6761\u52A0\u8F7D\u5931\u8D25")}),()=>{k=!1,Ne()}},[a,e.id]),(0,b.useEffect)(()=>{let k=$=>{$.key==="ArrowLeft"&&s?($.preventDefault(),n()):$.key==="ArrowRight"&&o&&($.preventDefault(),i())};return window.addEventListener("keydown",k),()=>window.removeEventListener("keydown",k)},[s,o,n,i]);let S=a.topics.find(k=>k.slug===e.topic)?.zh||e.topicZh;return b.default.createElement(Nt,{onClose:r,labelledBy:"wa-detail-title"},b.default.createElement("div",{className:"wa-detail",role:"document"},b.default.createElement("div",{className:"wa-detail-art"},b.default.createElement(Z,{id:e.id,word:e.word,full:!0,className:"wa-detail-img",alt:`${e.word} \u63D2\u753B`}),b.default.createElement("div",{className:"wa-detail-art-meta"},b.default.createElement("span",{className:"wa-specimen"},"\u2116 ",String(e.order+1).padStart(4,"0")," ",b.default.createElement("i",null)," Word Atlas"),w?b.default.createElement("span",{className:"wa-memory-inline"},mt(w)?"\u5F85\u590D\u4E60":`\u4E0B\u6B21\u590D\u4E60 ${Ye(w.due-Date.now())}\u540E`):null)),b.default.createElement("div",{className:"wa-detail-body"},b.default.createElement("button",{type:"button",className:"wa-icon-btn wa-detail-close",onClick:r,"aria-label":"\u5173\u95ED\u8BCD\u6761"},b.default.createElement(E,{name:"close",size:18})),b.default.createElement("header",{className:"wa-detail-head"},m?b.default.createElement("button",{type:"button",className:"wa-icon-btn wa-back-btn",onClick:m,"aria-label":x?`\u8FD4\u56DE ${x}`:"\u8FD4\u56DE\u4E0A\u4E00\u4E2A\u8BCD",title:x?`\u8FD4\u56DE ${x}`:"\u8FD4\u56DE\u4E0A\u4E00\u4E2A\u8BCD"},b.default.createElement(E,{name:"chevronLeft",size:18})):null,b.default.createElement("div",{className:"wa-tags"},b.default.createElement(de,{level:e.cefr}),S?b.default.createElement("span",{className:"wa-chip"},S):null,w?b.default.createElement("span",{className:`wa-chip wa-chip-status ${w.st===2?"is-done":""}`},w.st===2?"\u590D\u4E60\u4E2D":"\u5B66\u4E60\u4E2D"):null),b.default.createElement("button",{type:"button",className:`wa-icon-btn ${_?"is-on":""}`,onClick:()=>u(e.id),"aria-pressed":_,"aria-label":_?"\u53D6\u6D88\u6536\u85CF":"\u6536\u85CF",title:_?"\u53D6\u6D88\u6536\u85CF":"\u6536\u85CF"},b.default.createElement(E,{name:"heart",size:19,filled:_}))),b.default.createElement("h2",{id:"wa-detail-title",className:"wa-headword",lang:"en"},e.word),!h&&!L?b.default.createElement(ie,{label:"\u52A0\u8F7D\u8BCD\u6761\u2026"}):null,L?b.default.createElement("p",{className:"wa-error"},L):null,h?b.default.createElement(b.default.Fragment,null,b.default.createElement("div",{className:"wa-detail-scroll"},b.default.createElement("div",{className:"wa-pron"},h.uk?b.default.createElement("div",{className:"wa-pron-row"},b.default.createElement("span",{className:"wa-pron-label"},"\u82F1"),b.default.createElement("span",{className:"wa-ipa"},h.uk),P(h,F.uk)?b.default.createElement(V,{audioKey:`uk:${e.id}`,url:G("uk",e.id),label:"\u53D1\u97F3"}):null):null,h.us?b.default.createElement("div",{className:"wa-pron-row"},b.default.createElement("span",{className:"wa-pron-label"},"\u7F8E"),b.default.createElement("span",{className:"wa-ipa"},h.us),P(h,F.us)?b.default.createElement(V,{audioKey:`us:${e.id}`,url:G("us",e.id),label:"\u53D1\u97F3"}):null):null,!h.uk&&!h.us?b.default.createElement("span",{className:"wa-ipa"},e.ipa):null,A==="us"&&h.us?b.default.createElement("span",{className:"wa-hint"},"\u9ED8\u8BA4\u7F8E\u97F3"):null),b.default.createElement("ol",{className:"wa-senses"},(h.senses||[]).map((k,$)=>b.default.createElement("li",{key:$},k.pos?b.default.createElement("span",{className:"wa-pos"},k.pos):null,b.default.createElement("span",{className:"wa-zh"},k.zh),k.en?b.default.createElement("span",{className:"wa-en",lang:"en"},k.en):null))),(h.ex||[]).length>0?b.default.createElement("section",{className:"wa-block"},b.default.createElement("h3",{className:"wa-eyebrow"},"\u4F8B\u53E5"),b.default.createElement("ul",{className:"wa-examples"},h.ex.map((k,$)=>{let H=$===0?"ex":"ex2",W=P(h,F[H]);return b.default.createElement("li",{key:$},h.ex.length>1?b.default.createElement("span",{className:`wa-ex-tag ${$?"is-ielts":""}`},$?"\u96C5\u601D\u8BED\u5883":"\u65E5\u5E38"):null,b.default.createElement("p",{className:"wa-ex-en",lang:"en"},b.default.createElement(se,{atlas:a,progress:t,text:k.en,headword:e.word,onOpenWord:d}),W?b.default.createElement(V,{audioKey:`${H}:${e.id}`,url:G(H,e.id),size:14,className:"wa-ex-speak",title:"\u64AD\u653E\u4F8B\u53E5\u6717\u8BFB"}):null),b.default.createElement("p",{className:"wa-ex-zh"},k.zh))}))):null,(h.col||[]).length>0?b.default.createElement("section",{className:"wa-block"},b.default.createElement("h3",{className:"wa-eyebrow"},"\u5E38\u7528\u642D\u914D"),b.default.createElement("ul",{className:"wa-collocations"},h.col.map(k=>{let $=_t(k);return b.default.createElement("li",{key:k},b.default.createElement("span",{lang:"en"},$.en),$.zh?b.default.createElement("small",null,$.zh):null)}))):null,(h.fam||[]).length>0||(h.syn||[]).length>0||(h.ant||[]).length>0?b.default.createElement("section",{className:"wa-block wa-relations"},(h.fam||[]).length>0?b.default.createElement("div",null,b.default.createElement("h3",{className:"wa-eyebrow"},"\u8BCD\u65CF"),b.default.createElement("p",null,h.fam.map(k=>{let $=k.replace(/\s*\(.*\)\s*$/,"").trim().toLowerCase(),H=a.words.find(W=>W.word.toLowerCase()===$);return H?b.default.createElement("button",{key:k,type:"button",className:"wa-link",onClick:()=>d(H.id)},k):b.default.createElement("span",{key:k},k)}))):null,(h.syn||[]).length>0?b.default.createElement("div",null,b.default.createElement("h3",{className:"wa-eyebrow"},"\u8FD1\u4E49"),b.default.createElement("p",null,h.syn.map(k=>b.default.createElement("span",{key:k},k)))):null,(h.ant||[]).length>0?b.default.createElement("div",null,b.default.createElement("h3",{className:"wa-eyebrow"},"\u53CD\u4E49"),b.default.createElement("p",null,h.ant.map(k=>b.default.createElement("span",{key:k},k)))):null):null,h.tip?b.default.createElement("aside",{className:"wa-tip"},b.default.createElement(E,{name:"sparkle",size:17}),b.default.createElement("p",null,h.tip)):null,h.note?b.default.createElement("p",{className:"wa-usage-note"},"\u7528\u6CD5\u63D0\u9192\uFF1A",h.note):null),b.default.createElement("div",{className:"wa-detail-footer"},b.default.createElement("div",{className:"wa-detail-memory"},w?b.default.createElement(b.default.Fragment,null,b.default.createElement("span",null,"\u8BB0\u5FC6\u7A33\u5B9A\u5EA6 ",w.s<1?"<1":Math.round(w.s)," \u5929"),b.default.createElement("span",null,"\u5DF2\u590D\u4E60 ",w.reps," \u6B21")):b.default.createElement("span",null,"\u8FD8\u6CA1\u5B66\u8FC7\u8FD9\u4E2A\u8BCD")),b.default.createElement("div",{className:"wa-detail-actions"},b.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:()=>c(e.id),disabled:!!w},b.default.createElement(E,{name:"check",size:15})," ",w?"\u5DF2\u5728\u590D\u4E60\u4E2D":"\u6807\u8BB0\u4E3A\u5DF2\u5B66"),b.default.createElement("div",{className:"wa-detail-nav"},b.default.createElement("button",{type:"button",className:"wa-icon-btn",onClick:n,disabled:!s,"aria-label":"\u4E0A\u4E00\u4E2A\u8BCD"},b.default.createElement(E,{name:"chevronLeft",size:18})),b.default.createElement("button",{type:"button",className:"wa-icon-btn",onClick:i,disabled:!o,"aria-label":"\u4E0B\u4E00\u4E2A\u8BCD"},b.default.createElement(E,{name:"chevronRight",size:18})))))):null)))}var j=te(require("react"),1);var ta=96;function Cr({atlas:a,word:e,progress:t,onOpen:r,onToggleBookmark:n}){let i=t.cards[e.id],s=t.bookmarks.includes(e.id),o=a.topics.find(d=>d.slug===e.topic)?.zh||e.topicZh;return j.default.createElement("article",{className:`wa-card ${i?"is-learned":""}`},j.default.createElement("div",{className:"wa-card-hit",role:"button",tabIndex:0,onClick:()=>r(e.id),onKeyDown:d=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),r(e.id))},"aria-label":`\u67E5\u770B ${e.word}`},j.default.createElement("div",{className:"wa-card-art"},j.default.createElement(Z,{id:e.id,word:e.word}),i?j.default.createElement("span",{className:"wa-card-dot",title:"\u5DF2\u5728\u590D\u4E60\u4E2D"}):null),j.default.createElement("div",{className:"wa-card-body"},j.default.createElement("div",{className:"wa-card-title"},j.default.createElement("h3",{lang:"en"},e.word),j.default.createElement(de,{level:e.cefr})),j.default.createElement("p",{className:"wa-card-ipa"},e.ipa),j.default.createElement("p",{className:"wa-card-zh"},e.zh),j.default.createElement("p",{className:"wa-card-topic"},o))),j.default.createElement("button",{type:"button",className:`wa-card-heart ${s?"is-on":""}`,onClick:d=>{d.stopPropagation(),n(e.id)},"aria-pressed":s,"aria-label":s?"\u53D6\u6D88\u6536\u85CF":"\u6536\u85CF",title:s?"\u53D6\u6D88\u6536\u85CF":"\u6536\u85CF"},j.default.createElement(E,{name:"heart",size:16,filled:s})))}function De({atlas:a,words:e,progress:t,onOpen:r,onToggleBookmark:n}){let[i,s]=(0,j.useState)(ta),o=(0,j.useRef)(null);(0,j.useEffect)(()=>{s(ta)},[e]),(0,j.useEffect)(()=>{let u=o.current;if(!u||i>=e.length)return;let c=new IntersectionObserver(m=>{m.some(x=>x.isIntersecting)&&s(x=>Math.min(x+ta,e.length))},{rootMargin:"600px 0px"});return c.observe(u),()=>c.disconnect()},[i,e.length]);let d=e.slice(0,i);return j.default.createElement("div",{className:"wa-grid-wrap"},j.default.createElement("p",{className:"wa-grid-count"},"\u5171 ",e.length.toLocaleString("en-US")," \u4E2A\u8BCD",i<e.length?` \xB7 \u5DF2\u663E\u793A ${i}`:""),j.default.createElement("div",{className:"wa-grid"},d.map(u=>j.default.createElement(Cr,{key:u.id,atlas:a,word:u,progress:t,onOpen:r,onToggleBookmark:n}))),i<e.length?j.default.createElement("div",{ref:o,className:"wa-more"},j.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:()=>s(u=>u+ta)},"\u52A0\u8F7D\u66F4\u591A\uFF08\u5269\u4F59 ",(e.length-i).toLocaleString("en-US"),"\uFF09")):null)}var g=te(require("react"),1);var zt=100;function Dr(a){let e=[...a];for(let t=e.length-1;t>0;t-=1){let r=Math.floor(Math.random()*(t+1));[e[t],e[r]]=[e[r],e[t]]}return e}function Ir(a,e){let t=Date.now(),r=e.cards,n=[];for(let u of a.words){let c=r[u.id];c&&c.due<=t&&n.push({id:u.id,word:u,card:c,due:c.due})}n.sort((u,c)=>u.due-c.due);let i=n.slice(0,zt),s=new Set(i.map(u=>u.id)),d=Dr(a.words.filter(u=>!r[u.id]&&!s.has(u.id))).slice(0,Math.max(0,e.settings.dailyNew)).map(u=>({id:u.id,word:u,card:void 0}));return[...i,...d]}function Mt(a,e){let t=Date.now(),r=0,n=0,i=0;for(let o of a.words){let d=e.cards[o.id];d&&(n+=1,d.due<=t&&(r+=1),le(d)&&(i+=1))}let s=a.count-n;return{due:r,learned:n,mastered:i,fresh:s}}function jr({atlas:a,progress:e,onStart:t}){let r=(0,g.useMemo)(()=>Mt(a,e),[a,e]),n=Math.min(e.settings.dailyNew,r.fresh),i=Math.min(r.due,zt)+n,s=(o,d)=>{J(u=>({...u,settings:{...u.settings,[o]:d}}))};return g.default.createElement("div",{className:"wa-review-intro"},g.default.createElement("div",{className:"wa-review-hero"},g.default.createElement("span",{className:"wa-review-orbit","aria-hidden":"true"},g.default.createElement(E,{name:"sparkle",size:30})),g.default.createElement("h2",null,"\u4ECA\u65E5\u590D\u4E60"),g.default.createElement("p",null,"FSRS \u4F1A\u6309\u8BB0\u5FC6\u7A33\u5B9A\u5EA6\u5B89\u6392\u590D\u4E60\u3002\u5230\u671F\u5C31\u590D\u4E60\uFF0C\u8BB0\u5F97\u7262\u7684\u8BCD\u4F1A\u8D8A\u9694\u8D8A\u4E45\u3002")),g.default.createElement("div",{className:"wa-review-stats"},g.default.createElement("div",{className:"wa-stat"},g.default.createElement("strong",null,r.due),g.default.createElement("span",null,"\u5230\u671F\u590D\u4E60")),g.default.createElement("div",{className:"wa-stat"},g.default.createElement("strong",null,n),g.default.createElement("span",null,"\u4ECA\u65E5\u65B0\u8BCD")),g.default.createElement("div",{className:"wa-stat"},g.default.createElement("strong",null,r.learned.toLocaleString("en-US")),g.default.createElement("span",null,"\u5DF2\u5B66\u8BCD")),g.default.createElement("div",{className:"wa-stat"},g.default.createElement("strong",null,r.mastered.toLocaleString("en-US")),g.default.createElement("span",null,"\u5DF2\u638C\u63E1"))),g.default.createElement("div",{className:"wa-review-settings"},g.default.createElement("label",null,"\u6BCF\u65E5\u65B0\u8BCD",g.default.createElement("select",{value:e.settings.dailyNew,onChange:o=>s("dailyNew",Number(o.target.value))},[5,10,15,20,30,50].map(o=>g.default.createElement("option",{key:o,value:o},o)))),g.default.createElement("label",null,"\u76EE\u6807\u8BB0\u5FC6\u7387",g.default.createElement("select",{value:e.settings.retention,onChange:o=>s("retention",Number(o.target.value))},[.8,.85,.9,.95].map(o=>g.default.createElement("option",{key:o,value:o},Math.round(o*100),"%"))))),g.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary wa-start-btn",onClick:t,disabled:i===0},i>0?`\u5F00\u59CB\u590D\u4E60\uFF08${i} \u4E2A\u8BCD\uFF09`:"\u4ECA\u5929\u6CA1\u6709\u8981\u590D\u4E60\u7684\u8BCD"),i===0?g.default.createElement("p",{className:"wa-review-done-hint"},g.default.createElement(E,{name:"check",size:15})," \u90FD\u590D\u4E60\u5B8C\u4E86\uFF0C\u53BB\u56FE\u9274\u91CC\u8BA4\u8BC6\u51E0\u4E2A\u65B0\u8BCD\u5427\u3002"):null,g.default.createElement("p",{className:"wa-review-tip"},"\u590D\u4E60\u8FDB\u5EA6\u4F1A\u81EA\u52A8\u4FDD\u5B58\u5230\u672C\u673A ",g.default.createElement("code",null,"$DSH_HOME/word-atlas-dsh/progress.json"),"\u3002"))}function Tr({session:a,atlas:e,progress:t,onAgain:r,onExit:n}){let i=(0,g.useMemo)(()=>Mt(e,t),[e,t]),{reviewed:s,correct:o,newWords:d}=a.stats,u=s?Math.round(o/s*100):0;return g.default.createElement("div",{className:"wa-review-summary"},g.default.createElement("span",{className:"wa-review-orbit is-done","aria-hidden":"true"},g.default.createElement(E,{name:"check",size:28})),g.default.createElement("h2",null,"\u672C\u7EC4\u5B8C\u6210"),g.default.createElement("div",{className:"wa-review-stats"},g.default.createElement("div",{className:"wa-stat"},g.default.createElement("strong",null,s),g.default.createElement("span",null,"\u590D\u4E60\u8BCD\u6570")),g.default.createElement("div",{className:"wa-stat"},g.default.createElement("strong",null,d),g.default.createElement("span",null,"\u65B0\u5B66\u8BCD")),g.default.createElement("div",{className:"wa-stat"},g.default.createElement("strong",null,u,"%"),g.default.createElement("span",null,"\u9996\u6B21\u7B54\u5BF9\u7387")),g.default.createElement("div",{className:"wa-stat"},g.default.createElement("strong",null,i.due),g.default.createElement("span",null,"\u5269\u4F59\u5230\u671F"))),g.default.createElement("div",{className:"wa-review-summary-actions"},g.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary",onClick:r},"\u518D\u7EC3\u4E00\u7EC4"),g.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:n},"\u8FD4\u56DE\u56FE\u9274")))}function Or({atlas:a,progress:e,item:t,entry:r,stats:n,onReveal:i,onGrade:s,onOpenWord:o}){let d=Date.now(),u=wt(t.card,d,e.settings.retention),c=!t.card,m=x=>x>=v.Good;return g.default.createElement("div",{className:"wa-review-card"},g.default.createElement("div",{className:"wa-review-art"},g.default.createElement(Z,{id:t.word.id,word:t.word.word,full:!0,alt:`${t.word.word} \u63D2\u753B`})),g.default.createElement("div",{className:"wa-review-body"},g.default.createElement("div",{className:"wa-review-tags"},g.default.createElement(de,{level:t.word.cefr}),c?g.default.createElement("span",{className:"wa-chip wa-chip-new"},"\u65B0\u8BCD"):g.default.createElement("span",{className:"wa-chip"},"\u5230\u671F\u590D\u4E60")),g.default.createElement("h2",{className:"wa-review-word",lang:"en"},t.word.word),g.default.createElement("div",{className:"wa-pron-row"},g.default.createElement("span",{className:"wa-ipa"},r?.uk||t.word.ipa),P(t.word,F.uk)?g.default.createElement(V,{audioKey:`uk:${t.word.id}`,url:G("uk",t.word.id),label:"\u82F1\u97F3"}):null,P(t.word,F.us)&&r?.us?g.default.createElement(V,{audioKey:`us:${t.word.id}`,url:G("us",t.word.id),label:"\u7F8E\u97F3"}):null),n.revealed?g.default.createElement("div",{className:"wa-answer"},g.default.createElement("ol",{className:"wa-senses"},(r?.senses||[]).map((x,h)=>g.default.createElement("li",{key:h},x.pos?g.default.createElement("span",{className:"wa-pos"},x.pos):null,g.default.createElement("span",{className:"wa-zh"},x.zh),x.en?g.default.createElement("span",{className:"wa-en",lang:"en"},x.en):null))),r?.ex?.[0]?g.default.createElement("p",{className:"wa-review-example",lang:"en"},g.default.createElement(se,{atlas:a,progress:e,text:r.ex[0].en,headword:t.word.word,onOpenWord:o})):null,r?.ex?.[0]?.zh?g.default.createElement("p",{className:"wa-review-example-zh"},r.ex[0].zh):null,r?.tip?g.default.createElement("p",{className:"wa-review-tip-line"},r.tip):null,g.default.createElement("div",{className:"wa-grades"},_a.map(x=>g.default.createElement("button",{type:"button",key:x,className:`wa-grade wa-grade-${x}`,onClick:()=>s(x)},g.default.createElement("span",{className:"wa-grade-label"},ut[x]),g.default.createElement("span",{className:"wa-grade-interval"},Ye(u[x]))))),g.default.createElement("p",{className:"wa-grade-hint"},"\u53EA\u6709\u9996\u6B21\u4F5C\u7B54\u8BA1\u5165\u6B63\u786E\u7387\uFF1B\u952E\u76D8 1\u20134 \u4E5F\u53EF\u4EE5\u8BC4\u5206\u3002")):g.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary wa-reveal-btn",onClick:i},"\u663E\u793A\u7B54\u6848")))}function ra({atlas:a,progress:e,onExit:t,onOpenWord:r}){let[n,i]=(0,g.useState)(null),[s,o]=(0,g.useState)(null),[d,u]=(0,g.useState)(!1),c=n&&!n.finished?n.queue[n.index]:null;(0,g.useEffect)(()=>{if(!c){o(null);return}let A=!0;return o(null),u(!1),oe(a,c.id).then(w=>{A&&o(w)}).catch(()=>{A&&u(!0)}),()=>{A=!1}},[a,c?.id]);let m=(0,g.useCallback)(()=>{let A=Ir(a,e);i({queue:A,index:0,revealed:!1,finished:!1,stats:{reviewed:0,correct:0,newWords:0},startedAt:Date.now()})},[a,e]),x=(0,g.useCallback)(()=>{i(A=>A&&!A.revealed?{...A,revealed:!0}:A)},[]),h=(0,g.useCallback)(A=>{let w=n?.queue[n.index];if(!w)return;let _=be(w.card,A,Date.now(),e.settings.retention),S=A>=v.Good;J(k=>({...k,cards:{...k.cards,[w.id]:_},days:We(k.days,{newWords:w.card?0:1,reviewed:1,correct:S?1:0})})),i(k=>{if(!k||k.finished)return k;let $={reviewed:k.stats.reviewed+1,correct:k.stats.correct+(S?1:0),newWords:k.stats.newWords+(w.card?0:1)},H=k.index+1;return H>=k.queue.length?{...k,index:H,revealed:!1,finished:!0,stats:$}:{...k,index:H,revealed:!1,stats:$}})},[n,e.settings.retention]);if((0,g.useEffect)(()=>{if(!c)return;let A=w=>{if(w.target instanceof HTMLElement&&/^(INPUT|SELECT|TEXTAREA)$/.test(w.target.tagName))return;if(!n.revealed){(w.code==="Space"||w.key==="Enter")&&(w.preventDefault(),x());return}let _={1:v.Again,2:v.Hard,3:v.Good,4:v.Easy};_[w.key]&&(w.preventDefault(),h(_[w.key]))};return window.addEventListener("keydown",A),()=>window.removeEventListener("keydown",A)},[c,n?.revealed,x,h]),!a)return null;if(!n)return g.default.createElement(jr,{atlas:a,progress:e,onStart:m});if(n.finished)return g.default.createElement(Tr,{session:n,atlas:a,progress:e,onAgain:()=>i(null),onExit:t});if(!c)return g.default.createElement(ue,{title:"\u8FD9\u4E00\u7EC4\u590D\u4E60\u5B8C\u6210\u4E86",icon:"check"});let N=n.index,L=n.queue.length,U=c;return g.default.createElement("div",{className:"wa-review-shell"},g.default.createElement("div",{className:"wa-review-top"},g.default.createElement("div",{className:"wa-review-progress"},g.default.createElement("div",{className:"wa-review-bar","aria-hidden":"true"},g.default.createElement("span",{style:{width:`${Math.round(N/L*100)}%`}})),g.default.createElement("span",{className:"wa-review-counter"},N+1," / ",L)),g.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:()=>i(null)},g.default.createElement(E,{name:"close",size:15})," \u7ED3\u675F")),d?g.default.createElement("p",{className:"wa-error"},"\u8BCD\u6761\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u8BCD\u5149\u63D2\u4EF6\u8DEF\u7531\u662F\u5426\u6B63\u5E38\u3002"):null,!s&&!d?g.default.createElement("div",{className:"wa-review-loading"},g.default.createElement(ie,{label:"\u52A0\u8F7D\u8BCD\u6761\u2026"})):null,g.default.createElement(Or,{atlas:a,progress:e,item:U,entry:s,stats:{revealed:n.revealed},onReveal:x,onGrade:h,onOpenWord:r}))}var f=te(require("react"),1);function Br(a){return a<5?"\u591C\u6DF1\u4E86":a<11?"\u65E9\u4E0A\u597D":a<14?"\u4E2D\u5348\u597D":a<18?"\u4E0B\u5348\u597D":"\u665A\u4E0A\u597D"}var St="\u65E5\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D",$t=["\u5165\u95E8","\u57FA\u7840","\u8FDB\u9636","\u4E2D\u9AD8","\u9AD8\u7EA7","\u7CBE\u901A"];function Fr({value:a,size:e=88,stroke:t=7,children:r}){let n=(e-t)/2,i=2*Math.PI*n,s=i*(1-Math.min(1,Math.max(0,a||0)));return f.default.createElement("div",{className:"wa-ring",style:{width:e,height:e}},f.default.createElement("svg",{width:e,height:e,viewBox:`0 0 ${e} ${e}`,"aria-hidden":"true"},f.default.createElement("circle",{className:"wa-ring-track",cx:e/2,cy:e/2,r:n,fill:"none",strokeWidth:t}),f.default.createElement("circle",{className:"wa-ring-fill",cx:e/2,cy:e/2,r:n,fill:"none",strokeWidth:t,strokeLinecap:"round",strokeDasharray:i,strokeDashoffset:s,transform:`rotate(-90 ${e/2} ${e/2})`})),f.default.createElement("div",{className:"wa-ring-label"},r))}function na({atlas:a,progress:e,onStart:t,onOpenWord:r,onOpenLevel:n,onOpenTopic:i}){let s=(0,f.useMemo)(()=>Ae(a,e,e.settings),[a,e]),o=e.session&&!e.session.finished?e.session:null,d=e.days[ye()],u=me(e.days),c=Object.keys(e.cards).length,m=Object.values(e.cards).filter(le).length,x=s.due.length+s.fresh.length,h=d?.r??0,N=e.settings.dailyNew+Math.min(s.due.length,60),L=new Date,U=Array.from({length:7},(z,I)=>{let q=new Date;q.setDate(q.getDate()-(6-I));let X=ye(q);return{key:X,label:St[q.getDay()],value:e.days[X]?.r??0,today:I===6}}),A=Math.max(1,...U.map(z=>z.value)),w=(0,f.useMemo)(()=>{let z=a.cefr.map(q=>({name:q,total:0,seen:0,mastered:0})),I=new Map(a.cefr.map((q,X)=>[q,X]));for(let q of a.words){let X=z[I.get(q.cefr)];if(!X)continue;X.total+=1;let Ie=e.cards[q.id];Ie&&(X.seen+=1,le(Ie)&&(X.mastered+=1))}return z},[a,e.cards]),_=(0,f.useMemo)(()=>{let z=new Map(a.topics.map(I=>[I.slug,0]));for(let I of a.words)z.set(I.topic,(z.get(I.topic)||0)+1);return z},[a]),S=(o?o.newIds:s.fresh).slice(0,5).map(z=>a.byId.get(z)).filter(Boolean),k=(0,f.useMemo)(()=>{let z=a.words.filter(q=>q.media&1&&q.cefr>=2),I=z.length?z:a.words;return I[$e(ye())%I.length]},[a]),[$,H]=(0,f.useState)(null);(0,f.useEffect)(()=>{let z=!0;if(k)return oe(a,k.id).then(I=>z&&H(I)).catch(()=>{}),()=>{z=!1}},[a,k?.id]);let W=e.settings.accent,Q=P(k||{},F[W]);return f.default.createElement("div",{className:"wa-today"},f.default.createElement("header",{className:"wa-today-head"},f.default.createElement("p",{className:"wa-eyebrow"},L.getMonth()+1," \u6708 ",L.getDate()," \u65E5 \xB7 \u661F\u671F",St[L.getDay()]),f.default.createElement("h1",null,Br(L.getHours()),"\uFF0C\u63A2\u7D22\u8005\u3002"),f.default.createElement("p",null,"\u4ECA\u5929\u5148\u6E29\u6545\uFF0C\u518D\u77E5\u65B0\u3002")),f.default.createElement("section",{className:"wa-today-hero"},f.default.createElement("img",{className:"wa-today-hero-art",src:ca("hero.webp"),alt:"",loading:"eager",onError:z=>{z.currentTarget.style.visibility="hidden"}}),f.default.createElement("div",{className:"wa-today-hero-shade","aria-hidden":"true"}),f.default.createElement("div",{className:"wa-today-hero-body"},f.default.createElement("p",{className:"wa-eyebrow"},"\u4ECA\u65E5\u5B66\u4E60"),o?f.default.createElement("h2",null,"\u8FD8\u5269 ",f.default.createElement("b",null,Math.max(0,o.steps.length-o.index))," \u6B65"):x>0?f.default.createElement("h2",null,"\u590D\u4E60 ",f.default.createElement("b",null,s.due.length)," \xB7 \u65B0\u8BCD ",f.default.createElement("b",null,s.fresh.length)):f.default.createElement("h2",null,"\u4ECA\u5929\u7684\u8BCD\u90FD\u7EC3\u5B8C\u4E86"),f.default.createElement("p",{className:"wa-today-hero-lede"},o?"\u8FDB\u5EA6\u5DF2\u4FDD\u5B58\uFF0C\u968F\u65F6\u63A5\u7740\u8D70\u3002":x>0?`\u9884\u8BA1 ${s.minutes} \u5206\u949F \xB7 \u5148\u6E29\u6545\uFF0C\u518D\u77E5\u65B0\u3002`:"\u60F3\u591A\u8D70\u4E00\u6BB5\uFF0C\u4E5F\u53EF\u4EE5\u3002"),f.default.createElement("div",{className:"wa-today-hero-actions"},o||x>0?f.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary wa-btn-lg",onClick:()=>t({})},o?"\u7EE7\u7EED\u65C5\u7A0B":"\u5F00\u59CB\u4ECA\u5929\u7684\u65C5\u7A0B"," ",f.default.createElement(E,{name:"chevronRight",size:18})):f.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary wa-btn-lg",onClick:()=>t({extra:5})},"\u518D\u8BA4\u8BC6 5 \u4E2A\u65B0\u8BCD ",f.default.createElement(E,{name:"sparkle",size:17})),!o&&s.due.length>0&&s.fresh.length>0?f.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:()=>t({reviewOnly:!0})},"\u53EA\u590D\u4E60"):null),S.length>0?f.default.createElement("div",{className:"wa-today-teaser","aria-label":"\u4ECA\u65E5\u5C06\u9047\u89C1\u7684\u65B0\u8BCD"},S.map(z=>f.default.createElement(Z,{key:z.id,id:z.id,word:z.word,className:"wa-today-teaser-img"})),f.default.createElement("span",null,"\u4ECA\u5929\u4F1A\u9047\u89C1\u5B83\u4EEC")):null)),f.default.createElement("section",{className:"wa-today-strip"},f.default.createElement("div",{className:"wa-today-goal"},f.default.createElement(Fr,{value:N?h/N:0},f.default.createElement("b",null,h),f.default.createElement("small",null,"/ ",N," \u9898")),f.default.createElement("div",null,f.default.createElement("strong",null,"\u4ECA\u65E5\u76EE\u6807"),f.default.createElement("span",null,"\u5DF2\u7B54 ",h," \xB7 \u76EE\u6807 ",N))),f.default.createElement("div",{className:"wa-today-stat"},f.default.createElement("strong",null,u),f.default.createElement("span",null,"\u8FDE\u7EED\u5B66\u4E60 \xB7 \u5929")),f.default.createElement("div",{className:"wa-today-stat"},f.default.createElement("strong",null,c.toLocaleString("en-US")),f.default.createElement("span",null,"\u5DF2\u70B9\u4EAE")),f.default.createElement("div",{className:"wa-today-stat"},f.default.createElement("strong",null,m.toLocaleString("en-US")),f.default.createElement("span",null,"\u957F\u671F\u8BB0\u4F4F"))),f.default.createElement("div",{className:"wa-today-grid"},f.default.createElement("section",{className:"wa-panel"},f.default.createElement("div",{className:"wa-panel-head"},f.default.createElement("h3",{className:"wa-eyebrow"},"\u8FD9\u4E00\u5468"),f.default.createElement("span",{className:"wa-muted"},Ee(e)," \u4E2A\u65B0\u8BCD")),f.default.createElement("ol",{className:"wa-week"},U.map(z=>f.default.createElement("li",{key:z.key,className:`${z.value?"is-on":"is-zero"} ${z.today?"is-today":""}`,title:`${z.key}\uFF1A${z.value} \u9898`},f.default.createElement("b",null,z.value||""),f.default.createElement("span",{style:{height:`${z.value?Math.max(10,Math.round(z.value/A*100)):5}%`}}),f.default.createElement("small",null,z.label))))),f.default.createElement("section",{className:"wa-panel wa-wotd",role:"button",tabIndex:0,onClick:()=>k&&r(k.id),onKeyDown:z=>{(z.key==="Enter"||z.key===" ")&&(z.preventDefault(),k&&r(k.id))}},f.default.createElement(Z,{id:k.id,word:k.word,className:"wa-wotd-img"}),f.default.createElement("div",{className:"wa-wotd-body"},f.default.createElement("h3",{className:"wa-eyebrow"},"\u4ECA\u65E5\u4E00\u8BCD"),f.default.createElement("p",{className:"wa-wotd-word",lang:"en"},k.word),f.default.createElement("div",{className:"wa-pron-row"},f.default.createElement("span",{className:"wa-ipa"},k.ipa),Q?f.default.createElement(V,{audioKey:`${W}:${k.id}`,url:G(W,k.id),label:"\u53D1\u97F3"}):null,$?.ex?.[0]&&P($,F.ex)?f.default.createElement(V,{audioKey:`ex:${k.id}`,url:G("ex",k.id),label:"\u4F8B\u53E5"}):null),f.default.createElement("p",{className:"wa-wotd-zh"},k.zh),$?.ex?.[0]?f.default.createElement("p",{className:"wa-wotd-ex",lang:"en"},$.ex[0].en):null))),f.default.createElement("section",{className:"wa-panel"},f.default.createElement("div",{className:"wa-panel-head"},f.default.createElement("h3",{className:"wa-eyebrow"},"\u5B66\u4E60\u8DEF\u7EBF \xB7 \u4ECE A1 \u5230 C2"),f.default.createElement("span",{className:"wa-muted"},"\u8D77\u70B9\uFF1A",a.cefr[e.settings.startLevel]||"A1")),f.default.createElement("ol",{className:"wa-route"},f.default.createElement("span",{className:"wa-route-line","aria-hidden":"true"}),w.map((z,I)=>f.default.createElement("li",{key:z.name},f.default.createElement("button",{type:"button",className:`${I===e.settings.startLevel?"is-start":""} ${z.seen?"is-on":""}`,onClick:()=>n(z.name),"aria-label":`${z.name} ${$t[I]}\uFF0C\u5DF2\u5B66 ${z.seen} / ${z.total}\uFF0C\u957F\u671F\u8BB0\u4F4F ${z.mastered}`},f.default.createElement("span",{className:"wa-route-node"},f.default.createElement("b",null,z.name),I===e.settings.startLevel?f.default.createElement("em",null,"\u8D77\u70B9"):null),f.default.createElement("span",{className:"wa-route-name"},$t[I]),f.default.createElement("span",{className:"wa-route-count"},z.seen,f.default.createElement("small",null,"/",z.total)),f.default.createElement("span",{className:"wa-route-bar"},f.default.createElement("i",{style:{width:`${Math.round(z.seen/Math.max(1,z.total)*100)}%`}}),f.default.createElement("b",{style:{width:`${Math.round(z.mastered/Math.max(1,z.total)*100)}%`}}))))))),f.default.createElement("section",{className:"wa-panel"},f.default.createElement("div",{className:"wa-panel-head"},f.default.createElement("h3",{className:"wa-eyebrow"},"\u6309\u96C5\u601D\u8BDD\u9898\u63A2\u7D22"),f.default.createElement("button",{type:"button",className:"wa-link",onClick:()=>i("all")},"\u6253\u5F00\u56FE\u9274")),f.default.createElement("ul",{className:"wa-topics-grid"},a.topics.map(z=>f.default.createElement("li",{key:z.slug},f.default.createElement("button",{type:"button",onClick:()=>i(z.slug)},f.default.createElement("img",{src:ca(`topic-${z.slug}.webp`),alt:"",loading:"lazy",onError:I=>{I.currentTarget.style.display="none"}}),f.default.createElement("span",null,f.default.createElement("b",null,z.zh),f.default.createElement("small",null,(_.get(z.slug)||0).toLocaleString("en-US")," \u4E2A\u8BCD"))))))))}var l=te(require("react"),1);var Hr={meaning:"\u5B83\u662F\u4EC0\u4E48\u610F\u601D\uFF1F",picture:"\u770B\u56FE\uFF0C\u8865\u5168\u8FD9\u53E5\u8BDD",listen:"\u542C\uFF0C\u662F\u54EA\u4E2A\u8BCD\uFF1F",spell:"\u62FC\u51FA\u8FD9\u4E2A\u8BCD"};function Et(a,e){let[t,r]=(0,l.useState)(null);return(0,l.useEffect)(()=>{let n=!0;if(r(null),!!e)return oe(a,e).then(i=>n&&r(i)).catch(()=>{}),()=>{n=!1}},[a,e]),t}function At(a){let e=(0,l.useRef)(Date.now());return(0,l.useEffect)(()=>{e.current=Date.now()},[a]),()=>Date.now()-e.current}function Lt(a){let e=(0,l.useRef)(a);e.current=a,(0,l.useEffect)(()=>{let t=r=>{if(r.metaKey||r.ctrlKey||r.altKey||r.repeat)return;let n=r.target,i=n instanceof HTMLElement?n.tagName:"";if((i==="INPUT"||i==="TEXTAREA")&&!(r.key==="Enter"&&n instanceof HTMLInputElement&&n.readOnly)||i==="BUTTON"&&(r.key==="Enter"||r.key===" "))return;let s=e.current[r.key];s&&(r.preventDefault(),s())};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[])}function Aa({progress:a,value:e,total:t,count:r,onExit:n}){let i=Math.round(Math.min(1,Math.max(0,a))*100);return l.default.createElement("header",{className:"wa-learn-bar"},l.default.createElement("div",{className:"wa-learn-bar-inner"},l.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost wa-learn-exit",onClick:n,"aria-label":"\u9000\u51FA\u5B66\u4E60"},l.default.createElement(E,{name:"close",size:16})," \u9000\u51FA"),l.default.createElement("div",{className:"wa-learn-bar-center"},l.default.createElement("span",{className:"wa-learn-bar-title"},"\u4ECA\u65E5\u5B66\u4E60"),l.default.createElement("div",{className:"wa-learn-progress",role:"progressbar","aria-valuemin":0,"aria-valuemax":t||1,"aria-valuenow":e},l.default.createElement("span",{style:{width:`${i}%`}}))),r?l.default.createElement("span",{className:"wa-learn-count"},r):null))}function La({bar:a,children:e,centered:t=!1}){return l.default.createElement("div",{className:"wa-learn"},a,l.default.createElement("main",{className:`wa-learn-stage ${t?"is-centered":""}`},e))}function Wr({atlas:a,progress:e,step:t,onOpenWord:r}){let n=Et(a,t.id),i=At(t.id),s=e.settings.accent,o=(0,l.useRef)(!1);(0,l.useEffect)(()=>{o.current=!1},[t.id]),(0,l.useEffect)(()=>{!n||o.current||(o.current=!0,e.settings.autoplay&&P(n,F[s])&&ke(`${s}:${t.id}`,G(s,t.id)))},[n,s,t.id,e.settings.autoplay]);let d=(0,l.useCallback)(()=>{Ne(),J(c=>Le(c,i()/1e3))},[i]);if(Lt({Enter:d," ":d}),!n)return l.default.createElement("div",{className:"wa-learn-loading"},l.default.createElement(ie,{label:"\u51C6\u5907\u8BCD\u5361\u2026"}));let u=a.byId.get(t.id);return l.default.createElement("div",{className:"wa-learn-intro"},l.default.createElement("p",{className:"wa-learn-label"},l.default.createElement("span",{className:"wa-dot is-on"})," \u521D\u6B21\u89C1\u9762"),l.default.createElement("div",{className:"wa-learn-card"},l.default.createElement(Z,{id:u.id,word:u.word,full:!0,className:"wa-learn-art",alt:`${u.word} \u63D2\u753B`}),l.default.createElement("div",{className:"wa-learn-body"},l.default.createElement("div",{className:"wa-tags"},l.default.createElement(de,{level:u.cefr}),u.topicZh?l.default.createElement("span",{className:"wa-chip"},u.topicZh):null),l.default.createElement("h2",{className:"wa-learn-word",lang:"en"},u.word),l.default.createElement("div",{className:"wa-pron"},n.uk?l.default.createElement("div",{className:"wa-pron-row"},l.default.createElement("span",{className:"wa-pron-label"},"\u82F1"),l.default.createElement("span",{className:"wa-ipa"},n.uk),P(n,F.uk)?l.default.createElement(V,{audioKey:`uk:${u.id}`,url:G("uk",u.id),label:"\u53D1\u97F3"}):null):null,n.us?l.default.createElement("div",{className:"wa-pron-row"},l.default.createElement("span",{className:"wa-pron-label"},"\u7F8E"),l.default.createElement("span",{className:"wa-ipa"},n.us),P(n,F.us)?l.default.createElement(V,{audioKey:`us:${u.id}`,url:G("us",u.id),label:"\u53D1\u97F3"}):null):null),l.default.createElement("ol",{className:"wa-senses"},(n.senses||[]).map((c,m)=>l.default.createElement("li",{key:m},c.pos?l.default.createElement("span",{className:"wa-pos"},c.pos):null,l.default.createElement("span",{className:"wa-zh"},c.zh),c.en?l.default.createElement("span",{className:"wa-en",lang:"en"},c.en):null))),(n.ex||[]).slice(0,1).map((c,m)=>l.default.createElement("div",{className:"wa-learn-example",key:m},l.default.createElement("p",{className:"wa-ex-en",lang:"en"},l.default.createElement(se,{atlas:a,progress:e,text:c.en,headword:u.word,onOpenWord:r})),l.default.createElement("p",{className:"wa-ex-zh"},c.zh))),n.tip?l.default.createElement("aside",{className:"wa-tip"},l.default.createElement(E,{name:"sparkle",size:17}),l.default.createElement("p",null,n.tip)):null)),l.default.createElement("div",{className:"wa-learn-actions"},l.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary wa-btn-lg",onClick:d,autoFocus:!0},"\u8BA4\u8BC6\u4E86 ",l.default.createElement(E,{name:"chevronRight",size:18})),l.default.createElement("span",{className:"wa-hint"},"Enter \u7EE7\u7EED")))}function Ur({entry:a,pending:e,hints:t,onHint:r,onSubmit:n}){let[i,s]=(0,l.useState)(""),o=(0,l.useRef)(null),d=a.w,u=d.slice(0,t);(0,l.useEffect)(()=>{t&&!i.toLowerCase().startsWith(u.toLowerCase())&&s(u),o.current?.focus()},[t]);let c=e?e.value:i;return l.default.createElement("form",{className:"wa-spell",onSubmit:m=>{m.preventDefault(),!e&&i.trim()&&n(i)}},l.default.createElement("div",{className:"wa-slots","aria-hidden":"true",onClick:()=>o.current?.focus()},Array.from(d).map((m,x)=>{let h=c[x],N=h!==void 0&&h.toLowerCase()===m.toLowerCase();return l.default.createElement("span",{key:x,className:`wa-slot ${m===" "?"is-space":""} ${h!==void 0?e?N?"is-ok":"is-bad":"is-filled":""} ${!e&&x===c.length?"is-caret":""}`},e&&!e.correct?m:h??"")})),l.default.createElement("input",{ref:o,className:"wa-spell-input",value:c,onChange:m=>!e&&s(m.target.value.slice(0,d.length+6)),autoFocus:!0,autoCapitalize:"off",autoCorrect:"off",autoComplete:"off",spellCheck:!1,enterKeyHint:"done","aria-label":`\u62FC\u5199\uFF0C${d.length} \u4E2A\u5B57\u7B26`,readOnly:!!e}),e?null:l.default.createElement("div",{className:"wa-spell-actions"},l.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:r,disabled:t>=d.length-1},l.default.createElement(E,{name:"sparkle",size:15})," \u63D0\u793A\u5B57\u6BCD"),l.default.createElement("button",{type:"submit",className:"wa-btn wa-btn-primary",disabled:!i.trim()},"\u786E\u8BA4 ",l.default.createElement("kbd",null,"Enter"))))}function Pr({atlas:a,progress:e,entry:t,word:r,correct:n,onNext:i,onOpenWord:s}){let o=(0,l.useRef)(null);return(0,l.useEffect)(()=>o.current?.focus({preventScroll:!0}),[]),l.default.createElement("div",{className:`wa-feedback ${n?"is-right":"is-wrong"}`,role:"status"},l.default.createElement("div",{className:"wa-feedback-main"},l.default.createElement(Z,{id:r.id,word:r.word,className:"wa-feedback-thumb"}),l.default.createElement("div",{className:"wa-feedback-text"},l.default.createElement("p",{className:"wa-feedback-verdict"},n?"\u7B54\u5BF9\u4E86":`\u6CA1\u5173\u7CFB\uFF0C\u8BB0\u4F4F\u5B83 \xB7 \u6B63\u786E\u7B54\u6848\u662F ${t.w}`),l.default.createElement("p",{className:"wa-feedback-word"},l.default.createElement("b",{lang:"en"},t.w),l.default.createElement("span",{className:"wa-ipa"},t.uk||t.us)),l.default.createElement("p",{className:"wa-feedback-zh"},(t.senses||[]).slice(0,2).map(d=>`${d.pos} ${d.zh}`).join("\u3000")),t.ex?.[0]?l.default.createElement("p",{className:"wa-feedback-ex",lang:"en"},l.default.createElement(se,{atlas:a,progress:e,text:t.ex[0].en,headword:r.word,onOpenWord:s})):null),l.default.createElement("button",{ref:o,type:"button",className:`wa-btn wa-btn-lg ${n?"wa-btn-primary":"wa-btn-ghost"}`,onClick:i},"\u7EE7\u7EED ",l.default.createElement(E,{name:"chevronRight",size:18}))))}function Gr({atlas:a,progress:e,session:t,step:r,onOpenWord:n}){let i=Et(a,r.id),s=a.byId.get(r.id),o=e.settings,d=o.accent,u=t.pending,c=At(`${r.id}-${r.kind}-${t.index}`),[m,x]=(0,l.useState)(0),h=(r.options||[]).map(w=>a.byId.get(w)).filter(Boolean),N=i?.ex?.[0]?xt(i.ex[0].en,i.w):null,L=(0,l.useCallback)((w,_)=>{if(u)return;let S=Qe(r.kind,_,c(),m>0);J(k=>Re(k,a,r,_,S,w,o)),o.autoplay&&i&&P(i,F[d])&&ke(`${d}:${r.id}`,G(d,r.id))},[u,c,m,r,a,o,i,d]),U=(0,l.useCallback)(()=>{Ne(),J(w=>Le(w,c()/1e3))},[c]);(0,l.useEffect)(()=>{r.kind!=="listen"||u||!i||P(i,F[d])&&ke(`listen:${r.id}:${t.index}`,G(d,r.id))},[r.kind,r.id,u,i,d,t.index]);let A={};return u?(A.Enter=U,A[" "]=U):r.kind!=="spell"&&h.forEach((w,_)=>{A[String(_+1)]=()=>L(w.id,w.id===s.id)}),Lt(A),i?l.default.createElement("div",{className:`wa-quiz wa-quiz-${r.kind} ${u?u.correct?"is-right":"is-wrong":""}`},l.default.createElement("p",{className:"wa-learn-label"},l.default.createElement("span",{className:`wa-dot ${r.retry?"is-warn":"is-on"}`}),r.retry?"\u518D\u89C1\u4E00\u9762 \xB7 ":"",Hr[r.kind]),r.kind==="meaning"?l.default.createElement("div",{className:"wa-quiz-meaning"},l.default.createElement("h2",{className:"wa-learn-word",lang:"en"},i.w),l.default.createElement("div",{className:"wa-pron-row"},l.default.createElement("span",{className:"wa-ipa"},d==="us"?i.us||i.uk:i.uk||i.us),P(i,F[d])?l.default.createElement(V,{audioKey:`${d}:${s.id}`,url:G(d,s.id),label:"\u53D1\u97F3"}):null)):null,r.kind==="picture"?l.default.createElement("div",{className:"wa-quiz-picture"},l.default.createElement(Z,{id:s.id,word:s.word,full:!0,className:"wa-quiz-art",alt:`${s.word} \u63D2\u753B`}),l.default.createElement("p",{className:"wa-cloze",lang:"en"},N?l.default.createElement(l.default.Fragment,null,N.before,l.default.createElement("span",{className:"wa-blank"},u?N.hidden:"\u3000\u3000\u3000"),N.after):i.senses[0]?.zh),N&&u?l.default.createElement("p",{className:"wa-cloze-zh"},i.ex[0].zh):null):null,r.kind==="listen"?l.default.createElement("div",{className:"wa-quiz-listen"},l.default.createElement("button",{type:"button",className:"wa-listen-orb",onClick:()=>P(i,F[d])&&ke(`listen:${r.id}:replay:${Date.now()}`,G(d,s.id)),"aria-label":"\u518D\u542C\u4E00\u904D"},l.default.createElement(E,{name:"volume",size:44})),l.default.createElement("span",{className:"wa-hint"},"\u518D\u542C\u4E00\u904D")):null,r.kind==="spell"?l.default.createElement("div",{className:"wa-quiz-spell"},l.default.createElement(Z,{id:s.id,word:s.word,className:"wa-spell-art",alt:`${s.word} \u63D2\u753B`}),l.default.createElement("div",null,l.default.createElement("p",{className:"wa-spell-zh"},i.senses[0]?.pos?l.default.createElement("span",{className:"wa-pos"},i.senses[0].pos):null," ",i.senses[0]?.zh),N?l.default.createElement("p",{className:"wa-cloze wa-cloze-sm",lang:"en"},N.before,l.default.createElement("span",{className:"wa-blank"},"\u3000\u3000\u3000"),N.after):null,P(i,F[d])?l.default.createElement(V,{audioKey:`${d}:${s.id}`,url:G(d,s.id),label:"\u542C\u53D1\u97F3"}):null)):null,r.kind==="spell"?l.default.createElement(Ur,{entry:i,pending:u,hints:m,onHint:()=>x(w=>Math.min(i.w.length-1,w+1)),onSubmit:w=>L(w,w.trim().toLowerCase()===i.w.toLowerCase())}):l.default.createElement("ul",{className:`wa-options ${r.kind==="meaning"?"is-zh":""}`},h.map((w,_)=>{let S=w.id===s.id,k=u?.value===w.id,$=u?S?"is-answer":k?"is-chosen":"is-dim":"";return l.default.createElement("li",{key:w.id},l.default.createElement("button",{type:"button",className:`wa-option ${$}`,"data-option":w.id,onClick:()=>L(w.id,S),disabled:!!u,"aria-label":u?`${S?"\u6B63\u786E\u7B54\u6848":k?"\u4F60\u7684\u9009\u62E9\uFF0C\u9519\u8BEF":"\u672A\u9009\u62E9"}\uFF1A${r.kind==="meaning"?w.zh:w.word}`:void 0},l.default.createElement("kbd",null,_+1),l.default.createElement("span",{lang:r.kind==="meaning"?"zh":"en"},r.kind==="meaning"?w.zh:w.word),u&&S?l.default.createElement(E,{name:"check",size:18}):null,u&&k&&!S?l.default.createElement(E,{name:"close",size:18}):null))})),u?l.default.createElement(Pr,{atlas:a,progress:e,entry:i,word:s,correct:u.correct,onNext:U,onOpenWord:n}):null):l.default.createElement("div",{className:"wa-learn-loading"},l.default.createElement(ie,{label:"\u52A0\u8F7D\u9898\u76EE\u2026"}))}function qr({atlas:a,progress:e,session:t,onExit:r,onRestart:n,onOpenWord:i}){let s=ea(t),o=[...new Set(t.steps.map(m=>m.id))].map(m=>a.byId.get(m)).filter(Boolean),d=o.filter(m=>t.graded[m.id]===v.Again),u=Math.max(1,Math.round(((t.finished||Date.now())-t.started)/6e4)),c=()=>{J(m=>({...m,session:null})),r()};return l.default.createElement("div",{className:"wa-learn-summary"},l.default.createElement("span",{className:"wa-summary-orbit","aria-hidden":"true"},l.default.createElement(E,{name:"sparkle",size:30})),l.default.createElement("p",{className:"wa-eyebrow"},"\u8FD9\u4E00\u7A0B\u7ED3\u675F\u4E86"),l.default.createElement("h1",null,s.accuracy>=90?"\u6F02\u4EAE\u7684\u4E00\u7A0B\u3002":s.accuracy>=60?"\u7A33\u7A33\u5411\u524D\u3002":"\u9519\u8FC7\u7684\uFF0C\u4F1A\u518D\u76F8\u9047\u3002"),l.default.createElement("div",{className:"wa-summary-stats"},l.default.createElement("div",{className:"wa-summary-stat is-hero"},l.default.createElement("strong",null,s.accuracy,"%"),l.default.createElement("span",null,"\u9996\u6B21\u6B63\u786E\u7387")),l.default.createElement("div",{className:"wa-summary-stat"},l.default.createElement("strong",null,t.newIds.length),l.default.createElement("span",null,"\u65B0\u8BCD")),l.default.createElement("div",{className:"wa-summary-stat"},l.default.createElement("strong",null,t.reviewIds.length),l.default.createElement("span",null,"\u590D\u4E60")),l.default.createElement("div",{className:"wa-summary-stat"},l.default.createElement("strong",null,u),l.default.createElement("span",null,"\u5206\u949F"))),l.default.createElement("ul",{className:"wa-summary-words"},o.map(m=>l.default.createElement("li",{key:m.id,className:t.graded[m.id]===v.Again?"is-wrong":"",role:"button",tabIndex:0,title:`${m.word} ${m.zh}`,onClick:()=>i(m.id),onKeyDown:x=>x.key==="Enter"&&i(m.id)},l.default.createElement(Z,{id:m.id,word:m.word,className:"wa-summary-thumb"}),l.default.createElement("span",{lang:"en"},m.word),l.default.createElement("small",null,m.zh)))),l.default.createElement("p",{className:"wa-summary-note"},"FSRS \u5DF2\u4E3A\u6BCF\u4E2A\u8BCD\u6392\u597D\u4E0B\u6B21\u76F8\u9047\u7684\u65F6\u95F4\u3002\u7B54\u9519\u7684\u8BCD\uFF0C\u4F1A\u66F4\u65E9\u56DE\u6765\u3002"),l.default.createElement("div",{className:"wa-summary-actions"},d.length>0?l.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:()=>n({ids:d.map(m=>m.id)})},l.default.createElement(E,{name:"refresh",size:16})," \u518D\u7EC3 ",d.length," \u4E2A\u9519\u8BCD"):null,l.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary wa-btn-lg",onClick:c,autoFocus:!0},"\u5B8C\u6210 ",l.default.createElement(E,{name:"check",size:17}))),l.default.createElement("p",{className:"wa-hint"},"\u8FDB\u5EA6\u5DF2\u81EA\u52A8\u4FDD\u5B58"))}function ia({atlas:a,progress:e,onExit:t,onRestart:r,onOpenWord:n}){(0,l.useEffect)(()=>()=>Ne(),[]);let i=e.session;if(!i)return l.default.createElement(La,{bar:l.default.createElement(Aa,{progress:0,value:0,total:1,count:"",onExit:t}),centered:!0},l.default.createElement(ue,{icon:"sparkle",title:"\u4ECA\u5929\u6CA1\u6709\u5F85\u5B66\u7684\u8BCD"},l.default.createElement("p",null,"\u53EF\u4EE5\u5148\u56DE\u987E\u56FE\u9274\uFF0C\u6216\u8005\u660E\u5929\u518D\u6765\u3002"),l.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary",onClick:t},"\u8FD4\u56DE\u4ECA\u65E5")));if(i.finished||i.index>=i.steps.length)return l.default.createElement(La,{bar:l.default.createElement(Aa,{progress:1,value:1,total:1,count:"\u5B8C\u6210",onExit:t}),centered:!0},l.default.createElement(qr,{atlas:a,progress:e,session:i,onExit:t,onRestart:r,onOpenWord:n}));let s=i.steps[i.index],o=i.steps.length;return l.default.createElement(La,{key:`${i.id}-${i.index}`,bar:l.default.createElement(Aa,{progress:i.index/o,value:i.index,total:o,count:`${i.index+1} / ${o}`,onExit:t})},s.kind==="intro"?l.default.createElement(Wr,{atlas:a,progress:e,step:s,onOpenWord:n}):l.default.createElement(Gr,{atlas:a,progress:e,session:i,step:s,onOpenWord:n}))}var p=te(require("react"),1);var It="/word-atlas/api/offline",Ct=[{id:"thumb",label:"\u7F29\u7565\u56FE",hint:"\u7F51\u683C / \u67E5\u8BCD\u6D6E\u7A97",bytes:84*1024*1024},{id:"img",label:"\u5B8C\u6574\u63D2\u753B",hint:"\u8BCD\u5361\u5927\u56FE",bytes:199*1024*1024},{id:"audio",label:"\u53D1\u97F3",hint:"\u82F1\u97F3 / \u7F8E\u97F3 / \u4F8B\u53E5\u6717\u8BFB",bytes:418*1024*1024}];function sa(a){if(!Number.isFinite(a)||a<=0)return"0 B";let e=["B","KB","MB","GB"],t=a,r=0;for(;t>=1024&&r<e.length-1;)t/=1024,r+=1;return`${t.toFixed(r>=2?1:0)} ${e[r]}`}function Kr(a){if(!Number.isFinite(a)||a<=0)return"\u2014";let e=Math.round(a/1e3);if(e<60)return`${e} \u79D2`;let t=Math.round(e/60);return t<60?`${t} \u5206\u949F`:`${(t/60).toFixed(1)} \u5C0F\u65F6`}function oa({value:a,options:e,onChange:t,ariaLabel:r}){return p.default.createElement("div",{className:"wa-seg",role:"group","aria-label":r},e.map(n=>p.default.createElement("button",{type:"button",key:n.value,className:a===n.value?"is-on":"",onClick:()=>t(n.value)},n.label)))}function Dt({on:a,onChange:e,label:t,hint:r}){return p.default.createElement("label",{className:"wa-switch-row"},p.default.createElement("span",null,p.default.createElement("b",null,t),r?p.default.createElement("small",null,r):null),p.default.createElement("button",{type:"button",role:"switch","aria-checked":a,"aria-label":t,className:`wa-switch ${a?"is-on":""}`,onClick:()=>e(!a)},p.default.createElement("span",null)))}function Zr({offline:a,refresh:e}){let[t,r]=(0,p.useState)(["thumb"]),[n,i]=(0,p.useState)("remote"),[s,o]=(0,p.useState)(!1),[d,u]=(0,p.useState)(""),c=a?.state==="downloading";(0,p.useEffect)(()=>{a?.contentDirReady&&i("repo")},[a?.contentDirReady]);let m=async(_,S,k)=>{o(!0),u("");try{let $=await fetch(`${It}${S}`,{method:_,headers:k?{"Content-Type":"application/json"}:void 0,body:k?JSON.stringify(k):void 0}),H=await $.json().catch(()=>({}));return(!$.ok||H.ok===!1)&&u(H.error||`\u8BF7\u6C42\u5931\u8D25\uFF08HTTP ${$.status}\uFF09`),await e(),H}catch($){return u(String($?.message||$)),null}finally{o(!1)}},x=_=>{r(S=>S.includes(_)?S.filter(k=>k!==_):[...S,_])},h=Ct.filter(_=>t.includes(_.id)).reduce((_,S)=>_+S.bytes,0),N=a?.done??0,L=a?.total??0,U=L>0?Math.min(100,Math.round(N/L*100)):0,A=a?.state==="done"||(a?.done??0)>0,w=!!a?.contentDirReady;return p.default.createElement("section",{className:"wa-panel"},p.default.createElement("h3",{className:"wa-eyebrow"},"\u79BB\u7EBF\u7D20\u6750"),p.default.createElement("p",{className:"wa-panel-hint"},"\u8BCD\u5E93\u6587\u5B57\u5DF2\u5185\u7F6E\uFF1B\u8FD9\u91CC\u628A\u63D2\u753B\u4E0E\u53D1\u97F3\u4E0B\u8F7D\u5230\u672C\u673A\uFF0C\u65AD\u7F51\u4E5F\u80FD\u770B\u56FE\u3001\u542C\u97F3\u3002",a?.contentDirReady?" \u5F53\u524D\u5DF2\u68C0\u6D4B\u5230\u672C\u673A\u8BCD\u5149\u4ED3\u5E93\uFF0C\u7D20\u6750\u53EF\u76F4\u63A5\u4ECE\u672C\u5730\u8BFB\u53D6\u3002":""),p.default.createElement("div",{className:"wa-offline-source"},p.default.createElement("span",{className:`wa-dot ${w||A?"is-on":""}`}),w?`\u672C\u673A\u8BCD\u5149\u4ED3\u5E93\uFF1A${a?.contentDir}`:A?`\u79BB\u7EBF\u5305\uFF1A${sa(a?.bytes??0)}\uFF08${N.toLocaleString("en-US")}${L?` / ${L.toLocaleString("en-US")}`:""} \u4E2A\u6587\u4EF6\uFF09`:"\u5B98\u65B9\u7AD9\u70B9\u6309\u9700\u52A0\u8F7D\uFF08\u9996\u6B21\u770B\u56FE/\u542C\u97F3\u9700\u8981\u8054\u7F51\uFF09",a?.autoCache?" \xB7 \u6309\u9700\u7F13\u5B58\u5DF2\u5F00\u542F":""),a?.dir?p.default.createElement("p",{className:"wa-panel-path"},"\u4FDD\u5B58\u4F4D\u7F6E\uFF1A",a.dir):null,p.default.createElement("div",{className:"wa-tier-list"},Ct.map(_=>p.default.createElement("label",{key:_.id,className:"wa-tier"},p.default.createElement("input",{type:"checkbox",checked:t.includes(_.id),disabled:c,onChange:()=>x(_.id)}),p.default.createElement("span",null,p.default.createElement("b",null,_.label),p.default.createElement("small",null,_.hint," \xB7 \u7EA6 ",sa(_.bytes)))))),p.default.createElement("div",{className:"wa-offline-actions"},p.default.createElement("select",{value:n,onChange:_=>i(_.target.value),disabled:c,"aria-label":"\u4E0B\u8F7D\u6765\u6E90"},p.default.createElement("option",{value:"remote"},"\u5B98\u65B9\u7AD9\u70B9"),p.default.createElement("option",{value:"repo",disabled:!a?.contentDirReady},"\u672C\u673A\u8BCD\u5149\u4ED3\u5E93")),c?p.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",disabled:s,onClick:()=>m("POST","/cancel")},"\u53D6\u6D88\u4E0B\u8F7D"):p.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary",disabled:s||t.length===0,onClick:()=>m("POST","/start",{tiers:t,source:n})},"\u5F00\u59CB\u4E0B\u8F7D",h?`\uFF08\u7EA6 ${sa(h)}\uFF09`:""),p.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",disabled:s||c||!A,onClick:()=>{confirm("\u5220\u9664\u5DF2\u4E0B\u8F7D\u7684\u79BB\u7EBF\u7D20\u6750\uFF1F\u8BCD\u5E93\u6587\u5B57\u4E0D\u53D7\u5F71\u54CD\u3002")&&m("DELETE","")}},"\u5220\u9664\u79BB\u7EBF\u5305")),c||N>0?p.default.createElement("div",{className:"wa-progress"},p.default.createElement("div",{className:"wa-progress-bar"},p.default.createElement("span",{style:{width:`${U}%`}})),p.default.createElement("div",{className:"wa-progress-meta"},p.default.createElement("span",null,c?"\u4E0B\u8F7D\u4E2D":a?.state==="cancelled"?"\u5DF2\u53D6\u6D88":"\u5DF2\u5B8C\u6210"," \xB7 ",U,"%"),p.default.createElement("span",null,N.toLocaleString("en-US"),L?` / ${L.toLocaleString("en-US")}`:""," \u4E2A\u6587\u4EF6",a?.speed?` \xB7 ${sa(a.speed)}/s`:"",c&&a?.etaMs?` \xB7 \u5269\u7EA6 ${Kr(a.etaMs)}`:"",a?.failed?` \xB7 \u5931\u8D25 ${a.failed}`:""))):null,d?p.default.createElement("p",{className:"wa-error-text"},d):null,p.default.createElement("p",{className:"wa-panel-note"},"\u4E0B\u8F7D\u6E90\uFF1A\u5B98\u65B9\u7AD9\u70B9\uFF08CC BY 4.0 \u7D20\u6750\uFF09\u6216\u672C\u673A\u8BCD\u5149\u4ED3\u5E93\uFF1B\u754C\u9762\u97F3\u6548\u4E0D\u5728\u79BB\u7EBF\u5305\u5185\u3002 \u6309\u9700\u7F13\u5B58\u53EF\u5728 profile \u7684 ",p.default.createElement("code",null,"cordis.patch.yml")," \u4E2D\u8BBE\u7F6E ",p.default.createElement("code",null,"autoCache: true"),"\u3002"))}function Yr({days:a}){let t=new Date,r=new Date;r.setDate(t.getDate()-139-t.getDay());let n=[],i=new Date(r);for(let o=0;o<147;o+=1){let d=we(i);n.push({key:d,value:a[d]?.r??0,future:i>t}),i.setDate(i.getDate()+1)}let s=o=>o===0?0:o<10?1:o<25?2:o<50?3:4;return p.default.createElement("div",{className:"wa-heatmap",role:"img","aria-label":"\u5B66\u4E60\u70ED\u529B\u56FE"},n.map(o=>p.default.createElement("span",{key:o.key,className:`wa-heat-${o.future?"x":s(o.value)}`,title:`${o.key} \xB7 ${o.value} \u9898`})))}function la({atlas:a,progress:e,onOpenWord:t}){let r=(0,p.useMemo)(()=>{let w=Object.values(e.cards),_=Object.values(e.days),S=_.reduce((W,Q)=>W+(Q.r||0),0),k=_.reduce((W,Q)=>W+(Q.c||0),0),$=_.reduce((W,Q)=>W+(Q.t||0),0),H=Array.from({length:7},(W,Q)=>{let z=new Date;z.setHours(23,59,59,999),z.setDate(z.getDate()+Q);let I=new Date(z);return I.setHours(0,0,0,0),w.filter(q=>(Q===0||q.due>=I.getTime())&&q.due<=z.getTime()).length});return{learned:w.length,mastered:w.filter(le).length,reviews:S,accuracy:S?Math.round(k/S*100):0,minutes:Math.round($/60),streakDays:me(e.days),forecast:H}},[e]),n=(0,p.useMemo)(()=>a?e.mistakes.map(w=>a.byId.get(w)).filter(Boolean).slice(0,24):[],[a,e.mistakes]),i=Math.max(1,...r.forecast),[s,o]=(0,p.useState)(null),[d,u]=(0,p.useState)(""),[c,m]=(0,p.useState)(""),x=(0,p.useRef)(null),h=e.settings,N=(0,p.useCallback)(async()=>{try{let w=await fetch(It,{cache:"no-store"});if(!w.ok)throw new Error(`HTTP ${w.status}`);let _=await w.json();o(_),u("")}catch{u("\u79BB\u7EBF\u670D\u52A1\u4E0D\u53EF\u7528\uFF0C\u8BF7\u786E\u8BA4 Host \u63D2\u4EF6\u5DF2\u542F\u7528\u3002")}},[]);(0,p.useEffect)(()=>{N()},[N]),(0,p.useEffect)(()=>{if(s?.state!=="downloading")return;let w=setInterval(N,1200);return()=>clearInterval(w)},[s?.state,N]);let L=w=>J(_=>({..._,settings:{..._.settings,...w}})),U=()=>{let w=new Blob([at()],{type:"application/json"}),_=URL.createObjectURL(w),S=document.createElement("a");S.href=_,S.download=`word-atlas-backup-${new Date().toISOString().slice(0,10)}.json`,S.click(),setTimeout(()=>URL.revokeObjectURL(_),1e3),m("\u5DF2\u5BFC\u51FA\u5907\u4EFD\u6587\u4EF6")},A=async w=>{let _=await w.text(),S=tt(_);m(S.ok?`\u5DF2\u6062\u590D ${S.cards} \u4E2A\u8BCD\u7684\u8BB0\u5FC6`:S.error)};return p.default.createElement("div",{className:"wa-settings"},p.default.createElement("section",{className:"wa-me-strip"},p.default.createElement("div",{className:"wa-me-stat"},p.default.createElement("strong",null,r.streakDays),p.default.createElement("span",null,"\u8FDE\u7EED\u5B66\u4E60 \xB7 \u5929")),p.default.createElement("div",{className:"wa-me-stat"},p.default.createElement("strong",null,r.learned.toLocaleString("en-US")),p.default.createElement("span",null,"\u5DF2\u70B9\u4EAE")),p.default.createElement("div",{className:"wa-me-stat"},p.default.createElement("strong",null,r.mastered.toLocaleString("en-US")),p.default.createElement("span",null,"\u957F\u671F\u8BB0\u4F4F")),p.default.createElement("div",{className:"wa-me-stat"},p.default.createElement("strong",null,r.accuracy,"%"),p.default.createElement("span",null,"\u9996\u6B21\u6B63\u786E\u7387")),p.default.createElement("div",{className:"wa-me-stat"},p.default.createElement("strong",null,r.minutes),p.default.createElement("span",null,"\u5B66\u4E60\u5206\u949F"))),p.default.createElement("div",{className:"wa-me-grid"},p.default.createElement("section",{className:"wa-panel"},p.default.createElement("h3",{className:"wa-eyebrow"},"\u8FC7\u53BB 20 \u5468"),p.default.createElement(Yr,{days:e.days}),p.default.createElement("p",{className:"wa-panel-note"},"\u4E00\u683C\u662F\u4E00\u5929\uFF0C\u989C\u8272\u8D8A\u6DF1\uFF0C\u90A3\u5929\u7B54\u5F97\u8D8A\u591A\u3002\u300C\u957F\u671F\u8BB0\u4F4F\u300D\u6307\u8BB0\u5FC6\u7A33\u5B9A\u5EA6\u8D85\u8FC7 21 \u5929\u3002")),p.default.createElement("section",{className:"wa-panel"},p.default.createElement("h3",{className:"wa-eyebrow"},"\u672A\u6765 7 \u5929\u7684\u590D\u4E60\u91CF"),p.default.createElement("ol",{className:"wa-forecast"},r.forecast.map((w,_)=>p.default.createElement("li",{key:_},p.default.createElement("span",{style:{height:`${Math.max(6,Math.round(w/i*100))}%`}}),p.default.createElement("b",null,w),p.default.createElement("small",null,_===0?"\u4ECA\u5929":_===1?"\u660E\u5929":`+${_}`)))))),n.length>0?p.default.createElement("section",{className:"wa-panel"},p.default.createElement("div",{className:"wa-panel-head"},p.default.createElement("h3",{className:"wa-eyebrow"},"\u9519\u8BCD\u672C"),p.default.createElement("span",{className:"wa-muted"},"\u6700\u8FD1 ",n.length," \u4E2A")),p.default.createElement("ul",{className:"wa-mistakes"},n.map(w=>p.default.createElement("li",{key:w.id},p.default.createElement("button",{type:"button",onClick:()=>t(w.id),"aria-label":`\u67E5\u770B ${w.word}`},p.default.createElement(Z,{id:w.id,word:w.word,className:"wa-mistake-thumb"}),p.default.createElement("span",null,p.default.createElement("b",{lang:"en"},w.word),p.default.createElement("small",null,w.zh)),p.default.createElement("em",null,w.cefr)))))):null,p.default.createElement("section",{className:"wa-panel"},p.default.createElement("h3",{className:"wa-eyebrow"},"\u5B66\u4E60\u8BBE\u7F6E"),p.default.createElement("div",{className:"wa-field"},p.default.createElement("div",null,p.default.createElement("b",null,"\u6BCF\u65E5\u65B0\u8BCD"),p.default.createElement("small",null,"\u590D\u4E60\u4E0D\u8BBE\u4E0A\u9650\uFF0C\u7B97\u6CD5\u53EA\u5B89\u6392\u5FEB\u8981\u9057\u5FD8\u7684\u8BCD\u3002")),p.default.createElement(oa,{ariaLabel:"\u6BCF\u65E5\u65B0\u8BCD",value:h.dailyNew,options:[5,10,15,20,30].map(w=>({value:w,label:String(w)})),onChange:w=>L({dailyNew:w})})),p.default.createElement("div",{className:"wa-field"},p.default.createElement("div",null,p.default.createElement("b",null,"\u4ECE\u54EA\u4E2A\u96BE\u5EA6\u5F00\u59CB"),p.default.createElement("small",null,"\u5B66\u4E60\u4F1A\u8BDD\u4F1A\u8DF3\u8FC7\u66F4\u7B80\u5355\u7684\u7EA7\u522B\u3002")),p.default.createElement(oa,{ariaLabel:"\u8D77\u70B9\u96BE\u5EA6",value:h.startLevel,options:a.cefr.map((w,_)=>({value:_,label:w})),onChange:w=>L({startLevel:w})})),p.default.createElement("div",{className:"wa-field"},p.default.createElement("div",null,p.default.createElement("b",null,"\u76EE\u6807\u8BB0\u5FC6\u7387"),p.default.createElement("small",null,"\u8D8A\u9AD8\u590D\u4E60\u8D8A\u9891\u7E41\uFF0C90% \u662F\u5927\u591A\u6570\u4EBA\u7684\u751C\u70B9\u3002")),p.default.createElement(oa,{ariaLabel:"\u76EE\u6807\u8BB0\u5FC6\u7387",value:h.retention,options:[.85,.9,.95].map(w=>({value:w,label:`${Math.round(w*100)}%`})),onChange:w=>L({retention:w})})),p.default.createElement("div",{className:"wa-field"},p.default.createElement("div",null,p.default.createElement("b",null,"\u53D1\u97F3\u504F\u597D"),p.default.createElement("small",null,"\u8BCD\u6761\u8BE6\u60C5\u91CC\u4E24\u79CD\u53D1\u97F3\u90FD\u53EF\u4EE5\u64AD\u653E\u3002")),p.default.createElement(oa,{ariaLabel:"\u53D1\u97F3\u504F\u597D",value:h.accent,options:[{value:"uk",label:"\u82F1\u5F0F"},{value:"us",label:"\u7F8E\u5F0F"}],onChange:w=>L({accent:w})})),p.default.createElement(Dt,{label:"\u81EA\u52A8\u64AD\u653E\u53D1\u97F3",hint:"\u8BCD\u5361\u4E0E\u542C\u97F3\u9898\u81EA\u52A8\u64AD\u653E",on:h.autoplay,onChange:w=>L({autoplay:w})}),p.default.createElement(Dt,{label:"\u590D\u4E60\u65F6\u52A0\u5165\u62FC\u5199\u9898",hint:"\u5B66\u4E60\u4F1A\u8BDD\u4E2D\u52A0\u5165\u62FC\u5199\u9898",on:h.spell,onChange:w=>L({spell:w})})),p.default.createElement(Zr,{offline:s,refresh:N}),d?p.default.createElement("p",{className:"wa-error-text"},d):null,p.default.createElement("section",{className:"wa-panel"},p.default.createElement("h3",{className:"wa-eyebrow"},"\u6570\u636E\u4E0E\u5907\u4EFD"),p.default.createElement("p",{className:"wa-panel-hint"},"\u8FDB\u5EA6\u4FDD\u5B58\u5728\u672C\u673A\uFF08Host \u6587\u4EF6 + \u6D4F\u89C8\u5668\u955C\u50CF\uFF09\uFF0C\u65E0\u9700\u8D26\u53F7\u3002\u6362\u8BBE\u5907\u65F6\u5BFC\u51FA\u5907\u4EFD\u518D\u5BFC\u5165\u5373\u53EF\uFF0C\u683C\u5F0F\u4E0E\u8BCD\u5149\u7EBF\u4E0A\u7248\u517C\u5BB9\u3002"),p.default.createElement("div",{className:"wa-backup-actions"},p.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:U},p.default.createElement(E,{name:"book",size:15})," \u5BFC\u51FA\u5907\u4EFD"),p.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:()=>x.current?.click()},p.default.createElement(E,{name:"refresh",size:15})," \u5BFC\u5165\u5907\u4EFD"),p.default.createElement("input",{ref:x,type:"file",accept:"application/json,.json",hidden:!0,onChange:w=>{let _=w.target.files?.[0];w.target.value="",_&&A(_)}}),p.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost wa-danger",onClick:()=>{confirm("\u786E\u5B9A\u6E05\u7A7A\u5168\u90E8\u5B66\u4E60\u8BB0\u5F55\uFF1F\u6B64\u64CD\u4F5C\u65E0\u6CD5\u64A4\u9500\uFF0C\u5EFA\u8BAE\u5148\u5BFC\u51FA\u5907\u4EFD\u3002")&&(rt(),m("\u5B66\u4E60\u8BB0\u5F55\u5DF2\u6E05\u7A7A"))}},"\u6E05\u7A7A\u5B66\u4E60\u8BB0\u5F55")),c?p.default.createElement("p",{className:"wa-panel-note"},c):null,p.default.createElement("p",{className:"wa-panel-note"},"\u5DF2\u5B66 ",Object.keys(e.cards).length.toLocaleString("en-US")," \u8BCD \xB7 \u6536\u85CF ",e.bookmarks.length," \u8BCD",e.savedAt?` \xB7 \u4E0A\u6B21\u4FDD\u5B58 ${new Date(e.savedAt).toLocaleString()}`:"")),p.default.createElement("section",{className:"wa-panel"},p.default.createElement("h3",{className:"wa-eyebrow"},"\u5173\u4E8E"),p.default.createElement("p",{className:"wa-panel-hint"},"\u8BCD\u5149 \xB7 Word Atlas DSH \u63D2\u4EF6 v0.3.0 \xB7 \u8BCD\u5E93/\u63D2\u753B/\u5F55\u97F3\u6765\u81EA"," ",p.default.createElement("a",{href:"https://github.com/designfuchen/word-atlas",target:"_blank",rel:"noreferrer"},"designfuchen/word-atlas"),"\uFF08Word Atlas contributors\uFF0CCC BY 4.0\uFF09\uFF1B\u63D2\u4EF6\u4EE3\u7801 MIT\uFF1B\u590D\u4E60\u8C03\u5EA6 ts-fsrs\u3002"),p.default.createElement("p",{className:"wa-panel-path"},"\u63D2\u4EF6\u4ED3\u5E93\uFF1Agithub.com/MC0571/DSH-Plugin-Word-Atlas")))}var jt=require("react");function Ca({protocol:a,platform:e,left:t,top:r,fullscreen:n=!1}){return a==="dsh-app:"&&/Mac/.test(String(e||""))&&Number(t)<110&&Number(r)<45&&!n}function Tt(a,e){(0,jt.useEffect)(()=>{let t=a.current;if(!t)return;let r=()=>{let i=t.getBoundingClientRect(),s=Ca({protocol:window.location.protocol,platform:navigator.platform,left:i.left,top:i.top,fullscreen:!!document.fullscreenElement});t.dataset.titlebar=s?"true":"false"};r();let n=typeof ResizeObserver=="function"?new ResizeObserver(r):null;return n?.observe(t),window.addEventListener("resize",r),document.addEventListener("fullscreenchange",r),()=>{n?.disconnect(),window.removeEventListener("resize",r),document.removeEventListener("fullscreenchange",r),delete t.dataset.titlebar}},[a,e])}var Vr=v.Good;function Jr(){return y.default.createElement("svg",{viewBox:"0 0 64 64",width:"34",height:"34","aria-hidden":"true"},y.default.createElement("defs",null,y.default.createElement("linearGradient",{id:"wa-brand-gold",x1:"0",y1:"0",x2:"1",y2:"1"},y.default.createElement("stop",{offset:"0",stopColor:"#FFE9A8"}),y.default.createElement("stop",{offset:"0.55",stopColor:"#F5C052"}),y.default.createElement("stop",{offset:"1",stopColor:"#D98E2B"}))),y.default.createElement("rect",{width:"64",height:"64",rx:"15",fill:"var(--dsw-alias-bg-layer-2)"}),y.default.createElement("circle",{cx:"14",cy:"18",r:"1.4",fill:"var(--dsw-alias-label-secondary)",opacity:"0.6"}),y.default.createElement("circle",{cx:"50",cy:"16",r:"1.7",fill:"var(--dsw-alias-label-secondary)",opacity:"0.6"}),y.default.createElement("circle",{cx:"50",cy:"48",r:"1.3",fill:"var(--dsw-alias-label-secondary)",opacity:"0.5"}),y.default.createElement("circle",{cx:"14",cy:"46",r:"1.5",fill:"var(--dsw-alias-label-secondary)",opacity:"0.5"}),y.default.createElement("path",{d:"M32 15 L36.6 27.4 L49 32 L36.6 36.6 L32 49 L27.4 36.6 L15 32 L27.4 27.4 Z",fill:"url(#wa-brand-gold)"}),y.default.createElement("circle",{cx:"32",cy:"32",r:"3.4",fill:"#FFF6D8"}))}var Xr=[{id:"today",label:"\u4ECA\u65E5",icon:"star"},{id:"atlas",label:"\u56FE\u9274",icon:"book"},{id:"review",label:"\u590D\u4E60",icon:"refresh"},{id:"bookmarks",label:"\u751F\u8BCD\u672C",icon:"heart"},{id:"settings",label:"\u6211\u7684",icon:"user"}];function Da(){let[a,e]=(0,y.useState)(null),[t,r]=(0,y.useState)(""),[n,i]=(0,y.useState)("today"),[s,o]=(0,y.useState)(""),[d,u]=(0,y.useState)("all"),[c,m]=(0,y.useState)("all"),[x,h]=(0,y.useState)([]),N=Xa(),L=(0,y.useRef)(null);Tt(L,n),(0,y.useEffect)(()=>{Qa();let M=!0;return Ha().then(O=>{M&&e(O)}).catch(O=>{M&&r(O.message||"\u8BCD\u5E93\u52A0\u8F7D\u5931\u8D25")}),()=>{M=!1}},[]);let U=(0,y.useMemo)(()=>{if(!a)return[];let M=s.trim().toLowerCase();return a.words.filter(O=>d!=="all"&&O.cefr!==d||c!=="all"&&O.topic!==c?!1:M?O.word.toLowerCase().includes(M)||O.zh.toLowerCase().includes(M)||O.ipa.toLowerCase().includes(M):!0)},[a,s,d,c]),A=(0,y.useMemo)(()=>a?N.bookmarks.map(M=>a.byId.get(M)).filter(Boolean):[],[a,N.bookmarks]),w=(0,y.useMemo)(()=>{if(!a)return 0;let M=Date.now(),O=0;for(let da of a.words){let _e=N.cards[da.id];_e&&_e.due<=M&&(O+=1)}return O},[a,N.cards]),_=(0,y.useMemo)(()=>Object.keys(N.cards).length,[N.cards]),S=(0,y.useMemo)(()=>me(N.days),[N.days]),k=n==="bookmarks"?A:U,$=x.length>0?x[x.length-1]:null,H=$&&a?a.byId.get($):null,W=H?k.findIndex(M=>M.id===H.id):-1,Q=x.length>1&&a?a.byId.get(x[x.length-2]):null,z=M=>h([M]),I=M=>h(O=>O[O.length-1]===M?O:[...O,M]),q=()=>h(M=>M.slice(0,-1)),X=M=>J(O=>Ra(O,M)),Ie=M=>J(O=>O.cards[M]?O:{...O,cards:{...O.cards,[M]:be(void 0,Vr)},days:We(O.days,{newWords:1})}),Bt=()=>J(M=>({...M,settings:{...M.settings,accent:M.settings.accent==="uk"?"us":"uk"}})),ja=(M={})=>{if(!a)return;if(N.session&&!N.session.finished&&!M.ids&&!M.reviewOnly&&!M.extra){i("learn");return}let da=M.extra?{...N.settings,dailyNew:Ee(N)+M.extra}:N.settings,_e=Xe(a,N,da,M);_e.steps.length!==0&&(J(Ft=>({...Ft,session:_e})),i("learn"))},Ta=H&&a?y.default.createElement(aa,{atlas:a,word:H,progress:N,onClose:()=>h([]),onOpenWord:I,onBack:x.length>1?q:void 0,backLabel:Q?.word,onPrev:()=>{W>0&&h(M=>[...M.slice(0,-1),k[W-1].id])},onNext:()=>{W>=0&&W<k.length-1&&h(M=>[...M.slice(0,-1),k[W+1].id])},hasPrev:W>0,hasNext:W>=0&&W<k.length-1,onToggleBookmark:X,onMarkLearned:Ie}):null;return n==="learn"&&a?y.default.createElement("div",{className:"wa-root wa-root-focus",ref:L},y.default.createElement(ia,{atlas:a,progress:N,onExit:()=>i("today"),onRestart:ja,onOpenWord:I}),Ta):y.default.createElement("div",{className:"wa-root",ref:L},y.default.createElement("header",{className:"wa-header"},y.default.createElement("div",{className:"wa-brand"},y.default.createElement(Jr,null),y.default.createElement("div",{className:"wa-brand-text"},y.default.createElement("h1",null,"\u8BCD\u5149 ",y.default.createElement("span",null,"Word Atlas")),y.default.createElement("p",null,"7,298 \u96C5\u601D\u8BCD \xB7 \u4E00\u8BCD\u4E00\u753B \xB7 FSRS \u95F4\u9694\u590D\u4E60"))),y.default.createElement("div",{className:"wa-toolbar"},y.default.createElement("div",{className:"wa-search"},y.default.createElement(E,{name:"search",size:16}),y.default.createElement("input",{value:s,onChange:M=>{o(M.target.value),n!=="atlas"&&i("atlas")},placeholder:"\u641C\u7D22\u5355\u8BCD / \u4E2D\u6587\u91CA\u4E49","aria-label":"\u641C\u7D22\u5355\u8BCD\u6216\u91CA\u4E49",spellCheck:!1}),s?y.default.createElement("button",{type:"button",className:"wa-search-clear",onClick:()=>o(""),"aria-label":"\u6E05\u7A7A\u641C\u7D22"},y.default.createElement(E,{name:"close",size:14})):null),y.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost wa-accent-btn",onClick:Bt,title:"\u5207\u6362\u53D1\u97F3\u504F\u597D"},y.default.createElement(E,{name:"globe",size:15})," ",N.settings.accent==="uk"?"\u82F1\u97F3":"\u7F8E\u97F3"),y.default.createElement("button",{type:"button",className:"wa-icon-btn",onClick:()=>i("settings"),"aria-label":"\u8BBE\u7F6E\u4E0E\u5173\u4E8E"},y.default.createElement(E,{name:"info",size:18})))),y.default.createElement("nav",{className:"wa-tabs",role:"tablist","aria-label":"\u8BCD\u5149\u89C6\u56FE"},Xr.map(M=>y.default.createElement("button",{key:M.id,type:"button",role:"tab","aria-selected":n===M.id,className:n===M.id?"is-on":"",onClick:()=>i(M.id)},y.default.createElement(E,{name:M.icon,size:16})," ",M.label,M.id==="atlas"&&a?y.default.createElement("span",{className:"wa-tab-count"},a.count.toLocaleString("en-US")):null,M.id==="review"&&w>0?y.default.createElement("span",{className:"wa-tab-badge"},w>999?"999+":w):null,M.id==="bookmarks"&&A.length>0?y.default.createElement("span",{className:"wa-tab-count"},A.length):null)),y.default.createElement("div",{className:"wa-tabs-meta"},y.default.createElement("span",null,"\u5DF2\u5B66 ",_.toLocaleString("en-US")),y.default.createElement("i",null),y.default.createElement("span",null,"\u8FDE\u7EED ",S," \u5929"))),y.default.createElement("main",{className:"wa-main"},t?y.default.createElement(ue,{icon:"info",title:"\u8BCD\u5E93\u8FD8\u6CA1\u51C6\u5907\u597D"},y.default.createElement("p",null,t),y.default.createElement("p",{className:"wa-about-note"},"\u8BF7\u786E\u8BA4 word-atlas \u63D2\u4EF6\u5DF2\u542F\u7528\u3001Host \u8DEF\u7531 ",y.default.createElement("code",null,"/word-atlas/health")," \u53EF\u8BBF\u95EE\uFF1B\u5982\u679C\u63D2\u4EF6\u521A\u5B89\u88C5\uFF0C\u5237\u65B0\u9875\u9762\u518D\u8BD5\u3002")):a?n==="today"?y.default.createElement(na,{atlas:a,progress:N,onStart:ja,onOpenWord:I,onOpenLevel:M=>{u(M),i("atlas")},onOpenTopic:M=>{m(M),i("atlas")}}):n==="review"?y.default.createElement(ra,{atlas:a,progress:N,onExit:()=>i("today"),onOpenWord:I}):n==="settings"?y.default.createElement(la,{atlas:a,progress:N,onOpenWord:I}):n==="bookmarks"?A.length===0?y.default.createElement(ue,{icon:"heart",title:"\u751F\u8BCD\u672C\u8FD8\u662F\u7A7A\u7684"},y.default.createElement("p",null,"\u5728\u8BCD\u6761\u5361\u7247\u6216\u8BE6\u60C5\u91CC\u70B9 \u2665\uFF0C\u628A\u60F3\u53CD\u590D\u770B\u7684\u8BCD\u6536\u8FDB\u6765\u3002"),y.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary",onClick:()=>i("atlas")},"\u53BB\u56FE\u9274")):y.default.createElement(De,{atlas:a,words:A,progress:N,onOpen:z,onToggleBookmark:X}):y.default.createElement(y.default.Fragment,null,y.default.createElement("div",{className:"wa-filters"},y.default.createElement("div",{className:"wa-chips",role:"group","aria-label":"CEFR \u7EA7\u522B"},y.default.createElement("button",{type:"button",className:d==="all"?"is-on":"",onClick:()=>u("all")},"\u5168\u90E8\u7EA7\u522B"),a.cefr.map(M=>y.default.createElement("button",{type:"button",key:M,className:d===M?"is-on":"",onClick:()=>u(M)},M))),y.default.createElement("div",{className:"wa-topics",role:"group","aria-label":"\u8BDD\u9898"},y.default.createElement("button",{type:"button",className:c==="all"?"is-on":"",onClick:()=>m("all")},"\u5168\u90E8\u8BDD\u9898"),a.topics.map(M=>y.default.createElement("button",{type:"button",key:M.slug,className:c===M.slug?"is-on":"",onClick:()=>m(M.slug)},M.zh)))),y.default.createElement(De,{atlas:a,words:U,progress:N,onOpen:z,onToggleBookmark:X}),y.default.createElement("footer",{className:"wa-footer"},"\u8BCD\u5E93 \xB7 \u63D2\u753B \xB7 \u53D1\u97F3\u6765\u81EA"," ",y.default.createElement("a",{href:"https://github.com/designfuchen/word-atlas",target:"_blank",rel:"noreferrer"},"\u8BCD\u5149 \xB7 Word Atlas")," ","\xB7 CC BY 4.0")):y.default.createElement("div",{className:"wa-boot"},y.default.createElement(ie,{label:"\u6B63\u5728\u52A0\u8F7D\u8BCD\u5149\u8BCD\u5E93\u2026"}))),Ta)}var Qr="word-atlas-dsh",Ot="word-atlas";function Rr({size:a=18,active:e=!1}){return Ia.default.createElement("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:e?"currentColor":"none",stroke:"currentColor",strokeWidth:1.6,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"},Ia.default.createElement("path",{d:"M12 3.2l2.25 4.8 5.2.72-3.78 3.65.93 5.19L12 15.1l-4.6 2.46.93-5.19-3.78-3.65 5.2-.72z"}))}var en=["slots"],an={App:Da,DetailModal:aa,ReviewView:ra,WordGrid:De,Settings:la,LookupText:se,Today:na,Learn:ia,createLookupIndex:Ma,candidateBases:za,detectTitlebar:Ca,session:{buildSession:Xe,answerSession:Re,advanceSession:Le,gradeFor:Qe,sessionStats:ea,todayPlan:Ae,distractors:Je}};function tn(a){if(typeof document<"u"){let e=document.createElement("style");e.setAttribute("data-plugin",Qr),e.textContent=Ba,document.head.appendChild(e),a.effect(()=>()=>e.remove())}a.effect(()=>a.slots.inject("main",()=>a.slots.register({name:"main",key:Ot},Da))),a.effect(()=>a.slots.inject("sidebar.panellist",()=>a.slots.register({name:"sidebar.panellist",id:Ot,order:22,label:()=>"\u8BCD\u5149 \xB7 Word Atlas"},Rr)))}

    })(module, exports, require);
    return module.exports;
  },
});
