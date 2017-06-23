import React from 'react';
import { shallow } from 'enzyme';

import NavLogo from '../NavLogo';


it('should render', () => {
  const props = {};

  const wrapper = shallow(
    <NavLogo {...props} />
  );

  expect(wrapper.node).toMatchSnapshot();
});
