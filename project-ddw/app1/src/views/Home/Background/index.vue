<template>
  <div id="bd">
    <div class="bg_bd"></div>
    <div class="con bd_body">
      <div
        class=" "
        name="m3208531_pid0_t15055"
        dd_name="顶部广告A版"
        hvid="21224"
        component_map_id="3208531"
        ddt-area="3208531"
        ddt-expose="on"
      >
        <div id="component_3208531"></div>
        <div id="component_3208531"></div>
        <div
          id="ad_cpt_12284"
          style="position: relative; left: 0px; top: 0px; display: none"
        ></div>
        <div
          id="ad_cpx_36080001"
          style="position: relative; left: 0px; top: 0px; display: none"
        ></div>
        <div
          id="ad_cpx_12287"
          style="position: absolute; left: 0px; top: 0px; display: none"
        ></div>
      </div>
      <div
        class="new_pro"
        id="block1"
        name="m3208532_pid0_t15651"
        dd_name="首屏大模块A版"
        hvid="37860"
        component_map_id="3208532"
        ddt-area="3208532"
        ddt-expose="on"
      >
        <div id="component_3208532"></div>
        <div id="component_3208532"></div>
        <TypeNav></TypeNav>
       

        <!-- <Floor2></Floor2> -->
      </div>
    </div>
  </div>
</template>

<script>
import TypeNav from "../TypeNav/index.vue";
import Floor from "../Floor/index.vue";

export default {
  name: "Background",

  data() {
    return {};
  },
  components: {
    TypeNav,
    Floor,
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
#bd {
  width: 100% !important;
  margin: 0 auto !important;
}

#bd {
  background-image: url(http://img60.ddimg.cn/upload_img/00444/tupian/bj-1648893862.jpg);
  background-repeat: no-repeat;
  background-position: center top;
}

.bg_bd {
  background: url(//img60.ddimg.cn/assets/pc_image/pc_zxfwt.png) no-repeat top
    center;
  height: 488px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  margin-left: -5px;
}

#bd,
.bd_body {
  position: relative;
}

#bd .bd_body {
  width: 1200px;
  margin: 0 auto;
  background-color: #fff;
}

.new_pro {
  padding-bottom: 20px;
  height: 508px;
  width: 1200px;
  margin: 0 auto;
}
</style>
