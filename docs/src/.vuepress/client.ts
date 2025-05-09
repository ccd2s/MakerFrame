import qqGroupLink from "./components/qqGroupLink.js";
import { defineClientConfig } from "vuepress/client";
import { NotFound } from "vuepress-theme-hope/client";
import { h } from "vue";
import NotFoundPublic from "./components/notFoundPublic.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("qqGroupLink", qqGroupLink);
  },
  ///* 测试用
  layouts: {
    NotFound: () => h(NotFound, {}, () => h(NotFoundPublic)),
  },
  //*/
});
