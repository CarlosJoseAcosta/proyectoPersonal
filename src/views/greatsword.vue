<script setup>

import {ref} from 'vue';


let array = ref(null);
// let url = "https://mhw-db.com/zh-Hant/weapons";

// const api = async ()=>{
//   const respuesta = await fetch(url)
//   .then((resp) => resp.json())
//   array.value = respuesta;
// }

// api();
</script>

<template>
    <h1>Espadon</h1>
    <!-- <div v-if = "array == null">
      <p> Cargando... </p>
    </div>
    <div v-else>
      <div v-for="x in array">
        <div v-if = "x.type == 'great-sword'">
            <p>{{ x.type }}</p></div>
      </div>
    </div> -->
  </template>

<style scoped>


.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
