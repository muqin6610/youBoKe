<template>
    <el-menu
        default-active="1"
        @select="handleSelect"
        class="el-menu-vertical-demo">
        <span class="menu-title">开始</span>
        <el-menu-item index="1">
          <span slot="title">基本介绍</span>
        </el-menu-item>
        <el-menu-item index="1-1">
          <span slot="title">拥有功能</span>
        </el-menu-item>
        <el-menu-item index="2">
          <span slot="title">目录结构</span>
        </el-menu-item>
        <el-menu-item index="3">
          <span slot="title">内置动画</span>
        </el-menu-item>
        <span class="menu-title">组件</span>
        <el-menu-item index="4">
          <span slot="title">Button 按钮</span>
        </el-menu-item>
        <el-menu-item index="5">
          <span slot="title">Icon 图标</span>
        </el-menu-item>
        <el-menu-item index="6">
          <span slot="title">Select 选择器</span>
        </el-menu-item>
        <el-menu-item index="7">
          <span slot="title">Input 输入框</span>
        </el-menu-item>
        <el-menu-item index="7">
          <span slot="title">Form 表单</span>
        </el-menu-item>
        <el-menu-item index="7">
          <span slot="title">Uplpad 上传</span>
        </el-menu-item>
        <span class="menu-title">示例页面</span>
        <el-menu-item index="8">
          <span slot="title">示例</span>
        </el-menu-item>
        <el-menu-item index="9">
          <span slot="title">示例</span>
        </el-menu-item>
        <el-menu-item index="10">
          <span slot="title">示例</span>
        </el-menu-item>
        <el-menu-item index="11">
          <span slot="title">示例</span>
        </el-menu-item>
        <el-menu-item index="11">
          <span slot="title">示例</span>
        </el-menu-item>
        <el-menu-item index="11">
          <span slot="title">示例</span>
        </el-menu-item>
    </el-menu>
</template>

<script>
export default {
    data() {
        return {
  
        }
    },
    created() {

    },
    methods: {
      handleSelect(val) {
        console.log(val)
      }
    },
}
</script>

<style lang="scss" scoped>
.menu-title {
    font-size: 18px;
    font-weight: bold;
}
</style>