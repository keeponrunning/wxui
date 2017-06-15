<template>
  <div class="body">
    <wx-button class="btn" text="open cancel=true" @click="onclick(true)"></wx-button>
    <wx-button class="btn" color="danger" text="open cancel=false" @click="onclick(false)"></wx-button>
    <wx-backdrop :cancel="cancel" ref="backdrop" @change="onchange"></wx-backdrop>
  </div>
</template>

<script>
  const modal = weex.requireModule('modal');

  export default {
    components: {
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
        modal.toast({ message: 'callback：' + e.value });
      }
    }
  }
</script>

<style>
  .btn {
    margin-top: 50px;
  }
</style>