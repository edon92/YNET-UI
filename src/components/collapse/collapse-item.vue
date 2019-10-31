<template>
  <div class="yn-collapse-item"
    :class="{'is-active': isActive, 'is-disabled': disabled }">
    <div
      role="tab"
      :aria-expanded="isActive"
      :aria-controls="`yn-collapse-content-${id}`"
      :aria-describedby ="`yn-collapse-content-${id}`"
    >
      <div
        class="yn-collapse-item__header"
        @click="handleHeaderClick"
        role="button"
        :id="`yn-collapse-head-${id}`"
        :tabindex="disabled ? undefined : 0"
        @keyup.space.enter.stop="handleEnterClick"
        :class="{
          'focusing': focusing,
          'is-active': isActive
        }"
        @focus="handleFocus"
        @blur="focusing = false"
      >
        <slot name="title">{{title}}</slot>
        <i
          class="yn-collapse-item__arrow yn-icon-arrow-right"
          :class="{'is-active': isActive}">
        </i>
      </div>
    </div>
    <yn-collapse-transition>
      <div
        class="yn-collapse-item__wrap"
        v-show="isActive"
        role="tabpanel"
        :aria-hidden="!isActive"
        :aria-labelledby="`yn-collapse-head-${id}`"
        :id="`yn-collapse-content-${id}`"
      >
        <div class="yn-collapse-item__content">
          <slot></slot>
        </div>
      </div>
    </yn-collapse-transition>
  </div>
</template>
<script>
  import YnCollapseTransition from 'transitions/collapse-transition';
  import Emitter from 'mixins/emitter';
  import { generateId } from 'utils/util';

  export default {
    name: 'YnCollapseItem',

    componentName: 'YnCollapseItem',

    mixins: [Emitter],

    components: { YnCollapseTransition },

    data() {
      return {
        contentWrapStyle: {
          height: 'auto',
          display: 'block'
        },
        contentHeight: 0,
        focusing: false,
        isClick: false,
        id: generateId()
      };
    },

    inject: ['collapse'],

    props: {
      title: String,
      name: {
        type: [String, Number],
        default() {
          return this._uid;
        }
      },
      disabled: Boolean
    },

    computed: {
      isActive() {
        return this.collapse.activeNames.indexOf(this.name) > -1;
      }
    },

    methods: {
      handleFocus() {
        setTimeout(() => {
          if (!this.isClick) {
            this.focusing = true;
          } else {
            this.isClick = false;
          }
        }, 50);
      },
      handleHeaderClick() {
        if (this.disabled) return;
        this.dispatch('YnCollapse', 'item-click', this);
        this.focusing = false;
        this.isClick = true;
      },
      handleEnterClick() {
        this.dispatch('YnCollapse', 'item-click', this);
      }
    }
  };
</script>
