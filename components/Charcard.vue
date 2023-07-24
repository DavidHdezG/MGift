<script setup>
const props = defineProps(['name', 'from'])
const { name, from } = toRefs(props)

</script>

<template>
  <div class="flex items-center justify-center min-h-screen transition-all duration-300">
    <div
      class="w-full  py-8 flex flex-col items-center justify-center mx-auto backdrop-blur-sm bg-white/30  rounded-lg shadow-xl"
    >
      <div class="w-[200px] flex flex-col mx-auto items-center justify-center">
        <img :src="from" alt="" class="mx-auto rounded-full" />
      </div>
      <div class="flex flex-col w-3/4 space-x-0">
        <div class="w-full space-y-4 flex flex-col justify-center items-center">
          <div class="flex flex-col justify-center space-y-4">
            <h1 class="pt-4 text-center text-2xl font-bold text-gray-200">
              {{ name }}
            </h1>
            <p class="inline text-white font-normal leading-6 w-full text-base">
              * Inserte descripción de personaje *
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
