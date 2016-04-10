module.exports = {
  entry: __dirname + "/client.js",
  output: {
    path: __dirname + '/public',
    filename: 'client-bundle.js'
  },
  target: "web",
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel",
      }
    ]
  }
};
