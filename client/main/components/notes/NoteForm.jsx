import React from 'react';
import { Field } from 'redux-form';

import Input from '../../../common/components/input/Input';
import { textField } from '../../core/note.form.constant';
import NewNoteContainer from '../notes/NewNote.container';


export default function NoteForm() {
  return (
    <form className="box">
      <Field
        name={textField}
        component={Input}
        placeholder="note text"
        label="new note"
        type="text"
      />
      <div className="field">
        <NewNoteContainer />
      </div>
    </form>
  );
}
