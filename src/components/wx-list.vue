<template>
  <div :class="['list', title && 'no-top-line']">
    <div v-if="title" class="title-box">
      <text class="title">{{title}}</text>
    </div>
    <slot></slot>
    <div class="clear"></div>
  </div>
</template>

<style>
  .list {
    border-top-width: 1px;
    border-top-color: #C8C7CC;
    position: relative;
  }
  .no-top-line {
    border-top-width: 0;
  }
  .title-box {
    position: sticky;
    height: 88px;
    background-color: #F4F4F4;
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
    border-bottom-width: 1px;
    border-bottom-color: #C8C7CC;
  }
  .title {
    font-size: 34px;
  }
  .clear {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    border-bottom-width: 1px;
    border-bottom-color: #C8C7CC;
  }
</style>

<script>
  export default {
    props: {
      to: { default: '' },
      title: { default: '' },
    }
  };
</script>
