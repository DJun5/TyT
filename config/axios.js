/*
import axios from 'axios'
import { Toast } from 'mint-ui';
import Router from '../src/router'

// Add a request interceptor
axios.interceptors.request.use(function (config) {
// Do something before request is sent
  return config
}, function (error) {
// Do something with request error
  Toast({
    message: '请求错误：' + error.message,
    position: 'middle',
    duration: 1000
  });
  console.log("請求錯誤")
  return Promise.reject(error)
})

// Add a response interceptor
axios.interceptors.response.use(function (response) {
// console.log('response')
// Do something with response data
// console.log(response)
//返回参数是noLogin时，返回首页
  if (response.data.flag === 'noLogin') {
    Router.push('/')
    Toast({
      message: '当前会话过期',
      position: 'middle',
      duration: 1000
    });
    console.log("請求錯誤")
  }
  return response
}, function (error) {
// Do something with response error
  if (error.response.status === 401) {
    Toast({
      message: '当前会话过期',
      position: 'middle',
      duration: 1000
    });
    console.log("請求錯誤")
    Router.push('/')
  }
  Toast({
    message: '响应错误：' + msg,
    position: 'middle',
    duration: 1000
  });
  console.log("請求錯誤")
  return Promise.reject(error)
})
export default axios
*/
