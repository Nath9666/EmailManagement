import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

//import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

import Vue from 'vue'

app.use(createPinia())
app.use(router)

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
app.use(IconsPlugin)

app.mount('#app')
