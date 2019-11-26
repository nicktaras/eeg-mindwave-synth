// webpack.config.js
module.exports = {
  entry: './public/app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader'
        ],
      }
    ],
  }
}
