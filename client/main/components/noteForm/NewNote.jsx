import React from 'react';
import PropTypes from 'prop-types';


export default function NewNote({ addNote }) {
  function handleClick(e) {
    e.preventDefault();
    addNote();
  }

  return (
    <p className="control">
      <button
        type="submit"
        className="button is-medium is-primary"
        onClick={handleClick}
      >
        Add Note
      </button>
    </p>
  );
}

NewNote.propTypes = {
  addNote: PropTypes.func.isRequired,
};
