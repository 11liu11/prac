import Vue from "vue"
import Router from "vue-router"
import homepage from "./module/homepage.vue"
import leaf from "./module/leaf.vue"
import power from "./module/power.vue"
import globe from "./module/globe.vue"
import user from "./module/user.vue"
import home1 from "./module/home1.vue"
import home2 from "./module/home2.vue"
import home3 from "./module/home3.vue"
import home4 from "./module/home4.vue"
import home5 from "./module/home5.vue"
import classDetail from "./module/classDetail.vue"


var router = new Router({
    linkActiveClass: 'bg',
    routes: [{

            name: 'homepage',
            path: "/",
            component: homepage,
            linkActiveClass: 'bg',
            // redirect: "/power",
            children: [{
                    name: 'home1',
                    path: 'home1',
                    component: home1
                },
                {
                    name: 'home2',
                    path: 'home2',
                    component: home2
                },
                {
                    name: 'home3',
                    path: 'home3',
                    component: home3
                },
                {
                    name: 'home4',
                    path: 'home4',
                    component: home4
                },
                {
                    name: 'home5',
                    path: 'home5',
                    component: home5
                }
            ]
        },
        {
            name: 'leaf',
            path: '/leaf',
            component: leaf
        },
        {
            name: 'power',
            path: '/power',
            component: power
        },
        {
            name: 'globe',
            path: '/globe',
            component: globe
        },
        {
            name: 'user',
            path: '/user',
            component: user
        }, {
            name: 'classDetail',
            path: '/classDetail/:id',
            component: classDetail
        }
    ]
})
Vue.use(Router);
var vm = new Vue({
    el: "#app",
    router
})