# 开发与维护

面向要改代码的人。产品说明、安装与使用见 [README](../README.md)。

## 环境

- Node.js 20+ 和 npm。依赖只在构建 / 测试期安装，插件运行时不依赖 npm。
- 不需要数据库或后端服务：Host 跑在 Harness 里，学习进度写本机文件。

## 本地开发

```bash
npm install
npm run build        # src/client/*.jsx → client.js
npm test             # 冒烟测试：客户端模块与视图渲染、Host 路由、进度读写、Agent 工具
npm run check        # build + node --check + 冒烟测试
```

`client.js` 由 esbuild 打成单文件 CJS，再包进 `window.__ModuleLoader__.load`；React 由 Harness 宿主模块表提供（`external: ['react']`），`ts-fsrs` 与 UI 一起打包，所以插件没有运行时依赖。

## 在 Harness 里联调

1. 用 `plugin_manager` 安装本仓库目录（linked bundle）：
   ```text
   action: install_bundle
   target: /path/to/DSH-Plugin-Word-Atlas
   ```
   安装后侧边栏出现「词光」；页面注册在 `main` 槽的 `word-atlas` key，侧边栏入口注册在 `sidebar.panellist`（order 22）。
2. 改 `src/client/` 后重新 `npm run build`，刷新页面即可。
3. 改 Host 代码（`index.js` / `tools.js` / `offline.js`）后，在 profile 里 `remove_bundle` → `install_bundle`，让 profile 重组时替换模块，无需重启 Harness。

## 目录结构

```text
index.js          Host 插件：HTTP 路由、进度读写、素材服务
tools.js          Agent 工具（word_atlas_lookup / word_atlas_search）
offline.js        离线素材：分档下载、本机导入、按需缓存与 LRU
client.js         构建产物（由 src/client 生成，不要手改）
src/client/       React 页面与交互（今日 / 图鉴 / 书房 / 星图 / 复习 / 练习 / 生词本 / 我的）
data/             内置词库：index、entries 分块、书房索引（约 7 MB）
locale/           zh / en 的插件 meta
scripts/          build / smoke / sync-data / sync-reading
cordis.patch.yml  插件清单与默认 Config
```

## 数据与素材

- **内置词库**：`data/` 由上游词光仓库同步而来（CC BY 4.0），启动后无需联网即可浏览全部词条。
- **同步词库**：`npm run sync-data [词光仓库路径]`。未传路径时依次找 `$WORD_ATLAS_CONTENT_DIR` → `../repo` → `content`，命中要求包含 `public/atlas/index.json`。
- **同步书房索引**：`npm run sync-reading`，从 `$WORD_ATLAS_SITE`（默认 `https://0xlei.tech/words`）拉取短文与书目索引；正文、章节、封面不打包，运行时按需代理。
- **素材查找顺序**（插画 / 发音）：
  1. `contentDir` 指向的本机词光仓库（`public/atlas/`）
  2. 手动离线包 `<offlineDir>/public/atlas/`
  3. 按需缓存 `<cacheDir>/atlas/`
  4. 回退到 `mediaBase`（上游词光站点）

## 配置

在安装项的 `config` 里设置，全部可选：

| 键 | 默认 | 说明 |
| :--- | :--- | :--- |
| `contentDir` | 自动发现 | 本机词光仓库路径（需含 `public/atlas/`）；未设时依次找 `WORD_ATLAS_CONTENT_DIR`、`<插件>/../repo`、`<插件>/content` |
| `mediaBase` | `https://0xlei.tech/words/` | 素材回退地址 |
| `stateFile` | `$DSH_HOME/word-atlas-dsh/progress.json` | 复习进度文件 |
| `tools` | `true` | 是否注册 Agent 工具 |
| `offlineDir` | `$DSH_HOME/word-atlas-dsh/content` | 手动离线包目录 |
| `cacheDir` | `$DSH_HOME/word-atlas-dsh/cache` | 按需缓存目录 |
| `autoCache` | `false` | 浏览时是否顺手把素材落盘缓存 |
| `cacheMaxBytes` | 1 GiB | 按需缓存上限，超出按时间 LRU 清理 |
| `offlineStateFile` | `$DSH_HOME/word-atlas-dsh/offline-state.json` | 离线下载状态文件（用于重启后恢复展示） |
| `offlineConcurrency` | `6` | 离线下载并发数 |

