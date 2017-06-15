<template>
  <div class="image" @appear="onappear">
    <image :style="{ width: width, height: height}" :src="iconSrc" :resize="resize" :placeholder="placeholder"></image>
  </div>
</template>

<style>
</style>

<script>
  export default {
    props: {
      width: { default: '' },
      height: { default: '' },
      resize: { default: 'stretch' }, // stretch cover contain
      placeholder: { default: '' },
      src: { default: '' },
    },

    data() {
      return {
        iconSrc: '',
        timer: ''
      }
    },

    methods: {
      // Lazy Load
      onappear(e) {
        this.timer = setTimeout(() => {
          this.iconSrc = this.src;
        }, 100);
      }
    },

    beforeDestroy() {
      clearTimeout(this.timer);
    }
  };
</script>
