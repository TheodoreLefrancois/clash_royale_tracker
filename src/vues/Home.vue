<script setup lang="ts">
import HelloWorldVue from "../components/HelloWorld.vue";
import GetPlayerDataVue from "../components/GetPlayerData.vue";
import { ref } from "vue";
const playerTag = ref("");
</script>

<template>
  <HelloWorldVue msg="Welcome in Scrapp Royal API app" />
  <GetPlayerDataVue :playerTag="playerTag" />
</template>

<style scoped></style>
