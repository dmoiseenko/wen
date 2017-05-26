import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import Input from '../../../common/components/input/Input';
import { emailField, passwordField } from '../../core/form.constants';


export default function LoginForm({ signIn }) {
  function handleSubmit(event) {
    event.preventDefault();
    signIn();
  }

  return (
    <form className="box">
      <Field
        name={emailField}
        component={Input}
        label="Email"
        placeholder="Email"
        type="text"
      />
      <Field
        name={passwordField}
        component={Input}
        type="password"
        label="Password"
        placeholder="Password"
      />
      <div className="field">
        <p className="control">
          <button
            type="submit"
            className="button is-primary"
            onClick={handleSubmit}
          >
            Sign In
          </button>
        </p>
      </div>
    </form>
  );
}

LoginForm.propTypes = {
  signIn: PropTypes.func.isRequired
};
