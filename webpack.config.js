const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: "./client/index.js",

  output: {
    path: path.join(__dirname, "./build/"),
    filename: "bundle.js",
    publicPath: "/build",
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: "./client/index.html",
    }),
  ],

  devServer: {
    static: {
      directory: path.resolve(__dirname, "/client/index.html"),
    },
    port: 8080,
    proxy: {
      "/**": "http://localhost:3000",
    },
    watchFiles: ["client/**"],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },

      {
        test: /.(css|scss)$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },

      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: ["file-loader"],
      },
    ],
  },
};
