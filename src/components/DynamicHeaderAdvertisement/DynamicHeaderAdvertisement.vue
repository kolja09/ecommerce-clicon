<template>
  <div v-if="show !== 'false'" class="wrapper">
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
      <navigate-button class="button" :color="color">Shop now</navigate-button>
    </div>
    <button @click="close" class="close">
      <SvgIcon name="close" width="16px" height="16px" />
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: "yellow",
      show: sessionStorage.getItem("advertisement"),
    };
  },
  methods: {
    close() {
      this.show = "false";
      sessionStorage.setItem("advertisement", "false");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./DynamicHeaderAdvertisement.scss";
</style>
