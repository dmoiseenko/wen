import React from 'react';
import PropTypes from 'prop-types';


export default function DeleteNoteButton({ deleteNote }) {
  function handleClick() {
    deleteNote();
  }

  return (
    <a
      className="delete is-small"
      onClick={handleClick}
    />
  );
}

DeleteNoteButton.propTypes = {
  deleteNote: PropTypes.func.isRequired,
};
