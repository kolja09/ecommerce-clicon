<template>
  <div class="wrapper">
    <div class="app__container">
      <div class="widget__logo">
        <div class="bg__text">Black</div>
        <p>Friday</p>
      </div>
      <div class="promotion__text">
        <p>Up to</p>
        <p>59%</p>
        <p>OFF</p>
      </div>
      <navigate-button :color="color">Shop now</navigate-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: "yellow",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./DynamicHeaderAdvertisement.scss";
</style>
