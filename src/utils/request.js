// 二次封装axios

import axios from "axios";
import nProgress from "nprogress";
const req = axios.create({
  timeout: 5000,
});
// 添加请求拦截器
req.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    nProgress.start();
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    console.log(error.message);
    return Promise.reject(error);
  }
);

// 添加响应拦截器
req.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    nProgress.done();
    return response.data;
  },
  function (error) {
    // 对响应错误做点什么
    console.log(error.message);
    return Promise.reject(error);
  }
);

export default req;
