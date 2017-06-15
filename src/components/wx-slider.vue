<template>
  <slider :style="{ height: height}" append="tree" :interval="interval" :autoPlay="autoPlay" :infinite="infinite" @change="onchange">
    <div :style="{ height: height}" class="item" v-for="(i, key) in slider" :key="key" @click="onclick(i)">
      <image :style="{ height: height, width: 750 }" :src="i.src" :resize="resize"></image>
    </div>
    <indicator
      :style="{
        height: height,
        itemColor: color,
        itemSelectedColor: selectColor,
        itemSize: size,
        top: height / 2 - 2 * size
      }" class="indicator"></indicator>
  </slider>
</template>

<style>
  .indicator {
    position: absolute;
    width: 750;
  }
</style>

<script>
  export default {
    props: {
      slider: { default: [] },
      interval: { default: 4000 },
      autoPlay: { default: true },
      infinite: { default: true },
      height: { default: 440 },
      color: { default: 'white' },
      selectColor: { default: 'black' },
      size: { default: 10 },
      resize: { default: 'stretch' }, // stretch cover contain
    },
    components: {
      wxImage: require('./wx-image.vue')
    },
    methods: {
      onclick(e) {},

      onchange(e) {
        this.$emit('change', e);
      }
    }
  };
</script>