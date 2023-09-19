<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  props: {
    primaryBtn: String,
    text: String,
  },
};
</script>

<template>
  <button :class="primaryBtn">{{ text }}</button>
</template>

<style lang="scss" scoped></style>
