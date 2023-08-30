import BlogCard from "@/components/BlogCard/BlogCard.vue";
export default {
  components: { BlogCard },
  data() {
    return {
      blogs: [
        {
          image: "blog_1.png",
          title:
            "Cras nisl dolor, accumsan et metus sit amet, vulputate condimentum dolor.",
          description:
            "Maecenas scelerisque, arcu quis tempus egestas, ligula diam molestie lectus, tincidunt malesuada arcu metus posuere metus.",
          author: "Kristin",
          createDate: "19 Dec, 2013",
          totalComment: 453,
        },
        {
          image: "blog_2.png",
          title:
            "Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae. ",
          description:
            "Mauris scelerisque odio id rutrum volutpat. Pellentesque urna odio, vulputate at tortor vitae, hendrerit blandit lorem. ",
          author: "Robert",
          createDate: "28 Nov, 2015",
          totalComment: 738,
        },
        {
          image: "blog_3.png",
          title:
            "Curabitur massa orci, consectetur et blandit ac, auctor et tellus.",
          description:
            "Pellentesque vestibulum lorem vel gravida aliquam. Morbi porta, odio id suscipit mattis, risus augue condimentum purus.",
          author: "Arlene",
          createDate: "9 May, 2014",
          totalComment: 826,
        },
      ],
    };
  },
};
