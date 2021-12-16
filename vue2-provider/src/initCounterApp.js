import Vue from 'vue';
import App from './App.vue';

export function initCounterApp(el) {
    new Vue({
        render: (h) => h(App),
    }).$mount(el);
}
