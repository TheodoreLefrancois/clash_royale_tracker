<script setup lang="ts">
const { tag } = defineProps<{ tag: string }>();
</script>

<template>
  <h1>
    You searched <span>{{ tag }}</span>
  </h1>
  <!-- <img src="/screenshot.png" alt="result_picture_from_royale_api" /> -->
</template>

<style scoped>
h1 {
  color: crimson;
}
</style>
