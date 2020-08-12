<template>
  <div class="tab_class">
    <div class="search_box">
      <van-search placeholder="点击前往搜索"></van-search>
    </div>
    <div class="tab_tree clearfix">
      <div class="tree_left">
        <ul class="class_tree_nav">
          <li v-for="(item,index) in catagoryList"
              :key="index"
              :class="{'active':item.id ===currentCategory.id}"
              @click="changeActive(item)"
          >
            {{item.name}}
          </li>
        </ul>
      </div>
      <div class="tree_right">
        <div class="content_top">
          <img v-lazy="currentCategory.image">
          <span>父类-{{currentCategory.name}}</span>
        </div>
        <ul class="content_main">
          <li v-for="(item ,index) in catagorySubList" :key="index" @click="toItemList(item.id)">
            <div class="item_img">
              <img v-lazy="item.image">
            </div>
            <div class="item_desc">
              {{item.name}}
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { itemCategorys } from '@/api/items'

export default {
  name: 'catagory',
  components: {},
  data() {
    return {
      currentCategory: {},
      catagoryList: [],
      catagorySubList: []
    }
  },
  created() {
    this.initData()
  },
  methods: {
    initData() {
      itemCategorys('').then(res => {
        this.catagoryList = res.data
        this.currentCategory = res.data[0]
      })
    },
    changeActive(item) {
      this.currentCategory = item
    },
    toItemList(id) {
      this.$router.push({
        name: 'category',
        query: { keyword: '', categoryId: id }
      })
    }
  },
  watch: {
    currentCategory() {
      itemCategorys(this.currentCategory.id).then(res => {
        this.catagorySubList = res.data
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .tab_class {
    overflow: hidden;
    background-color: white;

    > .search_box {
      position: relative;
    }

    .item_img {
      > img {
        width: 70px;
        height: 70px;
      }
    }
  }

  .tab_tree {
    height: 90%;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;

    > .tree_left {
      float: left;
      width: 20%;
      height: 100%;

      > .class_tree_nav {
        overflow-y: scroll;
        height: 100%;

        > .active {
          border-left: 2px solid $red;
          color: $red;
        }

        > li {
          height: 40px;
          line-height: 40px;
          text-align: center;
          border-left: 2px solid $gray-shallow-more;
          border-bottom: 1px solid $gray-shallow-more;
        }
      }

    }

    > .tree_right {
      float: right;
      width: 80%;
      height: 100%;
      overflow-x: hidden;
      overflow-y: scroll;
      padding: 0px 10px;

      > .content_top {
        width: 100%;
        height: 165px;

        > img {
          width: 100%;
          height: 134px;
        }

        > span {
          padding-left: 21px;
        }
      }

      > .content_main {
        text-align: center;

        > li {
          float: left;
          width: 33.33%;
          padding-right: 3%;
          margin-bottom: 20px;
        }
      }
    }
  }

</style>
