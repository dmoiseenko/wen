import * as container from '../NavBar.container';
import * as selector from '../../../../redux/selector/menu.selector';


jest.mock('../../../../redux/selector/menu.selector', () => ({
  isMenuOpenSelector: jest.fn().mockReturnValue('isOpen')
}));

it('should map state to props correctly', () => {
  expect(container.mapStateToProps('state')).toMatchSnapshot();
  expect(selector.isMenuOpenSelector).toHaveBeenCalledWith('state');
});
