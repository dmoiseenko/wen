import React from 'react';
import { shallow } from 'enzyme';

import LoginHtml from '../Login.html';


it('should render production html', () => {
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
    }
  };

  const wrapper = shallow(
    <LoginHtml {...props} />
  );

  expect(wrapper.node).toMatchSnapshot();

  process.env.NODE_ENV = env;
});
