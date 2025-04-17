import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "开始使用",
      icon: "signs-post",
      prefix: "start/",
      link: "start/",
      children: [
        {
          text: "初级教程",
          icon: "circle-play",
          collapsible: true,
          prefix: "beginner/",
          children: "structure",
        },
        {
          text: "中级教程",
          icon: "dice-d6",
          collapsible: true,
          prefix: "middle/",
          children: ["intro.html",
            {
              text: "游戏命令详解",
              icon: "terminal",
              link: "function/",
              prefix: "function/",
              children: "structure",
            },
            {
              text: "通用脚本详解",
              icon: "scroll",
              link: "script/",
              prefix: "script/",
              children: "structure",
            },
            {
              text: "战斗",
              icon: "khanda",
              prefix: "battle/",
              children: "structure",
            },
            {
              text: "界面的层序",
              icon: "object-group",
              link: "interface/",
              prefix: "interface/",
              children: "structure",
            },
            "menu.html",
            "plugin.html",
            "network.html",
            "customCommand.html",],
        },
        {
          text: "高级教程",
          icon: "code",
          collapsible: true,
          prefix: "advanced/",
          children: "structure",
        },
      ],
    },
    {
      text: "介绍",
      icon: "circle-info",
      prefix: "info/",
      link: "info/",
    },
    {
      text: "案例",
      icon: "splotch",
      prefix: "projects/",
      link: "projects/",
    },
    {
      text: "其它",
      icon: "ellipsis",
      prefix: "other/",
      link: "other/",
    },
  ],
});
