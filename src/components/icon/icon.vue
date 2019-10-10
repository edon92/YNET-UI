<template>
  <i :class="'yn-icon-' + name"></i>
</template>

<script>
  export default {
    name: 'YnIcon',

    props: {
      name: String
    }
  };
</script>
<style lang="scss">
@import './style/font/iconfont.css';
</style>
