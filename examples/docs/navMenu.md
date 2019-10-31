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
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
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

## 侧栏

:::demo

```html
<!-- <yn-row class="tac"> -->
  <!-- <yn-col :span="12"> -->
    <h5>默认颜色</h5>
    <yn-menu
      default-active="2"
      class="yn-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <yn-submenu index="1">
        <template slot="title">
          <i class="yn-icon-tiexian"></i>
          <span>导航一</span>
        </template>
        <yn-menu-item-group>
          <template slot="title">分组一</template>
          <yn-menu-item index="1-1">选项1</yn-menu-item>
          <yn-menu-item index="1-2">选项2</yn-menu-item>
        </yn-menu-item-group>
        <yn-menu-item-group title="分组2">
          <yn-menu-item index="1-3">选项3</yn-menu-item>
        </yn-menu-item-group>
        <yn-submenu index="1-4">
          <template slot="title">选项4</template>
          <yn-menu-item index="1-4-1">选项1</yn-menu-item>
        </yn-submenu>
      </yn-submenu>
      <yn-menu-item index="2">
        <i class="yn-icon-menu"></i>
        <span slot="title">导航二</span>
      </yn-menu-item>
      <yn-menu-item index="3" disabled>
        <i class="yn-icon-document"></i>
        <span slot="title">导航三</span>
      </yn-menu-item>
      <yn-menu-item index="4">
        <i class="yn-icon-setting"></i>
        <span slot="title">导航四</span>
      </yn-menu-item>
    </yn-menu>
  <!-- </yn-col>
  <yn-col :span="12"> -->
    <!-- <h5>自定义颜色</h5>
    <yn-menu
      default-active="2"
      class="yn-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <yn-submenu index="1">
        <template slot="title">
          <i class="yn-icon-location"></i>
          <span>导航一</span>
        </template>
        <yn-menu-item-group>
          <template slot="title">分组一</template>
          <yn-menu-item index="1-1">选项1</yn-menu-item>
          <yn-menu-item index="1-2">选项2</yn-menu-item>
        </yn-menu-item-group>
        <yn-menu-item-group title="分组2">
          <yn-menu-item index="1-3">选项3</yn-menu-item>
        </yn-menu-item-group>
        <yn-submenu index="1-4">
          <template slot="title">选项4</template>
          <yn-menu-item index="1-4-1">选项1</yn-menu-item>
        </yn-submenu>
      </yn-submenu>
      <yn-menu-item index="2">
        <i class="yn-icon-menu"></i>
        <span slot="title">导航二</span>
      </yn-menu-item>
      <yn-menu-item index="3" disabled>
        <i class="yn-icon-document"></i>
        <span slot="title">导航三</span>
      </yn-menu-item>
      <yn-menu-item index="4">
        <i class="yn-icon-setting"></i>
        <span slot="title">导航四</span>
      </yn-menu-item>
    </yn-menu> -->
  <!-- </yn-col> -->
<!-- </yn-row> -->

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
```
:::