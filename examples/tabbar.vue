<template>
  <div class="body">
    <wx-tabbar
      :tabItems="tabItems"
      :selectedIndex="selectedIndex"
      :selectedColor="options.selectedColor"
      :unselectedColor="options.unselectedColor"
      :pattern="options.pattern"
    ></wx-tabbar>
  </div>
</template>

<style>
  .body {
    flex-direction: column;
  }
</style>

<script>
  export default {
    components: {
      wxTabbar: require('wxui/wx-tabbar.vue')
    },
    data() {
      return {
        selectedIndex: 0,
        tabItems: [],
        options: {
          "unselectedColor": "#cbd1e4",
          "pattern": "special",
          "selectedColor": "#03753a",
          "selectedIndex": 0
        },
      }
    },

    methods: {
      baseUrl(name, source = true) {
        const bundleUrl = this.$getConfig().bundleUrl;
        const ip = bundleUrl.match(/\d+.\d+.\d+.\d+:\d+/g)[0];
        return `http://${ip}/${ source ? 'assets' : 'dist/native' }/${name}`;
      }
    },

    created() {
      this.tabItems = [
        {
          "image": this.baseUrl('fire_light.png'),
          "visibility": "visible",
          "titleColor": "",
          "src": this.baseUrl('tabbar-a.js', false),
          "icon": "",
          "selectedImage": this.baseUrl('fire_danger.png'),
          "index": 0,
          "title": "首页"
        },
        {
          "image": this.baseUrl('fire_light.png'),
          "visibility": "hidden",
          "titleColor": "",
          "src": this.baseUrl('tabbar-b.js', false),
          "icon": "",
          "selectedImage": this.baseUrl('fire_danger.png'),
          "index": 1,
          "title": "个人福店"
        },
        {
          "image": this.baseUrl('fire_light.png'),
          "visibility": "hidden",
          "titleColor": "",
          "src": this.baseUrl('tabbar-c.js', false),
          "icon": "",
          "selectedImage": this.baseUrl('fire_danger.png'),
          "index": 2,
          "title": "我的"
        }
      ]
    }
  };
</script>