<template>
  <div>
     <el-breadcrumb separator="/" class="type">

      <el-breadcrumb-item v-for="(i,index) in broadcastData" :to="{ path: i.router,query:{id:i.id,type:i.type}}">{{i.title}}</el-breadcrumb-item>
     
    </el-breadcrumb>
  </div>
    
</template>

<script>
  import {mapState,mapActions} from "vuex"
export default {
  name: 'HelloWorld',
  data () {
     return {
        activeIndex: '1',
      
      };
  },
  computed:{
      ...mapState([
        "broadcastData"
      ])
  },
  methods:{
    
  
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
  },
  created(){
    
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
.type{
  padding:10px 0;
}
</style>
