<template>
  <div class="blog-section__wrapper">
    <div class="app__container">
      <h1 class="title">Latest News</h1>
      <div class="blogs__container">
        <blog-card v-for="(blog, index) in blogs" :key="index" :blog="blog" />
      </div>
    </div>
  </div>
</template>

<script src="./BlogSection.ts"></script>

<style src="./BlogsSection.scss" lang="scss" scoped></style>