import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'

export const routes = [
  {
    path: '/',
    component: Layout,
    redirect: "druid",
    children: [
      {
        path: '/druid',
        component: (resolve) => require(['@/views/druid'], resolve)
      },
      {
        path: '/server',
        component: (resolve) => require(['@/views/server'], resolve)
      },
      {
        path: '/cache',
        component: (resolve) => require(['@/views/cache'], resolve)
      }
    ]
  }
]

export default new Router({
  mode: 'history', // 去掉url中的#
  scrollBehavior: () => ({ y: 0 }),
  routes: routes
})
