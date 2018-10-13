const path = require('path')

module.exports = {
  devtool: 'eval-source-map',
  entry: './src/index',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public', 'js')
  },
  target: 'web'
}
