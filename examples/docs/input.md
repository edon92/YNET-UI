<!--
注意：具有交互功能的说明文档，需要有<script></script>标签，在标签元素中定义需要导出的vue实例。
在:::demo ::: 代码块中定义的模版<template></template>会作为导出的vue实例的模版，但是在代码块中的<script></script>中的内容仅作为展示，需注意。
-->
<script>
export default {
  data () {
    return {
      input: '测试测试'
    }
  }
}
</script>
### Input
介绍Input的使用
:::demo
``` html
<yn-input v-model="input" placeholder="请输入内容"></yn-input>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
```
:::

### Input Disbaled

:::demo
```html
<yn-input
  placeholder="请输入内容"
  v-model="input"
  :disabled="true">
</yn-input>

<script>s
export default {
  data() {
    return {
      input: ''
    }
  }
}
```
</script>
:::
