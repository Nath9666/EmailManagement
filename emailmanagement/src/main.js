import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import firebaseapp from './firebase'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(firebaseapp)

app.mount('#app')