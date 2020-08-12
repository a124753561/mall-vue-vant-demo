<template>
  <div class="hw_field" :class="{'hw_field_hasIcon':!!icon}">
    <van-icon v-if="icon" :name="icon" class="hw_field_icon"></van-icon>
    <div class="hw_field_control">
      <input
        :type="type"
        v-on="listeners"
        v-bind="$attrs"
        :value="value"
      />
    </div>
    <div>
      <slot name="rightIcon">
        <van-icon :name="rightIcon" @click="rightClick" v-if="value"></van-icon>
      </slot>
    </div>
  </div>
</template>

<script>
import { Icon } from 'vant'

export default {
  name: 'hw-field',
  components: {
    [Icon.name]: Icon
  },
  props: {
    value: {},
    type: { type: String, default: 'text' },
    rightIcon: String,
    icon: String,
    isError: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.onInput
      }
    }
  },
  methods: {
    rightClick(event) {
      this.$emit('right-click', event)
    },
    onInput(event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style scoped lang="scss">
  .hw_field {
    position: relative;
    width: 100%;
    border: 1px solid $border-color;
    border-radius: 5px;
    padding: 10px 0 10px 10px;
    display: table;
    > div {
      display: table-cell;
    }

    > .hw_field_control {
      padding-right: 10px;
      box-sizing: border-box;

      > input {
        border: 0;
        width: 100%;
        line-height: 14px;
        font-size: 14px;
      }
    }
  }

  .hw_field_hasIcon {
    padding-left: 40px;
  }

  .hw_field_icon {
    position: absolute;
    left: 15px;
    top: 33%;
  }
</style>
