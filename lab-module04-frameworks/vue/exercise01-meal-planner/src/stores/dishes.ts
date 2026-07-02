import type { Dish } from '@/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDishesStore = defineStore('dishes', () => {
  const dishes = ref<Dish[]>([])

  const createDish = () => {
    const newDish = {
      id: crypto.randomUUID(),
      name: '',
      description: '',
      category: undefined,
      weekDay: undefined,
      isFavorite: false,
    }

    console.log('creating dish')

    dishes.value.push(newDish)
    return newDish
  }

  return { dishes, createDish }
})
