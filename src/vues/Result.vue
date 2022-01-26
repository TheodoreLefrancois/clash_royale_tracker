<script setup lang="ts">
const { tag } = defineProps<{ tag: string }>();
console.log(tag);
</script>

<template>
  <h1>Here you will find the result of the player</h1>
  <h2>
    You searched <span>{{ tag }}</span>
  </h2>
</template>

<style scoped>
h1 {
  color: crimson;
}
</style>
