<template>
  <div class="body" :style="{ height: height }">
    <div ref="marquee" class="marquee">
      <text v-for="(txt, key) in list" :key="key" :style="STYLES">{{txt}}</text>
      <text :style="STYLES">{{list[0]}}</text>
    </div>
  </div>
</template>

<style>
  .body { 
    overflow: hidden;
  }
  .marquee{
    flex-direction: column;
  }
</style>

<script>
  const animation = weex.requireModule('animation');

  export default {
    props: {
      fontSize: { default: 28 },
      color: { default: 'black' },
      height: { default: 50 },
      duration: { default: 1000 },
      interval: { default: 3000 },
      list: { default: [] },
      index: { default: 0 }
    },

    data() {
      return {
        STYLES: {
          color: this.color,
          fontSize: this.fontSize,
          lineHeight: this.height
        },
        TIMER: '',
        INDEX: 0
      }
    },

    methods: {
      _anim(translateY, duration, callback = () => {}){
        animation.transition(this.$refs.marquee, {
          styles: {
            transform: `translate(0px, ${translateY})`,
          },
          timingFunction: 'ease-out',
          duration: duration
        }, callback);
      },

      move() {
        const length = this.list.length + 1;
        let step = 100 / length;

        this.TIMER = setInterval(() => {
          if (this.INDEX < length - 1) {
            this._anim(-step * (this.INDEX + 1) + '%', this.duration);
            this.INDEX++;
          } else {
            this._anim('0px', 1, () => {
              setTimeout(() => this._anim(-step + '%', this.duration));
              this.INDEX = 1;
            })
          }
        }, this.interval);
      }
    },

    created() {
      this.INDEX = this.index;
    },

    mounted() {
      this.move();
    },

    beforeDestroy() {
      clearInterval(this.TIMER);
    }
  }
</script>