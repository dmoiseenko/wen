import { formValueSelector } from 'redux-form';

import * as signInForm from './form.constants';


const signInFormSelector = formValueSelector(signInForm.signInForm);

export function password(state) {
  return signInFormSelector(state, signInForm.passwordField);
}

export function email(state) {
  return signInFormSelector(state, signInForm.emailField);
}
