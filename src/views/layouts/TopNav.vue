<template>
    <div>
      <el-menu 
        :router="true"
        :unique-opened="true"
        :default-active="activeIndex" 
        class="el-menu-demo" 
        text-color="#282c34"
        active-text-color="#1890ff"
        mode="horizontal">
        <el-menu-item index="/">
            <span>首页</span>
        </el-menu-item>
        <el-submenu v-for='(item,index1) in menuList' :key='index1' :index="item.path">
          <template slot="title">
            <span>{{ item.name }}</span>
          </template>
          <el-menu-item-group>
            <template slot="title"></template>
            <el-menu-item class='menu-item' v-for="(items, index2) in item.children" :key='index2' :index="items.path">{{ items.name }}</el-menu-item>
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
              { path: '/home/systemSetup', name:'系统设置', children: [
                { path: '/home/systemSetup/userManage', name:'用户管理' },
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
}
</style>