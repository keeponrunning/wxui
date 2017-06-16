<template>
  <page title="wx-slider">
    <wx-slider :slider="slider"></wx-slider>
  </page>
</template>

<style>

</style>

<script>
  export default {
    components: {
      page: require('./components/page.vue'),
      wxSlider: require('wxui/wx-slider.vue')
    },

    data() {
      return {
        slider: []
      }
    },

    methods: {
      baseUrl(name) {
        const bundleUrl = this.$getConfig().bundleUrl;
        const ip = bundleUrl.match(/\d+.\d+.\d+.\d+:\d+/g)[0];
        return `http://${ip}/assets/${name}`;
      }
    },

    created() {
      this.slider = [
        {
          src: this.baseUrl('slider_1.jpeg')
        },
        {
          src: this.baseUrl('slider_2.jpeg')
        },
        {
          src: this.baseUrl('slider_3.jpeg')
        }
      ]
    }
  };
</script>
