<template>
  <div class="wrapper">
    <div class="app__container">
      <nav>
        <div class="nav__block" v-for="(link, index) in navData" :key="index">
          <router-link :to="link.link">
            <SvgIcon :name="link.icon" width="24" height="24" />
            <span>{{ link.name }}</span>
          </router-link>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navData: [
        { name: "Track Order", link: "/", icon: "location" },
        { name: "Compare", link: "/", icon: "arrowsCounterClockwise" },
        { name: "Customer Support", link: "/support", icon: "headPhones" },
        { name: "Need Help", link: "/", icon: "info" },
      ],
    };
  },
};
</script>

<style src="./NavigationBar.scss" lang="scss" scoped>
</style>