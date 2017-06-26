import * as container from '../Logout.container';
import { logout } from '../../../../redux/modules/logout.module';


it('should map dispatch to props correctly', () => {
  expect(container.mapDispatchToProps).toEqual({
    logout
  });
});
