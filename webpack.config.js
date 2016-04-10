const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style',
          'css?modules&localIdentName=[name]_[local]__[hash:base64:5]'),
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css', {
      allChunks: true
    }),
  ],
};
