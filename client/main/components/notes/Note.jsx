import React from 'react';
import PropTypes from 'prop-types';


export default function Note({ note }) {
  return (
    <li>
      <h5>
        {note.text}
      </h5>
    </li>
  );
}

Note.propTypes = {
  note: PropTypes.object.isRequired
};
