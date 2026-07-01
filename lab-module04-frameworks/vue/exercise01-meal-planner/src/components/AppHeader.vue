<script setup lang="ts">
import AddIcon from './Icons/AddIcon.vue';
import CalendarIcon from './Icons/CalendarIcon.vue';
import HeartIcon from './Icons/HeartIcon.vue';
import LogoIcon from './Icons/LogoIcon.vue';
</script>

<template>
    <header class="flex gap-3 justify-between items-center p-3 border-b w-full">
        <div class="flex gap-2 items-center">
            <LogoIcon class="logo" />
            <h1 class="text-primary text-xl font-medium">MealPlanner</h1>
        </div>
        <div class="flex gap-6 items-center">
            <nav class="flex gap-3 text-terciary font-medium">
                <RouterLink to="/" class="flex gap-1 items-center px-3 py-2 rounded-3xl hover:bg-secondary hover:bg-opacity-30">
                    <CalendarIcon />
                    Meal Plan
                </RouterLink>
                <RouterLink to="/favorites" class="flex gap-1 items-center px-3 py-2 rounded-3xl hover:bg-secondary hover:bg-opacity-30">
                    <HeartIcon />
                    Favorites
                </RouterLink>
            </nav>
            <button class="flex gap-1 bg-primary text-textlight rounded-3xl px-3 py-2">
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