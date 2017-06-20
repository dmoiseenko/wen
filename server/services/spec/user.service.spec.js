const userService = require('../user.service');
const bootstrap = require('../../db/bootstrap/bootstrap.js');


describe('getById', () => {
  beforeEach(() => bootstrap());

  it('should get user by id', async () => {
    const actual = await userService.getById(1);

    delete actual.passwordHash;

    expect(actual).toMatchSnapshot();
  });
});
