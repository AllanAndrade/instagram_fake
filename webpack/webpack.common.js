const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

// console.log("DIRNAME: " + path.resolve(__dirname, '/../src/typescript/')     );

const isDev = process.env.NODE_ENV === "development";
const isProd = process.env.NODE_ENV === "production";

// importa configurações de plugins
const multipleHtmlPlugins = require("./cfg_plugins/html_multiplos");

// inporta configuração de regras
const regra_typescript = require("./cfg_rules/typescript");
const regra_html = require("./cfg_rules/html");
const regra_scss = require("./cfg_rules/scss");

// exporta configurações gerais (comuns a DEV e PROD)
module.exports = {
  entry: ["./src/ts/main.ts"],

  plugins: [
    /*
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
    */
    //new MiniCssExtractPlugin(),
    //new CleanWebpackPlugin(),
  ].concat(multipleHtmlPlugins),

  resolveLoader: {
    modules: ["node_modules", path.resolve(__dirname, "loaders")],
  },

  module: {
    rules: [regra_typescript, regra_html, regra_scss],
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

  output: {
    clean: true,
    sourceMapFilename: "[name].[hash:8].map",
    chunkFilename: "[id].[hash:8].js",
    path: path.resolve(__dirname, "../dist"),
    filename: "assets/[name].bundle.js",
    assetModuleFilename: "assets/[name][ext]", // <--- Define o nome dos assets no HTML
  },
};
