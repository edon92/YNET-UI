<script>
export default {
  data () {
    return {
      value: '我是按钮'
    }
  },
  methods: {
    click () {
      this.value = '点击过'
    }
  }
}
</script>
<style>
.ynButton {
  margin-top: 20px;
}
</style>
## Button 按钮
常用的操作按钮。

### 基础用法

基础的按钮用法。

:::demo 使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。

```html
<div class="ynButton">
  <yn-button>默认按钮</yn-button>
  <yn-button type="primary">主要按钮</yn-button>
  <yn-button type="success">成功按钮</yn-button>
  <yn-button type="info">信息按钮</yn-button>
  <yn-button type="warning">警告按钮</yn-button>
  <yn-button type="danger">危险按钮</yn-button>
  <yn-button type="primary" :loading="true">加载中</yn-button>
</div>
<div class="ynButton">
  <yn-button plain dashed>dashed朴素按钮</yn-button>
  <yn-button type="primary" plain dashed>dashed主要按钮</yn-button>
  <yn-button type="success" plain dashed>dashed成功按钮</yn-button>
  <yn-button type="info" plain dashed>dashed信息按钮</yn-button>
  <yn-button type="warning" plain dashed>dashed警告按钮</yn-button>
  <yn-button type="danger" plain dashed>dashed危险按钮</yn-button>
</div>
<div class="ynButton">
  <yn-button plain>朴素按钮</yn-button>
  <yn-button type="primary" plain>主要按钮</yn-button>
  <yn-button type="success" plain>成功按钮</yn-button>
  <yn-button type="info" plain>信息按钮</yn-button>
  <yn-button type="warning" plain>警告按钮</yn-button>
  <yn-button type="danger" plain>危险按钮</yn-button>
</div>
<div class="ynButton">
  <yn-button round>圆角按钮</yn-button>
  <yn-button type="primary" round>主要按钮</yn-button>
  <yn-button type="success" round>成功按钮</yn-button>
  <yn-button type="info" round>信息按钮</yn-button>
  <yn-button type="warning" round>警告按钮</yn-button>
  <yn-button type="danger" round>危险按钮</yn-button>
</div>
<div class="ynButton">
  <yn-button type="primary" icon="yn-icon-shuhui">余额</yn-button>
</div>
<div class="ynButton">
  <yn-button icon="yn-icon-qianyue" circle></yn-button>
  <yn-button type="primary" icon="yn-icon-kanpiao" circle></yn-button>
  <yn-button type="success" icon="yn-icon-jiehuiyewu" circle></yn-button>
  <yn-button type="info" icon="yn-icon-zhaopiao" circle></yn-button>
  <yn-button type="warning" icon="yn-icon-cunru" circle></yn-button>
  <yn-button type="danger" icon="yn-icon-shuhui" circle></yn-button>
</div>
```
:::

### Button尺寸

:::demo 使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。

```html
<div class="ynButton">
  <yn-button plain size="lager">朴素按钮</yn-button>
  <yn-button type="primary" size="lager" plain>主要按钮</yn-button>
  <yn-button type="success" size="medium" plain>成功按钮</yn-button>
  <yn-button type="info" size="medium" plain>信息按钮</yn-button>
  <yn-button type="warning" plain size="mini">警告按钮</yn-button>
  <yn-button type="danger" plain size="mini">危险按钮</yn-button>
</div>
```
:::

### 长Button
给button添加block属性来定义 Button 的样式。
:::demo 给button添加block属性来定义 Button 的样式。

```html
<div class="ynButton">
  <yn-button type="primary" block>主要按钮</yn-button>
</div>
```
:::

## ButtonGroup

基本用法

:::demo 使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。

```html
<yn-button-group>
  <yn-button type="primary" icon="yn-icon-cunru">上一页</yn-button>
  <yn-button type="primary" icon="yn-icon-cunru">上一页</yn-button>
  <yn-button type="primary">下一页<i class="yn-icon-zhaopiao yn-icon--right"></i></yn-button>
</yn-button-group>
```
:::