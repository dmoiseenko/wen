import { createAction } from 'redux-act';
import { delay } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';

import * as notification from '../../core/notifications';


export const sendNotification = createAction(
  'send in-app notification',
  (description, type) => ({ description, type })
);

export const addNotification = createAction(
  'add in-app notification',
  newNotification => newNotification
);

export const removeNotification = createAction(
  'remove in-app notification',
  id => id
);

export const reducer = {
  [addNotification]: (state, newNotification) => ({
    ...state,
    notifications: [
      ...state.notifications,
      newNotification
    ]
  }),

  [removeNotification]: (state, id) => {
    const notifications = state.notifications;
    const index = notification.getNotificationIndex(notifications, id);

    if (index === -1) {
      return state;
    }

    return {
      ...state,
      notifications: [
        ...notifications.slice(0, index),
        ...notifications.slice(index + 1)
      ]
    };
  }
};

export function* sendNotificationSaga({ payload: { description, type } }) {
  const newNotification = yield call(
    notification.compose,
    description,
    type
  );
  yield put(addNotification(newNotification));
  yield call(delay, notification.notificationTimeout);
  yield put(removeNotification(newNotification.id));
}

export function* watchSendNotification() {
  yield takeEvery(sendNotification.getType(), sendNotificationSaga);
}

