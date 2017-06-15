import { all } from 'redux-saga/effects';

import forkAutoRestarting from '../../common/saga/forkAutoRestarting';
import * as logoutModule from './modules/logout.module';
import * as notificationModule from './modules/notifications.module';


export default function* root() {
  yield all([
    forkAutoRestarting(logoutModule.watchLogoutSaga),
    forkAutoRestarting(notificationModule.watchSendNotification)
  ]);
}
