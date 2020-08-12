<template>
  <div class="field_group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'hw-field-group',
  data() {
    return {}
  }
}
</script>

<style scoped lang="scss">
  .field_group {
    padding: 0 15px;

    > div {
      margin-bottom: 15px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
</style>
