import { createApp } from 'vue';
import Vue from 'vue';
// import VueCompositionAPI from '@vue/composition-api'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// As of Sep 22 2020, bootstrap-vue is not compatible with vue3
// import BootstrapVue from 'bootstrap-vue'
// Vue.use(BootstrapVue);

import './assets/thecss.css';

//createApp(App).use(router).use(store).use(VueCompositionAPI).mount('#app')
createApp(App).use(router).use(store).mount('#app')
