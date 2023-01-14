import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 汉化
import zhCn from 'element-plus/es/locale/lang/zh-cn'

export function setupElementPlus(app) {
  app.use(ElementPlus, {
    locale: zhCn
  })
}
