<template>
  <button
    class="styles__button"
    :class="{ button__yellow: color === 'yellow'}"
  >
    <span class="text">
      <slot></slot>
    </span>
    <SvgIcon
      class="active"
      name="navigate_arrow"
      width="22px"
      height="22px"
    ></SvgIcon>
  </button>
</template>

<script>
export default {
  name: "navigate-button",
  props: {
    color: {
      type: String,
      required: false,
    },
  },
};
</script>

<style src="./NavigateButton.scss" lang="scss" scoped>
</style>