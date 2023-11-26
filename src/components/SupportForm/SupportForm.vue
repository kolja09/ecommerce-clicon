<template>
  <div class="container">
    <v-tag :themeTag="'yellow'">HELP CENTER</v-tag>
    <h1>How we can help you!</h1>
    <div class="input__wrapper">
      <div class="image__block">
        <SvgIcon name="search" width="24" height="24" />
      </div>
      <input
        placeholder="Enter your question or keyword"
        class="styles-input"
        type="text"
      />
      <navigate-button :isIcon="false">Search</navigate-button>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style src="./SupportForm.scss" lang="scss" scoped>
</style>