import { reqgetCategoryList, reqgetBannerList } from "@/api";
//home模块的仓库
const state = {
    categoryList: [],
    bannerList: [],
};
//mutions是唯一修改state的地方
const mutations = {
    GETCATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
        console.log(categoryList);
    },
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList;
        console.log(bannerList);
    },
};
//action|用户处理派发action地方的，可以书写异步语句、自己逻辑地方
const actions = {
    async getCategoryList() {
        //reqgetCategoryList返回的是一个Promise对象
        //需要用await接受成功返回的结果，await必须要结合async一起使用（CP）
        let result = await reqgetCategoryList();
        console.log(result);
        // if (result.code == 200) {
        //     commit("GETCATEGORYLIST", result.data);
        // }
    },
    async getBannerList({ commit }) {
        let result = await reqgetBannerList();
        console.log(result);
        if (result.code == 200) {
            commit("GETBANNERLIST", result.data);
        }
    },
};
//计算属性
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters,
};