import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider } from 'react-apollo';
import { StaticRouter } from 'react-router';
import { createStore } from 'redux';

import Entry from './components/pages/Entry';


export default function AppServer({ apolloClient, location, context }) {
  return (
    <ApolloProvider client={apolloClient} store={createStore(() => {})}>
      <StaticRouter
        location={location}
        context={context}
      >
        <Entry />
      </StaticRouter>
    </ApolloProvider>
  );
}

AppServer.propTypes = {
  apolloClient: PropTypes.object.isRequired,
  location: PropTypes.string.isRequired,
  context: PropTypes.object.isRequired
};
