import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import DetalleCoche from './components/DetalleCoche.vue';

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {path: "/", component:Home},
  {path: "/detalle/:idcoche", component :DetalleCoche},
];

const router = new VueRouter({
  routes,
  mode:"history"
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
