<script setup lang="ts">
import { reactive } from 'vue';
import ChevronDownIcon from './Icons/ChevronDownIcon.vue';
import CloseIcon from './Icons/CloseIcon.vue';

import { useDishesStore } from '@/stores/dishes.ts';
import type { WeekDay } from '@/types/index.ts';

const weekDays: WeekDay[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

const dishesStore = useDishesStore()
const handleCloseModal = () => dishesStore.closeModal()

const emptyForm = () => ({
    id: crypto.randomUUID(),
    name: '',
    description: '',
    category: undefined,
    weekDay: undefined,
    isFavorite: false,
})

const form = reactive(emptyForm())

const resetForm = () => Object.assign(form, emptyForm())

const handleAddDish = () => {
    dishesStore.createDish({... form})
    resetForm()
    handleCloseModal()
}

</script>
<template>
    <Teleport to="body">
        <div v-if="dishesStore.isModalOpen" class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
        @click="handleCloseModal" >
            <section class="bg-white border rounded-xl w-full flex flex-col gap-6 p-6 max-w-xl" @click.stop>
                <div class="flex justify-between border-b py-3">
                    <p class="text-xl font-semibold">Add a new dish</p>
                    <button @click="handleCloseModal"><CloseIcon /></button>
                </div>
                <div class="flex flex-col gap-4">
                    <div class="flex flex-col gap-2">
                        <label for="" class="text-gray-500 font-semibold">Dish name</label>
                        <input type="text" placeholder="E.g. Avocado Toast & Poached Egg" class="border border-primary border-opacity-10 bg-primary bg-opacity-10 rounded-lg p-2 placeholder-gray-500" v-model="form.name">
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="" class="text-gray-500 font-semibold">Dish description</label>
                        <textarea name="" id="" class="border border-primary border-opacity-10 bg-primary bg-opacity-10 rounded-lg p-2 placeholder-gray-500" placeholder="E.g. Perfectly seasoned avocado on sourdough bread with a runny egg and microgreens" v-model="form.description"></textarea>
                    </div>
                    <div class="flex gap-4 w-full">
                        <div class="flex flex-col gap-2 w-full">
                            <label for="" class="text-gray-500 font-semibold">Week day</label>
                            <div class="relative">
                                <select name="" id="" class="w-full appearance-none border border-primary border-opacity-10 bg-primary/10 rounded-lg py-2 pr-10" v-model="form.weekDay">
                                    <option v-for="day in weekDays" :key="day" :value="day">{{ day }}</option>
                                </select>
                                <ChevronDownIcon class="poiner-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
                            </div>
                            
                        </div>
                        <div class="flex flex-col gap-2 w-full">
                            <label for="" class="text-gray-500 font-semibold">Category</label>
                            <div class="relative">
                                <select name="" id="" class="w-full appearance-none border border-primary border-opacity-10 bg-primary/10 rounded-lg py-2 pr-10" v-model="form.category">
                                    <option value=""></option>
                                    <option value="Breakfast">Breakfast</option>
                                    <option value="Lunch">Lunch</option>
                                    <option value="Dinner">Dinner</option>
                                </select>
                                <ChevronDownIcon class="poiner-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="flex gap-4">
                    <button class="border border-primary rounded-xl p-2 w-full" @click="handleCloseModal">Cancel</button>
                    <button class="bg-primary text-textlight border border-primary rounded-xl p-2 w-full" @click="handleAddDish">Add</button>
                </div>
            </section>
        </div>
    </Teleport>
</template>