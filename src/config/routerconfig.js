/**
* 路由配置
 */

export const constantRouterMap = [
    {
      path: '/',
      name: 'Home',
      component: () => import ('@/views/Home.vue'),
      meta: { requiresAuth: false }
    },
    {
      path: '*',
      name: 'Notfount404',
      component: () => import ('@/views/404.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import ('@/views/user/Login.vue'),
      meta: { requiresAuth: false }
    },
]
