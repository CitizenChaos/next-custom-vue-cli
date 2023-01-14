import axios from 'axios'
import { ElMessage } from 'element-plus'
import { checkStatus } from './checkStatus'

// 如果接口返回没有isok，写入这个数组里
const excludeUrlList = []
/**
 * 用来判断传入的url是否在excludeUrlList中
 * @param url 需要判断的url
 * @returns true 存在；false 不存在
 *
 */
const isExcludeUrl = (url) => excludeUrlList.some((el) => url.indexOf(el) > -1)

const service = axios.create({
  timeout: 60 * 1000
})

service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    const res = response.data
    // 可能某些接口没有isok返回值，比如说导出Excel等，添加到excludeUrlList中即可
    if (isExcludeUrl(response.config.url)) {
      return res
    } else {
      if (res.isok) {
        return res
      } else {
        ElMessage({
          message: res.msg || '系统错误，请稍后重试或联系管理员！',
          type: 'error'
        })
        return Promise.reject(
          new Error(res.msg || '系统错误，请稍后重试或联系管理员！')
        )
      }
    }
  },
  (error) => {
    // 响应结果拦截器错误捕获
    const { response } = error || {}
    const msg = response && response.data ? response.data.msg : ''
    const err = error.toString()
    try {
      if (err && (err.includes('Network Error') || err.includes('timeout'))) {
        ElMessage.error('网络异常，请检查您的网络连接是否正常!')
        return error
      }
    } catch (error) {
      throw new Error(error)
    }
    // 请求是否被取消
    const isCancel = axios.isCancel(error)
    if (!isCancel) {
      checkStatus(error.response && error.response.status, msg)
    } else {
      console.warn(error, '请求被取消！')
    }
    return error
  }
)

export default service
