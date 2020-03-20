<template>
  <div class='mycon'>
    <el-container>
      <!--顶部区域-->
       <el-header>
         <TopHeader/>
       </el-header>
      <el-container>
        <!--主体部分-->
        <el-main>
          <!--设置切换过度动画-->
          <transition name="on" mode="out-in">
            <router-view/>
          </transition>
        </el-main>
      </el-container>
    </el-container>

    <!--回到顶部-->
    <el-backtop target=".el-main"></el-backtop>
  </div>
</template>

<script>
  import TopHeader from './layoutS/TopHeader.vue'

export default {
  components:{
    TopHeader,
  },
  name: 'Home',
  data () {
    return {
     
    }
  }
}
</script>

<style lang='scss' scoped>
/deep/ .el-header {
  padding: 0;
}
// 过度动画相关样式
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