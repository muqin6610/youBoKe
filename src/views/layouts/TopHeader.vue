<template>
    <div class="topheader">
        <div class='logo'>
            <span class='logo-text' @click='pushHome'>youBoKe</span>
        </div>
        <div class='top-bar'>
            <div class='search-box'>
                <div class='search'>
                    <el-input @keyup.enter.native='clickSearch()' v-model="search" placeholder="请输入搜索内容" prefix-icon="el-icon-search" size="small"></el-input>
                </div>
            </div>
            <div class='botton-box'>
                <div class='menu-box'>
                    <TopNav/>
                </div>
                <div class='mySet-box'>
                    <UserLayout/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TopNav from '../layouts/TopNav'
import UserLayout from '../layouts/UserLayout'

export default {
    name: 'TopHeader',
    components: {
        TopNav,
        UserLayout,
    },
    data() {
        return {
            search: '',
        }
    },
    methods: {
        pushHome() {
            this.$router.push('/')
        },
        clickSearch() {
            alert('我搜索了'+this.search)
        }
    },
}
</script>

<style lang="scss" scoped>
.topheader {
    height: 60px;
    display: flex;
}
.logo {
    width: 15%;
    line-height: 60px;
    text-align: center;
}
.logo-text {
    cursor: pointer;
}
.top-bar {
    flex: 1;
    display: flex;
}
.search-box {
    width: 30%;
    height: 100%;
}
.botton-box {
    width: 70%;
    height: 100%;
    display: flex;
}
.search {
    float: right;
    margin: 15px 25px 0 0;
}
.menu-box {
    flex: 1;
}
.mySet-box {
    width: 150px;
}

</style>