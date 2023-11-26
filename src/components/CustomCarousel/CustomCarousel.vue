<template>
  <div class="cateogry__wrapper">
    <h1 class="title-section">Shop with Categorys</h1>
    <div class="container">
      <div class="slider__wrapper" ref="sliderWrapper">
        <div
          v-for="card in visibleCategories"
          :key="card.id"
          class="card__block"
        >
          <img
            :src="require(`@/assets/categoriesPhoto/${card?.photo}.png`)"
            alt="categorie image"
          />
          <h1>{{ card.title }}</h1>
        </div>
      </div>
      <div
        v-show="categoriesData.length > numVisibleElements"
        class="custom-arrows"
      >
        <button class="arrow prev" @click.stop="prevSlide">
          <SvgIcon name="arrowLeft" width="24px" height="24px" />
        </button>
        <button class="arrow next" @click.stop="nextSlide">
          <SvgIcon name="arrowRight" width="24px" height="24px" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categoriesData: [
        { title: "Computer & Laptop", photo: "computer", id: 1 },
        { title: "SmartPhone", photo: "phone", id: 2 },
        { title: "Headphones", photo: "headPhone", id: 3 },
        { title: "Accessories", photo: "accessories", id: 4 },
        { title: "Camera & Photo", photo: "camera", id: 5 },
        { title: "TV & Homes", photo: "tv", id: 6 },
      ],
      numVisibleElements: 6,
    };
  },
  computed: {
    visibleCategories() {
      return this.categoriesData.slice(0, this.numVisibleElements);
    },
  },
  methods: {
    prevSlide() {
      const lastElements = this.categoriesData
        .splice(
          this.categoriesData.length - this.numVisibleElements,
          this.categoriesData.length
        )
        .reverse();
      for (const element of lastElements) {
        this.categoriesData.unshift(element);
      }
    },
    nextSlide() {
      const firstElements = this.categoriesData.splice(
        0,
        this.numVisibleElements
      );
      for (const element of firstElements) {
        this.categoriesData.push(element);
      }
    },
    updateVisibleElements() {
      const width = window.innerWidth;
      this.numVisibleElements = Math.min(
        width <= 1270 ? (width <= 1060 ? (width <= 660 ? 2 : 3) : 5) : 6,
        this.categoriesData.length
      );
    },
  },
  mounted() {
    this.updateVisibleElements();
  },
};
</script>

<style src="./CustomCarousel.scss" scoped lang="scss"></style>