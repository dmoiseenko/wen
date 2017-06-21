jest.mock(
  '../../db/repositories/user/getUserById.user.repository.js',
  () => jest.fn().mockReturnValue(Promise.resolve('user'))
);

const userService = require('../user.service');
const getUserById = require('../../db/repositories/user/getUserById.user.repository.js');


describe('getById', () => {
  it('should get user by id from repository', async () => {
    const actual = await userService.getById('id');

    expect(actual).toEqual('user');
    expect(getUserById).toHaveBeenCalledWith('id');
  });
});
