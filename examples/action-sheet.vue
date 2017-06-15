<template>
  <div class="container">
    <wx-button class="btn" text="open cancel=true" @click="onclick(true)"></wx-button>
    <wx-button class="btn" color="danger" text="open cancel=false" @click="onclick(false)"></wx-button>
    <!-- 组件位于所有可见内容之后 -->
    <wx-action-sheet
      ref="sheet"
      :cancel="cancel"
      :title="title"
      :buttons="buttons"
      @handler="handler"
    ></wx-action-sheet>
  </div>
</template>

<style>
  .btn {
    margin-top: 50px;
  }
</style>

<script>
  const modal = weex.requireModule('modal');

  export default {
    components: {
      wxButton: require('wxui/wx-button.vue'),
      wxActionSheet: require('wxui/wx-action-sheet.vue'),
    },
    data() {
      return {
        output: '',
        title: 'action-sheet',
        buttons: [
          {
            text: '删除',
            color: 'danger', // white light primary secondary danger dark
            handler: 'delete'
          },
          {
            text: '按钮1',
            handler: '1'
          }
        ],
        cancel: true
      }
    },
    methods: {
      onclick(cancel) {
        this.cancel = cancel;
        this.$refs.sheet.$emit('show');
      },

      handler(e) {
        modal.toast({ message: e.handler });
      }
    }
  };
</script>
