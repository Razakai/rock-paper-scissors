import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
// import about from '../views/About.vue'
import game from '../pages/game/game.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: game
  },
  /* {
    path: '/about',
    name: 'About',
    component: about
  },
  {
    path: '/game',
    name: 'game',
    component: game
  }, */
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
