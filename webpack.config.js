module.exports = {
  entry: "./src/entry.js",
  devtool: 'inline-source-map',
  output: {
    path: __dirname,
    filename: "../backend/public/bundle.js",
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.html', '.scss']
  },
  module: {
    loaders: [
      { test: /\.html$/, loader: 'html-loader' },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
};
