<template>
  <div id="hd">
    <div id="tools">
      <div class="tools">
        <div class="ddnewhead_operate">
          <div class="ddnewhead_area" @mouseover="changeb">
            <a href="javascript:void(0);" id="area_one" class="ddnewhead_area_a"
              >送至：<span id="curent_area">{{ city }}</span></a
            >
            <ul
              class="ddnewhead_area_list"
              style="display: block"
              id="area_list"
              v-show="flag"
              @mouseout="changen"
            >
              <li>
                <a
                  href="javascript:void(0);"
                  @click="change_area('111', '北京')"
                  num="111"
                  >北京</a
                >
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  @click="change_area('112', '天津')"
                  num="112"
                  >天津</a
                >
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  @click="change_area('113', '河北')"
                  num="113"
                  >河北</a
                >
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  @click="change_area('114', '山西')"
                  num="114"
                  >山西</a
                >
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  @click="change_area('115', '内蒙古')"
                  num="115"
                  >内蒙古</a
                >
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  @click="change_area('121', '辽宁')"
                  num="121"
                  >辽宁</a
                >
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  @click="change_area('122', '吉林')"
                  num="122"
                  >吉林</a
                >
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  @click="change_area('123', '黑龙江')"
                  num="123"
                  >黑龙江</a
                >
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  @click="change_area('131', '上海')"
                  num="131"
                  >上海</a
                >
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  @click="change_area('132', '江苏')"
                  num="132"
                  >江苏</a
                >
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  @click="change_area('133', '浙江')"
                  num="133"
                  >浙江</a
                >
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  @click="change_area('134', '安徽')"
                  num="134"
                  >安徽</a
                >
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  @click="change_area('135', '福建')"
                  num="135"
                  >福建</a
                >
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  @click="change_area('136', '江西')"
                  num="136"
                  >江西</a
                >
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  @click="change_area('137', '山东')"
                  num="137"
                  >山东</a
                >
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  @click="change_area('141', '河南')"
                  num="141"
                  >河南</a
                >
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  @click="change_area('142', '湖北')"
                  num="142"
                  >湖北</a
                >
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  @click="change_area('143', '湖南')"
                  num="143"
                  >湖南</a
                >
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  @click="change_area('144', '广东')"
                  num="144"
                  >广东</a
                >
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  @click="change_area('145', '广西')"
                  num="145"
                  >广西</a
                >
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  @click="change_area('146', '海南')"
                  num="146"
                  >海南</a
                >
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  @click="change_area('150', '重庆')"
                  num="150"
                  >重庆</a
                >
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  @click="change_area('151', '四川')"
                  num="151"
                  >四川</a
                >
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  @click="change_area('152', '贵州')"
                  num="152"
                  >贵州</a
                >
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  @click="change_area('153', '云南')"
                  num="153"
                  >云南</a
                >
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  @click="change_area('154', '西藏')"
                  num="154"
                  >西藏</a
                >
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  @click="change_area('161', '陕西')"
                  num="161"
                  >陕西</a
                >
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  @click="change_area('162', '甘肃')"
                  num="162"
                  >甘肃</a
                >
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  @click="change_area('163', '青海')"
                  num="163"
                  >青海</a
                >
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  @click="change_area('164', '宁夏')"
                  num="164"
                  >宁夏</a
                >
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  @click="change_area('165', '新疆')"
                  num="165"
                  >新疆</a
                >
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  @click="change_area('171', '台湾')"
                  num="171"
                  >台湾</a
                >
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  @click="change_area('172', '香港')"
                  num="172"
                  >香港</a
                >
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  @click="change_area('173', '澳门')"
                  num="173"
                  >澳门</a
                >
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  @click="change_area('174', '钓鱼岛')"
                  num="174"
                  >钓鱼岛</a
                >
              </li>
            </ul>
          </div>
          <div style="float: right">
            <div class="ddnewhead_welcome" display="block" style="float: left">
              <span id="nickname" v-if="!userName"
                ><span class="hi hi_none">欢迎光临当当，请</span
                ><a
                  href="https://login.dangdang.com/signin.aspx?returnurl=http%3A//www.dangdang.com/"
                  class="login_link"
                  ><router-link to="/login">登录</router-link></a
                ><a href="https://login.dangdang.com/Register.aspx"
                  ><router-link to="/login">免费注册</router-link></a
                ></span
              >

              <span id="nickname" v-else
                ><span class="hi"
                  >Hi，<a
                    href="http://myhome.dangdang.com/"
                    class="login_link"
                    target="_blank"
                    ><b>{{ userName }}</b></a
                  ><a href="" target="_self" @click="logOut()">[退出]</a></span
                ></span
              >
              <div class="tel_pop" style="display: none" id="__ddnav_sjdd">
                <a
                  target="_blank"
                  href="http://t.dangdang.com/20130220_ydmr"
                  class="title"
                  ><i class="icon_tel"></i>手机当当</a
                ><i class="title_shadow"></i>
                <ul class="tel_pop_box">
                  <li>
                    <a
                      href="http://t.dangdang.com/20130220_ydmr"
                      dd_name="手机二维码"
                      ><span>当当手机客户端</span
                      ><img src="//img3.ddimg.cn/00363/doc/erweima2.png" /><span
                        class="text"
                        >随手查订单<br />随时享优惠</span
                      ></a
                    >
                  </li>
                </ul>
              </div>

              <!-- <div
                class="tel_pop"
                style="display: none"
                id="__ddnav_sjdd"
                onmouseover="showgaoji('a_phonechannel','__ddnav_sjdd');"
                onmouseout="hideotherchannel('a_phonechannel','__ddnav_sjdd');"
              >
                <a
                  target="_blank"
                  href="http://t.dangdang.com/20130220_ydmr"
                  class="title"
                  ><i class="icon_tel"></i>手机当当</a
                ><i class="title_shadow"></i>
                <ul class="tel_pop_box">
                  <li>
                    <a
                      href="http://t.dangdang.com/20130220_ydmr"
                      dd_name="手机二维码"
                      ><span>当当手机客户端</span
                      ><img src="//img3.ddimg.cn/00363/doc/erweima2.png" /><span
                        class="text"
                        >随手查订单<br />随时享优惠</span
                      ></a
                    >
                  </li>
                </ul>
              </div> -->
            </div>
            <div
              class="new_head_znx"
              id="znx_content"
              style="display: none; float: left"
            ></div>
            <ul class="ddnewhead_operate_nav" style="float: left">
              <li class="ddnewhead_cart">
                <router-link to="/shopcart">
                  <a
                    href="javascript:AddToShoppingCart(0);"
                    name="购物车"
                    dd_name="购物车"
                    ><i class="icon_card"></i>购物车<b
                      id="cart_items_count_head"
                    ></b></a
                ></router-link>
              </li>
              <li>
                <a
                  target="_blank"
                  href="http://myhome.dangdang.com/myOrder"
                  name="我的订单"
                  dd_name="我的订单"
                  rel="nofollow"
                  >我的订单<b
                    id="unpaid_num"
                    style="color: #ff2832; font: bold 12px Arial"
                  ></b
                ></a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="http://e.dangdang.com/ebook/listUserEbooks.do"
                  name="我的云书房"
                  dd_name="我的云书房"
                  >我的云书房</a
                >
              </li>
              <li
                class="my_dd"
                @mouseover="changeshowb('my_ddshow')"
                @mouseout="changeshown('my_ddshow')"
              >
                <a
                  class="menu_btn"
                  target="_blank"
                  href="http://myhome.dangdang.com/"
                  name="我的当当"
                  dd_name="我的当当"
                  id="a_myddchannel"
                  >我的当当</a
                >
                <ul
                  class="ddnewhead_gcard_list"
                  id="__ddnav_mydd"
                  style="display: none; width: 83px"
                  ref="my_ddshow"
                >
                  <li>
                    <a
                      target="_blank"
                      href="http://myhome.dangdang.com/mypoint?ref=my-0-L"
                      name="mydd_4"
                      dd_name="银铃铛抵现"
                      rel="nofollow"
                      >银铃铛抵现</a
                    >
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="http://myhome.dangdang.com/myFavorite"
                      name="mydd_1"
                      dd_name="我的收藏"
                      rel="nofollow"
                      >我的收藏</a
                    >
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="http://noncash.dangdang.com/balance/"
                      name="mydd_5"
                      dd_name="我的余额"
                      rel="nofollow"
                      >我的余额</a
                    >
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="http://comment.dangdang.com/comment"
                      name="mydd_4"
                      dd_name="我的评论"
                      rel="nofollow"
                      >我的评论</a
                    >
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="http://newaccount.dangdang.com/payhistory/mycoupon.aspx"
                      name="mydd_2"
                      dd_name="礼券/礼品卡"
                      rel="nofollow"
                      >礼券/礼品卡</a
                    >
                  </li>
                </ul>
              </li>
              <li
                class="pc_mina"
                @mouseover="changeshowb('pc_minashow')"
                @mouseout="changeshown('pc_minashow')"
              >
                <a
                  class="menu_btn"
                  target="_blank"
                  href="http://t.dangdang.com/pintuan_list"
                  name="当当拼团"
                  dd_name="当当拼团"
                  id="a_minachannel"
                  >当当拼团</a
                >
                <ul
                  class="ddnewhead_gcard_list"
                  id="__ddnav_mina"
                  style="display: none; width: 79px"
                  ref="pc_minashow"
                >
                  <!-- 
          <li><a target="_blank" href="http://t.dangdang.com/freetry_list" name="mina_1" dd_name="0元领物" rel="nofollow">0元领物</a></li>
          -->
                  <li>
                    <a
                      target="_blank"
                      href="http://t.dangdang.com/pintuan_list"
                      name="mina_2"
                      dd_name="当当拼团"
                      rel="nofollow"
                      >当当拼团</a
                    >
                  </li>
                  <!-- 
                  <li><a target="_blank" href="http://t.dangdang.com/kanjia_list" name="mina_3" dd_name="1元砍价" rel="nofollow">1元砍价</a></li>
                  <li><a target="_blank" href="http://t.dangdang.com/choujiang_list" name="mina_4" dd_name="1分抽奖" rel="nofollow">1分抽奖</a></li>
          -->
                </ul>
              </li>
              <li>
                <a
                  target="_blank"
                  href="http://e.dangdang.com/media/h5/pc/zhuangti/zhengwen2017/essay.html"
                  name="mydd_7"
                  dd_name="小说投稿"
                  >小说投稿</a
                >
              </li>
              <li
                @mouseover="changeshowb('__ddnav_qycg')"
                @mouseout="changeshown('__ddnav_qycg')"
              >
                <a
                  class="menu_btn"
                  href="javascript:void(0);"
                  style="cursor: default"
                  name="qycg"
                  dd_name="企业采购"
                  id="a_qycgchannel"
                  >企业采购</a
                >
                <ul
                  class="ddnewhead_gcard_list"
                  id="__ddnav_qycg"
                  style="display: none; width: 79px"
                  ref="__ddnav_qycg"
                >
                  <li>
                    <a
                      target="_blank"
                      href="http://giftcard.dangdang.com/giftcardCompany"
                      name="qycg_1"
                      dd_name="大宗采购"
                      >大宗采购</a
                    >
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="http://giftcard.dangdang.com/"
                      name="qycg_2"
                      dd_name="礼品卡采购"
                      >礼品卡采购</a
                    >
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="http://newaccount.dangdang.com/payhistory/mymoney.aspx"
                      name="gqycg_3"
                      dd_name="礼品卡激活"
                      rel="nofollow"
                      >礼品卡激活</a
                    >
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="http://help.dangdang.com/details/page24"
                      name="qycg_4"
                      dd_name="礼品卡使用"
                      >礼品卡使用</a
                    >
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="http://b2b.dangdang.com"
                      name="qycg_5"
                      dd_name="分销/荐购"
                      >分销/荐购</a
                    >
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="http://giftcard.dangdang.com/goods?type=mall"
                      name="qycg_6"
                      dd_name="礼品卡专区"
                      >礼品卡专区</a
                    >
                  </li>
                </ul>
              </li>
              <li
                class="hover"
                @mouseover="changeshowb('__ddnav_bzzx')"
                @mouseout="changeshown('__ddnav_bzzx')"
              >
                <a
                  class="menu_btn"
                  href="javascript:void(0);"
                  style="cursor: default"
                  name="ddkf_0"
                  dd_name="客户服务"
                  id="a_bzzxchannel"
                  >客户服务</a
                >
                <ul
                  class="ddnewhead_gcard_list"
                  id="__ddnav_bzzx"
                  style="display: none; width: 79px"
                  ref="__ddnav_bzzx"
                >
                  <li>
                    <a
                      target="_blank"
                      href="http://help.dangdang.com/index"
                      name="ddkf_2"
                      dd_name="帮助中心"
                      >帮助中心</a
                    >
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="http://return.dangdang.com/reverseapplyselect.aspx"
                      name="ddkf_3"
                      dd_name="自助退换货"
                      >自助退换货</a
                    >
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="http://order.dangdang.com/InvoiceApply/InvoiceOnlineReissue.aspx"
                      name="tsjy_2"
                      dd_name="自助发票"
                      rel="nofollow"
                      >自助发票</a
                    >
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="http://help.dangdang.com/details/page206"
                      name="ddkf_4"
                      dd_name="联系客服"
                      >联系客服</a
                    >
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="http://help.dangdang.com/details/page206"
                      name="tsjy_1"
                      dd_name="我要投诉"
                      rel="nofollow"
                      >我要投诉</a
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div id="header_end"></div>
    <div class="logo_line" dd_name="搜索框" v-show="$route.meta.show">
      <div class="logo">
        <img
          src="http://img62.ddimg.cn/upload_img/00444/tupian/PClogo-1648893484.gif"
          usemap="#logo_link"
        />
        <map name="logo_link" id="logo_link" dd_name="logo区"
          ><area
            shape="rect"
            coords="0,18,200,93"
            href="http://www.dangdang.com"
            title="当当"
            onfocus="this.blur();"
            tabindex="-1" />
          <area
            shape="rect"
            coords="200,18,320,93"
            href="http://www.dangdang.com/"
            title=""
            target="_blank"
            onfocus="this.blur();"
            tabindex="-1"
        /></map>
      </div>
      <div class="search">
        <form
          action="http://search.dangdang.com"
          name="searchform"
          id="form_search_new"
          onsubmit="return searchsubmit();"
          method="GET"
        >
          <label
            for="key_S"
            class="label_search"
            id="label_key"
            @click="this.style.color = 'rgb(255, 255, 255)'"
            style="visibility: visible; color: rgb(102, 102, 102)"
          ></label>
          <input
            type="text"
            class="text gray"
            name="key"
            ID="key_S"
            autocomplete="off"
            v-model="keyword"
          /><a
            href="javascript:void(0);"
            @click="clearkeys()"
            class="del-keywords"
            tabindex="-1"
          ></a>
          <Dropdown></Dropdown>
          <input type="hidden" id="default_key" value="" />
          <input
            type="hidden"
            id="default_key_link"
            value="http://search.dangdang.com/?key=%C2%E8%C2%E8%C2%F2%C2%CC%B6%B9&act=input"
            mid1_value="0"
            api_step="d"
          />

          <input
            type="submit"
            id="search_btn"
            dd_name="搜索按钮"
            style="display: none"
          />
          <input
            id="SearchFromTop"
            style="display: none"
            type="hidden"
            name="SearchFromTop"
            value="1"
          />
          <input
            type="button"
            id="suggest_product_btn"
            name="suggestproduct_btn"
            style="display: none"
            @click="void 0"
          />
          <input
            type="button"
            id="suggest_class_btn"
            name="suggestclass_btn"
            style="display: none"
            @click="void 0"
          />
          <input
            type="submit"
            id="suggest_searchkey_btn"
            name="suggestsearchkey_btn"
            style="display: none"
            dd_name="搜索按钮"
          />
          <input type="hidden" id="catalog_S" name="catalog" value="" />
          <!-- <router-link to="/search"
            ><input type="button" class="button" dd_name="搜索按钮"
          /></router-link> -->
          <input
            type="button"
            class="button"
            dd_name="搜索按钮"
            @click="goSearch()"
          />
        </form>
      </div>
      <div class="search_bottom">
        <div class="search_hot">
          热搜:
          <a
            href="http://search.dangdang.com/?key=%D0%C2%C0%D9%B9%FA%BC%CA%B4%F3%BD%B1&act=input"
            name="hotword"
            target="_blank"
            >新蕾国际大奖</a
          ><a
            href="http://shop.dangdang.com/8525"
            name="hotword"
            target="_blank"
            >森马</a
          ><a
            href="http://search.dangdang.com/?key=%B8%DF%D6%D0%B1%D8%CB%A2%CC%E2&act=input"
            name="hotword"
            target="_blank"
            >高中必刷题</a
          ><a
            href="http://search.dangdang.com/?key=%D0%C7%C6%DA%CB%C4&act=input"
            name="hotword"
            target="_blank"
            >星期四</a
          ><a
            href="http://search.dangdang.com/?key=鎽╅閿�"
            name="hotword"
            target="_blank"
            >摩飞</a
          ><a
            href="http://search.dangdang.com/?key=%BD%BB%BB%BB%C9%ED%CC%E5&act=input"
            name="hotword"
            target="_blank"
            >交换身体</a
          >
        </div>
        <a
          href="http://search.dangdang.com/advsearch"
          class="search_advs"
          target="_blank"
          name="ddnav_adv_s"
          dd_name="高级搜索"
          >高级搜索</a
        >
      </div>
      <div id="suggest_key" class="suggest_key" style="display: none"></div>
      <div class="ddnew_cart">
        <a
          href="javascript:AddToShoppingCart(0);"
          name="购物车"
          dd_name="购物车"
          ><i class="icon_card"></i>购物车<b id="cart_items_count">0</b></a
        >
      </div>
      <div class="ddnew_order">
        <a
          target="_blank"
          href="http://myhome.dangdang.com/myOrder"
          name="我的订单"
          dd_name="我的订单"
          rel="nofollow"
          >我的订单<b
            id="unpaid_num"
            style="color: #ff2832; font: bold 12px Arial"
          ></b
        ></a>
      </div>
    </div>
    <div class="nav_top" dd_name="一级导航条" v-show="$route.meta.show">
      <ul>
        <li class="all">
          <a
            href="http://category.dangdang.com/?ref=www-0-C"
            dd_name="全部商品分类"
            target="_blank"
            >全部商品分类</a
          >
        </li>
        <!-- <script language="javascript">
          document.write(is_narrow());
        </script> -->
        <li><a href="http://book.dangdang.com/" target="_blank">图书</a></li>
        <li>
          <a href="http://e.dangdang.com/index_page.html" target="_blank"
            >电子书</a
          >
        </li>
        <li>
          <a href="http://category.dangdang.com/cid4004344.html">童装童鞋</a>
        </li>
        <li><a href="http://category.dangdang.com/cid4003844.html">女装</a></li>
        <li><a href="http://category.dangdang.com/cid4002145.html">食品</a></li>
        <li>
          <a href="http://category.dangdang.com/cid4002061.html">母婴玩具</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Dropdown from "./Dropdown/index.vue";
