<script>
import Button from "./baseComponents/Button.vue";

export default {
  data() {
    return {
      getText: "GET A QUOTE TODAY",
      yellowBtn: "yellow-btn",
      grayBtn: "gray-btn",
      exploreText: "EXPLORE RECENT WORK",
    };
  },
  components: { Button },
};
</script>

<template>
  <section class="jumbotron">
    <div>
      <h1>BUILDING INSPIRING SPACES</h1>
      <Button :primaryBtn="grayBtn" :text="exploreText"></Button>
      <Button :primaryBtn="yellowBtn" :text="getText"></Button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/scss/general.scss" as *;
@use "../assets/scss/partials/variables" as *;

.jumbotron {
  background-image: url(public/img/home-slider-62528242.jpg);
  height: 90vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: $brilliant-white;
    font-size: 4rem;
  }
}

.gray-btn {
  font-size: 2rem;
}

.yellow-btn {
  font-size: 2rem;
}
</style>
