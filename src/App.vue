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
  <div v-if = "logg.comprobante" class="flex select-none items-center gap-3 rounded-lg border border-emerald-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase bg-linear-to-t from-green-500 from -10% to-black text-stone-50 transition-all">
    <h2>Welcome {{ logg.hunter }}</h2><br>
    <router-link to = "/greatsword"> Great Sword| </router-link>
    <router-link to = "/hammer"> Hammer| </router-link>
    <router-link to = '/bow'> Bow| </router-link>
    <router-link to = '/chargeBlade'> Charge blade| </router-link>
    <router-link to = '/dualblade'> Dual blade| </router-link>
    <router-link to = '/gunlance'> Gun Lance| </router-link>
    <router-link to = '/heavybowgun'> Heavy Bow Gun| </router-link>
    <router-link to = '/lightbowgun'> Light Bow Gun| </router-link>
    <router-link to = '/lance'> Lance| </router-link>
    <router-link to = '/longsword'> Long Sword| </router-link>
    <router-link to = '/switchaxe'> Switch Axe| </router-link>
    <router-link to = '/swordandshield'> Sword And Shield| </router-link>
    <router-link to = '/forja'> Desired   Equipment| </router-link>
  </div>
  <div v-else>
    <router-link to = '/'> Login| </router-link>
  </div>
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
