import { all } from 'redux-saga/effects';

import forkAutoRestarting from '../../common/saga/forkAutoRestarting';
import * as logoutModule from './modules/logout.module';


export default function* root() {
  yield all([
    forkAutoRestarting(logoutModule.watchLogoutSaga)
  ]);
}
