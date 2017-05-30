import React from 'react';
import PropTypes from 'prop-types';


export default function NewNote({ addNote, noteText }) {
  function handleClick(e) {
    e.preventDefault();
    addNote(noteText);
  }

  return (
    <p className="control">
      <button
        type="submit"
        className="button is-primary"
        onClick={handleClick}
      >
        Add Note
      </button>
    </p>
  );
}

NewNote.propTypes = {
  addNote: PropTypes.func.isRequired,
  noteText: PropTypes.string.isRequired
};
