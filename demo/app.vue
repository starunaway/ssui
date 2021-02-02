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
  </div>
</template>

<script>
import {Button, Icon, CheckBox} from 'ssv-ui';

const CheckBtn = CheckBox.CheckButton;

export default {
  components: {
    's-button': Button,
    's-icon': Icon,
    's-checkbtn': CheckBtn,
    's-checkbox': CheckBox,
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
  },
};
</script>

<style lang="less">
@import '../src/styles/index.less';
</style>
