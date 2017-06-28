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
const getUserByEmail = require('../getByEmail.user.repository');
const models = require('../../../models/models');
const errors = require('../../../../utils/errors');


const email = 'user email';

it('should query user by email', async () => {
  await getUserByEmail(email);

  expect(models[userMapper.User].findOne).toHaveBeenCalledWith({
    where: {
      [userMapper.email]: 'user email'
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

  await expect(getUserByEmail(email)).rejects.toBeInstanceOf(errors.UserNotFoundError);

  models[userMapper.User].findOne = findOne;
});

it('should return plain user object', async () => {
  const actual = await getUserByEmail(email);

  expect(actual).toEqual('user');
  expect(userInstance.get).toHaveBeenCalledWith({ plain: true });
});
