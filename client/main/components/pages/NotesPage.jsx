import React from 'react';

import NotesContainer from '../notes/Notes.container';
import NoteFormContainer from '../noteForm/NoteForm.container';


export default () => (
  <div className="container">
    <div className="content">
      <h1>Add New Note</h1>
    </div>
    <NotesContainer />
    <NoteFormContainer />
  </div>
);
