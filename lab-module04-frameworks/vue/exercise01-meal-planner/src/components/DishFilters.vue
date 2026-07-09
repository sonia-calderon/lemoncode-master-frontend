<script setup lang="ts">
import { useDishesStore } from '@/stores/dishes'
import type { DishCategory } from '@/types'
import XCircleIcon from './Icons/XCircleIcon.vue'
import { useRoute } from 'vue-router'

const dishesStore = useDishesStore()

const categories: DishCategory[] = ['Breakfast', 'Lunch', 'Dinner']
const route = useRoute()
</script>
<template>
  <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between border-y w-full">
    <!-- Filters -->
    <div class="flex justify-center sm:justify-start gap-2 py-3 px-2 sm:px-3">
      <button
        class="px-3 sm:px-6 py-2 rounded-3xl text-sm sm:text-base font-semibold text-gray-700"
        @click="dishesStore.filterCategory('all')"
        :class="
          dishesStore.selectedCategory === 'all' ? 'bg-green-400/20' : 'hover:bg-green-400/20'
        "
      >
        All
      </button>

      <button
        v-for="category in categories"
        :key="category"
        class="px-3 sm:px-4 py-2 rounded-3xl text-sm sm:text-base font-semibold text-gray-700"
        @click="dishesStore.filterCategory(category)"
        :class="
          dishesStore.selectedCategory === category ? 'bg-green-400/20' : 'hover:bg-green-400/20'
        "
      >
        {{ category }}
      </button>
    </div>

    <!-- Clear -->
    <div
      v-if="route.name === 'planner'"
      class="flex justify-center sm:justify-end px-2 pb-3 sm:pb-0 sm:px-3"
    >
      <button
        class="text-error flex items-center gap-1 font-semibold text-sm sm:text-base"
        @click="dishesStore.clearPlanner"
      >
        <XCircleIcon />
        Clear All
      </button>
    </div>
  </div>
</template>
