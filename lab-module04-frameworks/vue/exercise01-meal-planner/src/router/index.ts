import { createRouter, createWebHistory } from 'vue-router'
import FavoritesPage from '@/views/FavoritesPage.vue'
import DishesPage from '@/views/DishesPage.vue'
import PlannerPage from '@/views/PlannerPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/planner',
      name: 'planner',
      component: PlannerPage,
    },
    {
      path: '/dishes',
      name: 'dishes',
      component: DishesPage,
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: FavoritesPage,
    },
  ],
})

export default router
