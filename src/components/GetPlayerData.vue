<script setup lang="ts">
console.log("it works");
</script>
<template>
  <h1>Here you can find datas about the player you are looking for</h1>
  <div>
    <label for="player-id">Write here the id of the player</label>
    <input name="player-id" type="text" />
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
</style>
