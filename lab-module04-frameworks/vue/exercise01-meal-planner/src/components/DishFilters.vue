<script setup lang="ts">
import { useDishesStore } from '@/stores/dishes'
import type { DishCategory } from '@/types'

const dishesStore = useDishesStore()

const categories: DishCategory[] = ['Breakfast', 'Lunch', 'Dinner']
</script>
<template>
  <div class="flex gap-3 w-full py-4 border-t border-b px-3">
    <button
      class="px-6 py-2 rounded-3xl flex items-center font-semibold text-gray-700 hover:bg-green-400/20"
      @click="dishesStore.filterCategory('all')"
      :class="dishesStore.selectedCategory === 'all' ? 'bg-green-400/20' : 'hover:bg-green-400/20'"
    >
      All
    </button>
    <button
      v-for="category in categories"
      :key="category"
      class="px-4 py-2 rounded-3xl flex items-center font-semibold text-gray-700 hover:bg-green-400/20"
      @click="dishesStore.filterCategory(category)"
      :class="
        dishesStore.selectedCategory === category ? 'bg-green-400/20' : 'hover:bg-green-400/20'
      "
    >
      {{ category }}
    </button>
  </div>
</template>
