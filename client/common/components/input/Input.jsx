import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


export default function Input({ meta, input, type, label, placeholder }) {
  const error = meta.touched && meta.error;

  const inputClassName = classnames('input', {
    'is-danger': error
  });

  return (
    <div className="field">
      <label className="label">
        {label}
      </label>
      <p className="control has-icon has-icon-right">
        <input
          {...input}
          className={inputClassName}
          type={type}
          placeholder={placeholder}
        />
        <span className="icon is-small">
          {
            error && <i className="fa fa-warning" />
          }
        </span>
      </p>
      {
        error && <p className="help is-danger">{meta.error}</p>
      }
    </div>
  );
}

Input.propTypes = {
  meta: PropTypes.object.isRequired,
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};
