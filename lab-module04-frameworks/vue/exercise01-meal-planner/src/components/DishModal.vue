<script setup lang="ts">
import { computed, reactive, watch } from 'vue'
import { useDishesStore } from '@/stores/dishes.ts'
import type { Dish, DishCategory, WeekDay } from '@/types/index.ts'
import ChevronDownIcon from './Icons/ChevronDownIcon.vue'
import CloseIcon from './Icons/CloseIcon.vue'
import ClockIcon from './Icons/ClockIcon.vue'
import HeartIcon from './Icons/HeartIcon.vue'

const title = computed(() => (dishesStore.modalMode === 'create' ? 'Add a new dish' : 'Edit dish'))

const buttonText = computed(() => (dishesStore.modalMode === 'create' ? 'Add' : 'Save changes'))

const categories: DishCategory[] = ['Breakfast', 'Lunch', 'Dinner']

const weekDays: WeekDay[] = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]

const dishesStore = useDishesStore()
const handleCloseModal = () => dishesStore.closeModal()

const emptyForm = (): Dish => ({
  id: crypto.randomUUID(),
  name: '',
  description: '',
  category: undefined,
  weekDay: undefined,
  isFavorite: false,
  minutes: undefined,
})

const form = reactive<Dish>(emptyForm())
const resetForm = () =>
  Object.assign(form, {
    ...emptyForm(),
    weekDay: dishesStore.initialWeekDay,
    category: dishesStore.initialCategory,
  })

watch(
  () => dishesStore.isModalOpen,
  (isOpen) => {
    if (!isOpen) return
    if (dishesStore.modalMode === 'edit' && dishesStore.editingDish) {
      Object.assign(form, dishesStore.editingDish)
    } else {
      resetForm()
    }
  },
)

const handleSelectCategory = (category: DishCategory | undefined) => {
  form.category = category
}

const handleSubmit = () => {
  if (dishesStore.modalMode === 'create') {
    dishesStore.createDish({ ...form })
  } else {
    dishesStore.updateDish({ ...form })
  }

  resetForm()
  handleCloseModal()
}
</script>
<template>
  <Teleport to="body">
    <div
      v-if="dishesStore.isModalOpen"
      class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-2"
      @click="handleCloseModal"
    >
      <section
        class="bg-white border rounded-xl w-full flex flex-col gap-6 p-6 max-w-xl max-h-[90vh] overflow-y-auto"
        @click.stop
      >
        <!-- Modal Header -->
        <div class="flex justify-between border-b py-3">
          <p class="text-xl font-semibold">{{ title }}</p>
          <button @click="handleCloseModal"><CloseIcon /></button>
        </div>
        <!-- Modal Content -->
        <div class="flex flex-col gap-4">
          <!-- Name -->
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-600">Dish name</label>
            <input
              type="text"
              placeholder="E.g. Avocado Toast & Poached Egg"
              class="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 placeholder:text-gray-400 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              v-model="form.name"
            />
          </div>
          <!-- Description -->
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-600">Dish description</label>
            <textarea
              rows="3"
              class="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 placeholder:text-gray-400 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="E.g. Perfectly seasoned avocado on sourdough bread with a runny egg and microgreens"
              v-model="form.description"
            ></textarea>
          </div>
          <!-- Weekday & Minutes -->
          <div class="flex gap-4 w-full">
            <!-- Weekday -->
            <div class="flex flex-col gap-2 w-full">
              <label class="text-sm font-medium text-gray-600">Week day</label>
              <div class="relative group">
                <select
                  class="w-full appearance-none rounded-xl border border-gray-200 bg-white py-3 pl-4 pr-10 text-gray-700 transition-all duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 hover:border-primary"
                  v-model="form.weekDay"
                >
                  <option v-for="day in weekDays" :key="day" :value="day">{{ day }}</option>
                </select>
                <ChevronDownIcon
                  class="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 transition-transform duration-200 group-focus-within:rotate-180"
                />
              </div>
            </div>
            <!-- Minutes -->
            <div class="flex flex-col gap-2 w-full">
              <label class="text-sm font-medium text-gray-600">Minutes</label>
              <div class="relative">
                <ClockIcon class="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="number"
                  min="0"
                  class="w-full rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-12 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  v-model="form.minutes"
                />
                <span
                  class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400"
                >
                  min
                </span>
              </div>
            </div>
          </div>
          <!-- Categories -->
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-600">Category</label>
            <div class="flex gap-2 rounded-lg bg-primary/10 p-1">
              <button
                v-for="category in categories"
                :key="category"
                type="button"
                @click="handleSelectCategory(category)"
                :class="[
                  'flex-1 rounded-md py-2 transition',
                  form.category === category
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-600 hover:bg-primary hover:text-white',
                ]"
              >
                {{ category }}
              </button>
            </div>
          </div>
          <!-- Favorites -->
          <div class="flex gap-2 items-center justify-between border-t pt-4">
            <div class="flex gap-2 items-center">
              <HeartIcon class="fill-primary stroke-none" />
              <div>
                <p class="font-semibold">Add to Favorites</p>
                <p>It will appear in your favorites collection</p>
              </div>
            </div>
            <label class="inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" v-model="form.isFavorite" />
              <div
                class="relative w-9 h-5 bg-gray-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"
              ></div>
            </label>
          </div>
        </div>
        <!-- Modal Footer -->
        <div class="flex gap-4">
          <button class="border border-primary rounded-xl p-2 w-full" @click="handleCloseModal">
            Cancel
          </button>
          <button
            class="bg-primary text-textlight border border-primary rounded-xl p-2 w-full"
            @click="handleSubmit"
          >
            {{ buttonText }}
          </button>
        </div>
      </section>
    </div>
  </Teleport>
</template>
