<template>
  <div>
    <s-button type="primary" @click="handle"> Primary </s-button>
    <s-button>Default</s-button>
    <s-button type="dashed"> Dashed </s-button>
    <s-button type="danger"> Danger </s-button>
    <s-button type="primary"> 按钮 </s-button>
    <s-button type="link"> Link </s-button>
    <s-icon type="double-up" @click="handleIconClick"></s-icon>
    <s-checkbtn :checked="true" @check="handleCheckBtn">+0</s-checkbtn>
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
