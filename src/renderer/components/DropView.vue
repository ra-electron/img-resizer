<template>
  <div id="wrapper">
    <main
      class="container"
      id="dropHereView"
      ref="dropHereView"
      @drop="handleDrag"
      @dragover="handleDragover"
      @dragleave="handleDragleave"
    >
      <h2>DROP IMAGE HERE FROM COMPUTER</h2>
      <p>OR</p>
      <h2>PASTE IMAGE HERE</h2>
    </main>
  </div>
</template>


<script>
import {getOutput, setOutput,getType,setType,getPercent,setPercent,getSize,setSize} from "../../api/api"

import resizeImg from "resize-img"
import mixinDrop from '@/mixins/drop.js'
import mixinPaste from '@/mixins/paste.js'

export default {
    mixins: [mixinDrop,mixinPaste],
    data() {
        return {
            type: 1, // 配置类型 1 表示宽高，2表示百分比
            width: 400,
            height: 400,
            percent: 20,
            outputPath: '',
            isDrogover: false,
            images: [] // 获取图片
        }
    },
    methods: {
        resizer() {
            const [outputPath,type,percent,size] = [getOutput(),getType(),getPercent(),getSize()]


            console.log(outputPath,type,percent,size)

            // 判断 type 的类型，如果为 1，表示尺寸，如果为 2，表示百分比
            let opts = {}
            if(type === 1) {
                opts = size
            } else {
                opts = {
                    width: 1,
                    height:1,
                }
            }
        },
        resizeImages(files, opts) {
            console.log(files, opts)
        },
    }
};
</script>

<style scoped>
.container {
  text-align: center;
}
</style>
