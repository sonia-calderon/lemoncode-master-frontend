<script setup lang="ts">
import DayCard from '@/components/DayCard.vue'
import XCircleIcon from '@/components/Icons/XCircleIcon.vue'
import { useDishesStore } from '@/stores/dishes'

const dishesStore = useDishesStore()
const handleClearPlanner = () => dishesStore.clearPlanner()
</script>

<template>
  <section class="flex flex-col gap-8">
    <div class="flex flex-col gap-2">
      <h2 class="text-3xl font-semibold">Week Planner</h2>
      <p class="text-base"></p>
    </div>

    <div class="flex justify-between">
      <div>Filters</div>
      <div>
        <button class="text-error flex gap-1 font-semibold" @click="handleClearPlanner">
          <XCircleIcon />
          Clear All
        </button>
      </div>
    </div>

    <div class="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-4">
      <DayCard />
    </div>
  </section>
</template>

<style scoped></style>
