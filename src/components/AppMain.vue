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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        laborum mollitia at in temporibus accusamus obcaecati dolor distinctio
        dolore porro.
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
  <!-- Results -->
  <section class="results-container">
    <div class="container d-flex justify-content-around align-items-center">
      <div class="results">
        <font-awesome-icon icon="fa-solid fa-suitcase" class="result-icon" />
        <span class="result-number">3534</span>
        <p>PLANNING APPLICATIONS</p>
      </div>
      <div class="results">
        <font-awesome-icon icon="fa-solid fa-building" class="result-icon" />
        <span class="result-number">896</span>
        <p>COMPLETED PROJECTS</p>
      </div>
      <div class="results">
        <font-awesome-icon icon="fa-solid fa-users" class="result-icon" />
        <span class="result-number">172</span>
        <p>TRAINED PROFESSIONALS</p>
      </div>
      <div class="results">
        <font-awesome-icon icon="fa-solid fa-globe" class="result-icon" />
        <span class="result-number">19</span>
        <p>INTERNATIONAL OFFICES</p>
      </div>
    </div>
  </section>

  <!-- Recentent works -->
  <section>
    <div class="bordered-text-container">
      <h2>Explore Recente Work</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        laborum mollitia at in temporibus accusamus obcaecati dolor distinctio
        dolore porro.
      </p>
    </div>
    <div class="container">
      <!-- Recent Works Catch Phrase -->

      <!-- Recent works Card -->
      <div class="container d-flex my-5">
        <div class="work-flip-card">
          <div class="work-flip-card-inner">
            <div class="work-flip-card-front">
              <img
                src="/img/project2-featured-15013609-400x400.jpg"
                alt="florida project"
              />
            </div>
            <div class="work-flip-card-back">
              <div class="d-flex">
                <div class="icon-container">
                  <font-awesome-icon icon="fa-solid fa-link" class="icon" />
                </div>
                <div class="icon-container">
                  <font-awesome-icon
                    icon="fa-solid fa-magnifying-glass"
                    class="icon"
                  />
                </div>
              </div>
              <h4>Florida Heath Facility</h4>
              <span>Commercial</span>
            </div>
          </div>
        </div>
        <div class="work-flip-card">
          <div class="work-flip-card-inner">
            <div class="work-flip-card-front">
              <img
                src="/img/project1-featured-294276386-400x400.jpg"
                alt="florida project"
              />
            </div>
            <div class="work-flip-card-back">
              <div class="d-flex">
                <div class="icon-container">
                  <font-awesome-icon icon="fa-solid fa-link" class="icon" />
                </div>
                <div class="icon-container">
                  <font-awesome-icon
                    icon="fa-solid fa-magnifying-glass"
                    class="icon"
                  />
                </div>
              </div>
              <h4>Florida Heath Facility</h4>
              <span>Commercial</span>
            </div>
          </div>
        </div>
        <div class="work-flip-card">
          <div class="work-flip-card-inner">
            <div class="work-flip-card-front">
              <img
                src="/img/project3-featured-189023420-400x400.jpg"
                alt="florida project"
              />
            </div>
            <div class="work-flip-card-back">
              <div class="d-flex">
                <div class="icon-container">
                  <font-awesome-icon icon="fa-solid fa-link" class="icon" />
                </div>
                <div class="icon-container">
                  <font-awesome-icon
                    icon="fa-solid fa-magnifying-glass"
                    class="icon"
                  />
                </div>
              </div>
              <h4>Florida Heath Facility</h4>
              <span>Commercial</span>
            </div>
          </div>
        </div>
      </div>
      <p class="works-link">
        <a href="#">VIEW ALL PROJECTS</a>
      </p>
    </div>
  </section>
  <!-- Core Values -->
  <section class="core-value-section pb-5">
    <div class="bordered-text-container">
      <h2>Our Core Values</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        laborum mollitia at in temporibus accusamus obcaecati dolor distinctio
        dolore porro.
      </p>
    </div>
    <div class="container">
      <div class="d-flex justify-content-around align-items-center">
        <!-- Values col -->
        <div class="value-col">
          <span class="house-icon-container"
            ><font-awesome-icon icon="fa-solid fa-house" class="value-icon"
          /></span>
          <h6>Great Services</h6>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            magni enim a, dolorem ut soluta.
          </p>
        </div>
        <div class="value-col">
          <span class="sun-icon-container"
            ><font-awesome-icon icon="fa-regular fa-sun" class="value-icon"
          /></span>
          <h6>Great Services</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            magni enim a, dolorem ut soluta.
          </p>
        </div>
        <div class="value-col">
          <span class="users-icon-container"
            ><font-awesome-icon icon="fa-solid fa-users" class="value-icon"
          /></span>
          <h6>Great Services</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            magni enim a, dolorem ut soluta.
          </p>
        </div>
        <div class="value-col">
          <span class="bulb-icon-container"
            ><font-awesome-icon
              icon="fa-regular fa-lightbulb"
              class="value-icon"
          /></span>
          <h6>Great Services</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            magni enim a, dolorem ut soluta.
          </p>
        </div>
      </div>
    </div>
  </section>
  <!-- Users Feedback -->
  <section class="feedback-section">
    <div class="bordered-text-container">
      <h2>Our Home Owners Say</h2>
    </div>
    <div class="img-container">
      <img src="/img/home-testimonial-113165296.jpg" alt="testimonial" />
    </div>
    <p>
      "No man but feels more of a man in the world if he have but a bit of
      ground that he can call his own. However small it is on the surface, it is
      foru thousand miles deep; and that is a very handsome property."
    </p>
    <span>HARRY SMITH &sdot; NEW HOME OWNER</span>
  </section>
  <!-- Latest news -->
  <section class="blog-section">
    <div class="bordered-text-container">
      <h2>Latest News</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        laborum mollitia at in temporibus accusamus obcaecati dolor distinctio
        dolore porro.
      </p>
    </div>
    <div class="container-card my-5">
      <div class="cards d-flex justify-content-center">
        <div class="card mx-2">
          <div class="news-card">
            <div class="news-card-inner">
              <div class="news-card-front">
                <img src="/img/blog-post-134132600-800x482.jpg" alt="" />
              </div>
              <div class="news-card-back p-3">
                <div class="d-flex justify-content-center">
                  <div class="icon-container">
                    <font-awesome-icon icon="fa-solid fa-link" class="icon" />
                  </div>
                  <div class="icon-container">
                    <font-awesome-icon
                      icon="fa-solid fa-magnifying-glass"
                      class="icon"
                    />
                  </div>
                </div>
                <h4>Florida Heath Facility</h4>
                <span>Commercial</span>
              </div>
            </div>
          </div>
        </div>
        <div class="card mx-2">
          <div class="news-card">
            <div class="news-card-inner">
              <div class="news-card-front">
                <img src="/img/blog-post-92486644-800x482.jpg" alt="" />
              </div>
              <div class="news-card-back p-3">
                <div class="d-flex justify-content-center">
                  <div class="icon-container">
                    <font-awesome-icon icon="fa-solid fa-link" class="icon" />
                  </div>
                  <div class="icon-container">
                    <font-awesome-icon
                      icon="fa-solid fa-magnifying-glass"
                      class="icon"
                    />
                  </div>
                </div>
                <h4>Florida Heath Facility</h4>
                <span>Commercial</span>
              </div>
            </div>
          </div>
        </div>
        <div class="card mx-2">
          <div class="news-card">
            <div class="news-card-inner">
              <div class="news-card-front">
                <img src="/img/blog-post-332773904-600x362.jpg" alt="Avatar" />
              </div>
              <div class="news-card-back p-3">
                <div class="d-flex justify-content-center">
                  <div class="icon-container">
                    <font-awesome-icon icon="fa-solid fa-link" class="icon" />
                  </div>
                  <div class="icon-container">
                    <font-awesome-icon
                      icon="fa-solid fa-magnifying-glass"
                      class="icon"
                    />
                  </div>
                </div>
                <h4>Florida Heath Facility</h4>
                <span>Commercial</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="works-link">
        <a href="#">VIEW ALL ARTICLES</a>
      </p>
    </div>
  </section>
  <!-- Trusted partners -->
  <section class="partners-container">
    <div class="container">
      <div class="bordered-text-container">
        <h2>Trusted Partners</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          laborum mollitia at in temporibus accusamus obcaecati dolor distinctio
          dolore porro.
        </p>
      </div>
      <div class="partner-list">
        <ul class="d-flex">
          <li><img src="/img/home-logo1-219096700-320x202.png" alt="" /></li>
          <li><img src="/img/home-logo2-219096700-320x202.png" alt="" /></li>
          <li><img src="/img/home-logo9-219096700-320x202.png" alt="" /></li>
          <li><img src="/img/home-logo10-219096700-320x202.png" alt="" /></li>
          <li><img src="/img/home-logo11-219096700-320x202.png" alt="" /></li>
        </ul>
      </div>
    </div>
  </section>
  <!-- Inspiring Spaces -->
  <section
    class="inspiring-spaces-section d-flex align-items-center justify-content-center"
  >
    <div class="spaces-container">
      <div class="w-50 d-flex flex-column">
        <h2 class="text-light">Building Inspiring Spaces</h2>
        <p class="text-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          laborum mollitia at in temporibus accusamus obcaecati dolor distinctio
          dolore porro.
        </p>
      </div>
      <div>
        <Button
          @click="$emit('getFreeQuote')"
          :styleBtn="yellowBtn"
          :text="getText"
        ></Button>
        <p class="text-center text-light">Only takes a few seconds</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/scss/general.scss" as *;
