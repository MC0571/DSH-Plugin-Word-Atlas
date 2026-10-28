import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { isMastered } from "./fsrs.js";
import { dayKey, exportBackup, importBackup, resetProgress, streak, update } from "./store.js";
import { Icon, WordImage } from "./ui.jsx";

const OFFLINE_API = "/word-atlas/api/offline";
const TIERS = [
  { id: "thumb", label: "缩略图", hint: "网格 / 查词浮窗", bytes: 84 * 1024 * 1024 },
  { id: "img", label: "完整插画", hint: "词卡大图", bytes: 199 * 1024 * 1024 },
  { id: "audio", label: "发音", hint: "英音 / 美音 / 例句朗读", bytes: 418 * 1024 * 1024 },
];

function formatBytes(bytes) {
  if (!Number.isFinite(bytes) || bytes <= 0) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  let value = bytes;
  let unit = 0;
  while (value >= 1024 && unit < units.length - 1) {
    value /= 1024;
    unit += 1;
  }
  return `${value.toFixed(unit >= 2 ? 1 : 0)} ${units[unit]}`;
}

function formatEta(ms) {
  if (!Number.isFinite(ms) || ms <= 0) return "—";
  const seconds = Math.round(ms / 1000);
  if (seconds < 60) return `${seconds} 秒`;
  const minutes = Math.round(seconds / 60);
  return minutes < 60 ? `${minutes} 分钟` : `${(minutes / 60).toFixed(1)} 小时`;
}

