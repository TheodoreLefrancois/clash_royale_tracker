<script setup lang="ts">
import axios from "axios";
import { RoyaleResponse } from "../types";
const token = import.meta.env.VITE_TOKEN;
const { tag } = defineProps<{ tag: string }>();

const url = `https://proxy.royaleapi.dev/v1/players/%23${tag}`;
const { data } = await axios.get<RoyaleResponse>(url, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
console.log(data);
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