export default {
  name: "Header",

  data() {
    return {
      flag: false,
      city: "北京",
      my_dd: true,
      refs: this.$refs,
      keyword: "",
    };
  },

  components: {
    Dropdown,
  },

  computed: {
    userName() {
      return this.$store.state.user.userInfo.name;
    },
  },

  mounted() {
    // this.$store.dispatch("getUserInfo");
  },

  methods: {
    changeb: function (e) {
      this.flag = true;
    },
    changen: function () {
      this.flag = false;
    },
    changedisplay: function () {
      this.flag = this.falg == true ? false : true;
      console.log(1);
    },

    change_area: function (num, city) {
      this.city = city;
    },

    changeshown(name) {
      console.log(this.refs);
      this.refs[name].style.display = "none";
    },
    changeshowb(name) {
      this.refs[name].style.display = "block";
    },

    goSearch() {
      this.$router.push("/search");
    },
    // 退出登录
    async logOut() {
      try {
        await this.$store.dispatch("userLogout");
        this.$router.push("/home");
      } catch (error) {}
    },
  },
};
</script>

<style lang="less" scoped>
#hd {
  font: 12px "Hiragino Sans GB", "simsun", "Arial";
  color: #646464;
  min-width: 1200px;
  background-color: #fff;
}

#hd a {
  color: #646464;
  text-decoration: none;
}

