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
            if(dato == ""){
            }else{
                this.comprobante = true;
                this.hunter = dato;
                console.log("logeado");
                
            }
        }
    }
})