import Vue from "vue"
import confirm from "./confirm.vue"

let defaultOptions = {
  coverShow: false,
  contentShow: false,
  title: "",
  content: '',
  
}
let confirm = Vue.extend(confirm)

let showConfirm = (options = {}) => {
  options = defaultOptions.assign(defaultOptions,options)


  let inDom = new confirm({
    el: document.createElement('div'),
    data: options
  })

  let bodyDom = document.body
  bodyDom.appendChild(inDom.$el)

  Vue.nextTick(()=>{
    inDom.
  })
}

