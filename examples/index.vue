<template>
  <scroller class="container">
    <wx-list title="Components">
      <wx-list-item title="ActionSheet" :to="baseUrl('action-sheet')"></wx-list-item>
      <wx-list-item title="Backdrop" :to="baseUrl('backdrop')"></wx-list-item>
      <wx-list-item title="Buttons" :to="baseUrl('buttons')"></wx-list-item>
      <wx-list-item title="Checkbox" :to="baseUrl('checkbox')"></wx-list-item>
      <wx-list-item title="Lists" :to="baseUrl('lists')"></wx-list-item>
      <wx-list-item title="Marquee" :to="baseUrl('marquee')"></wx-list-item>
      <wx-list-item title="Menu" :to="baseUrl('menu')"></wx-list-item>
      <wx-list-item title="Sliders" :to="baseUrl('sliders')"></wx-list-item>
      <wx-list-item title="Tabbar" :to="baseUrl('tabbar')"></wx-list-item>
      <wx-list-item title="Wrappers" :to="baseUrl('wrappers')"></wx-list-item>
    </wx-list>
  </scroller>
</template>

<style>
  .container {
    background-color: #f2f2f5;
  }
</style>

<script>
  export default {
    components: {
      wxList: require('wxui/wx-list.vue'),
      wxListItem: require('wxui/wx-list-item.vue'),
    },

    methods: {
      baseUrl(name) {
        const bundleUrl = this.$getConfig().bundleUrl;
        const ip = bundleUrl.match(/\d+.\d+.\d+.\d+:\d+/g)[0];
        return `http://${ip}/dist/native/${name}.js`;
      }
    }
  };
</script>
