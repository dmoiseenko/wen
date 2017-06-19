import React from 'react';
import PropTypes from 'prop-types';

import NotificationContainer from './Notification.container';


function Notifications({ notifications }) {
  return (
    <div className="notifications">
      {
        notifications.map(notification =>
          <NotificationContainer
            key={notification.id}
            notification={notification}
          />,
        )
      }
    </div>
  );
}

Notifications.propTypes = {
  notifications: PropTypes.array.isRequired,
};

export default Notifications;
