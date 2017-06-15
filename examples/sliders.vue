<template>
  <scroller class="body">
    <wx-slider :slider="slider"></wx-slider>
  </scroller>
</template>

<style>
  .body {
    padding-top: 50px;
  }
</style>

<script>
  import source from './helpers/source';

  export default {
    components: {
      wxSlider: require('wxui/wx-slider.vue')
    },
    data() {
      return {
        slider: [
          {
            src: source('slider_1.jpeg')
          },
          {
            src: source('slider_2.jpeg')
          },
          {
            src: source('slider_3.jpeg')
          }
        ]
      }
    }
  };
</script>
