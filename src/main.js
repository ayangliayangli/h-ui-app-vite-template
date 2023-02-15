import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import "@my-h-ui/h-ui/dist/entry.css";
import HUI from '@my-h-ui/h-ui';

const app = createApp(App)
app.use(HUI)

app.mount('#app')
