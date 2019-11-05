<script>
  export default {
    data() {
      return {
        value1: true,
        value2: true,
        value3: true,
        value4: true,
        value5: false        
      }
    }
  };
</script>
### Switch基本用法
:::demo
``` html
<yn-switch
  v-model="value1"
  active-color="#13ce66"
  inactive-color="#ff4949">
</yn-switch>

<script>
  export default {
    data() {
      return {
        value1: true
      }
    }
  };
</script>
```
:::

### 文字描述
:::demo
``` html
<yn-switch
  v-model="value2"
  active-text="按月付费"
  inactive-text="按年付费">
</yn-switch>
<yn-switch
  style="display: block"
  v-model="value3"
  active-color="#13ce66"
  inactive-color="#ff4949"
  active-text="按月付费"
  inactive-text="按年付费">
</yn-switch>

<script>
  export default {
    data() {
      return {
        value2: true,
        value3: true
      }
    }
  };
</script>
```
:::
### 禁用
:::demo
``` html
<yn-switch
  v-model="value4"
  disabled>
</yn-switch>
<yn-switch
  v-model="value5"
  disabled>
</yn-switch>
<script>
  export default {
    data() {
      return {
        value4: true,
        value5: false
      }
    }
  };
</script>
```
:::