import { defineStore } from 'pinia';

export const log = defineStore('usuario',{
    state: ()=>({
        hunter: null,
        comprobante: false,
    }),
    getters:{

    },
    actions:{
        logeo(dato){
            this.comprobante = true;
            this.hunter = dato;
        }
    }
})