@use "../assets/scss/partials/variables" as *;
@use "../assets/scss/partials/mixins" as *;

// UTILS
// Catch Phrase Bordered

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

// Section Specialization CARD
.simple-card-container {
  margin: 5rem 6rem;
  display: flex;
  justify-content: center;

  // Container Card
  .flip-card {
    @include flip-card-external;
    width: 400px;
    height: 300px;
    margin-right: 2rem;
  }
  // Content Card
  .flip-card-inner {
    @include flip-inner-card;
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    @include column-flexed;
    @include flip-card-faces;
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

// Results section
.results-container {
  background-image: url(/img/home-244125289.jpg);
  background-position: center;
  background-size: cover;
  height: 600px;
  .container {
    height: 100%;
  }
  .results {
    @include column-flexed;
    .result-icon {
      font-size: 5rem;
      color: $brand-color;
    }
    .result-number {
      font-size: 4rem;
      color: $brand-color;
    }
    p {
      color: $brilliant-white;
      font-size: 1.2rem;
      font-weight: 600;
    }
  }
}

// Recent Works Card
.work-flip-card {
  @include flip-card-external;
  width: 400px;
  height: 400px;
  margin: 0 1rem;
}
.work-flip-card-inner {
  @include flip-inner-card;
}
.work-flip-card:hover .work-flip-card-inner {
  transform: rotateY(180deg);
}
.work-flip-card-front,
.work-flip-card-back {
  @include column-flexed;
  @include flip-card-faces;
  padding: 1rem;
}
.work-flip-card-back {
  transform: rotateY(180deg);
  background-color: $brand-color;
  h4 {
    color: $brilliant-white;
    margin: 0.7rem 0;
    font-weight: 100;
  }
  span {
    color: $brilliant-white;
  }

  .icon-container {
    height: 50px;
    width: 50px;
    background-color: $brilliant-white;
    border-radius: 50%;
    margin: 0 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    .icon {
      color: $brand-color;
    }
  }
}

.works-link {
  text-align: center;
  margin: 5rem 0;
  color: $muted-gray;
  &::before {
    content: "";
    border: 1px solid $smoky-white;
    margin-bottom: 1.5rem;
    width: 200px;
    display: inline-block;
    margin-right: 10rem;
  }
  &::after {
    content: "";
    border: 1px solid $smoky-white;
    margin-top: 1.5rem;
    width: 200px;
    display: inline-block;
    margin-left: 10rem;
  }
}

// Core Values
.core-value-section {
  background-color: $smoky-white;
  .value-col {
    @include column-flexed;
    width: calc(100% / 4);
    padding: 1rem;

    h6 {
      padding: 1.5rem 0;
      text-align: center;
      position: relative;
      color: $muted-gray;
      font-weight: 200;

      &:after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        translate: (-50%);

        border: 1px solid $muted-gray;

        width: 20px;
      }
    }
    p {
      margin-top: 1rem;
      text-align: center;
    }
  }

  .house-icon-container {
    border-radius: 50%;
    background-color: $aqua-icon;
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: $brand-color;
      cursor: pointer;
    }
    &:hover ~ h6 {
      color: $brand-color;
    }
  }
  .sun-icon-container {
    border-radius: 50%;
    background-color: $blue-icon;
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: $brand-color;
      cursor: pointer;
    }
    &:hover ~ h6 {
      color: $brand-color;
    }
  }

  .users-icon-container {
    border-radius: 50%;
    background-color: $orange-icon;
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: $brand-color;
      cursor: pointer;
    }
    &:hover ~ h6 {
      color: $brand-color;
    }
  }

  .bulb-icon-container {
    border-radius: 50%;
    background-color: $green-icon;
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: $brand-color;
      cursor: pointer;
    }
    &:hover ~ h6 {
      color: $brand-color;
    }
  }

  .value-icon {
    font-size: 5rem;
    color: $brilliant-white;
  }
}