#hd .tools {
  width: 100%;
  background-color: #f9f9f9;
  border-bottom: 1px solid #f2f2f2;
  height: 34px;
  line-height: 34px;
  position: relative;
  z-index: 10010;
}

.tools .ddnewhead_operate {
  width: 1200px;
  margin: 0 auto;
  background-color: #f9f9f9;
  height: 34px;
}

#hd .ddnewhead_area {
  float: left;
  position: relative;
  padding-top: 2px;
  margin-right: -1px;
  _margin-right: -10px;
  z-index: 100;
  font-family: arial, simsun;
}

#hd .ddnewhead_area a.ddnewhead_area_a {
  display: block;
  _display: inline-block;
  position: relative;
  line-height: 22px;
  height: 22px;
  background: url(http://img63.ddimg.cn/upload_img/00459/home/head_sprite.png)
    no-repeat right -303px;
  padding: 4px 22px 0 9px;
}

#hd .ddnewhead_area .ddnewhead_area_list {
  position: absolute;
  top: 27px;
  left: 0px;
  border: 1px solid #e6e6e6;
  background-color: #fff;
  padding: 10px 0 10px 10px;
  width: 298px;
}

#hd .ddnewhead_area .ddnewhead_area_list li {
  background: none;
  float: left;
  width: 48px;
  height: 26px;
  line-height: 26px;
  padding: 0 0 0 10px;
  position: relative;
  z-index: 100;
}

