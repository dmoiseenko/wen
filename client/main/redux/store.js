import { applyMiddleware, createStore } from 'redux';
import { reducer as form } from 'redux-form';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducer';
import { initial as initialState } from './state';
import apolloClient from '../core/apolloClient';
import sagas from './sagas';


const sagaMiddleware = createSagaMiddleware();
let middleware = applyMiddleware(
  apolloClient.middleware(),
  sagaMiddleware
);

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
  initialState,
  middleware
);

const saga = sagaMiddleware.run(sagas);
saga.done.catch((error) => {
  console.warn(error); // eslint-disable-line no-console
});
