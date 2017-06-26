import { createAction } from 'redux-act';
import { reset, startSubmit, stopSubmit } from 'redux-form';
import { put, call, select, takeEvery } from 'redux-saga/effects';

import { noteForm, textField } from '../../core/note.form.constant';
import { noteTextSelector } from '../selector/noteForm.selector';
import { sendNotification } from './notifications.module';
import { NOTIFICATION_ERROR } from '../../core/notification.constants';


export const addNote = createAction(
  'add note',
  mutate => mutate
);

export function* addNoteSaga({ payload: mutate }) {
  try {
    yield put(startSubmit(noteForm));
    const noteText = yield select(noteTextSelector);

    yield call(mutate, { variables: { text: noteText } });

    yield put(reset(noteForm));
  } catch (error) {
    yield put(stopSubmit(noteForm, {
      [textField]: error.message
    }));

    yield put(sendNotification('New note has not been added', NOTIFICATION_ERROR));
  }
}

export function* watchAddNoteSaga() {
  yield takeEvery(addNote.getType(), addNoteSaga);
}
