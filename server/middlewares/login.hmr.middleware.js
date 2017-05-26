const webpackMiddleware = require('koa-webpack'); // eslint-disable-line import/no-extraneous-dependencies

const loginWebpackConfig = require('../../client/login/webpack/login.dev.webpack.config.js');

module.exports = () => webpackMiddleware({
  config: loginWebpackConfig,
  dev: {
    publicPath: '/login'
  }
});
