import { SubscriptionClient } from 'subscriptions-transport-ws';


const subscriptionClient = new SubscriptionClient(`ws://${API_URL}/subscriptions/`, {
  reconnect: true
});

export default subscriptionClient;
