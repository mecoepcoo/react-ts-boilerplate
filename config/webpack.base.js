const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const config = require('./config');
const argv = require('yargs').argv;

const APP_PATH = path.resolve(__dirname, '../src');

const bundleAnalyzerReport = argv.report;

const webpackConfig = {
  plugins: []
};
if (bundleAnalyzerReport) {
  webpackConfig.plugins.push(new BundleAnalyzerPlugin({
    analyzerMode: 'static',
    openAnalyzer: false,
    reportFilename: path.join(config.assetsRoot, './report.html')
  }));
}

module.exports = merge(webpackConfig, {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: './src/index.tsx',
    vendor: ['react', 'react-dom'] // 不变的代码分包
  },
  output: {
    filename: 'js/[name].bundle.js',
    path: config.assetsRoot,
    publicPath: config.publicPath
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
            test: /\.(j|t)sx?$/,
            include: APP_PATH,
            use: [
              {
                loader: 'babel-loader',
                options: {
                  presets: [
                    '@babel/preset-react',  // jsx支持
                    ['@babel/preset-env', { useBuiltIns: 'usage', corejs: 2 }] // 按需使用polyfill
                  ],
                  plugins: [
                    '@babel/plugin-syntax-dynamic-import',
                    ['@babel/plugin-proposal-class-properties', { 'loose': true }] // class中的箭头函数中的this指向组件
                  ],
                  cacheDirectory: true // 加快编译速度
                }
              },
              { loader: 'awesome-typescript-loader' }
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
            test: /\.svg$/,
            use: ['@svgr/webpack']
          },
          {
            test: /\.(jpg|jpeg|bmp|png|webp|gif)$/,
            loader: 'url-loader',
            options: {
              limit: 8 * 1024,
              name: '[name].[hash:8].[ext]',
              outputPath: config.assetsDirectory,
              publicPath: config.assetsRoot
            }
          },
          {
            exclude: [/\.(js|mjs|ts|tsx|less|css|jsx)$/, /\.html$/, /\.json$/],
            loader: 'file-loader',
            options: {
              name: '[path][name].[hash:8].[ext]',
              outputPath: config.assetsDirectory,
              publicPath: config.assetsRoot
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: config.indexPath,
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
});
