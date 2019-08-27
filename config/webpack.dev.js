const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = merge.smart(baseWebpackConfig, {
  mode: 'development',
  output: {
    filename: 'js/[name].[hash:8].js',
  },
  module: {
    rules: [
      {
        oneOf: []
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      minify: {
        html5: true
      },
      hash: false
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    port: 8080,
    host: 'localhost',
    contentBase: path.join(__dirname, '../public'),
    watchContentBase: true,
    publicPath: '/',
    compress: true,
    historyApiFallback: true,
    hot: true,
    quiet: true,
    clientLogLevel: 'none',
    open: true,
    proxy: {}
  }
});
