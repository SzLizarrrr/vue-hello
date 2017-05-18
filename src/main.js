// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import goods from './components/goods/goods'

Vue.use(VueRouter)

/* eslint-disable no-new */
const router = new VueRouter({
  routes: [
    {path: '/goods', component: goods}
  ]
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})

// const app = new Vue({router}).$mount('#app')

