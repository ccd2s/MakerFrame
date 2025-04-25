---
title: 文档贡献指南
icon: lightbulb
order: 2
---

关于本文档的贡献指南。

## 文档贡献指南

### 本地开发

#### **要求**

- 安装 LTS 版本 的 Node.js ^18.19.0, ^20.6.0, ^22.0.0
- 使用 `corepack enable` 启用 Corepack。
- 安装 pnpm >= 7

注：**不推荐**使用 Node.js 18，因为它即将在 2025 年 4 月 30 日停止支持[^node18]。

#### **克隆并安装项目**

使用 `git clone https://github.com/TASA-Ed/MakerFrameDocs.git` 将仓库克隆至本地

进入docs目录，运行 `pnpm install` 安装模块。

#### **项目的运行与开发**

- 使用 `pnpm docs:dev` 启用开发服务器。
- 使用 `pnpm build` 构建项目。
- 使用 `pnpm markdownlint-cli2 "**/*.md"` 格式化项目[^lint]。

### 编写教程

将本仓库复刻，随后可以通过开启 Pull Request 将更改提交到本仓库中。

> 注:拒绝提交没有任何意义、对他人无帮助、杂乱无章、推广、抄袭、引流的内容

### 文档贡献者交流群

注：本群**不是**引擎交流群，非文档贡献者请勿进入。

- [点击加入](https://qm.qq.com/q/9tsBvtRsiY) (群号: 597524393)

[^node18]: VuePress 使用 Rolling LTS Requirement，即滚动的 LTS 环境支持。随着 Node.js 18 将在 4 月 30 日 EOL （停止支持），我们即将丢弃 Node.js 18 支持，并将最低版本定位 20.6.0。

    请用户检查自己的环境，并在 4 月 30 日前将项目环境迁移至新的 LTS 环境中，我们推荐使用最新的 22.x 版本。如果你的其他项目依赖于旧版 Node.js，可考虑使用 [nvm](https://github.com/nvm-sh/nvm)。

[^lint]: 本项目使用 [markdownlint-cli2](https://www.npmjs.com/package/markdownlint-cli2) 格式化md文档，因此你在修改md文档后需要使用 `pnpm markdownlint-cli2 "**/*.md"` 检查错误。

    本项目的 Pull Request 状态检查也包括 markdownlint ，只不过这些检查是中立性的，即使报错也可以正常合并（尽管如此，但我们还是推荐你修复完所有错误之后再来提交 PR ）。
