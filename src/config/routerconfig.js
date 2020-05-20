/**
* 路由配置
 */

export const constantRouterMap = [
    {
      path: '/',
      name: 'Home',
      component: () => import ('@/views/Home.vue'),
      meta: { requiresAuth: false },
      children: [
        {
          path: '/',
          name: 'HomePage',
          component: () => import ('@/views/user/HomePage.vue'),
          meta: { 
            requiresAuth: false,
            title:'首页'
          },
        },
        {
          path: '/component',
          name: 'Component',
          component: () => import ('@/views/pages/Component.vue'),
          meta: { 
            requiresAuth: false,
            title:'组件'
          },
        }
      ]
    },
    {
      path: '*',
      name: 'Notfount404',
      component: () => import ('@/views/404.vue'),
      meta: { 
        requiresAuth: false,
        title:'404页面'
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import ('@/views/user/Login.vue'),
      meta: { 
        requiresAuth: false,
        title:'登录页面'
      }
    },
]
