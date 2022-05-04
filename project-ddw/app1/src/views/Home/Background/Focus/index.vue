<template>
  <div class="home_circle_c" ddt_area="focus">
    <Swipe></Swipe>
  </div>
</template>

<script>
import Swipe from "../Swipe/index.vue";
export default {
  name: "Index",

  data() {
    return {};
  },

  mounted() {},

  methods: {},

  components: {
    Swipe,
  },
};
</script>

<style lang="less" scoped>
.home_circle_c {
  float: left;
  width: 796px;
  overflow: hidden;
  border-bottom: 1px solid #e6e6e6;
  border-right: 1px solid #eaecee;
}

.home_circle_c .focus_box {
  width: 796px;
  height: 326px;
  overflow: hidden;
  position: relative;
  z-index: 10;
  border-bottom: 1px solid #e6e6e6;
}
</style>
