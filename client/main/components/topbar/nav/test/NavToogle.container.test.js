import * as container from '../NavToggle.container';
import { openCloseMenu } from '../../../../redux/modules/menu.module';
import * as selector from '../../../../redux/selector/menu.selector';


jest.mock('../../../../redux/selector/menu.selector', () => ({
  isMenuOpenSelector: jest.fn().mockReturnValue('isOpen')
}));

it('should map state to props correctly', () => {
  const actual = container.mapStateToProps('state');

  expect(actual).toMatchSnapshot();
  expect(selector.isMenuOpenSelector).toHaveBeenCalledWith('state');
});

it('should map dispatch to props correctly', () => {
  expect(container.mapDispatchToProps).toEqual({
    openCloseMenu
  });
});
