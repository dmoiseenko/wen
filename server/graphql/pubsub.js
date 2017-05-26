const { RedisPubSub } = require('graphql-redis-subscriptions');

const config = require('../../common/config');


module.exports = new RedisPubSub({
  connection: {
    host: config.redis.host,
    port: config.redis.port,
    retry_strategy: options => Math.max(options.attempt * 100, 3000)
  }
});
