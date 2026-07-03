<script setup lang="ts">
import { useDishesStore } from '@/stores/dishes.ts';
import ChevronRight from './Icons/ChevronRightIcon.vue';
import HeartIcon from './Icons/HeartIcon.vue';

const dishesStore = useDishesStore()

</script>

<template>
    <article class="flex flex-col gap-4 bg-white border border-border rounded-lg p-4 w-full" v-for="dish in dishesStore.dishes" :key="dish.id">
        <div class="flex justify-between">
            <p class=" text-terciary text-xs font-medium px-3 py-1 rounded-3xl" :class="dish.category ? 'bg-primary/30' : 'bg-transparent'">{{ dish.category }}</p>
            <button @click="dishesStore.toggleFavorite(dish.id)"><HeartIcon class="cursor-pointer stroke-primary" :class="dish.isFavorite ? 'fill-primary' : 'fill-none'" /></button>
            
        </div>
        <div class="flex flex-col gap-1">
            <h5 class="text-text text-2xl font-bold">{{ dish.name }}</h5>
            <p class="text-text text-base">{{ dish.description }}</p>
        </div>
        <div class="flex justify-end items-center gap-1 border-t pt-2">
            <button class="text-primary font-semibold disabled:opacity-50 disabled:cursor-not-allowed" disabled>View recipe</button>
            <ChevronRight class="w-3 stroke-primary"  />
        </div>
    </article>
</template>