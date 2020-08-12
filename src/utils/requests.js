import axios from 'axios'
import { Toast } from 'vant'

const http = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  withCredentials: true,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  transformRequest: [function(data) {
    // 将数据转换为表单数据
    let ret = ''
    for (const it in data) {
      ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    }
    return ret
  }]
})

// request interceptor
http.interceptors.request.use(
  config => {
    return config
  }
)

// response interceptor
http.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== '000') {
      Toast.fail(`请求失败[${res.message}]`)
      return Promise.reject(res.message)
    } else {
      return res
    }
  },
  error => {
    Toast.fail(`请求异常[${error}]`)
    return Promise.reject(error)
  }
)

export default http
