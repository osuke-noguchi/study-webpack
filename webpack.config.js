const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'none',
  entry: './src/app.js', //全てのファイルの基準となるファイルを指定する
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  }
}