#hd .ddnewhead_area .ddnewhead_area_list li a {
  line-height: 26px;
  height: 26px;
}

#hd .tools a,
#hd .tools a:hover {
  text-decoration: none;
}

.tools .ddnewhead_welcome {
  padding: 5px 0 0 10px;
  height: 24px;
  line-height: 24px;
  position: relative;
  float: right;
  z-index: 50;
}

.tools .ddnewhead_welcome a.login_link {
  color: #ff2832 !important;
}

.tools .ddnewhead_welcome .tel_pop {
  position: absolute;
  height: 201px;
  left: 0;
  top: 2px;
}

.tools .ddnewhead_welcome a {
  display: inline-block;
  margin-right: 4px;
}

#hd .new_head_znx {
  float: right;
  position: relative;
  padding-top: 2px;
  margin-right: -1px;
  z-index: 100;
  font-family: arial, simsun;
}

#hd .tel_pop a.title,
#hd .tel_pop a.title:hover {
  color: #ff2832;
}

.ddnewhead_welcome .tel_pop .tel_pop_box {
  border: 1px solid #e6e6e6;
  background-color: #fff;
  box-shadow: 1px 1px 2px #dfdfdf;
  width: 104px;
}

.ddnewhead_welcome .tel_pop .title_shadow {
  display: block;
  position: absolute;
  top: 36px;
  left: 1px;
  height: 5px;
  width: 79px;
  background-color: #fff;
  font-size: 0;
  line-height: 0;
}

