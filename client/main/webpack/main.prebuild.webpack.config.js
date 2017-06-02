const path = require('path');

const webpackPrebuildConfig = require('../../common/webpack/webpack.prebuild.config.js');


module.exports = webpackPrebuildConfig({
  entry: {
    html: [
      '../Main.html.jsx'
    ],
    server: [
      '../Main.server.jsx'
    ]
  },
  output: {
    path: path.join(__dirname, '../../../build/main'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].js',
    libraryTarget: 'commonjs2'
  },
  context: __dirname
});
