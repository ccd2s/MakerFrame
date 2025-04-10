import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",

  author: {
    name: "TASA-Ed工作室",
    url: "https://www.tasaed.top",
    email: "studio@tasaed.top",
  },

  navbarTitle: "",

  logo: "assets/image/logo.png",

  repo: "ccd2s/MakerFrameDocs",

  favicon: "favicon.ico",

  docsDir: "docs/src",

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  // 页脚
  footer: '<a href=\"http://localhost:8081/\">鹰歌游戏引擎文档</a> | Copyright © 2025 <a href=\"https://www.tasaed.top\">TASA-Ed工作室</a>，<a href=\"https://github.com/leamus\">深林孤鹰</a> licensed <a href=\"https://creativecommons.org/licenses/by-sa/4.0\" target=\"_blank\">CC BY-SA 4.0</a> | Powered by <a href=\"https://theme-hope.vuejs.press\" target=\"_blank\">VuePress Theme Hope</a>',
  copyright: false,
  displayFooter: true,
  contributors: false,

  // // 多语言配置
  // metaLocales: {
  //   editLink: "在 GitHub 上编辑此页",
  // },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 此处开启了很多功能用于演示，你应仅保留用到的功能。
  markdown: {
    align: true,
    attrs: true,
    component: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    spoiler: true,
    // stylize: [
    //   {
    //     matcher: "Recommended",
    //     replacer: ({ tag }) => {
    //       if (tag === "em")
    //         return {
    //           tag: "Badge",
    //           attrs: { type: "tip" },
    //           content: "Recommended",
    //         };
    //     },
    //   },
    // ],
    sub: true,
    sup: true,
    tasklist: true,
    vPre: true,
  },

  // 在这里配置主题提供的插件
  plugins: {
    // 注意: 仅用于测试! 你必须自行生成并在生产环境中使用自己的评论服务
    // comment: {
    //   provider: "Giscus",
    //   repo: "vuepress-theme-hope/giscus-discussions",
    //   repoId: "R_kgDOG_Pt2A",
    //   category: "Announcements",
    //   categoryId: "DIC_kwDOG_Pt2M4COD69",
    // },

    components: {
      components: ["Badge", "VPCard", "PDF", "SiteInfo"],
    },

    icon: {
      assets: "https://kit.fontawesome.com/f5a8b26a3f.js",
    },

    notice: [
      {
        path: "/",
        title: "引擎公告",
        content: "因为目前鹰歌游戏引擎已经完善，所以开发者现在的重心并不在这里，不过如果有问题的话也可以去找开发者深林孤鹰咨询。",
        confirm: true,
        actions: [
          {
            text: "关闭",
            type: "primary",
          }
        ],
      },
    ],
  },
});
