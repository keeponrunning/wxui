<template>
  <scroller>
    <wx-marquee :list="list" color="red"></wx-marquee>
  </scroller>
</template>

<script>

  export default {
    components: {
      wxMarquee: require('wxui/wx-marquee.vue'),
    },

    data() {
      return {
        list: ['Introducing Bots on Messenger', 'Capturing 3D 360-Stereo VR Video', 'The Future of Video on Facebook', 'Announcing Vue.js 2.0', 'Not Your Average Virtual-DOM', 'Templates, JSX, or Hyperscript?']
      }
    }
  }
</script>

<style>
  .body {
    padding-top: 50px;
  }
  .menu-body {
    padding-top: 50px;
  }
</style>