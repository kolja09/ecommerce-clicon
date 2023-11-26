<template>
  <div class="container">
    <h1 class="title">What can we assist you with today?</h1>

    <div class="navigation__wrapper">
      <div
        v-for="(nav, index) in navigationData"
        :key="index"
        class="navigation_block"
      >
        <SvgIcon :name="nav.icon" width="32" height="32" />
        <p>{{ nav.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navigationData: [
        { text: "Track Order", icon: "truck" },
        { text: "Reset Password", icon: "lockOpen" },
        { text: "Payment Option", icon: "creditCardOrange" },
        { text: "User & Account", icon: "userOrangeColor" },
        { text: "Wishlist & Compare", icon: "stack" },
        { text: "Shipping & Billing", icon: "notepad" },
        { text: "Shoping Cart & Wallet", icon: "creditCardOrange" },
        { text: "Sell on Clicon", icon: "storePhont" },
      ],
    };
  },
};
</script>

<style src="./SupportContent.scss" lang="scss" scoped>
</style>