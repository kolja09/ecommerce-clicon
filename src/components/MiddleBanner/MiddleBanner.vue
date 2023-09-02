<template>
  <div class="banner__wrapper" :class="{ black_theme: theme === 'black' }">
    <div class="content">
      <v-tag :themeTag="themeTag">{{ bannerData.tag }}</v-tag>
      <h1>{{ bannerData.name }}</h1>
      <p>{{ bannerData.text }}</p>
      <div>
        <navigate-button>Shop now</navigate-button>
      </div>
    </div>
    <img
      alt="banner image"
      :src="require(`@/assets/bannerPhoto/${bannerData.image}.png`)"
    />
    <div v-show="bannerData.price" class="price">${{ bannerData.price }}</div>
  </div>
</template>

<script>
export default {
  props: {
    bannerData: {
      type: Object,
      required: true,
    },
    themeTag:{
      type: String,
      required: false,
    },
    theme: {
      type: String,
      required: false,
    },
  },
};
</script>

<style src="./MiddleBanner.scss" lang="scss" scoped>
</style>