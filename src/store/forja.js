import { defineStore } from 'pinia';

export const forja = defineStore('arma', {
    state: () => ({
        array : [],
    }),
    getters:{

    },
    actions:{
        obtenerForja(datos){
            this.array = datos;
            console.log(this.array);
        }
    }
}); 