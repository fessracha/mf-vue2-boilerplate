import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import PageDemo from "./components/PageDemo.vue";
import PageHome from "./components/PageHome.vue";
import PageInner from "./components/PageInner.vue";

export function initCounterApp(el) {
    Vue.use(VueRouter);
    const routes = [
        { path: '/demo', component: PageDemo },
        { path: '/demo/inner', component: PageInner }
    ]
    const router = new VueRouter({
        mode: 'history',
        routes,
    })

    new Vue({
        router,
        render: (h) => h(App),
    }).$mount(el);
}
