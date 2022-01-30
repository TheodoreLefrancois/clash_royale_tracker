<script setup lang="ts">
import getScreenshot from "../utils/puppeteerCreateScreenshot";
const { tag } = defineProps<{ tag: string }>();
getScreenshot(tag);
</script>

<template>
  <h1>
    You searched <span>{{ tag }}</span>
  </h1>
  <h2>We are collecting datas</h2>
</template>

<style scoped>
h1 {
  color: crimson;
}
</style>
