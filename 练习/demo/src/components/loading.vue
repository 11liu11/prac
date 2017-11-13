<template>
  <div class="hello">
    <p v-if="state=='start'">
        数据开始请求
    </p>
    <p v-else-if="state=='loading'">
        数据正在加载
    </p>
     <p v-else-if="state=='end'">
        数据请求完毕
    </p>
    <p v-else>
      数据请求失败，再次发起数据请求
    </p>
  </div>
</template>

<script>
  import {mapActions,mapState} from "vuex"
export default {
  name: 'index',
  created(){
     
    // this.defaultData(this.redirectfn)
    this.defaultData()
   
  },
  computed:{
    ...mapState({
        state:function(state){
          if(state.state=="end"){
            this.$router.push("/")
          }else if(!state.state){
            console.log("已经发起数据请求")
             this.defaultData()
          }
          return state.state
        }
    })
  },
  // watch:{
  //   state(){
  //     if(this.state){
  //        this.$router.push({path:"/"})
  //     }
  //     console.log(this.state)
  //   }
  // },
  methods:{
    // redirectfn(){
    //   this.$router.push({path:"/"})
    // },
    ...mapActions([
      "defaultData"
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
