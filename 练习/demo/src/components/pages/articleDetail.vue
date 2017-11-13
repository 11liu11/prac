<template>
  <div v-html="data">
     
  </div>
    
</template>

<script>
 import {mapState,mapActions} from "vuex"
export default {
  name: 'articleList',
  data () {
     return {
        data:""
      };
  },
  computed:{
       ...mapState([
        "navData",
        "broadcastData"
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
      "changeBCData_A"
    ]),
      getdata(){
              this.axios.get("/api/front_article/getArticle?id="+this.$route.query.id).then((data)=>{
               
              this.data=data.data.data.content
              var datas=data.data.data
              var onecnname,twocnname;
                this.navData.forEach(function(i) {
                    if(datas.oneId==i.onedata.id){
                      onecnname=i.onedata.cnname
                        i.twodata.forEach((j)=>{
                            if(datas.twoId==j.id){
                              twocnname=j.cnname
                            }
                        })
                    }
                }, this);
                 this.changeBCData_A([
                  {title:"首页",router:"/main/articleList",type:null},
                  {title:onecnname,router:"/main/articleList",id:datas.oneId,type:"one"},
                  {title:twocnname,router:"/main/articleList",id:datas.twoId,type:"two"},
                  {title:"详情",router:"",id:"",type:""},
                  ])
                 
                console.log(onecnname,twocnname)
            })
         
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
