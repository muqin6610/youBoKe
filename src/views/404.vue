<template>
    <div class="error">
        <span class="aaa">404</span> <br><br>
        <span class="bbb">访问的页面暂时迷路</span> <br><br><br>
        <span class="bbb">请您稍等,<span class='num'>{{num}}</span>秒后将返回首页!</span>
    </div>
</template>

<script>
export default {
    data() {
        return {
           num: 3, 
           timer: '',
        }
    },
    created() {
        this.timer = setInterval(() => {
            setTimeout(() => {
             if(this.num === 0) {
                 this.$router.push('/')
                 clearInterval(this.timer)
             }else {
                 this.num --
             }
            }, 1)
        },1000)
    },
    methods: {
        
    },
}
</script>

<style lang="scss" scoped>
.error {
    text-align: center;
    margin-top: 200px;
    height: 300px;
    .aaa{
        font-size: 80px;
        color: #001529;
        font-weight: bold;
    }
    .bbb{
        font-size: 30px;
        color: #001529;
    }
}
.num {
    font-weight: bold;
}
</style>