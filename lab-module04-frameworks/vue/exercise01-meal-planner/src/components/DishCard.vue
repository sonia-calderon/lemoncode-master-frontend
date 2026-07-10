<script setup lang="ts">
import { useDishesStore } from '@/stores/dishes.ts'
import type { Dish } from '@/types/index.ts'
import HeartIcon from './Icons/HeartIcon.vue'
import CalendarIcon from './Icons/CalendarIcon.vue'
import PencilIcon from './Icons/PencilIcon.vue'
import TrashIcon from './Icons/TrashIcon.vue'
import ClockIcon from './Icons/ClockIcon.vue'

const dishesStore = useDishesStore()

const props = defineProps<{
  dish: Dish
}>()

const handleEdit = () => {
  dishesStore.openEditModal(props.dish)
}
</script>

<template>
  <article class="flex flex-col gap-4 bg-white border border-border rounded-lg p-4 w-full">
    <!-- Header (category and isPlanned)-->
    <div class="flex gap-2">
      <p
        v-if="dish.category"
        class="text-terciary text-xs font-medium px-3 py-1 rounded-3xl flex items-center"
        :class="{
          'bg-orange-300/30': dish.category === 'Breakfast',
          'bg-indigo-400/30': dish.category === 'Lunch',
          'bg-emerald-400/20': dish.category === 'Dinner',
          'bg-transparent': !dish.category,
        }"
      >
        {{ dish.category }}
      </p>
      <p
        class="bg-gray-300/30 text-terciary text-xs font-medium px-3 py-1 rounded-3xl flex gap-1 items-center"
        v-if="dish.weekDay"
      >
        <CalendarIcon class="w-4" />
        Planned
      </p>
    </div>
    <!-- Content (name and description)-->
    <div class="flex flex-col gap-1 flex-1">
      <h5 class="text-text text-2xl font-bold">{{ dish.name }}</h5>
      <p class="text-text text-base">{{ dish.description }}</p>
    </div>
    <!-- Footer (fav, edit, delete, min)-->
    <div class="flex justify-between items-center gap-1 border-t pt-2">
      <div class="flex gap-3">
        <button @click="dishesStore.toggleFavorite(dish.id)">
          <HeartIcon
            class="cursor-pointer stroke-primary"
            :class="dish.isFavorite ? 'fill-primary' : 'fill-none'"
          />
        </button>
        <button @click="handleEdit">
          <PencilIcon class="cursor-pointer stroke-primary" />
        </button>
        <button @click="dishesStore.deleteDish(dish.id)">
          <TrashIcon class="cursor-pointer stroke-primary" />
        </button>
      </div>

      <button class="text-primary font-semibold flex gap-1" v-if="dish.minutes">
        <ClockIcon class="cursor-pointer stroke-primary" />
        {{ dish.minutes }} min
      </button>
    </div>
  </article>
</template>
