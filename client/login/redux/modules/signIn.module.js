import { createAction } from 'redux-act';
import { put, call, select, takeEvery } from 'redux-saga/effects';

import * as api from '../../core/api';
import * as signInSelector from '../../core/signIn.selector';


export const signIn = createAction(
  'sign in'
);

export const signInSuccess = createAction(
  'sign in success'
);

export const signInFailure = createAction(
  'sign in failure'
);

export const reducer = {
  [signIn]: state => ({
    ...state,
    signIn: {
      ...state.signIn,
      loading: true,
      loaded: false,
      error: ''
    }
  }),

  [signInSuccess]: state => ({
    ...state,
    signIn: {
      ...state.signIn,
      loading: false,
      loaded: true
    }
  }),

  [signInFailure]: (state, error) => ({
    ...state,
    signIn: {
      ...state.signIn,
      loading: false,
      loaded: false,
      error
    }
  })
};

export function* signInSaga() {
  const state = yield select();
  const email = yield call(signInSelector.email, state);
  const password = yield call(signInSelector.password, state);

  const { response, error } = yield call(api.login, { email, password });

  if (response) {
    yield put.resolve(signInSuccess(response));
    window.location = '/';
  } else {
    yield put.resolve(signInFailure(error));
  }
}

export function* watchSignInSaga() {
  yield takeEvery(signIn.getType(), signInSaga);
}
