const { RedisPubSub } = require('graphql-redis-subscriptions');

const config = require('../../common/config');

const pubsub = new RedisPubSub({
  connection: {
    host: config.redis.host,
    port: config.redis.port,
    retry_strategy: options => Math.max(options.attempt * 100, 3000)
  }
});

module.exports.publish = subscription => (message) => {
  pubsub.publish(subscription, message);

  return message;
};

module.exports.pubsub = pubsub;
