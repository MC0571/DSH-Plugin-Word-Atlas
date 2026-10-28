/* 词光 · Word Atlas — generated client bundle (build from src/client). */
window.__ModuleLoader__.load({
  id: "word-atlas-dsh",
  factory: (require) => {
    const module = { exports: {} };
    const exports = module.exports;
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    (function (module, exports, require) {
var sa=Object.create;var me=Object.defineProperty;var ia=Object.getOwnPropertyDescriptor;var oa=Object.getOwnPropertyNames;var la=Object.getPrototypeOf,da=Object.prototype.hasOwnProperty;var pa=(t,e)=>{for(var a in e)me(t,a,{get:e[a],enumerable:!0})},lt=(t,e,a,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of oa(e))!da.call(t,n)&&n!==a&&me(t,n,{get:()=>e[n],enumerable:!(r=ia(e,n))||r.enumerable});return t};var J=(t,e,a)=>(a=t!=null?sa(la(t)):{},lt(e||!t||!t.__esModule?me(a,"default",{value:t,enumerable:!0}):a,t)),ca=t=>lt(me({},"__esModule",{value:!0}),t);var cr={};pa(cr,{__test:()=>dr,apply:()=>pr,inject:()=>lr});module.exports=ca(cr);var rt=J(require("react"),1);var dt=`/* \u8BCD\u5149 \xB7 Word Atlas \u2014 plugin page styles.
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
  background: var(--wa-surface-2);
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
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
    grid-template-rows: auto minmax(0, 1fr);
    height: 92vh;
  }

  .wa-detail-body {
    padding: 18px 18px 0;
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
`;var m=J(require("react"),1);var le="/word-atlas/atlas",G={img:1,uk:2,us:4,ex:8,ex2:16};async function pt(t){let e=await fetch(t,{cache:"no-store"});if(!e.ok)throw new Error(`\u8BCD\u5E93\u52A0\u8F7D\u5931\u8D25\uFF08HTTP ${e.status}\uFF09`);return e.json()}function wa(t){let e=(t.topics||[]).map(([n,s])=>({slug:n,zh:s})),a=t.cefr||["A1","A2","B1","B2","C1","C2"],r=(t.words||[]).map((n,s)=>{let[i,o,c,w,u,k,b]=n;return{id:i,word:o,zh:c,ipa:w,cefr:a[u]||"",topic:e[k]?.slug||"",topicZh:e[k]?.zh||"",media:b,order:s}});return{id:t.id,name:t.name,count:t.count??r.length,examples:t.examples??0,chunk:t.chunk??100,topics:e,cefr:a,words:r,byId:new Map(r.map(n=>[n.id,n]))}}var ge=null;function ct(){return ge||(ge=pt(`${le}/index.json`).then(wa).catch(t=>{throw ge=null,t})),ge}var Oe=new Map,fe=new Map;function he(t,e){let a=Oe.get(e);if(a)return Promise.resolve(a);let r=t.byId.get(e);if(!r)return Promise.reject(new Error(`\u627E\u4E0D\u5230\u8BCD\u6761 ${e}`));let n=Math.floor(r.order/t.chunk),s=fe.get(n);return s||(s=pt(`${le}/entries/${n}.json`).then(i=>{for(let o of i)Oe.set(o.id,o);fe.delete(n)}).catch(i=>{throw fe.delete(n),i}),fe.set(n,s)),s.then(()=>{let i=Oe.get(e);if(!i)throw new Error(`\u627E\u4E0D\u5230\u8BCD\u6761 ${e}`);return i})}var ut=t=>`${le}/thumb/${t}.webp`,wt=t=>`${le}/img/${t}.webp`,q=(t,e)=>`${le}/audio/${t}/${e}.mp3`;function ma(t){return t&&(typeof t.media=="number"?t.media:t.m)||0}function W(t,e){return(ma(t)&e)!==0}var ft=require("react"),ht="/word-atlas/api/progress",bt="word-atlas-dsh:progress:v1",Ue={accent:"uk",dailyNew:10,retention:.9,startLevel:0,spell:!0,autoplay:!0};function xt(){return{v:1,cards:{},bookmarks:[],days:{},mistakes:[],typing:[],settings:{...Ue}}}function yt(t){return!t||typeof t!="object"||Array.isArray(t)||t.v!==1?null:{v:1,cards:t.cards&&typeof t.cards=="object"&&!Array.isArray(t.cards)?t.cards:{},bookmarks:Array.isArray(t.bookmarks)?t.bookmarks.filter(e=>typeof e=="string"):[],days:t.days&&typeof t.days=="object"&&!Array.isArray(t.days)?t.days:{},mistakes:Array.isArray(t.mistakes)?t.mistakes.filter(e=>typeof e=="string").slice(0,300):[],typing:Array.isArray(t.typing)?t.typing.slice(-500):[],settings:{...Ue,...t.settings&&typeof t.settings=="object"?t.settings:{}},...typeof t.savedAt=="number"?{savedAt:t.savedAt}:{}}}function ga(){try{let t=localStorage.getItem(bt);return t?yt(JSON.parse(t)):null}catch{return null}}function xe(){try{localStorage.setItem(bt,JSON.stringify(O))}catch{}}var O=ga()||xt(),je=new Set,He=null,mt=!1;function ye(){for(let t of je)t()}function vt(){clearTimeout(He),He=setTimeout(ve,800)}function gt(){return O}function fa(t){return je.add(t),()=>je.delete(t)}function kt(){return(0,ft.useSyncExternalStore)(fa,gt,gt)}function K(t){let e=t(O);!e||e===O||(O={...e,v:1,savedAt:Date.now()},xe(),ye(),vt())}function ve(){if(clearTimeout(He),!O.savedAt)return;let t=JSON.stringify(O);fetch(ht,{method:"POST",headers:{"Content-Type":"application/json"},body:t}).catch(()=>{})}async function _t(){if(!mt){mt=!0;try{let t=await fetch(ht,{cache:"no-store"});if(!t.ok)return;let e=yt(await t.json());if(!e)return;let a=e.savedAt||0,r=O.savedAt||0;a>r?(O=e,xe(),ye()):r>a&&vt()}catch{}}}function be(t=new Date){return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}function ke(t,{newWords:e=0,reviewed:a=0,correct:r=0}={}){let n=be(),s=t[n]||{n:0,r:0,c:0};return{...t,[n]:{n:s.n+e,r:s.r+a,c:s.c+r}}}function Nt(t,e=new Date){let a=0,r=new Date(e);for(;;){let n=t[be(r)];if(!n||(n.n||0)+(n.r||0)===0){if(a===0&&be(r)===be(e)){r.setDate(r.getDate()-1);continue}break}a+=1,r.setDate(r.getDate()-1)}return a}function Mt(t,e){let a=t.bookmarks.includes(e);return{...t,bookmarks:a?t.bookmarks.filter(r=>r!==e):[e,...t.bookmarks]}}var St="word-atlas-open";function X(t){return!!t&&typeof t=="object"&&!Array.isArray(t)}function P(t,e=0,a=1/0){return typeof t=="number"&&Number.isFinite(t)&&t>=e&&t<=a}function ha(t){return X(t)&&P(t.due)&&P(t.s)&&P(t.d,0,11)&&P(t.el)&&P(t.sd)&&P(t.ls)&&P(t.reps)&&P(t.lapses)&&[0,1,2,3].includes(t.st)&&(t.last===void 0||P(t.last))&&P(t.seen)}function zt(){return ve(),JSON.stringify({app:"word-atlas",version:2,exported:new Date().toISOString(),progress:{version:2,datasetId:St,cards:O.cards,bookmarks:O.bookmarks,days:O.days,typing:O.typing,session:null,mistakes:O.mistakes},settings:O.settings},null,1)}function At(t){let e;try{e=JSON.parse(t)}catch{return{ok:!1,error:"\u6587\u4EF6\u4E0D\u662F\u6709\u6548\u7684 JSON\u3002"}}if(!X(e)||e.app!=="word-atlas"||e.version!==2||!X(e.progress))return{ok:!1,error:"\u8FD9\u4E0D\u662F\u8BCD\u5149\u7684\u5B66\u4E60\u5907\u4EFD\u3002"};let a=e.progress;if(typeof a.datasetId=="string"&&a.datasetId!==St)return{ok:!1,error:"\u5907\u4EFD\u6765\u81EA\u53E6\u4E00\u4E2A\u8BCD\u5E93\uFF0C\u8BF7\u4F7F\u7528\u8BCD\u5149\u5F00\u653E\u8BCD\u5E93\u7684\u5907\u4EFD\u3002"};let r={};if(X(a.cards))for(let[w,u]of Object.entries(a.cards))ha(u)&&(r[w]=u);let n=Array.isArray(a.bookmarks)?a.bookmarks.filter(w=>typeof w=="string").slice(0,2e4):[],s={};if(X(a.days))for(let[w,u]of Object.entries(a.days)){if(!/^\d{4}-\d{2}-\d{2}$/.test(w)||!X(u))continue;let k=Number(u.n)||0,b=Number(u.r)||0,f=Number(u.c)||0;s[w]={n:k,r:b,c:f}}let i=Array.isArray(a.mistakes)?a.mistakes.filter(w=>typeof w=="string").slice(0,300):[],o=Array.isArray(a.typing)?a.typing.slice(-500):[],c={...Ue,...X(e.settings)?e.settings:{}};return O={v:1,cards:r,bookmarks:n,days:s,mistakes:i,typing:o,settings:c,savedAt:Date.now()},xe(),ye(),ve(),{ok:!0,cards:Object.keys(r).length}}function Et(){O={...xt(),savedAt:Date.now()},xe(),ye(),ve()}var Pe=class t extends Error{constructor(e="FSRS Error"){super(e),this.name="FSRSError",Error.captureStackTrace?.(this,t)}},F=class t extends Pe{constructor(e){super(e),this.name="FSRSValidationError",Error.captureStackTrace?.(this,t)}},A=(t=>(t[t.New=0]="New",t[t.Learning=1]="Learning",t[t.Review=2]="Review",t[t.Relearning=3]="Relearning",t))(A||{}),h=(t=>(t[t.Manual=0]="Manual",t[t.Again=1]="Again",t[t.Hard=2]="Hard",t[t.Good=3]="Good",t[t.Easy=4]="Easy",t))(h||{}),$=class t{static card(e){return{...e,state:t.state(e.state),due:t.time(e.due),last_review:e.last_review?t.time(e.last_review):void 0}}static rating(e){if(typeof e=="string"){let a=e.charAt(0).toUpperCase(),r=e.slice(1).toLowerCase(),n=h[`${a}${r}`];if(n===void 0)throw new F(`Invalid rating:[${e}]`);return n}else if(typeof e=="number")return e;throw new F(`Invalid rating:[${e}]`)}static state(e){if(typeof e=="string"){let a=e.charAt(0).toUpperCase(),r=e.slice(1).toLowerCase(),n=A[`${a}${r}`];if(n===void 0)throw new F(`Invalid state:[${e}]`);return n}else if(typeof e=="number")return e;throw new F(`Invalid state:[${e}]`)}static time(e){if(e instanceof Date)return e;let a=new Date(e);if(typeof e=="object"&&e!==null&&!Number.isNaN(Date.parse(e)||+a))return a;if(typeof e=="string"){let r=Date.parse(e);if(Number.isNaN(r))throw new F(`Invalid date:[${e}]`);return new Date(r)}else if(typeof e=="number")return new Date(e);throw new F(`Invalid date:[${e}]`)}static review_log(e){return{...e,due:t.time(e.due),rating:t.rating(e.rating),state:t.state(e.state),review:t.time(e.review)}}};Date.prototype.scheduler=function(t,e){return H(this,t,e)};Date.prototype.diff=function(t,e){return R(this,t,e)};Date.prototype.format=function(){return ba(this)};Date.prototype.dueFormat=function(t,e,a){return xa(this,t,e,a)};function H(t,e,a){return new Date(a?$.time(t).getTime()+e*24*60*60*1e3:$.time(t).getTime()+e*60*1e3)}function R(t,e,a){if(!t||!e)throw new F("Invalid date");let r=$.time(t).getTime()-$.time(e).getTime(),n=0;switch(a){case"days":n=Math.floor(r/(1440*60*1e3));break;case"minutes":n=Math.floor(r/(60*1e3));break}return n}function ba(t){let e=$.time(t),a=e.getFullYear(),r=e.getMonth()+1,n=e.getDate(),s=e.getHours(),i=e.getMinutes(),o=e.getSeconds();return`${a}-${de(r)}-${de(n)} ${de(s)}:${de(i)}:${de(o)}`}function de(t){return t<10?`0${t}`:`${t}`}var Ge=[60,60,24,31,12],We=["second","min","hour","day","month","year"];function xa(t,e,a,r=We){t=$.time(t),e=$.time(e),r.length!==We.length&&(r=We);let n=t.getTime()-e.getTime(),s=0;for(n/=1e3,s=0;s<Ge.length&&!(n<Ge[s]);s++)n/=Ge[s];return`${Math.floor(n)}${a?r[s]:""}`}var ya=Object.freeze([h.Again,h.Hard,h.Good,h.Easy]),va=[{start:2.5,end:7,factor:.15},{start:7,end:20,factor:.1},{start:20,end:1/0,factor:.05}];function ka(t,e,a){let r=1;for(let i of va)r+=i.factor*Math.max(Math.min(t,i.end)-i.start,0);t=Math.min(t,a);let n=Math.max(2,Math.round(t-r)),s=Math.min(Math.round(t+r),a);return t>e&&(n=Math.max(n,e+1)),n=Math.min(n,s),{min_ivl:n,max_ivl:s}}function U(t,e,a){return Math.min(Math.max(t,e),a)}function j(t,e){let a=10**e;return Math.round(t*a)/a}function _a(t,e){let a=Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()),r=Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate());return Math.floor((r-a)/864e5)}var Na=t=>{let e=t.slice(-1),a=parseInt(t.slice(0,-1),10);if(Number.isNaN(a)||!Number.isFinite(a)||a<0)throw new F(`Invalid step value: ${t}`);switch(e){case"m":return a;case"h":return a*60;case"d":return a*1440;default:throw new F(`Invalid step unit: ${t}, expected m/h/d`)}},Ma=(t,e,a)=>{let r=e===A.Relearning||e===A.Review?t.relearning_steps:t.learning_steps,n=r.length;if(n===0||a>=n)return{};let s=r[0],i=Na,o=()=>i(s),c=()=>{if(n===1)return Math.round(i(s)*1.5);let f=r[1];return Math.round((i(s)+i(f))/2)},w=f=>f<0||f>=n?null:r[f],u=f=>i(f),k={},b=w(Math.max(0,a));if(e===A.Review)return k[h.Again]={scheduled_minutes:i(b),next_step:0},k;{k[h.Again]={scheduled_minutes:o(),next_step:0},k[h.Hard]={scheduled_minutes:c(),next_step:a};let f=w(a+1);if(f){let g=u(f);g&&(k[h.Good]={scheduled_minutes:Math.round(g),next_step:a+1})}}return k};function Sa(){let t=this.review_time.getTime(),e=this.current.reps,a=this.current.difficulty*this.current.stability;return`${t}_${e}_${a}`}var ze=(t=>(t.SCHEDULER="Scheduler",t.LEARNING_STEPS="LearningSteps",t.SEED="Seed",t))(ze||{}),Ne=class{last;current;review_time;next=new Map;algorithm;strategies;elapsed_days=0;constructor(e,a,r,n){this.algorithm=r,this.last=$.card(e),this.current=$.card(e),this.review_time=$.time(a),this.strategies=n,this.init()}checkGrade(e){if(!Number.isFinite(e)||e<1||e>4)throw new F(`Invalid grade "${e}",expected 1-4`)}init(){let{state:e,last_review:a}=this.current,r=0;e!==A.New&&a&&(r=_a(a,this.review_time)),this.current.last_review=this.review_time,this.elapsed_days=r,this.current.elapsed_days=r,this.current.reps+=1;let n=Sa;if(this.strategies){let s=this.strategies.get(ze.SEED);s&&(n=s)}this.algorithm.seed=n.call(this)}preview(){return{[h.Again]:this.review(h.Again),[h.Hard]:this.review(h.Hard),[h.Good]:this.review(h.Good),[h.Easy]:this.review(h.Easy),[Symbol.iterator]:this.previewIterator.bind(this)}}*previewIterator(){for(let e of ya)yield this.review(e)}review(e){let{state:a}=this.last,r;switch(this.checkGrade(e),a){case A.New:r=this.newState(e);break;case A.Learning:case A.Relearning:r=this.learningState(e);break;case A.Review:r=this.reviewState(e);break}return r}buildLog(e){let{last_review:a,due:r,elapsed_days:n}=this.last;return{rating:e,state:this.current.state,due:a||r,stability:this.current.stability,difficulty:this.current.difficulty,elapsed_days:this.elapsed_days,last_elapsed_days:n,scheduled_days:this.current.scheduled_days,learning_steps:this.current.learning_steps,review:this.review_time}}},qe=class{c;s0;s1;s2;constructor(e){let a=za();this.c=1,this.s0=a(" "),this.s1=a(" "),this.s2=a(" "),e==null&&(e=Date.now()),this.s0-=a(e),this.s0<0&&(this.s0+=1),this.s1-=a(e),this.s1<0&&(this.s1+=1),this.s2-=a(e),this.s2<0&&(this.s2+=1)}next(){let e=2091639*this.s0+this.c*23283064365386963e-26;return this.s0=this.s1,this.s1=this.s2,this.c=e|0,this.s2=e-this.c,this.s2}set state(e){this.c=e.c,this.s0=e.s0,this.s1=e.s1,this.s2=e.s2}get state(){return{c:this.c,s0:this.s0,s1:this.s1,s2:this.s2}}};function za(){let t=4022871197;return function(a){a=String(a);for(let r=0;r<a.length;r++){t+=a.charCodeAt(r);let n=.02519603282416938*t;t=n>>>0,n-=t,n*=t,t=n>>>0,n-=t,t+=n*4294967296}return(t>>>0)*23283064365386963e-26}}function Aa(t){let e=new qe(t),a=()=>e.next();return a.int32=()=>e.next()*4294967296|0,a.double=()=>a()+(a()*2097152|0)*11102230246251565e-32,a.state=()=>e.state,a.importState=r=>(e.state=r,a),a}var Ea="5.4.2",La=.9,Ca=36500,$a=!1,Ae=!0,Da=Object.freeze(["1m","10m"]),Ia=Object.freeze(["10m"]),fr=`v${Ea} using FSRS-6.0`,Y=.001;var _e=100,Lt=.5,Ta=.1542,Ct=Object.freeze([.212,1.2931,2.3065,8.2956,6.4133,.8334,3.0194,.001,1.8722,.1666,.796,1.4835,.0614,.2629,1.6483,.6014,1.8729,.5425,.0912,.0658,Ta]),$t=2,Ba=(t,e=Ae)=>[[Y,_e],[Y,_e],[Y,_e],[Y,_e],[1,10],[.001,4],[.001,4],[.001,.75],[0,4.5],[0,.8],[.001,3.5],[.001,5],[.001,.25],[.001,.9],[0,4],[0,1],[1,6],[0,t],[0,t],[e?.01:0,.8],[.1,.8]],ee=(t,e,a=Ae)=>{let r=Ba($t,a).slice(0,t.length);if(Math.max(0,e)>1){let n=U(t[11]||0,r[11][0],r[11][1]),s=U(t[13]||0,r[13][0],r[13][1]),i=U(t[14]||0,r[14][0],r[14][1]),o=-(Math.log(n)+Math.log(Math.pow(2,s)-1)+i*.3)/e,c=U(j(Math.sqrt(Math.max(o,0)),8),.01,$t);r[17]&&(r[17]=[r[17][0],c]),r[18]&&(r[18]=[r[18][0],c])}return r.map(([n,s],i)=>U(t[i]||0,n,s))};var Ve=(t,e=0,a=Ae)=>{if(t===void 0)return[...Ct];switch(t.length){case 21:return ee(Array.from(t),e,a);case 19:return console.debug("[FSRS-6]auto fill w from 19 to 21 length"),ee(Array.from(t),e,a).concat([0,Lt]);case 17:{let r=ee(Array.from(t),e,a);return r[4]=+(r[5]*2+r[4]).toFixed(8),r[5]=+(Math.log(r[5]*3+1)/3).toFixed(8),r[6]=+(r[6]+.5).toFixed(8),console.debug("[FSRS-6]auto fill w from 17 to 21 length"),r.concat([0,0,0,Lt])}default:return console.warn("[FSRS]Invalid parameters length, using default parameters"),[...Ct]}},Fa=t=>{let e=Array.isArray(t?.learning_steps)?t.learning_steps:Da,a=Array.isArray(t?.relearning_steps)?t.relearning_steps:Ia,r=t?.enable_short_term??Ae,n=Ve(t?.w,a.length,r);return{request_retention:t?.request_retention||La,maximum_interval:t?.maximum_interval||Ca,w:n,enable_fuzz:t?.enable_fuzz??$a,enable_short_term:r,learning_steps:e,relearning_steps:a}};function te(t,e){let a={due:t?$.time(t):new Date,stability:0,difficulty:0,elapsed_days:0,scheduled_days:0,reps:0,lapses:0,learning_steps:0,state:A.New,last_review:void 0};return e&&typeof e=="function"?e(a):a}var Dt=t=>{let e=typeof t=="number"?-t:-t[20],a=Math.exp(Math.pow(e,-1)*Math.log(.9))-1;return{decay:e,factor:j(a,8)}};function Ke(t,e,a){let{decay:r,factor:n}=Dt(t);return j(Math.pow(1+n*e/a,r),8)}var Ye=class{param;intervalModifier;_seed;constructor(e){this.param=new Proxy(this.prepare_parameters(e),this.params_handler_proxy()),this.intervalModifier=this.calculate_interval_modifier(this.param.request_retention),this.forgetting_curve=Ke.bind(this,this.param.w)}get interval_modifier(){return this.intervalModifier}set seed(e){this._seed=e}calculate_interval_modifier(e){if(e<=0||e>1)throw new F("Requested retention rate should be in the range (0,1]");let{decay:a,factor:r}=Dt(this.param.w);return j((Math.pow(e,1/a)-1)/r,8)}get parameters(){return this.param}set parameters(e){this.update_parameters(e)}params_handler_proxy(){let e=this;return{set:function(a,r,n){return r==="request_retention"&&Number.isFinite(n)?e.intervalModifier=e.calculate_interval_modifier(Number(n)):r==="w"&&(n=Ve(n,a.relearning_steps.length,a.enable_short_term),n=ee(Array.from(n),a.relearning_steps.length,a.enable_short_term),e.forgetting_curve=Ke.bind(this,n),e.intervalModifier=e.calculate_interval_modifier(Number(a.request_retention))),Reflect.set(a,r,n),!0}}}update_parameters(e){let a=this.prepare_parameters(e);for(let r in a){let n=r;this.param[n]=a[n]}}prepare_parameters=e=>{let a=Fa(e);return a.w=ee(Array.from(a.w),a.relearning_steps.length,a.enable_short_term),a};init_stability(e){return Math.max(this.param.w[e-1],.1)}init_difficulty(e){let a=this.param.w,r=a[4]-Math.exp((e-1)*a[5])+1;return j(r,8)}apply_fuzz(e,a){if(!this.param.enable_fuzz||e<2.5)return Math.round(e);let n=Aa(this._seed)(),{min_ivl:s,max_ivl:i}=ka(e,a,this.param.maximum_interval);return Math.floor(n*(i-s+1)+s)}next_interval(e,a){let r=Math.min(Math.max(1,Math.round(e*this.intervalModifier)),this.param.maximum_interval);return this.apply_fuzz(r,a)}linear_damping(e,a){return j(e*(10-a)/9,8)}next_difficulty(e,a){let r=-this.param.w[6]*(a-3),n=e+this.linear_damping(r,e);return U(this.mean_reversion(this.init_difficulty(h.Easy),n),1,10)}mean_reversion(e,a){let r=this.param.w;return j(r[7]*e+(1-r[7])*a,8)}next_recall_stability(e,a,r,n){let s=this.param.w,i=h.Hard===n?s[15]:1,o=h.Easy===n?s[16]:1;return j(U(a*(1+Math.exp(s[8])*(11-e)*Math.pow(a,-s[9])*(Math.exp((1-r)*s[10])-1)*i*o),Y,36500),8)}next_forget_stability(e,a,r){let n=this.param.w;return j(U(n[11]*Math.pow(e,-n[12])*(Math.pow(a+1,n[13])-1)*Math.exp((1-r)*n[14]),Y,36500),8)}next_short_term_stability(e,a){let r=this.param.w,n=Math.pow(e,-r[19])*Math.exp(r[17]*(a-3+r[18])),s=a>=h.Hard?Math.max(n,1):n;return j(U(e*s,Y,36500),8)}forgetting_curve;next_state(e,a,r,n){let{difficulty:s,stability:i}=e??{difficulty:0,stability:0};if(a<0)throw new F(`Invalid delta_t "${a}"`);if(r<0||r>4)throw new F(`Invalid grade "${r}"`);if(s===0&&i===0)return{difficulty:U(this.init_difficulty(r),1,10),stability:this.init_stability(r)};if(r===0)return{difficulty:s,stability:i};if(s<1||i<Y)throw new F(`Invalid memory state { difficulty: ${s}, stability: ${i} }`);let o=this.param.w;n=typeof n=="number"?n:this.forgetting_curve(a,i);let c;if(a===0&&this.param.enable_short_term)c=this.next_short_term_stability(i,r);else if(r===1){let u=this.next_forget_stability(s,i,n),[k,b]=[0,0];this.param.enable_short_term&&(k=o[17],b=o[18]);let f=i/Math.exp(k*b);c=U(j(f,8),Y,u)}else c=this.next_recall_stability(s,i,n,r);return{difficulty:this.next_difficulty(s,r),stability:c}}},Me=class extends Ne{learningStepsStrategy;constructor(e,a,r,n){super(e,a,r,n);let s=Ma;if(this.strategies){let i=this.strategies.get(ze.LEARNING_STEPS);i&&(s=i)}this.learningStepsStrategy=s}getLearningInfo(e,a){let r=this.algorithm.parameters;e.learning_steps=e.learning_steps||0;let n=this.learningStepsStrategy(r,e.state,e.learning_steps),s=Math.max(0,n[a]?.scheduled_minutes??0),i=Math.max(0,n[a]?.next_step??0);return{scheduled_minutes:s,next_steps:i}}applyLearningSteps(e,a,r){let{scheduled_minutes:n,next_steps:s}=this.getLearningInfo(this.current,a);if(n>0&&n<1440)e.learning_steps=s,e.scheduled_days=0,e.state=r,e.due=H(this.review_time,Math.round(n),!1);else if(e.state=A.Review,n>=1440)e.learning_steps=s,e.due=H(this.review_time,Math.round(n),!1),e.scheduled_days=Math.floor(n/1440);else{e.learning_steps=0;let i=this.algorithm.next_interval(e.stability,this.elapsed_days);e.scheduled_days=i,e.due=H(this.review_time,i,!0)}}newState(e){let a=this.next.get(e);if(a)return a;let r=this.next_ds(this.elapsed_days,e);this.applyLearningSteps(r,e,A.Learning);let n={card:r,log:this.buildLog(e)};return this.next.set(e,n),n}learningState(e){let a=this.next.get(e);if(a)return a;let r=this.next_ds(this.elapsed_days,e);this.applyLearningSteps(r,e,this.last.state);let n={card:r,log:this.buildLog(e)};return this.next.set(e,n),n}reviewState(e){let a=this.next.get(e);if(a)return a;let r=this.elapsed_days,n=this.algorithm.forgetting_curve(r,this.current.stability),s=this.next_ds(r,h.Again,n),i=this.next_ds(r,h.Hard,n),o=this.next_ds(r,h.Good,n),c=this.next_ds(r,h.Easy,n);this.next_interval(i,o,c,r),this.next_state(i,o,c),this.applyLearningSteps(s,h.Again,A.Relearning),s.lapses+=1;let w={card:s,log:this.buildLog(h.Again)},u={card:i,log:super.buildLog(h.Hard)},k={card:o,log:super.buildLog(h.Good)},b={card:c,log:super.buildLog(h.Easy)};return this.next.set(h.Again,w),this.next.set(h.Hard,u),this.next.set(h.Good,k),this.next.set(h.Easy,b),this.next.get(e)}next_ds(e,a,r){let n=this.algorithm.next_state({difficulty:this.current.difficulty,stability:this.current.stability},e,a,r),s=$.card(this.current);return s.difficulty=n.difficulty,s.stability=n.stability,s}next_interval(e,a,r,n){let s,i;s=this.algorithm.next_interval(e.stability,n),i=this.algorithm.next_interval(a.stability,n),s=Math.min(s,i),i=Math.max(i,s+1);let o=Math.max(this.algorithm.next_interval(r.stability,n),i+1);e.scheduled_days=s,e.due=H(this.review_time,s,!0),a.scheduled_days=i,a.due=H(this.review_time,i,!0),r.scheduled_days=o,r.due=H(this.review_time,o,!0)}next_state(e,a,r){e.state=A.Review,e.learning_steps=0,a.state=A.Review,a.learning_steps=0,r.state=A.Review,r.learning_steps=0}},Se=class extends Ne{newState(e){let a=this.next.get(e);if(a)return a;this.current.scheduled_days=0,this.current.elapsed_days=0;let r=0,n=this.next_ds(r,h.Again),s=this.next_ds(r,h.Hard),i=this.next_ds(r,h.Good),o=this.next_ds(r,h.Easy);return this.next_interval(n,s,i,o,r),this.next_state(n,s,i,o),this.update_next(n,s,i,o),this.next.get(e)}next_ds(e,a,r){let n=this.algorithm.next_state({difficulty:this.current.difficulty,stability:this.current.stability},e,a,r),s=$.card(this.current);return s.difficulty=n.difficulty,s.stability=n.stability,s}learningState(e){return this.reviewState(e)}reviewState(e){let a=this.next.get(e);if(a)return a;let r=this.elapsed_days,n=this.algorithm.forgetting_curve(r,this.current.stability),s=this.next_ds(r,h.Again,n),i=this.next_ds(r,h.Hard,n),o=this.next_ds(r,h.Good,n),c=this.next_ds(r,h.Easy,n);return this.next_interval(s,i,o,c,r),this.next_state(s,i,o,c),s.lapses+=1,this.update_next(s,i,o,c),this.next.get(e)}next_interval(e,a,r,n,s){let i,o,c,w;i=this.algorithm.next_interval(e.stability,s),o=this.algorithm.next_interval(a.stability,s),c=this.algorithm.next_interval(r.stability,s),w=this.algorithm.next_interval(n.stability,s),i=Math.min(i,o),o=Math.max(o,i+1),c=Math.max(c,o+1),w=Math.max(w,c+1),e.scheduled_days=i,e.due=H(this.review_time,i,!0),a.scheduled_days=o,a.due=H(this.review_time,o,!0),r.scheduled_days=c,r.due=H(this.review_time,c,!0),n.scheduled_days=w,n.due=H(this.review_time,w,!0)}next_state(e,a,r,n){e.state=A.Review,e.learning_steps=0,a.state=A.Review,a.learning_steps=0,r.state=A.Review,r.learning_steps=0,n.state=A.Review,n.learning_steps=0}update_next(e,a,r,n){let s={card:e,log:this.buildLog(h.Again)},i={card:a,log:super.buildLog(h.Hard)},o={card:r,log:super.buildLog(h.Good)},c={card:n,log:super.buildLog(h.Easy)};this.next.set(h.Again,s),this.next.set(h.Hard,i),this.next.set(h.Good,o),this.next.set(h.Easy,c)}},Ze=class{fsrs;constructor(e){this.fsrs=e}replay(e,a,r){return this.fsrs.next(e,a,r)}handleManualRating(e,a,r,n,s,i,o){if(typeof a>"u")throw new F("reschedule: state is required for manual rating");let c,w;if(a===A.New)c={rating:h.Manual,state:a,due:o??r,stability:e.stability,difficulty:e.difficulty,elapsed_days:n,last_elapsed_days:e.elapsed_days,scheduled_days:e.scheduled_days,learning_steps:e.learning_steps,review:r},w=te(r),w.last_review=r;else{if(typeof o>"u")throw new F("reschedule: due is required for manual rating");let u=R(o,r,"days");c={rating:h.Manual,state:e.state,due:e.last_review||e.due,stability:e.stability,difficulty:e.difficulty,elapsed_days:n,last_elapsed_days:e.elapsed_days,scheduled_days:e.scheduled_days,learning_steps:e.learning_steps,review:r},w={...e,state:a,due:o,last_review:r,stability:s||e.stability,difficulty:i||e.difficulty,elapsed_days:n,scheduled_days:u,reps:e.reps+1}}return{card:w,log:c}}reschedule(e,a){let r=[],n=te(e.due);for(let s of a){let i;if(s.review=$.time(s.review),s.rating===h.Manual){let o=0;n.state!==A.New&&n.last_review&&(o=R(s.review,n.last_review,"days")),i=this.handleManualRating(n,s.state,s.review,o,s.stability,s.difficulty,s.due?$.time(s.due):void 0)}else i=this.replay(n,s.review,s.rating);r.push(i),n=i.card}return r}calculateManualRecord(e,a,r,n){if(!r)return null;let{card:s,log:i}=r,o=$.card(e);return o.due.getTime()===s.due.getTime()?null:(o.scheduled_days=R(s.due,o.due,"days"),this.handleManualRating(o,s.state,$.time(a),i.elapsed_days,n?s.stability:void 0,n?s.difficulty:void 0,s.due))}};function pe(t,e){return typeof e=="function"?e(t):t}var Je=class extends Ye{strategyHandler=new Map;Scheduler;constructor(e){super(e);let{enable_short_term:a}=this.parameters;this.Scheduler=a?Me:Se}params_handler_proxy(){let e=this;return{set:function(a,r,n){return r==="request_retention"&&Number.isFinite(n)?e.intervalModifier=e.calculate_interval_modifier(Number(n)):r==="enable_short_term"?e.Scheduler=n===!0?Me:Se:r==="w"&&(n=Ve(n,a.relearning_steps.length,a.enable_short_term),n=ee(Array.from(n),a.relearning_steps.length,a.enable_short_term),e.forgetting_curve=Ke.bind(this,n),e.intervalModifier=e.calculate_interval_modifier(Number(a.request_retention))),Reflect.set(a,r,n),!0}}}useStrategy(e,a){return this.strategyHandler.set(e,a),this}clearStrategy(e){return e?this.strategyHandler.delete(e):this.strategyHandler.clear(),this}getScheduler(e,a){let n=this.strategyHandler.get(ze.SCHEDULER)||this.Scheduler;return new n(e,a,this,this.strategyHandler)}repeat(e,a,r){let s=this.getScheduler(e,a).preview();return pe(s,r)}next(e,a,r,n){let s=this.getScheduler(e,a),i=$.rating(r);if(i===h.Manual)throw new F("Cannot review a manual rating");let o=s.review(i);return pe(o,n)}get_retrievability(e,a,r=!0){let n=$.card(e);a=a?$.time(a):new Date;let s=n.state!==A.New?Math.max(R(a,n.last_review,"days"),0):0,i=n.state!==A.New?this.forgetting_curve(s,+n.stability.toFixed(8)):0;return r?`${(i*100).toFixed(2)}%`:i}rollback(e,a,r){let n=$.card(e),s=$.review_log(a);if(s.rating===h.Manual)throw new F("Cannot rollback a manual rating");let i,o,c;switch(s.state){case A.New:i=s.due,o=void 0,c=0;break;case A.Learning:case A.Relearning:case A.Review:i=s.review,o=s.due,c=n.lapses-(s.rating===h.Again&&s.state===A.Review?1:0);break}let w={...n,due:i,stability:s.stability,difficulty:s.difficulty,elapsed_days:s.last_elapsed_days,scheduled_days:s.scheduled_days,reps:Math.max(0,n.reps-1),lapses:Math.max(0,c),learning_steps:s.learning_steps,state:s.state,last_review:o};return pe(w,r)}forget(e,a,r=!1,n){let s=$.card(e);a=$.time(a);let i=s.state===A.New?0:R(a,s.due,"days"),o={rating:h.Manual,state:s.state,due:s.due,stability:s.stability,difficulty:s.difficulty,elapsed_days:0,last_elapsed_days:s.elapsed_days,scheduled_days:i,learning_steps:s.learning_steps,review:a},w={card:{...s,due:a,stability:0,difficulty:0,elapsed_days:0,scheduled_days:0,reps:r?0:s.reps,lapses:r?0:s.lapses,learning_steps:0,state:A.New,last_review:s.last_review},log:o};return pe(w,n)}reschedule(e,a=[],r={}){let{recordLogHandler:n,reviewsOrderBy:s,skipManual:i=!0,now:o=new Date,update_memory_state:c=!1}=r;s&&typeof s=="function"&&a.sort(s),i&&(a=a.filter(g=>g.rating!==h.Manual));let w=new Ze(this),u=w.reschedule(r.first_card||te(),a),k=u.length,b=$.card(e),f=w.calculateManualRecord(b,o,k?u[k-1]:void 0,c);return{collections:typeof n=="function"?u.map(n):u,reschedule_item:f?pe(f,n):null}}},It=t=>new Je(t||{});var Tt=new Map;function Bt(t){let e=Math.round(t*1e3)/1e3,a=Tt.get(e);return a||(a=It({request_retention:e,enable_fuzz:!0,enable_short_term:!0,learning_steps:["1m","10m"],relearning_steps:["10m"]}),Tt.set(e,a)),a}function Ft(t){return{due:new Date(t.due),stability:t.s,difficulty:t.d,elapsed_days:t.el,scheduled_days:t.sd,learning_steps:t.ls,reps:t.reps,lapses:t.lapses,state:t.st,last_review:t.last?new Date(t.last):void 0}}function Oa(t,e){return{due:t.due.getTime(),s:t.stability,d:t.difficulty,el:t.elapsed_days,sd:t.scheduled_days,ls:t.learning_steps,reps:t.reps,lapses:t.lapses,st:t.state,last:t.last_review?t.last_review.getTime():void 0,seen:e}}var Xe=[h.Again,h.Hard,h.Good,h.Easy],Ot={[h.Again]:"\u91CD\u6765",[h.Hard]:"\u56F0\u96BE",[h.Good]:"\u826F\u597D",[h.Easy]:"\u7B80\u5355"};function Ee(t,e,a=Date.now(),r=.9){let n=t?Ft(t):te(new Date(a)),s=Bt(r).next(n,new Date(a),e).card;return Oa(s,t?.seen??a)}function jt(t,e=Date.now(),a=.9){let r=t?Ft(t):te(new Date(e)),n=Bt(a).repeat(r,new Date(e)),s={};for(let i of Xe)s[i]=n[i].card.due.getTime()-e;return s}var ja=21,Ht=t=>!!(t&&t.st===A.Review&&t.s>=ja);var Ut=(t,e=Date.now())=>!!(t&&t.due<=e);function Le(t){if(!Number.isFinite(t))return"";let e=Math.round(t/6e4);if(e<1)return"<1\u5206";if(e<60)return`${e}\u5206`;let a=Math.round(e/60);if(a<24)return`${a}\u5C0F\u65F6`;let r=Math.round(a/24);if(r<31)return`${r}\u5929`;let n=Math.round(r/30);return n<12?`${n}\u4E2A\u6708`:`${(r/365).toFixed(1)}\u5E74`}var p=J(require("react"),1);var S=J(require("react"),1);var Ha="arise arose arisen|awake awoke awoken|bear bore borne born|beat beat beaten|become became|begin began begun beginn|bend bent|bet bet|bind bound|bite bit bitten|bleed bled|blow blew blown|break broke broken|breed bred|bring brought|broadcast broadcast|build built|burn burnt burned|burst burst|buy bought|catch caught|choose chose chosen|cling clung|come came|cost cost|creep crept|cut cut cutt|deal dealt|dig dug|do did done does|draw drew drawn|dream dreamt dreamed|drink drank drunk|drive drove driven|eat ate eaten|fall fell fallen|feed fed|feel felt|fight fought|find found|flee fled|fling flung|fly flew flown flies|forbid forbade forbidden|forget forgot forgotten|forgive forgave forgiven|freeze froze frozen|get got gotten gett|give gave given|go went gone goes|grind ground|grow grew grown|hang hung|have had has|hear heard|hide hid hidden|hit hit hitt|hold held|hurt hurt|keep kept|kneel knelt|know knew known|lay laid|lead led|lean leant leaned|leap leapt leaped|learn learnt learned|leave left|lend lent|let let|lie lay lain|light lit|lose lost|make made|mean meant|meet met|pay paid|prove proved proven|put put putt|quit quit|read read|ride rode ridden|ring rang rung|rise rose risen|run ran runn|say said|see saw seen|seek sought|sell sold|send sent|set set|sew sewed sewn|shake shook shaken|shed shed|shine shone|shoot shot|show showed shown|shrink shrank shrunk|shut shut|sing sang sung|sink sank sunk|sit sat sitt|sleep slept|slide slid|sling slung|speak spoke spoken|speed sped|spend spent|spill spilt spilled|spin spun spinn|spy spied spies|mislead misled|spit spat|split split|spread spread|spring sprang sprung|stand stood|steal stole stolen|stick stuck|sting stung|stink stank stunk|stride strode|strike struck|string strung|strive strove striven|swear swore sworn|sweep swept|swell swelled swollen|swim swam swum swimm|swing swung|take took taken|teach taught|tear tore torn|tell told|think thought|throw threw thrown|tread trod trodden|understand understood|undertake undertook undertaken|upset upset|wake woke woken|wear wore worn|weave wove woven|weep wept|win won winn|wind wound|withdraw withdrew withdrawn|write wrote written|be was were been is are am|child children|man men|woman women|foot feet|tooth teeth|mouse mice|person people|good better best|bad worse worst|far further farther furthest",Ua=new Map(Ha.split("|").map(t=>t.split(" ")).map(([t,...e])=>[t,e])),ae=new Map;for(let[t,e]of Ua){for(let a of e)ae.has(a)||ae.set(a,t);ae.has(t)||ae.set(t,t)}function Wt(t){return String(t||"").normalize("NFKC").replace(/[’‘]/g,"'").replace(/[‐‑–—]/g,"-").trim().toLowerCase().replace(/^[^a-z']+|[^a-z']+$/g,"")}function Qe(t){let e=Wt(t);if(!e)return[];let a=[],r=s=>{s&&s.length>0&&!a.includes(s)&&a.push(s)};e.endsWith("'s")&&r(e.slice(0,-2)),/(ies|ied)$/.test(e)&&r(e.slice(0,-3)+"y"),/ying$/.test(e)&&r(e.slice(0,-4)+"ie");for(let s of["ing","ed","est","er","es","s"]){if(!e.endsWith(s)||e.length<=s.length+1)continue;let i=e.slice(0,-s.length);/([bdgmnprt])\1$/.test(i)&&(r(i),r(i.slice(0,-1))),/i$/.test(i)&&(s==="er"||s==="est"||s==="ed")&&r(i.slice(0,-1)+"y"),(s==="ing"||s==="ed")&&!/ng$/.test(i)?(r(i+"e"),r(i)):(r(i),r(i+"e"))}let n=ae.get(e);return n&&r(n),a}function Re(t){let e=new Map;for(let n of t)e.set(n.word.toLowerCase(),n.id);let a=new Map;function r(n){let s=Wt(n);if(!s)return null;if(a.has(s))return a.get(s);let i=e.get(s);if(!i){let o=ae.get(s);o&&(i=e.get(o))}if(!i){for(let o of Qe(s))if(i=e.get(o),i)break}return a.set(s,i??null),i??null}return{resolve:r,exact:e}}var Gt=new WeakMap;function Pt(t){let e=Gt.get(t);return e||(e=Re(t.words),Gt.set(t,e)),e}var x=J(require("react"),1);var Ga={search:[x.default.createElement("circle",{key:"c",cx:"11",cy:"11",r:"6.5"}),x.default.createElement("path",{key:"l",d:"M16 16l4.5 4.5"})],star:[x.default.createElement("path",{key:"s",d:"M12 3.6l2.5 5.1 5.6.8-4 3.9.9 5.6-5-2.6-5 2.6.9-5.6-4-3.9 5.6-.8z"})],sparkle:[x.default.createElement("path",{key:"a",d:"M12 3l1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7z"}),x.default.createElement("path",{key:"b",d:"M18.5 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z"})],heart:[x.default.createElement("path",{key:"h",d:"M12 19.5s-7-4.3-7-9A4 4 0 0 1 12 7a4 4 0 0 1 7 3.5c0 4.7-7 9-7 9z"})],volume:[x.default.createElement("path",{key:"v",d:"M4 9.5h3.2L12 6v12L7.2 14.5H4z"}),x.default.createElement("path",{key:"w",d:"M15.5 8.5a5 5 0 0 1 0 7"}),x.default.createElement("path",{key:"x",d:"M18 6a8.5 8.5 0 0 1 0 12"})],close:[x.default.createElement("path",{key:"a",d:"M6 6l12 12"}),x.default.createElement("path",{key:"b",d:"M18 6L6 18"})],chevronLeft:[x.default.createElement("path",{key:"c",d:"M14.5 5.5L8 12l6.5 6.5"})],chevronRight:[x.default.createElement("path",{key:"c",d:"M9.5 5.5L16 12l-6.5 6.5"})],book:[x.default.createElement("path",{key:"a",d:"M4 5.5A2.5 2.5 0 0 1 6.5 3H19v15H6.5A2.5 2.5 0 0 0 4 20.5z"}),x.default.createElement("path",{key:"b",d:"M4 20.5A2.5 2.5 0 0 1 6.5 18H19v3H6.5"})],layers:[x.default.createElement("path",{key:"a",d:"M12 3l8 4.5-8 4.5-8-4.5z"}),x.default.createElement("path",{key:"b",d:"M4 12l8 4.5 8-4.5"}),x.default.createElement("path",{key:"c",d:"M4 16.5L12 21l8-4.5"})],refresh:[x.default.createElement("path",{key:"a",d:"M19 12a7 7 0 1 1-2.1-5"}),x.default.createElement("path",{key:"b",d:"M19.5 4v4.5H15"})],check:[x.default.createElement("path",{key:"c",d:"M5 12.5l4.2 4.2L19 7"})],info:[x.default.createElement("circle",{key:"a",cx:"12",cy:"12",r:"8.5"}),x.default.createElement("path",{key:"b",d:"M12 11v5.5"}),x.default.createElement("path",{key:"c",d:"M12 7.8v.4"})],play:[x.default.createElement("path",{key:"p",d:"M8 5.5l10 6.5-10 6.5z"})],pause:[x.default.createElement("path",{key:"a",d:"M9 6v12"}),x.default.createElement("path",{key:"b",d:"M15 6v12"})],user:[x.default.createElement("circle",{key:"a",cx:"12",cy:"8",r:"3.6"}),x.default.createElement("path",{key:"b",d:"M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6"})],globe:[x.default.createElement("circle",{key:"a",cx:"12",cy:"12",r:"8.5"}),x.default.createElement("path",{key:"b",d:"M3.5 12h17"}),x.default.createElement("path",{key:"c",d:"M12 3.5c2.5 2.4 3.8 5.3 3.8 8.5S14.5 18.1 12 20.5c-2.5-2.4-3.8-5.3-3.8-8.5S9.5 5.9 12 3.5z"})]};function L({name:t,size:e=18,filled:a=!1,className:r="",...n}){let s=Ga[t];return s?x.default.createElement("svg",{viewBox:"0 0 24 24",width:e,height:e,fill:a?"currentColor":"none",stroke:"currentColor",strokeWidth:a?0:1.7,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",className:r,...n},s):null}function V({id:t,word:e,full:a=!1,className:r="",alt:n}){let[s,i]=(0,x.useState)(!1),o=a?wt(t):ut(t);return s?x.default.createElement("div",{className:`wa-img-fallback ${r}`,role:"img","aria-label":n||e},x.default.createElement("span",null,(e||"?").slice(0,1).toUpperCase())):x.default.createElement("img",{className:r,src:o,alt:n||`${e} \u63D2\u753B`,loading:"lazy",decoding:"async",draggable:!1,onError:()=>i(!0)})}var Q=null,ce=null,et=new Set;function qt(){for(let t of et)t()}function re(){Q&&(Q.pause(),Q=null),ce=null,qt()}function Wa(t,e){if(ce===t){re();return}re();let a=new Audio(e);Q=a,ce=t,qt(),a.onended=()=>{Q===a&&re()},a.onerror=()=>{Q===a&&re()},a.play().catch(()=>{Q===a&&re()})}function Kt(){re()}function Pa(){let[t,e]=(0,x.useState)(ce);return(0,x.useEffect)(()=>{let a=()=>e(ce);return et.add(a),()=>et.delete(a)},[]),t}function Z({audioKey:t,url:e,label:a,size:r=16,className:n="",title:s}){let i=Pa()===t;return x.default.createElement("button",{type:"button",className:`wa-audio-btn ${i?"is-playing":""} ${n}`,onClick:()=>Wa(t,e),"aria-label":s||(i?"\u505C\u6B62\u64AD\u653E":`\u64AD\u653E${a||""}`),title:s||a||"\u64AD\u653E\u53D1\u97F3"},x.default.createElement(L,{name:i?"pause":"volume",size:r}),a?x.default.createElement("span",null,a):null)}function Yt({onClose:t,children:e,labelledBy:a}){let r=(0,x.useRef)(null);return(0,x.useEffect)(()=>{let n=s=>{s.key==="Escape"&&(s.stopPropagation(),t())};return window.addEventListener("keydown",n),()=>window.removeEventListener("keydown",n)},[t]),x.default.createElement("div",{className:"wa-overlay",ref:r,role:"dialog","aria-modal":"true","aria-labelledby":a,onMouseDown:n=>{n.target===r.current&&t()}},e)}function ne({label:t="\u52A0\u8F7D\u4E2D\u2026"}){return x.default.createElement("div",{className:"wa-loading",role:"status"},x.default.createElement("span",{className:"wa-spinner","aria-hidden":"true"}),x.default.createElement("span",null,t))}function ue({icon:t="sparkle",title:e,children:a}){return x.default.createElement("div",{className:"wa-empty"},x.default.createElement("span",{className:"wa-empty-icon"},x.default.createElement(L,{name:t,size:26})),x.default.createElement("h3",null,e),a?x.default.createElement("div",{className:"wa-empty-body"},a):null)}function se({level:t}){return x.default.createElement("span",{className:`wa-cefr wa-cefr-${t}`},t)}function Zt(t){let e=t.includes("\uFF5C")?"\uFF5C":t.includes("|")?"|":"";if(!e)return{en:t,zh:""};let a=t.indexOf(e);return{en:t.slice(0,a).trim(),zh:t.slice(a+1).trim()}}var qa=/[A-Za-z]+(?:['’][A-Za-z]+)*/g,Ka=/^[,.;:!?…’”»)\]]+/,tt="word-atlas:lookup-open";function Ya(t,e){if(!e)return!1;let a=t.toLowerCase(),r=e.toLowerCase();return a===r||a.startsWith(r)}function Za({atlas:t,progress:e,token:a,refId:r,anchor:n,onClose:s,onOpenWord:i}){let o=(0,S.useRef)(null),[c,w]=(0,S.useState)({left:16,top:16}),u=r?t.byId.get(r):null,k=e.settings.accent;return(0,S.useLayoutEffect)(()=>{let b=()=>{let g=o.current?.offsetWidth??300,N=o.current?.offsetHeight??190,E=window.innerHeight-n.bottom>=N+16||n.top<N+16?n.bottom+8:Math.max(16,n.top-N-8),_=Math.max(16,Math.min(window.innerWidth-g-16,n.left+n.width/2-g/2));w({left:_,top:Math.min(E,window.innerHeight-N-16)})};b();let f=new ResizeObserver(b);return o.current&&f.observe(o.current),window.addEventListener("resize",b),()=>{f.disconnect(),window.removeEventListener("resize",b)}},[n,a,r]),(0,S.useEffect)(()=>{let b=g=>{o.current?.contains(g.target)||g.target instanceof Element&&g.target.closest("[data-wa-lookup-token]")||s()},f=g=>{g.key==="Escape"&&(g.stopImmediatePropagation(),s())};return document.addEventListener("pointerdown",b,!0),window.addEventListener("keydown",f,!0),()=>{document.removeEventListener("pointerdown",b,!0),window.removeEventListener("keydown",f,!0)}},[s]),S.default.createElement("div",{className:"wa-lookup",ref:o,style:{left:c.left,top:c.top},role:"dialog","aria-modal":"false","aria-label":`\u67E5\u8BCD\uFF1A${a}`},S.default.createElement("button",{type:"button",className:"wa-icon-btn wa-lookup-close",onClick:s,"aria-label":"\u5173\u95ED\u67E5\u8BCD"},S.default.createElement(L,{name:"close",size:16})),u?S.default.createElement(S.default.Fragment,null,S.default.createElement("div",{className:"wa-lookup-head"},W(u,G.img)?S.default.createElement(V,{id:u.id,word:u.word,className:"wa-lookup-thumb"}):null,S.default.createElement("div",{className:"wa-lookup-title"},S.default.createElement("h3",{lang:"en"},u.word),S.default.createElement("p",null,u.ipa))),S.default.createElement("p",{className:"wa-lookup-meaning"},u.zh),S.default.createElement("div",{className:"wa-lookup-actions"},W(u,G[k])?S.default.createElement(Z,{audioKey:`${k}:${u.id}`,url:q(k,u.id),label:"\u64AD\u653E\u53D1\u97F3"}):null,S.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary",onClick:()=>i(u.id)},"\u67E5\u770B\u8BCD\u5361"))):S.default.createElement(S.default.Fragment,null,S.default.createElement("h3",{className:"wa-lookup-missing",lang:"en"},a),S.default.createElement("p",{className:"wa-lookup-meaning"},"\u8FD9\u4E2A\u8BCD\u4E0D\u5728\u8BCD\u5149\u8BCD\u5E93\u91CC")))}function ie({atlas:t,progress:e,text:a,headword:r,onOpenWord:n,className:s=""}){let i=Pt(t),[o,c]=(0,S.useState)(null);(0,S.useEffect)(()=>{if(!o)return;let u=()=>c(null);return window.addEventListener(tt,u),()=>window.removeEventListener(tt,u)},[o]);let w=(0,S.useMemo)(()=>{let u=[],k=0;for(let b of a.matchAll(qa)){let f=b.index??0;f>k&&u.push(a.slice(k,f));let g=b[0],N=i.resolve(g),T=Ya(g,r),E=S.default.createElement("button",{type:"button",className:"wa-lookup-token","data-wa-lookup-token":"","aria-label":`\u67E5\u8BCD\uFF1A${g}`,"aria-haspopup":"dialog",onClick:M=>{M.stopPropagation(),window.dispatchEvent(new Event(tt));let D=M.currentTarget.getBoundingClientRect();c({token:g,refId:N,anchor:{left:D.left,top:D.top,width:D.width,height:D.height,bottom:D.bottom}})},onKeyDown:M=>{(M.key==="Enter"||M.key===" ")&&M.stopPropagation()}},g);u.push(T?S.default.createElement("mark",{key:`mark-${f}`},E):S.default.createElement(S.default.Fragment,{key:f},E)),k=f+g.length;let _=a.slice(k).match(Ka)?.[0]??"";_&&(u.push(S.default.createElement("span",{key:`glue-${f}`},_)),k+=_.length)}return k<a.length&&u.push(a.slice(k)),u},[a,r,i]);return S.default.createElement("span",{className:`wa-lookup-text ${s}`},w,o?S.default.createElement(Za,{atlas:t,progress:e,token:o.token,refId:o.refId,anchor:o.anchor,onClose:()=>c(null),onOpenWord:u=>{c(null),n(u)}}):null)}function Ce({atlas:t,word:e,progress:a,onClose:r,onPrev:n,onNext:s,hasPrev:i,hasNext:o,onOpenWord:c,onToggleBookmark:w,onMarkLearned:u,onBack:k,backLabel:b}){let[f,g]=(0,p.useState)(null),[N,T]=(0,p.useState)(""),E=a.settings.accent,_=a.cards[e.id],M=a.bookmarks.includes(e.id);(0,p.useEffect)(()=>{let y=!0;return g(null),T(""),he(t,e.id).then(z=>{y&&g(z)}).catch(z=>{y&&T(z.message||"\u8BCD\u6761\u52A0\u8F7D\u5931\u8D25")}),()=>{y=!1,Kt()}},[t,e.id]),(0,p.useEffect)(()=>{let y=z=>{z.key==="ArrowLeft"&&i?(z.preventDefault(),n()):z.key==="ArrowRight"&&o&&(z.preventDefault(),s())};return window.addEventListener("keydown",y),()=>window.removeEventListener("keydown",y)},[i,o,n,s]);let D=t.topics.find(y=>y.slug===e.topic)?.zh||e.topicZh;return p.default.createElement(Yt,{onClose:r,labelledBy:"wa-detail-title"},p.default.createElement("div",{className:"wa-detail",role:"document"},p.default.createElement("div",{className:"wa-detail-art"},p.default.createElement(V,{id:e.id,word:e.word,full:!0,className:"wa-detail-img",alt:`${e.word} \u63D2\u753B`}),p.default.createElement("div",{className:"wa-detail-art-meta"},p.default.createElement("span",{className:"wa-specimen"},"\u2116 ",String(e.order+1).padStart(4,"0")," ",p.default.createElement("i",null)," Word Atlas"),_?p.default.createElement("span",{className:"wa-memory-inline"},Ut(_)?"\u5F85\u590D\u4E60":`\u4E0B\u6B21\u590D\u4E60 ${Le(_.due-Date.now())}\u540E`):null)),p.default.createElement("div",{className:"wa-detail-body"},p.default.createElement("button",{type:"button",className:"wa-icon-btn wa-detail-close",onClick:r,"aria-label":"\u5173\u95ED\u8BCD\u6761"},p.default.createElement(L,{name:"close",size:18})),p.default.createElement("header",{className:"wa-detail-head"},k?p.default.createElement("button",{type:"button",className:"wa-icon-btn wa-back-btn",onClick:k,"aria-label":b?`\u8FD4\u56DE ${b}`:"\u8FD4\u56DE\u4E0A\u4E00\u4E2A\u8BCD",title:b?`\u8FD4\u56DE ${b}`:"\u8FD4\u56DE\u4E0A\u4E00\u4E2A\u8BCD"},p.default.createElement(L,{name:"chevronLeft",size:18})):null,p.default.createElement("div",{className:"wa-tags"},p.default.createElement(se,{level:e.cefr}),D?p.default.createElement("span",{className:"wa-chip"},D):null,_?p.default.createElement("span",{className:`wa-chip wa-chip-status ${_.st===2?"is-done":""}`},_.st===2?"\u590D\u4E60\u4E2D":"\u5B66\u4E60\u4E2D"):null),p.default.createElement("button",{type:"button",className:`wa-icon-btn ${M?"is-on":""}`,onClick:()=>w(e.id),"aria-pressed":M,"aria-label":M?"\u53D6\u6D88\u6536\u85CF":"\u6536\u85CF",title:M?"\u53D6\u6D88\u6536\u85CF":"\u6536\u85CF"},p.default.createElement(L,{name:"heart",size:19,filled:M}))),p.default.createElement("h2",{id:"wa-detail-title",className:"wa-headword",lang:"en"},e.word),!f&&!N?p.default.createElement(ne,{label:"\u52A0\u8F7D\u8BCD\u6761\u2026"}):null,N?p.default.createElement("p",{className:"wa-error"},N):null,f?p.default.createElement(p.default.Fragment,null,p.default.createElement("div",{className:"wa-detail-scroll"},p.default.createElement("div",{className:"wa-pron"},f.uk?p.default.createElement("div",{className:"wa-pron-row"},p.default.createElement("span",{className:"wa-pron-label"},"\u82F1"),p.default.createElement("span",{className:"wa-ipa"},f.uk),W(f,G.uk)?p.default.createElement(Z,{audioKey:`uk:${e.id}`,url:q("uk",e.id),label:"\u53D1\u97F3"}):null):null,f.us?p.default.createElement("div",{className:"wa-pron-row"},p.default.createElement("span",{className:"wa-pron-label"},"\u7F8E"),p.default.createElement("span",{className:"wa-ipa"},f.us),W(f,G.us)?p.default.createElement(Z,{audioKey:`us:${e.id}`,url:q("us",e.id),label:"\u53D1\u97F3"}):null):null,!f.uk&&!f.us?p.default.createElement("span",{className:"wa-ipa"},e.ipa):null,E==="us"&&f.us?p.default.createElement("span",{className:"wa-hint"},"\u9ED8\u8BA4\u7F8E\u97F3"):null),p.default.createElement("ol",{className:"wa-senses"},(f.senses||[]).map((y,z)=>p.default.createElement("li",{key:z},y.pos?p.default.createElement("span",{className:"wa-pos"},y.pos):null,p.default.createElement("span",{className:"wa-zh"},y.zh),y.en?p.default.createElement("span",{className:"wa-en",lang:"en"},y.en):null))),(f.ex||[]).length>0?p.default.createElement("section",{className:"wa-block"},p.default.createElement("h3",{className:"wa-eyebrow"},"\u4F8B\u53E5"),p.default.createElement("ul",{className:"wa-examples"},f.ex.map((y,z)=>{let B=z===0?"ex":"ex2",oe=W(f,G[B]);return p.default.createElement("li",{key:z},f.ex.length>1?p.default.createElement("span",{className:`wa-ex-tag ${z?"is-ielts":""}`},z?"\u96C5\u601D\u8BED\u5883":"\u65E5\u5E38"):null,p.default.createElement("p",{className:"wa-ex-en",lang:"en"},p.default.createElement(ie,{atlas:t,progress:a,text:y.en,headword:e.word,onOpenWord:c}),oe?p.default.createElement(Z,{audioKey:`${B}:${e.id}`,url:q(B,e.id),size:14,className:"wa-ex-speak",title:"\u64AD\u653E\u4F8B\u53E5\u6717\u8BFB"}):null),p.default.createElement("p",{className:"wa-ex-zh"},y.zh))}))):null,(f.col||[]).length>0?p.default.createElement("section",{className:"wa-block"},p.default.createElement("h3",{className:"wa-eyebrow"},"\u5E38\u7528\u642D\u914D"),p.default.createElement("ul",{className:"wa-collocations"},f.col.map(y=>{let z=Zt(y);return p.default.createElement("li",{key:y},p.default.createElement("span",{lang:"en"},z.en),z.zh?p.default.createElement("small",null,z.zh):null)}))):null,(f.fam||[]).length>0||(f.syn||[]).length>0||(f.ant||[]).length>0?p.default.createElement("section",{className:"wa-block wa-relations"},(f.fam||[]).length>0?p.default.createElement("div",null,p.default.createElement("h3",{className:"wa-eyebrow"},"\u8BCD\u65CF"),p.default.createElement("p",null,f.fam.map(y=>{let z=y.replace(/\s*\(.*\)\s*$/,"").trim().toLowerCase(),B=t.words.find(oe=>oe.word.toLowerCase()===z);return B?p.default.createElement("button",{key:y,type:"button",className:"wa-link",onClick:()=>c(B.id)},y):p.default.createElement("span",{key:y},y)}))):null,(f.syn||[]).length>0?p.default.createElement("div",null,p.default.createElement("h3",{className:"wa-eyebrow"},"\u8FD1\u4E49"),p.default.createElement("p",null,f.syn.map(y=>p.default.createElement("span",{key:y},y)))):null,(f.ant||[]).length>0?p.default.createElement("div",null,p.default.createElement("h3",{className:"wa-eyebrow"},"\u53CD\u4E49"),p.default.createElement("p",null,f.ant.map(y=>p.default.createElement("span",{key:y},y)))):null):null,f.tip?p.default.createElement("aside",{className:"wa-tip"},p.default.createElement(L,{name:"sparkle",size:17}),p.default.createElement("p",null,f.tip)):null,f.note?p.default.createElement("p",{className:"wa-usage-note"},"\u7528\u6CD5\u63D0\u9192\uFF1A",f.note):null),p.default.createElement("div",{className:"wa-detail-footer"},p.default.createElement("div",{className:"wa-detail-memory"},_?p.default.createElement(p.default.Fragment,null,p.default.createElement("span",null,"\u8BB0\u5FC6\u7A33\u5B9A\u5EA6 ",_.s<1?"<1":Math.round(_.s)," \u5929"),p.default.createElement("span",null,"\u5DF2\u590D\u4E60 ",_.reps," \u6B21")):p.default.createElement("span",null,"\u8FD8\u6CA1\u5B66\u8FC7\u8FD9\u4E2A\u8BCD")),p.default.createElement("div",{className:"wa-detail-actions"},p.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:()=>u(e.id),disabled:!!_},p.default.createElement(L,{name:"check",size:15})," ",_?"\u5DF2\u5728\u590D\u4E60\u4E2D":"\u6807\u8BB0\u4E3A\u5DF2\u5B66"),p.default.createElement("div",{className:"wa-detail-nav"},p.default.createElement("button",{type:"button",className:"wa-icon-btn",onClick:n,disabled:!i,"aria-label":"\u4E0A\u4E00\u4E2A\u8BCD"},p.default.createElement(L,{name:"chevronLeft",size:18})),p.default.createElement("button",{type:"button",className:"wa-icon-btn",onClick:s,disabled:!o,"aria-label":"\u4E0B\u4E00\u4E2A\u8BCD"},p.default.createElement(L,{name:"chevronRight",size:18})))))):null)))}var C=J(require("react"),1);var $e=96;function Ja({atlas:t,word:e,progress:a,onOpen:r,onToggleBookmark:n}){let s=a.cards[e.id],i=a.bookmarks.includes(e.id),o=t.topics.find(c=>c.slug===e.topic)?.zh||e.topicZh;return C.default.createElement("article",{className:`wa-card ${s?"is-learned":""}`},C.default.createElement("div",{className:"wa-card-hit",role:"button",tabIndex:0,onClick:()=>r(e.id),onKeyDown:c=>{(c.key==="Enter"||c.key===" ")&&(c.preventDefault(),r(e.id))},"aria-label":`\u67E5\u770B ${e.word}`},C.default.createElement("div",{className:"wa-card-art"},C.default.createElement(V,{id:e.id,word:e.word}),s?C.default.createElement("span",{className:"wa-card-dot",title:"\u5DF2\u5728\u590D\u4E60\u4E2D"}):null),C.default.createElement("div",{className:"wa-card-body"},C.default.createElement("div",{className:"wa-card-title"},C.default.createElement("h3",{lang:"en"},e.word),C.default.createElement(se,{level:e.cefr})),C.default.createElement("p",{className:"wa-card-ipa"},e.ipa),C.default.createElement("p",{className:"wa-card-zh"},e.zh),C.default.createElement("p",{className:"wa-card-topic"},o))),C.default.createElement("button",{type:"button",className:`wa-card-heart ${i?"is-on":""}`,onClick:c=>{c.stopPropagation(),n(e.id)},"aria-pressed":i,"aria-label":i?"\u53D6\u6D88\u6536\u85CF":"\u6536\u85CF",title:i?"\u53D6\u6D88\u6536\u85CF":"\u6536\u85CF"},C.default.createElement(L,{name:"heart",size:16,filled:i})))}function we({atlas:t,words:e,progress:a,onOpen:r,onToggleBookmark:n}){let[s,i]=(0,C.useState)($e),o=(0,C.useRef)(null);(0,C.useEffect)(()=>{i($e)},[e]),(0,C.useEffect)(()=>{let w=o.current;if(!w||s>=e.length)return;let u=new IntersectionObserver(k=>{k.some(b=>b.isIntersecting)&&i(b=>Math.min(b+$e,e.length))},{rootMargin:"600px 0px"});return u.observe(w),()=>u.disconnect()},[s,e.length]);let c=e.slice(0,s);return C.default.createElement("div",{className:"wa-grid-wrap"},C.default.createElement("p",{className:"wa-grid-count"},"\u5171 ",e.length.toLocaleString("en-US")," \u4E2A\u8BCD",s<e.length?` \xB7 \u5DF2\u663E\u793A ${s}`:""),C.default.createElement("div",{className:"wa-grid"},c.map(w=>C.default.createElement(Ja,{key:w.id,atlas:t,word:w,progress:a,onOpen:r,onToggleBookmark:n}))),s<e.length?C.default.createElement("div",{ref:o,className:"wa-more"},C.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:()=>i(w=>w+$e)},"\u52A0\u8F7D\u66F4\u591A\uFF08\u5269\u4F59 ",(e.length-s).toLocaleString("en-US"),"\uFF09")):null)}var l=J(require("react"),1);var Jt=100;function Va(t){let e=[...t];for(let a=e.length-1;a>0;a-=1){let r=Math.floor(Math.random()*(a+1));[e[a],e[r]]=[e[r],e[a]]}return e}function Xa(t,e){let a=Date.now(),r=e.cards,n=[];for(let w of t.words){let u=r[w.id];u&&u.due<=a&&n.push({id:w.id,word:w,card:u,due:u.due})}n.sort((w,u)=>w.due-u.due);let s=n.slice(0,Jt),i=new Set(s.map(w=>w.id)),c=Va(t.words.filter(w=>!r[w.id]&&!i.has(w.id))).slice(0,Math.max(0,e.settings.dailyNew)).map(w=>({id:w.id,word:w,card:void 0}));return[...s,...c]}function Vt(t,e){let a=Date.now(),r=0,n=0,s=0;for(let o of t.words){let c=e.cards[o.id];c&&(n+=1,c.due<=a&&(r+=1),Ht(c)&&(s+=1))}let i=t.count-n;return{due:r,learned:n,mastered:s,fresh:i}}function Qa({atlas:t,progress:e,onStart:a}){let r=(0,l.useMemo)(()=>Vt(t,e),[t,e]),n=Math.min(e.settings.dailyNew,r.fresh),s=Math.min(r.due,Jt)+n,i=(o,c)=>{K(w=>({...w,settings:{...w.settings,[o]:c}}))};return l.default.createElement("div",{className:"wa-review-intro"},l.default.createElement("div",{className:"wa-review-hero"},l.default.createElement("span",{className:"wa-review-orbit","aria-hidden":"true"},l.default.createElement(L,{name:"sparkle",size:30})),l.default.createElement("h2",null,"\u4ECA\u65E5\u590D\u4E60"),l.default.createElement("p",null,"FSRS \u4F1A\u6309\u8BB0\u5FC6\u7A33\u5B9A\u5EA6\u5B89\u6392\u590D\u4E60\u3002\u5230\u671F\u5C31\u590D\u4E60\uFF0C\u8BB0\u5F97\u7262\u7684\u8BCD\u4F1A\u8D8A\u9694\u8D8A\u4E45\u3002")),l.default.createElement("div",{className:"wa-review-stats"},l.default.createElement("div",{className:"wa-stat"},l.default.createElement("strong",null,r.due),l.default.createElement("span",null,"\u5230\u671F\u590D\u4E60")),l.default.createElement("div",{className:"wa-stat"},l.default.createElement("strong",null,n),l.default.createElement("span",null,"\u4ECA\u65E5\u65B0\u8BCD")),l.default.createElement("div",{className:"wa-stat"},l.default.createElement("strong",null,r.learned.toLocaleString("en-US")),l.default.createElement("span",null,"\u5DF2\u5B66\u8BCD")),l.default.createElement("div",{className:"wa-stat"},l.default.createElement("strong",null,r.mastered.toLocaleString("en-US")),l.default.createElement("span",null,"\u5DF2\u638C\u63E1"))),l.default.createElement("div",{className:"wa-review-settings"},l.default.createElement("label",null,"\u6BCF\u65E5\u65B0\u8BCD",l.default.createElement("select",{value:e.settings.dailyNew,onChange:o=>i("dailyNew",Number(o.target.value))},[5,10,15,20,30,50].map(o=>l.default.createElement("option",{key:o,value:o},o)))),l.default.createElement("label",null,"\u76EE\u6807\u8BB0\u5FC6\u7387",l.default.createElement("select",{value:e.settings.retention,onChange:o=>i("retention",Number(o.target.value))},[.8,.85,.9,.95].map(o=>l.default.createElement("option",{key:o,value:o},Math.round(o*100),"%"))))),l.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary wa-start-btn",onClick:a,disabled:s===0},s>0?`\u5F00\u59CB\u590D\u4E60\uFF08${s} \u4E2A\u8BCD\uFF09`:"\u4ECA\u5929\u6CA1\u6709\u8981\u590D\u4E60\u7684\u8BCD"),s===0?l.default.createElement("p",{className:"wa-review-done-hint"},l.default.createElement(L,{name:"check",size:15})," \u90FD\u590D\u4E60\u5B8C\u4E86\uFF0C\u53BB\u56FE\u9274\u91CC\u8BA4\u8BC6\u51E0\u4E2A\u65B0\u8BCD\u5427\u3002"):null,l.default.createElement("p",{className:"wa-review-tip"},"\u590D\u4E60\u8FDB\u5EA6\u4F1A\u81EA\u52A8\u4FDD\u5B58\u5230\u672C\u673A ",l.default.createElement("code",null,"$DSH_HOME/word-atlas-dsh/progress.json"),"\u3002"))}function Ra({session:t,atlas:e,progress:a,onAgain:r,onExit:n}){let s=(0,l.useMemo)(()=>Vt(e,a),[e,a]),{reviewed:i,correct:o,newWords:c}=t.stats,w=i?Math.round(o/i*100):0;return l.default.createElement("div",{className:"wa-review-summary"},l.default.createElement("span",{className:"wa-review-orbit is-done","aria-hidden":"true"},l.default.createElement(L,{name:"check",size:28})),l.default.createElement("h2",null,"\u672C\u7EC4\u5B8C\u6210"),l.default.createElement("div",{className:"wa-review-stats"},l.default.createElement("div",{className:"wa-stat"},l.default.createElement("strong",null,i),l.default.createElement("span",null,"\u590D\u4E60\u8BCD\u6570")),l.default.createElement("div",{className:"wa-stat"},l.default.createElement("strong",null,c),l.default.createElement("span",null,"\u65B0\u5B66\u8BCD")),l.default.createElement("div",{className:"wa-stat"},l.default.createElement("strong",null,w,"%"),l.default.createElement("span",null,"\u9996\u6B21\u7B54\u5BF9\u7387")),l.default.createElement("div",{className:"wa-stat"},l.default.createElement("strong",null,s.due),l.default.createElement("span",null,"\u5269\u4F59\u5230\u671F"))),l.default.createElement("div",{className:"wa-review-summary-actions"},l.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary",onClick:r},"\u518D\u7EC3\u4E00\u7EC4"),l.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:n},"\u8FD4\u56DE\u56FE\u9274")))}function er({atlas:t,progress:e,item:a,entry:r,stats:n,onReveal:s,onGrade:i,onOpenWord:o}){let c=Date.now(),w=jt(a.card,c,e.settings.retention),u=!a.card,k=b=>b>=h.Good;return l.default.createElement("div",{className:"wa-review-card"},l.default.createElement("div",{className:"wa-review-art"},l.default.createElement(V,{id:a.word.id,word:a.word.word,full:!0,alt:`${a.word.word} \u63D2\u753B`})),l.default.createElement("div",{className:"wa-review-body"},l.default.createElement("div",{className:"wa-review-tags"},l.default.createElement(se,{level:a.word.cefr}),u?l.default.createElement("span",{className:"wa-chip wa-chip-new"},"\u65B0\u8BCD"):l.default.createElement("span",{className:"wa-chip"},"\u5230\u671F\u590D\u4E60")),l.default.createElement("h2",{className:"wa-review-word",lang:"en"},a.word.word),l.default.createElement("div",{className:"wa-pron-row"},l.default.createElement("span",{className:"wa-ipa"},r?.uk||a.word.ipa),W(a.word,G.uk)?l.default.createElement(Z,{audioKey:`uk:${a.word.id}`,url:q("uk",a.word.id),label:"\u82F1\u97F3"}):null,W(a.word,G.us)&&r?.us?l.default.createElement(Z,{audioKey:`us:${a.word.id}`,url:q("us",a.word.id),label:"\u7F8E\u97F3"}):null),n.revealed?l.default.createElement("div",{className:"wa-answer"},l.default.createElement("ol",{className:"wa-senses"},(r?.senses||[]).map((b,f)=>l.default.createElement("li",{key:f},b.pos?l.default.createElement("span",{className:"wa-pos"},b.pos):null,l.default.createElement("span",{className:"wa-zh"},b.zh),b.en?l.default.createElement("span",{className:"wa-en",lang:"en"},b.en):null))),r?.ex?.[0]?l.default.createElement("p",{className:"wa-review-example",lang:"en"},l.default.createElement(ie,{atlas:t,progress:e,text:r.ex[0].en,headword:a.word.word,onOpenWord:o})):null,r?.ex?.[0]?.zh?l.default.createElement("p",{className:"wa-review-example-zh"},r.ex[0].zh):null,r?.tip?l.default.createElement("p",{className:"wa-review-tip-line"},r.tip):null,l.default.createElement("div",{className:"wa-grades"},Xe.map(b=>l.default.createElement("button",{type:"button",key:b,className:`wa-grade wa-grade-${b}`,onClick:()=>i(b)},l.default.createElement("span",{className:"wa-grade-label"},Ot[b]),l.default.createElement("span",{className:"wa-grade-interval"},Le(w[b]))))),l.default.createElement("p",{className:"wa-grade-hint"},"\u53EA\u6709\u9996\u6B21\u4F5C\u7B54\u8BA1\u5165\u6B63\u786E\u7387\uFF1B\u952E\u76D8 1\u20134 \u4E5F\u53EF\u4EE5\u8BC4\u5206\u3002")):l.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary wa-reveal-btn",onClick:s},"\u663E\u793A\u7B54\u6848")))}function De({atlas:t,progress:e,onExit:a,onOpenWord:r}){let[n,s]=(0,l.useState)(null),[i,o]=(0,l.useState)(null),[c,w]=(0,l.useState)(!1),u=n&&!n.finished?n.queue[n.index]:null;(0,l.useEffect)(()=>{if(!u){o(null);return}let E=!0;return o(null),w(!1),he(t,u.id).then(_=>{E&&o(_)}).catch(()=>{E&&w(!0)}),()=>{E=!1}},[t,u?.id]);let k=(0,l.useCallback)(()=>{let E=Xa(t,e);s({queue:E,index:0,revealed:!1,finished:!1,stats:{reviewed:0,correct:0,newWords:0},startedAt:Date.now()})},[t,e]),b=(0,l.useCallback)(()=>{s(E=>E&&!E.revealed?{...E,revealed:!0}:E)},[]),f=(0,l.useCallback)(E=>{let _=n?.queue[n.index];if(!_)return;let M=Ee(_.card,E,Date.now(),e.settings.retention),D=E>=h.Good;K(y=>({...y,cards:{...y.cards,[_.id]:M},days:ke(y.days,{newWords:_.card?0:1,reviewed:1,correct:D?1:0})})),s(y=>{if(!y||y.finished)return y;let z={reviewed:y.stats.reviewed+1,correct:y.stats.correct+(D?1:0),newWords:y.stats.newWords+(_.card?0:1)},B=y.index+1;return B>=y.queue.length?{...y,index:B,revealed:!1,finished:!0,stats:z}:{...y,index:B,revealed:!1,stats:z}})},[n,e.settings.retention]);if((0,l.useEffect)(()=>{if(!u)return;let E=_=>{if(_.target instanceof HTMLElement&&/^(INPUT|SELECT|TEXTAREA)$/.test(_.target.tagName))return;if(!n.revealed){(_.code==="Space"||_.key==="Enter")&&(_.preventDefault(),b());return}let M={1:h.Again,2:h.Hard,3:h.Good,4:h.Easy};M[_.key]&&(_.preventDefault(),f(M[_.key]))};return window.addEventListener("keydown",E),()=>window.removeEventListener("keydown",E)},[u,n?.revealed,b,f]),!t)return null;if(!n)return l.default.createElement(Qa,{atlas:t,progress:e,onStart:k});if(n.finished)return l.default.createElement(Ra,{session:n,atlas:t,progress:e,onAgain:()=>s(null),onExit:a});if(!u)return l.default.createElement(ue,{title:"\u8FD9\u4E00\u7EC4\u590D\u4E60\u5B8C\u6210\u4E86",icon:"check"});let g=n.index,N=n.queue.length,T=u;return l.default.createElement("div",{className:"wa-review-shell"},l.default.createElement("div",{className:"wa-review-top"},l.default.createElement("div",{className:"wa-review-progress"},l.default.createElement("div",{className:"wa-review-bar","aria-hidden":"true"},l.default.createElement("span",{style:{width:`${Math.round(g/N*100)}%`}})),l.default.createElement("span",{className:"wa-review-counter"},g+1," / ",N)),l.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:()=>s(null)},l.default.createElement(L,{name:"close",size:15})," \u7ED3\u675F")),c?l.default.createElement("p",{className:"wa-error"},"\u8BCD\u6761\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u8BCD\u5149\u63D2\u4EF6\u8DEF\u7531\u662F\u5426\u6B63\u5E38\u3002"):null,!i&&!c?l.default.createElement("div",{className:"wa-review-loading"},l.default.createElement(ne,{label:"\u52A0\u8F7D\u8BCD\u6761\u2026"})):null,l.default.createElement(er,{atlas:t,progress:e,item:T,entry:i,stats:{revealed:n.revealed},onReveal:b,onGrade:f,onOpenWord:r}))}var d=J(require("react"),1);var Rt="/word-atlas/api/offline",Xt=[{id:"thumb",label:"\u7F29\u7565\u56FE",hint:"\u7F51\u683C / \u67E5\u8BCD\u6D6E\u7A97",bytes:84*1024*1024},{id:"img",label:"\u5B8C\u6574\u63D2\u753B",hint:"\u8BCD\u5361\u5927\u56FE",bytes:199*1024*1024},{id:"audio",label:"\u53D1\u97F3",hint:"\u82F1\u97F3 / \u7F8E\u97F3 / \u4F8B\u53E5\u6717\u8BFB",bytes:418*1024*1024}];function Ie(t){if(!Number.isFinite(t)||t<=0)return"0 B";let e=["B","KB","MB","GB"],a=t,r=0;for(;a>=1024&&r<e.length-1;)a/=1024,r+=1;return`${a.toFixed(r>=2?1:0)} ${e[r]}`}function tr(t){if(!Number.isFinite(t)||t<=0)return"\u2014";let e=Math.round(t/1e3);if(e<60)return`${e} \u79D2`;let a=Math.round(e/60);return a<60?`${a} \u5206\u949F`:`${(a/60).toFixed(1)} \u5C0F\u65F6`}function Te({value:t,options:e,onChange:a,ariaLabel:r}){return d.default.createElement("div",{className:"wa-seg",role:"group","aria-label":r},e.map(n=>d.default.createElement("button",{type:"button",key:n.value,className:t===n.value?"is-on":"",onClick:()=>a(n.value)},n.label)))}function Qt({on:t,onChange:e,label:a,hint:r}){return d.default.createElement("label",{className:"wa-switch-row"},d.default.createElement("span",null,d.default.createElement("b",null,a),r?d.default.createElement("small",null,r):null),d.default.createElement("button",{type:"button",role:"switch","aria-checked":t,"aria-label":a,className:`wa-switch ${t?"is-on":""}`,onClick:()=>e(!t)},d.default.createElement("span",null)))}function ar({offline:t,refresh:e}){let[a,r]=(0,d.useState)(["thumb"]),[n,s]=(0,d.useState)("remote"),[i,o]=(0,d.useState)(!1),[c,w]=(0,d.useState)(""),u=t?.state==="downloading";(0,d.useEffect)(()=>{t?.contentDirReady&&s("repo")},[t?.contentDirReady]);let k=async(M,D,y)=>{o(!0),w("");try{let z=await fetch(`${Rt}${D}`,{method:M,headers:y?{"Content-Type":"application/json"}:void 0,body:y?JSON.stringify(y):void 0}),B=await z.json().catch(()=>({}));return(!z.ok||B.ok===!1)&&w(B.error||`\u8BF7\u6C42\u5931\u8D25\uFF08HTTP ${z.status}\uFF09`),await e(),B}catch(z){return w(String(z?.message||z)),null}finally{o(!1)}},b=M=>{r(D=>D.includes(M)?D.filter(y=>y!==M):[...D,M])},f=Xt.filter(M=>a.includes(M.id)).reduce((M,D)=>M+D.bytes,0),g=t?.done??0,N=t?.total??0,T=N>0?Math.min(100,Math.round(g/N*100)):0,E=t?.state==="done"||(t?.done??0)>0,_=!!t?.contentDirReady;return d.default.createElement("section",{className:"wa-panel"},d.default.createElement("h3",{className:"wa-eyebrow"},"\u79BB\u7EBF\u7D20\u6750"),d.default.createElement("p",{className:"wa-panel-hint"},"\u8BCD\u5E93\u6587\u5B57\u5DF2\u5185\u7F6E\uFF1B\u8FD9\u91CC\u628A\u63D2\u753B\u4E0E\u53D1\u97F3\u4E0B\u8F7D\u5230\u672C\u673A\uFF0C\u65AD\u7F51\u4E5F\u80FD\u770B\u56FE\u3001\u542C\u97F3\u3002",t?.contentDirReady?" \u5F53\u524D\u5DF2\u68C0\u6D4B\u5230\u672C\u673A\u8BCD\u5149\u4ED3\u5E93\uFF0C\u7D20\u6750\u53EF\u76F4\u63A5\u4ECE\u672C\u5730\u8BFB\u53D6\u3002":""),d.default.createElement("div",{className:"wa-offline-source"},d.default.createElement("span",{className:`wa-dot ${_||E?"is-on":""}`}),_?`\u672C\u673A\u8BCD\u5149\u4ED3\u5E93\uFF1A${t?.contentDir}`:E?`\u79BB\u7EBF\u5305\uFF1A${Ie(t?.bytes??0)}\uFF08${g.toLocaleString("en-US")}${N?` / ${N.toLocaleString("en-US")}`:""} \u4E2A\u6587\u4EF6\uFF09`:"\u5B98\u65B9\u7AD9\u70B9\u6309\u9700\u52A0\u8F7D\uFF08\u9996\u6B21\u770B\u56FE/\u542C\u97F3\u9700\u8981\u8054\u7F51\uFF09",t?.autoCache?" \xB7 \u6309\u9700\u7F13\u5B58\u5DF2\u5F00\u542F":""),t?.dir?d.default.createElement("p",{className:"wa-panel-path"},"\u4FDD\u5B58\u4F4D\u7F6E\uFF1A",t.dir):null,d.default.createElement("div",{className:"wa-tier-list"},Xt.map(M=>d.default.createElement("label",{key:M.id,className:"wa-tier"},d.default.createElement("input",{type:"checkbox",checked:a.includes(M.id),disabled:u,onChange:()=>b(M.id)}),d.default.createElement("span",null,d.default.createElement("b",null,M.label),d.default.createElement("small",null,M.hint," \xB7 \u7EA6 ",Ie(M.bytes)))))),d.default.createElement("div",{className:"wa-offline-actions"},d.default.createElement("select",{value:n,onChange:M=>s(M.target.value),disabled:u,"aria-label":"\u4E0B\u8F7D\u6765\u6E90"},d.default.createElement("option",{value:"remote"},"\u5B98\u65B9\u7AD9\u70B9"),d.default.createElement("option",{value:"repo",disabled:!t?.contentDirReady},"\u672C\u673A\u8BCD\u5149\u4ED3\u5E93")),u?d.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",disabled:i,onClick:()=>k("POST","/cancel")},"\u53D6\u6D88\u4E0B\u8F7D"):d.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary",disabled:i||a.length===0,onClick:()=>k("POST","/start",{tiers:a,source:n})},"\u5F00\u59CB\u4E0B\u8F7D",f?`\uFF08\u7EA6 ${Ie(f)}\uFF09`:""),d.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",disabled:i||u||!E,onClick:()=>{confirm("\u5220\u9664\u5DF2\u4E0B\u8F7D\u7684\u79BB\u7EBF\u7D20\u6750\uFF1F\u8BCD\u5E93\u6587\u5B57\u4E0D\u53D7\u5F71\u54CD\u3002")&&k("DELETE","")}},"\u5220\u9664\u79BB\u7EBF\u5305")),u||g>0?d.default.createElement("div",{className:"wa-progress"},d.default.createElement("div",{className:"wa-progress-bar"},d.default.createElement("span",{style:{width:`${T}%`}})),d.default.createElement("div",{className:"wa-progress-meta"},d.default.createElement("span",null,u?"\u4E0B\u8F7D\u4E2D":t?.state==="cancelled"?"\u5DF2\u53D6\u6D88":"\u5DF2\u5B8C\u6210"," \xB7 ",T,"%"),d.default.createElement("span",null,g.toLocaleString("en-US"),N?` / ${N.toLocaleString("en-US")}`:""," \u4E2A\u6587\u4EF6",t?.speed?` \xB7 ${Ie(t.speed)}/s`:"",u&&t?.etaMs?` \xB7 \u5269\u7EA6 ${tr(t.etaMs)}`:"",t?.failed?` \xB7 \u5931\u8D25 ${t.failed}`:""))):null,c?d.default.createElement("p",{className:"wa-error-text"},c):null,d.default.createElement("p",{className:"wa-panel-note"},"\u4E0B\u8F7D\u6E90\uFF1A\u5B98\u65B9\u7AD9\u70B9\uFF08CC BY 4.0 \u7D20\u6750\uFF09\u6216\u672C\u673A\u8BCD\u5149\u4ED3\u5E93\uFF1B\u754C\u9762\u97F3\u6548\u4E0D\u5728\u79BB\u7EBF\u5305\u5185\u3002 \u6309\u9700\u7F13\u5B58\u53EF\u5728 profile \u7684 ",d.default.createElement("code",null,"cordis.patch.yml")," \u4E2D\u8BBE\u7F6E ",d.default.createElement("code",null,"autoCache: true"),"\u3002"))}function Be({atlas:t,progress:e}){let[a,r]=(0,d.useState)(null),[n,s]=(0,d.useState)(""),[i,o]=(0,d.useState)(""),c=(0,d.useRef)(null),w=e.settings,u=(0,d.useCallback)(async()=>{try{let g=await fetch(Rt,{cache:"no-store"});if(!g.ok)throw new Error(`HTTP ${g.status}`);let N=await g.json();r(N),s("")}catch{s("\u79BB\u7EBF\u670D\u52A1\u4E0D\u53EF\u7528\uFF0C\u8BF7\u786E\u8BA4 Host \u63D2\u4EF6\u5DF2\u542F\u7528\u3002")}},[]);(0,d.useEffect)(()=>{u()},[u]),(0,d.useEffect)(()=>{if(a?.state!=="downloading")return;let g=setInterval(u,1200);return()=>clearInterval(g)},[a?.state,u]);let k=g=>K(N=>({...N,settings:{...N.settings,...g}})),b=()=>{let g=new Blob([zt()],{type:"application/json"}),N=URL.createObjectURL(g),T=document.createElement("a");T.href=N,T.download=`word-atlas-backup-${new Date().toISOString().slice(0,10)}.json`,T.click(),setTimeout(()=>URL.revokeObjectURL(N),1e3),o("\u5DF2\u5BFC\u51FA\u5907\u4EFD\u6587\u4EF6")},f=async g=>{let N=await g.text(),T=At(N);o(T.ok?`\u5DF2\u6062\u590D ${T.cards} \u4E2A\u8BCD\u7684\u8BB0\u5FC6`:T.error)};return d.default.createElement("div",{className:"wa-settings"},d.default.createElement("section",{className:"wa-panel"},d.default.createElement("h3",{className:"wa-eyebrow"},"\u5B66\u4E60\u8BBE\u7F6E"),d.default.createElement("div",{className:"wa-field"},d.default.createElement("div",null,d.default.createElement("b",null,"\u6BCF\u65E5\u65B0\u8BCD"),d.default.createElement("small",null,"\u590D\u4E60\u4E0D\u8BBE\u4E0A\u9650\uFF0C\u7B97\u6CD5\u53EA\u5B89\u6392\u5FEB\u8981\u9057\u5FD8\u7684\u8BCD\u3002")),d.default.createElement(Te,{ariaLabel:"\u6BCF\u65E5\u65B0\u8BCD",value:w.dailyNew,options:[5,10,15,20,30].map(g=>({value:g,label:String(g)})),onChange:g=>k({dailyNew:g})})),d.default.createElement("div",{className:"wa-field"},d.default.createElement("div",null,d.default.createElement("b",null,"\u4ECE\u54EA\u4E2A\u96BE\u5EA6\u5F00\u59CB"),d.default.createElement("small",null,"\u5B66\u4E60\u4F1A\u8BDD\u4F1A\u8DF3\u8FC7\u66F4\u7B80\u5355\u7684\u7EA7\u522B\uFF08v0.3 \u751F\u6548\uFF09\u3002")),d.default.createElement(Te,{ariaLabel:"\u8D77\u70B9\u96BE\u5EA6",value:w.startLevel,options:t.cefr.map((g,N)=>({value:N,label:g})),onChange:g=>k({startLevel:g})})),d.default.createElement("div",{className:"wa-field"},d.default.createElement("div",null,d.default.createElement("b",null,"\u76EE\u6807\u8BB0\u5FC6\u7387"),d.default.createElement("small",null,"\u8D8A\u9AD8\u590D\u4E60\u8D8A\u9891\u7E41\uFF0C90% \u662F\u5927\u591A\u6570\u4EBA\u7684\u751C\u70B9\u3002")),d.default.createElement(Te,{ariaLabel:"\u76EE\u6807\u8BB0\u5FC6\u7387",value:w.retention,options:[.85,.9,.95].map(g=>({value:g,label:`${Math.round(g*100)}%`})),onChange:g=>k({retention:g})})),d.default.createElement("div",{className:"wa-field"},d.default.createElement("div",null,d.default.createElement("b",null,"\u53D1\u97F3\u504F\u597D"),d.default.createElement("small",null,"\u8BCD\u6761\u8BE6\u60C5\u91CC\u4E24\u79CD\u53D1\u97F3\u90FD\u53EF\u4EE5\u64AD\u653E\u3002")),d.default.createElement(Te,{ariaLabel:"\u53D1\u97F3\u504F\u597D",value:w.accent,options:[{value:"uk",label:"\u82F1\u5F0F"},{value:"us",label:"\u7F8E\u5F0F"}],onChange:g=>k({accent:g})})),d.default.createElement(Qt,{label:"\u81EA\u52A8\u64AD\u653E\u53D1\u97F3",hint:"\u5B66\u4E60\u4F1A\u8BDD\u4E0A\u7EBF\u540E\u751F\u6548",on:w.autoplay,onChange:g=>k({autoplay:g})}),d.default.createElement(Qt,{label:"\u590D\u4E60\u65F6\u52A0\u5165\u62FC\u5199\u9898",hint:"\u5B66\u4E60\u4F1A\u8BDD\u4E0A\u7EBF\u540E\u751F\u6548",on:w.spell,onChange:g=>k({spell:g})})),d.default.createElement(ar,{offline:a,refresh:u}),n?d.default.createElement("p",{className:"wa-error-text"},n):null,d.default.createElement("section",{className:"wa-panel"},d.default.createElement("h3",{className:"wa-eyebrow"},"\u6570\u636E\u4E0E\u5907\u4EFD"),d.default.createElement("p",{className:"wa-panel-hint"},"\u8FDB\u5EA6\u4FDD\u5B58\u5728\u672C\u673A\uFF08Host \u6587\u4EF6 + \u6D4F\u89C8\u5668\u955C\u50CF\uFF09\uFF0C\u65E0\u9700\u8D26\u53F7\u3002\u6362\u8BBE\u5907\u65F6\u5BFC\u51FA\u5907\u4EFD\u518D\u5BFC\u5165\u5373\u53EF\uFF0C\u683C\u5F0F\u4E0E\u8BCD\u5149\u7EBF\u4E0A\u7248\u517C\u5BB9\u3002"),d.default.createElement("div",{className:"wa-backup-actions"},d.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:b},d.default.createElement(L,{name:"book",size:15})," \u5BFC\u51FA\u5907\u4EFD"),d.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost",onClick:()=>c.current?.click()},d.default.createElement(L,{name:"refresh",size:15})," \u5BFC\u5165\u5907\u4EFD"),d.default.createElement("input",{ref:c,type:"file",accept:"application/json,.json",hidden:!0,onChange:g=>{let N=g.target.files?.[0];g.target.value="",N&&f(N)}}),d.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost wa-danger",onClick:()=>{confirm("\u786E\u5B9A\u6E05\u7A7A\u5168\u90E8\u5B66\u4E60\u8BB0\u5F55\uFF1F\u6B64\u64CD\u4F5C\u65E0\u6CD5\u64A4\u9500\uFF0C\u5EFA\u8BAE\u5148\u5BFC\u51FA\u5907\u4EFD\u3002")&&(Et(),o("\u5B66\u4E60\u8BB0\u5F55\u5DF2\u6E05\u7A7A"))}},"\u6E05\u7A7A\u5B66\u4E60\u8BB0\u5F55")),i?d.default.createElement("p",{className:"wa-panel-note"},i):null,d.default.createElement("p",{className:"wa-panel-note"},"\u5DF2\u5B66 ",Object.keys(e.cards).length.toLocaleString("en-US")," \u8BCD \xB7 \u6536\u85CF ",e.bookmarks.length," \u8BCD",e.savedAt?` \xB7 \u4E0A\u6B21\u4FDD\u5B58 ${new Date(e.savedAt).toLocaleString()}`:"")),d.default.createElement("section",{className:"wa-panel"},d.default.createElement("h3",{className:"wa-eyebrow"},"\u5173\u4E8E"),d.default.createElement("p",{className:"wa-panel-hint"},"\u8BCD\u5149 \xB7 Word Atlas DSH \u63D2\u4EF6 v0.2.0 \xB7 \u8BCD\u5E93/\u63D2\u753B/\u5F55\u97F3\u6765\u81EA"," ",d.default.createElement("a",{href:"https://github.com/designfuchen/word-atlas",target:"_blank",rel:"noreferrer"},"designfuchen/word-atlas"),"\uFF08Word Atlas contributors\uFF0CCC BY 4.0\uFF09\uFF1B\u63D2\u4EF6\u4EE3\u7801 MIT\uFF1B\u590D\u4E60\u8C03\u5EA6 ts-fsrs\u3002"),d.default.createElement("p",{className:"wa-panel-path"},"\u63D2\u4EF6\u4ED3\u5E93\uFF1Agithub.com/MC0571/DSH-Plugin-Word-Atlas")))}var rr=h.Good;function nr(){return m.default.createElement("svg",{viewBox:"0 0 64 64",width:"34",height:"34","aria-hidden":"true"},m.default.createElement("defs",null,m.default.createElement("linearGradient",{id:"wa-brand-gold",x1:"0",y1:"0",x2:"1",y2:"1"},m.default.createElement("stop",{offset:"0",stopColor:"#FFE9A8"}),m.default.createElement("stop",{offset:"0.55",stopColor:"#F5C052"}),m.default.createElement("stop",{offset:"1",stopColor:"#D98E2B"}))),m.default.createElement("rect",{width:"64",height:"64",rx:"15",fill:"var(--dsw-alias-bg-layer-2)"}),m.default.createElement("circle",{cx:"14",cy:"18",r:"1.4",fill:"var(--dsw-alias-label-secondary)",opacity:"0.6"}),m.default.createElement("circle",{cx:"50",cy:"16",r:"1.7",fill:"var(--dsw-alias-label-secondary)",opacity:"0.6"}),m.default.createElement("circle",{cx:"50",cy:"48",r:"1.3",fill:"var(--dsw-alias-label-secondary)",opacity:"0.5"}),m.default.createElement("circle",{cx:"14",cy:"46",r:"1.5",fill:"var(--dsw-alias-label-secondary)",opacity:"0.5"}),m.default.createElement("path",{d:"M32 15 L36.6 27.4 L49 32 L36.6 36.6 L32 49 L27.4 36.6 L15 32 L27.4 27.4 Z",fill:"url(#wa-brand-gold)"}),m.default.createElement("circle",{cx:"32",cy:"32",r:"3.4",fill:"#FFF6D8"}))}var sr=[{id:"atlas",label:"\u56FE\u9274",icon:"book"},{id:"review",label:"\u590D\u4E60",icon:"refresh"},{id:"bookmarks",label:"\u751F\u8BCD\u672C",icon:"heart"},{id:"settings",label:"\u6211\u7684",icon:"user"}];function at(){let[t,e]=(0,m.useState)(null),[a,r]=(0,m.useState)(""),[n,s]=(0,m.useState)("atlas"),[i,o]=(0,m.useState)(""),[c,w]=(0,m.useState)("all"),[u,k]=(0,m.useState)("all"),[b,f]=(0,m.useState)([]),g=kt();(0,m.useEffect)(()=>{_t();let v=!0;return ct().then(I=>{v&&e(I)}).catch(I=>{v&&r(I.message||"\u8BCD\u5E93\u52A0\u8F7D\u5931\u8D25")}),()=>{v=!1}},[]);let N=(0,m.useMemo)(()=>{if(!t)return[];let v=i.trim().toLowerCase();return t.words.filter(I=>c!=="all"&&I.cefr!==c||u!=="all"&&I.topic!==u?!1:v?I.word.toLowerCase().includes(v)||I.zh.toLowerCase().includes(v)||I.ipa.toLowerCase().includes(v):!0)},[t,i,c,u]),T=(0,m.useMemo)(()=>t?g.bookmarks.map(v=>t.byId.get(v)).filter(Boolean):[],[t,g.bookmarks]),E=(0,m.useMemo)(()=>{if(!t)return 0;let v=Date.now(),I=0;for(let na of t.words){let ot=g.cards[na.id];ot&&ot.due<=v&&(I+=1)}return I},[t,g.cards]),_=(0,m.useMemo)(()=>Object.keys(g.cards).length,[g.cards]),M=(0,m.useMemo)(()=>Nt(g.days),[g.days]),D=n==="bookmarks"?T:N,y=b.length>0?b[b.length-1]:null,z=y&&t?t.byId.get(y):null,B=z?D.findIndex(v=>v.id===z.id):-1,oe=b.length>1&&t?t.byId.get(b[b.length-2]):null,nt=v=>f([v]),st=v=>f(I=>I[I.length-1]===v?I:[...I,v]),ta=()=>f(v=>v.slice(0,-1)),Fe=v=>K(I=>Mt(I,v)),aa=v=>K(I=>I.cards[v]?I:{...I,cards:{...I.cards,[v]:Ee(void 0,rr)},days:ke(I.days,{newWords:1})}),ra=()=>K(v=>({...v,settings:{...v.settings,accent:v.settings.accent==="uk"?"us":"uk"}})),it=()=>s("atlas");return m.default.createElement("div",{className:"wa-root"},m.default.createElement("header",{className:"wa-header"},m.default.createElement("div",{className:"wa-brand"},m.default.createElement(nr,null),m.default.createElement("div",{className:"wa-brand-text"},m.default.createElement("h1",null,"\u8BCD\u5149 ",m.default.createElement("span",null,"Word Atlas")),m.default.createElement("p",null,"7,298 \u96C5\u601D\u8BCD \xB7 \u4E00\u8BCD\u4E00\u753B \xB7 FSRS \u95F4\u9694\u590D\u4E60"))),m.default.createElement("div",{className:"wa-toolbar"},m.default.createElement("div",{className:"wa-search"},m.default.createElement(L,{name:"search",size:16}),m.default.createElement("input",{value:i,onChange:v=>{o(v.target.value),n!=="atlas"&&s("atlas")},placeholder:"\u641C\u7D22\u5355\u8BCD / \u4E2D\u6587\u91CA\u4E49","aria-label":"\u641C\u7D22\u5355\u8BCD\u6216\u91CA\u4E49",spellCheck:!1}),i?m.default.createElement("button",{type:"button",className:"wa-search-clear",onClick:()=>o(""),"aria-label":"\u6E05\u7A7A\u641C\u7D22"},m.default.createElement(L,{name:"close",size:14})):null),m.default.createElement("button",{type:"button",className:"wa-btn wa-btn-ghost wa-accent-btn",onClick:ra,title:"\u5207\u6362\u53D1\u97F3\u504F\u597D"},m.default.createElement(L,{name:"globe",size:15})," ",g.settings.accent==="uk"?"\u82F1\u97F3":"\u7F8E\u97F3"),m.default.createElement("button",{type:"button",className:"wa-icon-btn",onClick:()=>s("settings"),"aria-label":"\u8BBE\u7F6E\u4E0E\u5173\u4E8E"},m.default.createElement(L,{name:"info",size:18})))),m.default.createElement("nav",{className:"wa-tabs",role:"tablist","aria-label":"\u8BCD\u5149\u89C6\u56FE"},sr.map(v=>m.default.createElement("button",{key:v.id,type:"button",role:"tab","aria-selected":n===v.id,className:n===v.id?"is-on":"",onClick:()=>s(v.id)},m.default.createElement(L,{name:v.icon,size:16})," ",v.label,v.id==="atlas"&&t?m.default.createElement("span",{className:"wa-tab-count"},t.count.toLocaleString("en-US")):null,v.id==="review"&&E>0?m.default.createElement("span",{className:"wa-tab-badge"},E>999?"999+":E):null,v.id==="bookmarks"&&T.length>0?m.default.createElement("span",{className:"wa-tab-count"},T.length):null)),m.default.createElement("div",{className:"wa-tabs-meta"},m.default.createElement("span",null,"\u5DF2\u5B66 ",_.toLocaleString("en-US")),m.default.createElement("i",null),m.default.createElement("span",null,"\u8FDE\u7EED ",M," \u5929"))),m.default.createElement("main",{className:"wa-main"},a?m.default.createElement(ue,{icon:"info",title:"\u8BCD\u5E93\u8FD8\u6CA1\u51C6\u5907\u597D"},m.default.createElement("p",null,a),m.default.createElement("p",{className:"wa-about-note"},"\u8BF7\u786E\u8BA4 word-atlas \u63D2\u4EF6\u5DF2\u542F\u7528\u3001Host \u8DEF\u7531 ",m.default.createElement("code",null,"/word-atlas/health")," \u53EF\u8BBF\u95EE\uFF1B\u5982\u679C\u63D2\u4EF6\u521A\u5B89\u88C5\uFF0C\u5237\u65B0\u9875\u9762\u518D\u8BD5\u3002")):t?n==="review"?m.default.createElement(De,{atlas:t,progress:g,onExit:it,onOpenWord:st}):n==="settings"?m.default.createElement(Be,{atlas:t,progress:g}):n==="bookmarks"?T.length===0?m.default.createElement(ue,{icon:"heart",title:"\u751F\u8BCD\u672C\u8FD8\u662F\u7A7A\u7684"},m.default.createElement("p",null,"\u5728\u8BCD\u6761\u5361\u7247\u6216\u8BE6\u60C5\u91CC\u70B9 \u2665\uFF0C\u628A\u60F3\u53CD\u590D\u770B\u7684\u8BCD\u6536\u8FDB\u6765\u3002"),m.default.createElement("button",{type:"button",className:"wa-btn wa-btn-primary",onClick:it},"\u53BB\u56FE\u9274")):m.default.createElement(we,{atlas:t,words:T,progress:g,onOpen:nt,onToggleBookmark:Fe}):m.default.createElement(m.default.Fragment,null,m.default.createElement("div",{className:"wa-filters"},m.default.createElement("div",{className:"wa-chips",role:"group","aria-label":"CEFR \u7EA7\u522B"},m.default.createElement("button",{type:"button",className:c==="all"?"is-on":"",onClick:()=>w("all")},"\u5168\u90E8\u7EA7\u522B"),t.cefr.map(v=>m.default.createElement("button",{type:"button",key:v,className:c===v?"is-on":"",onClick:()=>w(v)},v))),m.default.createElement("div",{className:"wa-topics",role:"group","aria-label":"\u8BDD\u9898"},m.default.createElement("button",{type:"button",className:u==="all"?"is-on":"",onClick:()=>k("all")},"\u5168\u90E8\u8BDD\u9898"),t.topics.map(v=>m.default.createElement("button",{type:"button",key:v.slug,className:u===v.slug?"is-on":"",onClick:()=>k(v.slug)},v.zh)))),m.default.createElement(we,{atlas:t,words:N,progress:g,onOpen:nt,onToggleBookmark:Fe}),m.default.createElement("footer",{className:"wa-footer"},"\u8BCD\u5E93 \xB7 \u63D2\u753B \xB7 \u53D1\u97F3\u6765\u81EA"," ",m.default.createElement("a",{href:"https://github.com/designfuchen/word-atlas",target:"_blank",rel:"noreferrer"},"\u8BCD\u5149 \xB7 Word Atlas")," ","\xB7 CC BY 4.0")):m.default.createElement("div",{className:"wa-boot"},m.default.createElement(ne,{label:"\u6B63\u5728\u52A0\u8F7D\u8BCD\u5149\u8BCD\u5E93\u2026"}))),z&&t?m.default.createElement(Ce,{atlas:t,word:z,progress:g,onClose:()=>f([]),onOpenWord:st,onBack:b.length>1?ta:void 0,backLabel:oe?.word,onPrev:()=>{B>0&&f(v=>[...v.slice(0,-1),D[B-1].id])},onNext:()=>{B>=0&&B<D.length-1&&f(v=>[...v.slice(0,-1),D[B+1].id])},hasPrev:B>0,hasNext:B>=0&&B<D.length-1,onToggleBookmark:Fe,onMarkLearned:aa}):null)}var ir="word-atlas-dsh",ea="word-atlas";function or({size:t=18,active:e=!1}){return rt.default.createElement("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:e?"currentColor":"none",stroke:"currentColor",strokeWidth:1.6,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"},rt.default.createElement("path",{d:"M12 3.2l2.25 4.8 5.2.72-3.78 3.65.93 5.19L12 15.1l-4.6 2.46.93-5.19-3.78-3.65 5.2-.72z"}))}var lr=["slots"],dr={App:at,DetailModal:Ce,ReviewView:De,WordGrid:we,Settings:Be,LookupText:ie,createLookupIndex:Re,candidateBases:Qe};function pr(t){if(typeof document<"u"){let e=document.createElement("style");e.setAttribute("data-plugin",ir),e.textContent=dt,document.head.appendChild(e),t.effect(()=>()=>e.remove())}t.effect(()=>t.slots.inject("main",()=>t.slots.register({name:"main",key:ea},at))),t.effect(()=>t.slots.inject("sidebar.panellist",()=>t.slots.register({name:"sidebar.panellist",id:ea,order:22,label:()=>"\u8BCD\u5149 \xB7 Word Atlas"},or)))}

    })(module, exports, require);
    return module.exports;
  },
});
