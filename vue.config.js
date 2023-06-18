const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});

// module.exports = vueConfig({
//   configureWebpack: {
//     resolve: { fallback: { fs: false } },
//   },
// });
