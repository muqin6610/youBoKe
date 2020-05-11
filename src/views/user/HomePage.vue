<template>
    <div class='heart'>
      <el-card>
            {{num}}
      </el-card>
      <el-button @click='btnClick'>显示</el-button>
      <el-button @click='btnClick2'>显示2</el-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            num: null,
        }
    },
    created() {
        this.getNum()
    },
    methods: {
        getNum() {
            let arr = [1,9,1,2,3,5,8,3,3,4,4]
            this.num = arr.sort()
        },
        btnClick () {
          this.$popup({
            title: '续费提醒',
            content: '尊敬的用户，您的账号将在15天后到期，为了不影响您的正常使用，请及时续费~ 祝您生活愉快~',
            btnText: '我知道了',
            status:'1'
          })
        },
        btnClick2 () {
        this.$popup({
          title: '账号权限已到期',
          content: '尊敬的用户，您购买的服务时间为 2019-01-10至2023-12-30日 账号状态已过期，如需恢复正常使用请联系商务人员进行缴费。续费后您将可以继续使用。',
          btnText: '我要续费',
          status:'2',
        })
      }
    },
}
</script>

<style lang="scss" scoped>
.heart {

}
</style>