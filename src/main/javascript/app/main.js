import Vue from 'vue'
import AppComponent from './AppComponent.vue'

window.runApp2 = function() {
    new Vue({
        render: h => h(AppComponent)
    }).$mount('#app');
};