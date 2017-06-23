import React from 'react';
import { shallow } from 'enzyme';

import NavLink from '../NavLink';

const props = {
  route: 'route',
  label: 'label',
  closeMenu: jest.fn()
};

it('should render', () => {
  const wrapper = shallow(
    <NavLink {...props} />
  );

  expect(wrapper.node).toMatchSnapshot();
});

it('should call closeMenu when clicks on NavLink', () => {
  const closeMenu = jest.fn();

  const wrapper = shallow(
    <NavLink
      {...props}
      closeMenu={closeMenu}
    />
  );

  wrapper.find('.nav-item').simulate('click');

  expect(closeMenu).toHaveBeenCalled();
});
