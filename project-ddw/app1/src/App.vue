<template>
  <div>
    <!-- <Home></Home> -->
    <router-view></router-view>

    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
import Home from "./views/Home/Home.vue";
import Footer from "./components/Footer/footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Home,
    Footer,
  },
};
</script>

<style lang="less"></style>
