<template>
  <main
    id="settingsView"
    ref="settingsView"
  >
    <div>
      <div class="set-block">
        <span>输出目录：</span>
        <button
          @click="showFileDialog"
          style="outline:none;background:transparent;border:none;"
        >
          <input
            type="text"
            placeholder="输出目录"
            v-model="outputPath"
            class="input-dir"
            style="width:200px;outline:none;"
          >
        </button>
      </div>
      <div class="set-block">
        <span>压缩类型：</span>
        <input
          type="radio"
          :value="2"
          id='one'
          v-model="type"
          style="margin-left:20px"
        >
        <label
          for="one"
          style="margin-left:2px"
        >尺寸</label>
        <input
          type="radio"
          :value="1"
          id='two'
          v-model="type"
          style="margin-left:20px"
        >
        <label
          for="two"
          style="margin-left:2px"
        >百分比</label>
      </div>
      <div
        v-if="type === 1"
        class="set-block"
      >
        <input
          type="range"
          min="1"
          max="100"
          step="1"
          v-model="percent"
        >
        <input
          type="number"
          v-model="percent"
        >
      </div>
      <div
        v-else
        class="set-block"
      >
        <div>
          <span>宽</span>
          <input
            type="number"
            min="1"
            v-model="size.width"
          >
          <span style="margin:0 20px;">x</span>
          <span>高</span>
          <input
            type="number"
            min="1"
            v-model="size.height"
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import {getOutput, setOutput,getType,setType,getPercent,setPercent,getSize,setSize} from "../../api/api"
export default {
    data() {
        return {
            type: 2,
            percent: 50,
            size:{
                width: 200,
                height: 200,
            },
            dictorySelected: '',
            outputPath: ''
        }
    },
    watch:{
        outputPath(value) {
            console.log(value)
        },
        type(value) {
            setType(+value)
        },
        percent(value) {
            setPercent(+value)
        },
        size(value) {
            const {width, height} = this.size
            setSize({
                width: +width,
                height: +height
            })
        }
    },
   
    created(){
        this.getInitSettings()
    },
    methods: {
        getInitSettings() {
            this.outputPath = getOutput()
            this.type = getType()
            this.percent = getPercent()
            this.size = getSize()
        },
        showFileDialog() {
            const dialog = require('electron').remote.dialog
            dialog.showOpenDialog({ properties: ['openDirectory'] }, (filename) => {
                if (filename && filename.length === 1) {
                    this.outputPath = filename[0]
                    setOutput(value)
                } else {
                    // this.outputPath = ''
                }
            })
        },
    }
}
</script>

<style scoped>
#settingsView {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

input[type="range"] {
  width: 200px;
  border-radius: 5px;
  background: #d7dcdf;
  outline: none;
  padding: 0;
  margin: 0;
}
input[type="number"] {
  width: 40px;
  outline: none;
  text-align: center;
  margin-left: 10px;
  border: none;
  padding: 2px;
  border-radius: 2px;
  background: #3c3e41;
  color: #6e6e6e;
}

.set-block {
  margin: 20px 0;
}

.input-dir {
  -webkit-appearance: none;
  appearance: none;
  border: none;
  padding: 2px;
  border-radius: 2px;
  background: #3c3e41;
  color: #6e6e6e;
}
</style>