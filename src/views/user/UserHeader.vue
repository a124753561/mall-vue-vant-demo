<template>
  <div class="user_header">
    <van-icon name="set" class="user_set"></van-icon>
    <div class="user_avatar">
      <img :src="avatar" alt="头像" width="55" height="55">
    </div>
    <div class="user_name">{{nickName}}</div>
  </div>
</template>

<script>
import avatarDefault from '@/assets/images/avatar_default.png'
import { getLocalStorage } from '@/utils/localStorage'

export default {
  name: 'UserHeader',
  data() {
    return {
      avatar: avatarDefault,
      nickName: ''
    }
  },
  activated() {
    this.getUserInfo()
  },
  methods: {
    getUserInfo() {
      const infoData = getLocalStorage('nickName', 'avatar')
      this.nickName = infoData.nickName || '昵称'
    }
  }
}
</script>

<style scoped lang="scss">
  .user_header {
    color: #fff;
    height: 130px;
    background-color: red;
    margin-bottom: 10px;
    > .user_set {
      position: absolute;
      top: 10px;
      right: 20px;
      font-size: 24px;
    }

    > .user_avatar {
      padding-top: 40px;
      text-align: center;

      > img {
        border-radius: 50%;
      }
    }

    > .user_name {
      text-align: center;
      margin-top: 5px;
    }
  }

</style>
