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
      activeIndex: 0,
      numVisibleElements: 0,
    };
  },
  computed: {
    visibleCategories() {
      const result = [];
      const totalCategories = this.categoriesData.length;

      for (let i = 0; i < this.numVisibleElements; i++) {
        let index = this.activeIndex + i;

        if (index >= totalCategories) {
          index -= totalCategories;
        }

        result.push(this.categoriesData[index]);
      }

      return result;
    },
  },
  methods: {
    prevSlide() {
      this.activeIndex--;
      if (this.activeIndex < 0) {
        this.activeIndex = this.categoriesData.length - 1;
      }
    },
    nextSlide() {
      this.activeIndex++;
      if (this.activeIndex >= this.categoriesData.length) {
        this.activeIndex = 0;
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
