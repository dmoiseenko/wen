import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider } from 'react-apollo';
import { StaticRouter } from 'react-router';
import { createStore } from 'redux';

import Index from './components/index/Index';
import { initial } from './redux/state';


export const store = createStore(
  state => state,
  {
    ...initial
  }
);

export default function AppServer({ apolloClient, location, context }) {
  return (
    <ApolloProvider
      client={apolloClient}
      store={store}
    >
      <StaticRouter
        location={location}
        context={context}
      >
        <Index />
      </StaticRouter>
    </ApolloProvider>
  );
}

AppServer.propTypes = {
  apolloClient: PropTypes.object.isRequired,
  location: PropTypes.string.isRequired,
  context: PropTypes.object.isRequired
};
