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
          .map((archivo) => `../assets/pages/${archivo.nombre}`);
          
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
          pic: "../assets/images/characters/alistair.png",
          from: "The North",
        },
        {
          name: "Carina Erwartung",
          pic: "../assets/images/characters/Carina.jpg",
          from: "The North",
        },
        {
          name: "Darian",
          pic: "../assets/images/characters/darian.png",
          from: "../assets/images/shields/etruria.jpg",
        },
        {
          name: "Evangeline Hoffen",
          pic: "../assets/images/characters/Evangeline.jpg",
          from: "../assets/images/shields/solaria.jpg",
        },
        {
          name: "Genesis Winterhold",
          pic: "../assets/images/characters/genesis.jpg",
          from: "The North",
        },
        {
          name: "Samnard Storm",
          pic: "../assets/images/characters/Sam.png",
          from: "../assets/images/shields/exodia.jpg",
        },
        {
          name: "Symond Westsong",
          pic: "../assets/images/characters/symond.png",
          from: "The North",
        },
        {
          name: "Blyana Westsong",
          pic: "../assets/images/characters/blyana.jpg",
          from: "The North",
        },
        {
          name: "Eizam Oakheart",
          pic: "../assets/images/characters/eizam.png",
          from: "../assets/images/shields/ironwood.jpg",
        },
        {
          name: "Larissa",
          pic: "../assets/images/characters/larissa.jpg",
          from: "../assets/images/shields/ironwood.jpg",
        },
        {
          name: "Yvette",
          pic: "../assets/images/characters/Yvette.jpg",
          from: "The North",
        },
        {
          name: "Orion",
          pic: "../assets/images/characters/orion.png",
          from: "The North",
        },
      ];
    },
  },
  persist: true,
});
