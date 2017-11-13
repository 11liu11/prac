<template>
  <div>
    <p>最新列表</p>
     <el-table
    ref="singleTable"
    :data="tableData"
    highlight-current-row
    style="width: 100%" @row-click="gofn">
    <el-table-column
      type="index"
      width="20">
    </el-table-column>
    <el-table-column
      property="article_name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      :property="classtype.type"
      :label="classtype.cn"
      width="150">
    </el-table-column>
  </el-table>
  </div>
    
</template>

<script>
  import {mapState,mapActions,mapGetters} from "vuex"
export default {
  name: 'articleList',
  props:["type"],
  data () {
     return {
        tableData:[],
        classtype:{
          cn:"",
          type:""
        }
      };
  },
  computed:{
    ...mapGetters([
      "getNewTopData",
      "getClickTopData"
    ]),
   
  },
  created(){
   console.log(this.getNewTopData)
   if(this.type=="newtop"){
     this.classtype.cn="时间"
     this.classtype.type="TIME"
     this.tableData=this.getNewTopData
   }else{
     this.classtype.cn="浏览量"
     this.classtype.type="visitors"
     this.tableData=this.getClickTopData
   }
     
  },
 
  methods:{
    gofn(rows){
       
        this.$router.push({path:"/main/articleDetail",query:{
          id:rows.id
        }})
      },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .el-table .info-row {
    background: #c9e5f5;
  }

  .el-table .positive-row {
    background: #e2f0e4;
  }
</style>
