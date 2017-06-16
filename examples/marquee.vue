<template>
  <scroller>
    <wx-marquee :list="list" color="green"></wx-marquee>
    <wx-marquee :list="list" color="#EE2C2C" :duration="1000" :interval="1"></wx-marquee>
    <wx-marquee :list="list" color="white" background="#EE9A00" :size="50" :height="100"></wx-marquee>

    <wx-marquee :list="list" color="green" direction="horizontal"></wx-marquee>
    <wx-marquee :list="list" color="#EE2C2C" :duration="1000" :interval="1" direction="horizontal"></wx-marquee>
    <wx-marquee :list="list" color="white" background="#EE9A00" :size="50" :height="100" direction="horizontal"></wx-marquee>
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