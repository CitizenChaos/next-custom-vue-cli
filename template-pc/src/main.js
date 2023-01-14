import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { setupElementPlus } from '@/plugins/elementPlus'
import '@/styles/normalize.scss'

const app = createApp(App)

// 注册vuex
app.use(store)
// 注册路由
app.use(router)
// 注册elementPlus
setupElementPlus(app)

router.isReady().then(() => {
  app.mount('#app')
})
