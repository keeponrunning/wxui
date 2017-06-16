<template>
  <page title="wx-checkbox">
    <scroller>
      <wx-checkbox class="checkbox" @change="onchange" text="text"></wx-checkbox>
      <wx-checkbox class="checkbox" @change="onchange" text="light" color="light"></wx-checkbox>
      <wx-checkbox class="checkbox" @change="onchange" text="secondary" color="secondary" :checked="true"></wx-checkbox>
      <wx-checkbox class="checkbox" @change="onchange" text="danger" color="danger"></wx-checkbox>
      <wx-checkbox class="checkbox" @change="onchange" text="dark" color="dark"></wx-checkbox>
      <wx-checkbox class="checkbox" @change="onchange" text="disable" :disable="true"></wx-checkbox>
      <wx-checkbox class="checkbox" @change="onchange" text="disable checked" :disable="true" :checked="true"></wx-checkbox>

      <wx-list title="full">
        <wx-checkbox class="checkbox" @change="onchange" text="text" :full="true"></wx-checkbox>
        <wx-checkbox class="checkbox" @change="onchange" text="light" color="light" :full="true"></wx-checkbox>
        <wx-checkbox class="checkbox" @change="onchange" text="secondary" color="secondary" :full="true"></wx-checkbox>
        <wx-checkbox class="checkbox" @change="onchange" text="danger" color="danger" :full="true"></wx-checkbox>
        <wx-checkbox class="checkbox" @change="onchange" text="dark" color="dark" :checked="true" :full="true"></wx-checkbox>
      </wx-list>
    </scroller>
  </page>
</template>

<style>
  .checkbox {
    padding: 20px;
  }
</style>

<script>
  const modal = weex.requireModule('modal');

  export default {
    components: {
      page: require('./components/page.vue'),
      wxCheckbox: require('wxui/wx-checkbox.vue'),
      wxList: require('wxui/wx-list.vue')
    },
    data() {
      return {

      }
    },

    methods: {
      onchange(e) {
        modal.toast({ message: 'status：' + e.value });
      }
    },
  };
</script>