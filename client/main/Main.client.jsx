import React from 'react';
import PropTypes from 'prop-types';
import { AppContainer } from 'react-hot-loader'; // eslint-disable-line import/no-extraneous-dependencies
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom';

import '../scss/styles.scss';
import Entry from './components/pages/Entry';


export default function AppClient({ apolloClient, store }) {
  return (
    <AppContainer>
      <ApolloProvider client={apolloClient} store={store}>
        <BrowserRouter>
          <Entry />
        </BrowserRouter>
      </ApolloProvider>
    </AppContainer>
  );
}

AppClient.propTypes = {
  apolloClient: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};
