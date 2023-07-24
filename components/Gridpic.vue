<script setup>
import Charcard from "./Charcard.vue";
let whoxd = ref(null);
let from = ref(null);
const { $generalStore } = useNuxtApp();
try {
  await $generalStore.getCharData();
} catch (e) {
  console.log(e);
}
const who = (nombre) => {
  whoxd.value = nombre;
  from.value = $generalStore.characters.find((character) => character.name === nombre).from;
  console.log(from.value);
};
</script>

<template>
  <div class="p-8 flex flex-col space-y-5">
    <div class="flex flex-col items-center justify-center space-y-5">
    <h1 class="text-4xl font-bold text-white">Conoce a los personajes</h1>
    <p class="text-white">Selecciona un personaje para ver su información</p>
  </div>
  <div class="flex pt-4">
    <div class="gallery grid gap-2.5 aspect-video">
      <div v-for="item in $generalStore.characters">
        <img :src="item.pic" alt="" @mouseenter="who(item.name)" />
      </div>
    </div>
    <div class="mx-auto transition-all duration-300">
      <Charcard :name="whoxd" :from="from" />
    </div>
  </div>
  </div>
</template>

<style lang="css" scoped>
.gallery {
  --s: 300px; /* control the size */
  --g: 10px; /* control the gap */
  --f: 1.5; /* control the scale factor */

  width: calc(3 * var(--s) + 2 * var(--g));
  /* aspect-ratio: 1; */
  grid-template-columns: repeat(4, auto);
}

.gallery > div img {
  width: 0;
  height: 0;
  min-height: 100%;
  min-width: 100%;
  object-fit: cover;
  cursor: pointer;
  filter: grayscale(80%);
  transition: 0.35s linear;
}

.gallery img:hover {
  filter: grayscale(0);
  width: calc(var(--s) * var(--f));
  height: calc(var(--s) * var(--f));
}

.gallery > div {
  overflow: hidden;
}

.txt {
  display: hidden;
}
.txt:hover {
  display: block;
}
</style>