.ddnewhead_welcome .tel_pop .tel_pop_box {
  border: 1px solid #e6e6e6;
  background-color: #fff;
  box-shadow: 1px 1px 2px #dfdfdf;
  width: 104px;
}

.ddnewhead_welcome .tel_pop_box li {
  height: 158px;
  margin-top: 3px;
  width: 104px;
  text-align: center;
  line-height: 18px;
  overflow: hidden;
}

.tools .ddnewhead_operate_nav {
  float: right;
  padding-top: 2px;
}

.ddnewhead_operate_nav li {
  float: left;
  height: 22px;
  padding-top: 4px;
  line-height: 21px;
  background: url(http://img63.ddimg.cn/upload_img/00459/home/head_sprite.png)
    no-repeat left -285px;
  position: relative;
  z-index: 100;
}

.ddnewhead_operate_nav li.ddnewhead_cart {
  background-image: none;
}

.ddnewhead_operate_nav li .icon_card {
  float: left;
  width: 15px;
  height: 14px;
  background: url(http://img63.ddimg.cn/upload_img/00459/home/home_sprite2.png)
    no-repeat -40px -86px;
  overflow: hidden;
  margin: 3px 9px 0 0;
}

.ddnewhead_operate_nav li.ddnewhead_cart b {
  color: #ff2832;
  font: bold 12px "Arial";
}

.ddnewhead_operate_nav li a {
  display: block;
  position: relative;
  line-height: 21px;
  padding: 0 7px 0 8px;
}

.ddnewhead_operate_nav li.my_dd a.menu_btn {
  padding-right: 27px;
}

.ddnewhead_gcard_list {
  position: absolute;
  top: 21px;
  left: -1px;
  border: 1px solid #e6e6e6;
  border-top: none;
  background-color: #fff;
  padding: 4px 0;
  display: none;
}

.ddnewhead_operate_nav li.my_dd .ddnewhead_gcard_list li {
  width: 82px;
}

.ddnewhead_gcard_list li {
  background: none;
  float: none;
  height: 22px;
  line-height: 22px;
  padding: 0;
  width: 79px;
}

.ddnewhead_gcard_list li a {
  padding: 0 0 0 8px;
  line-height: 22px;
  height: 22px;
  display: block;
}

.ddnewhead_operate_nav li a.menu_btn {
  background: url(http://img63.ddimg.cn/upload_img/00459/home/head_sprite.png)
    no-repeat right -307px;
  padding-right: 23px;
}

.ddnewhead_operate_nav li a.hover {
  background-color: #fff;
  background-position: right -321px;
  padding-top: 3px;
  margin: -4px 1px 0;
  border: 1px solid #e6e6e6;
  border-bottom: none;
  position: relative;
  width: 48px;
}
#hd .logo_line_out {
  position: relative;
  z-index: 10002;
}
#hd .logo_line {
  height: 100px;
  width: 1200px;
  margin: 0 auto;
  position: relative;
}

#hd .logo_line .logo {
  overflow: hidden;
  width: 362px;
  height: 100px;
  vertical-align: middle;
  position: absolute;
  left: 0;
  top: 0;
}
map {
  display: inline;
}
#hd .logo_line .search {
  position: absolute;
  margin-top: 20px;
  height: 48px;
  z-index: 9999;
  left: 362px;
  top: 0;
}
#hd .logo_line .search form {
  display: block;
  height: 50px;
}

