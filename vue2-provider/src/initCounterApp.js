import Vue from 'vue';
import App from './App.vue';
import wrap from '@vue/web-component-wrapper'

export function initCounterApp(el) {
    // el.attachShadow({mode: 'open'});
    // el.shadowRoot.innerHTML = '<div></div>';
    // const root = el.shadowRoot.querySelector('div');
    // console.log(root);
    // // new Vue({
    // //     el: root,
    // // })
    const CustomElement = wrap(Vue, App)
    window.customElements.define('my-element', CustomElement)

    el.innerHTML = '<my-element></my-element>'

    // const vueInstance1 = new Vue({
    //     render: (h) => h(CustomElement),
    // });
    // vueInstance1.$mount(el);
    // console.log(vueInstance1)
}
