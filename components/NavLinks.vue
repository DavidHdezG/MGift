<script lang="ts" setup>
    const { links } = defineProps<{
        links: {
            name: string,
            to: string
        }[]
    }>()
</script>

<template>
    <ul class="flex items-center gap-4">
        <NuxtLink 
            :to="link.to"
            :class=" $route.path === link.to ? 'border-4 border-transparent border-b-indigo-500 hover:border-b-indigo-800 transition-all duration-300' : 'hover:border-4 border-transparent border-b-indigo-200 transition-all duration-300'"
            class="p-1"
            v-for="(link,index) in links"
            :key="`navlinks-${index}`">
            {{link.name}}
        </NuxtLink>
    </ul>
</template>
