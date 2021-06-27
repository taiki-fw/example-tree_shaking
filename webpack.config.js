const path = require("path");

const mode = process.env.WEBPACK_ENV || "development";

module.exports = {
  mode,
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  optimization: {
    usedExports: mode === "production",
  },
};
