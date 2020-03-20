<template>
    <div>
      <el-menu 
        :router="true"
        :unique-opened="true"
        :default-active="activeIndex" 
        class="el-menu-demo" 
        menu-trigger='hover'
        text-color="#282c34"
        active-text-color="#1890ff"
        mode="horizontal">
        <el-menu-item index="/page">
            <span class='item-text'>插件</span>
        </el-menu-item>
        <el-menu-item index="/page">
            <span class='item-text'>示例手册</span>
        </el-menu-item>
        <el-submenu v-for='(item,index1) in menuList' :key='index1' :index="item.path">
          <template slot="title">
            <span class='item-text'>{{ item.name }}</span>
          </template>
          <el-menu-item-group>
            <template slot="title"></template>
            <el-menu-item class='menu-item' v-for="(items, index2) in item.children" :key='index2' :index="items.path">
              <span class='item-text'>{{ items.name }}</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: '/',
            menuList: [],
        }
    },
    created() {
        this.getAside()
    },
    methods: {
        //动态获取侧边栏数据 
        getAside(){
          this.menuList = [
              { path: '/home/Setup', name:'语言', children: [
                { path: '/home/Setup/userManage', name:'中文' },
                { path: '/home/Setu1p/userManage', name:'English' },
              ] },
              { path: '/home/system2', name:'系统设置', children: [
                { path: '/home/system2/userManage', name:'菜单管理' },
              ] },
              { path: '/home/system', name:'系统设置', children: [
                { path: '/home/system/userManage', name:'菜单管理' },
              ] },
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
/deep/ .el-menu-demo {
    border-bottom: 0;
}
.menu-item:hover {
    background: #f5f7fa;
    color: #1890ff;
}
.item-text:hover {
    color: #1890ff;
}
</style>