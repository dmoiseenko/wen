import { testSaga } from 'redux-saga-test-plan';

import { deleteNote, deleteNoteSaga, watchDeleteNoteSaga } from '../deleteNote.module';
import { sendNotification } from '../notifications.module';
import { NOTIFICATION_ERROR } from '../../../core/notification.constants';


test('deleteNoteSaga', () => {
  const mutate = jest.fn();

  testSaga(deleteNoteSaga, { payload: { mutate, noteId: 'noteId' } })
    .next()
    .call(mutate, { variables: { id: 'noteId' } })
    .next()
    .isDone();
});

test('addNoteSaga should put error if mutation was not successful', () => {
  const mutate = jest.fn();

  testSaga(deleteNoteSaga, { payload: { mutate, noteId: 'noteId' } })
    .next()
    .call(mutate, { variables: { id: 'noteId' } })
    .throw()
    .put(sendNotification('New note has not been deleted', NOTIFICATION_ERROR))
    .next()
    .isDone();
});

test('watchDeleteNoteSaga should have proper composition', () => {
  testSaga(watchDeleteNoteSaga)
    .next()
    .takeEveryEffect(deleteNote.getType(), deleteNoteSaga)
    .finish()
    .isDone();
});

