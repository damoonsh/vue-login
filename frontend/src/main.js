import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store';
import VueRouter from 'vue-router';
import Messages from './components/Messages.vue';
import NewMessage from './components/NewMessage.vue';
import Message from './components/Message.vue';

Vue.use(VueRouter);

const routes = [
  {path: "/", component: Messages},
  {path: "/newMessage", component: NewMessage},
  {path: "/message/:uid", component: Message}
]

const router = new VueRouter({routes, mode: 'history'})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
