<template>
  <div>
    <div class="body">
      <wx-button text="open" @click="onclick(true)"></wx-button>
      <wx-button class="pop" text="pop" color="danger" @click="onpop"></wx-button>
    </div>
    <wx-menu ref="menu">
      <div class="menu-body">
        <wx-button text="close" @click="onclick(false)"></wx-button>
      </div>
    </wx-menu>
  </div>
</template>

<script>
  const navigator = weex.requireModule('navigator');

  export default {
    components: {
      wxButton: require('wxui/wx-button.vue'),
      wxMenu: require('wxui/wx-menu.vue'),
    },

    methods: {
      onclick(status) {
        const emit = status ? 'show' : 'hide';
        this.$refs.menu.$emit(emit);
      },

      onpop() {
        navigator.pop();
      }
    }
  }
</script>

<style>
  .body {
    padding-top: 50px;
  }
  .menu-body {
    padding-top: 50px;
  }
  .pop {
    margin-top: 50px;
  }
</style>