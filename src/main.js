import { createApp } from 'vue'

import App from './views/App.vue'

// import Home from './Components/Home.vue'

import router from "./router"

createApp(App).use(router).mount('#app')
// createApp(Home).use(router).mount('#app')