<script setup lang="ts">
interface Person {
  name: string;
  email: string;
  url: string;
}
import { version, author, contributors } from "../../../package.json";
</script>

<template>
  <div>
    <p>
      Made with &#10084;&#65039; by
      <a target="_blank" :href="author.url">{{ author.name }}</a>
    </p>
    <p>
      Thanks to
      <a :href="contributors[0].url">{{ contributors[0].name }}</a>
    </p>
    <p>
      Version : <span>{{ version }}</span>
    </p>
  </div>
</template>

<style scoped>
template {
  z-index: 10;
  position: fixed;
  bottom: 0%;
  width: 100%;
  background-color: darkgreen;
  height: 100px;
  color: darkgrey;
  text-align: center;
}
span {
  font-style: italic;
  color: crimson;
}
a {
  text-decoration: none;
}
</style>
