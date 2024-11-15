import './index.css'

import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import { createPinia } from 'pinia'

import { Button, setConfig, frappeRequest, resourcesPlugin } from 'frappe-ui'

let app = createApp(App)

setConfig('resourceFetcher', frappeRequest)
const pinia =createPinia()

app.use(router)
app.use(resourcesPlugin)
app.use(pinia)

app.component('Button', Button)
app.mount('#app')
