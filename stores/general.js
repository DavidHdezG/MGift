import { defineStore } from "pinia";
import { useUserStore } from "./user";

export const useGeneralStore = defineStore("general", {
  state: () => ({
    isLogged: false,
    characters: [],
    bookPages: [],
  }),
  actions: {
    
    async getBookPages() {
      var arregloRutas = [];
      this.$state.bookPages.push(null);
      const directorio = "./assets/pages";
      /*      fs.readdirSync(directorio).forEach((archivo) => {
        const rutaCompleta = path.join(directorio, archivo);
        this.$state.bookPages.push(rutaCompleta);
        console.log(rutaCompleta)
      });
 */   let temp = ""
      fs.readdir(directorio, (err, archivos) => {
        if (err) {
          console.error("Error al leer la carpeta:", err);
          return;
        }

        arregloRutas = archivos
          .filter((archivo) => archivo.endsWith(".png"))
          .map((archivo) => ({
            nombre: archivo,
            numero: parseInt(archivo.split(".")[0]),
          }))
          .sort((a, b) => a.numero - b.numero)
          .map((archivo) => `pages/${archivo.nombre}`);
          
          for (let index = 0; index < arregloRutas.length; index++) {
            temp=arregloRutas[index]
            this.$state.bookPages.push(temp);
            //console.log(this.$state.bookPages[index]);
          }

      });
      console.log(arregloRutas)
      for ( const item of this.$state.bookPages){
        console.log(item)
      }
    },

    async getCharData() {
      this.$state.characters = [
        {
          name: "Alistair Erwartung",
          pic: "images/characters/alistair.png",
          from: "The North",
        },
        {
          name: "Carina Erwartung",
          pic: "images/characters/Carina.jpg",
          from: "The North",
        },
        {
          name: "Darian",
          pic: "images/characters/darian.png",
          from: "images/shields/etruria.jpg",
        },
        {
          name: "Evangeline Hoffen",
          pic: "images/characters/Evangeline.jpg",
          from: "images/shields/solaria.jpg",
        },
        {
          name: "Genesis Winterhold",
          pic: "images/characters/genesis.jpg",
          from: "The North",
        },
        {
          name: "Samnard Storm",
          pic: "images/characters/Sam.png",
          from: "images/shields/exodia.jpg",
        },
        {
          name: "Symond Westsong",
          pic: "images/characters/symond.png",
          from: "The North",
        },
        {
          name: "Blyana Westsong",
          pic: "images/characters/blyana.jpg",
          from: "The North",
        },
        {
          name: "Eizam Oakheart",
          pic: "images/characters/eizam.png",
          from: "images/shields/ironwood.jpg",
        },
        {
          name: "Larissa",
          pic: "images/characters/larissa.jpg",
          from: "images/shields/ironwood.jpg",
        },
        {
          name: "Yvette",
          pic: "images/characters/Yvette.jpg",
          from: "The North",
        },
        {
          name: "Orion",
          pic: "images/characters/orion.png",
          from: "The North",
        },
      ];
    },
  },
  persist: true,
});
