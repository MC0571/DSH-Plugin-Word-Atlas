/* 词光 · Word Atlas — generated client bundle (build from src/client). */
window.__ModuleLoader__.load({
  id: "word-atlas-dsh",
  factory: (require) => {
    const module = { exports: {} };
    const exports = module.exports;
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    (function (module, exports, require) {
var $t=Object.create;var le=Object.defineProperty;var Tt=Object.getOwnPropertyDescriptor;var Ft=Object.getOwnPropertyNames;var Ht=Object.getPrototypeOf,Gt=Object.prototype.hasOwnProperty;var Bt=(t,e)=>{for(var a in e)le(t,a,{get:e[a],enumerable:!0})},Ye=(t,e,a,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of Ft(e))!Gt.call(t,n)&&n!==a&&le(t,n,{get:()=>e[n],enumerable:!(r=Tt(e,n))||r.enumerable});return t};var Y=(t,e,a)=>(a=t!=null?$t(Ht(t)):{},Ye(e||!t||!t.__esModule?le(a,"default",{value:t,enumerable:!0}):a,t)),jt=t=>Ye(le({},"__esModule",{value:!0}),t);var $a={};Bt($a,{__test:()=>Da,apply:()=>Ia,inject:()=>Ca});module.exports=jt($a);var Pe=Y(require("react"),1);var Ze=`/* \u8BCD\u5149 \xB7 Word Atlas \u2014 plugin page styles.
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
  color: inherit;
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
  color: #fff;
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
  color: #fff;
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
  width: min(920px, 100%);
  max-height: min(88vh, 880px);
  border: 1px solid var(--wa-line);
  border-radius: 20px;
  background: var(--dsw-alias-bg-layer-1);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.35);
  overflow: hidden;
}

.wa-detail-art {
  position: relative;
  background: var(--wa-surface-2);
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

.wa-detail-img {
  width: 100%;
  height: 100%;
  min-height: 0;
  flex: 1 1 auto;
  object-fit: cover;
}

.wa-detail-art .wa-img-fallback {
  min-height: 300px;
}

.wa-detail-art-meta {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 30px 16px 12px;
  background: linear-gradient(to top, rgba(4, 8, 14, 0.72), transparent);
  color: #f4f6fb;
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
  padding: 22px 26px 24px;
  overflow-y: auto;
  min-width: 0;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 22px;
  padding-top: 14px;
  border-top: 1px solid var(--wa-line);
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
  margin-top: 22px;
  padding: 10px 30px;
}

.wa-answer {
  margin-top: 12px;
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
    max-height: 92vh;
  }

  .wa-detail-art {
    min-height: 0;
    height: 210px;
  }

  .wa-detail-img {
    height: 210px;
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
`;var l=Y(require("react"),1);var te="/word-atlas/atlas",O={img:1,uk:2,us:4,ex:8,ex2:16};async function Je(t){let e=await fetch(t,{cache:"no-store"});if(!e.ok)throw new Error(`\u8BCD\u5E93\u52A0\u8F7D\u5931\u8D25\uFF08HTTP ${e.status}\uFF09`);return e.json()}function Ut(t){let e=(t.topics||[]).map(([n,i])=>({slug:n,zh:i})),a=t.cefr||["A1","A2","B1","B2","C1","C2"],r=(t.words||[]).map((n,i)=>{let[s,d,w,m,y,c,M]=n;return{id:s,word:d,zh:w,ipa:m,cefr:a[y]||"",topic:e[c]?.slug||"",topicZh:e[c]?.zh||"",media:M,order:i}});return{id:t.id,name:t.name,count:t.count??r.length,examples:t.examples??0,chunk:t.chunk??100,topics:e,cefr:a,words:r,byId:new Map(r.map(n=>[n.id,n]))}}var de=null;function Ve(){return de||(de=Je(`${te}/index.json`).then(Ut).catch(t=>{throw de=null,t})),de}var Ee=new Map,pe=new Map;function ce(t,e){let a=Ee.get(e);if(a)return Promise.resolve(a);let r=t.byId.get(e);if(!r)return Promise.reject(new Error(`\u627E\u4E0D\u5230\u8BCD\u6761 ${e}`));let n=Math.floor(r.order/t.chunk),i=pe.get(n);return i||(i=Je(`${te}/entries/${n}.json`).then(s=>{for(let d of s)Ee.set(d.id,d);pe.delete(n)}).catch(s=>{throw pe.delete(n),s}),pe.set(n,i)),i.then(()=>{let s=Ee.get(e);if(!s)throw new Error(`\u627E\u4E0D\u5230\u8BCD\u6761 ${e}`);return s})}var Xe=t=>`${te}/thumb/${t}.webp`,Qe=t=>`${te}/img/${t}.webp`,U=(t,e)=>`${te}/audio/${t}/${e}.mp3`;function Wt(t){return t&&(typeof t.media=="number"?t.media:t.m)||0}function W(t,e){return(Wt(t)&e)!==0}var tt=require("react"),at="/word-atlas/api/progress",rt="word-atlas-dsh:progress:v1",nt={accent:"uk",dailyNew:10,retention:.9};function Pt(){return{v:1,cards:{},bookmarks:[],days:{},settings:{...nt}}}function it(t){return!t||typeof t!="object"||Array.isArray(t)||t.v!==1?null:{v:1,cards:t.cards&&typeof t.cards=="object"&&!Array.isArray(t.cards)?t.cards:{},bookmarks:Array.isArray(t.bookmarks)?t.bookmarks.filter(e=>typeof e=="string"):[],days:t.days&&typeof t.days=="object"&&!Array.isArray(t.days)?t.days:{},settings:{...nt,...t.settings&&typeof t.settings=="object"?t.settings:{}},...typeof t.savedAt=="number"?{savedAt:t.savedAt}:{}}}function qt(){try{let t=localStorage.getItem(rt);return t?it(JSON.parse(t)):null}catch{return null}}function st(){try{localStorage.setItem(rt,JSON.stringify(H))}catch{}}var H=qt()||Pt(),Le=new Set,Ce=null,Re=!1;function ot(){for(let t of Le)t()}function lt(){clearTimeout(Ce),Ce=setTimeout(Yt,800)}function et(){return H}function Kt(t){return Le.add(t),()=>Le.delete(t)}function dt(){return(0,tt.useSyncExternalStore)(Kt,et,et)}function j(t){let e=t(H);!e||e===H||(H={...e,v:1,savedAt:Date.now()},st(),ot(),lt())}function Yt(){if(clearTimeout(Ce),!H.savedAt)return;let t=JSON.stringify(H);fetch(at,{method:"POST",headers:{"Content-Type":"application/json"},body:t}).catch(()=>{})}async function pt(){if(!Re){Re=!0;try{let t=await fetch(at,{cache:"no-store"});if(!t.ok)return;let e=it(await t.json());if(!e)return;let a=e.savedAt||0,r=H.savedAt||0;a>r?(H=e,st(),ot()):r>a&&lt()}catch{}}}function ue(t=new Date){return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}function we(t,{newWords:e=0,reviewed:a=0,correct:r=0}={}){let n=ue(),i=t[n]||{n:0,r:0,c:0};return{...t,[n]:{n:i.n+e,r:i.r+a,c:i.c+r}}}function ct(t,e=new Date){let a=0,r=new Date(e);for(;;){let n=t[ue(r)];if(!n||(n.n||0)+(n.r||0)===0){if(a===0&&ue(r)===ue(e)){r.setDate(r.getDate()-1);continue}break}a+=1,r.setDate(r.getDate()-1)}return a}function ut(t,e){let a=t.bookmarks.includes(e);return{...t,bookmarks:a?t.bookmarks.filter(r=>r!==e):[e,...t.bookmarks]}}var $e=class t extends Error{constructor(e="FSRS Error"){super(e),this.name="FSRSError",Error.captureStackTrace?.(this,t)}},E=class t extends $e{constructor(e){super(e),this.name="FSRSValidationError",Error.captureStackTrace?.(this,t)}},v=(t=>(t[t.New=0]="New",t[t.Learning=1]="Learning",t[t.Review=2]="Review",t[t.Relearning=3]="Relearning",t))(v||{}),u=(t=>(t[t.Manual=0]="Manual",t[t.Again=1]="Again",t[t.Hard=2]="Hard",t[t.Good=3]="Good",t[t.Easy=4]="Easy",t))(u||{}),N=class t{static card(e){return{...e,state:t.state(e.state),due:t.time(e.due),last_review:e.last_review?t.time(e.last_review):void 0}}static rating(e){if(typeof e=="string"){let a=e.charAt(0).toUpperCase(),r=e.slice(1).toLowerCase(),n=u[`${a}${r}`];if(n===void 0)throw new E(`Invalid rating:[${e}]`);return n}else if(typeof e=="number")return e;throw new E(`Invalid rating:[${e}]`)}static state(e){if(typeof e=="string"){let a=e.charAt(0).toUpperCase(),r=e.slice(1).toLowerCase(),n=v[`${a}${r}`];if(n===void 0)throw new E(`Invalid state:[${e}]`);return n}else if(typeof e=="number")return e;throw new E(`Invalid state:[${e}]`)}static time(e){if(e instanceof Date)return e;let a=new Date(e);if(typeof e=="object"&&e!==null&&!Number.isNaN(Date.parse(e)||+a))return a;if(typeof e=="string"){let r=Date.parse(e);if(Number.isNaN(r))throw new E(`Invalid date:[${e}]`);return new Date(r)}else if(typeof e=="number")return new Date(e);throw new E(`Invalid date:[${e}]`)}static review_log(e){return{...e,due:t.time(e.due),rating:t.rating(e.rating),state:t.state(e.state),review:t.time(e.review)}}};Date.prototype.scheduler=function(t,e){return T(this,t,e)};Date.prototype.diff=function(t,e){return Z(this,t,e)};Date.prototype.format=function(){return Zt(this)};Date.prototype.dueFormat=function(t,e,a){return Jt(this,t,e,a)};function T(t,e,a){return new Date(a?N.time(t).getTime()+e*24*60*60*1e3:N.time(t).getTime()+e*60*1e3)}function Z(t,e,a){if(!t||!e)throw new E("Invalid date");let r=N.time(t).getTime()-N.time(e).getTime(),n=0;switch(a){case"days":n=Math.floor(r/(1440*60*1e3));break;case"minutes":n=Math.floor(r/(60*1e3));break}return n}function Zt(t){let e=N.time(t),a=e.getFullYear(),r=e.getMonth()+1,n=e.getDate(),i=e.getHours(),s=e.getMinutes(),d=e.getSeconds();return`${a}-${ae(r)}-${ae(n)} ${ae(i)}:${ae(s)}:${ae(d)}`}function ae(t){return t<10?`0${t}`:`${t}`}var De=[60,60,24,31,12],Ie=["second","min","hour","day","month","year"];function Jt(t,e,a,r=Ie){t=N.time(t),e=N.time(e),r.length!==Ie.length&&(r=Ie);let n=t.getTime()-e.getTime(),i=0;for(n/=1e3,i=0;i<De.length&&!(n<De[i]);i++)n/=De[i];return`${Math.floor(n)}${a?r[i]:""}`}var Vt=Object.freeze([u.Again,u.Hard,u.Good,u.Easy]),Xt=[{start:2.5,end:7,factor:.15},{start:7,end:20,factor:.1},{start:20,end:1/0,factor:.05}];function Qt(t,e,a){let r=1;for(let s of Xt)r+=s.factor*Math.max(Math.min(t,s.end)-s.start,0);t=Math.min(t,a);let n=Math.max(2,Math.round(t-r)),i=Math.min(Math.round(t+r),a);return t>e&&(n=Math.max(n,e+1)),n=Math.min(n,i),{min_ivl:n,max_ivl:i}}function F(t,e,a){return Math.min(Math.max(t,e),a)}function $(t,e){let a=10**e;return Math.round(t*a)/a}function Rt(t,e){let a=Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()),r=Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate());return Math.floor((r-a)/864e5)}var ea=t=>{let e=t.slice(-1),a=parseInt(t.slice(0,-1),10);if(Number.isNaN(a)||!Number.isFinite(a)||a<0)throw new E(`Invalid step value: ${t}`);switch(e){case"m":return a;case"h":return a*60;case"d":return a*1440;default:throw new E(`Invalid step unit: ${t}, expected m/h/d`)}},ta=(t,e,a)=>{let r=e===v.Relearning||e===v.Review?t.relearning_steps:t.learning_steps,n=r.length;if(n===0||a>=n)return{};let i=r[0],s=ea,d=()=>s(i),w=()=>{if(n===1)return Math.round(s(i)*1.5);let _=r[1];return Math.round((s(i)+s(_))/2)},m=_=>_<0||_>=n?null:r[_],y=_=>s(_),c={},M=m(Math.max(0,a));if(e===v.Review)return c[u.Again]={scheduled_minutes:s(M),next_step:0},c;{c[u.Again]={scheduled_minutes:d(),next_step:0},c[u.Hard]={scheduled_minutes:w(),next_step:a};let _=m(a+1);if(_){let D=y(_);D&&(c[u.Good]={scheduled_minutes:Math.round(D),next_step:a+1})}}return c};function aa(){let t=this.review_time.getTime(),e=this.current.reps,a=this.current.difficulty*this.current.stability;return`${t}_${e}_${a}`}var be=(t=>(t.SCHEDULER="Scheduler",t.LEARNING_STEPS="LearningSteps",t.SEED="Seed",t))(be||{}),he=class{last;current;review_time;next=new Map;algorithm;strategies;elapsed_days=0;constructor(e,a,r,n){this.algorithm=r,this.last=N.card(e),this.current=N.card(e),this.review_time=N.time(a),this.strategies=n,this.init()}checkGrade(e){if(!Number.isFinite(e)||e<1||e>4)throw new E(`Invalid grade "${e}",expected 1-4`)}init(){let{state:e,last_review:a}=this.current,r=0;e!==v.New&&a&&(r=Rt(a,this.review_time)),this.current.last_review=this.review_time,this.elapsed_days=r,this.current.elapsed_days=r,this.current.reps+=1;let n=aa;if(this.strategies){let i=this.strategies.get(be.SEED);i&&(n=i)}this.algorithm.seed=n.call(this)}preview(){return{[u.Again]:this.review(u.Again),[u.Hard]:this.review(u.Hard),[u.Good]:this.review(u.Good),[u.Easy]:this.review(u.Easy),[Symbol.iterator]:this.previewIterator.bind(this)}}*previewIterator(){for(let e of Vt)yield this.review(e)}review(e){let{state:a}=this.last,r;switch(this.checkGrade(e),a){case v.New:r=this.newState(e);break;case v.Learning:case v.Relearning:r=this.learningState(e);break;case v.Review:r=this.reviewState(e);break}return r}buildLog(e){let{last_review:a,due:r,elapsed_days:n}=this.last;return{rating:e,state:this.current.state,due:a||r,stability:this.current.stability,difficulty:this.current.difficulty,elapsed_days:this.elapsed_days,last_elapsed_days:n,scheduled_days:this.current.scheduled_days,learning_steps:this.current.learning_steps,review:this.review_time}}},Te=class{c;s0;s1;s2;constructor(e){let a=ra();this.c=1,this.s0=a(" "),this.s1=a(" "),this.s2=a(" "),e==null&&(e=Date.now()),this.s0-=a(e),this.s0<0&&(this.s0+=1),this.s1-=a(e),this.s1<0&&(this.s1+=1),this.s2-=a(e),this.s2<0&&(this.s2+=1)}next(){let e=2091639*this.s0+this.c*23283064365386963e-26;return this.s0=this.s1,this.s1=this.s2,this.c=e|0,this.s2=e-this.c,this.s2}set state(e){this.c=e.c,this.s0=e.s0,this.s1=e.s1,this.s2=e.s2}get state(){return{c:this.c,s0:this.s0,s1:this.s1,s2:this.s2}}};function ra(){let t=4022871197;return function(a){a=String(a);for(let r=0;r<a.length;r++){t+=a.charCodeAt(r);let n=.02519603282416938*t;t=n>>>0,n-=t,n*=t,t=n>>>0,n-=t,t+=n*4294967296}return(t>>>0)*23283064365386963e-26}}function na(t){let e=new Te(t),a=()=>e.next();return a.int32=()=>e.next()*4294967296|0,a.double=()=>a()+(a()*2097152|0)*11102230246251565e-32,a.state=()=>e.state,a.importState=r=>(e.state=r,a),a}var ia="5.4.2",sa=.9,oa=36500,la=!1,xe=!0,da=Object.freeze(["1m","10m"]),pa=Object.freeze(["10m"]),Ba=`v${ia} using FSRS-6.0`,G=.001;var me=100,wt=.5,ca=.1542,mt=Object.freeze([.212,1.2931,2.3065,8.2956,6.4133,.8334,3.0194,.001,1.8722,.1666,.796,1.4835,.0614,.2629,1.6483,.6014,1.8729,.5425,.0912,.0658,ca]),ht=2,ua=(t,e=xe)=>[[G,me],[G,me],[G,me],[G,me],[1,10],[.001,4],[.001,4],[.001,.75],[0,4.5],[0,.8],[.001,3.5],[.001,5],[.001,.25],[.001,.9],[0,4],[0,1],[1,6],[0,t],[0,t],[e?.01:0,.8],[.1,.8]],J=(t,e,a=xe)=>{let r=ua(ht,a).slice(0,t.length);if(Math.max(0,e)>1){let n=F(t[11]||0,r[11][0],r[11][1]),i=F(t[13]||0,r[13][0],r[13][1]),s=F(t[14]||0,r[14][0],r[14][1]),d=-(Math.log(n)+Math.log(Math.pow(2,i)-1)+s*.3)/e,w=F($(Math.sqrt(Math.max(d,0)),8),.01,ht);r[17]&&(r[17]=[r[17][0],w]),r[18]&&(r[18]=[r[18][0],w])}return r.map(([n,i],s)=>F(t[s]||0,n,i))};var je=(t,e=0,a=xe)=>{if(t===void 0)return[...mt];switch(t.length){case 21:return J(Array.from(t),e,a);case 19:return console.debug("[FSRS-6]auto fill w from 19 to 21 length"),J(Array.from(t),e,a).concat([0,wt]);case 17:{let r=J(Array.from(t),e,a);return r[4]=+(r[5]*2+r[4]).toFixed(8),r[5]=+(Math.log(r[5]*3+1)/3).toFixed(8),r[6]=+(r[6]+.5).toFixed(8),console.debug("[FSRS-6]auto fill w from 17 to 21 length"),r.concat([0,0,0,wt])}default:return console.warn("[FSRS]Invalid parameters length, using default parameters"),[...mt]}},wa=t=>{let e=Array.isArray(t?.learning_steps)?t.learning_steps:da,a=Array.isArray(t?.relearning_steps)?t.relearning_steps:pa,r=t?.enable_short_term??xe,n=je(t?.w,a.length,r);return{request_retention:t?.request_retention||sa,maximum_interval:t?.maximum_interval||oa,w:n,enable_fuzz:t?.enable_fuzz??la,enable_short_term:r,learning_steps:e,relearning_steps:a}};function V(t,e){let a={due:t?N.time(t):new Date,stability:0,difficulty:0,elapsed_days:0,scheduled_days:0,reps:0,lapses:0,learning_steps:0,state:v.New,last_review:void 0};return e&&typeof e=="function"?e(a):a}var ft=t=>{let e=typeof t=="number"?-t:-t[20],a=Math.exp(Math.pow(e,-1)*Math.log(.9))-1;return{decay:e,factor:$(a,8)}};function Fe(t,e,a){let{decay:r,factor:n}=ft(t);return $(Math.pow(1+n*e/a,r),8)}var He=class{param;intervalModifier;_seed;constructor(e){this.param=new Proxy(this.prepare_parameters(e),this.params_handler_proxy()),this.intervalModifier=this.calculate_interval_modifier(this.param.request_retention),this.forgetting_curve=Fe.bind(this,this.param.w)}get interval_modifier(){return this.intervalModifier}set seed(e){this._seed=e}calculate_interval_modifier(e){if(e<=0||e>1)throw new E("Requested retention rate should be in the range (0,1]");let{decay:a,factor:r}=ft(this.param.w);return $((Math.pow(e,1/a)-1)/r,8)}get parameters(){return this.param}set parameters(e){this.update_parameters(e)}params_handler_proxy(){let e=this;return{set:function(a,r,n){return r==="request_retention"&&Number.isFinite(n)?e.intervalModifier=e.calculate_interval_modifier(Number(n)):r==="w"&&(n=je(n,a.relearning_steps.length,a.enable_short_term),n=J(Array.from(n),a.relearning_steps.length,a.enable_short_term),e.forgetting_curve=Fe.bind(this,n),e.intervalModifier=e.calculate_interval_modifier(Number(a.request_retention))),Reflect.set(a,r,n),!0}}}update_parameters(e){let a=this.prepare_parameters(e);for(let r in a){let n=r;this.param[n]=a[n]}}prepare_parameters=e=>{let a=wa(e);return a.w=J(Array.from(a.w),a.relearning_steps.length,a.enable_short_term),a};init_stability(e){return Math.max(this.param.w[e-1],.1)}init_difficulty(e){let a=this.param.w,r=a[4]-Math.exp((e-1)*a[5])+1;return $(r,8)}apply_fuzz(e,a){if(!this.param.enable_fuzz||e<2.5)return Math.round(e);let n=na(this._seed)(),{min_ivl:i,max_ivl:s}=Qt(e,a,this.param.maximum_interval);return Math.floor(n*(s-i+1)+i)}next_interval(e,a){let r=Math.min(Math.max(1,Math.round(e*this.intervalModifier)),this.param.maximum_interval);return this.apply_fuzz(r,a)}linear_damping(e,a){return $(e*(10-a)/9,8)}next_difficulty(e,a){let r=-this.param.w[6]*(a-3),n=e+this.linear_damping(r,e);return F(this.mean_reversion(this.init_difficulty(u.Easy),n),1,10)}mean_reversion(e,a){let r=this.param.w;return $(r[7]*e+(1-r[7])*a,8)}next_recall_stability(e,a,r,n){let i=this.param.w,s=u.Hard===n?i[15]:1,d=u.Easy===n?i[16]:1;return $(F(a*(1+Math.exp(i[8])*(11-e)*Math.pow(a,-i[9])*(Math.exp((1-r)*i[10])-1)*s*d),G,36500),8)}next_forget_stability(e,a,r){let n=this.param.w;return $(F(n[11]*Math.pow(e,-n[12])*(Math.pow(a+1,n[13])-1)*Math.exp((1-r)*n[14]),G,36500),8)}next_short_term_stability(e,a){let r=this.param.w,n=Math.pow(e,-r[19])*Math.exp(r[17]*(a-3+r[18])),i=a>=u.Hard?Math.max(n,1):n;return $(F(e*i,G,36500),8)}forgetting_curve;next_state(e,a,r,n){let{difficulty:i,stability:s}=e??{difficulty:0,stability:0};if(a<0)throw new E(`Invalid delta_t "${a}"`);if(r<0||r>4)throw new E(`Invalid grade "${r}"`);if(i===0&&s===0)return{difficulty:F(this.init_difficulty(r),1,10),stability:this.init_stability(r)};if(r===0)return{difficulty:i,stability:s};if(i<1||s<G)throw new E(`Invalid memory state { difficulty: ${i}, stability: ${s} }`);let d=this.param.w;n=typeof n=="number"?n:this.forgetting_curve(a,s);let w;if(a===0&&this.param.enable_short_term)w=this.next_short_term_stability(s,r);else if(r===1){let y=this.next_forget_stability(i,s,n),[c,M]=[0,0];this.param.enable_short_term&&(c=d[17],M=d[18]);let _=s/Math.exp(c*M);w=F($(_,8),G,y)}else w=this.next_recall_stability(i,s,n,r);return{difficulty:this.next_difficulty(i,r),stability:w}}},fe=class extends he{learningStepsStrategy;constructor(e,a,r,n){super(e,a,r,n);let i=ta;if(this.strategies){let s=this.strategies.get(be.LEARNING_STEPS);s&&(i=s)}this.learningStepsStrategy=i}getLearningInfo(e,a){let r=this.algorithm.parameters;e.learning_steps=e.learning_steps||0;let n=this.learningStepsStrategy(r,e.state,e.learning_steps),i=Math.max(0,n[a]?.scheduled_minutes??0),s=Math.max(0,n[a]?.next_step??0);return{scheduled_minutes:i,next_steps:s}}applyLearningSteps(e,a,r){let{scheduled_minutes:n,next_steps:i}=this.getLearningInfo(this.current,a);if(n>0&&n<1440)e.learning_steps=i,e.scheduled_days=0,e.state=r,e.due=T(this.review_time,Math.round(n),!1);else if(e.state=v.Review,n>=1440)e.learning_steps=i,e.due=T(this.review_time,Math.round(n),!1),e.scheduled_days=Math.floor(n/1440);else{e.learning_steps=0;let s=this.algorithm.next_interval(e.stability,this.elapsed_days);e.scheduled_days=s,e.due=T(this.review_time,s,!0)}}newState(e){let a=this.next.get(e);if(a)return a;let r=this.next_ds(this.elapsed_days,e);this.applyLearningSteps(r,e,v.Learning);let n={card:r,log:this.buildLog(e)};return this.next.set(e,n),n}learningState(e){let a=this.next.get(e);if(a)return a;let r=this.next_ds(this.elapsed_days,e);this.applyLearningSteps(r,e,this.last.state);let n={card:r,log:this.buildLog(e)};return this.next.set(e,n),n}reviewState(e){let a=this.next.get(e);if(a)return a;let r=this.elapsed_days,n=this.algorithm.forgetting_curve(r,this.current.stability),i=this.next_ds(r,u.Again,n),s=this.next_ds(r,u.Hard,n),d=this.next_ds(r,u.Good,n),w=this.next_ds(r,u.Easy,n);this.next_interval(s,d,w,r),this.next_state(s,d,w),this.applyLearningSteps(i,u.Again,v.Relearning),i.lapses+=1;let m={card:i,log:this.buildLog(u.Again)},y={card:s,log:super.buildLog(u.Hard)},c={card:d,log:super.buildLog(u.Good)},M={card:w,log:super.buildLog(u.Easy)};return this.next.set(u.Again,m),this.next.set(u.Hard,y),this.next.set(u.Good,c),this.next.set(u.Easy,M),this.next.get(e)}next_ds(e,a,r){let n=this.algorithm.next_state({difficulty:this.current.difficulty,stability:this.current.stability},e,a,r),i=N.card(this.current);return i.difficulty=n.difficulty,i.stability=n.stability,i}next_interval(e,a,r,n){let i,s;i=this.algorithm.next_interval(e.stability,n),s=this.algorithm.next_interval(a.stability,n),i=Math.min(i,s),s=Math.max(s,i+1);let d=Math.max(this.algorithm.next_interval(r.stability,n),s+1);e.scheduled_days=i,e.due=T(this.review_time,i,!0),a.scheduled_days=s,a.due=T(this.review_time,s,!0),r.scheduled_days=d,r.due=T(this.review_time,d,!0)}next_state(e,a,r){e.state=v.Review,e.learning_steps=0,a.state=v.Review,a.learning_steps=0,r.state=v.Review,r.learning_steps=0}},ge=class extends he{newState(e){let a=this.next.get(e);if(a)return a;this.current.scheduled_days=0,this.current.elapsed_days=0;let r=0,n=this.next_ds(r,u.Again),i=this.next_ds(r,u.Hard),s=this.next_ds(r,u.Good),d=this.next_ds(r,u.Easy);return this.next_interval(n,i,s,d,r),this.next_state(n,i,s,d),this.update_next(n,i,s,d),this.next.get(e)}next_ds(e,a,r){let n=this.algorithm.next_state({difficulty:this.current.difficulty,stability:this.current.stability},e,a,r),i=N.card(this.current);return i.difficulty=n.difficulty,i.stability=n.stability,i}learningState(e){return this.reviewState(e)}reviewState(e){let a=this.next.get(e);if(a)return a;let r=this.elapsed_days,n=this.algorithm.forgetting_curve(r,this.current.stability),i=this.next_ds(r,u.Again,n),s=this.next_ds(r,u.Hard,n),d=this.next_ds(r,u.Good,n),w=this.next_ds(r,u.Easy,n);return this.next_interval(i,s,d,w,r),this.next_state(i,s,d,w),i.lapses+=1,this.update_next(i,s,d,w),this.next.get(e)}next_interval(e,a,r,n,i){let s,d,w,m;s=this.algorithm.next_interval(e.stability,i),d=this.algorithm.next_interval(a.stability,i),w=this.algorithm.next_interval(r.stability,i),m=this.algorithm.next_interval(n.stability,i),s=Math.min(s,d),d=Math.max(d,s+1),w=Math.max(w,d+1),m=Math.max(m,w+1),e.scheduled_days=s,e.due=T(this.review_time,s,!0),a.scheduled_days=d,a.due=T(this.review_time,d,!0),r.scheduled_days=w,r.due=T(this.review_time,w,!0),n.scheduled_days=m,n.due=T(this.review_time,m,!0)}next_state(e,a,r,n){e.state=v.Review,e.learning_steps=0,a.state=v.Review,a.learning_steps=0,r.state=v.Review,r.learning_steps=0,n.state=v.Review,n.learning_steps=0}update_next(e,a,r,n){let i={card:e,log:this.buildLog(u.Again)},s={card:a,log:super.buildLog(u.Hard)},d={card:r,log:super.buildLog(u.Good)},w={card:n,log:super.buildLog(u.Easy)};this.next.set(u.Again,i),this.next.set(u.Hard,s),this.next.set(u.Good,d),this.next.set(u.Easy,w)}},Ge=class{fsrs;constructor(e){this.fsrs=e}replay(e,a,r){return this.fsrs.next(e,a,r)}handleManualRating(e,a,r,n,i,s,d){if(typeof a>"u")throw new E("reschedule: state is required for manual rating");let w,m;if(a===v.New)w={rating:u.Manual,state:a,due:d??r,stability:e.stability,difficulty:e.difficulty,elapsed_days:n,last_elapsed_days:e.elapsed_days,scheduled_days:e.scheduled_days,learning_steps:e.learning_steps,review:r},m=V(r),m.last_review=r;else{if(typeof d>"u")throw new E("reschedule: due is required for manual rating");let y=Z(d,r,"days");w={rating:u.Manual,state:e.state,due:e.last_review||e.due,stability:e.stability,difficulty:e.difficulty,elapsed_days:n,last_elapsed_days:e.elapsed_days,scheduled_days:e.scheduled_days,learning_steps:e.learning_steps,review:r},m={...e,state:a,due:d,last_review:r,stability:i||e.stability,difficulty:s||e.difficulty,elapsed_days:n,scheduled_days:y,reps:e.reps+1}}return{card:m,log:w}}reschedule(e,a){let r=[],n=V(e.due);for(let i of a){let s;if(i.review=N.time(i.review),i.rating===u.Manual){let d=0;n.state!==v.New&&n.last_review&&(d=Z(i.review,n.last_review,"days")),s=this.handleManualRating(n,i.state,i.review,d,i.stability,i.difficulty,i.due?N.time(i.due):void 0)}else s=this.replay(n,i.review,i.rating);r.push(s),n=s.card}return r}calculateManualRecord(e,a,r,n){if(!r)return null;let{card:i,log:s}=r,d=N.card(e);return d.due.getTime()===i.due.getTime()?null:(d.scheduled_days=Z(i.due,d.due,"days"),this.handleManualRating(d,i.state,N.time(a),s.elapsed_days,n?i.stability:void 0,n?i.difficulty:void 0,i.due))}};function re(t,e){return typeof e=="function"?e(t):t}var Be=class extends He{strategyHandler=new Map;Scheduler;constructor(e){super(e);let{enable_short_term:a}=this.parameters;this.Scheduler=a?fe:ge}params_handler_proxy(){let e=this;return{set:function(a,r,n){return r==="request_retention"&&Number.isFinite(n)?e.intervalModifier=e.calculate_interval_modifier(Number(n)):r==="enable_short_term"?e.Scheduler=n===!0?fe:ge:r==="w"&&(n=je(n,a.relearning_steps.length,a.enable_short_term),n=J(Array.from(n),a.relearning_steps.length,a.enable_short_term),e.forgetting_curve=Fe.bind(this,n),e.intervalModifier=e.calculate_interval_modifier(Number(a.request_retention))),Reflect.set(a,r,n),!0}}}useStrategy(e,a){return this.strategyHandler.set(e,a),this}clearStrategy(e){return e?this.strategyHandler.delete(e):this.strategyHandler.clear(),this}getScheduler(e,a){let n=this.strategyHandler.get(be.SCHEDULER)||this.Scheduler;return new n(e,a,this,this.strategyHandler)}repeat(e,a,r){let i=this.getScheduler(e,a).preview();return re(i,r)}next(e,a,r,n){let i=this.getScheduler(e,a),s=N.rating(r);if(s===u.Manual)throw new E("Cannot review a manual rating");let d=i.review(s);return re(d,n)}get_retrievability(e,a,r=!0){let n=N.card(e);a=a?N.time(a):new Date;let i=n.state!==v.New?Math.max(Z(a,n.last_review,"days"),0):0,s=n.state!==v.New?this.forgetting_curve(i,+n.stability.toFixed(8)):0;return r?`${(s*100).toFixed(2)}%`:s}rollback(e,a,r){let n=N.card(e),i=N.review_log(a);if(i.rating===u.Manual)throw new E("Cannot rollback a manual rating");let s,d,w;switch(i.state){case v.New:s=i.due,d=void 0,w=0;break;case v.Learning:case v.Relearning:case v.Review:s=i.review,d=i.due,w=n.lapses-(i.rating===u.Again&&i.state===v.Review?1:0);break}let m={...n,due:s,stability:i.stability,difficulty:i.difficulty,elapsed_days:i.last_elapsed_days,scheduled_days:i.scheduled_days,reps:Math.max(0,n.reps-1),lapses:Math.max(0,w),learning_steps:i.learning_steps,state:i.state,last_review:d};return re(m,r)}forget(e,a,r=!1,n){let i=N.card(e);a=N.time(a);let s=i.state===v.New?0:Z(a,i.due,"days"),d={rating:u.Manual,state:i.state,due:i.due,stability:i.stability,difficulty:i.difficulty,elapsed_days:0,last_elapsed_days:i.elapsed_days,scheduled_days:s,learning_steps:i.learning_steps,review:a},m={card:{...i,due:a,stability:0,difficulty:0,elapsed_days:0,scheduled_days:0,reps:r?0:i.reps,lapses:r?0:i.lapses,learning_steps:0,state:v.New,last_review:i.last_review},log:d};return re(m,n)}reschedule(e,a=[],r={}){let{recordLogHandler:n,reviewsOrderBy:i,skipManual:s=!0,now:d=new Date,update_memory_state:w=!1}=r;i&&typeof i=="function"&&a.sort(i),s&&(a=a.filter(D=>D.rating!==u.Manual));let m=new Ge(this),y=m.reschedule(r.first_card||V(),a),c=y.length,M=N.card(e),_=m.calculateManualRecord(M,d,c?y[c-1]:void 0,w);return{collections:typeof n=="function"?y.map(n):y,reschedule_item:_?re(_,n):null}}},gt=t=>new Be(t||{});var bt=new Map;function xt(t){let e=Math.round(t*1e3)/1e3,a=bt.get(e);return a||(a=gt({request_retention:e,enable_fuzz:!0,enable_short_term:!0,learning_steps:["1m","10m"],relearning_steps:["10m"]}),bt.set(e,a)),a}function yt(t){return{due:new Date(t.due),stability:t.s,difficulty:t.d,elapsed_days:t.el,scheduled_days:t.sd,learning_steps:t.ls,reps:t.reps,lapses:t.lapses,state:t.st,last_review:t.last?new Date(t.last):void 0}}function ma(t,e){return{due:t.due.getTime(),s:t.stability,d:t.difficulty,el:t.elapsed_days,sd:t.scheduled_days,ls:t.learning_steps,reps:t.reps,lapses:t.lapses,st:t.state,last:t.last_review?t.last_review.getTime():void 0,seen:e}}var Oe=[u.Again,u.Hard,u.Good,u.Easy],vt={[u.Again]:"\u91CD\u6765",[u.Hard]:"\u56F0\u96BE",[u.Good]:"\u826F\u597D",[u.Easy]:"\u7B80\u5355"};function ye(t,e,a=Date.now(),r=.9){let n=t?yt(t):V(new Date(a)),i=xt(r).next(n,new Date(a),e).card;return ma(i,t?.seen??a)}function _t(t,e=Date.now(),a=.9){let r=t?yt(t):V(new Date(e)),n=xt(a).repeat(r,new Date(e)),i={};for(let s of Oe)i[s]=n[s].card.due.getTime()-e;return i}var ha=21,kt=t=>!!(t&&t.st===v.Review&&t.s>=ha);var Nt=(t,e=Date.now())=>!!(t&&t.due<=e);function ve(t){if(!Number.isFinite(t))return"";let e=Math.round(t/6e4);if(e<1)return"<1\u5206";if(e<60)return`${e}\u5206`;let a=Math.round(e/60);if(a<24)return`${a}\u5C0F\u65F6`;let r=Math.round(a/24);if(r<31)return`${r}\u5929`;let n=Math.round(r/30);return n<12?`${n}\u4E2A\u6708`:`${(r/365).toFixed(1)}\u5E74`}var p=Y(require("react"),1);var h=Y(require("react"),1);var fa={search:[h.default.createElement("circle",{key:"c",cx:"11",cy:"11",r:"6.5"}),h.default.createElement("path",{key:"l",d:"M16 16l4.5 4.5"})],star:[h.default.createElement("path",{key:"s",d:"M12 3.6l2.5 5.1 5.6.8-4 3.9.9 5.6-5-2.6-5 2.6.9-5.6-4-3.9 5.6-.8z"})],sparkle:[h.default.createElement("path",{key:"a",d:"M12 3l1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7z"}),h.default.createElement("path",{key:"b",d:"M18.5 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z"})],heart:[h.default.createElement("path",{key:"h",d:"M12 19.5s-7-4.3-7-9A4 4 0 0 1 12 7a4 4 0 0 1 7 3.5c0 4.7-7 9-7 9z"})],volume:[h.default.createElement("path",{key:"v",d:"M4 9.5h3.2L12 6v12L7.2 14.5H4z"}),h.default.createElement("path",{key:"w",d:"M15.5 8.5a5 5 0 0 1 0 7"}),h.default.createElement("path",{key:"x",d:"M18 6a8.5 8.5 0 0 1 0 12"})],close:[h.default.createElement("path",{key:"a",d:"M6 6l12 12"}),h.default.createElement("path",{key:"b",d:"M18 6L6 18"})],chevronLeft:[h.default.createElement("path",{key:"c",d:"M14.5 5.5L8 12l6.5 6.5"})],chevronRight:[h.default.createElement("path",{key:"c",d:"M9.5 5.5L16 12l-6.5 6.5"})],book:[h.default.createElement("path",{key:"a",d:"M4 5.5A2.5 2.5 0 0 1 6.5 3H19v15H6.5A2.5 2.5 0 0 0 4 20.5z"}),h.default.createElement("path",{key:"b",d:"M4 20.5A2.5 2.5 0 0 1 6.5 18H19v3H6.5"})],layers:[h.default.createElement("path",{key:"a",d:"M12 3l8 4.5-8 4.5-8-4.5z"}),h.default.createElement("path",{key:"b",d:"M4 12l8 4.5 8-4.5"}),h.default.createElement("path",{key:"c",d:"M4 16.5L12 21l8-4.5"})],refresh:[h.default.createElement("path",{key:"a",d:"M19 12a7 7 0 1 1-2.1-5"}),h.default.createElement("path",{key:"b",d:"M19.5 4v4.5H15"})],check:[h.default.createElement("path",{key:"c",d:"M5 12.5l4.2 4.2L19 7"})],info:[h.default.createElement("circle",{key:"a",cx:"12",cy:"12",r:"8.5"}),h.default.createElement("path",{key:"b",d:"M12 11v5.5"}),h.default.createElement("path",{key:"c",d:"M12 7.8v.4"})],play:[h.default.createElement("path",{key:"p",d:"M8 5.5l10 6.5-10 6.5z"})],pause:[h.default.createElement("path",{key:"a",d:"M9 6v12"}),h.default.createElement("path",{key:"b",d:"M15 6v12"})],globe:[h.default.createElement("circle",{key:"a",cx:"12",cy:"12",r:"8.5"}),h.default.createElement("path",{key:"b",d:"M3.5 12h17"}),h.default.createElement("path",{key:"c",d:"M12 3.5c2.5 2.4 3.8 5.3 3.8 8.5S14.5 18.1 12 20.5c-2.5-2.4-3.8-5.3-3.8-8.5S9.5 5.9 12 3.5z"})]};function z({name:t,size:e=18,filled:a=!1,className:r="",...n}){let i=fa[t];return i?h.default.createElement("svg",{viewBox:"0 0 24 24",width:e,height:e,fill:a?"currentColor":"none",stroke:"currentColor",strokeWidth:a?0:1.7,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",className:r,...n},i):null}function Q({id:t,word:e,full:a=!1,className:r="",alt:n}){let[i,s]=(0,h.useState)(!1),d=a?Qe(t):Xe(t);return i?h.default.createElement("div",{className:`wa-img-fallback ${r}`,role:"img","aria-label":n||e},h.default.createElement("span",null,(e||"?").slice(0,1).toUpperCase())):h.default.createElement("img",{className:r,src:d,alt:n||`${e} \u63D2\u753B`,loading:"lazy",decoding:"async",draggable:!1,onError:()=>s(!0)})}var P=null,ne=null,Ue=new Set;function Mt(){for(let t of Ue)t()}function X(){P&&(P.pause(),P=null),ne=null,Mt()}function ga(t,e){if(ne===t){X();return}X();let a=new Audio(e);P=a,ne=t,Mt(),a.onended=()=>{P===a&&X()},a.onerror=()=>{P===a&&X()},a.play().catch(()=>{P===a&&X()})}function St(){X()}function ba(){let[t,e]=(0,h.useState)(ne);return(0,h.useEffect)(()=>{let a=()=>e(ne);return Ue.add(a),()=>Ue.delete(a)},[]),t}function q({audioKey:t,url:e,label:a,size:r=16,className:n="",title:i}){let s=ba()===t;return h.default.createElement("button",{type:"button",className:`wa-audio-btn ${s?"is-playing":""} ${n}`,onClick:()=>ga(t,e),"aria-label":i||(s?"\u505C\u6B62\u64AD\u653E":`\u64AD\u653E${a||""}`),title:i||a||"\u64AD\u653E\u53D1\u97F3"},h.default.createElement(z,{name:s?"pause":"volume",size:r}),a?h.default.createElement("span",null,a):null)}function _e({onClose:t,children:e,labelledBy:a}){let r=(0,h.useRef)(null);return(0,h.useEffect)(()=>{let n=i=>{i.key==="Escape"&&(i.stopPropagation(),t())};return window.addEventListener("keydown",n),()=>window.removeEventListener("keydown",n)},[t]),h.default.createElement("div",{className:"wa-overlay",ref:r,role:"dialog","aria-modal":"true","aria-labelledby":a,onMouseDown:n=>{n.target===r.current&&t()}},e)}function R({label:t="\u52A0\u8F7D\u4E2D\u2026"}){return h.default.createElement("div",{className:"wa-loading",role:"status"},h.default.createElement("span",{className:"wa-spinner","aria-hidden":"true"}),h.default.createElement("span",null,t))}function ie({icon:t="sparkle",title:e,children:a}){return h.default.createElement("div",{className:"wa-empty"},h.default.createElement("span",{className:"wa-empty-icon"},h.default.createElement(z,{name:t,size:26})),h.default.createElement("h3",null,e),a?h.default.createElement("div",{className:"wa-empty-body"},a):null)}function ee({level:t}){return h.default.createElement("span",{className:`wa-cefr wa-cefr-${t}`},t)}function zt(t){let e=t.includes("\uFF5C")?"\uFF5C":t.includes("|")?"|":"";if(!e)return{en:t,zh:""};let a=t.indexOf(e);return{en:t.slice(0,a).trim(),zh:t.slice(a+1).trim()}}function ke(t,e){if(!e||e.length<2)return null;let a=t.toLowerCase(),r=e.toLowerCase(),n=a.indexOf(r);return n<0?null:[t.slice(0,n),t.slice(n,n+e.length),t.slice(n+e.length)]}function xa({text:t,word:e}){let a=ke(t,e);return a?p.default.createElement(p.default.Fragment,null,a[0],p.default.createElement("mark",null,a[1]),a[2]):p.default.createElement(p.default.Fragment,null,t)}function Ne({atlas:t,word:e,progress:a,onClose:r,onPrev:n,onNext:i,hasPrev:s,hasNext:d,onOpenWord:w,onToggleBookmark:m,onMarkLearned:y}){let[c,M]=(0,p.useState)(null),[_,D]=(0,p.useState)(""),K=a.settings.accent,f=a.cards[e.id],S=a.bookmarks.includes(e.id);(0,p.useEffect)(()=>{let g=!0;return M(null),D(""),ce(t,e.id).then(b=>{g&&M(b)}).catch(b=>{g&&D(b.message||"\u8BCD\u6761\u52A0\u8F7D\u5931\u8D25")}),()=>{g=!1,St()}},[t,e.id]),(0,p.useEffect)(()=>{let g=b=>{b.key==="ArrowLeft"&&s?(b.preventDefault(),n()):b.key==="ArrowRight"&&d&&(b.preventDefault(),i())};return window.addEventListener("keydown",g),()=>window.removeEventListener("keydown",g)},[s,d,n,i]);let L=t.topics.find(g=>g.slug===e.topic)?.zh||e.topicZh;return p.default.createElement(_e,{onClose:r,labelledBy:"wa-detail-title"},p.default.createElement("div",{className:"wa-detail",role:"document"},p.default.createElement("div",{className:"wa-detail-art"},p.default.createElement(Q,{id:e.id,word:e.word,full:!0,className:"wa-detail-img",alt:`${e.word} \u63D2\u753B`}),p.default.createElement("div",{className:"wa-detail-art-meta"},p.default.createElement("span",{className:"wa-specimen"},"\u2116 ",String(e.order+1).padStart(4,"0")," ",p.default.createElement("i",null)," Word Atlas"),f?p.default.createElement("span",{className:"wa-memory-inline"},Nt(f)?"\u5F85\u590D\u4E60":`\u4E0B\u6B21\u590D\u4E60 ${ve(f.due-Date.now())}\u540E`):null)),p.default.createElement("div",{className:"wa-detail-body"},p.default.createElement("button",{type:"button",className:"wa-icon-btn wa-detail-close",onClick:r,"aria-label":"\u5173\u95ED\u8BCD\u6761"},p.default.createElement(z,{name:"close",size:18})),p.default.createElement("header",{className:"wa-detail-head"},p.default.createElement("div",{className:"wa-tags"},p.default.createElement(ee,{level:e.cefr}),L?p.default.createElement("span",{className:"wa-chip"},L):null,f?p.default.createElement("span",{className:`wa-chip wa-chip-status ${f.st===2?"is-done":""}`},f.st===2?"\u590D\u4E60\u4E2D":"\u5B66\u4E60\u4E2D"):null),p.default.createElement("button",{type:"button",className:`wa-icon-btn ${S?"is-on":""}`,onClick:()=>m(e.id),"aria-pressed":S,"aria-label":S?"\u53D6\u6D88\u6536\u85CF":"\u6536\u85CF",title:S?"\u53D6\u6D88\u6536\u85CF":"\u6536\u85CF"},p.default.createElement(z,{name:"heart",size:19,filled:S}))),p.default.createElement("h2",{id:"wa-detail-title",className:"wa-headword",lang:"en"},e.word),!c&&!_?p.default.createElement(R,{label:"\u52A0\u8F7D\u8BCD\u6761\u2026"}):null,_?p.default.createElement("p",{className:"wa-error"},_):null,c?p.default.createElement(p.default.Fragment,null,p.default.createElement("div",{className:"wa-pron"},c.uk?p.default.createElement("div",{className:"wa-pron-row"},p.default.createElement("span",{className:"wa-pron-label"},"\u82F1"),p.default.createElement("span",{className:"wa-ipa"},c.uk),W(c,O.uk)?p.default.createElement(q,{audioKey:`uk:${e.id}`,url:U("uk",e.id),label:"\u53D1\u97F3"}):null):null,c.us?p.default.createElement("div",{className:"wa-pron-row"},p.default.createElement("span",{className:"wa-pron-label"},"\u7F8E"),p.default.createElement("span",{className:"wa-ipa"},c.us),W(c,O.us)?p.default.createElement(q,{audioKey:`us:${e.id}`,url:U("us",e.id),label:"\u53D1\u97F3"}):null):null,!c.uk&&!c.us?p.default.createElement("span",{className:"wa-ipa"},e.ipa):null,K==="us"&&c.us?p.default.createElement("span",{className:"wa-hint"},"\u9ED8\u8BA4\u7F8E\u97F3"):null),p.default.createElement("ol",{className:"wa-senses"},(c.senses||[]).map((g,b)=>p.default.createElement("li",{key:b},g.pos?p.default.createElement("span",{className:"wa-pos"},g.pos):null,p.default.createElement("span",{className:"wa-zh"},g.zh),g.en?p.default.createElement("span",{className:"wa-en",lang:"en"},g.en):null))),(c.ex||[]).length>0?p.default.createElement("section",{className:"wa-block"},p.default.createElement("h3",{className:"wa-eyebrow"},"\u4F8B\u53E5"),p.default.createElement("ul",{className:"wa-examples"},c.ex.map((g,b)=>{let I=b===0?"ex":"ex2",C=W(c,O[I]);return p.default.createElement("li",{key:b},c.ex.length>1?p.default.createElement("span",{className:`wa-ex-tag ${b?"is-ielts":""}`},b?"\u96C5\u601D\u8BED\u5883":"\u65E5\u5E38"):null,p.default.createElement("p",{className:"wa-ex-en",lang:"en"},p.default.createElement(xa,{text:g.en,word:e.word}),C?p.default.createElement(q,{audioKey:`${I}:${e.id}`,url:U(I,e.id),size:14,className:"wa-ex-speak",title:"\u64AD\u653E\u4F8B\u53E5\u6717\u8BFB"}):null),p.default.createElement("p",{className:"wa-ex-zh"},g.zh))}))):null,(c.col||[]).length>0?p.default.createElement("section",{className:"wa-block"},p.default.createElement("h3",{className:"wa-eyebrow"},"\u5E38\u7528\u642D\u914D"),p.default.createElement("ul",{className:"wa-collocations"},c.col.map(g=>{let b=zt(g);return p.default.createElement("li",{key:g},p.default.createElement("span",{lang:"en"},b.en),b.zh?p.default.createElement("small",null,b.zh):null)}))):null,(c.fam||[]).length>0||(c.syn||[]).length>0||(c.ant||[]).length>0?p.default.createElement("section",{className:"wa-block wa-relations"},(c.fam||[]).length>0?p.default.createElement("div",null,p.default.createElement("h3",{className:"wa-eyebrow"},"\u8BCD\u65CF"),p.default.createElement("p",null,c.fam.map(g=>{let b=g.replace(/\s*\(.*\)\s*$/,"").trim().toLowerCase(),I=t.words.find(C=>C.word.toLowerCase()===b);return I?p.default.createElement("button",{key:g,type:"button",className:"wa-link",onClick:()=>w(I.id)},g):p.default.createElement("span",{key:g},g)}))):null,(c.syn||[]).length>0?p.default.createElement("div",null,p.default.createElement("h3",{className:"wa-eyebrow"},"\u8FD1\u4E49"),p.default.createElement("p",null,c.syn.map(g=>p.default.createElement("span",{key:g},g)))):null,(c.ant||[]).length>0?p.default.createElement("div",null,p.default.createElement("h3",{className:"wa-eyebrow"},"\u53CD\u4E49"),p.default.createElement("p",null,c.ant.map(g=>p.default.createElement("span",{key:g},g)))):null):null,c.tip?p.default.createElement("aside",{className:"wa-tip"},p.default.createElement(z,{name:"sparkle",size:17}),p.default.createElement("p",null,c.tip)):null,c.note?p.default.createElement("p",{className:"wa-usage-note"},"\u7528\u6CD5\u63D0\u9192\uFF1A",c.note):null,p.default.createElement("div",{className:"wa-detail-footer"},p.default.createElement("div",{className:"wa-detail-memory"},f?p.default.createElement(p.default.Fragment,null,p.default.createElement("span",null,"\u8BB0\u5FC6\u7A33\u5B9A\u5EA6 ",f.s<1?"<1":Math.round(f.s)," \u5929"),p.default.createElement("span",null,"\u5DF2\u590D\u4E60 ",f.reps," \u6B21")):p.default.createElement("span",null,"\u8FD8\u6CA1\u5B66\u8FC7\u8FD9\u4E2A\u8BCD")),p.default.createElement("div",{className:"wa-detail-actions"},p.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:()=>y(e.id),disabled:!!f},p.default.createElement(z,{name:"check",size:15})," ",f?"\u5DF2\u5728\u590D\u4E60\u4E2D":"\u6807\u8BB0\u4E3A\u5DF2\u5B66"),p.default.createElement("div",{className:"wa-detail-nav"},p.default.createElement("button",{type:"button",className:"wa-icon-btn",onClick:n,disabled:!s,"aria-label":"\u4E0A\u4E00\u4E2A\u8BCD"},p.default.createElement(z,{name:"chevronLeft",size:18})),p.default.createElement("button",{type:"button",className:"wa-icon-btn",onClick:i,disabled:!d,"aria-label":"\u4E0B\u4E00\u4E2A\u8BCD"},p.default.createElement(z,{name:"chevronRight",size:18})))))):null)))}var k=Y(require("react"),1);var Me=96;function ya({atlas:t,word:e,progress:a,onOpen:r,onToggleBookmark:n}){let i=a.cards[e.id],s=a.bookmarks.includes(e.id),d=t.topics.find(w=>w.slug===e.topic)?.zh||e.topicZh;return k.default.createElement("article",{className:`wa-card ${i?"is-learned":""}`},k.default.createElement("div",{className:"wa-card-hit",role:"button",tabIndex:0,onClick:()=>r(e.id),onKeyDown:w=>{(w.key==="Enter"||w.key===" ")&&(w.preventDefault(),r(e.id))},"aria-label":`\u67E5\u770B ${e.word}`},k.default.createElement("div",{className:"wa-card-art"},k.default.createElement(Q,{id:e.id,word:e.word}),i?k.default.createElement("span",{className:"wa-card-dot",title:"\u5DF2\u5728\u590D\u4E60\u4E2D"}):null),k.default.createElement("div",{className:"wa-card-body"},k.default.createElement("div",{className:"wa-card-title"},k.default.createElement("h3",{lang:"en"},e.word),k.default.createElement(ee,{level:e.cefr})),k.default.createElement("p",{className:"wa-card-ipa"},e.ipa),k.default.createElement("p",{className:"wa-card-zh"},e.zh),k.default.createElement("p",{className:"wa-card-topic"},d))),k.default.createElement("button",{type:"button",className:`wa-card-heart ${s?"is-on":""}`,onClick:w=>{w.stopPropagation(),n(e.id)},"aria-pressed":s,"aria-label":s?"\u53D6\u6D88\u6536\u85CF":"\u6536\u85CF",title:s?"\u53D6\u6D88\u6536\u85CF":"\u6536\u85CF"},k.default.createElement(z,{name:"heart",size:16,filled:s})))}function se({atlas:t,words:e,progress:a,onOpen:r,onToggleBookmark:n}){let[i,s]=(0,k.useState)(Me),d=(0,k.useRef)(null);(0,k.useEffect)(()=>{s(Me)},[e]),(0,k.useEffect)(()=>{let m=d.current;if(!m||i>=e.length)return;let y=new IntersectionObserver(c=>{c.some(M=>M.isIntersecting)&&s(M=>Math.min(M+Me,e.length))},{rootMargin:"600px 0px"});return y.observe(m),()=>y.disconnect()},[i,e.length]);let w=e.slice(0,i);return k.default.createElement("div",{className:"wa-grid-wrap"},k.default.createElement("p",{className:"wa-grid-count"},"\u5171 ",e.length.toLocaleString("en-US")," \u4E2A\u8BCD",i<e.length?` \xB7 \u5DF2\u663E\u793A ${i}`:""),k.default.createElement("div",{className:"wa-grid"},w.map(m=>k.default.createElement(ya,{key:m.id,atlas:t,word:m,progress:a,onOpen:r,onToggleBookmark:n}))),i<e.length?k.default.createElement("div",{ref:d,className:"wa-more"},k.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:()=>s(m=>m+Me)},"\u52A0\u8F7D\u66F4\u591A\uFF08\u5269\u4F59 ",(e.length-i).toLocaleString("en-US"),"\uFF09")):null)}var o=Y(require("react"),1);var At=100;function va(t){let e=[...t];for(let a=e.length-1;a>0;a-=1){let r=Math.floor(Math.random()*(a+1));[e[a],e[r]]=[e[r],e[a]]}return e}function _a(t,e){let a=Date.now(),r=e.cards,n=[];for(let m of t.words){let y=r[m.id];y&&y.due<=a&&n.push({id:m.id,word:m,card:y,due:y.due})}n.sort((m,y)=>m.due-y.due);let i=n.slice(0,At),s=new Set(i.map(m=>m.id)),w=va(t.words.filter(m=>!r[m.id]&&!s.has(m.id))).slice(0,Math.max(0,e.settings.dailyNew)).map(m=>({id:m.id,word:m,card:void 0}));return[...i,...w]}function Et(t,e){let a=Date.now(),r=0,n=0,i=0;for(let d of t.words){let w=e.cards[d.id];w&&(n+=1,w.due<=a&&(r+=1),kt(w)&&(i+=1))}let s=t.count-n;return{due:r,learned:n,mastered:i,fresh:s}}function ka({atlas:t,progress:e,onStart:a}){let r=(0,o.useMemo)(()=>Et(t,e),[t,e]),n=Math.min(e.settings.dailyNew,r.fresh),i=Math.min(r.due,At)+n,s=(d,w)=>{j(m=>({...m,settings:{...m.settings,[d]:w}}))};return o.default.createElement("div",{className:"wa-review-intro"},o.default.createElement("div",{className:"wa-review-hero"},o.default.createElement("span",{className:"wa-review-orbit","aria-hidden":"true"},o.default.createElement(z,{name:"sparkle",size:30})),o.default.createElement("h2",null,"\u4ECA\u65E5\u590D\u4E60"),o.default.createElement("p",null,"FSRS \u4F1A\u6309\u8BB0\u5FC6\u7A33\u5B9A\u5EA6\u5B89\u6392\u590D\u4E60\u3002\u5230\u671F\u5C31\u590D\u4E60\uFF0C\u8BB0\u5F97\u7262\u7684\u8BCD\u4F1A\u8D8A\u9694\u8D8A\u4E45\u3002")),o.default.createElement("div",{className:"wa-review-stats"},o.default.createElement("div",{className:"wa-stat"},o.default.createElement("strong",null,r.due),o.default.createElement("span",null,"\u5230\u671F\u590D\u4E60")),o.default.createElement("div",{className:"wa-stat"},o.default.createElement("strong",null,n),o.default.createElement("span",null,"\u4ECA\u65E5\u65B0\u8BCD")),o.default.createElement("div",{className:"wa-stat"},o.default.createElement("strong",null,r.learned.toLocaleString("en-US")),o.default.createElement("span",null,"\u5DF2\u5B66\u8BCD")),o.default.createElement("div",{className:"wa-stat"},o.default.createElement("strong",null,r.mastered.toLocaleString("en-US")),o.default.createElement("span",null,"\u5DF2\u638C\u63E1"))),o.default.createElement("div",{className:"wa-review-settings"},o.default.createElement("label",null,"\u6BCF\u65E5\u65B0\u8BCD",o.default.createElement("select",{value:e.settings.dailyNew,onChange:d=>s("dailyNew",Number(d.target.value))},[5,10,15,20,30,50].map(d=>o.default.createElement("option",{key:d,value:d},d)))),o.default.createElement("label",null,"\u76EE\u6807\u8BB0\u5FC6\u7387",o.default.createElement("select",{value:e.settings.retention,onChange:d=>s("retention",Number(d.target.value))},[.8,.85,.9,.95].map(d=>o.default.createElement("option",{key:d,value:d},Math.round(d*100),"%"))))),o.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary wa-start-btn",onClick:a,disabled:i===0},i>0?`\u5F00\u59CB\u590D\u4E60\uFF08${i} \u4E2A\u8BCD\uFF09`:"\u4ECA\u5929\u6CA1\u6709\u8981\u590D\u4E60\u7684\u8BCD"),i===0?o.default.createElement("p",{className:"wa-review-done-hint"},o.default.createElement(z,{name:"check",size:15})," \u90FD\u590D\u4E60\u5B8C\u4E86\uFF0C\u53BB\u56FE\u9274\u91CC\u8BA4\u8BC6\u51E0\u4E2A\u65B0\u8BCD\u5427\u3002"):null,o.default.createElement("p",{className:"wa-review-tip"},"\u590D\u4E60\u8FDB\u5EA6\u4F1A\u81EA\u52A8\u4FDD\u5B58\u5230\u672C\u673A `$DSH_HOME/word-atlas-dsh/progress.json`\u3002"))}function Na({session:t,atlas:e,progress:a,onAgain:r,onExit:n}){let i=(0,o.useMemo)(()=>Et(e,a),[e,a]),{reviewed:s,correct:d,newWords:w}=t.stats,m=s?Math.round(d/s*100):0;return o.default.createElement("div",{className:"wa-review-summary"},o.default.createElement("span",{className:"wa-review-orbit is-done","aria-hidden":"true"},o.default.createElement(z,{name:"check",size:28})),o.default.createElement("h2",null,"\u672C\u7EC4\u5B8C\u6210"),o.default.createElement("div",{className:"wa-review-stats"},o.default.createElement("div",{className:"wa-stat"},o.default.createElement("strong",null,s),o.default.createElement("span",null,"\u590D\u4E60\u8BCD\u6570")),o.default.createElement("div",{className:"wa-stat"},o.default.createElement("strong",null,w),o.default.createElement("span",null,"\u65B0\u5B66\u8BCD")),o.default.createElement("div",{className:"wa-stat"},o.default.createElement("strong",null,m,"%"),o.default.createElement("span",null,"\u9996\u6B21\u7B54\u5BF9\u7387")),o.default.createElement("div",{className:"wa-stat"},o.default.createElement("strong",null,i.due),o.default.createElement("span",null,"\u5269\u4F59\u5230\u671F"))),o.default.createElement("div",{className:"wa-review-summary-actions"},o.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary",onClick:r},"\u518D\u7EC3\u4E00\u7EC4"),o.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:n},"\u8FD4\u56DE\u56FE\u9274")))}function Ma({atlas:t,progress:e,item:a,entry:r,stats:n,onReveal:i,onGrade:s}){let d=Date.now(),w=_t(a.card,d,e.settings.retention),m=!a.card,y=c=>c>=u.Good;return o.default.createElement("div",{className:"wa-review-card"},o.default.createElement("div",{className:"wa-review-art"},o.default.createElement(Q,{id:a.word.id,word:a.word.word,full:!0,alt:`${a.word.word} \u63D2\u753B`})),o.default.createElement("div",{className:"wa-review-body"},o.default.createElement("div",{className:"wa-review-tags"},o.default.createElement(ee,{level:a.word.cefr}),m?o.default.createElement("span",{className:"wa-chip wa-chip-new"},"\u65B0\u8BCD"):o.default.createElement("span",{className:"wa-chip"},"\u5230\u671F\u590D\u4E60")),o.default.createElement("h2",{className:"wa-review-word",lang:"en"},a.word.word),o.default.createElement("div",{className:"wa-pron-row"},o.default.createElement("span",{className:"wa-ipa"},r?.uk||a.word.ipa),W(a.word,O.uk)?o.default.createElement(q,{audioKey:`uk:${a.word.id}`,url:U("uk",a.word.id),label:"\u82F1\u97F3"}):null,W(a.word,O.us)&&r?.us?o.default.createElement(q,{audioKey:`us:${a.word.id}`,url:U("us",a.word.id),label:"\u7F8E\u97F3"}):null),n.revealed?o.default.createElement("div",{className:"wa-answer"},o.default.createElement("ol",{className:"wa-senses"},(r?.senses||[]).map((c,M)=>o.default.createElement("li",{key:M},c.pos?o.default.createElement("span",{className:"wa-pos"},c.pos):null,o.default.createElement("span",{className:"wa-zh"},c.zh),c.en?o.default.createElement("span",{className:"wa-en",lang:"en"},c.en):null))),r?.ex?.[0]?o.default.createElement("p",{className:"wa-review-example",lang:"en"},(()=>{let c=ke(r.ex[0].en,a.word.word);return c?o.default.createElement(o.default.Fragment,null,c[0],o.default.createElement("mark",null,c[1]),c[2]):r.ex[0].en})()):null,r?.ex?.[0]?.zh?o.default.createElement("p",{className:"wa-review-example-zh"},r.ex[0].zh):null,r?.tip?o.default.createElement("p",{className:"wa-review-tip-line"},r.tip):null,o.default.createElement("div",{className:"wa-grades"},Oe.map(c=>o.default.createElement("button",{type:"button",key:c,className:`wa-grade wa-grade-${c}`,onClick:()=>s(c)},o.default.createElement("span",{className:"wa-grade-label"},vt[c]),o.default.createElement("span",{className:"wa-grade-interval"},ve(w[c]))))),o.default.createElement("p",{className:"wa-grade-hint"},"\u53EA\u6709\u9996\u6B21\u4F5C\u7B54\u8BA1\u5165\u6B63\u786E\u7387\uFF1B\u952E\u76D8 1\u20134 \u4E5F\u53EF\u4EE5\u8BC4\u5206\u3002")):o.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary wa-reveal-btn",onClick:i},"\u663E\u793A\u7B54\u6848")))}function Se({atlas:t,progress:e,onExit:a}){let[r,n]=(0,o.useState)(null),[i,s]=(0,o.useState)(null),[d,w]=(0,o.useState)(!1),m=r&&!r.finished?r.queue[r.index]:null;(0,o.useEffect)(()=>{if(!m){s(null);return}let f=!0;return s(null),w(!1),ce(t,m.id).then(S=>{f&&s(S)}).catch(()=>{f&&w(!0)}),()=>{f=!1}},[t,m?.id]);let y=(0,o.useCallback)(()=>{let f=_a(t,e);n({queue:f,index:0,revealed:!1,finished:!1,stats:{reviewed:0,correct:0,newWords:0},startedAt:Date.now()})},[t,e]),c=(0,o.useCallback)(()=>{n(f=>f&&!f.revealed?{...f,revealed:!0}:f)},[]),M=(0,o.useCallback)(f=>{let S=r?.queue[r.index];if(!S)return;let L=ye(S.card,f,Date.now(),e.settings.retention),g=f>=u.Good;j(b=>({...b,cards:{...b.cards,[S.id]:L},days:we(b.days,{newWords:S.card?0:1,reviewed:1,correct:g?1:0})})),n(b=>{if(!b||b.finished)return b;let I={reviewed:b.stats.reviewed+1,correct:b.stats.correct+(g?1:0),newWords:b.stats.newWords+(S.card?0:1)},C=b.index+1;return C>=b.queue.length?{...b,index:C,revealed:!1,finished:!0,stats:I}:{...b,index:C,revealed:!1,stats:I}})},[r,e.settings.retention]);if((0,o.useEffect)(()=>{if(!m)return;let f=S=>{if(S.target instanceof HTMLElement&&/^(INPUT|SELECT|TEXTAREA)$/.test(S.target.tagName))return;if(!r.revealed){(S.code==="Space"||S.key==="Enter")&&(S.preventDefault(),c());return}let L={1:u.Again,2:u.Hard,3:u.Good,4:u.Easy};L[S.key]&&(S.preventDefault(),M(L[S.key]))};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[m,r?.revealed,c,M]),!t)return null;if(!r)return o.default.createElement(ka,{atlas:t,progress:e,onStart:y});if(r.finished)return o.default.createElement(Na,{session:r,atlas:t,progress:e,onAgain:()=>n(null),onExit:a});if(!m)return o.default.createElement(ie,{title:"\u8FD9\u4E00\u7EC4\u590D\u4E60\u5B8C\u6210\u4E86",icon:"check"});let _=r.index,D=r.queue.length,K=m;return o.default.createElement("div",{className:"wa-review-shell"},o.default.createElement("div",{className:"wa-review-top"},o.default.createElement("div",{className:"wa-review-progress"},o.default.createElement("div",{className:"wa-review-bar","aria-hidden":"true"},o.default.createElement("span",{style:{width:`${Math.round(_/D*100)}%`}})),o.default.createElement("span",{className:"wa-review-counter"},_+1," / ",D)),o.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:()=>n(null)},o.default.createElement(z,{name:"close",size:15})," \u7ED3\u675F")),d?o.default.createElement("p",{className:"wa-error"},"\u8BCD\u6761\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u8BCD\u5149\u63D2\u4EF6\u8DEF\u7531\u662F\u5426\u6B63\u5E38\u3002"):null,!i&&!d?o.default.createElement("div",{className:"wa-review-loading"},o.default.createElement(R,{label:"\u52A0\u8F7D\u8BCD\u6761\u2026"})):null,o.default.createElement(Ma,{atlas:t,progress:e,item:K,entry:i,stats:{revealed:r.revealed},onReveal:c,onGrade:M}))}var Sa=u.Good;function za({progress:t,onClose:e}){let a=r=>j(n=>({...n,settings:{...n.settings,accent:r}}));return l.default.createElement(_e,{onClose:e,labelledBy:"wa-about-title"},l.default.createElement("div",{className:"wa-about"},l.default.createElement("button",{type:"button",className:"wa-icon-btn wa-about-close",onClick:e,"aria-label":"\u5173\u95ED"},l.default.createElement(z,{name:"close",size:18})),l.default.createElement("h2",{id:"wa-about-title"},"\u8BCD\u5149 \xB7 Word Atlas"),l.default.createElement("p",null,"\u628A\u5F00\u6E90\u9879\u76EE ",l.default.createElement("strong",null,"\u8BCD\u5149 \xB7 Word Atlas")," \u505A\u6210 DeepSeek Harness \u63D2\u4EF6\uFF1A 7,298 \u4E2A\u96C5\u601D\u8BCD\u6761\u300119 \u4E2A\u8BDD\u9898\uFF0C\u6BCF\u8BCD\u4E00\u5E45\u63D2\u753B\u3001\u82F1\u7F8E\u53D1\u97F3\u4E0E\u4F8B\u53E5\u6717\u8BFB\uFF0C\u914D FSRS \u95F4\u9694\u590D\u4E60\u3002"),l.default.createElement("div",{className:"wa-about-section"},l.default.createElement("h3",{className:"wa-eyebrow"},"\u53D1\u97F3\u504F\u597D"),l.default.createElement("div",{className:"wa-segmented"},l.default.createElement("button",{type:"button",className:t.settings.accent==="uk"?"is-on":"",onClick:()=>a("uk")},"\u82F1\u97F3"),l.default.createElement("button",{type:"button",className:t.settings.accent==="us"?"is-on":"",onClick:()=>a("us")},"\u7F8E\u97F3")),l.default.createElement("p",{className:"wa-about-note"},"\u8BCD\u6761\u8BE6\u60C5\u91CC\u4E24\u4E2A\u53D1\u97F3\u59CB\u7EC8\u90FD\u53EF\u4EE5\u64AD\u653E\uFF0C\u8FD9\u91CC\u53EA\u662F\u504F\u597D\u6807\u8BB0\u3002")),l.default.createElement("div",{className:"wa-about-section"},l.default.createElement("h3",{className:"wa-eyebrow"},"\u6570\u636E\u4E0E\u6388\u6743"),l.default.createElement("p",{className:"wa-about-note"},"\u8BCD\u5E93\u6587\u672C\u3001\u63D2\u753B\u4E0E\u5F55\u97F3\u6765\u81EA"," ",l.default.createElement("a",{href:"https://github.com/designfuchen/word-atlas",target:"_blank",rel:"noreferrer"},"designfuchen/word-atlas"),"\uFF0C\u7531 Word Atlas contributors\uFF08\u8BCD\u5149\uFF09\u521B\u4F5C\uFF0C\u4EE5"," ",l.default.createElement("a",{href:"https://creativecommons.org/licenses/by/4.0/",target:"_blank",rel:"noreferrer"},"CC BY 4.0")," ","\u6388\u6743\uFF1B\u63D2\u4EF6\u4EE3\u7801 MIT\u3002\u5185\u5BB9\u7531\u751F\u6210\u5F0F AI \u8F85\u52A9\u5236\u4F5C\uFF0C\u672A\u9010\u6761\u4EBA\u5DE5\u5BA1\u6821\u3002")),l.default.createElement("div",{className:"wa-about-section"},l.default.createElement("h3",{className:"wa-eyebrow"},"\u590D\u4E60\u8FDB\u5EA6"),l.default.createElement("p",{className:"wa-about-note"},"\u4FDD\u5B58\u5728\u672C\u673A ",l.default.createElement("code",null,"$DSH_HOME/word-atlas-dsh/progress.json"),"\uFF0C\u540C\u65F6\u955C\u50CF\u5230\u6D4F\u89C8\u5668 localStorage\u3002 \u590D\u4E60\u8C03\u5EA6\u4F7F\u7528 ts-fsrs \u7684 FSRS \u7B97\u6CD5\u3002"))))}function Aa(){return l.default.createElement("svg",{viewBox:"0 0 64 64",width:"34",height:"34","aria-hidden":"true"},l.default.createElement("defs",null,l.default.createElement("linearGradient",{id:"wa-brand-gold",x1:"0",y1:"0",x2:"1",y2:"1"},l.default.createElement("stop",{offset:"0",stopColor:"#FFE9A8"}),l.default.createElement("stop",{offset:"0.55",stopColor:"#F5C052"}),l.default.createElement("stop",{offset:"1",stopColor:"#D98E2B"}))),l.default.createElement("rect",{width:"64",height:"64",rx:"15",fill:"var(--dsw-alias-bg-layer-2)"}),l.default.createElement("circle",{cx:"14",cy:"18",r:"1.4",fill:"var(--dsw-alias-label-secondary)",opacity:"0.6"}),l.default.createElement("circle",{cx:"50",cy:"16",r:"1.7",fill:"var(--dsw-alias-label-secondary)",opacity:"0.6"}),l.default.createElement("circle",{cx:"50",cy:"48",r:"1.3",fill:"var(--dsw-alias-label-secondary)",opacity:"0.5"}),l.default.createElement("circle",{cx:"14",cy:"46",r:"1.5",fill:"var(--dsw-alias-label-secondary)",opacity:"0.5"}),l.default.createElement("path",{d:"M32 15 L36.6 27.4 L49 32 L36.6 36.6 L32 49 L27.4 36.6 L15 32 L27.4 27.4 Z",fill:"url(#wa-brand-gold)"}),l.default.createElement("circle",{cx:"32",cy:"32",r:"3.4",fill:"#FFF6D8"}))}function We(){let[t,e]=(0,l.useState)(null),[a,r]=(0,l.useState)(""),[n,i]=(0,l.useState)("atlas"),[s,d]=(0,l.useState)(""),[w,m]=(0,l.useState)("all"),[y,c]=(0,l.useState)("all"),[M,_]=(0,l.useState)(null),[D,K]=(0,l.useState)(!1),f=dt();(0,l.useEffect)(()=>{pt();let x=!0;return Ve().then(A=>{x&&e(A)}).catch(A=>{x&&r(A.message||"\u8BCD\u5E93\u52A0\u8F7D\u5931\u8D25")}),()=>{x=!1}},[]);let S=(0,l.useMemo)(()=>{if(!t)return[];let x=s.trim().toLowerCase();return t.words.filter(A=>w!=="all"&&A.cefr!==w||y!=="all"&&A.topic!==y?!1:x?A.word.toLowerCase().includes(x)||A.zh.toLowerCase().includes(x)||A.ipa.toLowerCase().includes(x):!0)},[t,s,w,y]),L=(0,l.useMemo)(()=>t?f.bookmarks.map(x=>t.byId.get(x)).filter(Boolean):[],[t,f.bookmarks]),g=(0,l.useMemo)(()=>{if(!t)return 0;let x=Date.now(),A=0;for(let It of t.words){let Ke=f.cards[It.id];Ke&&Ke.due<=x&&(A+=1)}return A},[t,f.cards]),b=(0,l.useMemo)(()=>Object.keys(f.cards).length,[f.cards]),I=(0,l.useMemo)(()=>ct(f.days),[f.days]),C=n==="bookmarks"?L:S,oe=M&&t?t.byId.get(M):null,B=oe?C.findIndex(x=>x.id===oe.id):-1,ze=x=>_(x),Ae=x=>j(A=>ut(A,x)),Ct=x=>j(A=>A.cards[x]?A:{...A,cards:{...A.cards,[x]:ye(void 0,Sa)},days:we(A.days,{newWords:1})}),Dt=()=>j(x=>({...x,settings:{...x.settings,accent:x.settings.accent==="uk"?"us":"uk"}})),qe=()=>{i("atlas"),_(null)};return l.default.createElement("div",{className:"wa-root"},l.default.createElement("header",{className:"wa-header"},l.default.createElement("div",{className:"wa-brand"},l.default.createElement(Aa,null),l.default.createElement("div",{className:"wa-brand-text"},l.default.createElement("h1",null,"\u8BCD\u5149 ",l.default.createElement("span",null,"Word Atlas")),l.default.createElement("p",null,"7,298 \u96C5\u601D\u8BCD \xB7 \u4E00\u8BCD\u4E00\u753B \xB7 FSRS \u95F4\u9694\u590D\u4E60"))),l.default.createElement("div",{className:"wa-toolbar"},l.default.createElement("div",{className:"wa-search"},l.default.createElement(z,{name:"search",size:16}),l.default.createElement("input",{value:s,onChange:x=>{d(x.target.value),n!=="atlas"&&i("atlas")},placeholder:"\u641C\u7D22\u5355\u8BCD / \u4E2D\u6587\u91CA\u4E49","aria-label":"\u641C\u7D22\u5355\u8BCD\u6216\u91CA\u4E49",spellCheck:!1}),s?l.default.createElement("button",{type:"button",className:"wa-search-clear",onClick:()=>d(""),"aria-label":"\u6E05\u7A7A\u641C\u7D22"},l.default.createElement(z,{name:"close",size:14})):null),l.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost wa-accent-btn",onClick:Dt,title:"\u5207\u6362\u53D1\u97F3\u504F\u597D"},l.default.createElement(z,{name:"globe",size:15})," ",f.settings.accent==="uk"?"\u82F1\u97F3":"\u7F8E\u97F3"),l.default.createElement("button",{type:"button",className:"wa-icon-btn",onClick:()=>K(!0),"aria-label":"\u5173\u4E8E\u8BCD\u5149"},l.default.createElement(z,{name:"info",size:18})))),l.default.createElement("nav",{className:"wa-tabs",role:"tablist","aria-label":"\u8BCD\u5149\u89C6\u56FE"},l.default.createElement("button",{type:"button",role:"tab","aria-selected":n==="atlas",className:n==="atlas"?"is-on":"",onClick:()=>i("atlas")},l.default.createElement(z,{name:"book",size:16})," \u56FE\u9274",t?l.default.createElement("span",{className:"wa-tab-count"},t.count.toLocaleString("en-US")):null),l.default.createElement("button",{type:"button",role:"tab","aria-selected":n==="review",className:n==="review"?"is-on":"",onClick:()=>i("review")},l.default.createElement(z,{name:"refresh",size:16})," \u590D\u4E60",g>0?l.default.createElement("span",{className:"wa-tab-badge"},g>999?"999+":g):null),l.default.createElement("button",{type:"button",role:"tab","aria-selected":n==="bookmarks",className:n==="bookmarks"?"is-on":"",onClick:()=>i("bookmarks")},l.default.createElement(z,{name:"heart",size:16})," \u751F\u8BCD\u672C",L.length>0?l.default.createElement("span",{className:"wa-tab-count"},L.length):null),l.default.createElement("div",{className:"wa-tabs-meta"},l.default.createElement("span",null,"\u5DF2\u5B66 ",b.toLocaleString("en-US")),l.default.createElement("i",null),l.default.createElement("span",null,"\u8FDE\u7EED ",I," \u5929"))),l.default.createElement("main",{className:"wa-main"},a?l.default.createElement(ie,{icon:"info",title:"\u8BCD\u5E93\u8FD8\u6CA1\u51C6\u5907\u597D"},l.default.createElement("p",null,a),l.default.createElement("p",{className:"wa-about-note"},"\u8BF7\u786E\u8BA4 word-atlas \u63D2\u4EF6\u5DF2\u542F\u7528\u3001Host \u8DEF\u7531 `/word-atlas/health` \u53EF\u8BBF\u95EE\uFF1B\u5982\u679C\u63D2\u4EF6\u521A\u5B89\u88C5\uFF0C\u5237\u65B0\u9875\u9762\u518D\u8BD5\u3002")):t?n==="review"?l.default.createElement(Se,{atlas:t,progress:f,onExit:qe}):n==="bookmarks"?L.length===0?l.default.createElement(ie,{icon:"heart",title:"\u751F\u8BCD\u672C\u8FD8\u662F\u7A7A\u7684"},l.default.createElement("p",null,"\u5728\u8BCD\u6761\u5361\u7247\u6216\u8BE6\u60C5\u91CC\u70B9 \u2665\uFF0C\u628A\u60F3\u53CD\u590D\u770B\u7684\u8BCD\u6536\u8FDB\u6765\u3002"),l.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary",onClick:qe},"\u53BB\u56FE\u9274")):l.default.createElement(se,{atlas:t,words:L,progress:f,onOpen:ze,onToggleBookmark:Ae}):l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{className:"wa-filters"},l.default.createElement("div",{className:"wa-chips",role:"group","aria-label":"CEFR \u7EA7\u522B"},l.default.createElement("button",{type:"button",className:w==="all"?"is-on":"",onClick:()=>m("all")},"\u5168\u90E8\u7EA7\u522B"),t.cefr.map(x=>l.default.createElement("button",{type:"button",key:x,className:w===x?"is-on":"",onClick:()=>m(x)},x))),l.default.createElement("div",{className:"wa-topics",role:"group","aria-label":"\u8BDD\u9898"},l.default.createElement("button",{type:"button",className:y==="all"?"is-on":"",onClick:()=>c("all")},"\u5168\u90E8\u8BDD\u9898"),t.topics.map(x=>l.default.createElement("button",{type:"button",key:x.slug,className:y===x.slug?"is-on":"",onClick:()=>c(x.slug)},x.zh)))),l.default.createElement(se,{atlas:t,words:S,progress:f,onOpen:ze,onToggleBookmark:Ae}),l.default.createElement("footer",{className:"wa-footer"},"\u8BCD\u5E93 \xB7 \u63D2\u753B \xB7 \u53D1\u97F3\u6765\u81EA"," ",l.default.createElement("a",{href:"https://github.com/designfuchen/word-atlas",target:"_blank",rel:"noreferrer"},"\u8BCD\u5149 \xB7 Word Atlas")," ","\xB7 CC BY 4.0")):l.default.createElement("div",{className:"wa-boot"},l.default.createElement(R,{label:"\u6B63\u5728\u52A0\u8F7D\u8BCD\u5149\u8BCD\u5E93\u2026"}))),oe&&t?l.default.createElement(Ne,{atlas:t,word:oe,progress:f,onClose:()=>_(null),onOpenWord:ze,onPrev:()=>{B>0&&_(C[B-1].id)},onNext:()=>{B>=0&&B<C.length-1&&_(C[B+1].id)},hasPrev:B>0,hasNext:B>=0&&B<C.length-1,onToggleBookmark:Ae,onMarkLearned:Ct}):null,D?l.default.createElement(za,{progress:f,onClose:()=>K(!1)}):null)}var Ea="word-atlas-dsh",Lt="word-atlas";function La({size:t=18,active:e=!1}){return Pe.default.createElement("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:e?"currentColor":"none",stroke:"currentColor",strokeWidth:1.6,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"},Pe.default.createElement("path",{d:"M12 3.2l2.25 4.8 5.2.72-3.78 3.65.93 5.19L12 15.1l-4.6 2.46.93-5.19-3.78-3.65 5.2-.72z"}))}var Ca=["slots"],Da={App:We,DetailModal:Ne,ReviewView:Se,WordGrid:se};function Ia(t){if(typeof document<"u"){let e=document.createElement("style");e.setAttribute("data-plugin",Ea),e.textContent=Ze,document.head.appendChild(e),t.effect(()=>()=>e.remove())}t.effect(()=>t.slots.inject("main",()=>t.slots.register({name:"main",key:Lt},We))),t.effect(()=>t.slots.inject("sidebar.panellist",()=>t.slots.register({name:"sidebar.panellist",id:Lt,order:22,label:()=>"\u8BCD\u5149 \xB7 Word Atlas"},La)))}

    })(module, exports, require);
    return module.exports;
  },
});
