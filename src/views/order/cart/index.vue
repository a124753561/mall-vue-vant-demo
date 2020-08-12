<template>
  <div class="tab-cart">
    <div class="editor_head" v-show="goods.length">
      <van-icon :name="isEditor ? 'success' : 'editor'"/>
      <span @click="isEditor = !isEditor">{{isEditor ? '完成' : '编辑'}}</span>
    </div>
    <van-checkbox-group v-model="checkedGoods" class="card_group">
      <div v-for="(good ,index) in goods" :key="index" class="goods_item">
        <van-checkbox v-model="good.checked" :name="good.id" :key="good.id"></van-checkbox>
        <van-card :title="good.goodsName" :price="good.price" :num="good.number" :thumb="good.picUrl" class="card_item">
          <div slot="desc">
            <div class="card__desc">
              <van-tag plain style="margin-right: 6px;">边走</van-tag>
              <van-tag plain style="margin-right: 6px;">边走</van-tag>
            </div>
          </div>
          <div slot="footer" v-if="isEditor">
            <van-stepper v-model="good.number" @change="stepperEvent(good,arguments)" disableInput/>
          </div>
          <div slot="footer" v-else>添加日期 {{good.addTime}}</div>
        </van-card>
        <div class="cart_delete" v-if="isEditor" @click="deleteCart(index)">删除</div>
      </div>
    </van-checkbox-group>
    <is-empty v-if="!goods.length">您的购物车空空如也~</is-empty>
    <van-submit-bar
      style="margin-bottom: 50px;"
      :disabled="!checkedGoods.length"
      :price="totalPrice"
      :button-text="submitBarText"
      :loading="subLoading"
      label="总计："
      @submit="cartSubmit"
    >
      <van-checkbox v-model="checkedAll" @click="setCheckAll" style="padding: 0 10px;">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
import { cartGoods } from '@/api/order'
import { Checkbox, CheckboxGroup, Card, Tag, Stepper, SubmitBar } from 'vant'
import IsEmpty from '@/components/IsEmpty/'

export default {
  name: 'cart',
  components: {
    [Checkbox.name]: Checkbox,
    [CheckboxGroup.name]: CheckboxGroup,
    [Card.name]: Card,
    [Stepper.name]: Stepper,
    [Tag.name]: Tag,
    [SubmitBar.name]: SubmitBar,
    IsEmpty
  },
  data() {
    return {
      goods: [],
      isEditor: false,
      checkedAll: false,
      subLoading: false,
      checkedGoods: [],
      allGoods: []
    }
  },
  created() {
    this.initData()
  },
  computed: {
    submitBarText() {
      return this.isEditor ? '删除' : '结算'
    },
    totalPrice() {
      if (this.goods.length) {
        return this.goods.reduce(
          (total, item) =>
            total + (this.checkedGoods.indexOf(item.id) !== -1 ? item.price * item.number * 100 : 0), 0
        )
      }
      return 0
    }
  },
  methods: {
    initData() {
      cartGoods().then(res => {
        this.goods = res.data
        this.allGoods = this.getAllGoods()
      })
    },
    getAllGoods() {
      const allIds = []
      this.goods.forEach(item =>
        allIds.push(item.id)
      )
      return allIds
    },
    stepperEvent(goods, args) {
      console.log(goods, args)
    },
    cartSubmit() {
      this.subLoading = true
    },
    setCheckAll() {
      if (this.checkedGoods.length === this.allGoods.length) {
        this.checkedGoods = []
      } else {
        this.checkedGoods = this.allGoods
      }
    },
    deleteCart(idex) {
      console.log(idex)
    }
  }
}
</script>

<style scoped lang="scss">
  .editor_head {
    text-align: right;
    padding: 10px;
    font-size: $font-size-normal;
    background-color: #fff;
    border-bottom: 1px solid $gray-shallow-more;
  }

  .card_group {
    background-color: $gray-shallow-more;
    padding-bottom: 50px;
    .goods_item {
      display: flex;
      margin-bottom: 10px;
      background-color: #fff;

      .card_item {
        background-color: #fff;

        .card__desc {
          max-height: 20px;
          line-height: 20px;
          color: #646566;
        }
      }
    }

    .cart_delete {
      background-color: $red;
      color: #fff;
      padding: 0 10px;
      line-height: 136px;
    }
  }
</style>
