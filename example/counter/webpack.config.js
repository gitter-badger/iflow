const aliasWebpackPlugin = require('alias-webpack-plugin')

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js|\.jsx/,
        exclude: /node_modules/,
        use: 'babel-loader',
      }
    ]
  },
  resolve: {
    alias: {
      ...aliasWebpackPlugin.default(),
    },
  }
}