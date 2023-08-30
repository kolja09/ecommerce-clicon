<template>
  <div class="home">
    <big-banner />
    <products-of-categories />
    <blogs-section />
  </div>
</template>

<script lang="ts">
import BlogsSection from "@/components/BlogsSection/BlogsSection.vue";
import ProductsOfCategories from "@/components/ProductsOfCategories/ProductsOfCategories.vue";
import BigBanner from "@/components/BigBanner/BigBanner.vue";

export default {
  name: "HomeView",
  components: { BlogsSection, ProductsOfCategories, BigBanner },
};
</script>
