import Vue from 'vue'
import Loading from './loading.vue'

const MsgConstructor = Vue.extend(Loading)

const options = {}

const instance = new MsgConstructor(options)
instance.$mount()
document.body.appendChild(instance.$el)

export default instance