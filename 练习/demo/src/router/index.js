import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import loading from '@/components/loading'
import articleList from '@/components/pages/articleList'
import articleDetail from '@/components/pages/articleDetail'

Vue.use(Router)





export default new Router({
  routes: [
      {
        path:"/",
        redirect:"/main/articleList"
      },

      {
        path: '/main',
        name: 'index',
        component: index,
        children:[ {
          path: 'articleList',
          name: 'articleList',
          component: articleList
      },{
          path: 'articleDetail',
          name: 'articleDetail',
          component: articleDetail
      }]
    },
    {
      path: '/loading',
      name: 'loading',
      component: loading
    },
    
  ]
})
