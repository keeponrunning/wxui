<template>
  <div :class="['btn', large && 'large', small && 'small', 'bg-' + color, block && 'block', round && 'round', full && 'full', (outline || clear) && 'outline-clear', outline && ('bd-' + color), clear && 'clear', disable && 'disable']" @click="onclick">
    <image class="icon-left" v-if="iconLeft" :style="{ width: iconSize, height: iconSize }" :src="iconLeft"></image>
    <text v-if="!iconOnly" :class="['txt', (outline || clear || color === 'white') && ('txt-' + color), large && 'txt-large', small && 'txt-small']">{{text}}</text>
    <image class="icon-right" v-if="iconRight" :style="{ width: iconSize, height: iconSize }" :src="iconRight"></image>
    <image v-if="iconOnly" :style="{ width: iconSize, height: iconSize }" :src="iconOnly"></image>

  </div>
</template>

<style>
  /*base*/
  .btn {
    height: 88px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: white;
  }

  /*size*/
  .large {
    height: 120px;
  }
  .small {
    height: 56px;
  }

  /*type*/
  .block {
    margin-left: 40px;
    margin-right: 40px;
    border-radius: 10px;
  }
  .round {
    border-radius: 1000px;
  }
  .full {
    margin-left: 0px;
    margin-right: 0px;
    border-radius: 0px;
  }

  /*bg-color*/
  .bg-primary {
    background-color: #488AFF;
  }
  .bg-primary:active {
    background-color: #427FEB;
  }
  .bg-secondary {
    background-color: #32DB64;
  }
  .bg-secondary:active {
    background-color: #2EC95C;
  }
  .bg-danger {
    background-color: #F53D3D;
  }
  .bg-danger:active {
    background-color: #E13838;
  }
  .bg-light {
    background-color: #F4F4F4;
  }
  .bg-light:active {
    background-color: #E0E0E0;
  }
  .bg-white {
    background-color: white;
  }
  .bg-white:active {
    background-color: #f2f2f2;
  }
  .bg-dark {
    background-color: #222222;
  }
  .bg-dark:active {
    background-color: #343434;
  }

  /* type: outline, clear */
  .outline-clear {
    background-color: white;
  }
  .outline-clear:active {
    background-color: #f5f5f5;
  }

  /* type: with border */
  .bd-primary {
    border-width: 2px;
    border-color: #488AFF;
  }
  .bd-secondary {
    border-width: 2px;
    border-color: #32DB64;
  }
  .bd-danger {
    border-width: 2px;
    border-color: #F53D3D;
  }
  .bd-light {
    border-width: 2px;
    border-color: #F4F4F4;
  }
  .bd-dark {
    border-width: 2px;
    border-color: #222222;
  }
  .bd-white {
    border-width: 2px;
    border-color: black;
  }

  /*text*/
  .txt {
    font-size: 28px;
    color: white;
  }
  /*text color*/
  .txt-primary {
    color: #488AFF;
  }
  .txt-secondary {
    color: #32DB64;
  }
  .txt-danger {
    color: #F53D3D;
  }
  .txt-light {
    color: #F4F4F4;
  }
  .txt-white {
    color: #000000;
  }
  .txt-dark {
    color: #222222;
  }

  .txt-small {
    font-size: 24px;
  }

  .txt-large {
    font-size: 34px;
  }

  /*disable*/
  .disable {
    background-color: #ccc;
  }
  .disable:active {
    background-color: #ccc;
  }

  /*icon*/
  .icon-left {
    margin-right: 10px;
  }
  .icon-right {
    margin-left: 10px;
  }
</style>

<script>
  export default {
    props: {
      color: { default: 'primary' }, // white light primary secondary danger dark
      outline: { default: false },
      clear: { default: false },
      round: { default: false },
      block: { default: true },
      full: { default: false },
      small: { default: false },
      large: { default: false },
      disable: { default: false },

      text: { default: '' },

      iconLeft: { default: '' },
      iconRight: { default: '' },
      iconOnly: { default: '' },

    },

    computed: {
      iconSize() {
        if (this.small) return 24;
        if (this.large) return 48;
        return 32;
      },
    },

    methods: {
      onclick(e) { this.$emit('click', e); }
    }
  };
</script>
