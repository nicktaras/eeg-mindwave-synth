// webpack.config.js
module.exports = {
  entry: './public/app.js',
  output: {
    path: __dirname + '/public/dist',
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
        // use: [
        //   {
        //     loader: 'postcss-loader',
        //     options: {
        //       ident: 'postcss',
        //       plugins: [
        //         require('tailwindcss'),
        //         require('autoprefixer'),
        //       ],
        //     },
        //   },
        // ],
      }
    ],
  }
}
