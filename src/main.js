// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Icon,CellGroup,Dialog  } from 'vant';
import reply from '@/components/common/reply.vue'


Vue.config.productionTip = false
Vue.use(reply,Icon,CellGroup)
Vue.component("reply",reply)
Vue.component("van-icon",Icon)
Vue.component("van-cell-group",CellGroup)
 

router.beforeEach((to, from, next) => {
  if (to.meta.title)  document.title = to.meta.title
  next()
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
