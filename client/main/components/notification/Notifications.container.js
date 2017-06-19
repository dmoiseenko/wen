import { connect } from 'react-redux';

import Notifications from './Notifications';


export function mapStateToProps(state) {
  return {
    notifications: state.notifications,
  };
}

export default connect(mapStateToProps)(Notifications);
