import React from 'react';
import renderer from 'react-test-renderer';

import InputIcon from '../InputIcon';


it('should render without error', () => {
  const props = {
    iconClassName: 'iconClassName',
    error: false
  };

  const tree = renderer.create(
    <InputIcon {...props} />
  );

  expect(tree.toJSON()).toMatchSnapshot();
});

it('should render with error', () => {
  const props = {
    iconClassName: 'iconClassName',
    error: true
  };

  const tree = renderer.create(
    <InputIcon {...props} />
  );

  expect(tree.toJSON()).toMatchSnapshot();
});
