import Vue from 'vue';
import App from './App.vue';
import Router from 'vue-router';

Vue.use(Router);

const PageHome = () => import('./components/PageHome.vue');
const PageDemo = () => import('./components/PageDemo.vue');
const PageDogs = () => import('./components/PageDogs.vue');

const routes = [
  { path: '/', component: PageHome },
  { path: '/dogs', component: PageDogs },
  { path: '/demo*', component: PageDemo, props: { name: 'test', base: '/'} },
  // { path: '/demo/inner', component: PageDemo, props: { name: 'test', base: '/'} }
]

const router = new Router({
  mode: 'history',
  routes,
});


new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
