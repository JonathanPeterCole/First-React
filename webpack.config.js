const path = require('path')

module.exports = {
  devtool: 'eval-source-map',
  entry: './client/index',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public', 'js')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  target: 'web'
}
