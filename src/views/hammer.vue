<script setup>

import {ref} from 'vue';
import { forja } from '../store/forja.js';

const forj =  forja;
let array = ref(null);

//     array.value = respuesta;

</script>

<template>
    <h1>Martillo</h1>
    <!-- <div v-if = "array == null">
      <p> Cargando... </p>
    </div>
    <div v-else>
      <div v-for="x in array">
        <div v-if = "x.type == 'hammer'">
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
