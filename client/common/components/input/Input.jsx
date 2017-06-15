import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Label from './InputLabel';
import Icon from './InputIcon';
import InputError from './InputError';


export default function Input({
  meta,
  input,
  type,
  label,
  placeholder,
  inputClassName,
  iconClassName
}) {
  const error = meta.touched && !!meta.error;

  const className = classnames('input', inputClassName, {
    'is-danger': error
  });

  return (
    <div className="field" id={input.name}>
      <Label label={label} />
      <p className="control has-icon has-icon-right">
        <input
          {...input}
          className={className}
          type={type}
          placeholder={placeholder}
        />
        <Icon
          iconClassName={iconClassName}
          error={error}
        />
      </p>
      <InputError error={meta.error} />
    </div>
  );
}

Input.propTypes = {
  meta: PropTypes.object.isRequired,
  input: PropTypes.object.isRequired,
  inputClassName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  iconClassName: PropTypes.string.isRequired
};

Input.defaultProps = {
  label: '',
  inputClassName: '',
  iconClassName: ''
};
