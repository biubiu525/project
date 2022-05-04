import Vue from "vue";
import App from "./App.vue";
import router from "@/router/index.js";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import store from "@/store/index.js";
import "@/mock/mockServe";
Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
    render: (h) => h(App),
    router: router,
    store: store,
}).$mount("#app");