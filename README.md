<!-- markdownlint-disable -->
<p align="center">
    <a href="https://github.com/leamus/MakerFrame" target="_blank" rel="noopener noreferrer">
        <img width="175" src="https://raw.githubusercontent.com/TASA-Ed/MakerFrameDocs/refs/heads/main/docs/src/.vuepress/public/assets/image/logo.png" alt="MakerFrame" />
    </a>
</p>

<h1 align="center"><b>MakerFrame Documentation</b></h1>

<p align="center">
<a href="https://app.netlify.com/sites/jovial-sable-a4b76d/deploys"><img alt="Netlify Status" src="https://api.netlify.com/api/v1/badges/75983092-fde6-4c25-8f5f-6e0d7af010fe/deploy-status"/></a>
<a href="https://github.com/TASA-Ed/MakerFrameDocs/stargazers"><img alt="Stars" src="https://img.shields.io/github/stars/TASA-Ed/MakerFrameDocs?color=8ef6e4&style=flat"/></a>
<a href="https://github.com/TASA-Ed/MakerFrameDocs/actions/workflows/pr-check.yml"><img alt="Build" src="https://github.com/TASA-Ed/MakerFrameDocs/actions/workflows/pr-check.yml/badge.svg"/></a>
<a href="https://github.com/TASA-Ed/MakerFrameDocs/actions/workflows/pr-lint.yml"><img alt="Lint" src="https://github.com/TASA-Ed/MakerFrameDocs/actions/workflows/pr-lint.yml/badge.svg"/></a>
</p>

<p align="center">
<a href="README.md">English</a>，<a href="README_zh_CN.md">中文</a>
</p>

---

Here is the code repository for the Eagle Song Game Engine documentation, and you can optionally visit [docs-mf.tasaed.top](https://docs-mf.tasaed.top/) to view a live version.

Note: that this document is an unofficial repository, [original is here](https://github.com/leamus/MakerFrame).

The MakerFrame Game Engine Documentation needs your contribution!

## Contribution Guide

### Local Development

#### **Requirements**

- Install LTS Versions of Node.js Node.js ^20.6.0, ^22.0.0。
- Use `corepack enable` enable Corepack。
- Install pnpm >= 7。

Note: Node.js v18 has reached End-Of-Life on April 30, 2025.

#### **Clone and install the project**

Clone the repository locally using `git clone https://github.com/TASA-Ed/MakerFrameDocs.git`.

Go to the docs directory and run `pnpm install` to install the module.

#### **Project operation and development**

- Use `pnpm docs:dev` to enable the development server.
- Use `pnpm build` to build the project.
- Use `pnpm markdownlint-cli2 "**/*.md"` formatting project[^lint].

### Preparation of tutorials

Duplicate this repository, and then you can commit the changes to this repository by turning on Pull Request.

> Note:Refuse to submit content that doesn't make any sense, doesn't help others, is cluttered, promotes, plagiarizes, or attracts traffic.

## Description of license

This project is licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) and all content submitted to this project will be licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) license.

[^lint]: 本项目使用 [markdownlint-cli2](https://www.npmjs.com/package/markdownlint-cli2) 格式化md文档，因此你在修改md文档后需要使用 `pnpm markdownlint-cli2 "**/*.md"` 检查错误。

    本项目的 Pull Request 状态检查也包括 markdownlint ，只不过这些检查是中立性的，即使报错也可以正常合并（尽管如此，但我们还是推荐你修复完所有错误之后再来提交 PR ）。
