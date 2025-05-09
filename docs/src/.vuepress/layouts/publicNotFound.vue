<script setup lang="ts">
import { NotFound } from "vuepress-theme-hope/client";
import { onMounted, onBeforeUnmount } from  "vue";
let styleElement: HTMLStyleElement | null = null
onMounted(() => {
  styleElement = document.createElement('style')
  styleElement.textContent = `:root{--Public404-width: calc(100vw - 11px);}.NotFoundPublic404{overflow-x: clip !important;}.vp-page.not-found{display:block !important;max-width:var(--Public404-width) !important;padding:calc(var(--navbar-height) + 1rem) 0rem 0rem !important;}.actions{margin-bottom:1rem !important;}.vp-footer-wrapper{display:none;}`
  document.head.appendChild(styleElement)
  let script = document.createElement("script");
  script.type = "text/javascript";
  script.src = `/js/publicNotFound.js`;
  script.setAttribute("rendertarget", "NotFoundPublic404");
  document.head.appendChild(script);
})
onBeforeUnmount(() => {
  styleElement?.remove()
  styleElement = null
})
</script>
<template>
  <NotFound>
    <template #default>
      <div id="NotFoundPublic404" class="NotFoundPublic404"></div>
    </template>
  </NotFound>
</template>
