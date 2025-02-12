<script setup>
    import { equipo } from '../store/equipo.js';
    import {ref} from 'vue';
    import { forja } from '../store/forja.js';

    let arrayForja = ref(null);
    let arrayDeseados = ref(null);
    const forj = forja();
    const weapon = equipo();

    console.log(weapon.array)

</script>

<template>
    <div v-if="(weapon.weapons == null)">
        <p>Make sure who has desired equipment</p>
    </div>
    <div v-else>
        <div v-for="x in weapon.weapons">
            <div v-for="y in forj.array">
                <div v-if="x == y.id">
                    <h2>{{ y.name }}</h2>
                    <div v-if = "(x.assets == null)||(x.assets.image == '')||(x.assets.image == null)">
                        <img :src="y.assets.image" alt="">
                    </div>
                    <p><b>crafting materials:</b></p>
                    <div v-for = "z in y.crafting.craftingMaterials">
                        <p>{{ z.item.name }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>