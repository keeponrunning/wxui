<template>
  <div class="wrapper">
    <wx-navbar
      :dataRole="dataRole"
      :height="height"
      :backgroundColor="backgroundColor"
      :title="title"
      :titleColor="titleColor"
      :leftItemSrc="leftItemSrc"
      :leftItemTitle="leftItemTitle"
      :leftItemColor="leftItemColor"
      :rightItemSrc="rightItemSrc"
      :rightItemTitle="rightItemTitle"
      :rightItemColor="rightItemColor"
      :type="type"
      @naviBarRightItemClick="naviBarRightItemClick"
      @naviBarLeftItemClick="naviBarLeftItemClick"
      ></wx-navbar>
    <div class="wrapper" :style="{ marginTop: height }">
      <slot></slot>
    </div>
  </div>
</template>

<style>
  .wrapper {
    position: absolute; 
    top: 0; 
    left: 0; 
    right: 0; 
    bottom: 0; 
    width: 750;
    background-color: #F5F5F9;
  }
</style>

<script>
  export default {
    components: {
      wxNavbar: require('./wx-navbar.vue')
    },

    props: {
      dataRole: { default: 'navbar' },
      backgroundColor: { default: 'black' },
      height: { default: 88 },
      title: { default: "" },
      titleColor: { default: 'black' },
      rightItemSrc: { default: '' },
      rightItemTitle: { default: '' },
      rightItemColor: { default: 'black' },
      leftItemSrc: { default: '' },
      leftItemTitle: { default: '' },
      leftItemColor: { default: 'black' },
      type: { default: 'default' }
    },

    methods: {
      naviBarRightItemClick(e) {
        this.$emit('naviBarRightItemClick', e)
      },

      naviBarLeftItemClick(e) {
        this.$emit('naviBarLeftItemClick', e)
      }
    }
  }
</script>
