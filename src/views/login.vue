<script setup>

import { log } from '../store/login.js';
import {ref} from 'vue';
import {useRouter} from 'vue-router';

let loging = log();
let dato = ref("");
const rote = useRouter();

const logg= ()=>{
    loging.logeo(dato.value);
    // route.push('greatsword');
}

</script>

<template>
    <form action="">
        <label for="">Hunter's name: </label><br>
        <input class="border-2 border-style-solid"type="text" v-model="dato">
    </form>
    <button class="flex select-none items-center gap-3 rounded-lg border border-emerald-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase bg-linear-to-t from-green-500 from -10% to-neutral-800 text-stone-50 transition-all hover:opacity-75 focus:ring focus:ring-pink-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" @click="logg()">Enviar</button>
    <div v-if="!loging.comprobante">
        <p>You have to regist to be able to see the weapons's forge</p>
    </div>
</template>