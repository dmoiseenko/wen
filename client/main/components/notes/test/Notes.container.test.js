import * as container from '../Notes.container';


it('propsMapper should map props correctly', () => {
  const data = {
    notes: 'notes',
    loading: 'loading',
    subscribeToMore: 'subscribeToMore'
  };

  const actual = container.propsMapper({ data });
  expect(actual).toMatchSnapshot();
});
