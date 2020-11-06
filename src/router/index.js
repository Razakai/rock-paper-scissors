import { createRouter, createWebHistory } from 'vue-router'
import game from '../pages/game/game.vue'
import home from '../pages/home/home.vue'
import createStore from '../store/index.js'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/game',
    name: 'game',
    component: game,
    meta: {
      requiresAuth: true
    }
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

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!createStore.getters.getIsLoggedIn) {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
