// const multipleHtmlPlugins = require('./webpack.config.html.multiplo');
const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  context: path.resolve(__dirname, ".."),

  cache: {
    type: "filesystem",
    allowCollectingMemory: false,
  },
  devServer: {
    // IP DA MÁQUINA DE DESENVOLVIMENTO (OU LOCALHOST OU 127.0.0.1 OU IP REAL NA REDE LOCAL)
    // allterar tambem o nome do arquivo de configuracao
    host: "127.0.0.1",
    port: 12345, // Porta
    // http2: true, // Habilita o protocolo HTTP/2

    server: {
      type: "https",
    },
    compress: true, // <-- enable gzip compression
    hot: false, // Habilita hot module replacement
    liveReload: true, // Habilita live reload
    magicHtml: false, // Habilita o magic html

    watchFiles: ["../src/**/*"], // <--- não está funcionando
    static: [],
    // stats: { chunks: false },
  },
  watchOptions: {
    ignored: /node_modules/,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
    ],
  },
});
