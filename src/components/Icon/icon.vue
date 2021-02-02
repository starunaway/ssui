<template>
  <i :class="classname" @click="handleClick"></i>
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
      let classname = `sumscope-icon icon-${this.type}`;
      return this.disabled ? `${classname} disabled` : classname;
    },
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e);
    },
  },
};
</script>

<style lang="less">
@import '../../styles/index.less';
.sumscope-icon {
  color: @icon-normal-color;
  font-size: 18px;

  &:hover {
    color: @icon-hover-color;
    background: #eafffc;
  }
  &:active {
    color: @icon-active-color;
    background: #83b5af;
  }
}
.sumscope-icon.disabled {
  color: @icon-disabled-color;
}
</style>
