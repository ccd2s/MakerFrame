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
  ],
});
