import { connect } from 'react-redux';

import Notifications from './Notifications';
import * as selector from '../../redux/selector/notification.selector';


export function mapStateToProps(state) {
  return {
    notifications: selector.notifications(state),
  };
}

export default connect(mapStateToProps)(Notifications);
