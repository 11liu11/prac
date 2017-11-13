<template>
  <div>
     <el-table
      :data="tableData2"
      style="width: 100%"
      :row-class-name="tableRowClassName" @row-click="gofn">
      <el-table-column
        prop="TIME"
        label="日期"
        width="180" align="center">
      </el-table-column >
      <el-table-column
        prop="article_name"
        label="姓名"
        width="180" align="center">
      </el-table-column>
      <el-table-column
        prop="editer"
        label="地址" align="center">
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
        activeIndex: '1',
        tableData2:[]
      };
  },
  computed:{
    ...mapGetters([
      "getTJData"
    ]),
     ...mapState([
       "searchData",
        "broadcastData",
        ""
      ])
  },
  created(){
   
        this.getdata()
      
  },
 
  watch:{
      $route(){
          this.getdata()

      }
  },
  methods:{
      ...mapActions([
        "deleteBCData_A"
      ]),
      getdata(){
          if(this.$route.query.type=="one"){
              //  一级分类
              this.axios.get("/api/front_article/getOneList?id="+this.$route.query.id).then((data)=>{
                this.deleteBCData_A("one")
              this.tableData2=data.data.data
            })
          }else if(this.$route.query.type=="two"){
             this.deleteBCData_A("two")
            // 二级分类
                this.axios.get("/api/front_article/getTwoList?id="+this.$route.query.id).then((data)=>{
                  this.tableData2=data.data.data
              
              })
          }else if(this.$route.query.type==null){
            // 首页
           
             this.tableData2=this.getTJData
             this.deleteBCData_A("index")
          }else if(this.$route.query.type=="search"){
            this.tableData2=this.searchData
          }
      },
      gofn(rows){
       
         
        this.$router.push({path:"/main/articleDetail",query:{
          id:rows.id
        }})
      },
      tableRowClassName(row, index) {
        if (index === 1) {
          return 'info-row';
        } else if (index === 3) {
          return 'positive-row';
        }
        return '';
      }
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
