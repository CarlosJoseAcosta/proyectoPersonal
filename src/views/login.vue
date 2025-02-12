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
        <input type="text" v-model="dato">
    </form>
    <button @click="logg()">Enviar</button>
    <div v-if="!loging.comprobante">
        <p>You have to regist to be able to see the weapons's forge</p>
    </div>
</template>