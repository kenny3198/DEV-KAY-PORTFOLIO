import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './index.css'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
