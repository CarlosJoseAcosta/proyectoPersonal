<script setup>

import {ref} from 'vue';
import { forja } from './store/forja.js'
import { log } from './store/login.js';

let url = "https://mhw-db.com/weapons";
let array = []
const forj = forja();
const logg = log();

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
  <div v-if = "logg.comprobante">
    <h2>Bienvenido {{ logg.hunter }}</h2>
  </div>
  <router-link to = '/'>Login</router-link>
  <router-link to = "/greatsword">Great Sword</router-link>
  <router-link to = "/hammer">Hammer</router-link>
  <router-link to = '/bow'>Bow</router-link>

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
