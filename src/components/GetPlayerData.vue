<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();
const playerTag = ref("");
function onSubmit() {
  if (playerTag.value.length === 8) {
    router.push(`/result?tag=${playerTag.value}`);
  }
}
</script>
<template>
  <div id="getPlayerDataContainer">
    <h1>Here you can find datas about the player you are looking for</h1>
    <img
      class="logo-landing-page"
      alt="logo royale api "
      src="https://royaleapi.com/static/img/favicon2/apple-icon-60x60.png?t=d6c57df4c"
    />
    <form @submit.prevent="onSubmit()">
      <label for="player-id">Enter the player tag: 8 caracteres</label>
      <input
        name="player-id"
        type="text"
        v-model="playerTag"
        placeholder="00000000"
      />
      <button type="submit" :disabled="playerTag.length !== 8">SEARCH</button>
    </form>
  </div>
</template>
<style scoped>
h1 {
  font-size: 30px;
  color: brown;
}
div {
  display: flex;
  flex-direction: column;
  align-items: center;
}
label {
  color: burlywood;
  margin-bottom: 10px;
}
input {
  height: 40px;
  width: 122px;
  color: darkcyan;
  border-radius: 20px;
  margin-bottom: 20px;
  padding-left: 10px;
  letter-spacing: 2px;
}
input:focus {
  outline: none;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

button {
  border-radius: 1000px;
  height: 40px;
  font-size: 1.5rem;
  width: 150px;
  color: crimson;
  background-color: darkblue;
  cursor: pointer;
}
.logo-landing-page {
  width: 10rem;
  height: 10rem;
}

#getPlayerDataContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
