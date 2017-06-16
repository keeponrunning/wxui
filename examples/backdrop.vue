<template>
  <page title="wx-backdrop">
    <wx-button class="btn" text="open cancel=true" @click="onclick(true)"></wx-button>
    <wx-button class="btn" color="danger" text="open cancel=false" @click="onclick(false)"></wx-button>
    <wx-backdrop :cancel="cancel" ref="backdrop" @change="onchange"></wx-backdrop>
  </page>
</template>

<script>
  const modal = weex.requireModule('modal');

  export default {
    components: {
      page: require('./components/page.vue'),
      wxButton: require('wxui/wx-button.vue'),
      wxBackdrop: require('wxui/wx-backdrop.vue')
    },

    data() {
      return {
        cancel: true
      }
    },

    methods: {
      onclick(cancel) {
        this.cancel = cancel;
        this.$refs.backdrop.$emit('show');
      },

      onchange(e) {
        // modal.toast({ message: 'callback：' + e.value });
      }
    }
  }
</script>

<style>
  .btn {
    margin-top: 50px;
  }
  .xxxx {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-color: rgba(0,0,0,0.7);
  }
</style>