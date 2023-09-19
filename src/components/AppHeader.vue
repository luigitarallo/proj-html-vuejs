<script>
import Button from "./baseComponents/Button.vue";

export default {
  data() {
    return {
      getTextBtn: "GET QUOTE",
      yellowBtn: "yellow-btn",
      navLinks: [
        {
          title: "HOME",
          url: "#",
        },
        {
          title: "ABOUT",
          url: "#",
        },
        {
          title: "SERVICE",
          url: "#",
        },
        {
          title: "WORK",
          url: "#",
        },
        {
          title: "ARTICLES",
          url: "#",
        },
      ],
    };
  },
  components: { Button },
};
</script>

<template>
  <header>
    <nav>
      <img src="img/construction_logo.png" alt="logo" />
      <div class="menu">
        <ul>
          <li v-for="link in navLinks">
            <a :href="link.url">
              {{ link.title }}
            </a>
          </li>
        </ul>
        <Button :primaryBtn="yellowBtn" :text="getTextBtn"></Button>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@use "../assets/scss/general.scss" as *;
@use "../assets/scss/partials/variables" as *;

header {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: $brilliant-white;
}

nav {
  padding: 2rem 5rem;
  display: flex;

  justify-content: space-between;
  .menu {
    display: flex;
    align-items: center;
  }
  ul {
    display: flex;
    color: $muted-gray;
    li {
      margin-right: 3rem;
      font-size: 0.9rem;
      font-weight: 200;
    }
    li:hover {
      color: $brand-color;
    }
  }
  .yellow-btn {
    font-size: 0.9rem;
    padding: 0.5rem 1.5rem;

    &:hover {
      background-color: $dark-gray;
      color: $brilliant-white;
    }
  }
}
</style>
