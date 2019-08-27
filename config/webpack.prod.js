const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base');

const DIST_PATH = path.resolve(__dirname, '../dist');

module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  output: {
    filename: 'js/[name].[contenthash:8].js',
    path: DIST_PATH
  }
});
