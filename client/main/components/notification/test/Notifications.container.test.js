import * as container from '../Notifications.container';
import * as selector from '../../../redux/selector/notification.selector';

jest.mock('../../../redux/selector/notification.selector');
// noinspection JSAnnotator
selector.notifications = jest.fn().mockReturnValue('notifications');

it('should map state to props correctly', () => {
  const actual = container.mapStateToProps();

  expect(actual).toMatchSnapshot();
});
