<template>
  <div class="detail">
    <van-nav-bar
      :title="goods.name"
      @click-left="onClickLeft"
      left-arrow
    />
    <van-swipe :autoplay="5000" class="banner">
      <van-swipe-item v-for="(image, index) in goods.images" :key="index">
        <img v-lazy="image" width="100%">
      </van-swipe-item>
    </van-swipe>
    <van-cell-group v-if="goods" class="item_cell_group">
      <van-cell>
        <div>
          <span class="item_price">{{ goods.retailPrice*100 | yuan }}</span>
          <span class="item_market_price">{{goods.counterPrice*100 | yuan}}</span>
        </div>
        <div class="item-title">
          {{ goods.name }}
        </div>
        <div class="item_intro">{{goods.brief}}</div>
      </van-cell>
    </van-cell-group>
    <div class="item_cell_group">
      <van-cell-group>
        <van-cell title="规格" isLink value="请选择" @click.native="skuClick"/>
        <van-cell title="属性" isLink @click.native="propsPopup=true"/>
        <van-cell title="运费" value="满88免邮费"/>
      </van-cell-group>
      <van-sku
        v-model="showSku"
        :sku="sku"
        :goods="skuGoods"
        :goodsId="goods.id"
        @add-cart="addCart"
      ></van-sku>
      <van-popup v-model="propsPopup" position="bottom">
        <prop-popup :popupStr="propsStrDy"></prop-popup>
      </van-popup>
    </div>
    <div class="item_desc">
      <div class="item_desc_title">商品详情</div>
      <div class="item_desc_wrap" v-if="goods.detail" v-html="goods.detail"></div>
      <div class="item_desc_wrap" v-else style="text-align: center;">
        <p>无详情</p>
      </div>
    </div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon"/>
      <van-goods-action-icon icon="cart-o" text="购物车" @click="toCart"/>
      <van-goods-action-icon icon="shop-o" text="店铺" @click="onClickIcon"/>
      <van-goods-action-button type="warning" text="加入购物车" @click="skuClick"/>
      <van-goods-action-button
        type="danger"
        text="立即购买"
        @click="skuClick"
      />
    </van-goods-action>
  </div>
</template>

<script>
import { GoodsAction, GoodsActionIcon, GoodsActionButton, Swipe, SwipeItem, NavBar, Sku, Popup, Toast } from 'vant'
import { goodsDetail } from '@/api/items'
import PropPopup from './PropPopup'

export default {
  name: 'index',
  props: {
    itemId: [String, Number]
  },
  components: {
    [GoodsAction.name]: GoodsAction,
    [GoodsActionIcon.name]: GoodsActionIcon,
    [GoodsActionButton.name]: GoodsActionButton,
    [NavBar.name]: NavBar,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Sku.name]: Sku,
    [Popup.name]: Popup,
    PropPopup
  },
  created() {
    this.initData()
  },
  computed: {
    propsStrDy() {
      return this.goods.propsStr
    }
  },
  data() {
    return {
      goods: '',
      showSku: false,
      propsPopup: false,
      sku: {
        tree: [],
        list: [],
        price: '1.00'
      },
      skuGoods: {
        // 商品标题
        title: '',
        // 默认商品 sku 缩略图
        picture: 'http://yanxuan.nosdn.127.net/2e2fb4f2856a021bbcd1b4c8400f2b06.png'
      }
    }
  },
  methods: {
    initData() {
      goodsDetail(this.itemId).then(res => {
        this.goods = res.data
        this.skuAdapter()
      })
    },
    onClickIcon() {
      console.log('onClickIcon')
    },
    onClickButton() {
      console.log('onClickButton')
    },
    onClickLeft() {
      this.$router.go(-1)
    },
    skuClick() {
      this.showSku = true
    },
    setSkuTree() {
      const specifications = []
      this.goods.specifications.forEach((v, k) => {
        const values = []
        v.valueList.forEach(vv => {
          values.push({
            id: vv.id,
            name: vv.name,
            imgUrl: vv.picUrl
          })
        })
        specifications.push({
          k: v.name,
          v: values,
          k_s: 's' + (~~k + 1)
        })
      })
      return specifications
    },
    setSkuList() {
      const _skuList = []
      this.goods.productList.forEach(v => {
        const _skuListObject = {}
        v.specifications.forEach((item, index) => {
          _skuListObject['s' + (~~index + 1)] = item.id
        })
        _skuListObject.price = v.price * 100
        _skuListObject.stock_num = v.number
        _skuListObject.id = v.id
        _skuList.push(_skuListObject)
      })
      return _skuList
    },
    skuAdapter() {
      const tree = this.setSkuTree()
      const list = this.setSkuList()
      const skuInfo = {
        price: parseInt(this.goods.retailPrice), // 未选择规格时的价格
        stock_num: 0, // TODO 总库存
        collection_id: '', // 无规格商品skuId取collection_id，否则取所选sku组合对应的id
        none_sku: false, // 是否无规格商品
        hide_stock: true
      }
      this.sku = {
        tree,
        list,
        ...skuInfo
      }
      this.skuGoods = {
        picture: this.goods.picture,
        title: this.goods.name
      }
    },
    addCart(data) {
      console.log('加入购物车', data)
      Toast.success(`加入 ${data.selectedSkuComb.id} 购物车成功`)
    },
    toCart() {
      this.$router.push({ name: 'cart' })
    }
  }
}
</script>

<style scoped lang="scss">
  .detail {
    background-color: $gray-shallow-more;
  }

  .banner {
    height: 300px;

    img {
      height: 100%;
    }
  }

  .item_cell_group {
    margin-bottom: 10px;

    .item_price {
      color: $red;
      font-size: 20px;
      margin-right: 10px;
    }

    .item_market_price {
      font-size: 12px;
      color: $gray-deep;
      text-decoration-line: line-through;
    }

    .item_intro {
      font-size: 12px;
      color: $gray-deep;
    }
  }

  .item_desc {
    text-align: center;
    background-color: white;

    > .item_desc_title {
      padding: 10px 0;
    }
  }
</style>
