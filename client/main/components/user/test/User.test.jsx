import React from 'react';
import { shallow } from 'enzyme';

import User from '../User';


it('should render', () => {
  const props = {
    data: {
      me: {
        fistName: 'first name',
        lastName: 'last name'
      }
    }
  };

  const wrapper = shallow(
    <User {...props} />
  );

  expect(wrapper.node).toMatchSnapshot();
});
