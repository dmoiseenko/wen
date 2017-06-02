import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import Input from '../../../common/components/input/Input';
import { emailField, passwordField } from '../../core/form.constants';


export default function LoginForm({ signIn }) {
  function handleSubmit(event) {
    event.preventDefault();
    signIn();
  }

  return (
    <form className="login-form">
      <Field
        name={emailField}
        component={Input}
        placeholder="mail@example.com"
        type="text"
        inputClassName="email-input"
        iconClassName="fa fa-user"
      />
      <Field
        name={passwordField}
        component={Input}
        placeholder="●●●●●●●"
        type="text"
        inputClassName="password-input"
        iconClassName="fa fa-lock"
      />
      <p className="control login">
        <button
          type="submit"
          onClick={handleSubmit}
          className="button is-success is-outlined is-large is-fullwidth"
        >
          Login
        </button>
      </p>
    </form>
  );
}

LoginForm.propTypes = {
  signIn: PropTypes.func.isRequired
};
