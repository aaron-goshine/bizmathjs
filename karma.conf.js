var webpack = require('webpack');
module.exports = function (config) {
  config.set({
    browsers: [ 'Chrome' ],
    singleRun: false,
    frameworks: [ 'jasmine' ],
    files: [
      'tests.webpack.js'
    ],
    preprocessors: {
      'tests.webpack.js': [ 'webpack', 'sourcemap' ]
    },
    reporters: [ 'dots' ],
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          { test: /\.js/, exlude: /node_modules/, loader: 'babel-loader' }
        ]
      }
    },
    webpackServer: {
      noInfo: true
    }
  });
};
