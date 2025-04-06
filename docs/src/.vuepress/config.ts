import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "鹰歌游戏引擎",
  description: "鹰歌游戏引擎的文档。",

  theme,



  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
