<template>
  <div class="wrapper">
    <text class="txt">C</text>
    <wx-button class="btn" text="pop" color="danger" @click="onpop"></wx-button>
  </div>
</template>

<style>
  .wrapper {
    flex: 1;
    justify-content: center;
    align-items: center;
  }
  .txt {
    font-size: 50px;
    color: pink;
  }
  .btn {
    width: 700px;
    margin-top: 50px;
  }
</style>

<script>
  const navigator = weex.requireModule('navigator');

  export default {
    components: {
      wxButton: require('wxui/wx-button.vue')
    },

    methods: {
      onpop() {
        navigator.pop();
      }
    }
  };
</script>
