<script setup lang="ts">
interface Person {
  name: string;
  email: string;
  url: string;
}
defineProps<{ author: Person }>();
import packageJson from "../../../package.json";
console.log(packageJson);
</script>

<template>
  <div>
    <p>
      Made with &#10084;&#65039; by
      <a target="_blank" :href="packageJson.author.url">{{
        packageJson.author.name
      }}</a>
    </p>
    <p>
      Thanks to
      <a :href="packageJson.contributors[0].url">{{
        packageJson.contributors[0].name
      }}</a>
    </p>
    <p>
      Version : <span>{{ packageJson.version }}</span>
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
