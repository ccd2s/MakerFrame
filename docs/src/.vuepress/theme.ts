import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://docs-mf.tasaed.top",

  author: {
    name: "TASA-Ed工作室",
    url: "https://www.tasaed.top",
    email: "studio@tasaed.top",
  },

  navbarTitle: "",

  fullscreen: true,

  logo: "/assets/image/logo.png",

  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    end: ["qqGroupLink", "Repo", "Outlook", "Search"],
  },

  repo: "TASA-Ed/MakerFrameDocs",

  favicon: "favicon.ico",

  docsDir: "docs/src",

  // 页面信息
  pageInfo: ["Author", "Date", "PageView", "ReadingTime", "Word"],

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  // 页脚
  footer: '<a href=\"https://docs-mf.tasaed.top\">鹰歌游戏引擎文档</a> | Copyright © 2025 <a href=\"https://www.tasaed.top\">TASA-Ed工作室</a>，<a href=\"https://github.com/leamus\">深林孤鹰</a> licensed <a href=\"https://creativecommons.org/licenses/by-sa/4.0\" target=\"_blank\">CC BY-SA 4.0</a> | 萌ICP备<a href="https://icp.gov.moe/?keyword=20258272" target="_blank">20258272</a>号 | Powered by <a href=\"https://vuejs.press\" target=\"_blank\">VuePress</a> | Theme by <a href=\"https://theme-hope.vuejs.press\" target=\"_blank\">Hope</a>',
  copyright: false,
  displayFooter: true,

  // Git
  contributors: "content",
  changelog: true,

  // 多语言配置
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  // ...?
  encrypt: {
    config: {
      "/eagle.html": {
        password: ["song"],
        hint: "Eagle like What?",
      },
    },
  },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 此处开启了很多功能用于演示，你应仅保留用到的功能。
  markdown: {
    align: true,
    // attrs: true,
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
    // 基于本文档的站点均需使用自己的评论服务
    comment: {
      provider: "Artalk",
      server: "https://talk.tasaed.top",
      locale: "zh-CN",
      emoticons: "https://api.tasaed.top/artalk/default.json",
      placeholder: "输入你想说的话吧",
      noComment: "这里还没有评论，快来抢沙发！",
      sendBtn: "点击发送",
      uaBadge: true,
      gravatar: {
        mirror: "https://weavatar.com/avatar/",
        params: "sha256=1&d=mp&s=240",
      },
    },

    // 基于本文档的站点均需使用自己的搜索服务
    docsearch: {
      appId: "NNZCDJNBW8",
      apiKey: "c45b30fc8b8df4259e969fa101b29b33",
      indexName: "mf-tasaed",
    },

    components: {
      components: ["Badge", "VPCard", "PDF", "SiteInfo", "VPBanner"],
      componentOptions: {
        pdf: {
          pdfjs: "/pdfjs"
        }
      }
    },

    git: {
      contributors: {
        // 显示贡献者的头像
        avatar: true,
        // 修复本地贡献者与 GitHub 上的贡献者不一致的问题
        info: [
          {
            username: "ccd2s",
            name: "德二吹风机",
            alias: ["德二吹风机","TASA-Ed"],
            email: "tasaedem@outlook.com",
          },
          {
            username: "luomic",
            name: "落",
            alias: ["Luomic","落"],
          },
          {
            username: "leamus",
            name: "深林孤鹰",
            alias: ["leamus","深林孤鹰"],
          },
        ],
      }
    },

    // 在移动设备上显示复制按钮
    copyCode: {
      showInMobile: true,
      duration: 1500,
    },

    // 基于本文档的站点均需使用自己的图标服务
    icon: {
      assets: ["/assets/fontawesome/js/brands.min.js","/assets/fontawesome/js/solid.min.js","/assets/fontawesome/js/regular.min.js","/assets/fontawesome/js/fontawesome.min.js"]
    },

    feed: {
      rss: true,
      image: "/assets/image/logo.png",
      icon: "/assets/image/TwemojiEagle.svg",
      channel: {
        copyright: "Copyright © 2025 TASA-Ed工作室，深林孤鹰 licensed CC BY-SA 4.0",
        ttl: 1440,
        image: "/assets/image/logo.png",
        icon: "/assets/image/TwemojiEagle.svg",
      },
    },

    notice: [
      {
        path: "/",
        title: "引擎公告",
        content: "因为目前鹰歌游戏引擎已经完善，所以开发者现在的重心并不在这里，不过如果有问题的话也可以去找开发者深林孤鹰咨询。",
        confirm: true,
        showOnce: true,
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
