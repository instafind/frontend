module.exports = {
  entry: "./src/entry.js",
  output: {
    path: __dirname,
    filename: "./dist/bundle.js"
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.html']
  },
  module: {
    loaders: [
      { test: /\.html$/, loader: 'html-loader' }
    ]
  }
};
