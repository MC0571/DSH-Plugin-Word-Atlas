/* 词光 · Word Atlas — generated client bundle (build from src/client). */
window.__ModuleLoader__.load({
  id: "word-atlas-dsh",
  factory: (require) => {
    const module = { exports: {} };
    const exports = module.exports;
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    (function (module, exports, require) {
var Tn=Object.create;var Ba=Object.defineProperty;var jn=Object.getOwnPropertyDescriptor;var Fn=Object.getOwnPropertyNames;var Pn=Object.getPrototypeOf,Bn=Object.prototype.hasOwnProperty;var On=(a,e)=>{for(var t in e)Ba(a,t,{get:e[t],enumerable:!0})},dr=(a,e,t,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of Fn(e))!Bn.call(a,n)&&n!==t&&Ba(a,n,{get:()=>e[n],enumerable:!(r=jn(e,n))||r.enumerable});return a};var he=(a,e,t)=>(t=a!=null?Tn(Pn(a)):{},dr(e||!a||!a.__esModule?Ba(t,"default",{value:a,enumerable:!0}):t,a)),Un=a=>dr(Ba({},"__esModule",{value:!0}),a);var bi={};On(bi,{__test:()=>gi,apply:()=>fi,inject:()=>mi});module.exports=Un(bi);var ir=he(require("react"),1);var pr=`/* \u8BCD\u5149 \xB7 Word Atlas \u2014 plugin page styles.
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
  margin-left: 0;
}

.wa-detail-head-actions {
  display: flex;
  align-items: center;
  gap: 4px;
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

/* ---------------------------------------------------------- practice */

.wa-practice {
  max-width: 1020px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.wa-practice-head h1 {
  margin: 2px 0 4px;
  font-size: 28px;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.wa-practice-head > p:last-child {
  margin: 0;
  color: var(--wa-muted);
  font-size: 13px;
}

.wa-practice-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 14px;
}

.wa-mode-cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8px;
}

.wa-mode-card {
  display: grid;
  gap: 5px;
  justify-items: start;
  padding: 14px;
  border: 1px solid var(--wa-line);
  border-radius: 12px;
  background: var(--wa-surface-2);
  color: var(--dsw-alias-label-primary);
  text-align: left;
  cursor: pointer;
  transition: border-color 0.15s ease, background 0.15s ease;
}

.wa-mode-card:hover {
  border-color: var(--wa-line-strong);
}

.wa-mode-card.is-on {
  border-color: var(--dsw-alias-brand-primary);
  background: color-mix(in srgb, var(--dsw-alias-brand-primary) 8%, var(--wa-surface));
}

.wa-mode-card svg {
  color: var(--wa-muted);
}

.wa-mode-card.is-on svg {
  color: var(--dsw-alias-brand-primary);
}

.wa-mode-card b {
  font-size: 15px;
}

.wa-mode-card small {
  color: var(--wa-muted);
  font-size: 11.5px;
  line-height: 1.4;
}

.wa-mt {
  margin-top: 16px;
}

.wa-seg-wide {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.wa-seg-wide button {
  flex: 1 1 auto;
}

.wa-practice-start {
  width: 100%;
  margin-top: 14px;
}

.wa-practice-side {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.wa-practice-side > img {
  width: 100%;
  max-width: 250px;
  align-self: center;
  border-radius: 14px;
}

.wa-practice-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}

.wa-practice-stats div {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 10px 12px;
  border-radius: 10px;
  background: var(--wa-surface-2);
}

.wa-practice-stats strong {
  font-size: 22px;
  letter-spacing: -0.01em;
}

.wa-practice-stats span {
  color: var(--wa-muted);
  font-size: 11px;
}

.wa-typing {
  max-width: 860px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
  min-height: 0;
}

.wa-typing-top {
  display: flex;
  align-items: center;
  gap: 14px;
}

.wa-typing-progress {
  flex: 1 1 auto;
  height: 6px;
  border-radius: var(--wa-round);
  background: color-mix(in srgb, var(--dsw-alias-label-primary) 16%, transparent);
  overflow: hidden;
}

.wa-typing-progress span {
  display: block;
  height: 100%;
  background: var(--dsw-alias-brand-primary);
  border-radius: inherit;
  transition: width 0.25s ease;
}

.wa-typing-meter {
  color: var(--wa-muted);
  font-size: 12px;
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
}

.wa-typing-meter b {
  color: var(--dsw-alias-label-primary);
  font-size: 16px;
}

.wa-typing-stage {
  position: relative;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
  min-height: 420px;
  padding: 28px 24px;
  border: 1px solid var(--wa-line);
  border-radius: 16px;
  background: var(--wa-surface);
  cursor: text;
  overflow-y: auto;
}

.wa-typing-cue {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.wa-typing-art {
  width: min(190px, 42vw);
  aspect-ratio: 1 / 1;
  border-radius: 14px;
  object-fit: cover;
}

.wa-typing-cue p {
  margin: 0;
  font-size: 15px;
  font-weight: 600;
}

.wa-typing-zh {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  margin: 0;
  color: var(--wa-muted);
  font-size: 14px;
}

.wa-typing-text {
  margin: 0;
  max-width: 100%;
  color: color-mix(in srgb, var(--dsw-alias-label-primary) 38%, transparent);
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: clamp(20px, 3vw, 28px);
  line-height: 1.7;
  text-align: left;
  overflow-wrap: anywhere;
}

.wa-typing-text.is-word {
  font-family: inherit;
  font-size: clamp(38px, 7vw, 58px);
  font-weight: 700;
  letter-spacing: 0.02em;
  line-height: 1.3;
}

.wa-typing-text span {
  border-radius: 3px;
  transition: color 0.1s ease;
}

.wa-typing-text span.is-ok {
  color: var(--dsw-alias-label-primary);
}

.wa-typing-text span.is-bad {
  color: var(--dsw-alias-state-error-primary);
  background: color-mix(in srgb, var(--dsw-alias-state-error-primary) 14%, transparent);
}

.wa-typing-text span.is-caret {
  box-shadow: -2px 0 0 var(--dsw-alias-brand-primary);
  animation: wa-caret 1s steps(1) infinite;
}

@keyframes wa-caret {
  50% {
    box-shadow: -2px 0 0 transparent;
  }
}

.wa-typing-input {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
}

.wa-typing-text span.is-space {
  display: inline-block;
  width: 0.45em;
  border-bottom: 1px dashed color-mix(in srgb, var(--dsw-alias-label-primary) 22%, transparent);
  color: transparent;
}

.wa-typing-help {
  margin: 0;
}

.wa-typing-done {
  display: flex;
  justify-content: center;
  padding-top: 4vh;
}

.wa-typing-done .wa-panel {
  width: min(520px, 100%);
  text-align: center;
}

.wa-typing-done h1 {
  margin: 10px 0 0;
  font-size: 40px;
}

.wa-typing-done h1 small {
  font-size: 13px;
  color: var(--wa-muted);
}

/* ------------------------------------------------------------ galaxy */

.wa-galaxy-page {
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 100%;
  min-height: 0;
}

.wa-galaxy-head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 14px;
  flex-wrap: wrap;
}

.wa-galaxy-head h1 {
  margin: 2px 0 0;
  font-size: 24px;
  letter-spacing: -0.02em;
}

.wa-galaxy-legend {
  display: flex;
  gap: 14px;
  color: var(--wa-muted);
  font-size: 11.5px;
}

.wa-galaxy-legend span {
  display: inline-flex;
  align-items: center;
  gap: 5px;
}

.wa-galaxy-legend i {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #8f9bb3;
}

.wa-galaxy-legend i.is-learning {
  background: #ffd889;
}

.wa-galaxy-legend i.is-mastered {
  background: #ffb84d;
  box-shadow: 0 0 6px #ffb84d;
}

.wa-galaxy {
  position: relative;
  flex: 1 1 auto;
  min-height: 460px;
  border: 1px solid var(--wa-line);
  border-radius: 18px;
  overflow: hidden;
  background: #070a16;
}

.wa-galaxy canvas {
  display: block;
  width: 100%;
  height: 100%;
  cursor: grab;
  touch-action: none;
}

.wa-galaxy canvas:active {
  cursor: grabbing;
}

.wa-galaxy-labels span {
  position: absolute;
  top: 0;
  left: 0;
  color: var(--c);
  font-size: 11px;
  letter-spacing: 0.05em;
  opacity: 0.8;
  pointer-events: none;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.8);
  white-space: nowrap;
}

.wa-galaxy-tip {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  max-width: 260px;
  padding: 6px 10px 6px 6px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 10px;
  background: rgba(12, 16, 28, 0.9);
  color: #f4f6fb;
  cursor: pointer;
  text-align: left;
}

.wa-galaxy-tip-img {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  object-fit: cover;
  flex: 0 0 auto;
}

.wa-galaxy-tip span {
  display: flex;
  flex-direction: column;
  gap: 1px;
  min-width: 0;
}

.wa-galaxy-tip b {
  font-size: 13px;
}

.wa-galaxy-tip small {
  color: rgba(255, 255, 255, 0.65);
  font-size: 11px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.wa-galaxy-hud {
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 5px 10px;
  border-radius: var(--wa-round);
  background: rgba(8, 12, 22, 0.55);
  color: rgba(244, 246, 251, 0.82);
  font-size: 12px;
  backdrop-filter: blur(6px);
}

.wa-galaxy-hud b {
  color: #ffd889;
  font-size: 15px;
}

.wa-galaxy-controls {
  position: absolute;
  right: 12px;
  bottom: 12px;
  display: flex;
  gap: 2px;
  padding: 3px;
  border-radius: var(--wa-round);
  background: rgba(8, 12, 22, 0.6);
  backdrop-filter: blur(6px);
}

.wa-galaxy-controls .wa-icon-btn {
  color: rgba(244, 246, 251, 0.8);
}

.wa-galaxy-controls .wa-icon-btn:hover {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
}

.wa-galaxy-hint {
  position: absolute;
  left: 50%;
  bottom: 14px;
  transform: translateX(-50%);
  margin: 0;
  color: rgba(244, 246, 251, 0.55);
  font-size: 11px;
  pointer-events: none;
  white-space: nowrap;
}

@media (max-width: 900px) {
  .wa-practice-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .wa-galaxy {
    min-height: 380px;
  }

  .wa-galaxy-head h1 {
    font-size: 20px;
  }

  .wa-galaxy-legend {
    gap: 10px;
  }
}

@media (max-width: 520px) {
  .wa-mode-cards {
    grid-template-columns: minmax(0, 1fr);
  }

  .wa-typing-text.is-word {
    font-size: 34px;
  }
}

/* ---------------------------------------------------------- share card */

/* ---------------------------------------------------- command palette */

.wa-palette-overlay {
  position: fixed;
  inset: 0;
  z-index: 1300;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 12vh 20px 20px;
  background: rgba(6, 10, 18, 0.55);
  backdrop-filter: blur(3px);
}

.wa-palette {
  width: min(560px, 100%);
  overflow: hidden;
  border-radius: 16px;
  border: 1px solid var(--wa-line-strong);
  background: var(--dsw-alias-bg-overlay);
  box-shadow: 0 28px 70px rgba(0, 0, 0, 0.35);
}

.wa-palette-search {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 14px;
  border-bottom: 1px solid var(--wa-line);
  color: var(--wa-muted);
}

.wa-palette-search input {
  flex: 1 1 auto;
  border: 0;
  outline: 0;
  background: transparent;
  color: var(--dsw-alias-label-primary);
  font-size: 14px;
}

.wa-palette-search kbd,
.wa-palette-tag {
  padding: 1px 6px;
  border-radius: 5px;
  background: var(--wa-surface-2);
  color: var(--wa-muted);
  font-size: 10.5px;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
}

.wa-palette-list {
  max-height: 46vh;
  overflow-y: auto;
  margin: 0;
  padding: 6px;
  list-style: none;
}

.wa-palette-label {
  padding: 6px 10px 4px;
  color: var(--wa-muted);
  font-size: 10.5px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.wa-palette-list button {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 9px 10px;
  border: 0;
  border-radius: 9px;
  background: transparent;
  color: inherit;
  text-align: left;
  cursor: pointer;
}

.wa-palette-list button.is-active,
.wa-palette-list button:hover {
  background: color-mix(in srgb, var(--dsw-alias-brand-primary) 10%, transparent);
}

.wa-palette-word {
  font-size: 13.5px;
  font-weight: 600;
}

.wa-palette-zh {
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--wa-muted);
  font-size: 12px;
}

.wa-palette-list button > span:not(.wa-palette-tag) {
  font-size: 13px;
}

.wa-palette-footer {
  margin: 0;
  padding: 8px 14px 10px;
  border-top: 1px solid var(--wa-line);
  color: var(--wa-muted);
  font-size: 10.5px;
}

/* ------------------------------------------------------- today reading */

.wa-today-reading {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 18px 22px;
  border: 1px solid var(--wa-line);
  border-radius: 16px;
  background:
    radial-gradient(120% 150% at 0% 0%, color-mix(in srgb, var(--dsw-alias-brand-primary) 10%, transparent), transparent 60%),
    var(--wa-surface);
}

.wa-today-reading-mark {
  flex: 0 0 auto;
  color: color-mix(in srgb, var(--dsw-alias-brand-primary) 32%, transparent);
  font-family: Georgia, 'Songti SC', serif;
  font-size: 64px;
  line-height: 0.8;
}

.wa-today-reading-copy {
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
}

.wa-today-reading-copy h3 {
  margin: 2px 0 0;
  font-size: 20px;
  letter-spacing: -0.01em;
}

.wa-today-reading-en {
  margin: 0;
  color: var(--wa-muted);
  font-size: 12.5px;
}

.wa-today-reading-meta {
  margin: 4px 0 10px;
  color: var(--wa-muted);
  font-size: 12px;
}

/* ---------------------------------------------------------- reading page */

.wa-read-page {
  max-width: 1020px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.wa-read-head h1 {
  margin: 2px 0 4px;
  font-size: 28px;
  letter-spacing: -0.02em;
}

.wa-read-head > p:last-child {
  margin: 0;
  color: var(--wa-muted);
  font-size: 13px;
}

.wa-read-tabs {
  display: flex;
  gap: 4px;
  padding: 3px;
  border-radius: var(--wa-round);
  background: var(--wa-surface-2);
  align-self: flex-start;
}

.wa-read-tabs button {
  padding: 7px 18px;
  border: 0;
  border-radius: var(--wa-round);
  background: transparent;
  color: var(--wa-muted);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}

.wa-read-tabs button.is-on {
  background: var(--dsw-alias-bg-overlay);
  color: var(--dsw-alias-label-primary);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
}

.wa-read-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.wa-read-filters button {
  padding: 4px 12px;
  border: 1px solid var(--wa-line);
  border-radius: var(--wa-round);
  background: var(--wa-surface);
  color: var(--wa-muted);
  font-size: 11.5px;
  cursor: pointer;
}

.wa-read-filters button.is-on {
  border-color: var(--dsw-alias-brand-primary);
  color: var(--dsw-alias-label-primary);
  font-weight: 600;
}

.wa-short-library {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.wa-short-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 10px;
}

.wa-short-card {
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 14px;
  border: 1px solid var(--wa-line);
  border-radius: 14px;
  background: var(--wa-surface);
  color: inherit;
  text-align: left;
  cursor: pointer;
  transition: border-color 0.15s ease, transform 0.15s ease;
}

.wa-short-card:hover {
  border-color: var(--wa-line-strong);
  transform: translateY(-1px);
}

.wa-short-card.is-read {
  opacity: 0.78;
}

.wa-short-card-top {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 4px;
}

.wa-short-level {
  padding: 1px 6px;
  border-radius: 5px;
  background: color-mix(in srgb, var(--dsw-alias-brand-primary) 12%, transparent);
  color: var(--dsw-alias-label-primary);
  font-size: 10px;
  font-weight: 700;
}

.wa-short-topic {
  color: var(--wa-muted);
  font-size: 10.5px;
}

.wa-short-done {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  margin-left: auto;
  color: var(--dsw-alias-state-success-primary);
  font-size: 10.5px;
}

.wa-short-zh {
  font-size: 15px;
  letter-spacing: -0.01em;
}

.wa-short-en {
  color: var(--wa-muted);
  font-size: 11.5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.wa-short-words {
  margin-top: 6px;
  color: var(--wa-muted);
  font-size: 10.5px;
}

.wa-read-more {
  align-self: center;
  margin-top: 4px;
}

/* ------------------------------------------------------------- reader */

.wa-reader {
  max-width: 780px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.wa-reader-bar {
  position: sticky;
  top: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 0 10px;
  border-bottom: 1px solid var(--wa-line);
  background: var(--dsw-alias-bg-base);
}

.wa-reader-meta {
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--wa-muted);
  font-size: 11.5px;
}

.wa-reader-body {
  padding: 4px 2px 20px;
}

.wa-reader-body h1 {
  margin: 0;
  font-family: Georgia, 'Songti SC', serif;
  font-size: 32px;
  letter-spacing: -0.02em;
}

.wa-reader-subtitle {
  margin: 4px 0 22px;
  color: var(--wa-muted);
  font-family: Georgia, serif;
  font-size: 15px;
}

.wa-reader-para {
  margin: 0 0 22px;
}

.wa-reader-para > p:first-child {
  margin: 0;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 17.5px;
  line-height: 1.9;
  letter-spacing: 0.002em;
}

.wa-reader-zh {
  margin: 10px 0 0;
  padding-left: 12px;
  border-left: 2px solid var(--wa-line);
  color: var(--wa-muted);
  font-size: 13px;
  line-height: 1.85;
}

.wa-read-word {
  display: inline;
  padding: 0 1px;
  border: 0;
  border-bottom: 1px dashed color-mix(in srgb, var(--dsw-alias-brand-primary) 48%, transparent);
  background: transparent;
  color: var(--dsw-alias-brand-primary);
  font: inherit;
  cursor: pointer;
}

.wa-read-word:hover {
  background: color-mix(in srgb, var(--dsw-alias-brand-primary) 9%, transparent);
  border-bottom-style: solid;
}

.wa-read-audio {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  margin-top: 4px;
  padding: 1px 6px;
  border: 0;
  border-radius: 5px;
  background: var(--wa-surface-2);
  color: var(--wa-muted);
  font-size: 10.5px;
  cursor: pointer;
}

.wa-reader-quiz {
  margin-top: 28px;
  padding-top: 20px;
  border-top: 1px solid var(--wa-line);
}

.wa-reader-quiz h2 {
  margin: 0 0 12px;
  font-size: 17px;
}

.wa-reader-question {
  margin-bottom: 16px;
}

.wa-reader-question > p {
  margin: 0 0 7px;
  font-family: Georgia, serif;
  font-size: 14.5px;
}

.wa-reader-q-options {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.wa-reader-q-options button {
  padding: 5px 12px;
  border: 1px solid var(--wa-line);
  border-radius: var(--wa-radius);
  background: var(--wa-surface);
  color: var(--wa-muted);
  font-size: 11.5px;
  cursor: pointer;
}

.wa-reader-q-options button.is-chosen {
  border-color: var(--dsw-alias-brand-primary);
  color: var(--dsw-alias-label-primary);
  font-weight: 600;
}

.wa-reader-q-options button.is-answer {
  border-color: color-mix(in srgb, var(--dsw-alias-state-success-primary) 60%, transparent);
  background: color-mix(in srgb, var(--dsw-alias-state-success-primary) 14%, transparent);
  color: var(--dsw-alias-label-primary);
}

.wa-reader-why {
  margin: 6px 0 0;
  color: var(--wa-muted);
  font-size: 11.5px;
}

.wa-reader-why.is-ok {
  color: var(--dsw-alias-state-success-primary);
}

.wa-reader-why.is-bad {
  color: var(--dsw-alias-state-error-primary);
}

.wa-reader-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}

/* -------------------------------------------------------------- books */

.wa-books {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.wa-book {
  padding: 18px;
  border: 1px solid var(--wa-line);
  border-radius: 16px;
  background: var(--wa-surface);
}

.wa-book-top {
  display: flex;
  gap: 18px;
}

.wa-book-cover {
  flex: 0 0 auto;
  width: 132px;
  height: 198px;
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.18);
}

.wa-book-copy {
  min-width: 0;
}

.wa-book-copy h2 {
  margin: 2px 0 0;
  font-size: 24px;
  letter-spacing: -0.02em;
}

.wa-book-en {
  margin: 1px 0 0;
  color: var(--wa-muted);
  font-family: Georgia, serif;
  font-size: 13px;
}

.wa-book-author {
  margin: 4px 0 8px;
  color: var(--wa-muted);
  font-size: 11.5px;
}

.wa-book-blurb {
  margin: 0 0 8px;
  color: var(--wa-muted);
  font-size: 12.5px;
  line-height: 1.7;
}

.wa-book-first {
  margin: 0;
  color: color-mix(in srgb, var(--dsw-alias-label-primary) 72%, transparent);
  font-family: Georgia, serif;
  font-style: italic;
  font-size: 12.5px;
}

.wa-book-chapters {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 6px;
  margin-top: 16px;
  padding-top: 14px;
  border-top: 1px solid var(--wa-line);
}

.wa-chapter {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 8px 10px;
  border: 1px solid var(--wa-line);
  border-radius: 9px;
  background: var(--wa-surface-2);
  color: inherit;
  text-align: left;
  cursor: pointer;
}

.wa-chapter:disabled {
  opacity: 0.5;
  cursor: default;
}

.wa-chapter.is-read {
  border-color: color-mix(in srgb, var(--dsw-alias-state-success-primary) 35%, transparent);
}

.wa-chapter span {
  font-size: 12px;
  font-weight: 600;
}

.wa-chapter small {
  color: var(--wa-muted);
  font-size: 10.5px;
}

@media (max-width: 860px) {
  .wa-today-reading {
    align-items: flex-start;
  }

  .wa-today-reading-mark {
    font-size: 44px;
  }

  .wa-reader-body h1 {
    font-size: 26px;
  }

  .wa-reader-para > p:first-child {
    font-size: 16px;
  }

  .wa-book-top {
    flex-direction: column;
  }

  .wa-book-cover {
    width: 110px;
    height: 165px;
  }

  .wa-short-grid {
    grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  }
}

@media (max-width: 520px) {
  .wa-today-reading-mark {
    display: none;
  }

  .wa-reader-bar {
    flex-wrap: wrap;
  }

  .wa-reader-meta {
    order: 3;
    flex-basis: 100%;
  }
}

/* ===================================================== book reader v0.5.1 */

.wa-root.is-reader-focus .wa-header,
.wa-root.is-reader-focus .wa-tabs {
  display: none;
}

.wa-root.is-reader-focus .wa-main {
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.wa-root.is-reader-focus .wa-main > * {
  flex: 1 1 auto;
  min-height: 0;
}

.wa-read-page.is-reader-focus {
  max-width: none;
  margin: 0;
  gap: 0;
  height: 100%;
  min-height: 0;
  display: flex;
  flex-direction: column;
}

.wa-read-page.is-reader-focus .wa-read-head,
.wa-read-page.is-reader-focus .wa-read-tabs {
  display: none;
}

.wa-read-page.is-reader-focus .wa-books {
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
}

.wa-book-reader {
  --wa-book-gold: #b8892f;
  --wa-book-glow: rgba(198, 150, 55, 0.16);
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
  position: relative;
  background: var(--dsw-alias-bg-base);
  color: var(--dsw-alias-label-primary);
}

.wa-book-bar {
  flex: 0 0 auto;
  display: grid;
  grid-template-columns: 100px minmax(0, 1fr) auto;
  align-items: center;
  gap: 8px;
  min-height: 56px;
  padding: 0 18px;
  border-bottom: 1px solid var(--wa-line);
  background: color-mix(in srgb, var(--dsw-alias-bg-base) 94%, transparent);
  backdrop-filter: blur(10px);
}

.wa-book-back {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  justify-self: start;
  padding: 6px 8px;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: var(--wa-muted);
  font-size: 12.5px;
  cursor: pointer;
}

.wa-book-back:hover {
  background: var(--wa-surface-2);
  color: var(--dsw-alias-label-primary);
}

.wa-book-bar-title {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 10px;
  min-width: 0;
  font-size: 12.5px;
  color: var(--wa-muted);
}

.wa-book-bar-title span,
.wa-book-bar-title strong {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.wa-book-bar-title strong {
  color: var(--dsw-alias-label-primary);
  font-weight: 600;
}

.wa-book-tools {
  justify-self: end;
}

.wa-book-scroll {
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  scroll-behavior: smooth;
  overscroll-behavior: contain;
}

.wa-book-page {
  max-width: 940px;
  margin: 0 auto;
  padding: 22px 26px 70px;
}

.wa-book-chapter-head {
  max-width: 760px;
  margin: 0 auto 36px;
  text-align: center;
}

.wa-book-plate {
  position: relative;
  aspect-ratio: 16 / 9;
  max-width: 820px;
  max-height: min(52vh, 520px);
  margin: 0 auto 26px;
  border-radius: 22px;
  overflow: hidden;
  background: var(--wa-surface-2);
  box-shadow: 0 34px 70px -44px rgba(10, 14, 30, 0.55);
}

.wa-book-plate img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transform: scale(1.03);
  transition: opacity 0.5s ease, transform 0.8s ease;
}

.wa-book-plate.is-loaded img {
  opacity: 1;
  transform: scale(1);
}

.wa-book-plate-empty {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 30% 40%, color-mix(in srgb, var(--wa-book-gold) 18%, transparent), transparent 42%),
    radial-gradient(circle at 58% 54%, var(--wa-surface-2), var(--dsw-alias-bg-base));
}

.wa-book-plate-empty::before {
  content: '';
  position: absolute;
  left: 24%;
  top: 28%;
  width: 38%;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 1px solid color-mix(in srgb, var(--wa-book-gold) 24%, transparent);
}

.wa-book-plate-empty::after {
  content: '';
  position: absolute;
  left: 58%;
  top: 18%;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--wa-book-gold);
  box-shadow: 0 0 18px 4px var(--wa-book-glow);
}

.wa-book-kicker {
  margin: 0 0 10px;
  color: var(--wa-muted);
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.wa-book-roman {
  margin: 0 0 8px;
  color: var(--wa-book-gold);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.3em;
}

.wa-book-chapter-head h1 {
  margin: 0;
  font-family: Georgia, 'Songti SC', serif;
  font-size: clamp(27px, 3.4vw, 36px);
  font-weight: 600;
  letter-spacing: -0.01em;
}

.wa-book-caption {
  margin: 9px 0 16px;
  color: var(--wa-muted);
  font-size: 12px;
}

.wa-book-listen-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 14px;
  border: 1px solid var(--wa-line);
  border-radius: var(--wa-round);
  background: var(--wa-surface);
  color: var(--wa-muted);
  font-size: 11.5px;
  cursor: pointer;
}

.wa-book-listen-link:hover {
  color: var(--dsw-alias-label-primary);
  border-color: var(--wa-line-strong);
}

.wa-book-no-audio {
  margin: 4px 0 0;
  color: var(--wa-muted);
  font-size: 11.5px;
}

.wa-book-text {
  max-width: 700px;
  margin: 0 auto;
  font-family: Georgia, 'Times New Roman', 'Songti SC', serif;
  font-size: var(--wa-book-size, 19px);
}

.wa-book-para {
  margin: 0 0 1.15em;
}

.wa-book-para-en {
  margin: 0;
  line-height: var(--wa-book-leading, 1.68);
  text-wrap: pretty;
}

.wa-book-para-zh {
  margin: 0.6em 0 0;
  color: var(--wa-muted);
  font-family: system-ui, 'PingFang SC', sans-serif;
  font-size: max(13px, calc(var(--wa-book-size, 19px) - 3px));
  line-height: 1.82;
  text-wrap: pretty;
}

.wa-book-reader[data-mode='zh'] .wa-book-para-zh {
  margin: 0;
  color: var(--dsw-alias-label-primary);
  font-size: var(--wa-book-size, 19px);
  line-height: var(--wa-book-leading, 1.68);
}

.wa-book-reader[data-mode='zh'] .wa-book-text {
  font-family: system-ui, 'PingFang SC', sans-serif;
}

.wa-book-text .wa-book-para:first-child .wa-book-para-en::first-letter {
  float: left;
  margin: 0.04em 0.1em 0 0;
  color: var(--wa-book-gold);
  font-family: Georgia, serif;
  font-size: 3.25em;
  line-height: 0.82;
}

.wa-book-kind-epigraph .wa-book-para-en,
.wa-book-kind-epigraph .wa-book-para-zh,
.wa-book-kind-verse .wa-book-para-en,
.wa-book-kind-verse .wa-book-para-zh,
.wa-book-kind-letter .wa-book-para-en,
.wa-book-kind-letter .wa-book-para-zh {
  font-style: italic;
}

.wa-book-sent {
  border-radius: 3px;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
  transition: background-color 0.22s ease, box-shadow 0.22s ease;
}

.wa-book-sent.is-playable {
  cursor: pointer;
}

.wa-book-sent.is-playable:hover {
  background: var(--wa-book-glow);
}

.wa-book-sent.is-speaking {
  background: var(--wa-book-glow);
  box-shadow: 0 0 0 3px var(--wa-book-glow);
}

.wa-book-word {
  padding: 0;
  border: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  letter-spacing: inherit;
  cursor: pointer;
  border-radius: 2px;
}

.wa-book-word.is-marked {
  text-decoration: underline dotted color-mix(in srgb, var(--dsw-alias-label-primary) 38%, transparent);
  text-underline-offset: 4px;
}

.wa-book-word:hover {
  background: var(--wa-book-glow);
}

.wa-book-para-end {
  max-width: 700px;
  margin: 38px auto 0;
  padding-top: 26px;
  border-top: 1px solid var(--wa-line);
  text-align: center;
}

.wa-book-para-end-mark {
  display: block;
  width: 7px;
  height: 7px;
  margin: 0 auto 12px;
  border-radius: 50%;
  background: var(--wa-line-strong);
}

.wa-book-para-end-mark.is-lit {
  background: var(--wa-book-gold);
  box-shadow: 0 0 0 8px var(--wa-book-glow), 0 0 28px 6px var(--wa-book-glow);
}

.wa-book-para-end-caption {
  margin: 0 0 34px;
  color: var(--wa-muted);
  font-size: 12.5px;
}

.wa-book-para-end-words {
  text-align: left;
}

.wa-book-para-end-words h2 {
  margin: 0 0 12px;
  font-size: 16px;
}

.wa-book-para-end-words > div {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 22px;
}

.wa-book-para-end-words button {
  display: inline-flex;
  align-items: baseline;
  gap: 8px;
  padding: 6px 0;
  border: 0;
  border-bottom: 1px solid var(--wa-line);
  background: transparent;
  color: inherit;
  cursor: pointer;
}

.wa-book-para-end-words button span {
  font-family: Georgia, serif;
  font-size: 18px;
}

.wa-book-para-end-words button small {
  color: var(--wa-muted);
  font-size: 11px;
}

.wa-book-para-end-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 26px;
}

.wa-book-notice {
  margin: 14px 0 0;
  color: var(--wa-muted);
  font-size: 11.5px;
}

.wa-book-player {
  flex: 0 0 auto;
  position: relative;
  border-top: 1px solid var(--wa-line);
  background: color-mix(in srgb, var(--dsw-alias-bg-base) 96%, transparent);
  backdrop-filter: blur(12px);
  padding: 7px 18px calc(8px + env(safe-area-inset-bottom, 0px));
}

.wa-book-progress {
  height: 2px;
  margin: -1px 0 0;
  background: var(--wa-surface-2);
  overflow: hidden;
}

.wa-book-progress i {
  display: block;
  height: 100%;
  background: var(--wa-book-gold);
  transform-origin: left;
  transition: transform 0.22s ease;
}

.wa-book-player-inner {
  display: flex;
  align-items: center;
  gap: 6px;
  max-width: 820px;
  min-height: 56px;
  margin: 0 auto;
}

.wa-book-play {
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  flex: 0 0 auto;
  border: 0;
  border-radius: 50%;
  background: var(--dsw-alias-label-primary);
  color: var(--dsw-alias-bg-base);
  cursor: pointer;
}

.wa-book-play:hover {
  opacity: 0.88;
}

.wa-book-player-count {
  display: flex;
  flex-direction: column;
  gap: 1px;
  min-width: 86px;
  margin-left: auto;
  font-size: 12px;
  font-variant-numeric: tabular-nums;
}

.wa-book-player-count small {
  color: var(--wa-muted);
  font-size: 10.5px;
}

.wa-book-follow,
.wa-book-speed,
.wa-book-listen-btn {
  flex: 0 0 auto;
  padding: 5px 10px;
  border: 1px solid var(--wa-line);
  border-radius: var(--wa-round);
  background: var(--wa-surface);
  color: var(--wa-muted);
  font-size: 11px;
  cursor: pointer;
}

.wa-book-follow.is-on {
  border-color: color-mix(in srgb, var(--wa-book-gold) 55%, transparent);
  color: var(--dsw-alias-label-primary);
}

.wa-book-listen-btn {
  border-color: var(--dsw-alias-brand-primary);
  color: var(--dsw-alias-label-primary);
}

.wa-book-word-pop,
.wa-book-settings {
  position: fixed;
  z-index: 82;
  width: min(320px, calc(100vw - 24px));
  padding: 16px;
  border: 1px solid var(--wa-line-strong);
  border-radius: 14px;
  background: var(--dsw-alias-bg-overlay);
  color: var(--dsw-alias-label-primary);
  box-shadow: 0 22px 60px rgba(0, 0, 0, 0.28);
}

.wa-book-settings {
  top: 66px;
  right: 18px;
  width: min(330px, calc(100vw - 36px));
}

.wa-book-settings h2 {
  margin: 0 0 6px;
  font-size: 15px;
}

.wa-book-setting {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 13px;
  color: var(--wa-muted);
  font-size: 11.5px;
}

.wa-book-seg {
  display: flex;
  gap: 3px;
  padding: 3px;
  border-radius: 9px;
  background: var(--wa-surface-2);
}

.wa-book-seg button {
  flex: 1 1 auto;
  min-height: 32px;
  padding: 4px 6px;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: var(--wa-muted);
  font-size: 11.5px;
  cursor: pointer;
}

.wa-book-seg button[aria-pressed='true'] {
  background: var(--dsw-alias-bg-base);
  color: var(--dsw-alias-label-primary);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
}

.wa-book-seg button:disabled {
  opacity: 0.4;
  cursor: default;
}

.wa-book-settings-hint {
  margin: 14px 0 0;
  color: var(--wa-muted);
  font-size: 10.5px;
  line-height: 1.7;
}

.wa-book-backdrop,
.wa-book-pop-backdrop {
  position: fixed;
  inset: 0;
  z-index: 81;
  background: transparent;
}

.wa-book-pop-backdrop {
  z-index: 81;
}

.wa-book-pop-close {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 26px;
  height: 26px;
  display: grid;
  place-items: center;
  border: 0;
  border-radius: 50%;
  background: transparent;
  color: var(--wa-muted);
  cursor: pointer;
}

.wa-book-word-pop h2 {
  margin: 0 42px 6px 0;
  font-family: Georgia, serif;
  font-size: 30px;
  font-weight: 500;
  overflow-wrap: anywhere;
}

.wa-book-pop-pron {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  color: var(--wa-muted);
  font-family: ui-monospace, Menlo, monospace;
  font-size: 12px;
}

.wa-book-pop-pron button {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  padding: 2px 7px;
  border: 1px solid var(--wa-line);
  border-radius: var(--wa-round);
  background: var(--wa-surface);
  color: var(--wa-muted);
  font-size: 10.5px;
  cursor: pointer;
}

.wa-book-pop-senses {
  margin-top: 12px;
  font-size: 13px;
  line-height: 1.75;
}

.wa-book-pop-senses p {
  margin: 6px 0;
}

.wa-book-pop-actions {
  margin-top: 14px;
}

.wa-book-listen {
  position: fixed;
  inset: 0;
  z-index: 95;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #080b14;
  color: #f5efe2;
}

.wa-book-listen-bg {
  position: absolute;
  inset: -4%;
  background-size: cover;
  background-position: center;
  filter: blur(16px) saturate(0.8) brightness(0.6);
  transform: scale(1.08);
  opacity: 0.5;
}

.wa-book-listen-veil {
  position: absolute;
  inset: 0;
  background: radial-gradient(120% 90% at 50% 20%, rgba(8, 11, 20, 0.45), rgba(8, 11, 20, 0.92));
}

.wa-book-listen-top {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 18px 24px;
  color: rgba(245, 239, 226, 0.6);
  font-size: 12px;
}

.wa-book-listen-top p {
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.wa-book-listen-top .wa-icon-btn {
  color: rgba(245, 239, 226, 0.8);
}

.wa-book-listen-body {
  position: relative;
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 26px;
  padding: 0 8vw;
  text-align: center;
}

.wa-book-listen-text {
  margin: 0;
  max-width: 980px;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(27px, 4.1vw, 46px);
  line-height: 1.48;
  text-wrap: balance;
}

.wa-book-listen-zh {
  margin: 0;
  max-width: 760px;
  color: rgba(245, 239, 226, 0.6);
  font-size: clamp(14px, 1.6vw, 18px);
  line-height: 1.7;
}

.wa-book-listen-controls {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  padding: 16px 20px 46px;
}

.wa-book-listen-controls .wa-icon-btn {
  color: rgba(245, 239, 226, 0.72);
}

.wa-book-listen-play {
  display: grid;
  place-items: center;
  width: 58px;
  height: 58px;
  border: 1px solid rgba(255, 255, 255, 0.32);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.14);
  color: #fff;
  cursor: pointer;
}

.wa-book-listen-count {
  min-width: 50px;
  color: rgba(245, 239, 226, 0.55);
  font-size: 12px;
  font-variant-numeric: tabular-nums;
}

.wa-book-listen-controls .wa-book-speed {
  border-color: rgba(255, 255, 255, 0.22);
  background: rgba(255, 255, 255, 0.08);
  color: rgba(245, 239, 226, 0.8);
}

/* --------------------------------------------------------- new bookshelf */

.wa-books {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.wa-books-colophon {
  margin: 0;
  color: var(--wa-muted);
  font-size: 10.5px;
  text-align: center;
}

.wa-book-shelf {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.wa-book-hero {
  display: grid;
  grid-template-columns: minmax(170px, 280px) minmax(0, 1fr);
  align-items: center;
  gap: clamp(24px, 5vw, 64px);
  padding: 10px 4px 0;
}

.wa-book-cover-link {
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  perspective: 900px;
}

.wa-book-cover-frame {
  display: block;
  overflow: hidden;
  border-radius: 12px;
  transform: rotateY(-7deg) rotateX(2deg);
  box-shadow: 0 34px 64px -30px rgba(0, 0, 0, 0.55);
  transition: transform 0.28s ease;
}

.wa-book-cover-link:hover .wa-book-cover-frame {
  transform: rotateY(0) rotateX(0) translateY(-3px);
}

.wa-book-cover-frame img {
  display: block;
  width: 100%;
  aspect-ratio: 2 / 3;
  object-fit: cover;
}

.wa-book-copy h2 {
  margin: 3px 0 0;
  font-family: Georgia, 'Songti SC', serif;
  font-size: clamp(28px, 3.4vw, 40px);
  font-weight: 600;
  letter-spacing: -0.02em;
}

.wa-book-en-title {
  margin: 4px 0 0;
  color: var(--wa-muted);
  font-family: Georgia, serif;
  font-size: 16px;
}

.wa-book-byline {
  margin: 6px 0 12px;
  color: var(--wa-muted);
  font-size: 11.5px;
}

.wa-book-blurb {
  margin: 0 0 10px;
  max-width: 560px;
  color: var(--wa-muted);
  font-size: 12.5px;
  line-height: 1.75;
}

.wa-book-firstline {
  margin: 0;
  max-width: 560px;
  color: color-mix(in srgb, var(--dsw-alias-label-primary) 78%, transparent);
  font-family: Georgia, serif;
  font-style: italic;
  font-size: 15px;
  line-height: 1.6;
}

.wa-book-firstline-zh {
  margin: 2px 0 0;
  color: var(--wa-muted);
  font-size: 11.5px;
}

.wa-book-progress {
  max-width: 420px;
  margin-top: 16px;
}

.wa-book-progress-copy {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  color: var(--wa-muted);
  font-size: 11px;
}

.wa-book-progress-copy small {
  font-variant-numeric: tabular-nums;
}

.wa-book-progress-track {
  height: 4px;
  margin-top: 6px;
  border-radius: 3px;
  background: var(--wa-surface-2);
  overflow: hidden;
}

.wa-book-progress-track i {
  display: block;
  height: 100%;
  border-radius: 3px;
  background: linear-gradient(90deg, color-mix(in srgb, var(--wa-book-gold) 70%, transparent), var(--wa-book-gold));
}

.wa-book-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  margin-top: 18px;
}

.wa-book-actions-note {
  color: var(--wa-muted);
  font-size: 10.5px;
}

.wa-book-journey {
  border-top: 1px solid var(--wa-line);
  padding-top: 18px;
}

.wa-book-journey-head {
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin-bottom: 12px;
}

.wa-book-journey-head h3 {
  margin: 0;
  font-size: 15px;
}

.wa-book-journey-head span {
  color: var(--wa-muted);
  font-size: 10.5px;
}

.wa-starpath {
  display: grid;
  grid-template-columns: repeat(9, minmax(0, 1fr));
  gap: 2px 0;
  margin: 0;
  padding: 0;
  list-style: none;
}

.wa-starpath li {
  position: relative;
  min-width: 0;
}

.wa-starpath li::before {
  content: '';
  position: absolute;
  top: 25px;
  left: 12px;
  width: 100%;
  height: 1px;
  background: var(--wa-line);
}

.wa-starpath li:nth-child(9n)::before,
.wa-starpath li:last-child::before {
  display: none;
}

.wa-starpath li.is-read::before {
  background: color-mix(in srgb, var(--wa-book-gold) 55%, transparent);
}

.wa-starpath li button {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  min-height: 112px;
  padding: 8px 8px 10px 0;
  border: 0;
  background: transparent;
  color: inherit;
  text-align: left;
  cursor: pointer;
}

.wa-starpath li button:disabled {
  cursor: default;
  opacity: 0.45;
}

.wa-star-number {
  color: var(--wa-muted);
  font-family: ui-monospace, Menlo, monospace;
  font-size: 9.5px;
}

.wa-star-node {
  display: grid;
  place-items: center;
  width: 16px;
  height: 16px;
  margin: 8px 0 9px 1px;
  border: 1px solid var(--wa-line-strong);
  border-radius: 50%;
  background: var(--dsw-alias-bg-base);
  color: transparent;
}

.wa-starpath li.is-read .wa-star-node {
  border-color: var(--wa-book-gold);
  background: color-mix(in srgb, var(--wa-book-gold) 18%, var(--dsw-alias-bg-base));
  color: var(--wa-book-gold);
}

.wa-starpath li.is-current .wa-star-node {
  border-color: var(--wa-book-gold);
  box-shadow: 0 0 0 4px var(--wa-book-glow);
}

.wa-star-copy {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.wa-star-copy strong {
  overflow: hidden;
  color: var(--dsw-alias-label-primary);
  font-size: 11px;
  font-weight: 600;
  line-height: 1.45;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.wa-star-copy small {
  color: var(--wa-muted);
  font-size: 9.5px;
  white-space: nowrap;
}

@media (max-width: 1100px) {
  .wa-starpath {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }

  .wa-starpath li:nth-child(9n)::before {
    display: block;
  }

  .wa-starpath li:nth-child(6n)::before,
  .wa-starpath li:last-child::before {
    display: none;
  }
}

@media (max-width: 860px) {
  .wa-book-hero {
    grid-template-columns: minmax(0, 1fr);
    gap: 22px;
  }

  .wa-book-cover-link {
    width: min(58vw, 220px);
    justify-self: center;
  }

  .wa-book-page {
    padding: 16px 16px 60px;
  }

  .wa-book-bar {
    grid-template-columns: 72px minmax(0, 1fr) auto;
    padding: 0 10px;
  }

  .wa-book-bar-title {
    gap: 6px;
    font-size: 11.5px;
  }

  .wa-book-player-inner {
    gap: 4px;
  }

  .wa-book-player-count {
    min-width: 66px;
  }

  .wa-book-follow {
    display: none;
  }

  .wa-starpath {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .wa-starpath li:nth-child(3n)::before,
  .wa-starpath li:last-child::before {
    display: none;
  }

  .wa-starpath li:nth-child(6n)::before {
    display: block;
  }

  .wa-book-listen-body {
    padding: 0 6vw;
  }
}

@media (max-width: 560px) {
  .wa-book-actions {
    align-items: stretch;
    flex-direction: column;
  }

  .wa-book-actions .wa-btn {
    width: 100%;
  }

  .wa-book-listen-btn {
    display: none;
  }

  .wa-book-player-count small {
    display: none;
  }

  .wa-book-para-end-actions {
    flex-direction: column;
  }
}

@media (min-width: 900px) {
  .wa-book-reader[data-mode='bi'] .wa-book-page {
    max-width: 1140px;
  }

  .wa-book-reader[data-mode='bi'] .wa-book-plate,
  .wa-book-reader[data-mode='bi'] .wa-book-text {
    max-width: 1040px;
  }

  .wa-book-reader[data-mode='bi'] .wa-book-para {
    display: grid;
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
    column-gap: 36px;
    align-items: start;
  }

  .wa-book-reader[data-mode='bi'] .wa-book-para-zh {
    margin: 0;
    padding-left: 20px;
    border-left: 1px solid var(--wa-line);
  }
}

/* -------------------------------------- v0.5.2 listen mode / settings */

.wa-book-tools {
  display: flex;
  align-items: center;
  gap: 2px;
  flex-wrap: nowrap;
  white-space: nowrap;
}

.wa-book-listen {
  position: absolute;
  inset: 0;
  z-index: 95;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #080b14;
  color: #f5efe2;
  animation: wa-book-listen-in 0.18s ease both;
}

@keyframes wa-book-listen-in {
  from {
    opacity: 0;
    transform: scale(1.01);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.wa-book-listen-top {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
  align-items: center;
  gap: 12px;
  padding: 16px 22px;
  color: rgba(245, 239, 226, 0.6);
  font-size: 12px;
}

.wa-book-listen-top > p {
  margin: 0;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.wa-book-listen-back {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  justify-self: start;
  padding: 6px 8px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: var(--wa-round);
  background: rgba(255, 255, 255, 0.06);
  color: rgba(245, 239, 226, 0.82);
  font-size: 11px;
  cursor: pointer;
}

.wa-book-listen-back:hover {
  background: rgba(255, 255, 255, 0.12);
}

.wa-book-listen-modes {
  display: flex;
  gap: 2px;
  justify-self: end;
  padding: 2px;
  border-radius: var(--wa-round);
  background: rgba(255, 255, 255, 0.08);
}

.wa-book-listen-modes button {
  padding: 4px 9px;
  border: 0;
  border-radius: var(--wa-round);
  background: transparent;
  color: rgba(245, 239, 226, 0.58);
  font-size: 10.5px;
  cursor: pointer;
}

.wa-book-listen-modes button[aria-pressed='true'] {
  background: rgba(245, 239, 226, 0.92);
  color: #1a160e;
}

.wa-book-listen-modes button:hover:not([aria-pressed='true']) {
  background: rgba(255, 255, 255, 0.12);
  color: #f5efe2;
}

@media (max-width: 760px) {
  .wa-book-listen-top {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    row-gap: 8px;
  }

  .wa-book-listen-top > p {
    display: none;
  }

  .wa-book-listen-modes {
    grid-column: 2;
  }
}

/* ----------------------------------- v0.5.4 reader interaction polish */

.wa-book-tool {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  flex: 0 0 auto;
  white-space: nowrap;
  padding: 5px 8px;
  border: 1px solid transparent;
  border-radius: 8px;
  background: transparent;
  color: var(--wa-muted);
  font-size: 10.5px;
  cursor: pointer;
}

.wa-book-tool:hover {
  background: var(--wa-surface-2);
  color: var(--dsw-alias-label-primary);
}

.wa-book-tool.is-on {
  border-color: color-mix(in srgb, var(--wa-book-gold) 45%, transparent);
  background: color-mix(in srgb, var(--wa-book-gold) 12%, transparent);
  color: var(--dsw-alias-label-primary);
}

.wa-book-lookup-hint {
  flex: 0 0 auto;
  padding: 5px 16px;
  border-bottom: 1px solid var(--wa-line);
  background: var(--wa-surface-2);
  color: var(--wa-muted);
  font-size: 10.5px;
  text-align: center;
}

.wa-book-mark.is-marked {
  border-bottom: 1px dotted color-mix(in srgb, var(--dsw-alias-label-primary) 38%, transparent);
}

.wa-book-sent.is-lookup {
  cursor: auto;
}

.wa-book-spin {
  animation: wa-book-spin 0.9s linear infinite;
}

@keyframes wa-book-spin {
  to {
    transform: rotate(360deg);
  }
}

.wa-book-listen-status {
  margin: 0;
  color: rgba(245, 239, 226, 0.52);
  font-size: 11px;
}

@media (max-width: 860px) {
  .wa-book-tool span {
    display: none;
  }
}

.wa-book-pop-actions {
  display: flex;
  gap: 8px;
}

.wa-book-pop-actions .wa-btn {
  flex: 1 1 auto;
  white-space: nowrap;
}

.wa-book-pop-fav.is-on {
  border-color: color-mix(in srgb, var(--dsw-alias-state-error-primary) 45%, transparent);
  color: var(--dsw-alias-state-error-primary);
}

/* ============================================ unified lookup card v0.5.7 */

.wa-wlc {
  position: fixed;
  z-index: 1500;
  width: min(400px, calc(100vw - 24px));
  padding: 22px 22px 18px;
  border: 1px solid var(--dsw-alias-border-l2, var(--wa-line));
  border-radius: 16px;
  background: var(--dsw-alias-bg-overlay);
  color: var(--dsw-alias-label-primary);
  box-shadow: 0 22px 60px rgba(0, 0, 0, 0.32);
  animation: wa-fade 0.12s ease;
}

.wa-wlc-close {
  position: absolute;
  top: 8px;
  right: 8px;
}

.wa-wlc-word {
  margin: 0 34px 0 0;
  font-family: Georgia, 'Songti SC', serif;
  font-size: 38px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.02em;
  overflow-wrap: anywhere;
}

.wa-wlc-pron {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
}

.wa-wlc-ipa {
  color: var(--wa-muted);
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 13px;
}

.wa-wlc-senses {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 18px 0 20px;
}

.wa-wlc-sense {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
}

.wa-wlc-pos {
  color: var(--wa-muted);
  font-style: italic;
  font-size: 12px;
}

.wa-wlc-empty {
  margin: 12px 0 4px;
  color: var(--wa-muted);
  font-size: 12px;
}

.wa-wlc-actions {
  display: flex;
  gap: 10px;
}

.wa-wlc-actions .wa-btn {
  flex: 1 1 0;
  white-space: nowrap;
}

.wa-wlc-fav.is-on {
  border-color: color-mix(in srgb, var(--dsw-alias-state-error-primary) 45%, transparent);
  color: var(--dsw-alias-state-error-primary);
}

.wa-detail-actions .wa-btn.is-on {
  border-color: color-mix(in srgb, var(--dsw-alias-brand-primary) 50%, transparent);
  color: var(--dsw-alias-label-primary);
}

@media (max-width: 520px) {
  .wa-wlc-word {
    font-size: 32px;
  }

  .wa-wlc-actions {
    flex-direction: column;
  }
}

.wa-review-note {
  margin: 14px 0 0;
  max-width: 560px;
  color: var(--wa-muted);
  font-size: 11.5px;
  line-height: 1.7;
  text-align: center;
}

/* -------------------------------------- v0.6.1 spelling input polish */

.wa-quiz-spell {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  text-align: center;
}

.wa-quiz-spell > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.wa-quiz-spell .wa-spell-art {
  width: min(240px, 56vw);
  max-height: 240px;
  object-fit: cover;
}

.wa-quiz-spell .wa-cloze {
  text-align: center;
}

.wa-spell {
  width: 100%;
  align-items: center;
}

.wa-slots {
  width: 100%;
  justify-content: center;
}

.wa-slot {
  width: 40px;
  height: 48px;
  border: 1.5px solid var(--wa-line-strong);
  background: var(--dsw-alias-bg-layer-2, var(--wa-surface-2));
  color: var(--dsw-alias-label-primary);
  font-size: 20px;
  box-shadow: inset 0 1px 0 color-mix(in srgb, #fff 45%, transparent);
}

.wa-slot.is-space {
  width: 18px;
}

.wa-slot.is-filled {
  border-color: var(--dsw-alias-brand-primary);
  background: color-mix(in srgb, var(--dsw-alias-brand-primary) 7%, var(--dsw-alias-bg-layer-2, var(--wa-surface-2)));
}

.wa-slot.is-caret {
  border-color: var(--dsw-alias-brand-primary);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--dsw-alias-brand-primary) 18%, transparent);
}

.wa-spell-actions {
  width: 100%;
}

@media (max-width: 560px) {
  .wa-slot {
    width: 34px;
    height: 42px;
    font-size: 18px;
  }
}

/* ------------------------------------ v0.6.2 native spelling input */

.wa-spell {
  width: 100%;
  align-items: center;
  gap: 10px;
}

.wa-spell-label {
  color: var(--wa-muted);
  font-size: 11.5px;
  letter-spacing: 0.04em;
}

.wa-spell-field {
  width: min(440px, 100%);
  height: 56px;
  padding: 0 18px;
  border: 2px solid var(--wa-line-strong);
  border-radius: 14px;
  outline: none;
  background: var(--dsw-alias-bg-layer-2, var(--wa-surface-2));
  color: var(--dsw-alias-label-primary);
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-align: center;
  caret-color: var(--dsw-alias-brand-primary);
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

.wa-spell-field::placeholder {
  color: color-mix(in srgb, var(--dsw-alias-label-primary) 32%, transparent);
  font-family: system-ui, 'PingFang SC', sans-serif;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0;
}

.wa-spell-field:focus {
  border-color: var(--dsw-alias-brand-primary);
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--dsw-alias-brand-primary) 16%, transparent);
}

.wa-spell-field[readonly] {
  opacity: 0.85;
}

@media (max-width: 560px) {
  .wa-spell-field {
    height: 50px;
    font-size: 21px;
  }
}

/* ------------------------------ v0.6.3 spell input: per-letter boxes */

.wa-spell-field {
  --cell: 38px;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 52px;
  padding: 0;
  border: 1.5px solid var(--wa-line-strong);
  text-indent: calc((var(--cell) - 1ch) / 2);
  border-radius: 11px;
  outline: none;
  background-color: var(--wa-surface-2);
  background-image: repeating-linear-gradient(
    90deg,
    var(--dsw-alias-bg-base) 0 calc(var(--cell) - 4px),
    transparent calc(var(--cell) - 4px) var(--cell)
  );
  background-origin: content-box;
  background-clip: content-box;
  color: var(--dsw-alias-label-primary);
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 22px;
  font-weight: 600;
  letter-spacing: calc(var(--cell) - 1ch);
  text-align: left;
  caret-color: var(--dsw-alias-brand-primary);
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

.wa-spell-field::placeholder {
  display: none;
}

.wa-spell-field:focus {
  border-color: var(--dsw-alias-brand-primary);
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--dsw-alias-brand-primary) 16%, transparent);
}

.wa-spell-field[readonly] {
  opacity: 0.85;
}

@media (max-width: 560px) {
  .wa-spell-field {
    height: 46px;
    font-size: 19px;
  }
}

/* --------------------------------- v0.6.4 per-letter native input cells */

.wa-spell-cells {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6px;
}

.wa-spell-cell {
  width: 40px;
  height: 48px;
  padding: 0;
  border: 1px solid var(--wa-line-strong);
  border-radius: 10px;
  outline: none;
  background: var(--dsw-alias-bg-base);
  color: var(--dsw-alias-label-primary);
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 22px;
  font-weight: 600;
  text-align: center;
  caret-color: var(--dsw-alias-brand-primary);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

.wa-spell-cell:focus {
  border-color: var(--dsw-alias-label-primary);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--dsw-alias-label-primary) 18%, transparent);
}

.wa-spell-cell.is-filled {
  border-color: var(--wa-line-strong);
}

.wa-spell-cell.is-ok {
  border-color: color-mix(in srgb, var(--dsw-alias-state-success-primary) 65%, transparent);
  color: var(--dsw-alias-state-success-primary);
}

.wa-spell-cell.is-bad {
  border-color: color-mix(in srgb, var(--dsw-alias-state-error-primary) 65%, transparent);
  color: var(--dsw-alias-state-error-primary);
}

.wa-spell-gap {
  width: 14px;
}

@media (max-width: 560px) {
  .wa-spell-cell {
    width: 34px;
    height: 42px;
    font-size: 19px;
  }
}

/* ------------------------------------------ v0.6.6 review action card */

.wa-review-action {
  width: min(560px, 100%);
  margin: 18px auto 0;
  padding: 18px 20px;
  border: 1px solid var(--wa-line);
  border-radius: 16px;
  background: var(--wa-surface);
  text-align: center;
}

.wa-review-action-title {
  margin: 0;
  font-size: 17px;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.wa-review-action-note {
  margin: 6px 0 0;
  color: var(--wa-muted);
  font-size: 11.5px;
  line-height: 1.7;
}

.wa-review-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 14px;
}

.wa-review-action .wa-btn-ghost {
  min-height: 40px;
}
`;var C=he(require("react"),1);var ha="/word-atlas/atlas",oe={img:1,uk:2,us:4,ex:8,ex2:16};async function cr(a){let e=await fetch(a,{cache:"no-store"});if(!e.ok)throw new Error(`\u8BCD\u5E93\u52A0\u8F7D\u5931\u8D25\uFF08HTTP ${e.status}\uFF09`);return e.json()}function Wn(a){let e=(a.topics||[]).map(([n,o])=>({slug:n,zh:o})),t=a.cefr||["A1","A2","B1","B2","C1","C2"],r=(a.words||[]).map((n,o)=>{let[i,s,l,f,p,d,c]=n;return{id:i,word:s,zh:l,ipa:f,cefr:t[p]||"",topic:e[d]?.slug||"",topicZh:e[d]?.zh||"",media:c,order:o}});return{id:a.id,name:a.name,count:a.count??r.length,examples:a.examples??0,chunk:a.chunk??100,topics:e,cefr:t,words:r,byId:new Map(r.map(n=>[n.id,n]))}}var Oa=null;function ur(){return Oa||(Oa=cr(`${ha}/index.json`).then(Wn).catch(a=>{throw Oa=null,a})),Oa}var Tt=new Map,Ua=new Map;function Te(a,e){let t=Tt.get(e);if(t)return Promise.resolve(t);let r=a.byId.get(e);if(!r)return Promise.reject(new Error(`\u627E\u4E0D\u5230\u8BCD\u6761 ${e}`));let n=Math.floor(r.order/a.chunk),o=Ua.get(n);return o||(o=cr(`${ha}/entries/${n}.json`).then(i=>{for(let s of i)Tt.set(s.id,s);Ua.delete(n)}).catch(i=>{throw Ua.delete(n),i}),Ua.set(n,o)),o.then(()=>{let i=Tt.get(e);if(!i)throw new Error(`\u627E\u4E0D\u5230\u8BCD\u6761 ${e}`);return i})}var xa=a=>`/word-atlas/brand/${a}`,wr=a=>`${ha}/thumb/${a}.webp`,mr=a=>`${ha}/img/${a}.webp`,le=(a,e)=>`${ha}/audio/${a}/${e}.mp3`;function Hn(a){return a&&(typeof a.media=="number"?a.media:a.m)||0}function de(a,e){return(Hn(a)&e)!==0}var gr="/word-atlas/readings/index.json",fr=a=>`/word-atlas/readings/${a}.json`,br="/word-atlas/books/index.json",hr=(a,e)=>`/word-atlas/books/${a}/ch-${e}.json`,ta=a=>`/word-atlas/read-assets/${a.replace(/^\/+/,"")}`;var vr=require("react"),kr="/word-atlas/api/progress",Nr="word-atlas-dsh:progress:v1",Pt={accent:"uk",dailyNew:10,retention:.9,startLevel:0,spell:!0,autoplay:!0};function zr(){return{v:1,cards:{},bookmarks:[],days:{},mistakes:[],typing:[],readings:{},session:null,settings:{...Pt}}}function qn(a){return!a||typeof a!="object"||Array.isArray(a)||typeof a.id!="string"||!Array.isArray(a.steps)||!Array.isArray(a.newIds)||!Array.isArray(a.reviewIds)||!Number.isFinite(a.index)||a.index<0||!a.graded||typeof a.graded!="object"||Array.isArray(a.graded)?null:a}function Mr(a){return!a||typeof a!="object"||Array.isArray(a)||a.v!==1?null:{v:1,cards:a.cards&&typeof a.cards=="object"&&!Array.isArray(a.cards)?a.cards:{},bookmarks:Array.isArray(a.bookmarks)?a.bookmarks.filter(e=>typeof e=="string"):[],days:a.days&&typeof a.days=="object"&&!Array.isArray(a.days)?a.days:{},mistakes:Array.isArray(a.mistakes)?a.mistakes.filter(e=>typeof e=="string").slice(0,300):[],typing:Array.isArray(a.typing)?a.typing.slice(-500):[],readings:a.readings&&typeof a.readings=="object"&&!Array.isArray(a.readings)?a.readings:{},session:qn(a.session),settings:{...Pt,...a.settings&&typeof a.settings=="object"?a.settings:{}},...typeof a.savedAt=="number"?{savedAt:a.savedAt}:{}}}function Kn(){try{let a=localStorage.getItem(Nr);return a?Mr(JSON.parse(a)):null}catch{return null}}function Ga(){try{localStorage.setItem(Nr,JSON.stringify(be))}catch{}}var be=Kn()||zr(),jt=new Set,Ft=null,xr=!1;function Wa(){for(let a of jt)a()}function _r(){clearTimeout(Ft),Ft=setTimeout(Ha,800)}function yr(){return be}function Zn(a){return jt.add(a),()=>jt.delete(a)}function Sr(){return(0,vr.useSyncExternalStore)(Zn,yr,yr)}function re(a){let e=a(be);!e||e===be||(be={...e,v:1,savedAt:Date.now()},Ga(),Wa(),_r())}function Ha(){if(clearTimeout(Ft),!be.savedAt)return;let a=JSON.stringify(be);fetch(kr,{method:"POST",headers:{"Content-Type":"application/json"},body:a}).catch(()=>{})}async function Cr(){if(!xr){xr=!0;try{let a=await fetch(kr,{cache:"no-store"});if(!a.ok)return;let e=Mr(await a.json());if(!e)return;let t=e.savedAt||0,r=be.savedAt||0;t>r?(be=e,Ga(),Wa()):r>t&&_r()}catch{}}}function ra(a=new Date){return`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,"0")}-${String(a.getDate()).padStart(2,"0")}`}function Ar(a,{newWords:e=0,reviewed:t=0,correct:r=0}={}){let n=ra(),o=a[n]||{n:0,r:0,c:0};return{...a,[n]:{n:o.n+e,r:o.r+t,c:o.c+r}}}function na(a,e=new Date){let t=0,r=new Date(e);for(;;){let n=a[ra(r)];if(!n||(n.n||0)+(n.r||0)===0){if(t===0&&ra(r)===ra(e)){r.setDate(r.getDate()-1);continue}break}t+=1,r.setDate(r.getDate()-1)}return t}function Lr(a,e){let t=a.bookmarks.includes(e);return{...a,bookmarks:t?a.bookmarks.filter(r=>r!==e):[e,...a.bookmarks]}}var $r="word-atlas-open";function Ke(a){return!!a&&typeof a=="object"&&!Array.isArray(a)}function je(a,e=0,t=1/0){return typeof a=="number"&&Number.isFinite(a)&&a>=e&&a<=t}function Vn(a){return Ke(a)&&je(a.due)&&je(a.s)&&je(a.d,0,11)&&je(a.el)&&je(a.sd)&&je(a.ls)&&je(a.reps)&&je(a.lapses)&&[0,1,2,3].includes(a.st)&&(a.last===void 0||je(a.last))&&je(a.seen)}function Er(){return Ha(),JSON.stringify({app:"word-atlas",version:2,exported:new Date().toISOString(),progress:{version:2,datasetId:$r,cards:be.cards,bookmarks:be.bookmarks,days:be.days,typing:be.typing,readings:be.readings,session:null,mistakes:be.mistakes},settings:be.settings},null,1)}function Ir(a){let e;try{e=JSON.parse(a)}catch{return{ok:!1,error:"\u6587\u4EF6\u4E0D\u662F\u6709\u6548\u7684 JSON\u3002"}}if(!Ke(e)||e.app!=="word-atlas"||e.version!==2||!Ke(e.progress))return{ok:!1,error:"\u8FD9\u4E0D\u662F\u8BCD\u5149\u7684\u5B66\u4E60\u5907\u4EFD\u3002"};let t=e.progress;if(typeof t.datasetId=="string"&&t.datasetId!==$r)return{ok:!1,error:"\u5907\u4EFD\u6765\u81EA\u53E6\u4E00\u4E2A\u8BCD\u5E93\uFF0C\u8BF7\u4F7F\u7528\u8BCD\u5149\u5F00\u653E\u8BCD\u5E93\u7684\u5907\u4EFD\u3002"};let r={};if(Ke(t.cards))for(let[p,d]of Object.entries(t.cards))Vn(d)&&(r[p]=d);let n=Array.isArray(t.bookmarks)?t.bookmarks.filter(p=>typeof p=="string").slice(0,2e4):[],o={};if(Ke(t.days))for(let[p,d]of Object.entries(t.days)){if(!/^\d{4}-\d{2}-\d{2}$/.test(p)||!Ke(d))continue;let c=Number(d.n)||0,u=Number(d.r)||0,x=Number(d.c)||0;o[p]={n:c,r:u,c:x}}let i=Array.isArray(t.mistakes)?t.mistakes.filter(p=>typeof p=="string").slice(0,300):[],s=Array.isArray(t.typing)?t.typing.slice(-500):[],l=Ke(t.readings)?t.readings:{},f={...Pt,...Ke(e.settings)?e.settings:{}};return be={v:1,cards:r,bookmarks:n,days:o,mistakes:i,typing:s,readings:l,settings:f,savedAt:Date.now()},Ga(),Wa(),Ha(),{ok:!0,cards:Object.keys(r).length}}function Dr(){be={...zr(),savedAt:Date.now()},Ga(),Wa(),Ha()}var Ut=class a extends Error{constructor(e="FSRS Error"){super(e),this.name="FSRSError",Error.captureStackTrace?.(this,a)}},ue=class a extends Ut{constructor(e){super(e),this.name="FSRSValidationError",Error.captureStackTrace?.(this,a)}},X=(a=>(a[a.New=0]="New",a[a.Learning=1]="Learning",a[a.Review=2]="Review",a[a.Relearning=3]="Relearning",a))(X||{}),D=(a=>(a[a.Manual=0]="Manual",a[a.Again=1]="Again",a[a.Hard=2]="Hard",a[a.Good=3]="Good",a[a.Easy=4]="Easy",a))(D||{}),ee=class a{static card(e){return{...e,state:a.state(e.state),due:a.time(e.due),last_review:e.last_review?a.time(e.last_review):void 0}}static rating(e){if(typeof e=="string"){let t=e.charAt(0).toUpperCase(),r=e.slice(1).toLowerCase(),n=D[`${t}${r}`];if(n===void 0)throw new ue(`Invalid rating:[${e}]`);return n}else if(typeof e=="number")return e;throw new ue(`Invalid rating:[${e}]`)}static state(e){if(typeof e=="string"){let t=e.charAt(0).toUpperCase(),r=e.slice(1).toLowerCase(),n=X[`${t}${r}`];if(n===void 0)throw new ue(`Invalid state:[${e}]`);return n}else if(typeof e=="number")return e;throw new ue(`Invalid state:[${e}]`)}static time(e){if(e instanceof Date)return e;let t=new Date(e);if(typeof e=="object"&&e!==null&&!Number.isNaN(Date.parse(e)||+t))return t;if(typeof e=="string"){let r=Date.parse(e);if(Number.isNaN(r))throw new ue(`Invalid date:[${e}]`);return new Date(r)}else if(typeof e=="number")return new Date(e);throw new ue(`Invalid date:[${e}]`)}static review_log(e){return{...e,due:a.time(e.due),rating:a.rating(e.rating),state:a.state(e.state),review:a.time(e.review)}}};Date.prototype.scheduler=function(a,e){return $e(this,a,e)};Date.prototype.diff=function(a,e){return oa(this,a,e)};Date.prototype.format=function(){return Yn(this)};Date.prototype.dueFormat=function(a,e,t){return Xn(this,a,e,t)};function $e(a,e,t){return new Date(t?ee.time(a).getTime()+e*24*60*60*1e3:ee.time(a).getTime()+e*60*1e3)}function oa(a,e,t){if(!a||!e)throw new ue("Invalid date");let r=ee.time(a).getTime()-ee.time(e).getTime(),n=0;switch(t){case"days":n=Math.floor(r/(1440*60*1e3));break;case"minutes":n=Math.floor(r/(60*1e3));break}return n}function Yn(a){let e=ee.time(a),t=e.getFullYear(),r=e.getMonth()+1,n=e.getDate(),o=e.getHours(),i=e.getMinutes(),s=e.getSeconds();return`${t}-${ya(r)}-${ya(n)} ${ya(o)}:${ya(i)}:${ya(s)}`}function ya(a){return a<10?`0${a}`:`${a}`}var Bt=[60,60,24,31,12],Ot=["second","min","hour","day","month","year"];function Xn(a,e,t,r=Ot){a=ee.time(a),e=ee.time(e),r.length!==Ot.length&&(r=Ot);let n=a.getTime()-e.getTime(),o=0;for(n/=1e3,o=0;o<Bt.length&&!(n<Bt[o]);o++)n/=Bt[o];return`${Math.floor(n)}${t?r[o]:""}`}var Jn=Object.freeze([D.Again,D.Hard,D.Good,D.Easy]),Qn=[{start:2.5,end:7,factor:.15},{start:7,end:20,factor:.1},{start:20,end:1/0,factor:.05}];function Rn(a,e,t){let r=1;for(let i of Qn)r+=i.factor*Math.max(Math.min(a,i.end)-i.start,0);a=Math.min(a,t);let n=Math.max(2,Math.round(a-r)),o=Math.min(Math.round(a+r),t);return a>e&&(n=Math.max(n,e+1)),n=Math.min(n,o),{min_ivl:n,max_ivl:o}}function Ee(a,e,t){return Math.min(Math.max(a,e),t)}function Le(a,e){let t=10**e;return Math.round(a*t)/t}function eo(a,e){let t=Date.UTC(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate()),r=Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate());return Math.floor((r-t)/864e5)}var ao=a=>{let e=a.slice(-1),t=parseInt(a.slice(0,-1),10);if(Number.isNaN(t)||!Number.isFinite(t)||t<0)throw new ue(`Invalid step value: ${a}`);switch(e){case"m":return t;case"h":return t*60;case"d":return t*1440;default:throw new ue(`Invalid step unit: ${a}, expected m/h/d`)}},to=(a,e,t)=>{let r=e===X.Relearning||e===X.Review?a.relearning_steps:a.learning_steps,n=r.length;if(n===0||t>=n)return{};let o=r[0],i=ao,s=()=>i(o),l=()=>{if(n===1)return Math.round(i(o)*1.5);let u=r[1];return Math.round((i(o)+i(u))/2)},f=u=>u<0||u>=n?null:r[u],p=u=>i(u),d={},c=f(Math.max(0,t));if(e===X.Review)return d[D.Again]={scheduled_minutes:i(c),next_step:0},d;{d[D.Again]={scheduled_minutes:s(),next_step:0},d[D.Hard]={scheduled_minutes:l(),next_step:t};let u=f(t+1);if(u){let x=p(u);x&&(d[D.Good]={scheduled_minutes:Math.round(x),next_step:t+1})}}return d};function ro(){let a=this.review_time.getTime(),e=this.current.reps,t=this.current.difficulty*this.current.stability;return`${a}_${e}_${t}`}var Ya=(a=>(a.SCHEDULER="Scheduler",a.LEARNING_STEPS="LearningSteps",a.SEED="Seed",a))(Ya||{}),Ka=class{last;current;review_time;next=new Map;algorithm;strategies;elapsed_days=0;constructor(e,t,r,n){this.algorithm=r,this.last=ee.card(e),this.current=ee.card(e),this.review_time=ee.time(t),this.strategies=n,this.init()}checkGrade(e){if(!Number.isFinite(e)||e<1||e>4)throw new ue(`Invalid grade "${e}",expected 1-4`)}init(){let{state:e,last_review:t}=this.current,r=0;e!==X.New&&t&&(r=eo(t,this.review_time)),this.current.last_review=this.review_time,this.elapsed_days=r,this.current.elapsed_days=r,this.current.reps+=1;let n=ro;if(this.strategies){let o=this.strategies.get(Ya.SEED);o&&(n=o)}this.algorithm.seed=n.call(this)}preview(){return{[D.Again]:this.review(D.Again),[D.Hard]:this.review(D.Hard),[D.Good]:this.review(D.Good),[D.Easy]:this.review(D.Easy),[Symbol.iterator]:this.previewIterator.bind(this)}}*previewIterator(){for(let e of Jn)yield this.review(e)}review(e){let{state:t}=this.last,r;switch(this.checkGrade(e),t){case X.New:r=this.newState(e);break;case X.Learning:case X.Relearning:r=this.learningState(e);break;case X.Review:r=this.reviewState(e);break}return r}buildLog(e){let{last_review:t,due:r,elapsed_days:n}=this.last;return{rating:e,state:this.current.state,due:t||r,stability:this.current.stability,difficulty:this.current.difficulty,elapsed_days:this.elapsed_days,last_elapsed_days:n,scheduled_days:this.current.scheduled_days,learning_steps:this.current.learning_steps,review:this.review_time}}},Gt=class{c;s0;s1;s2;constructor(e){let t=no();this.c=1,this.s0=t(" "),this.s1=t(" "),this.s2=t(" "),e==null&&(e=Date.now()),this.s0-=t(e),this.s0<0&&(this.s0+=1),this.s1-=t(e),this.s1<0&&(this.s1+=1),this.s2-=t(e),this.s2<0&&(this.s2+=1)}next(){let e=2091639*this.s0+this.c*23283064365386963e-26;return this.s0=this.s1,this.s1=this.s2,this.c=e|0,this.s2=e-this.c,this.s2}set state(e){this.c=e.c,this.s0=e.s0,this.s1=e.s1,this.s2=e.s2}get state(){return{c:this.c,s0:this.s0,s1:this.s1,s2:this.s2}}};function no(){let a=4022871197;return function(t){t=String(t);for(let r=0;r<t.length;r++){a+=t.charCodeAt(r);let n=.02519603282416938*a;a=n>>>0,n-=a,n*=a,a=n>>>0,n-=a,a+=n*4294967296}return(a>>>0)*23283064365386963e-26}}function oo(a){let e=new Gt(a),t=()=>e.next();return t.int32=()=>e.next()*4294967296|0,t.double=()=>t()+(t()*2097152|0)*11102230246251565e-32,t.state=()=>e.state,t.importState=r=>(e.state=r,t),t}var io="5.4.2",so=.9,lo=36500,po=!1,Xa=!0,co=Object.freeze(["1m","10m"]),uo=Object.freeze(["10m"]),Ni=`v${io} using FSRS-6.0`,Ge=.001;var qa=100,Tr=.5,wo=.1542,jr=Object.freeze([.212,1.2931,2.3065,8.2956,6.4133,.8334,3.0194,.001,1.8722,.1666,.796,1.4835,.0614,.2629,1.6483,.6014,1.8729,.5425,.0912,.0658,wo]),Fr=2,mo=(a,e=Xa)=>[[Ge,qa],[Ge,qa],[Ge,qa],[Ge,qa],[1,10],[.001,4],[.001,4],[.001,.75],[0,4.5],[0,.8],[.001,3.5],[.001,5],[.001,.25],[.001,.9],[0,4],[0,1],[1,6],[0,a],[0,a],[e?.01:0,.8],[.1,.8]],ia=(a,e,t=Xa)=>{let r=mo(Fr,t).slice(0,a.length);if(Math.max(0,e)>1){let n=Ee(a[11]||0,r[11][0],r[11][1]),o=Ee(a[13]||0,r[13][0],r[13][1]),i=Ee(a[14]||0,r[14][0],r[14][1]),s=-(Math.log(n)+Math.log(Math.pow(2,o)-1)+i*.3)/e,l=Ee(Le(Math.sqrt(Math.max(s,0)),8),.01,Fr);r[17]&&(r[17]=[r[17][0],l]),r[18]&&(r[18]=[r[18][0],l])}return r.map(([n,o],i)=>Ee(a[i]||0,n,o))};var Zt=(a,e=0,t=Xa)=>{if(a===void 0)return[...jr];switch(a.length){case 21:return ia(Array.from(a),e,t);case 19:return console.debug("[FSRS-6]auto fill w from 19 to 21 length"),ia(Array.from(a),e,t).concat([0,Tr]);case 17:{let r=ia(Array.from(a),e,t);return r[4]=+(r[5]*2+r[4]).toFixed(8),r[5]=+(Math.log(r[5]*3+1)/3).toFixed(8),r[6]=+(r[6]+.5).toFixed(8),console.debug("[FSRS-6]auto fill w from 17 to 21 length"),r.concat([0,0,0,Tr])}default:return console.warn("[FSRS]Invalid parameters length, using default parameters"),[...jr]}},go=a=>{let e=Array.isArray(a?.learning_steps)?a.learning_steps:co,t=Array.isArray(a?.relearning_steps)?a.relearning_steps:uo,r=a?.enable_short_term??Xa,n=Zt(a?.w,t.length,r);return{request_retention:a?.request_retention||so,maximum_interval:a?.maximum_interval||lo,w:n,enable_fuzz:a?.enable_fuzz??po,enable_short_term:r,learning_steps:e,relearning_steps:t}};function ka(a,e){let t={due:a?ee.time(a):new Date,stability:0,difficulty:0,elapsed_days:0,scheduled_days:0,reps:0,lapses:0,learning_steps:0,state:X.New,last_review:void 0};return e&&typeof e=="function"?e(t):t}var Pr=a=>{let e=typeof a=="number"?-a:-a[20],t=Math.exp(Math.pow(e,-1)*Math.log(.9))-1;return{decay:e,factor:Le(t,8)}};function Wt(a,e,t){let{decay:r,factor:n}=Pr(a);return Le(Math.pow(1+n*e/t,r),8)}var Ht=class{param;intervalModifier;_seed;constructor(e){this.param=new Proxy(this.prepare_parameters(e),this.params_handler_proxy()),this.intervalModifier=this.calculate_interval_modifier(this.param.request_retention),this.forgetting_curve=Wt.bind(this,this.param.w)}get interval_modifier(){return this.intervalModifier}set seed(e){this._seed=e}calculate_interval_modifier(e){if(e<=0||e>1)throw new ue("Requested retention rate should be in the range (0,1]");let{decay:t,factor:r}=Pr(this.param.w);return Le((Math.pow(e,1/t)-1)/r,8)}get parameters(){return this.param}set parameters(e){this.update_parameters(e)}params_handler_proxy(){let e=this;return{set:function(t,r,n){return r==="request_retention"&&Number.isFinite(n)?e.intervalModifier=e.calculate_interval_modifier(Number(n)):r==="w"&&(n=Zt(n,t.relearning_steps.length,t.enable_short_term),n=ia(Array.from(n),t.relearning_steps.length,t.enable_short_term),e.forgetting_curve=Wt.bind(this,n),e.intervalModifier=e.calculate_interval_modifier(Number(t.request_retention))),Reflect.set(t,r,n),!0}}}update_parameters(e){let t=this.prepare_parameters(e);for(let r in t){let n=r;this.param[n]=t[n]}}prepare_parameters=e=>{let t=go(e);return t.w=ia(Array.from(t.w),t.relearning_steps.length,t.enable_short_term),t};init_stability(e){return Math.max(this.param.w[e-1],.1)}init_difficulty(e){let t=this.param.w,r=t[4]-Math.exp((e-1)*t[5])+1;return Le(r,8)}apply_fuzz(e,t){if(!this.param.enable_fuzz||e<2.5)return Math.round(e);let n=oo(this._seed)(),{min_ivl:o,max_ivl:i}=Rn(e,t,this.param.maximum_interval);return Math.floor(n*(i-o+1)+o)}next_interval(e,t){let r=Math.min(Math.max(1,Math.round(e*this.intervalModifier)),this.param.maximum_interval);return this.apply_fuzz(r,t)}linear_damping(e,t){return Le(e*(10-t)/9,8)}next_difficulty(e,t){let r=-this.param.w[6]*(t-3),n=e+this.linear_damping(r,e);return Ee(this.mean_reversion(this.init_difficulty(D.Easy),n),1,10)}mean_reversion(e,t){let r=this.param.w;return Le(r[7]*e+(1-r[7])*t,8)}next_recall_stability(e,t,r,n){let o=this.param.w,i=D.Hard===n?o[15]:1,s=D.Easy===n?o[16]:1;return Le(Ee(t*(1+Math.exp(o[8])*(11-e)*Math.pow(t,-o[9])*(Math.exp((1-r)*o[10])-1)*i*s),Ge,36500),8)}next_forget_stability(e,t,r){let n=this.param.w;return Le(Ee(n[11]*Math.pow(e,-n[12])*(Math.pow(t+1,n[13])-1)*Math.exp((1-r)*n[14]),Ge,36500),8)}next_short_term_stability(e,t){let r=this.param.w,n=Math.pow(e,-r[19])*Math.exp(r[17]*(t-3+r[18])),o=t>=D.Hard?Math.max(n,1):n;return Le(Ee(e*o,Ge,36500),8)}forgetting_curve;next_state(e,t,r,n){let{difficulty:o,stability:i}=e??{difficulty:0,stability:0};if(t<0)throw new ue(`Invalid delta_t "${t}"`);if(r<0||r>4)throw new ue(`Invalid grade "${r}"`);if(o===0&&i===0)return{difficulty:Ee(this.init_difficulty(r),1,10),stability:this.init_stability(r)};if(r===0)return{difficulty:o,stability:i};if(o<1||i<Ge)throw new ue(`Invalid memory state { difficulty: ${o}, stability: ${i} }`);let s=this.param.w;n=typeof n=="number"?n:this.forgetting_curve(t,i);let l;if(t===0&&this.param.enable_short_term)l=this.next_short_term_stability(i,r);else if(r===1){let p=this.next_forget_stability(o,i,n),[d,c]=[0,0];this.param.enable_short_term&&(d=s[17],c=s[18]);let u=i/Math.exp(d*c);l=Ee(Le(u,8),Ge,p)}else l=this.next_recall_stability(o,i,n,r);return{difficulty:this.next_difficulty(o,r),stability:l}}},Za=class extends Ka{learningStepsStrategy;constructor(e,t,r,n){super(e,t,r,n);let o=to;if(this.strategies){let i=this.strategies.get(Ya.LEARNING_STEPS);i&&(o=i)}this.learningStepsStrategy=o}getLearningInfo(e,t){let r=this.algorithm.parameters;e.learning_steps=e.learning_steps||0;let n=this.learningStepsStrategy(r,e.state,e.learning_steps),o=Math.max(0,n[t]?.scheduled_minutes??0),i=Math.max(0,n[t]?.next_step??0);return{scheduled_minutes:o,next_steps:i}}applyLearningSteps(e,t,r){let{scheduled_minutes:n,next_steps:o}=this.getLearningInfo(this.current,t);if(n>0&&n<1440)e.learning_steps=o,e.scheduled_days=0,e.state=r,e.due=$e(this.review_time,Math.round(n),!1);else if(e.state=X.Review,n>=1440)e.learning_steps=o,e.due=$e(this.review_time,Math.round(n),!1),e.scheduled_days=Math.floor(n/1440);else{e.learning_steps=0;let i=this.algorithm.next_interval(e.stability,this.elapsed_days);e.scheduled_days=i,e.due=$e(this.review_time,i,!0)}}newState(e){let t=this.next.get(e);if(t)return t;let r=this.next_ds(this.elapsed_days,e);this.applyLearningSteps(r,e,X.Learning);let n={card:r,log:this.buildLog(e)};return this.next.set(e,n),n}learningState(e){let t=this.next.get(e);if(t)return t;let r=this.next_ds(this.elapsed_days,e);this.applyLearningSteps(r,e,this.last.state);let n={card:r,log:this.buildLog(e)};return this.next.set(e,n),n}reviewState(e){let t=this.next.get(e);if(t)return t;let r=this.elapsed_days,n=this.algorithm.forgetting_curve(r,this.current.stability),o=this.next_ds(r,D.Again,n),i=this.next_ds(r,D.Hard,n),s=this.next_ds(r,D.Good,n),l=this.next_ds(r,D.Easy,n);this.next_interval(i,s,l,r),this.next_state(i,s,l),this.applyLearningSteps(o,D.Again,X.Relearning),o.lapses+=1;let f={card:o,log:this.buildLog(D.Again)},p={card:i,log:super.buildLog(D.Hard)},d={card:s,log:super.buildLog(D.Good)},c={card:l,log:super.buildLog(D.Easy)};return this.next.set(D.Again,f),this.next.set(D.Hard,p),this.next.set(D.Good,d),this.next.set(D.Easy,c),this.next.get(e)}next_ds(e,t,r){let n=this.algorithm.next_state({difficulty:this.current.difficulty,stability:this.current.stability},e,t,r),o=ee.card(this.current);return o.difficulty=n.difficulty,o.stability=n.stability,o}next_interval(e,t,r,n){let o,i;o=this.algorithm.next_interval(e.stability,n),i=this.algorithm.next_interval(t.stability,n),o=Math.min(o,i),i=Math.max(i,o+1);let s=Math.max(this.algorithm.next_interval(r.stability,n),i+1);e.scheduled_days=o,e.due=$e(this.review_time,o,!0),t.scheduled_days=i,t.due=$e(this.review_time,i,!0),r.scheduled_days=s,r.due=$e(this.review_time,s,!0)}next_state(e,t,r){e.state=X.Review,e.learning_steps=0,t.state=X.Review,t.learning_steps=0,r.state=X.Review,r.learning_steps=0}},Va=class extends Ka{newState(e){let t=this.next.get(e);if(t)return t;this.current.scheduled_days=0,this.current.elapsed_days=0;let r=0,n=this.next_ds(r,D.Again),o=this.next_ds(r,D.Hard),i=this.next_ds(r,D.Good),s=this.next_ds(r,D.Easy);return this.next_interval(n,o,i,s,r),this.next_state(n,o,i,s),this.update_next(n,o,i,s),this.next.get(e)}next_ds(e,t,r){let n=this.algorithm.next_state({difficulty:this.current.difficulty,stability:this.current.stability},e,t,r),o=ee.card(this.current);return o.difficulty=n.difficulty,o.stability=n.stability,o}learningState(e){return this.reviewState(e)}reviewState(e){let t=this.next.get(e);if(t)return t;let r=this.elapsed_days,n=this.algorithm.forgetting_curve(r,this.current.stability),o=this.next_ds(r,D.Again,n),i=this.next_ds(r,D.Hard,n),s=this.next_ds(r,D.Good,n),l=this.next_ds(r,D.Easy,n);return this.next_interval(o,i,s,l,r),this.next_state(o,i,s,l),o.lapses+=1,this.update_next(o,i,s,l),this.next.get(e)}next_interval(e,t,r,n,o){let i,s,l,f;i=this.algorithm.next_interval(e.stability,o),s=this.algorithm.next_interval(t.stability,o),l=this.algorithm.next_interval(r.stability,o),f=this.algorithm.next_interval(n.stability,o),i=Math.min(i,s),s=Math.max(s,i+1),l=Math.max(l,s+1),f=Math.max(f,l+1),e.scheduled_days=i,e.due=$e(this.review_time,i,!0),t.scheduled_days=s,t.due=$e(this.review_time,s,!0),r.scheduled_days=l,r.due=$e(this.review_time,l,!0),n.scheduled_days=f,n.due=$e(this.review_time,f,!0)}next_state(e,t,r,n){e.state=X.Review,e.learning_steps=0,t.state=X.Review,t.learning_steps=0,r.state=X.Review,r.learning_steps=0,n.state=X.Review,n.learning_steps=0}update_next(e,t,r,n){let o={card:e,log:this.buildLog(D.Again)},i={card:t,log:super.buildLog(D.Hard)},s={card:r,log:super.buildLog(D.Good)},l={card:n,log:super.buildLog(D.Easy)};this.next.set(D.Again,o),this.next.set(D.Hard,i),this.next.set(D.Good,s),this.next.set(D.Easy,l)}},qt=class{fsrs;constructor(e){this.fsrs=e}replay(e,t,r){return this.fsrs.next(e,t,r)}handleManualRating(e,t,r,n,o,i,s){if(typeof t>"u")throw new ue("reschedule: state is required for manual rating");let l,f;if(t===X.New)l={rating:D.Manual,state:t,due:s??r,stability:e.stability,difficulty:e.difficulty,elapsed_days:n,last_elapsed_days:e.elapsed_days,scheduled_days:e.scheduled_days,learning_steps:e.learning_steps,review:r},f=ka(r),f.last_review=r;else{if(typeof s>"u")throw new ue("reschedule: due is required for manual rating");let p=oa(s,r,"days");l={rating:D.Manual,state:e.state,due:e.last_review||e.due,stability:e.stability,difficulty:e.difficulty,elapsed_days:n,last_elapsed_days:e.elapsed_days,scheduled_days:e.scheduled_days,learning_steps:e.learning_steps,review:r},f={...e,state:t,due:s,last_review:r,stability:o||e.stability,difficulty:i||e.difficulty,elapsed_days:n,scheduled_days:p,reps:e.reps+1}}return{card:f,log:l}}reschedule(e,t){let r=[],n=ka(e.due);for(let o of t){let i;if(o.review=ee.time(o.review),o.rating===D.Manual){let s=0;n.state!==X.New&&n.last_review&&(s=oa(o.review,n.last_review,"days")),i=this.handleManualRating(n,o.state,o.review,s,o.stability,o.difficulty,o.due?ee.time(o.due):void 0)}else i=this.replay(n,o.review,o.rating);r.push(i),n=i.card}return r}calculateManualRecord(e,t,r,n){if(!r)return null;let{card:o,log:i}=r,s=ee.card(e);return s.due.getTime()===o.due.getTime()?null:(s.scheduled_days=oa(o.due,s.due,"days"),this.handleManualRating(s,o.state,ee.time(t),i.elapsed_days,n?o.stability:void 0,n?o.difficulty:void 0,o.due))}};function va(a,e){return typeof e=="function"?e(a):a}var Kt=class extends Ht{strategyHandler=new Map;Scheduler;constructor(e){super(e);let{enable_short_term:t}=this.parameters;this.Scheduler=t?Za:Va}params_handler_proxy(){let e=this;return{set:function(t,r,n){return r==="request_retention"&&Number.isFinite(n)?e.intervalModifier=e.calculate_interval_modifier(Number(n)):r==="enable_short_term"?e.Scheduler=n===!0?Za:Va:r==="w"&&(n=Zt(n,t.relearning_steps.length,t.enable_short_term),n=ia(Array.from(n),t.relearning_steps.length,t.enable_short_term),e.forgetting_curve=Wt.bind(this,n),e.intervalModifier=e.calculate_interval_modifier(Number(t.request_retention))),Reflect.set(t,r,n),!0}}}useStrategy(e,t){return this.strategyHandler.set(e,t),this}clearStrategy(e){return e?this.strategyHandler.delete(e):this.strategyHandler.clear(),this}getScheduler(e,t){let n=this.strategyHandler.get(Ya.SCHEDULER)||this.Scheduler;return new n(e,t,this,this.strategyHandler)}repeat(e,t,r){let o=this.getScheduler(e,t).preview();return va(o,r)}next(e,t,r,n){let o=this.getScheduler(e,t),i=ee.rating(r);if(i===D.Manual)throw new ue("Cannot review a manual rating");let s=o.review(i);return va(s,n)}get_retrievability(e,t,r=!0){let n=ee.card(e);t=t?ee.time(t):new Date;let o=n.state!==X.New?Math.max(oa(t,n.last_review,"days"),0):0,i=n.state!==X.New?this.forgetting_curve(o,+n.stability.toFixed(8)):0;return r?`${(i*100).toFixed(2)}%`:i}rollback(e,t,r){let n=ee.card(e),o=ee.review_log(t);if(o.rating===D.Manual)throw new ue("Cannot rollback a manual rating");let i,s,l;switch(o.state){case X.New:i=o.due,s=void 0,l=0;break;case X.Learning:case X.Relearning:case X.Review:i=o.review,s=o.due,l=n.lapses-(o.rating===D.Again&&o.state===X.Review?1:0);break}let f={...n,due:i,stability:o.stability,difficulty:o.difficulty,elapsed_days:o.last_elapsed_days,scheduled_days:o.scheduled_days,reps:Math.max(0,n.reps-1),lapses:Math.max(0,l),learning_steps:o.learning_steps,state:o.state,last_review:s};return va(f,r)}forget(e,t,r=!1,n){let o=ee.card(e);t=ee.time(t);let i=o.state===X.New?0:oa(t,o.due,"days"),s={rating:D.Manual,state:o.state,due:o.due,stability:o.stability,difficulty:o.difficulty,elapsed_days:0,last_elapsed_days:o.elapsed_days,scheduled_days:i,learning_steps:o.learning_steps,review:t},f={card:{...o,due:t,stability:0,difficulty:0,elapsed_days:0,scheduled_days:0,reps:r?0:o.reps,lapses:r?0:o.lapses,learning_steps:0,state:X.New,last_review:o.last_review},log:s};return va(f,n)}reschedule(e,t=[],r={}){let{recordLogHandler:n,reviewsOrderBy:o,skipManual:i=!0,now:s=new Date,update_memory_state:l=!1}=r;o&&typeof o=="function"&&t.sort(o),i&&(t=t.filter(x=>x.rating!==D.Manual));let f=new qt(this),p=f.reschedule(r.first_card||ka(),t),d=p.length,c=ee.card(e),u=f.calculateManualRecord(c,s,d?p[d-1]:void 0,l);return{collections:typeof n=="function"?p.map(n):p,reschedule_item:u?va(u,n):null}}},Br=a=>new Kt(a||{});var Or=new Map;function fo(a){let e=Math.round(a*1e3)/1e3,t=Or.get(e);return t||(t=Br({request_retention:e,enable_fuzz:!0,enable_short_term:!0,learning_steps:["1m","10m"],relearning_steps:["10m"]}),Or.set(e,t)),t}function bo(a){return{due:new Date(a.due),stability:a.s,difficulty:a.d,elapsed_days:a.el,scheduled_days:a.sd,learning_steps:a.ls,reps:a.reps,lapses:a.lapses,state:a.st,last_review:a.last?new Date(a.last):void 0}}function ho(a,e){return{due:a.due.getTime(),s:a.stability,d:a.difficulty,el:a.elapsed_days,sd:a.scheduled_days,ls:a.learning_steps,reps:a.reps,lapses:a.lapses,st:a.state,last:a.last_review?a.last_review.getTime():void 0,seen:e}}var _i=[D.Again,D.Hard,D.Good,D.Easy],Si={[D.Again]:"\u91CD\u6765",[D.Hard]:"\u56F0\u96BE",[D.Good]:"\u826F\u597D",[D.Easy]:"\u7B80\u5355"};function Ja(a,e,t=Date.now(),r=.9){let n=a?bo(a):ka(new Date(t)),o=fo(r).next(n,new Date(t),e).card;return ho(o,a?.seen??t)}var xo=21,Fe=a=>!!(a&&a.st===X.Review&&a.s>=xo);var Ur=(a,e=Date.now())=>!!(a&&a.due<=e);function Gr(a){if(!Number.isFinite(a))return"";let e=Math.round(a/6e4);if(e<1)return"<1\u5206";if(e<60)return`${e}\u5206`;let t=Math.round(e/60);if(t<24)return`${t}\u5C0F\u65F6`;let r=Math.round(t/24);if(r<31)return`${r}\u5929`;let n=Math.round(r/30);return n<12?`${n}\u4E2A\u6708`:`${(r/365).toFixed(1)}\u5E74`}var yo="arise arose arisen|awake awoke awoken|bear bore borne born|beat beat beaten|become became|begin began begun beginn|bend bent|bet bet|bind bound|bite bit bitten|bleed bled|blow blew blown|break broke broken|breed bred|bring brought|broadcast broadcast|build built|burn burnt burned|burst burst|buy bought|catch caught|choose chose chosen|cling clung|come came|cost cost|creep crept|cut cut cutt|deal dealt|dig dug|do did done does|draw drew drawn|dream dreamt dreamed|drink drank drunk|drive drove driven|eat ate eaten|fall fell fallen|feed fed|feel felt|fight fought|find found|flee fled|fling flung|fly flew flown flies|forbid forbade forbidden|forget forgot forgotten|forgive forgave forgiven|freeze froze frozen|get got gotten gett|give gave given|go went gone goes|grind ground|grow grew grown|hang hung|have had has|hear heard|hide hid hidden|hit hit hitt|hold held|hurt hurt|keep kept|kneel knelt|know knew known|lay laid|lead led|lean leant leaned|leap leapt leaped|learn learnt learned|leave left|lend lent|let let|lie lay lain|light lit|lose lost|make made|mean meant|meet met|pay paid|prove proved proven|put put putt|quit quit|read read|ride rode ridden|ring rang rung|rise rose risen|run ran runn|say said|see saw seen|seek sought|sell sold|send sent|set set|sew sewed sewn|shake shook shaken|shed shed|shine shone|shoot shot|show showed shown|shrink shrank shrunk|shut shut|sing sang sung|sink sank sunk|sit sat sitt|sleep slept|slide slid|sling slung|speak spoke spoken|speed sped|spend spent|spill spilt spilled|spin spun spinn|spy spied spies|mislead misled|spit spat|split split|spread spread|spring sprang sprung|stand stood|steal stole stolen|stick stuck|sting stung|stink stank stunk|stride strode|strike struck|string strung|strive strove striven|swear swore sworn|sweep swept|swell swelled swollen|swim swam swum swimm|swing swung|take took taken|teach taught|tear tore torn|tell told|think thought|throw threw thrown|tread trod trodden|understand understood|undertake undertook undertaken|upset upset|wake woke woken|wear wore worn|weave wove woven|weep wept|win won winn|wind wound|withdraw withdrew withdrawn|write wrote written|be was were been is are am|child children|man men|woman women|foot feet|tooth teeth|mouse mice|person people|good better best|bad worse worst|far further farther furthest",Hr=new Map(yo.split("|").map(a=>a.split(" ")).map(([a,...e])=>[a,e])),sa=new Map;for(let[a,e]of Hr){for(let t of e)sa.has(t)||sa.set(t,a);sa.has(a)||sa.set(a,a)}function qr(a){return String(a||"").normalize("NFKC").replace(/[’‘]/g,"'").replace(/[‐‑–—]/g,"-").trim().toLowerCase().replace(/^[^a-z']+|[^a-z']+$/g,"")}function Vt(a){let e=qr(a);if(!e)return[];let t=[],r=o=>{o&&o.length>0&&!t.includes(o)&&t.push(o)};e.endsWith("'s")&&r(e.slice(0,-2)),/(ies|ied)$/.test(e)&&r(e.slice(0,-3)+"y"),/ying$/.test(e)&&r(e.slice(0,-4)+"ie");for(let o of["ing","ed","est","er","es","s"]){if(!e.endsWith(o)||e.length<=o.length+1)continue;let i=e.slice(0,-o.length);/([bdgmnprt])\1$/.test(i)&&(r(i),r(i.slice(0,-1))),/i$/.test(i)&&(o==="er"||o==="est"||o==="ed")&&r(i.slice(0,-1)+"y"),(o==="ing"||o==="ed")&&!/ng$/.test(i)?(r(i+"e"),r(i)):(r(i),r(i+"e"))}let n=sa.get(e);return n&&r(n),t}function Yt(a){let e=new Map;for(let n of a)e.set(n.word.toLowerCase(),n.id);let t=new Map;function r(n){let o=qr(n);if(!o)return null;if(t.has(o))return t.get(o);let i=e.get(o);if(!i){let s=sa.get(o);s&&(i=e.get(s))}if(!i){for(let s of Vt(o))if(i=e.get(s),i)break}return t.set(o,i??null),i??null}return{resolve:r,exact:e}}var Wr=new WeakMap;function Qa(a){let e=Wr.get(a);return e||(e=Yt(a.words),Wr.set(a,e)),e}var Ra=a=>String(a||"").normalize("NFKC").replace(/[’‘]/g,"'").replace(/[‐‑–—]/g,"-").replace(/\s+/g," ").trim().toLowerCase();function Ie(a){let e=2166136261;for(let t=0;t<a.length;t+=1)e=Math.imul(e^a.charCodeAt(t),16777619);return e>>>0}function Na(a,e=Math.random()*2**31){let t=[...a],r=Math.floor(e)||1;for(let n=t.length-1;n>0;n-=1){r=Math.imul(1664525,r)+1013904223>>>0;let o=r%(n+1);[t[n],t[o]]=[t[o],t[n]]}return t}function vo(a){let e=a.trim().toLowerCase(),t=i=>i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");if(/\s/.test(e))return new RegExp(`(?<![A-Za-z])(${e.split(/\s+/).map(t).join("\\s+")})(?![A-Za-z])`,"i");let r=Hr.get(e);if(r)return new RegExp(`(?<![A-Za-z])((?:${[e,...r].map(t).join("|")})[a-z]{0,3})(?![A-Za-z])`,"i");let n=e;e.length>3&&/[^aeiou]y$|e$/.test(e)&&(n=e.slice(0,-1));let o=/[^aeiou][aeiou][bdgmnprt]$/.test(e)?`${t(e.slice(-1))}?`:"";return new RegExp(`(?<![A-Za-z])(${t(n)}${o}[a-z]{0,4})(?![A-Za-z])`,"i")}function Kr(a,e){let t=vo(e).exec(a);return t?{before:a.slice(0,t.index),hidden:t[0],after:a.slice(t.index+t[0].length)}:null}var Pe=(a=new Date)=>`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,"0")}-${String(a.getDate()).padStart(2,"0")}`;function Zr(a,{newWords:e=0,reviewed:t=0,correct:r=0,seconds:n=0}={}){let o=Pe(),i=a[o]||{n:0,r:0,c:0};return{...a,[o]:{n:i.n+e,r:i.r+t,c:i.c+r,...n?{t:(i.t||0)+n}:i.t?{t:i.t}:{}}}}function za(a,e=Date.now()){return Object.entries(a.cards).filter(([,t])=>t.due<=e).sort((t,r)=>t[1].due-r[1].due).map(([t])=>t)}function Ma(a){return a.days[Pe()]?.n??0}function ko(a,e,t,r){let n=[],o=i=>{for(let s of a.words){if(n.length>=r)return;s.cefr<i||e.cards[s.id]||n.includes(s.id)||n.push(s.id)}};return o(t.startLevel||0),n.length<r&&o(0),n}function _a(a,e,t){let r=za(e).filter(o=>a.byId.has(o)),n=ko(a,e,t,Math.max(0,(t.dailyNew||10)-Ma(e)));return{due:r,fresh:n,minutes:Math.max(1,Math.round(r.length*.25+n.length*.9))}}function No(a,e,t,r){let n=e.cards[a.id],o=!!(a.media&oe.img),i=Ie(a.id+r)%100;return!n||n.s<2?o&&i<45?"picture":i<80?"meaning":"listen":t.spell&&(n.s>=4||i<35)?i<75?"spell":o?"picture":"listen":i<50?"listen":o?"picture":"meaning"}function et(a,e,t,r){let n=Ra(e.word),o=e.zh.replace(/^[a-z.]+\s*/,"").split(/[；;，,]/)[0],i=[],s=Math.max(0,e.order-400);for(let p=s;p<Math.min(a.words.length,e.order+400);p+=1){let d=a.words[p];if(d.id===e.id||Ra(d.word)===n||o&&d.zh.includes(o))continue;let c=Ie(d.id+r)%100;t==="listen"||t==="picture"?(d.word[0]?.toLowerCase()===n[0]&&(c+=120),c+=Math.max(0,60-Math.abs(d.word.length-n.length)*20)):(d.cefr===e.cefr&&(c+=40),d.zh.split(" ")[0]===e.zh.split(" ")[0]&&(c+=60)),i.push([c,d])}i.sort((p,d)=>d[0]-p[0]);let l=new Set,f=[];for(let[,p]of i){let d=t==="meaning"?p.zh:Ra(p.word);if(!l.has(d)&&(l.add(d),f.push(p.id),f.length===3))break}return Na([e.id,...f],r)}function la(a,e,t,r={}){let n=Date.now(),o=_a(a,e,t),i=r.ids?r.ids.filter(p=>e.cards[p]):o.due.slice(0,120),s=r.ids?r.ids.filter(p=>!e.cards[p]):r.reviewOnly?[]:o.fresh,l=[],f=(p,d)=>{let c=a.byId.get(p),u=No(c,e,t,n+d);return{id:p,kind:u,options:u==="spell"?void 0:et(a,c,u,n+d)}};i.forEach((p,d)=>l.push(f(p,d)));for(let p=0;p<s.length;p+=5){let d=s.slice(p,p+5);d.forEach(c=>l.push({id:c,kind:"intro"})),Na(d,n+p).forEach((c,u)=>l.push(f(c,1e3+p+u)))}return{id:`s${n}`,started:n,steps:l,index:0,graded:{},newIds:s,reviewIds:i}}function at(a,e,t,r){if(!e)return D.Again;if(r)return D.Hard;let n=a==="spell"?2e4:9e3,o=a==="spell"?6e3:2500;return t>n?D.Hard:t<o&&a==="spell"?D.Easy:D.Good}function tt(a,e,t,r,n,o,i){let s=a.session;if(!s)return a;let l={...a,session:{...s,pending:{correct:r,value:o}}};if(!(t.id in s.graded)&&!t.retry&&(l={...l,cards:{...l.cards,[t.id]:Ja(a.cards[t.id],n,Date.now(),i.retention)},session:{...l.session,graded:{...s.graded,[t.id]:n}},mistakes:r?l.mistakes:[t.id,...l.mistakes.filter(p=>p!==t.id)].slice(0,300)},l={...l,days:Zr(l.days,{reviewed:1,correct:r?1:0,newWords:s.newIds.includes(t.id)?1:0})}),!r){let p=[...l.session.steps];if(p.filter(c=>c.id===t.id&&c.retry).length<2){let c=e.byId.get(t.id),u=t.kind==="meaning"?c.media&oe.img?"picture":"listen":"meaning",x=Math.min(p.length,s.index+4);p.splice(x,0,{id:t.id,kind:u,retry:!0,options:et(e,c,u,Date.now())}),l={...l,session:{...l.session,steps:p}}}}return l}function Sa(a,e){let t=a.session;if(!t)return a;let r=t.index+1,n=r>=t.steps.length?Date.now():void 0;return{...a,days:Zr(a.days,{seconds:Math.max(0,Math.min(90,Math.round(e)))}),session:{...t,index:r,pending:void 0,finished:n}}}function rt(a){let e=Object.values(a.graded),t=e.filter(r=>r!==D.Again).length;return{total:e.length,correct:t,accuracy:e.length?Math.round(t/e.length*100):0}}var A=he(require("react"),1);var ke=he(require("react"),1);var V=he(require("react"),1);var ae=he(require("react"),1);var Vr={search:'<path d="m21 21-4.34-4.34" /> <circle cx="11" cy="11" r="8" />',star:'<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />',sparkle:'<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" /> <path d="M20 2v4" /> <path d="M22 4h-4" /> <circle cx="4" cy="20" r="2" />',heart:'<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />',volume:'<path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" /> <path d="M16 9a5 5 0 0 1 0 6" /> <path d="M19.364 18.364a9 9 0 0 0 0-12.728" />',close:'<path d="M18 6 6 18" /> <path d="m6 6 12 12" />',chevronLeft:'<path d="m15 18-6-6 6-6" />',chevronRight:'<path d="m9 18 6-6-6-6" />',book:'<path d="M12 5v16" /> <path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z" />',layers:'<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" /> <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" /> <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" />',refresh:'<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /> <path d="M21 3v5h-5" /> <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" /> <path d="M8 16H3v5" />',check:'<path d="M20 6 9 17l-5-5" />',info:'<circle cx="12" cy="12" r="10" /> <path d="M12 16v-4" /> <path d="M12 8h.01" />',play:'<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />',pause:'<rect x="14" y="3" width="5" height="18" rx="1" /> <rect x="5" y="3" width="5" height="18" rx="1" />',user:'<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /> <circle cx="12" cy="7" r="4" />',globe:'<circle cx="12" cy="12" r="10" /> <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /> <path d="M2 12h20" />',keyboard:'<path d="M10 8h.01" /> <path d="M12 12h.01" /> <path d="M14 8h.01" /> <path d="M16 12h.01" /> <path d="M18 8h.01" /> <path d="M6 8h.01" /> <path d="M7 16h10" /> <path d="M8 12h.01" /> <rect width="20" height="16" x="2" y="4" rx="2" />',headphones:'<path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />',type:'<path d="M12 4v16" /> <path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2" /> <path d="M9 20h6" />',rotateCcw:'<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /> <path d="M3 3v5h5" />',orbit:'<path d="M20.341 6.484A10 10 0 0 1 10.266 21.85" /> <path d="M3.659 17.516A10 10 0 0 1 13.74 2.152" /> <circle cx="12" cy="12" r="3" /> <circle cx="19" cy="5" r="2" /> <circle cx="5" cy="19" r="2" />',share:'<circle cx="18" cy="5" r="3" /> <circle cx="6" cy="12" r="3" /> <circle cx="18" cy="19" r="3" /> <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" /> <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />',plus:'<path d="M5 12h14" /> <path d="M12 5v14" />',minus:'<path d="M5 12h14" />',crosshair:'<circle cx="12" cy="12" r="10" /> <line x1="22" x2="18" y1="12" y2="12" /> <line x1="6" x2="2" y1="12" y2="12" /> <line x1="12" x2="12" y1="6" y2="2" /> <line x1="12" x2="12" y1="22" y2="18" />',command:'<path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />',arrowRight:'<path d="M5 12h14" /> <path d="m12 5 7 7-7 7" />',library:'<path d="m16 6 4 14" /> <path d="M12 6v14" /> <path d="M8 8v12" /> <path d="M4 4v16" />',clock:'<circle cx="12" cy="12" r="10" /> <path d="M12 6v6l4 2" />',languages:'<path d="m5 8 6 6" /> <path d="m4 14 6-6 2-3" /> <path d="M2 5h12" /> <path d="M7 2h1" /> <path d="m22 22-5-10-5 10" /> <path d="M14 18h6" />',bookmark:'<path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" />',settings:'<path d="M14 17H5" /> <path d="M19 7h-9" /> <circle cx="17" cy="17" r="3" /> <circle cx="7" cy="7" r="3" />',chevronDown:'<path d="m6 9 6 6 6-6" />',alignLeft:'<path d="M21 5H3" /> <path d="M15 12H3" /> <path d="M17 19H3" />'};function E({name:a,size:e=18,filled:t=!1,className:r="",...n}){let o=Vr[a];return o?ae.default.createElement("svg",{viewBox:"0 0 24 24",width:e,height:e,fill:t?"currentColor":"none",stroke:"currentColor",strokeWidth:t?0:1.7,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",className:r,dangerouslySetInnerHTML:{__html:o},...n}):null}function ge({id:a,word:e,full:t=!1,className:r="",alt:n}){let[o,i]=(0,ae.useState)(!1),s=t?mr(a):wr(a);return o?ae.default.createElement("div",{className:`wa-img-fallback ${r}`,role:"img","aria-label":n||e},ae.default.createElement("span",null,(e||"?").slice(0,1).toUpperCase())):ae.default.createElement("img",{className:r,src:s,alt:n||`${e} \u63D2\u753B`,loading:"lazy",decoding:"async",draggable:!1,onError:()=>i(!0)})}var Je=null,Ca=null,Xt=new Set;function Yr(){for(let a of Xt)a()}function da(){Je&&(Je.pause(),Je=null),Ca=null,Yr()}function Ze(a,e){if(Ca===a){da();return}da();let t=new Audio(e);Je=t,Ca=a,Yr(),t.onended=()=>{Je===t&&da()},t.onerror=()=>{Je===t&&da()},t.play().catch(()=>{Je===t&&da()})}function Be(){da()}function zo(){let[a,e]=(0,ae.useState)(Ca);return(0,ae.useEffect)(()=>{let t=()=>e(Ca);return Xt.add(t),()=>Xt.delete(t)},[]),a}function ve({audioKey:a,url:e,label:t,size:r=16,className:n="",title:o}){let i=zo()===a;return ae.default.createElement("button",{type:"button",className:`wa-audio-btn ${i?"is-playing":""} ${n}`,onClick:()=>Ze(a,e),"aria-label":o||(i?"\u505C\u6B62\u64AD\u653E":`\u64AD\u653E${t||""}`),title:o||t||"\u64AD\u653E\u53D1\u97F3"},ae.default.createElement(E,{name:i?"pause":"volume",size:r}),t?ae.default.createElement("span",null,t):null)}function Xr({onClose:a,children:e,labelledBy:t}){let r=(0,ae.useRef)(null);return(0,ae.useEffect)(()=>{let n=o=>{o.key==="Escape"&&(o.stopPropagation(),a())};return window.addEventListener("keydown",n),()=>window.removeEventListener("keydown",n)},[a]),ae.default.createElement("div",{className:"wa-overlay",ref:r,role:"dialog","aria-modal":"true","aria-labelledby":t,onMouseDown:n=>{n.target===r.current&&a()}},e)}function xe({label:a="\u52A0\u8F7D\u4E2D\u2026"}){return ae.default.createElement("div",{className:"wa-loading",role:"status"},ae.default.createElement("span",{className:"wa-spinner","aria-hidden":"true"}),ae.default.createElement("span",null,a))}function Ae({icon:a="sparkle",title:e,children:t}){return ae.default.createElement("div",{className:"wa-empty"},ae.default.createElement("span",{className:"wa-empty-icon"},ae.default.createElement(E,{name:a,size:26})),ae.default.createElement("h3",null,e),t?ae.default.createElement("div",{className:"wa-empty-body"},t):null)}function pa({level:a}){return ae.default.createElement("span",{className:`wa-cefr wa-cefr-${a}`},a)}function Jr(a){let e=a.includes("\uFF5C")?"\uFF5C":a.includes("|")?"|":"";if(!e)return{en:a,zh:""};let t=a.indexOf(e);return{en:a.slice(0,t).trim(),zh:a.slice(t+1).trim()}}function nt({atlas:a,progress:e,refId:t,surface:r,anchor:n,onClose:o,onOpenWord:i}){let s=(0,V.useRef)(null),[l,f]=(0,V.useState)({status:t?"loading":"missing",entry:null,error:""}),[p,d]=(0,V.useState)({left:16,top:16}),c=r||t||"",u=Array.isArray(e?.bookmarks)?e.bookmarks:[],x=!!(t&&u.includes(t));(0,V.useEffect)(()=>{if(!t){f({status:"missing",entry:null,error:""});return}let T=!0;return f({status:"loading",entry:null,error:""}),Te(a,t).then(m=>T&&f({status:"ready",entry:m,error:""})).catch(m=>T&&f({status:"error",entry:null,error:m.message||"\u67E5\u4E0D\u5230\u8FD9\u4E2A\u8BCD\u3002"})),()=>{T=!1}},[a,t]),(0,V.useLayoutEffect)(()=>{let T=()=>{let v=s.current;if(!v||!n)return;let z=v.offsetWidth||380,y=v.offsetHeight||280,N=window.innerHeight-n.bottom>=y+16||n.top<y+16?n.bottom+8:Math.max(16,n.top-y-8),F=Math.max(12,Math.min(window.innerWidth-z-12,n.left+n.width/2-z/2));d({left:F,top:Math.min(N,window.innerHeight-y-12)})};T();let m=typeof ResizeObserver=="function"?new ResizeObserver(T):null;return s.current&&m?.observe(s.current),window.addEventListener("resize",T),()=>{m?.disconnect(),window.removeEventListener("resize",T)}},[n,c,t,l.status]),(0,V.useEffect)(()=>{let T=v=>{s.current?.contains(v.target)||v.target instanceof Element&&v.target.closest("[data-wa-lookup-token]")||o()},m=v=>{v.key==="Escape"&&(v.stopImmediatePropagation(),o())};return document.addEventListener("pointerdown",T,!0),window.addEventListener("keydown",m,!0),()=>{document.removeEventListener("pointerdown",T,!0),window.removeEventListener("keydown",m,!0)}},[o]);let L=()=>{t&&re(T=>{let m=Array.isArray(T.bookmarks)?T.bookmarks:[],v=m.includes(t);return{...T,bookmarks:v?m.filter(z=>z!==t):[...m,t]}})},j=l.entry;return V.default.createElement("div",{ref:s,className:"wa-wlc",style:{left:p.left,top:p.top},role:"dialog","aria-modal":"false","aria-label":`\u67E5\u8BCD\uFF1A${j?.w||c}`},V.default.createElement("button",{type:"button",className:"wa-icon-btn wa-wlc-close",onClick:o,"aria-label":"\u5173\u95ED\u67E5\u8BCD"},V.default.createElement(E,{name:"close",size:17})),l.status==="missing"||l.status==="error"?V.default.createElement(V.default.Fragment,null,V.default.createElement("h2",{className:"wa-wlc-word",lang:"en"},c),V.default.createElement("p",{className:"wa-wlc-empty"},l.status==="error"?l.error:"\u8BCD\u5E93\u6682\u672A\u6536\u5F55\u8FD9\u4E2A\u8BCD\u3002")):null,l.status==="loading"?V.default.createElement(xe,{label:"\u6B63\u5728\u67E5\u8BCD\u2026"}):null,j?V.default.createElement(V.default.Fragment,null,V.default.createElement("h2",{className:"wa-wlc-word",lang:"en"},j.w),V.default.createElement("div",{className:"wa-wlc-pron"},j.uk||j.us?V.default.createElement("span",{className:"wa-wlc-ipa"},j.uk||j.us):null,de(j,oe.uk)?V.default.createElement(ve,{audioKey:`wlc:uk:${j.id}`,url:le("uk",j.id),label:"\u82F1",size:14}):null,de(j,oe.us)?V.default.createElement(ve,{audioKey:`wlc:us:${j.id}`,url:le("us",j.id),label:"\u7F8E",size:14}):null),V.default.createElement("div",{className:"wa-wlc-senses"},(j.senses||[]).slice(0,3).map((T,m)=>V.default.createElement("p",{key:m,className:"wa-wlc-sense"},T.pos?V.default.createElement("span",{className:"wa-wlc-pos"},T.pos):null,V.default.createElement("span",null,T.zh)))),V.default.createElement("div",{className:"wa-wlc-actions"},V.default.createElement("button",{type:"button",className:`wa-btn wa-btn-ghost wa-wlc-fav ${x?"is-on":""}`,onClick:L},V.default.createElement(E,{name:"heart",size:16,filled:x})," ",x?"\u5DF2\u6536\u85CF":"\u6536\u85CF"),V.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary",onClick:()=>{o(),i(j.id)}},"\u67E5\u770B\u8BCD\u5361 ",V.default.createElement(E,{name:"chevronRight",size:16})))):null)}var Mo=/[A-Za-z]+(?:['’][A-Za-z]+)*/g,_o=/^[,.;:!?…’”»)\]]+/,Jt="word-atlas:lookup-open";function So(a,e){if(!e)return!1;let t=a.toLowerCase(),r=e.toLowerCase();return t===r||t.startsWith(r)}function We({atlas:a,progress:e,text:t,headword:r,onOpenWord:n,className:o=""}){let i=Qa(a),[s,l]=(0,ke.useState)(null);(0,ke.useEffect)(()=>{if(!s)return;let p=()=>l(null);return window.addEventListener(Jt,p),()=>window.removeEventListener(Jt,p)},[s]);let f=(0,ke.useMemo)(()=>{let p=[],d=0;for(let c of t.matchAll(Mo)){let u=c.index??0;u>d&&p.push(t.slice(d,u));let x=c[0],L=i.resolve(x),j=So(x,r),T=ke.default.createElement("button",{type:"button",className:"wa-lookup-token","data-wa-lookup-token":"","aria-label":`\u67E5\u8BCD\uFF1A${x}`,"aria-haspopup":"dialog",onClick:v=>{v.stopPropagation(),window.dispatchEvent(new Event(Jt));let z=v.currentTarget.getBoundingClientRect();l({token:x,refId:L,anchor:{left:z.left,top:z.top,width:z.width,height:z.height,bottom:z.bottom}})},onKeyDown:v=>{(v.key==="Enter"||v.key===" ")&&v.stopPropagation()}},x);p.push(j?ke.default.createElement("mark",{key:`mark-${u}`},T):ke.default.createElement(ke.default.Fragment,{key:u},T)),d=u+x.length;let m=t.slice(d).match(_o)?.[0]??"";m&&(p.push(ke.default.createElement("span",{key:`glue-${u}`},m)),d+=m.length)}return d<t.length&&p.push(t.slice(d)),p},[t,r,i]);return ke.default.createElement("span",{className:`wa-lookup-text ${o}`},f,s?ke.default.createElement(nt,{atlas:a,progress:e,refId:s.refId,surface:s.token,anchor:s.anchor,onClose:()=>l(null),onOpenWord:p=>{l(null),n(p)}}):null)}function ot({atlas:a,word:e,progress:t,onClose:r,onPrev:n,onNext:o,hasPrev:i,hasNext:s,onOpenWord:l,onToggleBookmark:f,onMarkLearned:p,onBack:d,backLabel:c}){let[u,x]=(0,A.useState)(null),[L,j]=(0,A.useState)(""),T=t.settings.accent,m=t.cards[e.id],v=t.bookmarks.includes(e.id);(0,A.useEffect)(()=>{let y=!0;return x(null),j(""),Te(a,e.id).then(w=>{y&&x(w)}).catch(w=>{y&&j(w.message||"\u8BCD\u6761\u52A0\u8F7D\u5931\u8D25")}),()=>{y=!1,Be()}},[a,e.id]),(0,A.useEffect)(()=>{let y=w=>{w.key==="ArrowLeft"&&i?(w.preventDefault(),n()):w.key==="ArrowRight"&&s&&(w.preventDefault(),o())};return window.addEventListener("keydown",y),()=>window.removeEventListener("keydown",y)},[i,s,n,o]);let z=a.topics.find(y=>y.slug===e.topic)?.zh||e.topicZh;return A.default.createElement(Xr,{onClose:r,labelledBy:"wa-detail-title"},A.default.createElement("div",{className:"wa-detail",role:"document"},A.default.createElement("div",{className:"wa-detail-art"},A.default.createElement(ge,{id:e.id,word:e.word,full:!0,className:"wa-detail-img",alt:`${e.word} \u63D2\u753B`}),A.default.createElement("div",{className:"wa-detail-art-meta"},A.default.createElement("span",{className:"wa-specimen"},"\u2116 ",String(e.order+1).padStart(4,"0")," ",A.default.createElement("i",null)," Word Atlas"),m?A.default.createElement("span",{className:"wa-memory-inline"},Ur(m)?"\u5F85\u590D\u4E60":`\u4E0B\u6B21\u590D\u4E60 ${Gr(m.due-Date.now())}\u540E`):null)),A.default.createElement("div",{className:"wa-detail-body"},A.default.createElement("button",{type:"button",className:"wa-icon-btn wa-detail-close",onClick:r,"aria-label":"\u5173\u95ED\u8BCD\u6761"},A.default.createElement(E,{name:"close",size:18})),A.default.createElement("header",{className:"wa-detail-head"},d?A.default.createElement("button",{type:"button",className:"wa-icon-btn wa-back-btn",onClick:d,"aria-label":c?`\u8FD4\u56DE ${c}`:"\u8FD4\u56DE\u4E0A\u4E00\u4E2A\u8BCD",title:c?`\u8FD4\u56DE ${c}`:"\u8FD4\u56DE\u4E0A\u4E00\u4E2A\u8BCD"},A.default.createElement(E,{name:"chevronLeft",size:18})):null,A.default.createElement("div",{className:"wa-tags"},A.default.createElement(pa,{level:e.cefr}),z?A.default.createElement("span",{className:"wa-chip"},z):null,m?A.default.createElement("span",{className:`wa-chip wa-chip-status ${m.st===2?"is-done":""}`},m.st===2?"\u590D\u4E60\u4E2D":"\u5B66\u4E60\u4E2D"):null)),A.default.createElement("h2",{id:"wa-detail-title",className:"wa-headword",lang:"en"},e.word),!u&&!L?A.default.createElement(xe,{label:"\u52A0\u8F7D\u8BCD\u6761\u2026"}):null,L?A.default.createElement("p",{className:"wa-error"},L):null,u?A.default.createElement(A.default.Fragment,null,A.default.createElement("div",{className:"wa-detail-scroll"},A.default.createElement("div",{className:"wa-pron"},u.uk?A.default.createElement("div",{className:"wa-pron-row"},A.default.createElement("span",{className:"wa-pron-label"},"\u82F1"),A.default.createElement("span",{className:"wa-ipa"},u.uk),de(u,oe.uk)?A.default.createElement(ve,{audioKey:`uk:${e.id}`,url:le("uk",e.id),label:"\u53D1\u97F3"}):null):null,u.us?A.default.createElement("div",{className:"wa-pron-row"},A.default.createElement("span",{className:"wa-pron-label"},"\u7F8E"),A.default.createElement("span",{className:"wa-ipa"},u.us),de(u,oe.us)?A.default.createElement(ve,{audioKey:`us:${e.id}`,url:le("us",e.id),label:"\u53D1\u97F3"}):null):null,!u.uk&&!u.us?A.default.createElement("span",{className:"wa-ipa"},e.ipa):null,T==="us"&&u.us?A.default.createElement("span",{className:"wa-hint"},"\u9ED8\u8BA4\u7F8E\u97F3"):null),A.default.createElement("ol",{className:"wa-senses"},(u.senses||[]).map((y,w)=>A.default.createElement("li",{key:w},y.pos?A.default.createElement("span",{className:"wa-pos"},y.pos):null,A.default.createElement("span",{className:"wa-zh"},y.zh),y.en?A.default.createElement("span",{className:"wa-en",lang:"en"},y.en):null))),(u.ex||[]).length>0?A.default.createElement("section",{className:"wa-block"},A.default.createElement("h3",{className:"wa-eyebrow"},"\u4F8B\u53E5"),A.default.createElement("ul",{className:"wa-examples"},u.ex.map((y,w)=>{let N=w===0?"ex":"ex2",F=de(u,oe[N]);return A.default.createElement("li",{key:w},u.ex.length>1?A.default.createElement("span",{className:`wa-ex-tag ${w?"is-ielts":""}`},w?"\u96C5\u601D\u8BED\u5883":"\u65E5\u5E38"):null,A.default.createElement("p",{className:"wa-ex-en",lang:"en"},A.default.createElement(We,{atlas:a,progress:t,text:y.en,headword:e.word,onOpenWord:l}),F?A.default.createElement(ve,{audioKey:`${N}:${e.id}`,url:le(N,e.id),size:14,className:"wa-ex-speak",title:"\u64AD\u653E\u4F8B\u53E5\u6717\u8BFB"}):null),A.default.createElement("p",{className:"wa-ex-zh"},y.zh))}))):null,(u.col||[]).length>0?A.default.createElement("section",{className:"wa-block"},A.default.createElement("h3",{className:"wa-eyebrow"},"\u5E38\u7528\u642D\u914D"),A.default.createElement("ul",{className:"wa-collocations"},u.col.map(y=>{let w=Jr(y);return A.default.createElement("li",{key:y},A.default.createElement("span",{lang:"en"},w.en),w.zh?A.default.createElement("small",null,w.zh):null)}))):null,(u.fam||[]).length>0||(u.syn||[]).length>0||(u.ant||[]).length>0?A.default.createElement("section",{className:"wa-block wa-relations"},(u.fam||[]).length>0?A.default.createElement("div",null,A.default.createElement("h3",{className:"wa-eyebrow"},"\u8BCD\u65CF"),A.default.createElement("p",null,u.fam.map(y=>{let w=y.replace(/\s*\(.*\)\s*$/,"").trim().toLowerCase(),N=a.words.find(F=>F.word.toLowerCase()===w);return N?A.default.createElement("button",{key:y,type:"button",className:"wa-link",onClick:()=>l(N.id)},y):A.default.createElement("span",{key:y},y)}))):null,(u.syn||[]).length>0?A.default.createElement("div",null,A.default.createElement("h3",{className:"wa-eyebrow"},"\u8FD1\u4E49"),A.default.createElement("p",null,u.syn.map(y=>A.default.createElement("span",{key:y},y)))):null,(u.ant||[]).length>0?A.default.createElement("div",null,A.default.createElement("h3",{className:"wa-eyebrow"},"\u53CD\u4E49"),A.default.createElement("p",null,u.ant.map(y=>A.default.createElement("span",{key:y},y)))):null):null,u.tip?A.default.createElement("aside",{className:"wa-tip"},A.default.createElement(E,{name:"sparkle",size:17}),A.default.createElement("p",null,u.tip)):null,u.note?A.default.createElement("p",{className:"wa-usage-note"},"\u7528\u6CD5\u63D0\u9192\uFF1A",u.note):null),A.default.createElement("div",{className:"wa-detail-footer"},A.default.createElement("div",{className:"wa-detail-memory"},m?A.default.createElement(A.default.Fragment,null,A.default.createElement("span",null,"\u8BB0\u5FC6\u7A33\u5B9A\u5EA6 ",m.s<1?"<1":Math.round(m.s)," \u5929"),A.default.createElement("span",null,"\u5DF2\u590D\u4E60 ",m.reps," \u6B21")):A.default.createElement("span",null,"\u8FD8\u6CA1\u5B66\u8FC7\u8FD9\u4E2A\u8BCD")),A.default.createElement("div",{className:"wa-detail-actions"},A.default.createElement("button",{type:"button",className:`wa-btn wa-btn-ghost ${v?"is-on":""}`,onClick:()=>f(e.id),"aria-pressed":v},A.default.createElement(E,{name:"heart",size:15,filled:v})," ",v?"\u5DF2\u6536\u85CF":"\u6536\u85CF"),A.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:()=>p(e.id),disabled:!!m},A.default.createElement(E,{name:"check",size:15})," ",m?"\u5DF2\u5728\u590D\u4E60\u4E2D":"\u6807\u8BB0\u4E3A\u5DF2\u5B66"),A.default.createElement("div",{className:"wa-detail-nav"},A.default.createElement("button",{type:"button",className:"wa-icon-btn",onClick:n,disabled:!i,"aria-label":"\u4E0A\u4E00\u4E2A\u8BCD"},A.default.createElement(E,{name:"chevronLeft",size:18})),A.default.createElement("button",{type:"button",className:"wa-icon-btn",onClick:o,disabled:!s,"aria-label":"\u4E0B\u4E00\u4E2A\u8BCD"},A.default.createElement(E,{name:"chevronRight",size:18})))))):null)))}var R=he(require("react"),1);var it=96;function Co({atlas:a,word:e,progress:t,onOpen:r,onToggleBookmark:n}){let o=t.cards[e.id],i=t.bookmarks.includes(e.id),s=a.topics.find(l=>l.slug===e.topic)?.zh||e.topicZh;return R.default.createElement("article",{className:`wa-card ${o?"is-learned":""}`},R.default.createElement("div",{className:"wa-card-hit",role:"button",tabIndex:0,onClick:()=>r(e.id),onKeyDown:l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),r(e.id))},"aria-label":`\u67E5\u770B ${e.word}`},R.default.createElement("div",{className:"wa-card-art"},R.default.createElement(ge,{id:e.id,word:e.word}),o?R.default.createElement("span",{className:"wa-card-dot",title:"\u5DF2\u5728\u590D\u4E60\u4E2D"}):null),R.default.createElement("div",{className:"wa-card-body"},R.default.createElement("div",{className:"wa-card-title"},R.default.createElement("h3",{lang:"en"},e.word),R.default.createElement(pa,{level:e.cefr})),R.default.createElement("p",{className:"wa-card-ipa"},e.ipa),R.default.createElement("p",{className:"wa-card-zh"},e.zh),R.default.createElement("p",{className:"wa-card-topic"},s))),R.default.createElement("button",{type:"button",className:`wa-card-heart ${i?"is-on":""}`,onClick:l=>{l.stopPropagation(),n(e.id)},"aria-pressed":i,"aria-label":i?"\u53D6\u6D88\u6536\u85CF":"\u6536\u85CF",title:i?"\u53D6\u6D88\u6536\u85CF":"\u6536\u85CF"},R.default.createElement(E,{name:"heart",size:16,filled:i})))}function Aa({atlas:a,words:e,progress:t,onOpen:r,onToggleBookmark:n}){let[o,i]=(0,R.useState)(it),s=(0,R.useRef)(null);(0,R.useEffect)(()=>{i(it)},[e]),(0,R.useEffect)(()=>{let f=s.current;if(!f||o>=e.length)return;let p=new IntersectionObserver(d=>{d.some(c=>c.isIntersecting)&&i(c=>Math.min(c+it,e.length))},{rootMargin:"600px 0px"});return p.observe(f),()=>p.disconnect()},[o,e.length]);let l=e.slice(0,o);return R.default.createElement("div",{className:"wa-grid-wrap"},R.default.createElement("p",{className:"wa-grid-count"},"\u5171 ",e.length.toLocaleString("en-US")," \u4E2A\u8BCD",o<e.length?` \xB7 \u5DF2\u663E\u793A ${o}`:""),R.default.createElement("div",{className:"wa-grid"},l.map(f=>R.default.createElement(Co,{key:f.id,atlas:a,word:f,progress:t,onOpen:r,onToggleBookmark:n}))),o<e.length?R.default.createElement("div",{ref:s,className:"wa-more"},R.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:()=>i(f=>f+it)},"\u52A0\u8F7D\u66F4\u591A\uFF08\u5269\u4F59 ",(e.length-o).toLocaleString("en-US"),"\uFF09")):null)}var P=he(require("react"),1);var Ao=120,Lo=20;function st({atlas:a,progress:e,onStart:t=()=>{},onFreeReview:r=()=>{},onResume:n=()=>{},onGoToday:o=()=>{}}){let i=(0,P.useMemo)(()=>{let L=za(e).filter(v=>a.byId.has(v)),j=new Set(L),T=Object.keys(e.cards).filter(v=>a.byId.has(v)),m=T.filter(v=>!j.has(v));return{due:L.length,learned:T.length,mastered:Object.values(e.cards).filter(Fe).length,reviewedToday:e.days?.[Pe()]?.r??0,freeCount:Math.min(m.length,Lo)}},[a,e]),s=Math.min(i.due,Ao),l=Math.max(1,Math.round(s*.25)),f=e.session&&!e.session.finished?e.session:null,p=!!(f&&f.mode==="review"),d=!!(f&&f.mode!=="review"),c=f?Math.min(f.index+1,f.steps.length):0,u=f?.steps.length??0,x=L=>{re(j=>({...j,settings:{...j.settings,retention:L}}))};return P.default.createElement("div",{className:"wa-review-intro"},P.default.createElement("div",{className:"wa-review-hero"},P.default.createElement("h2",null,"\u4ECA\u65E5\u590D\u4E60"),P.default.createElement("p",null,"\u5230\u671F\u8BCD\u4F1A\u5148\u51FA\u9898\uFF0C\u7B54\u5B8C\u81EA\u52A8\u5B89\u6392\u4E0B\u6B21\u590D\u4E60\u3002")),P.default.createElement("div",{className:"wa-review-stats"},P.default.createElement("div",{className:"wa-stat"},P.default.createElement("strong",null,i.due),P.default.createElement("span",null,"\u5230\u671F\u590D\u4E60")),P.default.createElement("div",{className:"wa-stat"},P.default.createElement("strong",null,i.reviewedToday),P.default.createElement("span",null,"\u4ECA\u65E5\u5DF2\u590D\u4E60")),P.default.createElement("div",{className:"wa-stat"},P.default.createElement("strong",null,i.learned.toLocaleString("en-US")),P.default.createElement("span",null,"\u5DF2\u5B66\u8BCD")),P.default.createElement("div",{className:"wa-stat"},P.default.createElement("strong",null,i.mastered.toLocaleString("en-US")),P.default.createElement("span",null,"\u5DF2\u638C\u63E1"))),P.default.createElement("div",{className:"wa-review-action"},p?P.default.createElement(P.default.Fragment,null,P.default.createElement("p",{className:"wa-review-action-title"},"\u590D\u4E60\u8FDB\u884C\u4E2D \xB7 ",c," / ",u),P.default.createElement("p",{className:"wa-review-action-note"},"\u4E0A\u6B21\u590D\u4E60\u8FD8\u6CA1\u7ED3\u675F\uFF0C\u7EE7\u7EED\u5B8C\u6210\u5B83\u3002"),P.default.createElement("div",{className:"wa-review-actions"},P.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary wa-btn-lg",onClick:n},"\u7EE7\u7EED\u590D\u4E60 ",P.default.createElement(E,{name:"chevronRight",size:17})))):d?P.default.createElement(P.default.Fragment,null,P.default.createElement("p",{className:"wa-review-action-title"},"\u5F53\u524D\u5B66\u4E60\u8FDB\u884C\u4E2D \xB7 ",c," / ",u),P.default.createElement("p",{className:"wa-review-action-note"},"\u5B8C\u6210\u5F53\u524D\u5B66\u4E60\u540E\uFF0C\u518D\u56DE\u6765\u590D\u4E60\u8FD9 ",s," \u4E2A\u5230\u671F\u8BCD\u3002"),P.default.createElement("div",{className:"wa-review-actions"},P.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary wa-btn-lg",onClick:n},"\u7EE7\u7EED\u5F53\u524D\u5B66\u4E60 ",P.default.createElement(E,{name:"chevronRight",size:17})),P.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:o},"\u8FD4\u56DE\u4ECA\u65E5"))):s>0?P.default.createElement(P.default.Fragment,null,P.default.createElement("p",{className:"wa-review-action-title"},s," \u4E2A\u5230\u671F\u8BCD \xB7 \u9884\u8BA1 ",l," \u5206\u949F"),P.default.createElement("p",{className:"wa-review-action-note"},"\u5148\u56DE\u5FC6\uFF0C\u518D\u63ED\u6653\u7B54\u6848\uFF1B\u7B54\u5B8C\u81EA\u52A8\u8BB0\u5F55 FSRS \u8BC4\u5206\u3002"),P.default.createElement("div",{className:"wa-review-actions"},P.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary wa-btn-lg",onClick:t},"\u5F00\u59CB\u590D\u4E60 ",P.default.createElement(E,{name:"chevronRight",size:17})),i.freeCount>0?P.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:r},"\u81EA\u7531\u590D\u4E60\u5DF2\u5B66\u8BCD\uFF08",i.freeCount,"\uFF09"):null),i.freeCount>0?P.default.createElement("p",{className:"wa-review-action-note"},"\u81EA\u7531\u590D\u4E60\u4F1A\u63D0\u524D\u590D\u4E60\u672A\u5230\u671F\u8BCD\uFF0C\u5E76\u6309\u7B54\u9898\u7ED3\u679C\u66F4\u65B0 FSRS \u6392\u671F\u3002"):null):i.freeCount>0?P.default.createElement(P.default.Fragment,null,P.default.createElement("p",{className:"wa-review-action-title"},"\u4ECA\u5929\u6CA1\u6709\u5230\u671F\u8BCD"),P.default.createElement("p",{className:"wa-review-action-note"},"\u53EF\u4EE5\u81EA\u7531\u590D\u4E60\u5B66\u8FC7\u7684\u8BCD\uFF0C\u6216\u53BB\u4ECA\u65E5\u8BA4\u8BC6\u51E0\u4E2A\u65B0\u8BCD\u3002"),P.default.createElement("div",{className:"wa-review-actions"},P.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary wa-btn-lg",onClick:r},"\u81EA\u7531\u590D\u4E60\u5DF2\u5B66\u8BCD\uFF08",i.freeCount,"\uFF09 ",P.default.createElement(E,{name:"chevronRight",size:17})),P.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:o},"\u53BB\u4ECA\u65E5\u5B66\u65B0\u8BCD")),P.default.createElement("p",{className:"wa-review-action-note"},"\u81EA\u7531\u590D\u4E60\u4F1A\u6309\u7B54\u9898\u7ED3\u679C\u66F4\u65B0 FSRS \u6392\u671F\u3002")):P.default.createElement(P.default.Fragment,null,P.default.createElement("p",{className:"wa-review-action-title"},"\u4ECA\u5929\u6CA1\u6709\u5230\u671F\u8BCD"),P.default.createElement("p",{className:"wa-review-action-note"},"\u8FD8\u6CA1\u6709\u5B66\u8FC7\u7684\u8BCD\uFF0C\u5148\u53BB\u4ECA\u65E5\u5F00\u59CB\u5B66\u4E60\u5427\u3002"),P.default.createElement("div",{className:"wa-review-actions"},P.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary wa-btn-lg",onClick:o},"\u53BB\u4ECA\u65E5\u5B66\u4E60 ",P.default.createElement(E,{name:"chevronRight",size:17}))))),P.default.createElement("div",{className:"wa-review-settings"},P.default.createElement("label",null,"\u76EE\u6807\u8BB0\u5FC6\u7387",P.default.createElement("select",{value:e.settings.retention,onChange:L=>x(Number(L.target.value))},[.8,.85,.9,.95].map(L=>P.default.createElement("option",{key:L,value:L},Math.round(L*100),"%"))))))}var k=he(require("react"),1);var lt=null,dt=new Map,pt=null,ct=new Map;async function ut(a){let e=await fetch(a,{headers:{Accept:"application/json"}});if(!e.ok){let t=await e.json().catch(()=>null);throw new Error(t?.error==="upstream-unavailable"?"\u6682\u65F6\u8FDE\u4E0D\u4E0A\u4E66\u623F\u5185\u5BB9\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u540E\u91CD\u8BD5\u3002":`\u4E66\u623F\u5185\u5BB9\u52A0\u8F7D\u5931\u8D25\uFF08${e.status}\uFF09\u3002`)}return e.json()}function wt(a=!1){return(!lt||a)&&(lt=ut(gr).catch(e=>{throw lt=null,e})),lt}function Qr(a){if(!/^[a-z0-9][a-z0-9-]*$/.test(String(a||"")))return Promise.reject(new Error("\u77ED\u6587\u7F16\u53F7\u65E0\u6548\u3002"));if(!dt.has(a)){let e=ut(fr(a)).catch(t=>{throw dt.delete(a),t});dt.set(a,e)}return dt.get(a)}function Rr(){return pt||(pt=ut(br).catch(a=>{throw pt=null,a})),pt}function en(a,e){let t=`${a}:${e}`;if(!ct.has(t)){let r=ut(hr(a,e)).catch(n=>{throw ct.delete(t),n});ct.set(t,r)}return ct.get(t)}var an=a=>ta(a);function La(a,e){return e.cefr[a.cefr]||"A1"}function $a(a,e){return e.topics.find(t=>t.slug===a.topic)?.zh||a.topic}function Ea(a,e){return(a||[]).filter(t=>!e[t]).length}function Qt(a,e){return!!a.readings?.[e]?.done}function tn(a,e,t){if(!Array.isArray(a)||a.length===0)return null;let r=e.settings.startLevel,n=a.filter(l=>l.cefr<=r+1&&l.cefr>=Math.max(0,r-1)),o=n.length?n:a,i=o.filter(l=>!Qt(e,l.id)),s=i.length?i:o;return s[Ie(Pe())%s.length]}function $o(a){return a<5?"\u591C\u6DF1\u4E86":a<11?"\u65E9\u4E0A\u597D":a<14?"\u4E2D\u5348\u597D":a<18?"\u4E0B\u5348\u597D":"\u665A\u4E0A\u597D"}var rn="\u65E5\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D",nn=["\u5165\u95E8","\u57FA\u7840","\u8FDB\u9636","\u4E2D\u9AD8","\u9AD8\u7EA7","\u7CBE\u901A"];function Eo({value:a,size:e=88,stroke:t=7,children:r}){let n=(e-t)/2,o=2*Math.PI*n,i=o*(1-Math.min(1,Math.max(0,a||0)));return k.default.createElement("div",{className:"wa-ring",style:{width:e,height:e}},k.default.createElement("svg",{width:e,height:e,viewBox:`0 0 ${e} ${e}`,"aria-hidden":"true"},k.default.createElement("circle",{className:"wa-ring-track",cx:e/2,cy:e/2,r:n,fill:"none",strokeWidth:t}),k.default.createElement("circle",{className:"wa-ring-fill",cx:e/2,cy:e/2,r:n,fill:"none",strokeWidth:t,strokeLinecap:"round",strokeDasharray:o,strokeDashoffset:i,transform:`rotate(-90 ${e/2} ${e/2})`})),k.default.createElement("div",{className:"wa-ring-label"},r))}function mt({atlas:a,progress:e,onStart:t,onOpenWord:r,onOpenLevel:n,onOpenTopic:o,onOpenReading:i}){let s=(0,k.useMemo)(()=>_a(a,e,e.settings),[a,e]),l=e.session&&!e.session.finished?e.session:null,f=e.days[Pe()],p=na(e.days),d=Object.keys(e.cards).length,c=Object.values(e.cards).filter(Fe).length,u=s.due.length+s.fresh.length,x=f?.r??0,L=e.settings.dailyNew+Math.min(s.due.length,60),j=new Date,T=Array.from({length:7},(S,H)=>{let K=new Date;K.setDate(K.getDate()-(6-H));let Y=Pe(K);return{key:Y,label:rn[K.getDay()],value:e.days[Y]?.r??0,today:H===6}}),m=Math.max(1,...T.map(S=>S.value)),v=(0,k.useMemo)(()=>{let S=a.cefr.map(K=>({name:K,total:0,seen:0,mastered:0})),H=new Map(a.cefr.map((K,Y)=>[K,Y]));for(let K of a.words){let Y=S[H.get(K.cefr)];if(!Y)continue;Y.total+=1;let ne=e.cards[K.id];ne&&(Y.seen+=1,Fe(ne)&&(Y.mastered+=1))}return S},[a,e.cards]),z=(0,k.useMemo)(()=>{let S=new Map(a.topics.map(H=>[H.slug,0]));for(let H of a.words)S.set(H.topic,(S.get(H.topic)||0)+1);return S},[a]),y=(l?l.newIds:s.fresh).slice(0,5).map(S=>a.byId.get(S)).filter(Boolean),w=(0,k.useMemo)(()=>{let S=a.words.filter(K=>K.media&1&&K.cefr>=2),H=S.length?S:a.words;return H[Ie(Pe())%H.length]},[a]),[N,F]=(0,k.useState)(null),[B,G]=(0,k.useState)(null);(0,k.useEffect)(()=>{let S=!0;if(w)return Te(a,w.id).then(H=>S&&F(H)).catch(()=>{}),()=>{S=!1}},[a,w?.id]),(0,k.useEffect)(()=>{let S=!0;return wt().then(H=>{if(!S)return;let K=tn(Array.isArray(H.items)?H.items:[],e,a);G(K||null)}).catch(()=>{}),()=>{S=!1}},[a,e.settings.startLevel,e.cards,e.readings]);let Q=e.settings.accent,se=de(w||{},oe[Q]);return k.default.createElement("div",{className:"wa-today"},k.default.createElement("header",{className:"wa-today-head"},k.default.createElement("p",{className:"wa-eyebrow"},j.getMonth()+1," \u6708 ",j.getDate()," \u65E5 \xB7 \u661F\u671F",rn[j.getDay()]),k.default.createElement("h1",null,$o(j.getHours()),"\uFF0C\u63A2\u7D22\u8005\u3002"),k.default.createElement("p",null,"\u4ECA\u5929\u5148\u6E29\u6545\uFF0C\u518D\u77E5\u65B0\u3002")),k.default.createElement("section",{className:"wa-today-hero"},k.default.createElement("img",{className:"wa-today-hero-art",src:xa("hero.webp"),alt:"",loading:"eager",onError:S=>{S.currentTarget.style.visibility="hidden"}}),k.default.createElement("div",{className:"wa-today-hero-shade","aria-hidden":"true"}),k.default.createElement("div",{className:"wa-today-hero-body"},k.default.createElement("p",{className:"wa-eyebrow"},"\u4ECA\u65E5\u5B66\u4E60"),l?k.default.createElement("h2",null,"\u8FD8\u5269 ",k.default.createElement("b",null,Math.max(0,l.steps.length-l.index))," \u6B65"):u>0?k.default.createElement("h2",null,"\u590D\u4E60 ",k.default.createElement("b",null,s.due.length)," \xB7 \u65B0\u8BCD ",k.default.createElement("b",null,s.fresh.length)):k.default.createElement("h2",null,"\u4ECA\u5929\u7684\u8BCD\u90FD\u7EC3\u5B8C\u4E86"),k.default.createElement("p",{className:"wa-today-hero-lede"},l?"\u8FDB\u5EA6\u5DF2\u4FDD\u5B58\uFF0C\u968F\u65F6\u63A5\u7740\u8D70\u3002":u>0?`\u9884\u8BA1 ${s.minutes} \u5206\u949F \xB7 \u5148\u6E29\u6545\uFF0C\u518D\u77E5\u65B0\u3002`:"\u60F3\u591A\u8D70\u4E00\u6BB5\uFF0C\u4E5F\u53EF\u4EE5\u3002"),k.default.createElement("div",{className:"wa-today-hero-actions"},l||u>0?k.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary wa-btn-lg",onClick:()=>t({})},l?"\u7EE7\u7EED\u65C5\u7A0B":"\u5F00\u59CB\u4ECA\u5929\u7684\u65C5\u7A0B"," ",k.default.createElement(E,{name:"chevronRight",size:18})):k.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary wa-btn-lg",onClick:()=>t({extra:5})},"\u518D\u8BA4\u8BC6 5 \u4E2A\u65B0\u8BCD ",k.default.createElement(E,{name:"sparkle",size:17})),!l&&s.due.length>0&&s.fresh.length>0?k.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:()=>t({reviewOnly:!0})},"\u53EA\u590D\u4E60"):null),y.length>0?k.default.createElement("div",{className:"wa-today-teaser","aria-label":"\u4ECA\u65E5\u5C06\u9047\u89C1\u7684\u65B0\u8BCD"},y.map(S=>k.default.createElement(ge,{key:S.id,id:S.id,word:S.word,className:"wa-today-teaser-img"})),k.default.createElement("span",null,"\u4ECA\u5929\u4F1A\u9047\u89C1\u5B83\u4EEC")):null)),k.default.createElement("section",{className:"wa-today-strip"},k.default.createElement("div",{className:"wa-today-goal"},k.default.createElement(Eo,{value:L?x/L:0},k.default.createElement("b",null,x),k.default.createElement("small",null,"/ ",L," \u9898")),k.default.createElement("div",null,k.default.createElement("strong",null,"\u4ECA\u65E5\u76EE\u6807"),k.default.createElement("span",null,"\u5DF2\u7B54 ",x," \xB7 \u76EE\u6807 ",L))),k.default.createElement("div",{className:"wa-today-stat"},k.default.createElement("strong",null,p),k.default.createElement("span",null,"\u8FDE\u7EED\u5B66\u4E60 \xB7 \u5929")),k.default.createElement("div",{className:"wa-today-stat"},k.default.createElement("strong",null,d.toLocaleString("en-US")),k.default.createElement("span",null,"\u5DF2\u70B9\u4EAE")),k.default.createElement("div",{className:"wa-today-stat"},k.default.createElement("strong",null,c.toLocaleString("en-US")),k.default.createElement("span",null,"\u957F\u671F\u8BB0\u4F4F"))),k.default.createElement("div",{className:"wa-today-grid"},k.default.createElement("section",{className:"wa-panel"},k.default.createElement("div",{className:"wa-panel-head"},k.default.createElement("h3",{className:"wa-eyebrow"},"\u8FD9\u4E00\u5468"),k.default.createElement("span",{className:"wa-muted"},Ma(e)," \u4E2A\u65B0\u8BCD")),k.default.createElement("ol",{className:"wa-week"},T.map(S=>k.default.createElement("li",{key:S.key,className:`${S.value?"is-on":"is-zero"} ${S.today?"is-today":""}`,title:`${S.key}\uFF1A${S.value} \u9898`},k.default.createElement("b",null,S.value||""),k.default.createElement("span",{style:{height:`${S.value?Math.max(10,Math.round(S.value/m*100)):5}%`}}),k.default.createElement("small",null,S.label))))),k.default.createElement("section",{className:"wa-panel wa-wotd",role:"button",tabIndex:0,onClick:()=>w&&r(w.id),onKeyDown:S=>{(S.key==="Enter"||S.key===" ")&&(S.preventDefault(),w&&r(w.id))}},k.default.createElement(ge,{id:w.id,word:w.word,className:"wa-wotd-img"}),k.default.createElement("div",{className:"wa-wotd-body"},k.default.createElement("h3",{className:"wa-eyebrow"},"\u4ECA\u65E5\u4E00\u8BCD"),k.default.createElement("p",{className:"wa-wotd-word",lang:"en"},w.word),k.default.createElement("div",{className:"wa-pron-row"},k.default.createElement("span",{className:"wa-ipa"},w.ipa),se?k.default.createElement(ve,{audioKey:`${Q}:${w.id}`,url:le(Q,w.id),label:"\u53D1\u97F3"}):null,N?.ex?.[0]&&de(N,oe.ex)?k.default.createElement(ve,{audioKey:`ex:${w.id}`,url:le("ex",w.id),label:"\u4F8B\u53E5"}):null),k.default.createElement("p",{className:"wa-wotd-zh"},w.zh),N?.ex?.[0]?k.default.createElement("p",{className:"wa-wotd-ex",lang:"en"},N.ex[0].en):null))),B?k.default.createElement("section",{className:"wa-today-reading"},k.default.createElement("div",{className:"wa-today-reading-mark","aria-hidden":"true"},"\u201C"),k.default.createElement("div",{className:"wa-today-reading-copy"},k.default.createElement("p",{className:"wa-eyebrow"},"\u4ECA\u65E5\u9605\u8BFB"),k.default.createElement("h3",null,B.titleZh),k.default.createElement("p",{className:"wa-today-reading-en",lang:"en"},B.title),k.default.createElement("p",{className:"wa-today-reading-meta"},La(B,a)," \xB7 ",$a(B,a)," \xB7 ",Ea(B.ids,e.cards)," \u4E2A\u672A\u5B66\u91CD\u70B9\u8BCD",e.readings?.[B.id]?.done?" \xB7 \u5DF2\u8BFB":""),k.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary",onClick:()=>i(B.id)},"\u5F00\u59CB\u9605\u8BFB ",k.default.createElement(E,{name:"chevronRight",size:16})))):null,k.default.createElement("section",{className:"wa-panel"},k.default.createElement("div",{className:"wa-panel-head"},k.default.createElement("h3",{className:"wa-eyebrow"},"\u5B66\u4E60\u8DEF\u7EBF \xB7 \u4ECE A1 \u5230 C2"),k.default.createElement("span",{className:"wa-muted"},"\u8D77\u70B9\uFF1A",a.cefr[e.settings.startLevel]||"A1")),k.default.createElement("ol",{className:"wa-route"},k.default.createElement("span",{className:"wa-route-line","aria-hidden":"true"}),v.map((S,H)=>k.default.createElement("li",{key:S.name},k.default.createElement("button",{type:"button",className:`${H===e.settings.startLevel?"is-start":""} ${S.seen?"is-on":""}`,onClick:()=>n(S.name),"aria-label":`${S.name} ${nn[H]}\uFF0C\u5DF2\u5B66 ${S.seen} / ${S.total}\uFF0C\u957F\u671F\u8BB0\u4F4F ${S.mastered}`},k.default.createElement("span",{className:"wa-route-node"},k.default.createElement("b",null,S.name),H===e.settings.startLevel?k.default.createElement("em",null,"\u8D77\u70B9"):null),k.default.createElement("span",{className:"wa-route-name"},nn[H]),k.default.createElement("span",{className:"wa-route-count"},S.seen,k.default.createElement("small",null,"/",S.total)),k.default.createElement("span",{className:"wa-route-bar"},k.default.createElement("i",{style:{width:`${Math.round(S.seen/Math.max(1,S.total)*100)}%`}}),k.default.createElement("b",{style:{width:`${Math.round(S.mastered/Math.max(1,S.total)*100)}%`}}))))))),k.default.createElement("section",{className:"wa-panel"},k.default.createElement("div",{className:"wa-panel-head"},k.default.createElement("h3",{className:"wa-eyebrow"},"\u6309\u96C5\u601D\u8BDD\u9898\u63A2\u7D22"),k.default.createElement("button",{type:"button",className:"wa-link",onClick:()=>o("all")},"\u6253\u5F00\u56FE\u9274")),k.default.createElement("ul",{className:"wa-topics-grid"},a.topics.map(S=>k.default.createElement("li",{key:S.slug},k.default.createElement("button",{type:"button",onClick:()=>o(S.slug)},k.default.createElement("img",{src:xa(`topic-${S.slug}.webp`),alt:"",loading:"lazy",onError:H=>{H.currentTarget.style.display="none"}}),k.default.createElement("span",null,k.default.createElement("b",null,S.zh),k.default.createElement("small",null,(z.get(S.slug)||0).toLocaleString("en-US")," \u4E2A\u8BCD"))))))))}var b=he(require("react"),1);var Io={meaning:"\u5B83\u662F\u4EC0\u4E48\u610F\u601D\uFF1F",picture:"\u770B\u56FE\uFF0C\u8865\u5168\u8FD9\u53E5\u8BDD",listen:"\u542C\uFF0C\u662F\u54EA\u4E2A\u8BCD\uFF1F",spell:"\u62FC\u51FA\u8FD9\u4E2A\u8BCD"};function on(a,e){let[t,r]=(0,b.useState)(null);return(0,b.useEffect)(()=>{let n=!0;if(r(null),!!e)return Te(a,e).then(o=>n&&r(o)).catch(()=>{}),()=>{n=!1}},[a,e]),t}function sn(a){let e=(0,b.useRef)(Date.now());return(0,b.useEffect)(()=>{e.current=Date.now()},[a]),()=>Date.now()-e.current}function ln(a){let e=(0,b.useRef)(a);e.current=a,(0,b.useEffect)(()=>{let t=r=>{if(r.metaKey||r.ctrlKey||r.altKey||r.repeat)return;let n=r.target,o=n instanceof HTMLElement?n.tagName:"";if((o==="INPUT"||o==="TEXTAREA")&&!(r.key==="Enter"&&n instanceof HTMLInputElement&&n.readOnly)||o==="BUTTON"&&(r.key==="Enter"||r.key===" "))return;let i=e.current[r.key];i&&(r.preventDefault(),i())};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[])}function Rt({progress:a,value:e,total:t,count:r,onExit:n,label:o="\u4ECA\u65E5\u5B66\u4E60"}){let i=Math.round(Math.min(1,Math.max(0,a))*100);return b.default.createElement("header",{className:"wa-learn-bar"},b.default.createElement("div",{className:"wa-learn-bar-inner"},b.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost wa-learn-exit",onClick:n,"aria-label":"\u9000\u51FA\u5B66\u4E60"},"\u9000\u51FA"),b.default.createElement("div",{className:"wa-learn-bar-center"},b.default.createElement("span",{className:"wa-learn-bar-title"},o),b.default.createElement("div",{className:"wa-learn-progress",role:"progressbar","aria-valuemin":0,"aria-valuemax":t||1,"aria-valuenow":e},b.default.createElement("span",{style:{width:`${i}%`}}))),r?b.default.createElement("span",{className:"wa-learn-count"},r):null))}function er({bar:a,children:e,centered:t=!1}){return b.default.createElement("div",{className:"wa-learn"},a,b.default.createElement("main",{className:`wa-learn-stage ${t?"is-centered":""}`},e))}function Do({atlas:a,progress:e,step:t,onOpenWord:r}){let n=on(a,t.id),o=sn(t.id),i=e.settings.accent,s=(0,b.useRef)(!1);(0,b.useEffect)(()=>{s.current=!1},[t.id]),(0,b.useEffect)(()=>{!n||s.current||(s.current=!0,e.settings.autoplay&&de(n,oe[i])&&Ze(`${i}:${t.id}`,le(i,t.id)))},[n,i,t.id,e.settings.autoplay]);let l=(0,b.useCallback)(()=>{Be(),re(p=>Sa(p,o()/1e3))},[o]);if(ln({Enter:l," ":l}),!n)return b.default.createElement("div",{className:"wa-learn-loading"},b.default.createElement(xe,{label:"\u51C6\u5907\u8BCD\u5361\u2026"}));let f=a.byId.get(t.id);return b.default.createElement("div",{className:"wa-learn-intro"},b.default.createElement("p",{className:"wa-learn-label"},b.default.createElement("span",{className:"wa-dot is-on"})," \u521D\u6B21\u89C1\u9762"),b.default.createElement("div",{className:"wa-learn-card"},b.default.createElement(ge,{id:f.id,word:f.word,full:!0,className:"wa-learn-art",alt:`${f.word} \u63D2\u753B`}),b.default.createElement("div",{className:"wa-learn-body"},b.default.createElement("div",{className:"wa-tags"},b.default.createElement(pa,{level:f.cefr}),f.topicZh?b.default.createElement("span",{className:"wa-chip"},f.topicZh):null),b.default.createElement("h2",{className:"wa-learn-word",lang:"en"},f.word),b.default.createElement("div",{className:"wa-pron"},n.uk?b.default.createElement("div",{className:"wa-pron-row"},b.default.createElement("span",{className:"wa-pron-label"},"\u82F1"),b.default.createElement("span",{className:"wa-ipa"},n.uk),de(n,oe.uk)?b.default.createElement(ve,{audioKey:`uk:${f.id}`,url:le("uk",f.id),label:"\u53D1\u97F3"}):null):null,n.us?b.default.createElement("div",{className:"wa-pron-row"},b.default.createElement("span",{className:"wa-pron-label"},"\u7F8E"),b.default.createElement("span",{className:"wa-ipa"},n.us),de(n,oe.us)?b.default.createElement(ve,{audioKey:`us:${f.id}`,url:le("us",f.id),label:"\u53D1\u97F3"}):null):null),b.default.createElement("ol",{className:"wa-senses"},(n.senses||[]).map((p,d)=>b.default.createElement("li",{key:d},p.pos?b.default.createElement("span",{className:"wa-pos"},p.pos):null,b.default.createElement("span",{className:"wa-zh"},p.zh),p.en?b.default.createElement("span",{className:"wa-en",lang:"en"},p.en):null))),(n.ex||[]).slice(0,1).map((p,d)=>b.default.createElement("div",{className:"wa-learn-example",key:d},b.default.createElement("p",{className:"wa-ex-en",lang:"en"},b.default.createElement(We,{atlas:a,progress:e,text:p.en,headword:f.word,onOpenWord:r})),b.default.createElement("p",{className:"wa-ex-zh"},p.zh))),n.tip?b.default.createElement("aside",{className:"wa-tip"},b.default.createElement(E,{name:"sparkle",size:17}),b.default.createElement("p",null,n.tip)):null)),b.default.createElement("div",{className:"wa-learn-actions"},b.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary wa-btn-lg",onClick:l,autoFocus:!0},"\u8BA4\u8BC6\u4E86 ",b.default.createElement(E,{name:"chevronRight",size:18})),b.default.createElement("span",{className:"wa-hint"},"Enter \u7EE7\u7EED")))}function To({entry:a,pending:e,hints:t,onHint:r,onSubmit:n}){let o=a.w,i=b.default.useMemo(()=>Array.from(o),[o]),s=b.default.useMemo(()=>i.map((z,y)=>z===" "?-1:y).filter(z=>z>=0),[i]),[l,f]=(0,b.useState)(()=>i.map(()=>"")),p=(0,b.useRef)(l);p.current=l;let d=(0,b.useRef)([]),c=(0,b.useRef)(null),u=(0,b.useRef)(o);u.current=o;let x=z=>{let y=s.find(N=>N>=z),w=y===void 0?s[s.length-1]:y;w!==void 0&&d.current[w]?.focus()};(0,b.useEffect)(()=>{let z=i.map(()=>"");p.current=z,f(z),d.current.forEach(y=>{y&&(y.value="")}),x(0)},[o]),(0,b.useEffect)(()=>{if(!t)return;let z=[...p.current];for(let w=0;w<Math.min(t,i.length);w+=1)z[w]=i[w]===" "?" ":i[w];L(z),i.forEach((w,N)=>{N<t&&w!==" "&&d.current[N]&&(d.current[N].value=w)});let y=i.findIndex((w,N)=>N>=t&&w!==" ");x(y===-1?i.length:y)},[t]);let L=z=>{p.current=z,f(z)},j=(z,y)=>{if(e)return;let w=String(y||"").replace(/\s+/g,"");if(w.length>1){let G=s.indexOf(z),Q=s.slice(G,G+w.length),se=[...p.current];Q.forEach((S,H)=>{let K=w[H]||"";se[S]=K,d.current[S]&&(d.current[S].value=K)}),L(se),Q.length&&x(Q[Q.length-1]+1);return}if(!w){let G=[...p.current];G[z]="",L(G);return}let N=w.slice(-1);if(!/^[A-Za-zÀ-ÿ'’-]$/.test(N)){d.current[z]&&(d.current[z].value="");return}let F=[...p.current];F[z]=N,L(F);let B=s.indexOf(z);B>=0&&B<s.length-1&&x(s[B+1])},T=(z,y)=>{if(c.current===null){if(y.key==="Backspace"&&!y.currentTarget.value){let w=s.indexOf(z);if(w>0){y.preventDefault();let N=s[w-1],F=[...p.current];F[N]="",L(F),d.current[N]&&(d.current[N].value="",d.current[N].focus())}}else if(y.key==="ArrowLeft"&&y.currentTarget.selectionStart===0){let w=s.indexOf(z);w>0&&(y.preventDefault(),d.current[s[w-1]]?.focus())}else if(y.key==="ArrowRight"&&y.currentTarget.selectionStart===y.currentTarget.value.length){let w=s.indexOf(z);w>=0&&w<s.length-1&&(y.preventDefault(),d.current[s[w+1]]?.focus())}}},m=i.map((z,y)=>z===" "?" ":l[y]||"").join(""),v=s.every(z=>l[z]);return b.default.createElement("form",{className:"wa-spell",onSubmit:z=>{z.preventDefault(),!(c.current!==null||z.nativeEvent?.isComposing)&&!e&&v&&n(m)}},b.default.createElement("span",{className:"wa-spell-label"},"\u62FC\u5199 \xB7 ",s.length," \u4E2A\u5B57\u6BCD"),b.default.createElement("div",{className:"wa-spell-cells",onClick:()=>x(0)},i.map((z,y)=>{if(z===" ")return b.default.createElement("span",{key:`space-${y}`,className:"wa-spell-gap","aria-hidden":"true"});let w=l[y],N=w&&w.toLowerCase()===z.toLowerCase();return b.default.createElement("input",{key:y,ref:F=>{d.current[y]=F},className:`wa-spell-cell ${w?e?N?"is-ok":"is-bad":"is-filled":""}`,defaultValue:"",maxLength:1,inputMode:"text",autoCapitalize:"off",autoCorrect:"off",autoComplete:"off",spellCheck:!1,readOnly:!!e,"aria-label":`\u7B2C ${y+1} \u4E2A\u5B57\u6BCD\uFF0C\u5171 ${s.length} \u4E2A`,onFocus:F=>F.currentTarget.select(),onClick:F=>F.stopPropagation(),onChange:F=>{c.current===null&&j(y,F.target.value)},onCompositionStart:()=>{c.current=y},onCompositionEnd:F=>{c.current=null,j(y,F.currentTarget.value)},onKeyDown:F=>T(y,F)})})),e?null:b.default.createElement("div",{className:"wa-spell-actions"},b.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:r,disabled:t>=i.length-1},b.default.createElement(E,{name:"sparkle",size:15})," \u63D0\u793A\u5B57\u6BCD"),b.default.createElement("button",{type:"submit",className:"wa-btn wa-btn-primary",disabled:!v},"\u786E\u8BA4 ",b.default.createElement("kbd",null,"Enter"))))}function jo({atlas:a,progress:e,entry:t,word:r,correct:n,onNext:o,onOpenWord:i}){let s=(0,b.useRef)(null);return(0,b.useEffect)(()=>s.current?.focus({preventScroll:!0}),[]),b.default.createElement("div",{className:`wa-feedback ${n?"is-right":"is-wrong"}`,role:"status"},b.default.createElement("div",{className:"wa-feedback-main"},b.default.createElement(ge,{id:r.id,word:r.word,className:"wa-feedback-thumb"}),b.default.createElement("div",{className:"wa-feedback-text"},b.default.createElement("p",{className:"wa-feedback-verdict"},n?"\u7B54\u5BF9\u4E86":`\u6CA1\u5173\u7CFB\uFF0C\u8BB0\u4F4F\u5B83 \xB7 \u6B63\u786E\u7B54\u6848\u662F ${t.w}`),b.default.createElement("p",{className:"wa-feedback-word"},b.default.createElement("b",{lang:"en"},t.w),b.default.createElement("span",{className:"wa-ipa"},t.uk||t.us)),b.default.createElement("p",{className:"wa-feedback-zh"},(t.senses||[]).slice(0,2).map(l=>`${l.pos} ${l.zh}`).join("\u3000")),t.ex?.[0]?b.default.createElement("p",{className:"wa-feedback-ex",lang:"en"},b.default.createElement(We,{atlas:a,progress:e,text:t.ex[0].en,headword:r.word,onOpenWord:i})):null),b.default.createElement("button",{ref:s,type:"button",className:`wa-btn wa-btn-lg ${n?"wa-btn-primary":"wa-btn-ghost"}`,onClick:o},"\u7EE7\u7EED ",b.default.createElement(E,{name:"chevronRight",size:18}))))}function Fo({atlas:a,progress:e,session:t,step:r,onOpenWord:n}){let o=on(a,r.id),i=a.byId.get(r.id),s=e.settings,l=s.accent,f=t.pending,p=sn(`${r.id}-${r.kind}-${t.index}`),[d,c]=(0,b.useState)(0),u=(r.options||[]).map(m=>a.byId.get(m)).filter(Boolean),x=o?.ex?.[0]?Kr(o.ex[0].en,o.w):null,L=(0,b.useCallback)((m,v)=>{if(f)return;let z=at(r.kind,v,p(),d>0);re(y=>tt(y,a,r,v,z,m,s)),s.autoplay&&o&&de(o,oe[l])&&Ze(`${l}:${r.id}`,le(l,r.id))},[f,p,d,r,a,s,o,l]),j=(0,b.useCallback)(()=>{Be(),re(m=>Sa(m,p()/1e3))},[p]);(0,b.useEffect)(()=>{r.kind!=="listen"||f||!o||de(o,oe[l])&&Ze(`listen:${r.id}:${t.index}`,le(l,r.id))},[r.kind,r.id,f,o,l,t.index]);let T={};return f?(T.Enter=j,T[" "]=j):r.kind!=="spell"&&u.forEach((m,v)=>{T[String(v+1)]=()=>L(m.id,m.id===i.id)}),ln(T),o?b.default.createElement("div",{className:`wa-quiz wa-quiz-${r.kind} ${f?f.correct?"is-right":"is-wrong":""}`},b.default.createElement("p",{className:"wa-learn-label"},b.default.createElement("span",{className:`wa-dot ${r.retry?"is-warn":"is-on"}`}),r.retry?"\u518D\u89C1\u4E00\u9762 \xB7 ":"",Io[r.kind]),r.kind==="meaning"?b.default.createElement("div",{className:"wa-quiz-meaning"},b.default.createElement("h2",{className:"wa-learn-word",lang:"en"},o.w),b.default.createElement("div",{className:"wa-pron-row"},b.default.createElement("span",{className:"wa-ipa"},l==="us"?o.us||o.uk:o.uk||o.us),de(o,oe[l])?b.default.createElement(ve,{audioKey:`${l}:${i.id}`,url:le(l,i.id),label:"\u53D1\u97F3"}):null)):null,r.kind==="picture"?b.default.createElement("div",{className:"wa-quiz-picture"},b.default.createElement(ge,{id:i.id,word:i.word,full:!0,className:"wa-quiz-art",alt:`${i.word} \u63D2\u753B`}),b.default.createElement("p",{className:"wa-cloze",lang:"en"},x?b.default.createElement(b.default.Fragment,null,x.before,b.default.createElement("span",{className:"wa-blank"},f?x.hidden:"\u3000\u3000\u3000"),x.after):o.senses[0]?.zh),x&&f?b.default.createElement("p",{className:"wa-cloze-zh"},o.ex[0].zh):null):null,r.kind==="listen"?b.default.createElement("div",{className:"wa-quiz-listen"},b.default.createElement("button",{type:"button",className:"wa-listen-orb",onClick:()=>de(o,oe[l])&&Ze(`listen:${r.id}:replay:${Date.now()}`,le(l,i.id)),"aria-label":"\u518D\u542C\u4E00\u904D"},b.default.createElement(E,{name:"volume",size:44})),b.default.createElement("span",{className:"wa-hint"},"\u518D\u542C\u4E00\u904D")):null,r.kind==="spell"?b.default.createElement("div",{className:"wa-quiz-spell"},b.default.createElement(ge,{id:i.id,word:i.word,className:"wa-spell-art",alt:`${i.word} \u63D2\u753B`}),b.default.createElement("div",null,b.default.createElement("p",{className:"wa-spell-zh"},o.senses[0]?.pos?b.default.createElement("span",{className:"wa-pos"},o.senses[0].pos):null," ",o.senses[0]?.zh),x?b.default.createElement("p",{className:"wa-cloze wa-cloze-sm",lang:"en"},x.before,b.default.createElement("span",{className:"wa-blank"},"\u3000\u3000\u3000"),x.after):null,de(o,oe[l])?b.default.createElement(ve,{audioKey:`${l}:${i.id}`,url:le(l,i.id),label:"\u542C\u53D1\u97F3"}):null)):null,r.kind==="spell"?b.default.createElement(To,{entry:o,pending:f,hints:d,onHint:()=>c(m=>Math.min(o.w.length-1,m+1)),onSubmit:m=>L(m,m.trim().toLowerCase()===o.w.toLowerCase())}):b.default.createElement("ul",{className:`wa-options ${r.kind==="meaning"?"is-zh":""}`},u.map((m,v)=>{let z=m.id===i.id,y=f?.value===m.id,w=f?z?"is-answer":y?"is-chosen":"is-dim":"";return b.default.createElement("li",{key:m.id},b.default.createElement("button",{type:"button",className:`wa-option ${w}`,"data-option":m.id,onClick:()=>L(m.id,z),disabled:!!f,"aria-label":f?`${z?"\u6B63\u786E\u7B54\u6848":y?"\u4F60\u7684\u9009\u62E9\uFF0C\u9519\u8BEF":"\u672A\u9009\u62E9"}\uFF1A${r.kind==="meaning"?m.zh:m.word}`:void 0},b.default.createElement("kbd",null,v+1),b.default.createElement("span",{lang:r.kind==="meaning"?"zh":"en"},r.kind==="meaning"?m.zh:m.word),f&&z?b.default.createElement(E,{name:"check",size:18}):null,f&&y&&!z?b.default.createElement(E,{name:"close",size:18}):null))})),f?b.default.createElement(jo,{atlas:a,progress:e,entry:o,word:i,correct:f.correct,onNext:j,onOpenWord:n}):null):b.default.createElement("div",{className:"wa-learn-loading"},b.default.createElement(xe,{label:"\u52A0\u8F7D\u9898\u76EE\u2026"}))}function Po({atlas:a,progress:e,session:t,onExit:r,onRestart:n,onOpenWord:o}){let i=rt(t),s=[...new Set(t.steps.map(d=>d.id))].map(d=>a.byId.get(d)).filter(Boolean),l=s.filter(d=>t.graded[d.id]===D.Again),f=Math.max(1,Math.round(((t.finished||Date.now())-t.started)/6e4)),p=()=>{re(d=>({...d,session:null})),r()};return b.default.createElement("div",{className:"wa-learn-summary"},b.default.createElement("span",{className:"wa-summary-orbit","aria-hidden":"true"},b.default.createElement(E,{name:"sparkle",size:30})),b.default.createElement("p",{className:"wa-eyebrow"},"\u8FD9\u4E00\u7A0B\u7ED3\u675F\u4E86"),b.default.createElement("h1",null,i.accuracy>=90?"\u6F02\u4EAE\u7684\u4E00\u7A0B\u3002":i.accuracy>=60?"\u7A33\u7A33\u5411\u524D\u3002":"\u9519\u8FC7\u7684\uFF0C\u4F1A\u518D\u76F8\u9047\u3002"),b.default.createElement("div",{className:"wa-summary-stats"},b.default.createElement("div",{className:"wa-summary-stat is-hero"},b.default.createElement("strong",null,i.accuracy,"%"),b.default.createElement("span",null,"\u9996\u6B21\u6B63\u786E\u7387")),b.default.createElement("div",{className:"wa-summary-stat"},b.default.createElement("strong",null,t.newIds.length),b.default.createElement("span",null,"\u65B0\u8BCD")),b.default.createElement("div",{className:"wa-summary-stat"},b.default.createElement("strong",null,t.reviewIds.length),b.default.createElement("span",null,"\u590D\u4E60")),b.default.createElement("div",{className:"wa-summary-stat"},b.default.createElement("strong",null,f),b.default.createElement("span",null,"\u5206\u949F"))),b.default.createElement("ul",{className:"wa-summary-words"},s.map(d=>b.default.createElement("li",{key:d.id,className:t.graded[d.id]===D.Again?"is-wrong":"",role:"button",tabIndex:0,title:`${d.word} ${d.zh}`,onClick:()=>o(d.id),onKeyDown:c=>c.key==="Enter"&&o(d.id)},b.default.createElement(ge,{id:d.id,word:d.word,className:"wa-summary-thumb"}),b.default.createElement("span",{lang:"en"},d.word),b.default.createElement("small",null,d.zh)))),b.default.createElement("p",{className:"wa-summary-note"},"FSRS \u5DF2\u4E3A\u6BCF\u4E2A\u8BCD\u6392\u597D\u4E0B\u6B21\u76F8\u9047\u7684\u65F6\u95F4\u3002\u7B54\u9519\u7684\u8BCD\uFF0C\u4F1A\u66F4\u65E9\u56DE\u6765\u3002"),b.default.createElement("div",{className:"wa-summary-actions"},l.length>0?b.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:()=>n({ids:l.map(d=>d.id)})},b.default.createElement(E,{name:"refresh",size:16})," \u518D\u7EC3 ",l.length," \u4E2A\u9519\u8BCD"):null,b.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary wa-btn-lg",onClick:p,autoFocus:!0},"\u5B8C\u6210 ",b.default.createElement(E,{name:"check",size:17}))),b.default.createElement("p",{className:"wa-hint"},"\u8FDB\u5EA6\u5DF2\u81EA\u52A8\u4FDD\u5B58"))}function gt({atlas:a,progress:e,onExit:t,onRestart:r,onOpenWord:n,label:o="\u4ECA\u65E5\u5B66\u4E60"}){(0,b.useEffect)(()=>()=>Be(),[]);let i=e.session;if(!i)return b.default.createElement(er,{bar:b.default.createElement(Rt,{progress:0,value:0,total:1,count:"",onExit:t,label:o}),centered:!0},b.default.createElement(Ae,{icon:"sparkle",title:"\u4ECA\u5929\u6CA1\u6709\u5F85\u5B66\u7684\u8BCD"},b.default.createElement("p",null,"\u53EF\u4EE5\u5148\u56DE\u987E\u56FE\u9274\uFF0C\u6216\u8005\u660E\u5929\u518D\u6765\u3002"),b.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary",onClick:t},"\u8FD4\u56DE\u4ECA\u65E5")));if(i.finished||i.index>=i.steps.length)return b.default.createElement(er,{bar:b.default.createElement(Rt,{progress:1,value:1,total:1,count:"\u5B8C\u6210",onExit:t,label:o}),centered:!0},b.default.createElement(Po,{atlas:a,progress:e,session:i,onExit:t,onRestart:r,onOpenWord:n}));let s=i.steps[i.index],l=i.steps.length;return b.default.createElement(er,{key:`${i.id}-${i.index}`,bar:b.default.createElement(Rt,{progress:i.index/l,value:i.index,total:l,count:`${i.index+1} / ${l}`,onExit:t,label:o})},s.kind==="intro"?b.default.createElement(Do,{atlas:a,progress:e,step:s,onOpenWord:n}):b.default.createElement(Fo,{atlas:a,progress:e,session:i,step:s,onOpenWord:n}))}var h=he(require("react"),1);var cn="/word-atlas/api/offline",dn=[{id:"thumb",label:"\u7F29\u7565\u56FE",hint:"\u7F51\u683C / \u67E5\u8BCD\u6D6E\u7A97",bytes:84*1024*1024},{id:"img",label:"\u5B8C\u6574\u63D2\u753B",hint:"\u8BCD\u5361\u5927\u56FE",bytes:199*1024*1024},{id:"audio",label:"\u53D1\u97F3",hint:"\u82F1\u97F3 / \u7F8E\u97F3 / \u4F8B\u53E5\u6717\u8BFB",bytes:418*1024*1024}];function ft(a){if(!Number.isFinite(a)||a<=0)return"0 B";let e=["B","KB","MB","GB"],t=a,r=0;for(;t>=1024&&r<e.length-1;)t/=1024,r+=1;return`${t.toFixed(r>=2?1:0)} ${e[r]}`}function Bo(a){if(!Number.isFinite(a)||a<=0)return"\u2014";let e=Math.round(a/1e3);if(e<60)return`${e} \u79D2`;let t=Math.round(e/60);return t<60?`${t} \u5206\u949F`:`${(t/60).toFixed(1)} \u5C0F\u65F6`}function bt({value:a,options:e,onChange:t,ariaLabel:r}){return h.default.createElement("div",{className:"wa-seg",role:"group","aria-label":r},e.map(n=>h.default.createElement("button",{type:"button",key:n.value,className:a===n.value?"is-on":"",onClick:()=>t(n.value)},n.label)))}function pn({on:a,onChange:e,label:t,hint:r}){return h.default.createElement("label",{className:"wa-switch-row"},h.default.createElement("span",null,h.default.createElement("b",null,t),r?h.default.createElement("small",null,r):null),h.default.createElement("button",{type:"button",role:"switch","aria-checked":a,"aria-label":t,className:`wa-switch ${a?"is-on":""}`,onClick:()=>e(!a)},h.default.createElement("span",null)))}function Oo({offline:a,refresh:e}){let[t,r]=(0,h.useState)(["thumb"]),[n,o]=(0,h.useState)("remote"),[i,s]=(0,h.useState)(!1),[l,f]=(0,h.useState)(""),p=a?.state==="downloading";(0,h.useEffect)(()=>{a?.contentDirReady&&o("repo")},[a?.contentDirReady]);let d=async(v,z,y)=>{s(!0),f("");try{let w=await fetch(`${cn}${z}`,{method:v,headers:y?{"Content-Type":"application/json"}:void 0,body:y?JSON.stringify(y):void 0}),N=await w.json().catch(()=>({}));return(!w.ok||N.ok===!1)&&f(N.error||`\u8BF7\u6C42\u5931\u8D25\uFF08HTTP ${w.status}\uFF09`),await e(),N}catch(w){return f(String(w?.message||w)),null}finally{s(!1)}},c=v=>{r(z=>z.includes(v)?z.filter(y=>y!==v):[...z,v])},u=dn.filter(v=>t.includes(v.id)).reduce((v,z)=>v+z.bytes,0),x=a?.done??0,L=a?.total??0,j=L>0?Math.min(100,Math.round(x/L*100)):0,T=a?.state==="done"||(a?.done??0)>0,m=!!a?.contentDirReady;return h.default.createElement("section",{className:"wa-panel"},h.default.createElement("h3",{className:"wa-eyebrow"},"\u79BB\u7EBF\u7D20\u6750"),h.default.createElement("p",{className:"wa-panel-hint"},"\u8BCD\u5E93\u6587\u5B57\u5DF2\u5185\u7F6E\uFF1B\u8FD9\u91CC\u628A\u63D2\u753B\u4E0E\u53D1\u97F3\u4E0B\u8F7D\u5230\u672C\u673A\uFF0C\u65AD\u7F51\u4E5F\u80FD\u770B\u56FE\u3001\u542C\u97F3\u3002",a?.contentDirReady?" \u5F53\u524D\u5DF2\u68C0\u6D4B\u5230\u672C\u673A\u8BCD\u5149\u4ED3\u5E93\uFF0C\u7D20\u6750\u53EF\u76F4\u63A5\u4ECE\u672C\u5730\u8BFB\u53D6\u3002":""),h.default.createElement("div",{className:"wa-offline-source"},h.default.createElement("span",{className:`wa-dot ${m||T?"is-on":""}`}),m?`\u672C\u673A\u8BCD\u5149\u4ED3\u5E93\uFF1A${a?.contentDir}`:T?`\u79BB\u7EBF\u5305\uFF1A${ft(a?.bytes??0)}\uFF08${x.toLocaleString("en-US")}${L?` / ${L.toLocaleString("en-US")}`:""} \u4E2A\u6587\u4EF6\uFF09`:"\u5B98\u65B9\u7AD9\u70B9\u6309\u9700\u52A0\u8F7D\uFF08\u9996\u6B21\u770B\u56FE/\u542C\u97F3\u9700\u8981\u8054\u7F51\uFF09",a?.autoCache?" \xB7 \u6309\u9700\u7F13\u5B58\u5DF2\u5F00\u542F":""),a?.dir?h.default.createElement("p",{className:"wa-panel-path"},"\u4FDD\u5B58\u4F4D\u7F6E\uFF1A",a.dir):null,h.default.createElement("div",{className:"wa-tier-list"},dn.map(v=>h.default.createElement("label",{key:v.id,className:"wa-tier"},h.default.createElement("input",{type:"checkbox",checked:t.includes(v.id),disabled:p,onChange:()=>c(v.id)}),h.default.createElement("span",null,h.default.createElement("b",null,v.label),h.default.createElement("small",null,v.hint," \xB7 \u7EA6 ",ft(v.bytes)))))),h.default.createElement("div",{className:"wa-offline-actions"},h.default.createElement("select",{value:n,onChange:v=>o(v.target.value),disabled:p,"aria-label":"\u4E0B\u8F7D\u6765\u6E90"},h.default.createElement("option",{value:"remote"},"\u5B98\u65B9\u7AD9\u70B9"),h.default.createElement("option",{value:"repo",disabled:!a?.contentDirReady},"\u672C\u673A\u8BCD\u5149\u4ED3\u5E93")),p?h.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",disabled:i,onClick:()=>d("POST","/cancel")},"\u53D6\u6D88\u4E0B\u8F7D"):h.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary",disabled:i||t.length===0,onClick:()=>d("POST","/start",{tiers:t,source:n})},"\u5F00\u59CB\u4E0B\u8F7D",u?`\uFF08\u7EA6 ${ft(u)}\uFF09`:""),h.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",disabled:i||p||!T,onClick:()=>{confirm("\u5220\u9664\u5DF2\u4E0B\u8F7D\u7684\u79BB\u7EBF\u7D20\u6750\uFF1F\u8BCD\u5E93\u6587\u5B57\u4E0D\u53D7\u5F71\u54CD\u3002")&&d("DELETE","")}},"\u5220\u9664\u79BB\u7EBF\u5305")),p||x>0?h.default.createElement("div",{className:"wa-progress"},h.default.createElement("div",{className:"wa-progress-bar"},h.default.createElement("span",{style:{width:`${j}%`}})),h.default.createElement("div",{className:"wa-progress-meta"},h.default.createElement("span",null,p?"\u4E0B\u8F7D\u4E2D":a?.state==="cancelled"?"\u5DF2\u53D6\u6D88":"\u5DF2\u5B8C\u6210"," \xB7 ",j,"%"),h.default.createElement("span",null,x.toLocaleString("en-US"),L?` / ${L.toLocaleString("en-US")}`:""," \u4E2A\u6587\u4EF6",a?.speed?` \xB7 ${ft(a.speed)}/s`:"",p&&a?.etaMs?` \xB7 \u5269\u7EA6 ${Bo(a.etaMs)}`:"",a?.failed?` \xB7 \u5931\u8D25 ${a.failed}`:""))):null,l?h.default.createElement("p",{className:"wa-error-text"},l):null,h.default.createElement("p",{className:"wa-panel-note"},"\u4E0B\u8F7D\u6E90\uFF1A\u5B98\u65B9\u7AD9\u70B9\uFF08CC BY 4.0 \u7D20\u6750\uFF09\u6216\u672C\u673A\u8BCD\u5149\u4ED3\u5E93\uFF1B\u754C\u9762\u97F3\u6548\u4E0D\u5728\u79BB\u7EBF\u5305\u5185\u3002 \u6309\u9700\u7F13\u5B58\u53EF\u5728 profile \u7684 ",h.default.createElement("code",null,"cordis.patch.yml")," \u4E2D\u8BBE\u7F6E ",h.default.createElement("code",null,"autoCache: true"),"\u3002"))}function Uo({days:a}){let t=new Date,r=new Date;r.setDate(t.getDate()-139-t.getDay());let n=[],o=new Date(r);for(let s=0;s<147;s+=1){let l=ra(o);n.push({key:l,value:a[l]?.r??0,future:o>t}),o.setDate(o.getDate()+1)}let i=s=>s===0?0:s<10?1:s<25?2:s<50?3:4;return h.default.createElement("div",{className:"wa-heatmap",role:"img","aria-label":"\u5B66\u4E60\u70ED\u529B\u56FE"},n.map(s=>h.default.createElement("span",{key:s.key,className:`wa-heat-${s.future?"x":i(s.value)}`,title:`${s.key} \xB7 ${s.value} \u9898`})))}function ht({atlas:a,progress:e,onOpenWord:t}){let r=(0,h.useMemo)(()=>{let m=Object.values(e.cards),v=Object.values(e.days),z=v.reduce((F,B)=>F+(B.r||0),0),y=v.reduce((F,B)=>F+(B.c||0),0),w=v.reduce((F,B)=>F+(B.t||0),0),N=Array.from({length:7},(F,B)=>{let G=new Date;G.setHours(23,59,59,999),G.setDate(G.getDate()+B);let Q=new Date(G);return Q.setHours(0,0,0,0),m.filter(se=>(B===0||se.due>=Q.getTime())&&se.due<=G.getTime()).length});return{learned:m.length,mastered:m.filter(Fe).length,reviews:z,accuracy:z?Math.round(y/z*100):0,minutes:Math.round(w/60),streakDays:na(e.days),forecast:N}},[e]),n=(0,h.useMemo)(()=>a?e.mistakes.map(m=>a.byId.get(m)).filter(Boolean).slice(0,24):[],[a,e.mistakes]),o=Math.max(1,...r.forecast),[i,s]=(0,h.useState)(null),[l,f]=(0,h.useState)(""),[p,d]=(0,h.useState)(""),c=(0,h.useRef)(null),u=e.settings,x=(0,h.useCallback)(async()=>{try{let m=await fetch(cn,{cache:"no-store"});if(!m.ok)throw new Error(`HTTP ${m.status}`);let v=await m.json();s(v),f("")}catch{f("\u79BB\u7EBF\u670D\u52A1\u4E0D\u53EF\u7528\uFF0C\u8BF7\u786E\u8BA4 Host \u63D2\u4EF6\u5DF2\u542F\u7528\u3002")}},[]);(0,h.useEffect)(()=>{x()},[x]),(0,h.useEffect)(()=>{if(i?.state!=="downloading")return;let m=setInterval(x,1200);return()=>clearInterval(m)},[i?.state,x]);let L=m=>re(v=>({...v,settings:{...v.settings,...m}})),j=()=>{let m=new Blob([Er()],{type:"application/json"}),v=URL.createObjectURL(m),z=document.createElement("a");z.href=v,z.download=`word-atlas-backup-${new Date().toISOString().slice(0,10)}.json`,z.click(),setTimeout(()=>URL.revokeObjectURL(v),1e3),d("\u5DF2\u5BFC\u51FA\u5907\u4EFD\u6587\u4EF6")},T=async m=>{let v=await m.text(),z=Ir(v);d(z.ok?`\u5DF2\u6062\u590D ${z.cards} \u4E2A\u8BCD\u7684\u8BB0\u5FC6`:z.error)};return h.default.createElement("div",{className:"wa-settings"},h.default.createElement("section",{className:"wa-me-strip"},h.default.createElement("div",{className:"wa-me-stat"},h.default.createElement("strong",null,r.streakDays),h.default.createElement("span",null,"\u8FDE\u7EED\u5B66\u4E60 \xB7 \u5929")),h.default.createElement("div",{className:"wa-me-stat"},h.default.createElement("strong",null,r.learned.toLocaleString("en-US")),h.default.createElement("span",null,"\u5DF2\u70B9\u4EAE")),h.default.createElement("div",{className:"wa-me-stat"},h.default.createElement("strong",null,r.mastered.toLocaleString("en-US")),h.default.createElement("span",null,"\u957F\u671F\u8BB0\u4F4F")),h.default.createElement("div",{className:"wa-me-stat"},h.default.createElement("strong",null,r.accuracy,"%"),h.default.createElement("span",null,"\u9996\u6B21\u6B63\u786E\u7387")),h.default.createElement("div",{className:"wa-me-stat"},h.default.createElement("strong",null,r.minutes),h.default.createElement("span",null,"\u5B66\u4E60\u5206\u949F"))),h.default.createElement("div",{className:"wa-me-grid"},h.default.createElement("section",{className:"wa-panel"},h.default.createElement("h3",{className:"wa-eyebrow"},"\u8FC7\u53BB 20 \u5468"),h.default.createElement(Uo,{days:e.days}),h.default.createElement("p",{className:"wa-panel-note"},"\u4E00\u683C\u662F\u4E00\u5929\uFF0C\u989C\u8272\u8D8A\u6DF1\uFF0C\u90A3\u5929\u7B54\u5F97\u8D8A\u591A\u3002\u300C\u957F\u671F\u8BB0\u4F4F\u300D\u6307\u8BB0\u5FC6\u7A33\u5B9A\u5EA6\u8D85\u8FC7 21 \u5929\u3002")),h.default.createElement("section",{className:"wa-panel"},h.default.createElement("h3",{className:"wa-eyebrow"},"\u672A\u6765 7 \u5929\u7684\u590D\u4E60\u91CF"),h.default.createElement("ol",{className:"wa-forecast"},r.forecast.map((m,v)=>h.default.createElement("li",{key:v},h.default.createElement("span",{style:{height:`${Math.max(6,Math.round(m/o*100))}%`}}),h.default.createElement("b",null,m),h.default.createElement("small",null,v===0?"\u4ECA\u5929":v===1?"\u660E\u5929":`+${v}`)))))),n.length>0?h.default.createElement("section",{className:"wa-panel"},h.default.createElement("div",{className:"wa-panel-head"},h.default.createElement("h3",{className:"wa-eyebrow"},"\u9519\u8BCD\u672C"),h.default.createElement("span",{className:"wa-muted"},"\u6700\u8FD1 ",n.length," \u4E2A")),h.default.createElement("ul",{className:"wa-mistakes"},n.map(m=>h.default.createElement("li",{key:m.id},h.default.createElement("button",{type:"button",onClick:()=>t(m.id),"aria-label":`\u67E5\u770B ${m.word}`},h.default.createElement(ge,{id:m.id,word:m.word,className:"wa-mistake-thumb"}),h.default.createElement("span",null,h.default.createElement("b",{lang:"en"},m.word),h.default.createElement("small",null,m.zh)),h.default.createElement("em",null,m.cefr)))))):null,h.default.createElement("section",{className:"wa-panel"},h.default.createElement("h3",{className:"wa-eyebrow"},"\u5B66\u4E60\u8BBE\u7F6E"),h.default.createElement("div",{className:"wa-field"},h.default.createElement("div",null,h.default.createElement("b",null,"\u6BCF\u65E5\u65B0\u8BCD"),h.default.createElement("small",null,"\u590D\u4E60\u4E0D\u8BBE\u4E0A\u9650\uFF0C\u7B97\u6CD5\u53EA\u5B89\u6392\u5FEB\u8981\u9057\u5FD8\u7684\u8BCD\u3002")),h.default.createElement(bt,{ariaLabel:"\u6BCF\u65E5\u65B0\u8BCD",value:u.dailyNew,options:[5,10,15,20,30].map(m=>({value:m,label:String(m)})),onChange:m=>L({dailyNew:m})})),h.default.createElement("div",{className:"wa-field"},h.default.createElement("div",null,h.default.createElement("b",null,"\u4ECE\u54EA\u4E2A\u96BE\u5EA6\u5F00\u59CB"),h.default.createElement("small",null,"\u5B66\u4E60\u4F1A\u8BDD\u4F1A\u8DF3\u8FC7\u66F4\u7B80\u5355\u7684\u7EA7\u522B\u3002")),h.default.createElement(bt,{ariaLabel:"\u8D77\u70B9\u96BE\u5EA6",value:u.startLevel,options:a.cefr.map((m,v)=>({value:v,label:m})),onChange:m=>L({startLevel:m})})),h.default.createElement("div",{className:"wa-field"},h.default.createElement("div",null,h.default.createElement("b",null,"\u76EE\u6807\u8BB0\u5FC6\u7387"),h.default.createElement("small",null,"\u8D8A\u9AD8\u590D\u4E60\u8D8A\u9891\u7E41\uFF0C90% \u662F\u5927\u591A\u6570\u4EBA\u7684\u751C\u70B9\u3002")),h.default.createElement(bt,{ariaLabel:"\u76EE\u6807\u8BB0\u5FC6\u7387",value:u.retention,options:[.85,.9,.95].map(m=>({value:m,label:`${Math.round(m*100)}%`})),onChange:m=>L({retention:m})})),h.default.createElement("div",{className:"wa-field"},h.default.createElement("div",null,h.default.createElement("b",null,"\u53D1\u97F3\u504F\u597D"),h.default.createElement("small",null,"\u8BCD\u6761\u8BE6\u60C5\u91CC\u4E24\u79CD\u53D1\u97F3\u90FD\u53EF\u4EE5\u64AD\u653E\u3002")),h.default.createElement(bt,{ariaLabel:"\u53D1\u97F3\u504F\u597D",value:u.accent,options:[{value:"uk",label:"\u82F1\u5F0F"},{value:"us",label:"\u7F8E\u5F0F"}],onChange:m=>L({accent:m})})),h.default.createElement(pn,{label:"\u81EA\u52A8\u64AD\u653E\u53D1\u97F3",hint:"\u8BCD\u5361\u4E0E\u542C\u97F3\u9898\u81EA\u52A8\u64AD\u653E",on:u.autoplay,onChange:m=>L({autoplay:m})}),h.default.createElement(pn,{label:"\u590D\u4E60\u65F6\u52A0\u5165\u62FC\u5199\u9898",hint:"\u5B66\u4E60\u4F1A\u8BDD\u4E2D\u52A0\u5165\u62FC\u5199\u9898",on:u.spell,onChange:m=>L({spell:m})})),h.default.createElement(Oo,{offline:i,refresh:x}),l?h.default.createElement("p",{className:"wa-error-text"},l):null,h.default.createElement("section",{className:"wa-panel"},h.default.createElement("h3",{className:"wa-eyebrow"},"\u6570\u636E\u4E0E\u5907\u4EFD"),h.default.createElement("p",{className:"wa-panel-hint"},"\u8FDB\u5EA6\u4FDD\u5B58\u5728\u672C\u673A\uFF08Host \u6587\u4EF6 + \u6D4F\u89C8\u5668\u955C\u50CF\uFF09\uFF0C\u65E0\u9700\u8D26\u53F7\u3002\u6362\u8BBE\u5907\u65F6\u5BFC\u51FA\u5907\u4EFD\u518D\u5BFC\u5165\u5373\u53EF\uFF0C\u683C\u5F0F\u4E0E\u8BCD\u5149\u7EBF\u4E0A\u7248\u517C\u5BB9\u3002"),h.default.createElement("div",{className:"wa-backup-actions"},h.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:j},h.default.createElement(E,{name:"book",size:15})," \u5BFC\u51FA\u5907\u4EFD"),h.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:()=>c.current?.click()},h.default.createElement(E,{name:"refresh",size:15})," \u5BFC\u5165\u5907\u4EFD"),h.default.createElement("input",{ref:c,type:"file",accept:"application/json,.json",hidden:!0,onChange:m=>{let v=m.target.files?.[0];m.target.value="",v&&T(v)}}),h.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost wa-danger",onClick:()=>{confirm("\u786E\u5B9A\u6E05\u7A7A\u5168\u90E8\u5B66\u4E60\u8BB0\u5F55\uFF1F\u6B64\u64CD\u4F5C\u65E0\u6CD5\u64A4\u9500\uFF0C\u5EFA\u8BAE\u5148\u5BFC\u51FA\u5907\u4EFD\u3002")&&(Dr(),d("\u5B66\u4E60\u8BB0\u5F55\u5DF2\u6E05\u7A7A"))}},"\u6E05\u7A7A\u5B66\u4E60\u8BB0\u5F55")),p?h.default.createElement("p",{className:"wa-panel-note"},p):null,h.default.createElement("p",{className:"wa-panel-note"},"\u5DF2\u5B66 ",Object.keys(e.cards).length.toLocaleString("en-US")," \u8BCD \xB7 \u6536\u85CF ",e.bookmarks.length," \u8BCD",e.savedAt?` \xB7 \u4E0A\u6B21\u4FDD\u5B58 ${new Date(e.savedAt).toLocaleString()}`:"")),h.default.createElement("section",{className:"wa-panel"},h.default.createElement("h3",{className:"wa-eyebrow"},"\u5173\u4E8E"),h.default.createElement("p",{className:"wa-panel-hint"},"\u8BCD\u5149 \xB7 Word Atlas DSH \u63D2\u4EF6 v0.3.0 \xB7 \u8BCD\u5E93/\u63D2\u753B/\u5F55\u97F3\u6765\u81EA"," ",h.default.createElement("a",{href:"https://github.com/designfuchen/word-atlas",target:"_blank",rel:"noreferrer"},"designfuchen/word-atlas"),"\uFF08Word Atlas contributors\uFF0CCC BY 4.0\uFF09\uFF1B\u63D2\u4EF6\u4EE3\u7801 MIT\uFF1B\u590D\u4E60\u8C03\u5EA6 ts-fsrs\u3002"),h.default.createElement("p",{className:"wa-panel-path"},"\u63D2\u4EF6\u4ED3\u5E93\uFF1Agithub.com/MC0571/DSH-Plugin-Word-Atlas")))}var I=he(require("react"),1);var Ne=a=>String(a||"").normalize("NFKC").replace(/[’‘]/g,"'").replace(/[“”]/g,'"').replace(/[‐‑–—]/g,"-").replace(/\s/g," "),Ia=(a,e)=>Ne(a).toLowerCase()===Ne(e).toLowerCase(),Qe=a=>Ne(a).replace(/\s+/g,"");function un(a,e){let t=Array.from(Ne(e));return Array.from(Ne(a)).filter((r,n)=>Ia(r,t[n]||"")).length}function wn(a,e,t){let r=Array.from(Ne(a)),n=Array.from(Ne(e)),o=Array.from(Ne(t)),i=0;for(;i<r.length&&i<n.length&&r[i]===n[i];)i+=1;let s=0;for(;s<r.length-i&&s<n.length-i&&r[r.length-1-s]===n[n.length-1-s];)s+=1;let l=n.slice(i,n.length-s),f=0;for(let p=0;p<l.length;p+=1)Ia(l[p],o[i+p]||"")&&(f+=1);return{total:l.length,correct:f}}function xt(a,e,t,r){let n=f=>Number.isFinite(f)?Math.max(0,f):0,o=n(e),i=Math.min(n(a),o),s=n(t),l=n(r);return{accuracy:o?Math.round(i/o*100):100,wpm:l>=1e3?Math.round(s/5/(l/6e4)):0}}var ar=[{id:"word",name:"\u5355\u8BCD",desc:"\u770B\u56FE\u5199\u51FA\u5355\u8BCD",icon:"type"},{id:"sentence",name:"\u4F8B\u53E5",desc:"\u7167\u7740\u6284\u5199\uFF0C\u7EC3\u51FA\u624B\u611F",icon:"keyboard"},{id:"dictation",name:"\u542C\u5199",desc:"\u53EA\u542C\u58F0\u97F3\uFF0C\u5199\u4E0B\u6574\u53E5",icon:"headphones"}],Go=[{id:"recent",label:"\u6700\u8FD1\u5B66\u8FC7"},{id:"mistakes",label:"\u9519\u8BCD\u672C"},{id:"saved",label:"\u6536\u85CF"},{id:"path",label:"\u5B66\u4E60\u8DEF\u7EBF"}];function yt({atlas:a,progress:e}){let[t,r]=(0,I.useState)("word"),[n,o]=(0,I.useState)(()=>Object.keys(e.cards).length>0?"recent":"path"),[i,s]=(0,I.useState)(null),[l,f]=(0,I.useState)(!1),[p,d]=(0,I.useState)(""),c=(0,I.useMemo)(()=>{let m=Object.entries(e.cards).sort((z,y)=>(y[1].last??0)-(z[1].last??0)).map(([z])=>z);return(n==="recent"?m:n==="mistakes"?e.mistakes:n==="saved"?e.bookmarks:a.words.filter(z=>z.cefr>=e.settings.startLevel).slice(0,400).map(z=>z.id)).filter(z=>a.byId.has(z))},[a,e.cards,e.mistakes,e.bookmarks,e.settings.startLevel,n]),u=e.typing.filter(m=>m.mode===t).reduce((m,v)=>Math.max(m,v.wpm||0),0),x=e.typing.length,L=async()=>{if(!l){f(!0),d("");try{let m=Na(c.slice(0,60),Ie(String(Date.now()))).slice(0,10),v=[];for(let y of m)try{v.push(await Te(a,y))}catch{}let z=v.filter(y=>y&&(t==="word"||y.ex?.length>0));if(z.length===0){d("\u8FD9\u4E2A\u6765\u6E90\u6682\u65F6\u6CA1\u6709\u53EF\u7EC3\u4E60\u7684\u8BCD\uFF0C\u5148\u53BB\u5B66\u51E0\u4E2A\u6216\u6362\u4E2A\u6765\u6E90\u3002");return}s({entries:z,key:Date.now(),mode:t})}finally{f(!1)}}};if(i)return I.default.createElement(Wo,{key:i.key,atlas:a,progress:e,mode:i.mode,entries:i.entries,onExit:()=>s(null),onAgain:L});let j=ar.find(m=>m.id===t)||ar[0],T=xa(t==="dictation"?"listen.webp":"hero.webp");return I.default.createElement("div",{className:"wa-practice"},I.default.createElement("header",{className:"wa-practice-head"},I.default.createElement("p",{className:"wa-eyebrow"},"\u7EC3\u4E60 \xB7 Typing Studio"),I.default.createElement("h1",null,"\u8BA9\u624B\uFF0C\u4E5F\u8BB0\u4F4F\u5B83\u4EEC\u3002"),I.default.createElement("p",null,"\u6253\u5B57\u53EA\u7EC3\u62FC\u5199\u548C\u624B\u611F\uFF0C\u4E0D\u4F1A\u6539\u52A8\u8BB0\u5FC6\u8FDB\u5EA6\u3002")),I.default.createElement("div",{className:"wa-practice-grid"},I.default.createElement("section",{className:"wa-panel"},I.default.createElement("h3",{className:"wa-eyebrow"},"\u6A21\u5F0F"),I.default.createElement("div",{className:"wa-mode-cards"},ar.map(m=>I.default.createElement("button",{key:m.id,type:"button",className:`wa-mode-card ${t===m.id?"is-on":""}`,"aria-pressed":t===m.id,onClick:()=>r(m.id)},I.default.createElement(E,{name:m.icon,size:22}),I.default.createElement("b",null,m.name),I.default.createElement("small",null,m.desc)))),I.default.createElement("h3",{className:"wa-eyebrow wa-mt"},"\u8BCD\u6765\u81EA"),I.default.createElement("div",{className:"wa-seg wa-seg-wide"},Go.map(m=>I.default.createElement("button",{key:m.id,type:"button",className:n===m.id?"is-on":"","aria-pressed":n===m.id,onClick:()=>o(m.id)},m.label))),I.default.createElement("p",{className:"wa-panel-hint"},c.length?n==="path"?"\u4ECE\u5B66\u4E60\u8DEF\u7EBF\u7684\u524D 400 \u4E2A\u8BCD\u91CC\u968F\u673A\u62BD 10 \u4E2A\u3002":`\u53EF\u7EC3 ${c.length} \u4E2A\u8BCD\uFF0C\u6BCF\u8F6E\u968F\u673A 10 \u4E2A\u3002`:"\u8FD9\u91CC\u8FD8\u6CA1\u6709\u8BCD\uFF0C\u5148\u53BB\u5B66\u51E0\u4E2A\uFF0C\u6216\u6362\u4E2A\u6765\u6E90\u3002"),I.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary wa-btn-lg wa-practice-start",onClick:L,disabled:!c.length||l},l?"\u51C6\u5907\u4E2D\u2026":"\u5F00\u59CB\u4E00\u8F6E"),p?I.default.createElement("p",{className:"wa-error-text"},p):null),I.default.createElement("section",{className:"wa-panel wa-practice-side"},I.default.createElement("img",{src:T,alt:"",onError:m=>{m.currentTarget.style.visibility="hidden"}}),I.default.createElement("div",{className:"wa-practice-stats"},I.default.createElement("div",null,I.default.createElement("strong",null,u),I.default.createElement("span",null,"\u6700\u4F73\u901F\u5EA6 \xB7 WPM")),I.default.createElement("div",null,I.default.createElement("strong",null,x),I.default.createElement("span",null,"\u5B8C\u6210\u8F6E\u6B21"))),I.default.createElement("p",{className:"wa-panel-note"},"WPM \u6309\u6807\u51C6\u6BCF 5 \u4E2A\u5B57\u7B26\u8BA1 1 \u8BCD\uFF0C\u53EA\u7EDF\u8BA1\u6B63\u786E\u8F93\u5165\u3002"),I.default.createElement("p",{className:"wa-panel-note"},"\u5F53\u524D\u6A21\u5F0F\uFF1A",j.name," \xB7 ",j.desc))))}function Wo({atlas:a,progress:e,mode:t,entries:r,onExit:n,onAgain:o}){let[i,s]=(0,I.useState)(0),[l,f]=(0,I.useState)(""),p=(0,I.useRef)({typed:0,correct:0,accepted:0,ms:0}),[d,c]=(0,I.useState)(()=>xt(0,0,0,0)),[u,x]=(0,I.useState)(!1),L=(0,I.useRef)(null),j=(0,I.useRef)(null),T=e.settings.accent,m=r[i],v=t==="word"?m.w:m.ex[0]?.en||m.w,z=t==="dictation"?"ex":T,y=()=>{de(m,oe[z])&&Ze(`practice:${z}:${m.id}:${i}`,le(z,m.id))};(0,I.useEffect)(()=>{f(""),L.current=null,j.current?.focus(),(t==="dictation"||t==="word"&&e.settings.autoplay)&&y()},[i]),(0,I.useEffect)(()=>()=>Be(),[]);let w=t==="word"?Ne(v):Qe(v),N=S=>{let H=L.current?performance.now()-L.current:0,K=un(t==="word"?Ne(S):Qe(S),w),Y={...p.current,accepted:p.current.accepted+K,ms:p.current.ms+H};p.current=Y;let ne=xt(Y.correct,Y.typed,Y.accepted,Y.ms);if(c(ne),i+1>=r.length){x(!0),re(te=>({...te,typing:[...te.typing,{at:Date.now(),mode:t,items:r.length,wpm:ne.wpm,accuracy:ne.accuracy}].slice(-500)}));return}window.setTimeout(()=>s(te=>te+1),260)},F=S=>{if(u)return;L.current===null&&S&&(L.current=performance.now());let H=t==="word"?Ne(l):Qe(l),K=t==="word"?Ne(S):Qe(S),Y=wn(H,K,w),ne={...p.current,typed:p.current.typed+Y.total,correct:p.current.correct+Y.correct};p.current=ne,c(xt(ne.correct,ne.typed,ne.accepted,ne.ms)),f(S),K.length>=w.length&&Ia(K,w)&&N(S)};if(u)return I.default.createElement("div",{className:"wa-practice wa-typing-done"},I.default.createElement("section",{className:"wa-panel"},I.default.createElement("p",{className:"wa-eyebrow"},"\u672C\u8F6E\u5B8C\u6210"),I.default.createElement("h1",null,d.wpm," ",I.default.createElement("small",null,"WPM")),I.default.createElement("p",{className:"wa-panel-hint"},"\u51C6\u786E\u7387 ",d.accuracy,"% \xB7 ",r.length," \u9879"),I.default.createElement("div",{className:"wa-summary-actions"},I.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:n},"\u8FD4\u56DE"),I.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary wa-btn-lg",onClick:o,autoFocus:!0},I.default.createElement(E,{name:"rotateCcw",size:17})," \u518D\u6765\u4E00\u8F6E"))));let B=Array.from(v),G=Array.from(Ne(l)).filter(S=>!/\s/.test(S)),Q=-1,se=r.length?Math.round(i/r.length*100):0;return I.default.createElement("div",{className:"wa-practice wa-typing"},I.default.createElement("header",{className:"wa-typing-top"},I.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:n},"\u7ED3\u675F"),I.default.createElement("div",{className:"wa-typing-progress"},I.default.createElement("span",{style:{width:`${se}%`}})),I.default.createElement("span",{className:"wa-typing-meter"},I.default.createElement("b",null,d.wpm)," WPM \xB7 ",I.default.createElement("b",null,d.accuracy,"%"))),I.default.createElement("section",{className:"wa-typing-stage",onClick:()=>j.current?.focus()},t==="word"?I.default.createElement("div",{className:"wa-typing-cue"},I.default.createElement(ge,{id:m.id,word:m.w,full:!0,className:"wa-typing-art",alt:`${m.w} \u63D2\u753B`}),I.default.createElement("p",null,m.senses[0]?.pos?I.default.createElement("span",{className:"wa-pos"},m.senses[0].pos):null," ",m.senses[0]?.zh)):I.default.createElement("p",{className:"wa-typing-zh"},t==="dictation"?I.default.createElement("button",{type:"button",className:"wa-link",onClick:y},"\u518D\u542C\u4E00\u904D"):null,m.ex[0]?.zh),I.default.createElement("p",{className:`wa-typing-text ${t==="word"?"is-word":""} ${t==="dictation"?"is-hidden":""}`,lang:"en","aria-hidden":"true"},B.map((S,H)=>{if(/\s/.test(S))return I.default.createElement("span",{key:H,className:"is-space","aria-hidden":"true"},"\xA0");Q+=1;let K=G[Q],Y=K===void 0?Q===G.length?"is-caret":"":Ia(K,S)?"is-ok":"is-bad",ne=t==="dictation"&&K===void 0&&/[A-Za-z]/.test(S)?"\xB7":S;return I.default.createElement("span",{key:H,className:Y},ne)})),I.default.createElement("input",{ref:j,className:"wa-typing-input",value:l,onChange:S=>F(S.target.value),autoFocus:!0,autoCapitalize:"off",autoCorrect:"off",autoComplete:"off",spellCheck:!1,"aria-label":"\u5728\u8FD9\u91CC\u8F93\u5165"}),I.default.createElement("p",{className:"wa-panel-note wa-typing-help"},t==="dictation"?"\u542C\u4E0D\u6E05\u53EF\u4EE5\u70B9\u300C\u518D\u542C\u4E00\u904D\u300D\u3002":"\u76F4\u63A5\u5F00\u59CB\u8F93\u5165\uFF0C\u5168\u90E8\u6B63\u786E\u540E\u81EA\u52A8\u8FDB\u5165\u4E0B\u4E00\u9879\u3002",t==="word"?null:" \u7A7A\u683C\u4E0D\u53C2\u4E0E\u5224\u5206\uFF08\u8F93\u5165\u6CD5\u541E\u6389\u7A7A\u683C\u4E5F\u6CA1\u5173\u7CFB\uFF09\uFF0C\u53E5\u4E2D\u865A\u7EBF\u4E0B\u5212\u7EBF\u8868\u793A\u7A7A\u683C\u3002"," ","\u7B2C ",i+1,"/",r.length," \u9879")))}var U=he(require("react"),1);function Ho(a,e,t,r){let n=1/Math.tan(a/2),o=1/(t-r);return new Float32Array([n/e,0,0,0,0,n,0,0,0,0,(r+t)*o,-1,0,0,2*r*t*o,0])}function qo(a,e,t,r,n,o){let i=a-r,s=e-n,l=t-o,f=Math.hypot(i,s,l)||1;i/=f,s/=f,l/=f;let p=l,d=0,c=-i;f=Math.hypot(p,d,c)||1,p/=f,d/=f,c/=f;let u=s*c-l*d,x=l*p-i*c,L=i*d-s*p;return new Float32Array([p,u,i,0,d,x,s,0,c,L,l,0,-(p*a+d*e+c*t),-(u*a+x*e+L*t),-(i*a+s*e+l*t),1])}function Ko(a,e){let t=new Float32Array(16);for(let r=0;r<4;r++)for(let n=0;n<4;n++){let o=0;for(let i=0;i<4;i++)o+=a[i*4+n]*e[r*4+i];t[r*4+n]=o}return t}var Zo=`#version 300 es
in vec3 aPos; in vec3 aColor; in float aSeed; in float aState;
uniform mat4 uVP; uniform float uTime, uIntro, uScale, uHover, uMotion;
out vec3 vColor; out float vAlpha; out float vGold;
void main(){
  float t = clamp((uIntro - aSeed * 0.4) / 0.6, 0.0, 1.0);
  float e = 1.0 - pow(1.0 - t, 3.0);
  // Stars spiral in from a wide, loose ring into the galaxy.
  float ang = atan(aPos.z, aPos.x) + (1.0 - e) * 3.4;
  float rad = length(aPos.xz) * mix(2.4, 1.0, e);
  vec3 p = vec3(cos(ang) * rad, aPos.y * e, sin(ang) * rad);
  // Learned stars breathe very slightly above the disc.
  p.y += uMotion * step(0.5, aState) * sin(uTime * 0.6 + aSeed * 30.0) * 0.004;
  vec4 clip = uVP * vec4(p, 1.0);
  gl_Position = clip;
  float tw = mix(1.0, 0.7 + 0.3 * sin(uTime * (1.0 + aSeed * 2.5) + aSeed * 50.0), uMotion);
  // Unlearned words are coloured stardust; learning brightens them, mastery makes them blaze.
  float size = 3.4 + aSeed * 1.6; float alpha = 0.78; vec3 col = mix(aColor, vec3(0.8, 0.84, 1.0), 0.28);
  if (aState > 0.5) { size = 7.5; alpha = 1.0; col = mix(aColor, vec3(1.0, 0.85, 0.5), 0.35); }
  if (aState > 1.5) { size = 10.0; alpha = 1.0; col = mix(aColor, vec3(1.0, 0.97, 0.9), 0.6); }
  if (aState > 2.5) { size = 13.0; alpha = 1.0; col = vec3(1.0, 0.74, 0.34); }
  if (abs(float(gl_VertexID) - uHover) < 0.5) { size *= 2.4; alpha = 1.0; col = vec3(1.0); }
  gl_PointSize = max(1.2, size * uScale / clip.w) * (aState > 0.5 ? 1.0 : tw);
  vColor = col;
  vAlpha = alpha * e * (aState > 0.5 ? mix(1.0, tw, 0.35) : tw);
  vGold = step(2.5, aState);
  // Today's stars carry a wide halo, so they read even in a small view.
  gl_PointSize *= mix(1.0, 2.6, vGold);
}`,Vo=`#version 300 es
precision mediump float;
in vec3 vColor; in float vAlpha; in float vGold;
out vec4 o;
void main(){
  vec2 c = gl_PointCoord * 2.0 - 1.0;
  float d = dot(c, c);
  if (d > 1.0) discard;
  float core = mix(9.0, 40.0, vGold);
  float a = (exp(-d * core) + exp(-d * mix(2.5, 3.5, vGold)) * mix(0.28, 0.55, vGold)) * vAlpha;
  o = vec4(vColor * a, a);
}`,Yo=`#version 300 es
const vec2 P[3] = vec2[3](vec2(-1.0,-1.0), vec2(3.0,-1.0), vec2(-1.0,3.0));
out vec2 vUv;
void main(){ vUv = P[gl_VertexID] * 0.5 + 0.5; gl_Position = vec4(P[gl_VertexID], 0.0, 1.0); }`,Xo=`#version 300 es
precision mediump float;
in vec2 vUv; out vec4 o;
uniform float uTime, uYaw, uAspect, uIntro;
uniform vec2 uCore;
uniform int uOct;
float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
  return mix(mix(h(i), h(i+vec2(1,0)), f.x), mix(h(i+vec2(0,1)), h(i+vec2(1,1)), f.x), f.y); }
