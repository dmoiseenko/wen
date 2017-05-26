import React from 'react';
import ReactDOM from 'react-dom';

import App from './Main.client';
import apolloClient from './core/apolloClient';
import store from './redux/store';


const render = () => {
  ReactDOM.render(
    <App
      apolloClient={apolloClient}
      store={store}
    />,
    document.getElementById('react-app')
  );
};

render();

if (module.hot) {
  module.hot.accept('./Main.client', () => {
    render();
  });
}
