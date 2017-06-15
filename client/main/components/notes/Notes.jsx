import React from 'react';
import PropTypes from 'prop-types';

import Note from './Note';


export default function Notes({ notes, loading }) {
  return (
    <div className="content">
      <ul>
        {
          !loading &&
          notes.map(note =>
            (
              <Note
                key={note.id}
                note={note}
              />
            ))
        }
      </ul>
    </div>
  );
}

Notes.propTypes = {
  notes: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

Notes.defaultProps = {
  notes: [],
};
