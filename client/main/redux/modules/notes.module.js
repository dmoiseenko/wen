import { sendNotification } from './notifications.module';
import { NOTIFICATION_EVENT } from '../../core/notification.constants';


export const updateNoteWhenNoteAdded = dispatch => (prev, { subscriptionData }) => {
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

export const updateNoteWhenNoteDeleted = dispatch => (prev, { subscriptionData }) => {
  if (!subscriptionData.data) {
    return prev;
  }

  const deletedNote = subscriptionData.data.noteDeleted;

  const deletedIndex = prev.notes.findIndex(({ id }) => id === deletedNote.id);

  dispatch(sendNotification('Note has been deleted', NOTIFICATION_EVENT));

  return {
    ...prev,
    notes: [
      ...prev.notes.slice(0, deletedIndex),
      ...prev.notes.slice(deletedIndex + 1),
    ]
  };
};
