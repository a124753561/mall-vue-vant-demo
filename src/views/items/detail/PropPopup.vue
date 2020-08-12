<template>
  <div class="popup_wrap">
    <van-icon name="clear" class="cancel_popup" @click.native="$parent.value=false"></van-icon>
    <div class="popup_header">商品属性</div>
    <div class="popup_content">
      <van-cell-group>
        <van-cell v-for="(str,i) in popups" :key="i">
          <van-row>
            <van-col span="8">{{str.name}}</van-col>
            <van-col span="16">{{str.value}}</van-col>
          </van-row>
        </van-cell>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PropPopup',
  data() {
    return {}
  },
  props: {
    popupStr: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    popups() {
      return this.popupStr
    }
  }
}
</script>

<style scoped lang="scss">
  .popup_wrap {
    padding-bottom: 30px;

    .cancel_popup {
      position: absolute;
      right: 10px;
      top: 13px;
    }
    .popup_header {
      text-align: center;
      padding: 15px 0 30px 0;
    }
  }
</style>
