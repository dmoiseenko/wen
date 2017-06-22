import { all } from 'redux-saga/effects';

import forkAutoRestarting from '../../common/saga/forkAutoRestarting';
import { watchSignInSaga } from './modules/signIn/signIn.module.saga';


export default function* root() {
  yield all([
    forkAutoRestarting(watchSignInSaga)
  ]);
}
