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

## 书房内容（短文与书籍）

`data/readings-index.json`、`data/books-index.json` 以及运行时通过 Host 路由代理的
短文正文、书籍章节、封面与朗读音频，来自词光线上站点（<https://0xlei.tech/words/>），
内容版权归 Word Atlas contributors 所有，遵循项目 CC BY 4.0 内容授权；本插件只做展示与学习记录，
不重新分发书籍全文。`The Little Prince` 原文已进入公有领域。使用时请保留词光署名。

本插件的 `Practice.jsx`、`typing.js`、`galaxy/`（layout / engine / Galaxy）以及
会话与文本工具的一部分，移植自原项目的 MIT 代码（`src/pages/Practice.tsx`、
`src/lib/typing.ts`、`src/galaxy/*`、`src/pages/Learn.tsx`、`src/store/session.ts` 等），
已保留原始署名并做 DSH 适配。

## README 图片（`docs/assets/`）

`docs/assets/hero.jpg` 与 `docs/assets/words/*.webp` 使用上游词光插画（CC BY 4.0，署名同
「词光 · Word Atlas 数据」一节）；横幅由插件图标与这些插画合成，仅用于本仓库的说明文档。

## 图标

- **Lucide**（`lucide-static` v1.63.0）— ISC License — <https://lucide.dev>
  `src/client/icons.js` 中的图标路径来自 Lucide，已内联进构建产物 `client.js`，不新增运行时依赖。
  版权归 Lucide contributors 所有。

## 依赖

- **ts-fsrs**（MIT）— 构建时打包进 `client.js`，用于 FSRS 间隔复习调度。
  <https://github.com/open-spaced-repetition/ts-fsrs>
- **React** — 由 DSH Web 客户端的模块表提供，不随本插件分发。
