import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { compose } from 'recompose';

import NoteForm from './NoteForm';
import { noteForm } from '../../core/note.form.constant';


const form = {
  form: noteForm,
  initialValues: {
    textField: ''
  }
};

export default compose(
  connect(),
  reduxForm(form)
)(NoteForm);
