import type { Dish } from '@/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDishesStore = defineStore('dishes', () => {
  const dishes = ref<Dish[]>([])

  const isModalOpen = ref(false)
  const openModal = () => (isModalOpen.value = true)
  const closeModal = () => (isModalOpen.value = false)

  const toggleFavorite = (id: string) => {
    const dish = dishes.value.find((dish) => dish.id === id)
    if (dish) dish.isFavorite = !dish.isFavorite
  }

  const createDish = (dish: Dish) => {
    dishes.value.push({ ...dish })
  }

  return { dishes, isModalOpen, openModal, closeModal, toggleFavorite, createDish }
})
