<script setup lang="ts">
import { useDishesStore } from '@/stores/dishes.ts'
import AddIcon from './Icons/AddIcon.vue'
import CalendarIcon from './Icons/CalendarIcon.vue'
import HeartIcon from './Icons/HeartIcon.vue'
import LogoIcon from './Icons/LogoIcon.vue'
import BookmarkIcon from './Icons/BookmarkIcon.vue'

const dishesStore = useDishesStore()

const handleOpenModal = () => dishesStore.openModal()
</script>

<template>
  <header
    class="flex gap-3 justify-between items-center border-b w-full max-w-screen-xl py-3 px-4 my-0 mx-auto"
  >
    <RouterLink to="planner" class="flex gap-2 items-center">
      <LogoIcon class="logo" />
      <h1 class="text-primary text-xl font-medium">MealPlanner</h1>
    </RouterLink>
    <div class="flex gap-6 items-center">
      <nav class="flex gap-1 text-terciary font-medium">
        <RouterLink
          to="/planner"
          class="flex gap-1 items-center px-3 py-2 rounded-3xl hover:bg-secondary hover:bg-opacity-30"
        >
          <CalendarIcon />
          <span>Meal Plan</span>
        </RouterLink>
        <RouterLink
          to="/dishes"
          class="flex gap-1 items-center px-3 py-2 rounded-3xl hover:bg-secondary hover:bg-opacity-30"
        >
          <BookmarkIcon />
          <span>All Dishes</span>
        </RouterLink>
        <RouterLink
          to="/favorites"
          class="flex gap-1 items-center px-3 py-2 rounded-3xl hover:bg-secondary hover:bg-opacity-30"
        >
          <HeartIcon />
          <span>Favorites</span>
        </RouterLink>
      </nav>
      <button
        class="flex gap-1 bg-primary text-textlight rounded-3xl px-3 py-2"
        @click="handleOpenModal"
      >
        <AddIcon />
        <span class="font-medium">New Meal</span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.logo {
  width: 42px;
}
</style>
