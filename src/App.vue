<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  data() {
    return {};
  },

  components: { AppHeader, AppMain },
  methods: {
    clicked() {
      console.log("I'm clicked!");
    },
    getClicked() {
      console.log("Get me!");
    },
    exploreClicked() {
      console.log("Exploring me!");
    },
    freeQuoteMe() {
      console.log("Get a free quote!");
    },
  },
};
</script>

<template>
  <AppHeader @click="clicked" />
  <AppMain
    @getClicked="getClicked"
    @exploreClicked="exploreClicked"
    @getFreeQuote="freeQuoteMe"
  />
</template>

<style lang="scss" scoped></style>
