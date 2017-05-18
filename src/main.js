import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import goods from '@/components/goods/goods'
import ratings from '@/components/ratings/ratings'
import seller from '@/components/seller/seller'

import '@/common/stylus/index.styl'

/* very important for router */
Vue.use(VueRouter)
Vue.use(VueResource)

/* eslint-disable no-new */
const router = new VueRouter({
  linkActiveClass: 'active',
  routes: [
    {path: '/goods', component: goods},
    {path: '/ratings', component: ratings},
    {path: '/seller', component: seller}
  ]
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})

/* router.go is vue router 1.0 version, 2.0 change to push */
router.push('/goods')

// const app = new Vue({
//   el: '#app',
//   router,
//   render: h => h(App)
// }).$mount('#app')

