<template>
    <el-container>
      <el-aside>
        <MenuSide/>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
</template>

<script>
import MenuSide from '@/components/MenuSide'

export default {
    components: {
        MenuSide
    },
    data() {
        return {
  
        }
    },
    created() {

    },
    methods: {

    },
}
</script>

<style lang="scss" scoped>
.el-aside {
    height: calc(100vh - 100px);
    width: 550px;
}
/deep/ .el-menu-vertical-demo {
    border-right: 0;
}
</style>