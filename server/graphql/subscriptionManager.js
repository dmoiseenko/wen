const { SubscriptionManager } = require('graphql-subscriptions');

const schema = require('./schema');
const pubsub = require('./pubsub');


const subscriptionManager = new SubscriptionManager({
  schema,
  pubsub,
  setupFunctions: {
    noteAdded: () => ({
      noteAdded: {}
    })
  }
});


module.exports = subscriptionManager;
