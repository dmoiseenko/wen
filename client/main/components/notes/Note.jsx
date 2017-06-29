import React from 'react';
import PropTypes from 'prop-types';

import DeleteNoteButtomContainer from './DeleteNoteButton.container';


export default function Note({ note }) {
  return (
    <li className="block">
      <h5>{note.text}</h5>
      <DeleteNoteButtomContainer noteId={note.id} />
    </li>
  );
}

Note.propTypes = {
  note: PropTypes.object.isRequired
};
