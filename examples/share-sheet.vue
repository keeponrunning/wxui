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
        title: '分享',
        cancel: true,
        cards: []
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
    },

    created() {
      this.cards = [
        [
          {
            title: '微信好友',
            icon: this.baseUrl('wechat.png'),
            handler: 'wxfriend'
          },
          {
            title: '微信朋友圈',
            icon: this.baseUrl('moment.png'),
            handler: 'wxmoment'
          },
          {
            title: 'QQ好友',
            icon: this.baseUrl('qq.png'),
            handler: 'qqfriend'
          },
          {
            title: '支付宝',
            icon: this.baseUrl('airpay.png'),
            handler: 'airpay'
          },
          {
            title: '新浪微博',
            icon: this.baseUrl('sina.png'),
            handler: 'sinawb'
          }
        ],
        [
          {
            title: '拷贝',
            icon: this.baseUrl('copy_link.png'),
            handler: 'copy'
          },
          {
            title: '浏览器中打开',
            icon: this.baseUrl('safari.png'),
            handler: 'safari'
          },
          {
            title: '收藏',
            icon: this.baseUrl('collection.png'),
            handler: 'collect'
          },
          {
            title: '刷新',
            icon: this.baseUrl('refresh_icon.png'),
            handler: 'refresh'
          },
          {
            title: '举报',
            icon: this.baseUrl('jubao.png'),
            handler: 'report'
          },
        ],

      ]
    }
  };
</script>