<script setup lang="ts">
import DishCard from '@/components/DishCard.vue';



</script>

<template>
  <section class="flex flex-col gap-8">
    <div class="flex flex-col gap-2">
      <h2 class="text-3xl font-semibold">My Favorite Dishes</h2>
      <p class="text-base">Your personal collection of culinary inspirations</p>
    </div>
    
    <div class="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-4">
      <DishCard />
      <DishCard />
      <DishCard />
      <DishCard />
      <DishCard />
      <DishCard />
      <DishCard />
    </div>
  </section>
  
  
</template>

<style scoped></style>
