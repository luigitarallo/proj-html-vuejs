<script>
import Button from "./baseComponents/Button.vue";

// icon from font awesome
import {
  faFacebookF,
  faTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faClock,
  faGlobe,
  faPhoneFlip,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

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
      contactsCol: {
        title: "CONTACT US TODAY",
        contacts: [
          {
            icon: faGlobe,
            text: "Corporate Location",
            text2: "1600 Amphitheatre Parkway",
            text3: "London WC1 1BA",
            id: 1,
          },
          {
            icon: faHouse,
            text: "Residential Location",
            text2: "9521 Broadsberry Avenue",
            text3: "Paddington RC7 9ZA",
            id: 2,
          },
          { icon: faPhoneFlip, text: "1.800.458.556 / 1.800.532.2112", id: 3 },
          { icon: faEnvelope, text: "info@your-domain.com", id: 4 },
          { icon: faClock, text: "Monday - Friday: 9:00 AM - 6:00 PM", id: 5 },
          {
            icon: faClock,
            text: "Saturday - Sunday: 9:00 AM - 12:00 PM",
            id: 6,
          },
        ],
      },
      tweets: {
        title: "LATEST TWEETS",
        messages: [
          {
            profileIcon: "/img/profile-icon.png",
            accountName: "Theme Fusion",
            userAccount: "@Theme_Fusion",
            tweetText:
              "Do you need sublime WordPress hosting for your next website? Take advantage of exclusive partner offers that we have secured just for you, & launch your site in seconds with #avada on WP Engine hosting & get 30% Off This Black Friday",
            tweetImg: "/img/tweet-image.jpeg",
            twitterIcon: faTwitter,
          },
        ],
      },
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
      <div class="col">
        <div class="message-container" v-for="message in tweets.messages">
          <h3>{{ tweets.title }}</h3>
          <div class="d-flex">
            <div class="profile-container">
              <div class="profile-img">
                <img :src="message.profileIcon" alt="" />
              </div>
            </div>
            <div class="d-flex flex-column">
              <div class="d-flex justify-content-between">
                <h4>{{ message.accountName }}</h4>
                <span class="tweet-icon"
                  ><font-awesome-icon :icon="message.twitterIcon"
                /></span>
              </div>
              <h5>{{ message.userAccount }}</h5>
              <p>{{ message.tweetText }}</p>
              <div class="tweet-img">
                <img :src="message.tweetImg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <h3>{{ contactsCol.title }}</h3>
        <ul>
          <li
            v-for="contact in contactsCol.contacts"
            :key="contact.id"
            class="d-flex"
          >
            <font-awesome-icon :icon="contact.icon" class="icon" />
            <p>
              <span>{{ contact.text }}</span>
              <span>{{ contact.text2 }}</span>
              <span>{{ contact.text3 }}</span>
            </p>
          </li>
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
  height: 500px;
  padding: 4rem 3rem;
  display: flex;
  justify-content: space-between;
  background-color: $muted-gray;
  .col {
    margin-right: 2rem;
  }
  h3 {
    color: $brand-color;
    font-size: 1.2rem;
    margin-bottom: 1.2rem;
  }
  .icon {
    margin-right: 0.5rem;
    color: rgb(139, 139, 139);
    font-size: 1rem;
  }
  p {
    margin-bottom: 1rem;
    color: rgb(139, 139, 139);
    display: flex;
    flex-direction: column;
    font-size: 0.7rem;
    font-weight: 500;
  }
  .brand-data {
    color: rgb(139, 139, 139);
    p {
      margin: 1rem 0;
    }
  }
}

.yellow-btn {
  font-size: 1rem;
  padding: 0.5rem 2rem;
}
.img-container {
  width: 315px;
  img {
    max-width: 100%;
  }
}

.message-container {
  overflow-y: auto;
  .tweet-icon {
    color: #667580;
  }
  h4 {
    color: $smoky-white;
    font-size: 0.9rem;
  }
  h5 {
    color: $smoky-white;
    font-size: 0.7rem;
  }
  .profile-container {
    width: 50%;
    border-radius: 50%;
    .profile-img {
      height: 45px;
      width: 45px;
      border-radius: 50%;
      overflow: hidden;

      img {
        max-width: 100%;
      }
    }
  }
  .tweet-img {
    width: 100%;
    img {
      max-width: 100%;
    }
  }
}

// Sub footer
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
