/* 词光 · Word Atlas — generated client bundle (build from src/client). */
window.__ModuleLoader__.load({
  id: "word-atlas-dsh",
  factory: (require) => {
    const module = { exports: {} };
    const exports = module.exports;
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    (function (module, exports, require) {
var Dt=Object.create;var De=Object.defineProperty;var It=Object.getOwnPropertyDescriptor;var jt=Object.getOwnPropertyNames;var Tt=Object.getPrototypeOf,Ot=Object.prototype.hasOwnProperty;var Bt=(a,e)=>{for(var t in e)De(a,t,{get:e[t],enumerable:!0})},Ca=(a,e,t,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of jt(e))!Ot.call(a,n)&&n!==t&&De(a,n,{get:()=>e[n],enumerable:!(r=It(e,n))||r.enumerable});return a};var R=(a,e,t)=>(t=a!=null?Dt(Tt(a)):{},Ca(e||!a||!a.__esModule?De(t,"default",{value:a,enumerable:!0}):t,a)),Ft=a=>Ca(De({},"__esModule",{value:!0}),a);var Xr={};Bt(Xr,{__test:()=>Vr,apply:()=>Jr,inject:()=>Yr});module.exports=Ft(Xr);var $a=R(require("react"),1);var Da=`/* \u8BCD\u5149 \xB7 Word Atlas \u2014 plugin page styles.
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
  max-width: 860px;
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
  height: 5px;
  border-radius: var(--wa-round);
  background: var(--wa-surface-2);
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
  padding: 20px 4px 8px;
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

.wa-learn-intro,
.wa-quiz {
  max-width: 720px;
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

.wa-quiz-picture,
.wa-quiz-spell {
  display: grid;
  grid-template-columns: minmax(0, 220px) minmax(0, 1fr);
  gap: 16px;
  align-items: center;
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
  margin: 18px 0 0;
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
  border-color: color-mix(in srgb, var(--dsw-alias-state-success-primary) 55%, transparent);
  background: color-mix(in srgb, var(--dsw-alias-state-success-primary) 10%, transparent);
}

.wa-option.is-chosen {
  border-color: color-mix(in srgb, var(--dsw-alias-state-error-primary) 55%, transparent);
  background: color-mix(in srgb, var(--dsw-alias-state-error-primary) 9%, transparent);
}

.wa-option.is-dim {
  opacity: 0.55;
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
  margin-top: 16px;
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
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
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
  background: var(--wa-surface-2);
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

  .wa-quiz-picture,
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
`;var k=R(require("react"),1);var Ne="/word-atlas/atlas",F={img:1,uk:2,us:4,ex:8,ex2:16};async function Ia(a){let e=await fetch(a,{cache:"no-store"});if(!e.ok)throw new Error(`\u8BCD\u5E93\u52A0\u8F7D\u5931\u8D25\uFF08HTTP ${e.status}\uFF09`);return e.json()}function Wt(a){let e=(a.topics||[]).map(([n,s])=>({slug:n,zh:s})),t=a.cefr||["A1","A2","B1","B2","C1","C2"],r=(a.words||[]).map((n,s)=>{let[i,o,d,u,c,m,b]=n;return{id:i,word:o,zh:d,ipa:u,cefr:t[c]||"",topic:e[m]?.slug||"",topicZh:e[m]?.zh||"",media:b,order:s}});return{id:a.id,name:a.name,count:a.count??r.length,examples:a.examples??0,chunk:a.chunk??100,topics:e,cefr:t,words:r,byId:new Map(r.map(n=>[n.id,n]))}}var Ie=null;function ja(){return Ie||(Ie=Ia(`${Ne}/index.json`).then(Wt).catch(a=>{throw Ie=null,a})),Ie}var la=new Map,je=new Map;function ne(a,e){let t=la.get(e);if(t)return Promise.resolve(t);let r=a.byId.get(e);if(!r)return Promise.reject(new Error(`\u627E\u4E0D\u5230\u8BCD\u6761 ${e}`));let n=Math.floor(r.order/a.chunk),s=je.get(n);return s||(s=Ia(`${Ne}/entries/${n}.json`).then(i=>{for(let o of i)la.set(o.id,o);je.delete(n)}).catch(i=>{throw je.delete(n),i}),je.set(n,s)),s.then(()=>{let i=la.get(e);if(!i)throw new Error(`\u627E\u4E0D\u5230\u8BCD\u6761 ${e}`);return i})}var Ta=a=>`${Ne}/thumb/${a}.webp`,Oa=a=>`${Ne}/img/${a}.webp`,P=(a,e)=>`${Ne}/audio/${a}/${e}.mp3`;function Ut(a){return a&&(typeof a.media=="number"?a.media:a.m)||0}function W(a,e){return(Ut(a)&e)!==0}var Ha=require("react"),Wa="/word-atlas/api/progress",Ua="word-atlas-dsh:progress:v1",ca={accent:"uk",dailyNew:10,retention:.9,startLevel:0,spell:!0,autoplay:!0};function Pa(){return{v:1,cards:{},bookmarks:[],days:{},mistakes:[],typing:[],session:null,settings:{...ca}}}function Pt(a){return!a||typeof a!="object"||Array.isArray(a)||typeof a.id!="string"||!Array.isArray(a.steps)||!Array.isArray(a.newIds)||!Array.isArray(a.reviewIds)||!Number.isFinite(a.index)||a.index<0||!a.graded||typeof a.graded!="object"||Array.isArray(a.graded)?null:a}function Ga(a){return!a||typeof a!="object"||Array.isArray(a)||a.v!==1?null:{v:1,cards:a.cards&&typeof a.cards=="object"&&!Array.isArray(a.cards)?a.cards:{},bookmarks:Array.isArray(a.bookmarks)?a.bookmarks.filter(e=>typeof e=="string"):[],days:a.days&&typeof a.days=="object"&&!Array.isArray(a.days)?a.days:{},mistakes:Array.isArray(a.mistakes)?a.mistakes.filter(e=>typeof e=="string").slice(0,300):[],typing:Array.isArray(a.typing)?a.typing.slice(-500):[],session:Pt(a.session),settings:{...ca,...a.settings&&typeof a.settings=="object"?a.settings:{}},...typeof a.savedAt=="number"?{savedAt:a.savedAt}:{}}}function Gt(){try{let a=localStorage.getItem(Ua);return a?Ga(JSON.parse(a)):null}catch{return null}}function Te(){try{localStorage.setItem(Ua,JSON.stringify(G))}catch{}}var G=Gt()||Pa(),da=new Set,pa=null,Ba=!1;function Oe(){for(let a of da)a()}function qa(){clearTimeout(pa),pa=setTimeout(Be,800)}function Fa(){return G}function qt(a){return da.add(a),()=>da.delete(a)}function Ka(){return(0,Ha.useSyncExternalStore)(qt,Fa,Fa)}function q(a){let e=a(G);!e||e===G||(G={...e,v:1,savedAt:Date.now()},Te(),Oe(),qa())}function Be(){if(clearTimeout(pa),!G.savedAt)return;let a=JSON.stringify(G);fetch(Wa,{method:"POST",headers:{"Content-Type":"application/json"},body:a}).catch(()=>{})}async function Za(){if(!Ba){Ba=!0;try{let a=await fetch(Wa,{cache:"no-store"});if(!a.ok)return;let e=Ga(await a.json());if(!e)return;let t=e.savedAt||0,r=G.savedAt||0;t>r?(G=e,Te(),Oe()):r>t&&qa()}catch{}}}function pe(a=new Date){return`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,"0")}-${String(a.getDate()).padStart(2,"0")}`}function Fe(a,{newWords:e=0,reviewed:t=0,correct:r=0}={}){let n=pe(),s=a[n]||{n:0,r:0,c:0};return{...a,[n]:{n:s.n+e,r:s.r+t,c:s.c+r}}}function ce(a,e=new Date){let t=0,r=new Date(e);for(;;){let n=a[pe(r)];if(!n||(n.n||0)+(n.r||0)===0){if(t===0&&pe(r)===pe(e)){r.setDate(r.getDate()-1);continue}break}t+=1,r.setDate(r.getDate()-1)}return t}function Ya(a,e){let t=a.bookmarks.includes(e);return{...a,bookmarks:t?a.bookmarks.filter(r=>r!==e):[e,...a.bookmarks]}}var Va="word-atlas-open";function oe(a){return!!a&&typeof a=="object"&&!Array.isArray(a)}function ee(a,e=0,t=1/0){return typeof a=="number"&&Number.isFinite(a)&&a>=e&&a<=t}function Kt(a){return oe(a)&&ee(a.due)&&ee(a.s)&&ee(a.d,0,11)&&ee(a.el)&&ee(a.sd)&&ee(a.ls)&&ee(a.reps)&&ee(a.lapses)&&[0,1,2,3].includes(a.st)&&(a.last===void 0||ee(a.last))&&ee(a.seen)}function Ja(){return Be(),JSON.stringify({app:"word-atlas",version:2,exported:new Date().toISOString(),progress:{version:2,datasetId:Va,cards:G.cards,bookmarks:G.bookmarks,days:G.days,typing:G.typing,session:null,mistakes:G.mistakes},settings:G.settings},null,1)}function Xa(a){let e;try{e=JSON.parse(a)}catch{return{ok:!1,error:"\u6587\u4EF6\u4E0D\u662F\u6709\u6548\u7684 JSON\u3002"}}if(!oe(e)||e.app!=="word-atlas"||e.version!==2||!oe(e.progress))return{ok:!1,error:"\u8FD9\u4E0D\u662F\u8BCD\u5149\u7684\u5B66\u4E60\u5907\u4EFD\u3002"};let t=e.progress;if(typeof t.datasetId=="string"&&t.datasetId!==Va)return{ok:!1,error:"\u5907\u4EFD\u6765\u81EA\u53E6\u4E00\u4E2A\u8BCD\u5E93\uFF0C\u8BF7\u4F7F\u7528\u8BCD\u5149\u5F00\u653E\u8BCD\u5E93\u7684\u5907\u4EFD\u3002"};let r={};if(oe(t.cards))for(let[u,c]of Object.entries(t.cards))Kt(c)&&(r[u]=c);let n=Array.isArray(t.bookmarks)?t.bookmarks.filter(u=>typeof u=="string").slice(0,2e4):[],s={};if(oe(t.days))for(let[u,c]of Object.entries(t.days)){if(!/^\d{4}-\d{2}-\d{2}$/.test(u)||!oe(c))continue;let m=Number(c.n)||0,b=Number(c.r)||0,f=Number(c.c)||0;s[u]={n:m,r:b,c:f}}let i=Array.isArray(t.mistakes)?t.mistakes.filter(u=>typeof u=="string").slice(0,300):[],o=Array.isArray(t.typing)?t.typing.slice(-500):[],d={...ca,...oe(e.settings)?e.settings:{}};return G={v:1,cards:r,bookmarks:n,days:s,mistakes:i,typing:o,settings:d,savedAt:Date.now()},Te(),Oe(),Be(),{ok:!0,cards:Object.keys(r).length}}function Qa(){G={...Pa(),savedAt:Date.now()},Te(),Oe(),Be()}var ma=class a extends Error{constructor(e="FSRS Error"){super(e),this.name="FSRSError",Error.captureStackTrace?.(this,a)}},H=class a extends ma{constructor(e){super(e),this.name="FSRSValidationError",Error.captureStackTrace?.(this,a)}},D=(a=>(a[a.New=0]="New",a[a.Learning=1]="Learning",a[a.Review=2]="Review",a[a.Relearning=3]="Relearning",a))(D||{}),v=(a=>(a[a.Manual=0]="Manual",a[a.Again=1]="Again",a[a.Hard=2]="Hard",a[a.Good=3]="Good",a[a.Easy=4]="Easy",a))(v||{}),T=class a{static card(e){return{...e,state:a.state(e.state),due:a.time(e.due),last_review:e.last_review?a.time(e.last_review):void 0}}static rating(e){if(typeof e=="string"){let t=e.charAt(0).toUpperCase(),r=e.slice(1).toLowerCase(),n=v[`${t}${r}`];if(n===void 0)throw new H(`Invalid rating:[${e}]`);return n}else if(typeof e=="number")return e;throw new H(`Invalid rating:[${e}]`)}static state(e){if(typeof e=="string"){let t=e.charAt(0).toUpperCase(),r=e.slice(1).toLowerCase(),n=D[`${t}${r}`];if(n===void 0)throw new H(`Invalid state:[${e}]`);return n}else if(typeof e=="number")return e;throw new H(`Invalid state:[${e}]`)}static time(e){if(e instanceof Date)return e;let t=new Date(e);if(typeof e=="object"&&e!==null&&!Number.isNaN(Date.parse(e)||+t))return t;if(typeof e=="string"){let r=Date.parse(e);if(Number.isNaN(r))throw new H(`Invalid date:[${e}]`);return new Date(r)}else if(typeof e=="number")return new Date(e);throw new H(`Invalid date:[${e}]`)}static review_log(e){return{...e,due:a.time(e.due),rating:a.rating(e.rating),state:a.state(e.state),review:a.time(e.review)}}};Date.prototype.scheduler=function(a,e){return X(this,a,e)};Date.prototype.diff=function(a,e){return ue(this,a,e)};Date.prototype.format=function(){return Zt(this)};Date.prototype.dueFormat=function(a,e,t){return Yt(this,a,e,t)};function X(a,e,t){return new Date(t?T.time(a).getTime()+e*24*60*60*1e3:T.time(a).getTime()+e*60*1e3)}function ue(a,e,t){if(!a||!e)throw new H("Invalid date");let r=T.time(a).getTime()-T.time(e).getTime(),n=0;switch(t){case"days":n=Math.floor(r/(1440*60*1e3));break;case"minutes":n=Math.floor(r/(60*1e3));break}return n}function Zt(a){let e=T.time(a),t=e.getFullYear(),r=e.getMonth()+1,n=e.getDate(),s=e.getHours(),i=e.getMinutes(),o=e.getSeconds();return`${t}-${_e(r)}-${_e(n)} ${_e(s)}:${_e(i)}:${_e(o)}`}function _e(a){return a<10?`0${a}`:`${a}`}var ua=[60,60,24,31,12],wa=["second","min","hour","day","month","year"];function Yt(a,e,t,r=wa){a=T.time(a),e=T.time(e),r.length!==wa.length&&(r=wa);let n=a.getTime()-e.getTime(),s=0;for(n/=1e3,s=0;s<ua.length&&!(n<ua[s]);s++)n/=ua[s];return`${Math.floor(n)}${t?r[s]:""}`}var Vt=Object.freeze([v.Again,v.Hard,v.Good,v.Easy]),Jt=[{start:2.5,end:7,factor:.15},{start:7,end:20,factor:.1},{start:20,end:1/0,factor:.05}];function Xt(a,e,t){let r=1;for(let i of Jt)r+=i.factor*Math.max(Math.min(a,i.end)-i.start,0);a=Math.min(a,t);let n=Math.max(2,Math.round(a-r)),s=Math.min(Math.round(a+r),t);return a>e&&(n=Math.max(n,e+1)),n=Math.min(n,s),{min_ivl:n,max_ivl:s}}function Q(a,e,t){return Math.min(Math.max(a,e),t)}function J(a,e){let t=10**e;return Math.round(a*t)/t}function Qt(a,e){let t=Date.UTC(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate()),r=Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate());return Math.floor((r-t)/864e5)}var Rt=a=>{let e=a.slice(-1),t=parseInt(a.slice(0,-1),10);if(Number.isNaN(t)||!Number.isFinite(t)||t<0)throw new H(`Invalid step value: ${a}`);switch(e){case"m":return t;case"h":return t*60;case"d":return t*1440;default:throw new H(`Invalid step unit: ${a}, expected m/h/d`)}},er=(a,e,t)=>{let r=e===D.Relearning||e===D.Review?a.relearning_steps:a.learning_steps,n=r.length;if(n===0||t>=n)return{};let s=r[0],i=Rt,o=()=>i(s),d=()=>{if(n===1)return Math.round(i(s)*1.5);let f=r[1];return Math.round((i(s)+i(f))/2)},u=f=>f<0||f>=n?null:r[f],c=f=>i(f),m={},b=u(Math.max(0,t));if(e===D.Review)return m[v.Again]={scheduled_minutes:i(b),next_step:0},m;{m[v.Again]={scheduled_minutes:o(),next_step:0},m[v.Hard]={scheduled_minutes:d(),next_step:t};let f=u(t+1);if(f){let _=c(f);_&&(m[v.Good]={scheduled_minutes:Math.round(_),next_step:t+1})}}return m};function ar(){let a=this.review_time.getTime(),e=this.current.reps,t=this.current.difficulty*this.current.stability;return`${a}_${e}_${t}`}var Ge=(a=>(a.SCHEDULER="Scheduler",a.LEARNING_STEPS="LearningSteps",a.SEED="Seed",a))(Ge||{}),We=class{last;current;review_time;next=new Map;algorithm;strategies;elapsed_days=0;constructor(e,t,r,n){this.algorithm=r,this.last=T.card(e),this.current=T.card(e),this.review_time=T.time(t),this.strategies=n,this.init()}checkGrade(e){if(!Number.isFinite(e)||e<1||e>4)throw new H(`Invalid grade "${e}",expected 1-4`)}init(){let{state:e,last_review:t}=this.current,r=0;e!==D.New&&t&&(r=Qt(t,this.review_time)),this.current.last_review=this.review_time,this.elapsed_days=r,this.current.elapsed_days=r,this.current.reps+=1;let n=ar;if(this.strategies){let s=this.strategies.get(Ge.SEED);s&&(n=s)}this.algorithm.seed=n.call(this)}preview(){return{[v.Again]:this.review(v.Again),[v.Hard]:this.review(v.Hard),[v.Good]:this.review(v.Good),[v.Easy]:this.review(v.Easy),[Symbol.iterator]:this.previewIterator.bind(this)}}*previewIterator(){for(let e of Vt)yield this.review(e)}review(e){let{state:t}=this.last,r;switch(this.checkGrade(e),t){case D.New:r=this.newState(e);break;case D.Learning:case D.Relearning:r=this.learningState(e);break;case D.Review:r=this.reviewState(e);break}return r}buildLog(e){let{last_review:t,due:r,elapsed_days:n}=this.last;return{rating:e,state:this.current.state,due:t||r,stability:this.current.stability,difficulty:this.current.difficulty,elapsed_days:this.elapsed_days,last_elapsed_days:n,scheduled_days:this.current.scheduled_days,learning_steps:this.current.learning_steps,review:this.review_time}}},ga=class{c;s0;s1;s2;constructor(e){let t=tr();this.c=1,this.s0=t(" "),this.s1=t(" "),this.s2=t(" "),e==null&&(e=Date.now()),this.s0-=t(e),this.s0<0&&(this.s0+=1),this.s1-=t(e),this.s1<0&&(this.s1+=1),this.s2-=t(e),this.s2<0&&(this.s2+=1)}next(){let e=2091639*this.s0+this.c*23283064365386963e-26;return this.s0=this.s1,this.s1=this.s2,this.c=e|0,this.s2=e-this.c,this.s2}set state(e){this.c=e.c,this.s0=e.s0,this.s1=e.s1,this.s2=e.s2}get state(){return{c:this.c,s0:this.s0,s1:this.s1,s2:this.s2}}};function tr(){let a=4022871197;return function(t){t=String(t);for(let r=0;r<t.length;r++){a+=t.charCodeAt(r);let n=.02519603282416938*a;a=n>>>0,n-=a,n*=a,a=n>>>0,n-=a,a+=n*4294967296}return(a>>>0)*23283064365386963e-26}}function rr(a){let e=new ga(a),t=()=>e.next();return t.int32=()=>e.next()*4294967296|0,t.double=()=>t()+(t()*2097152|0)*11102230246251565e-32,t.state=()=>e.state,t.importState=r=>(e.state=r,t),t}var nr="5.4.2",sr=.9,ir=36500,or=!1,qe=!0,lr=Object.freeze(["1m","10m"]),dr=Object.freeze(["10m"]),tn=`v${nr} using FSRS-6.0`,ae=.001;var He=100,Ra=.5,pr=.1542,et=Object.freeze([.212,1.2931,2.3065,8.2956,6.4133,.8334,3.0194,.001,1.8722,.1666,.796,1.4835,.0614,.2629,1.6483,.6014,1.8729,.5425,.0912,.0658,pr]),at=2,cr=(a,e=qe)=>[[ae,He],[ae,He],[ae,He],[ae,He],[1,10],[.001,4],[.001,4],[.001,.75],[0,4.5],[0,.8],[.001,3.5],[.001,5],[.001,.25],[.001,.9],[0,4],[0,1],[1,6],[0,a],[0,a],[e?.01:0,.8],[.1,.8]],we=(a,e,t=qe)=>{let r=cr(at,t).slice(0,a.length);if(Math.max(0,e)>1){let n=Q(a[11]||0,r[11][0],r[11][1]),s=Q(a[13]||0,r[13][0],r[13][1]),i=Q(a[14]||0,r[14][0],r[14][1]),o=-(Math.log(n)+Math.log(Math.pow(2,s)-1)+i*.3)/e,d=Q(J(Math.sqrt(Math.max(o,0)),8),.01,at);r[17]&&(r[17]=[r[17][0],d]),r[18]&&(r[18]=[r[18][0],d])}return r.map(([n,s],i)=>Q(a[i]||0,n,s))};var ya=(a,e=0,t=qe)=>{if(a===void 0)return[...et];switch(a.length){case 21:return we(Array.from(a),e,t);case 19:return console.debug("[FSRS-6]auto fill w from 19 to 21 length"),we(Array.from(a),e,t).concat([0,Ra]);case 17:{let r=we(Array.from(a),e,t);return r[4]=+(r[5]*2+r[4]).toFixed(8),r[5]=+(Math.log(r[5]*3+1)/3).toFixed(8),r[6]=+(r[6]+.5).toFixed(8),console.debug("[FSRS-6]auto fill w from 17 to 21 length"),r.concat([0,0,0,Ra])}default:return console.warn("[FSRS]Invalid parameters length, using default parameters"),[...et]}},ur=a=>{let e=Array.isArray(a?.learning_steps)?a.learning_steps:lr,t=Array.isArray(a?.relearning_steps)?a.relearning_steps:dr,r=a?.enable_short_term??qe,n=ya(a?.w,t.length,r);return{request_retention:a?.request_retention||sr,maximum_interval:a?.maximum_interval||ir,w:n,enable_fuzz:a?.enable_fuzz??or,enable_short_term:r,learning_steps:e,relearning_steps:t}};function me(a,e){let t={due:a?T.time(a):new Date,stability:0,difficulty:0,elapsed_days:0,scheduled_days:0,reps:0,lapses:0,learning_steps:0,state:D.New,last_review:void 0};return e&&typeof e=="function"?e(t):t}var tt=a=>{let e=typeof a=="number"?-a:-a[20],t=Math.exp(Math.pow(e,-1)*Math.log(.9))-1;return{decay:e,factor:J(t,8)}};function fa(a,e,t){let{decay:r,factor:n}=tt(a);return J(Math.pow(1+n*e/t,r),8)}var ha=class{param;intervalModifier;_seed;constructor(e){this.param=new Proxy(this.prepare_parameters(e),this.params_handler_proxy()),this.intervalModifier=this.calculate_interval_modifier(this.param.request_retention),this.forgetting_curve=fa.bind(this,this.param.w)}get interval_modifier(){return this.intervalModifier}set seed(e){this._seed=e}calculate_interval_modifier(e){if(e<=0||e>1)throw new H("Requested retention rate should be in the range (0,1]");let{decay:t,factor:r}=tt(this.param.w);return J((Math.pow(e,1/t)-1)/r,8)}get parameters(){return this.param}set parameters(e){this.update_parameters(e)}params_handler_proxy(){let e=this;return{set:function(t,r,n){return r==="request_retention"&&Number.isFinite(n)?e.intervalModifier=e.calculate_interval_modifier(Number(n)):r==="w"&&(n=ya(n,t.relearning_steps.length,t.enable_short_term),n=we(Array.from(n),t.relearning_steps.length,t.enable_short_term),e.forgetting_curve=fa.bind(this,n),e.intervalModifier=e.calculate_interval_modifier(Number(t.request_retention))),Reflect.set(t,r,n),!0}}}update_parameters(e){let t=this.prepare_parameters(e);for(let r in t){let n=r;this.param[n]=t[n]}}prepare_parameters=e=>{let t=ur(e);return t.w=we(Array.from(t.w),t.relearning_steps.length,t.enable_short_term),t};init_stability(e){return Math.max(this.param.w[e-1],.1)}init_difficulty(e){let t=this.param.w,r=t[4]-Math.exp((e-1)*t[5])+1;return J(r,8)}apply_fuzz(e,t){if(!this.param.enable_fuzz||e<2.5)return Math.round(e);let n=rr(this._seed)(),{min_ivl:s,max_ivl:i}=Xt(e,t,this.param.maximum_interval);return Math.floor(n*(i-s+1)+s)}next_interval(e,t){let r=Math.min(Math.max(1,Math.round(e*this.intervalModifier)),this.param.maximum_interval);return this.apply_fuzz(r,t)}linear_damping(e,t){return J(e*(10-t)/9,8)}next_difficulty(e,t){let r=-this.param.w[6]*(t-3),n=e+this.linear_damping(r,e);return Q(this.mean_reversion(this.init_difficulty(v.Easy),n),1,10)}mean_reversion(e,t){let r=this.param.w;return J(r[7]*e+(1-r[7])*t,8)}next_recall_stability(e,t,r,n){let s=this.param.w,i=v.Hard===n?s[15]:1,o=v.Easy===n?s[16]:1;return J(Q(t*(1+Math.exp(s[8])*(11-e)*Math.pow(t,-s[9])*(Math.exp((1-r)*s[10])-1)*i*o),ae,36500),8)}next_forget_stability(e,t,r){let n=this.param.w;return J(Q(n[11]*Math.pow(e,-n[12])*(Math.pow(t+1,n[13])-1)*Math.exp((1-r)*n[14]),ae,36500),8)}next_short_term_stability(e,t){let r=this.param.w,n=Math.pow(e,-r[19])*Math.exp(r[17]*(t-3+r[18])),s=t>=v.Hard?Math.max(n,1):n;return J(Q(e*s,ae,36500),8)}forgetting_curve;next_state(e,t,r,n){let{difficulty:s,stability:i}=e??{difficulty:0,stability:0};if(t<0)throw new H(`Invalid delta_t "${t}"`);if(r<0||r>4)throw new H(`Invalid grade "${r}"`);if(s===0&&i===0)return{difficulty:Q(this.init_difficulty(r),1,10),stability:this.init_stability(r)};if(r===0)return{difficulty:s,stability:i};if(s<1||i<ae)throw new H(`Invalid memory state { difficulty: ${s}, stability: ${i} }`);let o=this.param.w;n=typeof n=="number"?n:this.forgetting_curve(t,i);let d;if(t===0&&this.param.enable_short_term)d=this.next_short_term_stability(i,r);else if(r===1){let c=this.next_forget_stability(s,i,n),[m,b]=[0,0];this.param.enable_short_term&&(m=o[17],b=o[18]);let f=i/Math.exp(m*b);d=Q(J(f,8),ae,c)}else d=this.next_recall_stability(s,i,n,r);return{difficulty:this.next_difficulty(s,r),stability:d}}},Ue=class extends We{learningStepsStrategy;constructor(e,t,r,n){super(e,t,r,n);let s=er;if(this.strategies){let i=this.strategies.get(Ge.LEARNING_STEPS);i&&(s=i)}this.learningStepsStrategy=s}getLearningInfo(e,t){let r=this.algorithm.parameters;e.learning_steps=e.learning_steps||0;let n=this.learningStepsStrategy(r,e.state,e.learning_steps),s=Math.max(0,n[t]?.scheduled_minutes??0),i=Math.max(0,n[t]?.next_step??0);return{scheduled_minutes:s,next_steps:i}}applyLearningSteps(e,t,r){let{scheduled_minutes:n,next_steps:s}=this.getLearningInfo(this.current,t);if(n>0&&n<1440)e.learning_steps=s,e.scheduled_days=0,e.state=r,e.due=X(this.review_time,Math.round(n),!1);else if(e.state=D.Review,n>=1440)e.learning_steps=s,e.due=X(this.review_time,Math.round(n),!1),e.scheduled_days=Math.floor(n/1440);else{e.learning_steps=0;let i=this.algorithm.next_interval(e.stability,this.elapsed_days);e.scheduled_days=i,e.due=X(this.review_time,i,!0)}}newState(e){let t=this.next.get(e);if(t)return t;let r=this.next_ds(this.elapsed_days,e);this.applyLearningSteps(r,e,D.Learning);let n={card:r,log:this.buildLog(e)};return this.next.set(e,n),n}learningState(e){let t=this.next.get(e);if(t)return t;let r=this.next_ds(this.elapsed_days,e);this.applyLearningSteps(r,e,this.last.state);let n={card:r,log:this.buildLog(e)};return this.next.set(e,n),n}reviewState(e){let t=this.next.get(e);if(t)return t;let r=this.elapsed_days,n=this.algorithm.forgetting_curve(r,this.current.stability),s=this.next_ds(r,v.Again,n),i=this.next_ds(r,v.Hard,n),o=this.next_ds(r,v.Good,n),d=this.next_ds(r,v.Easy,n);this.next_interval(i,o,d,r),this.next_state(i,o,d),this.applyLearningSteps(s,v.Again,D.Relearning),s.lapses+=1;let u={card:s,log:this.buildLog(v.Again)},c={card:i,log:super.buildLog(v.Hard)},m={card:o,log:super.buildLog(v.Good)},b={card:d,log:super.buildLog(v.Easy)};return this.next.set(v.Again,u),this.next.set(v.Hard,c),this.next.set(v.Good,m),this.next.set(v.Easy,b),this.next.get(e)}next_ds(e,t,r){let n=this.algorithm.next_state({difficulty:this.current.difficulty,stability:this.current.stability},e,t,r),s=T.card(this.current);return s.difficulty=n.difficulty,s.stability=n.stability,s}next_interval(e,t,r,n){let s,i;s=this.algorithm.next_interval(e.stability,n),i=this.algorithm.next_interval(t.stability,n),s=Math.min(s,i),i=Math.max(i,s+1);let o=Math.max(this.algorithm.next_interval(r.stability,n),i+1);e.scheduled_days=s,e.due=X(this.review_time,s,!0),t.scheduled_days=i,t.due=X(this.review_time,i,!0),r.scheduled_days=o,r.due=X(this.review_time,o,!0)}next_state(e,t,r){e.state=D.Review,e.learning_steps=0,t.state=D.Review,t.learning_steps=0,r.state=D.Review,r.learning_steps=0}},Pe=class extends We{newState(e){let t=this.next.get(e);if(t)return t;this.current.scheduled_days=0,this.current.elapsed_days=0;let r=0,n=this.next_ds(r,v.Again),s=this.next_ds(r,v.Hard),i=this.next_ds(r,v.Good),o=this.next_ds(r,v.Easy);return this.next_interval(n,s,i,o,r),this.next_state(n,s,i,o),this.update_next(n,s,i,o),this.next.get(e)}next_ds(e,t,r){let n=this.algorithm.next_state({difficulty:this.current.difficulty,stability:this.current.stability},e,t,r),s=T.card(this.current);return s.difficulty=n.difficulty,s.stability=n.stability,s}learningState(e){return this.reviewState(e)}reviewState(e){let t=this.next.get(e);if(t)return t;let r=this.elapsed_days,n=this.algorithm.forgetting_curve(r,this.current.stability),s=this.next_ds(r,v.Again,n),i=this.next_ds(r,v.Hard,n),o=this.next_ds(r,v.Good,n),d=this.next_ds(r,v.Easy,n);return this.next_interval(s,i,o,d,r),this.next_state(s,i,o,d),s.lapses+=1,this.update_next(s,i,o,d),this.next.get(e)}next_interval(e,t,r,n,s){let i,o,d,u;i=this.algorithm.next_interval(e.stability,s),o=this.algorithm.next_interval(t.stability,s),d=this.algorithm.next_interval(r.stability,s),u=this.algorithm.next_interval(n.stability,s),i=Math.min(i,o),o=Math.max(o,i+1),d=Math.max(d,o+1),u=Math.max(u,d+1),e.scheduled_days=i,e.due=X(this.review_time,i,!0),t.scheduled_days=o,t.due=X(this.review_time,o,!0),r.scheduled_days=d,r.due=X(this.review_time,d,!0),n.scheduled_days=u,n.due=X(this.review_time,u,!0)}next_state(e,t,r,n){e.state=D.Review,e.learning_steps=0,t.state=D.Review,t.learning_steps=0,r.state=D.Review,r.learning_steps=0,n.state=D.Review,n.learning_steps=0}update_next(e,t,r,n){let s={card:e,log:this.buildLog(v.Again)},i={card:t,log:super.buildLog(v.Hard)},o={card:r,log:super.buildLog(v.Good)},d={card:n,log:super.buildLog(v.Easy)};this.next.set(v.Again,s),this.next.set(v.Hard,i),this.next.set(v.Good,o),this.next.set(v.Easy,d)}},ba=class{fsrs;constructor(e){this.fsrs=e}replay(e,t,r){return this.fsrs.next(e,t,r)}handleManualRating(e,t,r,n,s,i,o){if(typeof t>"u")throw new H("reschedule: state is required for manual rating");let d,u;if(t===D.New)d={rating:v.Manual,state:t,due:o??r,stability:e.stability,difficulty:e.difficulty,elapsed_days:n,last_elapsed_days:e.elapsed_days,scheduled_days:e.scheduled_days,learning_steps:e.learning_steps,review:r},u=me(r),u.last_review=r;else{if(typeof o>"u")throw new H("reschedule: due is required for manual rating");let c=ue(o,r,"days");d={rating:v.Manual,state:e.state,due:e.last_review||e.due,stability:e.stability,difficulty:e.difficulty,elapsed_days:n,last_elapsed_days:e.elapsed_days,scheduled_days:e.scheduled_days,learning_steps:e.learning_steps,review:r},u={...e,state:t,due:o,last_review:r,stability:s||e.stability,difficulty:i||e.difficulty,elapsed_days:n,scheduled_days:c,reps:e.reps+1}}return{card:u,log:d}}reschedule(e,t){let r=[],n=me(e.due);for(let s of t){let i;if(s.review=T.time(s.review),s.rating===v.Manual){let o=0;n.state!==D.New&&n.last_review&&(o=ue(s.review,n.last_review,"days")),i=this.handleManualRating(n,s.state,s.review,o,s.stability,s.difficulty,s.due?T.time(s.due):void 0)}else i=this.replay(n,s.review,s.rating);r.push(i),n=i.card}return r}calculateManualRecord(e,t,r,n){if(!r)return null;let{card:s,log:i}=r,o=T.card(e);return o.due.getTime()===s.due.getTime()?null:(o.scheduled_days=ue(s.due,o.due,"days"),this.handleManualRating(o,s.state,T.time(t),i.elapsed_days,n?s.stability:void 0,n?s.difficulty:void 0,s.due))}};function ze(a,e){return typeof e=="function"?e(a):a}var xa=class extends ha{strategyHandler=new Map;Scheduler;constructor(e){super(e);let{enable_short_term:t}=this.parameters;this.Scheduler=t?Ue:Pe}params_handler_proxy(){let e=this;return{set:function(t,r,n){return r==="request_retention"&&Number.isFinite(n)?e.intervalModifier=e.calculate_interval_modifier(Number(n)):r==="enable_short_term"?e.Scheduler=n===!0?Ue:Pe:r==="w"&&(n=ya(n,t.relearning_steps.length,t.enable_short_term),n=we(Array.from(n),t.relearning_steps.length,t.enable_short_term),e.forgetting_curve=fa.bind(this,n),e.intervalModifier=e.calculate_interval_modifier(Number(t.request_retention))),Reflect.set(t,r,n),!0}}}useStrategy(e,t){return this.strategyHandler.set(e,t),this}clearStrategy(e){return e?this.strategyHandler.delete(e):this.strategyHandler.clear(),this}getScheduler(e,t){let n=this.strategyHandler.get(Ge.SCHEDULER)||this.Scheduler;return new n(e,t,this,this.strategyHandler)}repeat(e,t,r){let s=this.getScheduler(e,t).preview();return ze(s,r)}next(e,t,r,n){let s=this.getScheduler(e,t),i=T.rating(r);if(i===v.Manual)throw new H("Cannot review a manual rating");let o=s.review(i);return ze(o,n)}get_retrievability(e,t,r=!0){let n=T.card(e);t=t?T.time(t):new Date;let s=n.state!==D.New?Math.max(ue(t,n.last_review,"days"),0):0,i=n.state!==D.New?this.forgetting_curve(s,+n.stability.toFixed(8)):0;return r?`${(i*100).toFixed(2)}%`:i}rollback(e,t,r){let n=T.card(e),s=T.review_log(t);if(s.rating===v.Manual)throw new H("Cannot rollback a manual rating");let i,o,d;switch(s.state){case D.New:i=s.due,o=void 0,d=0;break;case D.Learning:case D.Relearning:case D.Review:i=s.review,o=s.due,d=n.lapses-(s.rating===v.Again&&s.state===D.Review?1:0);break}let u={...n,due:i,stability:s.stability,difficulty:s.difficulty,elapsed_days:s.last_elapsed_days,scheduled_days:s.scheduled_days,reps:Math.max(0,n.reps-1),lapses:Math.max(0,d),learning_steps:s.learning_steps,state:s.state,last_review:o};return ze(u,r)}forget(e,t,r=!1,n){let s=T.card(e);t=T.time(t);let i=s.state===D.New?0:ue(t,s.due,"days"),o={rating:v.Manual,state:s.state,due:s.due,stability:s.stability,difficulty:s.difficulty,elapsed_days:0,last_elapsed_days:s.elapsed_days,scheduled_days:i,learning_steps:s.learning_steps,review:t},u={card:{...s,due:t,stability:0,difficulty:0,elapsed_days:0,scheduled_days:0,reps:r?0:s.reps,lapses:r?0:s.lapses,learning_steps:0,state:D.New,last_review:s.last_review},log:o};return ze(u,n)}reschedule(e,t=[],r={}){let{recordLogHandler:n,reviewsOrderBy:s,skipManual:i=!0,now:o=new Date,update_memory_state:d=!1}=r;s&&typeof s=="function"&&t.sort(s),i&&(t=t.filter(_=>_.rating!==v.Manual));let u=new ba(this),c=u.reschedule(r.first_card||me(),t),m=c.length,b=T.card(e),f=u.calculateManualRecord(b,o,m?c[m-1]:void 0,d);return{collections:typeof n=="function"?c.map(n):c,reschedule_item:f?ze(f,n):null}}},rt=a=>new xa(a||{});var nt=new Map;function st(a){let e=Math.round(a*1e3)/1e3,t=nt.get(e);return t||(t=rt({request_retention:e,enable_fuzz:!0,enable_short_term:!0,learning_steps:["1m","10m"],relearning_steps:["10m"]}),nt.set(e,t)),t}function it(a){return{due:new Date(a.due),stability:a.s,difficulty:a.d,elapsed_days:a.el,scheduled_days:a.sd,learning_steps:a.ls,reps:a.reps,lapses:a.lapses,state:a.st,last_review:a.last?new Date(a.last):void 0}}function wr(a,e){return{due:a.due.getTime(),s:a.stability,d:a.difficulty,el:a.elapsed_days,sd:a.scheduled_days,ls:a.learning_steps,reps:a.reps,lapses:a.lapses,st:a.state,last:a.last_review?a.last_review.getTime():void 0,seen:e}}var va=[v.Again,v.Hard,v.Good,v.Easy],ot={[v.Again]:"\u91CD\u6765",[v.Hard]:"\u56F0\u96BE",[v.Good]:"\u826F\u597D",[v.Easy]:"\u7B80\u5355"};function ge(a,e,t=Date.now(),r=.9){let n=a?it(a):me(new Date(t)),s=st(r).next(n,new Date(t),e).card;return wr(s,a?.seen??t)}function lt(a,e=Date.now(),t=.9){let r=a?it(a):me(new Date(e)),n=st(t).repeat(r,new Date(e)),s={};for(let i of va)s[i]=n[i].card.due.getTime()-e;return s}var mr=21,fe=a=>!!(a&&a.st===D.Review&&a.s>=mr);var dt=(a,e=Date.now())=>!!(a&&a.due<=e);function Ke(a){if(!Number.isFinite(a))return"";let e=Math.round(a/6e4);if(e<1)return"<1\u5206";if(e<60)return`${e}\u5206`;let t=Math.round(e/60);if(t<24)return`${t}\u5C0F\u65F6`;let r=Math.round(t/24);if(r<31)return`${r}\u5929`;let n=Math.round(r/30);return n<12?`${n}\u4E2A\u6708`:`${(r/365).toFixed(1)}\u5E74`}var gr="arise arose arisen|awake awoke awoken|bear bore borne born|beat beat beaten|become became|begin began begun beginn|bend bent|bet bet|bind bound|bite bit bitten|bleed bled|blow blew blown|break broke broken|breed bred|bring brought|broadcast broadcast|build built|burn burnt burned|burst burst|buy bought|catch caught|choose chose chosen|cling clung|come came|cost cost|creep crept|cut cut cutt|deal dealt|dig dug|do did done does|draw drew drawn|dream dreamt dreamed|drink drank drunk|drive drove driven|eat ate eaten|fall fell fallen|feed fed|feel felt|fight fought|find found|flee fled|fling flung|fly flew flown flies|forbid forbade forbidden|forget forgot forgotten|forgive forgave forgiven|freeze froze frozen|get got gotten gett|give gave given|go went gone goes|grind ground|grow grew grown|hang hung|have had has|hear heard|hide hid hidden|hit hit hitt|hold held|hurt hurt|keep kept|kneel knelt|know knew known|lay laid|lead led|lean leant leaned|leap leapt leaped|learn learnt learned|leave left|lend lent|let let|lie lay lain|light lit|lose lost|make made|mean meant|meet met|pay paid|prove proved proven|put put putt|quit quit|read read|ride rode ridden|ring rang rung|rise rose risen|run ran runn|say said|see saw seen|seek sought|sell sold|send sent|set set|sew sewed sewn|shake shook shaken|shed shed|shine shone|shoot shot|show showed shown|shrink shrank shrunk|shut shut|sing sang sung|sink sank sunk|sit sat sitt|sleep slept|slide slid|sling slung|speak spoke spoken|speed sped|spend spent|spill spilt spilled|spin spun spinn|spy spied spies|mislead misled|spit spat|split split|spread spread|spring sprang sprung|stand stood|steal stole stolen|stick stuck|sting stung|stink stank stunk|stride strode|strike struck|string strung|strive strove striven|swear swore sworn|sweep swept|swell swelled swollen|swim swam swum swimm|swing swung|take took taken|teach taught|tear tore torn|tell told|think thought|throw threw thrown|tread trod trodden|understand understood|undertake undertook undertaken|upset upset|wake woke woken|wear wore worn|weave wove woven|weep wept|win won winn|wind wound|withdraw withdrew withdrawn|write wrote written|be was were been is are am|child children|man men|woman women|foot feet|tooth teeth|mouse mice|person people|good better best|bad worse worst|far further farther furthest",ct=new Map(gr.split("|").map(a=>a.split(" ")).map(([a,...e])=>[a,e])),he=new Map;for(let[a,e]of ct){for(let t of e)he.has(t)||he.set(t,a);he.has(a)||he.set(a,a)}function ut(a){return String(a||"").normalize("NFKC").replace(/[’‘]/g,"'").replace(/[‐‑–—]/g,"-").trim().toLowerCase().replace(/^[^a-z']+|[^a-z']+$/g,"")}function ka(a){let e=ut(a);if(!e)return[];let t=[],r=s=>{s&&s.length>0&&!t.includes(s)&&t.push(s)};e.endsWith("'s")&&r(e.slice(0,-2)),/(ies|ied)$/.test(e)&&r(e.slice(0,-3)+"y"),/ying$/.test(e)&&r(e.slice(0,-4)+"ie");for(let s of["ing","ed","est","er","es","s"]){if(!e.endsWith(s)||e.length<=s.length+1)continue;let i=e.slice(0,-s.length);/([bdgmnprt])\1$/.test(i)&&(r(i),r(i.slice(0,-1))),/i$/.test(i)&&(s==="er"||s==="est"||s==="ed")&&r(i.slice(0,-1)+"y"),(s==="ing"||s==="ed")&&!/ng$/.test(i)?(r(i+"e"),r(i)):(r(i),r(i+"e"))}let n=he.get(e);return n&&r(n),t}function Na(a){let e=new Map;for(let n of a)e.set(n.word.toLowerCase(),n.id);let t=new Map;function r(n){let s=ut(n);if(!s)return null;if(t.has(s))return t.get(s);let i=e.get(s);if(!i){let o=he.get(s);o&&(i=e.get(o))}if(!i){for(let o of ka(s))if(i=e.get(o),i)break}return t.set(s,i??null),i??null}return{resolve:r,exact:e}}var pt=new WeakMap;function wt(a){let e=pt.get(a);return e||(e=Na(a.words),pt.set(a,e)),e}var Ze=a=>String(a||"").normalize("NFKC").replace(/[’‘]/g,"'").replace(/[‐‑–—]/g,"-").replace(/\s+/g," ").trim().toLowerCase();function Me(a){let e=2166136261;for(let t=0;t<a.length;t+=1)e=Math.imul(e^a.charCodeAt(t),16777619);return e>>>0}function _a(a,e=Math.random()*2**31){let t=[...a],r=Math.floor(e)||1;for(let n=t.length-1;n>0;n-=1){r=Math.imul(1664525,r)+1013904223>>>0;let s=r%(n+1);[t[n],t[s]]=[t[s],t[n]]}return t}function fr(a){let e=a.trim().toLowerCase(),t=i=>i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");if(/\s/.test(e))return new RegExp(`(?<![A-Za-z])(${e.split(/\s+/).map(t).join("\\s+")})(?![A-Za-z])`,"i");let r=ct.get(e);if(r)return new RegExp(`(?<![A-Za-z])((?:${[e,...r].map(t).join("|")})[a-z]{0,3})(?![A-Za-z])`,"i");let n=e;e.length>3&&/[^aeiou]y$|e$/.test(e)&&(n=e.slice(0,-1));let s=/[^aeiou][aeiou][bdgmnprt]$/.test(e)?`${t(e.slice(-1))}?`:"";return new RegExp(`(?<![A-Za-z])(${t(n)}${s}[a-z]{0,4})(?![A-Za-z])`,"i")}function mt(a,e){let t=fr(e).exec(a);return t?{before:a.slice(0,t.index),hidden:t[0],after:a.slice(t.index+t[0].length)}:null}var be=(a=new Date)=>`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,"0")}-${String(a.getDate()).padStart(2,"0")}`;function gt(a,{newWords:e=0,reviewed:t=0,correct:r=0,seconds:n=0}={}){let s=be(),i=a[s]||{n:0,r:0,c:0};return{...a,[s]:{n:i.n+e,r:i.r+t,c:i.c+r,...n?{t:(i.t||0)+n}:i.t?{t:i.t}:{}}}}function hr(a,e=Date.now()){return Object.entries(a.cards).filter(([,t])=>t.due<=e).sort((t,r)=>t[1].due-r[1].due).map(([t])=>t)}function Se(a){return a.days[be()]?.n??0}function br(a,e,t,r){let n=[],s=i=>{for(let o of a.words){if(n.length>=r)return;o.cefr<i||e.cards[o.id]||n.includes(o.id)||n.push(o.id)}};return s(t.startLevel||0),n.length<r&&s(0),n}function Ee(a,e,t){let r=hr(e).filter(s=>a.byId.has(s)),n=br(a,e,t,Math.max(0,(t.dailyNew||10)-Se(e)));return{due:r,fresh:n,minutes:Math.max(1,Math.round(r.length*.25+n.length*.9))}}function xr(a,e,t,r){let n=e.cards[a.id],s=!!(a.media&F.img),i=Me(a.id+r)%100;return!n||n.s<2?s&&i<45?"picture":i<80?"meaning":"listen":t.spell&&(n.s>=4||i<35)?i<75?"spell":s?"picture":"listen":i<50?"listen":s?"picture":"meaning"}function Ye(a,e,t,r){let n=Ze(e.word),s=e.zh.replace(/^[a-z.]+\s*/,"").split(/[；;，,]/)[0],i=[],o=Math.max(0,e.order-400);for(let c=o;c<Math.min(a.words.length,e.order+400);c+=1){let m=a.words[c];if(m.id===e.id||Ze(m.word)===n||s&&m.zh.includes(s))continue;let b=Me(m.id+r)%100;t==="listen"||t==="picture"?(m.word[0]?.toLowerCase()===n[0]&&(b+=120),b+=Math.max(0,60-Math.abs(m.word.length-n.length)*20)):(m.cefr===e.cefr&&(b+=40),m.zh.split(" ")[0]===e.zh.split(" ")[0]&&(b+=60)),i.push([b,m])}i.sort((c,m)=>m[0]-c[0]);let d=new Set,u=[];for(let[,c]of i){let m=t==="meaning"?c.zh:Ze(c.word);if(!d.has(m)&&(d.add(m),u.push(c.id),u.length===3))break}return _a([e.id,...u],r)}function Ve(a,e,t,r={}){let n=Date.now(),s=Ee(a,e,t),i=r.ids?r.ids.filter(c=>e.cards[c]):s.due.slice(0,120),o=r.ids?r.ids.filter(c=>!e.cards[c]):r.reviewOnly?[]:s.fresh,d=[],u=(c,m)=>{let b=a.byId.get(c),f=xr(b,e,t,n+m);return{id:c,kind:f,options:f==="spell"?void 0:Ye(a,b,f,n+m)}};i.forEach((c,m)=>d.push(u(c,m)));for(let c=0;c<o.length;c+=5){let m=o.slice(c,c+5);m.forEach(b=>d.push({id:b,kind:"intro"})),_a(m,n+c).forEach((b,f)=>d.push(u(b,1e3+c+f)))}return{id:`s${n}`,started:n,steps:d,index:0,graded:{},newIds:o,reviewIds:i}}function Je(a,e,t,r){if(!e)return v.Again;if(r)return v.Hard;let n=a==="spell"?2e4:9e3,s=a==="spell"?6e3:2500;return t>n?v.Hard:t<s&&a==="spell"?v.Easy:v.Good}function Xe(a,e,t,r,n,s,i){let o=a.session;if(!o)return a;let d={...a,session:{...o,pending:{correct:r,value:s}}};if(!(t.id in o.graded)&&!t.retry&&(d={...d,cards:{...d.cards,[t.id]:ge(a.cards[t.id],n,Date.now(),i.retention)},session:{...d.session,graded:{...o.graded,[t.id]:n}},mistakes:r?d.mistakes:[t.id,...d.mistakes.filter(c=>c!==t.id)].slice(0,300)},d={...d,days:gt(d.days,{reviewed:1,correct:r?1:0,newWords:o.newIds.includes(t.id)?1:0})}),!r){let c=[...d.session.steps];if(c.filter(b=>b.id===t.id&&b.retry).length<2){let b=e.byId.get(t.id),f=t.kind==="meaning"?b.media&F.img?"picture":"listen":"meaning",_=Math.min(c.length,o.index+4);c.splice(_,0,{id:t.id,kind:f,retry:!0,options:Ye(e,b,f,Date.now())}),d={...d,session:{...d.session,steps:c}}}}return d}function $e(a,e){let t=a.session;if(!t)return a;let r=t.index+1,n=r>=t.steps.length?Date.now():void 0;return{...a,days:gt(a.days,{seconds:Math.max(0,Math.min(90,Math.round(e)))}),session:{...t,index:r,pending:void 0,finished:n}}}function Qe(a){let e=Object.values(a.graded),t=e.filter(r=>r!==v.Again).length;return{total:e.length,correct:t,accuracy:e.length?Math.round(t/e.length*100):0}}var za=a=>Object.values(a.cards).filter(fe).length;var h=R(require("react"),1);var L=R(require("react"),1);var S=R(require("react"),1);var yr={search:[S.default.createElement("circle",{key:"c",cx:"11",cy:"11",r:"6.5"}),S.default.createElement("path",{key:"l",d:"M16 16l4.5 4.5"})],star:[S.default.createElement("path",{key:"s",d:"M12 3.6l2.5 5.1 5.6.8-4 3.9.9 5.6-5-2.6-5 2.6.9-5.6-4-3.9 5.6-.8z"})],sparkle:[S.default.createElement("path",{key:"a",d:"M12 3l1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7z"}),S.default.createElement("path",{key:"b",d:"M18.5 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z"})],heart:[S.default.createElement("path",{key:"h",d:"M12 19.5s-7-4.3-7-9A4 4 0 0 1 12 7a4 4 0 0 1 7 3.5c0 4.7-7 9-7 9z"})],volume:[S.default.createElement("path",{key:"v",d:"M4 9.5h3.2L12 6v12L7.2 14.5H4z"}),S.default.createElement("path",{key:"w",d:"M15.5 8.5a5 5 0 0 1 0 7"}),S.default.createElement("path",{key:"x",d:"M18 6a8.5 8.5 0 0 1 0 12"})],close:[S.default.createElement("path",{key:"a",d:"M6 6l12 12"}),S.default.createElement("path",{key:"b",d:"M18 6L6 18"})],chevronLeft:[S.default.createElement("path",{key:"c",d:"M14.5 5.5L8 12l6.5 6.5"})],chevronRight:[S.default.createElement("path",{key:"c",d:"M9.5 5.5L16 12l-6.5 6.5"})],book:[S.default.createElement("path",{key:"a",d:"M4 5.5A2.5 2.5 0 0 1 6.5 3H19v15H6.5A2.5 2.5 0 0 0 4 20.5z"}),S.default.createElement("path",{key:"b",d:"M4 20.5A2.5 2.5 0 0 1 6.5 18H19v3H6.5"})],layers:[S.default.createElement("path",{key:"a",d:"M12 3l8 4.5-8 4.5-8-4.5z"}),S.default.createElement("path",{key:"b",d:"M4 12l8 4.5 8-4.5"}),S.default.createElement("path",{key:"c",d:"M4 16.5L12 21l8-4.5"})],refresh:[S.default.createElement("path",{key:"a",d:"M19 12a7 7 0 1 1-2.1-5"}),S.default.createElement("path",{key:"b",d:"M19.5 4v4.5H15"})],check:[S.default.createElement("path",{key:"c",d:"M5 12.5l4.2 4.2L19 7"})],info:[S.default.createElement("circle",{key:"a",cx:"12",cy:"12",r:"8.5"}),S.default.createElement("path",{key:"b",d:"M12 11v5.5"}),S.default.createElement("path",{key:"c",d:"M12 7.8v.4"})],play:[S.default.createElement("path",{key:"p",d:"M8 5.5l10 6.5-10 6.5z"})],pause:[S.default.createElement("path",{key:"a",d:"M9 6v12"}),S.default.createElement("path",{key:"b",d:"M15 6v12"})],user:[S.default.createElement("circle",{key:"a",cx:"12",cy:"8",r:"3.6"}),S.default.createElement("path",{key:"b",d:"M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6"})],globe:[S.default.createElement("circle",{key:"a",cx:"12",cy:"12",r:"8.5"}),S.default.createElement("path",{key:"b",d:"M3.5 12h17"}),S.default.createElement("path",{key:"c",d:"M12 3.5c2.5 2.4 3.8 5.3 3.8 8.5S14.5 18.1 12 20.5c-2.5-2.4-3.8-5.3-3.8-8.5S9.5 5.9 12 3.5z"})]};function A({name:a,size:e=18,filled:t=!1,className:r="",...n}){let s=yr[a];return s?S.default.createElement("svg",{viewBox:"0 0 24 24",width:e,height:e,fill:t?"currentColor":"none",stroke:"currentColor",strokeWidth:t?0:1.7,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",className:r,...n},s):null}function U({id:a,word:e,full:t=!1,className:r="",alt:n}){let[s,i]=(0,S.useState)(!1),o=t?Oa(a):Ta(a);return s?S.default.createElement("div",{className:`wa-img-fallback ${r}`,role:"img","aria-label":n||e},S.default.createElement("span",null,(e||"?").slice(0,1).toUpperCase())):S.default.createElement("img",{className:r,src:o,alt:n||`${e} \u63D2\u753B`,loading:"lazy",decoding:"async",draggable:!1,onError:()=>i(!0)})}var le=null,Ae=null,Ma=new Set;function ft(){for(let a of Ma)a()}function xe(){le&&(le.pause(),le=null),Ae=null,ft()}function ye(a,e){if(Ae===a){xe();return}xe();let t=new Audio(e);le=t,Ae=a,ft(),t.onended=()=>{le===t&&xe()},t.onerror=()=>{le===t&&xe()},t.play().catch(()=>{le===t&&xe()})}function ve(){xe()}function vr(){let[a,e]=(0,S.useState)(Ae);return(0,S.useEffect)(()=>{let t=()=>e(Ae);return Ma.add(t),()=>Ma.delete(t)},[]),a}function K({audioKey:a,url:e,label:t,size:r=16,className:n="",title:s}){let i=vr()===a;return S.default.createElement("button",{type:"button",className:`wa-audio-btn ${i?"is-playing":""} ${n}`,onClick:()=>ye(a,e),"aria-label":s||(i?"\u505C\u6B62\u64AD\u653E":`\u64AD\u653E${t||""}`),title:s||t||"\u64AD\u653E\u53D1\u97F3"},S.default.createElement(A,{name:i?"pause":"volume",size:r}),t?S.default.createElement("span",null,t):null)}function ht({onClose:a,children:e,labelledBy:t}){let r=(0,S.useRef)(null);return(0,S.useEffect)(()=>{let n=s=>{s.key==="Escape"&&(s.stopPropagation(),a())};return window.addEventListener("keydown",n),()=>window.removeEventListener("keydown",n)},[a]),S.default.createElement("div",{className:"wa-overlay",ref:r,role:"dialog","aria-modal":"true","aria-labelledby":t,onMouseDown:n=>{n.target===r.current&&a()}},e)}function te({label:a="\u52A0\u8F7D\u4E2D\u2026"}){return S.default.createElement("div",{className:"wa-loading",role:"status"},S.default.createElement("span",{className:"wa-spinner","aria-hidden":"true"}),S.default.createElement("span",null,a))}function de({icon:a="sparkle",title:e,children:t}){return S.default.createElement("div",{className:"wa-empty"},S.default.createElement("span",{className:"wa-empty-icon"},S.default.createElement(A,{name:a,size:26})),S.default.createElement("h3",null,e),t?S.default.createElement("div",{className:"wa-empty-body"},t):null)}function se({level:a}){return S.default.createElement("span",{className:`wa-cefr wa-cefr-${a}`},a)}function bt(a){let e=a.includes("\uFF5C")?"\uFF5C":a.includes("|")?"|":"";if(!e)return{en:a,zh:""};let t=a.indexOf(e);return{en:a.slice(0,t).trim(),zh:a.slice(t+1).trim()}}var kr=/[A-Za-z]+(?:['’][A-Za-z]+)*/g,Nr=/^[,.;:!?…’”»)\]]+/,Sa="word-atlas:lookup-open";function _r(a,e){if(!e)return!1;let t=a.toLowerCase(),r=e.toLowerCase();return t===r||t.startsWith(r)}function zr({atlas:a,progress:e,token:t,refId:r,anchor:n,onClose:s,onOpenWord:i}){let o=(0,L.useRef)(null),[d,u]=(0,L.useState)({left:16,top:16}),c=r?a.byId.get(r):null,m=e.settings.accent;return(0,L.useLayoutEffect)(()=>{let b=()=>{let _=o.current?.offsetWidth??300,C=o.current?.offsetHeight??190,$=window.innerHeight-n.bottom>=C+16||n.top<C+16?n.bottom+8:Math.max(16,n.top-C-8),w=Math.max(16,Math.min(window.innerWidth-_-16,n.left+n.width/2-_/2));u({left:w,top:Math.min($,window.innerHeight-C-16)})};b();let f=new ResizeObserver(b);return o.current&&f.observe(o.current),window.addEventListener("resize",b),()=>{f.disconnect(),window.removeEventListener("resize",b)}},[n,t,r]),(0,L.useEffect)(()=>{let b=_=>{o.current?.contains(_.target)||_.target instanceof Element&&_.target.closest("[data-wa-lookup-token]")||s()},f=_=>{_.key==="Escape"&&(_.stopImmediatePropagation(),s())};return document.addEventListener("pointerdown",b,!0),window.addEventListener("keydown",f,!0),()=>{document.removeEventListener("pointerdown",b,!0),window.removeEventListener("keydown",f,!0)}},[s]),L.default.createElement("div",{className:"wa-lookup",ref:o,style:{left:d.left,top:d.top},role:"dialog","aria-modal":"false","aria-label":`\u67E5\u8BCD\uFF1A${t}`},L.default.createElement("button",{type:"button",className:"wa-icon-btn wa-lookup-close",onClick:s,"aria-label":"\u5173\u95ED\u67E5\u8BCD"},L.default.createElement(A,{name:"close",size:16})),c?L.default.createElement(L.default.Fragment,null,L.default.createElement("div",{className:"wa-lookup-head"},W(c,F.img)?L.default.createElement(U,{id:c.id,word:c.word,className:"wa-lookup-thumb"}):null,L.default.createElement("div",{className:"wa-lookup-title"},L.default.createElement("h3",{lang:"en"},c.word),L.default.createElement("p",null,c.ipa))),L.default.createElement("p",{className:"wa-lookup-meaning"},c.zh),L.default.createElement("div",{className:"wa-lookup-actions"},W(c,F[m])?L.default.createElement(K,{audioKey:`${m}:${c.id}`,url:P(m,c.id),label:"\u64AD\u653E\u53D1\u97F3"}):null,L.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary",onClick:()=>i(c.id)},"\u67E5\u770B\u8BCD\u5361"))):L.default.createElement(L.default.Fragment,null,L.default.createElement("h3",{className:"wa-lookup-missing",lang:"en"},t),L.default.createElement("p",{className:"wa-lookup-meaning"},"\u8FD9\u4E2A\u8BCD\u4E0D\u5728\u8BCD\u5149\u8BCD\u5E93\u91CC")))}function re({atlas:a,progress:e,text:t,headword:r,onOpenWord:n,className:s=""}){let i=wt(a),[o,d]=(0,L.useState)(null);(0,L.useEffect)(()=>{if(!o)return;let c=()=>d(null);return window.addEventListener(Sa,c),()=>window.removeEventListener(Sa,c)},[o]);let u=(0,L.useMemo)(()=>{let c=[],m=0;for(let b of t.matchAll(kr)){let f=b.index??0;f>m&&c.push(t.slice(m,f));let _=b[0],C=i.resolve(_),O=_r(_,r),$=L.default.createElement("button",{type:"button",className:"wa-lookup-token","data-wa-lookup-token":"","aria-label":`\u67E5\u8BCD\uFF1A${_}`,"aria-haspopup":"dialog",onClick:z=>{z.stopPropagation(),window.dispatchEvent(new Event(Sa));let y=z.currentTarget.getBoundingClientRect();d({token:_,refId:C,anchor:{left:y.left,top:y.top,width:y.width,height:y.height,bottom:y.bottom}})},onKeyDown:z=>{(z.key==="Enter"||z.key===" ")&&z.stopPropagation()}},_);c.push(O?L.default.createElement("mark",{key:`mark-${f}`},$):L.default.createElement(L.default.Fragment,{key:f},$)),m=f+_.length;let w=t.slice(m).match(Nr)?.[0]??"";w&&(c.push(L.default.createElement("span",{key:`glue-${f}`},w)),m+=w.length)}return m<t.length&&c.push(t.slice(m)),c},[t,r,i]);return L.default.createElement("span",{className:`wa-lookup-text ${s}`},u,o?L.default.createElement(zr,{atlas:a,progress:e,token:o.token,refId:o.refId,anchor:o.anchor,onClose:()=>d(null),onOpenWord:c=>{d(null),n(c)}}):null)}function Re({atlas:a,word:e,progress:t,onClose:r,onPrev:n,onNext:s,hasPrev:i,hasNext:o,onOpenWord:d,onToggleBookmark:u,onMarkLearned:c,onBack:m,backLabel:b}){let[f,_]=(0,h.useState)(null),[C,O]=(0,h.useState)(""),$=t.settings.accent,w=t.cards[e.id],z=t.bookmarks.includes(e.id);(0,h.useEffect)(()=>{let N=!0;return _(null),O(""),ne(a,e.id).then(E=>{N&&_(E)}).catch(E=>{N&&O(E.message||"\u8BCD\u6761\u52A0\u8F7D\u5931\u8D25")}),()=>{N=!1,ve()}},[a,e.id]),(0,h.useEffect)(()=>{let N=E=>{E.key==="ArrowLeft"&&i?(E.preventDefault(),n()):E.key==="ArrowRight"&&o&&(E.preventDefault(),s())};return window.addEventListener("keydown",N),()=>window.removeEventListener("keydown",N)},[i,o,n,s]);let y=a.topics.find(N=>N.slug===e.topic)?.zh||e.topicZh;return h.default.createElement(ht,{onClose:r,labelledBy:"wa-detail-title"},h.default.createElement("div",{className:"wa-detail",role:"document"},h.default.createElement("div",{className:"wa-detail-art"},h.default.createElement(U,{id:e.id,word:e.word,full:!0,className:"wa-detail-img",alt:`${e.word} \u63D2\u753B`}),h.default.createElement("div",{className:"wa-detail-art-meta"},h.default.createElement("span",{className:"wa-specimen"},"\u2116 ",String(e.order+1).padStart(4,"0")," ",h.default.createElement("i",null)," Word Atlas"),w?h.default.createElement("span",{className:"wa-memory-inline"},dt(w)?"\u5F85\u590D\u4E60":`\u4E0B\u6B21\u590D\u4E60 ${Ke(w.due-Date.now())}\u540E`):null)),h.default.createElement("div",{className:"wa-detail-body"},h.default.createElement("button",{type:"button",className:"wa-icon-btn wa-detail-close",onClick:r,"aria-label":"\u5173\u95ED\u8BCD\u6761"},h.default.createElement(A,{name:"close",size:18})),h.default.createElement("header",{className:"wa-detail-head"},m?h.default.createElement("button",{type:"button",className:"wa-icon-btn wa-back-btn",onClick:m,"aria-label":b?`\u8FD4\u56DE ${b}`:"\u8FD4\u56DE\u4E0A\u4E00\u4E2A\u8BCD",title:b?`\u8FD4\u56DE ${b}`:"\u8FD4\u56DE\u4E0A\u4E00\u4E2A\u8BCD"},h.default.createElement(A,{name:"chevronLeft",size:18})):null,h.default.createElement("div",{className:"wa-tags"},h.default.createElement(se,{level:e.cefr}),y?h.default.createElement("span",{className:"wa-chip"},y):null,w?h.default.createElement("span",{className:`wa-chip wa-chip-status ${w.st===2?"is-done":""}`},w.st===2?"\u590D\u4E60\u4E2D":"\u5B66\u4E60\u4E2D"):null),h.default.createElement("button",{type:"button",className:`wa-icon-btn ${z?"is-on":""}`,onClick:()=>u(e.id),"aria-pressed":z,"aria-label":z?"\u53D6\u6D88\u6536\u85CF":"\u6536\u85CF",title:z?"\u53D6\u6D88\u6536\u85CF":"\u6536\u85CF"},h.default.createElement(A,{name:"heart",size:19,filled:z}))),h.default.createElement("h2",{id:"wa-detail-title",className:"wa-headword",lang:"en"},e.word),!f&&!C?h.default.createElement(te,{label:"\u52A0\u8F7D\u8BCD\u6761\u2026"}):null,C?h.default.createElement("p",{className:"wa-error"},C):null,f?h.default.createElement(h.default.Fragment,null,h.default.createElement("div",{className:"wa-detail-scroll"},h.default.createElement("div",{className:"wa-pron"},f.uk?h.default.createElement("div",{className:"wa-pron-row"},h.default.createElement("span",{className:"wa-pron-label"},"\u82F1"),h.default.createElement("span",{className:"wa-ipa"},f.uk),W(f,F.uk)?h.default.createElement(K,{audioKey:`uk:${e.id}`,url:P("uk",e.id),label:"\u53D1\u97F3"}):null):null,f.us?h.default.createElement("div",{className:"wa-pron-row"},h.default.createElement("span",{className:"wa-pron-label"},"\u7F8E"),h.default.createElement("span",{className:"wa-ipa"},f.us),W(f,F.us)?h.default.createElement(K,{audioKey:`us:${e.id}`,url:P("us",e.id),label:"\u53D1\u97F3"}):null):null,!f.uk&&!f.us?h.default.createElement("span",{className:"wa-ipa"},e.ipa):null,$==="us"&&f.us?h.default.createElement("span",{className:"wa-hint"},"\u9ED8\u8BA4\u7F8E\u97F3"):null),h.default.createElement("ol",{className:"wa-senses"},(f.senses||[]).map((N,E)=>h.default.createElement("li",{key:E},N.pos?h.default.createElement("span",{className:"wa-pos"},N.pos):null,h.default.createElement("span",{className:"wa-zh"},N.zh),N.en?h.default.createElement("span",{className:"wa-en",lang:"en"},N.en):null))),(f.ex||[]).length>0?h.default.createElement("section",{className:"wa-block"},h.default.createElement("h3",{className:"wa-eyebrow"},"\u4F8B\u53E5"),h.default.createElement("ul",{className:"wa-examples"},f.ex.map((N,E)=>{let I=E===0?"ex":"ex2",Z=W(f,F[I]);return h.default.createElement("li",{key:E},f.ex.length>1?h.default.createElement("span",{className:`wa-ex-tag ${E?"is-ielts":""}`},E?"\u96C5\u601D\u8BED\u5883":"\u65E5\u5E38"):null,h.default.createElement("p",{className:"wa-ex-en",lang:"en"},h.default.createElement(re,{atlas:a,progress:t,text:N.en,headword:e.word,onOpenWord:d}),Z?h.default.createElement(K,{audioKey:`${I}:${e.id}`,url:P(I,e.id),size:14,className:"wa-ex-speak",title:"\u64AD\u653E\u4F8B\u53E5\u6717\u8BFB"}):null),h.default.createElement("p",{className:"wa-ex-zh"},N.zh))}))):null,(f.col||[]).length>0?h.default.createElement("section",{className:"wa-block"},h.default.createElement("h3",{className:"wa-eyebrow"},"\u5E38\u7528\u642D\u914D"),h.default.createElement("ul",{className:"wa-collocations"},f.col.map(N=>{let E=bt(N);return h.default.createElement("li",{key:N},h.default.createElement("span",{lang:"en"},E.en),E.zh?h.default.createElement("small",null,E.zh):null)}))):null,(f.fam||[]).length>0||(f.syn||[]).length>0||(f.ant||[]).length>0?h.default.createElement("section",{className:"wa-block wa-relations"},(f.fam||[]).length>0?h.default.createElement("div",null,h.default.createElement("h3",{className:"wa-eyebrow"},"\u8BCD\u65CF"),h.default.createElement("p",null,f.fam.map(N=>{let E=N.replace(/\s*\(.*\)\s*$/,"").trim().toLowerCase(),I=a.words.find(Z=>Z.word.toLowerCase()===E);return I?h.default.createElement("button",{key:N,type:"button",className:"wa-link",onClick:()=>d(I.id)},N):h.default.createElement("span",{key:N},N)}))):null,(f.syn||[]).length>0?h.default.createElement("div",null,h.default.createElement("h3",{className:"wa-eyebrow"},"\u8FD1\u4E49"),h.default.createElement("p",null,f.syn.map(N=>h.default.createElement("span",{key:N},N)))):null,(f.ant||[]).length>0?h.default.createElement("div",null,h.default.createElement("h3",{className:"wa-eyebrow"},"\u53CD\u4E49"),h.default.createElement("p",null,f.ant.map(N=>h.default.createElement("span",{key:N},N)))):null):null,f.tip?h.default.createElement("aside",{className:"wa-tip"},h.default.createElement(A,{name:"sparkle",size:17}),h.default.createElement("p",null,f.tip)):null,f.note?h.default.createElement("p",{className:"wa-usage-note"},"\u7528\u6CD5\u63D0\u9192\uFF1A",f.note):null),h.default.createElement("div",{className:"wa-detail-footer"},h.default.createElement("div",{className:"wa-detail-memory"},w?h.default.createElement(h.default.Fragment,null,h.default.createElement("span",null,"\u8BB0\u5FC6\u7A33\u5B9A\u5EA6 ",w.s<1?"<1":Math.round(w.s)," \u5929"),h.default.createElement("span",null,"\u5DF2\u590D\u4E60 ",w.reps," \u6B21")):h.default.createElement("span",null,"\u8FD8\u6CA1\u5B66\u8FC7\u8FD9\u4E2A\u8BCD")),h.default.createElement("div",{className:"wa-detail-actions"},h.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:()=>c(e.id),disabled:!!w},h.default.createElement(A,{name:"check",size:15})," ",w?"\u5DF2\u5728\u590D\u4E60\u4E2D":"\u6807\u8BB0\u4E3A\u5DF2\u5B66"),h.default.createElement("div",{className:"wa-detail-nav"},h.default.createElement("button",{type:"button",className:"wa-icon-btn",onClick:n,disabled:!i,"aria-label":"\u4E0A\u4E00\u4E2A\u8BCD"},h.default.createElement(A,{name:"chevronLeft",size:18})),h.default.createElement("button",{type:"button",className:"wa-icon-btn",onClick:s,disabled:!o,"aria-label":"\u4E0B\u4E00\u4E2A\u8BCD"},h.default.createElement(A,{name:"chevronRight",size:18})))))):null)))}var j=R(require("react"),1);var ea=96;function Mr({atlas:a,word:e,progress:t,onOpen:r,onToggleBookmark:n}){let s=t.cards[e.id],i=t.bookmarks.includes(e.id),o=a.topics.find(d=>d.slug===e.topic)?.zh||e.topicZh;return j.default.createElement("article",{className:`wa-card ${s?"is-learned":""}`},j.default.createElement("div",{className:"wa-card-hit",role:"button",tabIndex:0,onClick:()=>r(e.id),onKeyDown:d=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),r(e.id))},"aria-label":`\u67E5\u770B ${e.word}`},j.default.createElement("div",{className:"wa-card-art"},j.default.createElement(U,{id:e.id,word:e.word}),s?j.default.createElement("span",{className:"wa-card-dot",title:"\u5DF2\u5728\u590D\u4E60\u4E2D"}):null),j.default.createElement("div",{className:"wa-card-body"},j.default.createElement("div",{className:"wa-card-title"},j.default.createElement("h3",{lang:"en"},e.word),j.default.createElement(se,{level:e.cefr})),j.default.createElement("p",{className:"wa-card-ipa"},e.ipa),j.default.createElement("p",{className:"wa-card-zh"},e.zh),j.default.createElement("p",{className:"wa-card-topic"},o))),j.default.createElement("button",{type:"button",className:`wa-card-heart ${i?"is-on":""}`,onClick:d=>{d.stopPropagation(),n(e.id)},"aria-pressed":i,"aria-label":i?"\u53D6\u6D88\u6536\u85CF":"\u6536\u85CF",title:i?"\u53D6\u6D88\u6536\u85CF":"\u6536\u85CF"},j.default.createElement(A,{name:"heart",size:16,filled:i})))}function Le({atlas:a,words:e,progress:t,onOpen:r,onToggleBookmark:n}){let[s,i]=(0,j.useState)(ea),o=(0,j.useRef)(null);(0,j.useEffect)(()=>{i(ea)},[e]),(0,j.useEffect)(()=>{let u=o.current;if(!u||s>=e.length)return;let c=new IntersectionObserver(m=>{m.some(b=>b.isIntersecting)&&i(b=>Math.min(b+ea,e.length))},{rootMargin:"600px 0px"});return c.observe(u),()=>c.disconnect()},[s,e.length]);let d=e.slice(0,s);return j.default.createElement("div",{className:"wa-grid-wrap"},j.default.createElement("p",{className:"wa-grid-count"},"\u5171 ",e.length.toLocaleString("en-US")," \u4E2A\u8BCD",s<e.length?` \xB7 \u5DF2\u663E\u793A ${s}`:""),j.default.createElement("div",{className:"wa-grid"},d.map(u=>j.default.createElement(Mr,{key:u.id,atlas:a,word:u,progress:t,onOpen:r,onToggleBookmark:n}))),s<e.length?j.default.createElement("div",{ref:o,className:"wa-more"},j.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:()=>i(u=>u+ea)},"\u52A0\u8F7D\u66F4\u591A\uFF08\u5269\u4F59 ",(e.length-s).toLocaleString("en-US"),"\uFF09")):null)}var g=R(require("react"),1);var xt=100;function Sr(a){let e=[...a];for(let t=e.length-1;t>0;t-=1){let r=Math.floor(Math.random()*(t+1));[e[t],e[r]]=[e[r],e[t]]}return e}function Er(a,e){let t=Date.now(),r=e.cards,n=[];for(let u of a.words){let c=r[u.id];c&&c.due<=t&&n.push({id:u.id,word:u,card:c,due:c.due})}n.sort((u,c)=>u.due-c.due);let s=n.slice(0,xt),i=new Set(s.map(u=>u.id)),d=Sr(a.words.filter(u=>!r[u.id]&&!i.has(u.id))).slice(0,Math.max(0,e.settings.dailyNew)).map(u=>({id:u.id,word:u,card:void 0}));return[...s,...d]}function yt(a,e){let t=Date.now(),r=0,n=0,s=0;for(let o of a.words){let d=e.cards[o.id];d&&(n+=1,d.due<=t&&(r+=1),fe(d)&&(s+=1))}let i=a.count-n;return{due:r,learned:n,mastered:s,fresh:i}}function $r({atlas:a,progress:e,onStart:t}){let r=(0,g.useMemo)(()=>yt(a,e),[a,e]),n=Math.min(e.settings.dailyNew,r.fresh),s=Math.min(r.due,xt)+n,i=(o,d)=>{q(u=>({...u,settings:{...u.settings,[o]:d}}))};return g.default.createElement("div",{className:"wa-review-intro"},g.default.createElement("div",{className:"wa-review-hero"},g.default.createElement("span",{className:"wa-review-orbit","aria-hidden":"true"},g.default.createElement(A,{name:"sparkle",size:30})),g.default.createElement("h2",null,"\u4ECA\u65E5\u590D\u4E60"),g.default.createElement("p",null,"FSRS \u4F1A\u6309\u8BB0\u5FC6\u7A33\u5B9A\u5EA6\u5B89\u6392\u590D\u4E60\u3002\u5230\u671F\u5C31\u590D\u4E60\uFF0C\u8BB0\u5F97\u7262\u7684\u8BCD\u4F1A\u8D8A\u9694\u8D8A\u4E45\u3002")),g.default.createElement("div",{className:"wa-review-stats"},g.default.createElement("div",{className:"wa-stat"},g.default.createElement("strong",null,r.due),g.default.createElement("span",null,"\u5230\u671F\u590D\u4E60")),g.default.createElement("div",{className:"wa-stat"},g.default.createElement("strong",null,n),g.default.createElement("span",null,"\u4ECA\u65E5\u65B0\u8BCD")),g.default.createElement("div",{className:"wa-stat"},g.default.createElement("strong",null,r.learned.toLocaleString("en-US")),g.default.createElement("span",null,"\u5DF2\u5B66\u8BCD")),g.default.createElement("div",{className:"wa-stat"},g.default.createElement("strong",null,r.mastered.toLocaleString("en-US")),g.default.createElement("span",null,"\u5DF2\u638C\u63E1"))),g.default.createElement("div",{className:"wa-review-settings"},g.default.createElement("label",null,"\u6BCF\u65E5\u65B0\u8BCD",g.default.createElement("select",{value:e.settings.dailyNew,onChange:o=>i("dailyNew",Number(o.target.value))},[5,10,15,20,30,50].map(o=>g.default.createElement("option",{key:o,value:o},o)))),g.default.createElement("label",null,"\u76EE\u6807\u8BB0\u5FC6\u7387",g.default.createElement("select",{value:e.settings.retention,onChange:o=>i("retention",Number(o.target.value))},[.8,.85,.9,.95].map(o=>g.default.createElement("option",{key:o,value:o},Math.round(o*100),"%"))))),g.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary wa-start-btn",onClick:t,disabled:s===0},s>0?`\u5F00\u59CB\u590D\u4E60\uFF08${s} \u4E2A\u8BCD\uFF09`:"\u4ECA\u5929\u6CA1\u6709\u8981\u590D\u4E60\u7684\u8BCD"),s===0?g.default.createElement("p",{className:"wa-review-done-hint"},g.default.createElement(A,{name:"check",size:15})," \u90FD\u590D\u4E60\u5B8C\u4E86\uFF0C\u53BB\u56FE\u9274\u91CC\u8BA4\u8BC6\u51E0\u4E2A\u65B0\u8BCD\u5427\u3002"):null,g.default.createElement("p",{className:"wa-review-tip"},"\u590D\u4E60\u8FDB\u5EA6\u4F1A\u81EA\u52A8\u4FDD\u5B58\u5230\u672C\u673A ",g.default.createElement("code",null,"$DSH_HOME/word-atlas-dsh/progress.json"),"\u3002"))}function Ar({session:a,atlas:e,progress:t,onAgain:r,onExit:n}){let s=(0,g.useMemo)(()=>yt(e,t),[e,t]),{reviewed:i,correct:o,newWords:d}=a.stats,u=i?Math.round(o/i*100):0;return g.default.createElement("div",{className:"wa-review-summary"},g.default.createElement("span",{className:"wa-review-orbit is-done","aria-hidden":"true"},g.default.createElement(A,{name:"check",size:28})),g.default.createElement("h2",null,"\u672C\u7EC4\u5B8C\u6210"),g.default.createElement("div",{className:"wa-review-stats"},g.default.createElement("div",{className:"wa-stat"},g.default.createElement("strong",null,i),g.default.createElement("span",null,"\u590D\u4E60\u8BCD\u6570")),g.default.createElement("div",{className:"wa-stat"},g.default.createElement("strong",null,d),g.default.createElement("span",null,"\u65B0\u5B66\u8BCD")),g.default.createElement("div",{className:"wa-stat"},g.default.createElement("strong",null,u,"%"),g.default.createElement("span",null,"\u9996\u6B21\u7B54\u5BF9\u7387")),g.default.createElement("div",{className:"wa-stat"},g.default.createElement("strong",null,s.due),g.default.createElement("span",null,"\u5269\u4F59\u5230\u671F"))),g.default.createElement("div",{className:"wa-review-summary-actions"},g.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary",onClick:r},"\u518D\u7EC3\u4E00\u7EC4"),g.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:n},"\u8FD4\u56DE\u56FE\u9274")))}function Lr({atlas:a,progress:e,item:t,entry:r,stats:n,onReveal:s,onGrade:i,onOpenWord:o}){let d=Date.now(),u=lt(t.card,d,e.settings.retention),c=!t.card,m=b=>b>=v.Good;return g.default.createElement("div",{className:"wa-review-card"},g.default.createElement("div",{className:"wa-review-art"},g.default.createElement(U,{id:t.word.id,word:t.word.word,full:!0,alt:`${t.word.word} \u63D2\u753B`})),g.default.createElement("div",{className:"wa-review-body"},g.default.createElement("div",{className:"wa-review-tags"},g.default.createElement(se,{level:t.word.cefr}),c?g.default.createElement("span",{className:"wa-chip wa-chip-new"},"\u65B0\u8BCD"):g.default.createElement("span",{className:"wa-chip"},"\u5230\u671F\u590D\u4E60")),g.default.createElement("h2",{className:"wa-review-word",lang:"en"},t.word.word),g.default.createElement("div",{className:"wa-pron-row"},g.default.createElement("span",{className:"wa-ipa"},r?.uk||t.word.ipa),W(t.word,F.uk)?g.default.createElement(K,{audioKey:`uk:${t.word.id}`,url:P("uk",t.word.id),label:"\u82F1\u97F3"}):null,W(t.word,F.us)&&r?.us?g.default.createElement(K,{audioKey:`us:${t.word.id}`,url:P("us",t.word.id),label:"\u7F8E\u97F3"}):null),n.revealed?g.default.createElement("div",{className:"wa-answer"},g.default.createElement("ol",{className:"wa-senses"},(r?.senses||[]).map((b,f)=>g.default.createElement("li",{key:f},b.pos?g.default.createElement("span",{className:"wa-pos"},b.pos):null,g.default.createElement("span",{className:"wa-zh"},b.zh),b.en?g.default.createElement("span",{className:"wa-en",lang:"en"},b.en):null))),r?.ex?.[0]?g.default.createElement("p",{className:"wa-review-example",lang:"en"},g.default.createElement(re,{atlas:a,progress:e,text:r.ex[0].en,headword:t.word.word,onOpenWord:o})):null,r?.ex?.[0]?.zh?g.default.createElement("p",{className:"wa-review-example-zh"},r.ex[0].zh):null,r?.tip?g.default.createElement("p",{className:"wa-review-tip-line"},r.tip):null,g.default.createElement("div",{className:"wa-grades"},va.map(b=>g.default.createElement("button",{type:"button",key:b,className:`wa-grade wa-grade-${b}`,onClick:()=>i(b)},g.default.createElement("span",{className:"wa-grade-label"},ot[b]),g.default.createElement("span",{className:"wa-grade-interval"},Ke(u[b]))))),g.default.createElement("p",{className:"wa-grade-hint"},"\u53EA\u6709\u9996\u6B21\u4F5C\u7B54\u8BA1\u5165\u6B63\u786E\u7387\uFF1B\u952E\u76D8 1\u20134 \u4E5F\u53EF\u4EE5\u8BC4\u5206\u3002")):g.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary wa-reveal-btn",onClick:s},"\u663E\u793A\u7B54\u6848")))}function aa({atlas:a,progress:e,onExit:t,onOpenWord:r}){let[n,s]=(0,g.useState)(null),[i,o]=(0,g.useState)(null),[d,u]=(0,g.useState)(!1),c=n&&!n.finished?n.queue[n.index]:null;(0,g.useEffect)(()=>{if(!c){o(null);return}let $=!0;return o(null),u(!1),ne(a,c.id).then(w=>{$&&o(w)}).catch(()=>{$&&u(!0)}),()=>{$=!1}},[a,c?.id]);let m=(0,g.useCallback)(()=>{let $=Er(a,e);s({queue:$,index:0,revealed:!1,finished:!1,stats:{reviewed:0,correct:0,newWords:0},startedAt:Date.now()})},[a,e]),b=(0,g.useCallback)(()=>{s($=>$&&!$.revealed?{...$,revealed:!0}:$)},[]),f=(0,g.useCallback)($=>{let w=n?.queue[n.index];if(!w)return;let z=ge(w.card,$,Date.now(),e.settings.retention),y=$>=v.Good;q(N=>({...N,cards:{...N.cards,[w.id]:z},days:Fe(N.days,{newWords:w.card?0:1,reviewed:1,correct:y?1:0})})),s(N=>{if(!N||N.finished)return N;let E={reviewed:N.stats.reviewed+1,correct:N.stats.correct+(y?1:0),newWords:N.stats.newWords+(w.card?0:1)},I=N.index+1;return I>=N.queue.length?{...N,index:I,revealed:!1,finished:!0,stats:E}:{...N,index:I,revealed:!1,stats:E}})},[n,e.settings.retention]);if((0,g.useEffect)(()=>{if(!c)return;let $=w=>{if(w.target instanceof HTMLElement&&/^(INPUT|SELECT|TEXTAREA)$/.test(w.target.tagName))return;if(!n.revealed){(w.code==="Space"||w.key==="Enter")&&(w.preventDefault(),b());return}let z={1:v.Again,2:v.Hard,3:v.Good,4:v.Easy};z[w.key]&&(w.preventDefault(),f(z[w.key]))};return window.addEventListener("keydown",$),()=>window.removeEventListener("keydown",$)},[c,n?.revealed,b,f]),!a)return null;if(!n)return g.default.createElement($r,{atlas:a,progress:e,onStart:m});if(n.finished)return g.default.createElement(Ar,{session:n,atlas:a,progress:e,onAgain:()=>s(null),onExit:t});if(!c)return g.default.createElement(de,{title:"\u8FD9\u4E00\u7EC4\u590D\u4E60\u5B8C\u6210\u4E86",icon:"check"});let _=n.index,C=n.queue.length,O=c;return g.default.createElement("div",{className:"wa-review-shell"},g.default.createElement("div",{className:"wa-review-top"},g.default.createElement("div",{className:"wa-review-progress"},g.default.createElement("div",{className:"wa-review-bar","aria-hidden":"true"},g.default.createElement("span",{style:{width:`${Math.round(_/C*100)}%`}})),g.default.createElement("span",{className:"wa-review-counter"},_+1," / ",C)),g.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:()=>s(null)},g.default.createElement(A,{name:"close",size:15})," \u7ED3\u675F")),d?g.default.createElement("p",{className:"wa-error"},"\u8BCD\u6761\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u8BCD\u5149\u63D2\u4EF6\u8DEF\u7531\u662F\u5426\u6B63\u5E38\u3002"):null,!i&&!d?g.default.createElement("div",{className:"wa-review-loading"},g.default.createElement(te,{label:"\u52A0\u8F7D\u8BCD\u6761\u2026"})):null,g.default.createElement(Lr,{atlas:a,progress:e,item:O,entry:i,stats:{revealed:n.revealed},onReveal:b,onGrade:f,onOpenWord:r}))}var x=R(require("react"),1);function Cr(a){return a<5?"\u591C\u6DF1\u4E86":a<11?"\u65E9\u4E0A\u597D":a<14?"\u4E2D\u5348\u597D":a<18?"\u4E0B\u5348\u597D":"\u665A\u4E0A\u597D"}var vt="\u65E5\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D",kt=["\u5165\u95E8","\u57FA\u7840","\u8FDB\u9636","\u4E2D\u9AD8","\u9AD8\u7EA7","\u7CBE\u901A"];function ta({atlas:a,progress:e,onStart:t,onOpenWord:r,onOpenLevel:n}){let s=(0,x.useMemo)(()=>Ee(a,e,e.settings),[a,e]),i=e.session&&!e.session.finished?e.session:null,o=e.days[be()],d=ce(e.days),u=Object.keys(e.cards).length,c=za(e),m=s.due.length+s.fresh.length,b=new Date,f=Array.from({length:7},(y,N)=>{let E=new Date;E.setDate(E.getDate()-(6-N));let I=be(E);return{key:I,label:vt[E.getDay()],value:e.days[I]?.r??0,today:N===6}}),_=Math.max(1,...f.map(y=>y.value)),C=(0,x.useMemo)(()=>{let y=a.cefr.map(N=>({name:N,total:0,seen:0,mastered:0}));for(let N of a.words){let E=y[a.cefr.indexOf(N.cefr)];if(!E)continue;E.total+=1;let I=e.cards[N.id];I&&(E.seen+=1,za({cards:{[N.id]:I}})&&(E.mastered+=1))}return y},[a,e.cards]),O=(i?i.newIds:s.fresh).slice(0,5).map(y=>a.byId.get(y)).filter(Boolean),$=(0,x.useMemo)(()=>{let y=a.words.filter(E=>E.media&1&&E.cefr>=2),N=y.length?y:a.words;return N[Me(be())%N.length]},[a]),[w,z]=(0,x.useState)(null);return(0,x.useEffect)(()=>{let y=!0;if($)return ne(a,$.id).then(N=>y&&z(N)).catch(()=>{}),()=>{y=!1}},[a,$?.id]),x.default.createElement("div",{className:"wa-today"},x.default.createElement("header",{className:"wa-today-head"},x.default.createElement("p",{className:"wa-eyebrow"},b.getMonth()+1," \u6708 ",b.getDate()," \u65E5 \xB7 \u661F\u671F",vt[b.getDay()]),x.default.createElement("h1",null,Cr(b.getHours()),"\uFF0C\u63A2\u7D22\u8005\u3002"),x.default.createElement("p",null,"\u4ECA\u5929\u5148\u6E29\u6545\uFF0C\u518D\u77E5\u65B0\u3002")),x.default.createElement("section",{className:"wa-journey"},x.default.createElement("div",{className:"wa-journey-copy"},x.default.createElement("p",{className:"wa-eyebrow"},i?"\u65C5\u7A0B\u8FDB\u884C\u4E2D":m>0?"\u4ECA\u65E5\u65C5\u7A0B":"\u4ECA\u65E5\u5DF2\u5B8C\u6210"),i?x.default.createElement(x.default.Fragment,null,x.default.createElement("h2",null,"\u8FD8\u5269 ",x.default.createElement("b",null,Math.max(0,i.steps.length-i.index))," \u6B65"),x.default.createElement("p",{className:"wa-journey-lede"},"\u8FDB\u5EA6\u5DF2\u4FDD\u5B58\uFF0C\u968F\u65F6\u63A5\u7740\u8D70\u3002")):m>0?x.default.createElement(x.default.Fragment,null,x.default.createElement("h2",null,"\u590D\u4E60 ",x.default.createElement("b",null,s.due.length),s.due.length>0&&s.fresh.length>0?" \xB7 ":null,s.fresh.length>0?x.default.createElement(x.default.Fragment,null,"\u65B0\u8BCD ",x.default.createElement("b",null,s.fresh.length)):null),x.default.createElement("p",{className:"wa-journey-lede"},"\u7EA6 ",s.minutes," \u5206\u949F\u3002\u5148\u6E29\u6545\uFF0C\u518D\u77E5\u65B0\u3002")):x.default.createElement(x.default.Fragment,null,x.default.createElement("h2",null,"\u4ECA\u5929\u7684\u8BCD\u90FD\u7EC3\u5B8C\u4E86"),x.default.createElement("p",{className:"wa-journey-lede"},"\u60F3\u591A\u8D70\u4E00\u6BB5\uFF0C\u4E5F\u53EF\u4EE5\u3002")),x.default.createElement("div",{className:"wa-journey-actions"},i||m>0?x.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary wa-btn-lg",onClick:()=>t({})},i?"\u7EE7\u7EED\u65C5\u7A0B":"\u5F00\u59CB\u4ECA\u5929\u7684\u65C5\u7A0B"," ",x.default.createElement(A,{name:"chevronRight",size:18})):x.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary wa-btn-lg",onClick:()=>t({extra:5})},"\u518D\u8BA4\u8BC6 5 \u4E2A\u65B0\u8BCD ",x.default.createElement(A,{name:"sparkle",size:17})),!i&&s.due.length>0&&s.fresh.length>0?x.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:()=>t({reviewOnly:!0})},"\u53EA\u590D\u4E60"):null)),x.default.createElement("div",{className:"wa-journey-art"},O.length>0?x.default.createElement("div",{className:"wa-teaser","aria-hidden":"true"},O.map((y,N)=>x.default.createElement(U,{key:y.id,id:y.id,word:y.word,className:`wa-teaser-${N}`}))):x.default.createElement("div",{className:"wa-journey-orbit"},x.default.createElement(A,{name:"sparkle",size:34})),O.length>0?x.default.createElement("p",null,"\u4ECA\u5929\u4F1A\u9047\u89C1\u5B83\u4EEC"):null)),x.default.createElement("section",{className:"wa-today-strip"},x.default.createElement("div",{className:"wa-today-stat"},x.default.createElement("strong",null,d),x.default.createElement("span",null,"\u8FDE\u7EED\u5B66\u4E60 \xB7 \u5929")),x.default.createElement("div",{className:"wa-today-stat"},x.default.createElement("strong",null,o?.r??0),x.default.createElement("span",null,"\u4ECA\u65E5\u7B54\u9898")),x.default.createElement("div",{className:"wa-today-stat"},x.default.createElement("strong",null,u.toLocaleString("en-US")),x.default.createElement("span",null,"\u5DF2\u70B9\u4EAE")),x.default.createElement("div",{className:"wa-today-stat"},x.default.createElement("strong",null,c.toLocaleString("en-US")),x.default.createElement("span",null,"\u957F\u671F\u8BB0\u4F4F"))),x.default.createElement("div",{className:"wa-today-grid"},x.default.createElement("section",{className:"wa-panel"},x.default.createElement("div",{className:"wa-panel-head"},x.default.createElement("h3",{className:"wa-eyebrow"},"\u8FD9\u4E00\u5468"),x.default.createElement("span",{className:"wa-muted"},Se(e)," \u4E2A\u65B0\u8BCD")),x.default.createElement("ol",{className:"wa-week"},f.map(y=>x.default.createElement("li",{key:y.key,className:`${y.value?"is-on":""} ${y.today?"is-today":""}`,title:`${y.key}\uFF1A${y.value} \u9898`},x.default.createElement("span",{style:{height:`${Math.max(8,Math.round(y.value/_*100))}%`}}),x.default.createElement("small",null,y.label))))),x.default.createElement("section",{className:"wa-panel wa-wotd",role:"button",tabIndex:0,onClick:()=>$&&r($.id),onKeyDown:y=>{(y.key==="Enter"||y.key===" ")&&(y.preventDefault(),$&&r($.id))}},x.default.createElement(U,{id:$.id,word:$.word,className:"wa-wotd-img"}),x.default.createElement("div",{className:"wa-wotd-body"},x.default.createElement("h3",{className:"wa-eyebrow"},"\u4ECA\u65E5\u4E00\u8BCD"),x.default.createElement("p",{className:"wa-wotd-word",lang:"en"},$.word),x.default.createElement("p",{className:"wa-wotd-ipa"},$.ipa),x.default.createElement("p",{className:"wa-wotd-zh"},$.zh),w?.ex?.[0]?x.default.createElement("p",{className:"wa-wotd-ex",lang:"en"},w.ex[0].en):null)),x.default.createElement("section",{className:"wa-panel"},x.default.createElement("h3",{className:"wa-eyebrow"},"\u5B66\u4E60\u8DEF\u7EBF \xB7 \u4ECE A1 \u5230 C2"),x.default.createElement("ol",{className:"wa-levels"},C.map((y,N)=>x.default.createElement("li",{key:y.name},x.default.createElement("button",{type:"button",onClick:()=>n(y.name),"aria-label":`${y.name} ${kt[N]}\uFF0C\u5DF2\u5B66 ${y.seen} / ${y.total}`},x.default.createElement("span",{className:"wa-level-name"},y.name),x.default.createElement("span",{className:"wa-level-bar"},x.default.createElement("i",{style:{width:`${Math.round(y.seen/Math.max(1,y.total)*100)}%`}}),x.default.createElement("b",{style:{width:`${Math.round(y.mastered/Math.max(1,y.total)*100)}%`}})),x.default.createElement("span",{className:"wa-level-count"},y.seen,x.default.createElement("small",null,"/",y.total)),x.default.createElement("span",{className:"wa-level-label"},kt[N]))))))))}var l=R(require("react"),1);var Dr={meaning:"\u5B83\u662F\u4EC0\u4E48\u610F\u601D\uFF1F",picture:"\u770B\u56FE\uFF0C\u8865\u5168\u8FD9\u53E5\u8BDD",listen:"\u542C\uFF0C\u662F\u54EA\u4E2A\u8BCD\uFF1F",spell:"\u62FC\u51FA\u8FD9\u4E2A\u8BCD"};function Nt(a,e){let[t,r]=(0,l.useState)(null);return(0,l.useEffect)(()=>{let n=!0;if(r(null),!!e)return ne(a,e).then(s=>n&&r(s)).catch(()=>{}),()=>{n=!1}},[a,e]),t}function _t(a){let e=(0,l.useRef)(Date.now());return(0,l.useEffect)(()=>{e.current=Date.now()},[a]),()=>Date.now()-e.current}function zt(a){let e=(0,l.useRef)(a);e.current=a,(0,l.useEffect)(()=>{let t=r=>{if(r.metaKey||r.ctrlKey||r.altKey||r.repeat)return;let n=r.target,s=n instanceof HTMLElement?n.tagName:"";if((s==="INPUT"||s==="TEXTAREA")&&!(r.key==="Enter"&&n instanceof HTMLInputElement&&n.readOnly)||s==="BUTTON"&&(r.key==="Enter"||r.key===" "))return;let i=e.current[r.key];i&&(r.preventDefault(),i())};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[])}function Ir({index:a,total:e,onExit:t}){return l.default.createElement("header",{className:"wa-learn-top"},l.default.createElement("button",{type:"button",className:"wa-icon-btn",onClick:t,"aria-label":"\u6682\u505C\u5E76\u8FD4\u56DE"},l.default.createElement(A,{name:"close",size:20})),l.default.createElement("div",{className:"wa-learn-progress",role:"progressbar","aria-valuemin":0,"aria-valuemax":e,"aria-valuenow":a},l.default.createElement("span",{style:{width:`${e?Math.round(a/e*100):0}%`}})),l.default.createElement("span",{className:"wa-learn-count"},a+1,l.default.createElement("small",null,"/",e)))}function jr({atlas:a,progress:e,step:t,onOpenWord:r}){let n=Nt(a,t.id),s=_t(t.id),i=e.settings.accent,o=(0,l.useRef)(!1);(0,l.useEffect)(()=>{o.current=!1},[t.id]),(0,l.useEffect)(()=>{!n||o.current||(o.current=!0,e.settings.autoplay&&W(n,F[i])&&ye(`${i}:${t.id}`,P(i,t.id)))},[n,i,t.id,e.settings.autoplay]);let d=(0,l.useCallback)(()=>{ve(),q(c=>$e(c,s()/1e3))},[s]);if(zt({Enter:d," ":d}),!n)return l.default.createElement("div",{className:"wa-learn-loading"},l.default.createElement(te,{label:"\u51C6\u5907\u8BCD\u5361\u2026"}));let u=a.byId.get(t.id);return l.default.createElement("div",{className:"wa-learn-intro"},l.default.createElement("p",{className:"wa-learn-label"},l.default.createElement("span",{className:"wa-dot is-on"})," \u521D\u6B21\u89C1\u9762"),l.default.createElement("div",{className:"wa-learn-card"},l.default.createElement(U,{id:u.id,word:u.word,full:!0,className:"wa-learn-art",alt:`${u.word} \u63D2\u753B`}),l.default.createElement("div",{className:"wa-learn-body"},l.default.createElement("div",{className:"wa-tags"},l.default.createElement(se,{level:u.cefr}),u.topicZh?l.default.createElement("span",{className:"wa-chip"},u.topicZh):null),l.default.createElement("h2",{className:"wa-learn-word",lang:"en"},u.word),l.default.createElement("div",{className:"wa-pron"},n.uk?l.default.createElement("div",{className:"wa-pron-row"},l.default.createElement("span",{className:"wa-pron-label"},"\u82F1"),l.default.createElement("span",{className:"wa-ipa"},n.uk),W(n,F.uk)?l.default.createElement(K,{audioKey:`uk:${u.id}`,url:P("uk",u.id),label:"\u53D1\u97F3"}):null):null,n.us?l.default.createElement("div",{className:"wa-pron-row"},l.default.createElement("span",{className:"wa-pron-label"},"\u7F8E"),l.default.createElement("span",{className:"wa-ipa"},n.us),W(n,F.us)?l.default.createElement(K,{audioKey:`us:${u.id}`,url:P("us",u.id),label:"\u53D1\u97F3"}):null):null),l.default.createElement("ol",{className:"wa-senses"},(n.senses||[]).map((c,m)=>l.default.createElement("li",{key:m},c.pos?l.default.createElement("span",{className:"wa-pos"},c.pos):null,l.default.createElement("span",{className:"wa-zh"},c.zh),c.en?l.default.createElement("span",{className:"wa-en",lang:"en"},c.en):null))),(n.ex||[]).slice(0,1).map((c,m)=>l.default.createElement("div",{className:"wa-learn-example",key:m},l.default.createElement("p",{className:"wa-ex-en",lang:"en"},l.default.createElement(re,{atlas:a,progress:e,text:c.en,headword:u.word,onOpenWord:r})),l.default.createElement("p",{className:"wa-ex-zh"},c.zh))),n.tip?l.default.createElement("aside",{className:"wa-tip"},l.default.createElement(A,{name:"sparkle",size:17}),l.default.createElement("p",null,n.tip)):null)),l.default.createElement("div",{className:"wa-learn-actions"},l.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary wa-btn-lg",onClick:d,autoFocus:!0},"\u8BA4\u8BC6\u4E86 ",l.default.createElement(A,{name:"chevronRight",size:18})),l.default.createElement("span",{className:"wa-hint"},"Enter \u7EE7\u7EED")))}function Tr({entry:a,pending:e,hints:t,onHint:r,onSubmit:n}){let[s,i]=(0,l.useState)(""),o=(0,l.useRef)(null),d=a.w,u=d.slice(0,t);(0,l.useEffect)(()=>{t&&!s.toLowerCase().startsWith(u.toLowerCase())&&i(u),o.current?.focus()},[t]);let c=e?e.value:s;return l.default.createElement("form",{className:"wa-spell",onSubmit:m=>{m.preventDefault(),!e&&s.trim()&&n(s)}},l.default.createElement("div",{className:"wa-slots","aria-hidden":"true",onClick:()=>o.current?.focus()},Array.from(d).map((m,b)=>{let f=c[b],_=f!==void 0&&f.toLowerCase()===m.toLowerCase();return l.default.createElement("span",{key:b,className:`wa-slot ${m===" "?"is-space":""} ${f!==void 0?e?_?"is-ok":"is-bad":"is-filled":""} ${!e&&b===c.length?"is-caret":""}`},e&&!e.correct?m:f??"")})),l.default.createElement("input",{ref:o,className:"wa-spell-input",value:c,onChange:m=>!e&&i(m.target.value.slice(0,d.length+6)),autoFocus:!0,autoCapitalize:"off",autoCorrect:"off",autoComplete:"off",spellCheck:!1,enterKeyHint:"done","aria-label":`\u62FC\u5199\uFF0C${d.length} \u4E2A\u5B57\u7B26`,readOnly:!!e}),e?null:l.default.createElement("div",{className:"wa-spell-actions"},l.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:r,disabled:t>=d.length-1},l.default.createElement(A,{name:"sparkle",size:15})," \u63D0\u793A\u5B57\u6BCD"),l.default.createElement("button",{type:"submit",className:"wa-btn wa-btn-primary",disabled:!s.trim()},"\u786E\u8BA4 ",l.default.createElement("kbd",null,"Enter"))))}function Or({atlas:a,progress:e,entry:t,word:r,correct:n,onNext:s,onOpenWord:i}){let o=(0,l.useRef)(null);return(0,l.useEffect)(()=>o.current?.focus({preventScroll:!0}),[]),l.default.createElement("div",{className:`wa-feedback ${n?"is-right":"is-wrong"}`,role:"status"},l.default.createElement("div",{className:"wa-feedback-main"},l.default.createElement(U,{id:r.id,word:r.word,className:"wa-feedback-thumb"}),l.default.createElement("div",{className:"wa-feedback-text"},l.default.createElement("p",{className:"wa-feedback-verdict"},n?"\u7B54\u5BF9\u4E86":"\u6CA1\u5173\u7CFB\uFF0C\u8BB0\u4F4F\u5B83"),l.default.createElement("p",{className:"wa-feedback-word"},l.default.createElement("b",{lang:"en"},t.w),l.default.createElement("span",{className:"wa-ipa"},t.uk||t.us)),l.default.createElement("p",{className:"wa-feedback-zh"},(t.senses||[]).slice(0,2).map(d=>`${d.pos} ${d.zh}`).join("\u3000")),t.ex?.[0]?l.default.createElement("p",{className:"wa-feedback-ex",lang:"en"},l.default.createElement(re,{atlas:a,progress:e,text:t.ex[0].en,headword:r.word,onOpenWord:i})):null),l.default.createElement("button",{ref:o,type:"button",className:`wa-btn wa-btn-lg ${n?"wa-btn-primary":"wa-btn-ghost"}`,onClick:s},"\u7EE7\u7EED ",l.default.createElement(A,{name:"chevronRight",size:18}))))}function Br({atlas:a,progress:e,session:t,step:r,onOpenWord:n}){let s=Nt(a,r.id),i=a.byId.get(r.id),o=e.settings,d=o.accent,u=t.pending,c=_t(`${r.id}-${r.kind}-${t.index}`),[m,b]=(0,l.useState)(0),f=(r.options||[]).map(w=>a.byId.get(w)).filter(Boolean),_=s?.ex?.[0]?mt(s.ex[0].en,s.w):null,C=(0,l.useCallback)((w,z)=>{if(u)return;let y=Je(r.kind,z,c(),m>0);q(N=>Xe(N,a,r,z,y,w,o)),o.autoplay&&s&&W(s,F[d])&&ye(`${d}:${r.id}`,P(d,r.id))},[u,c,m,r,a,o,s,d]),O=(0,l.useCallback)(()=>{ve(),q(w=>$e(w,c()/1e3))},[c]);(0,l.useEffect)(()=>{r.kind!=="listen"||u||!s||W(s,F[d])&&ye(`listen:${r.id}:${t.index}`,P(d,r.id))},[r.kind,r.id,u,s,d,t.index]);let $={};return u?($.Enter=O,$[" "]=O):r.kind!=="spell"&&f.forEach((w,z)=>{$[String(z+1)]=()=>C(w.id,w.id===i.id)}),zt($),s?l.default.createElement("div",{className:`wa-quiz wa-quiz-${r.kind} ${u?u.correct?"is-right":"is-wrong":""}`},l.default.createElement("p",{className:"wa-learn-label"},l.default.createElement("span",{className:`wa-dot ${r.retry?"is-warn":"is-on"}`}),r.retry?"\u518D\u89C1\u4E00\u9762 \xB7 ":"",Dr[r.kind]),r.kind==="meaning"?l.default.createElement("div",{className:"wa-quiz-meaning"},l.default.createElement("h2",{className:"wa-learn-word",lang:"en"},s.w),l.default.createElement("div",{className:"wa-pron-row"},l.default.createElement("span",{className:"wa-ipa"},d==="us"?s.us||s.uk:s.uk||s.us),W(s,F[d])?l.default.createElement(K,{audioKey:`${d}:${i.id}`,url:P(d,i.id),label:"\u53D1\u97F3"}):null)):null,r.kind==="picture"?l.default.createElement("div",{className:"wa-quiz-picture"},l.default.createElement(U,{id:i.id,word:i.word,full:!0,className:"wa-quiz-art",alt:`${i.word} \u63D2\u753B`}),l.default.createElement("p",{className:"wa-cloze",lang:"en"},_?l.default.createElement(l.default.Fragment,null,_.before,l.default.createElement("span",{className:"wa-blank"},u?_.hidden:"\u3000\u3000\u3000"),_.after):s.senses[0]?.zh),_&&u?l.default.createElement("p",{className:"wa-cloze-zh"},s.ex[0].zh):null):null,r.kind==="listen"?l.default.createElement("div",{className:"wa-quiz-listen"},l.default.createElement("button",{type:"button",className:"wa-listen-orb",onClick:()=>W(s,F[d])&&ye(`listen:${r.id}:replay:${Date.now()}`,P(d,i.id)),"aria-label":"\u518D\u542C\u4E00\u904D"},l.default.createElement(A,{name:"volume",size:40}),l.default.createElement("span",null)),l.default.createElement("span",{className:"wa-hint"},"\u518D\u542C\u4E00\u904D")):null,r.kind==="spell"?l.default.createElement("div",{className:"wa-quiz-spell"},l.default.createElement(U,{id:i.id,word:i.word,className:"wa-spell-art",alt:`${i.word} \u63D2\u753B`}),l.default.createElement("div",null,l.default.createElement("p",{className:"wa-spell-zh"},s.senses[0]?.pos?l.default.createElement("span",{className:"wa-pos"},s.senses[0].pos):null," ",s.senses[0]?.zh),_?l.default.createElement("p",{className:"wa-cloze wa-cloze-sm",lang:"en"},_.before,l.default.createElement("span",{className:"wa-blank"},"\u3000\u3000\u3000"),_.after):null,W(s,F[d])?l.default.createElement(K,{audioKey:`${d}:${i.id}`,url:P(d,i.id),label:"\u542C\u53D1\u97F3"}):null)):null,r.kind==="spell"?l.default.createElement(Tr,{entry:s,pending:u,hints:m,onHint:()=>b(w=>Math.min(s.w.length-1,w+1)),onSubmit:w=>C(w,w.trim().toLowerCase()===s.w.toLowerCase())}):l.default.createElement("ul",{className:`wa-options ${r.kind==="meaning"?"is-zh":""}`},f.map((w,z)=>{let y=w.id===i.id,N=u?.value===w.id,E=u?y?"is-answer":N?"is-chosen":"is-dim":"";return l.default.createElement("li",{key:w.id},l.default.createElement("button",{type:"button",className:`wa-option ${E}`,"data-option":w.id,onClick:()=>C(w.id,y),disabled:!!u},l.default.createElement("kbd",null,z+1),l.default.createElement("span",{lang:r.kind==="meaning"?"zh":"en"},r.kind==="meaning"?w.zh:w.word),u&&y?l.default.createElement(A,{name:"check",size:18}):null,u&&N&&!y?l.default.createElement(A,{name:"close",size:18}):null))})),u?l.default.createElement(Or,{atlas:a,progress:e,entry:s,word:i,correct:u.correct,onNext:O,onOpenWord:n}):null):l.default.createElement("div",{className:"wa-learn-loading"},l.default.createElement(te,{label:"\u52A0\u8F7D\u9898\u76EE\u2026"}))}function Fr({atlas:a,progress:e,session:t,onExit:r,onRestart:n,onOpenWord:s}){let i=Qe(t),o=[...new Set(t.steps.map(m=>m.id))].map(m=>a.byId.get(m)).filter(Boolean),d=o.filter(m=>t.graded[m.id]===v.Again),u=Math.max(1,Math.round(((t.finished||Date.now())-t.started)/6e4)),c=()=>{q(m=>({...m,session:null})),r()};return l.default.createElement("div",{className:"wa-learn-summary"},l.default.createElement("span",{className:"wa-summary-orbit","aria-hidden":"true"},l.default.createElement(A,{name:"sparkle",size:30})),l.default.createElement("p",{className:"wa-eyebrow"},"\u8FD9\u4E00\u7A0B\u7ED3\u675F\u4E86"),l.default.createElement("h1",null,i.accuracy>=90?"\u6F02\u4EAE\u7684\u4E00\u7A0B\u3002":i.accuracy>=60?"\u7A33\u7A33\u5411\u524D\u3002":"\u9519\u8FC7\u7684\uFF0C\u4F1A\u518D\u76F8\u9047\u3002"),l.default.createElement("div",{className:"wa-summary-stats"},l.default.createElement("div",{className:"wa-summary-stat is-hero"},l.default.createElement("strong",null,i.accuracy,"%"),l.default.createElement("span",null,"\u9996\u6B21\u6B63\u786E\u7387")),l.default.createElement("div",{className:"wa-summary-stat"},l.default.createElement("strong",null,t.newIds.length),l.default.createElement("span",null,"\u65B0\u8BCD")),l.default.createElement("div",{className:"wa-summary-stat"},l.default.createElement("strong",null,t.reviewIds.length),l.default.createElement("span",null,"\u590D\u4E60")),l.default.createElement("div",{className:"wa-summary-stat"},l.default.createElement("strong",null,u),l.default.createElement("span",null,"\u5206\u949F"))),l.default.createElement("ul",{className:"wa-summary-words"},o.map(m=>l.default.createElement("li",{key:m.id,className:t.graded[m.id]===v.Again?"is-wrong":"",role:"button",tabIndex:0,onClick:()=>s(m.id),onKeyDown:b=>b.key==="Enter"&&s(m.id)},l.default.createElement(U,{id:m.id,word:m.word,className:"wa-summary-thumb"}),l.default.createElement("span",{lang:"en"},m.word),l.default.createElement("small",null,m.zh)))),l.default.createElement("p",{className:"wa-summary-note"},"FSRS \u5DF2\u4E3A\u6BCF\u4E2A\u8BCD\u6392\u597D\u4E0B\u6B21\u76F8\u9047\u7684\u65F6\u95F4\u3002\u7B54\u9519\u7684\u8BCD\uFF0C\u4F1A\u66F4\u65E9\u56DE\u6765\u3002"),l.default.createElement("div",{className:"wa-summary-actions"},d.length>0?l.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:()=>n({ids:d.map(m=>m.id)})},l.default.createElement(A,{name:"refresh",size:16})," \u518D\u7EC3 ",d.length," \u4E2A\u9519\u8BCD"):null,l.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary wa-btn-lg",onClick:c,autoFocus:!0},"\u5B8C\u6210 ",l.default.createElement(A,{name:"check",size:17}))),l.default.createElement("p",{className:"wa-hint"},"\u8FDB\u5EA6\u5DF2\u81EA\u52A8\u4FDD\u5B58"))}function ra({atlas:a,progress:e,onExit:t,onRestart:r,onOpenWord:n}){(0,l.useEffect)(()=>()=>ve(),[]);let s=e.session;if(!s)return l.default.createElement("div",{className:"wa-learn-empty"},l.default.createElement(de,{icon:"sparkle",title:"\u4ECA\u5929\u6CA1\u6709\u5F85\u5B66\u7684\u8BCD"},l.default.createElement("p",null,"\u53EF\u4EE5\u5148\u56DE\u987E\u56FE\u9274\uFF0C\u6216\u8005\u660E\u5929\u518D\u6765\u3002"),l.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary",onClick:t},"\u8FD4\u56DE\u4ECA\u65E5")));if(s.finished||s.index>=s.steps.length)return l.default.createElement(Fr,{atlas:a,progress:e,session:s,onExit:t,onRestart:r,onOpenWord:n});let i=s.steps[s.index],o=s.steps.length;return l.default.createElement("div",{className:"wa-learn"},l.default.createElement(Ir,{index:s.index,total:o,onExit:t}),l.default.createElement("main",{className:"wa-learn-stage",key:`${s.id}-${s.index}`},i.kind==="intro"?l.default.createElement(jr,{atlas:a,progress:e,step:i,onOpenWord:n}):l.default.createElement(Br,{atlas:a,progress:e,session:s,step:i,onOpenWord:n})))}var p=R(require("react"),1);var Et="/word-atlas/api/offline",Mt=[{id:"thumb",label:"\u7F29\u7565\u56FE",hint:"\u7F51\u683C / \u67E5\u8BCD\u6D6E\u7A97",bytes:84*1024*1024},{id:"img",label:"\u5B8C\u6574\u63D2\u753B",hint:"\u8BCD\u5361\u5927\u56FE",bytes:199*1024*1024},{id:"audio",label:"\u53D1\u97F3",hint:"\u82F1\u97F3 / \u7F8E\u97F3 / \u4F8B\u53E5\u6717\u8BFB",bytes:418*1024*1024}];function na(a){if(!Number.isFinite(a)||a<=0)return"0 B";let e=["B","KB","MB","GB"],t=a,r=0;for(;t>=1024&&r<e.length-1;)t/=1024,r+=1;return`${t.toFixed(r>=2?1:0)} ${e[r]}`}function Hr(a){if(!Number.isFinite(a)||a<=0)return"\u2014";let e=Math.round(a/1e3);if(e<60)return`${e} \u79D2`;let t=Math.round(e/60);return t<60?`${t} \u5206\u949F`:`${(t/60).toFixed(1)} \u5C0F\u65F6`}function sa({value:a,options:e,onChange:t,ariaLabel:r}){return p.default.createElement("div",{className:"wa-seg",role:"group","aria-label":r},e.map(n=>p.default.createElement("button",{type:"button",key:n.value,className:a===n.value?"is-on":"",onClick:()=>t(n.value)},n.label)))}function St({on:a,onChange:e,label:t,hint:r}){return p.default.createElement("label",{className:"wa-switch-row"},p.default.createElement("span",null,p.default.createElement("b",null,t),r?p.default.createElement("small",null,r):null),p.default.createElement("button",{type:"button",role:"switch","aria-checked":a,"aria-label":t,className:`wa-switch ${a?"is-on":""}`,onClick:()=>e(!a)},p.default.createElement("span",null)))}function Wr({offline:a,refresh:e}){let[t,r]=(0,p.useState)(["thumb"]),[n,s]=(0,p.useState)("remote"),[i,o]=(0,p.useState)(!1),[d,u]=(0,p.useState)(""),c=a?.state==="downloading";(0,p.useEffect)(()=>{a?.contentDirReady&&s("repo")},[a?.contentDirReady]);let m=async(z,y,N)=>{o(!0),u("");try{let E=await fetch(`${Et}${y}`,{method:z,headers:N?{"Content-Type":"application/json"}:void 0,body:N?JSON.stringify(N):void 0}),I=await E.json().catch(()=>({}));return(!E.ok||I.ok===!1)&&u(I.error||`\u8BF7\u6C42\u5931\u8D25\uFF08HTTP ${E.status}\uFF09`),await e(),I}catch(E){return u(String(E?.message||E)),null}finally{o(!1)}},b=z=>{r(y=>y.includes(z)?y.filter(N=>N!==z):[...y,z])},f=Mt.filter(z=>t.includes(z.id)).reduce((z,y)=>z+y.bytes,0),_=a?.done??0,C=a?.total??0,O=C>0?Math.min(100,Math.round(_/C*100)):0,$=a?.state==="done"||(a?.done??0)>0,w=!!a?.contentDirReady;return p.default.createElement("section",{className:"wa-panel"},p.default.createElement("h3",{className:"wa-eyebrow"},"\u79BB\u7EBF\u7D20\u6750"),p.default.createElement("p",{className:"wa-panel-hint"},"\u8BCD\u5E93\u6587\u5B57\u5DF2\u5185\u7F6E\uFF1B\u8FD9\u91CC\u628A\u63D2\u753B\u4E0E\u53D1\u97F3\u4E0B\u8F7D\u5230\u672C\u673A\uFF0C\u65AD\u7F51\u4E5F\u80FD\u770B\u56FE\u3001\u542C\u97F3\u3002",a?.contentDirReady?" \u5F53\u524D\u5DF2\u68C0\u6D4B\u5230\u672C\u673A\u8BCD\u5149\u4ED3\u5E93\uFF0C\u7D20\u6750\u53EF\u76F4\u63A5\u4ECE\u672C\u5730\u8BFB\u53D6\u3002":""),p.default.createElement("div",{className:"wa-offline-source"},p.default.createElement("span",{className:`wa-dot ${w||$?"is-on":""}`}),w?`\u672C\u673A\u8BCD\u5149\u4ED3\u5E93\uFF1A${a?.contentDir}`:$?`\u79BB\u7EBF\u5305\uFF1A${na(a?.bytes??0)}\uFF08${_.toLocaleString("en-US")}${C?` / ${C.toLocaleString("en-US")}`:""} \u4E2A\u6587\u4EF6\uFF09`:"\u5B98\u65B9\u7AD9\u70B9\u6309\u9700\u52A0\u8F7D\uFF08\u9996\u6B21\u770B\u56FE/\u542C\u97F3\u9700\u8981\u8054\u7F51\uFF09",a?.autoCache?" \xB7 \u6309\u9700\u7F13\u5B58\u5DF2\u5F00\u542F":""),a?.dir?p.default.createElement("p",{className:"wa-panel-path"},"\u4FDD\u5B58\u4F4D\u7F6E\uFF1A",a.dir):null,p.default.createElement("div",{className:"wa-tier-list"},Mt.map(z=>p.default.createElement("label",{key:z.id,className:"wa-tier"},p.default.createElement("input",{type:"checkbox",checked:t.includes(z.id),disabled:c,onChange:()=>b(z.id)}),p.default.createElement("span",null,p.default.createElement("b",null,z.label),p.default.createElement("small",null,z.hint," \xB7 \u7EA6 ",na(z.bytes)))))),p.default.createElement("div",{className:"wa-offline-actions"},p.default.createElement("select",{value:n,onChange:z=>s(z.target.value),disabled:c,"aria-label":"\u4E0B\u8F7D\u6765\u6E90"},p.default.createElement("option",{value:"remote"},"\u5B98\u65B9\u7AD9\u70B9"),p.default.createElement("option",{value:"repo",disabled:!a?.contentDirReady},"\u672C\u673A\u8BCD\u5149\u4ED3\u5E93")),c?p.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",disabled:i,onClick:()=>m("POST","/cancel")},"\u53D6\u6D88\u4E0B\u8F7D"):p.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary",disabled:i||t.length===0,onClick:()=>m("POST","/start",{tiers:t,source:n})},"\u5F00\u59CB\u4E0B\u8F7D",f?`\uFF08\u7EA6 ${na(f)}\uFF09`:""),p.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",disabled:i||c||!$,onClick:()=>{confirm("\u5220\u9664\u5DF2\u4E0B\u8F7D\u7684\u79BB\u7EBF\u7D20\u6750\uFF1F\u8BCD\u5E93\u6587\u5B57\u4E0D\u53D7\u5F71\u54CD\u3002")&&m("DELETE","")}},"\u5220\u9664\u79BB\u7EBF\u5305")),c||_>0?p.default.createElement("div",{className:"wa-progress"},p.default.createElement("div",{className:"wa-progress-bar"},p.default.createElement("span",{style:{width:`${O}%`}})),p.default.createElement("div",{className:"wa-progress-meta"},p.default.createElement("span",null,c?"\u4E0B\u8F7D\u4E2D":a?.state==="cancelled"?"\u5DF2\u53D6\u6D88":"\u5DF2\u5B8C\u6210"," \xB7 ",O,"%"),p.default.createElement("span",null,_.toLocaleString("en-US"),C?` / ${C.toLocaleString("en-US")}`:""," \u4E2A\u6587\u4EF6",a?.speed?` \xB7 ${na(a.speed)}/s`:"",c&&a?.etaMs?` \xB7 \u5269\u7EA6 ${Hr(a.etaMs)}`:"",a?.failed?` \xB7 \u5931\u8D25 ${a.failed}`:""))):null,d?p.default.createElement("p",{className:"wa-error-text"},d):null,p.default.createElement("p",{className:"wa-panel-note"},"\u4E0B\u8F7D\u6E90\uFF1A\u5B98\u65B9\u7AD9\u70B9\uFF08CC BY 4.0 \u7D20\u6750\uFF09\u6216\u672C\u673A\u8BCD\u5149\u4ED3\u5E93\uFF1B\u754C\u9762\u97F3\u6548\u4E0D\u5728\u79BB\u7EBF\u5305\u5185\u3002 \u6309\u9700\u7F13\u5B58\u53EF\u5728 profile \u7684 ",p.default.createElement("code",null,"cordis.patch.yml")," \u4E2D\u8BBE\u7F6E ",p.default.createElement("code",null,"autoCache: true"),"\u3002"))}function Ur({days:a}){let t=new Date,r=new Date;r.setDate(t.getDate()-139-t.getDay());let n=[],s=new Date(r);for(let o=0;o<147;o+=1){let d=pe(s);n.push({key:d,value:a[d]?.r??0,future:s>t}),s.setDate(s.getDate()+1)}let i=o=>o===0?0:o<10?1:o<25?2:o<50?3:4;return p.default.createElement("div",{className:"wa-heatmap",role:"img","aria-label":"\u5B66\u4E60\u70ED\u529B\u56FE"},n.map(o=>p.default.createElement("span",{key:o.key,className:`wa-heat-${o.future?"x":i(o.value)}`,title:`${o.key} \xB7 ${o.value} \u9898`})))}function ia({atlas:a,progress:e,onOpenWord:t}){let r=(0,p.useMemo)(()=>{let w=Object.values(e.cards),z=Object.values(e.days),y=z.reduce((Z,V)=>Z+(V.r||0),0),N=z.reduce((Z,V)=>Z+(V.c||0),0),E=z.reduce((Z,V)=>Z+(V.t||0),0),I=Array.from({length:7},(Z,V)=>{let Y=new Date;Y.setHours(23,59,59,999),Y.setDate(Y.getDate()+V);let Ce=new Date(Y);return Ce.setHours(0,0,0,0),w.filter(ie=>(V===0||ie.due>=Ce.getTime())&&ie.due<=Y.getTime()).length});return{learned:w.length,mastered:w.filter(fe).length,reviews:y,accuracy:y?Math.round(N/y*100):0,minutes:Math.round(E/60),streakDays:ce(e.days),forecast:I}},[e]),n=(0,p.useMemo)(()=>a?e.mistakes.map(w=>a.byId.get(w)).filter(Boolean).slice(0,24):[],[a,e.mistakes]),s=Math.max(1,...r.forecast),[i,o]=(0,p.useState)(null),[d,u]=(0,p.useState)(""),[c,m]=(0,p.useState)(""),b=(0,p.useRef)(null),f=e.settings,_=(0,p.useCallback)(async()=>{try{let w=await fetch(Et,{cache:"no-store"});if(!w.ok)throw new Error(`HTTP ${w.status}`);let z=await w.json();o(z),u("")}catch{u("\u79BB\u7EBF\u670D\u52A1\u4E0D\u53EF\u7528\uFF0C\u8BF7\u786E\u8BA4 Host \u63D2\u4EF6\u5DF2\u542F\u7528\u3002")}},[]);(0,p.useEffect)(()=>{_()},[_]),(0,p.useEffect)(()=>{if(i?.state!=="downloading")return;let w=setInterval(_,1200);return()=>clearInterval(w)},[i?.state,_]);let C=w=>q(z=>({...z,settings:{...z.settings,...w}})),O=()=>{let w=new Blob([Ja()],{type:"application/json"}),z=URL.createObjectURL(w),y=document.createElement("a");y.href=z,y.download=`word-atlas-backup-${new Date().toISOString().slice(0,10)}.json`,y.click(),setTimeout(()=>URL.revokeObjectURL(z),1e3),m("\u5DF2\u5BFC\u51FA\u5907\u4EFD\u6587\u4EF6")},$=async w=>{let z=await w.text(),y=Xa(z);m(y.ok?`\u5DF2\u6062\u590D ${y.cards} \u4E2A\u8BCD\u7684\u8BB0\u5FC6`:y.error)};return p.default.createElement("div",{className:"wa-settings"},p.default.createElement("section",{className:"wa-me-strip"},p.default.createElement("div",{className:"wa-me-stat"},p.default.createElement("strong",null,r.streakDays),p.default.createElement("span",null,"\u8FDE\u7EED\u5B66\u4E60 \xB7 \u5929")),p.default.createElement("div",{className:"wa-me-stat"},p.default.createElement("strong",null,r.learned.toLocaleString("en-US")),p.default.createElement("span",null,"\u5DF2\u70B9\u4EAE")),p.default.createElement("div",{className:"wa-me-stat"},p.default.createElement("strong",null,r.mastered.toLocaleString("en-US")),p.default.createElement("span",null,"\u957F\u671F\u8BB0\u4F4F")),p.default.createElement("div",{className:"wa-me-stat"},p.default.createElement("strong",null,r.accuracy,"%"),p.default.createElement("span",null,"\u9996\u6B21\u6B63\u786E\u7387")),p.default.createElement("div",{className:"wa-me-stat"},p.default.createElement("strong",null,r.minutes),p.default.createElement("span",null,"\u5B66\u4E60\u5206\u949F"))),p.default.createElement("div",{className:"wa-me-grid"},p.default.createElement("section",{className:"wa-panel"},p.default.createElement("h3",{className:"wa-eyebrow"},"\u8FC7\u53BB 20 \u5468"),p.default.createElement(Ur,{days:e.days}),p.default.createElement("p",{className:"wa-panel-note"},"\u4E00\u683C\u662F\u4E00\u5929\uFF0C\u989C\u8272\u8D8A\u6DF1\uFF0C\u90A3\u5929\u7B54\u5F97\u8D8A\u591A\u3002\u300C\u957F\u671F\u8BB0\u4F4F\u300D\u6307\u8BB0\u5FC6\u7A33\u5B9A\u5EA6\u8D85\u8FC7 21 \u5929\u3002")),p.default.createElement("section",{className:"wa-panel"},p.default.createElement("h3",{className:"wa-eyebrow"},"\u672A\u6765 7 \u5929\u7684\u590D\u4E60\u91CF"),p.default.createElement("ol",{className:"wa-forecast"},r.forecast.map((w,z)=>p.default.createElement("li",{key:z},p.default.createElement("span",{style:{height:`${Math.max(6,Math.round(w/s*100))}%`}}),p.default.createElement("b",null,w),p.default.createElement("small",null,z===0?"\u4ECA\u5929":z===1?"\u660E\u5929":`+${z}`)))))),n.length>0?p.default.createElement("section",{className:"wa-panel"},p.default.createElement("div",{className:"wa-panel-head"},p.default.createElement("h3",{className:"wa-eyebrow"},"\u9519\u8BCD\u672C"),p.default.createElement("span",{className:"wa-muted"},"\u6700\u8FD1 ",n.length," \u4E2A")),p.default.createElement("ul",{className:"wa-mistakes"},n.map(w=>p.default.createElement("li",{key:w.id},p.default.createElement("button",{type:"button",onClick:()=>t(w.id),"aria-label":`\u67E5\u770B ${w.word}`},p.default.createElement(U,{id:w.id,word:w.word,className:"wa-mistake-thumb"}),p.default.createElement("span",null,p.default.createElement("b",{lang:"en"},w.word),p.default.createElement("small",null,w.zh)),p.default.createElement("em",null,w.cefr)))))):null,p.default.createElement("section",{className:"wa-panel"},p.default.createElement("h3",{className:"wa-eyebrow"},"\u5B66\u4E60\u8BBE\u7F6E"),p.default.createElement("div",{className:"wa-field"},p.default.createElement("div",null,p.default.createElement("b",null,"\u6BCF\u65E5\u65B0\u8BCD"),p.default.createElement("small",null,"\u590D\u4E60\u4E0D\u8BBE\u4E0A\u9650\uFF0C\u7B97\u6CD5\u53EA\u5B89\u6392\u5FEB\u8981\u9057\u5FD8\u7684\u8BCD\u3002")),p.default.createElement(sa,{ariaLabel:"\u6BCF\u65E5\u65B0\u8BCD",value:f.dailyNew,options:[5,10,15,20,30].map(w=>({value:w,label:String(w)})),onChange:w=>C({dailyNew:w})})),p.default.createElement("div",{className:"wa-field"},p.default.createElement("div",null,p.default.createElement("b",null,"\u4ECE\u54EA\u4E2A\u96BE\u5EA6\u5F00\u59CB"),p.default.createElement("small",null,"\u5B66\u4E60\u4F1A\u8BDD\u4F1A\u8DF3\u8FC7\u66F4\u7B80\u5355\u7684\u7EA7\u522B\u3002")),p.default.createElement(sa,{ariaLabel:"\u8D77\u70B9\u96BE\u5EA6",value:f.startLevel,options:a.cefr.map((w,z)=>({value:z,label:w})),onChange:w=>C({startLevel:w})})),p.default.createElement("div",{className:"wa-field"},p.default.createElement("div",null,p.default.createElement("b",null,"\u76EE\u6807\u8BB0\u5FC6\u7387"),p.default.createElement("small",null,"\u8D8A\u9AD8\u590D\u4E60\u8D8A\u9891\u7E41\uFF0C90% \u662F\u5927\u591A\u6570\u4EBA\u7684\u751C\u70B9\u3002")),p.default.createElement(sa,{ariaLabel:"\u76EE\u6807\u8BB0\u5FC6\u7387",value:f.retention,options:[.85,.9,.95].map(w=>({value:w,label:`${Math.round(w*100)}%`})),onChange:w=>C({retention:w})})),p.default.createElement("div",{className:"wa-field"},p.default.createElement("div",null,p.default.createElement("b",null,"\u53D1\u97F3\u504F\u597D"),p.default.createElement("small",null,"\u8BCD\u6761\u8BE6\u60C5\u91CC\u4E24\u79CD\u53D1\u97F3\u90FD\u53EF\u4EE5\u64AD\u653E\u3002")),p.default.createElement(sa,{ariaLabel:"\u53D1\u97F3\u504F\u597D",value:f.accent,options:[{value:"uk",label:"\u82F1\u5F0F"},{value:"us",label:"\u7F8E\u5F0F"}],onChange:w=>C({accent:w})})),p.default.createElement(St,{label:"\u81EA\u52A8\u64AD\u653E\u53D1\u97F3",hint:"\u8BCD\u5361\u4E0E\u542C\u97F3\u9898\u81EA\u52A8\u64AD\u653E",on:f.autoplay,onChange:w=>C({autoplay:w})}),p.default.createElement(St,{label:"\u590D\u4E60\u65F6\u52A0\u5165\u62FC\u5199\u9898",hint:"\u5B66\u4E60\u4F1A\u8BDD\u4E2D\u52A0\u5165\u62FC\u5199\u9898",on:f.spell,onChange:w=>C({spell:w})})),p.default.createElement(Wr,{offline:i,refresh:_}),d?p.default.createElement("p",{className:"wa-error-text"},d):null,p.default.createElement("section",{className:"wa-panel"},p.default.createElement("h3",{className:"wa-eyebrow"},"\u6570\u636E\u4E0E\u5907\u4EFD"),p.default.createElement("p",{className:"wa-panel-hint"},"\u8FDB\u5EA6\u4FDD\u5B58\u5728\u672C\u673A\uFF08Host \u6587\u4EF6 + \u6D4F\u89C8\u5668\u955C\u50CF\uFF09\uFF0C\u65E0\u9700\u8D26\u53F7\u3002\u6362\u8BBE\u5907\u65F6\u5BFC\u51FA\u5907\u4EFD\u518D\u5BFC\u5165\u5373\u53EF\uFF0C\u683C\u5F0F\u4E0E\u8BCD\u5149\u7EBF\u4E0A\u7248\u517C\u5BB9\u3002"),p.default.createElement("div",{className:"wa-backup-actions"},p.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:O},p.default.createElement(A,{name:"book",size:15})," \u5BFC\u51FA\u5907\u4EFD"),p.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:()=>b.current?.click()},p.default.createElement(A,{name:"refresh",size:15})," \u5BFC\u5165\u5907\u4EFD"),p.default.createElement("input",{ref:b,type:"file",accept:"application/json,.json",hidden:!0,onChange:w=>{let z=w.target.files?.[0];w.target.value="",z&&$(z)}}),p.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost wa-danger",onClick:()=>{confirm("\u786E\u5B9A\u6E05\u7A7A\u5168\u90E8\u5B66\u4E60\u8BB0\u5F55\uFF1F\u6B64\u64CD\u4F5C\u65E0\u6CD5\u64A4\u9500\uFF0C\u5EFA\u8BAE\u5148\u5BFC\u51FA\u5907\u4EFD\u3002")&&(Qa(),m("\u5B66\u4E60\u8BB0\u5F55\u5DF2\u6E05\u7A7A"))}},"\u6E05\u7A7A\u5B66\u4E60\u8BB0\u5F55")),c?p.default.createElement("p",{className:"wa-panel-note"},c):null,p.default.createElement("p",{className:"wa-panel-note"},"\u5DF2\u5B66 ",Object.keys(e.cards).length.toLocaleString("en-US")," \u8BCD \xB7 \u6536\u85CF ",e.bookmarks.length," \u8BCD",e.savedAt?` \xB7 \u4E0A\u6B21\u4FDD\u5B58 ${new Date(e.savedAt).toLocaleString()}`:"")),p.default.createElement("section",{className:"wa-panel"},p.default.createElement("h3",{className:"wa-eyebrow"},"\u5173\u4E8E"),p.default.createElement("p",{className:"wa-panel-hint"},"\u8BCD\u5149 \xB7 Word Atlas DSH \u63D2\u4EF6 v0.3.0 \xB7 \u8BCD\u5E93/\u63D2\u753B/\u5F55\u97F3\u6765\u81EA"," ",p.default.createElement("a",{href:"https://github.com/designfuchen/word-atlas",target:"_blank",rel:"noreferrer"},"designfuchen/word-atlas"),"\uFF08Word Atlas contributors\uFF0CCC BY 4.0\uFF09\uFF1B\u63D2\u4EF6\u4EE3\u7801 MIT\uFF1B\u590D\u4E60\u8C03\u5EA6 ts-fsrs\u3002"),p.default.createElement("p",{className:"wa-panel-path"},"\u63D2\u4EF6\u4ED3\u5E93\uFF1Agithub.com/MC0571/DSH-Plugin-Word-Atlas")))}var Pr=v.Good;function Gr(){return k.default.createElement("svg",{viewBox:"0 0 64 64",width:"34",height:"34","aria-hidden":"true"},k.default.createElement("defs",null,k.default.createElement("linearGradient",{id:"wa-brand-gold",x1:"0",y1:"0",x2:"1",y2:"1"},k.default.createElement("stop",{offset:"0",stopColor:"#FFE9A8"}),k.default.createElement("stop",{offset:"0.55",stopColor:"#F5C052"}),k.default.createElement("stop",{offset:"1",stopColor:"#D98E2B"}))),k.default.createElement("rect",{width:"64",height:"64",rx:"15",fill:"var(--dsw-alias-bg-layer-2)"}),k.default.createElement("circle",{cx:"14",cy:"18",r:"1.4",fill:"var(--dsw-alias-label-secondary)",opacity:"0.6"}),k.default.createElement("circle",{cx:"50",cy:"16",r:"1.7",fill:"var(--dsw-alias-label-secondary)",opacity:"0.6"}),k.default.createElement("circle",{cx:"50",cy:"48",r:"1.3",fill:"var(--dsw-alias-label-secondary)",opacity:"0.5"}),k.default.createElement("circle",{cx:"14",cy:"46",r:"1.5",fill:"var(--dsw-alias-label-secondary)",opacity:"0.5"}),k.default.createElement("path",{d:"M32 15 L36.6 27.4 L49 32 L36.6 36.6 L32 49 L27.4 36.6 L15 32 L27.4 27.4 Z",fill:"url(#wa-brand-gold)"}),k.default.createElement("circle",{cx:"32",cy:"32",r:"3.4",fill:"#FFF6D8"}))}var qr=[{id:"today",label:"\u4ECA\u65E5",icon:"star"},{id:"atlas",label:"\u56FE\u9274",icon:"book"},{id:"review",label:"\u590D\u4E60",icon:"refresh"},{id:"bookmarks",label:"\u751F\u8BCD\u672C",icon:"heart"},{id:"settings",label:"\u6211\u7684",icon:"user"}];function Ea(){let[a,e]=(0,k.useState)(null),[t,r]=(0,k.useState)(""),[n,s]=(0,k.useState)("today"),[i,o]=(0,k.useState)(""),[d,u]=(0,k.useState)("all"),[c,m]=(0,k.useState)("all"),[b,f]=(0,k.useState)([]),_=Ka();(0,k.useEffect)(()=>{Za();let M=!0;return ja().then(B=>{M&&e(B)}).catch(B=>{M&&r(B.message||"\u8BCD\u5E93\u52A0\u8F7D\u5931\u8D25")}),()=>{M=!1}},[]);let C=(0,k.useMemo)(()=>{if(!a)return[];let M=i.trim().toLowerCase();return a.words.filter(B=>d!=="all"&&B.cefr!==d||c!=="all"&&B.topic!==c?!1:M?B.word.toLowerCase().includes(M)||B.zh.toLowerCase().includes(M)||B.ipa.toLowerCase().includes(M):!0)},[a,i,d,c]),O=(0,k.useMemo)(()=>a?_.bookmarks.map(M=>a.byId.get(M)).filter(Boolean):[],[a,_.bookmarks]),$=(0,k.useMemo)(()=>{if(!a)return 0;let M=Date.now(),B=0;for(let oa of a.words){let ke=_.cards[oa.id];ke&&ke.due<=M&&(B+=1)}return B},[a,_.cards]),w=(0,k.useMemo)(()=>Object.keys(_.cards).length,[_.cards]),z=(0,k.useMemo)(()=>ce(_.days),[_.days]),y=n==="bookmarks"?O:C,N=b.length>0?b[b.length-1]:null,E=N&&a?a.byId.get(N):null,I=E?y.findIndex(M=>M.id===E.id):-1,Z=b.length>1&&a?a.byId.get(b[b.length-2]):null,V=M=>f([M]),Y=M=>f(B=>B[B.length-1]===M?B:[...B,M]),Ce=()=>f(M=>M.slice(0,-1)),ie=M=>q(B=>Ya(B,M)),At=M=>q(B=>B.cards[M]?B:{...B,cards:{...B.cards,[M]:ge(void 0,Pr)},days:Fe(B.days,{newWords:1})}),Lt=()=>q(M=>({...M,settings:{...M.settings,accent:M.settings.accent==="uk"?"us":"uk"}})),Aa=(M={})=>{if(!a)return;if(_.session&&!_.session.finished&&!M.ids&&!M.reviewOnly&&!M.extra){s("learn");return}let oa=M.extra?{..._.settings,dailyNew:Se(_)+M.extra}:_.settings,ke=Ve(a,_,oa,M);ke.steps.length!==0&&(q(Ct=>({...Ct,session:ke})),s("learn"))},La=E&&a?k.default.createElement(Re,{atlas:a,word:E,progress:_,onClose:()=>f([]),onOpenWord:Y,onBack:b.length>1?Ce:void 0,backLabel:Z?.word,onPrev:()=>{I>0&&f(M=>[...M.slice(0,-1),y[I-1].id])},onNext:()=>{I>=0&&I<y.length-1&&f(M=>[...M.slice(0,-1),y[I+1].id])},hasPrev:I>0,hasNext:I>=0&&I<y.length-1,onToggleBookmark:ie,onMarkLearned:At}):null;return n==="learn"&&a?k.default.createElement("div",{className:"wa-root wa-root-focus"},k.default.createElement(ra,{atlas:a,progress:_,onExit:()=>s("today"),onRestart:Aa,onOpenWord:Y}),La):k.default.createElement("div",{className:"wa-root"},k.default.createElement("header",{className:"wa-header"},k.default.createElement("div",{className:"wa-brand"},k.default.createElement(Gr,null),k.default.createElement("div",{className:"wa-brand-text"},k.default.createElement("h1",null,"\u8BCD\u5149 ",k.default.createElement("span",null,"Word Atlas")),k.default.createElement("p",null,"7,298 \u96C5\u601D\u8BCD \xB7 \u4E00\u8BCD\u4E00\u753B \xB7 FSRS \u95F4\u9694\u590D\u4E60"))),k.default.createElement("div",{className:"wa-toolbar"},k.default.createElement("div",{className:"wa-search"},k.default.createElement(A,{name:"search",size:16}),k.default.createElement("input",{value:i,onChange:M=>{o(M.target.value),n!=="atlas"&&s("atlas")},placeholder:"\u641C\u7D22\u5355\u8BCD / \u4E2D\u6587\u91CA\u4E49","aria-label":"\u641C\u7D22\u5355\u8BCD\u6216\u91CA\u4E49",spellCheck:!1}),i?k.default.createElement("button",{type:"button",className:"wa-search-clear",onClick:()=>o(""),"aria-label":"\u6E05\u7A7A\u641C\u7D22"},k.default.createElement(A,{name:"close",size:14})):null),k.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost wa-accent-btn",onClick:Lt,title:"\u5207\u6362\u53D1\u97F3\u504F\u597D"},k.default.createElement(A,{name:"globe",size:15})," ",_.settings.accent==="uk"?"\u82F1\u97F3":"\u7F8E\u97F3"),k.default.createElement("button",{type:"button",className:"wa-icon-btn",onClick:()=>s("settings"),"aria-label":"\u8BBE\u7F6E\u4E0E\u5173\u4E8E"},k.default.createElement(A,{name:"info",size:18})))),k.default.createElement("nav",{className:"wa-tabs",role:"tablist","aria-label":"\u8BCD\u5149\u89C6\u56FE"},qr.map(M=>k.default.createElement("button",{key:M.id,type:"button",role:"tab","aria-selected":n===M.id,className:n===M.id?"is-on":"",onClick:()=>s(M.id)},k.default.createElement(A,{name:M.icon,size:16})," ",M.label,M.id==="atlas"&&a?k.default.createElement("span",{className:"wa-tab-count"},a.count.toLocaleString("en-US")):null,M.id==="review"&&$>0?k.default.createElement("span",{className:"wa-tab-badge"},$>999?"999+":$):null,M.id==="bookmarks"&&O.length>0?k.default.createElement("span",{className:"wa-tab-count"},O.length):null)),k.default.createElement("div",{className:"wa-tabs-meta"},k.default.createElement("span",null,"\u5DF2\u5B66 ",w.toLocaleString("en-US")),k.default.createElement("i",null),k.default.createElement("span",null,"\u8FDE\u7EED ",z," \u5929"))),k.default.createElement("main",{className:"wa-main"},t?k.default.createElement(de,{icon:"info",title:"\u8BCD\u5E93\u8FD8\u6CA1\u51C6\u5907\u597D"},k.default.createElement("p",null,t),k.default.createElement("p",{className:"wa-about-note"},"\u8BF7\u786E\u8BA4 word-atlas \u63D2\u4EF6\u5DF2\u542F\u7528\u3001Host \u8DEF\u7531 ",k.default.createElement("code",null,"/word-atlas/health")," \u53EF\u8BBF\u95EE\uFF1B\u5982\u679C\u63D2\u4EF6\u521A\u5B89\u88C5\uFF0C\u5237\u65B0\u9875\u9762\u518D\u8BD5\u3002")):a?n==="today"?k.default.createElement(ta,{atlas:a,progress:_,onStart:Aa,onOpenWord:Y,onOpenLevel:M=>{u(M),s("atlas")}}):n==="review"?k.default.createElement(aa,{atlas:a,progress:_,onExit:()=>s("today"),onOpenWord:Y}):n==="settings"?k.default.createElement(ia,{atlas:a,progress:_,onOpenWord:Y}):n==="bookmarks"?O.length===0?k.default.createElement(de,{icon:"heart",title:"\u751F\u8BCD\u672C\u8FD8\u662F\u7A7A\u7684"},k.default.createElement("p",null,"\u5728\u8BCD\u6761\u5361\u7247\u6216\u8BE6\u60C5\u91CC\u70B9 \u2665\uFF0C\u628A\u60F3\u53CD\u590D\u770B\u7684\u8BCD\u6536\u8FDB\u6765\u3002"),k.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary",onClick:()=>s("atlas")},"\u53BB\u56FE\u9274")):k.default.createElement(Le,{atlas:a,words:O,progress:_,onOpen:V,onToggleBookmark:ie}):k.default.createElement(k.default.Fragment,null,k.default.createElement("div",{className:"wa-filters"},k.default.createElement("div",{className:"wa-chips",role:"group","aria-label":"CEFR \u7EA7\u522B"},k.default.createElement("button",{type:"button",className:d==="all"?"is-on":"",onClick:()=>u("all")},"\u5168\u90E8\u7EA7\u522B"),a.cefr.map(M=>k.default.createElement("button",{type:"button",key:M,className:d===M?"is-on":"",onClick:()=>u(M)},M))),k.default.createElement("div",{className:"wa-topics",role:"group","aria-label":"\u8BDD\u9898"},k.default.createElement("button",{type:"button",className:c==="all"?"is-on":"",onClick:()=>m("all")},"\u5168\u90E8\u8BDD\u9898"),a.topics.map(M=>k.default.createElement("button",{type:"button",key:M.slug,className:c===M.slug?"is-on":"",onClick:()=>m(M.slug)},M.zh)))),k.default.createElement(Le,{atlas:a,words:C,progress:_,onOpen:V,onToggleBookmark:ie}),k.default.createElement("footer",{className:"wa-footer"},"\u8BCD\u5E93 \xB7 \u63D2\u753B \xB7 \u53D1\u97F3\u6765\u81EA"," ",k.default.createElement("a",{href:"https://github.com/designfuchen/word-atlas",target:"_blank",rel:"noreferrer"},"\u8BCD\u5149 \xB7 Word Atlas")," ","\xB7 CC BY 4.0")):k.default.createElement("div",{className:"wa-boot"},k.default.createElement(te,{label:"\u6B63\u5728\u52A0\u8F7D\u8BCD\u5149\u8BCD\u5E93\u2026"}))),La)}var Kr="word-atlas-dsh",$t="word-atlas";function Zr({size:a=18,active:e=!1}){return $a.default.createElement("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:e?"currentColor":"none",stroke:"currentColor",strokeWidth:1.6,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"},$a.default.createElement("path",{d:"M12 3.2l2.25 4.8 5.2.72-3.78 3.65.93 5.19L12 15.1l-4.6 2.46.93-5.19-3.78-3.65 5.2-.72z"}))}var Yr=["slots"],Vr={App:Ea,DetailModal:Re,ReviewView:aa,WordGrid:Le,Settings:ia,LookupText:re,Today:ta,Learn:ra,createLookupIndex:Na,candidateBases:ka,session:{buildSession:Ve,answerSession:Xe,advanceSession:$e,gradeFor:Je,sessionStats:Qe,todayPlan:Ee,distractors:Ye}};function Jr(a){if(typeof document<"u"){let e=document.createElement("style");e.setAttribute("data-plugin",Kr),e.textContent=Da,document.head.appendChild(e),a.effect(()=>()=>e.remove())}a.effect(()=>a.slots.inject("main",()=>a.slots.register({name:"main",key:$t},Ea))),a.effect(()=>a.slots.inject("sidebar.panellist",()=>a.slots.register({name:"sidebar.panellist",id:$t,order:22,label:()=>"\u8BCD\u5149 \xB7 Word Atlas"},Zr)))}

    })(module, exports, require);
    return module.exports;
  },
});
