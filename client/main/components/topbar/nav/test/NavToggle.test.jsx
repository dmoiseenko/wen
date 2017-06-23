import React from 'react';
import { shallow } from 'enzyme';

import NavToggle from '../NavToggle';

const props = {
  openCloseMenu: jest.fn(),
  isOpen: false
};


it('should render closed if isOpen false', () => {
  const wrapper = shallow(
    <NavToggle
      {...props}
    />
  );

  expect(wrapper.node).toMatchSnapshot();
});

it('should render opened if isOpen true', () => {
  const wrapper = shallow(
    <NavToggle
      {...props}
      isOpen
    />
  );

  expect(wrapper.node).toMatchSnapshot();
});

it('should call openCloseMenu when click fires', () => {
  const openCloseMenu = jest.fn();

  const wrapper = shallow(
    <NavToggle
      {...props}
      openCloseMenu={openCloseMenu}
    />
  );

  wrapper.find('.nav-toggle').simulate('click');

  expect(openCloseMenu).toHaveBeenCalled();
});
