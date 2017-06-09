jest.mock('../../../../services/user.service');

const userService = require('../../../../services/user.service.js');
const meProcessResolver = require('../me.process.resolver');


it('should call getById with user id from context adn return user', () => {
  const ctx = {
    user: {
      id: 1
    }
  };
  userService.getById.mockReturnValue('user');

  const actual = meProcessResolver({}, {}, ctx);

  expect(actual).toEqual('user');
  expect(userService.getById).toHaveBeenCalledWith(1);
});
