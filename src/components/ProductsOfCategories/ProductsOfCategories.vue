<template>
  <div class="wrapper">
    <div class="app__container">
      <div
        class="categorie__block"
        v-for="(categorie, index) in productsOdCategoriesData"
        :key="index"
      >
        <h1 class="title">{{ categorie.title }}</h1>
        <div
          v-for="product in categorie.products"
          :key="product.id"
          class="product-card"
        >
          <img
            :src="require(`@/assets/productsOfCategories/${product.photo}.png`)"
          />
          <div>
            <p>{{ product.title }}</p>
            <span>${{ product.price }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./ProductsOfCategories"></script>

<style src='./ProductsOfCategories.scss' lang="scss" scoped></style>    