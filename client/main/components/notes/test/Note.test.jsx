import React from 'react';
import { shallow } from 'enzyme';

import Note from '../Note';


it('should render', () => {
  const props = {
    note: {
      text: 'note text'
    }
  };

  const wrapper = shallow(
    <Note {...props} />
  );

  expect(wrapper.node).toMatchSnapshot();
});
