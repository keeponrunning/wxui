<template>
  <div class="body" :style="{ visibility: VISIBLE }">
    <wx-backdrop :cancel="cancel" :duration="duration" ref="drop" @change="onbackdrop"></wx-backdrop>
    <div ref="main" class="main" :style="{ bottom: - BOTTOM }" @click="onprevent">
      <div class="title">
        <text class="title-txt">{{title}}</text>
      </div>
      <div v-for="(items, key) in cards" :key="key">
        <scroller class="scroller" scroll-direction="horizontal" show-scrollbar="false">
          <div class="panel" v-for="(item, key) in items" :key="key" @click="onclick(item.handler, $event)">
            <image class="item-icon" :src="item.icon"></image>
            <text class="item-title-txt">{{item.title}}</text>
          </div>
        </scroller>
        <div class="line"></div>
      </div>
      <wx-button
        v-if="cancel"
        class="cancel"
        @click="onclick(CANCEL, $event)"
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
    background-color: #ffffff;
  }
  .title-txt {
    color: #888;
    font-size: 28px;
  }

  .scroller {
    height: 250px; 
    background-color: #ffffff;
  }
  .panel {
    width: 200px;
    height: 250px;
    align-items: center;
    justify-content: center;
  }
  
  .item-icon {
    width: 120px;
    height: 120px;
    border-radius: 10px;
    background-color: #ffffff;
  }
  .item-title-txt {
    color: #5d5d5d;
    font-size: 30px;
    margin-top: 15px;
  }
  .line {
    width: 750px;
    height: 1px;
    background-color: #c2c2c2;
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
      cards: { default: [] }, // 按钮
      duration: { default: 200 }, // 动画时长
      cancel: { default: true } // 点击背景是否取消
    },

    data() {
      return {
        VISIBLE: 'hidden',
        BOTTOM: 0,
        EMIT: 'handler',
        OUTPUT: {},
        CANCEL: 'cancel'
      }
    },

    methods: {
      onprevent() {}, // android click

      onbackdrop(e) {
        if (!this.OUTPUT.handler) this.OUTPUT.handler = this.CANCEL; // hack handle type
        e.value === 'closing' && this._close();
      },

      onclick(handler, $event) {
        this.OUTPUT.handler = handler;
        this.$refs.drop.$emit('hide');
      },

      _open() {
        this._dom(() => {
          this.VISIBLE = 'visible';
          this._anim(-this.BOTTOM);
        });
      },

      _close() {
        this._anim(0, () => {
          this.VISIBLE = 'hidden';
          this.$emit(this.EMIT, this.OUTPUT);
          this.OUTPUT = {}; // reset
        });
      },

      // get DOM
      _dom(callback = () => {}) {
        if (this.BOTTOM) return callback()
        dom.getComponentRect(this.$refs.main, option => {
          this.BOTTOM = 2 * option.size.height;
          callback();
        });
      },

      // animate
      _anim(translateY, callback = () => {}) {
        animation.transition(this.$refs.main, {
          styles: {
            transform: 'translate(0px, ' + translateY + 'px)',
          },
          duration: this.duration, //ms
          timingFunction: 'ease',
          delay: 0 //ms
        }, callback);
      }
    },

    // add listener
    created() {
      this.$nextTick(() => {
        this.$on('show',() => {
          this.$refs.drop.$emit('show');
          this._open();
        });
      });
    },

    // try get DOM
    mounted() {
      setTimeout(() => this._dom(), 50);
    }
  };
</script>
