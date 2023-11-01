import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
      children: [
        {
          path: '/home',
          name: 'home',
          component: HomeView
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('../views/AboutView.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      component: () => import('../views/RegisterView.vue')
    },
    // Redirection pour les routes non valides
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/emails',
      name: 'emails',
      component: () => import('../views/EmailsView.vue')
    }
  ]
})

export default router
