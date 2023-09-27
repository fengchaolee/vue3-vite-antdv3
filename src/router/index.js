import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/antdv',
      name: 'antdv',
      children: [
        {
          path: 'ABadge',
          name: 'ABadge',
          component: () => import('../views/demo/ABadge.vue')
        },
        {
          path: 'ABreadcrumb',
          name: 'ABreadcrumb',
          component: () => import('../views/demo/ABreadcrumb.vue')
        },
        {
          path: 'AButton',
          name: 'AButton',
          component: () => import('../views/demo/AButton.vue')
        },
        {
          path: 'AInput',
          name: 'AInput',
          component: () => import('../views/demo/AInput.vue')
        },
        {
          path: 'ARate',
          name: 'ARate',
          component: () => import('../views/demo/ARate.vue')
        },
        {
          path: 'AUpload',
          name: 'AUpload',
          component: () => import('../views/demo/AUpload.vue')
        }
      ]

    }
  ]
})

export default router
