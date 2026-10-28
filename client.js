/* 词光 · Word Atlas — generated client bundle (build from src/client). */
window.__ModuleLoader__.load({
  id: "word-atlas-dsh",
  factory: (require) => {
    const module = { exports: {} };
    const exports = module.exports;
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    (function (module, exports, require) {
var mr=Object.create;var Qe=Object.defineProperty;var gr=Object.getOwnPropertyDescriptor;var fr=Object.getOwnPropertyNames;var hr=Object.getPrototypeOf,br=Object.prototype.hasOwnProperty;var xr=(a,e)=>{for(var t in e)Qe(a,t,{get:e[t],enumerable:!0})},nt=(a,e,t,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of fr(e))!br.call(a,n)&&n!==t&&Qe(a,n,{get:()=>e[n],enumerable:!(r=gr(e,n))||r.enumerable});return a};var oe=(a,e,t)=>(t=a!=null?mr(hr(a)):{},nt(e||!a||!a.__esModule?Qe(t,"default",{value:a,enumerable:!0}):t,a)),yr=a=>nt(Qe({},"__esModule",{value:!0}),a);var Yn={};xr(Yn,{__test:()=>Kn,apply:()=>Vn,inject:()=>qn});module.exports=yr(Yn);var tt=oe(require("react"),1);var it=`/* \u8BCD\u5149 \xB7 Word Atlas \u2014 plugin page styles.
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
`;var N=oe(require("react"),1);var Be="/word-atlas/atlas",K={img:1,uk:2,us:4,ex:8,ex2:16};async function st(a){let e=await fetch(a,{cache:"no-store"});if(!e.ok)throw new Error(`\u8BCD\u5E93\u52A0\u8F7D\u5931\u8D25\uFF08HTTP ${e.status}\uFF09`);return e.json()}function kr(a){let e=(a.topics||[]).map(([n,i])=>({slug:n,zh:i})),t=a.cefr||["A1","A2","B1","B2","C1","C2"],r=(a.words||[]).map((n,i)=>{let[s,o,l,c,p,m,g]=n;return{id:s,word:o,zh:l,ipa:c,cefr:t[p]||"",topic:e[m]?.slug||"",topicZh:e[m]?.zh||"",media:g,order:i}});return{id:a.id,name:a.name,count:a.count??r.length,examples:a.examples??0,chunk:a.chunk??100,topics:e,cefr:t,words:r,byId:new Map(r.map(n=>[n.id,n]))}}var Re=null;function ot(){return Re||(Re=st(`${Be}/index.json`).then(kr).catch(a=>{throw Re=null,a})),Re}var $a=new Map,ea=new Map;function ue(a,e){let t=$a.get(e);if(t)return Promise.resolve(t);let r=a.byId.get(e);if(!r)return Promise.reject(new Error(`\u627E\u4E0D\u5230\u8BCD\u6761 ${e}`));let n=Math.floor(r.order/a.chunk),i=ea.get(n);return i||(i=st(`${Be}/entries/${n}.json`).then(s=>{for(let o of s)$a.set(o.id,o);ea.delete(n)}).catch(s=>{throw ea.delete(n),s}),ea.set(n,i)),i.then(()=>{let s=$a.get(e);if(!s)throw new Error(`\u627E\u4E0D\u5230\u8BCD\u6761 ${e}`);return s})}var Ue=a=>`/word-atlas/brand/${a}`,lt=a=>`${Be}/thumb/${a}.webp`,aa=a=>`${Be}/img/${a}.webp`,X=(a,e)=>`${Be}/audio/${a}/${e}.mp3`;function Nr(a){return a&&(typeof a.media=="number"?a.media:a.m)||0}function Z(a,e){return(Nr(a)&e)!==0}var ct=require("react"),ut="/word-atlas/api/progress",wt="word-atlas-dsh:progress:v1",Ta={accent:"uk",dailyNew:10,retention:.9,startLevel:0,spell:!0,autoplay:!0};function mt(){return{v:1,cards:{},bookmarks:[],days:{},mistakes:[],typing:[],session:null,settings:{...Ta}}}function _r(a){return!a||typeof a!="object"||Array.isArray(a)||typeof a.id!="string"||!Array.isArray(a.steps)||!Array.isArray(a.newIds)||!Array.isArray(a.reviewIds)||!Number.isFinite(a.index)||a.index<0||!a.graded||typeof a.graded!="object"||Array.isArray(a.graded)?null:a}function gt(a){return!a||typeof a!="object"||Array.isArray(a)||a.v!==1?null:{v:1,cards:a.cards&&typeof a.cards=="object"&&!Array.isArray(a.cards)?a.cards:{},bookmarks:Array.isArray(a.bookmarks)?a.bookmarks.filter(e=>typeof e=="string"):[],days:a.days&&typeof a.days=="object"&&!Array.isArray(a.days)?a.days:{},mistakes:Array.isArray(a.mistakes)?a.mistakes.filter(e=>typeof e=="string").slice(0,300):[],typing:Array.isArray(a.typing)?a.typing.slice(-500):[],session:_r(a.session),settings:{...Ta,...a.settings&&typeof a.settings=="object"?a.settings:{}},...typeof a.savedAt=="number"?{savedAt:a.savedAt}:{}}}function zr(){try{let a=localStorage.getItem(wt);return a?gt(JSON.parse(a)):null}catch{return null}}function ta(){try{localStorage.setItem(wt,JSON.stringify(te))}catch{}}var te=zr()||mt(),Da=new Set,Ia=null,dt=!1;function ra(){for(let a of Da)a()}function ft(){clearTimeout(Ia),Ia=setTimeout(na,800)}function pt(){return te}function Mr(a){return Da.add(a),()=>Da.delete(a)}function ht(){return(0,ct.useSyncExternalStore)(Mr,pt,pt)}function re(a){let e=a(te);!e||e===te||(te={...e,v:1,savedAt:Date.now()},ta(),ra(),ft())}function na(){if(clearTimeout(Ia),!te.savedAt)return;let a=JSON.stringify(te);fetch(ut,{method:"POST",headers:{"Content-Type":"application/json"},body:a}).catch(()=>{})}async function bt(){if(!dt){dt=!0;try{let a=await fetch(ut,{cache:"no-store"});if(!a.ok)return;let e=gt(await a.json());if(!e)return;let t=e.savedAt||0,r=te.savedAt||0;t>r?(te=e,ta(),ra()):r>t&&ft()}catch{}}}function Se(a=new Date){return`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,"0")}-${String(a.getDate()).padStart(2,"0")}`}function ia(a,{newWords:e=0,reviewed:t=0,correct:r=0}={}){let n=Se(),i=a[n]||{n:0,r:0,c:0};return{...a,[n]:{n:i.n+e,r:i.r+t,c:i.c+r}}}function Ae(a,e=new Date){let t=0,r=new Date(e);for(;;){let n=a[Se(r)];if(!n||(n.n||0)+(n.r||0)===0){if(t===0&&Se(r)===Se(e)){r.setDate(r.getDate()-1);continue}break}t+=1,r.setDate(r.getDate()-1)}return t}function xt(a,e){let t=a.bookmarks.includes(e);return{...a,bookmarks:t?a.bookmarks.filter(r=>r!==e):[e,...a.bookmarks]}}var yt="word-atlas-open";function Ne(a){return!!a&&typeof a=="object"&&!Array.isArray(a)}function we(a,e=0,t=1/0){return typeof a=="number"&&Number.isFinite(a)&&a>=e&&a<=t}function Sr(a){return Ne(a)&&we(a.due)&&we(a.s)&&we(a.d,0,11)&&we(a.el)&&we(a.sd)&&we(a.ls)&&we(a.reps)&&we(a.lapses)&&[0,1,2,3].includes(a.st)&&(a.last===void 0||we(a.last))&&we(a.seen)}function vt(){return na(),JSON.stringify({app:"word-atlas",version:2,exported:new Date().toISOString(),progress:{version:2,datasetId:yt,cards:te.cards,bookmarks:te.bookmarks,days:te.days,typing:te.typing,session:null,mistakes:te.mistakes},settings:te.settings},null,1)}function kt(a){let e;try{e=JSON.parse(a)}catch{return{ok:!1,error:"\u6587\u4EF6\u4E0D\u662F\u6709\u6548\u7684 JSON\u3002"}}if(!Ne(e)||e.app!=="word-atlas"||e.version!==2||!Ne(e.progress))return{ok:!1,error:"\u8FD9\u4E0D\u662F\u8BCD\u5149\u7684\u5B66\u4E60\u5907\u4EFD\u3002"};let t=e.progress;if(typeof t.datasetId=="string"&&t.datasetId!==yt)return{ok:!1,error:"\u5907\u4EFD\u6765\u81EA\u53E6\u4E00\u4E2A\u8BCD\u5E93\uFF0C\u8BF7\u4F7F\u7528\u8BCD\u5149\u5F00\u653E\u8BCD\u5E93\u7684\u5907\u4EFD\u3002"};let r={};if(Ne(t.cards))for(let[c,p]of Object.entries(t.cards))Sr(p)&&(r[c]=p);let n=Array.isArray(t.bookmarks)?t.bookmarks.filter(c=>typeof c=="string").slice(0,2e4):[],i={};if(Ne(t.days))for(let[c,p]of Object.entries(t.days)){if(!/^\d{4}-\d{2}-\d{2}$/.test(c)||!Ne(p))continue;let m=Number(p.n)||0,g=Number(p.r)||0,d=Number(p.c)||0;i[c]={n:m,r:g,c:d}}let s=Array.isArray(t.mistakes)?t.mistakes.filter(c=>typeof c=="string").slice(0,300):[],o=Array.isArray(t.typing)?t.typing.slice(-500):[],l={...Ta,...Ne(e.settings)?e.settings:{}};return te={v:1,cards:r,bookmarks:n,days:i,mistakes:s,typing:o,settings:l,savedAt:Date.now()},ta(),ra(),na(),{ok:!0,cards:Object.keys(r).length}}function Nt(){te={...mt(),savedAt:Date.now()},ta(),ra(),na()}var Oa=class a extends Error{constructor(e="FSRS Error"){super(e),this.name="FSRSError",Error.captureStackTrace?.(this,a)}},Q=class a extends Oa{constructor(e){super(e),this.name="FSRSValidationError",Error.captureStackTrace?.(this,a)}},B=(a=>(a[a.New=0]="New",a[a.Learning=1]="Learning",a[a.Review=2]="Review",a[a.Relearning=3]="Relearning",a))(B||{}),M=(a=>(a[a.Manual=0]="Manual",a[a.Again=1]="Again",a[a.Hard=2]="Hard",a[a.Good=3]="Good",a[a.Easy=4]="Easy",a))(M||{}),V=class a{static card(e){return{...e,state:a.state(e.state),due:a.time(e.due),last_review:e.last_review?a.time(e.last_review):void 0}}static rating(e){if(typeof e=="string"){let t=e.charAt(0).toUpperCase(),r=e.slice(1).toLowerCase(),n=M[`${t}${r}`];if(n===void 0)throw new Q(`Invalid rating:[${e}]`);return n}else if(typeof e=="number")return e;throw new Q(`Invalid rating:[${e}]`)}static state(e){if(typeof e=="string"){let t=e.charAt(0).toUpperCase(),r=e.slice(1).toLowerCase(),n=B[`${t}${r}`];if(n===void 0)throw new Q(`Invalid state:[${e}]`);return n}else if(typeof e=="number")return e;throw new Q(`Invalid state:[${e}]`)}static time(e){if(e instanceof Date)return e;let t=new Date(e);if(typeof e=="object"&&e!==null&&!Number.isNaN(Date.parse(e)||+t))return t;if(typeof e=="string"){let r=Date.parse(e);if(Number.isNaN(r))throw new Q(`Invalid date:[${e}]`);return new Date(r)}else if(typeof e=="number")return new Date(e);throw new Q(`Invalid date:[${e}]`)}static review_log(e){return{...e,due:a.time(e.due),rating:a.rating(e.rating),state:a.state(e.state),review:a.time(e.review)}}};Date.prototype.scheduler=function(a,e){return pe(this,a,e)};Date.prototype.diff=function(a,e){return Ce(this,a,e)};Date.prototype.format=function(){return Ar(this)};Date.prototype.dueFormat=function(a,e,t){return Cr(this,a,e,t)};function pe(a,e,t){return new Date(t?V.time(a).getTime()+e*24*60*60*1e3:V.time(a).getTime()+e*60*1e3)}function Ce(a,e,t){if(!a||!e)throw new Q("Invalid date");let r=V.time(a).getTime()-V.time(e).getTime(),n=0;switch(t){case"days":n=Math.floor(r/(1440*60*1e3));break;case"minutes":n=Math.floor(r/(60*1e3));break}return n}function Ar(a){let e=V.time(a),t=e.getFullYear(),r=e.getMonth()+1,n=e.getDate(),i=e.getHours(),s=e.getMinutes(),o=e.getSeconds();return`${t}-${We(r)}-${We(n)} ${We(i)}:${We(s)}:${We(o)}`}function We(a){return a<10?`0${a}`:`${a}`}var ja=[60,60,24,31,12],Fa=["second","min","hour","day","month","year"];function Cr(a,e,t,r=Fa){a=V.time(a),e=V.time(e),r.length!==Fa.length&&(r=Fa);let n=a.getTime()-e.getTime(),i=0;for(n/=1e3,i=0;i<ja.length&&!(n<ja[i]);i++)n/=ja[i];return`${Math.floor(n)}${t?r[i]:""}`}var Lr=Object.freeze([M.Again,M.Hard,M.Good,M.Easy]),Er=[{start:2.5,end:7,factor:.15},{start:7,end:20,factor:.1},{start:20,end:1/0,factor:.05}];function $r(a,e,t){let r=1;for(let s of Er)r+=s.factor*Math.max(Math.min(a,s.end)-s.start,0);a=Math.min(a,t);let n=Math.max(2,Math.round(a-r)),i=Math.min(Math.round(a+r),t);return a>e&&(n=Math.max(n,e+1)),n=Math.min(n,i),{min_ivl:n,max_ivl:i}}function ce(a,e,t){return Math.min(Math.max(a,e),t)}function de(a,e){let t=10**e;return Math.round(a*t)/t}function Dr(a,e){let t=Date.UTC(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate()),r=Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate());return Math.floor((r-t)/864e5)}var Ir=a=>{let e=a.slice(-1),t=parseInt(a.slice(0,-1),10);if(Number.isNaN(t)||!Number.isFinite(t)||t<0)throw new Q(`Invalid step value: ${a}`);switch(e){case"m":return t;case"h":return t*60;case"d":return t*1440;default:throw new Q(`Invalid step unit: ${a}, expected m/h/d`)}},Tr=(a,e,t)=>{let r=e===B.Relearning||e===B.Review?a.relearning_steps:a.learning_steps,n=r.length;if(n===0||t>=n)return{};let i=r[0],s=Ir,o=()=>s(i),l=()=>{if(n===1)return Math.round(s(i)*1.5);let d=r[1];return Math.round((s(i)+s(d))/2)},c=d=>d<0||d>=n?null:r[d],p=d=>s(d),m={},g=c(Math.max(0,t));if(e===B.Review)return m[M.Again]={scheduled_minutes:s(g),next_step:0},m;{m[M.Again]={scheduled_minutes:o(),next_step:0},m[M.Hard]={scheduled_minutes:l(),next_step:t};let d=c(t+1);if(d){let _=p(d);_&&(m[M.Good]={scheduled_minutes:Math.round(_),next_step:t+1})}}return m};function jr(){let a=this.review_time.getTime(),e=this.current.reps,t=this.current.difficulty*this.current.stability;return`${a}_${e}_${t}`}var pa=(a=>(a.SCHEDULER="Scheduler",a.LEARNING_STEPS="LearningSteps",a.SEED="Seed",a))(pa||{}),oa=class{last;current;review_time;next=new Map;algorithm;strategies;elapsed_days=0;constructor(e,t,r,n){this.algorithm=r,this.last=V.card(e),this.current=V.card(e),this.review_time=V.time(t),this.strategies=n,this.init()}checkGrade(e){if(!Number.isFinite(e)||e<1||e>4)throw new Q(`Invalid grade "${e}",expected 1-4`)}init(){let{state:e,last_review:t}=this.current,r=0;e!==B.New&&t&&(r=Dr(t,this.review_time)),this.current.last_review=this.review_time,this.elapsed_days=r,this.current.elapsed_days=r,this.current.reps+=1;let n=jr;if(this.strategies){let i=this.strategies.get(pa.SEED);i&&(n=i)}this.algorithm.seed=n.call(this)}preview(){return{[M.Again]:this.review(M.Again),[M.Hard]:this.review(M.Hard),[M.Good]:this.review(M.Good),[M.Easy]:this.review(M.Easy),[Symbol.iterator]:this.previewIterator.bind(this)}}*previewIterator(){for(let e of Lr)yield this.review(e)}review(e){let{state:t}=this.last,r;switch(this.checkGrade(e),t){case B.New:r=this.newState(e);break;case B.Learning:case B.Relearning:r=this.learningState(e);break;case B.Review:r=this.reviewState(e);break}return r}buildLog(e){let{last_review:t,due:r,elapsed_days:n}=this.last;return{rating:e,state:this.current.state,due:t||r,stability:this.current.stability,difficulty:this.current.difficulty,elapsed_days:this.elapsed_days,last_elapsed_days:n,scheduled_days:this.current.scheduled_days,learning_steps:this.current.learning_steps,review:this.review_time}}},Pa=class{c;s0;s1;s2;constructor(e){let t=Fr();this.c=1,this.s0=t(" "),this.s1=t(" "),this.s2=t(" "),e==null&&(e=Date.now()),this.s0-=t(e),this.s0<0&&(this.s0+=1),this.s1-=t(e),this.s1<0&&(this.s1+=1),this.s2-=t(e),this.s2<0&&(this.s2+=1)}next(){let e=2091639*this.s0+this.c*23283064365386963e-26;return this.s0=this.s1,this.s1=this.s2,this.c=e|0,this.s2=e-this.c,this.s2}set state(e){this.c=e.c,this.s0=e.s0,this.s1=e.s1,this.s2=e.s2}get state(){return{c:this.c,s0:this.s0,s1:this.s1,s2:this.s2}}};function Fr(){let a=4022871197;return function(t){t=String(t);for(let r=0;r<t.length;r++){a+=t.charCodeAt(r);let n=.02519603282416938*a;a=n>>>0,n-=a,n*=a,a=n>>>0,n-=a,a+=n*4294967296}return(a>>>0)*23283064365386963e-26}}function Or(a){let e=new Pa(a),t=()=>e.next();return t.int32=()=>e.next()*4294967296|0,t.double=()=>t()+(t()*2097152|0)*11102230246251565e-32,t.state=()=>e.state,t.importState=r=>(e.state=r,t),t}var Pr="5.4.2",Br=.9,Ur=36500,Wr=!1,ca=!0,Gr=Object.freeze(["1m","10m"]),Hr=Object.freeze(["10m"]),Rn=`v${Pr} using FSRS-6.0`,ge=.001;var sa=100,_t=.5,qr=.1542,zt=Object.freeze([.212,1.2931,2.3065,8.2956,6.4133,.8334,3.0194,.001,1.8722,.1666,.796,1.4835,.0614,.2629,1.6483,.6014,1.8729,.5425,.0912,.0658,qr]),Mt=2,Kr=(a,e=ca)=>[[ge,sa],[ge,sa],[ge,sa],[ge,sa],[1,10],[.001,4],[.001,4],[.001,.75],[0,4.5],[0,.8],[.001,3.5],[.001,5],[.001,.25],[.001,.9],[0,4],[0,1],[1,6],[0,a],[0,a],[e?.01:0,.8],[.1,.8]],Le=(a,e,t=ca)=>{let r=Kr(Mt,t).slice(0,a.length);if(Math.max(0,e)>1){let n=ce(a[11]||0,r[11][0],r[11][1]),i=ce(a[13]||0,r[13][0],r[13][1]),s=ce(a[14]||0,r[14][0],r[14][1]),o=-(Math.log(n)+Math.log(Math.pow(2,i)-1)+s*.3)/e,l=ce(de(Math.sqrt(Math.max(o,0)),8),.01,Mt);r[17]&&(r[17]=[r[17][0],l]),r[18]&&(r[18]=[r[18][0],l])}return r.map(([n,i],s)=>ce(a[s]||0,n,i))};var Ha=(a,e=0,t=ca)=>{if(a===void 0)return[...zt];switch(a.length){case 21:return Le(Array.from(a),e,t);case 19:return console.debug("[FSRS-6]auto fill w from 19 to 21 length"),Le(Array.from(a),e,t).concat([0,_t]);case 17:{let r=Le(Array.from(a),e,t);return r[4]=+(r[5]*2+r[4]).toFixed(8),r[5]=+(Math.log(r[5]*3+1)/3).toFixed(8),r[6]=+(r[6]+.5).toFixed(8),console.debug("[FSRS-6]auto fill w from 17 to 21 length"),r.concat([0,0,0,_t])}default:return console.warn("[FSRS]Invalid parameters length, using default parameters"),[...zt]}},Vr=a=>{let e=Array.isArray(a?.learning_steps)?a.learning_steps:Gr,t=Array.isArray(a?.relearning_steps)?a.relearning_steps:Hr,r=a?.enable_short_term??ca,n=Ha(a?.w,t.length,r);return{request_retention:a?.request_retention||Br,maximum_interval:a?.maximum_interval||Ur,w:n,enable_fuzz:a?.enable_fuzz??Wr,enable_short_term:r,learning_steps:e,relearning_steps:t}};function Ee(a,e){let t={due:a?V.time(a):new Date,stability:0,difficulty:0,elapsed_days:0,scheduled_days:0,reps:0,lapses:0,learning_steps:0,state:B.New,last_review:void 0};return e&&typeof e=="function"?e(t):t}var St=a=>{let e=typeof a=="number"?-a:-a[20],t=Math.exp(Math.pow(e,-1)*Math.log(.9))-1;return{decay:e,factor:de(t,8)}};function Ba(a,e,t){let{decay:r,factor:n}=St(a);return de(Math.pow(1+n*e/t,r),8)}var Ua=class{param;intervalModifier;_seed;constructor(e){this.param=new Proxy(this.prepare_parameters(e),this.params_handler_proxy()),this.intervalModifier=this.calculate_interval_modifier(this.param.request_retention),this.forgetting_curve=Ba.bind(this,this.param.w)}get interval_modifier(){return this.intervalModifier}set seed(e){this._seed=e}calculate_interval_modifier(e){if(e<=0||e>1)throw new Q("Requested retention rate should be in the range (0,1]");let{decay:t,factor:r}=St(this.param.w);return de((Math.pow(e,1/t)-1)/r,8)}get parameters(){return this.param}set parameters(e){this.update_parameters(e)}params_handler_proxy(){let e=this;return{set:function(t,r,n){return r==="request_retention"&&Number.isFinite(n)?e.intervalModifier=e.calculate_interval_modifier(Number(n)):r==="w"&&(n=Ha(n,t.relearning_steps.length,t.enable_short_term),n=Le(Array.from(n),t.relearning_steps.length,t.enable_short_term),e.forgetting_curve=Ba.bind(this,n),e.intervalModifier=e.calculate_interval_modifier(Number(t.request_retention))),Reflect.set(t,r,n),!0}}}update_parameters(e){let t=this.prepare_parameters(e);for(let r in t){let n=r;this.param[n]=t[n]}}prepare_parameters=e=>{let t=Vr(e);return t.w=Le(Array.from(t.w),t.relearning_steps.length,t.enable_short_term),t};init_stability(e){return Math.max(this.param.w[e-1],.1)}init_difficulty(e){let t=this.param.w,r=t[4]-Math.exp((e-1)*t[5])+1;return de(r,8)}apply_fuzz(e,t){if(!this.param.enable_fuzz||e<2.5)return Math.round(e);let n=Or(this._seed)(),{min_ivl:i,max_ivl:s}=$r(e,t,this.param.maximum_interval);return Math.floor(n*(s-i+1)+i)}next_interval(e,t){let r=Math.min(Math.max(1,Math.round(e*this.intervalModifier)),this.param.maximum_interval);return this.apply_fuzz(r,t)}linear_damping(e,t){return de(e*(10-t)/9,8)}next_difficulty(e,t){let r=-this.param.w[6]*(t-3),n=e+this.linear_damping(r,e);return ce(this.mean_reversion(this.init_difficulty(M.Easy),n),1,10)}mean_reversion(e,t){let r=this.param.w;return de(r[7]*e+(1-r[7])*t,8)}next_recall_stability(e,t,r,n){let i=this.param.w,s=M.Hard===n?i[15]:1,o=M.Easy===n?i[16]:1;return de(ce(t*(1+Math.exp(i[8])*(11-e)*Math.pow(t,-i[9])*(Math.exp((1-r)*i[10])-1)*s*o),ge,36500),8)}next_forget_stability(e,t,r){let n=this.param.w;return de(ce(n[11]*Math.pow(e,-n[12])*(Math.pow(t+1,n[13])-1)*Math.exp((1-r)*n[14]),ge,36500),8)}next_short_term_stability(e,t){let r=this.param.w,n=Math.pow(e,-r[19])*Math.exp(r[17]*(t-3+r[18])),i=t>=M.Hard?Math.max(n,1):n;return de(ce(e*i,ge,36500),8)}forgetting_curve;next_state(e,t,r,n){let{difficulty:i,stability:s}=e??{difficulty:0,stability:0};if(t<0)throw new Q(`Invalid delta_t "${t}"`);if(r<0||r>4)throw new Q(`Invalid grade "${r}"`);if(i===0&&s===0)return{difficulty:ce(this.init_difficulty(r),1,10),stability:this.init_stability(r)};if(r===0)return{difficulty:i,stability:s};if(i<1||s<ge)throw new Q(`Invalid memory state { difficulty: ${i}, stability: ${s} }`);let o=this.param.w;n=typeof n=="number"?n:this.forgetting_curve(t,s);let l;if(t===0&&this.param.enable_short_term)l=this.next_short_term_stability(s,r);else if(r===1){let p=this.next_forget_stability(i,s,n),[m,g]=[0,0];this.param.enable_short_term&&(m=o[17],g=o[18]);let d=s/Math.exp(m*g);l=ce(de(d,8),ge,p)}else l=this.next_recall_stability(i,s,n,r);return{difficulty:this.next_difficulty(i,r),stability:l}}},la=class extends oa{learningStepsStrategy;constructor(e,t,r,n){super(e,t,r,n);let i=Tr;if(this.strategies){let s=this.strategies.get(pa.LEARNING_STEPS);s&&(i=s)}this.learningStepsStrategy=i}getLearningInfo(e,t){let r=this.algorithm.parameters;e.learning_steps=e.learning_steps||0;let n=this.learningStepsStrategy(r,e.state,e.learning_steps),i=Math.max(0,n[t]?.scheduled_minutes??0),s=Math.max(0,n[t]?.next_step??0);return{scheduled_minutes:i,next_steps:s}}applyLearningSteps(e,t,r){let{scheduled_minutes:n,next_steps:i}=this.getLearningInfo(this.current,t);if(n>0&&n<1440)e.learning_steps=i,e.scheduled_days=0,e.state=r,e.due=pe(this.review_time,Math.round(n),!1);else if(e.state=B.Review,n>=1440)e.learning_steps=i,e.due=pe(this.review_time,Math.round(n),!1),e.scheduled_days=Math.floor(n/1440);else{e.learning_steps=0;let s=this.algorithm.next_interval(e.stability,this.elapsed_days);e.scheduled_days=s,e.due=pe(this.review_time,s,!0)}}newState(e){let t=this.next.get(e);if(t)return t;let r=this.next_ds(this.elapsed_days,e);this.applyLearningSteps(r,e,B.Learning);let n={card:r,log:this.buildLog(e)};return this.next.set(e,n),n}learningState(e){let t=this.next.get(e);if(t)return t;let r=this.next_ds(this.elapsed_days,e);this.applyLearningSteps(r,e,this.last.state);let n={card:r,log:this.buildLog(e)};return this.next.set(e,n),n}reviewState(e){let t=this.next.get(e);if(t)return t;let r=this.elapsed_days,n=this.algorithm.forgetting_curve(r,this.current.stability),i=this.next_ds(r,M.Again,n),s=this.next_ds(r,M.Hard,n),o=this.next_ds(r,M.Good,n),l=this.next_ds(r,M.Easy,n);this.next_interval(s,o,l,r),this.next_state(s,o,l),this.applyLearningSteps(i,M.Again,B.Relearning),i.lapses+=1;let c={card:i,log:this.buildLog(M.Again)},p={card:s,log:super.buildLog(M.Hard)},m={card:o,log:super.buildLog(M.Good)},g={card:l,log:super.buildLog(M.Easy)};return this.next.set(M.Again,c),this.next.set(M.Hard,p),this.next.set(M.Good,m),this.next.set(M.Easy,g),this.next.get(e)}next_ds(e,t,r){let n=this.algorithm.next_state({difficulty:this.current.difficulty,stability:this.current.stability},e,t,r),i=V.card(this.current);return i.difficulty=n.difficulty,i.stability=n.stability,i}next_interval(e,t,r,n){let i,s;i=this.algorithm.next_interval(e.stability,n),s=this.algorithm.next_interval(t.stability,n),i=Math.min(i,s),s=Math.max(s,i+1);let o=Math.max(this.algorithm.next_interval(r.stability,n),s+1);e.scheduled_days=i,e.due=pe(this.review_time,i,!0),t.scheduled_days=s,t.due=pe(this.review_time,s,!0),r.scheduled_days=o,r.due=pe(this.review_time,o,!0)}next_state(e,t,r){e.state=B.Review,e.learning_steps=0,t.state=B.Review,t.learning_steps=0,r.state=B.Review,r.learning_steps=0}},da=class extends oa{newState(e){let t=this.next.get(e);if(t)return t;this.current.scheduled_days=0,this.current.elapsed_days=0;let r=0,n=this.next_ds(r,M.Again),i=this.next_ds(r,M.Hard),s=this.next_ds(r,M.Good),o=this.next_ds(r,M.Easy);return this.next_interval(n,i,s,o,r),this.next_state(n,i,s,o),this.update_next(n,i,s,o),this.next.get(e)}next_ds(e,t,r){let n=this.algorithm.next_state({difficulty:this.current.difficulty,stability:this.current.stability},e,t,r),i=V.card(this.current);return i.difficulty=n.difficulty,i.stability=n.stability,i}learningState(e){return this.reviewState(e)}reviewState(e){let t=this.next.get(e);if(t)return t;let r=this.elapsed_days,n=this.algorithm.forgetting_curve(r,this.current.stability),i=this.next_ds(r,M.Again,n),s=this.next_ds(r,M.Hard,n),o=this.next_ds(r,M.Good,n),l=this.next_ds(r,M.Easy,n);return this.next_interval(i,s,o,l,r),this.next_state(i,s,o,l),i.lapses+=1,this.update_next(i,s,o,l),this.next.get(e)}next_interval(e,t,r,n,i){let s,o,l,c;s=this.algorithm.next_interval(e.stability,i),o=this.algorithm.next_interval(t.stability,i),l=this.algorithm.next_interval(r.stability,i),c=this.algorithm.next_interval(n.stability,i),s=Math.min(s,o),o=Math.max(o,s+1),l=Math.max(l,o+1),c=Math.max(c,l+1),e.scheduled_days=s,e.due=pe(this.review_time,s,!0),t.scheduled_days=o,t.due=pe(this.review_time,o,!0),r.scheduled_days=l,r.due=pe(this.review_time,l,!0),n.scheduled_days=c,n.due=pe(this.review_time,c,!0)}next_state(e,t,r,n){e.state=B.Review,e.learning_steps=0,t.state=B.Review,t.learning_steps=0,r.state=B.Review,r.learning_steps=0,n.state=B.Review,n.learning_steps=0}update_next(e,t,r,n){let i={card:e,log:this.buildLog(M.Again)},s={card:t,log:super.buildLog(M.Hard)},o={card:r,log:super.buildLog(M.Good)},l={card:n,log:super.buildLog(M.Easy)};this.next.set(M.Again,i),this.next.set(M.Hard,s),this.next.set(M.Good,o),this.next.set(M.Easy,l)}},Wa=class{fsrs;constructor(e){this.fsrs=e}replay(e,t,r){return this.fsrs.next(e,t,r)}handleManualRating(e,t,r,n,i,s,o){if(typeof t>"u")throw new Q("reschedule: state is required for manual rating");let l,c;if(t===B.New)l={rating:M.Manual,state:t,due:o??r,stability:e.stability,difficulty:e.difficulty,elapsed_days:n,last_elapsed_days:e.elapsed_days,scheduled_days:e.scheduled_days,learning_steps:e.learning_steps,review:r},c=Ee(r),c.last_review=r;else{if(typeof o>"u")throw new Q("reschedule: due is required for manual rating");let p=Ce(o,r,"days");l={rating:M.Manual,state:e.state,due:e.last_review||e.due,stability:e.stability,difficulty:e.difficulty,elapsed_days:n,last_elapsed_days:e.elapsed_days,scheduled_days:e.scheduled_days,learning_steps:e.learning_steps,review:r},c={...e,state:t,due:o,last_review:r,stability:i||e.stability,difficulty:s||e.difficulty,elapsed_days:n,scheduled_days:p,reps:e.reps+1}}return{card:c,log:l}}reschedule(e,t){let r=[],n=Ee(e.due);for(let i of t){let s;if(i.review=V.time(i.review),i.rating===M.Manual){let o=0;n.state!==B.New&&n.last_review&&(o=Ce(i.review,n.last_review,"days")),s=this.handleManualRating(n,i.state,i.review,o,i.stability,i.difficulty,i.due?V.time(i.due):void 0)}else s=this.replay(n,i.review,i.rating);r.push(s),n=s.card}return r}calculateManualRecord(e,t,r,n){if(!r)return null;let{card:i,log:s}=r,o=V.card(e);return o.due.getTime()===i.due.getTime()?null:(o.scheduled_days=Ce(i.due,o.due,"days"),this.handleManualRating(o,i.state,V.time(t),s.elapsed_days,n?i.stability:void 0,n?i.difficulty:void 0,i.due))}};function Ge(a,e){return typeof e=="function"?e(a):a}var Ga=class extends Ua{strategyHandler=new Map;Scheduler;constructor(e){super(e);let{enable_short_term:t}=this.parameters;this.Scheduler=t?la:da}params_handler_proxy(){let e=this;return{set:function(t,r,n){return r==="request_retention"&&Number.isFinite(n)?e.intervalModifier=e.calculate_interval_modifier(Number(n)):r==="enable_short_term"?e.Scheduler=n===!0?la:da:r==="w"&&(n=Ha(n,t.relearning_steps.length,t.enable_short_term),n=Le(Array.from(n),t.relearning_steps.length,t.enable_short_term),e.forgetting_curve=Ba.bind(this,n),e.intervalModifier=e.calculate_interval_modifier(Number(t.request_retention))),Reflect.set(t,r,n),!0}}}useStrategy(e,t){return this.strategyHandler.set(e,t),this}clearStrategy(e){return e?this.strategyHandler.delete(e):this.strategyHandler.clear(),this}getScheduler(e,t){let n=this.strategyHandler.get(pa.SCHEDULER)||this.Scheduler;return new n(e,t,this,this.strategyHandler)}repeat(e,t,r){let i=this.getScheduler(e,t).preview();return Ge(i,r)}next(e,t,r,n){let i=this.getScheduler(e,t),s=V.rating(r);if(s===M.Manual)throw new Q("Cannot review a manual rating");let o=i.review(s);return Ge(o,n)}get_retrievability(e,t,r=!0){let n=V.card(e);t=t?V.time(t):new Date;let i=n.state!==B.New?Math.max(Ce(t,n.last_review,"days"),0):0,s=n.state!==B.New?this.forgetting_curve(i,+n.stability.toFixed(8)):0;return r?`${(s*100).toFixed(2)}%`:s}rollback(e,t,r){let n=V.card(e),i=V.review_log(t);if(i.rating===M.Manual)throw new Q("Cannot rollback a manual rating");let s,o,l;switch(i.state){case B.New:s=i.due,o=void 0,l=0;break;case B.Learning:case B.Relearning:case B.Review:s=i.review,o=i.due,l=n.lapses-(i.rating===M.Again&&i.state===B.Review?1:0);break}let c={...n,due:s,stability:i.stability,difficulty:i.difficulty,elapsed_days:i.last_elapsed_days,scheduled_days:i.scheduled_days,reps:Math.max(0,n.reps-1),lapses:Math.max(0,l),learning_steps:i.learning_steps,state:i.state,last_review:o};return Ge(c,r)}forget(e,t,r=!1,n){let i=V.card(e);t=V.time(t);let s=i.state===B.New?0:Ce(t,i.due,"days"),o={rating:M.Manual,state:i.state,due:i.due,stability:i.stability,difficulty:i.difficulty,elapsed_days:0,last_elapsed_days:i.elapsed_days,scheduled_days:s,learning_steps:i.learning_steps,review:t},c={card:{...i,due:t,stability:0,difficulty:0,elapsed_days:0,scheduled_days:0,reps:r?0:i.reps,lapses:r?0:i.lapses,learning_steps:0,state:B.New,last_review:i.last_review},log:o};return Ge(c,n)}reschedule(e,t=[],r={}){let{recordLogHandler:n,reviewsOrderBy:i,skipManual:s=!0,now:o=new Date,update_memory_state:l=!1}=r;i&&typeof i=="function"&&t.sort(i),s&&(t=t.filter(_=>_.rating!==M.Manual));let c=new Wa(this),p=c.reschedule(r.first_card||Ee(),t),m=p.length,g=V.card(e),d=c.calculateManualRecord(g,o,m?p[m-1]:void 0,l);return{collections:typeof n=="function"?p.map(n):p,reschedule_item:d?Ge(d,n):null}}},At=a=>new Ga(a||{});var Ct=new Map;function Lt(a){let e=Math.round(a*1e3)/1e3,t=Ct.get(e);return t||(t=At({request_retention:e,enable_fuzz:!0,enable_short_term:!0,learning_steps:["1m","10m"],relearning_steps:["10m"]}),Ct.set(e,t)),t}function Et(a){return{due:new Date(a.due),stability:a.s,difficulty:a.d,elapsed_days:a.el,scheduled_days:a.sd,learning_steps:a.ls,reps:a.reps,lapses:a.lapses,state:a.st,last_review:a.last?new Date(a.last):void 0}}function Yr(a,e){return{due:a.due.getTime(),s:a.stability,d:a.difficulty,el:a.elapsed_days,sd:a.scheduled_days,ls:a.learning_steps,reps:a.reps,lapses:a.lapses,st:a.state,last:a.last_review?a.last_review.getTime():void 0,seen:e}}var qa=[M.Again,M.Hard,M.Good,M.Easy],$t={[M.Again]:"\u91CD\u6765",[M.Hard]:"\u56F0\u96BE",[M.Good]:"\u826F\u597D",[M.Easy]:"\u7B80\u5355"};function $e(a,e,t=Date.now(),r=.9){let n=a?Et(a):Ee(new Date(t)),i=Lt(r).next(n,new Date(t),e).card;return Yr(i,a?.seen??t)}function Dt(a,e=Date.now(),t=.9){let r=a?Et(a):Ee(new Date(e)),n=Lt(t).repeat(r,new Date(e)),i={};for(let s of qa)i[s]=n[s].card.due.getTime()-e;return i}var Zr=21,me=a=>!!(a&&a.st===B.Review&&a.s>=Zr);var It=(a,e=Date.now())=>!!(a&&a.due<=e);function ua(a){if(!Number.isFinite(a))return"";let e=Math.round(a/6e4);if(e<1)return"<1\u5206";if(e<60)return`${e}\u5206`;let t=Math.round(e/60);if(t<24)return`${t}\u5C0F\u65F6`;let r=Math.round(t/24);if(r<31)return`${r}\u5929`;let n=Math.round(r/30);return n<12?`${n}\u4E2A\u6708`:`${(r/365).toFixed(1)}\u5E74`}var Xr="arise arose arisen|awake awoke awoken|bear bore borne born|beat beat beaten|become became|begin began begun beginn|bend bent|bet bet|bind bound|bite bit bitten|bleed bled|blow blew blown|break broke broken|breed bred|bring brought|broadcast broadcast|build built|burn burnt burned|burst burst|buy bought|catch caught|choose chose chosen|cling clung|come came|cost cost|creep crept|cut cut cutt|deal dealt|dig dug|do did done does|draw drew drawn|dream dreamt dreamed|drink drank drunk|drive drove driven|eat ate eaten|fall fell fallen|feed fed|feel felt|fight fought|find found|flee fled|fling flung|fly flew flown flies|forbid forbade forbidden|forget forgot forgotten|forgive forgave forgiven|freeze froze frozen|get got gotten gett|give gave given|go went gone goes|grind ground|grow grew grown|hang hung|have had has|hear heard|hide hid hidden|hit hit hitt|hold held|hurt hurt|keep kept|kneel knelt|know knew known|lay laid|lead led|lean leant leaned|leap leapt leaped|learn learnt learned|leave left|lend lent|let let|lie lay lain|light lit|lose lost|make made|mean meant|meet met|pay paid|prove proved proven|put put putt|quit quit|read read|ride rode ridden|ring rang rung|rise rose risen|run ran runn|say said|see saw seen|seek sought|sell sold|send sent|set set|sew sewed sewn|shake shook shaken|shed shed|shine shone|shoot shot|show showed shown|shrink shrank shrunk|shut shut|sing sang sung|sink sank sunk|sit sat sitt|sleep slept|slide slid|sling slung|speak spoke spoken|speed sped|spend spent|spill spilt spilled|spin spun spinn|spy spied spies|mislead misled|spit spat|split split|spread spread|spring sprang sprung|stand stood|steal stole stolen|stick stuck|sting stung|stink stank stunk|stride strode|strike struck|string strung|strive strove striven|swear swore sworn|sweep swept|swell swelled swollen|swim swam swum swimm|swing swung|take took taken|teach taught|tear tore torn|tell told|think thought|throw threw thrown|tread trod trodden|understand understood|undertake undertook undertaken|upset upset|wake woke woken|wear wore worn|weave wove woven|weep wept|win won winn|wind wound|withdraw withdrew withdrawn|write wrote written|be was were been is are am|child children|man men|woman women|foot feet|tooth teeth|mouse mice|person people|good better best|bad worse worst|far further farther furthest",jt=new Map(Xr.split("|").map(a=>a.split(" ")).map(([a,...e])=>[a,e])),De=new Map;for(let[a,e]of jt){for(let t of e)De.has(t)||De.set(t,a);De.has(a)||De.set(a,a)}function Ft(a){return String(a||"").normalize("NFKC").replace(/[’‘]/g,"'").replace(/[‐‑–—]/g,"-").trim().toLowerCase().replace(/^[^a-z']+|[^a-z']+$/g,"")}function Ka(a){let e=Ft(a);if(!e)return[];let t=[],r=i=>{i&&i.length>0&&!t.includes(i)&&t.push(i)};e.endsWith("'s")&&r(e.slice(0,-2)),/(ies|ied)$/.test(e)&&r(e.slice(0,-3)+"y"),/ying$/.test(e)&&r(e.slice(0,-4)+"ie");for(let i of["ing","ed","est","er","es","s"]){if(!e.endsWith(i)||e.length<=i.length+1)continue;let s=e.slice(0,-i.length);/([bdgmnprt])\1$/.test(s)&&(r(s),r(s.slice(0,-1))),/i$/.test(s)&&(i==="er"||i==="est"||i==="ed")&&r(s.slice(0,-1)+"y"),(i==="ing"||i==="ed")&&!/ng$/.test(s)?(r(s+"e"),r(s)):(r(s),r(s+"e"))}let n=De.get(e);return n&&r(n),t}function Va(a){let e=new Map;for(let n of a)e.set(n.word.toLowerCase(),n.id);let t=new Map;function r(n){let i=Ft(n);if(!i)return null;if(t.has(i))return t.get(i);let s=e.get(i);if(!s){let o=De.get(i);o&&(s=e.get(o))}if(!s){for(let o of Ka(i))if(s=e.get(o),s)break}return t.set(i,s??null),s??null}return{resolve:r,exact:e}}var Tt=new WeakMap;function Ot(a){let e=Tt.get(a);return e||(e=Va(a.words),Tt.set(a,e)),e}var wa=a=>String(a||"").normalize("NFKC").replace(/[’‘]/g,"'").replace(/[‐‑–—]/g,"-").replace(/\s+/g," ").trim().toLowerCase();function fe(a){let e=2166136261;for(let t=0;t<a.length;t+=1)e=Math.imul(e^a.charCodeAt(t),16777619);return e>>>0}function He(a,e=Math.random()*2**31){let t=[...a],r=Math.floor(e)||1;for(let n=t.length-1;n>0;n-=1){r=Math.imul(1664525,r)+1013904223>>>0;let i=r%(n+1);[t[n],t[i]]=[t[i],t[n]]}return t}function Jr(a){let e=a.trim().toLowerCase(),t=s=>s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");if(/\s/.test(e))return new RegExp(`(?<![A-Za-z])(${e.split(/\s+/).map(t).join("\\s+")})(?![A-Za-z])`,"i");let r=jt.get(e);if(r)return new RegExp(`(?<![A-Za-z])((?:${[e,...r].map(t).join("|")})[a-z]{0,3})(?![A-Za-z])`,"i");let n=e;e.length>3&&/[^aeiou]y$|e$/.test(e)&&(n=e.slice(0,-1));let i=/[^aeiou][aeiou][bdgmnprt]$/.test(e)?`${t(e.slice(-1))}?`:"";return new RegExp(`(?<![A-Za-z])(${t(n)}${i}[a-z]{0,4})(?![A-Za-z])`,"i")}function Pt(a,e){let t=Jr(e).exec(a);return t?{before:a.slice(0,t.index),hidden:t[0],after:a.slice(t.index+t[0].length)}:null}var Ie=(a=new Date)=>`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,"0")}-${String(a.getDate()).padStart(2,"0")}`;function Bt(a,{newWords:e=0,reviewed:t=0,correct:r=0,seconds:n=0}={}){let i=Ie(),s=a[i]||{n:0,r:0,c:0};return{...a,[i]:{n:s.n+e,r:s.r+t,c:s.c+r,...n?{t:(s.t||0)+n}:s.t?{t:s.t}:{}}}}function Qr(a,e=Date.now()){return Object.entries(a.cards).filter(([,t])=>t.due<=e).sort((t,r)=>t[1].due-r[1].due).map(([t])=>t)}function qe(a){return a.days[Ie()]?.n??0}function Rr(a,e,t,r){let n=[],i=s=>{for(let o of a.words){if(n.length>=r)return;o.cefr<s||e.cards[o.id]||n.includes(o.id)||n.push(o.id)}};return i(t.startLevel||0),n.length<r&&i(0),n}function Ke(a,e,t){let r=Qr(e).filter(i=>a.byId.has(i)),n=Rr(a,e,t,Math.max(0,(t.dailyNew||10)-qe(e)));return{due:r,fresh:n,minutes:Math.max(1,Math.round(r.length*.25+n.length*.9))}}function en(a,e,t,r){let n=e.cards[a.id],i=!!(a.media&K.img),s=fe(a.id+r)%100;return!n||n.s<2?i&&s<45?"picture":s<80?"meaning":"listen":t.spell&&(n.s>=4||s<35)?s<75?"spell":i?"picture":"listen":s<50?"listen":i?"picture":"meaning"}function ma(a,e,t,r){let n=wa(e.word),i=e.zh.replace(/^[a-z.]+\s*/,"").split(/[；;，,]/)[0],s=[],o=Math.max(0,e.order-400);for(let p=o;p<Math.min(a.words.length,e.order+400);p+=1){let m=a.words[p];if(m.id===e.id||wa(m.word)===n||i&&m.zh.includes(i))continue;let g=fe(m.id+r)%100;t==="listen"||t==="picture"?(m.word[0]?.toLowerCase()===n[0]&&(g+=120),g+=Math.max(0,60-Math.abs(m.word.length-n.length)*20)):(m.cefr===e.cefr&&(g+=40),m.zh.split(" ")[0]===e.zh.split(" ")[0]&&(g+=60)),s.push([g,m])}s.sort((p,m)=>m[0]-p[0]);let l=new Set,c=[];for(let[,p]of s){let m=t==="meaning"?p.zh:wa(p.word);if(!l.has(m)&&(l.add(m),c.push(p.id),c.length===3))break}return He([e.id,...c],r)}function ga(a,e,t,r={}){let n=Date.now(),i=Ke(a,e,t),s=r.ids?r.ids.filter(p=>e.cards[p]):i.due.slice(0,120),o=r.ids?r.ids.filter(p=>!e.cards[p]):r.reviewOnly?[]:i.fresh,l=[],c=(p,m)=>{let g=a.byId.get(p),d=en(g,e,t,n+m);return{id:p,kind:d,options:d==="spell"?void 0:ma(a,g,d,n+m)}};s.forEach((p,m)=>l.push(c(p,m)));for(let p=0;p<o.length;p+=5){let m=o.slice(p,p+5);m.forEach(g=>l.push({id:g,kind:"intro"})),He(m,n+p).forEach((g,d)=>l.push(c(g,1e3+p+d)))}return{id:`s${n}`,started:n,steps:l,index:0,graded:{},newIds:o,reviewIds:s}}function fa(a,e,t,r){if(!e)return M.Again;if(r)return M.Hard;let n=a==="spell"?2e4:9e3,i=a==="spell"?6e3:2500;return t>n?M.Hard:t<i&&a==="spell"?M.Easy:M.Good}function ha(a,e,t,r,n,i,s){let o=a.session;if(!o)return a;let l={...a,session:{...o,pending:{correct:r,value:i}}};if(!(t.id in o.graded)&&!t.retry&&(l={...l,cards:{...l.cards,[t.id]:$e(a.cards[t.id],n,Date.now(),s.retention)},session:{...l.session,graded:{...o.graded,[t.id]:n}},mistakes:r?l.mistakes:[t.id,...l.mistakes.filter(p=>p!==t.id)].slice(0,300)},l={...l,days:Bt(l.days,{reviewed:1,correct:r?1:0,newWords:o.newIds.includes(t.id)?1:0})}),!r){let p=[...l.session.steps];if(p.filter(g=>g.id===t.id&&g.retry).length<2){let g=e.byId.get(t.id),d=t.kind==="meaning"?g.media&K.img?"picture":"listen":"meaning",_=Math.min(p.length,o.index+4);p.splice(_,0,{id:t.id,kind:d,retry:!0,options:ma(e,g,d,Date.now())}),l={...l,session:{...l.session,steps:p}}}}return l}function Ve(a,e){let t=a.session;if(!t)return a;let r=t.index+1,n=r>=t.steps.length?Date.now():void 0;return{...a,days:Bt(a.days,{seconds:Math.max(0,Math.min(90,Math.round(e)))}),session:{...t,index:r,pending:void 0,finished:n}}}function ba(a){let e=Object.values(a.graded),t=e.filter(r=>r!==M.Again).length;return{total:e.length,correct:t,accuracy:e.length?Math.round(t/e.length*100):0}}var y=oe(require("react"),1);var P=oe(require("react"),1);var Y=oe(require("react"),1);var Ut={search:'<path d="m21 21-4.34-4.34" /> <circle cx="11" cy="11" r="8" />',star:'<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />',sparkle:'<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" /> <path d="M20 2v4" /> <path d="M22 4h-4" /> <circle cx="4" cy="20" r="2" />',heart:'<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />',volume:'<path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" /> <path d="M16 9a5 5 0 0 1 0 6" /> <path d="M19.364 18.364a9 9 0 0 0 0-12.728" />',close:'<path d="M18 6 6 18" /> <path d="m6 6 12 12" />',chevronLeft:'<path d="m15 18-6-6 6-6" />',chevronRight:'<path d="m9 18 6-6-6-6" />',book:'<path d="M12 5v16" /> <path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z" />',layers:'<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" /> <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" /> <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" />',refresh:'<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /> <path d="M21 3v5h-5" /> <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" /> <path d="M8 16H3v5" />',check:'<path d="M20 6 9 17l-5-5" />',info:'<circle cx="12" cy="12" r="10" /> <path d="M12 16v-4" /> <path d="M12 8h.01" />',play:'<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />',pause:'<rect x="14" y="3" width="5" height="18" rx="1" /> <rect x="5" y="3" width="5" height="18" rx="1" />',user:'<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /> <circle cx="12" cy="7" r="4" />',globe:'<circle cx="12" cy="12" r="10" /> <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /> <path d="M2 12h20" />',keyboard:'<path d="M10 8h.01" /> <path d="M12 12h.01" /> <path d="M14 8h.01" /> <path d="M16 12h.01" /> <path d="M18 8h.01" /> <path d="M6 8h.01" /> <path d="M7 16h10" /> <path d="M8 12h.01" /> <rect width="20" height="16" x="2" y="4" rx="2" />',headphones:'<path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />',type:'<path d="M12 4v16" /> <path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2" /> <path d="M9 20h6" />',rotateCcw:'<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /> <path d="M3 3v5h5" />',orbit:'<path d="M20.341 6.484A10 10 0 0 1 10.266 21.85" /> <path d="M3.659 17.516A10 10 0 0 1 13.74 2.152" /> <circle cx="12" cy="12" r="3" /> <circle cx="19" cy="5" r="2" /> <circle cx="5" cy="19" r="2" />',share:'<circle cx="18" cy="5" r="3" /> <circle cx="6" cy="12" r="3" /> <circle cx="18" cy="19" r="3" /> <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" /> <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />',plus:'<path d="M5 12h14" /> <path d="M12 5v14" />',minus:'<path d="M5 12h14" />',crosshair:'<circle cx="12" cy="12" r="10" /> <line x1="22" x2="18" y1="12" y2="12" /> <line x1="6" x2="2" y1="12" y2="12" /> <line x1="12" x2="12" y1="6" y2="2" /> <line x1="12" x2="12" y1="22" y2="18" />',command:'<path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />',arrowRight:'<path d="M5 12h14" /> <path d="m12 5 7 7-7 7" />'};function I({name:a,size:e=18,filled:t=!1,className:r="",...n}){let i=Ut[a];return i?Y.default.createElement("svg",{viewBox:"0 0 24 24",width:e,height:e,fill:t?"currentColor":"none",stroke:"currentColor",strokeWidth:t?0:1.7,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",className:r,dangerouslySetInnerHTML:{__html:i},...n}):null}function J({id:a,word:e,full:t=!1,className:r="",alt:n}){let[i,s]=(0,Y.useState)(!1),o=t?aa(a):lt(a);return i?Y.default.createElement("div",{className:`wa-img-fallback ${r}`,role:"img","aria-label":n||e},Y.default.createElement("span",null,(e||"?").slice(0,1).toUpperCase())):Y.default.createElement("img",{className:r,src:o,alt:n||`${e} \u63D2\u753B`,loading:"lazy",decoding:"async",draggable:!1,onError:()=>s(!0)})}var _e=null,Ye=null,Ya=new Set;function Wt(){for(let a of Ya)a()}function Te(){_e&&(_e.pause(),_e=null),Ye=null,Wt()}function ye(a,e){if(Ye===a){Te();return}Te();let t=new Audio(e);_e=t,Ye=a,Wt(),t.onended=()=>{_e===t&&Te()},t.onerror=()=>{_e===t&&Te()},t.play().catch(()=>{_e===t&&Te()})}function ve(){Te()}function an(){let[a,e]=(0,Y.useState)(Ye);return(0,Y.useEffect)(()=>{let t=()=>e(Ye);return Ya.add(t),()=>Ya.delete(t)},[]),a}function ne({audioKey:a,url:e,label:t,size:r=16,className:n="",title:i}){let s=an()===a;return Y.default.createElement("button",{type:"button",className:`wa-audio-btn ${s?"is-playing":""} ${n}`,onClick:()=>ye(a,e),"aria-label":i||(s?"\u505C\u6B62\u64AD\u653E":`\u64AD\u653E${t||""}`),title:i||t||"\u64AD\u653E\u53D1\u97F3"},Y.default.createElement(I,{name:s?"pause":"volume",size:r}),t?Y.default.createElement("span",null,t):null)}function Gt({onClose:a,children:e,labelledBy:t}){let r=(0,Y.useRef)(null);return(0,Y.useEffect)(()=>{let n=i=>{i.key==="Escape"&&(i.stopPropagation(),a())};return window.addEventListener("keydown",n),()=>window.removeEventListener("keydown",n)},[a]),Y.default.createElement("div",{className:"wa-overlay",ref:r,role:"dialog","aria-modal":"true","aria-labelledby":t,onMouseDown:n=>{n.target===r.current&&a()}},e)}function he({label:a="\u52A0\u8F7D\u4E2D\u2026"}){return Y.default.createElement("div",{className:"wa-loading",role:"status"},Y.default.createElement("span",{className:"wa-spinner","aria-hidden":"true"}),Y.default.createElement("span",null,a))}function ze({icon:a="sparkle",title:e,children:t}){return Y.default.createElement("div",{className:"wa-empty"},Y.default.createElement("span",{className:"wa-empty-icon"},Y.default.createElement(I,{name:a,size:26})),Y.default.createElement("h3",null,e),t?Y.default.createElement("div",{className:"wa-empty-body"},t):null)}function ke({level:a}){return Y.default.createElement("span",{className:`wa-cefr wa-cefr-${a}`},a)}function Ht(a){let e=a.includes("\uFF5C")?"\uFF5C":a.includes("|")?"|":"";if(!e)return{en:a,zh:""};let t=a.indexOf(e);return{en:a.slice(0,t).trim(),zh:a.slice(t+1).trim()}}var tn=/[A-Za-z]+(?:['’][A-Za-z]+)*/g,rn=/^[,.;:!?…’”»)\]]+/,Za="word-atlas:lookup-open";function nn(a,e){if(!e)return!1;let t=a.toLowerCase(),r=e.toLowerCase();return t===r||t.startsWith(r)}function sn({atlas:a,progress:e,token:t,refId:r,anchor:n,onClose:i,onOpenWord:s}){let o=(0,P.useRef)(null),[l,c]=(0,P.useState)({left:16,top:16}),p=r?a.byId.get(r):null,m=e.settings.accent;return(0,P.useLayoutEffect)(()=>{let g=()=>{let _=o.current?.offsetWidth??300,$=o.current?.offsetHeight??190,E=window.innerHeight-n.bottom>=$+16||n.top<$+16?n.bottom+8:Math.max(16,n.top-$-8),u=Math.max(16,Math.min(window.innerWidth-_-16,n.left+n.width/2-_/2));c({left:u,top:Math.min(E,window.innerHeight-$-16)})};g();let d=new ResizeObserver(g);return o.current&&d.observe(o.current),window.addEventListener("resize",g),()=>{d.disconnect(),window.removeEventListener("resize",g)}},[n,t,r]),(0,P.useEffect)(()=>{let g=_=>{o.current?.contains(_.target)||_.target instanceof Element&&_.target.closest("[data-wa-lookup-token]")||i()},d=_=>{_.key==="Escape"&&(_.stopImmediatePropagation(),i())};return document.addEventListener("pointerdown",g,!0),window.addEventListener("keydown",d,!0),()=>{document.removeEventListener("pointerdown",g,!0),window.removeEventListener("keydown",d,!0)}},[i]),P.default.createElement("div",{className:"wa-lookup",ref:o,style:{left:l.left,top:l.top},role:"dialog","aria-modal":"false","aria-label":`\u67E5\u8BCD\uFF1A${t}`},P.default.createElement("button",{type:"button",className:"wa-icon-btn wa-lookup-close",onClick:i,"aria-label":"\u5173\u95ED\u67E5\u8BCD"},P.default.createElement(I,{name:"close",size:16})),p?P.default.createElement(P.default.Fragment,null,P.default.createElement("div",{className:"wa-lookup-head"},Z(p,K.img)?P.default.createElement(J,{id:p.id,word:p.word,className:"wa-lookup-thumb"}):null,P.default.createElement("div",{className:"wa-lookup-title"},P.default.createElement("h3",{lang:"en"},p.word),P.default.createElement("p",null,p.ipa))),P.default.createElement("p",{className:"wa-lookup-meaning"},p.zh),P.default.createElement("div",{className:"wa-lookup-actions"},Z(p,K[m])?P.default.createElement(ne,{audioKey:`${m}:${p.id}`,url:X(m,p.id),label:"\u64AD\u653E\u53D1\u97F3"}):null,P.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary",onClick:()=>s(p.id)},"\u67E5\u770B\u8BCD\u5361"))):P.default.createElement(P.default.Fragment,null,P.default.createElement("h3",{className:"wa-lookup-missing",lang:"en"},t),P.default.createElement("p",{className:"wa-lookup-meaning"},"\u8FD9\u4E2A\u8BCD\u4E0D\u5728\u8BCD\u5149\u8BCD\u5E93\u91CC")))}function be({atlas:a,progress:e,text:t,headword:r,onOpenWord:n,className:i=""}){let s=Ot(a),[o,l]=(0,P.useState)(null);(0,P.useEffect)(()=>{if(!o)return;let p=()=>l(null);return window.addEventListener(Za,p),()=>window.removeEventListener(Za,p)},[o]);let c=(0,P.useMemo)(()=>{let p=[],m=0;for(let g of t.matchAll(tn)){let d=g.index??0;d>m&&p.push(t.slice(m,d));let _=g[0],$=s.resolve(_),D=nn(_,r),E=P.default.createElement("button",{type:"button",className:"wa-lookup-token","data-wa-lookup-token":"","aria-label":`\u67E5\u8BCD\uFF1A${_}`,"aria-haspopup":"dialog",onClick:k=>{k.stopPropagation(),window.dispatchEvent(new Event(Za));let C=k.currentTarget.getBoundingClientRect();l({token:_,refId:$,anchor:{left:C.left,top:C.top,width:C.width,height:C.height,bottom:C.bottom}})},onKeyDown:k=>{(k.key==="Enter"||k.key===" ")&&k.stopPropagation()}},_);p.push(D?P.default.createElement("mark",{key:`mark-${d}`},E):P.default.createElement(P.default.Fragment,{key:d},E)),m=d+_.length;let u=t.slice(m).match(rn)?.[0]??"";u&&(p.push(P.default.createElement("span",{key:`glue-${d}`},u)),m+=u.length)}return m<t.length&&p.push(t.slice(m)),p},[t,r,s]);return P.default.createElement("span",{className:`wa-lookup-text ${i}`},c,o?P.default.createElement(sn,{atlas:a,progress:e,token:o.token,refId:o.refId,anchor:o.anchor,onClose:()=>l(null),onOpenWord:p=>{l(null),n(p)}}):null)}var xe=1080,je=1350;function on(a){return new Promise(e=>{let t=new Image;t.crossOrigin="anonymous",t.onload=()=>e(t),t.onerror=()=>e(null),t.src=a})}function qt(a,e,t,r,n,i){if(a.beginPath(),typeof a.roundRect=="function")a.roundRect(e,t,r,n,i);else{let s=Array.isArray(i)?i[0]:i;a.moveTo(e+s,t),a.arcTo(e+r,t,e+r,t+n,s),a.arcTo(e+r,t+n,e,t+n,s),a.arcTo(e,t+n,e,t,s),a.arcTo(e,t,e+r,t,s),a.closePath()}}function Xa(a,e,t,r=3){let n=Array.from(String(e||"")),i=[],s="";for(let o of n){let l=s+o;if(a.measureText(l).width>t&&s){if(i.push(s),s=o,i.length>=r)break}else s=l}return i.length<r&&s&&i.push(s),i}async function Kt({entry:a,word:e,accent:t="uk"}){let r=document.createElement("canvas");r.width=xe,r.height=je;let n=r.getContext("2d");if(!n)return!1;let i=a?.m&1?await on(aa(e.id)):null,s=n.createLinearGradient(0,0,xe,je);s.addColorStop(0,"#0d1424"),s.addColorStop(1,"#1b2238"),n.fillStyle=s,n.fillRect(0,0,xe,je);let o=7,l=()=>(o=o*16807%2147483647,o/2147483647);for(let E=0;E<90;E+=1)n.fillStyle=`rgba(190, 205, 255, ${.08+l()*.18})`,n.beginPath(),n.arc(l()*xe,l()*je,l()*2.2+.4,0,Math.PI*2),n.fill();n.fillStyle="#f7f4ec",qt(n,90,90,xe-180,je-180,44),n.fill();let c=190,p=190,m=700;n.save(),qt(n,c,p,m,m,26),n.clip(),i?n.drawImage(i,c,p,m,m):(n.fillStyle="#e7e0d2",n.fillRect(c,p,m,m),n.fillStyle="#a88c54",n.font="700 220px system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText((e.word||"?")[0].toUpperCase(),c+m/2,p+m/2)),n.restore();let g=190,d=970;n.textAlign="left",n.textBaseline="alphabetic",n.fillStyle="#1a1a1a",n.font='700 84px Georgia, "Songti SC", serif';let _=a?.w||e.word;n.fillText(_.length>16?`${_.slice(0,15)}\u2026`:_,g,d);let $=t==="us"?a?.us||a?.uk:a?.uk||a?.us;$&&(n.fillStyle="#8a8377",n.font="400 28px ui-monospace, Menlo, monospace",n.fillText($,g,d+46)),d+=112;let D=(a?.senses||[]).slice(0,2);n.font='500 34px system-ui, "PingFang SC", sans-serif';for(let E of D){let u=`${E.pos||""} ${E.zh||""}`.trim(),k=Xa(n,u,xe-380,2);n.fillStyle="#2d2a26";for(let C of k)n.fillText(C,g,d),d+=46;d+=6}if(a?.ex?.[0]?.en){d+=8,n.fillStyle="#55504a",n.font="italic 28px Georgia, serif";let E=Xa(n,a.ex[0].en,xe-380,2);for(let u of E)n.fillText(u,g,d),d+=40;if(a.ex[0].zh){n.fillStyle="#8a8377",n.font='400 24px system-ui, "PingFang SC", sans-serif';let u=Xa(n,a.ex[0].zh,xe-380,1);for(let k of u)n.fillText(k,g,d+8)}}return n.fillStyle="#a39a8b",n.font="400 22px system-ui, sans-serif",n.textAlign="right",n.fillText("\u8BCD\u5149 \xB7 Word Atlas \xB7 CC BY 4.0",xe-150,je-150),new Promise(E=>{r.toBlob(u=>{if(!u){E(!1);return}let k=URL.createObjectURL(u),C=document.createElement("a");C.download=`word-atlas-${e.id}.png`,C.href=k,C.click(),setTimeout(()=>URL.revokeObjectURL(k),2e3),E(!0)},"image/png")})}function xa({atlas:a,word:e,progress:t,onClose:r,onPrev:n,onNext:i,hasPrev:s,hasNext:o,onOpenWord:l,onToggleBookmark:c,onMarkLearned:p,onBack:m,backLabel:g}){let[d,_]=(0,y.useState)(null),[$,D]=(0,y.useState)(""),E=t.settings.accent,u=t.cards[e.id],k=t.bookmarks.includes(e.id);(0,y.useEffect)(()=>{let v=!0;return _(null),D(""),ue(a,e.id).then(x=>{v&&_(x)}).catch(x=>{v&&D(x.message||"\u8BCD\u6761\u52A0\u8F7D\u5931\u8D25")}),()=>{v=!1,ve()}},[a,e.id]),(0,y.useEffect)(()=>{let v=x=>{x.key==="ArrowLeft"&&s?(x.preventDefault(),n()):x.key==="ArrowRight"&&o&&(x.preventDefault(),i())};return window.addEventListener("keydown",v),()=>window.removeEventListener("keydown",v)},[s,o,n,i]);let C=a.topics.find(v=>v.slug===e.topic)?.zh||e.topicZh;return y.default.createElement(Gt,{onClose:r,labelledBy:"wa-detail-title"},y.default.createElement("div",{className:"wa-detail",role:"document"},y.default.createElement("div",{className:"wa-detail-art"},y.default.createElement(J,{id:e.id,word:e.word,full:!0,className:"wa-detail-img",alt:`${e.word} \u63D2\u753B`}),y.default.createElement("div",{className:"wa-detail-art-meta"},y.default.createElement("span",{className:"wa-specimen"},"\u2116 ",String(e.order+1).padStart(4,"0")," ",y.default.createElement("i",null)," Word Atlas"),u?y.default.createElement("span",{className:"wa-memory-inline"},It(u)?"\u5F85\u590D\u4E60":`\u4E0B\u6B21\u590D\u4E60 ${ua(u.due-Date.now())}\u540E`):null)),y.default.createElement("div",{className:"wa-detail-body"},y.default.createElement("button",{type:"button",className:"wa-icon-btn wa-detail-close",onClick:r,"aria-label":"\u5173\u95ED\u8BCD\u6761"},y.default.createElement(I,{name:"close",size:18})),y.default.createElement("header",{className:"wa-detail-head"},m?y.default.createElement("button",{type:"button",className:"wa-icon-btn wa-back-btn",onClick:m,"aria-label":g?`\u8FD4\u56DE ${g}`:"\u8FD4\u56DE\u4E0A\u4E00\u4E2A\u8BCD",title:g?`\u8FD4\u56DE ${g}`:"\u8FD4\u56DE\u4E0A\u4E00\u4E2A\u8BCD"},y.default.createElement(I,{name:"chevronLeft",size:18})):null,y.default.createElement("div",{className:"wa-tags"},y.default.createElement(ke,{level:e.cefr}),C?y.default.createElement("span",{className:"wa-chip"},C):null,u?y.default.createElement("span",{className:`wa-chip wa-chip-status ${u.st===2?"is-done":""}`},u.st===2?"\u590D\u4E60\u4E2D":"\u5B66\u4E60\u4E2D"):null),y.default.createElement("button",{type:"button",className:`wa-icon-btn ${k?"is-on":""}`,onClick:()=>c(e.id),"aria-pressed":k,"aria-label":k?"\u53D6\u6D88\u6536\u85CF":"\u6536\u85CF",title:k?"\u53D6\u6D88\u6536\u85CF":"\u6536\u85CF"},y.default.createElement(I,{name:"heart",size:19,filled:k})),y.default.createElement("button",{type:"button",className:"wa-icon-btn",onClick:()=>d&&Kt({entry:d,word:e,accent:E}),disabled:!d,"aria-label":"\u751F\u6210\u5206\u4EAB\u5361",title:"\u751F\u6210\u5206\u4EAB\u5361"},y.default.createElement(I,{name:"share",size:19}))),y.default.createElement("h2",{id:"wa-detail-title",className:"wa-headword",lang:"en"},e.word),!d&&!$?y.default.createElement(he,{label:"\u52A0\u8F7D\u8BCD\u6761\u2026"}):null,$?y.default.createElement("p",{className:"wa-error"},$):null,d?y.default.createElement(y.default.Fragment,null,y.default.createElement("div",{className:"wa-detail-scroll"},y.default.createElement("div",{className:"wa-pron"},d.uk?y.default.createElement("div",{className:"wa-pron-row"},y.default.createElement("span",{className:"wa-pron-label"},"\u82F1"),y.default.createElement("span",{className:"wa-ipa"},d.uk),Z(d,K.uk)?y.default.createElement(ne,{audioKey:`uk:${e.id}`,url:X("uk",e.id),label:"\u53D1\u97F3"}):null):null,d.us?y.default.createElement("div",{className:"wa-pron-row"},y.default.createElement("span",{className:"wa-pron-label"},"\u7F8E"),y.default.createElement("span",{className:"wa-ipa"},d.us),Z(d,K.us)?y.default.createElement(ne,{audioKey:`us:${e.id}`,url:X("us",e.id),label:"\u53D1\u97F3"}):null):null,!d.uk&&!d.us?y.default.createElement("span",{className:"wa-ipa"},e.ipa):null,E==="us"&&d.us?y.default.createElement("span",{className:"wa-hint"},"\u9ED8\u8BA4\u7F8E\u97F3"):null),y.default.createElement("ol",{className:"wa-senses"},(d.senses||[]).map((v,x)=>y.default.createElement("li",{key:x},v.pos?y.default.createElement("span",{className:"wa-pos"},v.pos):null,y.default.createElement("span",{className:"wa-zh"},v.zh),v.en?y.default.createElement("span",{className:"wa-en",lang:"en"},v.en):null))),(d.ex||[]).length>0?y.default.createElement("section",{className:"wa-block"},y.default.createElement("h3",{className:"wa-eyebrow"},"\u4F8B\u53E5"),y.default.createElement("ul",{className:"wa-examples"},d.ex.map((v,x)=>{let S=x===0?"ex":"ex2",O=Z(d,K[S]);return y.default.createElement("li",{key:x},d.ex.length>1?y.default.createElement("span",{className:`wa-ex-tag ${x?"is-ielts":""}`},x?"\u96C5\u601D\u8BED\u5883":"\u65E5\u5E38"):null,y.default.createElement("p",{className:"wa-ex-en",lang:"en"},y.default.createElement(be,{atlas:a,progress:t,text:v.en,headword:e.word,onOpenWord:l}),O?y.default.createElement(ne,{audioKey:`${S}:${e.id}`,url:X(S,e.id),size:14,className:"wa-ex-speak",title:"\u64AD\u653E\u4F8B\u53E5\u6717\u8BFB"}):null),y.default.createElement("p",{className:"wa-ex-zh"},v.zh))}))):null,(d.col||[]).length>0?y.default.createElement("section",{className:"wa-block"},y.default.createElement("h3",{className:"wa-eyebrow"},"\u5E38\u7528\u642D\u914D"),y.default.createElement("ul",{className:"wa-collocations"},d.col.map(v=>{let x=Ht(v);return y.default.createElement("li",{key:v},y.default.createElement("span",{lang:"en"},x.en),x.zh?y.default.createElement("small",null,x.zh):null)}))):null,(d.fam||[]).length>0||(d.syn||[]).length>0||(d.ant||[]).length>0?y.default.createElement("section",{className:"wa-block wa-relations"},(d.fam||[]).length>0?y.default.createElement("div",null,y.default.createElement("h3",{className:"wa-eyebrow"},"\u8BCD\u65CF"),y.default.createElement("p",null,d.fam.map(v=>{let x=v.replace(/\s*\(.*\)\s*$/,"").trim().toLowerCase(),S=a.words.find(O=>O.word.toLowerCase()===x);return S?y.default.createElement("button",{key:v,type:"button",className:"wa-link",onClick:()=>l(S.id)},v):y.default.createElement("span",{key:v},v)}))):null,(d.syn||[]).length>0?y.default.createElement("div",null,y.default.createElement("h3",{className:"wa-eyebrow"},"\u8FD1\u4E49"),y.default.createElement("p",null,d.syn.map(v=>y.default.createElement("span",{key:v},v)))):null,(d.ant||[]).length>0?y.default.createElement("div",null,y.default.createElement("h3",{className:"wa-eyebrow"},"\u53CD\u4E49"),y.default.createElement("p",null,d.ant.map(v=>y.default.createElement("span",{key:v},v)))):null):null,d.tip?y.default.createElement("aside",{className:"wa-tip"},y.default.createElement(I,{name:"sparkle",size:17}),y.default.createElement("p",null,d.tip)):null,d.note?y.default.createElement("p",{className:"wa-usage-note"},"\u7528\u6CD5\u63D0\u9192\uFF1A",d.note):null),y.default.createElement("div",{className:"wa-detail-footer"},y.default.createElement("div",{className:"wa-detail-memory"},u?y.default.createElement(y.default.Fragment,null,y.default.createElement("span",null,"\u8BB0\u5FC6\u7A33\u5B9A\u5EA6 ",u.s<1?"<1":Math.round(u.s)," \u5929"),y.default.createElement("span",null,"\u5DF2\u590D\u4E60 ",u.reps," \u6B21")):y.default.createElement("span",null,"\u8FD8\u6CA1\u5B66\u8FC7\u8FD9\u4E2A\u8BCD")),y.default.createElement("div",{className:"wa-detail-actions"},y.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:()=>p(e.id),disabled:!!u},y.default.createElement(I,{name:"check",size:15})," ",u?"\u5DF2\u5728\u590D\u4E60\u4E2D":"\u6807\u8BB0\u4E3A\u5DF2\u5B66"),y.default.createElement("div",{className:"wa-detail-nav"},y.default.createElement("button",{type:"button",className:"wa-icon-btn",onClick:n,disabled:!s,"aria-label":"\u4E0A\u4E00\u4E2A\u8BCD"},y.default.createElement(I,{name:"chevronLeft",size:18})),y.default.createElement("button",{type:"button",className:"wa-icon-btn",onClick:i,disabled:!o,"aria-label":"\u4E0B\u4E00\u4E2A\u8BCD"},y.default.createElement(I,{name:"chevronRight",size:18})))))):null)))}var q=oe(require("react"),1);var ya=96;function ln({atlas:a,word:e,progress:t,onOpen:r,onToggleBookmark:n}){let i=t.cards[e.id],s=t.bookmarks.includes(e.id),o=a.topics.find(l=>l.slug===e.topic)?.zh||e.topicZh;return q.default.createElement("article",{className:`wa-card ${i?"is-learned":""}`},q.default.createElement("div",{className:"wa-card-hit",role:"button",tabIndex:0,onClick:()=>r(e.id),onKeyDown:l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),r(e.id))},"aria-label":`\u67E5\u770B ${e.word}`},q.default.createElement("div",{className:"wa-card-art"},q.default.createElement(J,{id:e.id,word:e.word}),i?q.default.createElement("span",{className:"wa-card-dot",title:"\u5DF2\u5728\u590D\u4E60\u4E2D"}):null),q.default.createElement("div",{className:"wa-card-body"},q.default.createElement("div",{className:"wa-card-title"},q.default.createElement("h3",{lang:"en"},e.word),q.default.createElement(ke,{level:e.cefr})),q.default.createElement("p",{className:"wa-card-ipa"},e.ipa),q.default.createElement("p",{className:"wa-card-zh"},e.zh),q.default.createElement("p",{className:"wa-card-topic"},o))),q.default.createElement("button",{type:"button",className:`wa-card-heart ${s?"is-on":""}`,onClick:l=>{l.stopPropagation(),n(e.id)},"aria-pressed":s,"aria-label":s?"\u53D6\u6D88\u6536\u85CF":"\u6536\u85CF",title:s?"\u53D6\u6D88\u6536\u85CF":"\u6536\u85CF"},q.default.createElement(I,{name:"heart",size:16,filled:s})))}function Ze({atlas:a,words:e,progress:t,onOpen:r,onToggleBookmark:n}){let[i,s]=(0,q.useState)(ya),o=(0,q.useRef)(null);(0,q.useEffect)(()=>{s(ya)},[e]),(0,q.useEffect)(()=>{let c=o.current;if(!c||i>=e.length)return;let p=new IntersectionObserver(m=>{m.some(g=>g.isIntersecting)&&s(g=>Math.min(g+ya,e.length))},{rootMargin:"600px 0px"});return p.observe(c),()=>p.disconnect()},[i,e.length]);let l=e.slice(0,i);return q.default.createElement("div",{className:"wa-grid-wrap"},q.default.createElement("p",{className:"wa-grid-count"},"\u5171 ",e.length.toLocaleString("en-US")," \u4E2A\u8BCD",i<e.length?` \xB7 \u5DF2\u663E\u793A ${i}`:""),q.default.createElement("div",{className:"wa-grid"},l.map(c=>q.default.createElement(ln,{key:c.id,atlas:a,word:c,progress:t,onOpen:r,onToggleBookmark:n}))),i<e.length?q.default.createElement("div",{ref:o,className:"wa-more"},q.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:()=>s(c=>c+ya)},"\u52A0\u8F7D\u66F4\u591A\uFF08\u5269\u4F59 ",(e.length-i).toLocaleString("en-US"),"\uFF09")):null)}var h=oe(require("react"),1);var Vt=100;function dn(a){let e=[...a];for(let t=e.length-1;t>0;t-=1){let r=Math.floor(Math.random()*(t+1));[e[t],e[r]]=[e[r],e[t]]}return e}function pn(a,e){let t=Date.now(),r=e.cards,n=[];for(let c of a.words){let p=r[c.id];p&&p.due<=t&&n.push({id:c.id,word:c,card:p,due:p.due})}n.sort((c,p)=>c.due-p.due);let i=n.slice(0,Vt),s=new Set(i.map(c=>c.id)),l=dn(a.words.filter(c=>!r[c.id]&&!s.has(c.id))).slice(0,Math.max(0,e.settings.dailyNew)).map(c=>({id:c.id,word:c,card:void 0}));return[...i,...l]}function Yt(a,e){let t=Date.now(),r=0,n=0,i=0;for(let o of a.words){let l=e.cards[o.id];l&&(n+=1,l.due<=t&&(r+=1),me(l)&&(i+=1))}let s=a.count-n;return{due:r,learned:n,mastered:i,fresh:s}}function cn({atlas:a,progress:e,onStart:t}){let r=(0,h.useMemo)(()=>Yt(a,e),[a,e]),n=Math.min(e.settings.dailyNew,r.fresh),i=Math.min(r.due,Vt)+n,s=(o,l)=>{re(c=>({...c,settings:{...c.settings,[o]:l}}))};return h.default.createElement("div",{className:"wa-review-intro"},h.default.createElement("div",{className:"wa-review-hero"},h.default.createElement("span",{className:"wa-review-orbit","aria-hidden":"true"},h.default.createElement(I,{name:"sparkle",size:30})),h.default.createElement("h2",null,"\u4ECA\u65E5\u590D\u4E60"),h.default.createElement("p",null,"FSRS \u4F1A\u6309\u8BB0\u5FC6\u7A33\u5B9A\u5EA6\u5B89\u6392\u590D\u4E60\u3002\u5230\u671F\u5C31\u590D\u4E60\uFF0C\u8BB0\u5F97\u7262\u7684\u8BCD\u4F1A\u8D8A\u9694\u8D8A\u4E45\u3002")),h.default.createElement("div",{className:"wa-review-stats"},h.default.createElement("div",{className:"wa-stat"},h.default.createElement("strong",null,r.due),h.default.createElement("span",null,"\u5230\u671F\u590D\u4E60")),h.default.createElement("div",{className:"wa-stat"},h.default.createElement("strong",null,n),h.default.createElement("span",null,"\u4ECA\u65E5\u65B0\u8BCD")),h.default.createElement("div",{className:"wa-stat"},h.default.createElement("strong",null,r.learned.toLocaleString("en-US")),h.default.createElement("span",null,"\u5DF2\u5B66\u8BCD")),h.default.createElement("div",{className:"wa-stat"},h.default.createElement("strong",null,r.mastered.toLocaleString("en-US")),h.default.createElement("span",null,"\u5DF2\u638C\u63E1"))),h.default.createElement("div",{className:"wa-review-settings"},h.default.createElement("label",null,"\u6BCF\u65E5\u65B0\u8BCD",h.default.createElement("select",{value:e.settings.dailyNew,onChange:o=>s("dailyNew",Number(o.target.value))},[5,10,15,20,30,50].map(o=>h.default.createElement("option",{key:o,value:o},o)))),h.default.createElement("label",null,"\u76EE\u6807\u8BB0\u5FC6\u7387",h.default.createElement("select",{value:e.settings.retention,onChange:o=>s("retention",Number(o.target.value))},[.8,.85,.9,.95].map(o=>h.default.createElement("option",{key:o,value:o},Math.round(o*100),"%"))))),h.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary wa-start-btn",onClick:t,disabled:i===0},i>0?`\u5F00\u59CB\u590D\u4E60\uFF08${i} \u4E2A\u8BCD\uFF09`:"\u4ECA\u5929\u6CA1\u6709\u8981\u590D\u4E60\u7684\u8BCD"),i===0?h.default.createElement("p",{className:"wa-review-done-hint"},h.default.createElement(I,{name:"check",size:15})," \u90FD\u590D\u4E60\u5B8C\u4E86\uFF0C\u53BB\u56FE\u9274\u91CC\u8BA4\u8BC6\u51E0\u4E2A\u65B0\u8BCD\u5427\u3002"):null,h.default.createElement("p",{className:"wa-review-tip"},"\u590D\u4E60\u8FDB\u5EA6\u4F1A\u81EA\u52A8\u4FDD\u5B58\u5230\u672C\u673A ",h.default.createElement("code",null,"$DSH_HOME/word-atlas-dsh/progress.json"),"\u3002"))}function un({session:a,atlas:e,progress:t,onAgain:r,onExit:n}){let i=(0,h.useMemo)(()=>Yt(e,t),[e,t]),{reviewed:s,correct:o,newWords:l}=a.stats,c=s?Math.round(o/s*100):0;return h.default.createElement("div",{className:"wa-review-summary"},h.default.createElement("span",{className:"wa-review-orbit is-done","aria-hidden":"true"},h.default.createElement(I,{name:"check",size:28})),h.default.createElement("h2",null,"\u672C\u7EC4\u5B8C\u6210"),h.default.createElement("div",{className:"wa-review-stats"},h.default.createElement("div",{className:"wa-stat"},h.default.createElement("strong",null,s),h.default.createElement("span",null,"\u590D\u4E60\u8BCD\u6570")),h.default.createElement("div",{className:"wa-stat"},h.default.createElement("strong",null,l),h.default.createElement("span",null,"\u65B0\u5B66\u8BCD")),h.default.createElement("div",{className:"wa-stat"},h.default.createElement("strong",null,c,"%"),h.default.createElement("span",null,"\u9996\u6B21\u7B54\u5BF9\u7387")),h.default.createElement("div",{className:"wa-stat"},h.default.createElement("strong",null,i.due),h.default.createElement("span",null,"\u5269\u4F59\u5230\u671F"))),h.default.createElement("div",{className:"wa-review-summary-actions"},h.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary",onClick:r},"\u518D\u7EC3\u4E00\u7EC4"),h.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:n},"\u8FD4\u56DE\u56FE\u9274")))}function wn({atlas:a,progress:e,item:t,entry:r,stats:n,onReveal:i,onGrade:s,onOpenWord:o}){let l=Date.now(),c=Dt(t.card,l,e.settings.retention),p=!t.card,m=g=>g>=M.Good;return h.default.createElement("div",{className:"wa-review-card"},h.default.createElement("div",{className:"wa-review-art"},h.default.createElement(J,{id:t.word.id,word:t.word.word,full:!0,alt:`${t.word.word} \u63D2\u753B`})),h.default.createElement("div",{className:"wa-review-body"},h.default.createElement("div",{className:"wa-review-tags"},h.default.createElement(ke,{level:t.word.cefr}),p?h.default.createElement("span",{className:"wa-chip wa-chip-new"},"\u65B0\u8BCD"):h.default.createElement("span",{className:"wa-chip"},"\u5230\u671F\u590D\u4E60")),h.default.createElement("h2",{className:"wa-review-word",lang:"en"},t.word.word),h.default.createElement("div",{className:"wa-pron-row"},h.default.createElement("span",{className:"wa-ipa"},r?.uk||t.word.ipa),Z(t.word,K.uk)?h.default.createElement(ne,{audioKey:`uk:${t.word.id}`,url:X("uk",t.word.id),label:"\u82F1\u97F3"}):null,Z(t.word,K.us)&&r?.us?h.default.createElement(ne,{audioKey:`us:${t.word.id}`,url:X("us",t.word.id),label:"\u7F8E\u97F3"}):null),n.revealed?h.default.createElement("div",{className:"wa-answer"},h.default.createElement("ol",{className:"wa-senses"},(r?.senses||[]).map((g,d)=>h.default.createElement("li",{key:d},g.pos?h.default.createElement("span",{className:"wa-pos"},g.pos):null,h.default.createElement("span",{className:"wa-zh"},g.zh),g.en?h.default.createElement("span",{className:"wa-en",lang:"en"},g.en):null))),r?.ex?.[0]?h.default.createElement("p",{className:"wa-review-example",lang:"en"},h.default.createElement(be,{atlas:a,progress:e,text:r.ex[0].en,headword:t.word.word,onOpenWord:o})):null,r?.ex?.[0]?.zh?h.default.createElement("p",{className:"wa-review-example-zh"},r.ex[0].zh):null,r?.tip?h.default.createElement("p",{className:"wa-review-tip-line"},r.tip):null,h.default.createElement("div",{className:"wa-grades"},qa.map(g=>h.default.createElement("button",{type:"button",key:g,className:`wa-grade wa-grade-${g}`,onClick:()=>s(g)},h.default.createElement("span",{className:"wa-grade-label"},$t[g]),h.default.createElement("span",{className:"wa-grade-interval"},ua(c[g]))))),h.default.createElement("p",{className:"wa-grade-hint"},"\u53EA\u6709\u9996\u6B21\u4F5C\u7B54\u8BA1\u5165\u6B63\u786E\u7387\uFF1B\u952E\u76D8 1\u20134 \u4E5F\u53EF\u4EE5\u8BC4\u5206\u3002")):h.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary wa-reveal-btn",onClick:i},"\u663E\u793A\u7B54\u6848")))}function va({atlas:a,progress:e,onExit:t,onOpenWord:r}){let[n,i]=(0,h.useState)(null),[s,o]=(0,h.useState)(null),[l,c]=(0,h.useState)(!1),p=n&&!n.finished?n.queue[n.index]:null;(0,h.useEffect)(()=>{if(!p){o(null);return}let E=!0;return o(null),c(!1),ue(a,p.id).then(u=>{E&&o(u)}).catch(()=>{E&&c(!0)}),()=>{E=!1}},[a,p?.id]);let m=(0,h.useCallback)(()=>{let E=pn(a,e);i({queue:E,index:0,revealed:!1,finished:!1,stats:{reviewed:0,correct:0,newWords:0},startedAt:Date.now()})},[a,e]),g=(0,h.useCallback)(()=>{i(E=>E&&!E.revealed?{...E,revealed:!0}:E)},[]),d=(0,h.useCallback)(E=>{let u=n?.queue[n.index];if(!u)return;let k=$e(u.card,E,Date.now(),e.settings.retention),C=E>=M.Good;re(v=>({...v,cards:{...v.cards,[u.id]:k},days:ia(v.days,{newWords:u.card?0:1,reviewed:1,correct:C?1:0})})),i(v=>{if(!v||v.finished)return v;let x={reviewed:v.stats.reviewed+1,correct:v.stats.correct+(C?1:0),newWords:v.stats.newWords+(u.card?0:1)},S=v.index+1;return S>=v.queue.length?{...v,index:S,revealed:!1,finished:!0,stats:x}:{...v,index:S,revealed:!1,stats:x}})},[n,e.settings.retention]);if((0,h.useEffect)(()=>{if(!p)return;let E=u=>{if(u.target instanceof HTMLElement&&/^(INPUT|SELECT|TEXTAREA)$/.test(u.target.tagName))return;if(!n.revealed){(u.code==="Space"||u.key==="Enter")&&(u.preventDefault(),g());return}let k={1:M.Again,2:M.Hard,3:M.Good,4:M.Easy};k[u.key]&&(u.preventDefault(),d(k[u.key]))};return window.addEventListener("keydown",E),()=>window.removeEventListener("keydown",E)},[p,n?.revealed,g,d]),!a)return null;if(!n)return h.default.createElement(cn,{atlas:a,progress:e,onStart:m});if(n.finished)return h.default.createElement(un,{session:n,atlas:a,progress:e,onAgain:()=>i(null),onExit:t});if(!p)return h.default.createElement(ze,{title:"\u8FD9\u4E00\u7EC4\u590D\u4E60\u5B8C\u6210\u4E86",icon:"check"});let _=n.index,$=n.queue.length,D=p;return h.default.createElement("div",{className:"wa-review-shell"},h.default.createElement("div",{className:"wa-review-top"},h.default.createElement("div",{className:"wa-review-progress"},h.default.createElement("div",{className:"wa-review-bar","aria-hidden":"true"},h.default.createElement("span",{style:{width:`${Math.round(_/$*100)}%`}})),h.default.createElement("span",{className:"wa-review-counter"},_+1," / ",$)),h.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:()=>i(null)},h.default.createElement(I,{name:"close",size:15})," \u7ED3\u675F")),l?h.default.createElement("p",{className:"wa-error"},"\u8BCD\u6761\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u8BCD\u5149\u63D2\u4EF6\u8DEF\u7531\u662F\u5426\u6B63\u5E38\u3002"):null,!s&&!l?h.default.createElement("div",{className:"wa-review-loading"},h.default.createElement(he,{label:"\u52A0\u8F7D\u8BCD\u6761\u2026"})):null,h.default.createElement(wn,{atlas:a,progress:e,item:D,entry:s,stats:{revealed:n.revealed},onReveal:g,onGrade:d,onOpenWord:r}))}var b=oe(require("react"),1);function mn(a){return a<5?"\u591C\u6DF1\u4E86":a<11?"\u65E9\u4E0A\u597D":a<14?"\u4E2D\u5348\u597D":a<18?"\u4E0B\u5348\u597D":"\u665A\u4E0A\u597D"}var Zt="\u65E5\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D",Xt=["\u5165\u95E8","\u57FA\u7840","\u8FDB\u9636","\u4E2D\u9AD8","\u9AD8\u7EA7","\u7CBE\u901A"];function gn({value:a,size:e=88,stroke:t=7,children:r}){let n=(e-t)/2,i=2*Math.PI*n,s=i*(1-Math.min(1,Math.max(0,a||0)));return b.default.createElement("div",{className:"wa-ring",style:{width:e,height:e}},b.default.createElement("svg",{width:e,height:e,viewBox:`0 0 ${e} ${e}`,"aria-hidden":"true"},b.default.createElement("circle",{className:"wa-ring-track",cx:e/2,cy:e/2,r:n,fill:"none",strokeWidth:t}),b.default.createElement("circle",{className:"wa-ring-fill",cx:e/2,cy:e/2,r:n,fill:"none",strokeWidth:t,strokeLinecap:"round",strokeDasharray:i,strokeDashoffset:s,transform:`rotate(-90 ${e/2} ${e/2})`})),b.default.createElement("div",{className:"wa-ring-label"},r))}function ka({atlas:a,progress:e,onStart:t,onOpenWord:r,onOpenLevel:n,onOpenTopic:i}){let s=(0,b.useMemo)(()=>Ke(a,e,e.settings),[a,e]),o=e.session&&!e.session.finished?e.session:null,l=e.days[Ie()],c=Ae(e.days),p=Object.keys(e.cards).length,m=Object.values(e.cards).filter(me).length,g=s.due.length+s.fresh.length,d=l?.r??0,_=e.settings.dailyNew+Math.min(s.due.length,60),$=new Date,D=Array.from({length:7},(z,F)=>{let H=new Date;H.setDate(H.getDate()-(6-F));let j=Ie(H);return{key:j,label:Zt[H.getDay()],value:e.days[j]?.r??0,today:F===6}}),E=Math.max(1,...D.map(z=>z.value)),u=(0,b.useMemo)(()=>{let z=a.cefr.map(H=>({name:H,total:0,seen:0,mastered:0})),F=new Map(a.cefr.map((H,j)=>[H,j]));for(let H of a.words){let j=z[F.get(H.cefr)];if(!j)continue;j.total+=1;let R=e.cards[H.id];R&&(j.seen+=1,me(R)&&(j.mastered+=1))}return z},[a,e.cards]),k=(0,b.useMemo)(()=>{let z=new Map(a.topics.map(F=>[F.slug,0]));for(let F of a.words)z.set(F.topic,(z.get(F.topic)||0)+1);return z},[a]),C=(o?o.newIds:s.fresh).slice(0,5).map(z=>a.byId.get(z)).filter(Boolean),v=(0,b.useMemo)(()=>{let z=a.words.filter(H=>H.media&1&&H.cefr>=2),F=z.length?z:a.words;return F[fe(Ie())%F.length]},[a]),[x,S]=(0,b.useState)(null);(0,b.useEffect)(()=>{let z=!0;if(v)return ue(a,v.id).then(F=>z&&S(F)).catch(()=>{}),()=>{z=!1}},[a,v?.id]);let O=e.settings.accent,U=Z(v||{},K[O]);return b.default.createElement("div",{className:"wa-today"},b.default.createElement("header",{className:"wa-today-head"},b.default.createElement("p",{className:"wa-eyebrow"},$.getMonth()+1," \u6708 ",$.getDate()," \u65E5 \xB7 \u661F\u671F",Zt[$.getDay()]),b.default.createElement("h1",null,mn($.getHours()),"\uFF0C\u63A2\u7D22\u8005\u3002"),b.default.createElement("p",null,"\u4ECA\u5929\u5148\u6E29\u6545\uFF0C\u518D\u77E5\u65B0\u3002")),b.default.createElement("section",{className:"wa-today-hero"},b.default.createElement("img",{className:"wa-today-hero-art",src:Ue("hero.webp"),alt:"",loading:"eager",onError:z=>{z.currentTarget.style.visibility="hidden"}}),b.default.createElement("div",{className:"wa-today-hero-shade","aria-hidden":"true"}),b.default.createElement("div",{className:"wa-today-hero-body"},b.default.createElement("p",{className:"wa-eyebrow"},"\u4ECA\u65E5\u5B66\u4E60"),o?b.default.createElement("h2",null,"\u8FD8\u5269 ",b.default.createElement("b",null,Math.max(0,o.steps.length-o.index))," \u6B65"):g>0?b.default.createElement("h2",null,"\u590D\u4E60 ",b.default.createElement("b",null,s.due.length)," \xB7 \u65B0\u8BCD ",b.default.createElement("b",null,s.fresh.length)):b.default.createElement("h2",null,"\u4ECA\u5929\u7684\u8BCD\u90FD\u7EC3\u5B8C\u4E86"),b.default.createElement("p",{className:"wa-today-hero-lede"},o?"\u8FDB\u5EA6\u5DF2\u4FDD\u5B58\uFF0C\u968F\u65F6\u63A5\u7740\u8D70\u3002":g>0?`\u9884\u8BA1 ${s.minutes} \u5206\u949F \xB7 \u5148\u6E29\u6545\uFF0C\u518D\u77E5\u65B0\u3002`:"\u60F3\u591A\u8D70\u4E00\u6BB5\uFF0C\u4E5F\u53EF\u4EE5\u3002"),b.default.createElement("div",{className:"wa-today-hero-actions"},o||g>0?b.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary wa-btn-lg",onClick:()=>t({})},o?"\u7EE7\u7EED\u65C5\u7A0B":"\u5F00\u59CB\u4ECA\u5929\u7684\u65C5\u7A0B"," ",b.default.createElement(I,{name:"chevronRight",size:18})):b.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary wa-btn-lg",onClick:()=>t({extra:5})},"\u518D\u8BA4\u8BC6 5 \u4E2A\u65B0\u8BCD ",b.default.createElement(I,{name:"sparkle",size:17})),!o&&s.due.length>0&&s.fresh.length>0?b.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:()=>t({reviewOnly:!0})},"\u53EA\u590D\u4E60"):null),C.length>0?b.default.createElement("div",{className:"wa-today-teaser","aria-label":"\u4ECA\u65E5\u5C06\u9047\u89C1\u7684\u65B0\u8BCD"},C.map(z=>b.default.createElement(J,{key:z.id,id:z.id,word:z.word,className:"wa-today-teaser-img"})),b.default.createElement("span",null,"\u4ECA\u5929\u4F1A\u9047\u89C1\u5B83\u4EEC")):null)),b.default.createElement("section",{className:"wa-today-strip"},b.default.createElement("div",{className:"wa-today-goal"},b.default.createElement(gn,{value:_?d/_:0},b.default.createElement("b",null,d),b.default.createElement("small",null,"/ ",_," \u9898")),b.default.createElement("div",null,b.default.createElement("strong",null,"\u4ECA\u65E5\u76EE\u6807"),b.default.createElement("span",null,"\u5DF2\u7B54 ",d," \xB7 \u76EE\u6807 ",_))),b.default.createElement("div",{className:"wa-today-stat"},b.default.createElement("strong",null,c),b.default.createElement("span",null,"\u8FDE\u7EED\u5B66\u4E60 \xB7 \u5929")),b.default.createElement("div",{className:"wa-today-stat"},b.default.createElement("strong",null,p.toLocaleString("en-US")),b.default.createElement("span",null,"\u5DF2\u70B9\u4EAE")),b.default.createElement("div",{className:"wa-today-stat"},b.default.createElement("strong",null,m.toLocaleString("en-US")),b.default.createElement("span",null,"\u957F\u671F\u8BB0\u4F4F"))),b.default.createElement("div",{className:"wa-today-grid"},b.default.createElement("section",{className:"wa-panel"},b.default.createElement("div",{className:"wa-panel-head"},b.default.createElement("h3",{className:"wa-eyebrow"},"\u8FD9\u4E00\u5468"),b.default.createElement("span",{className:"wa-muted"},qe(e)," \u4E2A\u65B0\u8BCD")),b.default.createElement("ol",{className:"wa-week"},D.map(z=>b.default.createElement("li",{key:z.key,className:`${z.value?"is-on":"is-zero"} ${z.today?"is-today":""}`,title:`${z.key}\uFF1A${z.value} \u9898`},b.default.createElement("b",null,z.value||""),b.default.createElement("span",{style:{height:`${z.value?Math.max(10,Math.round(z.value/E*100)):5}%`}}),b.default.createElement("small",null,z.label))))),b.default.createElement("section",{className:"wa-panel wa-wotd",role:"button",tabIndex:0,onClick:()=>v&&r(v.id),onKeyDown:z=>{(z.key==="Enter"||z.key===" ")&&(z.preventDefault(),v&&r(v.id))}},b.default.createElement(J,{id:v.id,word:v.word,className:"wa-wotd-img"}),b.default.createElement("div",{className:"wa-wotd-body"},b.default.createElement("h3",{className:"wa-eyebrow"},"\u4ECA\u65E5\u4E00\u8BCD"),b.default.createElement("p",{className:"wa-wotd-word",lang:"en"},v.word),b.default.createElement("div",{className:"wa-pron-row"},b.default.createElement("span",{className:"wa-ipa"},v.ipa),U?b.default.createElement(ne,{audioKey:`${O}:${v.id}`,url:X(O,v.id),label:"\u53D1\u97F3"}):null,x?.ex?.[0]&&Z(x,K.ex)?b.default.createElement(ne,{audioKey:`ex:${v.id}`,url:X("ex",v.id),label:"\u4F8B\u53E5"}):null),b.default.createElement("p",{className:"wa-wotd-zh"},v.zh),x?.ex?.[0]?b.default.createElement("p",{className:"wa-wotd-ex",lang:"en"},x.ex[0].en):null))),b.default.createElement("section",{className:"wa-panel"},b.default.createElement("div",{className:"wa-panel-head"},b.default.createElement("h3",{className:"wa-eyebrow"},"\u5B66\u4E60\u8DEF\u7EBF \xB7 \u4ECE A1 \u5230 C2"),b.default.createElement("span",{className:"wa-muted"},"\u8D77\u70B9\uFF1A",a.cefr[e.settings.startLevel]||"A1")),b.default.createElement("ol",{className:"wa-route"},b.default.createElement("span",{className:"wa-route-line","aria-hidden":"true"}),u.map((z,F)=>b.default.createElement("li",{key:z.name},b.default.createElement("button",{type:"button",className:`${F===e.settings.startLevel?"is-start":""} ${z.seen?"is-on":""}`,onClick:()=>n(z.name),"aria-label":`${z.name} ${Xt[F]}\uFF0C\u5DF2\u5B66 ${z.seen} / ${z.total}\uFF0C\u957F\u671F\u8BB0\u4F4F ${z.mastered}`},b.default.createElement("span",{className:"wa-route-node"},b.default.createElement("b",null,z.name),F===e.settings.startLevel?b.default.createElement("em",null,"\u8D77\u70B9"):null),b.default.createElement("span",{className:"wa-route-name"},Xt[F]),b.default.createElement("span",{className:"wa-route-count"},z.seen,b.default.createElement("small",null,"/",z.total)),b.default.createElement("span",{className:"wa-route-bar"},b.default.createElement("i",{style:{width:`${Math.round(z.seen/Math.max(1,z.total)*100)}%`}}),b.default.createElement("b",{style:{width:`${Math.round(z.mastered/Math.max(1,z.total)*100)}%`}}))))))),b.default.createElement("section",{className:"wa-panel"},b.default.createElement("div",{className:"wa-panel-head"},b.default.createElement("h3",{className:"wa-eyebrow"},"\u6309\u96C5\u601D\u8BDD\u9898\u63A2\u7D22"),b.default.createElement("button",{type:"button",className:"wa-link",onClick:()=>i("all")},"\u6253\u5F00\u56FE\u9274")),b.default.createElement("ul",{className:"wa-topics-grid"},a.topics.map(z=>b.default.createElement("li",{key:z.slug},b.default.createElement("button",{type:"button",onClick:()=>i(z.slug)},b.default.createElement("img",{src:Ue(`topic-${z.slug}.webp`),alt:"",loading:"lazy",onError:F=>{F.currentTarget.style.display="none"}}),b.default.createElement("span",null,b.default.createElement("b",null,z.zh),b.default.createElement("small",null,(k.get(z.slug)||0).toLocaleString("en-US")," \u4E2A\u8BCD"))))))))}var w=oe(require("react"),1);var fn={meaning:"\u5B83\u662F\u4EC0\u4E48\u610F\u601D\uFF1F",picture:"\u770B\u56FE\uFF0C\u8865\u5168\u8FD9\u53E5\u8BDD",listen:"\u542C\uFF0C\u662F\u54EA\u4E2A\u8BCD\uFF1F",spell:"\u62FC\u51FA\u8FD9\u4E2A\u8BCD"};function Jt(a,e){let[t,r]=(0,w.useState)(null);return(0,w.useEffect)(()=>{let n=!0;if(r(null),!!e)return ue(a,e).then(i=>n&&r(i)).catch(()=>{}),()=>{n=!1}},[a,e]),t}function Qt(a){let e=(0,w.useRef)(Date.now());return(0,w.useEffect)(()=>{e.current=Date.now()},[a]),()=>Date.now()-e.current}function Rt(a){let e=(0,w.useRef)(a);e.current=a,(0,w.useEffect)(()=>{let t=r=>{if(r.metaKey||r.ctrlKey||r.altKey||r.repeat)return;let n=r.target,i=n instanceof HTMLElement?n.tagName:"";if((i==="INPUT"||i==="TEXTAREA")&&!(r.key==="Enter"&&n instanceof HTMLInputElement&&n.readOnly)||i==="BUTTON"&&(r.key==="Enter"||r.key===" "))return;let s=e.current[r.key];s&&(r.preventDefault(),s())};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[])}function Ja({progress:a,value:e,total:t,count:r,onExit:n}){let i=Math.round(Math.min(1,Math.max(0,a))*100);return w.default.createElement("header",{className:"wa-learn-bar"},w.default.createElement("div",{className:"wa-learn-bar-inner"},w.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost wa-learn-exit",onClick:n,"aria-label":"\u9000\u51FA\u5B66\u4E60"},w.default.createElement(I,{name:"close",size:16})," \u9000\u51FA"),w.default.createElement("div",{className:"wa-learn-bar-center"},w.default.createElement("span",{className:"wa-learn-bar-title"},"\u4ECA\u65E5\u5B66\u4E60"),w.default.createElement("div",{className:"wa-learn-progress",role:"progressbar","aria-valuemin":0,"aria-valuemax":t||1,"aria-valuenow":e},w.default.createElement("span",{style:{width:`${i}%`}}))),r?w.default.createElement("span",{className:"wa-learn-count"},r):null))}function Qa({bar:a,children:e,centered:t=!1}){return w.default.createElement("div",{className:"wa-learn"},a,w.default.createElement("main",{className:`wa-learn-stage ${t?"is-centered":""}`},e))}function hn({atlas:a,progress:e,step:t,onOpenWord:r}){let n=Jt(a,t.id),i=Qt(t.id),s=e.settings.accent,o=(0,w.useRef)(!1);(0,w.useEffect)(()=>{o.current=!1},[t.id]),(0,w.useEffect)(()=>{!n||o.current||(o.current=!0,e.settings.autoplay&&Z(n,K[s])&&ye(`${s}:${t.id}`,X(s,t.id)))},[n,s,t.id,e.settings.autoplay]);let l=(0,w.useCallback)(()=>{ve(),re(p=>Ve(p,i()/1e3))},[i]);if(Rt({Enter:l," ":l}),!n)return w.default.createElement("div",{className:"wa-learn-loading"},w.default.createElement(he,{label:"\u51C6\u5907\u8BCD\u5361\u2026"}));let c=a.byId.get(t.id);return w.default.createElement("div",{className:"wa-learn-intro"},w.default.createElement("p",{className:"wa-learn-label"},w.default.createElement("span",{className:"wa-dot is-on"})," \u521D\u6B21\u89C1\u9762"),w.default.createElement("div",{className:"wa-learn-card"},w.default.createElement(J,{id:c.id,word:c.word,full:!0,className:"wa-learn-art",alt:`${c.word} \u63D2\u753B`}),w.default.createElement("div",{className:"wa-learn-body"},w.default.createElement("div",{className:"wa-tags"},w.default.createElement(ke,{level:c.cefr}),c.topicZh?w.default.createElement("span",{className:"wa-chip"},c.topicZh):null),w.default.createElement("h2",{className:"wa-learn-word",lang:"en"},c.word),w.default.createElement("div",{className:"wa-pron"},n.uk?w.default.createElement("div",{className:"wa-pron-row"},w.default.createElement("span",{className:"wa-pron-label"},"\u82F1"),w.default.createElement("span",{className:"wa-ipa"},n.uk),Z(n,K.uk)?w.default.createElement(ne,{audioKey:`uk:${c.id}`,url:X("uk",c.id),label:"\u53D1\u97F3"}):null):null,n.us?w.default.createElement("div",{className:"wa-pron-row"},w.default.createElement("span",{className:"wa-pron-label"},"\u7F8E"),w.default.createElement("span",{className:"wa-ipa"},n.us),Z(n,K.us)?w.default.createElement(ne,{audioKey:`us:${c.id}`,url:X("us",c.id),label:"\u53D1\u97F3"}):null):null),w.default.createElement("ol",{className:"wa-senses"},(n.senses||[]).map((p,m)=>w.default.createElement("li",{key:m},p.pos?w.default.createElement("span",{className:"wa-pos"},p.pos):null,w.default.createElement("span",{className:"wa-zh"},p.zh),p.en?w.default.createElement("span",{className:"wa-en",lang:"en"},p.en):null))),(n.ex||[]).slice(0,1).map((p,m)=>w.default.createElement("div",{className:"wa-learn-example",key:m},w.default.createElement("p",{className:"wa-ex-en",lang:"en"},w.default.createElement(be,{atlas:a,progress:e,text:p.en,headword:c.word,onOpenWord:r})),w.default.createElement("p",{className:"wa-ex-zh"},p.zh))),n.tip?w.default.createElement("aside",{className:"wa-tip"},w.default.createElement(I,{name:"sparkle",size:17}),w.default.createElement("p",null,n.tip)):null)),w.default.createElement("div",{className:"wa-learn-actions"},w.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary wa-btn-lg",onClick:l,autoFocus:!0},"\u8BA4\u8BC6\u4E86 ",w.default.createElement(I,{name:"chevronRight",size:18})),w.default.createElement("span",{className:"wa-hint"},"Enter \u7EE7\u7EED")))}function bn({entry:a,pending:e,hints:t,onHint:r,onSubmit:n}){let[i,s]=(0,w.useState)(""),o=(0,w.useRef)(null),l=a.w,c=l.slice(0,t);(0,w.useEffect)(()=>{t&&!i.toLowerCase().startsWith(c.toLowerCase())&&s(c),o.current?.focus()},[t]);let p=e?e.value:i;return w.default.createElement("form",{className:"wa-spell",onSubmit:m=>{m.preventDefault(),!e&&i.trim()&&n(i)}},w.default.createElement("div",{className:"wa-slots","aria-hidden":"true",onClick:()=>o.current?.focus()},Array.from(l).map((m,g)=>{let d=p[g],_=d!==void 0&&d.toLowerCase()===m.toLowerCase();return w.default.createElement("span",{key:g,className:`wa-slot ${m===" "?"is-space":""} ${d!==void 0?e?_?"is-ok":"is-bad":"is-filled":""} ${!e&&g===p.length?"is-caret":""}`},e&&!e.correct?m:d??"")})),w.default.createElement("input",{ref:o,className:"wa-spell-input",value:p,onChange:m=>!e&&s(m.target.value.slice(0,l.length+6)),autoFocus:!0,autoCapitalize:"off",autoCorrect:"off",autoComplete:"off",spellCheck:!1,enterKeyHint:"done","aria-label":`\u62FC\u5199\uFF0C${l.length} \u4E2A\u5B57\u7B26`,readOnly:!!e}),e?null:w.default.createElement("div",{className:"wa-spell-actions"},w.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:r,disabled:t>=l.length-1},w.default.createElement(I,{name:"sparkle",size:15})," \u63D0\u793A\u5B57\u6BCD"),w.default.createElement("button",{type:"submit",className:"wa-btn wa-btn-primary",disabled:!i.trim()},"\u786E\u8BA4 ",w.default.createElement("kbd",null,"Enter"))))}function xn({atlas:a,progress:e,entry:t,word:r,correct:n,onNext:i,onOpenWord:s}){let o=(0,w.useRef)(null);return(0,w.useEffect)(()=>o.current?.focus({preventScroll:!0}),[]),w.default.createElement("div",{className:`wa-feedback ${n?"is-right":"is-wrong"}`,role:"status"},w.default.createElement("div",{className:"wa-feedback-main"},w.default.createElement(J,{id:r.id,word:r.word,className:"wa-feedback-thumb"}),w.default.createElement("div",{className:"wa-feedback-text"},w.default.createElement("p",{className:"wa-feedback-verdict"},n?"\u7B54\u5BF9\u4E86":`\u6CA1\u5173\u7CFB\uFF0C\u8BB0\u4F4F\u5B83 \xB7 \u6B63\u786E\u7B54\u6848\u662F ${t.w}`),w.default.createElement("p",{className:"wa-feedback-word"},w.default.createElement("b",{lang:"en"},t.w),w.default.createElement("span",{className:"wa-ipa"},t.uk||t.us)),w.default.createElement("p",{className:"wa-feedback-zh"},(t.senses||[]).slice(0,2).map(l=>`${l.pos} ${l.zh}`).join("\u3000")),t.ex?.[0]?w.default.createElement("p",{className:"wa-feedback-ex",lang:"en"},w.default.createElement(be,{atlas:a,progress:e,text:t.ex[0].en,headword:r.word,onOpenWord:s})):null),w.default.createElement("button",{ref:o,type:"button",className:`wa-btn wa-btn-lg ${n?"wa-btn-primary":"wa-btn-ghost"}`,onClick:i},"\u7EE7\u7EED ",w.default.createElement(I,{name:"chevronRight",size:18}))))}function yn({atlas:a,progress:e,session:t,step:r,onOpenWord:n}){let i=Jt(a,r.id),s=a.byId.get(r.id),o=e.settings,l=o.accent,c=t.pending,p=Qt(`${r.id}-${r.kind}-${t.index}`),[m,g]=(0,w.useState)(0),d=(r.options||[]).map(u=>a.byId.get(u)).filter(Boolean),_=i?.ex?.[0]?Pt(i.ex[0].en,i.w):null,$=(0,w.useCallback)((u,k)=>{if(c)return;let C=fa(r.kind,k,p(),m>0);re(v=>ha(v,a,r,k,C,u,o)),o.autoplay&&i&&Z(i,K[l])&&ye(`${l}:${r.id}`,X(l,r.id))},[c,p,m,r,a,o,i,l]),D=(0,w.useCallback)(()=>{ve(),re(u=>Ve(u,p()/1e3))},[p]);(0,w.useEffect)(()=>{r.kind!=="listen"||c||!i||Z(i,K[l])&&ye(`listen:${r.id}:${t.index}`,X(l,r.id))},[r.kind,r.id,c,i,l,t.index]);let E={};return c?(E.Enter=D,E[" "]=D):r.kind!=="spell"&&d.forEach((u,k)=>{E[String(k+1)]=()=>$(u.id,u.id===s.id)}),Rt(E),i?w.default.createElement("div",{className:`wa-quiz wa-quiz-${r.kind} ${c?c.correct?"is-right":"is-wrong":""}`},w.default.createElement("p",{className:"wa-learn-label"},w.default.createElement("span",{className:`wa-dot ${r.retry?"is-warn":"is-on"}`}),r.retry?"\u518D\u89C1\u4E00\u9762 \xB7 ":"",fn[r.kind]),r.kind==="meaning"?w.default.createElement("div",{className:"wa-quiz-meaning"},w.default.createElement("h2",{className:"wa-learn-word",lang:"en"},i.w),w.default.createElement("div",{className:"wa-pron-row"},w.default.createElement("span",{className:"wa-ipa"},l==="us"?i.us||i.uk:i.uk||i.us),Z(i,K[l])?w.default.createElement(ne,{audioKey:`${l}:${s.id}`,url:X(l,s.id),label:"\u53D1\u97F3"}):null)):null,r.kind==="picture"?w.default.createElement("div",{className:"wa-quiz-picture"},w.default.createElement(J,{id:s.id,word:s.word,full:!0,className:"wa-quiz-art",alt:`${s.word} \u63D2\u753B`}),w.default.createElement("p",{className:"wa-cloze",lang:"en"},_?w.default.createElement(w.default.Fragment,null,_.before,w.default.createElement("span",{className:"wa-blank"},c?_.hidden:"\u3000\u3000\u3000"),_.after):i.senses[0]?.zh),_&&c?w.default.createElement("p",{className:"wa-cloze-zh"},i.ex[0].zh):null):null,r.kind==="listen"?w.default.createElement("div",{className:"wa-quiz-listen"},w.default.createElement("button",{type:"button",className:"wa-listen-orb",onClick:()=>Z(i,K[l])&&ye(`listen:${r.id}:replay:${Date.now()}`,X(l,s.id)),"aria-label":"\u518D\u542C\u4E00\u904D"},w.default.createElement(I,{name:"volume",size:44})),w.default.createElement("span",{className:"wa-hint"},"\u518D\u542C\u4E00\u904D")):null,r.kind==="spell"?w.default.createElement("div",{className:"wa-quiz-spell"},w.default.createElement(J,{id:s.id,word:s.word,className:"wa-spell-art",alt:`${s.word} \u63D2\u753B`}),w.default.createElement("div",null,w.default.createElement("p",{className:"wa-spell-zh"},i.senses[0]?.pos?w.default.createElement("span",{className:"wa-pos"},i.senses[0].pos):null," ",i.senses[0]?.zh),_?w.default.createElement("p",{className:"wa-cloze wa-cloze-sm",lang:"en"},_.before,w.default.createElement("span",{className:"wa-blank"},"\u3000\u3000\u3000"),_.after):null,Z(i,K[l])?w.default.createElement(ne,{audioKey:`${l}:${s.id}`,url:X(l,s.id),label:"\u542C\u53D1\u97F3"}):null)):null,r.kind==="spell"?w.default.createElement(bn,{entry:i,pending:c,hints:m,onHint:()=>g(u=>Math.min(i.w.length-1,u+1)),onSubmit:u=>$(u,u.trim().toLowerCase()===i.w.toLowerCase())}):w.default.createElement("ul",{className:`wa-options ${r.kind==="meaning"?"is-zh":""}`},d.map((u,k)=>{let C=u.id===s.id,v=c?.value===u.id,x=c?C?"is-answer":v?"is-chosen":"is-dim":"";return w.default.createElement("li",{key:u.id},w.default.createElement("button",{type:"button",className:`wa-option ${x}`,"data-option":u.id,onClick:()=>$(u.id,C),disabled:!!c,"aria-label":c?`${C?"\u6B63\u786E\u7B54\u6848":v?"\u4F60\u7684\u9009\u62E9\uFF0C\u9519\u8BEF":"\u672A\u9009\u62E9"}\uFF1A${r.kind==="meaning"?u.zh:u.word}`:void 0},w.default.createElement("kbd",null,k+1),w.default.createElement("span",{lang:r.kind==="meaning"?"zh":"en"},r.kind==="meaning"?u.zh:u.word),c&&C?w.default.createElement(I,{name:"check",size:18}):null,c&&v&&!C?w.default.createElement(I,{name:"close",size:18}):null))})),c?w.default.createElement(xn,{atlas:a,progress:e,entry:i,word:s,correct:c.correct,onNext:D,onOpenWord:n}):null):w.default.createElement("div",{className:"wa-learn-loading"},w.default.createElement(he,{label:"\u52A0\u8F7D\u9898\u76EE\u2026"}))}function vn({atlas:a,progress:e,session:t,onExit:r,onRestart:n,onOpenWord:i}){let s=ba(t),o=[...new Set(t.steps.map(m=>m.id))].map(m=>a.byId.get(m)).filter(Boolean),l=o.filter(m=>t.graded[m.id]===M.Again),c=Math.max(1,Math.round(((t.finished||Date.now())-t.started)/6e4)),p=()=>{re(m=>({...m,session:null})),r()};return w.default.createElement("div",{className:"wa-learn-summary"},w.default.createElement("span",{className:"wa-summary-orbit","aria-hidden":"true"},w.default.createElement(I,{name:"sparkle",size:30})),w.default.createElement("p",{className:"wa-eyebrow"},"\u8FD9\u4E00\u7A0B\u7ED3\u675F\u4E86"),w.default.createElement("h1",null,s.accuracy>=90?"\u6F02\u4EAE\u7684\u4E00\u7A0B\u3002":s.accuracy>=60?"\u7A33\u7A33\u5411\u524D\u3002":"\u9519\u8FC7\u7684\uFF0C\u4F1A\u518D\u76F8\u9047\u3002"),w.default.createElement("div",{className:"wa-summary-stats"},w.default.createElement("div",{className:"wa-summary-stat is-hero"},w.default.createElement("strong",null,s.accuracy,"%"),w.default.createElement("span",null,"\u9996\u6B21\u6B63\u786E\u7387")),w.default.createElement("div",{className:"wa-summary-stat"},w.default.createElement("strong",null,t.newIds.length),w.default.createElement("span",null,"\u65B0\u8BCD")),w.default.createElement("div",{className:"wa-summary-stat"},w.default.createElement("strong",null,t.reviewIds.length),w.default.createElement("span",null,"\u590D\u4E60")),w.default.createElement("div",{className:"wa-summary-stat"},w.default.createElement("strong",null,c),w.default.createElement("span",null,"\u5206\u949F"))),w.default.createElement("ul",{className:"wa-summary-words"},o.map(m=>w.default.createElement("li",{key:m.id,className:t.graded[m.id]===M.Again?"is-wrong":"",role:"button",tabIndex:0,title:`${m.word} ${m.zh}`,onClick:()=>i(m.id),onKeyDown:g=>g.key==="Enter"&&i(m.id)},w.default.createElement(J,{id:m.id,word:m.word,className:"wa-summary-thumb"}),w.default.createElement("span",{lang:"en"},m.word),w.default.createElement("small",null,m.zh)))),w.default.createElement("p",{className:"wa-summary-note"},"FSRS \u5DF2\u4E3A\u6BCF\u4E2A\u8BCD\u6392\u597D\u4E0B\u6B21\u76F8\u9047\u7684\u65F6\u95F4\u3002\u7B54\u9519\u7684\u8BCD\uFF0C\u4F1A\u66F4\u65E9\u56DE\u6765\u3002"),w.default.createElement("div",{className:"wa-summary-actions"},l.length>0?w.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:()=>n({ids:l.map(m=>m.id)})},w.default.createElement(I,{name:"refresh",size:16})," \u518D\u7EC3 ",l.length," \u4E2A\u9519\u8BCD"):null,w.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary wa-btn-lg",onClick:p,autoFocus:!0},"\u5B8C\u6210 ",w.default.createElement(I,{name:"check",size:17}))),w.default.createElement("p",{className:"wa-hint"},"\u8FDB\u5EA6\u5DF2\u81EA\u52A8\u4FDD\u5B58"))}function Na({atlas:a,progress:e,onExit:t,onRestart:r,onOpenWord:n}){(0,w.useEffect)(()=>()=>ve(),[]);let i=e.session;if(!i)return w.default.createElement(Qa,{bar:w.default.createElement(Ja,{progress:0,value:0,total:1,count:"",onExit:t}),centered:!0},w.default.createElement(ze,{icon:"sparkle",title:"\u4ECA\u5929\u6CA1\u6709\u5F85\u5B66\u7684\u8BCD"},w.default.createElement("p",null,"\u53EF\u4EE5\u5148\u56DE\u987E\u56FE\u9274\uFF0C\u6216\u8005\u660E\u5929\u518D\u6765\u3002"),w.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary",onClick:t},"\u8FD4\u56DE\u4ECA\u65E5")));if(i.finished||i.index>=i.steps.length)return w.default.createElement(Qa,{bar:w.default.createElement(Ja,{progress:1,value:1,total:1,count:"\u5B8C\u6210",onExit:t}),centered:!0},w.default.createElement(vn,{atlas:a,progress:e,session:i,onExit:t,onRestart:r,onOpenWord:n}));let s=i.steps[i.index],o=i.steps.length;return w.default.createElement(Qa,{key:`${i.id}-${i.index}`,bar:w.default.createElement(Ja,{progress:i.index/o,value:i.index,total:o,count:`${i.index+1} / ${o}`,onExit:t})},s.kind==="intro"?w.default.createElement(hn,{atlas:a,progress:e,step:s,onOpenWord:n}):w.default.createElement(yn,{atlas:a,progress:e,session:i,step:s,onOpenWord:n}))}var f=oe(require("react"),1);var tr="/word-atlas/api/offline",er=[{id:"thumb",label:"\u7F29\u7565\u56FE",hint:"\u7F51\u683C / \u67E5\u8BCD\u6D6E\u7A97",bytes:84*1024*1024},{id:"img",label:"\u5B8C\u6574\u63D2\u753B",hint:"\u8BCD\u5361\u5927\u56FE",bytes:199*1024*1024},{id:"audio",label:"\u53D1\u97F3",hint:"\u82F1\u97F3 / \u7F8E\u97F3 / \u4F8B\u53E5\u6717\u8BFB",bytes:418*1024*1024}];function _a(a){if(!Number.isFinite(a)||a<=0)return"0 B";let e=["B","KB","MB","GB"],t=a,r=0;for(;t>=1024&&r<e.length-1;)t/=1024,r+=1;return`${t.toFixed(r>=2?1:0)} ${e[r]}`}function kn(a){if(!Number.isFinite(a)||a<=0)return"\u2014";let e=Math.round(a/1e3);if(e<60)return`${e} \u79D2`;let t=Math.round(e/60);return t<60?`${t} \u5206\u949F`:`${(t/60).toFixed(1)} \u5C0F\u65F6`}function za({value:a,options:e,onChange:t,ariaLabel:r}){return f.default.createElement("div",{className:"wa-seg",role:"group","aria-label":r},e.map(n=>f.default.createElement("button",{type:"button",key:n.value,className:a===n.value?"is-on":"",onClick:()=>t(n.value)},n.label)))}function ar({on:a,onChange:e,label:t,hint:r}){return f.default.createElement("label",{className:"wa-switch-row"},f.default.createElement("span",null,f.default.createElement("b",null,t),r?f.default.createElement("small",null,r):null),f.default.createElement("button",{type:"button",role:"switch","aria-checked":a,"aria-label":t,className:`wa-switch ${a?"is-on":""}`,onClick:()=>e(!a)},f.default.createElement("span",null)))}function Nn({offline:a,refresh:e}){let[t,r]=(0,f.useState)(["thumb"]),[n,i]=(0,f.useState)("remote"),[s,o]=(0,f.useState)(!1),[l,c]=(0,f.useState)(""),p=a?.state==="downloading";(0,f.useEffect)(()=>{a?.contentDirReady&&i("repo")},[a?.contentDirReady]);let m=async(k,C,v)=>{o(!0),c("");try{let x=await fetch(`${tr}${C}`,{method:k,headers:v?{"Content-Type":"application/json"}:void 0,body:v?JSON.stringify(v):void 0}),S=await x.json().catch(()=>({}));return(!x.ok||S.ok===!1)&&c(S.error||`\u8BF7\u6C42\u5931\u8D25\uFF08HTTP ${x.status}\uFF09`),await e(),S}catch(x){return c(String(x?.message||x)),null}finally{o(!1)}},g=k=>{r(C=>C.includes(k)?C.filter(v=>v!==k):[...C,k])},d=er.filter(k=>t.includes(k.id)).reduce((k,C)=>k+C.bytes,0),_=a?.done??0,$=a?.total??0,D=$>0?Math.min(100,Math.round(_/$*100)):0,E=a?.state==="done"||(a?.done??0)>0,u=!!a?.contentDirReady;return f.default.createElement("section",{className:"wa-panel"},f.default.createElement("h3",{className:"wa-eyebrow"},"\u79BB\u7EBF\u7D20\u6750"),f.default.createElement("p",{className:"wa-panel-hint"},"\u8BCD\u5E93\u6587\u5B57\u5DF2\u5185\u7F6E\uFF1B\u8FD9\u91CC\u628A\u63D2\u753B\u4E0E\u53D1\u97F3\u4E0B\u8F7D\u5230\u672C\u673A\uFF0C\u65AD\u7F51\u4E5F\u80FD\u770B\u56FE\u3001\u542C\u97F3\u3002",a?.contentDirReady?" \u5F53\u524D\u5DF2\u68C0\u6D4B\u5230\u672C\u673A\u8BCD\u5149\u4ED3\u5E93\uFF0C\u7D20\u6750\u53EF\u76F4\u63A5\u4ECE\u672C\u5730\u8BFB\u53D6\u3002":""),f.default.createElement("div",{className:"wa-offline-source"},f.default.createElement("span",{className:`wa-dot ${u||E?"is-on":""}`}),u?`\u672C\u673A\u8BCD\u5149\u4ED3\u5E93\uFF1A${a?.contentDir}`:E?`\u79BB\u7EBF\u5305\uFF1A${_a(a?.bytes??0)}\uFF08${_.toLocaleString("en-US")}${$?` / ${$.toLocaleString("en-US")}`:""} \u4E2A\u6587\u4EF6\uFF09`:"\u5B98\u65B9\u7AD9\u70B9\u6309\u9700\u52A0\u8F7D\uFF08\u9996\u6B21\u770B\u56FE/\u542C\u97F3\u9700\u8981\u8054\u7F51\uFF09",a?.autoCache?" \xB7 \u6309\u9700\u7F13\u5B58\u5DF2\u5F00\u542F":""),a?.dir?f.default.createElement("p",{className:"wa-panel-path"},"\u4FDD\u5B58\u4F4D\u7F6E\uFF1A",a.dir):null,f.default.createElement("div",{className:"wa-tier-list"},er.map(k=>f.default.createElement("label",{key:k.id,className:"wa-tier"},f.default.createElement("input",{type:"checkbox",checked:t.includes(k.id),disabled:p,onChange:()=>g(k.id)}),f.default.createElement("span",null,f.default.createElement("b",null,k.label),f.default.createElement("small",null,k.hint," \xB7 \u7EA6 ",_a(k.bytes)))))),f.default.createElement("div",{className:"wa-offline-actions"},f.default.createElement("select",{value:n,onChange:k=>i(k.target.value),disabled:p,"aria-label":"\u4E0B\u8F7D\u6765\u6E90"},f.default.createElement("option",{value:"remote"},"\u5B98\u65B9\u7AD9\u70B9"),f.default.createElement("option",{value:"repo",disabled:!a?.contentDirReady},"\u672C\u673A\u8BCD\u5149\u4ED3\u5E93")),p?f.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",disabled:s,onClick:()=>m("POST","/cancel")},"\u53D6\u6D88\u4E0B\u8F7D"):f.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary",disabled:s||t.length===0,onClick:()=>m("POST","/start",{tiers:t,source:n})},"\u5F00\u59CB\u4E0B\u8F7D",d?`\uFF08\u7EA6 ${_a(d)}\uFF09`:""),f.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",disabled:s||p||!E,onClick:()=>{confirm("\u5220\u9664\u5DF2\u4E0B\u8F7D\u7684\u79BB\u7EBF\u7D20\u6750\uFF1F\u8BCD\u5E93\u6587\u5B57\u4E0D\u53D7\u5F71\u54CD\u3002")&&m("DELETE","")}},"\u5220\u9664\u79BB\u7EBF\u5305")),p||_>0?f.default.createElement("div",{className:"wa-progress"},f.default.createElement("div",{className:"wa-progress-bar"},f.default.createElement("span",{style:{width:`${D}%`}})),f.default.createElement("div",{className:"wa-progress-meta"},f.default.createElement("span",null,p?"\u4E0B\u8F7D\u4E2D":a?.state==="cancelled"?"\u5DF2\u53D6\u6D88":"\u5DF2\u5B8C\u6210"," \xB7 ",D,"%"),f.default.createElement("span",null,_.toLocaleString("en-US"),$?` / ${$.toLocaleString("en-US")}`:""," \u4E2A\u6587\u4EF6",a?.speed?` \xB7 ${_a(a.speed)}/s`:"",p&&a?.etaMs?` \xB7 \u5269\u7EA6 ${kn(a.etaMs)}`:"",a?.failed?` \xB7 \u5931\u8D25 ${a.failed}`:""))):null,l?f.default.createElement("p",{className:"wa-error-text"},l):null,f.default.createElement("p",{className:"wa-panel-note"},"\u4E0B\u8F7D\u6E90\uFF1A\u5B98\u65B9\u7AD9\u70B9\uFF08CC BY 4.0 \u7D20\u6750\uFF09\u6216\u672C\u673A\u8BCD\u5149\u4ED3\u5E93\uFF1B\u754C\u9762\u97F3\u6548\u4E0D\u5728\u79BB\u7EBF\u5305\u5185\u3002 \u6309\u9700\u7F13\u5B58\u53EF\u5728 profile \u7684 ",f.default.createElement("code",null,"cordis.patch.yml")," \u4E2D\u8BBE\u7F6E ",f.default.createElement("code",null,"autoCache: true"),"\u3002"))}function _n({days:a}){let t=new Date,r=new Date;r.setDate(t.getDate()-139-t.getDay());let n=[],i=new Date(r);for(let o=0;o<147;o+=1){let l=Se(i);n.push({key:l,value:a[l]?.r??0,future:i>t}),i.setDate(i.getDate()+1)}let s=o=>o===0?0:o<10?1:o<25?2:o<50?3:4;return f.default.createElement("div",{className:"wa-heatmap",role:"img","aria-label":"\u5B66\u4E60\u70ED\u529B\u56FE"},n.map(o=>f.default.createElement("span",{key:o.key,className:`wa-heat-${o.future?"x":s(o.value)}`,title:`${o.key} \xB7 ${o.value} \u9898`})))}function Ma({atlas:a,progress:e,onOpenWord:t}){let r=(0,f.useMemo)(()=>{let u=Object.values(e.cards),k=Object.values(e.days),C=k.reduce((O,U)=>O+(U.r||0),0),v=k.reduce((O,U)=>O+(U.c||0),0),x=k.reduce((O,U)=>O+(U.t||0),0),S=Array.from({length:7},(O,U)=>{let z=new Date;z.setHours(23,59,59,999),z.setDate(z.getDate()+U);let F=new Date(z);return F.setHours(0,0,0,0),u.filter(H=>(U===0||H.due>=F.getTime())&&H.due<=z.getTime()).length});return{learned:u.length,mastered:u.filter(me).length,reviews:C,accuracy:C?Math.round(v/C*100):0,minutes:Math.round(x/60),streakDays:Ae(e.days),forecast:S}},[e]),n=(0,f.useMemo)(()=>a?e.mistakes.map(u=>a.byId.get(u)).filter(Boolean).slice(0,24):[],[a,e.mistakes]),i=Math.max(1,...r.forecast),[s,o]=(0,f.useState)(null),[l,c]=(0,f.useState)(""),[p,m]=(0,f.useState)(""),g=(0,f.useRef)(null),d=e.settings,_=(0,f.useCallback)(async()=>{try{let u=await fetch(tr,{cache:"no-store"});if(!u.ok)throw new Error(`HTTP ${u.status}`);let k=await u.json();o(k),c("")}catch{c("\u79BB\u7EBF\u670D\u52A1\u4E0D\u53EF\u7528\uFF0C\u8BF7\u786E\u8BA4 Host \u63D2\u4EF6\u5DF2\u542F\u7528\u3002")}},[]);(0,f.useEffect)(()=>{_()},[_]),(0,f.useEffect)(()=>{if(s?.state!=="downloading")return;let u=setInterval(_,1200);return()=>clearInterval(u)},[s?.state,_]);let $=u=>re(k=>({...k,settings:{...k.settings,...u}})),D=()=>{let u=new Blob([vt()],{type:"application/json"}),k=URL.createObjectURL(u),C=document.createElement("a");C.href=k,C.download=`word-atlas-backup-${new Date().toISOString().slice(0,10)}.json`,C.click(),setTimeout(()=>URL.revokeObjectURL(k),1e3),m("\u5DF2\u5BFC\u51FA\u5907\u4EFD\u6587\u4EF6")},E=async u=>{let k=await u.text(),C=kt(k);m(C.ok?`\u5DF2\u6062\u590D ${C.cards} \u4E2A\u8BCD\u7684\u8BB0\u5FC6`:C.error)};return f.default.createElement("div",{className:"wa-settings"},f.default.createElement("section",{className:"wa-me-strip"},f.default.createElement("div",{className:"wa-me-stat"},f.default.createElement("strong",null,r.streakDays),f.default.createElement("span",null,"\u8FDE\u7EED\u5B66\u4E60 \xB7 \u5929")),f.default.createElement("div",{className:"wa-me-stat"},f.default.createElement("strong",null,r.learned.toLocaleString("en-US")),f.default.createElement("span",null,"\u5DF2\u70B9\u4EAE")),f.default.createElement("div",{className:"wa-me-stat"},f.default.createElement("strong",null,r.mastered.toLocaleString("en-US")),f.default.createElement("span",null,"\u957F\u671F\u8BB0\u4F4F")),f.default.createElement("div",{className:"wa-me-stat"},f.default.createElement("strong",null,r.accuracy,"%"),f.default.createElement("span",null,"\u9996\u6B21\u6B63\u786E\u7387")),f.default.createElement("div",{className:"wa-me-stat"},f.default.createElement("strong",null,r.minutes),f.default.createElement("span",null,"\u5B66\u4E60\u5206\u949F"))),f.default.createElement("div",{className:"wa-me-grid"},f.default.createElement("section",{className:"wa-panel"},f.default.createElement("h3",{className:"wa-eyebrow"},"\u8FC7\u53BB 20 \u5468"),f.default.createElement(_n,{days:e.days}),f.default.createElement("p",{className:"wa-panel-note"},"\u4E00\u683C\u662F\u4E00\u5929\uFF0C\u989C\u8272\u8D8A\u6DF1\uFF0C\u90A3\u5929\u7B54\u5F97\u8D8A\u591A\u3002\u300C\u957F\u671F\u8BB0\u4F4F\u300D\u6307\u8BB0\u5FC6\u7A33\u5B9A\u5EA6\u8D85\u8FC7 21 \u5929\u3002")),f.default.createElement("section",{className:"wa-panel"},f.default.createElement("h3",{className:"wa-eyebrow"},"\u672A\u6765 7 \u5929\u7684\u590D\u4E60\u91CF"),f.default.createElement("ol",{className:"wa-forecast"},r.forecast.map((u,k)=>f.default.createElement("li",{key:k},f.default.createElement("span",{style:{height:`${Math.max(6,Math.round(u/i*100))}%`}}),f.default.createElement("b",null,u),f.default.createElement("small",null,k===0?"\u4ECA\u5929":k===1?"\u660E\u5929":`+${k}`)))))),n.length>0?f.default.createElement("section",{className:"wa-panel"},f.default.createElement("div",{className:"wa-panel-head"},f.default.createElement("h3",{className:"wa-eyebrow"},"\u9519\u8BCD\u672C"),f.default.createElement("span",{className:"wa-muted"},"\u6700\u8FD1 ",n.length," \u4E2A")),f.default.createElement("ul",{className:"wa-mistakes"},n.map(u=>f.default.createElement("li",{key:u.id},f.default.createElement("button",{type:"button",onClick:()=>t(u.id),"aria-label":`\u67E5\u770B ${u.word}`},f.default.createElement(J,{id:u.id,word:u.word,className:"wa-mistake-thumb"}),f.default.createElement("span",null,f.default.createElement("b",{lang:"en"},u.word),f.default.createElement("small",null,u.zh)),f.default.createElement("em",null,u.cefr)))))):null,f.default.createElement("section",{className:"wa-panel"},f.default.createElement("h3",{className:"wa-eyebrow"},"\u5B66\u4E60\u8BBE\u7F6E"),f.default.createElement("div",{className:"wa-field"},f.default.createElement("div",null,f.default.createElement("b",null,"\u6BCF\u65E5\u65B0\u8BCD"),f.default.createElement("small",null,"\u590D\u4E60\u4E0D\u8BBE\u4E0A\u9650\uFF0C\u7B97\u6CD5\u53EA\u5B89\u6392\u5FEB\u8981\u9057\u5FD8\u7684\u8BCD\u3002")),f.default.createElement(za,{ariaLabel:"\u6BCF\u65E5\u65B0\u8BCD",value:d.dailyNew,options:[5,10,15,20,30].map(u=>({value:u,label:String(u)})),onChange:u=>$({dailyNew:u})})),f.default.createElement("div",{className:"wa-field"},f.default.createElement("div",null,f.default.createElement("b",null,"\u4ECE\u54EA\u4E2A\u96BE\u5EA6\u5F00\u59CB"),f.default.createElement("small",null,"\u5B66\u4E60\u4F1A\u8BDD\u4F1A\u8DF3\u8FC7\u66F4\u7B80\u5355\u7684\u7EA7\u522B\u3002")),f.default.createElement(za,{ariaLabel:"\u8D77\u70B9\u96BE\u5EA6",value:d.startLevel,options:a.cefr.map((u,k)=>({value:k,label:u})),onChange:u=>$({startLevel:u})})),f.default.createElement("div",{className:"wa-field"},f.default.createElement("div",null,f.default.createElement("b",null,"\u76EE\u6807\u8BB0\u5FC6\u7387"),f.default.createElement("small",null,"\u8D8A\u9AD8\u590D\u4E60\u8D8A\u9891\u7E41\uFF0C90% \u662F\u5927\u591A\u6570\u4EBA\u7684\u751C\u70B9\u3002")),f.default.createElement(za,{ariaLabel:"\u76EE\u6807\u8BB0\u5FC6\u7387",value:d.retention,options:[.85,.9,.95].map(u=>({value:u,label:`${Math.round(u*100)}%`})),onChange:u=>$({retention:u})})),f.default.createElement("div",{className:"wa-field"},f.default.createElement("div",null,f.default.createElement("b",null,"\u53D1\u97F3\u504F\u597D"),f.default.createElement("small",null,"\u8BCD\u6761\u8BE6\u60C5\u91CC\u4E24\u79CD\u53D1\u97F3\u90FD\u53EF\u4EE5\u64AD\u653E\u3002")),f.default.createElement(za,{ariaLabel:"\u53D1\u97F3\u504F\u597D",value:d.accent,options:[{value:"uk",label:"\u82F1\u5F0F"},{value:"us",label:"\u7F8E\u5F0F"}],onChange:u=>$({accent:u})})),f.default.createElement(ar,{label:"\u81EA\u52A8\u64AD\u653E\u53D1\u97F3",hint:"\u8BCD\u5361\u4E0E\u542C\u97F3\u9898\u81EA\u52A8\u64AD\u653E",on:d.autoplay,onChange:u=>$({autoplay:u})}),f.default.createElement(ar,{label:"\u590D\u4E60\u65F6\u52A0\u5165\u62FC\u5199\u9898",hint:"\u5B66\u4E60\u4F1A\u8BDD\u4E2D\u52A0\u5165\u62FC\u5199\u9898",on:d.spell,onChange:u=>$({spell:u})})),f.default.createElement(Nn,{offline:s,refresh:_}),l?f.default.createElement("p",{className:"wa-error-text"},l):null,f.default.createElement("section",{className:"wa-panel"},f.default.createElement("h3",{className:"wa-eyebrow"},"\u6570\u636E\u4E0E\u5907\u4EFD"),f.default.createElement("p",{className:"wa-panel-hint"},"\u8FDB\u5EA6\u4FDD\u5B58\u5728\u672C\u673A\uFF08Host \u6587\u4EF6 + \u6D4F\u89C8\u5668\u955C\u50CF\uFF09\uFF0C\u65E0\u9700\u8D26\u53F7\u3002\u6362\u8BBE\u5907\u65F6\u5BFC\u51FA\u5907\u4EFD\u518D\u5BFC\u5165\u5373\u53EF\uFF0C\u683C\u5F0F\u4E0E\u8BCD\u5149\u7EBF\u4E0A\u7248\u517C\u5BB9\u3002"),f.default.createElement("div",{className:"wa-backup-actions"},f.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:D},f.default.createElement(I,{name:"book",size:15})," \u5BFC\u51FA\u5907\u4EFD"),f.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:()=>g.current?.click()},f.default.createElement(I,{name:"refresh",size:15})," \u5BFC\u5165\u5907\u4EFD"),f.default.createElement("input",{ref:g,type:"file",accept:"application/json,.json",hidden:!0,onChange:u=>{let k=u.target.files?.[0];u.target.value="",k&&E(k)}}),f.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost wa-danger",onClick:()=>{confirm("\u786E\u5B9A\u6E05\u7A7A\u5168\u90E8\u5B66\u4E60\u8BB0\u5F55\uFF1F\u6B64\u64CD\u4F5C\u65E0\u6CD5\u64A4\u9500\uFF0C\u5EFA\u8BAE\u5148\u5BFC\u51FA\u5907\u4EFD\u3002")&&(Nt(),m("\u5B66\u4E60\u8BB0\u5F55\u5DF2\u6E05\u7A7A"))}},"\u6E05\u7A7A\u5B66\u4E60\u8BB0\u5F55")),p?f.default.createElement("p",{className:"wa-panel-note"},p):null,f.default.createElement("p",{className:"wa-panel-note"},"\u5DF2\u5B66 ",Object.keys(e.cards).length.toLocaleString("en-US")," \u8BCD \xB7 \u6536\u85CF ",e.bookmarks.length," \u8BCD",e.savedAt?` \xB7 \u4E0A\u6B21\u4FDD\u5B58 ${new Date(e.savedAt).toLocaleString()}`:"")),f.default.createElement("section",{className:"wa-panel"},f.default.createElement("h3",{className:"wa-eyebrow"},"\u5173\u4E8E"),f.default.createElement("p",{className:"wa-panel-hint"},"\u8BCD\u5149 \xB7 Word Atlas DSH \u63D2\u4EF6 v0.3.0 \xB7 \u8BCD\u5E93/\u63D2\u753B/\u5F55\u97F3\u6765\u81EA"," ",f.default.createElement("a",{href:"https://github.com/designfuchen/word-atlas",target:"_blank",rel:"noreferrer"},"designfuchen/word-atlas"),"\uFF08Word Atlas contributors\uFF0CCC BY 4.0\uFF09\uFF1B\u63D2\u4EF6\u4EE3\u7801 MIT\uFF1B\u590D\u4E60\u8C03\u5EA6 ts-fsrs\u3002"),f.default.createElement("p",{className:"wa-panel-path"},"\u63D2\u4EF6\u4ED3\u5E93\uFF1Agithub.com/MC0571/DSH-Plugin-Word-Atlas")))}var A=oe(require("react"),1);var se=a=>String(a||"").normalize("NFKC").replace(/[’‘]/g,"'").replace(/[“”]/g,'"').replace(/[‐‑–—]/g,"-").replace(/\s/g," "),Xe=(a,e)=>se(a).toLowerCase()===se(e).toLowerCase(),Me=a=>se(a).replace(/\s+/g,"");function rr(a,e){let t=Array.from(se(e));return Array.from(se(a)).filter((r,n)=>Xe(r,t[n]||"")).length}function nr(a,e,t){let r=Array.from(se(a)),n=Array.from(se(e)),i=Array.from(se(t)),s=0;for(;s<r.length&&s<n.length&&r[s]===n[s];)s+=1;let o=0;for(;o<r.length-s&&o<n.length-s&&r[r.length-1-o]===n[n.length-1-o];)o+=1;let l=n.slice(s,n.length-o),c=0;for(let p=0;p<l.length;p+=1)Xe(l[p],i[s+p]||"")&&(c+=1);return{total:l.length,correct:c}}function Sa(a,e,t,r){let n=c=>Number.isFinite(c)?Math.max(0,c):0,i=n(e),s=Math.min(n(a),i),o=n(t),l=n(r);return{accuracy:i?Math.round(s/i*100):100,wpm:l>=1e3?Math.round(o/5/(l/6e4)):0}}var Ra=[{id:"word",name:"\u5355\u8BCD",desc:"\u770B\u56FE\u5199\u51FA\u5355\u8BCD",icon:"type"},{id:"sentence",name:"\u4F8B\u53E5",desc:"\u7167\u7740\u6284\u5199\uFF0C\u7EC3\u51FA\u624B\u611F",icon:"keyboard"},{id:"dictation",name:"\u542C\u5199",desc:"\u53EA\u542C\u58F0\u97F3\uFF0C\u5199\u4E0B\u6574\u53E5",icon:"headphones"}],zn=[{id:"recent",label:"\u6700\u8FD1\u5B66\u8FC7"},{id:"mistakes",label:"\u9519\u8BCD\u672C"},{id:"saved",label:"\u6536\u85CF"},{id:"path",label:"\u5B66\u4E60\u8DEF\u7EBF"}];function Aa({atlas:a,progress:e}){let[t,r]=(0,A.useState)("word"),[n,i]=(0,A.useState)(()=>Object.keys(e.cards).length>0?"recent":"path"),[s,o]=(0,A.useState)(null),[l,c]=(0,A.useState)(!1),[p,m]=(0,A.useState)(""),g=(0,A.useMemo)(()=>{let u=Object.entries(e.cards).sort((C,v)=>(v[1].last??0)-(C[1].last??0)).map(([C])=>C);return(n==="recent"?u:n==="mistakes"?e.mistakes:n==="saved"?e.bookmarks:a.words.filter(C=>C.cefr>=e.settings.startLevel).slice(0,400).map(C=>C.id)).filter(C=>a.byId.has(C))},[a,e.cards,e.mistakes,e.bookmarks,e.settings.startLevel,n]),d=e.typing.filter(u=>u.mode===t).reduce((u,k)=>Math.max(u,k.wpm||0),0),_=e.typing.length,$=async()=>{if(!l){c(!0),m("");try{let u=He(g.slice(0,60),fe(String(Date.now()))).slice(0,10),k=[];for(let v of u)try{k.push(await ue(a,v))}catch{}let C=k.filter(v=>v&&(t==="word"||v.ex?.length>0));if(C.length===0){m("\u8FD9\u4E2A\u6765\u6E90\u6682\u65F6\u6CA1\u6709\u53EF\u7EC3\u4E60\u7684\u8BCD\uFF0C\u5148\u53BB\u5B66\u51E0\u4E2A\u6216\u6362\u4E2A\u6765\u6E90\u3002");return}o({entries:C,key:Date.now(),mode:t})}finally{c(!1)}}};if(s)return A.default.createElement(Mn,{key:s.key,atlas:a,progress:e,mode:s.mode,entries:s.entries,onExit:()=>o(null),onAgain:$});let D=Ra.find(u=>u.id===t)||Ra[0],E=Ue(t==="dictation"?"listen.webp":"hero.webp");return A.default.createElement("div",{className:"wa-practice"},A.default.createElement("header",{className:"wa-practice-head"},A.default.createElement("p",{className:"wa-eyebrow"},"\u7EC3\u4E60 \xB7 Typing Studio"),A.default.createElement("h1",null,"\u8BA9\u624B\uFF0C\u4E5F\u8BB0\u4F4F\u5B83\u4EEC\u3002"),A.default.createElement("p",null,"\u6253\u5B57\u53EA\u7EC3\u62FC\u5199\u548C\u624B\u611F\uFF0C\u4E0D\u4F1A\u6539\u52A8\u8BB0\u5FC6\u8FDB\u5EA6\u3002")),A.default.createElement("div",{className:"wa-practice-grid"},A.default.createElement("section",{className:"wa-panel"},A.default.createElement("h3",{className:"wa-eyebrow"},"\u6A21\u5F0F"),A.default.createElement("div",{className:"wa-mode-cards"},Ra.map(u=>A.default.createElement("button",{key:u.id,type:"button",className:`wa-mode-card ${t===u.id?"is-on":""}`,"aria-pressed":t===u.id,onClick:()=>r(u.id)},A.default.createElement(I,{name:u.icon,size:22}),A.default.createElement("b",null,u.name),A.default.createElement("small",null,u.desc)))),A.default.createElement("h3",{className:"wa-eyebrow wa-mt"},"\u8BCD\u6765\u81EA"),A.default.createElement("div",{className:"wa-seg wa-seg-wide"},zn.map(u=>A.default.createElement("button",{key:u.id,type:"button",className:n===u.id?"is-on":"","aria-pressed":n===u.id,onClick:()=>i(u.id)},u.label))),A.default.createElement("p",{className:"wa-panel-hint"},g.length?n==="path"?"\u4ECE\u5B66\u4E60\u8DEF\u7EBF\u7684\u524D 400 \u4E2A\u8BCD\u91CC\u968F\u673A\u62BD 10 \u4E2A\u3002":`\u53EF\u7EC3 ${g.length} \u4E2A\u8BCD\uFF0C\u6BCF\u8F6E\u968F\u673A 10 \u4E2A\u3002`:"\u8FD9\u91CC\u8FD8\u6CA1\u6709\u8BCD\uFF0C\u5148\u53BB\u5B66\u51E0\u4E2A\uFF0C\u6216\u6362\u4E2A\u6765\u6E90\u3002"),A.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary wa-btn-lg wa-practice-start",onClick:$,disabled:!g.length||l},l?"\u51C6\u5907\u4E2D\u2026":"\u5F00\u59CB\u4E00\u8F6E"),p?A.default.createElement("p",{className:"wa-error-text"},p):null),A.default.createElement("section",{className:"wa-panel wa-practice-side"},A.default.createElement("img",{src:E,alt:"",onError:u=>{u.currentTarget.style.visibility="hidden"}}),A.default.createElement("div",{className:"wa-practice-stats"},A.default.createElement("div",null,A.default.createElement("strong",null,d),A.default.createElement("span",null,"\u6700\u4F73\u901F\u5EA6 \xB7 WPM")),A.default.createElement("div",null,A.default.createElement("strong",null,_),A.default.createElement("span",null,"\u5B8C\u6210\u8F6E\u6B21"))),A.default.createElement("p",{className:"wa-panel-note"},"WPM \u6309\u6807\u51C6\u6BCF 5 \u4E2A\u5B57\u7B26\u8BA1 1 \u8BCD\uFF0C\u53EA\u7EDF\u8BA1\u6B63\u786E\u8F93\u5165\u3002"),A.default.createElement("p",{className:"wa-panel-note"},"\u5F53\u524D\u6A21\u5F0F\uFF1A",D.name," \xB7 ",D.desc))))}function Mn({atlas:a,progress:e,mode:t,entries:r,onExit:n,onAgain:i}){let[s,o]=(0,A.useState)(0),[l,c]=(0,A.useState)(""),p=(0,A.useRef)({typed:0,correct:0,accepted:0,ms:0}),[m,g]=(0,A.useState)(()=>Sa(0,0,0,0)),[d,_]=(0,A.useState)(!1),$=(0,A.useRef)(null),D=(0,A.useRef)(null),E=e.settings.accent,u=r[s],k=t==="word"?u.w:u.ex[0]?.en||u.w,C=t==="dictation"?"ex":E,v=()=>{Z(u,K[C])&&ye(`practice:${C}:${u.id}:${s}`,X(C,u.id))};(0,A.useEffect)(()=>{c(""),$.current=null,D.current?.focus(),(t==="dictation"||t==="word"&&e.settings.autoplay)&&v()},[s]),(0,A.useEffect)(()=>()=>ve(),[]);let x=t==="word"?se(k):Me(k),S=j=>{let R=$.current?performance.now()-$.current:0,ee=rr(t==="word"?se(j):Me(j),x),ie={...p.current,accepted:p.current.accepted+ee,ms:p.current.ms+R};p.current=ie;let ae=Sa(ie.correct,ie.typed,ie.accepted,ie.ms);if(g(ae),s+1>=r.length){_(!0),re(le=>({...le,typing:[...le.typing,{at:Date.now(),mode:t,items:r.length,wpm:ae.wpm,accuracy:ae.accuracy}].slice(-500)}));return}window.setTimeout(()=>o(le=>le+1),260)},O=j=>{if(d)return;$.current===null&&j&&($.current=performance.now());let R=t==="word"?se(l):Me(l),ee=t==="word"?se(j):Me(j),ie=nr(R,ee,x),ae={...p.current,typed:p.current.typed+ie.total,correct:p.current.correct+ie.correct};p.current=ae,g(Sa(ae.correct,ae.typed,ae.accepted,ae.ms)),c(j),ee.length>=x.length&&Xe(ee,x)&&S(j)};if(d)return A.default.createElement("div",{className:"wa-practice wa-typing-done"},A.default.createElement("section",{className:"wa-panel"},A.default.createElement("p",{className:"wa-eyebrow"},"\u672C\u8F6E\u5B8C\u6210"),A.default.createElement("h1",null,m.wpm," ",A.default.createElement("small",null,"WPM")),A.default.createElement("p",{className:"wa-panel-hint"},"\u51C6\u786E\u7387 ",m.accuracy,"% \xB7 ",r.length," \u9879"),A.default.createElement("div",{className:"wa-summary-actions"},A.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:n},"\u8FD4\u56DE"),A.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary wa-btn-lg",onClick:i,autoFocus:!0},A.default.createElement(I,{name:"rotateCcw",size:17})," \u518D\u6765\u4E00\u8F6E"))));let U=Array.from(k),z=Array.from(se(l)).filter(j=>!/\s/.test(j)),F=-1,H=r.length?Math.round(s/r.length*100):0;return A.default.createElement("div",{className:"wa-practice wa-typing"},A.default.createElement("header",{className:"wa-typing-top"},A.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:n},"\u7ED3\u675F"),A.default.createElement("div",{className:"wa-typing-progress"},A.default.createElement("span",{style:{width:`${H}%`}})),A.default.createElement("span",{className:"wa-typing-meter"},A.default.createElement("b",null,m.wpm)," WPM \xB7 ",A.default.createElement("b",null,m.accuracy,"%"))),A.default.createElement("section",{className:"wa-typing-stage",onClick:()=>D.current?.focus()},t==="word"?A.default.createElement("div",{className:"wa-typing-cue"},A.default.createElement(J,{id:u.id,word:u.w,full:!0,className:"wa-typing-art",alt:`${u.w} \u63D2\u753B`}),A.default.createElement("p",null,u.senses[0]?.pos?A.default.createElement("span",{className:"wa-pos"},u.senses[0].pos):null," ",u.senses[0]?.zh)):A.default.createElement("p",{className:"wa-typing-zh"},t==="dictation"?A.default.createElement("button",{type:"button",className:"wa-link",onClick:v},"\u518D\u542C\u4E00\u904D"):null,u.ex[0]?.zh),A.default.createElement("p",{className:`wa-typing-text ${t==="word"?"is-word":""} ${t==="dictation"?"is-hidden":""}`,lang:"en","aria-hidden":"true"},U.map((j,R)=>{if(/\s/.test(j))return A.default.createElement("span",{key:R,className:"is-space","aria-hidden":"true"},"\xA0");F+=1;let ee=z[F],ie=ee===void 0?F===z.length?"is-caret":"":Xe(ee,j)?"is-ok":"is-bad",ae=t==="dictation"&&ee===void 0&&/[A-Za-z]/.test(j)?"\xB7":j;return A.default.createElement("span",{key:R,className:ie},ae)})),A.default.createElement("input",{ref:D,className:"wa-typing-input",value:l,onChange:j=>O(j.target.value),autoFocus:!0,autoCapitalize:"off",autoCorrect:"off",autoComplete:"off",spellCheck:!1,"aria-label":"\u5728\u8FD9\u91CC\u8F93\u5165"}),A.default.createElement("p",{className:"wa-panel-note wa-typing-help"},t==="dictation"?"\u542C\u4E0D\u6E05\u53EF\u4EE5\u70B9\u300C\u518D\u542C\u4E00\u904D\u300D\u3002":"\u76F4\u63A5\u5F00\u59CB\u8F93\u5165\uFF0C\u5168\u90E8\u6B63\u786E\u540E\u81EA\u52A8\u8FDB\u5165\u4E0B\u4E00\u9879\u3002",t==="word"?null:" \u7A7A\u683C\u4E0D\u53C2\u4E0E\u5224\u5206\uFF08\u8F93\u5165\u6CD5\u541E\u6389\u7A7A\u683C\u4E5F\u6CA1\u5173\u7CFB\uFF09\uFF0C\u53E5\u4E2D\u865A\u7EBF\u4E0B\u5212\u7EBF\u8868\u793A\u7A7A\u683C\u3002"," ","\u7B2C ",s+1,"/",r.length," \u9879")))}var T=oe(require("react"),1);function Sn(a,e,t,r){let n=1/Math.tan(a/2),i=1/(t-r);return new Float32Array([n/e,0,0,0,0,n,0,0,0,0,(r+t)*i,-1,0,0,2*r*t*i,0])}function An(a,e,t,r,n,i){let s=a-r,o=e-n,l=t-i,c=Math.hypot(s,o,l)||1;s/=c,o/=c,l/=c;let p=l,m=0,g=-s;c=Math.hypot(p,m,g)||1,p/=c,m/=c,g/=c;let d=o*g-l*m,_=l*p-s*g,$=s*m-o*p;return new Float32Array([p,d,s,0,m,_,o,0,g,$,l,0,-(p*a+m*e+g*t),-(d*a+_*e+$*t),-(s*a+o*e+l*t),1])}function Cn(a,e){let t=new Float32Array(16);for(let r=0;r<4;r++)for(let n=0;n<4;n++){let i=0;for(let s=0;s<4;s++)i+=a[s*4+n]*e[r*4+s];t[r*4+n]=i}return t}var Ln=`#version 300 es
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
}`,En=`#version 300 es
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
}`,$n=`#version 300 es
const vec2 P[3] = vec2[3](vec2(-1.0,-1.0), vec2(3.0,-1.0), vec2(-1.0,3.0));
out vec2 vUv;
void main(){ vUv = P[gl_VertexID] * 0.5 + 0.5; gl_Position = vec4(P[gl_VertexID], 0.0, 1.0); }`,Dn=`#version 300 es
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
}`;function ir(a,e,t){let r=a.createShader(e);if(a.shaderSource(r,t),a.compileShader(r),!a.getShaderParameter(r,a.COMPILE_STATUS))throw new Error(a.getShaderInfoLog(r)||"shader");return r}function sr(a,e,t){let r=a.createProgram();if(a.attachShader(r,ir(a,a.VERTEX_SHADER,e)),a.attachShader(r,ir(a,a.FRAGMENT_SHADER,t)),a.linkProgram(r),!a.getProgramParameter(r,a.LINK_STATUS))throw new Error(a.getProgramInfoLog(r)||"link");return r}function or(){let a=navigator,e=Math.min(screen.width,screen.height)<600;return(a.hardwareConcurrency??8)<=4||(a.deviceMemory??8)<=4||e?"low":"high"}var Ca=class{constructor(e,t,r){this.canvas=e;this.layout=t;this.opts=r;this.states=new Float32Array(t.n),this.screen=new Float32Array(t.n*3),this.autoRotate=r.autoRotate??.035;let n=e.getContext("webgl2",{antialias:!1,alpha:!1,premultipliedAlpha:!0,preserveDrawingBuffer:!!r.preserve,powerPreference:"high-performance"});if(n)try{this.initGL(n),this.gl=n}catch{this.gl=null}this.gl||(this.ctx2d=e.getContext("2d")),r.reducedMotion&&(this.introStart=-1e9)}canvas;layout;opts;cam={yaw:.6,pitch:1.12,dist:1.8,tx:0,ty:0,tz:0};goal=null;gl=null;ctx2d=null;star;neb;vao;stateBuf;states;vp=new Float32Array(16);screen;raf=0;t0=performance.now();last=performance.now();introStart=performance.now();running=!1;w=1;h=1;dpr=1;hover=-1;autoRotate;onFrame;get webgl(){return!!this.gl}initGL(e){let t=this.layout;this.star=sr(e,Ln,En),this.neb=sr(e,$n,Dn),this.vao=e.createVertexArray(),e.bindVertexArray(this.vao);let r=(n,i,s,o=e.STATIC_DRAW)=>{let l=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,l),e.bufferData(e.ARRAY_BUFFER,i,o);let c=e.getAttribLocation(this.star,n);return e.enableVertexAttribArray(c),e.vertexAttribPointer(c,s,e.FLOAT,!1,0,0),l};r("aPos",t.positions,3),r("aColor",t.colors,3),r("aSeed",t.seeds,1),this.stateBuf=r("aState",this.states,1,e.DYNAMIC_DRAW),e.bindVertexArray(null)}setStates(e){this.states.set(e);let t=this.gl;t&&this.stateBuf&&(t.bindBuffer(t.ARRAY_BUFFER,this.stateBuf),t.bufferSubData(t.ARRAY_BUFFER,0,this.states))}setState(e,t){this.states[e]=t;let r=this.gl;r&&this.stateBuf&&(r.bindBuffer(r.ARRAY_BUFFER,this.stateBuf),r.bufferSubData(r.ARRAY_BUFFER,e*4,this.states.subarray(e,e+1)))}baseDist(){let e=this.w/this.h;return e<1?1.8/Math.max(.55,e)*.82:1.8}resize(){let e=this.canvas.getBoundingClientRect(),t=this.w===1;this.dpr=Math.min(window.devicePixelRatio||1,this.opts.quality==="low"?1.25:2),this.w=Math.max(1,e.width),this.h=Math.max(1,e.height),this.canvas.width=Math.round(this.w*this.dpr),this.canvas.height=Math.round(this.h*this.dpr),t&&(this.cam.dist=this.baseDist())}frameStars(e,t=1.15){if(!e.length)return;let r=this.layout.positions,n=0,i=0,s=0;e.forEach(l=>{n+=r[l*3],i+=r[l*3+1],s+=r[l*3+2]});let o=e.length;Object.assign(this.cam,{tx:n/o*.6,ty:i/o,tz:s/o*.6,dist:t})}flyTo(e,t=.75){let r=this.layout.positions;this.goal={tx:r[e*3],ty:r[e*3+1],tz:r[e*3+2],dist:t}}reset(){this.goal={tx:0,ty:0,tz:0,dist:this.baseDist(),pitch:1.12}}replayIntro(){this.opts.reducedMotion||(this.introStart=performance.now())}start(){if(this.running)return;this.running=!0,this.last=performance.now();let e=t=>{this.running&&(this.frame(t),this.raf=requestAnimationFrame(e))};this.raf=requestAnimationFrame(e)}stop(){this.running=!1,cancelAnimationFrame(this.raf)}destroy(){this.stop(),this.onFrame=void 0}matrices(){let e=this.cam,t=e.tx+e.dist*Math.cos(e.pitch)*Math.sin(e.yaw),r=e.ty+e.dist*Math.sin(e.pitch),n=e.tz+e.dist*Math.cos(e.pitch)*Math.cos(e.yaw),i=Sn(.75,this.w/this.h,.02,20);this.vp=Cn(i,An(t,r,n,e.tx,e.ty,e.tz))}project(){let e=this.vp,t=this.layout.positions,r=this.screen;for(let n=0;n<this.layout.n;n++){let i=t[n*3],s=t[n*3+1],o=t[n*3+2],l=e[3]*i+e[7]*s+e[11]*o+e[15];if(l<=.01){r[n*3+2]=-1;continue}let c=(e[0]*i+e[4]*s+e[8]*o+e[12])/l,p=(e[1]*i+e[5]*s+e[9]*o+e[13])/l;r[n*3]=(c*.5+.5)*this.w,r[n*3+1]=(1-(p*.5+.5))*this.h,r[n*3+2]=l}}toScreen(e,t,r){let n=this.vp,i=n[3]*e+n[7]*t+n[11]*r+n[15];if(i<=.01)return null;let s=(n[0]*e+n[4]*t+n[8]*r+n[12])/i,o=(n[1]*e+n[5]*t+n[9]*r+n[13])/i;return{x:(s*.5+.5)*this.w,y:(1-(o*.5+.5))*this.h,depth:i}}starScreen(e){return{x:this.screen[e*3],y:this.screen[e*3+1],depth:this.screen[e*3+2]}}pick(e,t,r=16){this.project();let n=-1,i=1/0;for(let s=0;s<this.layout.n;s++){if(this.screen[s*3+2]<=0)continue;let l=this.screen[s*3]-e,c=this.screen[s*3+1]-t,p=Math.hypot(l,c);if(p>r)continue;let m=p-this.states[s]*4;m<i&&(i=m,n=s)}return n}frame(e){let t=Math.min(.05,(e-this.last)/1e3);this.last=e;let r=(e-this.t0)/1e3,n=Math.min(1,(e-this.introStart)/2600);if(this.opts.reducedMotion||(this.cam.yaw+=this.autoRotate*t),this.goal){let i=this.goal,s=this.cam,o=!0;for(let l of Object.keys(i))s[l]+=(i[l]-s[l])*Math.min(1,t*3.2),Math.abs(i[l]-s[l])>.001&&(o=!1);o&&(this.goal=null)}this.matrices(),this.gl?this.drawGL(r,n):this.draw2D(r,n),this.onFrame?.()}drawGL(e,t){let r=this.gl;r.viewport(0,0,this.canvas.width,this.canvas.height),r.disable(r.BLEND),r.useProgram(this.neb);let n=this.toScreen(0,0,0);r.uniform1f(r.getUniformLocation(this.neb,"uTime"),this.opts.reducedMotion?0:e),r.uniform1f(r.getUniformLocation(this.neb,"uYaw"),this.cam.yaw),r.uniform1f(r.getUniformLocation(this.neb,"uAspect"),this.w/this.h),r.uniform1f(r.getUniformLocation(this.neb,"uIntro"),t),r.uniform2f(r.getUniformLocation(this.neb,"uCore"),n?n.x/this.w:.5,n?1-n.y/this.h:.5),r.uniform1i(r.getUniformLocation(this.neb,"uOct"),this.opts.quality==="low"?3:5),r.drawArrays(r.TRIANGLES,0,3),r.enable(r.BLEND),r.blendFunc(r.ONE,r.ONE),r.useProgram(this.star),r.uniformMatrix4fv(r.getUniformLocation(this.star,"uVP"),!1,this.vp),r.uniform1f(r.getUniformLocation(this.star,"uTime"),e),r.uniform1f(r.getUniformLocation(this.star,"uIntro"),t),r.uniform1f(r.getUniformLocation(this.star,"uScale"),this.dpr*Math.min(this.w,this.h)/520),r.uniform1f(r.getUniformLocation(this.star,"uHover"),this.hover),r.uniform1f(r.getUniformLocation(this.star,"uMotion"),this.opts.reducedMotion?0:1),r.bindVertexArray(this.vao),r.drawArrays(r.POINTS,0,this.layout.n),r.bindVertexArray(null)}draw2D(e,t){let r=this.ctx2d;if(!r)return;r.setTransform(this.dpr,0,0,this.dpr,0,0);let n=r.createRadialGradient(this.w/2,this.h/2,0,this.w/2,this.h/2,Math.max(this.w,this.h)*.7);n.addColorStop(0,"#1b1d38"),n.addColorStop(1,"#090c18"),r.fillStyle=n,r.fillRect(0,0,this.w,this.h),this.project(),r.globalCompositeOperation="lighter";let i=this.layout.colors;for(let s=0;s<this.layout.n;s++){let o=this.screen[s*3+2];if(o<=0)continue;let l=this.states[s],c=(l>2.5?7:l>1.5?5:l>.5?3.5:1.3)*(s===this.hover?2:1)*Math.min(this.w,this.h)/520/o,p=(l>.5?.9:.3*(.7+.3*Math.sin(e+s)))*t;r.fillStyle=`rgba(${i[s*3]*255|0},${i[s*3+1]*255|0},${i[s*3+2]*255|0},${p})`,r.fillRect(this.screen[s*3]-c/2,this.screen[s*3+1]-c/2,Math.max(1,c),Math.max(1,c))}r.globalCompositeOperation="source-over"}};var Je=["#f2c46d","#ef8f6b","#8fd0c8","#9fb8ff","#9be38f","#ff9fa8","#f7d9a8","#c6a7ff","#ffd36b","#7fc4ff","#ffb38a","#86e0b5","#d8c3a5","#b5e48c","#ffe6b0","#ff8fc3","#a8d8ff","#ffcf7a","#e0b0ff"],In=a=>[1,3,5].map(e=>parseInt(a.slice(e,e+2),16)/255);function Tn(a){let e=a>>>0||1;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function lr(a){let e=a.words,t=e.length,r=new Float32Array(t*3),n=new Float32Array(t*3),i=new Float32Array(t),s=new Map(a.topics.map((g,d)=>[g.slug,d])),o=new Map(a.cefr.map((g,d)=>[g,d])),l=a.topics.length,c=new Array(l).fill(0);e.forEach(g=>{let d=s.get(g.topic)??0;c[d]+=1});let p=t/l;e.forEach((g,d)=>{let _=Tn(fe(g.id)),$=()=>(_()+_()+_()-1.5)/1.5,E=.1+(o.get(g.cefr)??2)/5*.72+_()*.16,u=s.get(g.topic)??0,k=u/l*Math.PI*2,C=Math.sqrt(Math.max(.6,c[u]/p)),v=k+E*3.4+$()*(.05+.03/E)*C,x=.05*(1-E*.6)*C;r[d*3]=Math.cos(v)*E,r[d*3+1]=$()*x,r[d*3+2]=Math.sin(v)*E;let[S,O,U]=In(Je[u%Je.length]);n.set([S,O,U],d*3),i[d]=_()});let m=.62;return{n:t,positions:r,colors:n,seeds:i,ids:e.map(g=>g.id),index:new Map(e.map((g,d)=>[g.id,d])),topicCenters:a.topics.map((g,d)=>{let _=d/l*Math.PI*2+m*3.4;return[Math.cos(_)*m,0,Math.sin(_)*m]})}}var dr=new WeakMap;function jn(a){return(0,T.useMemo)(()=>{let e=dr.get(a);return e||(e=lr(a),dr.set(a,e)),e},[a])}var Fn=()=>typeof matchMedia<"u"&&matchMedia("(prefers-reduced-motion: reduce)").matches;function On(a,e){let t=new Float32Array(a.n);return a.ids.forEach((r,n)=>{let i=e[r];t[n]=i?me(i)?2:1:0}),t}var Fe=a=>Math.max(.35,Math.min(4.2,a));function La({atlas:a,progress:e,onOpenWord:t}){let r=jn(a),n=e.cards,i=(0,T.useRef)(null),s=(0,T.useRef)(null),o=(0,T.useRef)(null),[l,c]=(0,T.useState)(null),[p,m]=(0,T.useState)(!1);(0,T.useEffect)(()=>{let x=i.current;if(!x)return;let S=new Ca(x,r,{quality:or(),reducedMotion:Fn(),preserve:!0,autoRotate:.025});s.current=S,S.resize();let O=new ResizeObserver(()=>S.resize());O.observe(x);let U=new IntersectionObserver(([F])=>F.isIntersecting&&!document.hidden?S.start():S.stop());U.observe(x);let z=()=>document.hidden?S.stop():S.start();return document.addEventListener("visibilitychange",z),S.onFrame=()=>{let F=o.current;if(!F)return;let H=F.children;r.topicCenters.forEach(([j,R,ee],ie)=>{let ae=H[ie],le=S.toScreen(j,R,ee);if(ae){if(!le){ae.style.opacity="0";return}ae.style.transform=`translate(${le.x}px, ${le.y}px) translate(-50%, -50%)`,ae.style.opacity=String(Math.max(0,Math.min(.9,3.4-le.depth)))}})},m(!0),()=>{O.disconnect(),U.disconnect(),document.removeEventListener("visibilitychange",z),S.destroy(),s.current=null}},[r]),(0,T.useEffect)(()=>{s.current?.setStates(On(r,n))},[r,n]);let g=(0,T.useRef)(null),d=(0,T.useRef)(new Map),_=(0,T.useRef)(0);(0,T.useEffect)(()=>()=>window.clearTimeout(_.current),[]);let $=x=>{let S=i.current.getBoundingClientRect();return{x:x.clientX-S.left,y:x.clientY-S.top}},D=x=>{let S=s.current;if(!S)return;let O=$(x),U=d.current;if(U.has(x.pointerId)){let H=U.get(x.pointerId);if(U.set(x.pointerId,O),U.size===2){let[j,R]=[...U.values()],ee=Math.hypot(j.x-R.x,j.y-R.y);g.current?.pinch&&(S.cam.dist=Fe(S.cam.dist*(g.current.pinch/ee))),g.current&&(g.current.pinch=ee);return}if(g.current){let j=O.x-H.x,R=O.y-H.y;g.current.moved+=Math.abs(j)+Math.abs(R),S.cam.yaw-=j*.006,S.cam.pitch=Math.max(.12,Math.min(1.45,S.cam.pitch+R*.005))}return}if(x.pointerType!=="mouse")return;let z=S.pick(O.x,O.y);if(S.hover=z,window.clearTimeout(_.current),z<0){_.current=window.setTimeout(()=>c(null),260);return}let F=a.words[z];_.current=window.setTimeout(()=>c({word:F,x:O.x,y:O.y}),120)},E=x=>{x.currentTarget.setPointerCapture(x.pointerId),d.current.set(x.pointerId,$(x)),g.current={...$(x),moved:0}},u=x=>{let S=s.current,O=g.current;if(d.current.delete(x.pointerId),d.current.size>0||(g.current=null,!S||!O||O.moved>8))return;let U=$(x),z=S.pick(U.x,U.y,x.pointerType==="mouse"?16:26);if(z<0)return;let F=a.words[z];if(x.pointerType!=="mouse"&&l?.word.id!==F.id){S.hover=z,c({word:F,x:U.x,y:U.y});return}S.flyTo(z),window.setTimeout(()=>t(F.id),350)},k=x=>{let S=s.current;S&&(S.cam.dist=Fe(S.cam.dist*Math.exp(x.deltaY*.0012)))};(0,T.useEffect)(()=>{let x=i.current;if(!x)return;let S=O=>O.preventDefault();return x.addEventListener("wheel",S,{passive:!1}),()=>x.removeEventListener("wheel",S)},[]);let C=(0,T.useMemo)(()=>r.ids.reduce((x,S)=>x+(n[S]?1:0),0),[r,n]),v=()=>{let x=i.current;if(!x)return;let S=document.createElement("a");S.download="word-atlas-galaxy.png",S.href=x.toDataURL("image/png"),S.click()};return T.default.createElement("div",{className:"wa-galaxy-page"},T.default.createElement("header",{className:"wa-galaxy-head"},T.default.createElement("div",null,T.default.createElement("p",{className:"wa-eyebrow"},"\u8BCD\u6C47\u661F\u56FE \xB7 Galaxy"),T.default.createElement("h1",null,"\u5B66\u8FC7\u7684\u8BCD\uFF0C\u6C47\u6210\u4F60\u7684\u661F\u56FE\u3002")),T.default.createElement("div",{className:"wa-galaxy-legend","aria-hidden":"true"},T.default.createElement("span",null,T.default.createElement("i",{className:"is-dust"}),"\u672A\u5B66"),T.default.createElement("span",null,T.default.createElement("i",{className:"is-learning"}),"\u5B66\u4E60\u4E2D"),T.default.createElement("span",null,T.default.createElement("i",{className:"is-mastered"}),"\u5DF2\u638C\u63E1"))),T.default.createElement("div",{className:`wa-galaxy ${p?"is-ready":""}`},T.default.createElement("canvas",{ref:i,onPointerMove:D,onPointerDown:E,onPointerUp:u,onPointerCancel:u,onPointerLeave:()=>{s.current&&(s.current.hover=-1),c(null)},onWheel:k,role:"img","aria-label":`\u8BCD\u6C47\u661F\u56FE\uFF1A${r.n} \u9897\u661F\uFF0C\u5DF2\u70B9\u4EAE ${C} \u9897\u3002\u53EF\u62D6\u52A8\u65CB\u8F6C\u3001\u6EDA\u52A8\u7F29\u653E\u3001\u70B9\u51FB\u661F\u661F\u6253\u5F00\u8BCD\u6761\u3002`,tabIndex:0,onKeyDown:x=>{let S=s.current;S&&(x.key==="ArrowLeft"&&(S.cam.yaw-=.12),x.key==="ArrowRight"&&(S.cam.yaw+=.12),x.key==="ArrowUp"&&(S.cam.pitch=Math.min(1.45,S.cam.pitch+.08)),x.key==="ArrowDown"&&(S.cam.pitch=Math.max(.12,S.cam.pitch-.08)),(x.key==="+"||x.key==="=")&&(S.cam.dist=Fe(S.cam.dist*.85)),x.key==="-"&&(S.cam.dist=Fe(S.cam.dist*1.18)))}}),T.default.createElement("div",{className:"wa-galaxy-labels",ref:o,"aria-hidden":"true"},a.topics.map((x,S)=>T.default.createElement("span",{key:x.slug,style:{"--c":Je[S%Je.length]}},x.zh))),l?T.default.createElement("button",{type:"button",className:"wa-galaxy-tip",style:{transform:`translate(${Math.min(l.x+18,(i.current?.clientWidth??0)-260)}px, ${Math.max(8,l.y-46)}px)`},onClick:()=>t(l.word.id)},T.default.createElement(J,{id:l.word.id,word:l.word.word,className:"wa-galaxy-tip-img"}),T.default.createElement("span",null,T.default.createElement("b",{lang:"en"},l.word.word),T.default.createElement("small",null,l.word.zh))):null,T.default.createElement("div",{className:"wa-galaxy-hud"},T.default.createElement("p",null,T.default.createElement("b",null,C.toLocaleString("en-US"))," / ",r.n.toLocaleString("en-US")," \u9897\u661F\u5DF2\u70B9\u4EAE")),T.default.createElement("div",{className:"wa-galaxy-controls"},T.default.createElement("button",{type:"button",className:"wa-icon-btn",onClick:()=>s.current&&(s.current.cam.dist=Fe(s.current.cam.dist*.8)),"aria-label":"\u653E\u5927"},T.default.createElement(I,{name:"plus",size:18})),T.default.createElement("button",{type:"button",className:"wa-icon-btn",onClick:()=>s.current&&(s.current.cam.dist=Fe(s.current.cam.dist*1.25)),"aria-label":"\u7F29\u5C0F"},T.default.createElement(I,{name:"minus",size:18})),T.default.createElement("button",{type:"button",className:"wa-icon-btn",onClick:()=>{s.current?.reset(),s.current?.replayIntro()},"aria-label":"\u56DE\u5230\u5168\u666F"},T.default.createElement(I,{name:"rotateCcw",size:17})),T.default.createElement("button",{type:"button",className:"wa-icon-btn",onClick:()=>{let x=Object.keys(n),S=x[Math.floor(Math.random()*x.length)]??a.words[0]?.id,O=S?r.index.get(S):void 0;O!==void 0&&s.current?.flyTo(O)},"aria-label":"\u98DE\u5230\u4E00\u9897\u5DF2\u70B9\u4EAE\u7684\u661F"},T.default.createElement(I,{name:"crosshair",size:17})),T.default.createElement("button",{type:"button",className:"wa-icon-btn",onClick:v,"aria-label":"\u4FDD\u5B58\u661F\u56FE\u56FE\u7247"},T.default.createElement(I,{name:"share",size:17}))),T.default.createElement("p",{className:"wa-galaxy-hint"},"\u62D6\u52A8\u65CB\u8F6C \xB7 \u6EDA\u52A8\u7F29\u653E \xB7 \u70B9\u51FB\u661F\u661F\u6253\u5F00\u8BCD\u6761")))}var W=oe(require("react"),1);var Pn=[{id:"today",label:"\u4ECA\u65E5\u5B66\u4E60",icon:"star"},{id:"atlas",label:"\u56FE\u9274",icon:"book"},{id:"galaxy",label:"\u8BCD\u6C47\u661F\u56FE",icon:"orbit"},{id:"review",label:"\u5FEB\u901F\u590D\u4E60",icon:"refresh"},{id:"practice",label:"\u6253\u5B57\u7EC3\u4E60",icon:"keyboard"},{id:"bookmarks",label:"\u751F\u8BCD\u672C",icon:"heart"},{id:"settings",label:"\u6211\u7684 / \u8BBE\u7F6E",icon:"user"}];function Ea({atlas:a,progress:e,onClose:t,onNavigate:r,onOpenWord:n}){let[i,s]=(0,W.useState)(""),[o,l]=(0,W.useState)(0),c=(0,W.useRef)(null);(0,W.useEffect)(()=>{c.current?.focus()},[]);let p=(0,W.useMemo)(()=>{if(!a)return[];let d=i.trim().toLowerCase();return d?a.words.filter(_=>_.word.toLowerCase().includes(d)||_.zh.toLowerCase().includes(d)).slice(0,8):[]},[a,i]),m=(0,W.useMemo)(()=>i.trim()?p.map(d=>({type:"word",...d})):Pn.map(d=>({type:"action",...d})),[i,p]);(0,W.useEffect)(()=>{l(0)},[i]);let g=d=>{d&&(d.type==="word"?n(d.id):r(d.id),t())};return W.default.createElement("div",{className:"wa-palette-overlay",onMouseDown:d=>{d.target===d.currentTarget&&t()}},W.default.createElement("div",{className:"wa-palette",role:"dialog","aria-modal":"true","aria-label":"\u547D\u4EE4\u9762\u677F",onKeyDown:d=>{d.key==="Escape"?(d.preventDefault(),t()):d.key==="ArrowDown"?(d.preventDefault(),l(_=>Math.min(m.length-1,_+1))):d.key==="ArrowUp"?(d.preventDefault(),l(_=>Math.max(0,_-1))):d.key==="Enter"&&(d.preventDefault(),g(m[o]))}},W.default.createElement("div",{className:"wa-palette-search"},W.default.createElement(I,{name:"search",size:17}),W.default.createElement("input",{ref:c,value:i,onChange:d=>s(d.target.value),placeholder:"\u641C\u7D22\u5355\u8BCD\u6216\u8DF3\u8F6C\u9875\u9762\u2026","aria-label":"\u641C\u7D22\u5355\u8BCD\u6216\u8DF3\u8F6C\u9875\u9762",spellCheck:!1}),W.default.createElement("kbd",null,"Esc")),W.default.createElement("ul",{className:"wa-palette-list"},i.trim()?W.default.createElement("li",{className:"wa-palette-label"},"\u8BCD\u6761 \xB7 ",p.length?`\u5339\u914D ${p.length} \u4E2A`:"\u6CA1\u6709\u7ED3\u679C"):W.default.createElement("li",{className:"wa-palette-label"},"\u524D\u5F80"),m.map((d,_)=>W.default.createElement("li",{key:d.type==="word"?`word-${d.id}`:`view-${d.id}`},W.default.createElement("button",{type:"button",className:_===o?"is-active":"",onMouseEnter:()=>l(_),onClick:()=>g(d)},d.type==="word"?W.default.createElement(W.default.Fragment,null,W.default.createElement("span",{className:"wa-palette-word",lang:"en"},d.word),W.default.createElement("span",{className:"wa-palette-zh"},d.zh),W.default.createElement("span",{className:"wa-palette-tag"},d.cefr)):W.default.createElement(W.default.Fragment,null,W.default.createElement(I,{name:d.icon,size:16}),W.default.createElement("span",null,d.label)))))),W.default.createElement("p",{className:"wa-palette-footer"},"\u2191\u2193 \u9009\u62E9 \xB7 Enter \u6253\u5F00 \xB7 Esc \u5173\u95ED")))}var pr=require("react");function et({protocol:a,platform:e,left:t,top:r,fullscreen:n=!1}){return a==="dsh-app:"&&/Mac/.test(String(e||""))&&Number(t)<110&&Number(r)<45&&!n}function cr(a,e){(0,pr.useEffect)(()=>{let t=a.current;if(!t)return;let r=()=>{let i=t.getBoundingClientRect(),s=et({protocol:window.location.protocol,platform:navigator.platform,left:i.left,top:i.top,fullscreen:!!document.fullscreenElement});t.dataset.titlebar=s?"true":"false"};r();let n=typeof ResizeObserver=="function"?new ResizeObserver(r):null;return n?.observe(t),window.addEventListener("resize",r),document.addEventListener("fullscreenchange",r),()=>{n?.disconnect(),window.removeEventListener("resize",r),document.removeEventListener("fullscreenchange",r),delete t.dataset.titlebar}},[a,e])}var Bn=M.Good;function Un(){return N.default.createElement("svg",{viewBox:"0 0 64 64",width:"34",height:"34","aria-hidden":"true"},N.default.createElement("defs",null,N.default.createElement("linearGradient",{id:"wa-brand-gold",x1:"0",y1:"0",x2:"1",y2:"1"},N.default.createElement("stop",{offset:"0",stopColor:"#FFE9A8"}),N.default.createElement("stop",{offset:"0.55",stopColor:"#F5C052"}),N.default.createElement("stop",{offset:"1",stopColor:"#D98E2B"}))),N.default.createElement("rect",{width:"64",height:"64",rx:"15",fill:"var(--dsw-alias-bg-layer-2)"}),N.default.createElement("circle",{cx:"14",cy:"18",r:"1.4",fill:"var(--dsw-alias-label-secondary)",opacity:"0.6"}),N.default.createElement("circle",{cx:"50",cy:"16",r:"1.7",fill:"var(--dsw-alias-label-secondary)",opacity:"0.6"}),N.default.createElement("circle",{cx:"50",cy:"48",r:"1.3",fill:"var(--dsw-alias-label-secondary)",opacity:"0.5"}),N.default.createElement("circle",{cx:"14",cy:"46",r:"1.5",fill:"var(--dsw-alias-label-secondary)",opacity:"0.5"}),N.default.createElement("path",{d:"M32 15 L36.6 27.4 L49 32 L36.6 36.6 L32 49 L27.4 36.6 L15 32 L27.4 27.4 Z",fill:"url(#wa-brand-gold)"}),N.default.createElement("circle",{cx:"32",cy:"32",r:"3.4",fill:"#FFF6D8"}))}var Wn=[{id:"today",label:"\u4ECA\u65E5",icon:"star"},{id:"atlas",label:"\u56FE\u9274",icon:"book"},{id:"galaxy",label:"\u661F\u56FE",icon:"orbit"},{id:"review",label:"\u590D\u4E60",icon:"refresh"},{id:"practice",label:"\u7EC3\u4E60",icon:"keyboard"},{id:"bookmarks",label:"\u751F\u8BCD\u672C",icon:"heart"},{id:"settings",label:"\u6211\u7684",icon:"user"}];function at(){let[a,e]=(0,N.useState)(null),[t,r]=(0,N.useState)(""),[n,i]=(0,N.useState)("today"),[s,o]=(0,N.useState)(""),[l,c]=(0,N.useState)("all"),[p,m]=(0,N.useState)("all"),[g,d]=(0,N.useState)([]),[_,$]=(0,N.useState)(!1),D=ht(),E=(0,N.useRef)(null);cr(E,n),(0,N.useEffect)(()=>{let L=G=>{(G.metaKey||G.ctrlKey)&&G.key.toLowerCase()==="k"&&(G.preventDefault(),$(Oe=>!Oe))};return window.addEventListener("keydown",L),()=>window.removeEventListener("keydown",L)},[]),(0,N.useEffect)(()=>{bt();let L=!0;return ot().then(G=>{L&&e(G)}).catch(G=>{L&&r(G.message||"\u8BCD\u5E93\u52A0\u8F7D\u5931\u8D25")}),()=>{L=!1}},[]);let u=(0,N.useMemo)(()=>{if(!a)return[];let L=s.trim().toLowerCase();return a.words.filter(G=>l!=="all"&&G.cefr!==l||p!=="all"&&G.topic!==p?!1:L?G.word.toLowerCase().includes(L)||G.zh.toLowerCase().includes(L)||G.ipa.toLowerCase().includes(L):!0)},[a,s,l,p]),k=(0,N.useMemo)(()=>a?D.bookmarks.map(L=>a.byId.get(L)).filter(Boolean):[],[a,D.bookmarks]),C=(0,N.useMemo)(()=>{if(!a)return 0;let L=Date.now(),G=0;for(let Oe of a.words){let Pe=D.cards[Oe.id];Pe&&Pe.due<=L&&(G+=1)}return G},[a,D.cards]),v=(0,N.useMemo)(()=>Object.keys(D.cards).length,[D.cards]),x=(0,N.useMemo)(()=>Ae(D.days),[D.days]),S=n==="bookmarks"?k:u,O=g.length>0?g[g.length-1]:null,U=O&&a?a.byId.get(O):null,z=U?S.findIndex(L=>L.id===U.id):-1,F=g.length>1&&a?a.byId.get(g[g.length-2]):null,H=L=>d([L]),j=L=>d(G=>G[G.length-1]===L?G:[...G,L]),R=()=>d(L=>L.slice(0,-1)),ee=L=>re(G=>xt(G,L)),ie=L=>re(G=>G.cards[L]?G:{...G,cards:{...G.cards,[L]:$e(void 0,Bn)},days:ia(G.days,{newWords:1})}),ae=()=>re(L=>({...L,settings:{...L.settings,accent:L.settings.accent==="uk"?"us":"uk"}})),le=(L={})=>{if(!a)return;if(D.session&&!D.session.finished&&!L.ids&&!L.reviewOnly&&!L.extra){i("learn");return}let Oe=L.extra?{...D.settings,dailyNew:qe(D)+L.extra}:D.settings,Pe=ga(a,D,Oe,L);Pe.steps.length!==0&&(re(wr=>({...wr,session:Pe})),i("learn"))},rt=U&&a?N.default.createElement(xa,{atlas:a,word:U,progress:D,onClose:()=>d([]),onOpenWord:j,onBack:g.length>1?R:void 0,backLabel:F?.word,onPrev:()=>{z>0&&d(L=>[...L.slice(0,-1),S[z-1].id])},onNext:()=>{z>=0&&z<S.length-1&&d(L=>[...L.slice(0,-1),S[z+1].id])},hasPrev:z>0,hasNext:z>=0&&z<S.length-1,onToggleBookmark:ee,onMarkLearned:ie}):null;return n==="learn"&&a?N.default.createElement("div",{className:"wa-root wa-root-focus",ref:E},N.default.createElement(Na,{atlas:a,progress:D,onExit:()=>i("today"),onRestart:le,onOpenWord:j}),rt):N.default.createElement("div",{className:"wa-root",ref:E},N.default.createElement("header",{className:"wa-header"},N.default.createElement("div",{className:"wa-brand"},N.default.createElement(Un,null),N.default.createElement("div",{className:"wa-brand-text"},N.default.createElement("h1",null,"\u8BCD\u5149 ",N.default.createElement("span",null,"Word Atlas")),N.default.createElement("p",null,"7,298 \u96C5\u601D\u8BCD \xB7 \u4E00\u8BCD\u4E00\u753B \xB7 FSRS \u95F4\u9694\u590D\u4E60"))),N.default.createElement("div",{className:"wa-toolbar"},N.default.createElement("div",{className:"wa-search",title:"\u2318K \u6253\u5F00\u547D\u4EE4\u9762\u677F"},N.default.createElement(I,{name:"search",size:16}),N.default.createElement("input",{value:s,onChange:L=>{o(L.target.value),n!=="atlas"&&i("atlas")},placeholder:"\u641C\u7D22\u5355\u8BCD / \u4E2D\u6587\u91CA\u4E49","aria-label":"\u641C\u7D22\u5355\u8BCD\u6216\u91CA\u4E49",spellCheck:!1}),s?N.default.createElement("button",{type:"button",className:"wa-search-clear",onClick:()=>o(""),"aria-label":"\u6E05\u7A7A\u641C\u7D22"},N.default.createElement(I,{name:"close",size:14})):null),N.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost wa-accent-btn",onClick:ae,title:"\u5207\u6362\u53D1\u97F3\u504F\u597D"},N.default.createElement(I,{name:"globe",size:15})," ",D.settings.accent==="uk"?"\u82F1\u97F3":"\u7F8E\u97F3"),N.default.createElement("button",{type:"button",className:"wa-icon-btn",onClick:()=>i("settings"),"aria-label":"\u8BBE\u7F6E\u4E0E\u5173\u4E8E"},N.default.createElement(I,{name:"info",size:18})))),N.default.createElement("nav",{className:"wa-tabs",role:"tablist","aria-label":"\u8BCD\u5149\u89C6\u56FE"},Wn.map(L=>N.default.createElement("button",{key:L.id,type:"button",role:"tab","aria-selected":n===L.id,className:n===L.id?"is-on":"",onClick:()=>i(L.id)},N.default.createElement(I,{name:L.icon,size:16})," ",L.label,L.id==="atlas"&&a?N.default.createElement("span",{className:"wa-tab-count"},a.count.toLocaleString("en-US")):null,L.id==="review"&&C>0?N.default.createElement("span",{className:"wa-tab-badge"},C>999?"999+":C):null,L.id==="bookmarks"&&k.length>0?N.default.createElement("span",{className:"wa-tab-count"},k.length):null)),N.default.createElement("div",{className:"wa-tabs-meta"},N.default.createElement("span",null,"\u5DF2\u5B66 ",v.toLocaleString("en-US")),N.default.createElement("i",null),N.default.createElement("span",null,"\u8FDE\u7EED ",x," \u5929"))),N.default.createElement("main",{className:"wa-main"},t?N.default.createElement(ze,{icon:"info",title:"\u8BCD\u5E93\u8FD8\u6CA1\u51C6\u5907\u597D"},N.default.createElement("p",null,t),N.default.createElement("p",{className:"wa-about-note"},"\u8BF7\u786E\u8BA4 word-atlas \u63D2\u4EF6\u5DF2\u542F\u7528\u3001Host \u8DEF\u7531 ",N.default.createElement("code",null,"/word-atlas/health")," \u53EF\u8BBF\u95EE\uFF1B\u5982\u679C\u63D2\u4EF6\u521A\u5B89\u88C5\uFF0C\u5237\u65B0\u9875\u9762\u518D\u8BD5\u3002")):a?n==="today"?N.default.createElement(ka,{atlas:a,progress:D,onStart:le,onOpenWord:j,onOpenLevel:L=>{c(L),i("atlas")},onOpenTopic:L=>{m(L),i("atlas")}}):n==="galaxy"?N.default.createElement(La,{atlas:a,progress:D,onOpenWord:j}):n==="practice"?N.default.createElement(Aa,{atlas:a,progress:D}):n==="review"?N.default.createElement(va,{atlas:a,progress:D,onExit:()=>i("today"),onOpenWord:j}):n==="settings"?N.default.createElement(Ma,{atlas:a,progress:D,onOpenWord:j}):n==="bookmarks"?k.length===0?N.default.createElement(ze,{icon:"heart",title:"\u751F\u8BCD\u672C\u8FD8\u662F\u7A7A\u7684"},N.default.createElement("p",null,"\u5728\u8BCD\u6761\u5361\u7247\u6216\u8BE6\u60C5\u91CC\u70B9 \u2665\uFF0C\u628A\u60F3\u53CD\u590D\u770B\u7684\u8BCD\u6536\u8FDB\u6765\u3002"),N.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary",onClick:()=>i("atlas")},"\u53BB\u56FE\u9274")):N.default.createElement(Ze,{atlas:a,words:k,progress:D,onOpen:H,onToggleBookmark:ee}):N.default.createElement(N.default.Fragment,null,N.default.createElement("div",{className:"wa-filters"},N.default.createElement("div",{className:"wa-chips",role:"group","aria-label":"CEFR \u7EA7\u522B"},N.default.createElement("button",{type:"button",className:l==="all"?"is-on":"",onClick:()=>c("all")},"\u5168\u90E8\u7EA7\u522B"),a.cefr.map(L=>N.default.createElement("button",{type:"button",key:L,className:l===L?"is-on":"",onClick:()=>c(L)},L))),N.default.createElement("div",{className:"wa-topics",role:"group","aria-label":"\u8BDD\u9898"},N.default.createElement("button",{type:"button",className:p==="all"?"is-on":"",onClick:()=>m("all")},"\u5168\u90E8\u8BDD\u9898"),a.topics.map(L=>N.default.createElement("button",{type:"button",key:L.slug,className:p===L.slug?"is-on":"",onClick:()=>m(L.slug)},L.zh)))),N.default.createElement(Ze,{atlas:a,words:u,progress:D,onOpen:H,onToggleBookmark:ee}),N.default.createElement("footer",{className:"wa-footer"},"\u8BCD\u5E93 \xB7 \u63D2\u753B \xB7 \u53D1\u97F3\u6765\u81EA"," ",N.default.createElement("a",{href:"https://github.com/designfuchen/word-atlas",target:"_blank",rel:"noreferrer"},"\u8BCD\u5149 \xB7 Word Atlas")," ","\xB7 CC BY 4.0")):N.default.createElement("div",{className:"wa-boot"},N.default.createElement(he,{label:"\u6B63\u5728\u52A0\u8F7D\u8BCD\u5149\u8BCD\u5E93\u2026"}))),rt,_?N.default.createElement(Ea,{atlas:a,progress:D,onClose:()=>$(!1),onNavigate:L=>i(L),onOpenWord:j}):null)}var Gn="word-atlas-dsh",ur="word-atlas";function Hn({size:a=18,active:e=!1}){return tt.default.createElement("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:e?"currentColor":"none",stroke:"currentColor",strokeWidth:1.6,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"},tt.default.createElement("path",{d:"M12 3.2l2.25 4.8 5.2.72-3.78 3.65.93 5.19L12 15.1l-4.6 2.46.93-5.19-3.78-3.65 5.2-.72z"}))}var qn=["slots"],Kn={App:at,DetailModal:xa,ReviewView:va,WordGrid:Ze,Settings:Ma,LookupText:be,Today:ka,Learn:Na,createLookupIndex:Va,candidateBases:Ka,detectTitlebar:et,compact:Me,Practice:Aa,GalaxyView:La,Palette:Ea,session:{buildSession:ga,answerSession:ha,advanceSession:Ve,gradeFor:fa,sessionStats:ba,todayPlan:Ke,distractors:ma}};function Vn(a){if(typeof document<"u"){let e=document.createElement("style");e.setAttribute("data-plugin",Gn),e.textContent=it,document.head.appendChild(e),a.effect(()=>()=>e.remove())}a.effect(()=>a.slots.inject("main",()=>a.slots.register({name:"main",key:ur},at))),a.effect(()=>a.slots.inject("sidebar.panellist",()=>a.slots.register({name:"sidebar.panellist",id:ur,order:22,label:()=>"\u8BCD\u5149 \xB7 Word Atlas"},Hn)))}

    })(module, exports, require);
    return module.exports;
  },
});
