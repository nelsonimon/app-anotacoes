
require('./bootstrap');

//window.Vue = require('vue').default;
import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './routes'
import vuetify from './vuetify'
import layout from  './components/Layout.vue'

Vue.use(VueRouter)

const app = new Vue({
    router,
    vuetify,
    render: h => h(layout)
  }).$mount('#app')