const path = require('path');

const webpackDevConfig = require('../../common/webpack/webpack.dev.config.js');


module.exports = webpackDevConfig({
  entry: {
    app: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
      '../Main.client.entry.jsx'
    ]
  },
  output: {
    path: path.join(__dirname, '../../public/main'),
    publicPath: '/',
    filename: 'js/[name].js',
    chunkFilename: 'js/[id].js'
  },
  context: __dirname,
});