```yaml
# cordis.patch.yml 的 insert 下
- id: word-atlas
  name: 'word-atlas-dsh'
  config:
    contentDir: /path/to/word-atlas
    mediaBase: https://0xlei.tech/words/
    tools: true
    autoCache: false
    cacheMaxBytes: 1073741824
```

## HTTP 路由

Host 以 `prefix` 方式注册在 `/word-atlas`：

| 方法与路径 | 说明 |
| :--- | :--- |
| `GET /word-atlas/` | 插件状态：词条数、素材来源 |
| `GET /word-atlas/health` / `GET /api/health` | 诊断：进度文件、构建号、工具注册、离线状态 |
| `GET /word-atlas/api/progress` | 读取复习进度 |
| `POST /word-atlas/api/progress` | 保存复习进度（JSON，≤ 4 MB） |
| `GET /word-atlas/api/offline` | 离线下载状态 |
| `DELETE /word-atlas/api/offline` | 删除离线素材与缓存 |
| `POST /word-atlas/api/offline/start` | 开始下载，body：`{ tiers: ["thumb" \| "img" \| "audio"], source?: "local" }` |
| `POST /word-atlas/api/offline/cancel` | 取消下载 |
| `GET /word-atlas/atlas/index.json` | 浏览索引 |
| `GET /word-atlas/atlas/entries/<n>.json` | 词条分块（每块 100 条） |
| `GET /word-atlas/atlas/(img\|thumb)/<id>.webp` | 完整插画 / 缩略图 |
| `GET /word-atlas/atlas/audio/(uk\|us\|ex\|ex2)/<id>.mp3` | 英音 / 美音 / 例句朗读（支持 Range） |
| `GET /word-atlas/readings/index.json` | 书房短文索引 |
| `GET /word-atlas/readings/<id>.json` | 短文正文（本地优先，否则代理上游） |
| `GET /word-atlas/books/index.json` | 书架索引 |
| `GET /word-atlas/books/<id>/<chapter>.json` | 书籍章节（本地优先，否则代理上游） |
| `GET /word-atlas/read-assets/<path>` | 书房封面、插画等静态资源 |
| `GET /word-atlas/brand/<file>` | 品牌插画（本地优先，否则 302 到上游词光站点） |

## Agent 工具

`tools.js` 里的两个工具通过 `ctx.inject(['tools'])` 注册；Host 没有 `tools` 服务时自动跳过，`config.tools: false` 可显式关闭。工具读取的也是同一份词库（`contentDir` 优先，否则 `data/`）。

## 进度文件

- 路径见 `stateFile`；内容是 JSON：`cards`（FSRS 卡片）、`bookmarks`、`mistakes`、`typing`、`days`、`session`、`settings`。
- 前端在 `localStorage` 里另存一份镜像，读写以 Host 为准；`POST /api/progress` 会做结构调整与校验，非法负载返回 `400`。
- 卸载插件不会删除进度文件。

## 测试与 CI

- `.github/workflows/ci.yml`：push 到 `main`、打 `v*` 标签和所有 PR 上跑 `npm ci && npm run check`（Node 22）。
- 冒烟测试覆盖：客户端模块与视图渲染、Host 路由、进度读写、Agent 工具注册。

## 发布

版本遵循 [SemVer](https://semver.org/lang/zh-CN/)：词库同步按 PATCH，新增页面 / 工具 / 配置项按 MINOR，破坏性变更按 MAJOR。

1. 更新 `package.json` 的 `version` 和 `CHANGELOG.md`；
2. 提交后在 `main` 打 `v<version>` 标签并推送；
3. 为该标签创建同名 GitHub Release；
4. 开发走 `feat/*` / `docs/*` 分支 + PR，CI 通过后 squash 合并。

## 版本与路线图

- 历史版本看 [CHANGELOG](../CHANGELOG.md)。
- 后续计划用 GitHub Issues + Milestones 跟踪，不在 README 里维护逐条版本清单。

## 已知边界

- 没有 `contentDir` 且未下载离线包时，插画与发音依赖上游词光站点，网络受限会加载失败。
- 书房正文与书籍章节不在仓库内，运行时按需代理；无网络时不可读。
- `locale/` 目前只覆盖插件 meta（标题与描述），界面文案仍是中文。
