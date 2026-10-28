/* 词光 · Word Atlas — generated client bundle (build from src/client). */
window.__ModuleLoader__.load({
  id: "word-atlas-dsh",
  factory: (require) => {
    const module = { exports: {} };
    const exports = module.exports;
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    (function (module, exports, require) {
var $n=Object.create;var _a=Object.defineProperty;var In=Object.getOwnPropertyDescriptor;var Dn=Object.getOwnPropertyNames;var Tn=Object.getPrototypeOf,jn=Object.prototype.hasOwnProperty;var Fn=(a,e)=>{for(var t in e)_a(a,t,{get:e[t],enumerable:!0})},er=(a,e,t,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of Dn(e))!jn.call(a,n)&&n!==t&&_a(a,n,{get:()=>e[n],enumerable:!(r=In(e,n))||r.enumerable});return a};var fe=(a,e,t)=>(t=a!=null?$n(Tn(a)):{},er(e||!a||!a.__esModule?_a(t,"default",{value:a,enumerable:!0}):t,a)),Pn=a=>er(_a({},"__esModule",{value:!0}),a);var ki={};Fn(ki,{__test:()=>yi,apply:()=>vi,inject:()=>xi});module.exports=Pn(ki);var Qt=fe(require("react"),1);var ar=`/* \u8BCD\u5149 \xB7 Word Atlas \u2014 plugin page styles.
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
  grid-template-columns: 100px minmax(0, 1fr) 100px;
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
    grid-template-columns: 72px minmax(0, 1fr) 72px;
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
`;var _=fe(require("react"),1);var ia="/word-atlas/atlas",R={img:1,uk:2,us:4,ex:8,ex2:16};async function tr(a){let e=await fetch(a,{cache:"no-store"});if(!e.ok)throw new Error(`\u8BCD\u5E93\u52A0\u8F7D\u5931\u8D25\uFF08HTTP ${e.status}\uFF09`);return e.json()}function On(a){let e=(a.topics||[]).map(([n,o])=>({slug:n,zh:o})),t=a.cefr||["A1","A2","B1","B2","C1","C2"],r=(a.words||[]).map((n,o)=>{let[i,s,l,p,d,u,w]=n;return{id:i,word:s,zh:l,ipa:p,cefr:t[d]||"",topic:e[u]?.slug||"",topicZh:e[u]?.zh||"",media:w,order:o}});return{id:a.id,name:a.name,count:a.count??r.length,examples:a.examples??0,chunk:a.chunk??100,topics:e,cefr:t,words:r,byId:new Map(r.map(n=>[n.id,n]))}}var Sa=null;function rr(){return Sa||(Sa=tr(`${ia}/index.json`).then(On).catch(a=>{throw Sa=null,a})),Sa}var Mt=new Map,Ca=new Map;function ye(a,e){let t=Mt.get(e);if(t)return Promise.resolve(t);let r=a.byId.get(e);if(!r)return Promise.reject(new Error(`\u627E\u4E0D\u5230\u8BCD\u6761 ${e}`));let n=Math.floor(r.order/a.chunk),o=Ca.get(n);return o||(o=tr(`${ia}/entries/${n}.json`).then(i=>{for(let s of i)Mt.set(s.id,s);Ca.delete(n)}).catch(i=>{throw Ca.delete(n),i}),Ca.set(n,o)),o.then(()=>{let i=Mt.get(e);if(!i)throw new Error(`\u627E\u4E0D\u5230\u8BCD\u6761 ${e}`);return i})}var sa=a=>`/word-atlas/brand/${a}`,nr=a=>`${ia}/thumb/${a}.webp`,Aa=a=>`${ia}/img/${a}.webp`,ne=(a,e)=>`${ia}/audio/${a}/${e}.mp3`;function Un(a){return a&&(typeof a.media=="number"?a.media:a.m)||0}function te(a,e){return(Un(a)&e)!==0}var or="/word-atlas/readings/index.json",ir=a=>`/word-atlas/readings/${a}.json`,sr="/word-atlas/books/index.json",lr=(a,e)=>`/word-atlas/books/${a}/ch-${e}.json`,Ve=a=>`/word-atlas/read-assets/${a.replace(/^\/+/,"")}`;var cr=require("react"),ur="/word-atlas/api/progress",wr="word-atlas-dsh:progress:v1",Ct={accent:"uk",dailyNew:10,retention:.9,startLevel:0,spell:!0,autoplay:!0};function mr(){return{v:1,cards:{},bookmarks:[],days:{},mistakes:[],typing:[],readings:{},session:null,settings:{...Ct}}}function Gn(a){return!a||typeof a!="object"||Array.isArray(a)||typeof a.id!="string"||!Array.isArray(a.steps)||!Array.isArray(a.newIds)||!Array.isArray(a.reviewIds)||!Number.isFinite(a.index)||a.index<0||!a.graded||typeof a.graded!="object"||Array.isArray(a.graded)?null:a}function gr(a){return!a||typeof a!="object"||Array.isArray(a)||a.v!==1?null:{v:1,cards:a.cards&&typeof a.cards=="object"&&!Array.isArray(a.cards)?a.cards:{},bookmarks:Array.isArray(a.bookmarks)?a.bookmarks.filter(e=>typeof e=="string"):[],days:a.days&&typeof a.days=="object"&&!Array.isArray(a.days)?a.days:{},mistakes:Array.isArray(a.mistakes)?a.mistakes.filter(e=>typeof e=="string").slice(0,300):[],typing:Array.isArray(a.typing)?a.typing.slice(-500):[],readings:a.readings&&typeof a.readings=="object"&&!Array.isArray(a.readings)?a.readings:{},session:Gn(a.session),settings:{...Ct,...a.settings&&typeof a.settings=="object"?a.settings:{}},...typeof a.savedAt=="number"?{savedAt:a.savedAt}:{}}}function Wn(){try{let a=localStorage.getItem(wr);return a?gr(JSON.parse(a)):null}catch{return null}}function La(){try{localStorage.setItem(wr,JSON.stringify(ue))}catch{}}var ue=Wn()||mr(),_t=new Set,St=null,dr=!1;function Ea(){for(let a of _t)a()}function fr(){clearTimeout(St),St=setTimeout($a,800)}function pr(){return ue}function Hn(a){return _t.add(a),()=>_t.delete(a)}function hr(){return(0,cr.useSyncExternalStore)(Hn,pr,pr)}function le(a){let e=a(ue);!e||e===ue||(ue={...e,v:1,savedAt:Date.now()},La(),Ea(),fr())}function $a(){if(clearTimeout(St),!ue.savedAt)return;let a=JSON.stringify(ue);fetch(ur,{method:"POST",headers:{"Content-Type":"application/json"},body:a}).catch(()=>{})}async function br(){if(!dr){dr=!0;try{let a=await fetch(ur,{cache:"no-store"});if(!a.ok)return;let e=gr(await a.json());if(!e)return;let t=e.savedAt||0,r=ue.savedAt||0;t>r?(ue=e,La(),Ea()):r>t&&fr()}catch{}}}function Ye(a=new Date){return`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,"0")}-${String(a.getDate()).padStart(2,"0")}`}function Ia(a,{newWords:e=0,reviewed:t=0,correct:r=0}={}){let n=Ye(),o=a[n]||{n:0,r:0,c:0};return{...a,[n]:{n:o.n+e,r:o.r+t,c:o.c+r}}}function Xe(a,e=new Date){let t=0,r=new Date(e);for(;;){let n=a[Ye(r)];if(!n||(n.n||0)+(n.r||0)===0){if(t===0&&Ye(r)===Ye(e)){r.setDate(r.getDate()-1);continue}break}t+=1,r.setDate(r.getDate()-1)}return t}function xr(a,e){let t=a.bookmarks.includes(e);return{...a,bookmarks:t?a.bookmarks.filter(r=>r!==e):[e,...a.bookmarks]}}var yr="word-atlas-open";function Fe(a){return!!a&&typeof a=="object"&&!Array.isArray(a)}function Ae(a,e=0,t=1/0){return typeof a=="number"&&Number.isFinite(a)&&a>=e&&a<=t}function qn(a){return Fe(a)&&Ae(a.due)&&Ae(a.s)&&Ae(a.d,0,11)&&Ae(a.el)&&Ae(a.sd)&&Ae(a.ls)&&Ae(a.reps)&&Ae(a.lapses)&&[0,1,2,3].includes(a.st)&&(a.last===void 0||Ae(a.last))&&Ae(a.seen)}function vr(){return $a(),JSON.stringify({app:"word-atlas",version:2,exported:new Date().toISOString(),progress:{version:2,datasetId:yr,cards:ue.cards,bookmarks:ue.bookmarks,days:ue.days,typing:ue.typing,readings:ue.readings,session:null,mistakes:ue.mistakes},settings:ue.settings},null,1)}function kr(a){let e;try{e=JSON.parse(a)}catch{return{ok:!1,error:"\u6587\u4EF6\u4E0D\u662F\u6709\u6548\u7684 JSON\u3002"}}if(!Fe(e)||e.app!=="word-atlas"||e.version!==2||!Fe(e.progress))return{ok:!1,error:"\u8FD9\u4E0D\u662F\u8BCD\u5149\u7684\u5B66\u4E60\u5907\u4EFD\u3002"};let t=e.progress;if(typeof t.datasetId=="string"&&t.datasetId!==yr)return{ok:!1,error:"\u5907\u4EFD\u6765\u81EA\u53E6\u4E00\u4E2A\u8BCD\u5E93\uFF0C\u8BF7\u4F7F\u7528\u8BCD\u5149\u5F00\u653E\u8BCD\u5E93\u7684\u5907\u4EFD\u3002"};let r={};if(Fe(t.cards))for(let[d,u]of Object.entries(t.cards))qn(u)&&(r[d]=u);let n=Array.isArray(t.bookmarks)?t.bookmarks.filter(d=>typeof d=="string").slice(0,2e4):[],o={};if(Fe(t.days))for(let[d,u]of Object.entries(t.days)){if(!/^\d{4}-\d{2}-\d{2}$/.test(d)||!Fe(u))continue;let w=Number(u.n)||0,c=Number(u.r)||0,b=Number(u.c)||0;o[d]={n:w,r:c,c:b}}let i=Array.isArray(t.mistakes)?t.mistakes.filter(d=>typeof d=="string").slice(0,300):[],s=Array.isArray(t.typing)?t.typing.slice(-500):[],l=Fe(t.readings)?t.readings:{},p={...Ct,...Fe(e.settings)?e.settings:{}};return ue={v:1,cards:r,bookmarks:n,days:o,mistakes:i,typing:s,readings:l,settings:p,savedAt:Date.now()},La(),Ea(),$a(),{ok:!0,cards:Object.keys(r).length}}function Nr(){ue={...mr(),savedAt:Date.now()},La(),Ea(),$a()}var Et=class a extends Error{constructor(e="FSRS Error"){super(e),this.name="FSRSError",Error.captureStackTrace?.(this,a)}},de=class a extends Et{constructor(e){super(e),this.name="FSRSValidationError",Error.captureStackTrace?.(this,a)}},Y=(a=>(a[a.New=0]="New",a[a.Learning=1]="Learning",a[a.Review=2]="Review",a[a.Relearning=3]="Relearning",a))(Y||{}),E=(a=>(a[a.Manual=0]="Manual",a[a.Again=1]="Again",a[a.Hard=2]="Hard",a[a.Good=3]="Good",a[a.Easy=4]="Easy",a))(E||{}),re=class a{static card(e){return{...e,state:a.state(e.state),due:a.time(e.due),last_review:e.last_review?a.time(e.last_review):void 0}}static rating(e){if(typeof e=="string"){let t=e.charAt(0).toUpperCase(),r=e.slice(1).toLowerCase(),n=E[`${t}${r}`];if(n===void 0)throw new de(`Invalid rating:[${e}]`);return n}else if(typeof e=="number")return e;throw new de(`Invalid rating:[${e}]`)}static state(e){if(typeof e=="string"){let t=e.charAt(0).toUpperCase(),r=e.slice(1).toLowerCase(),n=Y[`${t}${r}`];if(n===void 0)throw new de(`Invalid state:[${e}]`);return n}else if(typeof e=="number")return e;throw new de(`Invalid state:[${e}]`)}static time(e){if(e instanceof Date)return e;let t=new Date(e);if(typeof e=="object"&&e!==null&&!Number.isNaN(Date.parse(e)||+t))return t;if(typeof e=="string"){let r=Date.parse(e);if(Number.isNaN(r))throw new de(`Invalid date:[${e}]`);return new Date(r)}else if(typeof e=="number")return new Date(e);throw new de(`Invalid date:[${e}]`)}static review_log(e){return{...e,due:a.time(e.due),rating:a.rating(e.rating),state:a.state(e.state),review:a.time(e.review)}}};Date.prototype.scheduler=function(a,e){return Ne(this,a,e)};Date.prototype.diff=function(a,e){return Je(this,a,e)};Date.prototype.format=function(){return Kn(this)};Date.prototype.dueFormat=function(a,e,t){return Zn(this,a,e,t)};function Ne(a,e,t){return new Date(t?re.time(a).getTime()+e*24*60*60*1e3:re.time(a).getTime()+e*60*1e3)}function Je(a,e,t){if(!a||!e)throw new de("Invalid date");let r=re.time(a).getTime()-re.time(e).getTime(),n=0;switch(t){case"days":n=Math.floor(r/(1440*60*1e3));break;case"minutes":n=Math.floor(r/(60*1e3));break}return n}function Kn(a){let e=re.time(a),t=e.getFullYear(),r=e.getMonth()+1,n=e.getDate(),o=e.getHours(),i=e.getMinutes(),s=e.getSeconds();return`${t}-${la(r)}-${la(n)} ${la(o)}:${la(i)}:${la(s)}`}function la(a){return a<10?`0${a}`:`${a}`}var At=[60,60,24,31,12],Lt=["second","min","hour","day","month","year"];function Zn(a,e,t,r=Lt){a=re.time(a),e=re.time(e),r.length!==Lt.length&&(r=Lt);let n=a.getTime()-e.getTime(),o=0;for(n/=1e3,o=0;o<At.length&&!(n<At[o]);o++)n/=At[o];return`${Math.floor(n)}${t?r[o]:""}`}var Vn=Object.freeze([E.Again,E.Hard,E.Good,E.Easy]),Yn=[{start:2.5,end:7,factor:.15},{start:7,end:20,factor:.1},{start:20,end:1/0,factor:.05}];function Xn(a,e,t){let r=1;for(let i of Yn)r+=i.factor*Math.max(Math.min(a,i.end)-i.start,0);a=Math.min(a,t);let n=Math.max(2,Math.round(a-r)),o=Math.min(Math.round(a+r),t);return a>e&&(n=Math.max(n,e+1)),n=Math.min(n,o),{min_ivl:n,max_ivl:o}}function ze(a,e,t){return Math.min(Math.max(a,e),t)}function ke(a,e){let t=10**e;return Math.round(a*t)/t}function Jn(a,e){let t=Date.UTC(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate()),r=Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate());return Math.floor((r-t)/864e5)}var Qn=a=>{let e=a.slice(-1),t=parseInt(a.slice(0,-1),10);if(Number.isNaN(t)||!Number.isFinite(t)||t<0)throw new de(`Invalid step value: ${a}`);switch(e){case"m":return t;case"h":return t*60;case"d":return t*1440;default:throw new de(`Invalid step unit: ${a}, expected m/h/d`)}},Rn=(a,e,t)=>{let r=e===Y.Relearning||e===Y.Review?a.relearning_steps:a.learning_steps,n=r.length;if(n===0||t>=n)return{};let o=r[0],i=Qn,s=()=>i(o),l=()=>{if(n===1)return Math.round(i(o)*1.5);let c=r[1];return Math.round((i(o)+i(c))/2)},p=c=>c<0||c>=n?null:r[c],d=c=>i(c),u={},w=p(Math.max(0,t));if(e===Y.Review)return u[E.Again]={scheduled_minutes:i(w),next_step:0},u;{u[E.Again]={scheduled_minutes:s(),next_step:0},u[E.Hard]={scheduled_minutes:l(),next_step:t};let c=p(t+1);if(c){let b=d(c);b&&(u[E.Good]={scheduled_minutes:Math.round(b),next_step:t+1})}}return u};function eo(){let a=this.review_time.getTime(),e=this.current.reps,t=this.current.difficulty*this.current.stability;return`${a}_${e}_${t}`}var Pa=(a=>(a.SCHEDULER="Scheduler",a.LEARNING_STEPS="LearningSteps",a.SEED="Seed",a))(Pa||{}),Ta=class{last;current;review_time;next=new Map;algorithm;strategies;elapsed_days=0;constructor(e,t,r,n){this.algorithm=r,this.last=re.card(e),this.current=re.card(e),this.review_time=re.time(t),this.strategies=n,this.init()}checkGrade(e){if(!Number.isFinite(e)||e<1||e>4)throw new de(`Invalid grade "${e}",expected 1-4`)}init(){let{state:e,last_review:t}=this.current,r=0;e!==Y.New&&t&&(r=Jn(t,this.review_time)),this.current.last_review=this.review_time,this.elapsed_days=r,this.current.elapsed_days=r,this.current.reps+=1;let n=eo;if(this.strategies){let o=this.strategies.get(Pa.SEED);o&&(n=o)}this.algorithm.seed=n.call(this)}preview(){return{[E.Again]:this.review(E.Again),[E.Hard]:this.review(E.Hard),[E.Good]:this.review(E.Good),[E.Easy]:this.review(E.Easy),[Symbol.iterator]:this.previewIterator.bind(this)}}*previewIterator(){for(let e of Vn)yield this.review(e)}review(e){let{state:t}=this.last,r;switch(this.checkGrade(e),t){case Y.New:r=this.newState(e);break;case Y.Learning:case Y.Relearning:r=this.learningState(e);break;case Y.Review:r=this.reviewState(e);break}return r}buildLog(e){let{last_review:t,due:r,elapsed_days:n}=this.last;return{rating:e,state:this.current.state,due:t||r,stability:this.current.stability,difficulty:this.current.difficulty,elapsed_days:this.elapsed_days,last_elapsed_days:n,scheduled_days:this.current.scheduled_days,learning_steps:this.current.learning_steps,review:this.review_time}}},$t=class{c;s0;s1;s2;constructor(e){let t=ao();this.c=1,this.s0=t(" "),this.s1=t(" "),this.s2=t(" "),e==null&&(e=Date.now()),this.s0-=t(e),this.s0<0&&(this.s0+=1),this.s1-=t(e),this.s1<0&&(this.s1+=1),this.s2-=t(e),this.s2<0&&(this.s2+=1)}next(){let e=2091639*this.s0+this.c*23283064365386963e-26;return this.s0=this.s1,this.s1=this.s2,this.c=e|0,this.s2=e-this.c,this.s2}set state(e){this.c=e.c,this.s0=e.s0,this.s1=e.s1,this.s2=e.s2}get state(){return{c:this.c,s0:this.s0,s1:this.s1,s2:this.s2}}};function ao(){let a=4022871197;return function(t){t=String(t);for(let r=0;r<t.length;r++){a+=t.charCodeAt(r);let n=.02519603282416938*a;a=n>>>0,n-=a,n*=a,a=n>>>0,n-=a,a+=n*4294967296}return(a>>>0)*23283064365386963e-26}}function to(a){let e=new $t(a),t=()=>e.next();return t.int32=()=>e.next()*4294967296|0,t.double=()=>t()+(t()*2097152|0)*11102230246251565e-32,t.state=()=>e.state,t.importState=r=>(e.state=r,t),t}var ro="5.4.2",no=.9,oo=36500,io=!1,Ba=!0,so=Object.freeze(["1m","10m"]),lo=Object.freeze(["10m"]),Ci=`v${ro} using FSRS-6.0`,$e=.001;var Da=100,zr=.5,po=.1542,Mr=Object.freeze([.212,1.2931,2.3065,8.2956,6.4133,.8334,3.0194,.001,1.8722,.1666,.796,1.4835,.0614,.2629,1.6483,.6014,1.8729,.5425,.0912,.0658,po]),_r=2,co=(a,e=Ba)=>[[$e,Da],[$e,Da],[$e,Da],[$e,Da],[1,10],[.001,4],[.001,4],[.001,.75],[0,4.5],[0,.8],[.001,3.5],[.001,5],[.001,.25],[.001,.9],[0,4],[0,1],[1,6],[0,a],[0,a],[e?.01:0,.8],[.1,.8]],Qe=(a,e,t=Ba)=>{let r=co(_r,t).slice(0,a.length);if(Math.max(0,e)>1){let n=ze(a[11]||0,r[11][0],r[11][1]),o=ze(a[13]||0,r[13][0],r[13][1]),i=ze(a[14]||0,r[14][0],r[14][1]),s=-(Math.log(n)+Math.log(Math.pow(2,o)-1)+i*.3)/e,l=ze(ke(Math.sqrt(Math.max(s,0)),8),.01,_r);r[17]&&(r[17]=[r[17][0],l]),r[18]&&(r[18]=[r[18][0],l])}return r.map(([n,o],i)=>ze(a[i]||0,n,o))};var Ft=(a,e=0,t=Ba)=>{if(a===void 0)return[...Mr];switch(a.length){case 21:return Qe(Array.from(a),e,t);case 19:return console.debug("[FSRS-6]auto fill w from 19 to 21 length"),Qe(Array.from(a),e,t).concat([0,zr]);case 17:{let r=Qe(Array.from(a),e,t);return r[4]=+(r[5]*2+r[4]).toFixed(8),r[5]=+(Math.log(r[5]*3+1)/3).toFixed(8),r[6]=+(r[6]+.5).toFixed(8),console.debug("[FSRS-6]auto fill w from 17 to 21 length"),r.concat([0,0,0,zr])}default:return console.warn("[FSRS]Invalid parameters length, using default parameters"),[...Mr]}},uo=a=>{let e=Array.isArray(a?.learning_steps)?a.learning_steps:so,t=Array.isArray(a?.relearning_steps)?a.relearning_steps:lo,r=a?.enable_short_term??Ba,n=Ft(a?.w,t.length,r);return{request_retention:a?.request_retention||no,maximum_interval:a?.maximum_interval||oo,w:n,enable_fuzz:a?.enable_fuzz??io,enable_short_term:r,learning_steps:e,relearning_steps:t}};function Re(a,e){let t={due:a?re.time(a):new Date,stability:0,difficulty:0,elapsed_days:0,scheduled_days:0,reps:0,lapses:0,learning_steps:0,state:Y.New,last_review:void 0};return e&&typeof e=="function"?e(t):t}var Sr=a=>{let e=typeof a=="number"?-a:-a[20],t=Math.exp(Math.pow(e,-1)*Math.log(.9))-1;return{decay:e,factor:ke(t,8)}};function It(a,e,t){let{decay:r,factor:n}=Sr(a);return ke(Math.pow(1+n*e/t,r),8)}var Dt=class{param;intervalModifier;_seed;constructor(e){this.param=new Proxy(this.prepare_parameters(e),this.params_handler_proxy()),this.intervalModifier=this.calculate_interval_modifier(this.param.request_retention),this.forgetting_curve=It.bind(this,this.param.w)}get interval_modifier(){return this.intervalModifier}set seed(e){this._seed=e}calculate_interval_modifier(e){if(e<=0||e>1)throw new de("Requested retention rate should be in the range (0,1]");let{decay:t,factor:r}=Sr(this.param.w);return ke((Math.pow(e,1/t)-1)/r,8)}get parameters(){return this.param}set parameters(e){this.update_parameters(e)}params_handler_proxy(){let e=this;return{set:function(t,r,n){return r==="request_retention"&&Number.isFinite(n)?e.intervalModifier=e.calculate_interval_modifier(Number(n)):r==="w"&&(n=Ft(n,t.relearning_steps.length,t.enable_short_term),n=Qe(Array.from(n),t.relearning_steps.length,t.enable_short_term),e.forgetting_curve=It.bind(this,n),e.intervalModifier=e.calculate_interval_modifier(Number(t.request_retention))),Reflect.set(t,r,n),!0}}}update_parameters(e){let t=this.prepare_parameters(e);for(let r in t){let n=r;this.param[n]=t[n]}}prepare_parameters=e=>{let t=uo(e);return t.w=Qe(Array.from(t.w),t.relearning_steps.length,t.enable_short_term),t};init_stability(e){return Math.max(this.param.w[e-1],.1)}init_difficulty(e){let t=this.param.w,r=t[4]-Math.exp((e-1)*t[5])+1;return ke(r,8)}apply_fuzz(e,t){if(!this.param.enable_fuzz||e<2.5)return Math.round(e);let n=to(this._seed)(),{min_ivl:o,max_ivl:i}=Xn(e,t,this.param.maximum_interval);return Math.floor(n*(i-o+1)+o)}next_interval(e,t){let r=Math.min(Math.max(1,Math.round(e*this.intervalModifier)),this.param.maximum_interval);return this.apply_fuzz(r,t)}linear_damping(e,t){return ke(e*(10-t)/9,8)}next_difficulty(e,t){let r=-this.param.w[6]*(t-3),n=e+this.linear_damping(r,e);return ze(this.mean_reversion(this.init_difficulty(E.Easy),n),1,10)}mean_reversion(e,t){let r=this.param.w;return ke(r[7]*e+(1-r[7])*t,8)}next_recall_stability(e,t,r,n){let o=this.param.w,i=E.Hard===n?o[15]:1,s=E.Easy===n?o[16]:1;return ke(ze(t*(1+Math.exp(o[8])*(11-e)*Math.pow(t,-o[9])*(Math.exp((1-r)*o[10])-1)*i*s),$e,36500),8)}next_forget_stability(e,t,r){let n=this.param.w;return ke(ze(n[11]*Math.pow(e,-n[12])*(Math.pow(t+1,n[13])-1)*Math.exp((1-r)*n[14]),$e,36500),8)}next_short_term_stability(e,t){let r=this.param.w,n=Math.pow(e,-r[19])*Math.exp(r[17]*(t-3+r[18])),o=t>=E.Hard?Math.max(n,1):n;return ke(ze(e*o,$e,36500),8)}forgetting_curve;next_state(e,t,r,n){let{difficulty:o,stability:i}=e??{difficulty:0,stability:0};if(t<0)throw new de(`Invalid delta_t "${t}"`);if(r<0||r>4)throw new de(`Invalid grade "${r}"`);if(o===0&&i===0)return{difficulty:ze(this.init_difficulty(r),1,10),stability:this.init_stability(r)};if(r===0)return{difficulty:o,stability:i};if(o<1||i<$e)throw new de(`Invalid memory state { difficulty: ${o}, stability: ${i} }`);let s=this.param.w;n=typeof n=="number"?n:this.forgetting_curve(t,i);let l;if(t===0&&this.param.enable_short_term)l=this.next_short_term_stability(i,r);else if(r===1){let d=this.next_forget_stability(o,i,n),[u,w]=[0,0];this.param.enable_short_term&&(u=s[17],w=s[18]);let c=i/Math.exp(u*w);l=ze(ke(c,8),$e,d)}else l=this.next_recall_stability(o,i,n,r);return{difficulty:this.next_difficulty(o,r),stability:l}}},ja=class extends Ta{learningStepsStrategy;constructor(e,t,r,n){super(e,t,r,n);let o=Rn;if(this.strategies){let i=this.strategies.get(Pa.LEARNING_STEPS);i&&(o=i)}this.learningStepsStrategy=o}getLearningInfo(e,t){let r=this.algorithm.parameters;e.learning_steps=e.learning_steps||0;let n=this.learningStepsStrategy(r,e.state,e.learning_steps),o=Math.max(0,n[t]?.scheduled_minutes??0),i=Math.max(0,n[t]?.next_step??0);return{scheduled_minutes:o,next_steps:i}}applyLearningSteps(e,t,r){let{scheduled_minutes:n,next_steps:o}=this.getLearningInfo(this.current,t);if(n>0&&n<1440)e.learning_steps=o,e.scheduled_days=0,e.state=r,e.due=Ne(this.review_time,Math.round(n),!1);else if(e.state=Y.Review,n>=1440)e.learning_steps=o,e.due=Ne(this.review_time,Math.round(n),!1),e.scheduled_days=Math.floor(n/1440);else{e.learning_steps=0;let i=this.algorithm.next_interval(e.stability,this.elapsed_days);e.scheduled_days=i,e.due=Ne(this.review_time,i,!0)}}newState(e){let t=this.next.get(e);if(t)return t;let r=this.next_ds(this.elapsed_days,e);this.applyLearningSteps(r,e,Y.Learning);let n={card:r,log:this.buildLog(e)};return this.next.set(e,n),n}learningState(e){let t=this.next.get(e);if(t)return t;let r=this.next_ds(this.elapsed_days,e);this.applyLearningSteps(r,e,this.last.state);let n={card:r,log:this.buildLog(e)};return this.next.set(e,n),n}reviewState(e){let t=this.next.get(e);if(t)return t;let r=this.elapsed_days,n=this.algorithm.forgetting_curve(r,this.current.stability),o=this.next_ds(r,E.Again,n),i=this.next_ds(r,E.Hard,n),s=this.next_ds(r,E.Good,n),l=this.next_ds(r,E.Easy,n);this.next_interval(i,s,l,r),this.next_state(i,s,l),this.applyLearningSteps(o,E.Again,Y.Relearning),o.lapses+=1;let p={card:o,log:this.buildLog(E.Again)},d={card:i,log:super.buildLog(E.Hard)},u={card:s,log:super.buildLog(E.Good)},w={card:l,log:super.buildLog(E.Easy)};return this.next.set(E.Again,p),this.next.set(E.Hard,d),this.next.set(E.Good,u),this.next.set(E.Easy,w),this.next.get(e)}next_ds(e,t,r){let n=this.algorithm.next_state({difficulty:this.current.difficulty,stability:this.current.stability},e,t,r),o=re.card(this.current);return o.difficulty=n.difficulty,o.stability=n.stability,o}next_interval(e,t,r,n){let o,i;o=this.algorithm.next_interval(e.stability,n),i=this.algorithm.next_interval(t.stability,n),o=Math.min(o,i),i=Math.max(i,o+1);let s=Math.max(this.algorithm.next_interval(r.stability,n),i+1);e.scheduled_days=o,e.due=Ne(this.review_time,o,!0),t.scheduled_days=i,t.due=Ne(this.review_time,i,!0),r.scheduled_days=s,r.due=Ne(this.review_time,s,!0)}next_state(e,t,r){e.state=Y.Review,e.learning_steps=0,t.state=Y.Review,t.learning_steps=0,r.state=Y.Review,r.learning_steps=0}},Fa=class extends Ta{newState(e){let t=this.next.get(e);if(t)return t;this.current.scheduled_days=0,this.current.elapsed_days=0;let r=0,n=this.next_ds(r,E.Again),o=this.next_ds(r,E.Hard),i=this.next_ds(r,E.Good),s=this.next_ds(r,E.Easy);return this.next_interval(n,o,i,s,r),this.next_state(n,o,i,s),this.update_next(n,o,i,s),this.next.get(e)}next_ds(e,t,r){let n=this.algorithm.next_state({difficulty:this.current.difficulty,stability:this.current.stability},e,t,r),o=re.card(this.current);return o.difficulty=n.difficulty,o.stability=n.stability,o}learningState(e){return this.reviewState(e)}reviewState(e){let t=this.next.get(e);if(t)return t;let r=this.elapsed_days,n=this.algorithm.forgetting_curve(r,this.current.stability),o=this.next_ds(r,E.Again,n),i=this.next_ds(r,E.Hard,n),s=this.next_ds(r,E.Good,n),l=this.next_ds(r,E.Easy,n);return this.next_interval(o,i,s,l,r),this.next_state(o,i,s,l),o.lapses+=1,this.update_next(o,i,s,l),this.next.get(e)}next_interval(e,t,r,n,o){let i,s,l,p;i=this.algorithm.next_interval(e.stability,o),s=this.algorithm.next_interval(t.stability,o),l=this.algorithm.next_interval(r.stability,o),p=this.algorithm.next_interval(n.stability,o),i=Math.min(i,s),s=Math.max(s,i+1),l=Math.max(l,s+1),p=Math.max(p,l+1),e.scheduled_days=i,e.due=Ne(this.review_time,i,!0),t.scheduled_days=s,t.due=Ne(this.review_time,s,!0),r.scheduled_days=l,r.due=Ne(this.review_time,l,!0),n.scheduled_days=p,n.due=Ne(this.review_time,p,!0)}next_state(e,t,r,n){e.state=Y.Review,e.learning_steps=0,t.state=Y.Review,t.learning_steps=0,r.state=Y.Review,r.learning_steps=0,n.state=Y.Review,n.learning_steps=0}update_next(e,t,r,n){let o={card:e,log:this.buildLog(E.Again)},i={card:t,log:super.buildLog(E.Hard)},s={card:r,log:super.buildLog(E.Good)},l={card:n,log:super.buildLog(E.Easy)};this.next.set(E.Again,o),this.next.set(E.Hard,i),this.next.set(E.Good,s),this.next.set(E.Easy,l)}},Tt=class{fsrs;constructor(e){this.fsrs=e}replay(e,t,r){return this.fsrs.next(e,t,r)}handleManualRating(e,t,r,n,o,i,s){if(typeof t>"u")throw new de("reschedule: state is required for manual rating");let l,p;if(t===Y.New)l={rating:E.Manual,state:t,due:s??r,stability:e.stability,difficulty:e.difficulty,elapsed_days:n,last_elapsed_days:e.elapsed_days,scheduled_days:e.scheduled_days,learning_steps:e.learning_steps,review:r},p=Re(r),p.last_review=r;else{if(typeof s>"u")throw new de("reschedule: due is required for manual rating");let d=Je(s,r,"days");l={rating:E.Manual,state:e.state,due:e.last_review||e.due,stability:e.stability,difficulty:e.difficulty,elapsed_days:n,last_elapsed_days:e.elapsed_days,scheduled_days:e.scheduled_days,learning_steps:e.learning_steps,review:r},p={...e,state:t,due:s,last_review:r,stability:o||e.stability,difficulty:i||e.difficulty,elapsed_days:n,scheduled_days:d,reps:e.reps+1}}return{card:p,log:l}}reschedule(e,t){let r=[],n=Re(e.due);for(let o of t){let i;if(o.review=re.time(o.review),o.rating===E.Manual){let s=0;n.state!==Y.New&&n.last_review&&(s=Je(o.review,n.last_review,"days")),i=this.handleManualRating(n,o.state,o.review,s,o.stability,o.difficulty,o.due?re.time(o.due):void 0)}else i=this.replay(n,o.review,o.rating);r.push(i),n=i.card}return r}calculateManualRecord(e,t,r,n){if(!r)return null;let{card:o,log:i}=r,s=re.card(e);return s.due.getTime()===o.due.getTime()?null:(s.scheduled_days=Je(o.due,s.due,"days"),this.handleManualRating(s,o.state,re.time(t),i.elapsed_days,n?o.stability:void 0,n?o.difficulty:void 0,o.due))}};function da(a,e){return typeof e=="function"?e(a):a}var jt=class extends Dt{strategyHandler=new Map;Scheduler;constructor(e){super(e);let{enable_short_term:t}=this.parameters;this.Scheduler=t?ja:Fa}params_handler_proxy(){let e=this;return{set:function(t,r,n){return r==="request_retention"&&Number.isFinite(n)?e.intervalModifier=e.calculate_interval_modifier(Number(n)):r==="enable_short_term"?e.Scheduler=n===!0?ja:Fa:r==="w"&&(n=Ft(n,t.relearning_steps.length,t.enable_short_term),n=Qe(Array.from(n),t.relearning_steps.length,t.enable_short_term),e.forgetting_curve=It.bind(this,n),e.intervalModifier=e.calculate_interval_modifier(Number(t.request_retention))),Reflect.set(t,r,n),!0}}}useStrategy(e,t){return this.strategyHandler.set(e,t),this}clearStrategy(e){return e?this.strategyHandler.delete(e):this.strategyHandler.clear(),this}getScheduler(e,t){let n=this.strategyHandler.get(Pa.SCHEDULER)||this.Scheduler;return new n(e,t,this,this.strategyHandler)}repeat(e,t,r){let o=this.getScheduler(e,t).preview();return da(o,r)}next(e,t,r,n){let o=this.getScheduler(e,t),i=re.rating(r);if(i===E.Manual)throw new de("Cannot review a manual rating");let s=o.review(i);return da(s,n)}get_retrievability(e,t,r=!0){let n=re.card(e);t=t?re.time(t):new Date;let o=n.state!==Y.New?Math.max(Je(t,n.last_review,"days"),0):0,i=n.state!==Y.New?this.forgetting_curve(o,+n.stability.toFixed(8)):0;return r?`${(i*100).toFixed(2)}%`:i}rollback(e,t,r){let n=re.card(e),o=re.review_log(t);if(o.rating===E.Manual)throw new de("Cannot rollback a manual rating");let i,s,l;switch(o.state){case Y.New:i=o.due,s=void 0,l=0;break;case Y.Learning:case Y.Relearning:case Y.Review:i=o.review,s=o.due,l=n.lapses-(o.rating===E.Again&&o.state===Y.Review?1:0);break}let p={...n,due:i,stability:o.stability,difficulty:o.difficulty,elapsed_days:o.last_elapsed_days,scheduled_days:o.scheduled_days,reps:Math.max(0,n.reps-1),lapses:Math.max(0,l),learning_steps:o.learning_steps,state:o.state,last_review:s};return da(p,r)}forget(e,t,r=!1,n){let o=re.card(e);t=re.time(t);let i=o.state===Y.New?0:Je(t,o.due,"days"),s={rating:E.Manual,state:o.state,due:o.due,stability:o.stability,difficulty:o.difficulty,elapsed_days:0,last_elapsed_days:o.elapsed_days,scheduled_days:i,learning_steps:o.learning_steps,review:t},p={card:{...o,due:t,stability:0,difficulty:0,elapsed_days:0,scheduled_days:0,reps:r?0:o.reps,lapses:r?0:o.lapses,learning_steps:0,state:Y.New,last_review:o.last_review},log:s};return da(p,n)}reschedule(e,t=[],r={}){let{recordLogHandler:n,reviewsOrderBy:o,skipManual:i=!0,now:s=new Date,update_memory_state:l=!1}=r;o&&typeof o=="function"&&t.sort(o),i&&(t=t.filter(b=>b.rating!==E.Manual));let p=new Tt(this),d=p.reschedule(r.first_card||Re(),t),u=d.length,w=re.card(e),c=p.calculateManualRecord(w,s,u?d[u-1]:void 0,l);return{collections:typeof n=="function"?d.map(n):d,reschedule_item:c?da(c,n):null}}},Cr=a=>new jt(a||{});var Ar=new Map;function Lr(a){let e=Math.round(a*1e3)/1e3,t=Ar.get(e);return t||(t=Cr({request_retention:e,enable_fuzz:!0,enable_short_term:!0,learning_steps:["1m","10m"],relearning_steps:["10m"]}),Ar.set(e,t)),t}function Er(a){return{due:new Date(a.due),stability:a.s,difficulty:a.d,elapsed_days:a.el,scheduled_days:a.sd,learning_steps:a.ls,reps:a.reps,lapses:a.lapses,state:a.st,last_review:a.last?new Date(a.last):void 0}}function wo(a,e){return{due:a.due.getTime(),s:a.stability,d:a.difficulty,el:a.elapsed_days,sd:a.scheduled_days,ls:a.learning_steps,reps:a.reps,lapses:a.lapses,st:a.state,last:a.last_review?a.last_review.getTime():void 0,seen:e}}var Pt=[E.Again,E.Hard,E.Good,E.Easy],$r={[E.Again]:"\u91CD\u6765",[E.Hard]:"\u56F0\u96BE",[E.Good]:"\u826F\u597D",[E.Easy]:"\u7B80\u5355"};function ea(a,e,t=Date.now(),r=.9){let n=a?Er(a):Re(new Date(t)),o=Lr(r).next(n,new Date(t),e).card;return wo(o,a?.seen??t)}function Ir(a,e=Date.now(),t=.9){let r=a?Er(a):Re(new Date(e)),n=Lr(t).repeat(r,new Date(e)),o={};for(let i of Pt)o[i]=n[i].card.due.getTime()-e;return o}var mo=21,Le=a=>!!(a&&a.st===Y.Review&&a.s>=mo);var Dr=(a,e=Date.now())=>!!(a&&a.due<=e);function Oa(a){if(!Number.isFinite(a))return"";let e=Math.round(a/6e4);if(e<1)return"<1\u5206";if(e<60)return`${e}\u5206`;let t=Math.round(e/60);if(t<24)return`${t}\u5C0F\u65F6`;let r=Math.round(t/24);if(r<31)return`${r}\u5929`;let n=Math.round(r/30);return n<12?`${n}\u4E2A\u6708`:`${(r/365).toFixed(1)}\u5E74`}var go="arise arose arisen|awake awoke awoken|bear bore borne born|beat beat beaten|become became|begin began begun beginn|bend bent|bet bet|bind bound|bite bit bitten|bleed bled|blow blew blown|break broke broken|breed bred|bring brought|broadcast broadcast|build built|burn burnt burned|burst burst|buy bought|catch caught|choose chose chosen|cling clung|come came|cost cost|creep crept|cut cut cutt|deal dealt|dig dug|do did done does|draw drew drawn|dream dreamt dreamed|drink drank drunk|drive drove driven|eat ate eaten|fall fell fallen|feed fed|feel felt|fight fought|find found|flee fled|fling flung|fly flew flown flies|forbid forbade forbidden|forget forgot forgotten|forgive forgave forgiven|freeze froze frozen|get got gotten gett|give gave given|go went gone goes|grind ground|grow grew grown|hang hung|have had has|hear heard|hide hid hidden|hit hit hitt|hold held|hurt hurt|keep kept|kneel knelt|know knew known|lay laid|lead led|lean leant leaned|leap leapt leaped|learn learnt learned|leave left|lend lent|let let|lie lay lain|light lit|lose lost|make made|mean meant|meet met|pay paid|prove proved proven|put put putt|quit quit|read read|ride rode ridden|ring rang rung|rise rose risen|run ran runn|say said|see saw seen|seek sought|sell sold|send sent|set set|sew sewed sewn|shake shook shaken|shed shed|shine shone|shoot shot|show showed shown|shrink shrank shrunk|shut shut|sing sang sung|sink sank sunk|sit sat sitt|sleep slept|slide slid|sling slung|speak spoke spoken|speed sped|spend spent|spill spilt spilled|spin spun spinn|spy spied spies|mislead misled|spit spat|split split|spread spread|spring sprang sprung|stand stood|steal stole stolen|stick stuck|sting stung|stink stank stunk|stride strode|strike struck|string strung|strive strove striven|swear swore sworn|sweep swept|swell swelled swollen|swim swam swum swimm|swing swung|take took taken|teach taught|tear tore torn|tell told|think thought|throw threw thrown|tread trod trodden|understand understood|undertake undertook undertaken|upset upset|wake woke woken|wear wore worn|weave wove woven|weep wept|win won winn|wind wound|withdraw withdrew withdrawn|write wrote written|be was were been is are am|child children|man men|woman women|foot feet|tooth teeth|mouse mice|person people|good better best|bad worse worst|far further farther furthest",jr=new Map(go.split("|").map(a=>a.split(" ")).map(([a,...e])=>[a,e])),aa=new Map;for(let[a,e]of jr){for(let t of e)aa.has(t)||aa.set(t,a);aa.has(a)||aa.set(a,a)}function Fr(a){return String(a||"").normalize("NFKC").replace(/[’‘]/g,"'").replace(/[‐‑–—]/g,"-").trim().toLowerCase().replace(/^[^a-z']+|[^a-z']+$/g,"")}function Bt(a){let e=Fr(a);if(!e)return[];let t=[],r=o=>{o&&o.length>0&&!t.includes(o)&&t.push(o)};e.endsWith("'s")&&r(e.slice(0,-2)),/(ies|ied)$/.test(e)&&r(e.slice(0,-3)+"y"),/ying$/.test(e)&&r(e.slice(0,-4)+"ie");for(let o of["ing","ed","est","er","es","s"]){if(!e.endsWith(o)||e.length<=o.length+1)continue;let i=e.slice(0,-o.length);/([bdgmnprt])\1$/.test(i)&&(r(i),r(i.slice(0,-1))),/i$/.test(i)&&(o==="er"||o==="est"||o==="ed")&&r(i.slice(0,-1)+"y"),(o==="ing"||o==="ed")&&!/ng$/.test(i)?(r(i+"e"),r(i)):(r(i),r(i+"e"))}let n=aa.get(e);return n&&r(n),t}function Ot(a){let e=new Map;for(let n of a)e.set(n.word.toLowerCase(),n.id);let t=new Map;function r(n){let o=Fr(n);if(!o)return null;if(t.has(o))return t.get(o);let i=e.get(o);if(!i){let s=aa.get(o);s&&(i=e.get(s))}if(!i){for(let s of Bt(o))if(i=e.get(s),i)break}return t.set(o,i??null),i??null}return{resolve:r,exact:e}}var Tr=new WeakMap;function Pr(a){let e=Tr.get(a);return e||(e=Ot(a.words),Tr.set(a,e)),e}var Ua=a=>String(a||"").normalize("NFKC").replace(/[’‘]/g,"'").replace(/[‐‑–—]/g,"-").replace(/\s+/g," ").trim().toLowerCase();function Me(a){let e=2166136261;for(let t=0;t<a.length;t+=1)e=Math.imul(e^a.charCodeAt(t),16777619);return e>>>0}function pa(a,e=Math.random()*2**31){let t=[...a],r=Math.floor(e)||1;for(let n=t.length-1;n>0;n-=1){r=Math.imul(1664525,r)+1013904223>>>0;let o=r%(n+1);[t[n],t[o]]=[t[o],t[n]]}return t}function fo(a){let e=a.trim().toLowerCase(),t=i=>i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");if(/\s/.test(e))return new RegExp(`(?<![A-Za-z])(${e.split(/\s+/).map(t).join("\\s+")})(?![A-Za-z])`,"i");let r=jr.get(e);if(r)return new RegExp(`(?<![A-Za-z])((?:${[e,...r].map(t).join("|")})[a-z]{0,3})(?![A-Za-z])`,"i");let n=e;e.length>3&&/[^aeiou]y$|e$/.test(e)&&(n=e.slice(0,-1));let o=/[^aeiou][aeiou][bdgmnprt]$/.test(e)?`${t(e.slice(-1))}?`:"";return new RegExp(`(?<![A-Za-z])(${t(n)}${o}[a-z]{0,4})(?![A-Za-z])`,"i")}function Br(a,e){let t=fo(e).exec(a);return t?{before:a.slice(0,t.index),hidden:t[0],after:a.slice(t.index+t[0].length)}:null}var Pe=(a=new Date)=>`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,"0")}-${String(a.getDate()).padStart(2,"0")}`;function Or(a,{newWords:e=0,reviewed:t=0,correct:r=0,seconds:n=0}={}){let o=Pe(),i=a[o]||{n:0,r:0,c:0};return{...a,[o]:{n:i.n+e,r:i.r+t,c:i.c+r,...n?{t:(i.t||0)+n}:i.t?{t:i.t}:{}}}}function ho(a,e=Date.now()){return Object.entries(a.cards).filter(([,t])=>t.due<=e).sort((t,r)=>t[1].due-r[1].due).map(([t])=>t)}function ca(a){return a.days[Pe()]?.n??0}function bo(a,e,t,r){let n=[],o=i=>{for(let s of a.words){if(n.length>=r)return;s.cefr<i||e.cards[s.id]||n.includes(s.id)||n.push(s.id)}};return o(t.startLevel||0),n.length<r&&o(0),n}function ua(a,e,t){let r=ho(e).filter(o=>a.byId.has(o)),n=bo(a,e,t,Math.max(0,(t.dailyNew||10)-ca(e)));return{due:r,fresh:n,minutes:Math.max(1,Math.round(r.length*.25+n.length*.9))}}function xo(a,e,t,r){let n=e.cards[a.id],o=!!(a.media&R.img),i=Me(a.id+r)%100;return!n||n.s<2?o&&i<45?"picture":i<80?"meaning":"listen":t.spell&&(n.s>=4||i<35)?i<75?"spell":o?"picture":"listen":i<50?"listen":o?"picture":"meaning"}function Ga(a,e,t,r){let n=Ua(e.word),o=e.zh.replace(/^[a-z.]+\s*/,"").split(/[；;，,]/)[0],i=[],s=Math.max(0,e.order-400);for(let d=s;d<Math.min(a.words.length,e.order+400);d+=1){let u=a.words[d];if(u.id===e.id||Ua(u.word)===n||o&&u.zh.includes(o))continue;let w=Me(u.id+r)%100;t==="listen"||t==="picture"?(u.word[0]?.toLowerCase()===n[0]&&(w+=120),w+=Math.max(0,60-Math.abs(u.word.length-n.length)*20)):(u.cefr===e.cefr&&(w+=40),u.zh.split(" ")[0]===e.zh.split(" ")[0]&&(w+=60)),i.push([w,u])}i.sort((d,u)=>u[0]-d[0]);let l=new Set,p=[];for(let[,d]of i){let u=t==="meaning"?d.zh:Ua(d.word);if(!l.has(u)&&(l.add(u),p.push(d.id),p.length===3))break}return pa([e.id,...p],r)}function Wa(a,e,t,r={}){let n=Date.now(),o=ua(a,e,t),i=r.ids?r.ids.filter(d=>e.cards[d]):o.due.slice(0,120),s=r.ids?r.ids.filter(d=>!e.cards[d]):r.reviewOnly?[]:o.fresh,l=[],p=(d,u)=>{let w=a.byId.get(d),c=xo(w,e,t,n+u);return{id:d,kind:c,options:c==="spell"?void 0:Ga(a,w,c,n+u)}};i.forEach((d,u)=>l.push(p(d,u)));for(let d=0;d<s.length;d+=5){let u=s.slice(d,d+5);u.forEach(w=>l.push({id:w,kind:"intro"})),pa(u,n+d).forEach((w,c)=>l.push(p(w,1e3+d+c)))}return{id:`s${n}`,started:n,steps:l,index:0,graded:{},newIds:s,reviewIds:i}}function Ha(a,e,t,r){if(!e)return E.Again;if(r)return E.Hard;let n=a==="spell"?2e4:9e3,o=a==="spell"?6e3:2500;return t>n?E.Hard:t<o&&a==="spell"?E.Easy:E.Good}function qa(a,e,t,r,n,o,i){let s=a.session;if(!s)return a;let l={...a,session:{...s,pending:{correct:r,value:o}}};if(!(t.id in s.graded)&&!t.retry&&(l={...l,cards:{...l.cards,[t.id]:ea(a.cards[t.id],n,Date.now(),i.retention)},session:{...l.session,graded:{...s.graded,[t.id]:n}},mistakes:r?l.mistakes:[t.id,...l.mistakes.filter(d=>d!==t.id)].slice(0,300)},l={...l,days:Or(l.days,{reviewed:1,correct:r?1:0,newWords:s.newIds.includes(t.id)?1:0})}),!r){let d=[...l.session.steps];if(d.filter(w=>w.id===t.id&&w.retry).length<2){let w=e.byId.get(t.id),c=t.kind==="meaning"?w.media&R.img?"picture":"listen":"meaning",b=Math.min(d.length,s.index+4);d.splice(b,0,{id:t.id,kind:c,retry:!0,options:Ga(e,w,c,Date.now())}),l={...l,session:{...l.session,steps:d}}}}return l}function wa(a,e){let t=a.session;if(!t)return a;let r=t.index+1,n=r>=t.steps.length?Date.now():void 0;return{...a,days:Or(a.days,{seconds:Math.max(0,Math.min(90,Math.round(e)))}),session:{...t,index:r,pending:void 0,finished:n}}}function Ka(a){let e=Object.values(a.graded),t=e.filter(r=>r!==E.Again).length;return{total:e.length,correct:t,accuracy:e.length?Math.round(t/e.length*100):0}}var M=fe(require("react"),1);var H=fe(require("react"),1);var oe=fe(require("react"),1);var Ur={search:'<path d="m21 21-4.34-4.34" /> <circle cx="11" cy="11" r="8" />',star:'<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />',sparkle:'<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" /> <path d="M20 2v4" /> <path d="M22 4h-4" /> <circle cx="4" cy="20" r="2" />',heart:'<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />',volume:'<path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" /> <path d="M16 9a5 5 0 0 1 0 6" /> <path d="M19.364 18.364a9 9 0 0 0 0-12.728" />',close:'<path d="M18 6 6 18" /> <path d="m6 6 12 12" />',chevronLeft:'<path d="m15 18-6-6 6-6" />',chevronRight:'<path d="m9 18 6-6-6-6" />',book:'<path d="M12 5v16" /> <path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z" />',layers:'<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" /> <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" /> <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" />',refresh:'<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /> <path d="M21 3v5h-5" /> <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" /> <path d="M8 16H3v5" />',check:'<path d="M20 6 9 17l-5-5" />',info:'<circle cx="12" cy="12" r="10" /> <path d="M12 16v-4" /> <path d="M12 8h.01" />',play:'<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />',pause:'<rect x="14" y="3" width="5" height="18" rx="1" /> <rect x="5" y="3" width="5" height="18" rx="1" />',user:'<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /> <circle cx="12" cy="7" r="4" />',globe:'<circle cx="12" cy="12" r="10" /> <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /> <path d="M2 12h20" />',keyboard:'<path d="M10 8h.01" /> <path d="M12 12h.01" /> <path d="M14 8h.01" /> <path d="M16 12h.01" /> <path d="M18 8h.01" /> <path d="M6 8h.01" /> <path d="M7 16h10" /> <path d="M8 12h.01" /> <rect width="20" height="16" x="2" y="4" rx="2" />',headphones:'<path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />',type:'<path d="M12 4v16" /> <path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2" /> <path d="M9 20h6" />',rotateCcw:'<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /> <path d="M3 3v5h5" />',orbit:'<path d="M20.341 6.484A10 10 0 0 1 10.266 21.85" /> <path d="M3.659 17.516A10 10 0 0 1 13.74 2.152" /> <circle cx="12" cy="12" r="3" /> <circle cx="19" cy="5" r="2" /> <circle cx="5" cy="19" r="2" />',share:'<circle cx="18" cy="5" r="3" /> <circle cx="6" cy="12" r="3" /> <circle cx="18" cy="19" r="3" /> <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" /> <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />',plus:'<path d="M5 12h14" /> <path d="M12 5v14" />',minus:'<path d="M5 12h14" />',crosshair:'<circle cx="12" cy="12" r="10" /> <line x1="22" x2="18" y1="12" y2="12" /> <line x1="6" x2="2" y1="12" y2="12" /> <line x1="12" x2="12" y1="6" y2="2" /> <line x1="12" x2="12" y1="22" y2="18" />',command:'<path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />',arrowRight:'<path d="M5 12h14" /> <path d="m12 5 7 7-7 7" />',library:'<path d="m16 6 4 14" /> <path d="M12 6v14" /> <path d="M8 8v12" /> <path d="M4 4v16" />',clock:'<circle cx="12" cy="12" r="10" /> <path d="M12 6v6l4 2" />',languages:'<path d="m5 8 6 6" /> <path d="m4 14 6-6 2-3" /> <path d="M2 5h12" /> <path d="M7 2h1" /> <path d="m22 22-5-10-5 10" /> <path d="M14 18h6" />',bookmark:'<path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" />',settings:'<path d="M14 17H5" /> <path d="M19 7h-9" /> <circle cx="17" cy="17" r="3" /> <circle cx="7" cy="7" r="3" />',chevronDown:'<path d="m6 9 6 6 6-6" />',alignLeft:'<path d="M21 5H3" /> <path d="M15 12H3" /> <path d="M17 19H3" />'};function $({name:a,size:e=18,filled:t=!1,className:r="",...n}){let o=Ur[a];return o?oe.default.createElement("svg",{viewBox:"0 0 24 24",width:e,height:e,fill:t?"currentColor":"none",stroke:"currentColor",strokeWidth:t?0:1.7,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",className:r,dangerouslySetInnerHTML:{__html:o},...n}):null}function se({id:a,word:e,full:t=!1,className:r="",alt:n}){let[o,i]=(0,oe.useState)(!1),s=t?Aa(a):nr(a);return o?oe.default.createElement("div",{className:`wa-img-fallback ${r}`,role:"img","aria-label":n||e},oe.default.createElement("span",null,(e||"?").slice(0,1).toUpperCase())):oe.default.createElement("img",{className:r,src:s,alt:n||`${e} \u63D2\u753B`,loading:"lazy",decoding:"async",draggable:!1,onError:()=>i(!0)})}var qe=null,ma=null,Ut=new Set;function Gr(){for(let a of Ut)a()}function ta(){qe&&(qe.pause(),qe=null),ma=null,Gr()}function _e(a,e){if(ma===a){ta();return}ta();let t=new Audio(e);qe=t,ma=a,Gr(),t.onended=()=>{qe===t&&ta()},t.onerror=()=>{qe===t&&ta()},t.play().catch(()=>{qe===t&&ta()})}function Se(){ta()}function yo(){let[a,e]=(0,oe.useState)(ma);return(0,oe.useEffect)(()=>{let t=()=>e(ma);return Ut.add(t),()=>Ut.delete(t)},[]),a}function we({audioKey:a,url:e,label:t,size:r=16,className:n="",title:o}){let i=yo()===a;return oe.default.createElement("button",{type:"button",className:`wa-audio-btn ${i?"is-playing":""} ${n}`,onClick:()=>_e(a,e),"aria-label":o||(i?"\u505C\u6B62\u64AD\u653E":`\u64AD\u653E${t||""}`),title:o||t||"\u64AD\u653E\u53D1\u97F3"},oe.default.createElement($,{name:i?"pause":"volume",size:r}),t?oe.default.createElement("span",null,t):null)}function Wr({onClose:a,children:e,labelledBy:t}){let r=(0,oe.useRef)(null);return(0,oe.useEffect)(()=>{let n=o=>{o.key==="Escape"&&(o.stopPropagation(),a())};return window.addEventListener("keydown",n),()=>window.removeEventListener("keydown",n)},[a]),oe.default.createElement("div",{className:"wa-overlay",ref:r,role:"dialog","aria-modal":"true","aria-labelledby":t,onMouseDown:n=>{n.target===r.current&&a()}},e)}function me({label:a="\u52A0\u8F7D\u4E2D\u2026"}){return oe.default.createElement("div",{className:"wa-loading",role:"status"},oe.default.createElement("span",{className:"wa-spinner","aria-hidden":"true"}),oe.default.createElement("span",null,a))}function he({icon:a="sparkle",title:e,children:t}){return oe.default.createElement("div",{className:"wa-empty"},oe.default.createElement("span",{className:"wa-empty-icon"},oe.default.createElement($,{name:a,size:26})),oe.default.createElement("h3",null,e),t?oe.default.createElement("div",{className:"wa-empty-body"},t):null)}function Be({level:a}){return oe.default.createElement("span",{className:`wa-cefr wa-cefr-${a}`},a)}function Hr(a){let e=a.includes("\uFF5C")?"\uFF5C":a.includes("|")?"|":"";if(!e)return{en:a,zh:""};let t=a.indexOf(e);return{en:a.slice(0,t).trim(),zh:a.slice(t+1).trim()}}var vo=/[A-Za-z]+(?:['’][A-Za-z]+)*/g,ko=/^[,.;:!?…’”»)\]]+/,Gt="word-atlas:lookup-open";function No(a,e){if(!e)return!1;let t=a.toLowerCase(),r=e.toLowerCase();return t===r||t.startsWith(r)}function zo({atlas:a,progress:e,token:t,refId:r,anchor:n,onClose:o,onOpenWord:i}){let s=(0,H.useRef)(null),[l,p]=(0,H.useState)({left:16,top:16}),d=r?a.byId.get(r):null,u=e.settings.accent;return(0,H.useLayoutEffect)(()=>{let w=()=>{let b=s.current?.offsetWidth??300,T=s.current?.offsetHeight??190,I=window.innerHeight-n.bottom>=T+16||n.top<T+16?n.bottom+8:Math.max(16,n.top-T-8),m=Math.max(16,Math.min(window.innerWidth-b-16,n.left+n.width/2-b/2));p({left:m,top:Math.min(I,window.innerHeight-T-16)})};w();let c=new ResizeObserver(w);return s.current&&c.observe(s.current),window.addEventListener("resize",w),()=>{c.disconnect(),window.removeEventListener("resize",w)}},[n,t,r]),(0,H.useEffect)(()=>{let w=b=>{s.current?.contains(b.target)||b.target instanceof Element&&b.target.closest("[data-wa-lookup-token]")||o()},c=b=>{b.key==="Escape"&&(b.stopImmediatePropagation(),o())};return document.addEventListener("pointerdown",w,!0),window.addEventListener("keydown",c,!0),()=>{document.removeEventListener("pointerdown",w,!0),window.removeEventListener("keydown",c,!0)}},[o]),H.default.createElement("div",{className:"wa-lookup",ref:s,style:{left:l.left,top:l.top},role:"dialog","aria-modal":"false","aria-label":`\u67E5\u8BCD\uFF1A${t}`},H.default.createElement("button",{type:"button",className:"wa-icon-btn wa-lookup-close",onClick:o,"aria-label":"\u5173\u95ED\u67E5\u8BCD"},H.default.createElement($,{name:"close",size:16})),d?H.default.createElement(H.default.Fragment,null,H.default.createElement("div",{className:"wa-lookup-head"},te(d,R.img)?H.default.createElement(se,{id:d.id,word:d.word,className:"wa-lookup-thumb"}):null,H.default.createElement("div",{className:"wa-lookup-title"},H.default.createElement("h3",{lang:"en"},d.word),H.default.createElement("p",null,d.ipa))),H.default.createElement("p",{className:"wa-lookup-meaning"},d.zh),H.default.createElement("div",{className:"wa-lookup-actions"},te(d,R[u])?H.default.createElement(we,{audioKey:`${u}:${d.id}`,url:ne(u,d.id),label:"\u64AD\u653E\u53D1\u97F3"}):null,H.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary",onClick:()=>i(d.id)},"\u67E5\u770B\u8BCD\u5361"))):H.default.createElement(H.default.Fragment,null,H.default.createElement("h3",{className:"wa-lookup-missing",lang:"en"},t),H.default.createElement("p",{className:"wa-lookup-meaning"},"\u8FD9\u4E2A\u8BCD\u4E0D\u5728\u8BCD\u5149\u8BCD\u5E93\u91CC")))}function Ie({atlas:a,progress:e,text:t,headword:r,onOpenWord:n,className:o=""}){let i=Pr(a),[s,l]=(0,H.useState)(null);(0,H.useEffect)(()=>{if(!s)return;let d=()=>l(null);return window.addEventListener(Gt,d),()=>window.removeEventListener(Gt,d)},[s]);let p=(0,H.useMemo)(()=>{let d=[],u=0;for(let w of t.matchAll(vo)){let c=w.index??0;c>u&&d.push(t.slice(u,c));let b=w[0],T=i.resolve(b),O=No(b,r),I=H.default.createElement("button",{type:"button",className:"wa-lookup-token","data-wa-lookup-token":"","aria-label":`\u67E5\u8BCD\uFF1A${b}`,"aria-haspopup":"dialog",onClick:z=>{z.stopPropagation(),window.dispatchEvent(new Event(Gt));let k=z.currentTarget.getBoundingClientRect();l({token:b,refId:T,anchor:{left:k.left,top:k.top,width:k.width,height:k.height,bottom:k.bottom}})},onKeyDown:z=>{(z.key==="Enter"||z.key===" ")&&z.stopPropagation()}},b);d.push(O?H.default.createElement("mark",{key:`mark-${c}`},I):H.default.createElement(H.default.Fragment,{key:c},I)),u=c+b.length;let m=t.slice(u).match(ko)?.[0]??"";m&&(d.push(H.default.createElement("span",{key:`glue-${c}`},m)),u+=m.length)}return u<t.length&&d.push(t.slice(u)),d},[t,r,i]);return H.default.createElement("span",{className:`wa-lookup-text ${o}`},p,s?H.default.createElement(zo,{atlas:a,progress:e,token:s.token,refId:s.refId,anchor:s.anchor,onClose:()=>l(null),onOpenWord:d=>{l(null),n(d)}}):null)}var De=1080,ra=1350;function Mo(a){return new Promise(e=>{let t=new Image;t.crossOrigin="anonymous",t.onload=()=>e(t),t.onerror=()=>e(null),t.src=a})}function qr(a,e,t,r,n,o){if(a.beginPath(),typeof a.roundRect=="function")a.roundRect(e,t,r,n,o);else{let i=Array.isArray(o)?o[0]:o;a.moveTo(e+i,t),a.arcTo(e+r,t,e+r,t+n,i),a.arcTo(e+r,t+n,e,t+n,i),a.arcTo(e,t+n,e,t,i),a.arcTo(e,t,e+r,t,i),a.closePath()}}function Wt(a,e,t,r=3){let n=Array.from(String(e||"")),o=[],i="";for(let s of n){let l=i+s;if(a.measureText(l).width>t&&i){if(o.push(i),i=s,o.length>=r)break}else i=l}return o.length<r&&i&&o.push(i),o}async function Kr({entry:a,word:e,accent:t="uk"}){let r=document.createElement("canvas");r.width=De,r.height=ra;let n=r.getContext("2d");if(!n)return!1;let o=a?.m&1?await Mo(Aa(e.id)):null,i=n.createLinearGradient(0,0,De,ra);i.addColorStop(0,"#0d1424"),i.addColorStop(1,"#1b2238"),n.fillStyle=i,n.fillRect(0,0,De,ra);let s=7,l=()=>(s=s*16807%2147483647,s/2147483647);for(let I=0;I<90;I+=1)n.fillStyle=`rgba(190, 205, 255, ${.08+l()*.18})`,n.beginPath(),n.arc(l()*De,l()*ra,l()*2.2+.4,0,Math.PI*2),n.fill();n.fillStyle="#f7f4ec",qr(n,90,90,De-180,ra-180,44),n.fill();let p=190,d=190,u=700;n.save(),qr(n,p,d,u,u,26),n.clip(),o?n.drawImage(o,p,d,u,u):(n.fillStyle="#e7e0d2",n.fillRect(p,d,u,u),n.fillStyle="#a88c54",n.font="700 220px system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText((e.word||"?")[0].toUpperCase(),p+u/2,d+u/2)),n.restore();let w=190,c=970;n.textAlign="left",n.textBaseline="alphabetic",n.fillStyle="#1a1a1a",n.font='700 84px Georgia, "Songti SC", serif';let b=a?.w||e.word;n.fillText(b.length>16?`${b.slice(0,15)}\u2026`:b,w,c);let T=t==="us"?a?.us||a?.uk:a?.uk||a?.us;T&&(n.fillStyle="#8a8377",n.font="400 28px ui-monospace, Menlo, monospace",n.fillText(T,w,c+46)),c+=112;let O=(a?.senses||[]).slice(0,2);n.font='500 34px system-ui, "PingFang SC", sans-serif';for(let I of O){let m=`${I.pos||""} ${I.zh||""}`.trim(),z=Wt(n,m,De-380,2);n.fillStyle="#2d2a26";for(let k of z)n.fillText(k,w,c),c+=46;c+=6}if(a?.ex?.[0]?.en){c+=8,n.fillStyle="#55504a",n.font="italic 28px Georgia, serif";let I=Wt(n,a.ex[0].en,De-380,2);for(let m of I)n.fillText(m,w,c),c+=40;if(a.ex[0].zh){n.fillStyle="#8a8377",n.font='400 24px system-ui, "PingFang SC", sans-serif';let m=Wt(n,a.ex[0].zh,De-380,1);for(let z of m)n.fillText(z,w,c+8)}}return n.fillStyle="#a39a8b",n.font="400 22px system-ui, sans-serif",n.textAlign="right",n.fillText("\u8BCD\u5149 \xB7 Word Atlas \xB7 CC BY 4.0",De-150,ra-150),new Promise(I=>{r.toBlob(m=>{if(!m){I(!1);return}let z=URL.createObjectURL(m),k=document.createElement("a");k.download=`word-atlas-${e.id}.png`,k.href=z,k.click(),setTimeout(()=>URL.revokeObjectURL(z),2e3),I(!0)},"image/png")})}function Za({atlas:a,word:e,progress:t,onClose:r,onPrev:n,onNext:o,hasPrev:i,hasNext:s,onOpenWord:l,onToggleBookmark:p,onMarkLearned:d,onBack:u,backLabel:w}){let[c,b]=(0,M.useState)(null),[T,O]=(0,M.useState)(""),I=t.settings.accent,m=t.cards[e.id],z=t.bookmarks.includes(e.id);(0,M.useEffect)(()=>{let A=!0;return b(null),O(""),ye(a,e.id).then(x=>{A&&b(x)}).catch(x=>{A&&O(x.message||"\u8BCD\u6761\u52A0\u8F7D\u5931\u8D25")}),()=>{A=!1,Se()}},[a,e.id]),(0,M.useEffect)(()=>{let A=x=>{x.key==="ArrowLeft"&&i?(x.preventDefault(),n()):x.key==="ArrowRight"&&s&&(x.preventDefault(),o())};return window.addEventListener("keydown",A),()=>window.removeEventListener("keydown",A)},[i,s,n,o]);let k=a.topics.find(A=>A.slug===e.topic)?.zh||e.topicZh;return M.default.createElement(Wr,{onClose:r,labelledBy:"wa-detail-title"},M.default.createElement("div",{className:"wa-detail",role:"document"},M.default.createElement("div",{className:"wa-detail-art"},M.default.createElement(se,{id:e.id,word:e.word,full:!0,className:"wa-detail-img",alt:`${e.word} \u63D2\u753B`}),M.default.createElement("div",{className:"wa-detail-art-meta"},M.default.createElement("span",{className:"wa-specimen"},"\u2116 ",String(e.order+1).padStart(4,"0")," ",M.default.createElement("i",null)," Word Atlas"),m?M.default.createElement("span",{className:"wa-memory-inline"},Dr(m)?"\u5F85\u590D\u4E60":`\u4E0B\u6B21\u590D\u4E60 ${Oa(m.due-Date.now())}\u540E`):null)),M.default.createElement("div",{className:"wa-detail-body"},M.default.createElement("button",{type:"button",className:"wa-icon-btn wa-detail-close",onClick:r,"aria-label":"\u5173\u95ED\u8BCD\u6761"},M.default.createElement($,{name:"close",size:18})),M.default.createElement("header",{className:"wa-detail-head"},u?M.default.createElement("button",{type:"button",className:"wa-icon-btn wa-back-btn",onClick:u,"aria-label":w?`\u8FD4\u56DE ${w}`:"\u8FD4\u56DE\u4E0A\u4E00\u4E2A\u8BCD",title:w?`\u8FD4\u56DE ${w}`:"\u8FD4\u56DE\u4E0A\u4E00\u4E2A\u8BCD"},M.default.createElement($,{name:"chevronLeft",size:18})):null,M.default.createElement("div",{className:"wa-tags"},M.default.createElement(Be,{level:e.cefr}),k?M.default.createElement("span",{className:"wa-chip"},k):null,m?M.default.createElement("span",{className:`wa-chip wa-chip-status ${m.st===2?"is-done":""}`},m.st===2?"\u590D\u4E60\u4E2D":"\u5B66\u4E60\u4E2D"):null),M.default.createElement("button",{type:"button",className:`wa-icon-btn ${z?"is-on":""}`,onClick:()=>p(e.id),"aria-pressed":z,"aria-label":z?"\u53D6\u6D88\u6536\u85CF":"\u6536\u85CF",title:z?"\u53D6\u6D88\u6536\u85CF":"\u6536\u85CF"},M.default.createElement($,{name:"heart",size:19,filled:z})),M.default.createElement("button",{type:"button",className:"wa-icon-btn",onClick:()=>c&&Kr({entry:c,word:e,accent:I}),disabled:!c,"aria-label":"\u751F\u6210\u5206\u4EAB\u5361",title:"\u751F\u6210\u5206\u4EAB\u5361"},M.default.createElement($,{name:"share",size:19}))),M.default.createElement("h2",{id:"wa-detail-title",className:"wa-headword",lang:"en"},e.word),!c&&!T?M.default.createElement(me,{label:"\u52A0\u8F7D\u8BCD\u6761\u2026"}):null,T?M.default.createElement("p",{className:"wa-error"},T):null,c?M.default.createElement(M.default.Fragment,null,M.default.createElement("div",{className:"wa-detail-scroll"},M.default.createElement("div",{className:"wa-pron"},c.uk?M.default.createElement("div",{className:"wa-pron-row"},M.default.createElement("span",{className:"wa-pron-label"},"\u82F1"),M.default.createElement("span",{className:"wa-ipa"},c.uk),te(c,R.uk)?M.default.createElement(we,{audioKey:`uk:${e.id}`,url:ne("uk",e.id),label:"\u53D1\u97F3"}):null):null,c.us?M.default.createElement("div",{className:"wa-pron-row"},M.default.createElement("span",{className:"wa-pron-label"},"\u7F8E"),M.default.createElement("span",{className:"wa-ipa"},c.us),te(c,R.us)?M.default.createElement(we,{audioKey:`us:${e.id}`,url:ne("us",e.id),label:"\u53D1\u97F3"}):null):null,!c.uk&&!c.us?M.default.createElement("span",{className:"wa-ipa"},e.ipa):null,I==="us"&&c.us?M.default.createElement("span",{className:"wa-hint"},"\u9ED8\u8BA4\u7F8E\u97F3"):null),M.default.createElement("ol",{className:"wa-senses"},(c.senses||[]).map((A,x)=>M.default.createElement("li",{key:x},A.pos?M.default.createElement("span",{className:"wa-pos"},A.pos):null,M.default.createElement("span",{className:"wa-zh"},A.zh),A.en?M.default.createElement("span",{className:"wa-en",lang:"en"},A.en):null))),(c.ex||[]).length>0?M.default.createElement("section",{className:"wa-block"},M.default.createElement("h3",{className:"wa-eyebrow"},"\u4F8B\u53E5"),M.default.createElement("ul",{className:"wa-examples"},c.ex.map((A,x)=>{let S=x===0?"ex":"ex2",F=te(c,R[S]);return M.default.createElement("li",{key:x},c.ex.length>1?M.default.createElement("span",{className:`wa-ex-tag ${x?"is-ielts":""}`},x?"\u96C5\u601D\u8BED\u5883":"\u65E5\u5E38"):null,M.default.createElement("p",{className:"wa-ex-en",lang:"en"},M.default.createElement(Ie,{atlas:a,progress:t,text:A.en,headword:e.word,onOpenWord:l}),F?M.default.createElement(we,{audioKey:`${S}:${e.id}`,url:ne(S,e.id),size:14,className:"wa-ex-speak",title:"\u64AD\u653E\u4F8B\u53E5\u6717\u8BFB"}):null),M.default.createElement("p",{className:"wa-ex-zh"},A.zh))}))):null,(c.col||[]).length>0?M.default.createElement("section",{className:"wa-block"},M.default.createElement("h3",{className:"wa-eyebrow"},"\u5E38\u7528\u642D\u914D"),M.default.createElement("ul",{className:"wa-collocations"},c.col.map(A=>{let x=Hr(A);return M.default.createElement("li",{key:A},M.default.createElement("span",{lang:"en"},x.en),x.zh?M.default.createElement("small",null,x.zh):null)}))):null,(c.fam||[]).length>0||(c.syn||[]).length>0||(c.ant||[]).length>0?M.default.createElement("section",{className:"wa-block wa-relations"},(c.fam||[]).length>0?M.default.createElement("div",null,M.default.createElement("h3",{className:"wa-eyebrow"},"\u8BCD\u65CF"),M.default.createElement("p",null,c.fam.map(A=>{let x=A.replace(/\s*\(.*\)\s*$/,"").trim().toLowerCase(),S=a.words.find(F=>F.word.toLowerCase()===x);return S?M.default.createElement("button",{key:A,type:"button",className:"wa-link",onClick:()=>l(S.id)},A):M.default.createElement("span",{key:A},A)}))):null,(c.syn||[]).length>0?M.default.createElement("div",null,M.default.createElement("h3",{className:"wa-eyebrow"},"\u8FD1\u4E49"),M.default.createElement("p",null,c.syn.map(A=>M.default.createElement("span",{key:A},A)))):null,(c.ant||[]).length>0?M.default.createElement("div",null,M.default.createElement("h3",{className:"wa-eyebrow"},"\u53CD\u4E49"),M.default.createElement("p",null,c.ant.map(A=>M.default.createElement("span",{key:A},A)))):null):null,c.tip?M.default.createElement("aside",{className:"wa-tip"},M.default.createElement($,{name:"sparkle",size:17}),M.default.createElement("p",null,c.tip)):null,c.note?M.default.createElement("p",{className:"wa-usage-note"},"\u7528\u6CD5\u63D0\u9192\uFF1A",c.note):null),M.default.createElement("div",{className:"wa-detail-footer"},M.default.createElement("div",{className:"wa-detail-memory"},m?M.default.createElement(M.default.Fragment,null,M.default.createElement("span",null,"\u8BB0\u5FC6\u7A33\u5B9A\u5EA6 ",m.s<1?"<1":Math.round(m.s)," \u5929"),M.default.createElement("span",null,"\u5DF2\u590D\u4E60 ",m.reps," \u6B21")):M.default.createElement("span",null,"\u8FD8\u6CA1\u5B66\u8FC7\u8FD9\u4E2A\u8BCD")),M.default.createElement("div",{className:"wa-detail-actions"},M.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:()=>d(e.id),disabled:!!m},M.default.createElement($,{name:"check",size:15})," ",m?"\u5DF2\u5728\u590D\u4E60\u4E2D":"\u6807\u8BB0\u4E3A\u5DF2\u5B66"),M.default.createElement("div",{className:"wa-detail-nav"},M.default.createElement("button",{type:"button",className:"wa-icon-btn",onClick:n,disabled:!i,"aria-label":"\u4E0A\u4E00\u4E2A\u8BCD"},M.default.createElement($,{name:"chevronLeft",size:18})),M.default.createElement("button",{type:"button",className:"wa-icon-btn",onClick:o,disabled:!s,"aria-label":"\u4E0B\u4E00\u4E2A\u8BCD"},M.default.createElement($,{name:"chevronRight",size:18})))))):null)))}var ae=fe(require("react"),1);var Va=96;function _o({atlas:a,word:e,progress:t,onOpen:r,onToggleBookmark:n}){let o=t.cards[e.id],i=t.bookmarks.includes(e.id),s=a.topics.find(l=>l.slug===e.topic)?.zh||e.topicZh;return ae.default.createElement("article",{className:`wa-card ${o?"is-learned":""}`},ae.default.createElement("div",{className:"wa-card-hit",role:"button",tabIndex:0,onClick:()=>r(e.id),onKeyDown:l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),r(e.id))},"aria-label":`\u67E5\u770B ${e.word}`},ae.default.createElement("div",{className:"wa-card-art"},ae.default.createElement(se,{id:e.id,word:e.word}),o?ae.default.createElement("span",{className:"wa-card-dot",title:"\u5DF2\u5728\u590D\u4E60\u4E2D"}):null),ae.default.createElement("div",{className:"wa-card-body"},ae.default.createElement("div",{className:"wa-card-title"},ae.default.createElement("h3",{lang:"en"},e.word),ae.default.createElement(Be,{level:e.cefr})),ae.default.createElement("p",{className:"wa-card-ipa"},e.ipa),ae.default.createElement("p",{className:"wa-card-zh"},e.zh),ae.default.createElement("p",{className:"wa-card-topic"},s))),ae.default.createElement("button",{type:"button",className:`wa-card-heart ${i?"is-on":""}`,onClick:l=>{l.stopPropagation(),n(e.id)},"aria-pressed":i,"aria-label":i?"\u53D6\u6D88\u6536\u85CF":"\u6536\u85CF",title:i?"\u53D6\u6D88\u6536\u85CF":"\u6536\u85CF"},ae.default.createElement($,{name:"heart",size:16,filled:i})))}function ga({atlas:a,words:e,progress:t,onOpen:r,onToggleBookmark:n}){let[o,i]=(0,ae.useState)(Va),s=(0,ae.useRef)(null);(0,ae.useEffect)(()=>{i(Va)},[e]),(0,ae.useEffect)(()=>{let p=s.current;if(!p||o>=e.length)return;let d=new IntersectionObserver(u=>{u.some(w=>w.isIntersecting)&&i(w=>Math.min(w+Va,e.length))},{rootMargin:"600px 0px"});return d.observe(p),()=>d.disconnect()},[o,e.length]);let l=e.slice(0,o);return ae.default.createElement("div",{className:"wa-grid-wrap"},ae.default.createElement("p",{className:"wa-grid-count"},"\u5171 ",e.length.toLocaleString("en-US")," \u4E2A\u8BCD",o<e.length?` \xB7 \u5DF2\u663E\u793A ${o}`:""),ae.default.createElement("div",{className:"wa-grid"},l.map(p=>ae.default.createElement(_o,{key:p.id,atlas:a,word:p,progress:t,onOpen:r,onToggleBookmark:n}))),o<e.length?ae.default.createElement("div",{ref:s,className:"wa-more"},ae.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:()=>i(p=>p+Va)},"\u52A0\u8F7D\u66F4\u591A\uFF08\u5269\u4F59 ",(e.length-o).toLocaleString("en-US"),"\uFF09")):null)}var v=fe(require("react"),1);var Zr=100;function So(a){let e=[...a];for(let t=e.length-1;t>0;t-=1){let r=Math.floor(Math.random()*(t+1));[e[t],e[r]]=[e[r],e[t]]}return e}function Co(a,e){let t=Date.now(),r=e.cards,n=[];for(let p of a.words){let d=r[p.id];d&&d.due<=t&&n.push({id:p.id,word:p,card:d,due:d.due})}n.sort((p,d)=>p.due-d.due);let o=n.slice(0,Zr),i=new Set(o.map(p=>p.id)),l=So(a.words.filter(p=>!r[p.id]&&!i.has(p.id))).slice(0,Math.max(0,e.settings.dailyNew)).map(p=>({id:p.id,word:p,card:void 0}));return[...o,...l]}function Vr(a,e){let t=Date.now(),r=0,n=0,o=0;for(let s of a.words){let l=e.cards[s.id];l&&(n+=1,l.due<=t&&(r+=1),Le(l)&&(o+=1))}let i=a.count-n;return{due:r,learned:n,mastered:o,fresh:i}}function Ao({atlas:a,progress:e,onStart:t}){let r=(0,v.useMemo)(()=>Vr(a,e),[a,e]),n=Math.min(e.settings.dailyNew,r.fresh),o=Math.min(r.due,Zr)+n,i=(s,l)=>{le(p=>({...p,settings:{...p.settings,[s]:l}}))};return v.default.createElement("div",{className:"wa-review-intro"},v.default.createElement("div",{className:"wa-review-hero"},v.default.createElement("span",{className:"wa-review-orbit","aria-hidden":"true"},v.default.createElement($,{name:"sparkle",size:30})),v.default.createElement("h2",null,"\u4ECA\u65E5\u590D\u4E60"),v.default.createElement("p",null,"FSRS \u4F1A\u6309\u8BB0\u5FC6\u7A33\u5B9A\u5EA6\u5B89\u6392\u590D\u4E60\u3002\u5230\u671F\u5C31\u590D\u4E60\uFF0C\u8BB0\u5F97\u7262\u7684\u8BCD\u4F1A\u8D8A\u9694\u8D8A\u4E45\u3002")),v.default.createElement("div",{className:"wa-review-stats"},v.default.createElement("div",{className:"wa-stat"},v.default.createElement("strong",null,r.due),v.default.createElement("span",null,"\u5230\u671F\u590D\u4E60")),v.default.createElement("div",{className:"wa-stat"},v.default.createElement("strong",null,n),v.default.createElement("span",null,"\u4ECA\u65E5\u65B0\u8BCD")),v.default.createElement("div",{className:"wa-stat"},v.default.createElement("strong",null,r.learned.toLocaleString("en-US")),v.default.createElement("span",null,"\u5DF2\u5B66\u8BCD")),v.default.createElement("div",{className:"wa-stat"},v.default.createElement("strong",null,r.mastered.toLocaleString("en-US")),v.default.createElement("span",null,"\u5DF2\u638C\u63E1"))),v.default.createElement("div",{className:"wa-review-settings"},v.default.createElement("label",null,"\u6BCF\u65E5\u65B0\u8BCD",v.default.createElement("select",{value:e.settings.dailyNew,onChange:s=>i("dailyNew",Number(s.target.value))},[5,10,15,20,30,50].map(s=>v.default.createElement("option",{key:s,value:s},s)))),v.default.createElement("label",null,"\u76EE\u6807\u8BB0\u5FC6\u7387",v.default.createElement("select",{value:e.settings.retention,onChange:s=>i("retention",Number(s.target.value))},[.8,.85,.9,.95].map(s=>v.default.createElement("option",{key:s,value:s},Math.round(s*100),"%"))))),v.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary wa-start-btn",onClick:t,disabled:o===0},o>0?`\u5F00\u59CB\u590D\u4E60\uFF08${o} \u4E2A\u8BCD\uFF09`:"\u4ECA\u5929\u6CA1\u6709\u8981\u590D\u4E60\u7684\u8BCD"),o===0?v.default.createElement("p",{className:"wa-review-done-hint"},v.default.createElement($,{name:"check",size:15})," \u90FD\u590D\u4E60\u5B8C\u4E86\uFF0C\u53BB\u56FE\u9274\u91CC\u8BA4\u8BC6\u51E0\u4E2A\u65B0\u8BCD\u5427\u3002"):null,v.default.createElement("p",{className:"wa-review-tip"},"\u590D\u4E60\u8FDB\u5EA6\u4F1A\u81EA\u52A8\u4FDD\u5B58\u5230\u672C\u673A ",v.default.createElement("code",null,"$DSH_HOME/word-atlas-dsh/progress.json"),"\u3002"))}function Lo({session:a,atlas:e,progress:t,onAgain:r,onExit:n}){let o=(0,v.useMemo)(()=>Vr(e,t),[e,t]),{reviewed:i,correct:s,newWords:l}=a.stats,p=i?Math.round(s/i*100):0;return v.default.createElement("div",{className:"wa-review-summary"},v.default.createElement("span",{className:"wa-review-orbit is-done","aria-hidden":"true"},v.default.createElement($,{name:"check",size:28})),v.default.createElement("h2",null,"\u672C\u7EC4\u5B8C\u6210"),v.default.createElement("div",{className:"wa-review-stats"},v.default.createElement("div",{className:"wa-stat"},v.default.createElement("strong",null,i),v.default.createElement("span",null,"\u590D\u4E60\u8BCD\u6570")),v.default.createElement("div",{className:"wa-stat"},v.default.createElement("strong",null,l),v.default.createElement("span",null,"\u65B0\u5B66\u8BCD")),v.default.createElement("div",{className:"wa-stat"},v.default.createElement("strong",null,p,"%"),v.default.createElement("span",null,"\u9996\u6B21\u7B54\u5BF9\u7387")),v.default.createElement("div",{className:"wa-stat"},v.default.createElement("strong",null,o.due),v.default.createElement("span",null,"\u5269\u4F59\u5230\u671F"))),v.default.createElement("div",{className:"wa-review-summary-actions"},v.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary",onClick:r},"\u518D\u7EC3\u4E00\u7EC4"),v.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:n},"\u8FD4\u56DE\u56FE\u9274")))}function Eo({atlas:a,progress:e,item:t,entry:r,stats:n,onReveal:o,onGrade:i,onOpenWord:s}){let l=Date.now(),p=Ir(t.card,l,e.settings.retention),d=!t.card,u=w=>w>=E.Good;return v.default.createElement("div",{className:"wa-review-card"},v.default.createElement("div",{className:"wa-review-art"},v.default.createElement(se,{id:t.word.id,word:t.word.word,full:!0,alt:`${t.word.word} \u63D2\u753B`})),v.default.createElement("div",{className:"wa-review-body"},v.default.createElement("div",{className:"wa-review-tags"},v.default.createElement(Be,{level:t.word.cefr}),d?v.default.createElement("span",{className:"wa-chip wa-chip-new"},"\u65B0\u8BCD"):v.default.createElement("span",{className:"wa-chip"},"\u5230\u671F\u590D\u4E60")),v.default.createElement("h2",{className:"wa-review-word",lang:"en"},t.word.word),v.default.createElement("div",{className:"wa-pron-row"},v.default.createElement("span",{className:"wa-ipa"},r?.uk||t.word.ipa),te(t.word,R.uk)?v.default.createElement(we,{audioKey:`uk:${t.word.id}`,url:ne("uk",t.word.id),label:"\u82F1\u97F3"}):null,te(t.word,R.us)&&r?.us?v.default.createElement(we,{audioKey:`us:${t.word.id}`,url:ne("us",t.word.id),label:"\u7F8E\u97F3"}):null),n.revealed?v.default.createElement("div",{className:"wa-answer"},v.default.createElement("ol",{className:"wa-senses"},(r?.senses||[]).map((w,c)=>v.default.createElement("li",{key:c},w.pos?v.default.createElement("span",{className:"wa-pos"},w.pos):null,v.default.createElement("span",{className:"wa-zh"},w.zh),w.en?v.default.createElement("span",{className:"wa-en",lang:"en"},w.en):null))),r?.ex?.[0]?v.default.createElement("p",{className:"wa-review-example",lang:"en"},v.default.createElement(Ie,{atlas:a,progress:e,text:r.ex[0].en,headword:t.word.word,onOpenWord:s})):null,r?.ex?.[0]?.zh?v.default.createElement("p",{className:"wa-review-example-zh"},r.ex[0].zh):null,r?.tip?v.default.createElement("p",{className:"wa-review-tip-line"},r.tip):null,v.default.createElement("div",{className:"wa-grades"},Pt.map(w=>v.default.createElement("button",{type:"button",key:w,className:`wa-grade wa-grade-${w}`,onClick:()=>i(w)},v.default.createElement("span",{className:"wa-grade-label"},$r[w]),v.default.createElement("span",{className:"wa-grade-interval"},Oa(p[w]))))),v.default.createElement("p",{className:"wa-grade-hint"},"\u53EA\u6709\u9996\u6B21\u4F5C\u7B54\u8BA1\u5165\u6B63\u786E\u7387\uFF1B\u952E\u76D8 1\u20134 \u4E5F\u53EF\u4EE5\u8BC4\u5206\u3002")):v.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary wa-reveal-btn",onClick:o},"\u663E\u793A\u7B54\u6848")))}function Ya({atlas:a,progress:e,onExit:t,onOpenWord:r}){let[n,o]=(0,v.useState)(null),[i,s]=(0,v.useState)(null),[l,p]=(0,v.useState)(!1),d=n&&!n.finished?n.queue[n.index]:null;(0,v.useEffect)(()=>{if(!d){s(null);return}let I=!0;return s(null),p(!1),ye(a,d.id).then(m=>{I&&s(m)}).catch(()=>{I&&p(!0)}),()=>{I=!1}},[a,d?.id]);let u=(0,v.useCallback)(()=>{let I=Co(a,e);o({queue:I,index:0,revealed:!1,finished:!1,stats:{reviewed:0,correct:0,newWords:0},startedAt:Date.now()})},[a,e]),w=(0,v.useCallback)(()=>{o(I=>I&&!I.revealed?{...I,revealed:!0}:I)},[]),c=(0,v.useCallback)(I=>{let m=n?.queue[n.index];if(!m)return;let z=ea(m.card,I,Date.now(),e.settings.retention),k=I>=E.Good;le(A=>({...A,cards:{...A.cards,[m.id]:z},days:Ia(A.days,{newWords:m.card?0:1,reviewed:1,correct:k?1:0})})),o(A=>{if(!A||A.finished)return A;let x={reviewed:A.stats.reviewed+1,correct:A.stats.correct+(k?1:0),newWords:A.stats.newWords+(m.card?0:1)},S=A.index+1;return S>=A.queue.length?{...A,index:S,revealed:!1,finished:!0,stats:x}:{...A,index:S,revealed:!1,stats:x}})},[n,e.settings.retention]);if((0,v.useEffect)(()=>{if(!d)return;let I=m=>{if(m.target instanceof HTMLElement&&/^(INPUT|SELECT|TEXTAREA)$/.test(m.target.tagName))return;if(!n.revealed){(m.code==="Space"||m.key==="Enter")&&(m.preventDefault(),w());return}let z={1:E.Again,2:E.Hard,3:E.Good,4:E.Easy};z[m.key]&&(m.preventDefault(),c(z[m.key]))};return window.addEventListener("keydown",I),()=>window.removeEventListener("keydown",I)},[d,n?.revealed,w,c]),!a)return null;if(!n)return v.default.createElement(Ao,{atlas:a,progress:e,onStart:u});if(n.finished)return v.default.createElement(Lo,{session:n,atlas:a,progress:e,onAgain:()=>o(null),onExit:t});if(!d)return v.default.createElement(he,{title:"\u8FD9\u4E00\u7EC4\u590D\u4E60\u5B8C\u6210\u4E86",icon:"check"});let b=n.index,T=n.queue.length,O=d;return v.default.createElement("div",{className:"wa-review-shell"},v.default.createElement("div",{className:"wa-review-top"},v.default.createElement("div",{className:"wa-review-progress"},v.default.createElement("div",{className:"wa-review-bar","aria-hidden":"true"},v.default.createElement("span",{style:{width:`${Math.round(b/T*100)}%`}})),v.default.createElement("span",{className:"wa-review-counter"},b+1," / ",T)),v.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:()=>o(null)},v.default.createElement($,{name:"close",size:15})," \u7ED3\u675F")),l?v.default.createElement("p",{className:"wa-error"},"\u8BCD\u6761\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u8BCD\u5149\u63D2\u4EF6\u8DEF\u7531\u662F\u5426\u6B63\u5E38\u3002"):null,!i&&!l?v.default.createElement("div",{className:"wa-review-loading"},v.default.createElement(me,{label:"\u52A0\u8F7D\u8BCD\u6761\u2026"})):null,v.default.createElement(Eo,{atlas:a,progress:e,item:O,entry:i,stats:{revealed:n.revealed},onReveal:w,onGrade:c,onOpenWord:r}))}var y=fe(require("react"),1);var Xa=null,Ja=new Map,Qa=null,Ra=new Map;async function et(a){let e=await fetch(a,{headers:{Accept:"application/json"}});if(!e.ok){let t=await e.json().catch(()=>null);throw new Error(t?.error==="upstream-unavailable"?"\u6682\u65F6\u8FDE\u4E0D\u4E0A\u4E66\u623F\u5185\u5BB9\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u540E\u91CD\u8BD5\u3002":`\u4E66\u623F\u5185\u5BB9\u52A0\u8F7D\u5931\u8D25\uFF08${e.status}\uFF09\u3002`)}return e.json()}function at(a=!1){return(!Xa||a)&&(Xa=et(or).catch(e=>{throw Xa=null,e})),Xa}function Yr(a){if(!/^[a-z0-9][a-z0-9-]*$/.test(String(a||"")))return Promise.reject(new Error("\u77ED\u6587\u7F16\u53F7\u65E0\u6548\u3002"));if(!Ja.has(a)){let e=et(ir(a)).catch(t=>{throw Ja.delete(a),t});Ja.set(a,e)}return Ja.get(a)}function Xr(){return Qa||(Qa=et(sr).catch(a=>{throw Qa=null,a})),Qa}function Jr(a,e){let t=`${a}:${e}`;if(!Ra.has(t)){let r=et(lr(a,e)).catch(n=>{throw Ra.delete(t),n});Ra.set(t,r)}return Ra.get(t)}var Qr=a=>Ve(a);function fa(a,e){return e.cefr[a.cefr]||"A1"}function ha(a,e){return e.topics.find(t=>t.slug===a.topic)?.zh||a.topic}function ba(a,e){return(a||[]).filter(t=>!e[t]).length}function Ht(a,e){return!!a.readings?.[e]?.done}function Rr(a,e,t){if(!Array.isArray(a)||a.length===0)return null;let r=e.settings.startLevel,n=a.filter(l=>l.cefr<=r+1&&l.cefr>=Math.max(0,r-1)),o=n.length?n:a,i=o.filter(l=>!Ht(e,l.id)),s=i.length?i:o;return s[Me(Pe())%s.length]}function $o(a){return a<5?"\u591C\u6DF1\u4E86":a<11?"\u65E9\u4E0A\u597D":a<14?"\u4E2D\u5348\u597D":a<18?"\u4E0B\u5348\u597D":"\u665A\u4E0A\u597D"}var en="\u65E5\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D",an=["\u5165\u95E8","\u57FA\u7840","\u8FDB\u9636","\u4E2D\u9AD8","\u9AD8\u7EA7","\u7CBE\u901A"];function Io({value:a,size:e=88,stroke:t=7,children:r}){let n=(e-t)/2,o=2*Math.PI*n,i=o*(1-Math.min(1,Math.max(0,a||0)));return y.default.createElement("div",{className:"wa-ring",style:{width:e,height:e}},y.default.createElement("svg",{width:e,height:e,viewBox:`0 0 ${e} ${e}`,"aria-hidden":"true"},y.default.createElement("circle",{className:"wa-ring-track",cx:e/2,cy:e/2,r:n,fill:"none",strokeWidth:t}),y.default.createElement("circle",{className:"wa-ring-fill",cx:e/2,cy:e/2,r:n,fill:"none",strokeWidth:t,strokeLinecap:"round",strokeDasharray:o,strokeDashoffset:i,transform:`rotate(-90 ${e/2} ${e/2})`})),y.default.createElement("div",{className:"wa-ring-label"},r))}function tt({atlas:a,progress:e,onStart:t,onOpenWord:r,onOpenLevel:n,onOpenTopic:o,onOpenReading:i}){let s=(0,y.useMemo)(()=>ua(a,e,e.settings),[a,e]),l=e.session&&!e.session.finished?e.session:null,p=e.days[Pe()],d=Xe(e.days),u=Object.keys(e.cards).length,w=Object.values(e.cards).filter(Le).length,c=s.due.length+s.fresh.length,b=p?.r??0,T=e.settings.dailyNew+Math.min(s.due.length,60),O=new Date,I=Array.from({length:7},(N,U)=>{let K=new Date;K.setDate(K.getDate()-(6-U));let q=Pe(K);return{key:q,label:en[K.getDay()],value:e.days[q]?.r??0,today:U===6}}),m=Math.max(1,...I.map(N=>N.value)),z=(0,y.useMemo)(()=>{let N=a.cefr.map(K=>({name:K,total:0,seen:0,mastered:0})),U=new Map(a.cefr.map((K,q)=>[K,q]));for(let K of a.words){let q=N[U.get(K.cefr)];if(!q)continue;q.total+=1;let X=e.cards[K.id];X&&(q.seen+=1,Le(X)&&(q.mastered+=1))}return N},[a,e.cards]),k=(0,y.useMemo)(()=>{let N=new Map(a.topics.map(U=>[U.slug,0]));for(let U of a.words)N.set(U.topic,(N.get(U.topic)||0)+1);return N},[a]),A=(l?l.newIds:s.fresh).slice(0,5).map(N=>a.byId.get(N)).filter(Boolean),x=(0,y.useMemo)(()=>{let N=a.words.filter(K=>K.media&1&&K.cefr>=2),U=N.length?N:a.words;return U[Me(Pe())%U.length]},[a]),[S,F]=(0,y.useState)(null),[W,Q]=(0,y.useState)(null);(0,y.useEffect)(()=>{let N=!0;if(x)return ye(a,x.id).then(U=>N&&F(U)).catch(()=>{}),()=>{N=!1}},[a,x?.id]),(0,y.useEffect)(()=>{let N=!0;return at().then(U=>{if(!N)return;let K=Rr(Array.isArray(U.items)?U.items:[],e,a);Q(K||null)}).catch(()=>{}),()=>{N=!1}},[a,e.settings.startLevel,e.cards,e.readings]);let ee=e.settings.accent,pe=te(x||{},R[ee]);return y.default.createElement("div",{className:"wa-today"},y.default.createElement("header",{className:"wa-today-head"},y.default.createElement("p",{className:"wa-eyebrow"},O.getMonth()+1," \u6708 ",O.getDate()," \u65E5 \xB7 \u661F\u671F",en[O.getDay()]),y.default.createElement("h1",null,$o(O.getHours()),"\uFF0C\u63A2\u7D22\u8005\u3002"),y.default.createElement("p",null,"\u4ECA\u5929\u5148\u6E29\u6545\uFF0C\u518D\u77E5\u65B0\u3002")),y.default.createElement("section",{className:"wa-today-hero"},y.default.createElement("img",{className:"wa-today-hero-art",src:sa("hero.webp"),alt:"",loading:"eager",onError:N=>{N.currentTarget.style.visibility="hidden"}}),y.default.createElement("div",{className:"wa-today-hero-shade","aria-hidden":"true"}),y.default.createElement("div",{className:"wa-today-hero-body"},y.default.createElement("p",{className:"wa-eyebrow"},"\u4ECA\u65E5\u5B66\u4E60"),l?y.default.createElement("h2",null,"\u8FD8\u5269 ",y.default.createElement("b",null,Math.max(0,l.steps.length-l.index))," \u6B65"):c>0?y.default.createElement("h2",null,"\u590D\u4E60 ",y.default.createElement("b",null,s.due.length)," \xB7 \u65B0\u8BCD ",y.default.createElement("b",null,s.fresh.length)):y.default.createElement("h2",null,"\u4ECA\u5929\u7684\u8BCD\u90FD\u7EC3\u5B8C\u4E86"),y.default.createElement("p",{className:"wa-today-hero-lede"},l?"\u8FDB\u5EA6\u5DF2\u4FDD\u5B58\uFF0C\u968F\u65F6\u63A5\u7740\u8D70\u3002":c>0?`\u9884\u8BA1 ${s.minutes} \u5206\u949F \xB7 \u5148\u6E29\u6545\uFF0C\u518D\u77E5\u65B0\u3002`:"\u60F3\u591A\u8D70\u4E00\u6BB5\uFF0C\u4E5F\u53EF\u4EE5\u3002"),y.default.createElement("div",{className:"wa-today-hero-actions"},l||c>0?y.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary wa-btn-lg",onClick:()=>t({})},l?"\u7EE7\u7EED\u65C5\u7A0B":"\u5F00\u59CB\u4ECA\u5929\u7684\u65C5\u7A0B"," ",y.default.createElement($,{name:"chevronRight",size:18})):y.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary wa-btn-lg",onClick:()=>t({extra:5})},"\u518D\u8BA4\u8BC6 5 \u4E2A\u65B0\u8BCD ",y.default.createElement($,{name:"sparkle",size:17})),!l&&s.due.length>0&&s.fresh.length>0?y.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:()=>t({reviewOnly:!0})},"\u53EA\u590D\u4E60"):null),A.length>0?y.default.createElement("div",{className:"wa-today-teaser","aria-label":"\u4ECA\u65E5\u5C06\u9047\u89C1\u7684\u65B0\u8BCD"},A.map(N=>y.default.createElement(se,{key:N.id,id:N.id,word:N.word,className:"wa-today-teaser-img"})),y.default.createElement("span",null,"\u4ECA\u5929\u4F1A\u9047\u89C1\u5B83\u4EEC")):null)),y.default.createElement("section",{className:"wa-today-strip"},y.default.createElement("div",{className:"wa-today-goal"},y.default.createElement(Io,{value:T?b/T:0},y.default.createElement("b",null,b),y.default.createElement("small",null,"/ ",T," \u9898")),y.default.createElement("div",null,y.default.createElement("strong",null,"\u4ECA\u65E5\u76EE\u6807"),y.default.createElement("span",null,"\u5DF2\u7B54 ",b," \xB7 \u76EE\u6807 ",T))),y.default.createElement("div",{className:"wa-today-stat"},y.default.createElement("strong",null,d),y.default.createElement("span",null,"\u8FDE\u7EED\u5B66\u4E60 \xB7 \u5929")),y.default.createElement("div",{className:"wa-today-stat"},y.default.createElement("strong",null,u.toLocaleString("en-US")),y.default.createElement("span",null,"\u5DF2\u70B9\u4EAE")),y.default.createElement("div",{className:"wa-today-stat"},y.default.createElement("strong",null,w.toLocaleString("en-US")),y.default.createElement("span",null,"\u957F\u671F\u8BB0\u4F4F"))),y.default.createElement("div",{className:"wa-today-grid"},y.default.createElement("section",{className:"wa-panel"},y.default.createElement("div",{className:"wa-panel-head"},y.default.createElement("h3",{className:"wa-eyebrow"},"\u8FD9\u4E00\u5468"),y.default.createElement("span",{className:"wa-muted"},ca(e)," \u4E2A\u65B0\u8BCD")),y.default.createElement("ol",{className:"wa-week"},I.map(N=>y.default.createElement("li",{key:N.key,className:`${N.value?"is-on":"is-zero"} ${N.today?"is-today":""}`,title:`${N.key}\uFF1A${N.value} \u9898`},y.default.createElement("b",null,N.value||""),y.default.createElement("span",{style:{height:`${N.value?Math.max(10,Math.round(N.value/m*100)):5}%`}}),y.default.createElement("small",null,N.label))))),y.default.createElement("section",{className:"wa-panel wa-wotd",role:"button",tabIndex:0,onClick:()=>x&&r(x.id),onKeyDown:N=>{(N.key==="Enter"||N.key===" ")&&(N.preventDefault(),x&&r(x.id))}},y.default.createElement(se,{id:x.id,word:x.word,className:"wa-wotd-img"}),y.default.createElement("div",{className:"wa-wotd-body"},y.default.createElement("h3",{className:"wa-eyebrow"},"\u4ECA\u65E5\u4E00\u8BCD"),y.default.createElement("p",{className:"wa-wotd-word",lang:"en"},x.word),y.default.createElement("div",{className:"wa-pron-row"},y.default.createElement("span",{className:"wa-ipa"},x.ipa),pe?y.default.createElement(we,{audioKey:`${ee}:${x.id}`,url:ne(ee,x.id),label:"\u53D1\u97F3"}):null,S?.ex?.[0]&&te(S,R.ex)?y.default.createElement(we,{audioKey:`ex:${x.id}`,url:ne("ex",x.id),label:"\u4F8B\u53E5"}):null),y.default.createElement("p",{className:"wa-wotd-zh"},x.zh),S?.ex?.[0]?y.default.createElement("p",{className:"wa-wotd-ex",lang:"en"},S.ex[0].en):null))),W?y.default.createElement("section",{className:"wa-today-reading"},y.default.createElement("div",{className:"wa-today-reading-mark","aria-hidden":"true"},"\u201C"),y.default.createElement("div",{className:"wa-today-reading-copy"},y.default.createElement("p",{className:"wa-eyebrow"},"\u4ECA\u65E5\u9605\u8BFB"),y.default.createElement("h3",null,W.titleZh),y.default.createElement("p",{className:"wa-today-reading-en",lang:"en"},W.title),y.default.createElement("p",{className:"wa-today-reading-meta"},fa(W,a)," \xB7 ",ha(W,a)," \xB7 ",ba(W.ids,e.cards)," \u4E2A\u672A\u5B66\u91CD\u70B9\u8BCD",e.readings?.[W.id]?.done?" \xB7 \u5DF2\u8BFB":""),y.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary",onClick:()=>i(W.id)},"\u5F00\u59CB\u9605\u8BFB ",y.default.createElement($,{name:"chevronRight",size:16})))):null,y.default.createElement("section",{className:"wa-panel"},y.default.createElement("div",{className:"wa-panel-head"},y.default.createElement("h3",{className:"wa-eyebrow"},"\u5B66\u4E60\u8DEF\u7EBF \xB7 \u4ECE A1 \u5230 C2"),y.default.createElement("span",{className:"wa-muted"},"\u8D77\u70B9\uFF1A",a.cefr[e.settings.startLevel]||"A1")),y.default.createElement("ol",{className:"wa-route"},y.default.createElement("span",{className:"wa-route-line","aria-hidden":"true"}),z.map((N,U)=>y.default.createElement("li",{key:N.name},y.default.createElement("button",{type:"button",className:`${U===e.settings.startLevel?"is-start":""} ${N.seen?"is-on":""}`,onClick:()=>n(N.name),"aria-label":`${N.name} ${an[U]}\uFF0C\u5DF2\u5B66 ${N.seen} / ${N.total}\uFF0C\u957F\u671F\u8BB0\u4F4F ${N.mastered}`},y.default.createElement("span",{className:"wa-route-node"},y.default.createElement("b",null,N.name),U===e.settings.startLevel?y.default.createElement("em",null,"\u8D77\u70B9"):null),y.default.createElement("span",{className:"wa-route-name"},an[U]),y.default.createElement("span",{className:"wa-route-count"},N.seen,y.default.createElement("small",null,"/",N.total)),y.default.createElement("span",{className:"wa-route-bar"},y.default.createElement("i",{style:{width:`${Math.round(N.seen/Math.max(1,N.total)*100)}%`}}),y.default.createElement("b",{style:{width:`${Math.round(N.mastered/Math.max(1,N.total)*100)}%`}}))))))),y.default.createElement("section",{className:"wa-panel"},y.default.createElement("div",{className:"wa-panel-head"},y.default.createElement("h3",{className:"wa-eyebrow"},"\u6309\u96C5\u601D\u8BDD\u9898\u63A2\u7D22"),y.default.createElement("button",{type:"button",className:"wa-link",onClick:()=>o("all")},"\u6253\u5F00\u56FE\u9274")),y.default.createElement("ul",{className:"wa-topics-grid"},a.topics.map(N=>y.default.createElement("li",{key:N.slug},y.default.createElement("button",{type:"button",onClick:()=>o(N.slug)},y.default.createElement("img",{src:sa(`topic-${N.slug}.webp`),alt:"",loading:"lazy",onError:U=>{U.currentTarget.style.display="none"}}),y.default.createElement("span",null,y.default.createElement("b",null,N.zh),y.default.createElement("small",null,(k.get(N.slug)||0).toLocaleString("en-US")," \u4E2A\u8BCD"))))))))}var f=fe(require("react"),1);var Do={meaning:"\u5B83\u662F\u4EC0\u4E48\u610F\u601D\uFF1F",picture:"\u770B\u56FE\uFF0C\u8865\u5168\u8FD9\u53E5\u8BDD",listen:"\u542C\uFF0C\u662F\u54EA\u4E2A\u8BCD\uFF1F",spell:"\u62FC\u51FA\u8FD9\u4E2A\u8BCD"};function tn(a,e){let[t,r]=(0,f.useState)(null);return(0,f.useEffect)(()=>{let n=!0;if(r(null),!!e)return ye(a,e).then(o=>n&&r(o)).catch(()=>{}),()=>{n=!1}},[a,e]),t}function rn(a){let e=(0,f.useRef)(Date.now());return(0,f.useEffect)(()=>{e.current=Date.now()},[a]),()=>Date.now()-e.current}function nn(a){let e=(0,f.useRef)(a);e.current=a,(0,f.useEffect)(()=>{let t=r=>{if(r.metaKey||r.ctrlKey||r.altKey||r.repeat)return;let n=r.target,o=n instanceof HTMLElement?n.tagName:"";if((o==="INPUT"||o==="TEXTAREA")&&!(r.key==="Enter"&&n instanceof HTMLInputElement&&n.readOnly)||o==="BUTTON"&&(r.key==="Enter"||r.key===" "))return;let i=e.current[r.key];i&&(r.preventDefault(),i())};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[])}function qt({progress:a,value:e,total:t,count:r,onExit:n}){let o=Math.round(Math.min(1,Math.max(0,a))*100);return f.default.createElement("header",{className:"wa-learn-bar"},f.default.createElement("div",{className:"wa-learn-bar-inner"},f.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost wa-learn-exit",onClick:n,"aria-label":"\u9000\u51FA\u5B66\u4E60"},f.default.createElement($,{name:"close",size:16})," \u9000\u51FA"),f.default.createElement("div",{className:"wa-learn-bar-center"},f.default.createElement("span",{className:"wa-learn-bar-title"},"\u4ECA\u65E5\u5B66\u4E60"),f.default.createElement("div",{className:"wa-learn-progress",role:"progressbar","aria-valuemin":0,"aria-valuemax":t||1,"aria-valuenow":e},f.default.createElement("span",{style:{width:`${o}%`}}))),r?f.default.createElement("span",{className:"wa-learn-count"},r):null))}function Kt({bar:a,children:e,centered:t=!1}){return f.default.createElement("div",{className:"wa-learn"},a,f.default.createElement("main",{className:`wa-learn-stage ${t?"is-centered":""}`},e))}function To({atlas:a,progress:e,step:t,onOpenWord:r}){let n=tn(a,t.id),o=rn(t.id),i=e.settings.accent,s=(0,f.useRef)(!1);(0,f.useEffect)(()=>{s.current=!1},[t.id]),(0,f.useEffect)(()=>{!n||s.current||(s.current=!0,e.settings.autoplay&&te(n,R[i])&&_e(`${i}:${t.id}`,ne(i,t.id)))},[n,i,t.id,e.settings.autoplay]);let l=(0,f.useCallback)(()=>{Se(),le(d=>wa(d,o()/1e3))},[o]);if(nn({Enter:l," ":l}),!n)return f.default.createElement("div",{className:"wa-learn-loading"},f.default.createElement(me,{label:"\u51C6\u5907\u8BCD\u5361\u2026"}));let p=a.byId.get(t.id);return f.default.createElement("div",{className:"wa-learn-intro"},f.default.createElement("p",{className:"wa-learn-label"},f.default.createElement("span",{className:"wa-dot is-on"})," \u521D\u6B21\u89C1\u9762"),f.default.createElement("div",{className:"wa-learn-card"},f.default.createElement(se,{id:p.id,word:p.word,full:!0,className:"wa-learn-art",alt:`${p.word} \u63D2\u753B`}),f.default.createElement("div",{className:"wa-learn-body"},f.default.createElement("div",{className:"wa-tags"},f.default.createElement(Be,{level:p.cefr}),p.topicZh?f.default.createElement("span",{className:"wa-chip"},p.topicZh):null),f.default.createElement("h2",{className:"wa-learn-word",lang:"en"},p.word),f.default.createElement("div",{className:"wa-pron"},n.uk?f.default.createElement("div",{className:"wa-pron-row"},f.default.createElement("span",{className:"wa-pron-label"},"\u82F1"),f.default.createElement("span",{className:"wa-ipa"},n.uk),te(n,R.uk)?f.default.createElement(we,{audioKey:`uk:${p.id}`,url:ne("uk",p.id),label:"\u53D1\u97F3"}):null):null,n.us?f.default.createElement("div",{className:"wa-pron-row"},f.default.createElement("span",{className:"wa-pron-label"},"\u7F8E"),f.default.createElement("span",{className:"wa-ipa"},n.us),te(n,R.us)?f.default.createElement(we,{audioKey:`us:${p.id}`,url:ne("us",p.id),label:"\u53D1\u97F3"}):null):null),f.default.createElement("ol",{className:"wa-senses"},(n.senses||[]).map((d,u)=>f.default.createElement("li",{key:u},d.pos?f.default.createElement("span",{className:"wa-pos"},d.pos):null,f.default.createElement("span",{className:"wa-zh"},d.zh),d.en?f.default.createElement("span",{className:"wa-en",lang:"en"},d.en):null))),(n.ex||[]).slice(0,1).map((d,u)=>f.default.createElement("div",{className:"wa-learn-example",key:u},f.default.createElement("p",{className:"wa-ex-en",lang:"en"},f.default.createElement(Ie,{atlas:a,progress:e,text:d.en,headword:p.word,onOpenWord:r})),f.default.createElement("p",{className:"wa-ex-zh"},d.zh))),n.tip?f.default.createElement("aside",{className:"wa-tip"},f.default.createElement($,{name:"sparkle",size:17}),f.default.createElement("p",null,n.tip)):null)),f.default.createElement("div",{className:"wa-learn-actions"},f.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary wa-btn-lg",onClick:l,autoFocus:!0},"\u8BA4\u8BC6\u4E86 ",f.default.createElement($,{name:"chevronRight",size:18})),f.default.createElement("span",{className:"wa-hint"},"Enter \u7EE7\u7EED")))}function jo({entry:a,pending:e,hints:t,onHint:r,onSubmit:n}){let[o,i]=(0,f.useState)(""),s=(0,f.useRef)(null),l=a.w,p=l.slice(0,t);(0,f.useEffect)(()=>{t&&!o.toLowerCase().startsWith(p.toLowerCase())&&i(p),s.current?.focus()},[t]);let d=e?e.value:o;return f.default.createElement("form",{className:"wa-spell",onSubmit:u=>{u.preventDefault(),!e&&o.trim()&&n(o)}},f.default.createElement("div",{className:"wa-slots","aria-hidden":"true",onClick:()=>s.current?.focus()},Array.from(l).map((u,w)=>{let c=d[w],b=c!==void 0&&c.toLowerCase()===u.toLowerCase();return f.default.createElement("span",{key:w,className:`wa-slot ${u===" "?"is-space":""} ${c!==void 0?e?b?"is-ok":"is-bad":"is-filled":""} ${!e&&w===d.length?"is-caret":""}`},e&&!e.correct?u:c??"")})),f.default.createElement("input",{ref:s,className:"wa-spell-input",value:d,onChange:u=>!e&&i(u.target.value.slice(0,l.length+6)),autoFocus:!0,autoCapitalize:"off",autoCorrect:"off",autoComplete:"off",spellCheck:!1,enterKeyHint:"done","aria-label":`\u62FC\u5199\uFF0C${l.length} \u4E2A\u5B57\u7B26`,readOnly:!!e}),e?null:f.default.createElement("div",{className:"wa-spell-actions"},f.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:r,disabled:t>=l.length-1},f.default.createElement($,{name:"sparkle",size:15})," \u63D0\u793A\u5B57\u6BCD"),f.default.createElement("button",{type:"submit",className:"wa-btn wa-btn-primary",disabled:!o.trim()},"\u786E\u8BA4 ",f.default.createElement("kbd",null,"Enter"))))}function Fo({atlas:a,progress:e,entry:t,word:r,correct:n,onNext:o,onOpenWord:i}){let s=(0,f.useRef)(null);return(0,f.useEffect)(()=>s.current?.focus({preventScroll:!0}),[]),f.default.createElement("div",{className:`wa-feedback ${n?"is-right":"is-wrong"}`,role:"status"},f.default.createElement("div",{className:"wa-feedback-main"},f.default.createElement(se,{id:r.id,word:r.word,className:"wa-feedback-thumb"}),f.default.createElement("div",{className:"wa-feedback-text"},f.default.createElement("p",{className:"wa-feedback-verdict"},n?"\u7B54\u5BF9\u4E86":`\u6CA1\u5173\u7CFB\uFF0C\u8BB0\u4F4F\u5B83 \xB7 \u6B63\u786E\u7B54\u6848\u662F ${t.w}`),f.default.createElement("p",{className:"wa-feedback-word"},f.default.createElement("b",{lang:"en"},t.w),f.default.createElement("span",{className:"wa-ipa"},t.uk||t.us)),f.default.createElement("p",{className:"wa-feedback-zh"},(t.senses||[]).slice(0,2).map(l=>`${l.pos} ${l.zh}`).join("\u3000")),t.ex?.[0]?f.default.createElement("p",{className:"wa-feedback-ex",lang:"en"},f.default.createElement(Ie,{atlas:a,progress:e,text:t.ex[0].en,headword:r.word,onOpenWord:i})):null),f.default.createElement("button",{ref:s,type:"button",className:`wa-btn wa-btn-lg ${n?"wa-btn-primary":"wa-btn-ghost"}`,onClick:o},"\u7EE7\u7EED ",f.default.createElement($,{name:"chevronRight",size:18}))))}function Po({atlas:a,progress:e,session:t,step:r,onOpenWord:n}){let o=tn(a,r.id),i=a.byId.get(r.id),s=e.settings,l=s.accent,p=t.pending,d=rn(`${r.id}-${r.kind}-${t.index}`),[u,w]=(0,f.useState)(0),c=(r.options||[]).map(m=>a.byId.get(m)).filter(Boolean),b=o?.ex?.[0]?Br(o.ex[0].en,o.w):null,T=(0,f.useCallback)((m,z)=>{if(p)return;let k=Ha(r.kind,z,d(),u>0);le(A=>qa(A,a,r,z,k,m,s)),s.autoplay&&o&&te(o,R[l])&&_e(`${l}:${r.id}`,ne(l,r.id))},[p,d,u,r,a,s,o,l]),O=(0,f.useCallback)(()=>{Se(),le(m=>wa(m,d()/1e3))},[d]);(0,f.useEffect)(()=>{r.kind!=="listen"||p||!o||te(o,R[l])&&_e(`listen:${r.id}:${t.index}`,ne(l,r.id))},[r.kind,r.id,p,o,l,t.index]);let I={};return p?(I.Enter=O,I[" "]=O):r.kind!=="spell"&&c.forEach((m,z)=>{I[String(z+1)]=()=>T(m.id,m.id===i.id)}),nn(I),o?f.default.createElement("div",{className:`wa-quiz wa-quiz-${r.kind} ${p?p.correct?"is-right":"is-wrong":""}`},f.default.createElement("p",{className:"wa-learn-label"},f.default.createElement("span",{className:`wa-dot ${r.retry?"is-warn":"is-on"}`}),r.retry?"\u518D\u89C1\u4E00\u9762 \xB7 ":"",Do[r.kind]),r.kind==="meaning"?f.default.createElement("div",{className:"wa-quiz-meaning"},f.default.createElement("h2",{className:"wa-learn-word",lang:"en"},o.w),f.default.createElement("div",{className:"wa-pron-row"},f.default.createElement("span",{className:"wa-ipa"},l==="us"?o.us||o.uk:o.uk||o.us),te(o,R[l])?f.default.createElement(we,{audioKey:`${l}:${i.id}`,url:ne(l,i.id),label:"\u53D1\u97F3"}):null)):null,r.kind==="picture"?f.default.createElement("div",{className:"wa-quiz-picture"},f.default.createElement(se,{id:i.id,word:i.word,full:!0,className:"wa-quiz-art",alt:`${i.word} \u63D2\u753B`}),f.default.createElement("p",{className:"wa-cloze",lang:"en"},b?f.default.createElement(f.default.Fragment,null,b.before,f.default.createElement("span",{className:"wa-blank"},p?b.hidden:"\u3000\u3000\u3000"),b.after):o.senses[0]?.zh),b&&p?f.default.createElement("p",{className:"wa-cloze-zh"},o.ex[0].zh):null):null,r.kind==="listen"?f.default.createElement("div",{className:"wa-quiz-listen"},f.default.createElement("button",{type:"button",className:"wa-listen-orb",onClick:()=>te(o,R[l])&&_e(`listen:${r.id}:replay:${Date.now()}`,ne(l,i.id)),"aria-label":"\u518D\u542C\u4E00\u904D"},f.default.createElement($,{name:"volume",size:44})),f.default.createElement("span",{className:"wa-hint"},"\u518D\u542C\u4E00\u904D")):null,r.kind==="spell"?f.default.createElement("div",{className:"wa-quiz-spell"},f.default.createElement(se,{id:i.id,word:i.word,className:"wa-spell-art",alt:`${i.word} \u63D2\u753B`}),f.default.createElement("div",null,f.default.createElement("p",{className:"wa-spell-zh"},o.senses[0]?.pos?f.default.createElement("span",{className:"wa-pos"},o.senses[0].pos):null," ",o.senses[0]?.zh),b?f.default.createElement("p",{className:"wa-cloze wa-cloze-sm",lang:"en"},b.before,f.default.createElement("span",{className:"wa-blank"},"\u3000\u3000\u3000"),b.after):null,te(o,R[l])?f.default.createElement(we,{audioKey:`${l}:${i.id}`,url:ne(l,i.id),label:"\u542C\u53D1\u97F3"}):null)):null,r.kind==="spell"?f.default.createElement(jo,{entry:o,pending:p,hints:u,onHint:()=>w(m=>Math.min(o.w.length-1,m+1)),onSubmit:m=>T(m,m.trim().toLowerCase()===o.w.toLowerCase())}):f.default.createElement("ul",{className:`wa-options ${r.kind==="meaning"?"is-zh":""}`},c.map((m,z)=>{let k=m.id===i.id,A=p?.value===m.id,x=p?k?"is-answer":A?"is-chosen":"is-dim":"";return f.default.createElement("li",{key:m.id},f.default.createElement("button",{type:"button",className:`wa-option ${x}`,"data-option":m.id,onClick:()=>T(m.id,k),disabled:!!p,"aria-label":p?`${k?"\u6B63\u786E\u7B54\u6848":A?"\u4F60\u7684\u9009\u62E9\uFF0C\u9519\u8BEF":"\u672A\u9009\u62E9"}\uFF1A${r.kind==="meaning"?m.zh:m.word}`:void 0},f.default.createElement("kbd",null,z+1),f.default.createElement("span",{lang:r.kind==="meaning"?"zh":"en"},r.kind==="meaning"?m.zh:m.word),p&&k?f.default.createElement($,{name:"check",size:18}):null,p&&A&&!k?f.default.createElement($,{name:"close",size:18}):null))})),p?f.default.createElement(Fo,{atlas:a,progress:e,entry:o,word:i,correct:p.correct,onNext:O,onOpenWord:n}):null):f.default.createElement("div",{className:"wa-learn-loading"},f.default.createElement(me,{label:"\u52A0\u8F7D\u9898\u76EE\u2026"}))}function Bo({atlas:a,progress:e,session:t,onExit:r,onRestart:n,onOpenWord:o}){let i=Ka(t),s=[...new Set(t.steps.map(u=>u.id))].map(u=>a.byId.get(u)).filter(Boolean),l=s.filter(u=>t.graded[u.id]===E.Again),p=Math.max(1,Math.round(((t.finished||Date.now())-t.started)/6e4)),d=()=>{le(u=>({...u,session:null})),r()};return f.default.createElement("div",{className:"wa-learn-summary"},f.default.createElement("span",{className:"wa-summary-orbit","aria-hidden":"true"},f.default.createElement($,{name:"sparkle",size:30})),f.default.createElement("p",{className:"wa-eyebrow"},"\u8FD9\u4E00\u7A0B\u7ED3\u675F\u4E86"),f.default.createElement("h1",null,i.accuracy>=90?"\u6F02\u4EAE\u7684\u4E00\u7A0B\u3002":i.accuracy>=60?"\u7A33\u7A33\u5411\u524D\u3002":"\u9519\u8FC7\u7684\uFF0C\u4F1A\u518D\u76F8\u9047\u3002"),f.default.createElement("div",{className:"wa-summary-stats"},f.default.createElement("div",{className:"wa-summary-stat is-hero"},f.default.createElement("strong",null,i.accuracy,"%"),f.default.createElement("span",null,"\u9996\u6B21\u6B63\u786E\u7387")),f.default.createElement("div",{className:"wa-summary-stat"},f.default.createElement("strong",null,t.newIds.length),f.default.createElement("span",null,"\u65B0\u8BCD")),f.default.createElement("div",{className:"wa-summary-stat"},f.default.createElement("strong",null,t.reviewIds.length),f.default.createElement("span",null,"\u590D\u4E60")),f.default.createElement("div",{className:"wa-summary-stat"},f.default.createElement("strong",null,p),f.default.createElement("span",null,"\u5206\u949F"))),f.default.createElement("ul",{className:"wa-summary-words"},s.map(u=>f.default.createElement("li",{key:u.id,className:t.graded[u.id]===E.Again?"is-wrong":"",role:"button",tabIndex:0,title:`${u.word} ${u.zh}`,onClick:()=>o(u.id),onKeyDown:w=>w.key==="Enter"&&o(u.id)},f.default.createElement(se,{id:u.id,word:u.word,className:"wa-summary-thumb"}),f.default.createElement("span",{lang:"en"},u.word),f.default.createElement("small",null,u.zh)))),f.default.createElement("p",{className:"wa-summary-note"},"FSRS \u5DF2\u4E3A\u6BCF\u4E2A\u8BCD\u6392\u597D\u4E0B\u6B21\u76F8\u9047\u7684\u65F6\u95F4\u3002\u7B54\u9519\u7684\u8BCD\uFF0C\u4F1A\u66F4\u65E9\u56DE\u6765\u3002"),f.default.createElement("div",{className:"wa-summary-actions"},l.length>0?f.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:()=>n({ids:l.map(u=>u.id)})},f.default.createElement($,{name:"refresh",size:16})," \u518D\u7EC3 ",l.length," \u4E2A\u9519\u8BCD"):null,f.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary wa-btn-lg",onClick:d,autoFocus:!0},"\u5B8C\u6210 ",f.default.createElement($,{name:"check",size:17}))),f.default.createElement("p",{className:"wa-hint"},"\u8FDB\u5EA6\u5DF2\u81EA\u52A8\u4FDD\u5B58"))}function rt({atlas:a,progress:e,onExit:t,onRestart:r,onOpenWord:n}){(0,f.useEffect)(()=>()=>Se(),[]);let o=e.session;if(!o)return f.default.createElement(Kt,{bar:f.default.createElement(qt,{progress:0,value:0,total:1,count:"",onExit:t}),centered:!0},f.default.createElement(he,{icon:"sparkle",title:"\u4ECA\u5929\u6CA1\u6709\u5F85\u5B66\u7684\u8BCD"},f.default.createElement("p",null,"\u53EF\u4EE5\u5148\u56DE\u987E\u56FE\u9274\uFF0C\u6216\u8005\u660E\u5929\u518D\u6765\u3002"),f.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary",onClick:t},"\u8FD4\u56DE\u4ECA\u65E5")));if(o.finished||o.index>=o.steps.length)return f.default.createElement(Kt,{bar:f.default.createElement(qt,{progress:1,value:1,total:1,count:"\u5B8C\u6210",onExit:t}),centered:!0},f.default.createElement(Bo,{atlas:a,progress:e,session:o,onExit:t,onRestart:r,onOpenWord:n}));let i=o.steps[o.index],s=o.steps.length;return f.default.createElement(Kt,{key:`${o.id}-${o.index}`,bar:f.default.createElement(qt,{progress:o.index/s,value:o.index,total:s,count:`${o.index+1} / ${s}`,onExit:t})},i.kind==="intro"?f.default.createElement(To,{atlas:a,progress:e,step:i,onOpenWord:n}):f.default.createElement(Po,{atlas:a,progress:e,session:o,step:i,onOpenWord:n}))}var h=fe(require("react"),1);var ln="/word-atlas/api/offline",on=[{id:"thumb",label:"\u7F29\u7565\u56FE",hint:"\u7F51\u683C / \u67E5\u8BCD\u6D6E\u7A97",bytes:84*1024*1024},{id:"img",label:"\u5B8C\u6574\u63D2\u753B",hint:"\u8BCD\u5361\u5927\u56FE",bytes:199*1024*1024},{id:"audio",label:"\u53D1\u97F3",hint:"\u82F1\u97F3 / \u7F8E\u97F3 / \u4F8B\u53E5\u6717\u8BFB",bytes:418*1024*1024}];function nt(a){if(!Number.isFinite(a)||a<=0)return"0 B";let e=["B","KB","MB","GB"],t=a,r=0;for(;t>=1024&&r<e.length-1;)t/=1024,r+=1;return`${t.toFixed(r>=2?1:0)} ${e[r]}`}function Oo(a){if(!Number.isFinite(a)||a<=0)return"\u2014";let e=Math.round(a/1e3);if(e<60)return`${e} \u79D2`;let t=Math.round(e/60);return t<60?`${t} \u5206\u949F`:`${(t/60).toFixed(1)} \u5C0F\u65F6`}function ot({value:a,options:e,onChange:t,ariaLabel:r}){return h.default.createElement("div",{className:"wa-seg",role:"group","aria-label":r},e.map(n=>h.default.createElement("button",{type:"button",key:n.value,className:a===n.value?"is-on":"",onClick:()=>t(n.value)},n.label)))}function sn({on:a,onChange:e,label:t,hint:r}){return h.default.createElement("label",{className:"wa-switch-row"},h.default.createElement("span",null,h.default.createElement("b",null,t),r?h.default.createElement("small",null,r):null),h.default.createElement("button",{type:"button",role:"switch","aria-checked":a,"aria-label":t,className:`wa-switch ${a?"is-on":""}`,onClick:()=>e(!a)},h.default.createElement("span",null)))}function Uo({offline:a,refresh:e}){let[t,r]=(0,h.useState)(["thumb"]),[n,o]=(0,h.useState)("remote"),[i,s]=(0,h.useState)(!1),[l,p]=(0,h.useState)(""),d=a?.state==="downloading";(0,h.useEffect)(()=>{a?.contentDirReady&&o("repo")},[a?.contentDirReady]);let u=async(z,k,A)=>{s(!0),p("");try{let x=await fetch(`${ln}${k}`,{method:z,headers:A?{"Content-Type":"application/json"}:void 0,body:A?JSON.stringify(A):void 0}),S=await x.json().catch(()=>({}));return(!x.ok||S.ok===!1)&&p(S.error||`\u8BF7\u6C42\u5931\u8D25\uFF08HTTP ${x.status}\uFF09`),await e(),S}catch(x){return p(String(x?.message||x)),null}finally{s(!1)}},w=z=>{r(k=>k.includes(z)?k.filter(A=>A!==z):[...k,z])},c=on.filter(z=>t.includes(z.id)).reduce((z,k)=>z+k.bytes,0),b=a?.done??0,T=a?.total??0,O=T>0?Math.min(100,Math.round(b/T*100)):0,I=a?.state==="done"||(a?.done??0)>0,m=!!a?.contentDirReady;return h.default.createElement("section",{className:"wa-panel"},h.default.createElement("h3",{className:"wa-eyebrow"},"\u79BB\u7EBF\u7D20\u6750"),h.default.createElement("p",{className:"wa-panel-hint"},"\u8BCD\u5E93\u6587\u5B57\u5DF2\u5185\u7F6E\uFF1B\u8FD9\u91CC\u628A\u63D2\u753B\u4E0E\u53D1\u97F3\u4E0B\u8F7D\u5230\u672C\u673A\uFF0C\u65AD\u7F51\u4E5F\u80FD\u770B\u56FE\u3001\u542C\u97F3\u3002",a?.contentDirReady?" \u5F53\u524D\u5DF2\u68C0\u6D4B\u5230\u672C\u673A\u8BCD\u5149\u4ED3\u5E93\uFF0C\u7D20\u6750\u53EF\u76F4\u63A5\u4ECE\u672C\u5730\u8BFB\u53D6\u3002":""),h.default.createElement("div",{className:"wa-offline-source"},h.default.createElement("span",{className:`wa-dot ${m||I?"is-on":""}`}),m?`\u672C\u673A\u8BCD\u5149\u4ED3\u5E93\uFF1A${a?.contentDir}`:I?`\u79BB\u7EBF\u5305\uFF1A${nt(a?.bytes??0)}\uFF08${b.toLocaleString("en-US")}${T?` / ${T.toLocaleString("en-US")}`:""} \u4E2A\u6587\u4EF6\uFF09`:"\u5B98\u65B9\u7AD9\u70B9\u6309\u9700\u52A0\u8F7D\uFF08\u9996\u6B21\u770B\u56FE/\u542C\u97F3\u9700\u8981\u8054\u7F51\uFF09",a?.autoCache?" \xB7 \u6309\u9700\u7F13\u5B58\u5DF2\u5F00\u542F":""),a?.dir?h.default.createElement("p",{className:"wa-panel-path"},"\u4FDD\u5B58\u4F4D\u7F6E\uFF1A",a.dir):null,h.default.createElement("div",{className:"wa-tier-list"},on.map(z=>h.default.createElement("label",{key:z.id,className:"wa-tier"},h.default.createElement("input",{type:"checkbox",checked:t.includes(z.id),disabled:d,onChange:()=>w(z.id)}),h.default.createElement("span",null,h.default.createElement("b",null,z.label),h.default.createElement("small",null,z.hint," \xB7 \u7EA6 ",nt(z.bytes)))))),h.default.createElement("div",{className:"wa-offline-actions"},h.default.createElement("select",{value:n,onChange:z=>o(z.target.value),disabled:d,"aria-label":"\u4E0B\u8F7D\u6765\u6E90"},h.default.createElement("option",{value:"remote"},"\u5B98\u65B9\u7AD9\u70B9"),h.default.createElement("option",{value:"repo",disabled:!a?.contentDirReady},"\u672C\u673A\u8BCD\u5149\u4ED3\u5E93")),d?h.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",disabled:i,onClick:()=>u("POST","/cancel")},"\u53D6\u6D88\u4E0B\u8F7D"):h.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary",disabled:i||t.length===0,onClick:()=>u("POST","/start",{tiers:t,source:n})},"\u5F00\u59CB\u4E0B\u8F7D",c?`\uFF08\u7EA6 ${nt(c)}\uFF09`:""),h.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",disabled:i||d||!I,onClick:()=>{confirm("\u5220\u9664\u5DF2\u4E0B\u8F7D\u7684\u79BB\u7EBF\u7D20\u6750\uFF1F\u8BCD\u5E93\u6587\u5B57\u4E0D\u53D7\u5F71\u54CD\u3002")&&u("DELETE","")}},"\u5220\u9664\u79BB\u7EBF\u5305")),d||b>0?h.default.createElement("div",{className:"wa-progress"},h.default.createElement("div",{className:"wa-progress-bar"},h.default.createElement("span",{style:{width:`${O}%`}})),h.default.createElement("div",{className:"wa-progress-meta"},h.default.createElement("span",null,d?"\u4E0B\u8F7D\u4E2D":a?.state==="cancelled"?"\u5DF2\u53D6\u6D88":"\u5DF2\u5B8C\u6210"," \xB7 ",O,"%"),h.default.createElement("span",null,b.toLocaleString("en-US"),T?` / ${T.toLocaleString("en-US")}`:""," \u4E2A\u6587\u4EF6",a?.speed?` \xB7 ${nt(a.speed)}/s`:"",d&&a?.etaMs?` \xB7 \u5269\u7EA6 ${Oo(a.etaMs)}`:"",a?.failed?` \xB7 \u5931\u8D25 ${a.failed}`:""))):null,l?h.default.createElement("p",{className:"wa-error-text"},l):null,h.default.createElement("p",{className:"wa-panel-note"},"\u4E0B\u8F7D\u6E90\uFF1A\u5B98\u65B9\u7AD9\u70B9\uFF08CC BY 4.0 \u7D20\u6750\uFF09\u6216\u672C\u673A\u8BCD\u5149\u4ED3\u5E93\uFF1B\u754C\u9762\u97F3\u6548\u4E0D\u5728\u79BB\u7EBF\u5305\u5185\u3002 \u6309\u9700\u7F13\u5B58\u53EF\u5728 profile \u7684 ",h.default.createElement("code",null,"cordis.patch.yml")," \u4E2D\u8BBE\u7F6E ",h.default.createElement("code",null,"autoCache: true"),"\u3002"))}function Go({days:a}){let t=new Date,r=new Date;r.setDate(t.getDate()-139-t.getDay());let n=[],o=new Date(r);for(let s=0;s<147;s+=1){let l=Ye(o);n.push({key:l,value:a[l]?.r??0,future:o>t}),o.setDate(o.getDate()+1)}let i=s=>s===0?0:s<10?1:s<25?2:s<50?3:4;return h.default.createElement("div",{className:"wa-heatmap",role:"img","aria-label":"\u5B66\u4E60\u70ED\u529B\u56FE"},n.map(s=>h.default.createElement("span",{key:s.key,className:`wa-heat-${s.future?"x":i(s.value)}`,title:`${s.key} \xB7 ${s.value} \u9898`})))}function it({atlas:a,progress:e,onOpenWord:t}){let r=(0,h.useMemo)(()=>{let m=Object.values(e.cards),z=Object.values(e.days),k=z.reduce((F,W)=>F+(W.r||0),0),A=z.reduce((F,W)=>F+(W.c||0),0),x=z.reduce((F,W)=>F+(W.t||0),0),S=Array.from({length:7},(F,W)=>{let Q=new Date;Q.setHours(23,59,59,999),Q.setDate(Q.getDate()+W);let ee=new Date(Q);return ee.setHours(0,0,0,0),m.filter(pe=>(W===0||pe.due>=ee.getTime())&&pe.due<=Q.getTime()).length});return{learned:m.length,mastered:m.filter(Le).length,reviews:k,accuracy:k?Math.round(A/k*100):0,minutes:Math.round(x/60),streakDays:Xe(e.days),forecast:S}},[e]),n=(0,h.useMemo)(()=>a?e.mistakes.map(m=>a.byId.get(m)).filter(Boolean).slice(0,24):[],[a,e.mistakes]),o=Math.max(1,...r.forecast),[i,s]=(0,h.useState)(null),[l,p]=(0,h.useState)(""),[d,u]=(0,h.useState)(""),w=(0,h.useRef)(null),c=e.settings,b=(0,h.useCallback)(async()=>{try{let m=await fetch(ln,{cache:"no-store"});if(!m.ok)throw new Error(`HTTP ${m.status}`);let z=await m.json();s(z),p("")}catch{p("\u79BB\u7EBF\u670D\u52A1\u4E0D\u53EF\u7528\uFF0C\u8BF7\u786E\u8BA4 Host \u63D2\u4EF6\u5DF2\u542F\u7528\u3002")}},[]);(0,h.useEffect)(()=>{b()},[b]),(0,h.useEffect)(()=>{if(i?.state!=="downloading")return;let m=setInterval(b,1200);return()=>clearInterval(m)},[i?.state,b]);let T=m=>le(z=>({...z,settings:{...z.settings,...m}})),O=()=>{let m=new Blob([vr()],{type:"application/json"}),z=URL.createObjectURL(m),k=document.createElement("a");k.href=z,k.download=`word-atlas-backup-${new Date().toISOString().slice(0,10)}.json`,k.click(),setTimeout(()=>URL.revokeObjectURL(z),1e3),u("\u5DF2\u5BFC\u51FA\u5907\u4EFD\u6587\u4EF6")},I=async m=>{let z=await m.text(),k=kr(z);u(k.ok?`\u5DF2\u6062\u590D ${k.cards} \u4E2A\u8BCD\u7684\u8BB0\u5FC6`:k.error)};return h.default.createElement("div",{className:"wa-settings"},h.default.createElement("section",{className:"wa-me-strip"},h.default.createElement("div",{className:"wa-me-stat"},h.default.createElement("strong",null,r.streakDays),h.default.createElement("span",null,"\u8FDE\u7EED\u5B66\u4E60 \xB7 \u5929")),h.default.createElement("div",{className:"wa-me-stat"},h.default.createElement("strong",null,r.learned.toLocaleString("en-US")),h.default.createElement("span",null,"\u5DF2\u70B9\u4EAE")),h.default.createElement("div",{className:"wa-me-stat"},h.default.createElement("strong",null,r.mastered.toLocaleString("en-US")),h.default.createElement("span",null,"\u957F\u671F\u8BB0\u4F4F")),h.default.createElement("div",{className:"wa-me-stat"},h.default.createElement("strong",null,r.accuracy,"%"),h.default.createElement("span",null,"\u9996\u6B21\u6B63\u786E\u7387")),h.default.createElement("div",{className:"wa-me-stat"},h.default.createElement("strong",null,r.minutes),h.default.createElement("span",null,"\u5B66\u4E60\u5206\u949F"))),h.default.createElement("div",{className:"wa-me-grid"},h.default.createElement("section",{className:"wa-panel"},h.default.createElement("h3",{className:"wa-eyebrow"},"\u8FC7\u53BB 20 \u5468"),h.default.createElement(Go,{days:e.days}),h.default.createElement("p",{className:"wa-panel-note"},"\u4E00\u683C\u662F\u4E00\u5929\uFF0C\u989C\u8272\u8D8A\u6DF1\uFF0C\u90A3\u5929\u7B54\u5F97\u8D8A\u591A\u3002\u300C\u957F\u671F\u8BB0\u4F4F\u300D\u6307\u8BB0\u5FC6\u7A33\u5B9A\u5EA6\u8D85\u8FC7 21 \u5929\u3002")),h.default.createElement("section",{className:"wa-panel"},h.default.createElement("h3",{className:"wa-eyebrow"},"\u672A\u6765 7 \u5929\u7684\u590D\u4E60\u91CF"),h.default.createElement("ol",{className:"wa-forecast"},r.forecast.map((m,z)=>h.default.createElement("li",{key:z},h.default.createElement("span",{style:{height:`${Math.max(6,Math.round(m/o*100))}%`}}),h.default.createElement("b",null,m),h.default.createElement("small",null,z===0?"\u4ECA\u5929":z===1?"\u660E\u5929":`+${z}`)))))),n.length>0?h.default.createElement("section",{className:"wa-panel"},h.default.createElement("div",{className:"wa-panel-head"},h.default.createElement("h3",{className:"wa-eyebrow"},"\u9519\u8BCD\u672C"),h.default.createElement("span",{className:"wa-muted"},"\u6700\u8FD1 ",n.length," \u4E2A")),h.default.createElement("ul",{className:"wa-mistakes"},n.map(m=>h.default.createElement("li",{key:m.id},h.default.createElement("button",{type:"button",onClick:()=>t(m.id),"aria-label":`\u67E5\u770B ${m.word}`},h.default.createElement(se,{id:m.id,word:m.word,className:"wa-mistake-thumb"}),h.default.createElement("span",null,h.default.createElement("b",{lang:"en"},m.word),h.default.createElement("small",null,m.zh)),h.default.createElement("em",null,m.cefr)))))):null,h.default.createElement("section",{className:"wa-panel"},h.default.createElement("h3",{className:"wa-eyebrow"},"\u5B66\u4E60\u8BBE\u7F6E"),h.default.createElement("div",{className:"wa-field"},h.default.createElement("div",null,h.default.createElement("b",null,"\u6BCF\u65E5\u65B0\u8BCD"),h.default.createElement("small",null,"\u590D\u4E60\u4E0D\u8BBE\u4E0A\u9650\uFF0C\u7B97\u6CD5\u53EA\u5B89\u6392\u5FEB\u8981\u9057\u5FD8\u7684\u8BCD\u3002")),h.default.createElement(ot,{ariaLabel:"\u6BCF\u65E5\u65B0\u8BCD",value:c.dailyNew,options:[5,10,15,20,30].map(m=>({value:m,label:String(m)})),onChange:m=>T({dailyNew:m})})),h.default.createElement("div",{className:"wa-field"},h.default.createElement("div",null,h.default.createElement("b",null,"\u4ECE\u54EA\u4E2A\u96BE\u5EA6\u5F00\u59CB"),h.default.createElement("small",null,"\u5B66\u4E60\u4F1A\u8BDD\u4F1A\u8DF3\u8FC7\u66F4\u7B80\u5355\u7684\u7EA7\u522B\u3002")),h.default.createElement(ot,{ariaLabel:"\u8D77\u70B9\u96BE\u5EA6",value:c.startLevel,options:a.cefr.map((m,z)=>({value:z,label:m})),onChange:m=>T({startLevel:m})})),h.default.createElement("div",{className:"wa-field"},h.default.createElement("div",null,h.default.createElement("b",null,"\u76EE\u6807\u8BB0\u5FC6\u7387"),h.default.createElement("small",null,"\u8D8A\u9AD8\u590D\u4E60\u8D8A\u9891\u7E41\uFF0C90% \u662F\u5927\u591A\u6570\u4EBA\u7684\u751C\u70B9\u3002")),h.default.createElement(ot,{ariaLabel:"\u76EE\u6807\u8BB0\u5FC6\u7387",value:c.retention,options:[.85,.9,.95].map(m=>({value:m,label:`${Math.round(m*100)}%`})),onChange:m=>T({retention:m})})),h.default.createElement("div",{className:"wa-field"},h.default.createElement("div",null,h.default.createElement("b",null,"\u53D1\u97F3\u504F\u597D"),h.default.createElement("small",null,"\u8BCD\u6761\u8BE6\u60C5\u91CC\u4E24\u79CD\u53D1\u97F3\u90FD\u53EF\u4EE5\u64AD\u653E\u3002")),h.default.createElement(ot,{ariaLabel:"\u53D1\u97F3\u504F\u597D",value:c.accent,options:[{value:"uk",label:"\u82F1\u5F0F"},{value:"us",label:"\u7F8E\u5F0F"}],onChange:m=>T({accent:m})})),h.default.createElement(sn,{label:"\u81EA\u52A8\u64AD\u653E\u53D1\u97F3",hint:"\u8BCD\u5361\u4E0E\u542C\u97F3\u9898\u81EA\u52A8\u64AD\u653E",on:c.autoplay,onChange:m=>T({autoplay:m})}),h.default.createElement(sn,{label:"\u590D\u4E60\u65F6\u52A0\u5165\u62FC\u5199\u9898",hint:"\u5B66\u4E60\u4F1A\u8BDD\u4E2D\u52A0\u5165\u62FC\u5199\u9898",on:c.spell,onChange:m=>T({spell:m})})),h.default.createElement(Uo,{offline:i,refresh:b}),l?h.default.createElement("p",{className:"wa-error-text"},l):null,h.default.createElement("section",{className:"wa-panel"},h.default.createElement("h3",{className:"wa-eyebrow"},"\u6570\u636E\u4E0E\u5907\u4EFD"),h.default.createElement("p",{className:"wa-panel-hint"},"\u8FDB\u5EA6\u4FDD\u5B58\u5728\u672C\u673A\uFF08Host \u6587\u4EF6 + \u6D4F\u89C8\u5668\u955C\u50CF\uFF09\uFF0C\u65E0\u9700\u8D26\u53F7\u3002\u6362\u8BBE\u5907\u65F6\u5BFC\u51FA\u5907\u4EFD\u518D\u5BFC\u5165\u5373\u53EF\uFF0C\u683C\u5F0F\u4E0E\u8BCD\u5149\u7EBF\u4E0A\u7248\u517C\u5BB9\u3002"),h.default.createElement("div",{className:"wa-backup-actions"},h.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:O},h.default.createElement($,{name:"book",size:15})," \u5BFC\u51FA\u5907\u4EFD"),h.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:()=>w.current?.click()},h.default.createElement($,{name:"refresh",size:15})," \u5BFC\u5165\u5907\u4EFD"),h.default.createElement("input",{ref:w,type:"file",accept:"application/json,.json",hidden:!0,onChange:m=>{let z=m.target.files?.[0];m.target.value="",z&&I(z)}}),h.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost wa-danger",onClick:()=>{confirm("\u786E\u5B9A\u6E05\u7A7A\u5168\u90E8\u5B66\u4E60\u8BB0\u5F55\uFF1F\u6B64\u64CD\u4F5C\u65E0\u6CD5\u64A4\u9500\uFF0C\u5EFA\u8BAE\u5148\u5BFC\u51FA\u5907\u4EFD\u3002")&&(Nr(),u("\u5B66\u4E60\u8BB0\u5F55\u5DF2\u6E05\u7A7A"))}},"\u6E05\u7A7A\u5B66\u4E60\u8BB0\u5F55")),d?h.default.createElement("p",{className:"wa-panel-note"},d):null,h.default.createElement("p",{className:"wa-panel-note"},"\u5DF2\u5B66 ",Object.keys(e.cards).length.toLocaleString("en-US")," \u8BCD \xB7 \u6536\u85CF ",e.bookmarks.length," \u8BCD",e.savedAt?` \xB7 \u4E0A\u6B21\u4FDD\u5B58 ${new Date(e.savedAt).toLocaleString()}`:"")),h.default.createElement("section",{className:"wa-panel"},h.default.createElement("h3",{className:"wa-eyebrow"},"\u5173\u4E8E"),h.default.createElement("p",{className:"wa-panel-hint"},"\u8BCD\u5149 \xB7 Word Atlas DSH \u63D2\u4EF6 v0.3.0 \xB7 \u8BCD\u5E93/\u63D2\u753B/\u5F55\u97F3\u6765\u81EA"," ",h.default.createElement("a",{href:"https://github.com/designfuchen/word-atlas",target:"_blank",rel:"noreferrer"},"designfuchen/word-atlas"),"\uFF08Word Atlas contributors\uFF0CCC BY 4.0\uFF09\uFF1B\u63D2\u4EF6\u4EE3\u7801 MIT\uFF1B\u590D\u4E60\u8C03\u5EA6 ts-fsrs\u3002"),h.default.createElement("p",{className:"wa-panel-path"},"\u63D2\u4EF6\u4ED3\u5E93\uFF1Agithub.com/MC0571/DSH-Plugin-Word-Atlas")))}var D=fe(require("react"),1);var be=a=>String(a||"").normalize("NFKC").replace(/[’‘]/g,"'").replace(/[“”]/g,'"').replace(/[‐‑–—]/g,"-").replace(/\s/g," "),xa=(a,e)=>be(a).toLowerCase()===be(e).toLowerCase(),Ke=a=>be(a).replace(/\s+/g,"");function dn(a,e){let t=Array.from(be(e));return Array.from(be(a)).filter((r,n)=>xa(r,t[n]||"")).length}function pn(a,e,t){let r=Array.from(be(a)),n=Array.from(be(e)),o=Array.from(be(t)),i=0;for(;i<r.length&&i<n.length&&r[i]===n[i];)i+=1;let s=0;for(;s<r.length-i&&s<n.length-i&&r[r.length-1-s]===n[n.length-1-s];)s+=1;let l=n.slice(i,n.length-s),p=0;for(let d=0;d<l.length;d+=1)xa(l[d],o[i+d]||"")&&(p+=1);return{total:l.length,correct:p}}function st(a,e,t,r){let n=p=>Number.isFinite(p)?Math.max(0,p):0,o=n(e),i=Math.min(n(a),o),s=n(t),l=n(r);return{accuracy:o?Math.round(i/o*100):100,wpm:l>=1e3?Math.round(s/5/(l/6e4)):0}}var Zt=[{id:"word",name:"\u5355\u8BCD",desc:"\u770B\u56FE\u5199\u51FA\u5355\u8BCD",icon:"type"},{id:"sentence",name:"\u4F8B\u53E5",desc:"\u7167\u7740\u6284\u5199\uFF0C\u7EC3\u51FA\u624B\u611F",icon:"keyboard"},{id:"dictation",name:"\u542C\u5199",desc:"\u53EA\u542C\u58F0\u97F3\uFF0C\u5199\u4E0B\u6574\u53E5",icon:"headphones"}],Wo=[{id:"recent",label:"\u6700\u8FD1\u5B66\u8FC7"},{id:"mistakes",label:"\u9519\u8BCD\u672C"},{id:"saved",label:"\u6536\u85CF"},{id:"path",label:"\u5B66\u4E60\u8DEF\u7EBF"}];function lt({atlas:a,progress:e}){let[t,r]=(0,D.useState)("word"),[n,o]=(0,D.useState)(()=>Object.keys(e.cards).length>0?"recent":"path"),[i,s]=(0,D.useState)(null),[l,p]=(0,D.useState)(!1),[d,u]=(0,D.useState)(""),w=(0,D.useMemo)(()=>{let m=Object.entries(e.cards).sort((k,A)=>(A[1].last??0)-(k[1].last??0)).map(([k])=>k);return(n==="recent"?m:n==="mistakes"?e.mistakes:n==="saved"?e.bookmarks:a.words.filter(k=>k.cefr>=e.settings.startLevel).slice(0,400).map(k=>k.id)).filter(k=>a.byId.has(k))},[a,e.cards,e.mistakes,e.bookmarks,e.settings.startLevel,n]),c=e.typing.filter(m=>m.mode===t).reduce((m,z)=>Math.max(m,z.wpm||0),0),b=e.typing.length,T=async()=>{if(!l){p(!0),u("");try{let m=pa(w.slice(0,60),Me(String(Date.now()))).slice(0,10),z=[];for(let A of m)try{z.push(await ye(a,A))}catch{}let k=z.filter(A=>A&&(t==="word"||A.ex?.length>0));if(k.length===0){u("\u8FD9\u4E2A\u6765\u6E90\u6682\u65F6\u6CA1\u6709\u53EF\u7EC3\u4E60\u7684\u8BCD\uFF0C\u5148\u53BB\u5B66\u51E0\u4E2A\u6216\u6362\u4E2A\u6765\u6E90\u3002");return}s({entries:k,key:Date.now(),mode:t})}finally{p(!1)}}};if(i)return D.default.createElement(Ho,{key:i.key,atlas:a,progress:e,mode:i.mode,entries:i.entries,onExit:()=>s(null),onAgain:T});let O=Zt.find(m=>m.id===t)||Zt[0],I=sa(t==="dictation"?"listen.webp":"hero.webp");return D.default.createElement("div",{className:"wa-practice"},D.default.createElement("header",{className:"wa-practice-head"},D.default.createElement("p",{className:"wa-eyebrow"},"\u7EC3\u4E60 \xB7 Typing Studio"),D.default.createElement("h1",null,"\u8BA9\u624B\uFF0C\u4E5F\u8BB0\u4F4F\u5B83\u4EEC\u3002"),D.default.createElement("p",null,"\u6253\u5B57\u53EA\u7EC3\u62FC\u5199\u548C\u624B\u611F\uFF0C\u4E0D\u4F1A\u6539\u52A8\u8BB0\u5FC6\u8FDB\u5EA6\u3002")),D.default.createElement("div",{className:"wa-practice-grid"},D.default.createElement("section",{className:"wa-panel"},D.default.createElement("h3",{className:"wa-eyebrow"},"\u6A21\u5F0F"),D.default.createElement("div",{className:"wa-mode-cards"},Zt.map(m=>D.default.createElement("button",{key:m.id,type:"button",className:`wa-mode-card ${t===m.id?"is-on":""}`,"aria-pressed":t===m.id,onClick:()=>r(m.id)},D.default.createElement($,{name:m.icon,size:22}),D.default.createElement("b",null,m.name),D.default.createElement("small",null,m.desc)))),D.default.createElement("h3",{className:"wa-eyebrow wa-mt"},"\u8BCD\u6765\u81EA"),D.default.createElement("div",{className:"wa-seg wa-seg-wide"},Wo.map(m=>D.default.createElement("button",{key:m.id,type:"button",className:n===m.id?"is-on":"","aria-pressed":n===m.id,onClick:()=>o(m.id)},m.label))),D.default.createElement("p",{className:"wa-panel-hint"},w.length?n==="path"?"\u4ECE\u5B66\u4E60\u8DEF\u7EBF\u7684\u524D 400 \u4E2A\u8BCD\u91CC\u968F\u673A\u62BD 10 \u4E2A\u3002":`\u53EF\u7EC3 ${w.length} \u4E2A\u8BCD\uFF0C\u6BCF\u8F6E\u968F\u673A 10 \u4E2A\u3002`:"\u8FD9\u91CC\u8FD8\u6CA1\u6709\u8BCD\uFF0C\u5148\u53BB\u5B66\u51E0\u4E2A\uFF0C\u6216\u6362\u4E2A\u6765\u6E90\u3002"),D.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary wa-btn-lg wa-practice-start",onClick:T,disabled:!w.length||l},l?"\u51C6\u5907\u4E2D\u2026":"\u5F00\u59CB\u4E00\u8F6E"),d?D.default.createElement("p",{className:"wa-error-text"},d):null),D.default.createElement("section",{className:"wa-panel wa-practice-side"},D.default.createElement("img",{src:I,alt:"",onError:m=>{m.currentTarget.style.visibility="hidden"}}),D.default.createElement("div",{className:"wa-practice-stats"},D.default.createElement("div",null,D.default.createElement("strong",null,c),D.default.createElement("span",null,"\u6700\u4F73\u901F\u5EA6 \xB7 WPM")),D.default.createElement("div",null,D.default.createElement("strong",null,b),D.default.createElement("span",null,"\u5B8C\u6210\u8F6E\u6B21"))),D.default.createElement("p",{className:"wa-panel-note"},"WPM \u6309\u6807\u51C6\u6BCF 5 \u4E2A\u5B57\u7B26\u8BA1 1 \u8BCD\uFF0C\u53EA\u7EDF\u8BA1\u6B63\u786E\u8F93\u5165\u3002"),D.default.createElement("p",{className:"wa-panel-note"},"\u5F53\u524D\u6A21\u5F0F\uFF1A",O.name," \xB7 ",O.desc))))}function Ho({atlas:a,progress:e,mode:t,entries:r,onExit:n,onAgain:o}){let[i,s]=(0,D.useState)(0),[l,p]=(0,D.useState)(""),d=(0,D.useRef)({typed:0,correct:0,accepted:0,ms:0}),[u,w]=(0,D.useState)(()=>st(0,0,0,0)),[c,b]=(0,D.useState)(!1),T=(0,D.useRef)(null),O=(0,D.useRef)(null),I=e.settings.accent,m=r[i],z=t==="word"?m.w:m.ex[0]?.en||m.w,k=t==="dictation"?"ex":I,A=()=>{te(m,R[k])&&_e(`practice:${k}:${m.id}:${i}`,ne(k,m.id))};(0,D.useEffect)(()=>{p(""),T.current=null,O.current?.focus(),(t==="dictation"||t==="word"&&e.settings.autoplay)&&A()},[i]),(0,D.useEffect)(()=>()=>Se(),[]);let x=t==="word"?be(z):Ke(z),S=N=>{let U=T.current?performance.now()-T.current:0,K=dn(t==="word"?be(N):Ke(N),x),q={...d.current,accepted:d.current.accepted+K,ms:d.current.ms+U};d.current=q;let X=st(q.correct,q.typed,q.accepted,q.ms);if(w(X),i+1>=r.length){b(!0),le(ie=>({...ie,typing:[...ie.typing,{at:Date.now(),mode:t,items:r.length,wpm:X.wpm,accuracy:X.accuracy}].slice(-500)}));return}window.setTimeout(()=>s(ie=>ie+1),260)},F=N=>{if(c)return;T.current===null&&N&&(T.current=performance.now());let U=t==="word"?be(l):Ke(l),K=t==="word"?be(N):Ke(N),q=pn(U,K,x),X={...d.current,typed:d.current.typed+q.total,correct:d.current.correct+q.correct};d.current=X,w(st(X.correct,X.typed,X.accepted,X.ms)),p(N),K.length>=x.length&&xa(K,x)&&S(N)};if(c)return D.default.createElement("div",{className:"wa-practice wa-typing-done"},D.default.createElement("section",{className:"wa-panel"},D.default.createElement("p",{className:"wa-eyebrow"},"\u672C\u8F6E\u5B8C\u6210"),D.default.createElement("h1",null,u.wpm," ",D.default.createElement("small",null,"WPM")),D.default.createElement("p",{className:"wa-panel-hint"},"\u51C6\u786E\u7387 ",u.accuracy,"% \xB7 ",r.length," \u9879"),D.default.createElement("div",{className:"wa-summary-actions"},D.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:n},"\u8FD4\u56DE"),D.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary wa-btn-lg",onClick:o,autoFocus:!0},D.default.createElement($,{name:"rotateCcw",size:17})," \u518D\u6765\u4E00\u8F6E"))));let W=Array.from(z),Q=Array.from(be(l)).filter(N=>!/\s/.test(N)),ee=-1,pe=r.length?Math.round(i/r.length*100):0;return D.default.createElement("div",{className:"wa-practice wa-typing"},D.default.createElement("header",{className:"wa-typing-top"},D.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:n},"\u7ED3\u675F"),D.default.createElement("div",{className:"wa-typing-progress"},D.default.createElement("span",{style:{width:`${pe}%`}})),D.default.createElement("span",{className:"wa-typing-meter"},D.default.createElement("b",null,u.wpm)," WPM \xB7 ",D.default.createElement("b",null,u.accuracy,"%"))),D.default.createElement("section",{className:"wa-typing-stage",onClick:()=>O.current?.focus()},t==="word"?D.default.createElement("div",{className:"wa-typing-cue"},D.default.createElement(se,{id:m.id,word:m.w,full:!0,className:"wa-typing-art",alt:`${m.w} \u63D2\u753B`}),D.default.createElement("p",null,m.senses[0]?.pos?D.default.createElement("span",{className:"wa-pos"},m.senses[0].pos):null," ",m.senses[0]?.zh)):D.default.createElement("p",{className:"wa-typing-zh"},t==="dictation"?D.default.createElement("button",{type:"button",className:"wa-link",onClick:A},"\u518D\u542C\u4E00\u904D"):null,m.ex[0]?.zh),D.default.createElement("p",{className:`wa-typing-text ${t==="word"?"is-word":""} ${t==="dictation"?"is-hidden":""}`,lang:"en","aria-hidden":"true"},W.map((N,U)=>{if(/\s/.test(N))return D.default.createElement("span",{key:U,className:"is-space","aria-hidden":"true"},"\xA0");ee+=1;let K=Q[ee],q=K===void 0?ee===Q.length?"is-caret":"":xa(K,N)?"is-ok":"is-bad",X=t==="dictation"&&K===void 0&&/[A-Za-z]/.test(N)?"\xB7":N;return D.default.createElement("span",{key:U,className:q},X)})),D.default.createElement("input",{ref:O,className:"wa-typing-input",value:l,onChange:N=>F(N.target.value),autoFocus:!0,autoCapitalize:"off",autoCorrect:"off",autoComplete:"off",spellCheck:!1,"aria-label":"\u5728\u8FD9\u91CC\u8F93\u5165"}),D.default.createElement("p",{className:"wa-panel-note wa-typing-help"},t==="dictation"?"\u542C\u4E0D\u6E05\u53EF\u4EE5\u70B9\u300C\u518D\u542C\u4E00\u904D\u300D\u3002":"\u76F4\u63A5\u5F00\u59CB\u8F93\u5165\uFF0C\u5168\u90E8\u6B63\u786E\u540E\u81EA\u52A8\u8FDB\u5165\u4E0B\u4E00\u9879\u3002",t==="word"?null:" \u7A7A\u683C\u4E0D\u53C2\u4E0E\u5224\u5206\uFF08\u8F93\u5165\u6CD5\u541E\u6389\u7A7A\u683C\u4E5F\u6CA1\u5173\u7CFB\uFF09\uFF0C\u53E5\u4E2D\u865A\u7EBF\u4E0B\u5212\u7EBF\u8868\u793A\u7A7A\u683C\u3002"," ","\u7B2C ",i+1,"/",r.length," \u9879")))}var P=fe(require("react"),1);function qo(a,e,t,r){let n=1/Math.tan(a/2),o=1/(t-r);return new Float32Array([n/e,0,0,0,0,n,0,0,0,0,(r+t)*o,-1,0,0,2*r*t*o,0])}function Ko(a,e,t,r,n,o){let i=a-r,s=e-n,l=t-o,p=Math.hypot(i,s,l)||1;i/=p,s/=p,l/=p;let d=l,u=0,w=-i;p=Math.hypot(d,u,w)||1,d/=p,u/=p,w/=p;let c=s*w-l*u,b=l*d-i*w,T=i*u-s*d;return new Float32Array([d,c,i,0,u,b,s,0,w,T,l,0,-(d*a+u*e+w*t),-(c*a+b*e+T*t),-(i*a+s*e+l*t),1])}function Zo(a,e){let t=new Float32Array(16);for(let r=0;r<4;r++)for(let n=0;n<4;n++){let o=0;for(let i=0;i<4;i++)o+=a[i*4+n]*e[r*4+i];t[r*4+n]=o}return t}var Vo=`#version 300 es
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
}`,Yo=`#version 300 es
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
}`,Xo=`#version 300 es
const vec2 P[3] = vec2[3](vec2(-1.0,-1.0), vec2(3.0,-1.0), vec2(-1.0,3.0));
out vec2 vUv;
void main(){ vUv = P[gl_VertexID] * 0.5 + 0.5; gl_Position = vec4(P[gl_VertexID], 0.0, 1.0); }`,Jo=`#version 300 es
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
}`;function cn(a,e,t){let r=a.createShader(e);if(a.shaderSource(r,t),a.compileShader(r),!a.getShaderParameter(r,a.COMPILE_STATUS))throw new Error(a.getShaderInfoLog(r)||"shader");return r}function un(a,e,t){let r=a.createProgram();if(a.attachShader(r,cn(a,a.VERTEX_SHADER,e)),a.attachShader(r,cn(a,a.FRAGMENT_SHADER,t)),a.linkProgram(r),!a.getProgramParameter(r,a.LINK_STATUS))throw new Error(a.getProgramInfoLog(r)||"link");return r}function wn(){let a=navigator,e=Math.min(screen.width,screen.height)<600;return(a.hardwareConcurrency??8)<=4||(a.deviceMemory??8)<=4||e?"low":"high"}var dt=class{constructor(e,t,r){this.canvas=e;this.layout=t;this.opts=r;this.states=new Float32Array(t.n),this.screen=new Float32Array(t.n*3),this.autoRotate=r.autoRotate??.035;let n=e.getContext("webgl2",{antialias:!1,alpha:!1,premultipliedAlpha:!0,preserveDrawingBuffer:!!r.preserve,powerPreference:"high-performance"});if(n)try{this.initGL(n),this.gl=n}catch{this.gl=null}this.gl||(this.ctx2d=e.getContext("2d")),r.reducedMotion&&(this.introStart=-1e9)}canvas;layout;opts;cam={yaw:.6,pitch:1.12,dist:1.8,tx:0,ty:0,tz:0};goal=null;gl=null;ctx2d=null;star;neb;vao;stateBuf;states;vp=new Float32Array(16);screen;raf=0;t0=performance.now();last=performance.now();introStart=performance.now();running=!1;w=1;h=1;dpr=1;hover=-1;autoRotate;onFrame;get webgl(){return!!this.gl}initGL(e){let t=this.layout;this.star=un(e,Vo,Yo),this.neb=un(e,Xo,Jo),this.vao=e.createVertexArray(),e.bindVertexArray(this.vao);let r=(n,o,i,s=e.STATIC_DRAW)=>{let l=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,l),e.bufferData(e.ARRAY_BUFFER,o,s);let p=e.getAttribLocation(this.star,n);return e.enableVertexAttribArray(p),e.vertexAttribPointer(p,i,e.FLOAT,!1,0,0),l};r("aPos",t.positions,3),r("aColor",t.colors,3),r("aSeed",t.seeds,1),this.stateBuf=r("aState",this.states,1,e.DYNAMIC_DRAW),e.bindVertexArray(null)}setStates(e){this.states.set(e);let t=this.gl;t&&this.stateBuf&&(t.bindBuffer(t.ARRAY_BUFFER,this.stateBuf),t.bufferSubData(t.ARRAY_BUFFER,0,this.states))}setState(e,t){this.states[e]=t;let r=this.gl;r&&this.stateBuf&&(r.bindBuffer(r.ARRAY_BUFFER,this.stateBuf),r.bufferSubData(r.ARRAY_BUFFER,e*4,this.states.subarray(e,e+1)))}baseDist(){let e=this.w/this.h;return e<1?1.8/Math.max(.55,e)*.82:1.8}resize(){let e=this.canvas.getBoundingClientRect(),t=this.w===1;this.dpr=Math.min(window.devicePixelRatio||1,this.opts.quality==="low"?1.25:2),this.w=Math.max(1,e.width),this.h=Math.max(1,e.height),this.canvas.width=Math.round(this.w*this.dpr),this.canvas.height=Math.round(this.h*this.dpr),t&&(this.cam.dist=this.baseDist())}frameStars(e,t=1.15){if(!e.length)return;let r=this.layout.positions,n=0,o=0,i=0;e.forEach(l=>{n+=r[l*3],o+=r[l*3+1],i+=r[l*3+2]});let s=e.length;Object.assign(this.cam,{tx:n/s*.6,ty:o/s,tz:i/s*.6,dist:t})}flyTo(e,t=.75){let r=this.layout.positions;this.goal={tx:r[e*3],ty:r[e*3+1],tz:r[e*3+2],dist:t}}reset(){this.goal={tx:0,ty:0,tz:0,dist:this.baseDist(),pitch:1.12}}replayIntro(){this.opts.reducedMotion||(this.introStart=performance.now())}start(){if(this.running)return;this.running=!0,this.last=performance.now();let e=t=>{this.running&&(this.frame(t),this.raf=requestAnimationFrame(e))};this.raf=requestAnimationFrame(e)}stop(){this.running=!1,cancelAnimationFrame(this.raf)}destroy(){this.stop(),this.onFrame=void 0}matrices(){let e=this.cam,t=e.tx+e.dist*Math.cos(e.pitch)*Math.sin(e.yaw),r=e.ty+e.dist*Math.sin(e.pitch),n=e.tz+e.dist*Math.cos(e.pitch)*Math.cos(e.yaw),o=qo(.75,this.w/this.h,.02,20);this.vp=Zo(o,Ko(t,r,n,e.tx,e.ty,e.tz))}project(){let e=this.vp,t=this.layout.positions,r=this.screen;for(let n=0;n<this.layout.n;n++){let o=t[n*3],i=t[n*3+1],s=t[n*3+2],l=e[3]*o+e[7]*i+e[11]*s+e[15];if(l<=.01){r[n*3+2]=-1;continue}let p=(e[0]*o+e[4]*i+e[8]*s+e[12])/l,d=(e[1]*o+e[5]*i+e[9]*s+e[13])/l;r[n*3]=(p*.5+.5)*this.w,r[n*3+1]=(1-(d*.5+.5))*this.h,r[n*3+2]=l}}toScreen(e,t,r){let n=this.vp,o=n[3]*e+n[7]*t+n[11]*r+n[15];if(o<=.01)return null;let i=(n[0]*e+n[4]*t+n[8]*r+n[12])/o,s=(n[1]*e+n[5]*t+n[9]*r+n[13])/o;return{x:(i*.5+.5)*this.w,y:(1-(s*.5+.5))*this.h,depth:o}}starScreen(e){return{x:this.screen[e*3],y:this.screen[e*3+1],depth:this.screen[e*3+2]}}pick(e,t,r=16){this.project();let n=-1,o=1/0;for(let i=0;i<this.layout.n;i++){if(this.screen[i*3+2]<=0)continue;let l=this.screen[i*3]-e,p=this.screen[i*3+1]-t,d=Math.hypot(l,p);if(d>r)continue;let u=d-this.states[i]*4;u<o&&(o=u,n=i)}return n}frame(e){let t=Math.min(.05,(e-this.last)/1e3);this.last=e;let r=(e-this.t0)/1e3,n=Math.min(1,(e-this.introStart)/2600);if(this.opts.reducedMotion||(this.cam.yaw+=this.autoRotate*t),this.goal){let o=this.goal,i=this.cam,s=!0;for(let l of Object.keys(o))i[l]+=(o[l]-i[l])*Math.min(1,t*3.2),Math.abs(o[l]-i[l])>.001&&(s=!1);s&&(this.goal=null)}this.matrices(),this.gl?this.drawGL(r,n):this.draw2D(r,n),this.onFrame?.()}drawGL(e,t){let r=this.gl;r.viewport(0,0,this.canvas.width,this.canvas.height),r.disable(r.BLEND),r.useProgram(this.neb);let n=this.toScreen(0,0,0);r.uniform1f(r.getUniformLocation(this.neb,"uTime"),this.opts.reducedMotion?0:e),r.uniform1f(r.getUniformLocation(this.neb,"uYaw"),this.cam.yaw),r.uniform1f(r.getUniformLocation(this.neb,"uAspect"),this.w/this.h),r.uniform1f(r.getUniformLocation(this.neb,"uIntro"),t),r.uniform2f(r.getUniformLocation(this.neb,"uCore"),n?n.x/this.w:.5,n?1-n.y/this.h:.5),r.uniform1i(r.getUniformLocation(this.neb,"uOct"),this.opts.quality==="low"?3:5),r.drawArrays(r.TRIANGLES,0,3),r.enable(r.BLEND),r.blendFunc(r.ONE,r.ONE),r.useProgram(this.star),r.uniformMatrix4fv(r.getUniformLocation(this.star,"uVP"),!1,this.vp),r.uniform1f(r.getUniformLocation(this.star,"uTime"),e),r.uniform1f(r.getUniformLocation(this.star,"uIntro"),t),r.uniform1f(r.getUniformLocation(this.star,"uScale"),this.dpr*Math.min(this.w,this.h)/520),r.uniform1f(r.getUniformLocation(this.star,"uHover"),this.hover),r.uniform1f(r.getUniformLocation(this.star,"uMotion"),this.opts.reducedMotion?0:1),r.bindVertexArray(this.vao),r.drawArrays(r.POINTS,0,this.layout.n),r.bindVertexArray(null)}draw2D(e,t){let r=this.ctx2d;if(!r)return;r.setTransform(this.dpr,0,0,this.dpr,0,0);let n=r.createRadialGradient(this.w/2,this.h/2,0,this.w/2,this.h/2,Math.max(this.w,this.h)*.7);n.addColorStop(0,"#1b1d38"),n.addColorStop(1,"#090c18"),r.fillStyle=n,r.fillRect(0,0,this.w,this.h),this.project(),r.globalCompositeOperation="lighter";let o=this.layout.colors;for(let i=0;i<this.layout.n;i++){let s=this.screen[i*3+2];if(s<=0)continue;let l=this.states[i],p=(l>2.5?7:l>1.5?5:l>.5?3.5:1.3)*(i===this.hover?2:1)*Math.min(this.w,this.h)/520/s,d=(l>.5?.9:.3*(.7+.3*Math.sin(e+i)))*t;r.fillStyle=`rgba(${o[i*3]*255|0},${o[i*3+1]*255|0},${o[i*3+2]*255|0},${d})`,r.fillRect(this.screen[i*3]-p/2,this.screen[i*3+1]-p/2,Math.max(1,p),Math.max(1,p))}r.globalCompositeOperation="source-over"}};var ya=["#f2c46d","#ef8f6b","#8fd0c8","#9fb8ff","#9be38f","#ff9fa8","#f7d9a8","#c6a7ff","#ffd36b","#7fc4ff","#ffb38a","#86e0b5","#d8c3a5","#b5e48c","#ffe6b0","#ff8fc3","#a8d8ff","#ffcf7a","#e0b0ff"],Qo=a=>[1,3,5].map(e=>parseInt(a.slice(e,e+2),16)/255);function Ro(a){let e=a>>>0||1;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function mn(a){let e=a.words,t=e.length,r=new Float32Array(t*3),n=new Float32Array(t*3),o=new Float32Array(t),i=new Map(a.topics.map((w,c)=>[w.slug,c])),s=new Map(a.cefr.map((w,c)=>[w,c])),l=a.topics.length,p=new Array(l).fill(0);e.forEach(w=>{let c=i.get(w.topic)??0;p[c]+=1});let d=t/l;e.forEach((w,c)=>{let b=Ro(Me(w.id)),T=()=>(b()+b()+b()-1.5)/1.5,I=.1+(s.get(w.cefr)??2)/5*.72+b()*.16,m=i.get(w.topic)??0,z=m/l*Math.PI*2,k=Math.sqrt(Math.max(.6,p[m]/d)),A=z+I*3.4+T()*(.05+.03/I)*k,x=.05*(1-I*.6)*k;r[c*3]=Math.cos(A)*I,r[c*3+1]=T()*x,r[c*3+2]=Math.sin(A)*I;let[S,F,W]=Qo(ya[m%ya.length]);n.set([S,F,W],c*3),o[c]=b()});let u=.62;return{n:t,positions:r,colors:n,seeds:o,ids:e.map(w=>w.id),index:new Map(e.map((w,c)=>[w.id,c])),topicCenters:a.topics.map((w,c)=>{let b=c/l*Math.PI*2+u*3.4;return[Math.cos(b)*u,0,Math.sin(b)*u]})}}var gn=new WeakMap;function ei(a){return(0,P.useMemo)(()=>{let e=gn.get(a);return e||(e=mn(a),gn.set(a,e)),e},[a])}var ai=()=>typeof matchMedia<"u"&&matchMedia("(prefers-reduced-motion: reduce)").matches;function ti(a,e){let t=new Float32Array(a.n);return a.ids.forEach((r,n)=>{let o=e[r];t[n]=o?Le(o)?2:1:0}),t}var na=a=>Math.max(.35,Math.min(4.2,a));function pt({atlas:a,progress:e,onOpenWord:t}){let r=ei(a),n=e.cards,o=(0,P.useRef)(null),i=(0,P.useRef)(null),s=(0,P.useRef)(null),[l,p]=(0,P.useState)(null),[d,u]=(0,P.useState)(!1);(0,P.useEffect)(()=>{let x=o.current;if(!x)return;let S=new dt(x,r,{quality:wn(),reducedMotion:ai(),preserve:!0,autoRotate:.025});i.current=S,S.resize();let F=new ResizeObserver(()=>S.resize());F.observe(x);let W=new IntersectionObserver(([ee])=>ee.isIntersecting&&!document.hidden?S.start():S.stop());W.observe(x);let Q=()=>document.hidden?S.stop():S.start();return document.addEventListener("visibilitychange",Q),S.onFrame=()=>{let ee=s.current;if(!ee)return;let pe=ee.children;r.topicCenters.forEach(([N,U,K],q)=>{let X=pe[q],ie=S.toScreen(N,U,K);if(X){if(!ie){X.style.opacity="0";return}X.style.transform=`translate(${ie.x}px, ${ie.y}px) translate(-50%, -50%)`,X.style.opacity=String(Math.max(0,Math.min(.9,3.4-ie.depth)))}})},u(!0),()=>{F.disconnect(),W.disconnect(),document.removeEventListener("visibilitychange",Q),S.destroy(),i.current=null}},[r]),(0,P.useEffect)(()=>{i.current?.setStates(ti(r,n))},[r,n]);let w=(0,P.useRef)(null),c=(0,P.useRef)(new Map),b=(0,P.useRef)(0);(0,P.useEffect)(()=>()=>window.clearTimeout(b.current),[]);let T=x=>{let S=o.current.getBoundingClientRect();return{x:x.clientX-S.left,y:x.clientY-S.top}},O=x=>{let S=i.current;if(!S)return;let F=T(x),W=c.current;if(W.has(x.pointerId)){let pe=W.get(x.pointerId);if(W.set(x.pointerId,F),W.size===2){let[N,U]=[...W.values()],K=Math.hypot(N.x-U.x,N.y-U.y);w.current?.pinch&&(S.cam.dist=na(S.cam.dist*(w.current.pinch/K))),w.current&&(w.current.pinch=K);return}if(w.current){let N=F.x-pe.x,U=F.y-pe.y;w.current.moved+=Math.abs(N)+Math.abs(U),S.cam.yaw-=N*.006,S.cam.pitch=Math.max(.12,Math.min(1.45,S.cam.pitch+U*.005))}return}if(x.pointerType!=="mouse")return;let Q=S.pick(F.x,F.y);if(S.hover=Q,window.clearTimeout(b.current),Q<0){b.current=window.setTimeout(()=>p(null),260);return}let ee=a.words[Q];b.current=window.setTimeout(()=>p({word:ee,x:F.x,y:F.y}),120)},I=x=>{x.currentTarget.setPointerCapture(x.pointerId),c.current.set(x.pointerId,T(x)),w.current={...T(x),moved:0}},m=x=>{let S=i.current,F=w.current;if(c.current.delete(x.pointerId),c.current.size>0||(w.current=null,!S||!F||F.moved>8))return;let W=T(x),Q=S.pick(W.x,W.y,x.pointerType==="mouse"?16:26);if(Q<0)return;let ee=a.words[Q];if(x.pointerType!=="mouse"&&l?.word.id!==ee.id){S.hover=Q,p({word:ee,x:W.x,y:W.y});return}S.flyTo(Q),window.setTimeout(()=>t(ee.id),350)},z=x=>{let S=i.current;S&&(S.cam.dist=na(S.cam.dist*Math.exp(x.deltaY*.0012)))};(0,P.useEffect)(()=>{let x=o.current;if(!x)return;let S=F=>F.preventDefault();return x.addEventListener("wheel",S,{passive:!1}),()=>x.removeEventListener("wheel",S)},[]);let k=(0,P.useMemo)(()=>r.ids.reduce((x,S)=>x+(n[S]?1:0),0),[r,n]),A=()=>{let x=o.current;if(!x)return;let S=document.createElement("a");S.download="word-atlas-galaxy.png",S.href=x.toDataURL("image/png"),S.click()};return P.default.createElement("div",{className:"wa-galaxy-page"},P.default.createElement("header",{className:"wa-galaxy-head"},P.default.createElement("div",null,P.default.createElement("p",{className:"wa-eyebrow"},"\u8BCD\u6C47\u661F\u56FE \xB7 Galaxy"),P.default.createElement("h1",null,"\u5B66\u8FC7\u7684\u8BCD\uFF0C\u6C47\u6210\u4F60\u7684\u661F\u56FE\u3002")),P.default.createElement("div",{className:"wa-galaxy-legend","aria-hidden":"true"},P.default.createElement("span",null,P.default.createElement("i",{className:"is-dust"}),"\u672A\u5B66"),P.default.createElement("span",null,P.default.createElement("i",{className:"is-learning"}),"\u5B66\u4E60\u4E2D"),P.default.createElement("span",null,P.default.createElement("i",{className:"is-mastered"}),"\u5DF2\u638C\u63E1"))),P.default.createElement("div",{className:`wa-galaxy ${d?"is-ready":""}`},P.default.createElement("canvas",{ref:o,onPointerMove:O,onPointerDown:I,onPointerUp:m,onPointerCancel:m,onPointerLeave:()=>{i.current&&(i.current.hover=-1),p(null)},onWheel:z,role:"img","aria-label":`\u8BCD\u6C47\u661F\u56FE\uFF1A${r.n} \u9897\u661F\uFF0C\u5DF2\u70B9\u4EAE ${k} \u9897\u3002\u53EF\u62D6\u52A8\u65CB\u8F6C\u3001\u6EDA\u52A8\u7F29\u653E\u3001\u70B9\u51FB\u661F\u661F\u6253\u5F00\u8BCD\u6761\u3002`,tabIndex:0,onKeyDown:x=>{let S=i.current;S&&(x.key==="ArrowLeft"&&(S.cam.yaw-=.12),x.key==="ArrowRight"&&(S.cam.yaw+=.12),x.key==="ArrowUp"&&(S.cam.pitch=Math.min(1.45,S.cam.pitch+.08)),x.key==="ArrowDown"&&(S.cam.pitch=Math.max(.12,S.cam.pitch-.08)),(x.key==="+"||x.key==="=")&&(S.cam.dist=na(S.cam.dist*.85)),x.key==="-"&&(S.cam.dist=na(S.cam.dist*1.18)))}}),P.default.createElement("div",{className:"wa-galaxy-labels",ref:s,"aria-hidden":"true"},a.topics.map((x,S)=>P.default.createElement("span",{key:x.slug,style:{"--c":ya[S%ya.length]}},x.zh))),l?P.default.createElement("button",{type:"button",className:"wa-galaxy-tip",style:{transform:`translate(${Math.min(l.x+18,(o.current?.clientWidth??0)-260)}px, ${Math.max(8,l.y-46)}px)`},onClick:()=>t(l.word.id)},P.default.createElement(se,{id:l.word.id,word:l.word.word,className:"wa-galaxy-tip-img"}),P.default.createElement("span",null,P.default.createElement("b",{lang:"en"},l.word.word),P.default.createElement("small",null,l.word.zh))):null,P.default.createElement("div",{className:"wa-galaxy-hud"},P.default.createElement("p",null,P.default.createElement("b",null,k.toLocaleString("en-US"))," / ",r.n.toLocaleString("en-US")," \u9897\u661F\u5DF2\u70B9\u4EAE")),P.default.createElement("div",{className:"wa-galaxy-controls"},P.default.createElement("button",{type:"button",className:"wa-icon-btn",onClick:()=>i.current&&(i.current.cam.dist=na(i.current.cam.dist*.8)),"aria-label":"\u653E\u5927"},P.default.createElement($,{name:"plus",size:18})),P.default.createElement("button",{type:"button",className:"wa-icon-btn",onClick:()=>i.current&&(i.current.cam.dist=na(i.current.cam.dist*1.25)),"aria-label":"\u7F29\u5C0F"},P.default.createElement($,{name:"minus",size:18})),P.default.createElement("button",{type:"button",className:"wa-icon-btn",onClick:()=>{i.current?.reset(),i.current?.replayIntro()},"aria-label":"\u56DE\u5230\u5168\u666F"},P.default.createElement($,{name:"rotateCcw",size:17})),P.default.createElement("button",{type:"button",className:"wa-icon-btn",onClick:()=>{let x=Object.keys(n),S=x[Math.floor(Math.random()*x.length)]??a.words[0]?.id,F=S?r.index.get(S):void 0;F!==void 0&&i.current?.flyTo(F)},"aria-label":"\u98DE\u5230\u4E00\u9897\u5DF2\u70B9\u4EAE\u7684\u661F"},P.default.createElement($,{name:"crosshair",size:17})),P.default.createElement("button",{type:"button",className:"wa-icon-btn",onClick:A,"aria-label":"\u4FDD\u5B58\u661F\u56FE\u56FE\u7247"},P.default.createElement($,{name:"share",size:17}))),P.default.createElement("p",{className:"wa-galaxy-hint"},"\u62D6\u52A8\u65CB\u8F6C \xB7 \u6EDA\u52A8\u7F29\u653E \xB7 \u70B9\u51FB\u661F\u661F\u6253\u5F00\u8BCD\u6761")))}var J=fe(require("react"),1);var ri=[{id:"today",label:"\u4ECA\u65E5\u5B66\u4E60",icon:"star"},{id:"atlas",label:"\u56FE\u9274",icon:"book"},{id:"read",label:"\u4E66\u623F",icon:"library"},{id:"galaxy",label:"\u8BCD\u6C47\u661F\u56FE",icon:"orbit"},{id:"review",label:"\u5FEB\u901F\u590D\u4E60",icon:"refresh"},{id:"practice",label:"\u6253\u5B57\u7EC3\u4E60",icon:"keyboard"},{id:"bookmarks",label:"\u751F\u8BCD\u672C",icon:"heart"},{id:"settings",label:"\u6211\u7684 / \u8BBE\u7F6E",icon:"user"}];function ct({atlas:a,progress:e,onClose:t,onNavigate:r,onOpenWord:n}){let[o,i]=(0,J.useState)(""),[s,l]=(0,J.useState)(0),p=(0,J.useRef)(null);(0,J.useEffect)(()=>{p.current?.focus()},[]);let d=(0,J.useMemo)(()=>{if(!a)return[];let c=o.trim().toLowerCase();return c?a.words.filter(b=>b.word.toLowerCase().includes(c)||b.zh.toLowerCase().includes(c)).slice(0,8):[]},[a,o]),u=(0,J.useMemo)(()=>o.trim()?d.map(c=>({type:"word",...c})):ri.map(c=>({type:"action",...c})),[o,d]);(0,J.useEffect)(()=>{l(0)},[o]);let w=c=>{c&&(c.type==="word"?n(c.id):r(c.id),t())};return J.default.createElement("div",{className:"wa-palette-overlay",onMouseDown:c=>{c.target===c.currentTarget&&t()}},J.default.createElement("div",{className:"wa-palette",role:"dialog","aria-modal":"true","aria-label":"\u547D\u4EE4\u9762\u677F",onKeyDown:c=>{c.key==="Escape"?(c.preventDefault(),t()):c.key==="ArrowDown"?(c.preventDefault(),l(b=>Math.min(u.length-1,b+1))):c.key==="ArrowUp"?(c.preventDefault(),l(b=>Math.max(0,b-1))):c.key==="Enter"&&(c.preventDefault(),w(u[s]))}},J.default.createElement("div",{className:"wa-palette-search"},J.default.createElement($,{name:"search",size:17}),J.default.createElement("input",{ref:p,value:o,onChange:c=>i(c.target.value),placeholder:"\u641C\u7D22\u5355\u8BCD\u6216\u8DF3\u8F6C\u9875\u9762\u2026","aria-label":"\u641C\u7D22\u5355\u8BCD\u6216\u8DF3\u8F6C\u9875\u9762",spellCheck:!1}),J.default.createElement("kbd",null,"Esc")),J.default.createElement("ul",{className:"wa-palette-list"},o.trim()?J.default.createElement("li",{className:"wa-palette-label"},"\u8BCD\u6761 \xB7 ",d.length?`\u5339\u914D ${d.length} \u4E2A`:"\u6CA1\u6709\u7ED3\u679C"):J.default.createElement("li",{className:"wa-palette-label"},"\u524D\u5F80"),u.map((c,b)=>J.default.createElement("li",{key:c.type==="word"?`word-${c.id}`:`view-${c.id}`},J.default.createElement("button",{type:"button",className:b===s?"is-active":"",onMouseEnter:()=>l(b),onClick:()=>w(c)},c.type==="word"?J.default.createElement(J.default.Fragment,null,J.default.createElement("span",{className:"wa-palette-word",lang:"en"},c.word),J.default.createElement("span",{className:"wa-palette-zh"},c.zh),J.default.createElement("span",{className:"wa-palette-tag"},c.cefr)):J.default.createElement(J.default.Fragment,null,J.default.createElement($,{name:c.icon,size:16}),J.default.createElement("span",null,c.label)))))),J.default.createElement("p",{className:"wa-palette-footer"},"\u2191\u2193 \u9009\u62E9 \xB7 Enter \u6253\u5F00 \xB7 Esc \u5173\u95ED")))}var C=fe(require("react"),1);var B=fe(require("react"),1);var hn="word-atlas-dsh:reader-prefs",ni=["en","bi","zh"],va={mode:"bi",size:1,leading:1,speed:1,language:"en"},fn=(a,e,t,r)=>{let n=Number(a);return Number.isFinite(n)?Math.max(e,Math.min(t,Math.round(n))):r};function ut(a){let e=a&&typeof a=="object"&&!Array.isArray(a)?a:{};return{mode:ni.includes(e.mode)?e.mode:va.mode,size:fn(e.size,0,4,va.size),leading:fn(e.leading,0,2,va.leading),speed:[.8,1,1.2].includes(Number(e.speed))?Number(e.speed):va.speed,language:e.language==="zh"?"zh":"en"}}function bn(){try{return ut(JSON.parse(localStorage.getItem(hn)||"null"))}catch{return{...va}}}function xn(a){try{localStorage.setItem(hn,JSON.stringify(ut(a)))}catch{}}function wt(a){let e=Math.max(0,Math.floor(Number(a)||0));if(!e)return"0";let t=[[1e3,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]],r=e,n="";for(let[o,i]of t)for(;r>=o;)n+=i,r-=o;return n}var Oe=(a,e)=>`book:${a}:${e}`,Ue=a=>`book:${a}:pos`,Vt=(a,e,t)=>`wa-sent-${a}-${e}-${t}`;function mt(a,e,t=[]){if(typeof a!="string")return[];let r=Number.isFinite(e?.a)?e.a:0,n=Number.isFinite(e?.b)?Math.min(e.b,a.length):a.length,o=[],i=r;for(let s of t){if(!Array.isArray(s)||s.length<3)continue;let[l,p,d,u]=s;if(!Number.isFinite(l)||!Number.isFinite(p)||p<=l||p<=r||l>=n)continue;let w=Math.max(l,r),c=Math.min(p,n);w>i&&o.push({text:a.slice(i,w)}),o.push({text:a.slice(w,c),id:d,freq:Number(u)||0}),i=c}return i<n&&o.push({text:a.slice(i,n)}),o}function gt(a,e="en"){let t=e==="zh"?"zh":"en",r=[];for(let n of a?.paras||[]){let o=t==="zh"?n.audioZh:n.audio,i=(t==="zh"?n.zhSents:n.sents)||[],s=t==="zh"?n.zh:n.en,l=(t==="zh"?n.sents:n.zhSents)||[],p=t==="zh"?n.en:n.zh;!o||typeof s!="string"||!Array.isArray(i)||i.length===0||i.forEach((d,u)=>{if(!Number.isFinite(d?.a)||!Number.isFinite(d?.b))return;let w=l[u];r.push({pid:n.id,audio:o,lang:t,sentenceIndex:u,t0:Number(d.t0)||0,t1:Number(d.t1)||0,text:s.slice(d.a,d.b),translation:w&&typeof p=="string"?p.slice(w.a,w.b):"",domId:Vt(n.id,t,u)})})}return r}function ft(a,e,t){if(!a?.length)return-1;let r=Math.max(0,Math.min(a.length-1,Number(e)||0)),n=a[r].audio,o=r;for(let i=r;i<a.length;i+=1){let s=a[i];if(s.audio!==n)break;if(s.t0<=(Number(t)||0)+.03)o=i;else break}return o}function yn(a){let e=[],t=new Set;for(let r of a?.paras||[])for(let n of r.words||[]){let o=Array.isArray(n)?n[2]:null;o&&!t.has(o)&&(t.add(o),e.push(o))}return e}var g=fe(require("react"),1);var Yt=[.8,1,1.2],oi=[["en","\u82F1\u6587"],["bi","\u4E2D\u82F1\u5BF9\u7167"],["zh","\u4E2D\u6587"]],ii=[1.5,1.68,1.9];function si({word:a,onWord:e}){return g.default.createElement("button",{type:"button",className:`wa-book-word ${a.freq>=2?"is-marked":""}`,onClick:t=>{t.stopPropagation(),e(a.id,t)},"aria-label":`\u67E5\u770B ${a.text} \u7684\u91CA\u4E49`},a.text)}function vn({paragraph:a,index:e,text:t,lang:r,activeId:n,audioLang:o,onWord:i,onPlay:s}){let p=((r==="en"?a.sents:a.zhSents)||[])[e];if(!p)return null;let d=r==="en"?mt(t,p,a.words||[]):[{text:t.slice(p.a,p.b)}],u=Vt(a.id,r,e),w=o===r;return g.default.createElement("span",{className:`wa-book-sent ${n===u?"is-speaking":""} ${w?"is-playable":""}`,"data-sentence":u,onClick:w?()=>s(a.id,e,r):void 0},d.map((c,b)=>c.id?g.default.createElement(si,{key:b,word:c,onWord:i}):g.default.createElement(g.default.Fragment,{key:b},c.text)))}function li({paragraph:a,mode:e,activeId:t,audioLang:r,onWord:n,onPlay:o}){let i=a.sents||[],s=a.zhSents||[];return g.default.createElement("section",{className:`wa-book-para wa-book-kind-${a.kind||"p"}`,"data-paragraph":a.id},e!=="zh"?g.default.createElement("p",{className:"wa-book-para-en",lang:"en"},i.length?i.map((l,p)=>g.default.createElement(g.default.Fragment,{key:p},g.default.createElement(vn,{paragraph:a,index:p,text:a.en,lang:"en",activeId:t,audioLang:r,onWord:n,onPlay:o}),p<i.length-1?" ":null)):a.en):null,e!=="en"&&a.zh?g.default.createElement("p",{className:"wa-book-para-zh",lang:"zh"},s.length?s.map((l,p)=>g.default.createElement(g.default.Fragment,{key:p},g.default.createElement(vn,{paragraph:a,index:p,text:a.zh,lang:"zh",activeId:t,audioLang:r,onWord:n,onPlay:o}))):a.zh):null)}function di({atlas:a,id:e,x:t,y:r,accent:n,onClose:o,onOpenWord:i}){let[s,l]=(0,g.useState)({status:"loading",entry:null,error:""});(0,g.useEffect)(()=>{let d=!0;return ye(a,e).then(u=>d&&l({status:"ready",entry:u,error:""})).catch(u=>d&&l({status:"error",entry:null,error:u.message||"\u67E5\u4E0D\u5230\u8FD9\u4E2A\u8BCD\u3002"})),()=>{d=!1}},[a,e]),(0,g.useEffect)(()=>()=>Se(),[]);let p=s.entry;return g.default.createElement("div",{className:"wa-book-pop-backdrop",onMouseDown:o},g.default.createElement("div",{className:"wa-book-word-pop",role:"dialog","aria-label":"\u8BCD\u4E49",style:{left:Math.max(12,t),top:Math.max(12,r)},onMouseDown:d=>d.stopPropagation()},g.default.createElement("button",{type:"button",className:"wa-book-pop-close",onClick:o,"aria-label":"\u5173\u95ED"},g.default.createElement($,{name:"close",size:16})),s.status==="loading"?g.default.createElement(me,{label:"\u6B63\u5728\u67E5\u8BCD\u2026"}):null,s.status==="error"?g.default.createElement("p",{className:"wa-panel-note"},s.error):null,p?g.default.createElement(g.default.Fragment,null,g.default.createElement("h2",{lang:"en"},p.w),g.default.createElement("div",{className:"wa-book-pop-pron"},g.default.createElement("span",null,p.uk||p.us||""),te(p,R.uk)?g.default.createElement("button",{type:"button",onClick:()=>_e(`book:uk:${p.id}`,ne("uk",p.id)),"aria-label":"\u82F1\u5F0F\u53D1\u97F3"},g.default.createElement($,{name:"volume",size:15})," \u82F1"):null,te(p,R.us)?g.default.createElement("button",{type:"button",onClick:()=>_e(`book:us:${p.id}`,ne("us",p.id)),"aria-label":"\u7F8E\u5F0F\u53D1\u97F3"},g.default.createElement($,{name:"volume",size:15})," \u7F8E"):null),g.default.createElement("div",{className:"wa-book-pop-senses"},(p.senses||[]).slice(0,2).map((d,u)=>g.default.createElement("p",{key:u},d.pos?g.default.createElement("span",{className:"wa-pos"},d.pos):null,d.zh))),g.default.createElement("div",{className:"wa-book-pop-actions"},g.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary",onClick:()=>{o(),i(e)}},"\u67E5\u770B\u8BCD\u5361 ",g.default.createElement($,{name:"chevronRight",size:15})))):null))}function ht({atlas:a,progress:e,book:t,meta:r,restorePid:n,onBack:o,onOpenChapter:i,onOpenWord:s,onReaderFocus:l}){let[p,d]=(0,g.useState)({status:"loading",data:null,error:""}),[u,w]=(0,g.useState)(bn),c=(0,g.useRef)(u);c.current=u;let[b,T]=(0,g.useState)(!1),[O,I]=(0,g.useState)(null),[m,z]=(0,g.useState)(!1),[k,A]=(0,g.useState)(!1),[x,S]=(0,g.useState)(!1),[F,W]=(0,g.useState)(-1),[Q,ee]=(0,g.useState)(!0),[pe,N]=(0,g.useState)(""),[U,K]=(0,g.useState)(!1),q=(0,g.useRef)(null),X=(0,g.useRef)(null),ie=(0,g.useRef)(-1),Ge=(0,g.useRef)({at:0,pid:"",pct:0}),xe=p.status==="ready"?p.data:null,ge=(0,g.useMemo)(()=>xe?gt(xe,u.language):[],[xe,u.language]),Ce=F>=0?ge[F]:null,ka=Ce?.domId||"",j=(0,g.useMemo)(()=>xe?yn(xe):[],[xe]),V=(0,g.useMemo)(()=>j.slice(0,30).map(L=>a.byId.get(L)).filter(Boolean),[j,a]),Ee=t.chapters.find(L=>L.n===r.n+1&&L.ready),We=(0,g.useMemo)(()=>(xe?.paras||[]).some(L=>L.audioZh),[xe]),Na=!!e.readings?.[Oe(t.id,r.n)]?.done;(0,g.useEffect)(()=>{xn(u)},[u]),(0,g.useEffect)(()=>{q.current&&(q.current.playbackRate=u.speed)},[u.speed]),(0,g.useEffect)(()=>(l?.(!0),()=>l?.(!1)),[l]),(0,g.useEffect)(()=>{let L=!0;return d({status:"loading",data:null,error:""}),Jr(t.id,r.n).then(G=>L&&d({status:"ready",data:G,error:""})).catch(G=>L&&d({status:"error",data:null,error:G.message||"\u7AE0\u8282\u52A0\u8F7D\u5931\u8D25\u3002"})),()=>{L=!1}},[t.id,r.n]),(0,g.useEffect)(()=>{let L=q.current;L&&(L.pause(),L.removeAttribute("src"),delete L.dataset.src,L.load()),ie.current=-1,W(-1),A(!1),N("")},[t.id,r.n,u.language]),(0,g.useEffect)(()=>()=>{q.current?.pause(),Se()},[]),(0,g.useEffect)(()=>{if(p.status!=="ready")return;let L=e.readings?.[Ue(t.id)],G=n||(L?.chapter===r.n?L.pid:null);if(!G)return;let Z=window.setTimeout(()=>{let ce=X.current,ve=ce?.querySelector(`[data-paragraph="${G}"]`);if(ce&&ve){let Ma=ve.getBoundingClientRect().top-ce.getBoundingClientRect().top+ce.scrollTop;ce.scrollTop=Math.max(0,Ma-80)}},120);return()=>window.clearTimeout(Z)},[p.status]);let xt=(0,g.useCallback)((L=!1)=>{let G=X.current;if(!G)return;let Z=[...G.querySelectorAll("[data-paragraph]")];if(!Z.length)return;let ce=G.scrollTop,ve=G.getBoundingClientRect().top,Ma=Z[0];for(let oa of Z)if(oa.getBoundingClientRect().top-ve+ce-110<=ce)Ma=oa;else break;let vt=Ma.getAttribute("data-paragraph")||"",kt=Math.max(0,Math.min(1,ce/Math.max(1,G.scrollHeight-G.clientHeight))),Nt=Date.now(),zt=Ge.current;!L&&Nt-zt.at<1200||!L&&zt.pid===vt&&Math.abs(zt.pct-kt)<.015||(Ge.current={at:Nt,pid:vt,pct:kt},le(oa=>({...oa,readings:{...oa.readings,[Ue(t.id)]:{chapter:r.n,pid:vt,pct:kt,last:Nt}}})))},[t.id,r.n]),_n=()=>{xt(!0),le(L=>({...L,readings:{...L.readings,[Oe(t.id,r.n)]:{done:!0,last:Date.now(),times:(L.readings?.[Oe(t.id,r.n)]?.times||0)+1},[Ue(t.id)]:{chapter:r.n,pid:Ge.current.pid,pct:1,last:Date.now()}}})),o()},yt=()=>{xt(!0),q.current?.pause(),o()},Te=(0,g.useCallback)(L=>{let G=ge[L];if(!G){N("\u672C\u7AE0\u6682\u65E0\u6717\u8BFB\u97F3\u9891\uFF0C\u5148\u8BFB\u6587\u5B57\u5427\u3002");return}let Z=q.current;if(!Z)return;ie.current!==L&&(ie.current=L,W(L)),T(!1),I(null),N("");let ce=Ve(G.audio),ve=()=>{S(!1);try{Z.currentTime=G.t0}catch{}Z.playbackRate=c.current.speed,Z.play().catch(()=>{A(!1),N("\u6717\u8BFB\u6682\u65F6\u65E0\u6CD5\u64AD\u653E\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u3002")})};Z.dataset.src!==ce?(Z.dataset.src=ce,Z.src=ce,S(!0),Z.addEventListener("canplay",ve,{once:!0}),Z.load()):Z.readyState>=2?ve():(S(!0),Z.addEventListener("canplay",ve,{once:!0}))},[ge]),za=(0,g.useCallback)(()=>{let L=q.current;if(L){if(!L.paused){L.pause();return}if(ie.current<0){Te(0);return}L.play().catch(()=>N("\u6717\u8BFB\u6682\u65F6\u65E0\u6CD5\u64AD\u653E\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u3002"))}},[Te]),He=(0,g.useCallback)(L=>{if(!ge.length)return;let G=ie.current<0?0:ie.current,Z=Math.max(0,Math.min(ge.length-1,G+(ie.current<0?0:L)));Te(Z)},[ge,Te]);(0,g.useEffect)(()=>{if(F<0||!Q||!Ce)return;let L=X.current,G=L?.querySelector(`[data-sentence="${Ce.domId}"]`);if(!L||!G)return;let Z=typeof matchMedia<"u"&&matchMedia("(prefers-reduced-motion: reduce)").matches,ce=G.getBoundingClientRect().top-L.getBoundingClientRect().top+L.scrollTop;L.scrollTo({top:Math.max(0,ce-L.clientHeight*.38),behavior:Z?"auto":"smooth"})},[F,Ce?.domId,Q]),(0,g.useEffect)(()=>{let L=G=>{let Z=G.target?.tagName;Z==="INPUT"||Z==="TEXTAREA"||G.target?.isContentEditable||(G.key===" "?(G.preventDefault(),za()):G.key==="ArrowLeft"?(G.preventDefault(),He(-1)):G.key==="ArrowRight"?(G.preventDefault(),He(1)):G.key==="Escape"&&(m?z(!1):b?T(!1):O&&I(null)))};return window.addEventListener("keydown",L),()=>window.removeEventListener("keydown",L)},[m,b,O,za,He]);let Ze=L=>w(G=>ut({...G,...L})),Sn=(L,G)=>{q.current&&!q.current.paused&&q.current.pause();let Z=G?.currentTarget?.getBoundingClientRect?.();I({id:L,x:Z?Math.min(Z.left,(window.innerWidth||0)-340):40,y:Z?Math.min(Z.bottom+8,(window.innerHeight||0)-300):80})},Cn=(L,G,Z)=>{if(Z!==u.language)return;let ce=ge.findIndex(ve=>ve.pid===L&&ve.sentenceIndex===G);ce>=0&&Te(ce)},An=L=>{if(!ge.length)return;let G=ie.current<0?0:ie.current,Z=ft(ge,G,L.currentTarget.currentTime);Z>=0&&Z!==ie.current&&(ie.current=Z,W(Z))},Ln=()=>{let L=ie.current;if(L<0){A(!1);return}let G=L+1;for(;G<ge.length&&ge[G].audio===ge[L].audio;)G+=1;G<ge.length?Te(G):(A(!1),N("\u672C\u7AE0\u6717\u8BFB\u7ED3\u675F\u3002"))},Rt=()=>{let L=Yt.indexOf(u.speed);Ze({speed:Yt[(L+1)%Yt.length]})};if(p.status==="loading")return g.default.createElement("div",{className:"wa-book-reader wa-book-reader-loading"},g.default.createElement("header",{className:"wa-book-bar"},g.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:yt},g.default.createElement($,{name:"chevronLeft",size:16})," \u4E66\u67B6")),g.default.createElement(me,{label:"\u6B63\u5728\u6253\u5F00\u4E66\u9875\u2026"}));if(p.status!=="ready"||!p.data)return g.default.createElement("div",{className:"wa-book-reader"},g.default.createElement("header",{className:"wa-book-bar"},g.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:yt},g.default.createElement($,{name:"chevronLeft",size:16})," \u4E66\u67B6")),g.default.createElement(he,{icon:"book",title:"\u8FD9\u4E00\u7AE0\u6682\u65F6\u6253\u4E0D\u5F00"},g.default.createElement("p",null,p.error||"\u7AE0\u8282\u5185\u5BB9\u52A0\u8F7D\u5931\u8D25\u3002")));let En={"--wa-book-size":`${17+u.size*2}px`,"--wa-book-leading":ii[u.leading]},je=ge.length;return g.default.createElement("div",{className:"wa-book-reader","data-mode":u.mode,style:En},g.default.createElement("header",{className:"wa-book-bar"},g.default.createElement("button",{type:"button",className:"wa-book-back",onClick:yt},g.default.createElement($,{name:"chevronLeft",size:17})," \u4E66\u67B6"),g.default.createElement("div",{className:"wa-book-bar-title"},g.default.createElement("span",null,t.titleZh),g.default.createElement("strong",null,r.labelZh)),g.default.createElement("div",{className:"wa-book-tools"},g.default.createElement("button",{type:"button",className:"wa-icon-btn","aria-label":"\u9605\u8BFB\u8BBE\u7F6E","aria-expanded":b,onClick:()=>T(L=>!L)},g.default.createElement($,{name:"settings",size:19})))),b?g.default.createElement(g.default.Fragment,null,g.default.createElement("div",{className:"wa-book-backdrop",onMouseDown:()=>T(!1)}),g.default.createElement("div",{className:"wa-book-settings",role:"dialog","aria-label":"\u9605\u8BFB\u8BBE\u7F6E"},g.default.createElement("h2",null,"\u9605\u8BFB\u8BBE\u7F6E"),g.default.createElement("div",{className:"wa-book-setting"},g.default.createElement("span",null,"\u9605\u8BFB\u65B9\u5F0F"),g.default.createElement("div",{className:"wa-book-seg"},oi.map(([L,G])=>g.default.createElement("button",{key:L,type:"button","aria-pressed":u.mode===L,onClick:()=>Ze({mode:L})},G)))),g.default.createElement("div",{className:"wa-book-setting"},g.default.createElement("span",null,"\u6587\u5B57\u5927\u5C0F"),g.default.createElement("div",{className:"wa-book-seg"},[0,1,2,3,4].map(L=>g.default.createElement("button",{key:L,type:"button","aria-label":`\u5B57\u53F7 ${L+1}`,"aria-pressed":u.size===L,onClick:()=>Ze({size:L})},g.default.createElement("span",{style:{fontSize:13+L*2}},"\u5B57"))))),g.default.createElement("div",{className:"wa-book-setting"},g.default.createElement("span",null,"\u884C\u8DDD"),g.default.createElement("div",{className:"wa-book-seg"},[0,1,2].map(L=>g.default.createElement("button",{key:L,type:"button","aria-pressed":u.leading===L,onClick:()=>Ze({leading:L})},L===0?"\u7D27":L===1?"\u4E2D":"\u677E")))),g.default.createElement("div",{className:"wa-book-setting"},g.default.createElement("span",null,"\u6717\u8BFB\u8BED\u8A00"),g.default.createElement("div",{className:"wa-book-seg"},g.default.createElement("button",{type:"button","aria-pressed":u.language==="en",onClick:()=>Ze({language:"en"})},"\u82F1\u6587"),g.default.createElement("button",{type:"button","aria-pressed":u.language==="zh",disabled:!We,onClick:()=>Ze({language:"zh"})},"\u4E2D\u6587"))),g.default.createElement("p",{className:"wa-book-settings-hint"},"\u9605\u8BFB\u6A21\u5F0F\u4E0E\u5B57\u53F7\u4F1A\u8BB0\u4F4F\uFF1B\u7A7A\u683C\u64AD\u653E/\u6682\u505C\uFF0C\u5DE6\u53F3\u65B9\u5411\u952E\u5207\u6362\u53E5\u5B50\u3002"))):null,g.default.createElement("div",{className:"wa-book-scroll",ref:X,onScroll:()=>xt(!1)},g.default.createElement("article",{className:"wa-book-page"},g.default.createElement("header",{className:"wa-book-chapter-head"},g.default.createElement("div",{className:`wa-book-plate ${U?"is-loaded":""}`},r.plate?g.default.createElement("img",{src:Ve(r.plate),alt:"\u7AE0\u8282\u9898\u56FE",loading:"lazy",onLoad:()=>K(!0),onError:()=>K(!1)}):null,!r.plate||!U?g.default.createElement("div",{className:"wa-book-plate-empty","aria-hidden":"true"}):null),g.default.createElement("p",{className:"wa-book-kicker"},t.titleZh," \xB7 ",r.labelZh),g.default.createElement("p",{className:"wa-book-roman","aria-hidden":"true"},wt(r.n)),g.default.createElement("h1",null,r.titleZh||r.labelZh),g.default.createElement("p",{className:"wa-book-caption"},"\u7EA6 ",r.minutes," \u5206\u949F \xB7 ",r.words," \u8BCD"),je?g.default.createElement("button",{type:"button",className:"wa-book-listen-link",onClick:()=>{z(!0),k||Te(F>=0?F:0)}},g.default.createElement($,{name:"headphones",size:15})," \u542C\u8FD9\u4E00\u7AE0"):g.default.createElement("p",{className:"wa-book-no-audio"},"\u672C\u7AE0\u6682\u65E0\u6717\u8BFB\u97F3\u9891\uFF0C\u5148\u8BFB\u6587\u5B57\u5427\u3002")),g.default.createElement("div",{className:"wa-book-text",id:"wa-book-text",tabIndex:-1},(xe.paras||[]).map((L,G)=>g.default.createElement(li,{key:L.id,paragraph:L,mode:u.mode,activeId:ka,audioLang:u.language,onWord:Sn,onPlay:Cn}))),g.default.createElement("footer",{className:"wa-book-end"},g.default.createElement("span",{className:`wa-book-end-mark ${Na?"is-lit":""}`,"aria-hidden":"true"}),g.default.createElement("p",{className:"wa-book-end-caption"},Na?"\u8FD9\u4E00\u7AE0\uFF0C\u5DF2\u7ECF\u8BFB\u5B8C\u4E86\u3002":"\u8BFB\u5230\u8FD9\u91CC\uFF0C\u6536\u4E0B\u672C\u7AE0\u7684\u8BCD\u5427\u3002"),V.length?g.default.createElement("section",{className:"wa-book-end-words"},g.default.createElement("h2",null,"\u672C\u7AE0\u51FA\u73B0\u7684\u96C5\u601D\u8BCD"),g.default.createElement("div",null,V.map(L=>g.default.createElement("button",{key:L.id,type:"button",onClick:()=>s(L.id)},g.default.createElement("span",{lang:"en"},L.word),g.default.createElement("small",null,L.zh))))):null,g.default.createElement("div",{className:"wa-book-end-actions"},g.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary wa-btn-lg",onClick:_n},"\u8BFB\u5B8C\u672C\u7AE0 ",g.default.createElement($,{name:"check",size:17})),Ee?g.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:()=>i(Ee)},"\u4E0B\u4E00\u7AE0 \xB7 ",Ee.labelZh," ",g.default.createElement($,{name:"chevronRight",size:16})):null),pe?g.default.createElement("p",{className:"wa-book-notice",role:"status"},pe):null))),je?g.default.createElement("div",{className:"wa-book-player",role:"region","aria-label":"\u7AE0\u8282\u6717\u8BFB"},g.default.createElement("div",{className:"wa-book-progress",role:"progressbar","aria-valuemin":0,"aria-valuemax":je,"aria-valuenow":F+1},g.default.createElement("i",{style:{transform:`scaleX(${(F+1)/Math.max(1,je)})`}})),g.default.createElement("div",{className:"wa-book-player-inner"},g.default.createElement("button",{type:"button",className:"wa-icon-btn",onClick:()=>He(-1),disabled:F<=0,"aria-label":"\u4E0A\u4E00\u53E5"},g.default.createElement($,{name:"chevronLeft",size:21})),g.default.createElement("button",{type:"button",className:"wa-book-play",onClick:za,"aria-label":k||x?"\u6682\u505C\u6717\u8BFB":"\u64AD\u653E\u6717\u8BFB"},g.default.createElement($,{name:k||x?"pause":"play",size:23})),g.default.createElement("button",{type:"button",className:"wa-icon-btn",onClick:()=>He(1),disabled:F>=je-1,"aria-label":"\u4E0B\u4E00\u53E5"},g.default.createElement($,{name:"chevronRight",size:21})),g.default.createElement("div",{className:"wa-book-player-count"},g.default.createElement("span",null,F+1," / ",je),g.default.createElement("small",null,x?"\u6B63\u5728\u51C6\u5907\u58F0\u97F3":k?`${u.language==="zh"?"\u4E2D\u6587":"\u82F1\u6587"}\u6717\u8BFB`:"\u4ECE\u672C\u53E5\u7EE7\u7EED")),g.default.createElement("button",{type:"button",className:`wa-book-follow ${Q?"is-on":""}`,onClick:()=>ee(L=>!L)},Q?"\u8DDF\u968F":"\u5DF2\u6682\u505C\u6EDA\u52A8"),g.default.createElement("button",{type:"button",className:"wa-book-speed",onClick:Rt,"aria-label":`\u6717\u8BFB\u901F\u5EA6 ${u.speed} \u500D`},u.speed,"\xD7"),g.default.createElement("button",{type:"button",className:"wa-book-listen-btn",onClick:()=>{z(!0),k||Te(F>=0?F:0)}},"\u8046\u542C")),g.default.createElement("audio",{ref:q,preload:"metadata",onPlaying:()=>{A(!0),S(!1)},onPause:()=>A(!1),onTimeUpdate:An,onEnded:Ln,onError:()=>{S(!1),N("\u6717\u8BFB\u6587\u4EF6\u6682\u65F6\u4E0D\u53EF\u7528\uFF0C\u53EF\u4EE5\u5148\u8BFB\u6587\u5B57\u3002")}})):null,O?g.default.createElement(di,{atlas:a,id:O.id,x:O.x,y:O.y,accent:e.settings.accent,onClose:()=>I(null),onOpenWord:s}):null,m?g.default.createElement("div",{className:"wa-book-listen",role:"dialog","aria-modal":"true","aria-label":"\u8046\u542C\u6A21\u5F0F"},r.plate?g.default.createElement("div",{className:"wa-book-listen-bg",style:{backgroundImage:`url(${Ve(r.plate)})`},"aria-hidden":"true"}):null,g.default.createElement("div",{className:"wa-book-listen-veil","aria-hidden":"true"}),g.default.createElement("header",{className:"wa-book-listen-top"},g.default.createElement("p",null,t.titleZh," \xB7 ",r.labelZh,r.titleZh?` \xB7 ${r.titleZh}`:""),g.default.createElement("div",null,g.default.createElement("button",{type:"button",className:"wa-icon-btn",onClick:()=>z(!1),"aria-label":"\u5173\u95ED\u8046\u542C\u6A21\u5F0F"},g.default.createElement($,{name:"close",size:18})))),g.default.createElement("div",{className:"wa-book-listen-body"},g.default.createElement("p",{className:"wa-book-listen-text",lang:u.language==="zh"?"zh":"en"},Ce?.text||xe.paras?.[0]?.en||""),Ce?.translation?g.default.createElement("p",{className:"wa-book-listen-zh"},Ce.translation):null),g.default.createElement("footer",{className:"wa-book-listen-controls"},g.default.createElement("button",{type:"button",className:"wa-icon-btn",onClick:()=>He(-1),disabled:F<=0,"aria-label":"\u4E0A\u4E00\u53E5"},g.default.createElement($,{name:"chevronLeft",size:22})),g.default.createElement("button",{type:"button",className:"wa-book-listen-play",onClick:za,"aria-label":k?"\u6682\u505C\u6717\u8BFB":"\u64AD\u653E\u6717\u8BFB"},g.default.createElement($,{name:k||x?"pause":"play",size:26})),g.default.createElement("button",{type:"button",className:"wa-icon-btn",onClick:()=>He(1),disabled:F>=je-1,"aria-label":"\u4E0B\u4E00\u53E5"},g.default.createElement($,{name:"chevronRight",size:22})),g.default.createElement("span",{className:"wa-book-listen-count"},F+1," / ",je),g.default.createElement("button",{type:"button",className:"wa-book-speed",onClick:Rt},u.speed,"\xD7"))):null)}function kn({atlas:a,progress:e,onOpenWord:t,onReaderFocus:r}){let[n,o]=(0,B.useState)(null),[i,s]=(0,B.useState)(""),[l,p]=(0,B.useState)(null);return(0,B.useEffect)(()=>{let d=!0;return Xr().then(u=>d&&o(Array.isArray(u.books)?u.books:[])).catch(u=>d&&s(u.message||"\u4E66\u67B6\u52A0\u8F7D\u5931\u8D25\u3002")),()=>{d=!1}},[]),i?B.default.createElement(he,{icon:"library",title:"\u4E66\u67B6\u6682\u65F6\u6253\u4E0D\u5F00"},B.default.createElement("p",null,i)):n?l?B.default.createElement(ht,{key:`${l.book.id}:${l.meta.n}`,atlas:a,progress:e,book:l.book,meta:l.meta,restorePid:l.restorePid,onBack:()=>p(null),onOpenChapter:d=>p({book:l.book,meta:d,restorePid:null}),onOpenWord:t,onReaderFocus:r}):B.default.createElement("section",{className:"wa-books"},n.map(d=>B.default.createElement(pi,{key:d.id,book:d,atlas:a,progress:e,onOpenChapter:(u,w)=>p({book:d,meta:u,restorePid:w})})),B.default.createElement("p",{className:"wa-books-colophon"},"\u4E66\u6E90\u4E0E\u7FFB\u8BD1\u6765\u81EA\u8BCD\u5149\u7EBF\u4E0A\u7AD9\u70B9\uFF1B\u9605\u8BFB\u8FDB\u5EA6\u4F1A\u6309\u7AE0\u8282\u4FDD\u5B58\uFF0C\u6717\u8BFB\u97F3\u9891\u6309\u9700\u52A0\u8F7D\u3002")):B.default.createElement(me,{label:"\u6B63\u5728\u642C\u4E66\u4E0A\u67B6\u2026"})}function pi({book:a,atlas:e,progress:t,onOpenChapter:r}){let n=t.readings?.[Ue(a.id)],o=(0,B.useMemo)(()=>new Set(a.chapters.filter(w=>t.readings?.[Oe(a.id,w.n)]?.done).map(w=>w.n)),[a,t.readings]),i=a.chapters.find(w=>w.ready&&!o.has(w.n)),s=(n?.chapter?a.chapters.find(w=>w.n===n.chapter):null)||i||a.chapters.find(w=>w.ready)||a.chapters[0],l=n&&s&&n.chapter===s.n?n.pid:null,p=a.chapters.filter(w=>w.ready).length,d=s?Math.round(o.size/Math.max(1,p)*100):0,u=a.cover||a.coverSmall;return B.default.createElement("article",{className:"wa-book-shelf"},B.default.createElement("div",{className:"wa-book-hero"},B.default.createElement("button",{type:"button",className:"wa-book-cover-link",disabled:!s,onClick:()=>s&&r(s,l),"aria-label":`\u7EE7\u7EED\u9605\u8BFB\u300A${a.titleZh}\u300B`},B.default.createElement("span",{className:"wa-book-cover-frame"},B.default.createElement("img",{src:Qr(u),alt:`${a.titleZh}\u5C01\u9762`,onError:w=>{w.currentTarget.style.visibility="hidden"}}))),B.default.createElement("div",{className:"wa-book-copy"},B.default.createElement("p",{className:"wa-eyebrow"},a.level," \xB7 ",a.year),B.default.createElement("h2",null,a.titleZh),B.default.createElement("p",{className:"wa-book-en-title",lang:"en"},a.title),B.default.createElement("p",{className:"wa-book-byline"},a.authorZh," \xB7 ",a.author),B.default.createElement("p",{className:"wa-book-blurb"},a.blurbZh),B.default.createElement("p",{className:"wa-book-firstline",lang:"en"},"\u201C",a.firstLine,"\u201D"),a.firstLineZh?B.default.createElement("p",{className:"wa-book-firstline-zh"},"\u201C",a.firstLineZh,"\u201D"):null,B.default.createElement("div",{className:"wa-book-progress"},B.default.createElement("div",{className:"wa-book-progress-copy"},B.default.createElement("span",null,"\u5DF2\u8BFB ",o.size," / ",p," \u7AE0"),B.default.createElement("small",null,d,"%")),B.default.createElement("div",{className:"wa-book-progress-track"},B.default.createElement("i",{style:{width:`${d}%`}}))),B.default.createElement("div",{className:"wa-book-actions"},B.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary wa-btn-lg",disabled:!s,onClick:()=>s&&r(s,l)},o.size?"\u7EE7\u7EED\u9605\u8BFB":"\u5F00\u59CB\u9605\u8BFB"," \xB7 ",s?.labelZh||"\u7B2C\u4E00\u7AE0"," ",B.default.createElement($,{name:"chevronRight",size:17})),B.default.createElement("span",{className:"wa-book-actions-note"},n?`\u4E0A\u6B21\u8BFB\u5230\u7B2C ${n.chapter} \u7AE0 \xB7 ${Math.round((n.pct||0)*100)}%`:`\u5171 ${a.chapterCount} \u7AE0 \xB7 \u7EA6 ${a.chapters.reduce((w,c)=>w+(c.minutes||0),0)} \u5206\u949F`)))),B.default.createElement("section",{className:"wa-book-journey","aria-label":"\u7AE0\u8282\u661F\u8DEF"},B.default.createElement("div",{className:"wa-book-journey-head"},B.default.createElement("h3",null,"\u7AE0\u8282\u661F\u8DEF"),B.default.createElement("span",null,"\u70B9\u4EAE\u8BFB\u8FC7\u7684\u7AE0\u8282")),B.default.createElement("ol",{className:"wa-starpath"},a.chapters.map(w=>{let c=o.has(w.n),b=w.n===s?.n;return B.default.createElement("li",{key:w.n,className:`${c?"is-read":""} ${b?"is-current":""}`},B.default.createElement("button",{type:"button",disabled:!w.ready,onClick:()=>r(w,n?.chapter===w.n?n.pid:null),"aria-label":`${w.labelZh} ${w.titleZh}${c?"\uFF0C\u5DF2\u8BFB":""}`},B.default.createElement("span",{className:"wa-star-number"},String(w.n).padStart(2,"0")),B.default.createElement("span",{className:"wa-star-node"},B.default.createElement($,{name:"star",size:9})),B.default.createElement("span",{className:"wa-star-copy"},B.default.createElement("strong",null,w.labelZh," \xB7 ",w.titleZh),B.default.createElement("small",null,w.minutes," \u5206\u949F \xB7 ",w.words," \u8BCD",c?" \xB7 \u5DF2\u8BFB":""))))}))))}function ci({text:a,onOpenWord:e}){let t=[],r=/\[\[([^\]|]+)\|([^\]]+)\]\]/g,n=0,o=r.exec(a);for(;o;)o.index>n&&t.push(a.slice(n,o.index)),t.push({id:o[1],label:o[2]}),n=o.index+o[0].length,o=r.exec(a);return n<a.length&&t.push(a.slice(n)),C.default.createElement(C.default.Fragment,null,t.map((i,s)=>typeof i=="string"?C.default.createElement(C.default.Fragment,{key:s},i):C.default.createElement("button",{key:s,type:"button",className:"wa-read-word",onClick:()=>e(i.id)},i.label)))}function bt({atlas:a,progress:e,initialId:t,onOpenWord:r,onReaderFocus:n}){let[o,i]=(0,C.useState)("short"),[s,l]=(0,C.useState)(!1),p=(0,C.useCallback)(I=>{l(I),n?.(I)},[n]);(0,C.useEffect)(()=>()=>n?.(!1),[n]);let[d,u]=(0,C.useState)(t||null),[w,c]=(0,C.useState)({status:"idle",data:null,error:""}),[b,T]=(0,C.useState)(0);(0,C.useEffect)(()=>{i("short"),u(t||null)},[t]),(0,C.useEffect)(()=>{if(!d){c({status:"idle",data:null,error:""});return}let I=!0;return c({status:"loading",data:null,error:""}),Yr(d).then(m=>I&&c({status:"ready",data:m,error:""})).catch(m=>I&&c({status:"error",data:null,error:m.message||"\u77ED\u6587\u52A0\u8F7D\u5931\u8D25\u3002"})),()=>{I=!1}},[d,b]);let O=I=>{le(m=>({...m,readings:{...m.readings,[I]:{done:!0,last:Date.now(),times:(m.readings?.[I]?.times||0)+1}}})),u(null)};return d?w.status==="loading"?C.default.createElement("div",{className:"wa-read-page"},C.default.createElement(me,{label:"\u6B63\u5728\u6253\u5F00\u77ED\u6587\u2026"})):w.status!=="ready"||!w.data?C.default.createElement("div",{className:"wa-read-page"},C.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:()=>u(null)},C.default.createElement($,{name:"chevronLeft",size:16})," \u8FD4\u56DE\u4E66\u623F"),C.default.createElement(he,{icon:"book",title:"\u6253\u5F00\u5931\u8D25"},C.default.createElement("p",null,w.error||"\u77ED\u6587\u5185\u5BB9\u6682\u65F6\u4E0D\u53EF\u7528\u3002"),C.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary",onClick:()=>T(I=>I+1)},"\u91CD\u8BD5"))):C.default.createElement(wi,{atlas:a,item:w.data,progress:e,onOpenWord:r,onBack:()=>u(null),onDone:()=>O(w.data.id)}):C.default.createElement("div",{className:`wa-read-page ${s?"is-reader-focus":""}`},C.default.createElement("header",{className:"wa-read-head"},C.default.createElement("p",{className:"wa-eyebrow"},"\u4E66\u623F \xB7 Reading"),C.default.createElement("h1",null,"\u5728\u6545\u4E8B\u91CC\uFF0C\u6162\u6162\u8BFB\u3002"),C.default.createElement("p",null,"\u53CC\u8BED\u5BF9\u7167\uFF0C\u8F7B\u70B9\u751F\u8BCD\u67E5\u8BCD\u3002\u9605\u8BFB\u4E0D\u4F1A\u6539\u53D8 FSRS \u590D\u4E60\u8FDB\u5EA6\u3002")),C.default.createElement("div",{className:"wa-read-tabs",role:"tablist"},C.default.createElement("button",{type:"button",role:"tab","aria-selected":o==="short",className:o==="short"?"is-on":"",onClick:()=>i("short")},"\u77ED\u6587"),C.default.createElement("button",{type:"button",role:"tab","aria-selected":o==="books",className:o==="books"?"is-on":"",onClick:()=>i("books")},"\u4E66\u67B6")),o==="short"?C.default.createElement(ui,{atlas:a,progress:e,onOpen:u}):C.default.createElement(kn,{atlas:a,progress:e,onOpenWord:r,onReaderFocus:p}))}function ui({atlas:a,progress:e,onOpen:t}){let[r,n]=(0,C.useState)(null),[o,i]=(0,C.useState)(""),[s,l]=(0,C.useState)("all"),[p,d]=(0,C.useState)(24);(0,C.useEffect)(()=>{let w=!0;return at().then(c=>w&&n(Array.isArray(c.items)?c.items:[])).catch(c=>w&&i(c.message||"\u77ED\u6587\u5217\u8868\u52A0\u8F7D\u5931\u8D25\u3002")),()=>{w=!1}},[]);let u=(0,C.useMemo)(()=>r?s==="all"?r:r.filter(w=>w.cefr===s):[],[r,s]);return o?C.default.createElement(he,{icon:"book",title:"\u4E66\u623F\u6682\u65F6\u6253\u4E0D\u5F00"},C.default.createElement("p",null,o)):r?C.default.createElement("section",{className:"wa-short-library"},C.default.createElement("div",{className:"wa-read-filters"},C.default.createElement("button",{type:"button",className:s==="all"?"is-on":"",onClick:()=>{l("all"),d(24)}},"\u5168\u90E8"),a.cefr.map((w,c)=>C.default.createElement("button",{key:w,type:"button",className:s===c?"is-on":"",onClick:()=>{l(c),d(24)}},w))),C.default.createElement("div",{className:"wa-short-grid"},u.slice(0,p).map(w=>{let c=Ht(e,w.id);return C.default.createElement("button",{key:w.id,type:"button",className:`wa-short-card ${c?"is-read":""}`,onClick:()=>t(w.id)},C.default.createElement("div",{className:"wa-short-card-top"},C.default.createElement("span",{className:"wa-short-level"},fa(w,a)),C.default.createElement("span",{className:"wa-short-topic"},ha(w,a)),c?C.default.createElement("span",{className:"wa-short-done"},C.default.createElement($,{name:"check",size:12})," \u5DF2\u8BFB"):null),C.default.createElement("b",{className:"wa-short-zh"},w.titleZh),C.default.createElement("span",{className:"wa-short-en",lang:"en"},w.title),C.default.createElement("span",{className:"wa-short-words"},ba(w.ids,e.cards)," \u4E2A\u672A\u5B66\u91CD\u70B9\u8BCD"))})),u.length>p?C.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost wa-read-more",onClick:()=>d(w=>w+24)},"\u518D\u770B 24 \u7BC7"):null,u.length===0?C.default.createElement("p",{className:"wa-panel-note"},"\u8FD9\u4E00\u7EA7\u6682\u65F6\u6CA1\u6709\u77ED\u6587\uFF0C\u6362\u4E2A\u7EA7\u522B\u770B\u770B\u3002"):null):C.default.createElement(me,{label:"\u6B63\u5728\u6574\u7406\u4E66\u67B6\u2026"})}function wi({atlas:a,item:e,progress:t,onOpenWord:r,onBack:n,onDone:o}){let[i,s]=(0,C.useState)(!0),[l,p]=(0,C.useState)({}),[d,u]=(0,C.useState)(!1),w=e.q||[],c=w.reduce((b,T,O)=>b+(l[O]===T.a?1:0),0);return C.default.createElement("div",{className:"wa-reader"},C.default.createElement("header",{className:"wa-reader-bar"},C.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:n},C.default.createElement($,{name:"chevronLeft",size:16})," \u4E66\u623F"),C.default.createElement("span",{className:"wa-reader-meta"},fa(e,a)," \xB7 ",ha(e,a)," \xB7 ",ba(e.ids,t.cards)," \u4E2A\u672A\u5B66\u91CD\u70B9\u8BCD"),C.default.createElement("button",{type:"button",className:`wa-btn wa-btn-ghost ${i?"is-on":""}`,onClick:()=>s(b=>!b)},C.default.createElement($,{name:"languages",size:15})," ",i?"\u53CC\u8BED":"\u82F1\u6587")),C.default.createElement("article",{className:"wa-reader-body"},C.default.createElement("h1",null,e.titleZh),C.default.createElement("p",{className:"wa-reader-subtitle",lang:"en"},e.title),e.paras.map((b,T)=>C.default.createElement("section",{key:T,className:"wa-reader-para"},C.default.createElement("p",{lang:"en"},C.default.createElement(ci,{text:b,onOpenWord:r})),i?C.default.createElement("p",{className:"wa-reader-zh",lang:"zh"},e.zh?.[T]):null)),w.length?C.default.createElement("section",{className:"wa-reader-quiz"},C.default.createElement("h2",null,"\u7406\u89E3\u4E00\u4E0B"),w.map((b,T)=>C.default.createElement("div",{key:T,className:"wa-reader-question"},C.default.createElement("p",{lang:"en"},b.s),C.default.createElement("div",{className:"wa-reader-q-options"},[["T","True"],["F","False"],["NG","Not Given"]].map(([O,I])=>C.default.createElement("button",{key:O,type:"button",className:`${l[T]===O?"is-chosen":""} ${d&&b.a===O?"is-answer":""}`,onClick:()=>!d&&p(m=>({...m,[T]:O}))},I))),d?C.default.createElement("p",{className:`wa-reader-why ${l[T]===b.a?"is-ok":"is-bad"}`},l[T]===b.a?"\u7B54\u5BF9\u4E86\u3002":`\u6B63\u786E\u7B54\u6848\uFF1A${b.a==="T"?"True":b.a==="F"?"False":"Not Given"}\u3002`," ",b.why):null)),d?C.default.createElement("p",{className:"wa-panel-note"},"\u7B54\u5BF9 ",c," / ",w.length," \u9898"):C.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:()=>u(!0),disabled:Object.keys(l).length<w.length},"\u68C0\u67E5\u7B54\u6848")):null,C.default.createElement("div",{className:"wa-reader-actions"},C.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary wa-btn-lg",onClick:o},"\u5B8C\u6210\u9605\u8BFB ",C.default.createElement($,{name:"check",size:17})),C.default.createElement("span",{className:"wa-panel-note"},"\u5B8C\u6210\u540E\u4F1A\u8BB0\u5F55\u5728\u4E66\u623F\uFF0C\u4E0D\u5F71\u54CD FSRS \u590D\u4E60\u8FDB\u5EA6\u3002"))))}var Nn=require("react");function Xt({protocol:a,platform:e,left:t,top:r,fullscreen:n=!1}){return a==="dsh-app:"&&/Mac/.test(String(e||""))&&Number(t)<110&&Number(r)<45&&!n}function zn(a,e){(0,Nn.useEffect)(()=>{let t=a.current;if(!t)return;let r=()=>{let o=t.getBoundingClientRect(),i=Xt({protocol:window.location.protocol,platform:navigator.platform,left:o.left,top:o.top,fullscreen:!!document.fullscreenElement});t.dataset.titlebar=i?"true":"false"};r();let n=typeof ResizeObserver=="function"?new ResizeObserver(r):null;return n?.observe(t),window.addEventListener("resize",r),document.addEventListener("fullscreenchange",r),()=>{n?.disconnect(),window.removeEventListener("resize",r),document.removeEventListener("fullscreenchange",r),delete t.dataset.titlebar}},[a,e])}var mi=E.Good;function gi(){return _.default.createElement("svg",{viewBox:"0 0 64 64",width:"34",height:"34","aria-hidden":"true"},_.default.createElement("defs",null,_.default.createElement("linearGradient",{id:"wa-brand-gold",x1:"0",y1:"0",x2:"1",y2:"1"},_.default.createElement("stop",{offset:"0",stopColor:"#FFE9A8"}),_.default.createElement("stop",{offset:"0.55",stopColor:"#F5C052"}),_.default.createElement("stop",{offset:"1",stopColor:"#D98E2B"}))),_.default.createElement("rect",{width:"64",height:"64",rx:"15",fill:"var(--dsw-alias-bg-layer-2)"}),_.default.createElement("circle",{cx:"14",cy:"18",r:"1.4",fill:"var(--dsw-alias-label-secondary)",opacity:"0.6"}),_.default.createElement("circle",{cx:"50",cy:"16",r:"1.7",fill:"var(--dsw-alias-label-secondary)",opacity:"0.6"}),_.default.createElement("circle",{cx:"50",cy:"48",r:"1.3",fill:"var(--dsw-alias-label-secondary)",opacity:"0.5"}),_.default.createElement("circle",{cx:"14",cy:"46",r:"1.5",fill:"var(--dsw-alias-label-secondary)",opacity:"0.5"}),_.default.createElement("path",{d:"M32 15 L36.6 27.4 L49 32 L36.6 36.6 L32 49 L27.4 36.6 L15 32 L27.4 27.4 Z",fill:"url(#wa-brand-gold)"}),_.default.createElement("circle",{cx:"32",cy:"32",r:"3.4",fill:"#FFF6D8"}))}var fi=[{id:"today",label:"\u4ECA\u65E5",icon:"star"},{id:"atlas",label:"\u56FE\u9274",icon:"book"},{id:"read",label:"\u4E66\u623F",icon:"library"},{id:"galaxy",label:"\u661F\u56FE",icon:"orbit"},{id:"review",label:"\u590D\u4E60",icon:"refresh"},{id:"practice",label:"\u7EC3\u4E60",icon:"keyboard"},{id:"bookmarks",label:"\u751F\u8BCD\u672C",icon:"heart"},{id:"settings",label:"\u6211\u7684",icon:"user"}];function Jt(){let[a,e]=(0,_.useState)(null),[t,r]=(0,_.useState)(""),[n,o]=(0,_.useState)("today"),[i,s]=(0,_.useState)(""),[l,p]=(0,_.useState)("all"),[d,u]=(0,_.useState)("all"),[w,c]=(0,_.useState)([]),[b,T]=(0,_.useState)(!1),[O,I]=(0,_.useState)(null),[m,z]=(0,_.useState)(!1),k=hr(),A=(0,_.useRef)(null);zn(A,n),(0,_.useEffect)(()=>{let j=V=>{(V.metaKey||V.ctrlKey)&&V.key.toLowerCase()==="k"&&(V.preventDefault(),T(Ee=>!Ee))};return window.addEventListener("keydown",j),()=>window.removeEventListener("keydown",j)},[]),(0,_.useEffect)(()=>{br();let j=!0;return rr().then(V=>{j&&e(V)}).catch(V=>{j&&r(V.message||"\u8BCD\u5E93\u52A0\u8F7D\u5931\u8D25")}),()=>{j=!1}},[]);let x=(0,_.useMemo)(()=>{if(!a)return[];let j=i.trim().toLowerCase();return a.words.filter(V=>l!=="all"&&V.cefr!==l||d!=="all"&&V.topic!==d?!1:j?V.word.toLowerCase().includes(j)||V.zh.toLowerCase().includes(j)||V.ipa.toLowerCase().includes(j):!0)},[a,i,l,d]),S=(0,_.useMemo)(()=>a?k.bookmarks.map(j=>a.byId.get(j)).filter(Boolean):[],[a,k.bookmarks]),F=(0,_.useMemo)(()=>{if(!a)return 0;let j=Date.now(),V=0;for(let Ee of a.words){let We=k.cards[Ee.id];We&&We.due<=j&&(V+=1)}return V},[a,k.cards]),W=(0,_.useMemo)(()=>Object.keys(k.cards).length,[k.cards]),Q=(0,_.useMemo)(()=>Xe(k.days),[k.days]),ee=n==="bookmarks"?S:x,pe=w.length>0?w[w.length-1]:null,N=pe&&a?a.byId.get(pe):null,U=N?ee.findIndex(j=>j.id===N.id):-1,K=w.length>1&&a?a.byId.get(w[w.length-2]):null,q=j=>c([j]),X=j=>c(V=>V[V.length-1]===j?V:[...V,j]),ie=()=>c(j=>j.slice(0,-1)),Ge=j=>le(V=>xr(V,j)),xe=j=>le(V=>V.cards[j]?V:{...V,cards:{...V.cards,[j]:ea(void 0,mi)},days:Ia(V.days,{newWords:1})}),ge=()=>le(j=>({...j,settings:{...j.settings,accent:j.settings.accent==="uk"?"us":"uk"}})),Ce=(j={})=>{if(!a)return;if(k.session&&!k.session.finished&&!j.ids&&!j.reviewOnly&&!j.extra){o("learn");return}let Ee=j.extra?{...k.settings,dailyNew:ca(k)+j.extra}:k.settings,We=Wa(a,k,Ee,j);We.steps.length!==0&&(le(Na=>({...Na,session:We})),o("learn"))},ka=N&&a?_.default.createElement(Za,{atlas:a,word:N,progress:k,onClose:()=>c([]),onOpenWord:X,onBack:w.length>1?ie:void 0,backLabel:K?.word,onPrev:()=>{U>0&&c(j=>[...j.slice(0,-1),ee[U-1].id])},onNext:()=>{U>=0&&U<ee.length-1&&c(j=>[...j.slice(0,-1),ee[U+1].id])},hasPrev:U>0,hasNext:U>=0&&U<ee.length-1,onToggleBookmark:Ge,onMarkLearned:xe}):null;return n==="learn"&&a?_.default.createElement("div",{className:"wa-root wa-root-focus",ref:A},_.default.createElement(rt,{atlas:a,progress:k,onExit:()=>o("today"),onRestart:Ce,onOpenWord:X}),ka):_.default.createElement("div",{className:`wa-root ${m?"is-reader-focus":""}`,ref:A},_.default.createElement("header",{className:"wa-header"},_.default.createElement("div",{className:"wa-brand"},_.default.createElement(gi,null),_.default.createElement("div",{className:"wa-brand-text"},_.default.createElement("h1",null,"\u8BCD\u5149 ",_.default.createElement("span",null,"Word Atlas")),_.default.createElement("p",null,"7,298 \u96C5\u601D\u8BCD \xB7 \u4E00\u8BCD\u4E00\u753B \xB7 FSRS \u95F4\u9694\u590D\u4E60"))),_.default.createElement("div",{className:"wa-toolbar"},_.default.createElement("div",{className:"wa-search",title:"\u2318K \u6253\u5F00\u547D\u4EE4\u9762\u677F"},_.default.createElement($,{name:"search",size:16}),_.default.createElement("input",{value:i,onChange:j=>{s(j.target.value),n!=="atlas"&&o("atlas")},placeholder:"\u641C\u7D22\u5355\u8BCD / \u4E2D\u6587\u91CA\u4E49","aria-label":"\u641C\u7D22\u5355\u8BCD\u6216\u91CA\u4E49",spellCheck:!1}),i?_.default.createElement("button",{type:"button",className:"wa-search-clear",onClick:()=>s(""),"aria-label":"\u6E05\u7A7A\u641C\u7D22"},_.default.createElement($,{name:"close",size:14})):null),_.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost wa-accent-btn",onClick:ge,title:"\u5207\u6362\u53D1\u97F3\u504F\u597D"},_.default.createElement($,{name:"globe",size:15})," ",k.settings.accent==="uk"?"\u82F1\u97F3":"\u7F8E\u97F3"),_.default.createElement("button",{type:"button",className:"wa-icon-btn",onClick:()=>o("settings"),"aria-label":"\u8BBE\u7F6E\u4E0E\u5173\u4E8E"},_.default.createElement($,{name:"info",size:18})))),_.default.createElement("nav",{className:"wa-tabs",role:"tablist","aria-label":"\u8BCD\u5149\u89C6\u56FE"},fi.map(j=>_.default.createElement("button",{key:j.id,type:"button",role:"tab","aria-selected":n===j.id,className:n===j.id?"is-on":"",onClick:()=>{j.id==="read"&&I(null),z(!1),o(j.id)}},_.default.createElement($,{name:j.icon,size:16})," ",j.label,j.id==="atlas"&&a?_.default.createElement("span",{className:"wa-tab-count"},a.count.toLocaleString("en-US")):null,j.id==="review"&&F>0?_.default.createElement("span",{className:"wa-tab-badge"},F>999?"999+":F):null,j.id==="bookmarks"&&S.length>0?_.default.createElement("span",{className:"wa-tab-count"},S.length):null)),_.default.createElement("div",{className:"wa-tabs-meta"},_.default.createElement("span",null,"\u5DF2\u5B66 ",W.toLocaleString("en-US")),_.default.createElement("i",null),_.default.createElement("span",null,"\u8FDE\u7EED ",Q," \u5929"))),_.default.createElement("main",{className:"wa-main"},t?_.default.createElement(he,{icon:"info",title:"\u8BCD\u5E93\u8FD8\u6CA1\u51C6\u5907\u597D"},_.default.createElement("p",null,t),_.default.createElement("p",{className:"wa-about-note"},"\u8BF7\u786E\u8BA4 word-atlas \u63D2\u4EF6\u5DF2\u542F\u7528\u3001Host \u8DEF\u7531 ",_.default.createElement("code",null,"/word-atlas/health")," \u53EF\u8BBF\u95EE\uFF1B\u5982\u679C\u63D2\u4EF6\u521A\u5B89\u88C5\uFF0C\u5237\u65B0\u9875\u9762\u518D\u8BD5\u3002")):a?n==="today"?_.default.createElement(tt,{atlas:a,progress:k,onStart:Ce,onOpenWord:X,onOpenLevel:j=>{p(j),o("atlas")},onOpenTopic:j=>{u(j),o("atlas")},onOpenReading:j=>{I(j),o("read")}}):n==="read"?_.default.createElement(bt,{atlas:a,progress:k,initialId:O,onOpenWord:X,onReaderFocus:z}):n==="galaxy"?_.default.createElement(pt,{atlas:a,progress:k,onOpenWord:X}):n==="practice"?_.default.createElement(lt,{atlas:a,progress:k}):n==="review"?_.default.createElement(Ya,{atlas:a,progress:k,onExit:()=>o("today"),onOpenWord:X}):n==="settings"?_.default.createElement(it,{atlas:a,progress:k,onOpenWord:X}):n==="bookmarks"?S.length===0?_.default.createElement(he,{icon:"heart",title:"\u751F\u8BCD\u672C\u8FD8\u662F\u7A7A\u7684"},_.default.createElement("p",null,"\u5728\u8BCD\u6761\u5361\u7247\u6216\u8BE6\u60C5\u91CC\u70B9 \u2665\uFF0C\u628A\u60F3\u53CD\u590D\u770B\u7684\u8BCD\u6536\u8FDB\u6765\u3002"),_.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary",onClick:()=>o("atlas")},"\u53BB\u56FE\u9274")):_.default.createElement(ga,{atlas:a,words:S,progress:k,onOpen:q,onToggleBookmark:Ge}):_.default.createElement(_.default.Fragment,null,_.default.createElement("div",{className:"wa-filters"},_.default.createElement("div",{className:"wa-chips",role:"group","aria-label":"CEFR \u7EA7\u522B"},_.default.createElement("button",{type:"button",className:l==="all"?"is-on":"",onClick:()=>p("all")},"\u5168\u90E8\u7EA7\u522B"),a.cefr.map(j=>_.default.createElement("button",{type:"button",key:j,className:l===j?"is-on":"",onClick:()=>p(j)},j))),_.default.createElement("div",{className:"wa-topics",role:"group","aria-label":"\u8BDD\u9898"},_.default.createElement("button",{type:"button",className:d==="all"?"is-on":"",onClick:()=>u("all")},"\u5168\u90E8\u8BDD\u9898"),a.topics.map(j=>_.default.createElement("button",{type:"button",key:j.slug,className:d===j.slug?"is-on":"",onClick:()=>u(j.slug)},j.zh)))),_.default.createElement(ga,{atlas:a,words:x,progress:k,onOpen:q,onToggleBookmark:Ge}),_.default.createElement("footer",{className:"wa-footer"},"\u8BCD\u5E93 \xB7 \u63D2\u753B \xB7 \u53D1\u97F3\u6765\u81EA"," ",_.default.createElement("a",{href:"https://github.com/designfuchen/word-atlas",target:"_blank",rel:"noreferrer"},"\u8BCD\u5149 \xB7 Word Atlas")," ","\xB7 CC BY 4.0")):_.default.createElement("div",{className:"wa-boot"},_.default.createElement(me,{label:"\u6B63\u5728\u52A0\u8F7D\u8BCD\u5149\u8BCD\u5E93\u2026"}))),ka,b?_.default.createElement(ct,{atlas:a,progress:k,onClose:()=>T(!1),onNavigate:j=>{j==="read"&&I(null),z(!1),o(j)},onOpenWord:X}):null)}var hi="word-atlas-dsh",Mn="word-atlas";function bi({size:a=18,active:e=!1}){return Qt.default.createElement("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:e?"currentColor":"none",stroke:"currentColor",strokeWidth:1.6,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"},Qt.default.createElement("path",{d:"M12 3.2l2.25 4.8 5.2.72-3.78 3.65.93 5.19L12 15.1l-4.6 2.46.93-5.19-3.78-3.65 5.2-.72z"}))}var xi=["slots"],yi={App:Jt,DetailModal:Za,ReviewView:Ya,WordGrid:ga,Settings:it,LookupText:Ie,Today:tt,Learn:rt,createLookupIndex:Ot,candidateBases:Bt,detectTitlebar:Xt,compact:Ke,Practice:lt,GalaxyView:pt,Palette:ct,ReadingPage:bt,BookReader:ht,buildSentenceQueue:gt,chapterKey:Oe,positionKey:Ue,queueIndexAtTime:ft,romanNumeral:wt,splitSentenceParts:mt,session:{buildSession:Wa,answerSession:qa,advanceSession:wa,gradeFor:Ha,sessionStats:Ka,todayPlan:ua,distractors:Ga}};function vi(a){if(typeof document<"u"){let e=document.createElement("style");e.setAttribute("data-plugin",hi),e.textContent=ar,document.head.appendChild(e),a.effect(()=>()=>e.remove())}a.effect(()=>a.slots.inject("main",()=>a.slots.register({name:"main",key:Mn},Jt))),a.effect(()=>a.slots.inject("sidebar.panellist",()=>a.slots.register({name:"sidebar.panellist",id:Mn,order:22,label:()=>"\u8BCD\u5149 \xB7 Word Atlas"},bi)))}

    })(module, exports, require);
    return module.exports;
  },
});
