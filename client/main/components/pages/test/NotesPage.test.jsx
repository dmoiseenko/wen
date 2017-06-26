import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import NotesPage from '../NotesPage';


it('should render', () => {
  const wrapper = shallow(
    <NotesPage />
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});
