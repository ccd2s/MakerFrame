import qqGroupLink from "./components/qqGroupLink.js";
import { defineClientConfig } from "vuepress/client";
import publicNotFound from "./layouts/publicNotFound.vue";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("qqGroupLink", qqGroupLink);
  },
  layouts: {
    NotFound: publicNotFound,
  },
});
