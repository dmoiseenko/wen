import React from 'react';

import NotesContainer from '../notes/Notes.container';
import NoteFormContainer from '../notes/NoteForm.container';


export default () => (
  <div>
    <h2>
      Notes
    </h2>
    <NotesContainer />
    <NoteFormContainer />
  </div>
);
