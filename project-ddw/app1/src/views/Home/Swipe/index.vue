<template>
  <div class="focus_box">
    <el-carousel height="326px">
      <el-carousel-item>
        <img src="@/assets/images/2.jpg" alt="" class="" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="@/assets/images/2.jpg" alt="" class="" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="@/assets/images/3.jpg" alt="" class="" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="@/assets/images/4.jpg" alt="" class="" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="@/assets/images/5.jpg" alt="" class="" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="@/assets/images/6.jpg" alt="" class="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
// import { mapState } from "vuex";
export default {
  name: "Index",

  data() {
    return {};
  },

  // computed: {
  //   //state:他是咱们大仓库中的state（包含home|search）
  //   ...mapState({
  //     bannerList: (state) => state.home.bannerList,
  //   }),
  // },

  mounted() {
    this.$store.dispatch("getBannerList");
  },

  // computed: {
  //   //state:他是咱们大仓库中的state（包含home|search）
  //   ...mapState({
  //     bannerList: (state) => state.home.bannerList,
  //   }),
  // },

  methods: {},
};
</script>

<style lang="less">
.focus_box {
  width: 796px;
  height: 326px;
  overflow: hidden;
  position: relative;
  z-index: 10;
  border-bottom: 1px solid #e6e6e6;
}

.el-carousel--horizontal {
  overflow: hidden;
}

.el-carousel__button {
  display: block;
  opacity: 0.48;
  width: 20px;
  height: 5px;
  background-color: red;
  // border: none;
  border-radius: 2.5px;
  outline: 0;
  padding: 0;
  margin: 0;
  cursor: pointer;
  transition: 0.3s;
}

// .el-carousel__item:nth-child(2n) {
//   background-color: #99a9bf;
// }

// .el-carousel__item:nth-child(2n + 1) {
//   background-color: #d3dce6;
// }
</style>
