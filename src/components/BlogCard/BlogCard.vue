<template>
  <div class="blog__wrapper">
    <img
      class="image"
      alt="blog image"
      :src="require(`@/assets/blogs/${blog.image}`)"
    />
    <div class="blog-items">
      <div class="item">
        <SvgIcon name="author" width="24px" height="24px" />
        <span>{{ blog.author }}</span>
      </div>
      <div class="item">
        <SvgIcon name="date" width="24px" height="24px" />
        <span>{{ blog.createDate }}</span>
      </div>
      <div class="item">
        <SvgIcon name="comment" width="24px" height="24px" />
        <span>{{ blog.totalComment }}</span>
      </div>
    </div>
    <h1 class="title-blog">
      {{ blog.title }}
    </h1>
    <p class="text-blog">
      {{ blog.description }}
    </p>
    <navigate-button>Read more</navigate-button>
  </div>
</template>

<script>
export default {
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style src="./BlogCard.scss" lang="scss" scoped>
</style>