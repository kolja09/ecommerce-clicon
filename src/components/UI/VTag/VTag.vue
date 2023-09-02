<template>
  <div
    class="tag-wrapper"
    :class="{
      blue_theme: themeTag === 'blue',
      yellow_theme: themeTag === 'yellow',
    }"
  >
    <slot></slot>
  </div>
</template>

<script lang="">
export default {
  name: "v-tag",
  props: {
    themeTag: {
      type: String,
      required: true,
    },
  },
};
</script>

<style src="./VTag.scss" lang="scss" scoped>
</style>