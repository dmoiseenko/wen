import { testSaga } from 'redux-saga-test-plan';

import { logoutSaga, watchLogoutSaga, logout } from '../logout.module';
import * as api from '../../../core/api';
import { setLocation } from '../../../../common/core/location';
import * as routes from '../../../../../common/routes';


test('logoutSaga should call signInSuccessSaga if login was successful', () => {
  testSaga(logoutSaga)
    .next()
    .call(api.logout)
    .next()
    .call(setLocation, routes.home)
    .next()
    .isDone();
});

test('watchLogoutSaga should have proper composition', () => {
  testSaga(watchLogoutSaga)
    .next()
    .takeEveryEffect(logout.getType(), logoutSaga)
    .finish()
    .isDone();
});

