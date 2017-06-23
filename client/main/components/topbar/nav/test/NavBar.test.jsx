import React from 'react';
import { shallow } from 'enzyme';

import NavBar from '../NavBar';


it('should render closed if isOpen false', () => {
  const props = {
    isOpen: false
  };

  const wrapper = shallow(
    <NavBar {...props} />
  );

  expect(wrapper.node).toMatchSnapshot();
});

it('should render opened if isOpen true', () => {
  const props = {
    isOpen: true
  };

  const wrapper = shallow(
    <NavBar {...props} />
  );

  expect(wrapper.node).toMatchSnapshot();
});
