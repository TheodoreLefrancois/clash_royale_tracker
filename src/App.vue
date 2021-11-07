<script setup lang="ts">
import GetPlayerData from "./components/GetPlayerData.vue";
import Footer from "./components/layout/Footer.vue";
</script>

<template>
  <div id="flex-root">
    <GetPlayerData />
    <HelloWorld msg="Welcome in Scrapp Royal API app" />
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
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
}
</style>
