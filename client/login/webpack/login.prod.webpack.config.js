const path = require('path');

const webpackConfig = require('../../common/webpack/webpack.prod.config.js');


module.exports = webpackConfig(
  {
    entry: {
      app: [
        '../Login.client.entry.jsx'
      ]
    },
    output: {
      path: path.join(__dirname, '../../../public/login'),
      publicPath: '/login/',
      filename: 'js/[name]-[chunkhash].js'
    },
    context: __dirname
  }
);
