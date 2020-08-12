<template>
  <div class="login">
    <div class="store_header">
      <div class="store_avatar">
        <img src="../../assets/images/avatar_default.png" alt="头像" width="55" height="55">
      </div>
      <div class="store_name">{{this.settings.title}}</div>
    </div>
    <hw-field-group>
      <hw-field
        v-model="username"
        icon="username"
        placeholder="请输入用户名"
        right-icon="clear-full"
        name="user"
        @right-click="clearText"
      ></hw-field>

      <hw-field
        v-model="password"
        icon="lock"
        :type="visiblePass?'text':'password'"
        placeholder="请输入密码"
        :right-icon="visiblePass?'eye-open':'eye-close'"
        name="password"
        @right-click="visiblePass=!visiblePass"
      ></hw-field>
      <div class="clearfix" style="padding: 0 5px;">
        <div class="float-l">
          <router-link to="/login/registerGetCode">免费注册</router-link>
        </div>
        <div class="float-r">
          <router-link to="/login/forget">忘记密码</router-link>
        </div>
      </div>
      <van-button type="danger" size="large" style="border-radius: 5px;" @click="loginSubmit" :loading="isLogining">登录
      </van-button>
    </hw-field-group>
    <div class="bottom_positon text-desc text-center">技术支持：hw科技</div>
  </div>
</template>

<script>
import { login } from '@/api/login'
import { setLocalStorage } from '@/utils/localStorage'

export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: '',
      visiblePass: false,
      isLogining: false,
      redirect: undefined,
      otherQuery: {}
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        const query = route.query
        if (query) {
          this.redirect = query.redirect
          this.otherQuery = this.getOtherQuery(query)
        }
      },
      immediate: true
    }
  },
  methods: {
    clearText() {
      this.username = ''
    },
    validate() {
    },
    getLoginData() {
      const username = this.username
      const password = this.password
      return {
        username: username,
        password: password
      }
    },
    login() {
      const loginData = this.getLoginData()
      login(loginData).then(res => {
        const userinfo = res.data
        setLocalStorage({
          Authorization: userinfo.token,
          avatar: userinfo.avatar,
          nickName: userinfo.nickName
        })
        this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
      })
    },
    loginSubmit() {
      this.isLogining = true
      try {
        this.validate()
        this.login()
        this.isLogining = false
      } catch (err) {
        console.log(err)
        this.isLogining = false
      }
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    }
  }
}
</script>

<style scoped lang="scss">
  .login {
    position: relative;
    background-color: #fff;
  }

  .store_header {
    text-align: center;
    padding: 30px 0;
  }

  .store_header .store_avatar img {
    border-radius: 50%;
  }

  .store_name {
    padding-top: 5px;
    font-size: 16px;
  }

  .float-l {
    float: left;
  }

  .float-r {
    float: right;
  }

  .bottom_positon {
    position: absolute;
    bottom: 30px;
    width: 100%;
  }
</style>
