<script>
  export default {
    name: 'YnTag',
    props: {
      text: String,
      closable: Boolean,
      type: String,
      hit: Boolean,
      disableTransitions: Boolean,
      color: String,
      size: String,
      effect: {
        type: String,
        default: 'light',
        validator(val) {
          return ['dark', 'light', 'plain'].indexOf(val) !== -1;
        }
      }
    },
    methods: {
      handleClose(event) {
        event.stopPropagation();
        this.$emit('close', event);
      },
      handleClick(event) {
        this.$emit('click', event);
      }
    },
    computed: {
      tagSize() {
        return this.size || (this.$ELEMENT || {}).size;
      }
    },
    render(h) {
      const { type, tagSize, hit, effect } = this;
      const classes = [
        'yn-tag',
        type ? `yn-tag--${type}` : '',
        tagSize ? `yn-tag--${tagSize}` : '',
        effect ? `yn-tag--${effect}` : '',
        hit && 'is-hit'
      ];
      const tagYn = (
        <span
          class={ classes }
          style={{ backgroundColor: this.color }}
          on-click={ this.handleClick }>
          { this.$slots.default }
          {
            this.closable && <i class="yn-tag__close yn-icon-close" on-click={ this.handleClose }></i>
          }
        </span>
      );

      return this.disableTransitions ? tagYn : <transition name="yn-zoom-in-center">{ tagYn }</transition>;
    }
  };
</script>
