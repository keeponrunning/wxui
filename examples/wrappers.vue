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
  import source from './helpers/source';

  export default {
    components: {
      wxWrapper: require('wxui/wx-wrapper.vue')
    },
    data() {
      return {
        wrap: [
          {
            icon: source('fire_danger.png'),
            title: 'title1'
          },
          {
            icon: source('fire_primary.png'),
            title: 'title2'
          },
          {
            icon: source('fire_secondary.png'),
            title: 'title3'
          },
          {
            icon: source('fire_dark.png'),
            title: 'title4'
          },
          {
            icon: source('fire_light.png'),
            title: 'title5'
          }
        ]
      }
    }
  };
</script>
