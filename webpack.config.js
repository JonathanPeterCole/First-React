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
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.svg$/,
        use: ['svg-inline-loader']
      },
      {
        test: /\.(jpe?g|png|gif|ico)$/i,
        use: ['file-loader']
      }
    ]
  },
  target: 'web'
}
