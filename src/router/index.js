import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


export default new Router({
  
  routes: [
    {
      path: '/',
      name: 'index',
      component: (resolve) => require(['@/components/index.vue'], resolve),
      meta:{
        title:'派智知识产权平台'
      },
      children:[
        { path: '/home/home',   component: (resolve) => require(['@/components/home/home.vue'], resolve)},
        { path: '/home/patent', component: (resolve) => require(['@/components/home/patent.vue'], resolve)},
        { path: '/home/me',     component: (resolve) => require(['@/components/home/me.vue'], resolve)}
      ]
    },{
      path: '/apply_before',
      name: 'apply_before',
      component: (resolve) => require(['@/components/apply/apply_before.vue'], resolve),
      meta:{
        title:'外观设计申请准备资料'
      }
    },{
      path: '/add_product',
      name: 'add_product',
      component: (resolve) => require(['@/components/apply/add_product.vue'], resolve),
      meta:{
        title:'添加产品基础资料'
      }
    },{
      path: '/list_person',
      name: 'list_person',
      meta:{
        title:'添加人员资料'
      },
      component: (resolve) => require(['@/components/person/list_person.vue'], resolve),

    },{
      path: '/add_person',
      name: 'add_person',
      component: (resolve) => require(['@/components/person/add_person.vue'], resolve),
    },{
      path: '/select_person',
      name: 'select_person',
      component: (resolve) => require(['@/components/person/select_person.vue'], resolve),
    },{
      path: '/pay',
      name: 'pay',
      component: (resolve) => require(['@/components/apply/pay.vue'], resolve),
      meta:{
        title:'委托与支付'
      }
    },{
      path: '/order',
      name: 'order',
      component: (resolve) => require(['@/components/common/order.vue'], resolve),
      meta:{
        title:'专利详情'
      }
    },{
      path: '/help',
      name: 'help',
      component: (resolve) => require(['@/components/common/help.vue'], resolve),
      meta:{
        title:'帮助'
      }
    },{
      path: '/book_list',
      name: 'book_list',
      component: (resolve) => require(['@/components/book/book_list.vue'], resolve),
      meta:{
        title:'委托书管理'
      }
    },
    {
      path: '/book_case',
      name: 'book_case',
      component: (resolve) => require(['@/components/book/book_case.vue'], resolve),
      meta:{
        title:'专利委托书'
      }
    },
    {
      path: '/feijian',
      name: 'feijian',
      component: (resolve) => require(['@/components/common/feijian.vue'], resolve),
      meta:{
        title:'费减备案查询'
      }
    }
    
    
  ]
})
