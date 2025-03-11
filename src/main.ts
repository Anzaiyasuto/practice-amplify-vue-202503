import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Amplify } from 'aws-amplify'
import outputs from '../amplify_outputs.json'

const app = createApp(App)
Amplify.configure(outputs)
app.use(router)

app.mount('#app')
