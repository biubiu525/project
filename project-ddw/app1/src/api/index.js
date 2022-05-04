//进行API统一管理

import requests from "./request";
import mockRequests from "./mockAjax";
//axios请求返回的是Promise对象
//需要解决跨域问题 浏览器和服务器之间是有跨域问题的
export const reqgetCategoryList = () =>
    requests.get("/product/getBaseCategoryList");

//获取banner中的数据
export const reqgetBannerList = () => mockRequests.get("/banner");

//获取验证码
export const reqGetCode = (phone) =>
    requests({ url: `/user/passport/sendCode/${phone}`, method: "get" });

//注册
//url:/api/user/passport/register  method:post    phone code password

export const reqUserRegister = (data) =>
    requests({ url: "/user/passport/register", data, method: "post" });

//登录
//URL:/api/user/passport/login  method:post phone password
export const reqUserLogin = (data) =>
    requests({ url: "/user/passport/login", data, method: "post" });

//获取用户信息【需要带着用户的token向服务器要用户信息】
//URL:/api/user/passport/auth/getUserInfo  method:get
export const reqUserInfo = () =>
    requests({ url: "/user/passport/auth/getUserInfo", method: "get" });

//退出登录
//URL:/api/user/passport/logout  get
export const reqLogout = () =>
    requests({ url: "/user/passport/logout", method: "get" });