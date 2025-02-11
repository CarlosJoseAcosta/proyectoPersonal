<script setup>

import { log } from '../store/login.js';
import {ref} from 'vue';

let loging = log();
let dato = ref("");
const logg= ()=>{
    loging.logeo(dato.value);
}
</script>

<template>
    <form action="">
        <label for="">Nombre de cazador: </label><br>
        <input type="text" v-model="dato">
        <button @click="logg()">Enviar</button>
    </form>
</template>