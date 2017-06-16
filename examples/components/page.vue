<template>
  <wx-navpage
    dataRole="none"
    :height="navBarHeight"
    :title="title"
    :backgroundColor="backgroundColor"
    :titleColor="titleColor"
    :leftItemSrc="_leftItemSrc"
    :leftItemTitle="leftItemTitle"
    :leftItemColor="leftItemColor"
    :rightItemSrc="rightItemSrc"
    :rightItemTitle="rightItemTitle"
    :rightItemColor="rightItemColor"
    :type="type"
    @naviBarLeftItemClick="naviBarLeftItemClick"
    @naviBarRightItemClick="naviBarRightItemClick">
    <slot></slot>
  </wx-navpage>
</template>

<script>
  const navigator = weex.requireModule('navigator');

  export default {
    components: {
      wxNavpage: require('wxui/wx-navpage.vue'),
    },

    props: {
      //导航条背景色
      backgroundColor: { default: '#FFA715' },
      //导航条标题 
      title: { default: '' },
      //导航条标题颜色
      titleColor: { default: 'white' },
      //右侧按钮图片
      rightItemSrc: { default: '' },
      //右侧按钮标题
      rightItemTitle: { default: '' },
      //右侧按钮标题颜色
      rightItemColor: { default: 'white' },
      //右侧点击事件冒泡
      // rightItemClick: { default: '' },
      //左侧按钮图片
      leftItemSrc: { default: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA0klEQVRYR93XUQqDMBAE0J2Ttp6setItWyxISeskO2ug+RPEeSYyibDJA5Pz7f8A7n43MwewMbMrnQF3X83stgcvAOL655ABPsIj9DpAI3wDEEtxOtIzkAkPXQqQDU8BFOHDAFX4EEAZ3g1Qh3cBKsJpQFU4Bdi7/XFoFLpkTluI6YEGYAWwMA9n7qGKqLEEMgQFiDepQtCAKkQXoALRDVAjhgBKxDBAhUgBFIg0IIuQAL4grjuUvit36rH8gHidhpl/Amo3ZDaUzD2yb2AUMR3wBNGcgSHOnzBkAAAAAElFTkSuQmCC' },
      //左侧按钮标题
      leftItemTitle: { default: '' },
      //左侧按钮颜色
      leftItemColor: { default: 'white' },
      //左侧点击事件冒泡
      onleftItemClick: { default: '' },
      //扩展样式
      type: { default: 'default' }, // default, clear, avatar
    },

    computed: {
      _leftItemSrc() {
        return this.type === 'clear' ? '' : this.leftItemSrc;
      }
    },

    data() {
      return {
        navBarHeight: 0,
      }
    },

    methods: {
      naviBarLeftItemClick(e) {
        if (this.type === 'avatar') return this.$emit('leftItemClick', e);
        if (this.leftItemSrc) return navigator.pop();
      },

      naviBarRightItemClick(e) {
        this.$emit('rightItemClick', e);
      }
    },

    created() {
      var env = this.$getConfig().env;
      if (env.platform === 'iOS') {
        var scale = env.scale;
        var deviceWidth = env.deviceWidth / scale;
        this.navBarHeight = 64.0 * 750.0 / deviceWidth;
      } else {
        this.navBarHeight = 88;
      }
    }
  }
</script>