#hd .logo_line .search .label_search {
  position: absolute;
  top: 2px;
  left: 10px;
  width: 398px;
  height: 36px;
  line-height: 36px;
  z-index: 1;
  overflow: hidden;
}

#hd .logo_line .search .text {
  width: 398px;
  height: 18px;
  border: 2px solid #ff2832;
  border-right: none;
  padding: 9px 0 9px 10px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  color: #323232;
  font: 12px/18px "Hiragino Sans GB", "simsun", Arial;
  outline: 0;
  background: none;
}

#hd .logo_line .search .button {
  width: 48px;
  height: 40px;
  border: none;
  background: url(http://img63.ddimg.cn/upload_img/00459/home/head_sprite.png)
    no-repeat 0 -346px;
  cursor: pointer;
  position: absolute;
  left: 517px;
  top: 0;
}

#hd .logo_line .search_bottom {
  position: absolute;
  top: 65px;
  left: 362px;
  color: #969696;
  width: 585px;
  line-height: 20px;
  z-index: 6666;
}
.logo_line .search_hot {
  float: left;
  width: 518px;
  overflow: hidden;
  height: 20px;
}
#hd .logo_line .search_bottom a,
#hd .logo_line .search_bottom a:hover {
  color: #969696;
  margin-right: 15px;
  _display: inline;
  height: 20px;
  overflow: hidden;
}
.logo_line .suggest_key {
  width: 408px;
  border: 1px solid #c8c8c8;
  border-top: none;
  z-index: 7777;
  position: absolute;
  left: 362px;
  top: 60px;
  background-color: #fff;
  color: #323232;
}

