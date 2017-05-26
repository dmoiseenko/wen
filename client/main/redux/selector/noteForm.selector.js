import { formValueSelector } from 'redux-form';

import { noteForm, textField } from '../../core/note.form.constant';


export const noteFromSelector = formValueSelector(noteForm);

export const noteTextSelector = state => noteFromSelector(state, textField);
