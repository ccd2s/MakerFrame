import type { VNode } from "vue";
import { defineComponent, h } from "vue";
import { useRouter } from "vuepress/client";
import { useData } from "vuepress-theme-hope/client";

import "../styles/notFoundPublic404.scss";
import { Public404 } from "./notFoundPublicScript.js";

export default defineComponent({
    name: "notFoundPublic",

    setup() {
        const { routeLocale, themeLocale } = useData();
        const router = useRouter();

        Public404("NotFoundPublic404");
        return (): VNode[] => [
            h("div", { class: "actions" }, [
                h(
                    "button",
                    {
                        type: "button",
                        class: "action-button",
                        onClick: () => {
                            window.history.go(-1);
                        },
                    },
                    themeLocale.value.routeLocales.back,
                ),
                h(
                    "button",
                    {
                        type: "button",
                        class: "action-button",
                        onClick: () => {
                            void router.push(themeLocale.value.home ?? routeLocale.value);
                        },
                    },
                    themeLocale.value.routeLocales.home,
                ),
            ]),
            h("div", {
                id: "NotFoundPublic404",
                class: "NotFoundPublic404"
            })
        ];
    },
});