import React from 'react';
import PropTypes from 'prop-types';


function User({ data }) {
  return (
    <div>
      {
        data.me &&
        <div>
          {data.me.firstName} {data.me.lastName}
        </div>
      }
    </div>
  );
}

User.propTypes = {
  data: PropTypes.object.isRequired
};

export default User;
