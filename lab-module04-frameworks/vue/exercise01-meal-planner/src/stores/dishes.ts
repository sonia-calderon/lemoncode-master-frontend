import type { Dish, DishCategory, WeekDay } from '@/types'
import { defineStore } from 'pinia'
import { computed, ref, watch } from 'vue'
import { dishes as dishesData } from '@/database/dishes'

export const useDishesStore = defineStore('dishes', () => {
  const savedDishes = localStorage.getItem('dishes')
  const dishes = ref<Dish[]>(savedDishes ? JSON.parse(savedDishes) : dishesData)

  watch(
    dishes,
    (newDishes) => {
      localStorage.setItem('dishes', JSON.stringify(newDishes))
    },
    { deep: true },
  )

  const isModalOpen = ref(false)
  const modalMode = ref<'create' | 'edit'>('create')
  const editingDish = ref<Dish | null>(null)
  const initialWeekDay = ref<WeekDay | undefined>()
  const initialCategory = ref<DishCategory | undefined>()

  const openCreateModal = (weekDay?: WeekDay, category?: DishCategory) => {
    modalMode.value = 'create'
    editingDish.value = null
    initialWeekDay.value = weekDay
    initialCategory.value = category
    isModalOpen.value = true
  }

  const openEditModal = (dish: Dish) => {
    modalMode.value = 'edit'
    editingDish.value = { ...dish }
    isModalOpen.value = true
  }

  const closeModal = () => {
    isModalOpen.value = false
    editingDish.value = null
    initialWeekDay.value = undefined
    initialCategory.value = undefined
    modalMode.value = 'create'
  }

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

  const updateDish = (updateDish: Dish) => {
    dishes.value = dishes.value.map((dish) => (dish.id === updateDish.id ? updateDish : dish))
  }

  const deleteDish = (id: string) => {
    dishes.value = dishes.value.filter((dish) => dish.id !== id)
  }

  const selectedCategory = ref<DishCategory | 'all'>('all')

  const filterCategory = (category: DishCategory | 'all') => {
    selectedCategory.value = category
  }

  const filteredDishes = computed(() => {
    if (selectedCategory.value === 'all') {
      return dishes.value
    }

    return dishes.value.filter((dish) => dish.category === selectedCategory.value)
  })

  const filteredFavoriteDishes = computed(() => {
    if (selectedCategory.value === 'all') return favoriteDishes.value

    return favoriteDishes.value.filter((dish) => dish.category === selectedCategory.value)
  })

  return {
    dishes,
    isModalOpen,
    modalMode,
    editingDish,
    initialWeekDay,
    initialCategory,
    openCreateModal,
    openEditModal,
    closeModal,
    toggleFavorite,
    favoriteDishes,
    createDish,
    clearPlanner,
    deleteDish,
    updateDish,
    selectedCategory,
    filterCategory,
    filteredDishes,
    filteredFavoriteDishes,
  }
})
