<template>
  <div class="body" :style="{ height: height, backgroundColor: background }">
    <div ref="marquee" class="marquee" :style="{ flexDirection: DIRECTION, width: LIST.length * 750 }">
      <div class="txt" :style="{ height: height }" v-for="(txt, key) in LIST" :key="key">
        <text :style="{ fontSize: size, color: color }">{{txt}}</text>
      </div>
    </div>
  </div>
</template>

<style>
  .body { 
    overflow: hidden;
  }
  .marquee {
    overflow: hidden;
  }
  .txt {
    width: 750px;
    justify-content: center;
  }
</style>

<script>
  const animation = weex.requireModule('animation');

  export default {
    props: {
      size: { default: 28 },
      color: { default: 'black' },
      background: { default: 'white' },
      height: { default: 50 },
      duration: { default: 1000 },
      interval: { default: 3000 },
      direction: { default: 'vertical' }, // vertical(垂直) horizontal(水平)
      list: { default: [] },
    },

    data() {
      return {
        DIRECTION: this.direction === 'vertical' ? 'row' : 'column',
        INTERVAL: this.interval < 10 ? 10 : this.interval,
        INDEX: 0,
        LIST: this.list.concat(this.list[0]),
        TIMER: '',
      }
    },

    methods: {
      _anim(translate, duration, callback = () => {}){
        let translateX = '0px', translateY = '0px';
        if (this.direction === 'vertical') {
          translateX = translate;
        } else if (this.direction === 'horizontal') {
          translateY = translate;
        };
        animation.transition(this.$refs.marquee, {
          styles: {
            transform: `translate(${translateX}, ${translateY})`,
          },
          timingFunction: 'ease-out',
          duration: duration
        }, callback);
      },

      move() {
        const length = this.LIST.length;
        let step = 100 / length;

        this.TIMER = setInterval(() => {
          if (this.INDEX < length - 1) {
            const translateY = -step * (this.INDEX + 1);
            this._anim(`${translateY}%`, this.duration);
            this.INDEX++;
          } else {
            this._anim('0px', 1, () => {
              setTimeout(() => this._anim(`${-step}%`, this.duration), 0);
              this.INDEX = 1;
            })
          }
        }, this.INTERVAL + this.duration);
      }
    },

    mounted() {
      this.move();
    },

    beforeDestroy() {
      clearInterval(this.TIMER);
    }
  }
</script>