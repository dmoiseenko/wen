import React from 'react';
import { shallow } from 'enzyme';

import NoteForm from '../NoteForm';


it('should render', () => {
  const wrapper = shallow(
    <NoteForm />
  );

  expect(wrapper.node).toMatchSnapshot();
});
