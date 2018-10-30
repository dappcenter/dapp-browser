var path = require('path');
var webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './index.ts',
  output: {
    path: __dirname + '/build',
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      { test: /\.(ts|tsx)$/, loader: 'ts-loader' }
    ]
  },
  stats: {
    colors: true
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  devtool: 'source-map',
};
