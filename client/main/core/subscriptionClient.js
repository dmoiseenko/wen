import { SubscriptionClient } from 'subscriptions-transport-ws';

import { getParsedLocationUrl } from '../../common/core/location';


const parsedUrl = getParsedLocationUrl();
const protocol = process.env.NODE_ENV === 'production' ? 'ws' : 'ws';

const subscriptionClient = new SubscriptionClient(
  `${protocol}://${parsedUrl.host}/subscriptions/`,
  {
    reconnect: true
  }
);

export default subscriptionClient;
