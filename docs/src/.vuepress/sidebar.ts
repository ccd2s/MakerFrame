import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "开始使用",
      icon: "signs-post",
      prefix: "start/",
      link: "start/",
      children: "structure",
    },
    {
      text: "介绍",
      icon: "circle-info",
      prefix: "info/",
      link: "info/",
    },
  ],
});
