<template>
  <div style="padding-bottom: 82px">
    <Header></Header>
    <div class="shoppingcart_wrapper" id="ad_cpt_11850"></div>
    <div class="logo_line">
      <div class="w960">
        <div class="shopping_procedure">
          <span class="current">我的购物车</span><span>填写订单</span
          ><span>完成订单</span>
        </div>
        <div class="logo">
          <a href=""><img src="./images/dd_logo.jpg" alt="" /></a>
        </div>
      </div>
    </div>
    <div class="add_line" id="district" style="display: none"></div>
    <div class="w960" id="showTip">
      <!-- 结算时 商品SPU限购提示窗口 start-->
      <div
        id="spuPromoLimitDiv"
        class="pop"
        style="
          left: 50%;
          top: 50%;
          margin: -200px 0 0 -253px;
          position: fixed;
          z-index: 1004;
          display: none;
        "
      >
        <a class="close"></a>
        <div class="pop_title">商品限购</div>
        <div class="popup_limit"></div>
        <div class="btn_bar limit_bar">
          <a class="btn_red">确定</a><a class="pop_btn">取消</a>
        </div>
      </div>
      <!-- 结算时 商品SPU限购提示窗口 end-->

      <!--银铃铛惠购弹窗-->
      <!-- <div id="pointFavorErrorPageForCheckOut">
        <div class="fullScreen"></div>
        <div class="points_alert">
          <div class="head_title">
            <div class="title_name">银铃铛不足,请调整兑换商品或兑换数量</div>
            <div class="close"></div>
          </div>
          <div class="remind_info">
            所需银铃铛
            <span class="sort" id="allNeedPointNum">500</span> 分，我的银铃铛
            <span class="sort" id="userHasPointNum">100</span> 分
          </div>
          <div class="list_scroll">
            <div class="list_p" id="usePointFavorProductInfoList"></div>
          </div>
          <div class="btn_confirm">
            <span class="btn confirm">确定</span
            ><span class="btn cancel">取消</span>
          </div>
        </div>
      </div> -->

      <div
        id="giftDiv"
        class="pop_tip gift_select"
        style="
          left: 50%;
          top: 50%;
          margin: -200px 0 0 -302px;
          position: fixed;
          z-index: 1001;
          display: none;
        "
      >
        <div class="head_title">
          <div class="title_name">您购物车中以下商品可选为赠品</div>
          <div class="close"></div>
        </div>
        <div class="products_sort" id="giftArea"></div>
        <a href="javascript:void(0)" class="btn_b fn-back-cart"
          >返回购物车选赠品</a
        ><a id="gift_checkout" href="#" class="btn_b"
          >继续结算，土豪任性不要了</a
        >
      </div>
      <div class="login_tip" style="display: none">
        <span class="icon"></span>
      </div>
      <div id="remove_pop" class="login_tip" style="display: none">
        <span class="icon"></span>
      </div>
      <div id="clear_pop" class="login_tip" style="display: none">
        <span class="icon"></span>
      </div>

      <!-- 缺货 pop-->
      <div
        id="stockShortDiv"
        class="pop_stock"
        style="
          left: 50%;
          top: 50%;
          margin: -200px 0 0 -253px;
          position: fixed;
          z-index: 1004;
          display: none;
        "
      >
        <a class="close"></a>
        <div class="pop_title">以下商品缺货，为您修改到最大可购买数量</div>
        <div class="popup_out">
          <ul class="out_list"></ul>
        </div>
        <div class="btn_bar limit_bar">
          <a href="#" class="btn_red">确定</a>
        </div>
      </div>
    </div>
    <a
      id="ddchangeaccalert"
      tabindex="9"
      style="
        position: absolute;
        left: 0px;
        top: 0px;
        display: block;
        width: 0px;
        height: 0px;
        overflow: hidden;
      "
      >新窗口打开无障碍说明页面,按Ctrl加波浪键打开导盲模式</a
    >
    <div class="w960">
      <div class="empty" id="empty" style="">
        <p>您的购物车还是空的，您可以：</p>
        <a href="http://www.dangdang.com" class="btn">去逛逛</a>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
export default {
  name: "Shopcart",

  data() {
    return {};
  },

  mounted() {},

  components: {
    Header,
  },

  methods: {},
};
</script>

<style lang="less" scoped>
.shoppingcart_wrapper {
  width: 960px;
  margin: 0 auto;
  padding: 17px 0 0;
}

.logo_line {
  width: 100%;
  border-bottom: 4px solid #ff2832;
  height: 100px;
}
.add_line {
  width: 100%;
  background-color: #fafafa;
}
.w960 {
  width: 960px;
  margin: 0 auto;
}

.empty {
  padding: 90px 0 0 495px;
  background: url("./images/empty.png") 90px 46px no-repeat;
  height: 190px;
}
.shopping_procedure {
  float: right;
  width: 634px;
  height: 36px;
  background: url("./images/procedure_bg.png") 0 0 no-repeat;
  font: bold 14px/36px "Microsoft Yahei";
  color: #646464;
  margin: 30px 0 0;
}

.shopping_procedure span {
  width: 211px;
  display: inline-block;
  text-align: center;
}

.shopping_procedure span.current {
  color: #fff;
  width: 206px;
}

.logo_line .logo {
  padding: 20px 0 0 15px;
}

.empty p {
  font-size: 14px;
  color: #8a8888;
}
.empty a.btn {
  width: 116px;
  height: 38px;
  display: inline-block;
  background-color: #ff2832;
  color: #fff;
  text-align: center;
  line-height: 38px;
  font-size: 18px;
  margin: 30px 20px 0 0;
  border-radius: 2px;
}
</style>
