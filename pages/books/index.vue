<script setup>
import Flipbook from "flipbook-vue";
import AltLayout from "../../layouts/AltLayout.vue";
const ambient = ref(0.1);
const gloss = ref(0.4);

let pages = ref([
  null,
  "/pages/1.png",
  "/pages/2.png",
  "/pages/3.png",
  "/pages/4.png",
  "/pages/5.png",
  "/pages/6.png",
  "/pages/7.png",
  "/pages/8.png",
  "/pages/9.png",
  "/pages/10.png",
  "/pages/11.png",
  "/pages/12.png",
  ,
  "/2.png",
]);
</script>

<template>
  <AltLayout class="flex flex-col items-center">
    <div class="relative mt-16 pb-6 items-center flex flex-col space-y-5">
      <h1 class="pt-10 text-4xl font-bold text-white mx-auto">Monarcas</h1>
        <p class="text-white mx-auto">Flores & Estrellas de ceniza</p>
      <Flipbook
        class="flipbook"
        :pages="pages"
        :ambient="ambient"
        :gloss="gloss"
      >
      </Flipbook>
    </div>
  </AltLayout>
</template>

<style lang="css" scoped>
.flipbook {
  width: 90vw;
  height: 90vh;
}
</style>
