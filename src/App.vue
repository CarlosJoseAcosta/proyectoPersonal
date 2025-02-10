<script setup>

import {ref} from 'vue';
import { forja } from './store/forja.js'

let url = "https://mhw-db.com/weapons";
let array = []
const forj = forja();

const api = async ()=>{
    const respuesta = await fetch(url)
    .then((resp) => resp.json())
    array = respuesta;
    subirDatos();
}

const subirDatos = ()=>{
  forj.obtenerForja(array);
}

api();

</script>

<template>
  <router-link to = "/greatsword">Great Sword</router-link>
  <router-link to = "/hammer">Hammer</router-link>

  <router-view></router-view>
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
