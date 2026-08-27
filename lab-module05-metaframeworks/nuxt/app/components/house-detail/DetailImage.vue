<script setup lang="ts">
import type { House } from '~/types/house';

const props = defineProps<{
    house: House
}>()

const config = useRuntimeConfig();

</script>

<template>
    <div class="relative aspect-16/8 w-full overflow-hidden rounded-2xl sm:aspect-16/7 lg:aspect-16/6">
      <NuxtImg
        :src="`${config.public.apiBaseUrl}${house.image}`"
        :alt="house.name"
        sizes="(max-width: 640px) 100vw, 100vw"
        class="h-full w-full object-cover"
      />
    </div>
</template>

<style scoped>

</style>