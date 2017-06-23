import { testSaga } from 'redux-saga-test-plan';
import { delay } from 'redux-saga';

import {
  addNotification,
  removeNotification,
  sendNotification,
  sendNotificationSaga,
  watchSendNotification
} from '../notifications.module';
import * as notification from '../../../core/notifications';


test('sendNotificationSaga should have proper composition', () => {
  const payload = { description: 'event description', type: 'event type' };
  const newNotification = {
    id: 1
  };

  testSaga(sendNotificationSaga, { payload })
    .next()
    .call(
      notification.compose,
      'event description',
      'event type'
    )
    .next(newNotification)
    .put(addNotification(newNotification))
    .next()
    .call(delay, notification.notificationTimeout)
    .next()
    .put(removeNotification(newNotification.id))
    .next()
    .isDone();
});

test('watchSendNotification should have proper composition', () => {
  testSaga(watchSendNotification)
    .next()
    .takeEveryEffect(sendNotification.getType(), sendNotificationSaga)
    .finish()
    .isDone();
});

