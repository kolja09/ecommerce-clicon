<template>
  <div class="search-input__wrapper">
    <input
      class="stylized__input"
      :value="modelValue"
      @input="updateInput"
      placeholder="Search for anything..."
    />
    <SvgIcon class="search-icon" width="20px" height="20px" name="search" />
  </div>
</template>

<script>
export default {
  name: "search-input",
  props: {
    modelValue: {
      String,
      Number,
    },
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style src="./SearchInput.scss" lang="scss" scoped>
</style>