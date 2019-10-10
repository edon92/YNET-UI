<template lang="html">
  <input type="text" name="input" :value="value">
</template>

<script>
export default {
  name: 'jy-input',
  props: ['value'],
  data () {
    return{
      inputValue: '输入框组件测试按需引入'
    }
  }
}
</script>
<style lang="scss">
@import './style/index.scss';
</style>

