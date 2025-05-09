<script setup lang="ts">
import { NotFound } from "vuepress-theme-hope/client";
import { onMounted } from  "vue";
onMounted(() => {
  const style = document.createElement('style');
  style.textContent = ':root{--Public404-width: calc(100vw - 11px);} .NotFoundPublic404{overflow-x: clip !important;}.vp-footer-wrapper{display: none;}.vp-page.not-found{display: block !important;max-width: var(--Public404-width) !important;padding: calc(var(--navbar-height) + 1rem) 0rem 0rem !important;}.actions{margin-bottom:1rem !important;}';
  document.head.appendChild(style);
  let script = document.createElement("script");
  script.type = "text/javascript";
  script.src = `/js/publicNotFound.js`;
  script.setAttribute("rendertarget", "NotFoundPublic404");
  document.head.appendChild(script);
});
</script>
<template>
  <NotFound>
    <template #default>
      <div id="NotFoundPublic404" class="NotFoundPublic404"></div>
    </template>
  </NotFound>
</template>
