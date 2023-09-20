<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  props: {
    styleBtn: String,
    text: String,
  },
};
</script>

<template>
  <button :class="styleBtn">{{ text }}</button>
</template>

<style lang="scss" scoped></style>
