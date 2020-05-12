import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store';
import VueRouter from 'vue-router';
import Messages from './components/Messages.vue';

Vue.use(VueRouter);

const routes = [
  {path: "/", component: Messages}
]

const router = new VueRouter({routes})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
