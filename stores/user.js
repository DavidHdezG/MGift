
import { defineStore } from "pinia";



export const useUserStore = defineStore('user',{
    state: () => ({
        id:'',
        name:'',
        email:'',
        image:'',
        lastpg:'',

    }),
    persist: true,

});