import { createRouter, createWebHashHistory } from 'vue-router'
import setupGuard from './guard'
import notFoundRoutes from './modules/404'
import homeRoutes from './modules/home'

export const routes = [
  ...homeRoutes,
  ...notFoundRoutes,
  {
    path: '/:catchAll(.*)',
    redirect: '/404',
    meta: {}
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

setupGuard(router)

export default router
