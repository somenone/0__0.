<template>
  <div class="home">
    <p>这是一个网页，但是我还不知道要往里面放什么。</p>
    <confirm/>
  </div>
</template>

<script>
// @ is an alias to /src
import confirm from "../../components/confirm/confirm.vue"

export default {
  name: 'Home',
  components: {
    confirm
  },
  data(){
    return {
    }
  },
  methods: {
  },
  mounted(){
    let Pro = new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve("val")
      }, 2000);
    }).then(val => {
      console.log(val);
    })
    console.log(Pro);
  }
}
</script>
