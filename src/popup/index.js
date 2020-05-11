import Vue from 'vue'
import Popup from './popup.vue'

// 组件构造器，构造出一个 vue组件实例
const PopupBox = Vue.extend(Popup)

function showPopups ({ title, content, btnText, status}) {
  const popupDom = new PopupBox({
    el: document.createElement('div'),
    data () {
      return {
        show: true,
        title: title,
        content: content,
        btnText: btnText,
        status: status,
      }
    },
  })

  document.body.appendChild(popupDom.$el)

}
// 全局注册
function registryPopup () {
  Vue.prototype.$popup = showPopups
}
export default registryPopup