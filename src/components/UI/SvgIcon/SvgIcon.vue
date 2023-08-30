<template>
  <svg class="svg-icon">
    <use :xlink:href="iconName" />
  </svg>
</template>

  <script>
export default {
  name: "SvgIcon",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    iconName() {
      return `/icons-sprite.svg#${this.name}`;
    },
  },
};
</script>
  
  <style scoped>
.svg-icon {
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2;
}
</style>
  