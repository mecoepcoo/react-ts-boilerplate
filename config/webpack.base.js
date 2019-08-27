const path = require('path');
const DIST_PATH = path.resolve(__dirname, '../dist');

module.exports = () => {
  return {
    entry: {
      app: './src/index.js'
    },
    output: {
      filename: 'js/bundle.js',
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
                      '@babel/preset-env',
                      '@babel/preset-react',  // jsx支持
                    ]
                  }
                }
              ]
            },
            {
              test: /\.(less|css)$/,
              use: [
                { loader: 'style-loader' },
                { loader: 'css-loader' },
              ]
            },
            {
              test: /\.(jpg|jpeg|bmp|svg|png|webp|gif)$/,
              loader: 'url-loader',
              options: {
                limit: 8 * 1024,
                name: '[name].[hash:8].[ext]',
              }
            }
          ]
        }
      ]
    },
    resolve: {
      extensions: [".js", ".json", ".jsx"]
    },
  };
};
