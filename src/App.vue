<script setup lang="ts">
import HelloWorldVue from "./components/HelloWorld.vue";
import GetPlayerData from "./components/GetPlayerData.vue";
import Footer from "./components/layout/Footer.vue";
import { ref } from "vue";
const playerTag = ref("");
</script>

<template>
  <div id="flex-root" data-testid="root-div">
    <HelloWorldVue msg="Welcome in Scrapp Royal API app" />
    <GetPlayerData :playerTag="playerTag" />
    <Footer />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #aec2d3;
  margin-top: 60px;
  height: 100%;
}
#flex-root {
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: flex-start;
}
</style>
