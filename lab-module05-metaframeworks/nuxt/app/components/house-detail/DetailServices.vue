<script setup lang="ts">
import type { House } from '~/types/house';
import AmenityIcon from './AmenityIcon.vue';

const props = defineProps<{
    house: House
}>()
</script>

<template>
    <div class="flex flex-col gap-4 border-b border-neutral/10 pb-6">
      <h5 class="text-2xl font-display font-semibold text-primary">
        Servicios Destacados
      </h5>

      <ul class="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          <li
            v-for="amenity in house.amenities"
            :key="amenity"
            class="flex min-h-14 flex-col items-center justify-center gap-1 rounded-xl bg-white/60 px-2 py-2 text-center text-xs text-primary transition-colors"
          >
            <!-- Icono -->
            <AmenityIcon :amenity="amenity" />

            <span>{{amenity}}</span>
          </li>
      </ul>
    </div>
</template>

<style scoped>

</style>