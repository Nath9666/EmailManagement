import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'
import { useStore } from '../stores/user'

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
      beforeEnter: (to, from, next) => {
        const store = useStore()
        if (store.user === null) {
          next('/login')
        } else {
          next()
        }
      },
      component: () => import('../views/EmailsView.vue')
    },
    {
      path: '/emails/new',
      name: 'newEmail',
      beforeEnter: (to, from, next) => {
        const store = useStore()
        if (store.user === null) {
          next('/login')
        } else {
          next()
        }
      },
      component: () => import('../views/NewEmail.vue')
    }
  ]
})

export default router
