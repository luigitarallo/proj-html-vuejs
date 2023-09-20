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
  emits: ["getClicked", "exploreClicked", "getFreeQuote"],
  components: { Button },
};
</script>

<template>
  <!-- Jumbotron -->
  <section class="jumbotron">
    <div class="jumbo-text d-flex flex-column">
      <h1>BUILDING INSPIRING SPACES</h1>
      <h3 class="my-5">We Build Inspiring Residential & Commercial Spaces</h3>
    </div>
    <div>
      <Button
        @click="$emit('exploreClicked')"
        :styleBtn="grayBtn"
        :text="exploreText"
      ></Button>
      <Button
        @click="$emit('getClicked')"
        :styleBtn="yellowBtn"
        :text="getText"
      ></Button>
    </div>
  </section>
  <!-- Yellow Row -->
  <section class="yellow-row">
    <h2>Do You Have A Construction Project We Can Help With?</h2>
    <Button
      @click="$emit('getFreeQuote')"
      :styleBtn="grayBtn"
      :text="getFreeText"
    >
    </Button>
  </section>
  <!-- Specialization -->
  <section class="specialization-section">
    <div class="bordered-text-container">
      <h2>Specialist in Modern Costruction</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel tempore
        fuga at sed rem accusantium fugit nam. Optio, error eius.
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/scss/general.scss" as *;
@use "../assets/scss/partials/variables" as *;
@use "../assets/scss/partials/mixins" as *;

// Section Jumbotron
.jumbotron {
  @include column-flexed;
  background-image: url(/img/home-slider-62528242.jpg);
  height: 90vh;
  background-size: cover;

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
    font-weight: 300;
    text-align: center;
    padding: 4rem 0;
  }
  .gray-btn {
    position: absolute;
    left: 50%;
    bottom: -13%;
    transform: translate(-50%);
    background-color: $dark-gray;
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

// Section Specialization
.specialization-section {
  .bordered-text-container {
    @include column-flexed;
    h2 {
      @include bordered-bottom-txt;

      &:after {
        @include after-border;
      }
    }
    p {
      @include bordered-bottom-p;
    }
  }
}
</style>
