import React from 'react';
import renderer from 'react-test-renderer';

import InputLabel from '../InputLabel';


it('should render', () => {
  const props = {
    label: 'label'
  };

  const tree = renderer.create(
    <InputLabel {...props} />
  );

  expect(tree.toJSON()).toMatchSnapshot();
});
