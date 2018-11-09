const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  context: __dirname,
  mode: "development",
  entry: "./src/main.tsx",
  output: {
    path: __dirname + "/docs",
    filename: "index.js"
  },
  resolve: {
    modules: ["node_modules", "src"],
    extensions: [".js", ".ts", ".tsx"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["awesome-typescript-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      filename: "index.html",
      minify: {
        collapseWhitespace: true
      }
    })
  ]
};
