<template>
  <div>
      <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">    
    <el-menu-item index="1">我的博客</el-menu-item>
    <template>  
        <el-submenu v-for="(i,index) in navData" :index="index+2+''" :key="index">
          <template slot="title">{{i.onedata.cnname}}</template>
          <el-menu-item class="menu_item" v-for="(j,jindex) in i.twodata" :index="index+2+'-'+(jindex+1)" :key="jindex" @click="clickfn(i,j)">{{j.cnname}} </el-menu-item>
        </el-submenu>
    </template>
  </el-menu>
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
        "navData",
        "broadcastData"
      ])
  },
  methods:{
    ...mapActions([
        "changeBCData_A"
    ]),
      clickfn(i,j){
          console.log(i,j)
          this.changeBCData_A([
            {title:"首页",router:"/main/articleList",type:null},
            {title:i.onedata.cnname,router:"/main/articleList",id:i.onedata.id,type:"one"},
            {title:j.cnname,router:"/main/articleList",id:j.id,type:"two"},
            ])
            this.$router.push({ path: "/main/articleList",query:{id:j.id,type:"two"}})
      },
      handleSelect(key, keyPath) {
        // console.log(key, keyPath);
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
</style>
