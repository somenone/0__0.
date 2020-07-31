<template>
  <div>
    <div class="confirm-cover" v-show="confirmShow"></div>
    <div class="confirm-content" v-show="confirmShow">
      <div class="confirm-title">
        <p>{{title}}</p>
      </div>
      <div class="confirm-message">
        <p>{{message}}</p>
      </div>
      <div class="confirm-btm">
        <div class="confirm-btn" @click="close('cancel')">取消</div>
        <div class="confirm-btn c-b" @click="close('ok')">确定</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      confirmShow: false,
      title: "提示",
      message: "",
    };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.confirm-cover {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1000;
}
.confirm-content {
  width: 320px;
  background-color: #fff;
  z-index: 1001;
  position: fixed;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  overflow: hidden;
}
.confirm-title {
  height: 40px;
  line-height: 40px;
  padding: 0 20px;
  text-align: center;
}
.confirm-title p {
  font-size: 18px;
}
.confirm-message {
  padding: 10px 20px;
}
.confirm-btm {
  display: flex;
  justify-content: space-around;
  height: 40px;
  align-items: center;
}
.confirm-btn {
  text-align: center;
  cursor: pointer;
}
.c-b {
  color: rgb(93, 150, 255);
  font-weight: 700;
}
</style>