float fbm(vec2 p){ float s = 0.0, a = 0.5; for (int i = 0; i < 5; i++){ if (i >= uOct) break; s += a * n(p); p = p * 2.03 + 11.7; a *= 0.5; } return s; }
void main(){
  vec2 uv = vUv; uv.x *= uAspect;
  vec2 q = uv * 2.2 + vec2(uYaw * 0.35, 0.0) + uTime * 0.008;
  float f = fbm(q + fbm(q * 1.7 + uTime * 0.01));
  vec3 base = vec3(0.035, 0.047, 0.098);
  vec3 c1 = vec3(0.23, 0.16, 0.42);   // plum
  vec3 c2 = vec3(0.08, 0.27, 0.36);   // teal
  vec3 c3 = vec3(0.55, 0.32, 0.18);   // ochre dust
  vec3 col = base + c1 * smoothstep(0.45, 0.95, f) * 0.55 + c2 * smoothstep(0.55, 1.0, fbm(q * 0.8 - 3.0)) * 0.45;
  vec2 cd = (vUv - uCore); cd.x *= uAspect;
  float core = exp(-dot(cd, cd) * 9.0);
  col += c3 * core * 0.55 + vec3(1.0, 0.85, 0.6) * exp(-dot(cd, cd) * 60.0) * 0.18;
  float vig = smoothstep(1.25, 0.25, length((vUv - 0.5) * vec2(uAspect, 1.0)));
  o = vec4(col * mix(0.55, 1.0, vig) * (0.35 + 0.65 * uIntro), 1.0);
}`;function mn(a,e,t){let r=a.createShader(e);if(a.shaderSource(r,t),a.compileShader(r),!a.getShaderParameter(r,a.COMPILE_STATUS))throw new Error(a.getShaderInfoLog(r)||"shader");return r}function gn(a,e,t){let r=a.createProgram();if(a.attachShader(r,mn(a,a.VERTEX_SHADER,e)),a.attachShader(r,mn(a,a.FRAGMENT_SHADER,t)),a.linkProgram(r),!a.getProgramParameter(r,a.LINK_STATUS))throw new Error(a.getProgramInfoLog(r)||"link");return r}function fn(){let a=navigator,e=Math.min(screen.width,screen.height)<600;return(a.hardwareConcurrency??8)<=4||(a.deviceMemory??8)<=4||e?"low":"high"}var vt=class{constructor(e,t,r){this.canvas=e;this.layout=t;this.opts=r;this.states=new Float32Array(t.n),this.screen=new Float32Array(t.n*3),this.autoRotate=r.autoRotate??.035;let n=e.getContext("webgl2",{antialias:!1,alpha:!1,premultipliedAlpha:!0,preserveDrawingBuffer:!!r.preserve,powerPreference:"high-performance"});if(n)try{this.initGL(n),this.gl=n}catch{this.gl=null}this.gl||(this.ctx2d=e.getContext("2d")),r.reducedMotion&&(this.introStart=-1e9)}canvas;layout;opts;cam={yaw:.6,pitch:1.12,dist:1.8,tx:0,ty:0,tz:0};goal=null;gl=null;ctx2d=null;star;neb;vao;stateBuf;states;vp=new Float32Array(16);screen;raf=0;t0=performance.now();last=performance.now();introStart=performance.now();running=!1;w=1;h=1;dpr=1;hover=-1;autoRotate;onFrame;get webgl(){return!!this.gl}initGL(e){let t=this.layout;this.star=gn(e,Zo,Vo),this.neb=gn(e,Yo,Xo),this.vao=e.createVertexArray(),e.bindVertexArray(this.vao);let r=(n,o,i,s=e.STATIC_DRAW)=>{let l=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,l),e.bufferData(e.ARRAY_BUFFER,o,s);let f=e.getAttribLocation(this.star,n);return e.enableVertexAttribArray(f),e.vertexAttribPointer(f,i,e.FLOAT,!1,0,0),l};r("aPos",t.positions,3),r("aColor",t.colors,3),r("aSeed",t.seeds,1),this.stateBuf=r("aState",this.states,1,e.DYNAMIC_DRAW),e.bindVertexArray(null)}setStates(e){this.states.set(e);let t=this.gl;t&&this.stateBuf&&(t.bindBuffer(t.ARRAY_BUFFER,this.stateBuf),t.bufferSubData(t.ARRAY_BUFFER,0,this.states))}setState(e,t){this.states[e]=t;let r=this.gl;r&&this.stateBuf&&(r.bindBuffer(r.ARRAY_BUFFER,this.stateBuf),r.bufferSubData(r.ARRAY_BUFFER,e*4,this.states.subarray(e,e+1)))}baseDist(){let e=this.w/this.h;return e<1?1.8/Math.max(.55,e)*.82:1.8}resize(){let e=this.canvas.getBoundingClientRect(),t=this.w===1;this.dpr=Math.min(window.devicePixelRatio||1,this.opts.quality==="low"?1.25:2),this.w=Math.max(1,e.width),this.h=Math.max(1,e.height),this.canvas.width=Math.round(this.w*this.dpr),this.canvas.height=Math.round(this.h*this.dpr),t&&(this.cam.dist=this.baseDist())}frameStars(e,t=1.15){if(!e.length)return;let r=this.layout.positions,n=0,o=0,i=0;e.forEach(l=>{n+=r[l*3],o+=r[l*3+1],i+=r[l*3+2]});let s=e.length;Object.assign(this.cam,{tx:n/s*.6,ty:o/s,tz:i/s*.6,dist:t})}flyTo(e,t=.75){let r=this.layout.positions;this.goal={tx:r[e*3],ty:r[e*3+1],tz:r[e*3+2],dist:t}}reset(){this.goal={tx:0,ty:0,tz:0,dist:this.baseDist(),pitch:1.12}}replayIntro(){this.opts.reducedMotion||(this.introStart=performance.now())}start(){if(this.running)return;this.running=!0,this.last=performance.now();let e=t=>{this.running&&(this.frame(t),this.raf=requestAnimationFrame(e))};this.raf=requestAnimationFrame(e)}stop(){this.running=!1,cancelAnimationFrame(this.raf)}destroy(){this.stop(),this.onFrame=void 0}matrices(){let e=this.cam,t=e.tx+e.dist*Math.cos(e.pitch)*Math.sin(e.yaw),r=e.ty+e.dist*Math.sin(e.pitch),n=e.tz+e.dist*Math.cos(e.pitch)*Math.cos(e.yaw),o=Ho(.75,this.w/this.h,.02,20);this.vp=Ko(o,qo(t,r,n,e.tx,e.ty,e.tz))}project(){let e=this.vp,t=this.layout.positions,r=this.screen;for(let n=0;n<this.layout.n;n++){let o=t[n*3],i=t[n*3+1],s=t[n*3+2],l=e[3]*o+e[7]*i+e[11]*s+e[15];if(l<=.01){r[n*3+2]=-1;continue}let f=(e[0]*o+e[4]*i+e[8]*s+e[12])/l,p=(e[1]*o+e[5]*i+e[9]*s+e[13])/l;r[n*3]=(f*.5+.5)*this.w,r[n*3+1]=(1-(p*.5+.5))*this.h,r[n*3+2]=l}}toScreen(e,t,r){let n=this.vp,o=n[3]*e+n[7]*t+n[11]*r+n[15];if(o<=.01)return null;let i=(n[0]*e+n[4]*t+n[8]*r+n[12])/o,s=(n[1]*e+n[5]*t+n[9]*r+n[13])/o;return{x:(i*.5+.5)*this.w,y:(1-(s*.5+.5))*this.h,depth:o}}starScreen(e){return{x:this.screen[e*3],y:this.screen[e*3+1],depth:this.screen[e*3+2]}}pick(e,t,r=16){this.project();let n=-1,o=1/0;for(let i=0;i<this.layout.n;i++){if(this.screen[i*3+2]<=0)continue;let l=this.screen[i*3]-e,f=this.screen[i*3+1]-t,p=Math.hypot(l,f);if(p>r)continue;let d=p-this.states[i]*4;d<o&&(o=d,n=i)}return n}frame(e){let t=Math.min(.05,(e-this.last)/1e3);this.last=e;let r=(e-this.t0)/1e3,n=Math.min(1,(e-this.introStart)/2600);if(this.opts.reducedMotion||(this.cam.yaw+=this.autoRotate*t),this.goal){let o=this.goal,i=this.cam,s=!0;for(let l of Object.keys(o))i[l]+=(o[l]-i[l])*Math.min(1,t*3.2),Math.abs(o[l]-i[l])>.001&&(s=!1);s&&(this.goal=null)}this.matrices(),this.gl?this.drawGL(r,n):this.draw2D(r,n),this.onFrame?.()}drawGL(e,t){let r=this.gl;r.viewport(0,0,this.canvas.width,this.canvas.height),r.disable(r.BLEND),r.useProgram(this.neb);let n=this.toScreen(0,0,0);r.uniform1f(r.getUniformLocation(this.neb,"uTime"),this.opts.reducedMotion?0:e),r.uniform1f(r.getUniformLocation(this.neb,"uYaw"),this.cam.yaw),r.uniform1f(r.getUniformLocation(this.neb,"uAspect"),this.w/this.h),r.uniform1f(r.getUniformLocation(this.neb,"uIntro"),t),r.uniform2f(r.getUniformLocation(this.neb,"uCore"),n?n.x/this.w:.5,n?1-n.y/this.h:.5),r.uniform1i(r.getUniformLocation(this.neb,"uOct"),this.opts.quality==="low"?3:5),r.drawArrays(r.TRIANGLES,0,3),r.enable(r.BLEND),r.blendFunc(r.ONE,r.ONE),r.useProgram(this.star),r.uniformMatrix4fv(r.getUniformLocation(this.star,"uVP"),!1,this.vp),r.uniform1f(r.getUniformLocation(this.star,"uTime"),e),r.uniform1f(r.getUniformLocation(this.star,"uIntro"),t),r.uniform1f(r.getUniformLocation(this.star,"uScale"),this.dpr*Math.min(this.w,this.h)/520),r.uniform1f(r.getUniformLocation(this.star,"uHover"),this.hover),r.uniform1f(r.getUniformLocation(this.star,"uMotion"),this.opts.reducedMotion?0:1),r.bindVertexArray(this.vao),r.drawArrays(r.POINTS,0,this.layout.n),r.bindVertexArray(null)}draw2D(e,t){let r=this.ctx2d;if(!r)return;r.setTransform(this.dpr,0,0,this.dpr,0,0);let n=r.createRadialGradient(this.w/2,this.h/2,0,this.w/2,this.h/2,Math.max(this.w,this.h)*.7);n.addColorStop(0,"#1b1d38"),n.addColorStop(1,"#090c18"),r.fillStyle=n,r.fillRect(0,0,this.w,this.h),this.project(),r.globalCompositeOperation="lighter";let o=this.layout.colors;for(let i=0;i<this.layout.n;i++){let s=this.screen[i*3+2];if(s<=0)continue;let l=this.states[i],f=(l>2.5?7:l>1.5?5:l>.5?3.5:1.3)*(i===this.hover?2:1)*Math.min(this.w,this.h)/520/s,p=(l>.5?.9:.3*(.7+.3*Math.sin(e+i)))*t;r.fillStyle=`rgba(${o[i*3]*255|0},${o[i*3+1]*255|0},${o[i*3+2]*255|0},${p})`,r.fillRect(this.screen[i*3]-f/2,this.screen[i*3+1]-f/2,Math.max(1,f),Math.max(1,f))}r.globalCompositeOperation="source-over"}};var Da=["#f2c46d","#ef8f6b","#8fd0c8","#9fb8ff","#9be38f","#ff9fa8","#f7d9a8","#c6a7ff","#ffd36b","#7fc4ff","#ffb38a","#86e0b5","#d8c3a5","#b5e48c","#ffe6b0","#ff8fc3","#a8d8ff","#ffcf7a","#e0b0ff"],Jo=a=>[1,3,5].map(e=>parseInt(a.slice(e,e+2),16)/255);function Qo(a){let e=a>>>0||1;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function bn(a){let e=a.words,t=e.length,r=new Float32Array(t*3),n=new Float32Array(t*3),o=new Float32Array(t),i=new Map(a.topics.map((c,u)=>[c.slug,u])),s=new Map(a.cefr.map((c,u)=>[c,u])),l=a.topics.length,f=new Array(l).fill(0);e.forEach(c=>{let u=i.get(c.topic)??0;f[u]+=1});let p=t/l;e.forEach((c,u)=>{let x=Qo(Ie(c.id)),L=()=>(x()+x()+x()-1.5)/1.5,T=.1+(s.get(c.cefr)??2)/5*.72+x()*.16,m=i.get(c.topic)??0,v=m/l*Math.PI*2,z=Math.sqrt(Math.max(.6,f[m]/p)),y=v+T*3.4+L()*(.05+.03/T)*z,w=.05*(1-T*.6)*z;r[u*3]=Math.cos(y)*T,r[u*3+1]=L()*w,r[u*3+2]=Math.sin(y)*T;let[N,F,B]=Jo(Da[m%Da.length]);n.set([N,F,B],u*3),o[u]=x()});let d=.62;return{n:t,positions:r,colors:n,seeds:o,ids:e.map(c=>c.id),index:new Map(e.map((c,u)=>[c.id,u])),topicCenters:a.topics.map((c,u)=>{let x=u/l*Math.PI*2+d*3.4;return[Math.cos(x)*d,0,Math.sin(x)*d]})}}var hn=new WeakMap;function Ro(a){return(0,U.useMemo)(()=>{let e=hn.get(a);return e||(e=bn(a),hn.set(a,e)),e},[a])}var ei=()=>typeof matchMedia<"u"&&matchMedia("(prefers-reduced-motion: reduce)").matches;function ai(a,e){let t=new Float32Array(a.n);return a.ids.forEach((r,n)=>{let o=e[r];t[n]=o?Fe(o)?2:1:0}),t}var ca=a=>Math.max(.35,Math.min(4.2,a));function kt({atlas:a,progress:e,onOpenWord:t}){let r=Ro(a),n=e.cards,o=(0,U.useRef)(null),i=(0,U.useRef)(null),s=(0,U.useRef)(null),[l,f]=(0,U.useState)(null),[p,d]=(0,U.useState)(!1);(0,U.useEffect)(()=>{let w=o.current;if(!w)return;let N=new vt(w,r,{quality:fn(),reducedMotion:ei(),preserve:!0,autoRotate:.025});i.current=N,N.resize();let F=new ResizeObserver(()=>N.resize());F.observe(w);let B=new IntersectionObserver(([Q])=>Q.isIntersecting&&!document.hidden?N.start():N.stop());B.observe(w);let G=()=>document.hidden?N.stop():N.start();return document.addEventListener("visibilitychange",G),N.onFrame=()=>{let Q=s.current;if(!Q)return;let se=Q.children;r.topicCenters.forEach(([S,H,K],Y)=>{let ne=se[Y],te=N.toScreen(S,H,K);if(ne){if(!te){ne.style.opacity="0";return}ne.style.transform=`translate(${te.x}px, ${te.y}px) translate(-50%, -50%)`,ne.style.opacity=String(Math.max(0,Math.min(.9,3.4-te.depth)))}})},d(!0),()=>{F.disconnect(),B.disconnect(),document.removeEventListener("visibilitychange",G),N.destroy(),i.current=null}},[r]),(0,U.useEffect)(()=>{i.current?.setStates(ai(r,n))},[r,n]);let c=(0,U.useRef)(null),u=(0,U.useRef)(new Map),x=(0,U.useRef)(0);(0,U.useEffect)(()=>()=>window.clearTimeout(x.current),[]);let L=w=>{let N=o.current.getBoundingClientRect();return{x:w.clientX-N.left,y:w.clientY-N.top}},j=w=>{let N=i.current;if(!N)return;let F=L(w),B=u.current;if(B.has(w.pointerId)){let se=B.get(w.pointerId);if(B.set(w.pointerId,F),B.size===2){let[S,H]=[...B.values()],K=Math.hypot(S.x-H.x,S.y-H.y);c.current?.pinch&&(N.cam.dist=ca(N.cam.dist*(c.current.pinch/K))),c.current&&(c.current.pinch=K);return}if(c.current){let S=F.x-se.x,H=F.y-se.y;c.current.moved+=Math.abs(S)+Math.abs(H),N.cam.yaw-=S*.006,N.cam.pitch=Math.max(.12,Math.min(1.45,N.cam.pitch+H*.005))}return}if(w.pointerType!=="mouse")return;let G=N.pick(F.x,F.y);if(N.hover=G,window.clearTimeout(x.current),G<0){x.current=window.setTimeout(()=>f(null),260);return}let Q=a.words[G];x.current=window.setTimeout(()=>f({word:Q,x:F.x,y:F.y}),120)},T=w=>{w.currentTarget.setPointerCapture(w.pointerId),u.current.set(w.pointerId,L(w)),c.current={...L(w),moved:0}},m=w=>{let N=i.current,F=c.current;if(u.current.delete(w.pointerId),u.current.size>0||(c.current=null,!N||!F||F.moved>8))return;let B=L(w),G=N.pick(B.x,B.y,w.pointerType==="mouse"?16:26);if(G<0)return;let Q=a.words[G];if(w.pointerType!=="mouse"&&l?.word.id!==Q.id){N.hover=G,f({word:Q,x:B.x,y:B.y});return}N.flyTo(G),window.setTimeout(()=>t(Q.id),350)},v=w=>{let N=i.current;N&&(N.cam.dist=ca(N.cam.dist*Math.exp(w.deltaY*.0012)))};(0,U.useEffect)(()=>{let w=o.current;if(!w)return;let N=F=>F.preventDefault();return w.addEventListener("wheel",N,{passive:!1}),()=>w.removeEventListener("wheel",N)},[]);let z=(0,U.useMemo)(()=>r.ids.reduce((w,N)=>w+(n[N]?1:0),0),[r,n]),y=()=>{let w=o.current;if(!w)return;let N=document.createElement("a");N.download="word-atlas-galaxy.png",N.href=w.toDataURL("image/png"),N.click()};return U.default.createElement("div",{className:"wa-galaxy-page"},U.default.createElement("header",{className:"wa-galaxy-head"},U.default.createElement("div",null,U.default.createElement("p",{className:"wa-eyebrow"},"\u8BCD\u6C47\u661F\u56FE \xB7 Galaxy"),U.default.createElement("h1",null,"\u5B66\u8FC7\u7684\u8BCD\uFF0C\u6C47\u6210\u4F60\u7684\u661F\u56FE\u3002")),U.default.createElement("div",{className:"wa-galaxy-legend","aria-hidden":"true"},U.default.createElement("span",null,U.default.createElement("i",{className:"is-dust"}),"\u672A\u5B66"),U.default.createElement("span",null,U.default.createElement("i",{className:"is-learning"}),"\u5B66\u4E60\u4E2D"),U.default.createElement("span",null,U.default.createElement("i",{className:"is-mastered"}),"\u5DF2\u638C\u63E1"))),U.default.createElement("div",{className:`wa-galaxy ${p?"is-ready":""}`},U.default.createElement("canvas",{ref:o,onPointerMove:j,onPointerDown:T,onPointerUp:m,onPointerCancel:m,onPointerLeave:()=>{i.current&&(i.current.hover=-1),f(null)},onWheel:v,role:"img","aria-label":`\u8BCD\u6C47\u661F\u56FE\uFF1A${r.n} \u9897\u661F\uFF0C\u5DF2\u70B9\u4EAE ${z} \u9897\u3002\u53EF\u62D6\u52A8\u65CB\u8F6C\u3001\u6EDA\u52A8\u7F29\u653E\u3001\u70B9\u51FB\u661F\u661F\u6253\u5F00\u8BCD\u6761\u3002`,tabIndex:0,onKeyDown:w=>{let N=i.current;N&&(w.key==="ArrowLeft"&&(N.cam.yaw-=.12),w.key==="ArrowRight"&&(N.cam.yaw+=.12),w.key==="ArrowUp"&&(N.cam.pitch=Math.min(1.45,N.cam.pitch+.08)),w.key==="ArrowDown"&&(N.cam.pitch=Math.max(.12,N.cam.pitch-.08)),(w.key==="+"||w.key==="=")&&(N.cam.dist=ca(N.cam.dist*.85)),w.key==="-"&&(N.cam.dist=ca(N.cam.dist*1.18)))}}),U.default.createElement("div",{className:"wa-galaxy-labels",ref:s,"aria-hidden":"true"},a.topics.map((w,N)=>U.default.createElement("span",{key:w.slug,style:{"--c":Da[N%Da.length]}},w.zh))),l?U.default.createElement("button",{type:"button",className:"wa-galaxy-tip",style:{transform:`translate(${Math.min(l.x+18,(o.current?.clientWidth??0)-260)}px, ${Math.max(8,l.y-46)}px)`},onClick:()=>t(l.word.id)},U.default.createElement(ge,{id:l.word.id,word:l.word.word,className:"wa-galaxy-tip-img"}),U.default.createElement("span",null,U.default.createElement("b",{lang:"en"},l.word.word),U.default.createElement("small",null,l.word.zh))):null,U.default.createElement("div",{className:"wa-galaxy-hud"},U.default.createElement("p",null,U.default.createElement("b",null,z.toLocaleString("en-US"))," / ",r.n.toLocaleString("en-US")," \u9897\u661F\u5DF2\u70B9\u4EAE")),U.default.createElement("div",{className:"wa-galaxy-controls"},U.default.createElement("button",{type:"button",className:"wa-icon-btn",onClick:()=>i.current&&(i.current.cam.dist=ca(i.current.cam.dist*.8)),"aria-label":"\u653E\u5927"},U.default.createElement(E,{name:"plus",size:18})),U.default.createElement("button",{type:"button",className:"wa-icon-btn",onClick:()=>i.current&&(i.current.cam.dist=ca(i.current.cam.dist*1.25)),"aria-label":"\u7F29\u5C0F"},U.default.createElement(E,{name:"minus",size:18})),U.default.createElement("button",{type:"button",className:"wa-icon-btn",onClick:()=>{i.current?.reset(),i.current?.replayIntro()},"aria-label":"\u56DE\u5230\u5168\u666F"},U.default.createElement(E,{name:"rotateCcw",size:17})),U.default.createElement("button",{type:"button",className:"wa-icon-btn",onClick:()=>{let w=Object.keys(n),N=w[Math.floor(Math.random()*w.length)]??a.words[0]?.id,F=N?r.index.get(N):void 0;F!==void 0&&i.current?.flyTo(F)},"aria-label":"\u98DE\u5230\u4E00\u9897\u5DF2\u70B9\u4EAE\u7684\u661F"},U.default.createElement(E,{name:"crosshair",size:17})),U.default.createElement("button",{type:"button",className:"wa-icon-btn",onClick:y,"aria-label":"\u4FDD\u5B58\u661F\u56FE\u56FE\u7247"},U.default.createElement(E,{name:"share",size:17}))),U.default.createElement("p",{className:"wa-galaxy-hint"},"\u62D6\u52A8\u65CB\u8F6C \xB7 \u6EDA\u52A8\u7F29\u653E \xB7 \u70B9\u51FB\u661F\u661F\u6253\u5F00\u8BCD\u6761")))}var J=he(require("react"),1);var ti=[{id:"today",label:"\u4ECA\u65E5\u5B66\u4E60",icon:"star"},{id:"atlas",label:"\u56FE\u9274",icon:"book"},{id:"read",label:"\u4E66\u623F",icon:"library"},{id:"galaxy",label:"\u8BCD\u6C47\u661F\u56FE",icon:"orbit"},{id:"review",label:"\u5FEB\u901F\u590D\u4E60",icon:"refresh"},{id:"practice",label:"\u6253\u5B57\u7EC3\u4E60",icon:"keyboard"},{id:"bookmarks",label:"\u751F\u8BCD\u672C",icon:"heart"},{id:"settings",label:"\u6211\u7684 / \u8BBE\u7F6E",icon:"user"}];function Nt({atlas:a,progress:e,onClose:t,onNavigate:r,onOpenWord:n}){let[o,i]=(0,J.useState)(""),[s,l]=(0,J.useState)(0),f=(0,J.useRef)(null);(0,J.useEffect)(()=>{f.current?.focus()},[]);let p=(0,J.useMemo)(()=>{if(!a)return[];let u=o.trim().toLowerCase();return u?a.words.filter(x=>x.word.toLowerCase().includes(u)||x.zh.toLowerCase().includes(u)).slice(0,8):[]},[a,o]),d=(0,J.useMemo)(()=>o.trim()?p.map(u=>({type:"word",...u})):ti.map(u=>({type:"action",...u})),[o,p]);(0,J.useEffect)(()=>{l(0)},[o]);let c=u=>{u&&(u.type==="word"?n(u.id):r(u.id),t())};return J.default.createElement("div",{className:"wa-palette-overlay",onMouseDown:u=>{u.target===u.currentTarget&&t()}},J.default.createElement("div",{className:"wa-palette",role:"dialog","aria-modal":"true","aria-label":"\u547D\u4EE4\u9762\u677F",onKeyDown:u=>{u.key==="Escape"?(u.preventDefault(),t()):u.key==="ArrowDown"?(u.preventDefault(),l(x=>Math.min(d.length-1,x+1))):u.key==="ArrowUp"?(u.preventDefault(),l(x=>Math.max(0,x-1))):u.key==="Enter"&&(u.preventDefault(),c(d[s]))}},J.default.createElement("div",{className:"wa-palette-search"},J.default.createElement(E,{name:"search",size:17}),J.default.createElement("input",{ref:f,value:o,onChange:u=>i(u.target.value),placeholder:"\u641C\u7D22\u5355\u8BCD\u6216\u8DF3\u8F6C\u9875\u9762\u2026","aria-label":"\u641C\u7D22\u5355\u8BCD\u6216\u8DF3\u8F6C\u9875\u9762",spellCheck:!1}),J.default.createElement("kbd",null,"Esc")),J.default.createElement("ul",{className:"wa-palette-list"},o.trim()?J.default.createElement("li",{className:"wa-palette-label"},"\u8BCD\u6761 \xB7 ",p.length?`\u5339\u914D ${p.length} \u4E2A`:"\u6CA1\u6709\u7ED3\u679C"):J.default.createElement("li",{className:"wa-palette-label"},"\u524D\u5F80"),d.map((u,x)=>J.default.createElement("li",{key:u.type==="word"?`word-${u.id}`:`view-${u.id}`},J.default.createElement("button",{type:"button",className:x===s?"is-active":"",onMouseEnter:()=>l(x),onClick:()=>c(u)},u.type==="word"?J.default.createElement(J.default.Fragment,null,J.default.createElement("span",{className:"wa-palette-word",lang:"en"},u.word),J.default.createElement("span",{className:"wa-palette-zh"},u.zh),J.default.createElement("span",{className:"wa-palette-tag"},u.cefr)):J.default.createElement(J.default.Fragment,null,J.default.createElement(E,{name:u.icon,size:16}),J.default.createElement("span",null,u.label)))))),J.default.createElement("p",{className:"wa-palette-footer"},"\u2191\u2193 \u9009\u62E9 \xB7 Enter \u6253\u5F00 \xB7 Esc \u5173\u95ED")))}var $=he(require("react"),1);var W=he(require("react"),1);var yn="word-atlas-dsh:reader-prefs",ri=["en","bi","zh"],Ta={mode:"bi",size:1,leading:1,speed:1,language:"en"},xn=(a,e,t,r)=>{let n=Number(a);return Number.isFinite(n)?Math.max(e,Math.min(t,Math.round(n))):r};function Ve(a){let e=a&&typeof a=="object"&&!Array.isArray(a)?a:{};return{mode:ri.includes(e.mode)?e.mode:Ta.mode,size:xn(e.size,0,4,Ta.size),leading:xn(e.leading,0,2,Ta.leading),speed:[.8,1,1.2].includes(Number(e.speed))?Number(e.speed):Ta.speed,language:e.language==="zh"?"zh":"en"}}function vn(){try{return Ve(JSON.parse(localStorage.getItem(yn)||"null"))}catch{return{...Ta}}}function kn(a){try{localStorage.setItem(yn,JSON.stringify(Ve(a)))}catch{}}function zt(a){let e=Math.max(0,Math.floor(Number(a)||0));if(!e)return"0";let t=[[1e3,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]],r=e,n="";for(let[o,i]of t)for(;r>=o;)n+=i,r-=o;return n}var Ye=(a,e)=>`book:${a}:${e}`,Xe=a=>`book:${a}:pos`,tr=(a,e,t)=>`wa-sent-${a}-${e}-${t}`;function Mt(a,e,t=[]){if(typeof a!="string")return[];let r=Number.isFinite(e?.a)?e.a:0,n=Number.isFinite(e?.b)?Math.min(e.b,a.length):a.length,o=[],i=r;for(let s of t){if(!Array.isArray(s)||s.length<3)continue;let[l,f,p,d]=s;if(!Number.isFinite(l)||!Number.isFinite(f)||f<=l||f<=r||l>=n)continue;let c=Math.max(l,r),u=Math.min(f,n);c>i&&o.push({text:a.slice(i,c)}),o.push({text:a.slice(c,u),id:p,freq:Number(d)||0}),i=u}return i<n&&o.push({text:a.slice(i,n)}),o}function _t(a,e="en"){let t=e==="zh"?"zh":"en",r=[];for(let n of a?.paras||[]){let o=t==="zh"?n.audioZh:n.audio,i=(t==="zh"?n.zhSents:n.sents)||[],s=t==="zh"?n.zh:n.en,l=(t==="zh"?n.sents:n.zhSents)||[],f=t==="zh"?n.en:n.zh;!o||typeof s!="string"||!Array.isArray(i)||i.length===0||i.forEach((p,d)=>{if(!Number.isFinite(p?.a)||!Number.isFinite(p?.b))return;let c=l[d];r.push({pid:n.id,audio:o,lang:t,sentenceIndex:d,t0:Number(p.t0)||0,t1:Number(p.t1)||0,text:s.slice(p.a,p.b),translation:c&&typeof f=="string"?f.slice(c.a,c.b):"",domId:tr(n.id,t,d)})})}return r}function St(a,e,t){if(!a?.length)return-1;let r=Math.max(0,Math.min(a.length-1,Number(e)||0)),n=a[r].audio,o=r;for(let i=r;i<a.length;i+=1){let s=a[i];if(s.audio!==n)break;if(s.t0<=(Number(t)||0)+.03)o=i;else break}return o}function Nn(a){let e=[],t=new Set;for(let r of a?.paras||[])for(let n of r.words||[]){let o=Array.isArray(n)?n[2]:null;o&&!t.has(o)&&(t.add(o),e.push(o))}return e}var g=he(require("react"),1);var rr=[.8,1,1.2],zn=[["en","\u82F1\u6587"],["bi","\u4E2D\u82F1\u5BF9\u7167"],["zh","\u4E2D\u6587"]],ni=[1.5,1.68,1.9];function Mn({word:a,onWord:e}){return g.default.createElement("button",{type:"button",className:`wa-book-word ${a.freq>=2?"is-marked":""}`,onClick:t=>{t.stopPropagation(),e(a.id||null,a.text,t)},"aria-label":`\u67E5\u770B ${a.text} \u7684\u91CA\u4E49`},a.text)}function _n({paragraph:a,index:e,text:t,lang:r,activeId:n,audioLang:o,onWord:i,onPlay:s,lookupMode:l}){let p=((r==="en"?a.sents:a.zhSents)||[])[e];if(!p)return null;let d=r==="en"?Mt(t,p,a.words||[]):[{text:t.slice(p.a,p.b)}],c=tr(a.id,r,e),u=!l&&o===r;return g.default.createElement("span",{className:`wa-book-sent ${n===c?"is-speaking":""} ${u?"is-playable":""} ${l?"is-lookup":""}`,"data-sentence":c,onClick:u?()=>s(a.id,e,r):void 0},d.flatMap((x,L)=>{if(x.id)return l?[g.default.createElement(Mn,{key:L,word:x,onWord:i})]:[g.default.createElement("span",{key:L,className:`wa-book-mark ${x.freq>=2?"is-marked":""}`},x.text)];if(!l)return[g.default.createElement(g.default.Fragment,{key:L},x.text)];let j=[],T=/[A-Za-zÀ-ÿ]+(?:['’-][A-Za-zÀ-ÿ]+)*/g,m=0,v=T.exec(x.text);for(;v;)v.index>m&&j.push(g.default.createElement(g.default.Fragment,{key:`${L}-${m}`},x.text.slice(m,v.index))),j.push(g.default.createElement(Mn,{key:`${L}-${v.index}`,word:{text:v[0],id:null,freq:0},onWord:i})),m=v.index+v[0].length,v=T.exec(x.text);return m<x.text.length&&j.push(g.default.createElement(g.default.Fragment,{key:`${L}-tail`},x.text.slice(m))),j}))}function oi({paragraph:a,mode:e,activeId:t,audioLang:r,onWord:n,onPlay:o,lookupMode:i}){let s=a.sents||[],l=a.zhSents||[];return g.default.createElement("section",{className:`wa-book-para wa-book-kind-${a.kind||"p"}`,"data-paragraph":a.id},e!=="zh"?g.default.createElement("p",{className:"wa-book-para-en",lang:"en"},s.length?s.map((f,p)=>g.default.createElement(g.default.Fragment,{key:p},g.default.createElement(_n,{paragraph:a,index:p,text:a.en,lang:"en",activeId:t,audioLang:r,onWord:n,onPlay:o,lookupMode:i}),p<s.length-1?" ":null)):a.en):null,e!=="en"&&a.zh?g.default.createElement("p",{className:"wa-book-para-zh",lang:"zh"},l.length?l.map((f,p)=>g.default.createElement(g.default.Fragment,{key:p},g.default.createElement(_n,{paragraph:a,index:p,text:a.zh,lang:"zh",activeId:t,audioLang:r,onWord:n,onPlay:o,lookupMode:i}))):a.zh):null)}function Ct({atlas:a,progress:e,book:t,meta:r,restorePid:n,onBack:o,onOpenChapter:i,onOpenWord:s,onReaderFocus:l}){let[f,p]=(0,g.useState)({status:"loading",data:null,error:""}),[d,c]=(0,g.useState)(vn),u=(0,g.useRef)(d);u.current=d;let[x,L]=(0,g.useState)(!1),[j,T]=(0,g.useState)(!1),[m,v]=(0,g.useState)(null),[z,y]=(0,g.useState)(!1),[w,N]=(0,g.useState)(!1),[F,B]=(0,g.useState)(!1),[G,Q]=(0,g.useState)(-1),[se,S]=(0,g.useState)(!0),[H,K]=(0,g.useState)(""),[Y,ne]=(0,g.useState)(!1),te=(0,g.useRef)(null),Me=(0,g.useRef)(null),ye=(0,g.useRef)(-1),He=(0,g.useRef)(0),Lt=(0,g.useMemo)(()=>a?.words?.length?Qa(a):null,[a]),ua=(0,g.useRef)({at:0,pid:"",pct:0}),pe=f.status==="ready"?f.data:null,wa=(0,g.useMemo)(()=>pe?Nn(pe):[],[pe]),ma=(0,g.useMemo)(()=>wa.slice(0,30).map(M=>a.byId.get(M)).filter(Boolean),[wa,a]),ga=t.chapters.find(M=>M.n===r.n+1&&M.ready),ie=(0,g.useMemo)(()=>{let M=!!pe?.paras?.some(Z=>Z.audio&&Z.sents?.length),O=!!pe?.paras?.some(Z=>Z.audioZh&&Z.zhSents?.length);return{en:M,zh:O}},[pe]),we=d.language==="zh"&&!ie.zh?"en":d.language==="en"&&!ie.en?"zh":d.language,_=(0,g.useMemo)(()=>pe?_t(pe,we):[],[pe,we]),q=G>=0?_[G]:null,_e=q?.domId||"",Se=!!e.readings?.[Ye(t.id,r.n)]?.done;(0,g.useEffect)(()=>{kn(d)},[d]),(0,g.useEffect)(()=>{j&&(te.current?.pause(),y(!1))},[j]),(0,g.useEffect)(()=>{te.current&&(te.current.playbackRate=d.speed)},[d.speed]),(0,g.useEffect)(()=>{pe&&(!ie.en&&ie.zh&&d.language==="en"?c(M=>Ve({...M,language:"zh"})):ie.en&&!ie.zh&&d.language==="zh"&&c(M=>Ve({...M,language:"en"})))},[pe,ie.en,ie.zh,d.language]),(0,g.useEffect)(()=>{pe&&(d.mode==="zh"&&we!=="zh"&&ie.zh?c(M=>Ve({...M,language:"zh"})):d.mode==="en"&&we!=="en"&&ie.en&&c(M=>Ve({...M,language:"en"})))},[pe,d.mode,we,ie.en,ie.zh]),(0,g.useEffect)(()=>(l?.(!0),()=>l?.(!1)),[l]),(0,g.useEffect)(()=>{let M=!0;return p({status:"loading",data:null,error:""}),en(t.id,r.n).then(O=>M&&p({status:"ready",data:O,error:""})).catch(O=>M&&p({status:"error",data:null,error:O.message||"\u7AE0\u8282\u52A0\u8F7D\u5931\u8D25\u3002"})),()=>{M=!1}},[t.id,r.n]),(0,g.useEffect)(()=>{let M=te.current;M&&(M.pause(),M.removeAttribute("src"),delete M.dataset.src,M.load()),ye.current=-1,Q(-1),N(!1),K("")},[t.id,r.n,we]),(0,g.useEffect)(()=>()=>{te.current?.pause(),Be()},[]),(0,g.useEffect)(()=>{if(f.status!=="ready")return;let M=e.readings?.[Xe(t.id)],O=n||(M?.chapter===r.n?M.pid:null);if(!O)return;let Z=window.setTimeout(()=>{let me=Me.current,fe=me?.querySelector(`[data-paragraph="${O}"]`);if(me&&fe){let Ue=fe.getBoundingClientRect().top-me.getBoundingClientRect().top+me.scrollTop;me.scrollTop=Math.max(0,Ue-80)}},120);return()=>window.clearTimeout(Z)},[f.status]);let Ce=(0,g.useCallback)((M=!1)=>{let O=Me.current;if(!O)return;let Z=[...O.querySelectorAll("[data-paragraph]")];if(!Z.length)return;let me=O.scrollTop,fe=O.getBoundingClientRect().top,Ue=Z[0];for(let ba of Z)if(ba.getBoundingClientRect().top-fe+me-110<=me)Ue=ba;else break;let $t=Ue.getAttribute("data-paragraph")||"",Et=Math.max(0,Math.min(1,me/Math.max(1,O.scrollHeight-O.clientHeight))),It=Date.now(),Dt=ua.current;!M&&It-Dt.at<1200||!M&&Dt.pid===$t&&Math.abs(Dt.pct-Et)<.015||(ua.current={at:It,pid:$t,pct:Et},re(ba=>({...ba,readings:{...ba.readings,[Xe(t.id)]:{chapter:r.n,pid:$t,pct:Et,last:It}}})))},[t.id,r.n]),qe=()=>{Ce(!0),re(M=>({...M,readings:{...M.readings,[Ye(t.id,r.n)]:{done:!0,last:Date.now(),times:(M.readings?.[Ye(t.id,r.n)]?.times||0)+1},[Xe(t.id)]:{chapter:r.n,pid:ua.current.pid,pct:1,last:Date.now()}}})),o()},fa=()=>{Ce(!0),te.current?.pause(),o()},ze=(0,g.useCallback)(M=>{let O=_[M];if(!O){K("\u672C\u7AE0\u6682\u65E0\u6717\u8BFB\u97F3\u9891\uFF0C\u5148\u8BFB\u6587\u5B57\u5427\u3002");return}let Z=te.current;if(!Z)return;let me=++He.current;ye.current!==M&&(ye.current=M,Q(M)),L(!1),v(null),K("");let fe=ta(O.audio),Ue=()=>{if(me===He.current){B(!1);try{Z.currentTime=O.t0}catch{}Z.playbackRate=u.current.speed,Z.play().catch(()=>{me===He.current&&(N(!1),B(!1),K("\u6717\u8BFB\u6682\u65F6\u65E0\u6CD5\u64AD\u653E\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u3002"))})}};Z.dataset.src!==fe&&(Z.pause(),Z.dataset.src=fe,Z.src=fe,Z.load()),Z.readyState>=2?Ue():(B(!0),Z.addEventListener("canplay",Ue,{once:!0}))},[_]),Re=(0,g.useCallback)(()=>{let M=te.current;if(M){if(F){He.current+=1,M.pause(),B(!1),N(!1),K("\u5DF2\u53D6\u6D88\u52A0\u8F7D\u3002");return}if(!M.paused){M.pause();return}if(ye.current<0){ze(0);return}if(M.readyState<2||!M.dataset.src){ze(ye.current);return}B(!0),M.play().then(()=>B(!1)).catch(()=>{B(!1),N(!1),K("\u6717\u8BFB\u6682\u65F6\u65E0\u6CD5\u64AD\u653E\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u3002")})}},[F,ze]),De=(0,g.useCallback)(M=>{if(!_.length)return;let O=ye.current<0?0:ye.current,Z=Math.max(0,Math.min(_.length-1,O+(ye.current<0?0:M)));ze(Z)},[_,ze]);(0,g.useEffect)(()=>{if(G<0||!se||!q)return;let M=Me.current,O=M?.querySelector(`[data-sentence="${q.domId}"]`);if(!M||!O)return;let Z=typeof matchMedia<"u"&&matchMedia("(prefers-reduced-motion: reduce)").matches,me=O.getBoundingClientRect().top-M.getBoundingClientRect().top+M.scrollTop;M.scrollTo({top:Math.max(0,me-M.clientHeight*.38),behavior:Z?"auto":"smooth"})},[G,q?.domId,se]),(0,g.useEffect)(()=>{let M=O=>{let Z=O.target?.tagName;Z==="INPUT"||Z==="TEXTAREA"||O.target?.isContentEditable||(O.key===" "?(O.preventDefault(),Re()):O.key==="ArrowLeft"?(O.preventDefault(),De(-1)):O.key==="ArrowRight"?(O.preventDefault(),De(1)):O.key==="Escape"&&(z?y(!1):x?L(!1):m&&v(null)))};return window.addEventListener("keydown",M),()=>window.removeEventListener("keydown",M)},[z,x,m,Re,De]);let ce=M=>c(O=>Ve({...O,...M})),ja=(M,O,Z)=>{te.current&&!te.current.paused&&te.current.pause();let me=M||(O?Lt?.resolve(O):null),fe=Z?.currentTarget?.getBoundingClientRect?.(),Ue=fe?{left:fe.left,top:fe.top,width:fe.width,height:fe.height,bottom:fe.bottom}:{left:window.innerWidth/2,top:window.innerHeight/2,width:0,height:0,bottom:window.innerHeight/2};v({id:me||null,surface:O||M||"",anchor:Ue})},Fa=(M,O,Z)=>{if(Z!==we)return;let me=_.findIndex(fe=>fe.pid===M&&fe.sentenceIndex===O);me>=0&&ze(me)},ea=q?q.lang==="en"?q.text:q.translation:pe?.paras?.[0]?.en||"",aa=q?q.lang==="zh"?q.text:q.translation:pe?.paras?.[0]?.zh||"",Pa=d.mode==="zh"?"zh":d.mode==="en"?"en":we,$n=d.mode==="zh"?aa||ea:d.mode==="en"?ea||aa:q?.text||ea||aa,sr=d.mode==="bi"&&q?.translation||"",En=M=>{if(!_.length)return;let O=ye.current<0?0:ye.current,Z=St(_,O,M.currentTarget.currentTime);Z>=0&&Z!==ye.current&&(ye.current=Z,Q(Z))},In=()=>{let M=ye.current;if(M<0){N(!1);return}let O=M+1;for(;O<_.length&&_[O].audio===_[M].audio;)O+=1;O<_.length?ze(O):(N(!1),K("\u672C\u7AE0\u6717\u8BFB\u7ED3\u675F\u3002"))},lr=()=>{let M=rr.indexOf(d.speed);ce({speed:rr[(M+1)%rr.length]})};if(f.status==="loading")return g.default.createElement("div",{className:"wa-book-reader wa-book-reader-loading"},g.default.createElement("header",{className:"wa-book-bar"},g.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:fa},g.default.createElement(E,{name:"chevronLeft",size:16})," \u4E66\u67B6")),g.default.createElement(xe,{label:"\u6B63\u5728\u6253\u5F00\u4E66\u9875\u2026"}));if(f.status!=="ready"||!f.data)return g.default.createElement("div",{className:"wa-book-reader"},g.default.createElement("header",{className:"wa-book-bar"},g.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:fa},g.default.createElement(E,{name:"chevronLeft",size:16})," \u4E66\u67B6")),g.default.createElement(Ae,{icon:"book",title:"\u8FD9\u4E00\u7AE0\u6682\u65F6\u6253\u4E0D\u5F00"},g.default.createElement("p",null,f.error||"\u7AE0\u8282\u5185\u5BB9\u52A0\u8F7D\u5931\u8D25\u3002")));let Dn={"--wa-book-size":`${17+d.size*2}px`,"--wa-book-leading":ni[d.leading]},Oe=_.length;return g.default.createElement("div",{className:"wa-book-reader","data-mode":d.mode,style:Dn},g.default.createElement("header",{className:"wa-book-bar"},g.default.createElement("button",{type:"button",className:"wa-book-back",onClick:fa},g.default.createElement(E,{name:"chevronLeft",size:17})," \u4E66\u67B6"),g.default.createElement("div",{className:"wa-book-bar-title"},g.default.createElement("span",null,t.titleZh),g.default.createElement("strong",null,r.labelZh)),g.default.createElement("div",{className:"wa-book-tools"},g.default.createElement("button",{type:"button",className:`wa-book-tool ${j?"is-on":""}`,"aria-pressed":j,"aria-label":j?"\u9000\u51FA\u67E5\u8BCD\u6A21\u5F0F":"\u8FDB\u5165\u67E5\u8BCD\u6A21\u5F0F",onClick:()=>{T(M=>!M),v(null)}},g.default.createElement(E,{name:"search",size:16}),g.default.createElement("span",null,"\u67E5\u8BCD")),Oe?g.default.createElement("button",{type:"button",className:"wa-icon-btn","aria-label":"\u8046\u542C\u6A21\u5F0F",title:"\u8046\u542C\u6A21\u5F0F",onClick:()=>{y(!0),w||ze(G>=0?G:0)}},g.default.createElement(E,{name:"headphones",size:19})):null,g.default.createElement("button",{type:"button",className:"wa-icon-btn","aria-label":"\u9605\u8BFB\u8BBE\u7F6E","aria-expanded":x,onClick:()=>L(M=>!M)},g.default.createElement(E,{name:"settings",size:19})))),j?g.default.createElement("div",{className:"wa-book-lookup-hint",role:"status"},"\u67E5\u8BCD\u6A21\u5F0F\uFF1A\u70B9\u5355\u8BCD\u67E5\u770B\u91CA\u4E49\uFF1B\u518D\u70B9\u9876\u680F\u300C\u67E5\u8BCD\u300D\u8FD4\u56DE\u53E5\u5B50\u70B9\u64AD\u3002"):null,x?g.default.createElement(g.default.Fragment,null,g.default.createElement("div",{className:"wa-book-backdrop",onMouseDown:()=>L(!1)}),g.default.createElement("div",{className:"wa-book-settings",role:"dialog","aria-label":"\u9605\u8BFB\u8BBE\u7F6E"},g.default.createElement("h2",null,"\u9605\u8BFB\u8BBE\u7F6E"),g.default.createElement("div",{className:"wa-book-setting"},g.default.createElement("span",null,"\u9605\u8BFB\u65B9\u5F0F"),g.default.createElement("div",{className:"wa-book-seg"},zn.map(([M,O])=>g.default.createElement("button",{key:M,type:"button","aria-pressed":d.mode===M,onClick:()=>ce({mode:M})},O)))),g.default.createElement("div",{className:"wa-book-setting"},g.default.createElement("span",null,"\u6587\u5B57\u5927\u5C0F"),g.default.createElement("div",{className:"wa-book-seg"},[0,1,2,3,4].map(M=>g.default.createElement("button",{key:M,type:"button","aria-label":`\u5B57\u53F7 ${M+1}`,"aria-pressed":d.size===M,onClick:()=>ce({size:M})},g.default.createElement("span",{style:{fontSize:13+M*2}},"\u5B57"))))),g.default.createElement("div",{className:"wa-book-setting"},g.default.createElement("span",null,"\u884C\u8DDD"),g.default.createElement("div",{className:"wa-book-seg"},[0,1,2].map(M=>g.default.createElement("button",{key:M,type:"button","aria-pressed":d.leading===M,onClick:()=>ce({leading:M})},M===0?"\u7D27":M===1?"\u4E2D":"\u677E")))),g.default.createElement("div",{className:"wa-book-setting"},g.default.createElement("span",null,"\u6717\u8BFB\u8BED\u8A00"),d.mode==="bi"&&ie.en&&ie.zh?g.default.createElement("div",{className:"wa-book-seg"},g.default.createElement("button",{type:"button","aria-pressed":we==="en",onClick:()=>ce({language:"en"})},"\u82F1\u6587"),g.default.createElement("button",{type:"button","aria-pressed":we==="zh",onClick:()=>ce({language:"zh"})},"\u4E2D\u6587")):g.default.createElement("p",{className:"wa-book-settings-hint"},d.mode==="bi"?`\u672C\u7AE0\u53EA\u6709${ie.en?"\u82F1\u6587":ie.zh?"\u4E2D\u6587":"\u6682\u65E0"}\u6717\u8BFB\u97F3\u9891\u3002`:`\u8DDF\u968F\u300C${d.mode==="zh"?"\u4E2D\u6587":"\u82F1\u6587"}\u300D\u9605\u8BFB\u65B9\u5F0F\u6717\u8BFB${d.mode==="zh"&&!ie.zh?"\uFF08\u672C\u7AE0\u6682\u65E0\u4E2D\u6587\u97F3\u9891\uFF0C\u4F7F\u7528\u82F1\u6587\uFF09":""}\u3002`)),g.default.createElement("p",{className:"wa-book-settings-hint"},"\u9605\u8BFB\u6A21\u5F0F\u4E0E\u5B57\u53F7\u4F1A\u8BB0\u4F4F\uFF1B\u7A7A\u683C\u64AD\u653E/\u6682\u505C\uFF0C\u5DE6\u53F3\u65B9\u5411\u952E\u5207\u6362\u53E5\u5B50\u3002"))):null,g.default.createElement("div",{className:"wa-book-scroll",ref:Me,onScroll:()=>Ce(!1)},g.default.createElement("article",{className:"wa-book-page"},g.default.createElement("header",{className:"wa-book-chapter-head"},g.default.createElement("div",{className:`wa-book-plate ${Y?"is-loaded":""}`},r.plate?g.default.createElement("img",{src:ta(r.plate),alt:"\u7AE0\u8282\u9898\u56FE",loading:"lazy",onLoad:()=>ne(!0),onError:()=>ne(!1)}):null,!r.plate||!Y?g.default.createElement("div",{className:"wa-book-plate-empty","aria-hidden":"true"}):null),g.default.createElement("p",{className:"wa-book-kicker"},t.titleZh," \xB7 ",r.labelZh),g.default.createElement("p",{className:"wa-book-roman","aria-hidden":"true"},zt(r.n)),g.default.createElement("h1",null,r.titleZh||r.labelZh),g.default.createElement("p",{className:"wa-book-caption"},"\u7EA6 ",r.minutes," \u5206\u949F \xB7 ",r.words," \u8BCD"),Oe?g.default.createElement("button",{type:"button",className:"wa-book-listen-link",onClick:()=>{y(!0),w||ze(G>=0?G:0)}},g.default.createElement(E,{name:"headphones",size:15})," \u542C\u8FD9\u4E00\u7AE0"):g.default.createElement("p",{className:"wa-book-no-audio"},"\u672C\u7AE0\u6682\u65E0\u6717\u8BFB\u97F3\u9891\uFF0C\u5148\u8BFB\u6587\u5B57\u5427\u3002")),g.default.createElement("div",{className:"wa-book-text",id:"wa-book-text",tabIndex:-1},(pe.paras||[]).map((M,O)=>g.default.createElement(oi,{key:M.id,paragraph:M,mode:d.mode,activeId:_e,audioLang:we,onWord:ja,onPlay:Fa,lookupMode:j}))),g.default.createElement("footer",{className:"wa-book-end"},g.default.createElement("span",{className:`wa-book-end-mark ${Se?"is-lit":""}`,"aria-hidden":"true"}),g.default.createElement("p",{className:"wa-book-end-caption"},Se?"\u8FD9\u4E00\u7AE0\uFF0C\u5DF2\u7ECF\u8BFB\u5B8C\u4E86\u3002":"\u8BFB\u5230\u8FD9\u91CC\uFF0C\u6536\u4E0B\u672C\u7AE0\u7684\u8BCD\u5427\u3002"),ma.length?g.default.createElement("section",{className:"wa-book-end-words"},g.default.createElement("h2",null,"\u672C\u7AE0\u51FA\u73B0\u7684\u96C5\u601D\u8BCD"),g.default.createElement("div",null,ma.map(M=>g.default.createElement("button",{key:M.id,type:"button",onClick:()=>s(M.id)},g.default.createElement("span",{lang:"en"},M.word),g.default.createElement("small",null,M.zh))))):null,g.default.createElement("div",{className:"wa-book-end-actions"},g.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary wa-btn-lg",onClick:qe},"\u8BFB\u5B8C\u672C\u7AE0 ",g.default.createElement(E,{name:"check",size:17})),ga?g.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:()=>i(ga)},"\u4E0B\u4E00\u7AE0 \xB7 ",ga.labelZh," ",g.default.createElement(E,{name:"chevronRight",size:16})):null),H?g.default.createElement("p",{className:"wa-book-notice",role:"status"},H):null))),Oe?g.default.createElement("div",{className:"wa-book-player",role:"region","aria-label":"\u7AE0\u8282\u6717\u8BFB"},g.default.createElement("div",{className:"wa-book-progress",role:"progressbar","aria-valuemin":0,"aria-valuemax":Oe,"aria-valuenow":G+1},g.default.createElement("i",{style:{transform:`scaleX(${(G+1)/Math.max(1,Oe)})`}})),g.default.createElement("div",{className:"wa-book-player-inner"},g.default.createElement("button",{type:"button",className:"wa-icon-btn",onClick:()=>De(-1),disabled:G<=0,"aria-label":"\u4E0A\u4E00\u53E5"},g.default.createElement(E,{name:"chevronLeft",size:21})),g.default.createElement("button",{type:"button",className:"wa-book-play",onClick:Re,"aria-label":F?"\u53D6\u6D88\u52A0\u8F7D":w?"\u6682\u505C\u6717\u8BFB":"\u64AD\u653E\u6717\u8BFB"},F?g.default.createElement(E,{name:"refresh",size:21,className:"wa-book-spin"}):g.default.createElement(E,{name:w?"pause":"play",size:23})),g.default.createElement("button",{type:"button",className:"wa-icon-btn",onClick:()=>De(1),disabled:G>=Oe-1,"aria-label":"\u4E0B\u4E00\u53E5"},g.default.createElement(E,{name:"chevronRight",size:21})),g.default.createElement("div",{className:"wa-book-player-count"},g.default.createElement("span",null,G+1," / ",Oe),g.default.createElement("small",null,F?"\u6B63\u5728\u52A0\u8F7D\u2026":H||(w?`${we==="zh"?"\u4E2D\u6587":"\u82F1\u6587"}\u6717\u8BFB`:"\u4ECE\u672C\u53E5\u7EE7\u7EED"))),g.default.createElement("button",{type:"button",className:`wa-book-follow ${se?"is-on":""}`,onClick:()=>S(M=>!M)},se?"\u8DDF\u968F":"\u5DF2\u6682\u505C\u6EDA\u52A8"),d.mode==="bi"&&ie.en&&ie.zh?g.default.createElement("button",{type:"button",className:"wa-book-speed",onClick:()=>ce({language:we==="en"?"zh":"en"}),"aria-label":"\u5207\u6362\u6717\u8BFB\u8BED\u8A00"},we==="en"?"EN":"\u4E2D"):null,g.default.createElement("button",{type:"button",className:"wa-book-speed",onClick:lr,"aria-label":`\u6717\u8BFB\u901F\u5EA6 ${d.speed} \u500D`},d.speed,"\xD7"),g.default.createElement("button",{type:"button",className:"wa-book-listen-btn",onClick:()=>{y(!0),w||ze(G>=0?G:0)}},"\u8046\u542C")),g.default.createElement("audio",{ref:te,preload:"metadata",onCanPlay:()=>B(!1),onWaiting:()=>B(!0),onStalled:()=>B(!0),onPlaying:()=>{N(!0),B(!1),K("")},onPause:()=>N(!1),onTimeUpdate:En,onEnded:In,onError:M=>{M.currentTarget.dataset.src&&(B(!1),N(!1),K("\u6717\u8BFB\u6587\u4EF6\u6682\u65F6\u4E0D\u53EF\u7528\uFF0C\u53EF\u4EE5\u5148\u8BFB\u6587\u5B57\u3002"))}})):null,m?g.default.createElement(nt,{atlas:a,progress:e,refId:m.id,surface:m.surface,anchor:m.anchor,onClose:()=>v(null),onOpenWord:s}):null,z?g.default.createElement("div",{className:"wa-book-listen",role:"dialog","aria-modal":"true","aria-label":"\u8046\u542C\u6A21\u5F0F"},r.plate?g.default.createElement("div",{className:"wa-book-listen-bg",style:{backgroundImage:`url(${ta(r.plate)})`},"aria-hidden":"true"}):null,g.default.createElement("div",{className:"wa-book-listen-veil","aria-hidden":"true"}),g.default.createElement("header",{className:"wa-book-listen-top"},g.default.createElement("button",{type:"button",className:"wa-book-listen-back",onClick:()=>y(!1)},g.default.createElement(E,{name:"chevronLeft",size:17})," \u8FD4\u56DE\u9605\u8BFB"),g.default.createElement("p",null,t.titleZh," \xB7 ",r.labelZh,r.titleZh?` \xB7 ${r.titleZh}`:""),g.default.createElement("div",{className:"wa-book-listen-modes",role:"group","aria-label":"\u9605\u8BFB\u65B9\u5F0F"},zn.map(([M,O])=>g.default.createElement("button",{key:M,type:"button","aria-pressed":d.mode===M,onClick:()=>ce({mode:M})},O)))),g.default.createElement("div",{className:"wa-book-listen-body"},g.default.createElement("p",{className:"wa-book-listen-text",lang:Pa},$n),sr?g.default.createElement("p",{className:"wa-book-listen-zh"},sr):null,F||H?g.default.createElement("p",{className:"wa-book-listen-status"},F?"\u6B63\u5728\u52A0\u8F7D\u6717\u8BFB\u2026":H):null),g.default.createElement("footer",{className:"wa-book-listen-controls"},g.default.createElement("button",{type:"button",className:"wa-icon-btn",onClick:()=>De(-1),disabled:G<=0,"aria-label":"\u4E0A\u4E00\u53E5"},g.default.createElement(E,{name:"chevronLeft",size:22})),g.default.createElement("button",{type:"button",className:"wa-book-listen-play",onClick:Re,"aria-label":F?"\u53D6\u6D88\u52A0\u8F7D":w?"\u6682\u505C\u6717\u8BFB":"\u64AD\u653E\u6717\u8BFB"},F?g.default.createElement(E,{name:"refresh",size:23,className:"wa-book-spin"}):g.default.createElement(E,{name:w?"pause":"play",size:26})),g.default.createElement("button",{type:"button",className:"wa-icon-btn",onClick:()=>De(1),disabled:G>=Oe-1,"aria-label":"\u4E0B\u4E00\u53E5"},g.default.createElement(E,{name:"chevronRight",size:22})),g.default.createElement("span",{className:"wa-book-listen-count"},G+1," / ",Oe),d.mode==="bi"&&ie.en&&ie.zh?g.default.createElement("button",{type:"button",className:"wa-book-speed",onClick:()=>ce({language:we==="en"?"zh":"en"}),"aria-label":"\u5207\u6362\u6717\u8BFB\u8BED\u8A00"},we==="en"?"EN":"\u4E2D"):null,g.default.createElement("button",{type:"button",className:"wa-book-speed",onClick:lr},d.speed,"\xD7"))):null)}function Sn({atlas:a,progress:e,onOpenWord:t,onReaderFocus:r}){let[n,o]=(0,W.useState)(null),[i,s]=(0,W.useState)(""),[l,f]=(0,W.useState)(null);return(0,W.useEffect)(()=>{let p=!0;return Rr().then(d=>p&&o(Array.isArray(d.books)?d.books:[])).catch(d=>p&&s(d.message||"\u4E66\u67B6\u52A0\u8F7D\u5931\u8D25\u3002")),()=>{p=!1}},[]),i?W.default.createElement(Ae,{icon:"library",title:"\u4E66\u67B6\u6682\u65F6\u6253\u4E0D\u5F00"},W.default.createElement("p",null,i)):n?l?W.default.createElement(Ct,{key:`${l.book.id}:${l.meta.n}`,atlas:a,progress:e,book:l.book,meta:l.meta,restorePid:l.restorePid,onBack:()=>f(null),onOpenChapter:p=>f({book:l.book,meta:p,restorePid:null}),onOpenWord:t,onReaderFocus:r}):W.default.createElement("section",{className:"wa-books"},n.map(p=>W.default.createElement(ii,{key:p.id,book:p,atlas:a,progress:e,onOpenChapter:(d,c)=>f({book:p,meta:d,restorePid:c})})),W.default.createElement("p",{className:"wa-books-colophon"},"\u4E66\u6E90\u4E0E\u7FFB\u8BD1\u6765\u81EA\u8BCD\u5149\u7EBF\u4E0A\u7AD9\u70B9\uFF1B\u9605\u8BFB\u8FDB\u5EA6\u4F1A\u6309\u7AE0\u8282\u4FDD\u5B58\uFF0C\u6717\u8BFB\u97F3\u9891\u6309\u9700\u52A0\u8F7D\u3002")):W.default.createElement(xe,{label:"\u6B63\u5728\u642C\u4E66\u4E0A\u67B6\u2026"})}function ii({book:a,atlas:e,progress:t,onOpenChapter:r}){let n=t.readings?.[Xe(a.id)],o=(0,W.useMemo)(()=>new Set(a.chapters.filter(c=>t.readings?.[Ye(a.id,c.n)]?.done).map(c=>c.n)),[a,t.readings]),i=a.chapters.find(c=>c.ready&&!o.has(c.n)),s=(n?.chapter?a.chapters.find(c=>c.n===n.chapter):null)||i||a.chapters.find(c=>c.ready)||a.chapters[0],l=n&&s&&n.chapter===s.n?n.pid:null,f=a.chapters.filter(c=>c.ready).length,p=s?Math.round(o.size/Math.max(1,f)*100):0,d=a.cover||a.coverSmall;return W.default.createElement("article",{className:"wa-book-shelf"},W.default.createElement("div",{className:"wa-book-hero"},W.default.createElement("button",{type:"button",className:"wa-book-cover-link",disabled:!s,onClick:()=>s&&r(s,l),"aria-label":`\u7EE7\u7EED\u9605\u8BFB\u300A${a.titleZh}\u300B`},W.default.createElement("span",{className:"wa-book-cover-frame"},W.default.createElement("img",{src:an(d),alt:`${a.titleZh}\u5C01\u9762`,onError:c=>{c.currentTarget.style.visibility="hidden"}}))),W.default.createElement("div",{className:"wa-book-copy"},W.default.createElement("p",{className:"wa-eyebrow"},a.level," \xB7 ",a.year),W.default.createElement("h2",null,a.titleZh),W.default.createElement("p",{className:"wa-book-en-title",lang:"en"},a.title),W.default.createElement("p",{className:"wa-book-byline"},a.authorZh," \xB7 ",a.author),W.default.createElement("p",{className:"wa-book-blurb"},a.blurbZh),W.default.createElement("p",{className:"wa-book-firstline",lang:"en"},"\u201C",a.firstLine,"\u201D"),a.firstLineZh?W.default.createElement("p",{className:"wa-book-firstline-zh"},"\u201C",a.firstLineZh,"\u201D"):null,W.default.createElement("div",{className:"wa-book-progress"},W.default.createElement("div",{className:"wa-book-progress-copy"},W.default.createElement("span",null,"\u5DF2\u8BFB ",o.size," / ",f," \u7AE0"),W.default.createElement("small",null,p,"%")),W.default.createElement("div",{className:"wa-book-progress-track"},W.default.createElement("i",{style:{width:`${p}%`}}))),W.default.createElement("div",{className:"wa-book-actions"},W.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary wa-btn-lg",disabled:!s,onClick:()=>s&&r(s,l)},o.size?"\u7EE7\u7EED\u9605\u8BFB":"\u5F00\u59CB\u9605\u8BFB"," \xB7 ",s?.labelZh||"\u7B2C\u4E00\u7AE0"," ",W.default.createElement(E,{name:"chevronRight",size:17})),W.default.createElement("span",{className:"wa-book-actions-note"},n?`\u4E0A\u6B21\u8BFB\u5230\u7B2C ${n.chapter} \u7AE0 \xB7 ${Math.round((n.pct||0)*100)}%`:`\u5171 ${a.chapterCount} \u7AE0 \xB7 \u7EA6 ${a.chapters.reduce((c,u)=>c+(u.minutes||0),0)} \u5206\u949F`)))),W.default.createElement("section",{className:"wa-book-journey","aria-label":"\u7AE0\u8282\u661F\u8DEF"},W.default.createElement("div",{className:"wa-book-journey-head"},W.default.createElement("h3",null,"\u7AE0\u8282\u661F\u8DEF"),W.default.createElement("span",null,"\u70B9\u4EAE\u8BFB\u8FC7\u7684\u7AE0\u8282")),W.default.createElement("ol",{className:"wa-starpath"},a.chapters.map(c=>{let u=o.has(c.n),x=c.n===s?.n;return W.default.createElement("li",{key:c.n,className:`${u?"is-read":""} ${x?"is-current":""}`},W.default.createElement("button",{type:"button",disabled:!c.ready,onClick:()=>r(c,n?.chapter===c.n?n.pid:null),"aria-label":`${c.labelZh} ${c.titleZh}${u?"\uFF0C\u5DF2\u8BFB":""}`},W.default.createElement("span",{className:"wa-star-number"},String(c.n).padStart(2,"0")),W.default.createElement("span",{className:"wa-star-node"},W.default.createElement(E,{name:"star",size:9})),W.default.createElement("span",{className:"wa-star-copy"},W.default.createElement("strong",null,c.labelZh," \xB7 ",c.titleZh),W.default.createElement("small",null,c.minutes," \u5206\u949F \xB7 ",c.words," \u8BCD",u?" \xB7 \u5DF2\u8BFB":""))))}))))}function At({atlas:a,progress:e,initialId:t,onOpenWord:r,onReaderFocus:n}){let[o,i]=(0,$.useState)("short"),[s,l]=(0,$.useState)(!1),f=(0,$.useCallback)(T=>{l(T),n?.(T)},[n]);(0,$.useEffect)(()=>()=>n?.(!1),[n]);let[p,d]=(0,$.useState)(t||null),[c,u]=(0,$.useState)({status:"idle",data:null,error:""}),[x,L]=(0,$.useState)(0);(0,$.useEffect)(()=>{i("short"),d(t||null)},[t]),(0,$.useEffect)(()=>{if(!p){u({status:"idle",data:null,error:""});return}let T=!0;return u({status:"loading",data:null,error:""}),Qr(p).then(m=>T&&u({status:"ready",data:m,error:""})).catch(m=>T&&u({status:"error",data:null,error:m.message||"\u77ED\u6587\u52A0\u8F7D\u5931\u8D25\u3002"})),()=>{T=!1}},[p,x]);let j=T=>{re(m=>({...m,readings:{...m.readings,[T]:{done:!0,last:Date.now(),times:(m.readings?.[T]?.times||0)+1}}})),d(null)};return p?c.status==="loading"?$.default.createElement("div",{className:"wa-read-page"},$.default.createElement(xe,{label:"\u6B63\u5728\u6253\u5F00\u77ED\u6587\u2026"})):c.status!=="ready"||!c.data?$.default.createElement("div",{className:"wa-read-page"},$.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:()=>d(null)},$.default.createElement(E,{name:"chevronLeft",size:16})," \u8FD4\u56DE\u4E66\u623F"),$.default.createElement(Ae,{icon:"book",title:"\u6253\u5F00\u5931\u8D25"},$.default.createElement("p",null,c.error||"\u77ED\u6587\u5185\u5BB9\u6682\u65F6\u4E0D\u53EF\u7528\u3002"),$.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary",onClick:()=>L(T=>T+1)},"\u91CD\u8BD5"))):$.default.createElement(li,{atlas:a,item:c.data,progress:e,onOpenWord:r,onBack:()=>d(null),onDone:()=>j(c.data.id)}):$.default.createElement("div",{className:`wa-read-page ${s?"is-reader-focus":""}`},$.default.createElement("header",{className:"wa-read-head"},$.default.createElement("p",{className:"wa-eyebrow"},"\u4E66\u623F \xB7 Reading"),$.default.createElement("h1",null,"\u5728\u6545\u4E8B\u91CC\uFF0C\u6162\u6162\u8BFB\u3002"),$.default.createElement("p",null,"\u53CC\u8BED\u5BF9\u7167\uFF0C\u8F7B\u70B9\u751F\u8BCD\u67E5\u8BCD\u3002\u9605\u8BFB\u4E0D\u4F1A\u6539\u53D8 FSRS \u590D\u4E60\u8FDB\u5EA6\u3002")),$.default.createElement("div",{className:"wa-read-tabs",role:"tablist"},$.default.createElement("button",{type:"button",role:"tab","aria-selected":o==="short",className:o==="short"?"is-on":"",onClick:()=>i("short")},"\u77ED\u6587"),$.default.createElement("button",{type:"button",role:"tab","aria-selected":o==="books",className:o==="books"?"is-on":"",onClick:()=>i("books")},"\u4E66\u67B6")),o==="short"?$.default.createElement(si,{atlas:a,progress:e,onOpen:d}):$.default.createElement(Sn,{atlas:a,progress:e,onOpenWord:r,onReaderFocus:f}))}function si({atlas:a,progress:e,onOpen:t}){let[r,n]=(0,$.useState)(null),[o,i]=(0,$.useState)(""),[s,l]=(0,$.useState)("all"),[f,p]=(0,$.useState)(24);(0,$.useEffect)(()=>{let c=!0;return wt().then(u=>c&&n(Array.isArray(u.items)?u.items:[])).catch(u=>c&&i(u.message||"\u77ED\u6587\u5217\u8868\u52A0\u8F7D\u5931\u8D25\u3002")),()=>{c=!1}},[]);let d=(0,$.useMemo)(()=>r?s==="all"?r:r.filter(c=>c.cefr===s):[],[r,s]);return o?$.default.createElement(Ae,{icon:"book",title:"\u4E66\u623F\u6682\u65F6\u6253\u4E0D\u5F00"},$.default.createElement("p",null,o)):r?$.default.createElement("section",{className:"wa-short-library"},$.default.createElement("div",{className:"wa-read-filters"},$.default.createElement("button",{type:"button",className:s==="all"?"is-on":"",onClick:()=>{l("all"),p(24)}},"\u5168\u90E8"),a.cefr.map((c,u)=>$.default.createElement("button",{key:c,type:"button",className:s===u?"is-on":"",onClick:()=>{l(u),p(24)}},c))),$.default.createElement("div",{className:"wa-short-grid"},d.slice(0,f).map(c=>{let u=Qt(e,c.id);return $.default.createElement("button",{key:c.id,type:"button",className:`wa-short-card ${u?"is-read":""}`,onClick:()=>t(c.id)},$.default.createElement("div",{className:"wa-short-card-top"},$.default.createElement("span",{className:"wa-short-level"},La(c,a)),$.default.createElement("span",{className:"wa-short-topic"},$a(c,a)),u?$.default.createElement("span",{className:"wa-short-done"},$.default.createElement(E,{name:"check",size:12})," \u5DF2\u8BFB"):null),$.default.createElement("b",{className:"wa-short-zh"},c.titleZh),$.default.createElement("span",{className:"wa-short-en",lang:"en"},c.title),$.default.createElement("span",{className:"wa-short-words"},Ea(c.ids,e.cards)," \u4E2A\u672A\u5B66\u91CD\u70B9\u8BCD"))})),d.length>f?$.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost wa-read-more",onClick:()=>p(c=>c+24)},"\u518D\u770B 24 \u7BC7"):null,d.length===0?$.default.createElement("p",{className:"wa-panel-note"},"\u8FD9\u4E00\u7EA7\u6682\u65F6\u6CA1\u6709\u77ED\u6587\uFF0C\u6362\u4E2A\u7EA7\u522B\u770B\u770B\u3002"):null):$.default.createElement(xe,{label:"\u6B63\u5728\u6574\u7406\u4E66\u67B6\u2026"})}function li({atlas:a,item:e,progress:t,onOpenWord:r,onBack:n,onDone:o}){let[i,s]=(0,$.useState)(!0),[l,f]=(0,$.useState)({}),[p,d]=(0,$.useState)(!1),c=e.q||[],u=c.reduce((x,L,j)=>x+(l[j]===L.a?1:0),0);return $.default.createElement("div",{className:"wa-reader"},$.default.createElement("header",{className:"wa-reader-bar"},$.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:n},$.default.createElement(E,{name:"chevronLeft",size:16})," \u4E66\u623F"),$.default.createElement("span",{className:"wa-reader-meta"},La(e,a)," \xB7 ",$a(e,a)," \xB7 ",Ea(e.ids,t.cards)," \u4E2A\u672A\u5B66\u91CD\u70B9\u8BCD"),$.default.createElement("button",{type:"button",className:`wa-btn wa-btn-ghost ${i?"is-on":""}`,onClick:()=>s(x=>!x)},$.default.createElement(E,{name:"languages",size:15})," ",i?"\u53CC\u8BED":"\u82F1\u6587")),$.default.createElement("article",{className:"wa-reader-body"},$.default.createElement("h1",null,e.titleZh),$.default.createElement("p",{className:"wa-reader-subtitle",lang:"en"},e.title),e.paras.map((x,L)=>$.default.createElement("section",{key:L,className:"wa-reader-para"},$.default.createElement("p",{lang:"en"},$.default.createElement(We,{atlas:a,progress:t,text:x.replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g,"$2"),onOpenWord:r})),i?$.default.createElement("p",{className:"wa-reader-zh",lang:"zh"},e.zh?.[L]):null)),c.length?$.default.createElement("section",{className:"wa-reader-quiz"},$.default.createElement("h2",null,"\u7406\u89E3\u4E00\u4E0B"),c.map((x,L)=>$.default.createElement("div",{key:L,className:"wa-reader-question"},$.default.createElement("p",{lang:"en"},x.s),$.default.createElement("div",{className:"wa-reader-q-options"},[["T","True"],["F","False"],["NG","Not Given"]].map(([j,T])=>$.default.createElement("button",{key:j,type:"button",className:`${l[L]===j?"is-chosen":""} ${p&&x.a===j?"is-answer":""}`,onClick:()=>!p&&f(m=>({...m,[L]:j}))},T))),p?$.default.createElement("p",{className:`wa-reader-why ${l[L]===x.a?"is-ok":"is-bad"}`},l[L]===x.a?"\u7B54\u5BF9\u4E86\u3002":`\u6B63\u786E\u7B54\u6848\uFF1A${x.a==="T"?"True":x.a==="F"?"False":"Not Given"}\u3002`," ",x.why):null)),p?$.default.createElement("p",{className:"wa-panel-note"},"\u7B54\u5BF9 ",u," / ",c.length," \u9898"):$.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:()=>d(!0),disabled:Object.keys(l).length<c.length},"\u68C0\u67E5\u7B54\u6848")):null,$.default.createElement("div",{className:"wa-reader-actions"},$.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary wa-btn-lg",onClick:o},"\u5B8C\u6210\u9605\u8BFB ",$.default.createElement(E,{name:"check",size:17})),$.default.createElement("span",{className:"wa-panel-note"},"\u5B8C\u6210\u540E\u4F1A\u8BB0\u5F55\u5728\u4E66\u623F\uFF0C\u4E0D\u5F71\u54CD FSRS \u590D\u4E60\u8FDB\u5EA6\u3002"))))}var Cn=require("react");function nr({protocol:a,platform:e,left:t,top:r,fullscreen:n=!1}){return a==="dsh-app:"&&/Mac/.test(String(e||""))&&Number(t)<110&&Number(r)<45&&!n}function An(a,e){(0,Cn.useEffect)(()=>{let t=a.current;if(!t)return;let r=()=>{let o=t.getBoundingClientRect(),i=nr({protocol:window.location.protocol,platform:navigator.platform,left:o.left,top:o.top,fullscreen:!!document.fullscreenElement});t.dataset.titlebar=i?"true":"false"};r();let n=typeof ResizeObserver=="function"?new ResizeObserver(r):null;return n?.observe(t),window.addEventListener("resize",r),document.addEventListener("fullscreenchange",r),()=>{n?.disconnect(),window.removeEventListener("resize",r),document.removeEventListener("fullscreenchange",r),delete t.dataset.titlebar}},[a,e])}var di=D.Good;function pi(){return C.default.createElement("svg",{viewBox:"0 0 64 64",width:"34",height:"34","aria-hidden":"true"},C.default.createElement("defs",null,C.default.createElement("linearGradient",{id:"wa-brand-gold",x1:"0",y1:"0",x2:"1",y2:"1"},C.default.createElement("stop",{offset:"0",stopColor:"#FFE9A8"}),C.default.createElement("stop",{offset:"0.55",stopColor:"#F5C052"}),C.default.createElement("stop",{offset:"1",stopColor:"#D98E2B"}))),C.default.createElement("rect",{width:"64",height:"64",rx:"15",fill:"var(--dsw-alias-bg-layer-2)"}),C.default.createElement("circle",{cx:"14",cy:"18",r:"1.4",fill:"var(--dsw-alias-label-secondary)",opacity:"0.6"}),C.default.createElement("circle",{cx:"50",cy:"16",r:"1.7",fill:"var(--dsw-alias-label-secondary)",opacity:"0.6"}),C.default.createElement("circle",{cx:"50",cy:"48",r:"1.3",fill:"var(--dsw-alias-label-secondary)",opacity:"0.5"}),C.default.createElement("circle",{cx:"14",cy:"46",r:"1.5",fill:"var(--dsw-alias-label-secondary)",opacity:"0.5"}),C.default.createElement("path",{d:"M32 15 L36.6 27.4 L49 32 L36.6 36.6 L32 49 L27.4 36.6 L15 32 L27.4 27.4 Z",fill:"url(#wa-brand-gold)"}),C.default.createElement("circle",{cx:"32",cy:"32",r:"3.4",fill:"#FFF6D8"}))}var ci=[{id:"today",label:"\u4ECA\u65E5",icon:"star"},{id:"atlas",label:"\u56FE\u9274",icon:"book"},{id:"read",label:"\u4E66\u623F",icon:"library"},{id:"galaxy",label:"\u661F\u56FE",icon:"orbit"},{id:"review",label:"\u590D\u4E60",icon:"refresh"},{id:"practice",label:"\u7EC3\u4E60",icon:"keyboard"},{id:"bookmarks",label:"\u751F\u8BCD\u672C",icon:"heart"},{id:"settings",label:"\u6211\u7684",icon:"user"}];function or(){let[a,e]=(0,C.useState)(null),[t,r]=(0,C.useState)(""),[n,o]=(0,C.useState)("today"),[i,s]=(0,C.useState)(""),[l,f]=(0,C.useState)("all"),[p,d]=(0,C.useState)("all"),[c,u]=(0,C.useState)([]),[x,L]=(0,C.useState)(!1),[j,T]=(0,C.useState)(null),[m,v]=(0,C.useState)(!1),[z,y]=(0,C.useState)({mode:"today",returnView:"today"}),w=Sr(),N=(0,C.useRef)(null);An(N,n),(0,C.useEffect)(()=>{let _=q=>{(q.metaKey||q.ctrlKey)&&q.key.toLowerCase()==="k"&&(q.preventDefault(),L(_e=>!_e))};return window.addEventListener("keydown",_),()=>window.removeEventListener("keydown",_)},[]),(0,C.useEffect)(()=>{Cr();let _=!0;return ur().then(q=>{_&&e(q)}).catch(q=>{_&&r(q.message||"\u8BCD\u5E93\u52A0\u8F7D\u5931\u8D25")}),()=>{_=!1}},[]);let F=(0,C.useMemo)(()=>{if(!a)return[];let _=i.trim().toLowerCase();return a.words.filter(q=>l!=="all"&&q.cefr!==l||p!=="all"&&q.topic!==p?!1:_?q.word.toLowerCase().includes(_)||q.zh.toLowerCase().includes(_)||q.ipa.toLowerCase().includes(_):!0)},[a,i,l,p]),B=(0,C.useMemo)(()=>a?w.bookmarks.map(_=>a.byId.get(_)).filter(Boolean):[],[a,w.bookmarks]),G=(0,C.useMemo)(()=>{if(!a)return 0;let _=Date.now(),q=0;for(let _e of a.words){let Se=w.cards[_e.id];Se&&Se.due<=_&&(q+=1)}return q},[a,w.cards]),Q=(0,C.useMemo)(()=>Object.keys(w.cards).length,[w.cards]),se=(0,C.useMemo)(()=>na(w.days),[w.days]),S=n==="bookmarks"?B:F,H=c.length>0?c[c.length-1]:null,K=H&&a?a.byId.get(H):null,Y=K?S.findIndex(_=>_.id===K.id):-1,ne=c.length>1&&a?a.byId.get(c[c.length-2]):null,te=_=>u([_]),Me=_=>u(q=>q[q.length-1]===_?q:[...q,_]),ye=()=>u(_=>_.slice(0,-1)),He=_=>re(q=>Lr(q,_)),Lt=_=>re(q=>q.cards[_]?q:{...q,cards:{...q.cards,[_]:Ja(void 0,di)},days:Ar(q.days,{newWords:1})}),ua=()=>re(_=>({..._,settings:{..._.settings,accent:_.settings.accent==="uk"?"us":"uk"}})),pe=(_={})=>{if(!a)return;let q=w.session&&!w.session.finished,_e=_.reviewOnly?"review":"today";if(q&&!_.ids&&!_.reviewOnly&&!_.extra){y({mode:w.session.mode==="review"?"review":"today",returnView:"today"}),o("learn");return}let Se=_.extra?{...w.settings,dailyNew:Ma(w)+_.extra}:w.settings,Ce={...la(a,w,Se,_),mode:_e};Ce.steps.length!==0&&(re(qe=>({...qe,session:Ce})),y({mode:_e,returnView:"today"}),o("learn"))},wa=(_={})=>{if(!a)return;if(w.session&&!w.session.finished){w.session.mode==="review"&&(y({mode:"review",returnView:"review"}),o("learn"));return}let _e=la(a,w,w.settings,{..._,reviewOnly:!0}),Se=_e.steps.filter(qe=>qe.kind!=="intro"),Ce={..._e,steps:Se,mode:"review"};Ce.steps.length!==0&&(re(qe=>({...qe,session:Ce})),y({mode:"review",returnView:"review"}),o("learn"))},ma=()=>{if(!w.session||w.session.finished)return;let _=w.session.mode==="review"?"review":"today";y({mode:_,returnView:"review"}),o("learn")},ga=()=>{if(!a)return;if(w.session&&!w.session.finished){ma();return}let q=new Set(za(w)),Se=Object.keys(w.cards).filter(ce=>a.byId.has(ce)).filter(ce=>!q.has(ce));if(!Se.length)return;let Ce=new Set(w.mistakes),fa=[...Se].sort((ce,ja)=>{let Fa=Ce.has(ce)?0:1,ea=Ce.has(ja)?0:1;if(Fa!==ea)return Fa-ea;let aa=w.cards[ce]||{},Pa=w.cards[ja]||{};return(aa.s??0)-(Pa.s??0)||(aa.due??0)-(Pa.due??0)}).slice(0,20),ze=la(a,w,w.settings,{ids:fa}),Re=ze.steps.filter(ce=>ce.kind!=="intro"),De={...ze,steps:Re,mode:"review",free:!0};De.steps.length&&(re(ce=>({...ce,session:De})),y({mode:"review",returnView:"review"}),o("learn"))},ie=(_={})=>{if(z.mode==="review"){z.returnView==="review"?wa(_):pe({..._,reviewOnly:!0});return}pe(_)},we=K&&a?C.default.createElement(ot,{atlas:a,word:K,progress:w,onClose:()=>u([]),onOpenWord:Me,onBack:c.length>1?ye:void 0,backLabel:ne?.word,onPrev:()=>{Y>0&&u(_=>[..._.slice(0,-1),S[Y-1].id])},onNext:()=>{Y>=0&&Y<S.length-1&&u(_=>[..._.slice(0,-1),S[Y+1].id])},hasPrev:Y>0,hasNext:Y>=0&&Y<S.length-1,onToggleBookmark:He,onMarkLearned:Lt}):null;return n==="learn"&&a?C.default.createElement("div",{className:"wa-root wa-root-focus",ref:N},C.default.createElement(gt,{atlas:a,progress:w,label:z.mode==="review"?"\u4ECA\u65E5\u590D\u4E60":"\u4ECA\u65E5\u5B66\u4E60",onExit:()=>o(z.returnView),onRestart:ie,onOpenWord:Me}),we):C.default.createElement("div",{className:`wa-root ${m?"is-reader-focus":""}`,ref:N},C.default.createElement("header",{className:"wa-header"},C.default.createElement("div",{className:"wa-brand"},C.default.createElement(pi,null),C.default.createElement("div",{className:"wa-brand-text"},C.default.createElement("h1",null,"\u8BCD\u5149 ",C.default.createElement("span",null,"Word Atlas")),C.default.createElement("p",null,"7,298 \u96C5\u601D\u8BCD \xB7 \u4E00\u8BCD\u4E00\u753B \xB7 FSRS \u95F4\u9694\u590D\u4E60"))),C.default.createElement("div",{className:"wa-toolbar"},C.default.createElement("div",{className:"wa-search",title:"\u2318K \u6253\u5F00\u547D\u4EE4\u9762\u677F"},C.default.createElement(E,{name:"search",size:16}),C.default.createElement("input",{value:i,onChange:_=>{s(_.target.value),n!=="atlas"&&o("atlas")},placeholder:"\u641C\u7D22\u5355\u8BCD / \u4E2D\u6587\u91CA\u4E49","aria-label":"\u641C\u7D22\u5355\u8BCD\u6216\u91CA\u4E49",spellCheck:!1}),i?C.default.createElement("button",{type:"button",className:"wa-search-clear",onClick:()=>s(""),"aria-label":"\u6E05\u7A7A\u641C\u7D22"},C.default.createElement(E,{name:"close",size:14})):null),C.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost wa-accent-btn",onClick:ua,title:"\u5207\u6362\u53D1\u97F3\u504F\u597D"},C.default.createElement(E,{name:"globe",size:15})," ",w.settings.accent==="uk"?"\u82F1\u97F3":"\u7F8E\u97F3"),C.default.createElement("button",{type:"button",className:"wa-icon-btn",onClick:()=>o("settings"),"aria-label":"\u8BBE\u7F6E\u4E0E\u5173\u4E8E"},C.default.createElement(E,{name:"info",size:18})))),C.default.createElement("nav",{className:"wa-tabs",role:"tablist","aria-label":"\u8BCD\u5149\u89C6\u56FE"},ci.map(_=>C.default.createElement("button",{key:_.id,type:"button",role:"tab","aria-selected":n===_.id,className:n===_.id?"is-on":"",onClick:()=>{_.id==="read"&&T(null),v(!1),o(_.id)}},C.default.createElement(E,{name:_.icon,size:16})," ",_.label,_.id==="atlas"&&a?C.default.createElement("span",{className:"wa-tab-count"},a.count.toLocaleString("en-US")):null,_.id==="review"&&G>0?C.default.createElement("span",{className:"wa-tab-badge"},G>999?"999+":G):null,_.id==="bookmarks"&&B.length>0?C.default.createElement("span",{className:"wa-tab-count"},B.length):null)),C.default.createElement("div",{className:"wa-tabs-meta"},C.default.createElement("span",null,"\u5DF2\u5B66 ",Q.toLocaleString("en-US")),C.default.createElement("i",null),C.default.createElement("span",null,"\u8FDE\u7EED ",se," \u5929"))),C.default.createElement("main",{className:"wa-main"},t?C.default.createElement(Ae,{icon:"info",title:"\u8BCD\u5E93\u8FD8\u6CA1\u51C6\u5907\u597D"},C.default.createElement("p",null,t),C.default.createElement("p",{className:"wa-about-note"},"\u8BF7\u786E\u8BA4 word-atlas \u63D2\u4EF6\u5DF2\u542F\u7528\u3001Host \u8DEF\u7531 ",C.default.createElement("code",null,"/word-atlas/health")," \u53EF\u8BBF\u95EE\uFF1B\u5982\u679C\u63D2\u4EF6\u521A\u5B89\u88C5\uFF0C\u5237\u65B0\u9875\u9762\u518D\u8BD5\u3002")):a?n==="today"?C.default.createElement(mt,{atlas:a,progress:w,onStart:pe,onOpenWord:Me,onOpenLevel:_=>{f(_),o("atlas")},onOpenTopic:_=>{d(_),o("atlas")},onOpenReading:_=>{T(_),o("read")}}):n==="read"?C.default.createElement(At,{atlas:a,progress:w,initialId:j,onOpenWord:Me,onReaderFocus:v}):n==="galaxy"?C.default.createElement(kt,{atlas:a,progress:w,onOpenWord:Me}):n==="practice"?C.default.createElement(yt,{atlas:a,progress:w}):n==="review"?C.default.createElement(st,{atlas:a,progress:w,onStart:wa,onFreeReview:ga,onResume:ma,onGoToday:()=>o("today")}):n==="settings"?C.default.createElement(ht,{atlas:a,progress:w,onOpenWord:Me}):n==="bookmarks"?B.length===0?C.default.createElement(Ae,{icon:"heart",title:"\u751F\u8BCD\u672C\u8FD8\u662F\u7A7A\u7684"},C.default.createElement("p",null,"\u5728\u8BCD\u6761\u5361\u7247\u6216\u8BE6\u60C5\u91CC\u70B9 \u2665\uFF0C\u628A\u60F3\u53CD\u590D\u770B\u7684\u8BCD\u6536\u8FDB\u6765\u3002"),C.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary",onClick:()=>o("atlas")},"\u53BB\u56FE\u9274")):C.default.createElement(Aa,{atlas:a,words:B,progress:w,onOpen:te,onToggleBookmark:He}):C.default.createElement(C.default.Fragment,null,C.default.createElement("div",{className:"wa-filters"},C.default.createElement("div",{className:"wa-chips",role:"group","aria-label":"CEFR \u7EA7\u522B"},C.default.createElement("button",{type:"button",className:l==="all"?"is-on":"",onClick:()=>f("all")},"\u5168\u90E8\u7EA7\u522B"),a.cefr.map(_=>C.default.createElement("button",{type:"button",key:_,className:l===_?"is-on":"",onClick:()=>f(_)},_))),C.default.createElement("div",{className:"wa-topics",role:"group","aria-label":"\u8BDD\u9898"},C.default.createElement("button",{type:"button",className:p==="all"?"is-on":"",onClick:()=>d("all")},"\u5168\u90E8\u8BDD\u9898"),a.topics.map(_=>C.default.createElement("button",{type:"button",key:_.slug,className:p===_.slug?"is-on":"",onClick:()=>d(_.slug)},_.zh)))),C.default.createElement(Aa,{atlas:a,words:F,progress:w,onOpen:te,onToggleBookmark:He}),C.default.createElement("footer",{className:"wa-footer"},"\u8BCD\u5E93 \xB7 \u63D2\u753B \xB7 \u53D1\u97F3\u6765\u81EA"," ",C.default.createElement("a",{href:"https://github.com/designfuchen/word-atlas",target:"_blank",rel:"noreferrer"},"\u8BCD\u5149 \xB7 Word Atlas")," ","\xB7 CC BY 4.0")):C.default.createElement("div",{className:"wa-boot"},C.default.createElement(xe,{label:"\u6B63\u5728\u52A0\u8F7D\u8BCD\u5149\u8BCD\u5E93\u2026"}))),we,x?C.default.createElement(Nt,{atlas:a,progress:w,onClose:()=>L(!1),onNavigate:_=>{_==="read"&&T(null),v(!1),o(_)},onOpenWord:Me}):null)}var ui="word-atlas-dsh",Ln="word-atlas";function wi({size:a=18,active:e=!1}){return ir.default.createElement("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:e?"currentColor":"none",stroke:"currentColor",strokeWidth:1.6,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"},ir.default.createElement("path",{d:"M12 3.2l2.25 4.8 5.2.72-3.78 3.65.93 5.19L12 15.1l-4.6 2.46.93-5.19-3.78-3.65 5.2-.72z"}))}var mi=["slots"],gi={App:or,DetailModal:ot,ReviewView:st,WordGrid:Aa,Settings:ht,LookupText:We,Today:mt,Learn:gt,createLookupIndex:Yt,candidateBases:Vt,detectTitlebar:nr,compact:Qe,Practice:yt,GalaxyView:kt,Palette:Nt,ReadingPage:At,BookReader:Ct,buildSentenceQueue:_t,chapterKey:Ye,positionKey:Xe,queueIndexAtTime:St,romanNumeral:zt,splitSentenceParts:Mt,session:{buildSession:la,answerSession:tt,advanceSession:Sa,gradeFor:at,sessionStats:rt,todayPlan:_a,distractors:et}};function fi(a){if(typeof document<"u"){let e=document.createElement("style");e.setAttribute("data-plugin",ui),e.textContent=pr,document.head.appendChild(e),a.effect(()=>()=>e.remove())}a.effect(()=>a.slots.inject("main",()=>a.slots.register({name:"main",key:Ln},or))),a.effect(()=>a.slots.inject("sidebar.panellist",()=>a.slots.register({name:"sidebar.panellist",id:Ln,order:22,label:()=>"\u8BCD\u5149 \xB7 Word Atlas"},wi)))}

    })(module, exports, require);
    return module.exports;
  },
});
