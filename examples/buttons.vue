<template>
  <scroller class="container">
    <div class="group">
      <text class="group-title">block</text>
      <wx-button text="white" color="white"></wx-button>
      <wx-button text="light" color="light"></wx-button>
      <wx-button text="primary default"></wx-button>
      <wx-button text="secondary" color="secondary"></wx-button>
      <wx-button text="danger" color="danger"></wx-button>
      <wx-button text="dark" color="dark"></wx-button>
    </div>

    <div class="group">
      <text class="group-title">full</text>
      <wx-button text="white" color="white" :full="true"></wx-button>
      <wx-button text="light" color="light" :full="true"></wx-button>
      <wx-button text="primary default" :full="true"></wx-button>
      <wx-button text="secondary" color="secondary" :full="true"></wx-button>
      <wx-button text="danger" color="danger" :full="true"></wx-button>
      <wx-button text="dark" color="dark" :full="true"></wx-button>
    </div>

    <div class="group">
      <text class="group-title">outline</text>
      <wx-button text="white" color="white" :outline="true"></wx-button>
      <wx-button text="light" color="light" :outline="true"></wx-button>
      <wx-button text="primary default" :outline="true"></wx-button>
      <wx-button text="secondary" color="secondary" :outline="true"></wx-button>
      <wx-button text="danger" color="danger" :outline="true"></wx-button>
      <wx-button text="dark" color="dark" :outline="true"></wx-button>
    </div>

    <div class="group">
      <text class="group-title">clear</text>
      <wx-button text="white" color="white" :clear="true"></wx-button>
      <wx-button text="light" color="light" :clear="true"></wx-button>
      <wx-button text="primary default" :clear="true"></wx-button>
      <wx-button text="secondary" color="secondary" :clear="true"></wx-button>
      <wx-button text="danger" color="danger" :clear="true"></wx-button>
      <wx-button text="dark" color="dark" :clear="true"></wx-button>
    </div>

    <div class="group">
      <text class="group-title">round</text>
      <wx-button text="white" color="white" :round="true"></wx-button>
      <wx-button text="light" color="light" :round="true"></wx-button>
      <wx-button text="primary default" :round="true"></wx-button>
      <wx-button text="secondary" color="secondary" :round="true"></wx-button>
      <wx-button text="danger" color="danger" :round="true"></wx-button>
      <wx-button text="dark" color="dark" :round="true"></wx-button>
    </div>

    <div class="group">
      <text class="group-title">disable</text>
      <wx-button text="disable" :disable="true"></wx-button>
    </div>

    <div class="group">
      <text class="group-title">size</text>
      <wx-button text="small" :small="true"></wx-button>
      <wx-button text="large" :large="true" color="danger"></wx-button>
    </div>

    <div class="group">
      <text class="group-title">icon</text>
      <wx-button text="iconLeft" :iconLeft="icon"></wx-button>
      <wx-button text="iconRight" color="secondary" :iconRight="icon"></wx-button>
      <wx-button text="iconRight" color="dark" :iconOnly="icon"></wx-button>

      <wx-button text="primary" :outline="true" :iconLeft="icon_primary"></wx-button>
      <wx-button text="secondary" :outline="true" color="secondary" :iconRight="icon_secondary"></wx-button>
      <wx-button text="danger" :outline="true" :large="true" color="danger" :iconOnly="icon_danger"></wx-button>
      <wx-button text="dark" :clear="true" color="dark" :small="true" :iconLeft="icon_dark"></wx-button>
    </div>
  </scroller>
</template>

<style>
  .group {
    margin-top: 40px;
  }
  .group-title {
    font-size: 54px;
    padding: 20px;
  }
</style>

<script>
  export default {
    components: {
      wxButton: require('wxui/wx-button.vue')
    },
    computed: {
      icon() {
        return this.baseUrl('fire.png');
      },
      icon_primary() {
        return this.baseUrl('fire_primary.png');
      },
      icon_secondary() {
        return this.baseUrl('fire_secondary.png');
      },
      icon_danger() {
        return this.baseUrl('fire_danger.png');
      },
      icon_light() {
        return this.baseUrl('fire_light.png');
      },
      icon_dark() {
        return this.baseUrl('fire_dark.png');
      }
    },
    methods: {
      baseUrl(name) {
        const bundleUrl = this.$getConfig().bundleUrl;
        const ip = bundleUrl.match(/\d+.\d+.\d+.\d+:\d+/g)[0];
        return `http://${ip}/assets/${name}`;
      }
    }
  };
</script>
