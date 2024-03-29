const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require('vue-loader');
const { ModuleFederationPlugin } = require("webpack").container;
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const { WebpackManifestPlugin } = require('webpack-manifest-plugin');


module.exports = (env = {}) => ({
  cache: false,
  devtool: 'inline-source-map',
  optimization: {
    minimize: false,
  },
  entry: path.resolve(__dirname, "./src/main.js"),
  output: {
    publicPath: "auto",
  },
  resolve: {
    extensions: [".vue", ".jsx", ".js", ".json"],
    alias: {
      vue$: 'vue/dist/vue.common.js',
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              shadowMode: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          // process.env.NODE_ENV !== 'production'
          //     ? 'vue-style-loader'
          //     : MiniCssExtractPlugin.loader,
          {
            loader: "vue-style-loader",
            options: {
              ssrId: true,
            }
          },
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    // new WebpackManifestPlugin({
    //   publicPath: ''
    // }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      attributes: { 'data-app-from': 'ads'},
    }),
    new ModuleFederationPlugin({
      name: "counter_app",
      filename: "remoteEntry.js",
      library: { type: 'var', name: 'counter_app' },
      exposes: {
        "./myapp": "./src/initCounterApp.js",
      },
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./index.html"),
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname),
    },
    compress: true,
    port: 3001,
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  },
});
