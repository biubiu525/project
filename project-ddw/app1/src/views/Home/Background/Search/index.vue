<template>
  <div>
    <Header></Header>
    <TypeNav v-show="$route.meta.showN"></TypeNav>
  </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import TypeNav from "../TypeNav/index.vue";
export default {
  name: "Search",

  data() {
    return {};
  },

  components: {
    Header,
    TypeNav,
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
