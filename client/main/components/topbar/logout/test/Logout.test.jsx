import React from 'react';
import { shallow } from 'enzyme';

import Logout from '../Logout';


it('should render', () => {
  const props = {
    logout: jest.fn()
  };

  const wrapper = shallow(
    <Logout {...props} />
  );

  expect(wrapper.node).toMatchSnapshot();
});

it('should call logout when click fires', () => {
  const logout = jest.fn();

  const wrapper = shallow(
    <Logout
      logout={logout}
    />
  );

  wrapper.find('.button').simulate('click');

  expect(logout).toHaveBeenCalled();
});
