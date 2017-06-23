import * as container from '../NavLink.container';
import { closeMenu } from '../../../../redux/modules/menu.module';


it('should map state to props correctly', () => {
  const ownProps = {
    route: 'route',
    label: 'label'
  };

  const actual = container.mapStateToProps(null, ownProps);
  expect(actual).toMatchSnapshot();
});

it('should map dispatch to props correctly', () => {
  expect(container.mapDispatchToProps).toEqual({
    closeMenu
  });
});
