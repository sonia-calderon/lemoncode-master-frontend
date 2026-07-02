<script setup lang="ts">
import DayCard from '@/components/DayCard.vue';
import DishModal from '@/components/DishModal.vue';


</script>

<template>
  <DishModal />
  <section class="flex flex-col gap-8">
    <div class="flex flex-col gap-2">
      <h2 class="text-3xl font-semibold">Week Planner</h2>
      <p class="text-base"></p>
    </div>
    
    <div class="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-4">
      <DayCard />
      <DayCard />
      <DayCard />
      <DayCard />
      <DayCard />
      <DayCard />
      <DayCard />
    </div>
  </section>
</template>

<style scoped></style>
