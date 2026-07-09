<script setup lang="ts">
import { ref } from 'vue'
import { useDishesStore } from '@/stores/dishes'

import AddIcon from './Icons/AddIcon.vue'
import BookmarkIcon from './Icons/BookmarkIcon.vue'
import CalendarIcon from './Icons/CalendarIcon.vue'
import CloseIcon from './Icons/CloseIcon.vue'
import HamburgerIcon from './Icons/HamburgerIcon.vue'
import HeartIcon from './Icons/HeartIcon.vue'
import LogoIcon from './Icons/LogoIcon.vue'

const dishesStore = useDishesStore()

const isMenuOpen = ref(false)

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <!-- Header -->
  <header
    class="flex justify-between items-center border-b w-full max-w-screen-xl py-3 px-4 mx-auto"
  >
    <RouterLink to="/planner" class="flex gap-2 items-center">
      <LogoIcon class="logo" />
      <h1 class="text-primary text-xl font-medium">MealPlanner</h1>
    </RouterLink>

    <!-- Desktop -->
    <div class="hidden md:flex gap-6 items-center">
      <nav class="flex gap-1 text-terciary font-medium">
        <RouterLink
          to="/planner"
          class="flex gap-1 items-center px-3 py-2 rounded-3xl hover:bg-secondary/30 transition"
        >
          <CalendarIcon />
          <span>Meal Plan</span>
        </RouterLink>

        <RouterLink
          to="/dishes"
          class="flex gap-1 items-center px-3 py-2 rounded-3xl hover:bg-secondary/30 transition"
        >
          <BookmarkIcon />
          <span>All Dishes</span>
        </RouterLink>

        <RouterLink
          to="/favorites"
          class="flex gap-1 items-center px-3 py-2 rounded-3xl hover:bg-secondary/30 transition"
        >
          <HeartIcon />
          <span>Favorites</span>
        </RouterLink>
      </nav>

      <button
        class="flex gap-2 items-center bg-primary text-textlight rounded-3xl px-4 py-2 hover:opacity-90 transition"
        @click="dishesStore.openCreateModal()"
      >
        <AddIcon />
        <span class="font-medium">New Meal</span>
      </button>
    </div>

    <!-- Mobile -->
    <button class="md:hidden p-2" @click="isMenuOpen = true">
      <HamburgerIcon />
    </button>
  </header>

  <!-- Overlay -->
  <Transition name="fade">
    <div v-if="isMenuOpen" class="fixed inset-0 bg-black/40 z-40" @click="closeMenu" />
  </Transition>

  <!-- Drawer -->
  <Transition name="slide">
    <aside v-if="isMenuOpen" class="fixed top-0 right-0 h-screen w-72 bg-white shadow-xl z-50 p-6">
      <div class="flex justify-end items-center mb-8">
        <button @click="closeMenu">
          <CloseIcon />
        </button>
      </div>

      <nav class="flex flex-col items-center gap-2">
        <RouterLink
          to="/planner"
          @click="closeMenu"
          class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary/10 transition"
        >
          <CalendarIcon />
          Meal Plan
        </RouterLink>

        <RouterLink
          to="/dishes"
          @click="closeMenu"
          class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary/10 transition"
        >
          <BookmarkIcon />
          All Dishes
        </RouterLink>

        <RouterLink
          to="/favorites"
          @click="closeMenu"
          class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary/10 transition"
        >
          <HeartIcon />
          Favorites
        </RouterLink>
      </nav>
    </aside>
  </Transition>

  <!-- Floating button -->
  <button
    class="fixed md:hidden bottom-6 right-6 w-16 h-16 rounded-full bg-primary text-textlight shadow-xl flex items-center justify-center hover:scale-105 transition z-30"
    @click="dishesStore.openCreateModal()"
  >
    <AddIcon />
  </button>
</template>

<style scoped>
.logo {
  width: 42px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.25s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
