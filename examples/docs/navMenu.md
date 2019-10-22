## NavMenu 导航菜单

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

## Menu
:::demo

```html
<yn-menu :default-active="activeIndex" class="yn-menu-demo" mode="horizontal" @select="handleSelect">
  <yn-menu-item index="1">处理中心</yn-menu-item>
  <yn-submenu index="2">
    <template slot="title">我的工作台</template>
    <yn-menu-item index="2-1">选项1</yn-menu-item>
    <yn-menu-item index="2-2">选项2</yn-menu-item>
    <yn-menu-item index="2-3">选项3</yn-menu-item>
    <yn-submenu index="2-4">
      <template slot="title">选项4</template>
      <yn-menu-item index="2-4-1">选项1</yn-menu-item>
      <yn-menu-item index="2-4-2">选项2</yn-menu-item>
      <yn-menu-item index="2-4-3">选项3</yn-menu-item>
    </yn-submenu>
  </yn-submenu>
  <yn-menu-item index="3" disabled>消息中心</yn-menu-item>
  <yn-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></yn-menu-item>
</yn-menu>
<div class="line"></div>
<yn-menu
  :default-active="activeIndex2"
  class="yn-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <yn-menu-item index="1">处理中心</yn-menu-item>
  <yn-submenu index="2">
    <template slot="title">我的工作台</template>
    <yn-menu-item index="2-1">选项1</yn-menu-item>
    <yn-menu-item index="2-2">选项2</yn-menu-item>
    <yn-menu-item index="2-3">选项3</yn-menu-item>
    <yn-submenu index="2-4">
      <template slot="title">选项4</template>
      <yn-menu-item index="2-4-1">选项1</yn-menu-item>
      <yn-menu-item index="2-4-2">选项2</yn-menu-item>
      <yn-menu-item index="2-4-3">选项3</yn-menu-item>
    </yn-submenu>
  </yn-submenu>
  <yn-menu-item index="3" disabled>消息中心</yn-menu-item>
  <yn-menu-item index="4"><a href="/" target="_blank">订单管理</a></yn-menu-item>
</yn-menu>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
```
:::