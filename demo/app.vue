<template>
  <div>
    <s-button type="primary" @click="handle"> Primary </s-button>
    <s-button>Default</s-button>
    <s-button type="dashed"> Dashed </s-button>
    <s-button type="danger"> Danger </s-button>
    <s-button type="primary"> 按钮 </s-button>
    <s-button type="link"> Link </s-button>
    <s-icon type="delete" @click="handleIconClick"></s-icon>
    <s-checkbtn :checked="true" @check="handleCheckBtn">+0</s-checkbtn>
    <s-checkbox>张三张三张三张三张三张三</s-checkbox>
    <s-checkbox :checked="true">张三张三张三张三张三张三</s-checkbox>
    <s-checkbox :checked="true" :disabled="true">张三张三张三张三张三张三</s-checkbox>
    <s-checkbox :disabled="true">张三张三张三张三张三张三</s-checkbox>
    <s-input-number :value="88" @change="handleInputNumberChange"></s-input-number>
  </div>
</template>

<script>
import {Button, Icon, CheckBox, Input} from 'ssv-ui';

const CheckBtn = CheckBox.CheckButton;
const InputNumber = Input.InputNumber;

export default {
  components: {
    's-button': Button,
    's-icon': Icon,
    's-checkbtn': CheckBtn,
    's-checkbox': CheckBox,
    's-input-number': InputNumber,
  },
  name: 'Demo',
  methods: {
    handle(e) {
      console.log(e);
    },
    handleCheckBtn(v) {
      console.log('handleCheckBtn', v);
      this.$forceUpdate();
    },
    handleIconClick() {
      console.log('handleIconClick');
    },
    handleInputNumberChange(value) {
      console.log('handleInputNumberChange', value);
    },
  },
};
</script>

<style lang="less">
@import '../src/styles/index.less';
</style>
