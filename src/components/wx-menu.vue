<template>
  <div class="body" :style="{ visibility: VISIBLE }">
    <wx-backdrop :cancel="cancel" :time="time" ref="drop" @change="onbackdrop"></wx-backdrop>
    <div ref="menu" class="menu" :style="{ left: -width, width: width }" @click="onprevent">
      <slot></slot>
    </div>
  </div>
</template>

<style>
  .body {
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
  }
  .menu {
    position: absolute;
    bottom: 0;
    top: 0;
    background-color: white;
  }
</style>

<script>
  const animation = weex.requireModule('animation');

  export default {
    components: {
      wxBackdrop: require('./wx-backdrop.vue'),
    },

    props: {
      time: { default: 200 }, // 动画时长
      cancel: { default: true }, // 点击背景是否取消
      width: { default: 600 }
    },

    data() {
      return {
        VISIBLE: 'hidden',
      }
    },

    methods: {
      onprevent() {}, // 处理 android click

      onbackdrop(e) {
        e.value === 'closing' && this.close();
      },

      open() {
        this.VISIBLE = 'visible';
        this._anim(this.width);
      },

      close() {
        this._anim(0, () => {
          this.VISIBLE = 'hidden';
        });
      },

      // 动画
      _anim(translateX, callback = () => {}) {
        animation.transition(this.$refs.menu, {
          styles: {
            transform: 'translate(' + translateX + 'px, 0px)',
          },
          duration: this.time, //ms
          timingFunction: 'ease',
          delay: 0 //ms
        }, callback);
      }
    },

    created() {
      this.$nextTick(() => {
        this.$on('show',() => {
          this.$refs.drop.$emit('show');
          this.open();
        });
        this.$on('hide',() => {
          this.$refs.drop.$emit('hide');
        });
      });
    },
  }
</script>
