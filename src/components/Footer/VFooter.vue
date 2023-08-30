<template>
  <div class="footer__wrapper">
    <div class="app__container">
      <div class="my-contact-info">
        <div class="logo__block">
          <SvgIcon name="footerLogo" width="48px" height="48px" />
          <span class="logo-text">CLICON</span>
        </div>
        <div class="contacts">
          <span>Customer Supports:</span>
          <span>(629) 555-0129</span>
          <span>4517 Washington Ave. Manchester, Kentucky 39495</span>
          <span>info@kinbo.com</span>
        </div>
      </div>
      <div class="links__wrapper">
        <div class="links__container">
          <h1 class="header-link">Top Category</h1>
          <ul class="list">
            <li v-for="(link, index) in topCategorieLinks" :key="index">
              <router-link to="/">
                {{ link.linkText }}
              </router-link>
            </li>
          </ul>
        </div>
        <div class="links__container">
          <h1 class="header-link">Quick links</h1>
          <ul class="list">
            <li v-for="(link, index) in quickLiks" :key="index">
              <router-link to="/">
                {{ link.linkText }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="links__tag">
        <h1 class="header-link">Popular Tag</h1>
        <ul class="tags">
          <li v-for="(tag, index) in tags" :key="index">
            <router-link to="/">
              {{ tag.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="copyright">
      Kinbo - eCommerce Template © 2021. Design by Templatecookie
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topCategorieLinks: [
        { linkText: "Computer & Laptop" },
        { linkText: "SmartPhone" },
        { linkText: "Headphone" },
        { linkText: "Accessories" },
        { linkText: "Camera & Photo" },
        { linkText: "TV & Homes" },
      ],
      quickLiks: [
        { linkText: "Shop Product" },
        { linkText: "Shoping Cart" },
        { linkText: "Wishlist" },
        { linkText: "Compare" },
        { linkText: "Track Order" },
        { linkText: "Customer Help" },
        { linkText: "About Us" },
      ],
      tags: [
        { name: "Game" },
        { name: "iPhone" },
        { name: "TV" },
        { name: "Asus Laptos" },
        { name: "Macbook" },
        { name: "SSD" },
        { name: "Graphics Card" },
        { name: "Power Bank" },
        { name: "Smart TV" },
        { name: "Speaker" },
        { name: "Tablet" },
        { name: "Microwave" },
        { name: "Samsung" },
      ],
    };
  },
};
</script>

<style src="./Footer.scss" lang="scss" scoped>
</style>