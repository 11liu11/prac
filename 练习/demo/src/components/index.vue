<template>
  <div class="hello">
      <headcon></headcon>
      <broadcast></broadcast>
      <main class="main">
          <router-view class="left"></router-view>
          <div class=right> 
            <search></search>
            <newtop type="newtop"></newtop>
            <newtop type="clicktop"></newtop>
            <!--<clicktop></clicktop>-->
          </div>
      </main>
      
  </div>
</template>

<script>
  import {mapState} from "vuex"
  import headcon from "./pages/head"
  import broadcast from "./pages/broadcast"
  import search from "./pages/search"
  import newtop from "./pages/newtop"
  import clicktop from "./pages/clicktop"
export default {
  name: 'index',
  data () {
     return {
        activeIndex: '1',
        
      };
  },
  components:{
      headcon,
      broadcast,
      search,
      newtop,
      clicktop
  },
  computed:{
      ...mapState([
        "navData",
      ])
  },
  methods:{
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
  },
  created(){
    console.log(this.navData)
      if(!this.navData){
        this.$router.push({path:"/loading"})
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  width: 1000px;
  margin:0 auto;
}
.menu_item{
  width: 10
}
.main{
  
  overflow: hidden
}
.left{
  width: 680px;
  float: left
}
.right{
  width: 300px;
  float: right
}
</style>
