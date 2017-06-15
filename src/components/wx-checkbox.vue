<template>
  <div :class="['checkbox', full && 'full']" @click="onclick(full)">
    <div :class="['box', CHECKED && ('box-' + color), disable && 'disable']" @click="onclick(true)">
      <image v-if="CHECKED" class="icon" :src="checkSrc"></image>
    </div>
    <text v-if="text" class="txt">{{text}}</text>
  </div>
</template>

<style>
  .checkbox {
    flex-direction: row;
    align-items: center;
    background-color: white;
  }
  .full {
    height: 88px;
    border-bottom-width: 1px;
    border-bottom-color: #C8C7CC;
    background-color: white;
    margin-left: 30px;
  }
  .full:active {
    background-color: #e5e5e5;
  }
  .box {
    width: 50px;
    height: 50px;
    border-color: #C9C9CD;
    border-width: 1;
    border-radius: 25px;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  .box-primary {
    background-color: #488AFF;
  }
  .box-secondary {
    background-color: #32DB64;
  }
  .box-danger {
    background-color: #F53D3D;
  }
  .box-light {
    background-color: #F4F4F4;
  }
  .box-dark {
    background-color: #222222;
  }
  .disable {
    background-color: #999;
  }

  .icon {
    width: 30px;
    height: 30px;
  }

  .txt {
    margin-left: 10px;
    font-size: 30px;
  }
</style>

<script>
  export default {
    props: {
      checked: { default: false },
      disable: { default: false },

      color: { default: 'primary' }, // light primary secondary danger dark
      text: { default: '' },
      icon: { default: '' },

      full: { default: false },
    },

    data() {
      return {
        CHECKED: true,
        EMIT: 'change'
      }
    },

    computed: {
      checkSrc() {
        return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABKElEQVRYR+2V4TEEQRCFvxeBC0EGyOBEgAgQgggIQQaIABGQAUKQARE81VWjaotZ27d3t/vD9J+pmpqd9+3rnm4xc2hmfRpAc6A58D8csL0A7oGFpINu75nEAdsPwBHwLml3UgDbt8Ap8AksJb1OBjAkHiBbS0FGfGsAtq+Ay2L1oaTnvqG3cQdsnwE3RfBcUtRAb/wCKBW7A5xI+lhlXK8qXk2B7ajSPSDWsC8FMUa8DyCaRuQsDWF7CTwVty4kXWedq9ZA6VwpCNv7RTzA7yRFDaSjtwgzEOuKDz7DvyA2IT4IEAdqEDFUgJeyPko6Tnv+42CqD1Qg4prI/Vvp76mXUoNMAVSciK21xVMp6FJ3nIjtmGyj//z73rQDY3M89F0DaA7M7sAXMpl/Ia8A/tgAAAAASUVORK5CYII=';
      }
    },

    methods: {
      onclick(status) {
        if (!status || this.disable) return;
        this.CHECKED = !this.CHECKED;
        this.$emit(this.EMIT, { value: this.CHECKED });
      }
    },

    created() {
      this.CHECKED = this.checked;
    }
  };
</script>
