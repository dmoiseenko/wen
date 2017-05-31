import { all } from 'redux-saga/effects';

import forkAutoRestarting from '../../common/saga/forkAutoRestarting';
import * as signInModule from './modules/signIn.module';


export default function* root() {
  yield all([
    forkAutoRestarting(signInModule.watchSignInSaga)
  ]);
}
