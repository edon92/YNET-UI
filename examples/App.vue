<template lang="html">
  <div style="height:100%">
    <yn-container style="height:100%">
      <yn-header height="40">
        <header-model></header-model>
      </yn-header>
      <yn-container>
        <yn-aside width="200px">
          <div>
            <router-link to="/guide/install">安装</router-link>
          </div>
          <div>
            <router-link to="/guide/quikeStart">快速上手</router-link>
          </div>
          <div>
            <router-link to="/input">Input组件</router-link>
          </div>
          <div>
            <router-link to="/button">Button组件</router-link>
          </div>
          <div>
            <router-link to="/icon">icon组件</router-link>
          </div>
          <div>
            <router-link to="/radio">Radio组件</router-link>
          </div>
          <div>
            <router-link to="/container">Container组件</router-link>
          </div>
        </yn-aside>
        <yn-main>
          <router-view></router-view>
          <yn-footer height="400px">Footer</yn-footer>
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
