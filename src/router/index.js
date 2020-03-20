import Vue from 'vue'
import Router from 'vue-router'
import { constantRouterMap } from "@/config/routerconfig"

Vue.use(Router)

const router = new Router({
  mode: 'history', // 需要hash模式请直接注释此行
  routes: constantRouterMap
})

// 添加一个路由守卫
router.beforeEach((to, from, next) => {
  // 检测路由配置中是否有requiresAuth这个meta属性
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // 判断是否已登录
    if (store.getters.isLoggedIn) {
      next()   
      return
    }    
    // 未登录则跳转到登录界面
    next('/login')
  } else {
    next() 
  }
})

export default router
