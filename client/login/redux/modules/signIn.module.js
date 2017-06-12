import { createAction } from 'redux-act';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import { startSubmit, stopSubmit } from 'redux-form';

import * as api from '../../core/api';
import * as signInSelector from '../../core/signIn.selector';
import * as signInForm from '../../core/form.constants';


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
      loaded: false
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

  [signInFailure]: state => ({
    ...state,
    signIn: {
      ...state.signIn,
      loading: false,
      loaded: false
    }
  })
};

export function* signInSaga() {
  const state = yield select();
  const email = yield call(signInSelector.email, state);
  const password = yield call(signInSelector.password, state);

  yield put(startSubmit(signInForm.signInForm));

  const { response, error } = yield call(api.login, { email, password });

  if (response) {
    yield put.resolve(signInSuccess(response));
    window.location = '/';
  } else {
    yield put.resolve(signInFailure(error.error));
    yield put(stopSubmit(signInForm.signInForm, {
      [signInForm.emailField]: error.error,
      [signInForm.passwordField]: error.error
    }));
  }
}

export function* watchSignInSaga() {
  yield takeEvery(signIn.getType(), signInSaga);
}
