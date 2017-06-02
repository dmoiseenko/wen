const path = require('path');

const webpackProductionConfig = require('../../common/webpack/webpack.prod.config.js');


module.exports = webpackProductionConfig(
  {
    entry: {
      app: [
        '../Main.client.entry.jsx'
      ]
    },
    output: {
      path: path.join(__dirname, '../../../public/main'),
      publicPath: '/',
      filename: 'js/[name]-[chunkhash].js'
    },
    context: __dirname
  }
);
