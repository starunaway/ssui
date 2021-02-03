<template>
  <div :class="wrapperClass" :style="{width: `${width}px`}">
    <input
      v-model.number="number"
      type="number"
      :disabled="disabled"
      @focus="handleFocus"
      @blur="handleBlur"
      @input="handleInput"
      @change="handleInputChange"
    />
  </div>
</template>

<script>
export default {
  name: 's-input-number',
  props: {
    value: {type: [String, Number], default: ''},
    allowClear: {type: Boolean, default: true},
    disabled: {type: Boolean, default: false},
    width: {type: Number, default: 64},
  },
  data() {
    return {
      number: this.value,
      isFocus: false,
    };
  },
  computed: {
    wrapperClass() {
      return {
        'ss-input': true,
        'ss-input-number': true,
        'ss-input-focus': this.isFocus,
        'ss-input-disabled': this.disabled,
      };
    },
  },
  methods: {
    handleInput() {
      if (this.disabled) {
        return;
      }
      this.$emit('input', this.number);
    },

    handleInputChange() {
      if (this.disabled) {
        return;
      }
      this.$emit('change', this.number);
    },

    handleFocus() {
      this.isFocus = true;
    },
    handleBlur() {
      this.isFocus = false;
    },
  },
};
</script>

<style lang="less">
@import './style.less';
.ss-input-number {
  input[type='number'] {
    outline: none;
    text-align: center;
  }
  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none !important;
    margin: 0;
  }
  input[type='number']:active {
    border: none;
  }
  input[type='number']:focus {
    border: none;
  }
}
</style>
