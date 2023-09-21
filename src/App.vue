<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  data() {
    return {};
  },

  components: { AppHeader, AppMain, AppFooter },
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
    learnMore() {
      console.log("Learn More!");
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
  <AppFooter @learnMore="learnMore" />
</template>

<style lang="scss" scoped></style>
