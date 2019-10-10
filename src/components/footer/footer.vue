<template>
  <footer class="yn-footer" :style="{ height }">
    <slot></slot>
  </footer>
</template>

<script>
  export default {
    name: 'YnFooter',

    componentName: 'YnFooter',

    props: {
      height: {
        type: String,
        default: '60px'
      }
    }
  };
</script>
