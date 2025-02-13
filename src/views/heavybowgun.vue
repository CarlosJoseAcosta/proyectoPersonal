<script setup>

import {ref} from 'vue';
import { forja } from '../store/forja.js';
import { equipo } from '../store/equipo.js';


let array = ref(null);
let forj = forja();
const weapon = equipo();

const cargarDatos = ()=>{
  array.value = forj.array;
  console.log("a");
  const weapon = equipo();
}

const equipoDeseado = (id)=>{
  weapon.obtenerForja(id);
}

cargarDatos();


</script>

<template>
    <h1>Heavy Bow Gun</h1>
    <div v-if = "array == null">
      <p> Cargando... </p>
    </div>
    <div v-else>
      <div v-for="x in array">
        
        <div v-if = "(x.type == 'heavy-bowgun') && (x.crafting.craftable == true)">
          <h2>{{ x.name }}</h2>
          <div v-if = "x.assets.image == null">
            
          </div>
          <div v-else>
            <img :src="x.assets.image" alt="">
          </div>
            <p><b>Damage:</b> {{ x.attack.display }}</p>
            <div v-if="(x.elements == '')">
              
            </div>
            <div v-else>
              <p><b>Element:</b> {{ x.elements[0].type }}</p>
              <p>Elemental damage: {{ x.elements[0].damage }}</p>
            </div>
            <p><b>crafting materials:</b></p>
            <div v-for = "y in x.crafting.craftingMaterials">
              <p>{{ y.item.name }}</p>
            </div>
            <button class="flex select-none items-center gap-3 rounded-lg border border-emerald-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase bg-linear-to-t from-green-500 from -10% to-neutral-800 text-stone-50 transition-all hover:opacity-75 focus:ring focus:ring-pink-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" :value = "x.id" id = "idDeseado"  @click="equipoDeseado(x.id)">Desire</button>
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
