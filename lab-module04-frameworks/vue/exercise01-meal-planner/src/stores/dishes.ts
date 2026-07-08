import type { Dish } from '@/types'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { dishes as dishesData } from '@/database/dishes'

export const useDishesStore = defineStore('dishes', () => {
  const dishes = ref<Dish[]>(dishesData)

  const isModalOpen = ref(false)
  const openModal = () => (isModalOpen.value = true)
  const closeModal = () => (isModalOpen.value = false)

  const toggleFavorite = (id: string) => {
    const dish = dishes.value.find((dish) => dish.id === id)
    if (dish) dish.isFavorite = !dish.isFavorite
  }

  const favoriteDishes = computed(() => dishes.value.filter((dish) => dish.isFavorite))

  const createDish = (dish: Dish) => {
    dishes.value.push({ ...dish })
  }

  const clearPlanner = () => {
    dishes.value.forEach((dish) => (dish.weekDay = undefined))
  }

  const modifyDish = (id: string) => {}

  const deleteDish = (id: string) => {
    dishes.value = dishes.value.filter((dish) => dish.id !== id)
  }

  return {
    dishes,
    isModalOpen,
    openModal,
    closeModal,
    toggleFavorite,
    favoriteDishes,
    createDish,
    clearPlanner,
    deleteDish,
  }
})
