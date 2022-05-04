<template>
  <div class="over">
    <el-carousel height="119px">
      <el-carousel-item>
        <img src="@/assets/images/8.jpg" alt="" class="" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="@/assets/images/9.jpg" alt="" class="" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="@/assets/images/10.jpg" alt="" class="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "Swipe1",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
.over {
  width: 202px;
  height: 119px;
  overflow: hidden;
}

img {
  width: 202px;
  height: 119px;
  overflow: hidden;
}
</style>
