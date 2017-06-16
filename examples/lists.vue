<template>
  <page title="wx-list">
    <scroller>
      <wx-list title="No icons">
        <wx-list-item title="default"></wx-list-item>
        <wx-list-item title="noArrow" :noArrow="true" titleColor="#488AFF"></wx-list-item>
        <wx-list-item title="note noArrow" note="CEO" :noArrow="true"></wx-list-item>
        <wx-list-item title="badge" :badge="9" badgeColor="#32DB64"></wx-list-item>
        <wx-list-item title="note badge" :badge="33" note="Note"></wx-list-item>
      </wx-list>

      <wx-list title="With icons">
        <wx-list-item title="default" :icon="icon"></wx-list-item>
        <wx-list-item title="note" :icon="icon" note="CEO" noteColor="#32DB64"></wx-list-item>
        <wx-list-item title="badge noArrow" :icon="icon" :badge="9" :noArrow="true"></wx-list-item>
        <wx-list-item title="badge note" :icon="icon" :badge="33" note="Note" noteColor="#F53D3D"></wx-list-item>
      </wx-list>

      <wx-list title="Has child">
        <wx-list-item title="child" :child="true">
          <switch></switch>
        </wx-list-item>
        <wx-list-item title="child" :child="true">
          <switch :checked="true"></switch>
        </wx-list-item>
        <wx-list-item title="child" :child="true">
          <switch :checked="true" :disabled="true"></switch>
        </wx-list-item>
      </wx-list>

      <wx-list title="noLines">
        <wx-list-item title="default" :noLines="true"></wx-list-item>
        <wx-list-item title="noArrow" :noArrow="true" :noLines="true"></wx-list-item>
        <wx-list-item title="note noArrow" note="CEO" :noArrow="true" :noLines="true"></wx-list-item>
        <wx-list-item title="badge" :badge="9" :noLines="true"></wx-list-item>
        <wx-list-item title="note badge" :badge="33" note="Note" :noLines="true"></wx-list-item>
      </wx-list>

      <wx-list title="avatar">
        <wx-list-item title="avatar" :avatar="avatar"></wx-list-item>
        <wx-list-item title="noArrow" :avatar="avatar" :noArrow="true" subTitle="subTitle" subTitleColor="#F53D3D"></wx-list-item>
        <wx-list-item title="note noArrow" :avatar="avatar" note="CEO" :noArrow="true"></wx-list-item>
        <wx-list-item title="badge" :avatar="avatar" :badge="9" subTitle="subTitle"></wx-list-item>
        <wx-list-item title="note badge" :avatar="avatar" :badge="33" note="Note"></wx-list-item>
      </wx-list>

      <wx-list title="thumbnail">
        <wx-list-item title="thumbnail" :thumbnail="thumbnail" subTitle="subTitle"></wx-list-item>
        <wx-list-item title="noArrow" :thumbnail="thumbnail" :noArrow="true"></wx-list-item>
        <wx-list-item title="note noArrow" :thumbnail="thumbnail" note="CEO" :noArrow="true"></wx-list-item>
        <wx-list-item title="badge" :thumbnail="thumbnail" :badge="9"></wx-list-item>
        <wx-list-item title="note badge" :thumbnail="thumbnail" :badge="33" note="Note"></wx-list-item>
      </wx-list>
    </scroller>
  </page>
</template>

<style>

</style>

<script>
  export default {
    components: {
      page: require('./components/page.vue'),
      wxList: require('wxui/wx-list.vue'),
      wxListItem: require('wxui/wx-list-item.vue')
    },
    computed: {
      icon() {
        return this.baseUrl('icon.png');
      },
      avatar() {
        return this.baseUrl('avatar.jpg')
      },
      thumbnail() {
        return this.baseUrl('thumbnail.jpeg')
      }
    },
    methods: {
      baseUrl(name) {
        const bundleUrl = this.$getConfig().bundleUrl;
        const ip = bundleUrl.match(/\d+.\d+.\d+.\d+:\d+/g)[0];
        return `http://${ip}/assets/${name}`;
      }
    }
  };
</script>
