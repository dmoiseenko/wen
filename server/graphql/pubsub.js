const { RedisPubSub } = require('graphql-redis-subscriptions');

const config = require('../../common/config');

const pubSub = new RedisPubSub({
  connection: {
    host: config.redis.host,
    port: config.redis.port,
    retry_strategy: options => Math.max(options.attempt * 100, 3000)
  }
});

module.exports.publish = subscription => (message) => {
  pubSub.publish(subscription, message);

  return message;
};

module.exports.pubSub = pubSub;
