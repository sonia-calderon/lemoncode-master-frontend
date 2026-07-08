<script setup lang="ts">
import { useDishesStore } from '@/stores/dishes.ts'
import HeartIcon from './Icons/HeartIcon.vue'
import type { Dish } from '@/types/index.ts'
import CalendarIcon from './Icons/CalendarIcon.vue'
import PencilIcon from './Icons/PencilIcon.vue'
import TrashIcon from './Icons/TrashIcon.vue'
import ClockIcon from './Icons/ClockIcon.vue'

const dishesStore = useDishesStore()

defineProps<{
  dish: Dish
}>()
</script>

<template>
  <article class="flex flex-col gap-4 bg-white border border-border rounded-lg p-4 w-full">
    <div class="flex gap-2">
      <p
        class="text-terciary text-xs font-medium px-3 py-1 rounded-3xl flex items-center"
        :class="dish.category ? 'bg-primary/30' : 'bg-transparent'"
      >
        {{ dish.category }}
      </p>
      <p
        class="bg-primary/30 text-terciary text-xs font-medium px-3 py-1 rounded-3xl flex gap-1 items-center"
        v-if="dish.weekDay !== undefined"
      >
        <CalendarIcon class="w-4" />
        Planned
      </p>
    </div>
    <div class="flex flex-col gap-1 flex-1">
      <h5 class="text-text text-2xl font-bold">{{ dish.name }}</h5>
      <p class="text-text text-base">{{ dish.description }}</p>
    </div>
    <div class="flex justify-between items-center gap-1 border-t pt-2">
      <div class="flex gap-3">
        <button @click="dishesStore.toggleFavorite(dish.id)">
          <HeartIcon
            class="cursor-pointer stroke-primary"
            :class="dish.isFavorite ? 'fill-primary' : 'fill-none'"
          />
        </button>
        <button>
          <PencilIcon class="cursor-pointer stroke-primary" />
        </button>
        <button @click="dishesStore.deleteDish(dish.id)">
          <TrashIcon class="cursor-pointer stroke-primary" />
        </button>
      </div>

      <button class="text-primary font-semibold flex gap-1">
        <ClockIcon class="cursor-pointer stroke-primary" />
        {{ dish.minutes }} min
      </button>
    </div>
  </article>
</template>
