# 第三方内容与依赖

## 词光 · Word Atlas 数据（CC BY 4.0）

本插件内置的 `data/index.json`、`data/entries/*.json`，以及运行时从本机词光仓库
（`public/atlas/`）或官方站点读取的插画、英音/美音与例句录音，均来自开放项目：

- **词光 · Word Atlas** — <https://github.com/designfuchen/word-atlas>
- 作者：Word Atlas contributors（[@designfuchen](https://github.com/designfuchen) 与贡献者）
- 词库文本、插画、词条录音：[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- 项目应用代码：MIT
- 原项目授权说明：<https://github.com/designfuchen/word-atlas/blob/main/CONTENT_LICENSE.md>

使用时请保留以上署名。本插件不修改词条内容，仅做展示与复习调度。

## 依赖

- **ts-fsrs**（MIT）— 构建时打包进 `client.js`，用于 FSRS 间隔复习调度。
  <https://github.com/open-spaced-repetition/ts-fsrs>
- **React** — 由 DSH Web 客户端的模块表提供，不随本插件分发。
