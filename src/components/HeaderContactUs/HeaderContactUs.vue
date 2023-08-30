<template>
  <div class="header-contact__wrapper">
    <div class="app__container">
      <span class="text">Welcome to Clicon online eCommerce store.</span>
      <div class="social-networks__wrapper">
        <div class="text">Follow us:</div>
        <ul class="social-networks__list">
          <li v-for="(network, index) in socialNetworks" :key="index">
            <SvgIcon :name="network.name" width="16px" height="16px" />
          </li>
        </ul>
        <div class="settings">
          <select class="styles__select">
            <option v-for="(language, index) in languages" :key="index">
              {{ language }}
            </option>
          </select>
          <select>
            <option v-for="(currency, index) in currencies" :key="index">
              {{ currency }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socialNetworks: [
        { name: "twiter" },
        { name: "facebook" },
        { name: "youtube" },
        { name: "instagram" },
      ],
      languages: ["Eng", "Ru", "Ua"],
      currencies: ["USD", "EUR", "UAN"],
    };
  },
};
</script>

<style src="./HeaderContactUs.scss" lang="scss" scoped>
</style>