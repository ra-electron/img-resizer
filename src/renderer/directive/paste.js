export default {
    install(Vue) {
        Vue.directive('paste', {
            bind(el, binding, vnode) {
                el.addEventListener('paste', function (event) {
                    //这里直接监听元素的粘贴事件
                    let file = null
                    const {
                        items
                    } = event.clipboardData
                    if (items && items.length) {
                        // 检索剪切板items
                        for (var i = 0; i < items.length; i++) {
                            if (items[i].type.indexOf('image') !== -1) {
                                file = items[i].getAsFile()
                                break
                            }
                        }
                    }
                    console.log(file)
                })
            }
        })
    }
}