import { sendNotification } from './notifications.module';
import { NOTIFICATION_EVENT } from '../../core/notification.constants';


export default dispatch => (prev, { subscriptionData }) => {
  if (!subscriptionData.data) {
    return prev;
  }

  const newNote = subscriptionData.data.noteAdded;

  dispatch(sendNotification('New note has been added', NOTIFICATION_EVENT));

  return {
    ...prev,
    notes: [
      ...prev.notes,
      newNote
    ]
  };
};
