<template>
  <div>
    <van-cell-group>
      <van-cell title="我的订单" isLink>
        <router-link to="/user/order/list/0" class="text-desc">全部订单</router-link>
      </van-cell>
    </van-cell-group>
    <van-row class="order_status">
      <van-col span="6">
        <div class="order_status_icon" @click="$router.push({path:'/user/order/list/1'})">
          <van-icon name="daifukuan"></van-icon>
        </div>
        <div>待付款</div>
      </van-col>
      <van-col span="6">
        <div class="order_status_icon" @click="$router.push({path:'/user/order/list/2'})">
          <van-icon name="daifahuo"></van-icon>
        </div>
        <div>待发货</div>
      </van-col>
      <van-col span="6">
        <div class="order_status_icon" @click="$router.push({path:'/user/order/list/3'})">
          <van-icon name="wuliu"></van-icon>
        </div>
        <div>待收货</div>
      </van-col>
      <van-col span="6">
        <div class="order_status_icon" @click="$router.push({path:'/user/order/list/4'})">
          <van-icon name="shouhouguanli"></van-icon>
        </div>
        <div>已完成</div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: 'UserOrder',
  data() {
    return {}
  }
}
</script>

<style scoped lang="scss">
  .order_status {
    background-color: white;
    padding: 10px 0;
    text-align: center;
    font-size: 12px;
  }

  .order_status_icon {
    position: relative;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: inline-block;

    i {
      font-size: 24px;
    }
  }

  .van-hairline--top-bottom::after {
    border-width: 1px 0;
    border-top-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 0px;
    border-left-width: 0px;
  }
</style>
