<template>
  <page title="wx-share-sheet">
    <wx-button class="btn" text="open cancel=true" @click="onclick(true)"></wx-button>
    <wx-button class="btn" color="danger" text="open cancel=false" @click="onclick(false)"></wx-button>
    <!-- 组件位于所有可见内容之后 -->
    <wx-share-sheet
      ref="sheet"
      :cancel="cancel"
      :title="title"
      :cards="cards"
      @handler="handler"
    ></wx-share-sheet>
  </page>
</template>

<style>
  .btn {
    margin-top: 50px;
  }
</style>

<script>
  const modal = weex.requireModule('modal');

  export default {
    components: {
      page: require('./components/page.vue'),
      wxButton: require('wxui/wx-button.vue'),
      wxShareSheet: require('wxui/wx-share-sheet.vue'),
    },
    data() {
      return {
        output: '',
        title: 'Tap a item to share',
        cards: [
          [
            {
              title: '微信好友',
              icon: 'http://192.180.2.15:4040/assets/wechat.png',
              handler: '0'
            },
            {
              title: '微信朋友圈',
              icon: 'http://192.180.2.15:4040/assets/moment.png',
              handler: '1'
            },
            {
              title: 'QQ好友',
              icon: 'http://192.180.2.15:4040/assets/qq.png',
              handler: '2'
            },
            {
              title: 'QQ空间',
              icon: 'http://192.180.2.15:4040/assets/qqzone.png',
              handler: '3'
            },
            {
              title: '新浪微博',
              icon: 'http://192.180.2.15:4040/assets/xinlang.png',
              handler: '4'
            }
          ],
          [
            {
              title: '拷贝',
              icon: 'http://192.180.2.15:4040/assets/copy_link.png',
              handler: '10'
            },
            {
              title: '浏览器中打开',
              icon: 'http://192.180.2.15:4040/assets/safari.png',
              handler: '11'
            },
            {
              title: '收藏',
              icon: 'http://192.180.2.15:4040/assets/collection.png',
              handler: '12'
            },
            {
              title: '刷新',
              icon: 'http://192.180.2.15:4040/assets/refresh_icon.png',
              handler: '13'
            },
            {
              title: '举报',
              icon: 'http://192.180.2.15:4040/assets/jubao.png',
              handler: '14'
            },
          ],

        ],
        cancel: true
      }
    },
    methods: {
      onclick(cancel) {
        this.cancel = cancel;
        this.$refs.sheet.$emit('show');
      },

      handler(e) {
        modal.toast({ message: e.handler });
      },
      baseUrl(name) {
        const bundleUrl = this.$getConfig().bundleUrl;
        const ip = bundleUrl.match(/\d+.\d+.\d+.\d+:\d+/g)[0];
        return `http://${ip}/assets/${name}`;
      }
    }
  };
</script>
vue