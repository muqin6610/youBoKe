// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(elementUI)

Vue.config.productionTip = false


NProgress.configure({     
    easing: 'ease',  // 动画方式    
    speed: 500,  // 递增进度条的速度    
    showSpinner: false, // 是否显示加载ico    
    trickleSpeed: 200, // 自动递增间隔    
    minimum: 0.3 // 初始化时的最小百分比
})


router.beforeEach((to, from , next) => {
    // 每次切换页面时，调用进度条
    NProgress.start()
    next()
})

router.afterEach(() => {  
    // 在即将进入新的页面组件前，关闭掉进度条
    NProgress.done()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
