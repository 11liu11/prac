<template>
  <div>
    <p>点击排行</p>
     <el-table
    ref="singleTable"
    :data="getClickTopData"
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
      property="visitors"
      label="浏览量"
      width="150">
    </el-table-column>
  </el-table>
  </div>
    
</template>

<script>
  import {mapState,mapActions,mapGetters} from "vuex"
export default {
  name: 'articleList',
  data () {
     return {
        tableData:[]
      };
  },
  computed:{
    ...mapGetters([
      "getClickTopData"
    ]),
   
  },
  created(){

     
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
