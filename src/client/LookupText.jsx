import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { audioUrl, hasMedia, MEDIA } from "./data.js";
import { getLookupIndex } from "./lookup.js";
import { AudioButton, Icon, WordImage } from "./ui.jsx";

const TOKEN_RE = /[A-Za-z]+(?:['’][A-Za-z]+)*/g;
const GLUE_RE = /^[,.;:!?…’”»)\]]+/;
const OPEN_EVENT = "word-atlas:lookup-open";

function isHeadwordForm(token, headword) {
  if (!headword) return false;
  const clean = token.toLowerCase();
  const base = headword.toLowerCase();
  return clean === base || clean.startsWith(base);
}

function LookupPopover({ atlas, progress, token, refId, anchor, onClose, onOpenWord }) {
  const panel = useRef(null);
  const [position, setPosition] = useState({ left: 16, top: 16 });
  const word = refId ? atlas.byId.get(refId) : null;
  const accent = progress.settings.accent;

  useLayoutEffect(() => {
    const place = () => {
      const panelWidth = panel.current?.offsetWidth ?? 300;
      const panelHeight = panel.current?.offsetHeight ?? 190;
      const spaceBelow = window.innerHeight - anchor.bottom;
      const top =
        spaceBelow >= panelHeight + 16 || anchor.top < panelHeight + 16
          ? anchor.bottom + 8
          : Math.max(16, anchor.top - panelHeight - 8);
      const left = Math.max(16, Math.min(window.innerWidth - panelWidth - 16, anchor.left + anchor.width / 2 - panelWidth / 2));
      setPosition({ left, top: Math.min(top, window.innerHeight - panelHeight - 16) });
    };
    place();
    const observer = new ResizeObserver(place);
    if (panel.current) observer.observe(panel.current);
    window.addEventListener("resize", place);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", place);
    };
  }, [anchor, token, refId]);

  useEffect(() => {
    const onPointerDown = (event) => {
      if (panel.current?.contains(event.target)) return;
      if (event.target instanceof Element && event.target.closest("[data-wa-lookup-token]")) return;
      onClose();
    };
    const onKeyDown = (event) => {
      if (event.key !== "Escape") return;
      event.stopImmediatePropagation();
      onClose();
    };
    document.addEventListener("pointerdown", onPointerDown, true);
    window.addEventListener("keydown", onKeyDown, true);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown, true);
      window.removeEventListener("keydown", onKeyDown, true);
    };
  }, [onClose]);

  return (
    <div
      className="wa-lookup"
      ref={panel}
      style={{ left: position.left, top: position.top }}
      role="dialog"
      aria-modal="false"
      aria-label={`查词：${token}`}
    >
      <button type="button" className="wa-icon-btn wa-lookup-close" onClick={onClose} aria-label="关闭查词">
        <Icon name="close" size={16} />
      </button>
      {word ? (
        <>
          <div className="wa-lookup-head">
            {hasMedia(word, MEDIA.img) ? (
              <WordImage id={word.id} word={word.word} className="wa-lookup-thumb" />
            ) : null}
            <div className="wa-lookup-title">
              <h3 lang="en">{word.word}</h3>
              <p>{word.ipa}</p>
            </div>
          </div>
          <p className="wa-lookup-meaning">{word.zh}</p>
          <div className="wa-lookup-actions">
            {hasMedia(word, MEDIA[accent]) ? (
              <AudioButton
                audioKey={`${accent}:${word.id}`}
                url={audioUrl(accent, word.id)}
                label="播放发音"
              />
            ) : null}
            <button type="button" className="wa-btn wa-btn-primary" onClick={() => onOpenWord(word.id)}>
              查看词卡
            </button>
          </div>
        </>
      ) : (
        <>
          <h3 className="wa-lookup-missing" lang="en">
            {token}
          </h3>
          <p className="wa-lookup-meaning">这个词不在词光词库里</p>
        </>
      )}
    </div>
  );
}

/**
 * 可点词例句：渲染英文 token 为按钮，点击弹出查词浮窗。
 * 浮窗只依赖 index.json（词/音标/释义/媒体位），不加载词条分块。
 */
export function LookupText({ atlas, progress, text, headword, onOpenWord, className = "" }) {
  const lookup = getLookupIndex(atlas);
  const [open, setOpen] = useState(null);

  useEffect(() => {
    if (!open) return undefined;
    const close = () => setOpen(null);
    window.addEventListener(OPEN_EVENT, close);
    return () => window.removeEventListener(OPEN_EVENT, close);
  }, [open]);

  const nodes = useMemo(() => {
    const out = [];
    let cursor = 0;
    for (const match of text.matchAll(TOKEN_RE)) {
      const start = match.index ?? 0;
      if (start > cursor) out.push(text.slice(cursor, start));
      const token = match[0];
      const hit = lookup.resolve(token);
      const marked = isHeadwordForm(token, headword);
      const button = (
        <button
          type="button"
          className="wa-lookup-token"
          data-wa-lookup-token=""
          aria-label={`查词：${token}`}
          aria-haspopup="dialog"
          onClick={(event) => {
            event.stopPropagation();
            window.dispatchEvent(new Event(OPEN_EVENT));
            const rect = event.currentTarget.getBoundingClientRect();
            setOpen({
              token,
              refId: hit,
              anchor: { left: rect.left, top: rect.top, width: rect.width, height: rect.height, bottom: rect.bottom },
            });
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") event.stopPropagation();
          }}
        >
          {token}
        </button>
      );
      out.push(marked ? <mark key={`mark-${start}`}>{button}</mark> : <React.Fragment key={start}>{button}</React.Fragment>);
      cursor = start + token.length;
      const glue = text.slice(cursor).match(GLUE_RE)?.[0] ?? "";
      if (glue) {
        out.push(<span key={`glue-${start}`}>{glue}</span>);
        cursor += glue.length;
      }
    }
    if (cursor < text.length) out.push(text.slice(cursor));
    return out;
  }, [text, headword, lookup]);

  return (
    <span className={`wa-lookup-text ${className}`}>
      {nodes}
      {open ? (
        <LookupPopover
          atlas={atlas}
          progress={progress}
          token={open.token}
          refId={open.refId}
          anchor={open.anchor}
          onClose={() => setOpen(null)}
          onOpenWord={(id) => {
            setOpen(null);
            onOpenWord(id);
          }}
        />
      ) : null}
    </span>
  );
}
