# 词光 · Word Atlas for DeepSeek Harness

[![CI](https://github.com/MC0571/DSH-Plugin-Word-Atlas/actions/workflows/ci.yml/badge.svg)](https://github.com/MC0571/DSH-Plugin-Word-Atlas/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/Code-MIT-17283B)](./LICENSE)
[![Dataset: CC BY 4.0](https://img.shields.io/badge/Dataset-CC_BY_4.0-AD5038)](./THIRD_PARTY_NOTICES.md)
[![Version](https://img.shields.io/github/v/tag/MC0571/DSH-Plugin-Word-Atlas?label=release)](https://github.com/MC0571/DSH-Plugin-Word-Atlas/tags)

把开源项目 [designfuchen/word-atlas](https://github.com/designfuchen/word-atlas)（词光 · Word Atlas）做成
DeepSeek Harness 插件：在 Harness 侧边栏点「词光」，就能打开一张可以听、可以练、可以复习的雅思词汇图鉴。

- **7,298** 个词条，19 个话题，CEFR A1–C2
- 每词一幅插画、英美双发音、两条例句朗读
- **FSRS** 间隔复习（Again / Hard / Good / Easy），进度保存在本机
- 生词本、按 CEFR / 话题筛选、中英释义搜索
- **学习会话**：intro 词卡 → 看义选词 / 看图补句 / 听音辨词 / 拼写四种题型，答错自动安排重练，会话可恢复
- **例句点词查询**：例句里点任意英文词弹出释义浮窗，可播放发音或跳转词卡（对齐线上版）
- **离线素材包**：缩略图 / 完整插画 / 发音分档下载，或从本机词光仓库导入；断网也能看图听音
- **今日页**：品牌插画 Hero、每日计划、今日目标圆环、连续天数、本周统计、今日一词、A1–C2 路线、19 个话题入口
- **我的页**：统计条、20 周热力图、7 天复习预测、错词本、学习设置、备份导入/导出
- **Agent 工具**：`word_atlas_lookup`（查词条）与 `word_atlas_search`（按释义/级别/话题搜词）

## 安装

在 DSH 里用 `plugin_manager` 安装（需要 danger-full-access 或审批）：

```text
action: install_bundle
target: https://github.com/MC0571/DSH-Plugin-Word-Atlas.git
```

本地开发时也可以直接安装链接目录：

```text
action: install_bundle
target: /path/to/DSH-Plugin-Word-Atlas
```

安装后侧边栏出现「词光」图标；插件页面注册在 `main` 槽的 `word-atlas` key，
侧边栏入口注册在 `sidebar.panellist`（order 22）。卸载用 `remove_bundle`，目标是 `word-atlas-dsh`。

## 词库与素材来源

插件自带一份词库索引与词条分块（`data/`，约 7 MB，来自上游 CC BY 4.0 数据），
因此**没有本机素材也能浏览全部词条**。插画与发音优先从本机词光仓库读取
（`public/atlas/`）；找不到时 302 到官方站点 `https://0xlei.tech/words/`。

Host 半按以下顺序寻找本机素材：

1. Config `contentDir`（相对路径按插件目录解析）
2. 环境变量 `WORD_ATLAS_CONTENT_DIR`
3. `<本插件目录>/../repo`（例如工作区的 `repo/` 克隆）
4. `<本插件目录>/content`

想获得完整离线体验，把 [词光仓库](https://github.com/designfuchen/word-atlas) 克隆到
`../repo` 或配置 `contentDir` 即可。

## 离线素材与点词查询

- 词库文字（7,298 条）已内置，无需下载；
- 插画与发音默认从官方站点按需加载；在「我的 → 离线素材」可下载
  **缩略图 84 MB / 完整插画 199 MB / 发音 418 MB**（共 37,501 个文件，约 701 MB），
  下载中即可生效，支持取消、续传与删除；
- 若检测到本机词光仓库（`contentDir`），可直接从本地导入，完全离线；
- 例句中的英文词点击即查，浮窗可播放发音、打开词卡。

## Agent 工具

| 工具 | 用途 |
| --- | --- |
| `word_atlas_lookup` | 按英文单词或词条 id 返回完整词条：英美音标、CEFR、话题、中英释义、例句、搭配、词族、近反义、提示与插画链接 |
| `word_atlas_search` | 按英文单词 / 中文释义 / 音标搜索，可按 CEFR（A1–C2）与 19 个话题过滤 |

工具只在 Host 存在 `tools` 服务时注册；`config.tools: false` 可关闭。

## Config（`cordis.patch.yml`）

```yaml
- id: word-atlas
  config:
    contentDir: /path/to/word-atlas        # 可选，含 public/atlas/ 的仓库目录
    mediaBase: https://0xlei.tech/words/   # 可选，官方素材根地址
    stateFile: /path/to/progress.json      # 可选，默认 $DSH_HOME/word-atlas-dsh/progress.json
    tools: true                            # 可选，false 时不注册 Agent 工具
    offlineDir: /path/to/offline           # 可选，离线素材目录（默认 $DSH_HOME/word-atlas-dsh/content）
    cacheDir: /path/to/cache               # 可选，按需缓存目录（默认 $DSH_HOME/word-atlas-dsh/cache）
    autoCache: false                       # 可选，浏览时自动缓存媒体（默认 false）
    cacheMaxBytes: 1073741824              # 可选，按需缓存上限（默认 1 GiB，超出按时间 LRU 清理）
```

## HTTP 路由（同源，页面内使用）

| 路由 | 说明 |
| --- | --- |
| `GET /word-atlas/health` | 运行状态：词库数量、素材来源、工具与进度文件路径 |
| `GET /word-atlas/api/progress` | 读取 FSRS 复习进度 |
| `POST /word-atlas/api/progress` | 保存复习进度（JSON，≤ 4 MB） |
| `GET /word-atlas/atlas/index.json` | 浏览索引（510 KB） |
| `GET /word-atlas/atlas/entries/<n>.json` | 词条分块（每块 100 条） |
| `GET /word-atlas/atlas/thumb/<id>.webp` | 缩略插画 |
| `GET /word-atlas/atlas/img/<id>.webp` | 完整插画 |
| `GET /word-atlas/atlas/audio/<uk\|us\|ex\|ex2>/<id>.mp3` | 发音 / 例句朗读（支持 Range） |

## 版本与发布

版本号遵循 [SemVer](https://semver.org/lang/zh-CN/)，当前版本见 `package.json` 与
[CHANGELOG.md](./CHANGELOG.md)。发布约定：

1. 修改 `package.json` 的 `version` 并更新 `CHANGELOG.md`；
2. 提交后在 `main` 打 `v<version>` 标签（如 `v0.1.0`）并推送；
3. 为该标签创建同名 GitHub Release；
4. CI（`.github/workflows/ci.yml`）在每次 push / PR 上跑 `npm run check`。

词库内容同步自上游（CC BY 4.0），可用 `npm run sync-data` 从本机词光仓库重新生成 `data/`。

## 路线图

开发计划用 GitHub Issues + Milestones 跟踪，按 SemVer 发布：

- ✅ **v0.2.0** — 例句点词查询浮窗（#4）、离线素材包（#5）、设置页/备份导入（#6）
- ✅ **v0.3.0** — Learn 学习会话（#7）、Today 今日页（#8）、Me 统计/我的（#9）
- ✅ **v0.3.1** — Learn 页 UI 一致性修复
- ✅ **v0.3.2** — Today 学习首页改版（品牌素材 / Hero / 周统计 / 路线 / 话题）
- ✅ **v0.3.3** — Desktop 窗口安全区 + Learn slim 顶部栏
- **v0.3.0** — Learn 学习会话（#7）、Today 今日页（#8）、Me 我的/统计（#9）
- **v0.4.0** — Practice 打字练习（#10）、Galaxy 星图（#11）、分享卡/命令面板（#12）
- 实现原则与复刻来源索引见 tracking issue #1：优先移植/复用上游 MIT 源码，
  线上版构建产物仅作行为参考，不重复造轮子。

`main` 已开启分支保护：改动走 `feat/*` / `docs/*` 分支 + PR，CI `check` 通过后
squash 合并并自动删除分支；发布时打 `vX.Y.Z` 标签并创建 GitHub Release。

## 开发

```bash
npm install          # esbuild + ts-fsrs + react/react-dom（仅构建/测试期）
npm run build        # src/client/*.jsx -> client.js（CJS 包进 __ModuleLoader__）
npm test             # 冒烟测试：客户端模块/视图渲染 + Host 路由 + 进度 + Agent 工具
npm run check        # build + 语法检查 + smoke
npm run sync-data    # 从 ../repo（或 WORD_ATLAS_CONTENT_DIR）同步内置词库
```

改 Host 代码（`index.js` / `tools.js`）后，在 profile 里重新安装本 bundle
（`plugin_manager` remove_bundle → install_bundle）即可生效，无需重启 DSH：
linked 包或已安装包会在下一次 profile 重组时替换模块。

## 授权

- 插件代码：[MIT](./LICENSE)
- 词库文本、插画与录音：**CC BY 4.0**，署名 [Word Atlas contributors（词光）](./THIRD_PARTY_NOTICES.md)
- `ts-fsrs`：MIT

词光原项目：<https://github.com/designfuchen/word-atlas>
本插件仓库：<https://github.com/MC0571/DSH-Plugin-Word-Atlas>
