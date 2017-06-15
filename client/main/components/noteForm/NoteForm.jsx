import React from 'react';
import { Field } from 'redux-form';

import Input from '../../../common/components/input/Input';
import { textField } from '../../core/note.form.constant';
import NewNoteContainer from './NewNote.container';


export default function NoteForm() {
  return (
    <form className="container">
      <Field
        name={textField}
        component={Input}
        placeholder="note text"
        type="text"
        iconClassName="fa fa-pencil"
      />
      <div className="field">
        <NewNoteContainer />
      </div>
    </form>
  );
}
