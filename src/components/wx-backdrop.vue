<template>
  <div ref="backdrop" class="backdrop" @click="onclick" :style="{ visibility: VISIBLE }">
  </div>
</template>

<script>
  const animation = weex.requireModule('animation');

  export default {
    props: {
      cancel: { default: true },
      opacity: { default: '0.4' },
      time: { default: 300 },
    },
    data() {
      return {
        VISIBLE: 'hidden',
        EMIT: 'change'
      }
    },

    methods: {
      onclick() {
        this.cancel && this.close();
      },

      open() {
        this.VISIBLE = 'visible';
        this.$emit(this.EMIT, { value: 'opening' });
        this._anim({ opacity: this.opacity }, 'linear', () => {
          this.$emit(this.EMIT, { value: true });
        });
      },

      close() {
        this.$emit(this.EMIT, { value: 'closing' });
        this._anim({ opacity: '0.1', }, 'ease-in-out', () => {
          this.VISIBLE = 'hidden';
          this.$emit(this.EMIT, { value: false });
        });
      },

      _anim(styles, fn, callback = () => {}) {
        animation.transition(this.$refs.backdrop, {
          styles: styles,
          duration: this.time,
          timingFunction: fn,
          delay: 0
        }, callback);
      }
    },
    created: function () {
      this.$nextTick(() => {
        this.$on('show',() => this.open());
        this.$on('hide', () => this.close());
      });
    }
  }
</script>

<style>
  .backdrop {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: black;
    opacity: 0.1;
  }
</style>