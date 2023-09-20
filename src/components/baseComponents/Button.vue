<script>
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
