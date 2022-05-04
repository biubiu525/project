<template>
  <div class="select" @mouseover="showb()" @mouseleave="shown()">
    <span id="Show_Category_Name" dd_name="全部分类">{{ Cate }}</span
    ><span class="icon"></span>
    <div
      id="search_all_category"
      class="select_pop"
      ref="search_catagory"
      style="height: 286px; padding: 1px; border-width: 1px; display: none"
      dd_name="搜索分类"
    >
      <a href="javascript:void(0);" @click="changCate('全部分类')"
        ><span id="Show_Category_Name" dd_name="全部分类" tabindex="-1"
          >全部分类</span
        ></a
      >
      <a
        href="javascript:void(0);"
        dd_name="尾品汇"
        @click="changCate('尾品汇')"
        ><span>尾品汇</span></a
      >
      <a href="javascript:void(0);" dd_name="图书" @click="changCate('图书')"
        ><span>图书</span></a
      >
      <a
        href="javascript:void(0);"
        dd_name="电子书"
        @click="changCate('电子书')"
        ><span>电子书</span></a
      >
      <a href="javascript:void(0);" dd_name="音像" @click="changCate('音响')"
        ><span>音像</span></a
      >
      <a href="javascript:void(0);" dd_name="影视" @click="changCate('影视')"
        ><span>影视</span></a
      >
      <a
        href="javascript:void(0);"
        dd_name="时尚美妆"
        @click="changCate('时尚美妆')"
        ><span>时尚美妆</span></a
      >
      <a
        href="javascript:void(0);"
        dd_name="母婴用品"
        @click="changCate('母婴用品')"
        ><span>母婴用品</span></a
      >
      <a href="javascript:void(0);" dd_name="玩具" @click="changCate('玩具')"
        ><span>玩具</span></a
      >
      <a
        href="javascript:void(0);"
        dd_name="孕婴服饰"
        @click="changCate('孕婴服饰')"
        ><span>孕婴服饰</span></a
      >
      <a
        href="javascript:void(0);"
        dd_name="童装童鞋"
        @click="changCate('童装童鞋')"
        ><span>童装童鞋</span></a
      >
      <a
        href="javascript:void(0);"
        dd_name="家居日用"
        @click="changCate('家居日用')"
        ><span>家居日用</span></a
      >
      <a
        href="javascript:void(0);"
        dd_name="家具装饰"
        @click="changCate('家居装饰')"
        ><span>家具装饰</span></a
      >
      <a href="javascript:void(0);" dd_name="服装" @click="changCate('服饰')"
        ><span>服装</span></a
      >
      <a href="javascript:void(0);" dd_name="鞋" @click="changCate('鞋')"
        ><span>鞋</span></a
      >
      <a
        href="javascript:void(0);"
        dd_name="箱包皮具"
        @click="changCate('箱包皮具')"
        ><span>箱包皮具</span></a
      >
      <a
        href="javascript:void(0);"
        dd_name="手表饰品"
        @click="changCate('手表饰品')"
        ><span>手表饰品</span></a
      >
      <a
        href="javascript:void(0);"
        dd_name="运动户外"
        @click="changCate('运动户外')"
        ><span>运动户外</span></a
      >
      <a
        href="javascript:void(0);"
        dd_name="汽车用品"
        @click="changCate('汽车用品')"
        ><span>汽车用品</span></a
      >
      <a href="javascript:void(0);" dd_name="食品" @click="changCate('食品')"
        ><span>食品</span></a
      >
      <a
        href="javascript:void(0);"
        dd_name="手机通讯"
        @click="changCate('手机通讯')"
        ><span>手机通讯</span></a
      >
      <a
        href="javascript:void(0);"
        dd_name="数码影音"
        @click="changCate('数码影音')"
        ><span>数码影音</span></a
      >
      <a
        href="javascript:void(0);"
        dd_name="电脑办公"
        @click="changCate('电脑办公')"
        ><span>电脑办公</span></a
      >
      <a
        href="javascript:void(0);"
        dd_name="大家电"
        @click="changCate('大家电')"
        ><span>大家电</span></a
      >
      <a
        href="javascript:void(0);"
        dd_name="家用电器"
        @click="changCate('家用电器')"
        ><span>家用电器</span></a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Dropdown",

  data() {
    return {
      Cate: "全部分类",
    };
  },

  mounted() {},

  methods: {
    shown() {
      this.$refs.search_catagory.style.display = "none";
    },
    showb() {
      this.$refs.search_catagory.style.display = "block";
    },
    changCate(Cate) {
      this.Cate = Cate;
    },
  },
};
</script>

<style lang="less" scoped>
.search .select {
  position: absolute;
  top: 0px;
  left: 410px;
  border: 2px solid #ff2832;
  border-left: 0px solid #dedede;
  width: 92px;
  height: 36px;
  font: 16px/36px "Microsoft Yahei";
  color: #969696;
  padding: 0 0 0 14px;
  cursor: pointer;
  background-color: #f6f6f6;
}

.select .icon {
  width: 13px;
  height: 7px;
  overflow: hidden;
  background: url(http://img63.ddimg.cn/upload_img/00459/home/head_sprite.png)
    no-repeat -14px -90px;
  position: absolute;
  left: 88px;
  top: 16px;
}

.search .select_pop {
  width: 104px;
  height: 288px;
  border: 1px solid #dedede;
  position: absolute;
  top: 36px;
  left: 0px;
  background-color: #fff;
  overflow: auto;
}

.search .select_pop a,
.logo_line .search .select_pop a:hover {
  display: block;
  height: 24px;
  padding: 0 5px 0 15px;
  text-decoration: none;
  font: 12px/24px "Hiragino Sans GB", "simsun";
}
</style>
