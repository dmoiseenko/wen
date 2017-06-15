import { connect } from 'react-redux';

import Notification from './Notification';
import * as module from '../../redux/modules/notifications.module';
import { NOTIFICATION_ERROR, NOTIFICATION_EVENT } from '../../core/notification.constants';


export function mapStateToProps(
  state,
  {
    notification: {
      description,
      id,
      type
    }
  }
) {
  return {
    description,
    type,
    id,
    isError: type === NOTIFICATION_ERROR,
    isEvent: type === NOTIFICATION_EVENT
  };
}

export const mapDispatchToProps = {
  remove: module.removeNotification
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
