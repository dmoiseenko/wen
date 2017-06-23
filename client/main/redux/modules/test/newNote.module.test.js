import { testSaga } from 'redux-saga-test-plan';
import { reset, startSubmit, stopSubmit } from 'redux-form';

import { addNote, addNoteSaga, watchAddNoteSaga } from '../newNote.module';
import { noteTextSelector } from '../../selector/noteForm.selector';
import { noteForm, textField } from '../../../core/note.form.constant';
import { sendNotification } from '../notifications.module';
import { NOTIFICATION_ERROR } from '../../../core/notification.constants';


test('addNoteSaga should reset form if mutation was successful', () => {
  const mutate = jest.fn();

  testSaga(addNoteSaga, { payload: mutate })
    .next()
    .put(startSubmit(noteForm))
    .next()
    .select(noteTextSelector)
    .next('note text')
    .call(mutate, { variables: { text: 'note text' } })
    .next()
    .put(reset(noteForm))
    .next()
    .isDone();
});

test('addNoteSaga should reset form put error if mutation was not successful', () => {
  const mutate = jest.fn();

  testSaga(addNoteSaga, { payload: mutate })
    .next()
    .put(startSubmit(noteForm))
    .next()
    .select(noteTextSelector)
    .next('note text')
    .call(mutate, { variables: { text: 'note text' } })
    .throw({ message: 'error message' })
    .put(stopSubmit(noteForm, {
      [textField]: 'error message'
    }))
    .next()
    .put(sendNotification('New note has not been added', NOTIFICATION_ERROR))
    .next()
    .isDone();
});

test('watchLogoutSaga should have proper composition', () => {
  testSaga(watchAddNoteSaga)
    .next()
    .takeEveryEffect(addNote.getType(), addNoteSaga)
    .finish()
    .isDone();
});

