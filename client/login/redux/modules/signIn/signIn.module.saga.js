import { call, put, select, takeEvery } from 'redux-saga/effects';
import { startSubmit, stopSubmit } from 'redux-form';

import * as api from '../../../core/api';
import * as signInSelector from '../../../core/signIn.selector';
import * as signInForm from '../../../core/form.constants';
import * as location from '../../../../common/core/location';
import * as routes from '../../../../../common/routes';
import * as module from './signIn.module';


export function* signInSuccessSaga(response) {
  yield put.resolve(module.signInSuccess(response));
  yield put(stopSubmit(signInForm.signInForm));
  yield call(location.setLocation, routes.home);
}

export function* signInFailureSaga(error) {
  yield put.resolve(module.signInFailure(error.error));
  yield put(stopSubmit(signInForm.signInForm, {
    [signInForm.emailField]: error.error,
    [signInForm.passwordField]: error.error
  }));
}

export function* getEmailAndPasswordSaga() {
  const email = yield select(signInSelector.email);
  const password = yield select(signInSelector.password);

  return { email, password };
}

export function* signInSaga() {
  const { email, password } = yield call(getEmailAndPasswordSaga);

  yield put(startSubmit(signInForm.signInForm));

  const { response, error } = yield call(api.login, { email, password });

  if (response) {
    yield call(signInSuccessSaga, response);
  } else {
    yield call(signInFailureSaga, error);
  }
}

export function* watchSignInSaga() {
  yield takeEvery(module.signIn.getType(), signInSaga);
}
