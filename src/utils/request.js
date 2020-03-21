import axios from 'axios';

//创建axios 实例
const BASEURL = '/devApi';
const service = axios.create({
    baseURL: BASEURL,
    timeout: 15000,
    headers: { 'Content-Type': 'application/json' }
});
//添加请求拦截器
service.interceptors.request.use(function(config) {
    //在发送请求之前做一些事情return config;
    //console.log(config);
    return config;
}, function(error) {
    //做一些有请求错误的事情return Promise .reject（error ）;
    return Promise.reject(error);
});

//添加响应拦截器
service.interceptors.response.use(function(response) {
    //使用响应数据返回响应；
    if (response.status != 200) {
        //console.log('status no 200 !');
        return Promise.reject('status no 200 !');
    } else {
        console.log(response);
        return response;
    }
}, function(error) {
    //使用响应错误返回Promise .reject（error） ; 
    //console.log(error);
    return Promise.reject(error);
});
export default service;