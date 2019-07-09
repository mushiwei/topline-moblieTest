import axios from 'axios'
/**
 * axios.create 用于创建一个 axios 实例,该实例和axios的功能是一模一祥的
 * 说白了就是克隆了一个axios
 * 为什么要这样做:我们可以拥有多个不同的请求函数 而他们的配置可能是不一样的
 * 例如有些项目可能涉及到使用不同的接口路径
 * http://toutiao.course.itcast.cn
 * http://a.com
 * http://b.com
 */
const request = axios.create({
  baseURL: 'http://toutiao.course.itcast.cn'
})
// 打开axios的github文档
// Add a request interceptor
request.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
request.interceptors.response.use(function (response) {
  // Do something with response data
  return response
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})

export default request
