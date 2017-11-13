import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
var num=true
var store=new Vuex.Store({
    state:{
        navData:null,
        articleData:null,
        searchData:[],
        state:false,
        broadcastData:[{title:"首页",router:"/loading",id:null,type:null}]
    },
    getters:{
        getTJData(state){
            console.log(state)
             return  state.articleData.filter(function(i){
                    return i.recommend=="1"
                })
        },
        getClickTopData(state){
            if(state.articleData==null){
                return null
            }else{
                 return state.articleData.sort((a,b)=>{
                    // console.log(new Date(a.TIME).getTime())
                    return a.visitors<b.visitors
                }).map((i)=>{
                    console.log(i)
                    i.TIME=i.TIME.substr(0,10)
                    i.article_name=i.article_name.substr(0,6)
                    return i
                })
            }
        },
        getNewTopData(state){
            
            if(state.articleData==null){
                return null
            }else{
                 return state.articleData.sort((a,b)=>{
                    // console.log(new Date(a.TIME).getTime())
                    return new Date(a.TIME).getTime()<new Date(b.TIME).getTime()
                }).map((i)=>{
                    console.log(i)
                    i.TIME=i.TIME.substr(0,10)
                    i.article_name=i.article_name.substr(0,6)
                    return i
                })
            }
           
            
        }
       
    },
    actions:{
        getsearchData_A({commit},data){
            commit("getsearchData_M",data)
        },
        getTJData_A({commit}){
            commit("getTJData_M")
        },
        deleteBCData_A({commit},type){
                commit("deleteBCData_M",type)
        },
        changeBCData_A({commit},data){
                commit("changeBCData_M",data)
        },
        getAllData({commit}){
           
            commit("state_m","loading")
           var dataNav=function(){
               return new Promise((resolve,reject)=>{
                   console.log(this)
                     this.axios.get("/api/front_article/getNav").then((data)=>{
                         
                        commit("navData_m",data.data.data)
                        resolve()
                    })
                  
            })}

           var dataArticle=function(){
               return new Promise((resolve,reject)=>{
                  this.axios.get("/api/front_article/getArticleAll").then((data)=>{
                        console.log(data.data.data)
                       
                        commit("articleData_m",data.data.data)
                         resolve()
                    })
            })}


            return {
                axios:this.axios,
                dataNav,
                dataArticle
            }
        },
        defaultData({dispatch,commit},fn){
           commit("state_m","start")
            dispatch("getAllData").then((data)=>{
                console.log(data)
                Promise.all([data.dataNav(),data.dataArticle()]).then(()=>{
                    commit("state_m","end")
                    // if(num){
                    //     commit("state_m",false)
                    //     num=false
                    // }
                    
                    // console.log(111111)
                    // fn()
                },()=>{
                    commit("state_m",false)
                })
            })
            



            // dispatch("getAllData").dataNav.then((data)=>{
            //     return dispatch("getAllData").dataArticle
            // }).then(()=>{
            //     console.log()
            // })
        }
    },
    mutations:{
        getsearchData_M(state,data){
            state.searchData=state.articleData.filter((i)=>{
                return i.article_name.indexOf(data)>-1
            })
        },
        deleteBCData_M(state,type){
            if(type=="one"){
                state.broadcastData.splice( 2)
            }else if(type=="two"){
                state.broadcastData.splice(3)
            }else if(type=="index"){
                state.broadcastData.splice(1)
            }else if(type=="search"){

            }
            
        },
        changeBCData_M(state,data){
            state.broadcastData=data
        },
        navData_m(state,data){
            state.navData=data
        },
        articleData_m(state,data){
            state.articleData=data
        },
        state_m(state,data){
            console.log(state)
            state.state=data
        },
        

    }
})

export default store