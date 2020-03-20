import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
    name: '慕钦',
    status: '',
    token: localStorage.getItem('token') || '',
    user: {},
}
const mutations = {
    // 不带参数
    editNameZ(state) {
        state.name = '张'
    },
    // 带参数
    editNameParam(state, payload) {
        state.name = payload.name
    },
    auth_request(state) {
      state.status = 'loading';
    },
    auth_success(state, token, user) {
      state.status = 'success';
      state.token = token;
      state.user = user;
    },
    auth_error(state) {
      state.status = 'error';
    },
    logout(state) {
      state.status = ''; 
      state.token = '';
    },
}
const actions = {
    // 无参
    editNameAsync(content) {
        // 可以通过content.state获取store中的变量
        let _name = content.state.name
        setTimeout(() => {
            content.commit('editNameZ')
        }, 1000)
    },
    // 有参
    editNameParamAsync(content, payload) {
        setTimeout(() => {
            content.commit('editNameParam', payload)
        }, 1000)
    },
    Login({commit}, user) {
      return new Promise((resolve, reject) => {
      commit('auth_request')
      // 向后端发送请求，验证用户名密码是否正确，请求成功接收后端返回的token值，利用commit修改store的state属性，并将token存放在localStorage中
      axios.post('login', user)
        .then(resp => {
          const token = resp.data.token
          const user = resp.data.user
          localStorage.setItem('token', token)
          // 每次请求接口时，需要在headers添加对应的Token验证
          axios.defaults.headers.common['Authorization'] = token
          // 更新token
          commit('auth_success', token, user)
          resolve(resp)
        })
        .catch(err => {
          commit('auth_error')
          localStorage.removeItem('token')
          reject(err)
        })
      })
    },
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        axios.get('Logout')
          .then(response => {
            removeIsLogin()
            localStorage.removeItem('loginUsername');
            // 移除之前在axios头部设置的token,现在将无法执行需要token的事务
            delete axios.defaults.headers.common['Authorization'];
     resolve(response)
           })
          .catch(error => {
            reject(error)
          })
      })
    }
}
const getters = {
    // 不带参数getter
    formatterName: state => {
        let postfix = ''
        if(state.name === '慕钦') {
            postfix = '在上班'
        }
        return state.name + postfix
    },
    // 带参数getter
    customFormatterName: (state) => (val) => {
        let postfix = ''
        if(state.name === '慕钦') {
            postfix = val
        }

        return state.name + postfix
    },
    // !!将state.token强制转换为布尔值，若state.token存在且不为空(已登录)则返回true，反之返回false
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status
}
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
})