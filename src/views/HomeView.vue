<template>
  <div class="home">
    <features-site />
    <custom-carousel />
    <big-banner />
    <products-of-categories />
    <blogs-section />
  </div>
</template>

<script lang="ts">
import FeaturesSite from "@/components/FeaturesSite/FeaturesSite.vue";
import BlogsSection from "@/components/BlogsSection/BlogsSection.vue";
import ProductsOfCategories from "@/components/ProductsOfCategories/ProductsOfCategories.vue";
import BigBanner from "@/components/BigBanner/BigBanner.vue";
import CustomCarousel from "@/components/CustomCarousel/CustomCarousel.vue";

export default {
  name: "HomeView",
  components: {
    BlogsSection,
    ProductsOfCategories,
    BigBanner,
    FeaturesSite,
    CustomCarousel,
  },
};
</script>
