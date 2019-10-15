### yn-radio 演示
<script>
  export default {
    data () {
      return {
        radio: '1',
        radioValue: 9,
        radio1: '上海',
        radio2: '上海',
        radio3: '上海',
        radio4: '上海'
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

### Radio Group
:::demo
``` html
<template>
  <yn-radio-group v-model="radioValue">
    <yn-radio :label="3">备选项</yn-radio>
    <yn-radio :label="6">备选项</yn-radio>
    <yn-radio :label="9">备选项</yn-radio>
  </yn-radio-group>
</template>

<script>
  export default {
    data () {
      return {
        radioValue: 9
      };
    }
  }
</script>
```
:::
### Radio Button
:::demo
``` html
<template>
  <div>
    <yn-radio-group v-model="radio1">
      <yn-radio-button label="上海"></yn-radio-button>
      <yn-radio-button label="北京"></yn-radio-button>
      <yn-radio-button label="广州"></yn-radio-button>
      <yn-radio-button label="深圳"></yn-radio-button>
    </yn-radio-group>
  </div>
  <div style="margin-top: 20px">
    <yn-radio-group v-model="radio2" size="medium">
      <yn-radio-button label="上海" ></yn-radio-button>
      <yn-radio-button label="北京"></yn-radio-button>
      <yn-radio-button label="广州"></yn-radio-button>
      <yn-radio-button label="深圳"></yn-radio-button>
    </yn-radio-group>
  </div>
  <div style="margin-top: 20px">
    <yn-radio-group v-model="radio3" size="small">
      <yn-radio-button label="上海"></yn-radio-button>
      <yn-radio-button label="北京" disabled ></yn-radio-button>
      <yn-radio-button label="广州"></yn-radio-button>
      <yn-radio-button label="深圳"></yn-radio-button>
    </yn-radio-group>
  </div>
  <div style="margin-top: 20px">
    <yn-radio-group v-model="radio4" disabled size="mini">
      <yn-radio-button label="上海"></yn-radio-button>
      <yn-radio-button label="北京"></yn-radio-button>
      <yn-radio-button label="广州"></yn-radio-button>
      <yn-radio-button label="深圳"></yn-radio-button>
    </yn-radio-group>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio1: '上海',
        radio2: '上海',
        radio3: '上海',
        radio4: '上海'
      };
    }
  }
</script>
```
:::