// Users Feedback
.feedback-section {
  background-image: url(/img/home-parallax-144609983.jpg);
  height: 600px;
  background-position: center;
  flex-direction: column;
  align-items: center;
  display: flex;

  .bordered-text-container {
    color: $brilliant-white;
    h2 {
      font-weight: 400;
    }
  }
  p {
    width: 50%;
    text-align: center;
    font-weight: 400;
    color: $brilliant-white;
    margin: 1.5rem 0;
    font-size: 1.4rem;
    font-style: italic;
  }
  .img-container {
    margin-top: 1rem;
    width: 150px;
    height: 150px;
    overflow: hidden;
    border-radius: 50%;
  }
  span {
    font-size: 1.4rem;
    color: $brilliant-white;
    font-weight: 600;
  }
}

// Blog

.blog-section {
  background-color: $smoky-white;
  height: 800px;

  .news-card {
    background-color: transparent;
    width: 300px;
    height: 200px;

    perspective: 1000px;
  }

  .news-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .news-card:hover .news-card-inner {
    transform: rotateY(180deg);
  }

  .news-card-front,
  .news-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }

  .news-card-front {
    width: 300px;
    height: 200px;
    img {
      width: 300px;
      height: 200px;
    }
  }

  .news-card-back {
    background-color: $brand-color;
    color: white;
    transform: rotateY(180deg);
    .icon-container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: $brilliant-white;
      .icon {
        color: $brand-color;
      }
    }
  }
}

// Partners
.partners-container {
  margin: 3rem 0;
}

.partner-list {
  li {
    img {
      max-width: 100%;
    }
  }
}

// Inspiring spaces
.inspiring-spaces-section {
  background-image: url(/img/about-call-to-action-57862405.jpg);
  height: 500px;

  background-position: center;
  background-size: cover;

  .spaces-container {
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    h2 {
      position: relative;
      &::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 0;
        border: 1px solid $brand-color;
        width: 150px;
        margin: 1rem 0;
      }
    }
    p {
      margin-top: 2rem;
    }
  }
}
</style>
