import { createAction } from 'redux-act';
import { call, takeEvery } from 'redux-saga/effects';

import * as api from '../../core/api';


export const logout = createAction(
  'log out'
);

export function navigateTo(url) {
  location = url;
}

export function* logoutSaga() {
  yield call(api.logout);
  yield call(navigateTo, '/');
}

export function* watchLogoutSaga() {
  yield takeEvery(logout.getType(), logoutSaga);
}
