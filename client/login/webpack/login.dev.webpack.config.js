const path = require('path');

const webpackDevConfig = require('../../common/webpack/webpack.dev.config.js');


module.exports = webpackDevConfig({
  entry: {
    app: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=10000',
      '../Login.client.entry.jsx'
    ]
  },
  output: {
    path: path.join(__dirname, '../../../public/login'),
    publicPath: '/login',
    filename: 'js/[name].js',
    chunkFilename: 'js/[id].js'
  },
  context: __dirname
});
