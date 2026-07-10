<script setup lang="ts">
import { useDishesStore } from '@/stores/dishes'
import DishCard from '@/components/DishCard.vue'
import DishFilters from '@/components/DishFilters.vue'
import EyeIcon from '@/components/Icons/EyeIcon.vue'
import HeartIcon from '@/components/Icons/HeartIcon.vue'
import SectionHeader from '@/components/SectionHeader.vue'

const dishesStore = useDishesStore()
</script>

<template>
  <section class="flex flex-col gap-8">
    <!-- Title and description -->
    <SectionHeader
      section-title="My Favorite Dishes"
      section-description="Your personal collection of culinary inspirations"
    />

    <!-- Filters -->
    <div class="flex justify-between">
      <DishFilters />
    </div>

    <!-- Favorite Dish Card -->
    <div
      class="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-4"
      v-if="dishesStore.favoriteDishes.length > 0"
    >
      <DishCard v-for="dish in dishesStore.filteredFavoriteDishes" :key="dish.id" :dish="dish" />
    </div>

    <!-- Empty Dishes -->
    <div v-else class="flex flex-col justify-center items-center gap-5">
      <div class="bg-border rounded-full w-20 h-20 flex items-center justify-center">
        <HeartIcon class="w-10 h-10 stroke-gray-400" />
      </div>
      <div class="flex flex-col justify-center items-center gap-2">
        <p class="font-bold text-xl">There are no favorite dishes yet</p>
        <p class="">Explore recipies and save your favorites</p>
      </div>
      <div>
        <RouterLink
          to="/dishes"
          class="flex items-center justify-center gap-2 bg-primary text-textlight rounded-3xl px-5 py-2"
        >
          <EyeIcon />
          Explore Dishes
        </RouterLink>
      </div>
    </div>
  </section>
</template>
