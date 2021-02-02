<template>
  <label :class="wrapperClass">
    <span :class="checkboxClass">
      <span :class="innerClass"></span>
      <input
        type="checkbox"
        :class="inputClass"
        :disabled="disabled"
        :checked="checked"
        :name="name"
        @change="handleChange"
      />
    </span>
    <span>
      <slot v-if="showSlot"></slot>
      {{ label || null }}
    </span>
  </label>
</template>

<script>
export default {
  name: 's-checkbox',
  props: {
    disabled: {type: Boolean, default: false},
    checked: {type: Boolean, default: false},
    label: {type: [Boolean, String, Number], default: false},
    name: {type: String, default: ''},
  },
  data() {
    return {
      showSlot: true,
      isChecked: this.checked,
    };
  },
  computed: {
    wrapperClass() {
      return {
        'ss-checkbox-wrapper': true,
        'ss-checkbox-wrapper-checked': this.isChecked,
        'ss-checkbox-wrapper-disabled': this.disabled,
      };
    },
    checkboxClass() {
      return {
        'ss-checkbox': true,
        'ss-checkbox-checked': this.isChecked,
        'ss-checkbox-disabled': this.disabled,
      };
    },
    innerClass() {
      return {
        'ss-checkbox-inner': true,
      };
    },
    inputClass() {
      return {
        'ss-checkbox-input': true,
      };
    },
  },
  mounted() {
    console.log(this.$slots);
    this.showSlot = !!this.$slots.default;
  },
  methods: {
    handleChange(event) {
      if (this.disabled) {
        return;
      }
      const checked = event.target.checked;
      this.isChecked = checked;
      this.$emit('checked', checked);
    },
  },
};
</script>

<style lang="less">
.ss-checkbox-wrapper {
  display: inline-block;
  height: 24px;
  line-height: 24px;
  font-family: MicrosoftYaHei;
  font-size: 14px;
  color: #000000;
  letter-spacing: 0;
  padding-left: 16px;
  position: relative;
  user-select: none;

  .ss-checkbox {
    width: 12px;
    height: 12px;
    box-sizing: border-box;
    border: 2px solid #039e86;
    border-radius: 2px;
    display: block;
    position: absolute;
    left: 0;
    top: 6px;

    .ss-checkbox-input {
      visibility: hidden;
    }
  }
  .ss-checkbox.ss-checkbox-checked {
    background: #039e86;
    .ss-checkbox-inner {
      width: 7px;
      height: 3px;
      border-bottom: 2px solid #ffffff;
      border-left: 2px solid #ffffff;
      transform: rotateZ(-45deg);
      display: block;
    }
  }

  .ss-checkbox.ss-checkbox-disabled {
    border: 2px solid #a7a7a7;
    cursor: not-allowed;
  }
  .ss-checkbox.ss-checkbox-checked.ss-checkbox-disabled {
    background: #a7a7a7;
  }
}
</style>
