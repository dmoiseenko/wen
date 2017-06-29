import React from 'react';
import PropTypes from 'prop-types';

import DeleteNoteButtonContainer from './DeleteNoteButton.container';


export default function Note({ note }) {
  return (
    <li className="block">
      <h5>{note.text} <DeleteNoteButtonContainer noteId={note.id} /></h5>
    </li>
  );
}

Note.propTypes = {
  note: PropTypes.object.isRequired
};
