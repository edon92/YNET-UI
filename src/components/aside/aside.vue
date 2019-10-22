<template>
  <aside class="yn-aside" :style="{ width }">
    <slot></slot>
  </aside>
</template>

<script>
  export default {
    name: 'YnAside',

    componentName: 'YnAside',

    props: {
      width: {
        type: String,
        default: '300px'
      }
    }
  };
</script>
