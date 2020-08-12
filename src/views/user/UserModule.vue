<template>
  <div class="user_module">
    <van-cell-group>
      <van-cell icon="shoucang" title="我的收藏" to="/user/collect" isLink></van-cell>
      <van-cell icon="dingwei" title="收货地址" to="/user/address" isLink></van-cell>
      <van-cell icon="kefu" title="服务中心" to="/user/server" isLink></van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'UserModule',
  data() {
    return {}
  }
}
</script>

<style scoped>

</style>
