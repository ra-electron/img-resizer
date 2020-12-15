export default {
    methods: {
        handleDrag(e) {
            // 获取文件列表
            let fileList = e.dataTransfer.files
            if (hasImg) {
                this.isDrogover = false
                e.preventDefault()
            }
        },
        handleDragover(e) {
            this.isDrogover = true
            e.preventDefault()
        },
        // https://github.com/xiaokaike/magic-upload-image/blob/master/src/App.vue
        handleDragleave(e) {
            this.isDrogover = false
            e.preventDefault()
        }
    }
}