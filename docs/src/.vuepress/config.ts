import { defineUserConfig } from "vuepress";
import { umamiAnalyticsPlugin } from '@vuepress/plugin-umami-analytics'

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "鹰歌游戏引擎文档",
  description: "鹰歌游戏引擎的文档。",

  theme,

  plugins: [
    // 基于本文档的站点均需使用自己的统计服务
    umamiAnalyticsPlugin({
      id: "c4f9bfe8-7cbe-40fd-9e98-63ab935a60e4",
      link: "https://umami.tasaed.top/script.js",
      domains: ["docs-mf.tasaed.top"],
    }),
  ],



  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
