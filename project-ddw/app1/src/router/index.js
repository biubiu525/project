import webUrlSearchParams from "core-js/modules/web.url-search-params";
import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home/Home.vue";
import Login from "../views/Login/Login.vue";
import Search from "../views/Home/Search/index.vue";
import Shopcart from "../views/Home/Shopcart/index.vue";
//引入store 使用token
import store from "@/store";

Vue.use(VueRouter);

let router = new VueRouter({
    routes: [
        { path: "/", redirect: "/home" },
        { path: "/home", component: Home, meta: { show: true } },
        { path: "/login", component: Login, meta: { show: true } },
        {
            path: "/search",
            component: Search,
            meta: { show: true, showN: false },
        },
        { path: "/shopcart", component: Shopcart, meta: { show: false } },
    ],
});
//全局守卫（//在路由跳转前）

router.beforeEach(async(to, from, next) => {
    console.log(to);
    console.log(from);
    // 放行函数next() next(path)放行到指定路由 next(false)

    //用户已经登陆了，才会有token
    let token = store.state.user.token;
    //用户信息
    let userInfoname = store.state.user.userInfo.name;
    console.log(token);
    //用户已经登录
    if (token) {
        //登陆了就不能去登录页面了
        if (to.path == "/login") {
            next("/home");
        } else {
            //登陆了不去login
            if (userInfoname) {
                next();
            } else {
                try {
                    //获取用户信息成功
                    await store.dispatch("getUserInfo");
                    next();
                } catch (error) {
                    // token失效了
                    //清除token
                    await store.dispatch("userLogout");
                    next("/login");
                }
            }
        }
    } else {
        //未登录不能去我的订单，购物车
        if (to.path == "/shopcart") {
            next("/login");
        }
        next();
    }
});
export default router;