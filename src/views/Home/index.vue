<template>
  <div class="home">
    <p>这是一个网页，但是我还不知道要往里面放什么。</p>
    <!-- <confirm/> -->
    <button @click='confirm'>confirm</button>
    <button @click='anyconfirm'>anyconfirm</button>
    <upload/>
  </div>
</template>

<script>
// @ is an alias to /src
import upload from "../../components/upload/idnex"

export default {
  name: 'Home',
  components: {
    // confirm
    upload
  },
  data(){
    return {
    }
  },
  methods: {
    async confirm(){
      let comret = await this.$confirm({title:"name"},(action) => {
        console.log("callback:"+action);
      })
      // .then(() => {
      //   console.log("then");
      // }).catch(()=> {
      //   console.log("catch");
      // })
      if(comret === 'ok')
        console.log(comret);
      else{
        console.log(111);
      }
    },
    anyconfirm(){
      this.$anyconfirm()
    }
  },
  mounted(){
    this.Pro = new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve("val")
      }, 2000);
    }).then(val => {
      console.log(val);
    })
  }
}
</script>
