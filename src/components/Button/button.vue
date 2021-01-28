<template>
  <button :class="btnClass" :style="{width: width}" @click.stop="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 's-button',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    cancel: {
      type: Boolean,
      default: false,
    },
    width: {type: String, default: '48px'},
  },
  computed: {
    btnClass: function() {
      let className = 'ss-btn';
      if (this.disabled) {
        className += ' disabled';
      }
      if (this.cancel) {
        className += ' cancel';
      }
      return className;
    },
  },
  methods: {
    onClick(e) {
      if (this.disabled) {
        return;
      }
      this.$emit('click', e);
    },
  },
};
</script>

<style lang="less" scoped>
@import '../../styles/theme.less';
.ss-btn {
  background: @btn-bgcolor;
  border-radius: @normal-border-radius;
  width: 48px;
  height: @normal-height;
  line-height: @normal-height;
  color: @btn-color;
  text-align: center;
  outline: none;
  border: none;
  padding: @normal-padding;

  &:hover {
    background: @btn-hover-bgcolor;
  }
}
.ss-btn.cancel {
  background: #646464;
}

.ss-btn.disabled {
  background: @btn-disabled-bgcolor;
}
</style>