function Segmented({ value, options, onChange, ariaLabel }) {
  return (
    <div className="wa-seg" role="group" aria-label={ariaLabel}>
      {options.map((option) => (
        <button
          type="button"
          key={option.value}
          className={value === option.value ? "is-on" : ""}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

function Switch({ on, onChange, label, hint }) {
  return (
    <label className="wa-switch-row">
      <span>
        <b>{label}</b>
        {hint ? <small>{hint}</small> : null}
      </span>
      <button
        type="button"
        role="switch"
        aria-checked={on}
        aria-label={label}
        className={`wa-switch ${on ? "is-on" : ""}`}
        onClick={() => onChange(!on)}
      >
        <span />
      </button>
    </label>
  );
}

function OfflinePanel({ offline, refresh }) {
  const [tiers, setTiers] = useState(["thumb"]);
  const [source, setSource] = useState("remote");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const downloading = offline?.state === "downloading";

  useEffect(() => {
    if (offline?.contentDirReady) setSource("repo");
  }, [offline?.contentDirReady]);

  const request = async (method, path, body) => {
    setBusy(true);
    setError("");
    try {
      const res = await fetch(`${OFFLINE_API}${path}`, {
        method,
        headers: body ? { "Content-Type": "application/json" } : undefined,
        body: body ? JSON.stringify(body) : undefined,
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.ok === false) setError(data.error || `请求失败（HTTP ${res.status}）`);
      await refresh();
      return data;
    } catch (err) {
      setError(String(err?.message || err));
      return null;
    } finally {
      setBusy(false);
    }
  };

  const toggleTier = (id) => {
    setTiers((current) => (current.includes(id) ? current.filter((tier) => tier !== id) : [...current, id]));
  };

  const approx = TIERS.filter((tier) => tiers.includes(tier.id)).reduce((sum, tier) => sum + tier.bytes, 0);
  const done = offline?.done ?? 0;
  const total = offline?.total ?? 0;
  const percent = total > 0 ? Math.min(100, Math.round((done / total) * 100)) : 0;
  const ready = offline?.state === "done" || (offline?.done ?? 0) > 0;
  const usingRepo = Boolean(offline?.contentDirReady);

  return (
    <section className="wa-panel">
      <h3 className="wa-eyebrow">离线素材</h3>
      <p className="wa-panel-hint">
        词库文字已内置；这里把插画与发音下载到本机，断网也能看图、听音。
        {offline?.contentDirReady ? " 当前已检测到本机词光仓库，素材可直接从本地读取。" : ""}
      </p>

      <div className="wa-offline-source">
        <span className={`wa-dot ${usingRepo || ready ? "is-on" : ""}`} />
        {usingRepo
          ? `本机词光仓库：${offline?.contentDir}`
          : ready
            ? `离线包：${formatBytes(offline?.bytes ?? 0)}（${done.toLocaleString("en-US")}${total ? ` / ${total.toLocaleString("en-US")}` : ""} 个文件）`
            : "官方站点按需加载（首次看图/听音需要联网）"}
        {offline?.autoCache ? " · 按需缓存已开启" : ""}
      </div>
      {offline?.dir ? <p className="wa-panel-path">保存位置：{offline.dir}</p> : null}

      <div className="wa-tier-list">
        {TIERS.map((tier) => (
          <label key={tier.id} className="wa-tier">
            <input
              type="checkbox"
              checked={tiers.includes(tier.id)}
              disabled={downloading}
              onChange={() => toggleTier(tier.id)}
            />
            <span>
              <b>{tier.label}</b>
              <small>
                {tier.hint} · 约 {formatBytes(tier.bytes)}
              </small>
            </span>
          </label>
        ))}
      </div>

      <div className="wa-offline-actions">
        <select value={source} onChange={(event) => setSource(event.target.value)} disabled={downloading} aria-label="下载来源">
          <option value="remote">官方站点</option>
          <option value="repo" disabled={!offline?.contentDirReady}>
            本机词光仓库
          </option>
        </select>
        {downloading ? (
          <button type="button" className="wa-btn wa-btn-ghost" disabled={busy} onClick={() => request("POST", "/cancel")}>
            取消下载
          </button>
        ) : (
          <button
            type="button"
            className="wa-btn wa-btn-primary"
            disabled={busy || tiers.length === 0}
            onClick={() => request("POST", "/start", { tiers, source })}
          >
            开始下载{approx ? `（约 ${formatBytes(approx)}）` : ""}
          </button>
        )}
        <button
          type="button"
          className="wa-btn wa-btn-ghost"
          disabled={busy || downloading || !ready}
          onClick={() => {
            if (confirm("删除已下载的离线素材？词库文字不受影响。")) request("DELETE", "");
          }}
        >
          删除离线包
        </button>
      </div>

      {downloading || done > 0 ? (
        <div className="wa-progress">
          <div className="wa-progress-bar">
            <span style={{ width: `${percent}%` }} />
          </div>
          <div className="wa-progress-meta">
            <span>
              {downloading ? "下载中" : offline?.state === "cancelled" ? "已取消" : "已完成"} · {percent}%
            </span>
            <span>
              {done.toLocaleString("en-US")}
              {total ? ` / ${total.toLocaleString("en-US")}` : ""} 个文件
              {offline?.speed ? ` · ${formatBytes(offline.speed)}/s` : ""}
              {downloading && offline?.etaMs ? ` · 剩约 ${formatEta(offline.etaMs)}` : ""}
              {offline?.failed ? ` · 失败 ${offline.failed}` : ""}
            </span>
          </div>
        </div>
      ) : null}

      {error ? <p className="wa-error-text">{error}</p> : null}
      <p className="wa-panel-note">
        下载源：官方站点（CC BY 4.0 素材）或本机词光仓库；界面音效不在离线包内。
        按需缓存可在 profile 的 <code>cordis.patch.yml</code> 中设置 <code>autoCache: true</code>。
      </p>
    </section>
  );
}

const LEVEL_LABEL = ["入门", "基础", "进阶", "中高", "高级", "精通"];

function Heatmap({ days }) {
  const weeks = 20;
  const end = new Date();
  const start = new Date();
  start.setDate(end.getDate() - (weeks * 7 - 1) - end.getDay());
  const cells = [];
  const cursor = new Date(start);
  for (let index = 0; index < (weeks + 1) * 7; index += 1) {
    const key = dayKey(cursor);
    cells.push({ key, value: days[key]?.r ?? 0, future: cursor > end });
    cursor.setDate(cursor.getDate() + 1);
  }
  const level = (value) => (value === 0 ? 0 : value < 10 ? 1 : value < 25 ? 2 : value < 50 ? 3 : 4);
  return (
    <div className="wa-heatmap" role="img" aria-label="学习热力图">
      {cells.map((cell) => (
        <span key={cell.key} className={`wa-heat-${cell.future ? "x" : level(cell.value)}`} title={`${cell.key} · ${cell.value} 题`} />
      ))}
    </div>
  );
}

export function Settings({ atlas, progress, onOpenWord }) {
  const stats = useMemo(() => {
    const cards = Object.values(progress.cards);
    const days = Object.values(progress.days);
    const reviewed = days.reduce((sum, day) => sum + (day.r || 0), 0);
    const correct = days.reduce((sum, day) => sum + (day.c || 0), 0);
    const seconds = days.reduce((sum, day) => sum + (day.t || 0), 0);
    const forecast = Array.from({ length: 7 }, (_, index) => {
      const end = new Date();
      end.setHours(23, 59, 59, 999);
      end.setDate(end.getDate() + index);
      const start = new Date(end);
      start.setHours(0, 0, 0, 0);
      return cards.filter((card) => (index === 0 ? card.due <= end.getTime() : card.due >= start.getTime() && card.due <= end.getTime())).length;
    });
    return {
      learned: cards.length,
      mastered: cards.filter(isMastered).length,
      reviews: reviewed,
      accuracy: reviewed ? Math.round((correct / reviewed) * 100) : 0,
      minutes: Math.round(seconds / 60),
      streakDays: streak(progress.days),
      forecast,
    };
  }, [progress]);
  const mistakes = useMemo(() => {
    if (!atlas) return [];
    return progress.mistakes.map((id) => atlas.byId.get(id)).filter(Boolean).slice(0, 24);
  }, [atlas, progress.mistakes]);
  const maxForecast = Math.max(1, ...stats.forecast);
  const [offline, setOffline] = useState(null);
  const [offlineError, setOfflineError] = useState("");
  const [notice, setNotice] = useState("");
  const fileInput = useRef(null);
  const settings = progress.settings;

  const refresh = useCallback(async () => {
    try {
      const res = await fetch(OFFLINE_API, { cache: "no-store" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setOffline(data);
      setOfflineError("");
    } catch (err) {
      setOfflineError("离线服务不可用，请确认 Host 插件已启用。");
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  useEffect(() => {
    if (offline?.state !== "downloading") return undefined;
    const timer = setInterval(refresh, 1200);
    return () => clearInterval(timer);
  }, [offline?.state, refresh]);

  const patch = (next) => update((state) => ({ ...state, settings: { ...state.settings, ...next } }));

  const download = () => {
    const blob = new Blob([exportBackup()], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `word-atlas-backup-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setNotice("已导出备份文件");
  };

  const restore = async (file) => {
    const text = await file.text();
    const result = importBackup(text);
    setNotice(result.ok ? `已恢复 ${result.cards} 个词的记忆` : result.error);
  };

  return (
    <div className="wa-settings">
      <section className="wa-me-strip">
        <div className="wa-me-stat">
          <strong>{stats.streakDays}</strong>
          <span>连续学习 · 天</span>
        </div>
        <div className="wa-me-stat">
          <strong>{stats.learned.toLocaleString("en-US")}</strong>
          <span>已点亮</span>
        </div>
        <div className="wa-me-stat">
          <strong>{stats.mastered.toLocaleString("en-US")}</strong>
          <span>长期记住</span>
        </div>
        <div className="wa-me-stat">
          <strong>{stats.accuracy}%</strong>
          <span>首次正确率</span>
        </div>
        <div className="wa-me-stat">
          <strong>{stats.minutes}</strong>
          <span>学习分钟</span>
        </div>
      </section>

      <div className="wa-me-grid">
        <section className="wa-panel">
          <h3 className="wa-eyebrow">过去 20 周</h3>
          <Heatmap days={progress.days} />
          <p className="wa-panel-note">一格是一天，颜色越深，那天答得越多。「长期记住」指记忆稳定度超过 21 天。</p>
        </section>
        <section className="wa-panel">
          <h3 className="wa-eyebrow">未来 7 天的复习量</h3>
          <ol className="wa-forecast">
            {stats.forecast.map((count, index) => (
              <li key={index}>
                <span style={{ height: `${Math.max(6, Math.round((count / maxForecast) * 100))}%` }} />
                <b>{count}</b>
                <small>{index === 0 ? "今天" : index === 1 ? "明天" : `+${index}`}</small>
              </li>
            ))}
          </ol>
        </section>
      </div>

      {mistakes.length > 0 ? (
        <section className="wa-panel">
          <div className="wa-panel-head">
            <h3 className="wa-eyebrow">错词本</h3>
            <span className="wa-muted">最近 {mistakes.length} 个</span>
          </div>
          <ul className="wa-mistakes">
            {mistakes.map((word) => (
              <li key={word.id}>
                <button type="button" onClick={() => onOpenWord(word.id)} aria-label={`查看 ${word.word}`}>
                  <WordImage id={word.id} word={word.word} className="wa-mistake-thumb" />
                  <span>
                    <b lang="en">{word.word}</b>
                    <small>{word.zh}</small>
                  </span>
                  <em>{word.cefr}</em>
                </button>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="wa-panel">
        <h3 className="wa-eyebrow">学习设置</h3>
        <div className="wa-field">
          <div>
            <b>每日新词</b>
            <small>复习不设上限，算法只安排快要遗忘的词。</small>
          </div>
          <Segmented
            ariaLabel="每日新词"
            value={settings.dailyNew}
            options={[5, 10, 15, 20, 30].map((n) => ({ value: n, label: String(n) }))}
            onChange={(value) => patch({ dailyNew: value })}
          />
        </div>
        <div className="wa-field">
          <div>
            <b>从哪个难度开始</b>
            <small>学习会话会跳过更简单的级别。</small>
          </div>
          <Segmented
            ariaLabel="起点难度"
            value={settings.startLevel}
            options={atlas.cefr.map((level, index) => ({ value: index, label: level }))}
            onChange={(value) => patch({ startLevel: value })}
          />
        </div>
        <div className="wa-field">
          <div>
            <b>目标记忆率</b>
            <small>越高复习越频繁，90% 是大多数人的甜点。</small>
          </div>
          <Segmented
            ariaLabel="目标记忆率"
            value={settings.retention}
            options={[0.85, 0.9, 0.95].map((n) => ({ value: n, label: `${Math.round(n * 100)}%` }))}
            onChange={(value) => patch({ retention: value })}
          />
        </div>
        <div className="wa-field">
          <div>
            <b>发音偏好</b>
            <small>词条详情里两种发音都可以播放。</small>
          </div>
          <Segmented
            ariaLabel="发音偏好"
            value={settings.accent}
            options={[
              { value: "uk", label: "英式" },
              { value: "us", label: "美式" },
            ]}
            onChange={(value) => patch({ accent: value })}
          />
        </div>
        <Switch
          label="自动播放发音"
          hint="词卡与听音题自动播放"
          on={settings.autoplay}
          onChange={(value) => patch({ autoplay: value })}
        />
        <Switch
          label="复习时加入拼写题"
          hint="学习会话中加入拼写题"
          on={settings.spell}
          onChange={(value) => patch({ spell: value })}
        />
      </section>

      <OfflinePanel offline={offline} refresh={refresh} />
      {offlineError ? <p className="wa-error-text">{offlineError}</p> : null}

      <section className="wa-panel">
        <h3 className="wa-eyebrow">数据与备份</h3>
        <p className="wa-panel-hint">
          进度保存在本机（Host 文件 + 浏览器镜像），无需账号。换设备时导出备份再导入即可，格式与词光线上版兼容。
        </p>
        <div className="wa-backup-actions">
          <button type="button" className="wa-btn wa-btn-ghost" onClick={download}>
            <Icon name="book" size={15} /> 导出备份
          </button>
          <button type="button" className="wa-btn wa-btn-ghost" onClick={() => fileInput.current?.click()}>
            <Icon name="refresh" size={15} /> 导入备份
          </button>
          <input
            ref={fileInput}
            type="file"
            accept="application/json,.json"
            hidden
            onChange={(event) => {
              const file = event.target.files?.[0];
              event.target.value = "";
              if (file) restore(file);
            }}
          />
          <button
            type="button"
            className="wa-btn wa-btn-ghost wa-danger"
            onClick={() => {
              if (confirm("确定清空全部学习记录？此操作无法撤销，建议先导出备份。")) {
                resetProgress();
                setNotice("学习记录已清空");
              }
            }}
          >
            清空学习记录
          </button>
        </div>
        {notice ? <p className="wa-panel-note">{notice}</p> : null}
        <p className="wa-panel-note">
          已学 {Object.keys(progress.cards).length.toLocaleString("en-US")} 词 · 收藏 {progress.bookmarks.length} 词
          {progress.savedAt ? ` · 上次保存 ${new Date(progress.savedAt).toLocaleString()}` : ""}
        </p>
      </section>

      <section className="wa-panel">
        <h3 className="wa-eyebrow">关于</h3>
        <p className="wa-panel-hint">
          词光 · Word Atlas DSH 插件 v0.3.0 · 词库/插画/录音来自{" "}
          <a href="https://github.com/designfuchen/word-atlas" target="_blank" rel="noreferrer">
            designfuchen/word-atlas
          </a>
          （Word Atlas contributors，CC BY 4.0）；插件代码 MIT；复习调度 ts-fsrs。
        </p>
        <p className="wa-panel-path">插件仓库：github.com/MC0571/DSH-Plugin-Word-Atlas</p>
      </section>
    </div>
  );
}
