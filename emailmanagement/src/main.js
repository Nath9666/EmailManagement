import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'bootstrap/dist/js/bootstrap.js'

//import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import App from './App.vue'
import router from './router'
import firebaseapp from './firebase'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(firebaseapp)

// Make BootstrapVue available throughout your project
//Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
//app.use(IconsPlugin)

app.mount('#app')
