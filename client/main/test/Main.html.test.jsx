import React from 'react';
import { shallow } from 'enzyme';

import MainHtml from '../Main.html';


it('should render', () => {
  const env = process.env.NODE_ENV;

  process.env.NODE_ENV = 'production';

  const props = {
    root: 'root',
    assets: {
      app: {
        css: 'css'
      },
      manifest: {
        js: 'manifest'
      },
      vendor: {
        js: 'vendor'
      }
    },
    state: 'state'
  };

  const wrapper = shallow(
    <MainHtml {...props} />
  );

  expect(wrapper.node).toMatchSnapshot();

  process.env.NODE_ENV = env;
});
