import * as container from '../Notification.container';
import * as module from '../../../redux/modules/notifications.module';


it('should map state to props correctly', () => {
  const ownProps = {
    notification: {
      description: 'notification description',
      id: 1,
      type: 'event'
    }
  };

  const actual = container.mapStateToProps({}, ownProps);

  expect(actual).toMatchSnapshot();
});

it('should map dispatch to props correctly', () => {
  const actual = container.mapDispatchToProps;

  expect(actual).toEqual({
    remove: module.removeNotification
  });
});
