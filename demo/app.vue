<template>
  <div>
    <s-button type="primary" @click="handle"> Primary </s-button>
    <s-button>Default</s-button>
    <s-button type="dashed"> Dashed </s-button>
    <s-button type="danger"> Danger </s-button>
    <s-button type="primary"> 按钮 </s-button>
    <s-button type="link"> Link </s-button>
    <s-icon type="double-up"></s-icon>
  </div>
</template>

<script>
import {Button, Icon} from 'ssv-ui';

export default {
  components: {
    's-button': Button,
    's-icon': Icon,
  },
  name: 'Demo',
  methods: {
    handle(e) {
      console.log(e);
    },
  },
};
</script>

<style lang="less">
@import '../src/styles/index.less';
</style>
