import Vue from "vue"
import myconfirm from "./confirm.vue"

let defaultOptions = {
  confirmShow: false,
  title: "",
  message: '',
}
let inDom
let proBack = {}
let confirm = Vue.extend(myconfirm)

//默认回调
let defaultCallback = (action) => {
  console.log(action);
}

//关闭confirm
let confirmClose = (action)=>{
  inDom.confirmShow = false
  if(typeof inDom.callback === 'function')
    inDom.callback(action)
  setTimeout(() => {
    inDom.$destroy()
  }); 
  switch(action){
  case "ok": proBack.resolve(action)
  case "cancel": proBack.resolve(action)
  }

}

let showConfirm = (options = {},callback = defaultCallback) => {
  options = Object.assign(defaultOptions,options)
  
  inDom = new confirm({
    el: document.createElement('div'),
    data: options
  })
  inDom.callback = callback
  inDom.close = confirmClose

  let bodyDom = document.body
  bodyDom.appendChild(inDom.$el)

  Vue.nextTick(()=>{
    inDom.confirmShow = true
  })
  return new Promise((resolve,reject) => {
    proBack = {
      resolve: resolve,
      reject: reject
    }
  })
}

export default Vue.prototype.$confirm = showConfirm

