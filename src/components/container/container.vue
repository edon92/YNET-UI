<template>
  <section class="yn-container" :class="{ 'is-vertical': isVertical }">
    <slot></slot>
  </section>
</template>

<script>
  export default {
    name: 'YnContainer',

    componentName: 'YnContainer',

    props: {
      direction: String
    },

    computed: {
      isVertical() {
        if (this.direction === 'vertical') {
          return true;
        } else if (this.direction === 'horizontal') {
          return false;
        }
        // 如果插槽里，包含yn-header或者yn-footer，那么就垂直显示。
        return this.$slots && this.$slots.default
        // this.$slots.default 就是插槽里所有的vnode，看看里面有没有 yn-header 或者 yn-footer。
          ? this.$slots.default.some(vnode => {
            const tag = vnode.componentOptions && vnode.componentOptions.tag;
            return tag === 'yn-header' || tag === 'yn-footer';
          })
          : false;
      }
    }
  };
</script>
