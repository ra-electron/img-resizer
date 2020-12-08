<template>
  <div id="wrapper">
    <main
      class="container"
      id="dropHereView"
      ref="dropHereView"
      v-paste
    >
      <h2>DROP IMAGE HERE FROM COMPUTER</h2>
      <p>OR</p>
      <h2>PASTE IMAGE HERE</h2>
    </main>
  </div>
</template>


<script>
  export default {
    data() {
        return {
            type: 1, // 配置类型 1 表示宽高，2表示百分比
            width: 400,
            height: 400,
            percent: 20,
            outputPath: '',
            files: [] // 获取数据
        }
    },
    methods: {
        
    }
  };
</script>

<style scoped>
.container {
  text-align: center;
}
</style>
