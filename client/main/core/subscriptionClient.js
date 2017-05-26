import { SubscriptionClient } from 'subscriptions-transport-ws';

const subscriptionClient = new SubscriptionClient('ws://localhost:3000/subscriptions/', {
  reconnect: true
});

export default subscriptionClient;
