export default {
    install(Vue) {
        Vue.directive('drag', {
            bind(el, binding, vnode) {
                el.addEventListener('dragenter', function (event) {
                    event.stopPropagation()
                    event.preventDefault()
                })
                el.addEventListener('dragover', function (event) {
                    event.stopPropagation()
                    event.preventDefault()
                })
                el.addEventListener('dragleave', function (event) {
                    event.stopPropagation()
                    event.preventDefault()
                })
                el.addEventListener('drop', function (event) { //这里阻止默认事件，并绑定事件的对象，用来在组件上返回事件对象
                    event.stopPropagation()
                    event.preventDefault()
                    const {value} = binding
                    console.log(value)
                })
            }
        }
    }
}