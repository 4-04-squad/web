import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth',
      name: 'auth',
      component: () => import('@/views/auth/AuthLayout.vue'),
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import('@/views/auth/LoginView.vue')
        },
      ]
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('@/views/users/UsersLayout.vue'),
      children: [
        {
          path: '/profile',
          name: 'profile',
          component: () => import('@/views/users/ProfileView.vue')
        },
        {
          path: '/users/:id',
          name: 'user',
          component: () => import('@/views/users/UsersView.vue')
        },
      ]
    },
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue')
    }
  ]
})

export default router
