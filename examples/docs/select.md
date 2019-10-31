### Select演示
<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        options2: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶',
          disabled: true
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value2: '',
        options3: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value3: [],
        value4: []             
      }    
    }
  }
</script>

## 普通select框
:::demo
``` html
<template>
  <yn-select v-model="value" placeholder="请选择">
    <yn-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </yn-option>
  </yn-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    }
  }
</script>
```
:::

## 带有禁用选项的select
::: demo
```html
<template>
  <yn-select v-model="value2" placeholder="请选择">
    <yn-option
      v-for="item in options2"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled">
    </yn-option>
  </yn-select>
</template>

<script>
  export default {
    data() {
      return {
        options2: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶',
          disabled: true
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value2: ''
      }
    }
  }
</script>
```
:::


## 多选
::: demo
```html
<template>
  <yn-select v-model="value3" multiple placeholder="请选择">
    <yn-option
      v-for="item in options3"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </yn-option>
  </yn-select>

  <yn-select
    v-model="value4"
    multiple
    collapse-tags
    style="margin-left: 20px;"
    placeholder="请选择">
    <yn-option
      v-for="item in options3"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </yn-option>
  </yn-select>
</template>

<script>
  export default {
    data() {
      return {
        options3: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value3: [],
        value4: []
      }
    }
  }
</script>
```
:::