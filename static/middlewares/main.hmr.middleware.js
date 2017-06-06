const webpackMiddleware = require('koa-webpack'); // eslint-disable-line import/no-extraneous-dependencies

const mainDevWebpackConfig = require('../../client/main/webpack/main.dev.webpack.config.js');


module.exports = () => webpackMiddleware({
  config: mainDevWebpackConfig,
  dev: {
    publicPath: '/',
    watcherOptions: {
      poll: true
    }
  }
});
