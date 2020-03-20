<template>
  <div class="hello">
    <!--<h1>{{this.$store.state.name}}</h1>
    <button @click='setName1'>带参数设置</button>
    <input v-model='name'/>
    <button @click='setName2'>不带参数设置</button>-->
    <!--<h1>{{this.$store.state.name}}</h1>
    <button @click='setName3'>带参数设置</button>
    <input v-model='name'/>
    <button @click='setName4'>不带参数设置</button>-->
    store中的姓名:{{formatterName}}
    <div>
      <button @click='setName5'>异步不带参数</button>
    </div>
    <div>
        <span>不带参数getter得到的数据</span>
        <b>{{this.$store.getters.formatterName}}</b>
        <br>
        <span>带参数getter得到的数据</span>
        <b>{{this.$store.getters.customFormatterName('今天加班')}}</b>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      name: '',
    }
  },
  computed: {
    formatterName() {
      let postfix = ''
      if(this.$store.state.name === '慕钦') {
        postfix = '想吃火锅'
      }
      return this.$store.state.name + postfix
    }
  },
  methods: {
    setName1() {
      this.$store.commit('editNameZ')
    },
    setName2() {
      // 荷载提交,荷载可以传一个值,大多数以对象提交
      // this.$store.commit('editNameParam', {
      //   name: this.name
      // })
      // 对象提交
      this.$store.commit({
        type: 'editNameParam',// 固定的
        name: this.name
      })
    },
    setName3() {
      this.$store.dispatch('editNameAsync')
    },
    setName4() {
      // 荷载提交,荷载可以传一个值,大多数以对象提交
      this.$store.dispatch('editNameParamAsync', {
        name: this.name
      })
      // 对象提交
      // this.$store.dispatch({
      //   type: 'editNameParamAsync',// 固定的
      //   name: this.name
      // })
    },
    setName5() {
      this.$store.dispatch('editNameAsync')
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>

</style>
