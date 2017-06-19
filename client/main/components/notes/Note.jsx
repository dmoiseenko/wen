import React from 'react';
import PropTypes from 'prop-types';


export default function Note({ note }) {
  return (
    <li>
      <h4>
        {note.text}
      </h4>
    </li>
  );
}

Note.propTypes = {
  note: PropTypes.object.isRequired
};
