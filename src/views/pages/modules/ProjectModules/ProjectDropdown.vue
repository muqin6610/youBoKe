<template>
    <el-dropdown  @command="handleCommand" trigger="click">
      <span class="el-dropdown-link">
        选择项目<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="item in commandList" :command="item">{{item.lable}}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
</template>

<script>

export default {
    data() {
        return {
          commandList: [
            {lable: "特警研判辅助系统", value: '1'},
            {lable: "智慧校园平台", value: '2'},
            {lable: "智慧大厦平台", value: '3'},
            {lable: "移动端校园测温", value: '4'},
            {lable: "手电筒报警系统", value: '5'},
          ]
        }
    },
    created() {

    },
    methods: {
      handleCommand(item) {
        this.$emit("ok", item)
      }
    },
}
</script>

<style lang="scss" scoped>
.el-dropdown-link {
  cursor: pointer;
  color: #000000;
  font-size: 14px;
  padding: 5px;
  border: 1px solid #000000;
  border-radius: 5px;

}
.el-icon-arrow-down {
  font-size: 16px;
}
</style>