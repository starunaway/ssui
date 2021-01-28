<template>
  <i :class="classname"></i>
</template>

<script>
export default {
  name: 's-icon',
  props: {
    type: {type: String, default: ''},
    disabled: {type: Boolean, default: false},
  },

  computed: {
    classname() {
      let classname = `ss-icon icon-${this.type}`;
      return this.disabled ? `${classname} disabled` : classname;
    },
  },
};
</script>

<style lang="less" scoped>
@import '../../styles/theme.less';

.ss-icon {
  color: @icon-normal-color;
  font-size: 18px;

  &:hover {
    color: @icon-hover-color;
  }
  &:active {
    color: @icon-active-color;
  }
}
.ss-icon.disabled {
  color: @icon-disabled-color;
}
</style>
