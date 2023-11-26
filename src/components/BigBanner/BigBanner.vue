<template>
  <div class="container">
    <div class="content">
      <v-tag :themeTag="'blue'">SAVE UP TO $200.00</v-tag>
      <h1 class="title">Macbook Pro</h1>
      <p class="text">
        Apple M1 Max Chip. 32GB Unified Memory, 1TB SSD Storage
      </p>
      <navigate-button>Shop Now</navigate-button>
    </div>
    <div class="image__wrapper">
      <img
        alt="banner image"
        src="./../../assets/productsOfCategories/macBook.png"
      />
      <div class="price-widget">$1999</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style src="./BigBanner.scss" lang="scss" scoped>
</style>