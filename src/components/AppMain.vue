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
      smallYellowBtn: "small-yellow-btn",
      smallBtnText: "small-btn-text",
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
    <div class="simple-card-container">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <div class="round-icon">
              <font-awesome-icon icon="fa-solid fa-building" class="icon" />
            </div>
            <h3>Buildings</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dicta
              earum fugit aut facilis tempore?
            </p>
          </div>
          <div class="flip-card-back">
            <h3>ARTFULLY CRAFTED</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Corrupti, tenetur?
            </p>
            <button class="card-button">GET A QUOTE</button>
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <div class="round-icon">
              <font-awesome-icon
                icon="fa-solid fa-arrows-rotate"
                class="icon"
              />
            </div>
            <h3>Renovate</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dicta
              earum fugit aut facilis tempore?
            </p>
          </div>
          <div class="flip-card-back">
            <h3>ARTFULLY CRAFTED</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Corrupti, tenetur?
            </p>
            <button class="card-button">GET A QUOTE</button>
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <div class="round-icon">
              <font-awesome-icon icon="fa-solid fa-house" class="icon" />
            </div>
            <h3>Costruct</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dicta
              earum fugit aut facilis tempore?
            </p>
          </div>
          <div class="flip-card-back">
            <h3>ARTFULLY CRAFTED</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Corrupti, tenetur?
            </p>
            <button class="card-button">GET A QUOTE</button>
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <div class="round-icon">
              <font-awesome-icon icon="fa-solid fa-truck" class="icon" />
            </div>
            <h3>Exclusive</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dicta
              earum fugit aut facilis tempore?
            </p>
          </div>
          <div class="flip-card-back">
            <h3>ARTFULLY CRAFTED</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Corrupti, tenetur?
            </p>
            <button class="card-button">GET A QUOTE</button>
          </div>
        </div>
      </div>
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

.simple-card-container {
  margin: 5rem 6rem;
  display: flex;
  justify-content: center;
  .flip-card {
    background-color: transparent;
    width: 400px;
    height: 300px;
    perspective: 1000px;
    margin-right: 2rem;
  }
  /* This container is needed to position the front and back side */
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }
  // Flip Card Specialization
  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    @include column-flexed;
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    padding: 1rem;
  }

  .flip-card-front {
    background-color: $smoky-white;
    color: black;
    border-radius: 5px;
    .round-icon {
      border-radius: 50%;
      border: 1px solid $muted-gray;
      width: 4rem;
      height: 4rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .icon {
      font-size: 2rem;
      color: $muted-gray;
    }
    h3 {
      font-size: 2.5rem;
      margin: 1rem 0;
      color: $muted-gray;
      font-weight: 200;
    }
    p {
      font-size: 1rem;
      color: $muted-gray;
    }
  }

  .flip-card-back {
    background-color: $brand-color;
    color: $muted-gray;
    transform: rotateY(180deg);
    border-radius: 5px;
    .card-button {
      background-color: #ffdc6b;
      border: none;
    }
  }
}
</style>
