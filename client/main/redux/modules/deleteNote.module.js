import { createAction } from 'redux-act';
import { put, call, takeEvery } from 'redux-saga/effects';

import { sendNotification } from './notifications.module';
import { NOTIFICATION_ERROR } from '../../core/notification.constants';


export const deleteNote = createAction(
  'delete note',
  (mutate, noteId) => ({ mutate, noteId })
);

export function* deleteNoteSaga({ payload: { mutate, noteId } }) {
  try {
    yield call(mutate, { variables: { id: noteId } });
  } catch (error) {
    yield put(sendNotification('New note has not been deleted', NOTIFICATION_ERROR));
  }
}

export function* watchDeleteNoteSaga() {
  yield takeEvery(deleteNote.getType(), deleteNoteSaga);
}
