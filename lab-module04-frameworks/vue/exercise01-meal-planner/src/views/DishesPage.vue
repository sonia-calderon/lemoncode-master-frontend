<script setup lang="ts">
import { useDishesStore } from '@/stores/dishes'
import DishCard from '@/components/DishCard.vue'
import DishFilters from '@/components/DishFilters.vue'
import AddIcon from '@/components/Icons/AddIcon.vue'
import BookmarkSlashIcon from '@/components/Icons/BookmarkSlashIcon.vue'
import SectionHeader from '@/components/SectionHeader.vue'

const dishesStore = useDishesStore()
</script>

<template>
  <section class="flex flex-col gap-8">
    <!-- Title and description -->
    <SectionHeader
      section-title="All Dishes"
      section-description="Your personal collection of culinary inspirations"
    />

    <!-- Filters -->
    <div class="flex justify-between">
      <DishFilters />
    </div>

    <!-- Dish Card -->
    <div
      class="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-4"
      v-if="dishesStore.dishes.length > 0"
    >
      <DishCard v-for="dish in dishesStore.filteredDishes" :key="dish.id" :dish="dish" />
    </div>

    <!-- Empty Dishes -->
    <div v-else class="flex flex-col justify-center items-center gap-5">
      <div class="bg-border rounded-full w-20 h-20 flex items-center justify-center">
        <BookmarkSlashIcon class="w-10 h-10 stroke-gray-400" />
      </div>
      <div class="flex flex-col justify-center items-center gap-2">
        <p class="font-bold text-xl">There are no dishes yet</p>
        <p class="">Start adding your first dish</p>
      </div>
      <div>
        <button
          class="flex gap-1 bg-primary text-textlight rounded-3xl px-5 py-2"
          @click="dishesStore.openCreateModal()"
        >
          <AddIcon />
          New Meal
        </button>
      </div>
    </div>
  </section>
</template>
