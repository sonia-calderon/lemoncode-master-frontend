<script setup lang="ts">
import DishCard from '@/components/DishCard.vue'
import AddIcon from '@/components/Icons/AddIcon.vue'
import BookmarkSlashIcon from '@/components/Icons/BookmarkSlashIcon.vue'
import { useDishesStore } from '@/stores/dishes'

const dishesStore = useDishesStore()

const handleOpenModal = () => dishesStore.openModal()
</script>

<template>
  <section class="flex flex-col gap-8">
    <div class="flex flex-col gap-2">
      <h2 class="text-3xl font-semibold">All Dishes</h2>
      <p class="text-base">Your personal collection of culinary inspirations</p>
    </div>

    <!-- Dish Card -->
    <div
      class="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-4"
      v-if="dishesStore.dishes.length > 0"
    >
      <DishCard v-for="dish in dishesStore.dishes" :key="dish.id" :dish="dish" />
    </div>
    <!-- Empty Dishes -->
    <div v-else class="flex flex-col justify-center items-center gap-5">
      <div class="bg-border rounded-full w-20 h-20 flex items-center justify-center">
        <BookmarkSlashIcon class="w-10 h-10 stroke-gray-400" />
      </div>
      <div class="flex flex-col justify-center items-center gap-2">
        <p class="font-bold text-xl">There are no dishes yet</p>
        <p class="">Start adding your first dishes</p>
      </div>
      <div>
        <button
          class="flex gap-1 bg-primary text-textlight rounded-3xl px-5 py-2"
          @click="handleOpenModal"
        >
          <AddIcon />
          New Meal
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
