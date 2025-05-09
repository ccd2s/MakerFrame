<script setup lang="ts">
import { NotFound } from "vuepress-theme-hope/client";
import { onMounted } from  "vue";
onMounted(() => {
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
