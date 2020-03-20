<template>
    <div>
      <el-form ref="loginForm" :model="loginForm" label-width="70px" >
          <el-form-item label="用户名" prop="username">
              <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
              <el-input type="password" v-model="loginForm.password"  @keyup.enter.native="login" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item>
              <el-button type="primary" class="button" @click="login">登录</el-button>
          </el-form-item>
      </el-form>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            loginForm: {
                username: '',
                password: '',
            }
        }
    },
    methods: {
        login() {
          this.$store.dispatch('Login', this.loginForm)
            .then(() => {this.$router.push({ path: '/' })
            })
            .catch((error) => {
              console.log(error.response);
            });
        }
    },
}
</script>

<style lang="scss" scoped>
    
</style>