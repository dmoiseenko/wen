import { createAction } from 'redux-act';
import { call, takeEvery } from 'redux-saga/effects';

import * as api from '../../core/api';
import { setLocation } from '../../../common/core/location';
import * as routes from '../../../../common/routes';


export const logout = createAction(
  'log out'
);

export function* logoutSaga() {
  yield call(api.logout);
  yield call(setLocation, routes.home);
}

export function* watchLogoutSaga() {
  yield takeEvery(logout.getType(), logoutSaga);
}
