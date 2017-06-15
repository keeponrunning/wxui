<template>
  <div :class="['item', !child && 'active']" @click="onclick">
    <image v-if="iconSrc" :class="['icon', avatar && 'avatar', thumbnail && 'thumbnail']" :src="iconSrc"></image>
    <div :class="['inner', noLines && 'no-line']" :style="{ width: innerWidth }">
      <div :class="[(isMedia && !subTitle) && 'media-no-sub']">
        <text class="title" :style="{ color: titleColor }">{{title}}</text>
        <text v-if="isMedia" class="subtitle" :style="{ color: subTitleColor }">{{subTitle}}</text>
      </div>
      <div v-if="!child" class="after">
        <text v-if="note" class="note" :style="{ color: noteColor }">{{note}}</text>
        <div v-if="badgeTxt" class="badge" :style="{ backgroundColor: badgeColor }">
          <text class="badge-txt" :style="{ fontSize: badgeSize }">{{badgeTxt}}</text>
        </div>
        <image v-if="!noArrow" class="arrow" :src="arrowIcon"></image>
      </div>
      <div class="child" v-if="child">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style>
  .item {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    /*height: 88px;*/
    padding-left: 30px;
    background-color: white;
  }
  .active {
    background-color: white;
  }
  .active:active {
    background-color: #D9D9D9;
  }

  /*media*/
  .icon {
    width: 50px;
    height: 50px;
  }
  .avatar {
    width: 88px;
    height: 88px;
    border-radius: 44px;
  }
  .thumbnail {
    width: 100px;
    height: 100px;
  }

  .media-no-sub {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  /*main*/
  .inner {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    /*height: 88px;*/
    padding-right: 30px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-bottom-width: 1px;
    border-bottom-color: #C8C7CC;
  }
  .no-line {
    border-bottom-width: 0;
  }

  .title {
    font-size: 34px;
  }
  .subtitle {
    font-size: 30px;
    margin-top: 10px;
  }
  .after {
    flex-direction: row;
    height: 60px;
    align-items: center;
  }
  .note {
    margin-right: 5px;
    margin-left: 5px;
    font-size: 34px;
  }

  /*badge*/
  .badge {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin-right: 5px;
    margin-left: 5px;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .badge-txt {
    color: white;
  }

  .arrow {
    width: 30px;
    height: 30px;
  }
  .child {
    height: 60px;
    flex-direction: row;
    align-items: center;
    overflow: hidden;
  }
</style>

<script>
  const navigator = weex.requireModule('navigator');

  export default {
    props: {
      icon: { default: '' },
      title: { default: '' },
      titleColor: { default: '#000000' },
      subTitle: { default: '' },
      subTitleColor: { default: '#919396' },
      note: { default: '' }, // 注释
      noteColor: { default: '#8E8E93' },
      badge: { default: 0 }, // 徽章
      badgeColor: { default: '#F43530' },
      noArrow: { default: false }, // 没向右箭头
      noLines: { default: false }, // 没边框
      child: { default: false }, // 是否有子节点
      avatar: { default: '' }, // 头像
      thumbnail: { default: '' }, // 相册

      to: { default: '' } // 跳转
    },

    computed: {
      // icon 路径
      iconSrc() {
        return this.icon || this.avatar || this.thumbnail;
      },
      //是否媒体列表
      isMedia() {
        return (this.avatar || this.thumbnail) ? true : false;
      },
      // 主容器宽度
      innerWidth() {
        if (this.icon) return 640;
        if (this.avatar) return 610;
        if (this.thumbnail) return 580;
        return 720;
      },
      // 向右箭头
      arrowIcon() {
        return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABVElEQVRYR+3W303DMBAG8M/2AMzABrUuA8AGMAF0AmACGCFMQNmAEeA9p5QNOkIZIDpk1KIQpa2dO9GX5j36fr47/3E48ueOnI8TILsCTdMsnHM3AGoierBqXTaAmaUXuiCiuQWiBFADuNuGishbCGEeY1xrINmAFNJrw0+miCxDCJcaRBEghTLzE4DHXiVUiGLABnEL4MUCMQmwB3EdY1yVzMRkwBgCwNp7n2ZimYtQAbYIEamdc2eb0CKEGpBC27addV33PgVhAtAgzAA7ECsiOt83D6YAZv6zPQF8EtHsXwDDcBH5CiFcHNoRJhUYW7n3PoUfvCfUAE14ao0KoA1XASzCJwOGN2Ka9tyeD3dEcQuGbwJNeHEFRsI/vPdXOdO+6yzIrgAzD59kr1VVpYNH9ZUAfh+lImISXtSC3uA9E9G9atm9n7MrYBWo3gXWkFMFvgF8ia0h8iJfYQAAAABJRU5ErkJggg==';
      },
      // 徽章数量
      badgeTxt() {
        return parseInt(this.badge) || '';
      },
      // 徽章字体大小
      badgeSize() {
        return 26 - ((this.badgeTxt + '').length - 1) * 3;
      }
    },

    methods: {
      onclick(e) {
        if (this.to) {
          return navigator.push({ url: this.to, animated : 'true' }, e => {});
        } else {
          return this.$emit('click', e);
        }
      }
    }
  };
</script>
