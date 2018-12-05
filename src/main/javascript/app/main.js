import Vue from 'vue'
import AppComponent from './AppComponent.vue'

export default function() {
    new Vue({
        render: h => h(AppComponent)
    }).$mount('#app');
};