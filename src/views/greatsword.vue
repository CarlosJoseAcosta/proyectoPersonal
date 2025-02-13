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
  <h1 class="my-4 text-center text-3xl font-bold">Great Sword</h1>
  
  
  <div v-if = "array == null">
    <p> Cargando... </p>
  </div>
  <div v-else>
    <div v-for="x in array">
      
      <div class="" v-if = "(x.type == 'great-sword') && (x.crafting.craftable == true)">
        <div class = "border-2 border-style-solid ">
          <h2 class="text-2xl font-bold">{{ x.name }}</h2>
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
            <p>Durability: red: {{ x.durability[5].red }}, orange: {{ x.durability[5].orange }}, yellow:  {{ x.durability[5].yellow }}, green: {{ x.durability[5].green }},  blue: {{ x.durability[5].blue }}</p>
            <button  :value = "x.id" id = "idDeseado"  @click="equipoDeseado(x.id)">Desire</button>
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
