import Vue from "vue"
import anyConfirm from "./anyConfirm.vue"

import confirm from "../confirm/confirm"

let anyConfirmConsuctor = Vue.extend(anyConfirm)
let inDom

let anyconfirm = () => {
  inDom = new anyConfirmConsuctor({
    el: document.createElement('div'),
  })
  console.log(typeof inDom.$el);
  confirm({
    title:'title',
    message: inDom.$el
  })
}

export default Vue.prototype.$anyconfirm = anyconfirm
