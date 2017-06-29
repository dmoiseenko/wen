import { all } from 'redux-saga/effects';

import forkAutoRestarting from '../../common/saga/forkAutoRestarting';
import * as logoutModule from './modules/logout.module';
import * as notificationModule from './modules/notifications.module';
import * as newNoteModule from './modules/newNote.module';
import * as deleteNoteModule from './modules/deleteNote.module';


export default function* root() {
  yield all([
    forkAutoRestarting(logoutModule.watchLogoutSaga),
    forkAutoRestarting(notificationModule.watchSendNotification),
    forkAutoRestarting(newNoteModule.watchAddNoteSaga),
    forkAutoRestarting(deleteNoteModule.watchDeleteNoteSaga)
  ]);
}
