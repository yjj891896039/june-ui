<template>
  <div
    @click="selected = !selected"
    class="jcheck-box-container"
  >
    <img
      v-if="selected"
      :src="checkedIcon"
    >
    <img
      v-else
      :src="unCheckedIcon"
    >
    <span :style="{color: selected?checkedColor:unCheckedColor}" class="content">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'JuneCheckbox',
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
    checkedIcon: {
        type: String,
        default: require('./images/checked.svg')
    },
    unCheckedIcon: {
        type: String,
        default: require('./images/unChecked.svg')
    },
    checkedColor: {
        type: String,
        default: '#00BDFF'
    },
    unCheckedColor: {
        type: String,
        default: '#606266'
    }
  },
  data() {
    return {
      selected: false,
    };
  },
  watch: {
    selected(newValue, oldValue) {
      this.$emit("input", this.selected);
    },
  },
};
</script>

<style lang="scss" scoped>
.jcheck-box-container {
  display: inline-block;
  cursor: pointer;
  white-space: nowrap;
  user-select: none;
  margin-right: 30px;
}
img {
  width: 16px;
  height: 16px;
  margin-right: 10px;
  vertical-align: middle;
}
.content {
  display: inline-block;
  vertical-align: middle;
  font-size: 16px;
  line-height: 16px;
  color: #606266;
}
</style>