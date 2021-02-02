<template>
  <button :class="className" :style="{width: width + 'px'}" @click="handleCheck">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 's-checkbutton',
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    width: {
      type: Number,
      default: 64,
    },
  },
  watch: {
    checked(checked) {
      this.isChecked = checked;
    },
  },
  computed: {
    className() {
      let className = 's-checkbutton';
      if (this.isChecked) {
        className += ' checked';
      }

      if (this.disabled) {
        className += ' disabled';
      }
      return className;
    },
  },
  data() {
    return {
      isChecked: this.checked,
    };
  },
  methods: {
    handleCheck() {
      this.isChecked = !this.isChecked;
      this.$emit('change', this.isChecked);
    },
  },
};
</script>

<style lang="less">
@import '../../styles/theme.less';

.s-checkbutton {
  display: inline-block;
  height: @normal-height;
  box-sizing: border-box;
  //   line-height: @normal-height;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: @normal-border-radius;
  text-align: center;
  font-size: @normal-font-size;
  user-select: none;
  font-family: MicrosoftYaHei;
  outline: none;
  cursor: default;
  &:hover {
    border: 1px solid #039e86;
    color: #039e86;
  }
}

.s-checkbutton.checked {
  background: #eafffc;
  border: 1px solid #039e86;
  color: #039e86;
  font-family: MicrosoftYaHeiSemibold;
}
</style>
