const userInstance = {
  get: jest.fn(() => 'user')
};
const findOne = jest.fn(() => userInstance);
jest.doMock('../../../models/models', () => ({
  User: {
    findOne
  }
}));

const userMapper = require('../../../mappers/user.mapper');
const commonMapper = require('../../../mappers/common.mapper');
const getUserById = require('../getUserById.user.repository');
const models = require('../../../models/models');
const errors = require('../../../../utils/errors');


const id = 'user id';

it('should query user by id', async () => {
  await getUserById(id);

  expect(models[userMapper.User].findOne).toHaveBeenCalledWith({
    where: {
      [commonMapper.id]: 'user id'
    },
    attributes: [
      commonMapper.id,
      userMapper.email,
      userMapper.lastName,
      userMapper.passwordHash,
      userMapper.fistName
    ]
  });
});

it('should throw UserNotFoundError if user was not found', async () => {
  models[userMapper.User].findOne = jest.fn(() => null);

  await expect(getUserById(id)).rejects.toBeInstanceOf(errors.UserNotFoundError);

  models[userMapper.User].findOne = findOne;
});

it('should return plain user object', async () => {
  const actual = await getUserById(id);

  expect(actual).toEqual('user');
  expect(userInstance.get).toHaveBeenCalledWith({ plain: true });
});
