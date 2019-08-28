const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const DIST_PATH = path.resolve(__dirname, '../dist');

module.exports = {
  entry: {
    app: './src/index.js',
    vendor: ['react', 'react-dom'] // 不变的代码分包
  },
  output: {
    filename: 'js/[name].bundle.js',
    path: DIST_PATH
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.(html)$/,
            loader: 'html-loader'
          },
          {
            test: /\.(js|mjs|jsx|ts|tsx)$/,
            include: path.resolve(__dirname, '../src'),
            use: [
              {
                loader: 'babel-loader',
                options: {
                  presets: [
                    '@babel/preset-react',  // jsx支持
                    ['@babel/preset-env', { useBuiltIns: 'usage', corejs: 2 }], // 按需使用polyfill
                    ['@babel/plugin-proposal-class-properties', { 'loose': true }]
                  ],
                  sourceMaps: true,
                  cacheDirectory: true
                }
              }
            ]
          },
          {
            test: /\.(less|css)$/,
            use: [
              { loader: 'style-loader' },
              {
                loader: 'css-loader',
                options: {
                  modules: false
                }
              },
              'postcss-loader',
              {
                loader: 'less-loader',
                options: { javascriptEnabled: true }
              }
            ]
          },
          {
            test: /\.(jpg|jpeg|bmp|svg|png|webp|gif)$/,
            loader: 'url-loader',
            options: {
              limit: 8 * 1024,
              name: '[name].[hash:8].[ext]',
            }
          },
          {
            exclude: [/\.(js|mjs|ts|tsx|less|css|jsx)$/, /\.html$/, /\.json$/],
            loader: 'file-loader',
            options: {
              name: '[path][name].[hash:8].[ext]',
              outputPath: 'static'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    // 清理打包目录
    new CleanWebpackPlugin(),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        // 提取公共模块
        commons: {
          chunks: 'all',
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0,
          name: 'common'
        }
      }
    },
  }
};
