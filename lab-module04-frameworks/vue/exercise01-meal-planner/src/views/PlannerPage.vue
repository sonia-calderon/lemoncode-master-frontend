<script setup lang="ts">
import DayCard from '@/components/DayCard.vue'
import DishFilters from '@/components/DishFilters.vue'
</script>

<template>
  <section class="flex flex-col gap-8">
    <div class="flex flex-col gap-2">
      <h2 class="text-3xl font-semibold">Week Planner</h2>
      <p class="text-base">Organize your meals for the week in a balanced and simple way.</p>
    </div>

    <div class="flex">
      <DishFilters />
    </div>

    <div class="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-4">
      <DayCard />
    </div>
  </section>
</template>

<style scoped></style>
