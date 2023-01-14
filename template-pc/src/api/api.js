import request from '@/utils/http/index'

let basePrefix = process.env.VUE_APP_BASE_API

/**
 * get请求示例
 *
 * @export
 * @param {*} param
 * @returns
 */
export function getExample(param) {
  return request({
    url: `${basePrefix}/xxx`,
    method: 'GET',
    params: {
      param
    }
  })
}

/**
 * post请求示例
 *
 * @export
 * @param {*} param
 * @returns
 */
export function postExample(param) {
  return request({
    url: `${basePrefix}/xxx`,
    method: 'POST',
    data: {
      param
    }
  })
}
