const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const webpack = require('webpack');
const config = require('./config');
const getClientEnvironment = require('./env');

const env = getClientEnvironment(config.publicPath);

module.exports = merge.smart(baseWebpackConfig, {
  mode: 'development',
  output: {
    filename: 'js/[name].[hash:8].js',
    publicPath: config.publicPath
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
      template: config.indexPath,
      minify: {
        html5: true
      },
      hash: false
    }),
    new InterpolateHtmlPlugin(env.raw),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    ...config.devServer
  },
  stats: {
    colors: true,
    children: false,
    chunks: false,
    chunkModules: false,
    modules: false,
    builtAt: false,
    entrypoints: false,
    assets: false,
    version: false
  }
});
