import React from 'react';
import ReactDOM from 'react-dom';

import store from './redux/store';
import LoginClient from './Login.client';


const render = () => {
  ReactDOM.render(
    <LoginClient store={store} />,
    document.getElementById('react-app')
  );
};

render();

if (module.hot) {
  module.hot.accept('./Login.client', () => {
    render();
  });
}
