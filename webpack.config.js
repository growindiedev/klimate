const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "inline-source-map", // figures out root file of the error
  output: {
    filename: "main.[contentHash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true, //cleans the old files in dist dir on each build
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "src/icons", to: "icons" }],
    }),

    new Dotenv(),
    // using this plugin to automatically generate index.html
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    //static: "./dist", //rebuilds when anything changes
  },
  // optimization: {
  //   runtimeChunk: "single",
  // },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },

      {
        test: /\.html$/i,
        use: [
          {
            loader: "html-loader",
            //this solve the image loading problem in html files
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
