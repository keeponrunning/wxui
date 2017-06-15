<template>
  <div class="body" :style="{ visibility: VISIBLE }">
    <wx-backdrop :cancel="cancel" :time="time" ref="drop" @change="onbackdrop"></wx-backdrop>
    <div ref="main" class="main" :style="{ bottom: - BOTTOM }" @click="onprevent">
      <div class="title">
        <text class="title-txt">{{title}}</text>
      </div>
      <wx-button
        class="btn"
        v-for="(b, key) in buttons"
        :key="key"
        @click="onclick(b.handler, $event)"
        :iconLeft="b.icon"
        :text="b.text"
        :clear="true"
        :color="b.color || 'white'"
        :full="true"
      ></wx-button>
      <wx-button
        v-if="cancel"
        class="cancel"
        @click="onclick('cancel', $event)"
        text="取消"
        :clear="true"
        :full="true"
      ></wx-button>
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
  .main {
    position: absolute;
    left: 0;
    right: 0;
    background-color: #EFEFF4;
  }
  .title {
    justify-content: center;
    align-items: center;
    border-bottom-width: 1px;
    border-bottom-color: #e5e5e5;
    padding: 20px;
    background-color: white;
  }
  .title-txt {
    color: #888;
    font-size: 28px;
  }
  .btn {
    border-bottom-width: 1px;
    border-bottom-color: #e5e5e5;
  }
  .cancel {
    margin-top: 10px;
  }
</style>

<script>
  const animation = weex.requireModule('animation');
  const modal = weex.requireModule('modal');
  const dom = weex.requireModule('dom');

  export default {
    components: {
      wxBackdrop: require('./wx-backdrop.vue'),
      wxButton: require('./wx-button.vue'),
    },
    props: {
      title: { default: '' }, // 标题
      buttons: { default: [] }, // 按钮
      time: { default: 200 }, // 动画时长
      cancel: { default: true } // 点击背景是否取消
    },

    data() {
      return {
        VISIBLE: 'hidden',
        BOTTOM: 0,
        EMIT: 'handler',
        EMIT_VALUE: {}
      }
    },

    methods: {
      onprevent() {}, // 处理 android click

      onbackdrop(e) {
        e.value === 'closing' && this.close();
      },

      onclick(handler, $event) {
        this.EMIT_VALUE.handler = handler;
        this.$refs.drop.$emit('hide');
      },

      open() {
        this._dom(() => {
          this.VISIBLE = 'visible';
          this._anim(-this.BOTTOM);
        });
      },

      close() {
        this._anim(0, () => {
          this.VISIBLE = 'hidden';
          this.$emit(this.EMIT, this.EMIT_VALUE);
        });
      },

      // 获取dom
      _dom(callback = () => {}) {
        if (this.BOTTOM) return callback()
        dom.getComponentRect(this.$refs.main, option => {
          this.BOTTOM = 2 * option.size.height;
          callback();
        });
      },

      // 动画
      _anim(translateY, callback = () => {}) {
        animation.transition(this.$refs.main, {
          styles: {
            transform: 'translate(0px, ' + translateY + 'px)',
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
      });
    },

    mounted() {
      setTimeout(() => this._dom(), 50);
    }
  };
</script>
