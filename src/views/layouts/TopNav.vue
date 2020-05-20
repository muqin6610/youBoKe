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
        <el-menu-item index="/component">
            <span class='item-text'>常用插件</span>
        </el-menu-item>
        <el-menu-item index="/page">
            <span class='item-text'>项目经历</span>
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
              { path: '/home/system2', name:'技术汇总', children: [
                { path: '/home/system2/userManage', name:'HTML知识' },
                { path: '/home/system2/userManage', name:'CSS知识' },
                { path: '/home/system2/userManage', name:'JavaScript知识' },
                { path: '/home/system2/userManage', name:'Vue知识' },
                { path: '/home/system2/userManage', name:'网络知识' },
                { path: '/home/system2/userManage', name:'计算机知识' },
              ] },
              { path: '/home/Setup', name:'选择语言', children: [
                { path: '/home/Setup/userManage', name:'中文' },
                { path: '/home/Setu1p/userManage', name:'English' },
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