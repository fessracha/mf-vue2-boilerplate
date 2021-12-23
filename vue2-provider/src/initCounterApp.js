import Vue from 'vue';
import App from './App.vue';

export function initCounterApp(rootElement) {
    const vueInstance = new Vue({
        render: (h) => h(App),
    });
    vueInstance.$mount(rootElement);
}
