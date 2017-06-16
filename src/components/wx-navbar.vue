<template>
  <div
    :dataRole="dataRole"
    class="container"
    :style="{ height: height, backgroundColor: backgroundColor }">
    <text
      v-if="!rightItemSrc"
      naviItemPosition="right"
      :style="{ color: rightItemColor }"
      class="right-text"
      @click="onclickrightitem">{{rightItemTitle}}</text>
    <image
      v-if="rightItemSrc"
      naviItemPosition="right"
      :src="rightItemSrc"
      class="right-image"
      @click="onclickrightitem"
      resize="cover"></image>
    <text
      v-if="!leftItemSrc"
      naviItemPosition="left"
      :style="{ color: leftItemColor }"
      class="left-text"
      @click="onclickleftitem">{{leftItemTitle}}</text>
    <image
      v-if="leftItemSrc"
      naviItemPosition="left"
      :src="leftItemSrc"
      :class="['left-image', type]"
      @click="onclickleftitem"
      resize="cover"></image>
    <text
      naviItemPosition="center"
      :style="{ color: titleColor }"
      class="center-text">{{title}}</text>
  </div>
</template>

<style>
  .container {
    flex-direction: row; 
    position: fixed; 
    top: 0; 
    left: 0; 
    right: 0; 
    width: 750px;
  }
  .right-text {
    position: absolute; 
    bottom: 28px; 
    right: 32px; 
    text-align: right;
    font-size: 30px; 
    font-family: 'Open Sans', sans-serif;
  }
  .left-text {
    position: absolute; 
    bottom: 28px; 
    left :32px; 
    text-align :left;  
    font-size: 30px;
    font-family: 'Open Sans', sans-serif;
  }
  .center-text {
    position: absolute; 
    bottom: 26px; 
    left: 172px; 
    right: 172px;
    text-align: center; 
    font-size: 34px;
    font-family: 'Open Sans', sans-serif;
  }
  .left-image {
    position: absolute; 
    bottom: 20px; 
    left: 28px; 
    width: 40px; 
    height: 40px;
  }
  .right-image {
    position: absolute; 
    bottom: 20px; 
    right: 28px;
    width: 40px; 
    height: 40px;
  }
  .avatar {
    width: 60px; 
    height: 60px;
    bottom: 15px;
    border-radius: 30px;
  }
</style>

<script>
  export default {
    props: {
      dataRole: { default: 'navbar' },
      //导航条背景色
      backgroundColor: { default: 'black' },
      //导航条高度
      height: { default: 88 },
      //导航条标题 
      title: { default: '' },
      //导航条标题颜色
      titleColor: { default: 'black' },
      //右侧按钮图片
      rightItemSrc: { default: '' },
      //右侧按钮标题
      rightItemTitle: { default: '' },
      //右侧按钮标题颜色
      rightItemColor: { default: 'black' },
      //左侧按钮图片
      leftItemSrc: { default: '' },
      //左侧按钮标题
      leftItemTitle: { default: '' },
      //左侧按钮颜色
      leftItemColor: { default: 'black' },
      //扩展样式
      type: { default: 'default' }
    },

    methods: {
      onclickrightitem(e) {
        this.$emit('naviBarRightItemClick');
      },

      onclickleftitem(e) {
        this.$emit('naviBarLeftItemClick');
      }
    }
  }
</script>