.logo_line .ddnew_cart,
.logo_line .ddnew_order {
  height: 36px;
  position: absolute;
  top: 20px;
  border: 2px solid #dcdcdc;
  font: 14px/36px "Microsoft Yahei";
}
.logo_line .ddnew_cart {
  right: 88px;
  width: 107px;
  border-color: #ff2832;
  background: url(http://img62.ddimg.cn/upload_img/00459/home/icon_cart.png) 5px
    0 no-repeat #ff2832;
}

.logo_line .ddnew_cart a {
  padding-left: 35px;
  width: 72px;
  display: inline-block;
}

.logo_line .ddnew_cart a b,
.logo_line .ddnew_order a b,
.logo_line .ddnew_cart a:hover b {
  color: #ff2832;
  padding-left: 3px;
  font-family: Arial;
  font-weight: bold;
}

#hd .logo_line .ddnew_cart a,
.logo_line .ddnew_cart a b {
  color: #fff;
}
.logo_line .ddnew_order {
  width: 86px;
  padding: 0;
  text-align: center;
  right: 0;
  border-left: 0;
  background-color: #f6f6f6;
}
.logo_line .ddnew_order a {
  color: #646464;
  text-decoration: none;
  display: inline-block;
  width: 86px;
}

#hd .nav_top {
  width: 100%;
  height: 40px;
  border-bottom: 3px solid #ff2832;
}

#hd .nav_top ul {
  width: 1200px;
  margin: 0 auto;
}

#hd .nav_top ul li {
  float: left;
  text-align: center;
  position: relative;
}

#hd .nav_top ul li.all {
  width: 200px;
  margin-right: 17px;
  _display: inline;
  text-align: left;
  background: #ff2832;
  position: relative;
}

#hd .nav_top a,
#hd .nav_top a:hover {
  color: #323232;
  font: 14px/40px "Microsoft Yahei";
  text-decoration: none;
  padding: 0 15px;
  display: block;
  font-weight: bold;
}

#hd .nav_top ul li.all a,
#hd .nav_top ul li.all a:hover {
  padding: 0 0 0 20px;
  display: block;
  width: 171px;
  background: url(http://img63.ddimg.cn/upload_img/00459/home/head_sprite.png)
    no-repeat 161px -567px;
  color: #fff;
}

.tools .ddnewhead_welcome .hi {
  display: inline-block;
  height: 24px;
  color: #ff2832;
}
</style>
