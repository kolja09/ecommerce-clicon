<template>
  <div class="wrapper">
    <div class="app__container">
      <div
        class="slider__wrapper"
        :class="{ animate: isAnimating }"
        ref="sliderWrapper"
      >
        <div
          v-for="card in visibleCategories"
          :key="card.id"
          class="card__block"
        >
          <img
            :src="require(`@/assets/categoriesPhoto/${card.photo}.png`)"
            alt="categorie image"
          />
          <h1>{{ card.title }}</h1>
        </div>
      </div>
      <div class="custom-arrows">
        <button
          :disabled="isFirstSlide"
          class="arrow prev"
          :class="{ disabled: isFirstSlide }"
          @click.stop="prevSlide"
        >
          <SvgIcon name="arrowLeft" width="24px" height="24px" />
        </button>
        <button
          :disabled="isLastSlide"
          :class="{ disabled: isLastSlide }"
          class="arrow next"
          @click.stop="nextSlide"
        >
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
      activeIndex: 0,
      numVisibleElements: 0,
      isAnimating: false,
      isFirstSlide: true,
      isLastSlide: false,
    };
  },
  computed: {
    visibleCategories() {
      return this.categoriesData.slice(
        this.activeIndex,
        this.activeIndex + this.numVisibleElements
      );
    },
  },
  methods: {
    prevSlide() {
      this.isAnimating = true;
      const newIndex = this.activeIndex - this.numVisibleElements;
      this.activeIndex = Math.max(newIndex, 0);
      setTimeout(() => {
        this.isAnimating = false;
      }, 300);

      this.isFirstSlide = this.activeIndex === 0;
      this.isLastSlide = false;
    },
    nextSlide() {
      this.isAnimating = true;
      const newIndex = this.activeIndex + this.numVisibleElements;
      this.activeIndex = Math.min(
        newIndex,
        this.categoriesData.length - this.numVisibleElements
      );
      setTimeout(() => {
        this.isAnimating = false;
      }, 300);

      this.isFirstSlide = false;
      this.isLastSlide =
        this.activeIndex >=
        this.categoriesData.length - this.numVisibleElements;
    },

    updateVisibleElements() {
      const width = window.innerWidth;
      this.numVisibleElements = Math.min(
        width <= 1270 ? (width <= 1060 ? (width <= 660 ? 2 : 3) : 5) : 6,
        this.categoriesData.length
      );

      this.isFirstSlide = this.activeIndex === 0;
      this.isLastSlide =
        this.activeIndex >=
        this.categoriesData.length - this.numVisibleElements;
    },
  },
  mounted() {
    this.updateVisibleElements();
  },
};
</script>

<style src="./CustomCarousel.scss" scoped lang="scss"></style>
