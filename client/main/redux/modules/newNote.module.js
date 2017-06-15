import { reset, startSubmit, stopSubmit } from 'redux-form';

import { noteForm, textField } from '../../core/note.form.constant';
import { sendNotification } from './notifications.module';
import { NOTIFICATION_ERROR } from '../../core/notification.constants';


export default ({ mutate, ownProps: { noteText, dispatch } }) => async () => {
  try {
    dispatch(startSubmit(noteForm));

    await mutate({ variables: { text: noteText } });

    dispatch(reset(noteForm));
  } catch (error) {
    dispatch(stopSubmit(noteForm, {
      [textField]: error.message
    }));

    dispatch(sendNotification('New note has not been added', NOTIFICATION_ERROR));
  }
};
