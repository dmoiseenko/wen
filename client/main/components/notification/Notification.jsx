import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';


function Notification({
  description,
  remove,
  id,
  isError,
  isEvent
}) {
  function handleClick() {
    remove(id);
  }

  const notificationClassName = classNames(
    'notification',
    { 'is-warning': isError },
    { 'is-primary': isEvent }
  );

  return (
    <div
      className={notificationClassName}
      onClick={handleClick}
    >
      {description}
    </div>
  );
}

Notification.propTypes = {
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired,
  isError: PropTypes.bool.isRequired,
  isEvent: PropTypes.bool.isRequired
};

export default Notification;
