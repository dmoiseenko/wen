import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import LoginForm from './LoginForm';
import { signInForm } from '../../core/form.constants';
import { signIn } from '../../redux/modules/signIn/signIn.module';


export const mapDispatchToProps = {
  signIn
};

export const form = {
  form: signInForm
};

export default connect(null, mapDispatchToProps)(reduxForm(form)(LoginForm));
