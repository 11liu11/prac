import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import Index from "./components/index.vue"
import App from "./components/app.vue"


import axios from "axios"
import vueAxios from "vue-axios"
Vue.use(vueAxios, axios);



import Router from "vue-router"

Vue.use(Router)
var router = new Router({
    routes: [{
        path: "/",
        component: Index
    }]
})

var store = new Vuex.Store({
    state: {
        id: null,
        alldata: null
    },
    actions: {
        getidA({ commit }, _this) {
            return new Promise((resolve) => {
                _this.axios.get("/id").then(function(data) {

                    commit("getId", data.data)
                    resolve(data.data.id)
                })
            })

        },
        getdataA({ dispatch, commit }, _this) {
            console.log()
            dispatch("getidA", _this).then((datas) => {
                _this.axios.get(`/data?id=${datas}`).then(function(data) {
                    console.log(data)
                    commit("getdata", data.data)

                })
            })
        }
    },
    mutations: {

        getId(state, data) {

            state.alldata = data.id
        },
        getdata(state, data) {

            state.alldata = data
        },

    }
})

var vm = new Vue({
    el: "#app",
    store,
    template: "<app />",
    components: {
        app: App
    },
    router
})