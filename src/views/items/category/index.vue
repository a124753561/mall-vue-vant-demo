<template>
  <div class="item_list">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="已经到底了。。"
      @load="onLoad"
    >
      <van-card
        v-for="(item,index) in goodsList" :key="index"
        :price="item.price"
        :desc="item.desc"
        :title="item.title"
        :thumb="item.image"
        @click="itemClick(item.id)"
      />
    </van-list>
  </div>
</template>

<script>
import { Card, List } from 'vant'
import { goodsList } from '@/api/items'

export default {
  name: 'category',
  components: {
    [Card.name]: Card,
    [List.name]: List
  },
  created() {
    // this.initData()
  },
  data() {
    return {
      goodsList: [],
      loading: false,
      finished: false
    }
  },
  methods: {
    initData() {
      goodsList('').then(res => {
        this.goodsList = res.data
      })
    },
    onLoad() {
      goodsList('').then(res => {
        this.goodsList.push(...res.data)
        this.loading = false
      })
    },
    itemClick(id) {
      this.$router.push(`/items/detail/${id}`)
    }
  }
}
</script>

<style scoped>

</style>
