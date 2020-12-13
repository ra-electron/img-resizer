<template>
  <div id="app">
    <div id="title">
      图片裁缝
      <img
        id="gear"
        src="@/assets/gear.svg"
        @click="switchView"
      />
    </div>
    <div class="view">
      <DropView v-if="view"></DropView>
      <SettingsView v-else></SettingsView>
    </div>
  </div>
</template>

<script>
  import DropView from '@/components/DropView.vue'
  import SettingsView from '@/components/SettingsView.vue'

  export default {
    name: 'img-resizer',
    data() {
        return {
            view: true
        }
    },
    components: {
      DropView,
      SettingsView
    },
    methods: {
        switchView() {
            this.view = !this.view
        }
    }
  };
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

body {
  color: #e1e1e0;
  cursor: default;
  background-color: #2b2b2b;
}
body.ondrag {
  background-color: #2b2b2b;
}

body,
input,
button {
  font-size: 13px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
#title {
  height: 38px;
  color: #c0bfbd;
  line-height: 38px;
  user-select: none;
  text-align: center;
  position: relative;
  -webkit-app-region: drag;
  background-color: #2b2b2b;
  border-bottom: 1px solid #000;
}
#gear {
  top: 9px;
  right: 9px;
  width: 20px;
  height: 20px;
  position: absolute;
  cursor: pointer;
}
.view {
  height: calc(100vh - 38px);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
