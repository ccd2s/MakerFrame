import { defineUserConfig } from "vuepress";
import { umamiAnalyticsPlugin } from '@vuepress/plugin-umami-analytics'

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "鹰歌游戏引擎文档",
  description: "鹰歌游戏引擎的文档。",
  pagePatterns: ["**/*.md", "!**/*.snippet.md", "!.vuepress", "!node_modules"],

  theme,

  plugins: [
    umamiAnalyticsPlugin({
      id: "c4f9bfe8-7cbe-40fd-9e98-63ab935a60e4",
      link: "https://umami.tasaed.top/script.js",
      domains: ["docs-mf.tasaed.top"],
    }),
  ],

  shouldPrefetch: false,
});
