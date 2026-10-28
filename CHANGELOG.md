# Changelog

本项目的版本号遵循 [SemVer](https://semver.org/lang/zh-CN/)：
`MAJOR.MINOR.PATCH`。词库内容更新（`data/` 同步自上游词光仓库）按 `PATCH` 递增；
新增页面/工具/配置项按 `MINOR` 递增；破坏兼容的安装方式或配置变化按 `MAJOR` 递增。

发布时在 `main` 分支打 `v<version>` 标签，并创建同名 GitHub Release。

## [Unreleased]

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
