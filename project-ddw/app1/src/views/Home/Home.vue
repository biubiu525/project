<template>
  <div>
    <Header></Header>

    <Background></Background>
    <!-- <Bd></Bd> -->
    <!-- <Swipe></Swipe> -->
    <!-- <Floor></Floor> -->
  </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
// import Swipe from "@/components/Background/Swipe.vue";
// import Bd from "@/components/Background/bd.vue";
import Background from "./Background/index.vue";
import Swipe from "./Swipe/index.vue";
import Floor from "./Floor/index.vue";

export default {
  name: "Home",

  data() {
    return {};
  },

  mounted() {
    // this.$store.dispatch("getUserInfo");
  },

  components: {
    Header,
    Swipe,
    // Bd,
    Background,
    Floor,
  },

  methods: {},
};
</script>

<style lang="less"></style>
