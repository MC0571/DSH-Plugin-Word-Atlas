# Changelog

本项目的版本号遵循 [SemVer](https://semver.org/lang/zh-CN/)：
`MAJOR.MINOR.PATCH`。词库内容更新（`data/` 同步自上游词光仓库）按 `PATCH` 递增；
新增页面/工具/配置项按 `MINOR` 递增；破坏兼容的安装方式或配置变化按 `MAJOR` 递增。

发布时在 `main` 分支打 `v<version>` 标签，并创建同名 GitHub Release。

## [Unreleased]

## [0.2.2] - 2026-10-28

### Fixed

- 词条详情弹窗内容较长时右侧无法滚动：卡片改为固定高度 + 内部滚动区，
  页头/标题固定、正文在容器内滚动、页脚（记忆信息与标记/上一个/下一个）吸底常显。
- 词条详情左侧插画不再被 `object-fit: cover` 纵向裁切：1:1 插画完整显示，
  左栏改为「插画居中 + 编号/复习状态在下」，窄屏下用 `max-height: 30vh` 完整缩放。
- 窄屏单列布局同步调整为「插画自适应高度 + 正文占满剩余高度」。

## [0.2.1] - 2026-10-28

### Fixed

- 浅色主题下主按钮文字不可见（开始下载 / 查看词卡 / 开始复习等）：基础按钮样式不再覆盖
  `.wa-btn-primary` 的白色文字。
- 离线素材状态行在检测到本机词光仓库时正确显示「本机词光仓库」并点亮状态点。
- 复习页与离线面板的行内代码改为 `<code>` 渲染，不再显示反引号。

## [0.2.0] - 2026-10-28

### Added

- **例句点词查询**（对齐线上版）：例句英文 token 可点击，浮窗显示缩略插画、音标、中文释义、
  播放发音与「查看词卡」；未收录词提示；词形还原移植上游 `IRREGULAR` 表并补充后缀规则；
  详情 / 复习例句均已接入，支持返回上一个词。
- **离线素材包**（Host）：`GET/POST/DELETE /word-atlas/api/offline*`，按「缩略图 84 MB /
  完整插画 199 MB / 发音 418 MB」分档下载（共 37,501 个文件），支持本机词光仓库导入、
  断点续传、进度/速度/失败统计、取消与清理；媒体路由按「本机仓库 → 离线包 → 按需缓存 →
  官方站点回退」逐文件解析，下载中即可生效，无需重启。
- **按需缓存**（可选，`config.autoCache`）：浏览时把缩略图/插画/发音落盘到
  `$DSH_HOME/word-atlas-dsh/cache`，超过 `cacheMaxBytes` 按时间 LRU 清理。
- **「我的」页**：学习设置（每日新词 / 起点难度 / 目标记忆率 / 发音偏好 / 拼写题 / 自动播放）、
  离线素材面板、备份导出与导入、清空学习记录、版本与授权信息。
- 备份与上游词光格式兼容（`app/version/progress/settings`），可导入线上版导出的备份；
  Host 进度现在也保留 `mistakes` / `typing` 字段。

### Changed

- 图鉴侧边栏改为「图鉴 / 复习 / 生词本 / 我的」四个 tab；顶部信息按钮改为打开「我的」页。
- 作品详情页增加返回上一个词的能力（点词查询跳转后可用）。

## [0.1.0] - 2026-10-28

首个版本。

### Added

- DSH 插件形态：Host bundle + Web Client，注册 `main` 面板（key `word-atlas`）与
  `sidebar.panellist` 入口（order 22），侧边栏「词光」一键打开。
- 图鉴页：7,298 个雅思词条、19 个话题、CEFR A1–C2 筛选、中英/音标搜索、缩略图网格与无限加载。
- 词条详情：插画、英/美音标与发音、两条例句及朗读、搭配、词族、近/反义、用法提示、收藏与上一个/下一个导航。
- FSRS 复习：`ts-fsrs` 调度、Again/Hard/Good/Easy 间隔预览、每日新词与目标记忆率设置、本组统计。
- 生词本、已学/待复习统计、连续学习天数。
- Host 数据路由 `/word-atlas/atlas/*`：索引、词条分块、缩略图/插画、UK/US/例句 mp3（支持 Range）。
- 复习进度沉淀：`GET/POST /word-atlas/api/progress`，写入 `$DSH_HOME/word-atlas-dsh/progress.json`，
  localStorage 镜像兜底。
- Agent 工具：`word_atlas_lookup`、`word_atlas_search`（Host 无 `tools` 服务时自动跳过，`config.tools: false` 可关闭）。
- 素材回退：优先本机词光仓库 `public/atlas/`，缺失时 302 到官方站点；内置 7.1 MB 词库保证无素材也能浏览全部词条。
- 构建与测试：`npm run build`（esbuild + ts-fsrs 内联）、`npm test`（客户端渲染 / Host 路由 / 进度 / 工具冒烟）、
  GitHub Actions CI。
- 授权说明：插件代码 MIT，词库/插画/录音 CC BY 4.0（见 `THIRD_PARTY_NOTICES.md`）。
