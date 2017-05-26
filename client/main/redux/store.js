import { createStore, applyMiddleware } from 'redux';
import { reducer as form } from 'redux-form';

import reducer from './reducer';
import { initial as initialState } from './state';
import apolloClient from '../core/apolloClient';


let middleware = applyMiddleware(apolloClient.middleware());

if (process.env.NODE_ENV === 'development') {
  middleware = require('redux-devtools-extension') // eslint-disable-line
    .composeWithDevTools(middleware);
}

const combinedReducer = (state, action) =>
  ({
    ...reducer(state, action),
    form: form(state.form, action),
    apollo: apolloClient.reducer()(state.apollo, action)
  });

export default createStore(
  combinedReducer,
  {
    ...initialState
  },
  middleware
);
