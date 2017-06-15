<template>
  <div class="body">
    <wx-wrapper :wrap="wrap"></wx-wrapper>
  </div>
</template>

<style>
  .body {
    padding-top: 50px;
  }
</style>

<script>
  export default {
    components: {
      wxWrapper: require('wxui/wx-wrapper.vue')
    },

    data() {
      return {
        wrap: []
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
      this.wrap = [
        {
          icon: this.baseUrl('fire_danger.png'),
          title: 'title1'
        },
        {
          icon: this.baseUrl('fire_primary.png'),
          title: 'title2'
        },
        {
          icon: this.baseUrl('fire_secondary.png'),
          title: 'title3'
        },
        {
          icon: this.baseUrl('fire_dark.png'),
          title: 'title4'
        },
        {
          icon: this.baseUrl('fire_light.png'),
          title: 'title5'
        }
      ];
    }
  };
</script>
