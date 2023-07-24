<script setup lang="ts">
import NavLinks from "./NavLinks.vue";
const links = [
  { name: "Inicio", to: "/" },
  { name: "Libros", to: "/books" },
  { name: "Sobre mí", to: "/about" },
  { name: "Inicia sesión", to: "/" },
] as { name: string; to: string }[];

</script>

<template>
    <nav class="absolute  bg-transparent w-full flex justify-between items-center mx-auto px-8 py-4 h-20 text-white">
        <div class="inline-flex">
            Mar. E
        </div>
        <div class="">
            <div class="flex ">
                <NavLinks :links="links" />

            </div>
        </div>
    </nav>
</template>
