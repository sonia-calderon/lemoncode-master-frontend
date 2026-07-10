<script setup lang="ts">
import { useDishesStore } from '@/stores/dishes'
import type { DishCategory, WeekDay } from '@/types/index.ts'
import AddIcon from './Icons/AddIcon.vue'
import { computed } from 'vue'

const weekDays: WeekDay[] = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]

const categories: DishCategory[] = ['Breakfast', 'Lunch', 'Dinner']

const dishesStore = useDishesStore()

const getDish = (day: WeekDay, category: DishCategory) => {
  return dishesStore.dishes.find((dish) => dish.weekDay === day && dish.category === category)
}

const filteredCategories = computed(() => {
  if (dishesStore.selectedCategory === 'all') {
    return categories
  }
  return [dishesStore.selectedCategory]
})
</script>

<template>
  <article
    class="flex flex-col gap-1 bg-white w-full rounded-lg"
    v-for="weekday in weekDays"
    :key="weekday"
  >
    <!-- Header-->
    <div class="bg-primary bg-opacity-10 p-4 rounded-t-lg border-b">
      <p class="font-semibold text-primary">{{ weekday }}</p>
    </div>
    <!-- Content -->
    <div class="flex flex-col gap-4 p-4" v-for="category in filteredCategories" :key="category">
      <!-- Meal -->
      <div class="flex flex-col gap-2" v-if="getDish(weekday, category)">
        <p class="uppercase font-semibold text-sm text-gray-500">{{ category }}</p>
        <p
          class="border border-primary border-opacity-10 rounded-xl bg-primary bg-opacity-10 p-2 cursor-pointer"
          @click="dishesStore.openEditModal(getDish(weekday, category)!)"
        >
          {{ getDish(weekday, category)?.name }}
        </p>
      </div>

      <!-- Empty -->
      <div class="flex flex-col gap-2" v-else>
        <p class="uppercase font-semibold text-sm text-gray-500">{{ category }}</p>
        <button
          class="empty flex items-center justify-center border border-primary border-dashed rounded-xl bg-opacity-10 p-2 cursor-pointer"
          @click="dishesStore.openCreateModal(weekday, category)"
        >
          <AddIcon class="stroke-primary" />
        </button>
      </div>
    </div>
  </article>
</template>
