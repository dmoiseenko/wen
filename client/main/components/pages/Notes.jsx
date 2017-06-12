import React from 'react';

import NotesContainer from '../notes/Notes.container';
import NoteFormContainer from '../notes/NoteForm.container';


export default () => (
  <div className="section">
    <div className="container">
      <h1 className="title is-2">
        Notes
      </h1>
      <NotesContainer />
      <NoteFormContainer />
    </div>
  </div>
);
