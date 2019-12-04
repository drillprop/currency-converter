const common = require('./webpack.common');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(common, {
  mode: 'production',
  optimization: {
    minimize: true
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 30
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [new CleanWebpackPlugin()]
});
