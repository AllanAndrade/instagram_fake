/**
 * gif
 */

// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  test: /\.(jpe?g|png|gif|svg)$/i,
  use: [
    {
      loader: "url-loader",
      options: {
        outputPath: "img",
        encoding: "base64",
        limit: false,
        mimetype: false,
      },
    },
  ],
};
