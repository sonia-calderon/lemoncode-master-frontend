<script setup lang="ts">
import { useDishesStore } from '@/stores/dishes';
import type { DishCategory, WeekDay } from '@/types/index.ts';
import AddIcon from './Icons/AddIcon.vue';

const weekDays: WeekDay[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

const categories: DishCategory[] = ["Breakfast", "Lunch", "Dinner"]

const dishesStore = useDishesStore();

const getDish = (day: WeekDay, category: DishCategory) => {
    return dishesStore.dishes.find(dish => 
        dish.weekDay === day &&
        dish.category === category
    )
}

</script>

<template>
    <article class="flex flex-col gap-4 bg-white w-full rounded-lg" v-for="weekday in weekDays" :key="weekday">
        <div class="bg-primary bg-opacity-10 p-4 rounded-t-lg border-b">
            <p class="font-semibold text-primary">{{ weekday }}</p>
        </div>
        <div class="flex flex-col gap-4 p-4" v-for="category in categories" :key="category">
            <div class="flex flex-col gap-2" v-if="getDish(weekday, category)" >
                <p class="uppercase font-semibold text-sm text-gray-500">{{ category }}</p>
                <p class="border border-primary border-opacity-10 rounded-xl bg-primary bg-opacity-10 p-2 cursor-pointer" >{{ getDish(weekday, category)?.name }}</p>
            </div>

            <div class="flex flex-col gap-2" v-else>
                <p class="uppercase font-semibold text-sm text-gray-500">{{ category }}</p>
                <span class="empty flex items-center justify-center border border-primary border-dashed rounded-xl bg-opacity-10 p-2 cursor-pointer">
                    <AddIcon class="stroke-primary " />
                </span>
            </div>
             <!---
            <div class="flex flex-col gap-2">
                <p class="uppercase font-semibold text-sm text-gray-500">Lunch</p>
                <p class="border border-primary border-opacity-10 rounded-xl bg-primary bg-opacity-10 p-2 cursor-pointer" v-if="getDish(weekday, 'Dinner')">{{ getDish(weekday, 'Lunch')?.name }}</p>
            </div>
            <div class="flex flex-col gap-2">
                <p class="uppercase font-semibold text-sm text-gray-500">Dinner</p>
                <p class="border border-primary border-opacity-10 rounded-xl bg-primary bg-opacity-10 p-2 cursor-pointer" v-if="getDish(weekday, 'Dinner')">{{ getDish(weekday, 'Dinner')?.name }}</p>
            </div> -->
  
        </div>
    </article>
</template>