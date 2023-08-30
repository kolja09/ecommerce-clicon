const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");

module.exports = {
  transpileDependencies: true,
  runtimeCompiler: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`,
      },
    },
  },
  configureWebpack: {
    plugins: [new SpriteLoaderPlugin()],
  },
  chainWebpack: (config) => {
    config.module
      .rule("sprite-loader")
      .test(/\.svg$/)
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        extract: true,
        publicPath: "/",
        spriteFilename: "icons-sprite.svg",
      })
      .end();
  },
};
