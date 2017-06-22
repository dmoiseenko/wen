import * as container from '../LoginForm.container';


it('should map dispatch to actions correctly', () => {
  expect(container.mapDispatchToProps).toMatchSnapshot();
});

it('should setup from correctly', () => {
  expect(container.form).toMatchSnapshot();
});
