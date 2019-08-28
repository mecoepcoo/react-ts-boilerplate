const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const DIST_PATH = path.resolve(__dirname, '../dist');

module.exports = merge.smart(baseWebpackConfig, {
  mode: 'production',
  output: {
    filename: 'js/[name].[contenthash:8].js',
    path: DIST_PATH
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.(less|css)$/,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader'
              }
            ]
          },
          {
            test: /\.(jpg|jpeg|bmp|svg|png|webp|gif)$/,
            loader: 'url-loader',
            options: {
              limit: 8 * 1024,
              name: '[name].[contenthash:8].[ext]',
              outputPath: 'images'
            }
          },
          {
            exclude: [/\.(js|mjs|ts|tsx|less|css|jsx)$/, /\.html$/, /\.json$/],
            loader: 'file-loader',
            options: {
              name: '[path][name].[contenthash:8].[ext]',
              outputPath: 'static'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // 处理html
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      }
    }),
    // 清理打包目录
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css'
      // chunkFilename: '[name].[contenthash:8].chunk.css'
    })
  ],
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: true ? { map: { inline: false }} : {}
      })
    ]
  }
});
