<script setup>
import Navbar from "./Navbar.vue";
</script>

<template>
  <section
    
  >
    

    <!-- <div class="flex items-center justify-evenly align-center h-full px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
            <h1 class="text ">Adéntrate en Argath</h1>
            
        </div> -->
    <div
      id="header"
      class="relative"
    >
        <Navbar />
      <div
        style="background: rgba(0, 0, 0, 0.5)"
        class="h-screen bg-opacity-50 bg-black flex flex-col items-center justify-center"
      >
        <div class="mx-2 text-center">
            <h1
              class="text-gray-100 font-extrabold text-4xl xs:text-5xl md:text-6xl"
            >
              <span class="text-white">Adéntrate en </span> Argath
            </h1>
        </div>
        <div class="p-5">
            <NuxtLink to="/books">
                <button
                  class="backdrop-blur-sm bg-white/30 text-indigo-800 font-bold py-2 px-4 rounded-full hover:bg-white hover:text-black transition-all duration-300"
                >
                  Leer
                </button>
            </NuxtLink>
        </div>
    </div>
    </div>
  </section>
  <!-- <div class="bod">
    <div class="section1">
      <div class="text">PARALLAX</div>
    </div>
    <div class="section2">
      <div class="text">Normal</div>
    </div>
  </div> -->
  
</template>

<style lang="css" scoped>
/* @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
 */

#header{
    background: url('/assets/bg.jpg') no-repeat center ;

}
</style>
