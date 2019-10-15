import axios from 'axios'

// dev environment api url
const devUrl = 'http://localhost:3000/api'
// prod environment api url
const prodUrl = ''
const baseUrl = process.env.NODE_ENV === 'development' ? devUrl : prodUrl
// white list don't add x-version and x-token
const urlWhiteList = ['api.github.com']

// X-Version
const version = 'vue-vuetify-admin/0.2.0'

// base url
axios.defaults.baseURL = baseUrl
// timeout setting
axios.defaults.timeout = 10000 // 10s
// take cookie or not
axios.defaults.withCredentials = false
// headers
axios.defaults.headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'X-Requested-With': 'XMLHttpRequest'
}
// validate response status
axios.defaults.validateStatus = status => (status >= 200 && status < 300) || status === 304
// max length of the content
axios.defaults.maxContentLength = 524288 // 0.5 MB
// max redirect times
axios.defaults.maxRedirects = 5
// request interceptor
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
axios.interceptors.response.use(
  response => response.data,
  (error) => {
    const err = {
      suc: false,
      msg: ''
    }
    // console.log(error.config)
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of [200, 300) ∪ 304
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
      // console.log(error.request)
      err.msg = 'hint.noResponse'
    } else {
      // Something happened in setting up the request that triggered an Error
      // console.log('Error', error.msg);
      err.msg = 'hint.requestError'
    }
    return err
  }
)

const get = (url, params) => axios({
  url,
  method: 'get',
  params
})

const post = (url, data) => axios({
  url,
  method: 'post',
  data
})

const upload = (url, data) => axios({
  url,
  method: 'post',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'multipart/form-data',
    Accept: 'application/json',
    'x-version': version
  },
  data
})

export default {
  get,
  post,
  upload,
  axios
}
