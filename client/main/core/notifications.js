import uuid from 'uuid';

export {
  NOTIFICATION_ERROR,
  NOTIFICATION_EVENT,
} from './notification.constants';


export const notificationTimeout = 5000;

export function compose(description, type) {
  return {
    id: uuid.v4(),
    description,
    type,
  };
}

export function getNotificationIndex(notifications, id) {
  return notifications.findIndex(notification => notification.id === id);
}
