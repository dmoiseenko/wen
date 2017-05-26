import { ApolloClient, createNetworkInterface } from 'react-apollo';
import { addGraphQLSubscriptions } from 'subscriptions-transport-ws';

import subscriptionClient from './subscriptionClient';


const networkInterface = createNetworkInterface({
  uri: '/api/graphql',
  opts: {
    credentials: 'same-origin'
  }
});

const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
  networkInterface,
  subscriptionClient
);

const client = new ApolloClient({
  networkInterface: networkInterfaceWithSubscriptions
});

export default client;
