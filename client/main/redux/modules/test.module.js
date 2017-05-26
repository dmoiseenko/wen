import { createAction } from 'redux-act';

// import { takeEvery } from 'redux-saga';
// import { put, call } from 'redux-saga/effects';

export const loadUsersList = createAction(
  'load users list'
);

export const reducer = {
  [loadUsersList]: state => ({
    ...state,
    deeper: {
      ...state.deeper,
      name: 'asdasd'
    }
  })
};
