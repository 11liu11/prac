// import Vue from "vue/dist/vue.js"
import Vue from "vue"
import Router from "vue-router"

import index from "./components/Index.vue"
import App from "./components/app.vue"
// import tab from "./components/pages/tab.vue"
// import list from "./components/pages/list.vue"
import detail from "./components/pages/detail.vue"
import routers from "./components/router.vue"
import routerUpdate from "./components/routerUpdate.vue"

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

// 组件懒加载

// var index = resolve => require.ensure(['./components/Index.vue'], () => resolve(require('./components/Index.vue')))
// var App = resolve => require.ensure(['./components/app.vue'], () => resolve(require('./components/app.vue')))
// var tab = resolve => require.ensure(['./components/pages/tab.vue'], () => resolve(require('./components/pages/tab.vue')))
// var list = resolve => require.ensure(['./components/pages/list.vue'], () => resolve(require('./components/pages/list.vue')))
// var detail = resolve => require.ensure(['./components/pages/detail.vue'], () => resolve(require('./components/pages/detail.vue')))
// var routers = resolve => require.ensure(['./components/router.vue'], () => resolve(require('./components/router.vue')))
// var routerUpdate = resolve => require.ensure(['./components/routerUpdate.vue'], () => resolve(require('./components/routerUpdate.vue')))

//  amd风格

// var tab = resolve => require(['./components/pages/tab.vue'], resolve)
// var list = resolve => require(['./components/pages/list.vue'], resolve)

// 共同文件

var tab = resolve => require.ensure([], () => resolve(require('./components/pages/tab.vue')), 'group-foo')
var list = resolve => require.ensure([], () => resolve(require('./components/pages/list.vue')), 'group-foo')




// Vue.directive("test", {
//     bind() {
//         console.log("bind")
//     }
// })

let router = new Router({
    linkActiveClass: "active active2",
    // base: "/app/",
    routes: [{
        name: "routerUpdate",
        path: "/routerUpdate/:id",
        component: routerUpdate
    }, {
        name: "index",
        path: "/",
        component: index
    }, {
        name: "tab",
        path: "/tab",
        component: tab,
        children: [{
            name: "a",
            path: "a",
            component: {
                template: "<div>a<router-view></router-view></div>",
                mounted() {
                    console.log(this.$route)
                }
            },
            children: [{
                name: "aa",
                path: "aa",

                component: {
                    template: "<div>aa</div>",
                    mounted() {
                        console.log(this.$route)
                    }
                }
            }]

        }]
    }, {
        name: "list",
        path: "/list",
        component: list
    }, {
        name: "detail",
        path: "/detail",
        component: detail
    }, {
        name: "bb",
        path: "/bb/:id",
        component: {
            template: "<div>bb</div>",
            mounted() {
                console.log(this.$route.params)
            },
            watch: {
                $route() {
                    this.$router.go(0)
                }
            }
        }
    }, {
        name: "router",
        path: "/router",
        component: routers,
        beforeEnter(to, from, next) {
            console.log("beforeEnter")
            next()
                // setTimeout(function() {
                //         next()
                //     }, 2000)
                // next("/tab")
        },
        children: [{
            name: "one",
            path: "one",
            components: {
                default: {
                    template: "<div>这里是defult</div>"
                },
                a: {
                    template: "<div>这里是a</div>"
                },
                b: {
                    template: "<div>这里是b</div>"
                },
            },
            alias: 'b'
        }]

    }]
})
router.beforeEach((to, from, next) => {
        console.log(to)
        if (to.name == "tab") {
            // next("/router/one")
            next()
        } else {
            next()
        }


    })
    // router.afterEach((to, from, next) => {
    //     console.log(to)
    //     if (to.name == "tab") {
    //         // next("/router/one")
    //         next()
    //     } else {
    //         next()
    //     }


// })
Vue.use(Router)
new Vue({
    el: "#app",
    router,
    data: {
        list: "list"
    }
})