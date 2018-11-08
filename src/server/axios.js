import axios from 'axios';
// import globalCode from '../constants/globalCode'; 
// import { Toast } from 'antd-mobile';
// import {createHashHistory} from 'history';
// import commonInfo from '../common/CommonInfo';

const globalCode = {
  success: 200,
  timeout: 500,
  busyCode: 500,
}

const instance = axios.create({
    //当创建实例的时候配置默认配置
    xsrfCookieName: 'xsrf-token'
});

instance.defaults.baseURL = 'http://api.bestshop.test/api'
instance.defaults.headers.common['Content-Type'] = 'application/json'
instance.defaults.headers.common['Accept'] = process.env.ACCEPT

//添加请求拦截器
instance.interceptors.request.use(function(config){
        //在发送请求之前做某事，比如加一个loading
        console.log(process)
        console.log(process.env.BASE_URL)
        console.log('loading data...')
        return config;
    },function(error){
        //请求错误时做些事
        return Promise.reject(error);
});

//添加一个响应拦截器
instance.interceptors.response.use(function (response) {
    // 1.成功
    console.log(response)
    if (response.status >= 200 && response.status < 300) {
      console.log('comming1')
      return response.data.data;
    }
    // if (response.data.success && response.data.messageCode === globalCode.success) {
    //     console.log('comming1')
    //     return response.data.data;
    // }

    // 2.session过期
    if (!response.data.success && response.data.messageCode === globalCode.timeout) {
        // Toast.hide();
        // Toast.info("会话过期，请重新登录", 1);
        // createHashHistory().push('/login');

        // 定义一个messagecode在后面会用到
        console.log('comming2')
        return  Promise.reject({
            messageCode: 'timeout'
        })
    }

    // 3.11111111 系统异常、网络异常
    if (response.data.success && response.data.messageCode === globalCode.busyCode) {
        // Toast.hide();
        // Toast.info(response.data.message, 1);
        console.log('comming3')
        return  Promise.reject({
            messageCode: 'netError'
        })
    }

    // 3.其他失败，比如校验不通过等
    console.log('comming4')
    return Promise.reject(response.data);
}, function (e) {
    // Toast.hide();
    // 4.系统错误，比如500、404等
    // Toast.info('系统异常，请稍后重试！', 1);
    console.log('comming5')
    return Promise.reject(e);
    // return Promise.reject({
    //     messageCode: 'sysError'
    // });
});

export default instance;






// import axios from 'axios'
// import storage from '../utils/storage'
// import { generateUuid } from '../utils/tool'

// export default function () {
//   axios.defaults.baseURL = process.env.BASE_URL
//   axios.defaults.headers.common['Content-Type'] = 'application/json'
//   axios.defaults.headers.common['Accept'] = process.env.ACCEPT

//   if (storage.get('token')) {
//     const token = storage.get('token')
//     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
//   }

//   let uuid = storage.get('uuid')
//   if (!uuid) {
//     uuid = generateUuid()

//     storage.set('uuid', uuid)
//   }
//   axios.defaults.headers.common['Uuid'] = uuid

//   axios.interceptors.request.use(config => {
//     return config
//   }, error => {
//     return Promise.reject(error)
//   })

//   axios.interceptors.response.use(response => {
//     return response
//   }, error => {
//     return Promise.reject(error)
//   })
// }