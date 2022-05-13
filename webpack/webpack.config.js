const path = require("path");

module.exports = {
  mode: "development",
  entry: ["./src/ts/main.ts"],

  //...
  devServer: {
    static: {
      directory: path.join(__dirname, "../dist"),
    },
    compress: true,
    port: 9000,
  },

  resolve: {
    alias: {
      "@ts": path.resolve(__dirname, "../src/typescript/"),
      "@scss": path.resolve(__dirname, "../src/scss/"),
      "@img": path.resolve(__dirname, "../src/image/"),
      "@html": path.resolve(__dirname, "../src/html/"),
    },

    extensions: [".ts", ".js"], // Com isso, não é necessário informar as extensões nos requires / imports
  },

  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: "style-loader",
          },
          //MiniCssExtractPlugin.loader, // ADD CSS to CSS file
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: "css-loader",
            options: {
              sourceMap: false,
            },
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: "postcss-loader",
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: "sass-loader",
            options: {
              sourceMap: false,
            },
          },
        ],
      },
    ],
  },
};
