<template lang="html">
  <div class="menu-model">
    <yn-menu
      default-active="1"
      :unique-opened="true"
      :default-openeds="['1', '2', '3']"
      :default-active="defaultActive"
      :router="true"
    >
      <yn-submenu index="1">
        <template slot="title">
          <span>开发指南</span>
        </template>
        <yn-menu-item-group>
          <yn-menu-item index="/guide/install">安装</yn-menu-item>
          <yn-menu-item index="/guide/quikeStart">快速上手</yn-menu-item>
        </yn-menu-item-group>
      </yn-submenu>
      <yn-submenu index="2">
        <template slot="title">
          <span>通用模块</span>
        </template>
        <yn-menu-item-group>
          <yn-menu-item index="/icon">Icon</yn-menu-item>
        </yn-menu-item-group>
        <yn-menu-item-group>
          <yn-menu-item index="/container">Container</yn-menu-item>
        </yn-menu-item-group>
        <yn-menu-item-group>
          <yn-menu-item index="/navMenu">navMenu组件</yn-menu-item>
        </yn-menu-item-group>
        <yn-menu-item-group>
          <yn-menu-item index="/input">Input</yn-menu-item>
        </yn-menu-item-group>
        <yn-menu-item-group>
          <yn-menu-item index="/inputNumber">Input-number组件</yn-menu-item>
        </yn-menu-item-group>
        <yn-menu-item-group>
          <yn-menu-item index="/button">Button</yn-menu-item>
        </yn-menu-item-group>
        <yn-menu-item-group>
          <yn-menu-item index="/radio">Radio</yn-menu-item>
        </yn-menu-item-group>
        <yn-menu-item-group>
          <yn-menu-item index="/select">Select</yn-menu-item>
        </yn-menu-item-group>
      </yn-submenu>
    </yn-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      defaultActive: '/guide/install'
    }
  },
  created () {
    const path = this.$route.fullPath
    this.defaultActive = path == '/' ? '/guide/install' : path
  },
  methods: {
  }
}
</script>

<style lang="scss">
 .menu-model {
   .yn-submenu__title {
     background: #eee;
   }
   .yn-submenu.is-active > .yn-submenu__title {
     /* background: rbga(254,144,74, .4); */
     background: #ecb58a;
   }
 }
</style>
