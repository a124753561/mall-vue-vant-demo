<template>
  <div class="user">
    <user-header></user-header>
    <user-order></user-order>
    <user-order></user-order>
    <user-module></user-module>
    <div class="logout">
      <van-button type="primary" size="large" style="border-radius: 5px;" @click="logout">退出</van-button>
    </div>
  </div>
</template>

<script>
import UserHeader from './UserHeader'
import UserOrder from './UserOrder'
import UserModule from './UserModule'
import { removeLocalStorage } from '@/utils/localStorage'

export default {
  name: 'user',
  components: {
    UserHeader,
    UserOrder,
    UserModule
  },
  data() {
    return {}
  },
  methods: {
    logout() {
      removeLocalStorage('avatar', 'nickName', 'Authorization')
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style scoped lang="scss">
  .user {
    > div {
      margin-bottom: 10px;
    }
  }

  .logout {
    width: 100%;
    text-align: center;
  }

  .van-icon {
    line-height: 24px;
  }
</style>
