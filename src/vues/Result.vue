<script setup lang="ts">
import axios from "axios";
import { RoyaleResponse } from "../types";
// const token = import.meta.env.VITE_TOKEN_PROXY;
const token = import.meta.env.VITE_TOKEN;
const { tag } = defineProps<{ tag: string }>();
const Authorization = "Authorization";
// const url = `https://proxy.royaleapi.dev/v1/players/%23${tag}`;
const url = `https://api.clashroyale.com/v1/players/%23${tag}`;
const { data } = await axios.get<RoyaleResponse>(url, {
  headers: {
    [Authorization]: `Bearer ${token}`,
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

<!-- <script setup lang="ts">
import axios from "axios";
import { RoyaleResponse } from "../types";
import { defineComponent, onMounted, ref } from "vue";
const token = import.meta.env.VITE_TOKEN;
const { tag } = defineProps<{ tag: string }>();
defineComponent({
  props: {},
  name: "Result Vue",
  setup() {
    const data = ref<RoyaleResponse>({} as RoyaleResponse);
    const loading = ref(true);
    const error = ref(null);

    async function fetchData() {
      const url = `https://proxy.royaleapi.dev/v1/players/%23${tag}`;
      const response = await axios.get<RoyaleResponse>(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      data.value = response.data;
      loading.value = false;
    }
    onMounted(() => {
      fetchData();
    });
    on;
    return {
      data,
      loading,
      error,
    };
  },
});
export default {
  data() {
    return {
      data: {},
    };
  },
  mounted() {
    const url = `https://proxy.royaleapi.dev/v1/players/%23${tag}`;
    const response = axios
      .get<RoyaleResponse>(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => (this.data = data));
    console.log(response);
    data.value = response.data;
    loading.value = false;
  },
};
</script>

<template>
  <h1>Here you will find the result of the player</h1>
  <h2>
    You searched <span>{{ tag }}</span>
  </h2>
  <div v-if=""></div>
</template>

<style scoped>
h1 {
  color: crimson;
}
</style> -->
