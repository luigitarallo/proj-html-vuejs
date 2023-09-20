<script>
import Button from "./baseComponents/Button.vue";

export default {
  data() {
    return {
      getText: "GET A QUOTE TODAY",
      yellowBtn: "yellow-btn",
      grayBtn: "gray-btn",
      exploreText: "EXPLORE RECENT WORK",
      getFreeText: "GET A FREE QUOTE",
    };
  },
  components: { Button },
};
</script>

<template>
  <section class="jumbotron">
    <div class="jumbo-text d-flex flex-column">
      <h1>BUILDING INSPIRING SPACES</h1>
      <h3 class="my-5">We Build Inspiring Residential & Commercial Spaces</h3>
    </div>
    <div>
      <Button :styleBtn="grayBtn" :text="exploreText"></Button>
      <Button :styleBtn="yellowBtn" :text="getText"></Button>
    </div>
  </section>
  <section class="yellow-row">
    <h2>Do You Have A Construction Project We Can Help With?</h2>
    <Button :styleBtn="grayBtn" :text="getFreeText"> </Button>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/scss/general.scss" as *;
@use "../assets/scss/partials/variables" as *;

// Section Jumbotron
.jumbotron {
  background-image: url(/img/home-slider-62528242.jpg);
  height: 90vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: $brilliant-white;
    font-weight: 600;
    font-size: 4rem;
    text-align: center;
    margin-bottom: 0;
  }
  h3 {
    text-align: center;
    color: $brand-color;
    font-weight: 400;
  }
}

.gray-btn {
  font-size: 1.7rem;
  margin-right: 1rem;
  padding: 0.8rem 2.5rem;
}

.yellow-btn {
  font-size: 1.7rem;
  padding: 0.8rem 2.5rem;
  &:hover {
    background-color: $muted-gray;
  }
}

// Section Yellow Row with Button
.yellow-row {
  background-color: $brand-color;
  position: relative;
  h2 {
    font-weight: 100;
    text-align: center;
    padding: 4rem 0;
  }
  .gray-btn {
    position: absolute;
    background-color: $dark-gray;
    left: 50%;
    transform: translate(-50%);
    bottom: -13%;
    border: 2px solid $brilliant-white;
    margin-right: 0;
    font-size: 1rem;
    padding: 0.5rem 1.5rem;
    &:hover {
      background-color: $smoky-white;
      border: 2px solid $dark-gray;
    }
  }
}
</style>
