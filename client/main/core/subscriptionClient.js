import { SubscriptionClient } from 'subscriptions-transport-ws';


const subscriptionClient = new SubscriptionClient(`wss://${API_URL}/subscriptions/`, {
  reconnect: true
});

export default subscriptionClient;
