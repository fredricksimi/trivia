import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/page1',
      name: 'page1',
      component: () => import('../views/Page1.vue')
    },
    {
      path: '/page2',
      name: 'page2',
      component: () => import('../views/Page2.vue')
    },
    {
      path: '/page3',
      name: 'page3',
      component: () => import('../views/Page3.vue')
    },
    {
      path: '/page4',
      name: 'page4',
      component: () => import('../views/Page4.vue')
    },
    {
      path: '/page5',
      name: 'page5',
      component: () => import('../views/Page5.vue')
    },
    {
      path: '/page6',
      name: 'page6',
      component: () => import('../views/Page6.vue')
    },
    {
      path: '/page7',
      name: 'page7',
      component: () => import('../views/Page7.vue')
    },
    {
      path: '/page8',
      name: 'page8',
      component: () => import('../views/Page8.vue')
    }
  ]
})

export default router
