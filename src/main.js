// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import { Icon,CellGroup,Dialog  } from 'vant';
import reply from '@/components/common/reply.vue'
import "./assets/common.css"

Vue.config.productionTip = false
Vue.use(reply,Icon,CellGroup,Dialog)
Vue.component("reply",reply)
Vue.component("van-icon",Icon)
Vue.component("van-cell-group",CellGroup)
Vue.component("van-dialog",Dialog)

Vue.prototype.host="http://test.pizhigu.com/"

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
