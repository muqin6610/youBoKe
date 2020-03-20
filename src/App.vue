<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import enquireScreen from '@/utils/device'

export default {
  name: 'App',
  data() {
    return {
      
    }
  },
  created () {
    let that = this
    enquireScreen(deviceType => {
      // tablet
      if (deviceType === 0) {
        that.$store.commit('TOGGLE_DEVICE', 'mobile')
        that.$store.dispatch('setSidebar', false)
      }
      // mobile
      else if (deviceType === 1) {
        that.$store.commit('TOGGLE_DEVICE', 'mobile')
        that.$store.dispatch('setSidebar', false)
      }
      else {
        that.$store.commit('TOGGLE_DEVICE', 'desktop')
        that.$store.dispatch('setSidebar', true)
      }

    })
  },
}
</script>

<style>
#app {
  position:relative;
  width:100%;
  height:100%;
}
/**过度动画相关样式 */
.on-enter-active{
  transition: .2s ease;
}
.on-leave-active{
  transition: .3s ease;
}
.on-enter,.on-leave-to{
  opacity: 0;
}
</style>
