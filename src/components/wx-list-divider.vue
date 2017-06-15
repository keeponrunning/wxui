<template>
  <div class="item">
    <image v-if="icon" class="item-icon" :src="icon"></image>
    <div class="item-inner" :style="{ width: icon ? 640 : 720 }">
      <text class="item-title">title</text>
      <div class="item-after">
        <image class="item-arrow" :src="arrowIcon"></image>
      </div>
    </div>
  </div>
</template>

<style>
  .item {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 88px;
    padding-left: 30px;
    background-color: white;
  }
  .item:active {
    background-color: #D9D9D9;
  }
  .item-icon {
    width: 50px;
    height: 50px;
  }
  .item-inner {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 88px;
    padding-right: 30px;
    border-bottom-width: 1px;
    border-bottom-color: #C8C7CC;
  }
  .item-title {
    font-size: 34px;
  }
  .item-after {
    flex-direction: row;
    height: 88px;
    align-items: center;
  }
  .item-arrow {
    width: 30px;
    height: 30px;
  }
</style>

<script>
  import source from '../helpers/source';

  export default {
    props: {
      icon: { default: '' },

      noLines: { default: false },
    },

    computed: {
      arrowIcon() {
        return source('right.png');
      }
    }
  };
</script>
