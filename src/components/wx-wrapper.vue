<template>
  <div>
    <div v-for="(row, i) in list" :key="i" class="row">
      <div v-for="(item, k) in row" :key="k" @click="onclick(item)" class="item" :style="{ height: height }">
        <image :src="item.icon" :style="{ height: iconSize, width: iconSize }"></image>
        <text :style="{ fontSize: titleSize, color: titleColor, marginTop: space }">{{item.title}}</text>
      </div>
    </div>
  </div>
</template>

<script>
  import d2 from './helpers/d2';

  export default {
    props: {
      wrap: { default: [] },
      each: { default: 3 },
      height: { default: 200 },
      iconSize: { default: 60 },
      space: { default: 20 },
      titleSize: { default: 28 },
      titleColor: { default: '#000000' },
    },

    computed: {
      list() {
        return d2(this.wrap, this.each);
      },
      scale() {
        const size = { normal: 1, larger: 1.2, large: 1.5 };
        const key = this.type || 'normal';
        return size[key];
      }
    },

    methods: {
      onclick(e) {
        this.$emit('click', e);
      },
    }
  }
</script>

<style>
  .row {
    background-color: white;
    flex-direction: row;
    width: 750;
  }
  .item {
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: white;
  }
  .item:active {
    background-color: #f2f2f2;
  }
</style>