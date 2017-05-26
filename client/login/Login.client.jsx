import React from 'react';
import PropTypes from 'prop-types';
import { AppContainer } from 'react-hot-loader'; // eslint-disable-line import/no-extraneous-dependencies
import { Provider } from 'react-redux';

import '../scss/styles.scss';
import LoginPage from './components/page/LoginPage';


export default function LoginClient({ store }) {
  return (
    <AppContainer>
      <Provider store={store}>
        <LoginPage />
      </Provider>
    </AppContainer>
  );
}

LoginClient.propTypes = {
  store: PropTypes.object.isRequired
};
