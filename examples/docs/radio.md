### yn-radio 演示
<script>
  export default {
    data () {
      return {
        radio: '1'
      };
    }
  }
</script>
:::demo
``` html
<template>
  <yn-radio v-model="radio" label="1">备选项</yn-radio>
  <yn-radio v-model="radio" label="2">备选项</yn-radio>
</template>
<script>
  export default {
    data () {
      return {
        radio: '1'
      };
    }
  }
</script>
```
:::