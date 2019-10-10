<template>
  <header class="yn-header" :style="{ height }">
    <slot></slot>
  </header>
</template>

<script>
  export default {
    name: 'YnHeader',

    componentName: 'YnHeader',

    props: {
      height: {
        type: String,
        default: '60px'
      }
    }
  };
</script>
<style lang="scss">
@import './style/index.scss';
</style>
