<template lang="html">
  <div style="height:100%">
    <yn-container style="height:100%">
      <yn-header height="40">
        <header-model></header-model>
      </yn-header>
      <yn-container>
        <yn-aside width="200px">
          <!-- <menu-model></menu-model> -->
          <div>
            <router-link to="/input">Input组件</router-link>
          </div>
          <div>
            <router-link to="/button">Button组件</router-link>
          </div>
        </yn-aside>
        <yn-main>
          <router-view></router-view>
          <yn-footer>Footer</yn-footer>
        </yn-main>
      </yn-container>
    </yn-container>
  </div>
</template>

<style>
/* 引入代码高亮样式 */
@import 'highlight.js/styles/color-brewer.css';
</style>

<script>
import HeaderModel from './components/header'
// import MenuModel from './components/menu'
export default {
  components: {
    HeaderModel,
    // MenuModel
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>
