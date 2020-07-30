<template>
  <div>
    <div class="confirm-cover" v-if="coverShow"></div>
    <div class="confirm-content" v-show="contentShow">
      <div class="confirm-title"><p>{{title}}</p></div>
      <div class="confirm-btm">
        <div class="confirm-btn" @click='cancel'>取消</div>
        <div class="confirm-btn" @click='ok'>确定</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      coverShow: true,
      contentShow: true,
      title: "提示",
      content: ""
    };
  },
  methods: {
    close(){
      this.coverShow = false
      this.contentShow = false
    },
    show(){
      this.coverShow = true
      this.contentShow = true
    },
    ok(){
      this.okCallback()
    },
    cancel(){
      this.cancelCallback()
    }
  },
};
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.confirm-cover {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1000;
}
.confirm-content{
  width: 100px;
  height: 100px;
  background-color: #fff;
  z-index: 1001;
  position: fixed;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
}
</style>