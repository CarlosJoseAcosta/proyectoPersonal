<script setup>

import {ref} from 'vue';
import { forja } from '../store/forja.js';


let array = ref(null);
let forj = forja();

const cargarDatos = ()=>{
  array.value = forj.array;

  console.log("a");
}

cargarDatos();

</script>

<template>
    <h1>Espadon</h1>
    <div v-if = "array == null">
      <p> Cargando... </p>
    </div>
    <div v-else>
      <div v-for="x in array">
        <div v-if = "x.type == 'great-sword'">
          <h2>{{ x.name }}</h2>
          <div v-if = "x.assets.image == null">
            
          </div>
          <div v-else>
            <img :src="x.assets.image" alt=""></div>
            <p>Damage: {{ x.attack.display }}</p>
            <div v-if="x.elements == null || x.elements == ''">
              
            </div>
            <div v-else>
              <p>Element: {{ x.elements[0].type }}</p>
              <p>Elemental damage: {{ x.elements[0].damage }}</p>
            </div>
          </div>

      </div>
    </div>
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
