const authService = require('../auth.service');
const bootstrap = require('../../db/bootstrap/bootstrap.js');


describe('login', () => {
  beforeEach(() => bootstrap());

  it('should provide auth token', async () => {
    const actual = await authService.login({ email: 'js@mail.com', password: 'password' });

    expect(actual).toMatchSnapshot();
  });
});
