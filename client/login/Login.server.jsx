import React from 'react';
import { Provider } from 'react-redux';

import LoginPage from './components/page/LoginPage';
import store from './redux/store';


export default function LoginServer() {
  return (
    <Provider store={store}>
      <LoginPage />
    </Provider>
  );
}
