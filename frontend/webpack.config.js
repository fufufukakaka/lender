const webpack = require('webpack')
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
  entry: ['babel-polyfill', './src/routes.js'],
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'stage-3', 'react'],
              plugins: ['react-css-modules']
            }
          }
        ]
      },
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'eslint-loader',
            options: {
              fix: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path]___[name]__[local]___[hash:base64:5]'
            }
          }
        ]
      }
    ]
  },
  devServer: {
    inline: true,
    hot: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    disableHostCheck: true
  },
  plugins: [
    new DashboardPlugin()
  ]
}
