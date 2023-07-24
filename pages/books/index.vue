<script setup>
import Flipbook from "flipbook-vue";
import AltLayout from "../../layouts/AltLayout.vue";
const ambient = ref(0.1);
const gloss = ref(0.4);

let pages = ref([
  null,
  "../../assets/pages/1.png",
  "../../assets/pages/2.png",
  "../../assets/pages/3.png",
  "../../assets/pages/4.png",
  "../../assets/pages/5.png",
  "../../assets/pages/6.png",
  "../../assets/pages/7.png",
  "../../assets/pages/8.png",
  "../../assets/pages/9.png",
  "../../assets/pages/10.png",
  "../../assets/pages/11.png",
  "../../assets/pages/12.png",
  ,
  "../../assets/2.png",
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
