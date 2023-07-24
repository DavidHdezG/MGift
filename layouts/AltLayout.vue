<script setup>
import Navbar from "../components/Navbar.vue";
</script>

<template>
  <div class="w-full h-full flex flex-col">
    <Navbar />
    <slot/>
  </div>
</template>
