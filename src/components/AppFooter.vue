<script>
import Button from "./baseComponents/Button.vue";

import {
  faFacebookF,
  faTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default {
  data() {
    return {
      getTextBtn: "LEARN MORE",
      yellowBtn: "yellow-btn",
      tradeMarks: [
        {
          text: "COPYRIGHT 2012 - 2015 AVADA THEME BY ",
          link: "THEME FUSION",
          url: "#",
          id: 1,
        },
        {
          text: "| ALL RIGHT RESERVED |",
          id: 2,
        },
        {
          text: "POWERED BY",
          link: "WORDPRESS",
          url: "#",
          id: 3,
        },
      ],
      socialLinks: [
        {
          icon: faFacebookF,
          url: "#",
          id: 1,
        },
        {
          icon: faTwitter,
          url: "#",
          id: 2,
        },
        {
          icon: faYoutube,
          url: "#",
          id: 3,
        },
        {
          icon: faInstagram,
          url: "#",
          id: 4,
        },
      ],
      brandDatas: [
        {
          logo: "/img/footer-logo.png",
          text: "We are specialists in the construction of unique and exclusive properties. Our work inspires. We Pride ourselves on delivering outstanding quality and design for leading clients across the world.",
        },
      ],
      maps: [{ title: "FIND US", map: "/img/construction_map_pin.png", id: 1 }],
    };
  },
  emits: ["learnMore"],
  components: { Button },
};
</script>

<template>
  <footer>
    <div class="first-footer">
      <div class="col">
        <ul v-for="brandData in brandDatas" key:brandData.id class="brand-data">
          <li><img :src="brandData.logo" alt="" /></li>
          <li>
            <p>{{ brandData.text }}</p>
          </li>
          <li>
            <Button
              @click="$emit('learnMore')"
              :styleBtn="yellowBtn"
              :text="getTextBtn"
            ></Button>
          </li>
        </ul>
      </div>
      <div class="col">ciao</div>
      <div class="col">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div v-for="map in maps" class="col">
        <h3>{{ map.title }}</h3>
        <div class="img-container">
          <img :src="map.map" alt="" />
        </div>
      </div>
    </div>
    <div class="sub-footer d-flex">
      <div class="trademarks">
        <ul class="d-flex">
          <li v-for="tradeMark in tradeMarks" :key="tradeMark.id">
            {{ tradeMark.text }}
            <a :href="tradeMark.url">{{ tradeMark.link }}</a>
          </li>
        </ul>
      </div>
      <div class="social-links">
        <ul class="d-flex">
          <li v-for="link in socialLinks" :key="link.id">
            <a :href="link.url"><font-awesome-icon :icon="link.icon" /></a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use "../assets/scss/general.scss" as *;
@use "../assets/scss/partials/variables" as *;
@use "../assets/scss/partials/mixins" as *;

.first-footer {
  padding: 2rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $muted-gray;
  h3 {
    color: $brand-color;
    font-size: 1.2rem;
    margin-bottom: 1.2rem;
  }
  .brand-data {
    color: rgb(139, 139, 139);
    p {
      margin: 1rem 0;
    }
  }

  .yellow-btn {
    font-size: 1rem;
    padding: 0.5rem 2rem;
  }
  .img-container {
    width: 300px;
    img {
      max-width: 100%;
    }
  }
}
.col {
  margin-right: 2rem;
}
.sub-footer {
  background-color: $dark-gray;
  padding: 2rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.trademarks {
  li {
    color: rgb(139, 139, 139);
    font-size: 0.7rem;
    margin-right: 0.5rem;
  }
  a {
    color: rgb(168, 168, 168);
  }
}
.social-links {
  li {
    color: rgb(139, 139, 139);
    margin-right: 1rem;
    font-size: 1rem;
  }
}
</style>
