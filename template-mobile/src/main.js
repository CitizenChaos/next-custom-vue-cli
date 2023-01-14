import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'

const app = createApp(App)

// 注册vuex
app.use(store)
// 注册路由
app.use(router)

router.isReady().then(() => {
  app.mount('#app')
})
