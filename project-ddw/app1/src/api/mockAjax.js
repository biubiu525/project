//对于axios进行二次封装
import axios from "axios";
// import { config } from "vue/types/umd";

// 1.利用axios对象的方法create，去创建一个axios实例
// 2.requests就是axios实例
const requests = axios.create(
    //配置对象
    //基础路径，发送请求的时候，路径当中会出现/api
    {
        baseURL: "/mock",
        timeout: 5000,
    }
);

//请求拦截器在发送请求的之前，请求拦截器可以检测到

requests.interceptors.request.use((config) => {
    //config配置对象:很重要的属性：请求头
    return config;
});

//请求响应器
requests.interceptors.response.use(
    (res) => {
        //成功的函数
        return res.data;
    },
    (error) => {
        //失败的函数
        alert("服务器响应数据失败");
    }
);

export default requests;