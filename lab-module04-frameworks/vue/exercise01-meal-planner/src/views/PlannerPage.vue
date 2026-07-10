<script setup lang="ts">
import DayCard from '@/components/DayCard.vue'
import DishFilters from '@/components/DishFilters.vue'
import SectionHeader from '@/components/SectionHeader.vue'
</script>

<template>
  <section class="flex flex-col gap-8">
    <!-- Title and description -->
    <SectionHeader
      section-title="Week Planner"
      section-description="Organize your meals for the week in a balanced and simple way."
    />

    <!-- Filters -->
    <div class="flex">
      <DishFilters />
    </div>

    <!-- Day Card -->
    <div class="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-4">
      <DayCard />
    </div>
  </section>
</template>
