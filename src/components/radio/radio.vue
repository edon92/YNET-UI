<template>
  <!-- 
    aria-checked，aria-disabled，role这三个属性主要给直觉障碍的人设置
   -->
  <label
    class="yn-radio"
    :class="[
      border && radioSize ? 'yn-radio--' + radioSize : '',
      { 'is-disabled': isDisabled },
      { 'is-focus': focus },
      { 'is-bordered': border },
      { 'is-checked': model === label }
    ]"
    role="radio"
    :aria-checked="model === label"
    :aria-disabled="isDisabled"
    :tabindex="tabIndex"
    @keydown.space.stop.prevent="model = isDisabled ? model : label"
  >
  <!-- 原生的radio样式太丑，每个浏览器看起来还不一样，所以重新实现了被选择的样式 -->
    <span class="yn-radio__input"
      :class="{
        'is-disabled': isDisabled,
        'is-checked': model === label
      }"
    >
      <span class="yn-radio__inner"></span>
      <!-- 下面真正的radio，通过opacity隐藏了 -->
      <input
        ref="radio"
        class="yn-radio__original"
        :value="label"
        type="radio"
        aria-hidden="true"
        v-model="model"
        @focus="focus = true"
        @blur="focus = false"
        @change="handleChange"
        :name="name"
        :disabled="isDisabled"
        tabindex="-1"
      >
    </span>
    <span class="yn-radio__label" @keydown.stop>
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>
<script>
  import Emitter from 'mixins/emitter';

  export default {
    name: 'YnRadio',

    mixins: [Emitter],

    inject: {
      ynForm: {
        default: ''
      },

      ynFormItem: {
        default: ''
      }
    },

    componentName: 'YnRadio',

    props: {
      value: {},
      label: {},
      disabled: Boolean,
      name: String,
      border: Boolean,
      size: String
    },

    data() {
      return {
        focus: false
      };
    },
    computed: {
      /* 判断是否是在yn-radio-group里面的radio */
      isGroup() {
        let parent = this.$parent;
        while (parent) {
          if (parent.$options.componentName !== 'YnRadioGroup') {
            parent = parent.$parent;
          } else {
            this._radioGroup = parent;
            return true;
          }
        }
        return false;
      },
      model: {
        /* 如果是用的yn-radio-group，那么去yn-radio-group上面v-model绑定的值
        如果不是，那么取yn-radio上面绑定的v-model的值
        this.value怎么来的呢？就的yn-radio上面绑定的v-model转换的语法糖
        */
        get() {
          return this.isGroup ? this._radioGroup.value : this.value;
        },
        set(val) {
          if (this.isGroup) {
            this.dispatch('YnRadioGroup', 'input', [val]);
          } else {
            this.$emit('input', val);
          }
          this.$refs.radio && (this.$refs.radio.checked = this.model === this.label);
        }
      },
      _ynFormItemSize() {
        return (this.ynFormItem || {}).ynFormItemSize;
      },
      radioSize() {
        const temRadioSize = this.size || this._ynFormItemSize || (this.$ELEMENT || {}).size;
        return this.isGroup
          ? this._radioGroup.radioGroupSize || temRadioSize
          : temRadioSize;
      },
      isDisabled() {
        return this.isGroup
          ? this._radioGroup.disabled || this.disabled || (this.ynForm || {}).disabled
          : this.disabled || (this.ynForm || {}).disabled;
      },
      tabIndex() {
        return (this.isDisabled || (this.isGroup && this.model !== this.label)) ? -1 : 0;
      }
    },

    methods: {
      handleChange() {
        this.$nextTick(() => {
          this.$emit('change', this.model);
          this.isGroup && this.dispatch('YnRadioGroup', 'handleChange', this.model);
        });
      }
    }
  };
</script>
