<template>
  <div class="wrapper">
    <div class="app__container">
      <div
        class="feature__block"
        v-for="(el, index) in featuresSiteData"
        :key="index"
      >
        <SvgIcon :name="el.icon" width="40px" height="40px" />
        <div class="content">
          <h4 class="title">{{ el.title }}</h4>
          <p class="text">{{ el.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./FeaturesSite.ts"></script>
<style src="./FeaturesSite.scss" lang="scss" scoped></style>