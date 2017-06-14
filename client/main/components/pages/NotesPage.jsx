import React from 'react';

import NotesContainer from '../notes/Notes.container';
import NoteFormContainer from '../notes/NoteForm.container';


export default () => (
  <div className="container">
    <h1 className="subtitle is-2">
      Add New Note
    </h1>
    <NotesContainer />
    <NoteFormContainer />
  </div>
);
