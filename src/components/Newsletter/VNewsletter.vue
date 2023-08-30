<template>
  <div class="newsletter__wrapper">
    <div class="app__container">
      <h1 class="title">Subscribe to our newsletter</h1>
      <p class="text">
        Praesent fringilla erat a lacinia egestas. Donec vehicula tempor libero
        et cursus. Donec non quam urna. Quisque vitae porta ipsum.
      </p>
      <div class="input__wrapper">
        <input
          placeholder="Email address"
          class="styles-input"
          type="email"
          v-model="emailValue"
        />
        <navigate-button>Subscribe</navigate-button>
      </div>
      <div class="line"></div>
      <ul class="list">
        <li v-for="(icon, index) in companiesIcon" :key="index">
          <SvgIcon :name="icon.name" width="72px" height="72px" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emailValue: "",
      companiesIcon: [
        { name: "google" },
        { name: "amazon" },
        { name: "philips" },
        { name: "toshiba" },
        { name: "samsung" },
      ],
    };
  },
};
</script>

<style src="./Newsletter.scss" lang="scss" scoped>
</style>