<template>
  <div>
    <el-input
      placeholder="请输入内容"
      icon="search"
      v-model="input"
      :on-icon-click="fn" class="left">
    </el-input>
    <!--<el-button type="primary" icon="search" class="right" @click="fn">搜索</el-button>-->
  </div>
    
</template>

<script>
  import {mapState,mapActions} from "vuex"
export default {
  name: 'HelloWorld',
  data () {
     return {
        input: '',
      };
  },
  computed:{
      ...mapState([
        "broadcastData"
      ])
  },
  methods:{
    ...mapActions([
      "getsearchData_A",
      "changeBCData_A"
    ]),
    fn(){
      this.getsearchData_A(this.input)
      this.$router.push({path:"/main/articleList",query:{type:"search",id:this.input}})
       this.changeBCData_A([
                  {title:"首页",router:"/main/articleList",type:null},
                  {title:"搜索",router:"",id:"",type:""},
                  ])
    }
  
   
  },
  created(){
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div{

    overflow: hidden
}
.left{
    width:100%;
    /*float: left;*/
}
/*.right{
    width: 80px;
    float:right
}*/
</style>
