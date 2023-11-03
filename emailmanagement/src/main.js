import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import firebaseapp from './firebase'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(firebaseapp)

// Make BootstrapVue available throughout your project
//Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
//app.use(IconsPlugin)

app.mount('#app')
