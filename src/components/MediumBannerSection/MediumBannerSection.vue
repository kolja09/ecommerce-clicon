<template>
  <div class="container">
    <middle-banner :themeTag="'blue'" :bannerData="bannersData[0]" />
    <middle-banner
      :themeTag="'yellow'"
      :theme="'black'"
      :bannerData="bannersData[1]"
    />
  </div>
</template>

<script>
import MiddleBanner from "@/components/MiddleBanner/MiddleBanner.vue";
export default {
  components: { MiddleBanner },
  data() {
    return {
      bannersData: [
        {
          name: "New Apple Homepod Mini",
          text: "Jam-packed with innovation, HomePod mini delivers unexpectedly.",
          tag: "INTRODUCING",
          image: "banner_2",
          price: null,
        },
        {
          name: "Xiaomi Mi 11 Ultra 12GB+256GB",
          text: "*Data provided by internal laboratories. Industry measurment.",
          tag: "INTRODUCING NEW",
          image: "banner_3",
          price: 1500,
        },
      ],
    };
  },
};
</script>

<style src="./MediumBannerSection.scss" lang="scss" scoped>
</style>