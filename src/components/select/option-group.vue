<template>
  <ul class="yn-select-group__wrap" v-show="visible">
    <li class="yn-select-group__title">{{ label }}</li>
    <li>
      <ul class="yn-select-group">
        <slot></slot>
      </ul>
    </li>
  </ul>
</template>

<script type="text/babel">
  import Emitter from 'mixins/emitter';

  export default {
    mixins: [Emitter],

    name: 'YnOptionGroup',

    componentName: 'YnOptionGroup',

    props: {
      label: String,
      disabled: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        visible: true
      };
    },

    watch: {
      disabled(val) {
        this.broadcast('YnOption', 'handleGroupDisabled', val);
      }
    },

    methods: {
      queryChange() {
        this.visible = this.$children &&
          Array.isArray(this.$children) &&
          this.$children.some(option => option.visible === true);
      }
    },

    created() {
      this.$on('queryChange', this.queryChange);
    },

    mounted() {
      if (this.disabled) {
        this.broadcast('YnOption', 'handleGroupDisabled', this.disabled);
      }
    }
  };
</script>
