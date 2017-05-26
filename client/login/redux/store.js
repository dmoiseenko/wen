import { createStore, applyMiddleware } from 'redux';
import { reducer as form } from 'redux-form';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducers';
import rootSaga from './sagas';
import { initial as initialState } from './state';


const sagaMiddleware = createSagaMiddleware();
let middleware = applyMiddleware(sagaMiddleware);

if (process.env.NODE_ENV === 'development') {
  middleware = require('redux-devtools-extension') // eslint-disable-line
    .composeWithDevTools(middleware);
}

const combinedReducer = (state, action) =>
  ({
    ...reducer(state, action),
    form: form(state.form, action)
  });

const store = createStore(
  combinedReducer,
  {
    ...initialState
  },
  middleware
);

const saga = sagaMiddleware.run(rootSaga);
saga.done.catch((error) => {
  console.warn(error); // eslint-disable-line no-console
});

export default store;
