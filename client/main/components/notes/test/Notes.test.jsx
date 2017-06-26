import React from 'react';
import { shallow } from 'enzyme';

import Notes from '../Notes';


it('should render notes when loading is false', () => {
  const props = {
    loading: false,
    notes: [{
      id: 1
    }]
  };

  const wrapper = shallow(
    <Notes {...props} />
  );

  expect(wrapper.node).toMatchSnapshot();
});

it('should not render notes when loading is true', () => {
  const props = {
    loading: true,
    notes: [{
      id: 1
    }]
  };

  const wrapper = shallow(
    <Notes {...props} />
  );

  expect(wrapper.node).toMatchSnapshot();
});
