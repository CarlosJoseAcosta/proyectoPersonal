import { defineStore } from 'pinia';

export const equipo = defineStore('armas', {
    state: () => ({
        weapons : [],
    }),
    getters:{

    },
    actions:{
        obtenerForja(datos){
            this.weapons.push(datos);
            console.log(this.weapons);
        },
        eliminarEquipo(dato){
            
        },
    }
}); 