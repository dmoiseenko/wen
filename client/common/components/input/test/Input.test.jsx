import React from 'react';
import renderer from 'react-test-renderer';

import Input from '../Input';


it('should render', () => {
  const props = {
    meta: {
      touched: false,
    },
    input: {
      name: 'inputName',
    },
    type: 'inputType',
    label: 'inputLabel',
    placeholder: 'inputPlaceholder',
    inputClassName: 'inputClassName',
    iconClassName: 'iconClassName'
  };

  const tree = renderer.create(
    <Input {...props} />
  );

  expect(tree.toJSON()).toMatchSnapshot();
});

it('should render error', () => {
  const props = {
    meta: {
      touched: true,
      error: 'error'
    },
    input: {
      name: 'inputName',
    },
    type: 'inputType',
    label: 'inputLabel',
    placeholder: 'inputPlaceholder',
    inputClassName: 'inputClassName',
    iconClassName: 'iconClassName'
  };

  const tree = renderer.create(
    <Input {...props} />
  );

  expect(tree.toJSON()).toMatchSnapshot();
});
