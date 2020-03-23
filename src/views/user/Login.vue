<template>
    <div class='login'>
      <div class='form-box'>
        <div class='title-box'>
            <span class='login-title'>登录</span>
        </div>
        <el-form class='el-form' ref="loginForm" :model="loginForm" label-width="70px" >
          <el-form-item prop="username" style='width: 80%'>
              <el-input prefix-icon='el-icon-user' v-model="loginForm.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password" style='width: 80%' class='item-noBottom'>
              <el-input prefix-icon='el-icon-unlock' type="password" v-model="loginForm.password"  @keyup.enter.native="login" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item class='item-forget'>
              <div class='checked-box'>
                <el-checkbox :checked="checked" @change='changePassword'>记住密码</el-checkbox>
              </div>
              <div class='text-forget'>忘记密码?</div>
          </el-form-item>
          <el-form-item>
              <el-button type="primary" class="button" @click="login">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            checked: false,
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
              console.log(error.response)
            });
        },
        changePassword() {
          this.checked = !this.checked
        },
    },
}
</script>

<style lang="scss" scoped>
.login {
    height: 100%;
    background: -webkit-linear-gradient(left, #20bde3, #5d88e7, #8269ed, #ac46f5, #e713fd);
}  
.title-box {
    text-align: center;
    margin-top: 50px;
}
.login-title {
    font-size: 28px;
    font-weight: bold;
}
.form-box {
    position: absolute;
    width: 400px;
    height: 400px;
    border: 1px solid #fff;
    top: 250px;
    right: 160px;
    background: #fff;
    border-radius: 10px;
}
.el-form {
    margin-top: 30px;
}
/deep/ .el-input__inner {
    border: 0;
    border-bottom: 1px solid #c0c4cc;
}
.item-noBottom {
    margin-bottom: 0;
}
.button {
    width: 80%;
    background: -webkit-linear-gradient(left, #20bde3, #5d88e7, #8269ed, #ac46f5, #e713fd);
    border-radius: 30px;
    border: 0;
}
.text-forget {
     float: left;
     margin-left: 35%; 
}
.text-forget:hover {
    color: #409eff;
    cursor: pointer;
}
.checked-box {
    float: left;
}
</style>