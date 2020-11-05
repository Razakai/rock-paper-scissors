import { createRouter, createWebHistory } from 'vue-router'
import game from '../pages/game/game.vue'

const routes = [
  {
    path: '/',
    name: 'game',
    component: game
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
