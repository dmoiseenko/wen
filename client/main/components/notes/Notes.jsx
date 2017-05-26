import React from 'react';
import PropTypes from 'prop-types';


export default function Notes({ data }) {
  return (
    <div>
      <ul>
        {
          !data.loading &&
          data.notes.map(note =>
            <div key={note.id}>
              {note.text}
            </div>)
        }
      </ul>
    </div>
  );
}

Notes.propTypes = {
  data: PropTypes.object.isRequired
};
