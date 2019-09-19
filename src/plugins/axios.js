import Vue from 'vue'
import axios from 'axios'

// dev environment api url
// 测试环境接口 Url
const devUrl = 'http://localhost:3000/api'
// prod environment api url
// 生产环境接口 Url
const prodUrl = ''
const baseUrl = process.env.NODE_ENV === 'development' ? devUrl : prodUrl
// white list don't add x-version and x-token
// 不添加 x-version 和 token 的白名单
const urlWhiteList = ['api.github.com']

// X-Version
const version = 'vue-vuetify-admin/0.2.0'

// base url
// 接口 url 前缀
axios.defaults.baseURL = baseUrl
// timeout setting
// 超时设置
axios.defaults.timeout = 10000 // 10s
// take cookie or not
// 是否携带 cookie
axios.defaults.withCredentials = false
// headers
axios.defaults.headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'X-Requested-With': 'XMLHttpRequest'
}
// 验证响应状态
// validate response status
axios.defaults.validateStatus = status => (status >= 200 && status < 300) || status === 304
// max length of the content
// 内容最大字节
axios.defaults.maxContentLength = 524288 // 0.5 MB
// max redirect times
// 最大重定向次数
axios.defaults.maxRedirects = 5
// request interceptor
// 请求拦截器
axios.interceptors.request.use(
  (config) => {
    // set Token or something here
    // 在这里设置 token 或别的登录态
    const token = window.localStorage.getItem('token')
    for (let i = 0, len = urlWhiteList.length; i < len; i += 1) {
      if (config.url.includes(urlWhiteList[i])) {
        return config
      }
    }
    if (token) {
      config.headers['x-token'] = token
    }
    config.headers['x-version'] = version
    return config
  }
)
// response interceptor
// 响应拦截器
axios.interceptors.response.use(
  response => response.data,
  (error) => {
    const err = {
      success: false,
      msg: ''
    }
    // console.log(error.config)
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of [200, 300) ∪ 304
      // 发送了请求，响应超出范围
      // console.log(error.response.data);
      // console.log(error.response.status);
      // console.log(error.response.headers);
      const { status } = error.response
      switch (status) {
        case 403:
          err.msg = 'hint.forbidden'
          break
        case 404:
          err.msg = 'hint.notFound'
          break
        case 500:
          err.msg = 'hint.internalServerError'
          break
        default: break
      }
    } else if (error.request) {
      // The request was made but no response was received
      // 发送了请求，没有收到响应
      // console.log(error.request)
      err.msg = 'hint.noResponse'
      // err.msg = '服务器无响应'
    } else {
      // Something happened in setting up the request that triggered an Error
      // 请求时发生错误
      // console.log('Error', error.msg);
      err.msg = 'hint.requestError'
      // err.msg = '请求错误'
    }
    return err
  }
)

const get = (url, params) => axios({
  method: 'get',
  url,
  params
})

const post = (url, data) => axios({
  method: 'post',
  url,
  data
})

const upload = (url, data) => axios({
  method: 'post',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'multipart/form-data',
    Accept: 'application/json',
    'x-version': version
  },
  url,
  data
})

// link to prototype
Vue.prototype.$axios = axios

Vue.prototype.$req = {
  get,
  post,
  upload
}
