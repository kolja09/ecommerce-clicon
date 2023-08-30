<template>
  <div class="header__wrapper">
    <div class="app__container">
      <div class="logo_wrapper">
        <SvgIcon name="logo" width="48px" height="48px" />
        <span class="logo-text">CLICON</span>
      </div>
      <div class="search">
        <search-input
          :model-value="searchValue"
          @update:model-value="setSearchValue"
        />
      </div>
      <ul class="navigation-icon__list">
        <li>
          <SvgIcon name="basket_products" width="32px" height="32px" />
        </li>
        <li>
          <SvgIcon name="favorite" width="32px" height="32px" />
        </li>
        <li>
          <SvgIcon name="profile" width="32px" height="32px" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchValue: "",
    };
  },
  methods: {
    setSearchValue(value) {
      this.searchValue = value;
    },
  },
};
</script>

<style src="./Header.scss" lang="scss" scoped>
</style>