<template>
  <div
    :style="{height: height}"
    class="item"
    @click="onclick">
    <div
      :style="{backgroundColor: background}"
      class="place"></div>
    <image
      :src="icon"
      :class="[pattern]"></image>
    <text
      :style="{ color: color }"
      class="txt">{{title}}</text>
  </div>  
</template>

<style scoped>
  .item {
    flex: 1; 
    flex-direction: column; 
    align-items: center; 
    justify-content: flex-end; 
    padding-bottom: 10px;
  }
  /*占位*/
  .place {
    width: 750px;
    height: 98px;
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    border-top-width: 2px;
    border-top-color: #e5e5e5;
  }
  .normal {
    width: 50px;
    height: 50px;
  }
  .special {
    width: 80px;
    height: 80px;
  }
  .txt {
    margin-top: 5px; 
    text-align: center;  
    font-size: 22px;
  }
</style>

<script>
  export default {
    props: {
      index: { default: 0 },
      title: { default: '' },
      color: { default: '#000000' },
      icon: { default: '' },
      background: { default: '#ffffff' },
      pattern: { default: 'normal' }, //normal special
    },
    computed: {
      height: function () {
        return this.pattern === 'normal' ? 98 : 108;
      }
    },
    methods: {
      onclick: function (e) {
        this.$emit('click', {
          index: this.index
        });
      }
    }
  }
</script>