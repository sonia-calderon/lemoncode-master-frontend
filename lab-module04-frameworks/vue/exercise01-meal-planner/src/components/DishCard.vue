<script setup lang="ts">
import ChevronRight from './Icons/ChevronRightIcon.vue';
import HeartIcon from './Icons/HeartIcon.vue';

</script>

<template>
    <article class="flex flex-col gap-4 bg-white border border-border rounded-lg p-4 w-full">
        <div class="flex justify-between">
            <p class="bg-primary bg-opacity-30 text-terciary text-xs font-medium px-3 py-1 rounded-3xl ">Breakfast</p>
            <HeartIcon class="cursor-pointer stroke-primary" />
        </div>
        <div class="flex flex-col gap-1">
            <h5 class="text-text text-2xl font-bold">Avocado Toast & Poached Egg</h5>
            <p class="text-text text-base">Perfectly seasoned avocado on sourdough bread with a runny egg and microgreens</p>
        </div>
        <div class="flex justify-end items-center gap-1 border-t pt-2">
            <button class="text-primary font-semibold">Ver receta</button>
            <ChevronRight class="w-3 stroke-primary" />
        </div>
    </article>
</template>