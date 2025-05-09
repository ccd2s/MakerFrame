import qqGroupLink from "./components/qqGroupLink.js";
import { defineClientConfig } from "vuepress/client";
import { NotFound } from "vuepress-theme-hope/client";
import { h } from "vue";
import notFoundPublic from "./components/notFoundPublic.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("qqGroupLink", qqGroupLink);
  },
  layouts: {
    /* only dev server
    NotFound: () => h(NotFound, {}, () => h(notFoundPublic)),
    */
  },
});
