import { SubscriptionClient } from 'subscriptions-transport-ws';
import url from 'url';


const parsedUrl = url.parse(window.location.href);
const protocol = process.env.NODE_ENV === 'production' ? 'wss' : 'ws';

const subscriptionClient = new SubscriptionClient(
  `${protocol}://${parsedUrl.host}/subscriptions/`,
  {
    reconnect: true
  }
);

export default subscriptionClient;
