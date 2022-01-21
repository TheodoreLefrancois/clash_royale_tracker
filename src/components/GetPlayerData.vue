<script setup lang="ts">
defineProps<{ playerTag: string }>();
</script>
<template>
  <div id="getPlayerDataContainer">
    <h1>Here you can find datas about the player you are looking for</h1>
    <img
      class="logo-landing-page"
      alt="logo royale api "
      src="https://royaleapi.com/static/img/favicon2/apple-icon-60x60.png?t=d6c57df4c"
    />
    <div>
      <label for="player-id">Write here the id of the player</label>
      <input
        name="player-id"
        type="text"
        v-model="playerTag"
        placeholder="player tag"
      />
    </div>
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
  margin-bottom: 5px;
}
input {
  height: 20px;
  width: 100px;
  color: darkcyan;
  background-color: darkblue;
  border-color: darkblue;
}
input:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  border-radius: 8;
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
